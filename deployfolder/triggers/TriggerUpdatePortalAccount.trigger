trigger TriggerUpdatePortalAccount on Account(after update, after insert) {
   /* for (Account L : Trigger.new) {
        
        if(L != null  && !String.isBlank(L.Id) && PortalServiceHelper.config != null && (String.isBlank(PortalServiceHelper.config.AccountRecordTypeId__c) || 
        L.RecordTypeId == PortalServiceHelper.config.AccountRecordTypeId__c) && L.RecordTypeId != Label.Zintel_NZ_AccountRT)
        {
            PortalServiceHelper.SyncEntity('account', JSON.serialize(L));
        }
    } */
}