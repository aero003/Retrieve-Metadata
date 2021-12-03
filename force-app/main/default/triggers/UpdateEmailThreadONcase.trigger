trigger UpdateEmailThreadONcase on EmailMessage (after insert, after update) 
{
    try
    {
        Set<id> CaseIDs = NEW Set<id>();
        for(EmailMessage incoming:Trigger.New)
          {
            CaseIDs.add(incoming.parentid);
          }
        List<Case> CasesToUpdate = New List<Case>();
        CasesToUpdate=[Select id,email_thread__c from Case where id in:CaseIDs];
        for(EmailMessage incoming:Trigger.New)
        {
            for(Case existing:CasesToUpdate)
            {        
                if(incoming.parentid==existing.id)
                {
                    existing.email_thread__c=existing.email_thread__c+ '\n\n\n--------------- New Message ---------------\n' +'\nFrom:'+incoming.fromname + '[' + incoming.FromAddress + ']' +'\nSent:'+ incoming.MessageDate +'\nTo:' + incoming.ToAddress + ' \nSubject: '+ incoming.Subject + '\n\nBody:\n ' + incoming.textbody;
                }
            }
        }
        if(CasesToUpdate.size()<>0)
        {
            update CasesToUpdate;
        }
    }
    catch(exception e)
    {
    
    }
}