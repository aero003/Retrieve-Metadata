trigger AttachmentTrigger on Attachment (After insert) {

  AttachmentTriggerHandler handler = new AttachmentTriggerHandler();

  System.debug('In AttachmentTrigger');

  if (Trigger.isAfter) {
    if (Trigger.isInsert) {
      handler.doAfterInsert(Trigger.new);
    }
  }
   
}