trigger OracleInvoiceIDNewBusiness on Invoice__c (Before Update) {
    List<Id> invoiceIds = new List<Id>();
    List<Id> AccountIds = new List<Id>();

    for(Invoice__c inv : Trigger.New)
    {
        AccountIds.add(inv.Account__c);
        invoiceIds.add(inv.Id);
    }

    List<Account> accounts = [SELECT Id, Name, RecordType.DeveloperName FROM Account WHERE Id IN : AccountIds];
    List<Id> accountIdsWithCorrectRecordType = new List<Id>();
    for(Account accTmp : accounts)
    {
        if(accTmp.RecordType.DeveloperName.contains('KeepItSafe'))
        {
            accountIdsWithCorrectRecordType.add(accTmp.Id);
        }
    }
    
    List<Invoice__c> invoices = [SELECT Id, Oracle_Invoice_ID_NB__c, BilledCustomerID__c, Text_BrdateNB__c, Invoice_ID__c FROM Invoice__c WHERE Id IN :invoiceIds AND Account__c IN :accountIdsWithCorrectRecordType];

    for(Invoice__c invTmp : invoices)
    {
        // Workaround for trigger to update values
        for(Invoice__c i : Trigger.New)
        {
            if(i.Id == invTmp.Id)
            {
                i.Oracle_Invoice_ID_NB__c = 'N' + invTmp.Text_BrdateNB__c + invTmp.Invoice_ID__c;
                System.Debug('The Oracle invoice ID NB value : ' + i.Oracle_Invoice_ID_NB__c);
            }
        }
    }
}