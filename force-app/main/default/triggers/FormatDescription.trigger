trigger FormatDescription on Invoice__c (before Insert, before Update)
{

    Set<Id> accountsIds = new Set<Id>();
    List<Invoice__c> allInvoices = new List<Invoice__c>();
    Set<Id> InvoiceId = new Set<Id>();
 
    //Update Invoice Description => "Description__c = invoiceProduct  + invoiceUsageGB  +  invoicePO +  invoiceBillingPeriod"
    for (Invoice__c Inv : trigger.new)
    {
    try
        {
            String invoiceUsageGB='';
            String invoicePO='';
            String invoiceBillingPeriod='';
            String invoiceProduct='';

            // Check if Invoice has set bellow values
            if(Inv.Product__c != null)
            {
                invoiceProduct = Inv.Product__c;
            }
            if(Inv.Usage_GB__c != null)
            {
                invoiceUsageGB =', '+String.valueOf(Inv.Usage_GB__c) ;
            }
            if(Inv.PO__c != null)
            {
                invoicePO =', '+Inv.PO__c;
            }
            if(Inv.Billing_Period__c != null)
            {
                invoiceBillingPeriod =', '+Inv.Billing_Period__c;
            }
            // Set new invoice description
            Inv.Description__c = invoiceProduct  + invoiceUsageGB  +  invoicePO +  invoiceBillingPeriod;

            if(Inv.Description__c!=null || Inv.Description__c.trim()!='')
            {
                Inv.FormattedDescription__c= Inv.Description__c.replaceall('\r\n',' / ');
            } 
            else
            { 
                Inv.FormattedDescription__c='';
            }
            
            /*  if(Inv.New_Business_Description__c!=null || Inv.New_Business_Description__c.trim()!=''){
                Inv.FormattedNew_BusinessDescription__c= Inv.New_Business_Description__c.replaceall('\r\n',' / ');
            } else Inv.FormattedNew_BusinessDescription__c=''; */
        }
         catch(Exception e){ }
      
    } 
}