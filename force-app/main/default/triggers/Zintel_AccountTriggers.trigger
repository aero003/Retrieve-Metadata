trigger Zintel_AccountTriggers on Account (after insert,after update) {
    
    if(System.Label.Zintel_Trigger_Switch == 'On' || System.Label.Zintel_Trigger_Switch == ''){
        //List <Account> acclist = [select id,(select role from AccountContactRoles)Update_TWINS__c,TWINS_ID__c from Account where id in:Trigger.newMap.keyset()];    
        //List <Account> acclist = [select id,(select role from AccountContactRoles)Update_TWINS__c,TWINS_ID__c from Account where id in:Trigger.newMap.keyset()];      
        for(Account a: Trigger.New){
            if(a.Update_TWINS__c == true && a.Relationship_Type_Communications__c == 'Customer'){
                //Account aa = [select id,(select ContactId,role from AccountContactRoles)Update_TWINS__c,TWINS_ID__c from Account where id =: a.Id];
                Account ac = [select id,(select Contact_Roles__c from Contacts)Update_TWINS__c,TWINS_ID__c from Account where id =: a.Id];
                system.debug('Account -->' + ac);
                boolean flag;
                
                for(Contact c :ac.Contacts){
                    system.debug('Role --->' + c.Contact_Roles__c);
                    if(c.Contact_Roles__c != null){
                        if(c.Contact_Roles__c.contains('TWINS Billing Contact')){
                            flag = true;
                        }
                    }
                }
            
                if(flag == true){
                    if(Trigger.isInsert){
                        if(a.Update_TWINS__c  == true && (a.TWINS_ID__c == null || a.TWINS_ID__c == '')){
                            TwinsCalloutIntegrationClass.createUpdateAccountCallout(a.Id);
                        } 
                    }
                    
                    if(Trigger.isUpdate){
                        
                        if((Trigger.oldMap.get(a.Id).Relationship_Type_Communications__c == 'Prospect' &&  Trigger.newMap.get(a.Id).Relationship_Type_Communications__c == 'Customer') && (a.TWINS_ID__c == null)){
                            TwinsCalloutIntegrationClass.updateAccountCallout(a.Id);
                        }
                        
                        if(Trigger.oldMap.get(a.Id).Update_TWINS__c == false && Trigger.newMap.get(a.Id).Update_TWINS__c == true && (a.TWINS_ID__c == null || a.TWINS_ID__c == '')){
                            TwinsCalloutIntegrationClass.createUpdateAccountCallout(a.Id);
                        } 
                        
                        if ((Trigger.oldMap.get(a.Id).Name != Trigger.newMap.get(a.Id).Name) || (Trigger.oldMap.get(a.Id).Owner.Name != Trigger.newMap.get(a.Id).Owner.Name) || (Trigger.oldMap.get(a.Id).Phone != Trigger.newMap.get(a.Id).Phone) || 
                           (Trigger.oldMap.get(a.Id).Twins_Street__c != Trigger.newMap.get(a.Id).Twins_Street__c) || (Trigger.oldMap.get(a.Id).Twins_Suburb__c != Trigger.newMap.get(a.Id).Twins_Suburb__c) || (Trigger.oldMap.get(a.Id).Twins_City__c != Trigger.newMap.get(a.Id).Twins_City__c)
                           || (Trigger.oldMap.get(a.Id).Twins_Postcode__c != Trigger.newMap.get(a.Id).Twins_Postcode__c) || (Trigger.oldMap.get(a.Id).Account_Manager_Communications__c != Trigger.newMap.get(a.Id).Account_Manager_Communications__c) 
                           || (Trigger.oldMap.get(a.Id).Relationship_Type_Communications__c == 'Prospect' &&  Trigger.newMap.get(a.Id).Relationship_Type_Communications__c == 'Customer') && (a.TWINS_ID__c != null)){
                            TwinsCalloutIntegrationClass.updateAccountCallout(a.Id);
                        }
                    }
                }else{
                    a.adderror('Account should have atleast one contact with role as TWINS Billing Contact ');
                }
            }
            
        }
    }
}