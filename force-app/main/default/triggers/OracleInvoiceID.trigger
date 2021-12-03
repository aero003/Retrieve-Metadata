trigger OracleInvoiceID on Invoice__c (/*After Update,*/ Before Update) {

    // Additional condition to overlook the trigger if 
    // it is being provoked by user who imports the data 
    if(UserInfo.getProfileId() == '00e0j000000Du3mAAC')
    {
        return;
    }

    List<Invoice__c> invoiceToBeUpdated = new List<Invoice__c>();
    Map<Id, List<Invoice__c>> accountIdToInvoices = new Map<Id, List<Invoice__c>>();
    Set<Id> accountId = new Set<Id>();

    Map<Id,String> inv_BrDate_map = new Map<Id,String>();

    for(Invoice__c invoice: Trigger.New){
        accountId.add(invoice.Account__c);
        system.debug('accountId----->'+accountId);
        inv_BrDate_map.put(invoice.Id, invoice.Text_Brdate__c);
    }
    //List of all the invoices having oracle invoice id with status active and recordtype keepitsafeNL in Ascending order by created date
    //We can assign oracle invoice id to the blank one using this list
    List<Invoice__c> LstInvoiceinASCOrder1 = [SELECT id,Amount__c,Amount_KeepitsafeNL__c,Account__c,status__c,Oracle_Invoice_ID__c,/* Line_Number1__c,*/ Account__r.recordtype.name FROM Invoice__c WHERE Account__c IN:accountId and status__c='Active' and (Account__r.recordtype.name = 'KeepItSafeNL' OR Account__r.recordtype.name = 'KeepItSafe') and Oracle_Invoice_ID__c!=null ORDER BY CreatedDate ASC];
    //Iterating over list to fill map which contains account id as key and invoices as values
    for(Invoice__c inv : LstInvoiceinASCOrder1) {
        if(!accountIdToInvoices.containsKey(inv.Account__c)){   
            accountIdToInvoices.put(inv.Account__c, new List<Invoice__c>());
        }
        accountIdToInvoices.get(inv.Account__c).add(inv); 
    }  

    System.Debug('AccountIdToInvoices size : ' + accountIdToInvoices.size());

    List<Invoice__c> listOfInvoices = new List<Invoice__c>();

    if(Trigger.IsBefore)
    {
        //Check boolean for recursive trigger
        if(OracleInvoiceIdStaticBoolean.isRunOneTime)
        {
            //List of all the invoices whose oracle invoice id needs to be updated.
            List<Invoice__c> lstInvoice = [select id, Status__c, TRX_Date_Calc_NewMonth__c, Billing_Run_Date__c, BilledCustomerID__c, Audit_Send_Bill_To__c,Text_Brdate__c, Invoice_ID__c, Account__c,/* Line_Number1__c,*/ Oracle_Invoice_ID__c,Account__r.name,Account__r.recordtypeId, Account__r.recordtype.name from Invoice__c where ID IN: Trigger.New];

            for(Invoice__c updtInvoice: lstInvoice)
            {
                System.Debug('Text br :' + updtInvoice.Text_Brdate__c);
                System.Debug('BRD :' + updtInvoice.Billing_Run_Date__c);
                if(updtInvoice.status__c == 'Active')
                {                
                    if(updtInvoice.Account__r.recordtype.name.contains('KeepItSafe'))
                    {
                        String brDate = inv_BrDate_map.get(updtInvoice.Id);
                        //updtInvoice.Oracle_Invoice_ID__c = 'C'+updtInvoice.Text_Brdate__c+updtInvoice.Invoice_ID__c;
                        updtInvoice.Oracle_Invoice_ID__c = 'C'+brDate+updtInvoice.Invoice_ID__c;
                        system.debug('Oracle invoice id for keepitsafe '+updtInvoice.Oracle_Invoice_ID__c);
                        listOfInvoices.add(updtInvoice);
                    }
                }           
            }

            for(Invoice__c invoiceTemp : Trigger.New)
            {
                for(Invoice__c inv : listOfInvoices)
                {
                    if(inv.Id == invoiceTemp.Id)
                    invoiceTemp.Oracle_Invoice_ID__c = inv.Oracle_Invoice_ID__c;
                    system.debug('Oracle invoice id for Trigger New : '+invoiceTemp.Oracle_Invoice_ID__c);
                }
            }
        }
    }

    //Logic to update line number and amount for every invoice for a particular account
    if(accountId.size()>0){
        Map<id,List<Invoice__c>> InvcAccMap = new Map<id,List<Invoice__c>>();
        List<Invoice__c> LstInvoiceinASCOrder = [SELECT id,Amount__c,Amount_KeepitsafeNL__c,Discount_Amount__c,Account__c,status__c,Oracle_Invoice_ID__c,Line_Number1__c,Account__r.recordtype.name FROM Invoice__c WHERE Account__c IN:accountId and status__c='Active' and (Account__r.recordtype.name = 'KeepItSafeNL' OR Account__r.recordtype.name = 'KeepItSafe') ORDER BY CreatedDate ASC];
        List<Invoice__c> lstTOUpdateInvoice = new List<Invoice__c>();
        
        if(OracleInvoiceIdStaticBoolean.isRunOneTime){            
            for(Invoice__c inv : LstInvoiceinASCOrder) {
                if(!InvcAccMap.containsKey(inv.Account__c)){   
                    InvcAccMap.put(inv.Account__c, new List<Invoice__c>());
                }
                InvcAccMap.get(inv.Account__c).add(inv);    
            }  
            for(id acntID : InvcAccMap.keyset()){
                List<Invoice__c> relatedInvoiceList= InvcAccMap.get(acntID); 
                Decimal temp = 0;
                Decimal temp2 = 0;
                system.debug('relatedInvoiceList.size()-------->'+relatedInvoiceList.size());
                for(Integer I=0; I<relatedInvoiceList.size(); i++){

                    system.debug('relatedInvoiceList.get(I).Line_Number1__c-------->'+relatedInvoiceList.get(I).Line_Number1__c);   
                    system.debug('relatedInvoiceList.get(I).Line_Number1__c-------->'+relatedInvoiceList.get(I).Line_Number1__c); 

                    //Update total amount as sum of all the invoices on every invoice related to partner account
                    if(relatedInvoiceList.get(I).Amount__c != null) {
                        temp = temp + relatedInvoiceList.get(I).Amount__c;
                        if(relatedInvoiceList.get(I).Discount_Amount__c != null)
                        temp2 = temp2 + relatedInvoiceList.get(I).Discount_Amount__c;
                    }        
                }
                for(Integer I=0; I<relatedInvoiceList.size(); i++){
                    
                    //Update total amount as sum of all the invoices on every invoice related to partner account
                    if(relatedInvoiceList.get(I).Amount__c != null) {
                    relatedInvoiceList.get(I).Amount_KeepitsafeNL__c = temp-temp2;
                    }
                }
                
                lstTOUpdateInvoice.addAll(relatedInvoiceList);
            }            
            List<Invoice__c> LstInvoiceInactiveASCOrder = [SELECT id, BilledCustomerID__c, Amount__c,Amount_KeepitsafeNL__c,Discount_Amount__c,Account__c,status__c,Oracle_Invoice_ID__c,Line_Number1__c,Account__r.recordtype.name FROM Invoice__c WHERE Account__c IN:accountId and status__c='Inactive' and (Account__r.recordtype.name = 'KeepItSafeNL' OR Account__r.recordtype.name = 'KeepItSafe') ORDER BY CreatedDate ASC];
            for(Invoice__c invc : LstInvoiceInactiveASCOrder){             
                for(Invoice__c invTemp : Trigger.New)
                {
                    if(invc.Id == invTemp.Id)
                    {
                        invTemp.Oracle_Invoice_ID__c = null; 
                        invTemp.Amount_KeepitsafeNL__c = 0;
                        invTemp.Discount_Amount__c = 0;
                    }
                }
            }
        }
    }
}