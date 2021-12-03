<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>A_KIS_HDD_is_awaiting_approval</fullName>
        <description>A KIS HDD is awaiting approval</description>
        <protected>false</protected>
        <recipients>
            <recipient>javier.garcia@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>kent.o&apos;donnell@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_HDD_Request_Form</template>
    </alerts>
    <alerts>
        <fullName>Alert_to_Javier_on_KIS_HDD_Tracker_event</fullName>
        <description>Alert to Javier on KIS HDD Tracker event</description>
        <protected>false</protected>
        <recipients>
            <recipient>KIS</recipient>
            <type>group</type>
        </recipients>
        <recipients>
            <recipient>KeepItSafe_US_Group</recipient>
            <type>group</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_HDD_Request_Form</template>
    </alerts>
    <alerts>
        <fullName>Follow_Up_with_Customer_on_KIS_HDD</fullName>
        <description>Follow Up with Customer on KIS HDD</description>
        <protected>false</protected>
        <recipients>
            <field>Requested_By__c</field>
            <type>userLookup</type>
        </recipients>
        <recipients>
            <field>Sent_By__c</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_HDD_Tracking_Status_is_Completed</template>
    </alerts>
    <alerts>
        <fullName>HDD_KeepItSafe_Alert_US_HDD_Tracker_event</fullName>
        <description>HDD: KeepItSafe - Alert US HDD Tracker event</description>
        <protected>false</protected>
        <recipients>
            <recipient>KeepItSafe_US_Group</recipient>
            <type>group</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/KIS_HDD_Request_Form</template>
    </alerts>
    <rules>
        <fullName>HDD Request%3A KIS - New HDD Request</fullName>
        <actions>
            <name>Alert_to_Javier_on_KIS_HDD_Tracker_event</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.CreatedDate</field>
            <operation>greaterThan</operation>
            <value>5/1/2012</value>
        </criteriaItems>
        <description>Email KIS  when a new Hard Drive Tracker request is saved</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>HDD Tracker - Status is Complete</fullName>
        <actions>
            <name>Follow_Up_with_Customer_on_KIS_HDD</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.Status_of_Request__c</field>
            <operation>equals</operation>
            <value>Completed</value>
        </criteriaItems>
        <description>HDD Tracker - Status is Complete</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>HDD%3A KeepItSafe - Alert IE team on a New HDD Request</fullName>
        <actions>
            <name>Alert_to_Javier_on_KIS_HDD_Tracker_event</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.KIS_Customer_ID__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.KIS_Customer_ID__c</field>
            <operation>contains</operation>
            <value>KIE</value>
        </criteriaItems>
        <description>Email IE HDD Groups when a new Hard Drive Tracker request is created</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>HDD%3A KeepItSafe - Alert US team on a New HDD Request</fullName>
        <actions>
            <name>HDD_KeepItSafe_Alert_US_HDD_Tracker_event</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.KIS_Customer_ID__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.KIS_Customer_ID__c</field>
            <operation>contains</operation>
            <value>KUS</value>
        </criteriaItems>
        <description>Email US HDD Groups when a new Hard Drive Tracker request is created</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>KIS - Reminder to HDD Sent out</fullName>
        <actions>
            <name>Follow_Up_with_Customer_on_KIS_HDD</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Hard_Drive_Tracker__c.Status_of_Request__c</field>
            <operation>equals</operation>
            <value>Pending</value>
        </criteriaItems>
        <description>Sends reminder to KIS Resource who requested HDD for Client</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <timeLength>2</timeLength>
            <workflowTimeTriggerUnit>Days</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
    <tasks>
        <fullName>Ship_HDD_to_Customer</fullName>
        <assignedTo>zhu@front-safe.dk</assignedTo>
        <assignedToType>user</assignedToType>
        <description>KeepItSafe Hard Drive &amp; Seed Load has been requested - please ship the HDD to the customer and update the Hard Drive Tracker status to - In transit.</description>
        <dueDateOffset>1</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <priority>High</priority>
        <protected>false</protected>
        <status>Seed Load Requested</status>
        <subject>Ship HDD to Customer</subject>
    </tasks>
</Workflow>
