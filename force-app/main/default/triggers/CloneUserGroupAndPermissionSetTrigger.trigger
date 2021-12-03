trigger CloneUserGroupAndPermissionSetTrigger on User (after insert) {
    List<User> userList=new List<User>(); //list of user to get value of the custom field(Cloned_From__C) and assign the user id to public group and permission set
    List<User> userToUpdate=new List<User>(); // update list of users to clear the field value of Cloned_From__c  
    List<GroupMember> newGroupMembers=new List<GroupMember>(); //assign users to the groups
    List<PermissionSetAssignment> newAssignments = new List<PermissionSetAssignment>(); //assign permission set to users
    List<ID> ListCloneFromUserID = new List<ID>();
    
    //get all users whose Cloned_From__C value is not null and contains id of some user and add all users to the list(usersList)
    for(User newUser:trigger.new){
        if(newUser.Cloned_from__c !=null){
            userList.add(newUser);     
            ListCloneFromUserID.add(newUser.Cloned_From__c);
        }
    }    
    List<GroupMember> ListGroupMember = [select GroupId,userorGroupId  from GroupMember where userorGroupId in :ListCloneFromUserID];
    List<PermissionSetAssignment> ListPermissionAssignment=[SELECT PermissionSetId, AssigneeId FROM PermissionSetAssignment WHERE 
                                                            AssigneeId in :ListCloneFromUserID AND PermissionSetId IN (SELECT Id FROM PermissionSet WHERE IsOwnedByProfile=false)];
    
    for(User userToAssign:userList){
        Id currentClonedFromUser = userToAssign.Cloned_From__c;
        //for every user in userList assign to public groups and permission set
        for(GroupMember member: ListGroupMember){
            if(currentClonedFromUser == member.UserOrGroupId){ 
                newGroupMembers.add(new GroupMember(GroupId=member.GroupId,UserorGroupId=userToAssign.Id));    
            }
        }
        //assign user to permission set
        for (PermissionSetAssignment assignment : ListPermissionAssignment){
            if(currentClonedFromUser == assignment.AssigneeId){
                newAssignments.add(new PermissionSetAssignment(PermissionSetId=assignment.PermissionSetId, AssigneeId=userToAssign.Id ));
            }
        }
        //clear the value in Cloned_from__C field 
        User user=new User(Id=userToAssign.Id);
        user.Cloned_from__c=null;
        userToUpdate.add(user);
    } 
    try{
        insert newGroupMembers;  
        insert newAssignments;
        update userToUpdate;
    }
    catch(Exception e){
        ApexPages.addMessages(e);
    }  
}