trigger ConsensusOpportunityTrigger on Opportunity (after insert, after update) {
   /* if(Label.Consensus_Trigger_Switch == 'true') {
        Map<Id, Opportunity> oppOldMap = (Map<Id, Opportunity>)Trigger.oldMap;
        Map<Id, Opportunity> oppNewMap = (Map<Id, Opportunity>)Trigger.newMap;
        
        Consensus_InvoiceCreationHelper obj = new Consensus_InvoiceCreationHelper();
        
        if(Trigger.isInsert) {
            obj.insertOppRelatedInvRecords(oppNewMap);
        }
        
        if(Trigger.isupdate) {
            obj.updateOppRelatedInvRecords(oppOldMap, oppNewMap);    
        }
    }*/
}