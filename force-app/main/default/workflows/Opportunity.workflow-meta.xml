<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Efax_Corp_Sfax_Email_Alert_Opportunity_create_and_update</fullName>
        <description>Efax Corp &amp; Sfax: Email Alert Opportunity create and update</description>
        <protected>false</protected>
        <recipients>
            <recipient>michael.teller@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>ne.archan.bhachech@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderAddress>j2salesforceadmin@j2.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>eFaxCorporateSalesMktg/eFax_Corp_Sfax_Email_on_Create_or_Update_Opp</template>
    </alerts>
    <alerts>
        <fullName>Enterprise_Reps_deal_close_notification_alert</fullName>
        <description>Send email to Michael Teller, Nick Dipasquale, and Todd Weiner when opportunity is closed won</description>
        <protected>false</protected>
        <recipients>
            <recipient>michael.teller@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>nicholas.dipasquale@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>todd.weiner@j2global.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>All_Templates/Enterprise_Reps_deal_close_notification_Template</template>
    </alerts>
    <alerts>
        <fullName>Order_Appliance</fullName>
        <ccEmails>NetOpsAlerts@keepitsafe.com</ccEmails>
        <description>Order Appliance</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe/Order_Appliance</template>
    </alerts>
    <fieldUpdates>
        <fullName>Change_opp_close_date_to_Today</fullName>
        <description>This sets opportunity close date to today for eFax Corporate Opp and eFax Opportunity</description>
        <field>CloseDate</field>
        <formula>TODAY()</formula>
        <name>Change opp close date to Today</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Consensus_Opp_Update_AdminTrainingFee</fullName>
        <field>Admin_Training_Fee__c</field>
        <formula>0</formula>
        <name>Consensus: Opp Update AdminTrainingFee</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Fonebox_Update_Opportunity_record_type</fullName>
        <description>Update opportunity record type to Fonebox: Opportunity</description>
        <field>RecordTypeId</field>
        <lookupValue>Fonebox_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Fonebox: Update Opportunity record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Include_in_Next_Weekly_Report_Reset</fullName>
        <field>Include_in_Next_Weekly_Report__c</field>
        <literalValue>0</literalValue>
        <name>Include in Next Weekly Report Reset</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KIS_Opportunity_Record_Type_Update_from</fullName>
        <field>RecordTypeId</field>
        <lookupValue>Keepitsafe_Record_Type</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>KIS Opportunity Record Type Update from</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Line2_Update_Opportunity_Record_Type</fullName>
        <description>Line2: Opportunity update opportunity record type</description>
        <field>RecordTypeId</field>
        <lookupValue>Line2_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Line2: Update Opportunity Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Opportunity_RecordType</fullName>
        <description>Livevault: Update Opportunity Record Type</description>
        <field>RecordTypeId</field>
        <lookupValue>Livevault_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Livevault: Update Opportunity RecordType</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Opportunity_Record_Type</fullName>
        <description>update opportunity record type</description>
        <field>RecordTypeId</field>
        <lookupValue>Sfax_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Sfax: Update Opportunity Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Store_Amount_Prior_Value</fullName>
        <description>SFSD-1257 Store Amount prior value</description>
        <field>Amount_Prior_Value__c</field>
        <formula>IF( ISCHANGED(   Amount ) ,  TEXT(PRIORVALUE(Amount)) , &apos;&apos;)</formula>
        <name>Store Amount Prior Value</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Store_CloseDate_Prior_Value</fullName>
        <description>SFSD-1257 Store close date prior value</description>
        <field>CloseDate_Prior_Value__c</field>
        <formula>IF( ISCHANGED(  CloseDate ) ,  TEXT(PRIORVALUE(CloseDate)),&apos;&apos;)</formula>
        <name>Store CloseDate Prior Value</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Store_Stage_Prior_Value</fullName>
        <description>SFSD-1257 Store Stage Prior Value</description>
        <field>Stage_Prior_Value__c</field>
        <formula>IF( ISCHANGED( StageName ) , TEXT(PRIORVALUE(StageName)) , &apos;&apos;)</formula>
        <name>Store Stage Prior Value</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Close_Date_to_45_days_out</fullName>
        <description>SFSD-1643 Update Close date to 45 days out</description>
        <field>CloseDate</field>
        <formula>CreatedDate + 45</formula>
        <name>Update Close Date to 45 days out</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Contract_Signed_Status</fullName>
        <description>Update Contract Signed Status</description>
        <field>Docusign_Contract_Status__c</field>
        <literalValue>Contract Not Signed</literalValue>
        <name>Update Contract Signed Status</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>AccountId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_FuseMail_Amount</fullName>
        <description>FuseMail® Lead Amount - For Opportunity Update</description>
        <field>Amount</field>
        <formula>Amount_FuseMail__c</formula>
        <name>Update FuseMail Amount</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Lead_Date</fullName>
        <field>Lead_Date__c</field>
        <formula>Lead_Date1__c</formula>
        <name>Update Lead Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Lead_Source_Type</fullName>
        <field>Lead_Source_Type__c</field>
        <formula>Account.Lead_Source_Type__c</formula>
        <name>Update Lead Source Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Negative_Amount</fullName>
        <field>Amount</field>
        <formula>Amount  * -1</formula>
        <name>Update Negative Amount</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Stage</fullName>
        <field>StageName</field>
        <literalValue>Closed Won</literalValue>
        <name>Update Stage</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Stage_to_Closed_Won</fullName>
        <field>StageName</field>
        <literalValue>Closed Won</literalValue>
        <name>Update Stage to Closed Won</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_j2_Campaign_Tracking</fullName>
        <field>J2_Campaign_Tracking__c</field>
        <formula>J2_Campaign_Tracking__c</formula>
        <name>Update j2 Campaign Tracking</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>AccountId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_opportunity_record_type_to_keepit</fullName>
        <field>RecordTypeId</field>
        <lookupValue>Keepitsafe_Record_Type</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Update opportunity record type to keepit</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eFax_AU_Update_Opportunity_record_type</fullName>
        <field>RecordTypeId</field>
        <lookupValue>eFax_AU_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eFax AU: Update Opportunity record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_AU_Update_Opportunity_record_typ</fullName>
        <description>update opportunity record type eVoice AU</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_AU_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice AU: Update Opportunity record typ</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_NZ_Update_Opportunity_record_typ</fullName>
        <description>update opportunity record type eVoice NZ</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_NZ_Opportunity</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice NZ: Update Opportunity record typ</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>rvee__AssignedToPartnerModified</fullName>
        <field>rvpe__PartnerLastModifiedDate__c</field>
        <name>Assigned to Partner Modified</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Null</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>rvee__AssignedToPartnerPending</fullName>
        <field>rvpe__PartnerOpportunityAcceptance__c</field>
        <literalValue>Pending</literalValue>
        <name>Assigned to Partner Pending</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>rvee__AssignedToPartnerTimestamp</fullName>
        <field>rvpe__DateAssignedToPartner__c</field>
        <formula>NOW()</formula>
        <name>Assigned to Partner Timestamp</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>rvee__NotifyRVMemberReset</fullName>
        <field>rvpe__NotifyRVMember__c</field>
        <literalValue>0</literalValue>
        <name>Notify RV Member Reset</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <outboundMessages>
        <fullName>Deal_Registration_Approved_Outbound</fullName>
        <apiVersion>42.0</apiVersion>
        <endpointUrl>https://partners.keepitsafe.com/services/SFDC-DealRegistrationApproved.ashx</endpointUrl>
        <fields>Id</fields>
        <includeSessionId>false</includeSessionId>
        <integrationUser>peter.ely@j2.com</integrationUser>
        <name>Deal Registration Approved Outbound</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Notify_Partner_Outbound</fullName>
        <apiVersion>42.0</apiVersion>
        <endpointUrl>https://partners.keepitsafe.com/services/SFDC-OpportunityNotifyRVMember.ashx</endpointUrl>
        <fields>Id</fields>
        <includeSessionId>false</includeSessionId>
        <integrationUser>peter.ely@j2.com</integrationUser>
        <name>Notify Partner Outbound</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <rules>
        <fullName>Consensus Opportunity Stage Closed Won</fullName>
        <actions>
            <name>Update_Stage_to_Closed_Won</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.SBQQ__Ordered__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Efax Corp %26 Sfax%3A Send Email on Create Opp</fullName>
        <actions>
            <name>Efax_Corp_Sfax_Email_Alert_Opportunity_create_and_update</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>equals</operation>
            <value>Sfax: Opportunity,eFax Corporate Opp</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.Amount</field>
            <operation>greaterOrEqual</operation>
            <value>4000</value>
        </criteriaItems>
        <description>Efax Corp: Send Email on Create Opp</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Efax Corp %26 Sfax%3A Send Email on Update Opp</fullName>
        <actions>
            <name>Efax_Corp_Sfax_Email_Alert_Opportunity_create_and_update</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Store_Amount_Prior_Value</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Store_CloseDate_Prior_Value</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Store_Stage_Prior_Value</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>Efax Corp: Send Email on Update Opp</description>
        <formula>AND( 
OR(Probability != 100, Probability != 0),
OR(
AND(
Amount&gt;= 4000, 
OR(
RecordType.DeveloperName= &apos;eFax_Corporate_Opp_Layout&apos;, RecordType.DeveloperName=&apos;Sfax_Opportunity&apos;
),
OR(
ISCHANGED(StageName),
ISCHANGED( CloseDate ),
ISCHANGED( OwnerId )
)
),
(
AND(
OR(Amount&lt; 4000,ISBLANK(Amount)),
OR(
RecordType.DeveloperName= &apos;eFax_Corporate_Opp_Layout&apos;, RecordType.DeveloperName=&apos;Sfax_Opportunity&apos;
), 
PRIORVALUE(Amount) &gt;= 4000)
)
)
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Enterprise Reps deal close notification rule</fullName>
        <actions>
            <name>Enterprise_Reps_deal_close_notification_alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <description>SFSD-572
Notify Michael Teller, Nick Dipasquale, and Todd Weiner when opp is closed won by Edward Ross, Jonathan Epstein, Rich King, Rich Petovello, Kent Montgomery, Jim Synk, Nick Dipasquale, Richard Solomon, Rusty Hoge, and Steve Coffman
SFSD-1888</description>
        <formula>AND(ISPICKVAL(StageName,&apos;Closed Won&apos;),
 OR(($User.Id =&apos;0050e000006EoGf&apos;),
   ($User.Id  =&apos;00560000000rgiV&apos;),
   ($User.Id  =&apos;00530000000k7s2&apos;),
   ($User.Id  =&apos;0050e000006asJ8&apos;),
   ($User.Id  =&apos;0050e000006z4X0&apos;),
   ($User.Id  =&apos;00530000000k7tP&apos;),
   ($User.Id  =&apos;00560000001IOQU&apos;),
   ($User.Id  =&apos;005600000017ULq&apos;),
   ($User.Id  =&apos;00530000000k7tL&apos;),
   ($User.Id  =&apos;00560000000rbaW&apos;),
   ($User.Id  =&apos;00530000000k7te&apos;),
   ($User.Id =&apos;005600000019F2G&apos;),
   ($User.Id =&apos;00530000000k7u3&apos;),
   ($User.Id =&apos;0050e000006sVox&apos;),
   ($User.Id =&apos;0050e000007AvkY&apos;),
   ($User.Id =&apos;0050e000007Y0vr&apos;),
   ($User.Id =&apos;00532000004nnHP&apos;),
   ($User.Id =&apos;0050e000006at5v&apos;),
   ($User.Id =&apos;0050e000007Aq0L&apos;),
   ($User.Id =&apos;0050e000007Aq0Q&apos;),
   ($User.Id =&apos;00560000000raY5&apos;))
)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Fonebox%3A Update Opportunity record type</fullName>
        <actions>
            <name>Fonebox_Update_Opportunity_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Fonebox: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Fonebox: Lead</value>
        </criteriaItems>
        <description>update opportunity record type to fonebox</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Include in Next Weekly Report Reset</fullName>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.Include_in_Next_Weekly_Report__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <actions>
                <name>Include_in_Next_Weekly_Report_Reset</name>
                <type>FieldUpdate</type>
            </actions>
            <offsetFromField>Opportunity.Date_of_the_next_Sunday__c</offsetFromField>
            <timeLength>1</timeLength>
            <workflowTimeTriggerUnit>Hours</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
    <rules>
        <fullName>KIS Opportunity Record Type Update from Lead</fullName>
        <actions>
            <name>KIS_Opportunity_Record_Type_Update_from</name>
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
        <fullName>Line2%3A Update Opportunity Record Type</fullName>
        <actions>
            <name>Line2_Update_Opportunity_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Line2: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Line2: Lead</value>
        </criteriaItems>
        <description>update opportunity record type</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Livevault%3A Update Opportunity Record Type</fullName>
        <actions>
            <name>Livevault_Update_Opportunity_RecordType</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Livevault: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Livevault: Lead</value>
        </criteriaItems>
        <description>update opportunity record type</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Negative Amount</fullName>
        <actions>
            <name>Update_Negative_Amount</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.Type</field>
            <operation>equals</operation>
            <value>Downgrade,Cancellation</value>
        </criteriaItems>
        <description>Negative Amount when stage is Cancellation or Downgrade</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Opportunity%3A KIS - Quote Accepted</fullName>
        <actions>
            <name>Update_Contract_Signed_Status</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Update_Stage</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Please_Start_the_On_Boarding_Process</name>
            <type>Task</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.Quote_is_Accepted__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>KIS - Opportunity - Customer Quote has been Accepted</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Order Appliance</fullName>
        <actions>
            <name>Order_Appliance</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.Product__c</field>
            <operation>contains</operation>
            <value>Appliance</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>equals</operation>
            <value>Closed - Won</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Update Opportunity Record Type</fullName>
        <actions>
            <name>Sfax_Update_Opportunity_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Sfax: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Sfax: Lead</value>
        </criteriaItems>
        <description>update opportunity record type</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update Lead Convert Values</fullName>
        <actions>
            <name>Update_Lead_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Update_j2_Campaign_Tracking</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.CreatedDate</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <description>eFax: Corporate Mapping lead field values from lead to account to opportunity</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Update Opportunity Close Date to Today</fullName>
        <actions>
            <name>Change_opp_close_date_to_Today</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Opportunity,eFax Corporate Opp</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>equals</operation>
            <value>Closed Won,Closed Lost</value>
        </criteriaItems>
        <description>This will set opportunity close date to today
For eFax Corporate and Keepitsafe</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update opportunity record type to keepitsafe when account is KIS</fullName>
        <actions>
            <name>Update_opportunity_record_type_to_keepit</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>KeepItSafe: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafeNL,KeepItSafeNZ,KeepItSafeDK,KeepItSafe,KeepItSafeUS,KeepItSafeCA,KeepItSafeUK,KeepItSafeIC</value>
        </criteriaItems>
        <description>Update Opportunity record type to keepitsafe when account is KIS</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eFax %26 eFax Corp%3A Set Close Date to 45 days out</fullName>
        <actions>
            <name>Update_Close_Date_to_45_days_out</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Opportunity,eFax Corporate Opp</value>
        </criteriaItems>
        <criteriaItems>
            <field>Opportunity.Probability</field>
            <operation>notEqual</operation>
            <value>100,0</value>
        </criteriaItems>
        <description>SFSD-1643 Update Close Date to 45 days out</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>eFax AU%3A Update Opportunity record type</fullName>
        <actions>
            <name>eFax_AU_Update_Opportunity_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eFax AU: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eFax AU</value>
        </criteriaItems>
        <description>update opportunity record type eFax AU</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eVoice AU%3A Update Opportunity record type</fullName>
        <actions>
            <name>eVoice_AU_Update_Opportunity_record_typ</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eVoice AU: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice AU: Lead</value>
        </criteriaItems>
        <description>update opportunity record type eVoice AU</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eVoice NZ%3A Update Opportunity record type</fullName>
        <actions>
            <name>eVoice_NZ_Update_Opportunity_record_typ</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Opportunity.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eVoice NZ: Opportunity</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice NZ: Lead</value>
        </criteriaItems>
        <description>update opportunity record type eVoice NZ</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>rvee__Assigned to Partner</fullName>
        <actions>
            <name>rvee__AssignedToPartnerModified</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>rvee__AssignedToPartnerPending</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>rvee__AssignedToPartnerTimestamp</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <formula>(rvpe__IsDealRegistration__c == false) &amp;&amp; (ISNEW() || ISCHANGED(rvpe__RVMember__c)) &amp;&amp; (rvpe__RVMember__c != null)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>rvee__Deal Registration Approved</fullName>
        <actions>
            <name>Deal_Registration_Approved_Outbound</name>
            <type>OutboundMessage</type>
        </actions>
        <active>false</active>
        <formula>(rvpe__IsDealRegistration__c == true)</formula>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>rvee__Notify RV Member</fullName>
        <actions>
            <name>rvee__NotifyRVMemberReset</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Notify_Partner_Outbound</name>
            <type>OutboundMessage</type>
        </actions>
        <active>false</active>
        <formula>(rvpe__NotifyRVMember__c == true)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <tasks>
        <fullName>Please_Start_the_On_Boarding_Process</fullName>
        <assignedToType>owner</assignedToType>
        <description>Please initiate the following processes on the Account screen -  New Account On-Boarding Process Section:

1) Initiate a Docusign Contract
2) Open the Install Case - Assign the Install case to a Technical Engineer</description>
        <dueDateOffset>0</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <priority>High</priority>
        <protected>false</protected>
        <status>Customer Quote Required</status>
        <subject>Please Start the On Boarding Process</subject>
    </tasks>
</Workflow>
