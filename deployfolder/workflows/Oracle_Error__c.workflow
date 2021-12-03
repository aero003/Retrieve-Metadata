<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Oracle_Integration_Notify_on_error</fullName>
        <description>Oracle Integration Notify on error</description>
        <protected>false</protected>
        <recipients>
            <type>creator</type>
        </recipients>
        <recipients>
            <recipient>arun.reddy@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderAddress>automated_notification_do_not_reply@livevault.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>LiveVault_Templates/Oracle_Integration_Error</template>
    </alerts>
    <rules>
        <fullName>Oracle Integration Notify on Error</fullName>
        <actions>
            <name>Oracle_Integration_Notify_on_error</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Oracle_Error__c.CreatedById</field>
            <operation>notEqual</operation>
            <value>null</value>
        </criteriaItems>
        <description>Oracle Integration Notify on Error</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
