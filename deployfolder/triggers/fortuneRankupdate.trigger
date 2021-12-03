trigger fortuneRankupdate on Lead (before insert) {
set<string> emailSet= new set<string>();
Map<string,FortuneRankDatabase__mdt> databasemap1= new Map<string,FortuneRankDatabase__mdt>();    
    for(Lead le:trigger.new){
        if(le.Email!=null){
           emailSet.add(le.Email.split('@').get(1));
            system.debug('emailSet======>'+emailSet);
        }
    }
    list<FortuneRankDatabase__mdt> frdlist=[select id,ComponyName__c,Domain__c from FortuneRankDatabase__mdt where Domain__c in:emailSet];
      system.debug('frdlist=======>'+frdlist);
    if(frdlist!=null){
        for(FortuneRankDatabase__mdt fd:frdlist){
            databasemap1.put(fd.Domain__c,fd);
            system.debug('databasemap1=====>'+databasemap1);
        }
    }
   
        for(Lead l:trigger.new){
            if(l.Email!=null){
                if(databasemap1.containsKey(l.Email.split('@').get(1))){
            		l.Is_Fortune_1000_company__c = true;
         		}else{
             		l.Is_Fortune_1000_company__c = false; 
         		}
            }
    }

}