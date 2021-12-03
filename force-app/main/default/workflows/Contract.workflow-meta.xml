<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Name</fullName>
        <field>Name</field>
        <formula>Contract_Name__c</formula>
        <name>Name</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>StartDate</fullName>
        <field>StartDate</field>
        <formula>Contract_Start_Date__c</formula>
        <name>StartDate</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Contract 1</fullName>
        <actions>
            <name>Name</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>StartDate</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contract.RecordTypeId</field>
            <operation>equals</operation>
            <value>MyFax: Contract</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
