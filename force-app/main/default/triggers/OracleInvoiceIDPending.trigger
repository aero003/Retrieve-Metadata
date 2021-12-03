trigger OracleInvoiceIDPending on Invoice__c (before insert, before update) {
    Map<Id,Account> accMap = new Map<Id,Account>([SELECT Id,RecordTypeId, RecordType.Name FROM Account where Recordtype.Name LIKE 'KeepItSafe%']);
    if(trigger.isupdate){
        for(Invoice__c a:trigger.new){
            if(accMap.containskey(a.Account__c)) {
                IF((a.Status__c=='Pending'|| a.Status__c =='Inactive') && accMap.get(a.Account__c).RecordType.Name.contains('KeepItSafe')){
                    a.Oracle_Invoice_ID__c = Null; 
                    a.Oracle_Invoice_ID_NB__c = Null;
                }
            }
        }
    }
}