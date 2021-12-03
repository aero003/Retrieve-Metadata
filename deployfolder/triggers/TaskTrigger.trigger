trigger TaskTrigger on Task (after insert, after update) {
    if (Trigger.isinsert)
    {
        TaskClass.afterInsert(trigger.new);
    }
    if (Trigger.isupdate)
    {
        TaskClass.afterUpdate(trigger.old);
    }
}