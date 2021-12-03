<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>KIS_At_Risk_Email_Notification</fullName>
        <ccEmails>accounts@keepitsafe.com</ccEmails>
        <description>KIS At Risk Email Notification</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_At_Risk_Billing_Status</template>
    </alerts>
    <alerts>
        <fullName>KIS_Install_Load_is_complete</fullName>
        <ccEmails>ne.jai.kumar@j2.com</ccEmails>
        <description>KIS: Install Load is complete</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/Install_case_Completed</template>
    </alerts>
    <alerts>
        <fullName>KIS_Open_the_Install_Case</fullName>
        <description>KIS: Assign and Open the Install Case</description>
        <protected>false</protected>
        <recipients>
            <field>Assign_IC__c</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/Install_Case_Assigned</template>
    </alerts>
    <alerts>
        <fullName>KIS_Seed_Load_is_requested</fullName>
        <ccEmails>ne.jai.kumar@j2.com</ccEmails>
        <description>KIS: Seed Load is requested</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_HDD_Request_Form</template>
    </alerts>
    <alerts>
        <fullName>Pending_KIS_Account_5_Days</fullName>
        <description>Pending KIS Account - 5 Days</description>
        <protected>false</protected>
        <recipients>
            <recipient>KeepItSafe_IRE_Customer_Service</recipient>
            <type>role</type>
        </recipients>
        <recipients>
            <recipient>KeepItSafe_US_Customer_Service</recipient>
            <type>role</type>
        </recipients>
        <senderType>DefaultWorkflowUser</senderType>
        <template>All_Templates/SUPPORTWebtoCaseemailresponseSAMPLE</template>
    </alerts>
    <alerts>
        <fullName>SEPA_DD_Germany_Account_Email_Alert</fullName>
        <description>Sends email to user on new SEPA DD customer record creation</description>
        <protected>false</protected>
        <recipients>
            <recipient>Germany_Direct_Debit</recipient>
            <type>group</type>
        </recipients>
        <senderAddress>lastschriftverfahren.de@efax.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>SEPA_Direct_Debit_Germany/German_eFax_Account_Notification</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Account_Plan_Change_Notification</fullName>
        <description>Sfax: Account Plan Change Notification</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Account_Plan_Change</template>
    </alerts>
    <fieldUpdates>
        <fullName>Close_Date_update</fullName>
        <field>Account_Close_Date__c</field>
        <formula>NOW()</formula>
        <name>Close Date update</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Country_Code_to_Billing_Country</fullName>
        <field>BillingCountry</field>
        <formula>TEXT(Country_Code__c)</formula>
        <name>Country Code to Billing Country</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Fonebox_Update_Account_Record_Type</fullName>
        <description>Update account record type based on Account record type (hidden)</description>
        <field>RecordTypeId</field>
        <lookupValue>Fonebox_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Fonebox: Update Account Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KIS_Account_Record_Type_Update_from_Lead</fullName>
        <field>RecordTypeId</field>
        <lookupValue>KeepItSafeUS</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>KIS Account Record Type Update from Lead</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KIS_Closed</fullName>
        <field>Type</field>
        <literalValue>Former Customer</literalValue>
        <name>KIS Closed</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KIS_Contract_DocuSign_Completed</fullName>
        <description>Checkbox indicating that the KIS EU or US contract has been signed.</description>
        <field>Contract_Signed__c</field>
        <literalValue>1</literalValue>
        <name>KIS Contract/DocuSign Completed</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KeepItSafe_Clear_Commission_Fixed</fullName>
        <field>Commission__c</field>
        <name>KeepItSafe Clear Commission (Fixed)</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Null</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KeepItSafe_Clear_Commission_Variable</fullName>
        <field>Commission_Variable_Percentage__c</field>
        <name>KeepItSafe Clear Commission (Variable %)</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Null</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Line2_Update_Account_Record_Type</fullName>
        <description>update account record type based on Account record type (hidden) Line2: Account</description>
        <field>RecordTypeId</field>
        <lookupValue>Line2_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Line2: Update Account Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_AccountStatus_toActive</fullName>
        <description>update account status to Active</description>
        <field>Account_Status__c</field>
        <literalValue>Active</literalValue>
        <name>Livevault: Update AccountStatus toActive</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_AccountType_toProspect</fullName>
        <description>Livevault: Update Account Type to Prospect</description>
        <field>Type</field>
        <literalValue>Prospect</literalValue>
        <name>Livevault: Update AccountType toProspect</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Account_Brand</fullName>
        <description>update account brand</description>
        <field>Brand__c</field>
        <literalValue>LiveVault®</literalValue>
        <name>Livevault: Update Account Brand</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Account_Record_Type</fullName>
        <description>update account record type based on Account record type (hidden)</description>
        <field>RecordTypeId</field>
        <lookupValue>LiveVault_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Livevault: Update Account Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Payment_Terms_New</fullName>
        <description>Livevault: Update Payment Terms New to Upon Receipt</description>
        <field>Payment_Terms_New__c</field>
        <literalValue>Upon Receipt</literalValue>
        <name>Livevault: Update Payment Terms New</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>ReOpened_Reason_to_no_value</fullName>
        <field>Reason__c</field>
        <name>ReOpened = Reason to no value</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Reopened_Customer_from_Former_customer</fullName>
        <description>Reopened = Customer from Former customer</description>
        <field>Type</field>
        <literalValue>Customer</literalValue>
        <name>Reopened = Customer from Former customer</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Account_Brand</fullName>
        <description>update account brand</description>
        <field>Brand__c</field>
        <literalValue>Sfax</literalValue>
        <name>Sfax: Update Account Brand</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Account_Record_Type</fullName>
        <description>update account record type based on Account record type (hidden)</description>
        <field>RecordTypeId</field>
        <lookupValue>Sfax_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Sfax: Update Account Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Account_Status_to_Qualified</fullName>
        <description>update account status to qualified</description>
        <field>Status__c</field>
        <literalValue>Qualified</literalValue>
        <name>Sfax: Update Account Status to Qualified</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Account_Terms_to_Net_30</fullName>
        <description>update account terms to Net 30</description>
        <field>Terms__c</field>
        <literalValue>Net 30</literalValue>
        <name>Sfax: Update Account Terms to Net 30</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Timestamp_last_modified_date</fullName>
        <description>Timestamp=last modified date</description>
        <field>Time_Stamp__c</field>
        <formula>LastModifiedDate</formula>
        <name>Timestamp=last modified date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Type_marked_to_Customer_KIS</fullName>
        <description>Type marked to Customer (KIS)</description>
        <field>Type</field>
        <literalValue>Customer</literalValue>
        <name>Type marked to Customer (KIS)</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Lead_Source_on_Conversion</fullName>
        <description>Update Account Lead Source value when a Lead is Converted</description>
        <field>Lead_Source__c</field>
        <name>Update Lead Source on Conversion</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Null</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eFax_AU_Update_Account_record_type</fullName>
        <field>RecordTypeId</field>
        <lookupValue>eFax_AU_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eFax AU Update Account record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_AU_Update_Account_record_type</fullName>
        <description>update account record type</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_AU_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice AU: Update Account record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_NZ_Update_Account_record_type</fullName>
        <description>update account record type</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_NZ_Account</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice NZ: Update Account record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Account Close Date update</fullName>
        <actions>
            <name>Close_Date_update</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <formula>AND(       ISCHANGED( Status__c ),  NOT(ISPICKVAL( Status__c , &quot;Active&quot;))   )</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Account%3A KIS - Type is Updated on Re-Opened Status</fullName>
        <actions>
            <name>ReOpened_Reason_to_no_value</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Reopened_Customer_from_Former_customer</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>Re-Opened</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafe,KeepItSafeUS,KeepItSafeCA,KeepItSafeUK,KeepItSafeIC</value>
        </criteriaItems>
        <description>Account Status Re-Opened - Type to Customer from Former Customer</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Account%3A KIS Invoice update Active accounts to Type%3A CUSTOMER</fullName>
        <actions>
            <name>ReOpened_Reason_to_no_value</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Type_marked_to_Customer_KIS</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>Active</value>
        </criteriaItems>
        <description>If Account Status is updated to ACTIVE on a KIS account, mark the Type to ACTIVE</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Account%3AKIS TimeStamp is updated when Type%3A Former Customer</fullName>
        <actions>
            <name>Timestamp_last_modified_date</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Type</field>
            <operation>equals</operation>
            <value>Former Customer</value>
        </criteriaItems>
        <description>Account:KIS TimeStamp field is updated when Type is equal to Former Customer.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Billing Country Update</fullName>
        <actions>
            <name>Country_Code_to_Billing_Country</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Country_Code__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>Keepitsafe</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Fonebox%3A Update Account Record type</fullName>
        <actions>
            <name>Fonebox_Update_Account_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Fonebox: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Fonebox: Lead</value>
        </criteriaItems>
        <description>update account record type to Fonebox: Account when converted.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS Account Record Type Update from Lead</fullName>
        <actions>
            <name>KIS_Account_Record_Type_Update_from_Lead</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>KeepItSafe: Corporate Lead</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>KIS At Risk Email Notification</fullName>
        <actions>
            <name>KIS_At_Risk_Email_Notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafeUS,KeepItSafeCA</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>At Risk - KIS</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS Lead conversion by efax reps</fullName>
        <active>false</active>
        <criteriaItems>
            <field>Account.Lead_Brand__c</field>
            <operation>equals</operation>
            <value>KeepItSafe</value>
        </criteriaItems>
        <description>Keeps the KIS record type on account when converted by efax reps</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS Status is Closed - Mark as former customer</fullName>
        <actions>
            <name>KIS_Closed</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>Closed</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafe,KeepItSafeUS</value>
        </criteriaItems>
        <description>Status is Closed - Mark as former customer</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS%3A Assign Install Case</fullName>
        <actions>
            <name>KIS_Open_the_Install_Case</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Install_load_needs_to_be_completed</name>
            <type>Task</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Open_Install_Case__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Assign_IC__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <description>KIS: An Install Case is required and has been assigned</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS%3A Customer On-boarding is Complete</fullName>
        <actions>
            <name>KIS_Install_Load_is_complete</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.KIS_Install_Load_Resolved__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>KIS - The customer Ob-boarding is complete, congratulations on a job well done.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS%3A Seed Load is Requested</fullName>
        <actions>
            <name>KIS_Seed_Load_is_requested</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Request_Seed_Load_KIS__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>KIS New Customer requires a Seed Load to close their Install Case</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KeepItSafe Clear Commissions</fullName>
        <actions>
            <name>KeepItSafe_Clear_Commission_Fixed</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>KeepItSafe_Clear_Commission_Variable</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafe,KeepItSafeUS,KeepItSafeCA,KeepItSafeUK,KeepItSafeIC</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Type</field>
            <operation>equals</operation>
            <value>Cancelled,Former Customer</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>Closed</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Line2%3A Update Account Record Type</fullName>
        <actions>
            <name>Line2_Update_Account_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Line2: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Line2: Lead</value>
        </criteriaItems>
        <description>update account record type to Line2: account</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Livevault%3A Update Account Record Type</fullName>
        <actions>
            <name>Livevault_Update_AccountStatus_toActive</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_AccountType_toProspect</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_Account_Brand</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_Account_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_Payment_Terms_New</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>LiveVault: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Livevault: Lead</value>
        </criteriaItems>
        <description>update account record type to LiveVault: Account</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>SEPA DD Germany Account Creation</fullName>
        <actions>
            <name>SEPA_DD_Germany_Account_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Collection_Method__c</field>
            <operation>equals</operation>
            <value>Intl-Invoice-DirectDebit</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Status__c</field>
            <operation>equals</operation>
            <value>Review</value>
        </criteriaItems>
        <description>Sends email notifications to users on Account Creation</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Account Plan Change Notification</fullName>
        <actions>
            <name>Sfax_Account_Plan_Change_Notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <formula>AND(ISCHANGED( Sfax_Plan__c), RecordType.DeveloperName=&apos;Sfax_Account&apos;)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Update Account Record Type</fullName>
        <actions>
            <name>Sfax_Update_Account_Brand</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Sfax_Update_Account_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Sfax_Update_Account_Status_to_Qualified</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Sfax_Update_Account_Terms_to_Net_30</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Sfax: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Sfax: Lead</value>
        </criteriaItems>
        <description>update account record type to sfax: account</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eFax AU%3A Update Account record type</fullName>
        <actions>
            <name>eFax_AU_Update_Account_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>contains</operation>
            <value>eFax AU</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>eVoice AU%3A Update Account record type</fullName>
        <actions>
            <name>eVoice_AU_Update_Account_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>eVoice AU: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice AU: Lead</value>
        </criteriaItems>
        <description>update account record type to eVoice: AU</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eVoice NZ%3A Update Account record type</fullName>
        <actions>
            <name>eVoice_NZ_Update_Account_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eVoice NZ: Account</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice NZ: Lead</value>
        </criteriaItems>
        <description>update account record type to eVoice: NZ</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <tasks>
        <fullName>Install_load_needs_to_be_completed</fullName>
        <assignedToType>owner</assignedToType>
        <description>Please follow up on your Install Load for your new customer.</description>
        <dueDateOffset>3</dueDateOffset>
        <notifyAssignee>true</notifyAssignee>
        <priority>High</priority>
        <protected>false</protected>
        <status>Install Load Required</status>
        <subject>Install load needs to be completed</subject>
    </tasks>
</Workflow>
