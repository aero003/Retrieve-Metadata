trigger emailMessages on EmailMessage (after insert) {
	emailMessages.afterInsert(trigger.new);
}