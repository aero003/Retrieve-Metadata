trigger AccountTriggerCustomerId on Account (before insert, before update) {
/*
    // Disabling trigger for Invoice record insertion
    if( UserInfo.getUserId() == '00503000000FTzbAAG'){
        return;
    }

    system.debug('account trigger');
    List<Account> lstAccountKIS = new List<Account>();
    for(Account acc: Trigger.new){
        if(!string.isEmpty(acc.RecordTypeId) || acc.Account_Record_Type_Hidden__c == 'KeepItSafe: Lead'){
            string recordtypename = Schema.SObjectType.Account.getRecordTypeInfosById().get(acc.recordtypeid).getname();
            if(recordtypename.contains('KeepItSafe') || acc.Account_Record_Type_Hidden__c == 'KeepItSafe: Lead'){
                lstAccountKIS.add(acc);
            }
        }
    }

    
    //check account trigger switch and if list of KIS account is greater than 0
    if((System.Label.AccountCustomerIDTriggerSwitch == 'On' || System.Label.AccountCustomerIDTriggerSwitch == '') && lstAccountKIS.size() > 0){       
        AccountTriggerCustomerIdHandler handler = new AccountTriggerCustomerIdHandler(Trigger.isExecuting, Trigger.size);
        handler.onBeforeInsertUpdate(trigger.new, trigger.isinsert );
    }*/
}