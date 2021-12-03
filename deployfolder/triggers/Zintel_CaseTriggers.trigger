trigger Zintel_CaseTriggers on Case (after update) {
    
    Id rid = [select id from RecordType where Name=: Label.Zintel_Case_RT].Id;
    list <Case> caseList  = [select id,OwnerId,Status from Case where Id IN : Trigger.newMap.Keyset() and RecordTypeId =:rid];
    list <Case> taskCreationlist = new list <Case>();
    System.System.debug('case list'+ caseList.size());
    Integer remainingRows = Limits.getLimitQueryRows() - Limits.getQueryRows();
    System.debug('remainingRows: '+ remainingRows);
   // list <Group> glist = [select id,Name from Group];
    //System.System.debug('glist list'+ glist.size());
    Map <Id, List<Task>> caseTaskMap = new Map <Id, List<Task>>();
    Set <Id> caseId = new Set<Id>();
    for(Case c: caseList){
        caseId.add(c.Id);
    }
    list <Task> tlist = [select id,WhatId from Task where WhatId in: caseId and (Status != 'Completed' AND Status != 'Cancelled')];
    System.System.debug('tlist list'+ tlist.size());
    if(Trigger.isUpdate){       
        for(Case c:caseList){ 
            
            if(c.Status == 'Resolved'){
                for(Task t: tlist){
                   if(c.Id == t.WhatId){ 
                       Case actualcase = Trigger.Newmap.get(c.id);
                       actualcase.addError('Case Cannot be closed as it has Open Tasks');
                   } 
                }
            }
            
        
            String oname;
            if(Trigger.OldMap.get(c.Id).OwnerId != null)
            {
                Id grouId  = Trigger.OldMap.get(c.Id).OwnerId; 
                List<Group> groupCount = [SELECT Id FROM Group WHERE Id =: grouId];
                if(groupCount.size() > 0)
                {
                    Group g = [select id,Name from Group where Id =: grouId];
                    //for(Group g:glist){
                    if(g != null)
                    {
                        if(g.Id == Trigger.OldMap.get(c.Id).OwnerId)
                        {
                            oname = g.Name;
                        }
                    }
                }
                //}
            }
            String nname = Trigger.newMap.get(c.Id).OwnerId;
            
            system.debug('oname' + oname);
            system.debug('nname' + nname);
            if(oname == 'Zintel Service Support Queue'||oname == 'Zintel NZ Sales Queue'||oname == 'Zintel NZ Provisioning Queue'||oname == 'Zintel NZ Finance Queue'||oname == 'Zintel NZ Billing Queue'|| oname == 'Zintel NZ Other/Misc Queue' && nname.startswith('005')){
                taskCreationlist.add(c);
            }
        }
        
        if(!taskCreationlist.isEmpty()){
            ZintelCaseClass zcc = new ZintelCaseClass ();
            zcc.taskCreation(taskCreationlist);
        }
        
        
    }
}