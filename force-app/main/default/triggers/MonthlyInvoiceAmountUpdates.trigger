trigger MonthlyInvoiceAmountUpdates on Invoice__c (before insert, before update) 
{    if(trigger.isupdate){        
        for(Invoice__c a:trigger.new){            
            if((a.Billing_Period__c== 'Monthly')){                
            a.January__c= a.Amount_Breakdown__c;
            a.February__c= a.Amount_Breakdown__c;
            a.March__c= a.Amount_Breakdown__c;
            a.April__c= a.Amount_Breakdown__c;            
            a.May__c= a.Amount_Breakdown__c;
            a.June__c= a.Amount_Breakdown__c;
            a.July__c= a.Amount_Breakdown__c;
            a.August__c= a.Amount_Breakdown__c;
            a.September__c= a.Amount_Breakdown__c;
            a.October__c= a.Amount_Breakdown__c;
            a.November__c= a.Amount_Breakdown__c;
            a.December__c= a.Amount_Breakdown__c;
            }
}}}