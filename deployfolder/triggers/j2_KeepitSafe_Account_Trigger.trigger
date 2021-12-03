trigger j2_KeepitSafe_Account_Trigger on Account (after update) {
    
 /*   Map<Id, Account> mapOfNewAccount = (Map<Id, Account>)Trigger.newMap;
    Map<Id, Account> criteriaMeetAccounts = new Map<Id, Account>();
    
    Map<Id,Account> accMap = new Map<Id,Account>([SELECT Id,RecordTypeId, RecordType.Name 
                                                  FROM Account 
                                                  WHERE Recordtype.Name LIKE 'KeepItSafe%' AND Id IN : mapOfNewAccount.keySet()]);
    
    for(Account a : trigger.new){
        if(accMap.containskey(a.Id)) {
            if(accMap.get(a.Id).RecordType.Name.contains('KeepItSafe') && a.Account_Status__c == 'Closed'){
                criteriaMeetAccounts.put(a.Id,a);
            }
        }
    }
    if(!criteriaMeetAccounts.isEmpty()){
        j2_KeepitSafe_InvoiceUpdateClass invClass = new j2_KeepitSafe_InvoiceUpdateClass ();
        invClass.invoiceUpdate(criteriaMeetAccounts);           
    }*/
}