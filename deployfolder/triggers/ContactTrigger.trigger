trigger ContactTrigger on Contact (after insert, after update, before insert, before update) {

    // Disabling trigger for Invoice record insertion
    if(UserInfo.getUserId() == '00532000005Puhf' ||
    UserInfo.getUserId() == '0050e000006aJMl' ||
    UserInfo.getUserId() == '0050e000007CNhF' ||
    UserInfo.getUserId() == '00e60000000inCb')
    {
        return;
    }

    ContactTriggerHandler handler = new ContactTriggerHandler();
    if (Trigger.isAfter) {
        
        ContactTriggerHandler.doAfterInsrtUpdt(Trigger.newMap);
        if (Trigger.isInsert) {
            handler.doAfterInsert(Trigger.newMap);
        } else if (Trigger.isUpdate) {
            handler.doAfterUpdate(Trigger.oldMap, Trigger.newMap);
        }
    }
    else{
        handler.doBeforeInsrtUpdt(Trigger.new);
        handler.updateKISNLContactSalesOwners(Trigger.new);
    }
}