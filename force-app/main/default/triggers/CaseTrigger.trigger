trigger CaseTrigger on Case (after insert, after update) {

	CaseTriggerHandler handler = new CaseTriggerHandler();

	System.debug('####' + trigger.new.get(0).Oracle_Attachment_Ids__c);

	if (Trigger.isAfter) {
		if (Trigger.isInsert) {
			handler.doAfterInsert(Trigger.newMap);
		} else if (Trigger.isUpdate) {
			handler.doAfterUpdate(Trigger.oldMap, Trigger.newMap);
		}
	}

}