trigger Zintel_Triggers on Opportunity (after insert,after update) {
    /*
    try{        
        List <Opportunity> oppList = [select id,Name,StageName,OwnerId,Owner.ManagerId,Account.Name,Estimate_Value_Excl_Settlement_GST__c from Opportunity where ID IN: Trigger.newMap.Keyset()];
        List <Opportunity> wonOppList = new List <Opportunity> ();
        OpportunityProcessingClass oppProcClass = new OpportunityProcessingClass ();
        
        //All Closed Opprtunities for Zintel - NZ
        for(Opportunity opp:oppList){
            if(opp.StageName == '100%-Won (Paperwork Rec\'d/Credit Appv\'d)'){
                wonOppList.add(opp);
            }
        }
        
        if(!wonOppList.isEmpty()){
            //oppProcClass.processWonOpportunities(wonOppList);
        }
    }catch(exception e){
        e.getMessage();
    }

    */
}