trigger EmailMessageTrigger on EmailMessage (after insert) {


  EmailMessageTriggerHandler handler = new EmailMessageTriggerHandler();

  if (Trigger.isAfter) {
    if (Trigger.isInsert) {
      handler.doAfterInsert(Trigger.new);
    }
  }
}