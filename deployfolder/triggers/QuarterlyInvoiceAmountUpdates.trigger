trigger QuarterlyInvoiceAmountUpdates on Invoice__c (before insert, before update) 
{    if(trigger.isupdate){        
        for(Invoice__c a:trigger.new){
          If(a.Billing_Period__c== 'Quarterly'){            
            if(((a.Sign_Up_Month__c == 'January')||(a.Sign_Up_Month__c == 'April')||
            (a.Sign_Up_Month__c == 'July')||(a.Sign_Up_Month__c == 'October'))){                
            a.January__c= a.Amount_Breakdown__c;
            a.February__c= 0;
            a.March__c= 0;
            a.April__c= a.Amount_Breakdown__c;
            a.May__c= 0;
            a.June__c= 0;
            a.July__c= a.Amount_Breakdown__c;
            a.August__c= 0;
            a.September__c= 0;
            a.October__c= a.Amount_Breakdown__c;
            a.November__c= 0;
            a.December__c= 0;
            }
            if(((a.Sign_Up_Month__c == 'February')||(a.Sign_Up_Month__c == 'May')|| 
            (a.Sign_Up_Month__c == 'August')||(a.Sign_Up_Month__c == 'November'))){                
            a.January__c= 0;
            a.February__c= a.Amount_Breakdown__c;
            a.March__c= 0;
            a.April__c= 0;
            a.May__c= a.Amount_Breakdown__c;
            a.June__c= 0;
            a.July__c= 0;
            a.August__c= a.Amount_Breakdown__c;
            a.September__c= 0;
            a.October__c= 0;
            a.November__c= a.Amount_Breakdown__c;
            a.December__c= 0;
            }
            if(((a.Sign_Up_Month__c == 'March')||(a.Sign_Up_Month__c == 'June')||
            (a.Sign_Up_Month__c == 'September')||(a.Sign_Up_Month__c == 'December'))){                
            a.January__c= 0;
            a.February__c= 0;
            a.March__c= a.Amount_Breakdown__c;
            a.April__c= 0;
            a.May__c= 0;
            a.June__c= a.Amount_Breakdown__c;
            a.July__c= 0;
            a.August__c= 0;
            a.September__c= a.Amount_Breakdown__c;
            a.October__c= 0;
            a.November__c= 0;
            a.December__c= a.Amount_Breakdown__c;
            }
         }
      }
   }
}