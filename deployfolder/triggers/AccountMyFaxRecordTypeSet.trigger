trigger AccountMyFaxRecordTypeSet on Account (before insert, before update) {
/*
     // Disabling trigger for Invoice record insertion
     if(UserInfo.getUserId() == '00532000005Puhf' ||
     UserInfo.getUserId() == '0050e000006aJMl' ||
     UserInfo.getUserId() == '0050e000007CNhF' ||
     UserInfo.getUserId() == '00e60000000inCb')
     {
          return;
     }

     if(trigger.isinsert){
     for(Account a:trigger.new){
     IF(a.Brand__c=='MyFax'){a.RecordTypeid = '012600000009V7u';}
     //IF(a.Brand__c=='Fax.com'){a.RecordTypeid = '012P00000004Stn';}  
     //IF(a.Brand__c=='eFax'){a.RecordTypeid = '012P00000004QnE';}   
     }}*/
}