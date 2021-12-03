trigger OneOffInvoiceAmountUpdates on Invoice__c (before insert, before update) {
    if(trigger.isupdate){
        for(Invoice__c a:trigger.new){
        If(a.Billing_Period__c == 'One-off'){
            if((a.Sign_Up_Month__c == 'January')){a.January__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'January')){a.January__c= 0;}             
                if((a.Sign_Up_Month__c == 'February')){a.February__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'February')){a.February__c= 0;}
                if((a.Sign_Up_Month__c == 'March')){a.March__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'March')){a.March__c= 0;}
                if((a.Sign_Up_Month__c == 'April')){a.April__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'April')){a.April__c= 0;}
                if((a.Sign_Up_Month__c == 'May')){a.May__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'May')){a.May__c= 0;}
                if((a.Sign_Up_Month__c == 'June')){a.June__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'June')){a.June__c= 0;}
                if((a.Sign_Up_Month__c == 'July')){a.July__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'July')){a.July__c= 0;}
                if((a.Sign_Up_Month__c == 'August')){a.August__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'August')){a.August__c= 0;}
                if((a.Sign_Up_Month__c == 'September')){a.September__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'September')){a.September__c= 0;}
                if((a.Sign_Up_Month__c == 'October')){a.October__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'October')){a.October__c= 0;}
                if((a.Sign_Up_Month__c == 'November')){a.November__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'November')){a.November__c= 0;}
                if((a.Sign_Up_Month__c == 'December')){a.December__c= a.Amount_Breakdown__c;}
                if((a.Sign_Up_Month__c <> 'December')){a.December__c= 0;} 
                }
                }
                }
                }