trigger LVProductAcc on Opportunity (before insert, before update) {

    Set<Id> accountIds = new Set<Id>();
    Map<Id,Account> accProd = new Map<Id,Account>();
    
    for( Opportunity newOpp : Trigger.new)
    {
        accountIds.add(newOpp.accountId);
    }
    
    for(Account acc : [SELECT id, Livevault_Product__c, OS_System_Apps__c, RecordTypeId FROM ACCOUNT WHERE Id IN:accountIds])
    {
        accProd.put(acc.Id,acc);
        System.debug('account livevault product'+ acc.Livevault_Product__c + '.');
    }
    
    for(Opportunity opp : Trigger.new)
    {
        if(trigger.isBefore)
        {
        if(trigger.isInsert)
        {
        if(accProd.containsKey(opp.accountId) && accProd.get(opp.accountId).RecordTypeId == Label.LiveVault_Acc_Rec_Type_Id)
        {
            opp.RecordTypeId = Label.LiveVault_Opp_Rec_Type_Id;
            opp.Livevault_Product__c = accProd.get(opp.accountId).Livevault_Product__c;
            opp.OS_System_Apps__c = accProd.get(opp.accountId).OS_System_Apps__c;
            
        }
        }
        if(trigger.isUpdate)
        {
        Opportunity old = Trigger.oldMap.get(opp.Id);
        if(accProd.containsKey(opp.accountId) && old.accountId!=accProd.get(opp.accountId).Id && accProd.get(opp.accountId).RecordTypeId == Label.LiveVault_Acc_Rec_Type_Id)
        {
            opp.RecordTypeId = Label.LiveVault_Opp_Rec_Type_Id;
            opp.Livevault_Product__c = accProd.get(opp.accountId).Livevault_Product__c;
            opp.OS_System_Apps__c = accProd.get(opp.accountId).OS_System_Apps__c;
            
        }
        }
        }
                
    }
}