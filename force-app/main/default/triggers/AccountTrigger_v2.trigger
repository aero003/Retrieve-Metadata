trigger AccountTrigger_v2 on Account (before insert, before update, after insert, after update)
{
    if(Trigger.isBefore)
    {
        if(Trigger.isInsert)
        {
            AccountTriggerHandler_v2.BeforeInsertEvent(Trigger.new, Trigger.newMap, Trigger.oldMap, Trigger.isUpdate);
        }
        else if(Trigger.isUpdate) 
        {
            AccountTriggerHandler_v2.BeforeUpdateEvent(Trigger.new, Trigger.newMap, Trigger.oldMap, Trigger.isUpdate);
        }
    }
    else if(Trigger.isAfter)
    {
        if(Trigger.isInsert)
        {
            AccountTriggerHandler_v2.AfterInsertEvent(Trigger.new, Trigger.newMap, Trigger.oldMap, Trigger.isUpdate);
            // Handle all features in one function (can add function helpers with return statements - if that is possible)
            // - One update call at the end of the file
            
        }
        else if(Trigger.isUpdate) 
        {
            AccountTriggerHandler_v2.AfterUpdateEvent(Trigger.new, Trigger.newMap, Trigger.oldMap, Trigger.isUpdate);
            // Handle all features in one function (can add function helpers with return statements)
            // - One update call at the end of the file            
        }
    }

}