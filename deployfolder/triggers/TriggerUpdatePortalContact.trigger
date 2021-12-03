trigger TriggerUpdatePortalContact on Contact(after update, after insert) {
  /*  for (Contact L : Trigger.new) {
    if(L != null  && !String.isBlank(L.Id) && (String.isBlank(PortalServiceHelper.config.ContactRecordTypeId__c) || L.RecordTypeId == PortalServiceHelper.config.ContactRecordTypeId__c))
        {
            PortalServiceHelper.SyncEntity('contact', JSON.serialize(L));
        }
       
    
    }*/
}