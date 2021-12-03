trigger TriggerUpdatePortalOpportunity on Opportunity (after update, after insert) {
/*
    for (Opportunity  L : Trigger.new) {
       if(L != null  && !String.isBlank(L.Id) && (String.isBlank(PortalServiceHelper.config.OpportunityRecordTypeId__c) || L.RecordTypeId == PortalServiceHelper.config.OpportunityRecordTypeId__c))
            {
                PortalServiceHelper.SyncEntity('opportunity', JSON.serialize(L));
            }
        } */
}