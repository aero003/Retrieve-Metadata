trigger TriggerUpdatePortalNotes on Note (after update, after insert) {
  /*  for (Note L : Trigger.new) {

       if(L != null  && !String.isBlank(L.Id))
        {
            PortalServiceHelper.SyncEntity('note', JSON.serialize(L));
        }
    } */
}