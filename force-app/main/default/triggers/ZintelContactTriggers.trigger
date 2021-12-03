trigger ZintelContactTriggers on Contact (after insert,after update) {
    
    static boolean flag;
    Id   rid = [select id from RecordType where Name =: Label.Zintel_Contact_RT].Id;
    list <Contact> conlist = new list <Contact> ();
    if(Test.isRunningTest()){
        conlist = new list <Contact> ([select id,Account.TWINS_ID__c,TWINS_ID__c,Contact_Roles__c, RecordTypeId from Contact where id IN:Trigger.newMap.keyset() ]);
    }else{
        conlist = new list <Contact> ([select id,Account.TWINS_ID__c,TWINS_ID__c,Contact_Roles__c,RecordTypeId from Contact where id IN:Trigger.newMap.keyset() and Account.TWINS_ID__c != null and RecordTypeId =: rid ]);
    }
     
    
   /* Map <Id,List<Contact>> accconMap = new Map <Id,List<Contact>> ();
    for(Contact c : conlist){
        list <Contact> clist = new list <Contact> ();
        if(accconMap.get(c.AccountId) == null){
            clist.add(c);
            accconMap.put(c.AccountId,clist);
        }else{
            clist = accconMap.get(c.AccountId);
            clist.add(c);
            accconMap.put(c.AccountId,clist);
        }
    }*/

    if(System.Label.Zintel_Trigger_Switch == 'On' || System.Label.Zintel_Trigger_Switch == ''){
        if(flag != false){
            for(Contact c: conlist){
                    list <Contact> co = new list <Contact> ();
                    list <Contact> upco = new list <Contact>();
                    String s1 = c.Contact_Roles__c;
                    System.debug('String --->' + s1);
                    
                    if(s1 != null){
                        if(s1.contains('TWINS Billing Contact')){
                            co = [select id,Contact_Roles__c from Contact where AccountId =: c.AccountId ];
                            system.debug(co);
                        }
                    }
                    
                    if(!co.isEmpty()){
                        for(Contact c1:co){
                            if(c1.Contact_Roles__c != null){
                                if(c1.Id != c.Id && c1.Contact_Roles__c.contains('TWINS Billing Contact')){
                                    String s = c1.Contact_Roles__c;
                                    c1.Contact_Roles__c = s.replace('TWINS Billing Contact','');
                                    upco.add(c1);
                                }
                            }
                        }
                        system.debug('upco  --->' + upco);
                        update upco;
                        flag = false;
                    }
                    
                if(Trigger.isInsert && c.RecordTypeId == rid){
                    if(c.TWINS_ID__c ==  null){
                        TwinsCalloutIntegrationClass.createContactCallout(c.Id);
                    }
                }
            
                if(Trigger.isUpdate && c.RecordTypeId == rid){
                    if((c.TWINS_ID__c == null) || (Trigger.newMap.get(c.Id).Contact_Roles__c != Trigger.oldMap.get(c.Id).Contact_Roles__c) 
                    || (Trigger.newMap.get(c.Id).Phone != Trigger.oldMap.get(c.Id).Phone) || (Trigger.newMap.get(c.Id).FirstName != Trigger.oldMap.get(c.Id).FirstName) || (Trigger.newMap.get(c.Id).Email != Trigger.oldMap.get(c.Id).Email)
                    || (Trigger.newMap.get(c.Id).LastName != Trigger.oldMap.get(c.Id).LastName) ){
                        TwinsCalloutIntegrationClass.createContactCallout(c.Id);
                    }
                }
            }
        }
    }
}