trigger Account_CustomerId on Account (Before Insert) {
/*    
    // List of accounts with Empty CustId__c List. 
    List <Account> KUS_EmptyCustId_List = new List <Account>();
    List <Account> KIE_EmptyCustId_List = new List <Account>();
    List <Account> KCA_EmptyCustId_List = new List <Account>();
    List <Account> KUK_EmptyCustId_List = new List <Account>();
    List <Account> KIC_EmptyCustId_List = new List <Account>();
    List <Account> KDK_EmptyCustId_List = new List <Account>();
    List <Account> KNL_EmptyCustId_List = new List <Account>();
    List <Account> KNZ_EmptyCustId_List = new List <Account>();
    
    
    
    // List of accounts with NonEmpty CustId__c List used for Update DML. 
    List <Account> KUS_ForUpdate_List = new List <Account>();
    List <Account> KIE_ForUpdate_List = new List <Account>();
    List <Account> KCA_ForUpdate_List = new List <Account>();
    List <Account> KUK_ForUpdate_List = new List <Account>();
    List <Account> KIC_ForUpdate_List = new List <Account>();
    List <Account> KDK_ForUpdate_List = new List <Account>();
    List <Account> KNL_ForUpdate_List = new List <Account>();
    List <Account> KNZ_ForUpdate_List = new List <Account>();
    
    Integer HighestNumberKUS=0;
    Integer HighestNumberKIE=0;
    Integer HighestNumberKCA=0;
    Integer HighestNumberKUK=0;
    Integer HighestNumberKIC=0;
    Integer HighestNumberKDK=0;
    Integer HighestNumberKNL=0;
    Integer HighestNumberKNZ=0;
    
    try{
        // Query KUS, KIE, KCA, KUK and KIC RecordTypeIDs.
        String KUS_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeUS' And SObjectType='Account' Limit 1].Id;
        System.debug('KUS_RecordTypeId'+KUS_RecordTypeId );
        String KIE_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafe' And SObjectType='Account' Limit 1].Id;
        System.debug('KIE_RecordTypeId'+KIE_RecordTypeId );
        String KCA_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeCA' And SObjectType='Account' Limit 1].Id;
        System.debug('KCA_RecordTypeId'+KCA_RecordTypeId );
        String KUK_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeUK' And SObjectType='Account' Limit 1].Id;
        System.debug('KUK_RecordTypeId'+KUK_RecordTypeId );
        String KIC_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeIC' And SObjectType='Account' Limit 1].Id;
        System.debug('KIC_RecordTypeId'+KIC_RecordTypeId );
        String KDK_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeDK' And SObjectType='Account' Limit 1].Id;
        System.debug('KDK_RecordTypeId'+KDK_RecordTypeId );
        String KNL_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeNL' And SObjectType='Account' Limit 1].Id;
        System.debug('KNL_RecordTypeId'+KNL_RecordTypeId );
        String KNZ_RecordTypeId =[SELECT Id FROM RecordType where Name='KeepItSafeNZ' And SObjectType='Account' Limit 1].Id;
        System.debug('KNZ_RecordTypeId'+KNZ_RecordTypeId );
        
        
        
        // Current Highest KUS/KIE/KCA/KUK/KIC/KDK/KNL/KNZ  Customer_ID2__c Numbers in DB
        String Highest_KUS_CustID=''; // initialize String
        List <Account> Highest_KUS_CustID_List= new List <Account>();
        
        Highest_KUS_CustID_List = [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KUS_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        if (Highest_KUS_CustID_List.size()>0) {
            
            Highest_KUS_CustID= Highest_KUS_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KUS_CustID' +Highest_KUS_CustID );
        
        String Highest_KIE_CustID=''; // initialize String
        List <Account> Highest_KIE_CustID_List= new List <Account>();
        
        Highest_KIE_CustID_List= [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KIE_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        
        if (Highest_KIE_CustID_List.size()>0) {
            
            Highest_KIE_CustID= Highest_KIE_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KIE_CustID' +Highest_KIE_CustID );
        
        String Highest_KCA_CustID=''; // initialize String
        List <Account> Highest_KCA_CustID_List= new List <Account>();
        
        Highest_KCA_CustID_List= [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KCA_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        
        if (Highest_KCA_CustID_List.size()>0) {
            
            Highest_KCA_CustID= Highest_KCA_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KCA_CustID' +Highest_KCA_CustID );
        
        String Highest_KUK_CustID=''; // initialize String
        List <Account> Highest_KUK_CustID_List= new List <Account>();
        
        Highest_KUK_CustID_List= [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KUK_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        
        if (Highest_KUK_CustID_List.size()>0) {
            
            Highest_KUK_CustID= Highest_KUK_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KUK_CustID' +Highest_KUK_CustID );
        
        String Highest_KIC_CustID=''; // initialize String
        List <Account> Highest_KIC_CustID_List= new List <Account>();
        
        Highest_KIC_CustID_List = [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KIC_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        if (Highest_KIC_CustID_List.size()>0) {
            
            Highest_KIC_CustID= Highest_KIC_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KIC_CustID' +Highest_KIC_CustID );
        
        String Highest_KDK_CustID=''; // initialize String
        List <Account> Highest_KDK_CustID_List= new List <Account>();
        
        Highest_KDK_CustID_List = [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KDK_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        if (Highest_KDK_CustID_List.size()>0) {
            
            Highest_KDK_CustID= Highest_KDK_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KDK_CustID' +Highest_KDK_CustID );
        
        String Highest_KNL_CustID=''; // initialize String
        List <Account> Highest_KNL_CustID_List= new List <Account>();
        
        Highest_KNL_CustID_List = [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KNL_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        if (Highest_KNL_CustID_List.size()>0) {
            
            Highest_KNL_CustID= Highest_KNL_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KNL_CustID' +Highest_KNL_CustID );
        
        String Highest_KNZ_CustID=''; // initialize String
        List <Account> Highest_KNZ_CustID_List= new List <Account>();
        
        Highest_KNZ_CustID_List = [SELECT Name, Id, Customer_ID2__c FROM Account where RecordTypeId=:KNZ_RecordTypeId And Customer_ID2__c !='' Order by Customer_ID2__c Desc Limit 1];
        
        if (Highest_KNZ_CustID_List.size()>0) {
            
            Highest_KNZ_CustID= Highest_KNZ_CustID_List[0].Customer_ID2__c;
            
        }
        
        System.Debug('Highest_KNZ_CustID' +Highest_KNZ_CustID );
        
        
        
        // Query Existing KUS, KIE, KCA, KUK and KIC Records in database with Empty Customer_ID2__c or unformatted Customer_ID2__c.
        KUS_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KUS_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KUS-%') )Order by CreatedDate ASC ];
        KIE_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KIE_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KIE-%') ) Order by CreatedDate ASC ];
        KCA_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KCA_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KCA-%') ) Order by CreatedDate ASC ];
        KUK_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KUK_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KUK-%') ) Order by CreatedDate ASC ];
        KIC_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KIC_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KIC-%') ) Order by CreatedDate ASC ];
        KDK_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KDK_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KDK-%') ) Order by CreatedDate ASC ];
        KNL_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KNL_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KNL-%') ) Order by CreatedDate ASC ];
        KNZ_EmptyCustId_List = [SELECT Name, Id, Customer_ID2__c, CreatedDate FROM Account where RecordTypeId=:KNZ_RecordTypeId And (Customer_ID2__c ='' OR (NOT Customer_ID2__c like 'KNZ-%') ) Order by CreatedDate ASC ];
        
        System.Debug('KUS_EmptyCustId_List' +KUS_EmptyCustId_List); 
        System.Debug('KIE_EmptyCustId_List' +KIE_EmptyCustId_List);
        System.Debug('KCA_EmptyCustId_List' +KCA_EmptyCustId_List);
        System.Debug('KUK_EmptyCustId_List' +KUK_EmptyCustId_List);
        System.Debug('KIC_EmptyCustId_List' +KIC_EmptyCustId_List);
        System.Debug('KDK_EmptyCustId_List' +KDK_EmptyCustId_List);
        System.Debug('KNL_EmptyCustId_List' +KNL_EmptyCustId_List);
        System.Debug('KNZ_EmptyCustId_List' +KNZ_EmptyCustId_List);
        
        
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KUS_CustID!='' ) {
            
            HighestNumberKUS =Integer.valueof(Highest_KUS_CustID.substring(4));  
            
            if(KUS_EmptyCustId_List.size()>0){   
                System.Debug('HighestNumberKUS' +HighestNumberKUS);  
                for (Account KUS_account: KUS_EmptyCustId_List){
                    
                    HighestNumberKUS=HighestNumberKUS+1;
                    
                    System.Debug('HighestNumberKUS' +HighestNumberKUS);  
                    
                    
                    KUS_account.Customer_ID2__c= 'KUS-'+ (string.valueof(HighestNumberKUS));
                    
                    System.Debug('KUS_account.Customer_ID2__c' +KUS_account.Customer_ID2__c);  
                    KUS_ForUpdate_List.add(KUS_account);
                    
                }
                
                if(KUS_ForUpdate_List.size()>0){
                    database.update(KUS_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KUS_CustID=='' && KUS_EmptyCustId_List.size()>0) {
            HighestNumberKUS=1000000;
            
            for (Account KUS_account: KUS_EmptyCustId_List){
                
                HighestNumberKUS=HighestNumberKUS+1;
                
                System.debug('HighestNumberKUS'+HighestNumberKUS );
                KUS_account.Customer_ID2__c= 'KUS-'+ (string.valueof(HighestNumberKUS));
                
                System.Debug('KUS_account.Customer_ID2__c' +KUS_account.Customer_ID2__c);  
                
                KUS_ForUpdate_List.add(KUS_account);
                
            }
            
            if(KUS_ForUpdate_List.size()>0){
                database.update(KUS_ForUpdate_List);
            }
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KIE Record Type
        if (Highest_KIE_CustID!='' ) {
            
            HighestNumberKIE = Integer.valueof(Highest_KIE_CustID.substring(4)); 
            
            if (KIE_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKIE' +HighestNumberKIE);  
                for (Account KIE_account: KIE_EmptyCustId_List){
                    
                    HighestNumberKIE=HighestNumberKIE+1;
                    
                    System.Debug('HighestNumberKIE' +HighestNumberKIE);  
                    
                    
                    KIE_account.Customer_ID2__c= 'KIE-'+ (string.valueof(HighestNumberKIE));
                    
                    System.Debug('KIE_account.Customer_ID2__c' +KIE_account.Customer_ID2__c);  
                    KIE_ForUpdate_List.add(KIE_account);
                    
                }
                
                if(KIE_ForUpdate_List.size()>0){
                    database.update(KIE_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KIE_CustID=='' && KIE_EmptyCustId_List.size()>0) {
            HighestNumberKIE=1000000;
            
            for (Account KIE_account: KIE_EmptyCustId_List){
                
                HighestNumberKIE=HighestNumberKIE+1;
                
                System.debug('HighestNumberKIE'+HighestNumberKIE );
                KIE_account.Customer_ID2__c= 'KIE-'+ (string.valueof(HighestNumberKIE));
                
                System.Debug('KIE_account.Customer_ID2__c' +KIE_account.Customer_ID2__c);  
                
                KIE_ForUpdate_List.add(KIE_account);
                
            }
        }   
        if(KIE_ForUpdate_List.size()>0){
            database.update(KIE_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KCA Record Type
        if (Highest_KCA_CustID!='' ) {
            
            HighestNumberKCA = Integer.valueof(Highest_KCA_CustID.substring(4)); 
            
            if (KCA_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKCA' +HighestNumberKCA);  
                for (Account KCA_account: KCA_EmptyCustId_List){
                    
                    HighestNumberKCA=HighestNumberKCA+1;
                    
                    System.Debug('HighestNumberKCA' +HighestNumberKCA);  
                    
                    
                    KCA_account.Customer_ID2__c= 'KCA-'+ (string.valueof(HighestNumberKCA));
                    
                    System.Debug('KCA_account.Customer_ID2__c' +KCA_account.Customer_ID2__c);  
                    KCA_ForUpdate_List.add(KCA_account);
                    
                }
                
                if(KCA_ForUpdate_List.size()>0){
                    database.update(KCA_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KCA_CustID=='' && KCA_EmptyCustId_List.size()>0) {
            HighestNumberKCA=1000000;
            
            for (Account KCA_account: KCA_EmptyCustId_List){
                
                HighestNumberKCA=HighestNumberKCA+1;
                
                System.debug('HighestNumberKCA'+HighestNumberKCA );
                KCA_account.Customer_ID2__c= 'KCA-'+ (string.valueof(HighestNumberKCA));
                
                System.Debug('KCA_account.Customer_ID2__c' +KCA_account.Customer_ID2__c);  
                
                KCA_ForUpdate_List.add(KCA_account);
                
            }
        }   
        if(KCA_ForUpdate_List.size()>0){
            database.update(KCA_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KUK Record Type
        if (Highest_KUK_CustID!='' ) {
            
            HighestNumberKUK = Integer.valueof(Highest_KUK_CustID.substring(4)); 
            
            if (KUK_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKUK' +HighestNumberKUK);  
                for (Account KUK_account: KUK_EmptyCustId_List){
                    
                    HighestNumberKUK=HighestNumberKUK+1;
                    
                    System.Debug('HighestNumberKUK' +HighestNumberKUK);  
                    
                    
                    KUK_account.Customer_ID2__c= 'KUK-'+ (string.valueof(HighestNumberKUK));
                    
                    System.Debug('KUK_account.Customer_ID2__c' +KUK_account.Customer_ID2__c);  
                    KUK_ForUpdate_List.add(KUK_account);
                    
                }
                
                if(KUK_ForUpdate_List.size()>0){
                    database.update(KUK_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KUK_CustID=='' && KUK_EmptyCustId_List.size()>0) {
            HighestNumberKUK=1000000;
            
            for (Account KUK_account: KUK_EmptyCustId_List){
                
                HighestNumberKUK=HighestNumberKUK+1;
                
                System.debug('HighestNumberKUK'+HighestNumberKUK );
                KUK_account.Customer_ID2__c= 'KUK-'+ (string.valueof(HighestNumberKUK));
                
                System.Debug('KUK_account.Customer_ID2__c' +KUK_account.Customer_ID2__c);  
                
                KUK_ForUpdate_List.add(KUK_account);
                
            }
        }   
        if(KUK_ForUpdate_List.size()>0){
            database.update(KUK_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KIC Record Type
        if (Highest_KIC_CustID!='' ) {
            
            HighestNumberKIC = Integer.valueof(Highest_KIC_CustID.substring(4)); 
            
            if (KIC_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKIC' +HighestNumberKIC);  
                for (Account KIC_account: KIC_EmptyCustId_List){
                    
                    HighestNumberKIC=HighestNumberKIC+1;
                    
                    System.Debug('HighestNumberKIC' +HighestNumberKIC);  
                    
                    
                    KIC_account.Customer_ID2__c= 'KIC-'+ (string.valueof(HighestNumberKIC));
                    
                    System.Debug('KIC_account.Customer_ID2__c' +KIC_account.Customer_ID2__c);  
                    KIC_ForUpdate_List.add(KIC_account);
                    
                }
                
                if(KIC_ForUpdate_List.size()>0){
                    database.update(KIC_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KIC_CustID=='' && KIC_EmptyCustId_List.size()>0) {
            HighestNumberKIC=1000000;
            
            for (Account KIC_account: KIC_EmptyCustId_List){
                
                HighestNumberKIC=HighestNumberKIC+1;
                
                System.debug('HighestNumberKIC'+HighestNumberKIC );
                KIC_account.Customer_ID2__c= 'KIC-'+ (string.valueof(HighestNumberKIC));
                
                System.Debug('KIC_account.Customer_ID2__c' +KIC_account.Customer_ID2__c);  
                
                KIC_ForUpdate_List.add(KIC_account);
                
            }
        }   
        if(KIC_ForUpdate_List.size()>0){
            database.update(KIC_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KDK Record Type
        if (Highest_KDK_CustID!='' ) {
            
            HighestNumberKDK = Integer.valueof(Highest_KDK_CustID.substring(4)); 
            
            if (KDK_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKDK' +HighestNumberKDK);  
                for (Account KDK_account: KDK_EmptyCustId_List){
                    
                    HighestNumberKDK=HighestNumberKDK+1;
                    
                    System.Debug('HighestNumberKDK' +HighestNumberKDK);  
                    
                    
                    KDK_account.Customer_ID2__c= 'KDK-'+ (string.valueof(HighestNumberKDK));
                    
                    System.Debug('KDK_account.Customer_ID2__c' +KDK_account.Customer_ID2__c);  
                    KDK_ForUpdate_List.add(KDK_account);
                    
                }
                
                if(KDK_ForUpdate_List.size()>0){
                    database.update(KDK_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KDK_CustID=='' && KDK_EmptyCustId_List.size()>0) {
            HighestNumberKDK=1000000;
            
            for (Account KDK_account: KDK_EmptyCustId_List){
                
                HighestNumberKDK=HighestNumberKDK+1;
                
                System.debug('HighestNumberKDK'+HighestNumberKDK );
                KDK_account.Customer_ID2__c= 'KDK-'+ (string.valueof(HighestNumberKDK));
                
                System.Debug('KDK_account.Customer_ID2__c' +KDK_account.Customer_ID2__c);  
                
                KDK_ForUpdate_List.add(KDK_account);
                
            }
        }   
        if(KDK_ForUpdate_List.size()>0){
            database.update(KDK_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KNL Record Type
        if (Highest_KNL_CustID!='' ) {
            
            HighestNumberKNL = Integer.valueof(Highest_KNL_CustID.substring(4)); 
            
            if (KNL_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKNL' +HighestNumberKNL);  
                for (Account KNL_account: KNL_EmptyCustId_List){
                    
                    HighestNumberKNL=HighestNumberKNL+1;
                    
                    System.Debug('HighestNumberKNL' +HighestNumberKNL);  
                    
                    
                    KNL_account.Customer_ID2__c= 'KNL-'+ (string.valueof(HighestNumberKNL));
                    
                    System.Debug('KNL_account.Customer_ID2__c' +KNL_account.Customer_ID2__c);  
                    KNL_ForUpdate_List.add(KNL_account);
                    
                }
                
                if(KNL_ForUpdate_List.size()>0){
                    database.update(KNL_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KNL_CustID=='' && KNL_EmptyCustId_List.size()>0) {
            HighestNumberKNL=6000000;
            
            for (Account KNL_account: KNL_EmptyCustId_List){
                
                HighestNumberKNL=HighestNumberKNL+1;
                
                System.debug('HighestNumberKNL'+HighestNumberKNL );
                KNL_account.Customer_ID2__c= 'KNL-'+ (string.valueof(HighestNumberKNL));
                
                System.Debug('KNL_account.Customer_ID2__c' +KNL_account.Customer_ID2__c);  
                
                KNL_ForUpdate_List.add(KNL_account);
                
            }
        }   
        if(KNL_ForUpdate_List.size()>0){
            database.update(KNL_ForUpdate_List);
        }
        
        // If there is a highest Customer Id in System  and also there are records with Empty Customer_ID2__c for KNZ Record Type
        if (Highest_KNZ_CustID!='' ) {
            
            HighestNumberKNZ = Integer.valueof(Highest_KNZ_CustID.substring(4)); 
            
            if (KNZ_EmptyCustId_List.size()>0){      
                System.Debug('HighestNumberKNZ' +HighestNumberKNZ);  
                for (Account KNZ_account: KNZ_EmptyCustId_List){
                    
                    HighestNumberKNZ=HighestNumberKNZ+1;
                    
                    System.Debug('HighestNumberKNZ' +HighestNumberKNZ);  
                    
                    
                    KNZ_account.Customer_ID2__c= 'KNZ-'+ (string.valueof(HighestNumberKNZ));
                    
                    System.Debug('KNZ_account.Customer_ID2__c' +KNZ_account.Customer_ID2__c);  
                    KNZ_ForUpdate_List.add(KNZ_account);
                    
                }
                
                if(KNZ_ForUpdate_List.size()>0){
                    database.update(KNZ_ForUpdate_List);
                }
            }
        }
        
        // If there is a no Customer Id in System  and also there are records with Empty Customer_ID2__c
        if (Highest_KNZ_CustID=='' && KNZ_EmptyCustId_List.size()>0) {
            HighestNumberKNZ=1000000;
            
            for (Account KNZ_account: KNZ_EmptyCustId_List){
                
                HighestNumberKNZ=HighestNumberKNZ+1;
                
                System.debug('HighestNumberKNZ'+HighestNumberKNZ );
                KNZ_account.Customer_ID2__c= 'KNZ-'+ (string.valueof(HighestNumberKNZ));
                
                System.Debug('KNZ_account.Customer_ID2__c' +KNZ_account.Customer_ID2__c);  
                
                KNZ_ForUpdate_List.add(KNZ_account);
                
            }
        }   
        if(KNZ_ForUpdate_List.size()>0){
            database.update(KNZ_ForUpdate_List);
        }
        
        System.Debug('HighestNumberKUS'+HighestNumberKUS);
        System.Debug('HighestNumberKIE'+HighestNumberKIE);
        System.Debug('HighestNumberKCA'+HighestNumberKCA);
        System.Debug('HighestNumberKUK'+HighestNumberKUK);
        System.Debug('HighestNumberKIC'+HighestNumberKIC);
        System.Debug('HighestNumberKDK'+HighestNumberKDK);
        System.Debug('HighestNumberKNL'+HighestNumberKNL);
        System.Debug('HighestNumberKNZ'+HighestNumberKNZ);
        
        for (Account New_Account: Trigger.new){
            
            if(New_Account.RecordtypeId==KUS_RecordTypeId){
                
                if (HighestNumberKUS==0){
                    
                    HighestNumberKUS=1000000;
                    
                    //New_Account.Customer_ID2__c= 'KUS-'+ '1000000';
                }
                if (HighestNumberKUS!=0){
                    
                    HighestNumberKUS=HighestNumberKUS+1;
                    New_Account.Customer_ID2__c= 'KUS-'+ (string.valueof(HighestNumberKUS));
                    
                }
            }
            if(New_Account.RecordtypeId==KIE_RecordTypeId){
                
                if (HighestNumberKIE==0){
                    
                    HighestNumberKIE=1000000;
                    //New_Account.Customer_ID2__c= 'KIE-'+ '1000000';
                }
                if (HighestNumberKIE!=0){
                    HighestNumberKIE=HighestNumberKIE+1;
                    
                    New_Account.Customer_ID2__c= 'KIE-'+ (string.valueof(HighestNumberKIE));
                    
                }
            }
            if(New_Account.RecordtypeId==KCA_RecordTypeId){
                
                if (HighestNumberKCA==0){
                    
                    HighestNumberKCA=1000000;
                    //New_Account.Customer_ID2__c= 'KCA-'+ '1000000';
                }
                if (HighestNumberKCA!=0){
                    HighestNumberKCA=HighestNumberKCA+1;
                    
                    New_Account.Customer_ID2__c= 'KCA-'+ (string.valueof(HighestNumberKCA));
                    
                }
            }
            if(New_Account.RecordtypeId==KUK_RecordTypeId){
                
                if (HighestNumberKUK==0){
                    
                    HighestNumberKUK=1000000;
                    //New_Account.Customer_ID2__c= 'KUK-'+ '1000000';
                }
                if (HighestNumberKUK!=0){
                    HighestNumberKUK=HighestNumberKUK+1;
                    
                    New_Account.Customer_ID2__c= 'KUK-'+ (string.valueof(HighestNumberKUK));
                    
                }
            }
            
            if(New_Account.RecordtypeId==KIC_RecordTypeId){
                
                if (HighestNumberKIC==0){
                    
                    HighestNumberKIC=1000000;
                    
                    //New_Account.Customer_ID2__c= 'KIC-'+ '1000000';
                }
                if (HighestNumberKIC!=0){
                    
                    HighestNumberKIC=HighestNumberKIC+1;
                    New_Account.Customer_ID2__c= 'KIC-'+ (string.valueof(HighestNumberKIC));
                    
                }
            }
            if(New_Account.RecordtypeId==KDK_RecordTypeId){
                
                if (HighestNumberKDK==0){
                    
                    HighestNumberKDK=1000000;
                    //New_Account.Customer_ID2__c= 'KDK-'+ '1000000';
                }
                if (HighestNumberKDK!=0){
                    HighestNumberKDK=HighestNumberKDK+1;
                    
                    New_Account.Customer_ID2__c= 'KDK-'+ (string.valueof(HighestNumberKDK));
                    
                }
            }
            if(New_Account.RecordtypeId==KNL_RecordTypeId){
                
                if (HighestNumberKNL==0){
                    
                    HighestNumberKNL=6000000;
                    //New_Account.Customer_ID2__c= 'KNL-'+ '1000000';
                }
                if (HighestNumberKNL!=0){
                    HighestNumberKNL=HighestNumberKNL+1;
                    
                    New_Account.Customer_ID2__c= 'KNL-'+ (string.valueof(HighestNumberKNL));
                    
                }
            }
            if(New_Account.RecordtypeId==KNZ_RecordTypeId){
                
                if (HighestNumberKNZ==0){
                    
                    HighestNumberKUK=1000000;
                    //New_Account.Customer_ID2__c= 'KNZ-'+ '1000000';
                }
                if (HighestNumberKNZ!=0){
                    HighestNumberKNZ=HighestNumberKNZ+1;
                    
                    New_Account.Customer_ID2__c= 'KNZ-'+ (string.valueof(HighestNumberKNZ));
                    
                }
            }
        }
    }
    catch (Exception e) { 
        
        
    }  */
}