trigger accountHierarchy_keepItSafe_LiveVault_trigger on Account (before insert,before update) {
   /*
    //create new map for newly inserted/updated account

    Map<Id, Account> acclist = Trigger.newMap;
    
    //initialize three list, i) for special attention, ii) high revenue, iii) Support Level and iV) when parent account is updated
    list <Account> updaterecords = new list <Account> ();
    list <Account> updateFromParentRecords_hr = new list <Account> ();
    
    //List <RecordType> rIdlist = [Select Name,Id,sobjecttype From RecordType where (Name like '%KeepItSafe%' or Name like '%LiveVault%' ) and sobjecttype='Account'];
    //new map of record type with ID
    Map<ID, RecordType> rIdMap = new Map<Id, RecordType>([Select Name,Id,sobjecttype From RecordType where (Name like '%KeepItSafe%' or Name like '%LiveVault%' ) and sobjecttype='Account']);
    
    //grab children of all account (done before hand to avoid query in for loop)
    List<Account> globalChildAccount = new List<Account>();
    if(Trigger.isUpdate){
        globalChildAccount = [Select ID,parentId,Special_Attention__c,High_Revenue__c from Account where parentId in :Trigger.newMap.keyset()];
        system.debug('globalChildAccount------>'+globalChildAccount);    
    }
    List<ID> allParentID = new List<ID>();
    
    
    if(trigger.IsBefore && trigger.IsInsert){
        for(Account a : Trigger.new){
            if( string.isNotEmpty(a.ParentId) ){
                allParentID.add(a.ParentID);
            }
        }
    } else {
        for(Account a: acclist.values()){
            if( string.isNotEmpty(a.ParentId) ){
                allParentID.add(a.ParentID);
            }
        }
    }
    //grab all parent account(will be useful if parent account is updated)
    List<Account> globalParentAccount = [Select ID,parentId,Special_Attention__c,High_Revenue__c,Support_Level__c from Account where ID in :allParentID];
    
    // for loop of inserted/updated account 
    if(trigger.isupdate){
        Boolean needsUpdate = false;

        for(Account a : acclist.values()){
            system.debug('account id is ' + a.Id);
            
            
            //condition to check if special attention field is updated or not
            system.debug('rIdMap------>'+rIdMap);
            system.debug('SA tr. old : ' + Trigger.oldMap.get(a.ID).Special_Attention__c);
            if(rIdMap.containsKey(a.RecordTypeId)  && (Trigger.oldMap.get(a.ID).Special_Attention__c != a.Special_Attention__c )){
                system.debug('special attention old value :: ' + Trigger.oldMap.get(a.ID).Special_Attention__c);
                system.debug('special attention new value :: ' + a.Special_Attention__c);
                system.debug('globalChildAccount------>'+globalChildAccount);
                //looping through list of globalchildAccount to get child accounts of this particular account
                for(Account cldAcc: globalChildAccount){
                    if(cldAcc.ParentId == a.Id){
                        cldAcc.Special_Attention__c = a.Special_Attention__c;
                        //add to special attention list, which we will update at the end
                        if(!updaterecords.contains(cldAcc))
                        {
                            updaterecords.add(cldAcc);
                        }
                        needsUpdate = true;
                    }
                }
            }
            //check if high revenue field is udpated
            if(rIdMap.containsKey(a.RecordTypeId)  && (Trigger.oldMap.get(a.ID).High_Revenue__c != a.High_Revenue__c )){
                //looping through list of globalchildAccount to get child accounts of this particular account
                for(Account cldAcc: globalChildAccount){
                    if(cldAcc.ParentId == a.Id){
                        cldAcc.High_Revenue__c = a.High_Revenue__c;
                        //add to high revenue list, which we will update at the end
                        if(!updaterecords.contains(cldAcc))
                        {
                            updaterecords.add(cldAcc);
                        }
                        needsUpdate = true;
                    }
                }
            }
            //check if Support Level field is udpated or not
            if(rIdMap.containsKey(a.RecordTypeId)  && (Trigger.oldMap.get(a.ID).Support_Level__c != a.Support_Level__c )){
                //looping through list of globalchildAccount to get child accounts of this particular account
                for(Account cldAcc: globalChildAccount){
                    if(cldAcc.ParentId == a.Id){
                        cldAcc.Support_Level__c = a.Support_Level__c;
                        //add to high revenue list, which we will update at the end
                        if(!updaterecords.contains(cldAcc))
                        {
                            updaterecords.add(cldAcc);
                        }
                        needsUpdate = true;
                    }
                }
            }
            //check condition if parent id is updated or not
            if(rIdMap.containsKey(a.RecordTypeId)  && (Trigger.oldMap.get(a.ID).ParentId != a.ParentId )){
                //Account parentAcc = [Select ID,High_Revenue__c, Special_Attention__c,Support_Level__c from Account where ID = : a.ParentId][0];
                Account parentAcc = new Account();
                for(Account prntAcc : globalParentAccount){
                    if(prntAcc.ID == a.ParentId){
                        parentAcc = prntAcc;
                    }
                }
                //if parent is not null then add add parent to list, which we will update later.
                if(parentAcc != null)
                {
                    a.High_Revenue__c = parentAcc.High_Revenue__c;
                    a.Special_Attention__c = parentAcc.Special_Attention__c;
                    a.Support_Level__c = parentAcc.Support_Level__c;
                    if(!updaterecords.contains(a))
                    {
                        updaterecords.add(a);
                    }
                    needsUpdate = true; 
                }
            }
        }
        if(needsUpdate)
        {
            update updaterecords;
        }
    }
    else {
        for(Account a : Trigger.new){
            //if trigger is insert -> which means there cannot be any child of it, we will only check condition of parent
            if(rIdMap.containsKey(a.RecordTypeId)  && ( string.isNotEmpty(a.ParentId) )){
                system.debug('parent id is :: ' + a.ParentId);
                
                //get parent account id
                Account parentAcc = new Account();
                for(Account prntAcc : globalParentAccount){
                    if(prntAcc.ID == a.ParentId){
                        parentAcc = prntAcc;
                    }
                }
                if(parentAcc != null){
                    if(a.High_Revenue__c == false){
                        a.High_Revenue__c = parentAcc.High_Revenue__c; 
                    }
                    if(a.Special_Attention__c == false){
                        a.Special_Attention__c = parentAcc.Special_Attention__c;
                    }
                    if(a.Support_Level__c == null){
                        a.Support_Level__c = parentAcc.Support_Level__c;
                    }
                    //updateFromParentRecords_hr.add(a);
                }
            }
        }
        
    }*/
}