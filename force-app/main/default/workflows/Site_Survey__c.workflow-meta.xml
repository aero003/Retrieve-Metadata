<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>KIS_SIte_Survey_is_Completed</fullName>
        <description>KIS: SIte Survey is Completed</description>
        <protected>false</protected>
        <recipients>
            <field>Requested_By__c</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>KeepItSafe_Templates/Site_Survey_is_Completed</template>
    </alerts>
    <rules>
        <fullName>Site Survey%3A KIS - Completed</fullName>
        <actions>
            <name>KIS_SIte_Survey_is_Completed</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Site_Survey__c.Site_Survey_is_Completed__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>KIS - Site Survey Completed Notification</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>SiteSurvey%3A KIS - Survey Completed</fullName>
        <active>true</active>
        <criteriaItems>
            <field>Site_Survey__c.Estimated_Data_Total__c</field>
            <operation>notEqual</operation>
            <value>0</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
