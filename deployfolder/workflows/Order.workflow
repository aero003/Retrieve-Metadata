<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Update_Contracted</fullName>
        <field>SBQQ__Contracted__c</field>
        <literalValue>1</literalValue>
        <name>Update Contracted</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Update Contracted on Order</fullName>
        <actions>
            <name>Update_Contracted</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Order.Status</field>
            <operation>equals</operation>
            <value>Activated</value>
        </criteriaItems>
        <criteriaItems>
            <field>Order.All_Products_Activated__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
