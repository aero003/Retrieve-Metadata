trigger LVProductCase on Case (before insert, before update) {
    Set<Id> accountIds = new Set<Id>();
    Map<Id,Account> accProd = new Map<Id,Account>();
    for( Case newCs : Trigger.new)
    {
        accountIds.add(newCs.accountId);
    }
     for(Account acc : [SELECT id, Livevault_Product__c, RecordTypeId FROM ACCOUNT WHERE Id IN:accountIds])
    {
         if(acc.RecordTypeId == Label.LiveVault_Acc_Rec_Type_Id )
         {
             if(String.isNotBlank(acc.Livevault_Product__c))
             {
               List<String> mspSize =  acc.Livevault_Product__c.split(';');
               acc.Lvt_Prod_Count__c = mspSize.size();
               if( acc.Lvt_Prod_Count__c > 1)
               {
                   acc.Livevault_Product__c = 'Unknown';
                   accProd.put(acc.id,acc);
               } else
                     {
                         accProd.put(acc.id,acc);
                     }
             }
         }
    }
    for(Case cs : Trigger.new)
    {
        if(trigger.isBefore)
        {
        if(trigger.isInsert)
        {
        if(accProd.containsKey(cs.accountId))
        {
        cs.RecordTypeId = Label.LiveVault_Case_Rec_Type_Id;
        cs.Product__c = accProd.get(cs.accountId).Livevault_Product__c;
        }
        }
        if(trigger.isUpdate)
        {
        Case old = Trigger.oldMap.get(cs.Id);
        if(accProd.containsKey(cs.accountId) && old.accountId!=accProd.get(cs.accountId).Id)
        {
        cs.RecordTypeId = Label.LiveVault_Case_Rec_Type_Id;
        cs.Product__c =  (String.isNotEmpty(cs.Product__c)) ? cs.Product__c : accProd.get(cs.accountId).Livevault_Product__c;
        }
        }
        }
    }
}