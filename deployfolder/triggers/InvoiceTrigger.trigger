trigger InvoiceTrigger on Invoice__c (before insert, after update, after insert, after delete) {
  
    // Disabling trigger for Invoice record insertion
    if(UserInfo.getUserId() == '00532000005Puhf' ||
    UserInfo.getUserId() == '0050e000006aJMl' ||
    UserInfo.getUserId() == '0050e000007CNhF' ||
    UserInfo.getUserId() == '00e60000000inCb')
    {
        return;
    }
    
    private static final Id RECORD_TYPE_KIS_NL_ID = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName().get('KeepItSafeNL').getRecordTypeId();
    private static final Id RECORD_TYPE_KIS_IE_ID = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName().get('KeepItSafe').getRecordTypeId();
    public List<Account> accountInvoiceList = new List<Account>();

    public static Boolean hasFiredInvoiceTrigger = false;

    // Unique account ids that might be affected by invoices change
    Set<Id> accountsIds = new Set<Id>();
    List<Invoice__c> allInvoices = new List<Invoice__c>();

    // extracting account IDs related to the invoices that are changing
    if (Trigger.old != null) {
        for(Invoice__c inv : Trigger.old) {
            allInvoices.add(inv);
            if (inv.Account__c != null) {
                accountsIds.add(inv.Account__c);
            }
        }
    }
    if (Trigger.new != null) {
        for(Invoice__c inv : Trigger.new) {
            allInvoices.add(inv);
            if (inv.Account__c != null) {
                if(!accountsIds.contains(inv.Account__c))
                {
                    accountsIds.add(inv.Account__c);
                }
            }
        }
    }

    // find Accounts that might need updating based on the invoices changing
    List<Account> accountCandidates = [SELECT Id, Name, MRR__c, KIS_Total_Invoice_Amount__c, Status__c, ParentId, Support_Level__c, Reason__c, RecordTypeId, 
        (SELECT Id, Status__c, Amount__c FROM Invoices__r WHERE Status__c = 'Active') 
        FROM Account 
        WHERE Account.Id IN :accountsIds];
    Set<Account> accountsToUpdate = new Set<Account>();


    // Should account status change based on its previous state and available invoices?
    for (Account acc : accountCandidates)
    {
        System.Debug('Inv__r : ' + acc.invoices__r);
        
        // accounts with active invoices should be activated
        if(acc.Invoices__r.size() > 0)
        {
            // should the status change to active?
            if (acc.Status__c != 'Active') {
                acc.Status__c = 'Active';
                acc.Reason__c = '';
                if(!accountsToUpdate.contains(acc))
                {
                    accountsToUpdate.add(acc);
                }
            }
        }
        else 
        {
            // should the account status be changed from Active to Inactive? (no active invoices)
            if(acc.Status__c == 'Active') {
                acc.Status__c = 'InActive';
                acc.Reason__c = 'Other';
                if(!accountsToUpdate.contains(acc))
                {
                    accountsToUpdate.add(acc);
                }
            }
        }

        // Calculate support level based on the KIS_Total_Invoice_Amount__c value
        /*String calculatedSupportLevel = '';
        Decimal Amount_sum = 0;
        // If child is updated
        if(acc.parentId != null)
        {
            // Get all of the children from the Parent of the current account (acc -> child)
            List<Account> children = [SELECT Id, Name, MRR__c, KIS_Total_Invoice_Amount__c, Status__c, ParentId, Support_Level__c, Reason__c, RecordTypeId, 
            (SELECT Id, Status__c, Amount__c FROM Invoices__r WHERE Status__c = 'Active') 
            FROM Account Account WHERE ParentId =: acc.ParentId];

            if(children.size() > 0)
            {
                for(Account  child : children)
                {
                    if(child.Invoices__r != null)
                    {
                        for(Invoice__c inv : child.Invoices__r)
                        {
                            Amount_sum += inv.Amount__c;
                        }
                    }
                }

                // Calculate the support level for parent based on the MRR sum of the children
                calculatedSupportLevel = calculateSupportLevel(Amount_sum);
                Account parent = [SELECT Id, Name, MRR__c, KIS_Total_Invoice_Amount__c, Status__c, ParentId, Support_Level__c, Reason__c, RecordTypeId, 
                (SELECT Id, Status__c, Amount__c FROM Invoices__r WHERE Status__c = 'Active') 
                FROM Account WHERE Id =: acc.ParentId];

                if(parent.Support_Level__c != calculatedSupportLevel)
                {
                    parent.Support_Level__c = calculatedSupportLevel;
                    if(!accountsToUpdate.contains(parent))
                    {
                        accountsToUpdate.add(parent);
                    }
                }
                // Update children support levels
                for(Account child : children)
                {
                    if(child.Support_Level__c != calculatedSupportLevel)
                    {
                        child.Support_Level__c = calculatedSupportLevel;
                        if(!accountsToUpdate.contains(child))
                        {
                            accountsToUpdate.add(child);
                        }
                    }
                }
            }
            else 
            {
                // If there is no children - calculate the support level from MRR of the respected account
                if(acc.Invoices__r != null)
                {
                    for(Invoice__c inv : acc.Invoices__r)
                    {
                        Amount_sum += inv.Amount__c;
                    }
                }

                calculatedSupportLevel = calculateSupportLevel(Amount_sum);
                if(acc.Support_Level__c != calculatedSupportLevel)
                {
                    acc.Support_Level__c = calculatedSupportLevel;
                }
            }
        } 
        else
        {
            // If there is an update on the Invoice of Account that is not child, check if it is Parent (should have children)
            List<Account> children = [SELECT Id, Name, MRR__c, KIS_Total_Invoice_Amount__c, Status__c, ParentId, Support_Level__c, Reason__c, RecordTypeId, 
            (SELECT Id, Status__c, Amount__c FROM Invoices__r WHERE Status__c = 'Active') 
            FROM Account WHERE ParentId =: acc.Id];

            if(children.size() < 1)
            {       
                // If the updated account is not parent, calculate the support level for the respected account
                if(acc.Invoices__r != null)
                {
                    for(Invoice__c inv : acc.Invoices__r)
                    {
                        if(inv.Amount__c != null)
                        {
                            Amount_sum += inv.Amount__c;
                        }
                    }
                }
                calculatedSupportLevel = calculateSupportLevel(Amount_sum);      
                if(acc.Support_Level__c != calculatedSupportLevel)
                {
                    acc.Support_Level__c = calculatedSupportLevel;
                    if(!accountsToUpdate.contains(acc))
                    {
                        accountsToUpdate.add(acc);
                    }
                }
            }
            else 
            {
                // If the updated account is Parent - calculate Support level from the MRR sum of his children
                for(Account  child : children)
                {
                    if(child.Invoices__r != null)
                    {
                        for(Invoice__c inv : child.Invoices__r)
                        {
                            if(inv.Amount__c != null)
                            {
                                Amount_sum += inv.Amount__c;
                            }
                        }
                    }
                }

                calculatedSupportLevel = calculateSupportLevel(Amount_sum);
                if(acc.Support_Level__c != calculatedSupportLevel)
                {
                    acc.Support_LeveL__c = calculatedSupportLevel;
                    if(!accountsToUpdate.contains(acc))
                    {
                        accountsToUpdate.add(acc);
                    }
                    for(Account child : children)
                    {
                        if(child.Support_LeveL__c != calculatedSupportLevel)
                        {
                            child.Support_Level__c = calculatedSupportLevel;
                            if(!accountsToUpdate.contains(child))
                            {
                                accountsToUpdate.add(child);
                            }
                        }
                    }
                }
            }
        }*/
    }

    List<Account> uniqueAccounts = new List<Account>();
    Boolean safeToAdd = true;
    for(Account accountToAdd : accountsToUpdate)
    {
        safeToAdd = true;
        for (Integer i = (uniqueAccounts.size()-1) ; i>= 0 ; i--)
        {
            // Check if list has duplicate object
            if(uniqueAccounts[i].Id == accountToAdd.Id)
            {
                // Remove the old account (duplicate) and add the new one (after all updates)
                uniqueAccounts.remove(i);
                uniqueAccounts.add(accountToAdd);
                safeToAdd = false;
            }
        }
        if(safeToAdd == true)
        {
            uniqueAccounts.add(accountToAdd);
        }
    }

    if (uniqueAccounts.size() > 0) {
        if(hasFiredInvoiceTrigger == false)
        {
            update new List<Account>(uniqueAccounts);
            hasFiredInvoiceTrigger = true;
        }
    }

    if(Trigger.isBefore)
    {
        List<Account> accountCandidatesNL_IE = [SELECT Id, Name, Status__c, Reason__c, RecordTypeId, 
            (SELECT Id, Status__c, Billing_Period__c FROM Invoices__r WHERE Status__c = 'Active') 
            FROM Account 
            WHERE Account.Id IN :accountsIds AND (RecordType.Id = :RECORD_TYPE_KIS_IE_ID OR RecordType.Id = :RECORD_TYPE_KIS_NL_ID) ];
        
            List<Id> AccountIds = new List<id>();
            List<Invoice__c> updateBillingFieldOnInvoice = new List<Invoice__c>();

            List<Id> invoiceIds = new List<id>();

            for (Invoice__c inv : Trigger.new)
            {
                invoiceIds.add(inv.Id);
            }

            for (Account acc : accountCandidatesNL_IE)
            {
                AccountIds.add(acc.Id);
            }

            //List<Invoice__c>  Invoices  = [Select Id, Billing_Period__c, Account__C from Invoice__c Where Id IN :invoiceIds];

            for (Invoice__c invoice : Trigger.New)
            {
                if (AccountIds.Contains(invoice.Account__c))
                {
                    invoice.Billing_Period__c ='Monthly';
                }
            }
    }

    public static String calculateSupportLevel(Decimal MRR)
    {
        String SL_calculated = '';

        if(MRR < 300)
        {
            SL_calculated = 'Other';
        }
        else if (MRR > 300 && MRR < 1000)
        {
            SL_calculated = 'Bronze';
        }
        else if (MRR > 1000 && MRR < 2000)
        {
            SL_calculated = 'Silver';
        }
        else if (MRR > 2000)
        {
            SL_calculated = 'Gold';
        }
        else 
        {
            SL_calculated = '';    
        }

        return SL_calculated;
    }
}