/*
This Trigger will fires on every Insert operation on Docusign Status Object.Trigger will checks if subject field of docusign status SObject contains perticular types of Account along with customer ID or not. if yes, it calls J2_Docusign_Account_Update trigger to update an account field on docusign status of that customer Id. 
---------------------------------------------------------------------------------       
@author        Akash Mistry
@version       1.0
@created       8/29/2018
@modified     
@see           J2_Docusign_Account_Update.apxt
*/
trigger J2_Docusign_Account_Update on dsfs__DocuSign_Status__c (After insert) {
    
    String customernumber = '';
    String customerPrefix = '';
    String customerId = '';
    // Created Map to replace account type with prefix to match with customer id of salesforce
    Map<String,String> mapPrefix = New Map<String,String>(); 
    mapPrefix.put('MyFax','MFX-');
    mapPrefix.put('eFax','ISP-');
    mapPrefix.put('Metrofax','MTX-');
    mapPrefix.put('eFax Corporate','ISP-');
    mapPrefix.put('Developer','DOC-');
    
    List<dsfs__DocuSign_Status__c> lstToUpdateDocusignStatus = new List<dsfs__DocuSign_Status__c>();
    for(dsfs__DocuSign_Status__c ds : trigger.New) {
        // Checking that subject contains the string or not
        if(ds.dsfs__Subject__c != null && (ds.dsfs__Subject__c.contains('Please sign attached LOA for MyFax Account#') || ds.dsfs__Subject__c.contains('Please sign attached LOA for eFax Account#') || ds.dsfs__Subject__c.contains('Please sign attached LOA for Metrofax Account#') || ds.dsfs__Subject__c.contains('Please sign attached LOA for MyFax Account#') || ds.dsfs__Subject__c.contains('Please sign attached LOA for eFax Corporate Account#') || ds.dsfs__Subject__c.contains('Please sign attached LOA for Developer Account#')) ){
            
            customernumber = ds.dsfs__Subject__c;
            customernumber = customernumber.replaceAll('[^0-9]', ''); // finding customer number from subject
            system.debug('ACNT:-'+customernumber);
            if(customernumber != null && customernumber != ''){
                for(String str : mapPrefix.keySet()){
                    Pattern p = Pattern.compile('\\b'+str+'\\b'); // finding type of account that subject has 
                    Matcher pm = p.matcher(ds.dsfs__Subject__c);
                    if( pm.find() ) {
                        customerPrefix = pm.group(0); 
                        system.debug('MATCH:-'+customerPrefix);
                        customerId = mapPrefix.get(customerPrefix)+customernumber; // create final valid customer ID that salesforce is storing
                        system.debug('FINAL:-'+customerId);
                    }
                }
                system.debug('customer id : ' + customerId);
                Account[] accountID = [select Id from Account where Customer_ID__c =: customerId]; // Searching an account basis on customer ID
                system.debug('ACNT:-'+accountID.size());
                if(accountID.size() > 0){
                    dsfs__DocuSign_Status__c dsc = new dsfs__DocuSign_Status__c(id=ds.Id,dsfs__Company__c = accountID[0].id); // Assigning accountId to company field in docusign status SObject
                    lstToUpdateDocusignStatus.add(dsc);    
                }
            }
        }
    }
    if(lstToUpdateDocusignStatus.size() > 0){
        update lstToUpdateDocusignStatus; // Updating docusign status SObject    
    }
}