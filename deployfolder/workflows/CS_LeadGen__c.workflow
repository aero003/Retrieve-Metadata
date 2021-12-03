<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>CS_LeadGen_Security_Lead_Notification</fullName>
        <ccEmails>leads@fusemail.com</ccEmails>
        <description>CS LeadGen Security Lead Notification</description>
        <protected>false</protected>
        <recipients>
            <recipient>marco.reynoso@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Fusemail_Customer_Support/Security_Encryption_Lead</template>
    </alerts>
    <alerts>
        <fullName>CS_LeadGen_VaultSmart_Lead_Notification</fullName>
        <ccEmails>leads@fusemail.com</ccEmails>
        <description>CS LeadGen VaultSmart Lead Notification</description>
        <protected>false</protected>
        <recipients>
            <recipient>darwin.flores@j2global.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>hamlet.bernard@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Fusemail_Customer_Support/VaultSmart_Archiving_Lead</template>
    </alerts>
    <rules>
        <fullName>CS LeadGen%3A Security Lead Notification</fullName>
        <actions>
            <name>CS_LeadGen_Security_Lead_Notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>CS_LeadGen__c.Product__c</field>
            <operation>equals</operation>
            <value>Security</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>CS LeadGen%3A VaultSmart Lead Notification</fullName>
        <actions>
            <name>CS_LeadGen_VaultSmart_Lead_Notification</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>CS_LeadGen__c.Product__c</field>
            <operation>equals</operation>
            <value>Archiving</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
