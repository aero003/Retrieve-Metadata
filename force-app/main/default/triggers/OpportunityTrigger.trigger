trigger OpportunityTrigger on Opportunity  (after update, after insert, before insert) 
{
    // Disabling trigger for Invoice record insertion
    if(UserInfo.getUserId() == '00532000005Puhf' ||
        UserInfo.getUserId() == '0050e000006aJMl' ||
        UserInfo.getUserId() == '0050e000007CNhF' ||
        UserInfo.getUserId() == '00e60000000inCb')
    {
        return;
    }

 /*  if(Trigger.isAfter)
    {        
        if(Trigger.isInsert){
            opportunityTriggerHandler.updateAccountKISProducts(Trigger.new);            
        }
        else{
            opportunityTriggerHandler.createInvoicesForOpportunities(Trigger.new);            
        }          
    }*/
    
    //changed to After for testing purposes
    if(Trigger.isInsert && Trigger.isAfter)
    {        
        OpportunityTriggerHandler.updateAccountKISProducts(Trigger.new); 
    }
    if(Trigger.isAfter)
    {
        OpportunityTriggerHandler.createInvoicesForOpportunities(Trigger.new);
        OpportunityTriggerHandler.updateAccountProduct(Trigger.new);
    }          
}