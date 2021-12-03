<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>New_Consensus_Account_Provisioning_Email_Alert</fullName>
        <ccEmails>Support@kno2.com</ccEmails>
        <ccEmails>accounting@kno2.com</ccEmails>
        <description>New Consensus: Account Provisioning Email Alert</description>
        <protected>false</protected>
        <recipients>
            <recipient>ne.archan.bhachech@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>ne.nirav.patel@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Consensus/Consensus_Provisioning_Template</template>
    </alerts>
    <alerts>
        <fullName>New_Sfax_Account_Provisioning_Email_Alert</fullName>
        <ccEmails>sfaxprovcs@fusemail.com</ccEmails>
        <description>New Sfax: Account Provisioning Email Alert</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Provisioning_Template</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Account_Provisioning_Email_Alert</fullName>
        <ccEmails>billing@sfax.j2.com, anush.vardapetyan@j2.com</ccEmails>
        <description>Sfax: Account Provisioning Email Alert</description>
        <protected>false</protected>
        <recipients>
            <recipient>angela.hakimipour@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>rene.avila@j2global.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Provisioning_Template</template>
    </alerts>
    <fieldUpdates>
        <fullName>Sfax_Update_Provisioning_Emailto_Checkd</fullName>
        <description>Sfax: Update Provisioning Email to Checked</description>
        <field>Provisioning_Email__c</field>
        <literalValue>1</literalValue>
        <name>Sfax: Update Provisioning Emailto Checkd</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>New Consensus%3A Account Provisioning Alert</fullName>
        <actions>
            <name>New_Consensus_Account_Provisioning_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Provisioning__c.Provisioning_Status__c</field>
            <operation>equals</operation>
            <value>Completed</value>
        </criteriaItems>
        <criteriaItems>
            <field>Provisioning__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>consensus</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>New Sfax%3A Account Provisioning Alert</fullName>
        <actions>
            <name>New_Sfax_Account_Provisioning_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Provisioning__c.CreatedDate</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Provisioning__c.Provisioning_Status__c</field>
            <operation>equals</operation>
            <value>New</value>
        </criteriaItems>
        <criteriaItems>
            <field>Provisioning__c.Provisioning_Email__c</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <description>alert when Sfax provisioning is created under status = new</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Account Provisioning Workflow</fullName>
        <actions>
            <name>Sfax_Account_Provisioning_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Sfax_Update_Provisioning_Emailto_Checkd</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Provisioning__c.CreatedDate</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Provisioning__c.Provisioning_Status__c</field>
            <operation>equals</operation>
            <value>Completed</value>
        </criteriaItems>
        <criteriaItems>
            <field>Provisioning__c.Provisioning_Email__c</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <description>send provisioning email to billing team</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
