trigger AccountTrigger on Account (before insert, before update, after insert, after update, before delete) {
/*
    public static String KIE_RecordTypeId = Schema.SObjectType.Account.RecordTypeInfosByName.get('KeepItSafe').RecordTypeId;
    
    System.debug('Trigger.new = ' + Trigger.new);    
    if(Trigger.isupdate){
        System.debug('update called');
    }
    if (Trigger.isBefore)
    {
        KeepItSafeNLAccountHandler.KeepItSafeNLUpdateAccountOwners(Trigger.oldMap,Trigger.new);
    }
    if (Trigger.isAfter)
    {   
        // Update Owners of Contacs if needed
        KeepItSafeNLAccountHandler.KeepItSafeNLUpdateChildAccountOwners(Trigger.oldMap,Trigger.new);
        KeepItSafeNLAccountHandler.KeepItSafeNLUpdateContacOwners(Trigger.oldMap,Trigger.new);
    }

    if (Trigger.isAfter) 
    {
        if (Trigger.isInsert) 
        {
            AccountTriggerHandler.doAfterInsert(Trigger.newMap);
        } 
        else if (Trigger.isUpdate) 
        {
            AccountTriggerHandler.doAfterUpdate(Trigger.oldMap, Trigger.newMap);
        }
    }*/
}