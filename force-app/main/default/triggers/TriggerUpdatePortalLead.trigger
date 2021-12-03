trigger TriggerUpdatePortalLead on Lead (after update, after insert) {
  /*  for (Lead  L : Trigger.new) {
    system.debug('syncing lead trigger:');
        if(L != null  && !String.isBlank(L.Id) && (String.isBlank(PortalServiceHelper.config.LeadRecordTypeId__c) || L.RecordTypeId == PortalServiceHelper.config.LeadRecordTypeId__c))
            {
                PortalServiceHelper.SyncEntity('lead', JSON.serialize(L));
            }
    }*/
}