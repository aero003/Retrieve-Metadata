trigger FormatAccountBillingStreet on Account (before Insert, before Update, after update) {

    String formatedBillingAddress='';
    List<String> FormatBilligAddress_List= new List<String>();

     for (Account acc : Trigger.new){
        try{
                    if(acc.BillingStreet!=null && acc.BillingStreet!=''){
                        FormatBilligAddress_List= acc.BillingStreet.split('\r\n',0);
                            if(FormatBilligAddress_List.size()>3){
                                 formatedBillingAddress=FormatBilligAddress_List[0]+'\r\n'+FormatBilligAddress_List[1]+'\r\n';
                                 integer i = 0;
                                        for (i=2; i<FormatBilligAddress_List.size(); i++){ 
                                        
                                             if(i!=FormatBilligAddress_List.size()-1){
                                                formatedBillingAddress+=FormatBilligAddress_List[i]+' / ';
                                             } else 
                                             
                                             formatedBillingAddress+=FormatBilligAddress_List[i];
                                        }
                                            acc.BillingStreet=formatedBillingAddress;
                                  
                                    }
                    }
        }catch (Exception e){
        }
     }
}