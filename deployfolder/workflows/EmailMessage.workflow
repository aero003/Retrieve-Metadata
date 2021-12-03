<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Case_Exchange_Escalation</fullName>
        <field>Status</field>
        <literalValue>Exchange Escalation</literalValue>
        <name>Case: Exchange Escalation</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Case_FuseMail_Develop_Escalation</fullName>
        <field>OwnerId</field>
        <lookupValue>Fusemail_Escalation_to_Development</lookupValue>
        <lookupValueType>Queue</lookupValueType>
        <name>Case: FuseMail Develop Escalation</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Case_Re_open</fullName>
        <field>Status</field>
        <literalValue>Re-Opened</literalValue>
        <name>Case Re-open</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Case_Reopen</fullName>
        <field>Status</field>
        <literalValue>Re-Opened</literalValue>
        <name>Case: Reopen</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Case_Status_to_Waiting_for_Client_Resp</fullName>
        <field>Status</field>
        <literalValue>Waiting for Client Response</literalValue>
        <name>Case Status to Waiting for Client Resp</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>ReOpen_case</fullName>
        <field>Status</field>
        <literalValue>Re-Opened</literalValue>
        <name>ReOpen case</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>UpdateOwnertoNoReplyQueue</fullName>
        <field>OwnerId</field>
        <lookupValue>NOREPLY</lookupValue>
        <lookupValueType>Queue</lookupValueType>
        <name>UpdateOwnertoNoReplyQueue</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Last_Customer_Notification_Date</fullName>
        <description>SFSD-1193 Update Last Customer notification date field</description>
        <field>Last_Customer_Notification_On__c</field>
        <formula>MessageDate</formula>
        <name>Update Last Customer Notification Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
        <targetObject>ParentId</targetObject>
    </fieldUpdates>
    <rules>
        <fullName>Email message received</fullName>
        <actions>
            <name>ReOpen_case</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>EmailMessage.Incoming</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>EmailMessage.Status</field>
            <operation>equals</operation>
            <value>Replied</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update Last Customer Notification Date on Case</fullName>
        <actions>
            <name>Update_Last_Customer_Notification_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <description>SFSD-1193  Input date/time last time an email was &quot;sent&quot;</description>
        <formula>AND(OR(Parent.RecordTypeId = &apos;012600000009Pbu&apos;,Parent.RecordTypeId = &apos;012600000009Pci&apos;,Parent.RecordTypeId = &apos;01232000000ghmM&apos;,Parent.RecordTypeId = &apos;0120e000000DxoF&apos;),Parent.Contact.Email!=&apos;&apos;, Incoming = false)</formula>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
