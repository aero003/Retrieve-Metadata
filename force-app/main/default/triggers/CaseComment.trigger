trigger CaseComment on CaseComment (After insert, After update) {
    List<Case> caseUpdates = new List<Case>();
    Set<Id> caseIds = new Set<Id>();
    for ( CaseComment cc: trigger.New ){
      //check if added CaseComment is related to case or not
        if ( cc.parentId != null && string.valueOf(cc.parentId).subString(0,3) == '500' )  {
          caseIds.add(cc.parentId);
        }      
      }
     for(Case cs : [Select Id from Case where Id IN: caseIds]){
        caseUpdates.add(cs);
      }
if(caseUpdates.size() > 0)
  update caseUpdates; 

}