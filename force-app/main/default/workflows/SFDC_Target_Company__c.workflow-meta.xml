<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Update_Alexa_Traffic_Date</fullName>
        <field>Alexa_Traffic_Rank_Date__c</field>
        <formula>IF(ISCHANGED( Alexa__c ) ,   TODAY()  ,  Alexa_Traffic_Rank_Date__c )</formula>
        <name>Update Alexa Traffic Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Update Alexa Traffic Date</fullName>
        <actions>
            <name>Update_Alexa_Traffic_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>SFDC_Target_Company__c.Alexa__c</field>
            <operation>greaterThan</operation>
            <value>0</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
