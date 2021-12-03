<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>ANZ_Sales_Contract_Approved_email_alerts</fullName>
        <description>ANZ Sales Contract Approved email alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>michael.mulvey@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>trevor.lewis@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <alerts>
        <fullName>Contract_Approved_email_alerts</fullName>
        <description>Contract Approved email alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>padraig.oneill@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>scott.wilson@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>seth.walworth@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <alerts>
        <fullName>NA_Channel_BDE_Contract_Approved_email_alerts</fullName>
        <description>NA Channel BDE Contract Approved email alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>john.mannion@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>michael.teller@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <alerts>
        <fullName>NA_Enterprise_Sales_Contract_Approved_email_alerts</fullName>
        <description>NA Enterprise Sales Contract Approved email alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>michael.teller@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>tim.valentine@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <alerts>
        <fullName>NA_Inside_Sales_Contract_Approved_Email_Alerts</fullName>
        <description>NA Inside Sales Contract Approved Email Alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>christian.ofer@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>seth.walworth@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <alerts>
        <fullName>NA_Strategic_Sales_Contract_Approved_email_alerts</fullName>
        <description>NA Strategic Sales Contract Approved email alerts</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <recipients>
            <recipient>michael.teller@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>nicholas.dipasquale@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Contract_Requests/Contract_Request_Approved</template>
    </alerts>
    <fieldUpdates>
        <fullName>Contract_Approved_Date</fullName>
        <field>Approved_Date__c</field>
        <formula>NOW()</formula>
        <name>Contract Approved Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Field_Update_Approved</fullName>
        <field>Status__c</field>
        <literalValue>Approved</literalValue>
        <name>Field Update - Approved</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Field_Update_Pending</fullName>
        <field>Status__c</field>
        <literalValue>Pending</literalValue>
        <name>Field Update - Pending</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Field_Update_Recalled</fullName>
        <field>Status__c</field>
        <literalValue>Recalled</literalValue>
        <name>Field Update - Recalled</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Field_Update_Rejected</fullName>
        <field>Status__c</field>
        <literalValue>Rejected</literalValue>
        <name>Field Update - Rejected</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Last_Approver</fullName>
        <field>Approved_by__c</field>
        <formula>$User.FirstName&amp;&quot; &quot;&amp;$User.LastName</formula>
        <name>Last Approver</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Conga_Workflow_Trigger</fullName>
        <description>Conga Workflow Trigger will be used to trigger workflow</description>
        <field>Conga_Workflow_Trigger__c</field>
        <literalValue>1</literalValue>
        <name>Update Conga Workflow Trigger</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eFax_Corporate_SOF_Lock_Record</fullName>
        <description>eFax Corporate SOF Read Only</description>
        <field>RecordTypeId</field>
        <lookupValue>eFax_Corporate_SOF_Read_Only</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eFax Corporate SOF Lock Record</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <outboundMessages>
        <fullName>NA_Send_New_Developer_Request_toLegalOld</fullName>
        <apiVersion>30.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Developer_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>NA_Send New Developer Request toLegalOld</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Amendment_Request_to_EU_legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send New Amendment Request to EU legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Amendment_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send New Amendment Request to EU legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Amendment_Request_to_EUlegalOld</fullName>
        <apiVersion>44.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Amendment_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send New Amendment Request to EUlegalOld</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Amendment_Request_to_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send New Amendment Request to Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Amendment_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send New Amendment Request to Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Amendment_Request_to_Legal_Old</fullName>
        <apiVersion>30.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Amendment_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send New Amendment Request to Legal Old</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Developer_Request_to_EULegalOld</fullName>
        <apiVersion>44.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Developer_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send New Developer Request to EULegalOld</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Developer_Request_to_EU_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send New Developer Request to EU Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Developer_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send New Developer Request to EU Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_New_Developer_Request_to_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send New Developer Request to Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_New_Developer_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send New Developer Request to Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Contract_Request_to_EULegalOld</fullName>
        <apiVersion>44.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Contract_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send eFax Contract Request to EULegalOld</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Contract_Request_to_EU_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send eFax Contract Request to EU Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Contract_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>false</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send eFax Contract Request to EU Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Contract_Request_to_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_eFax_Email_Contract_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send eFax Contract Request to Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Contract_Request_to_Legal_Old</fullName>
        <apiVersion>29.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_eFax_Email_Contract_to_Legal_URL__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send eFax Contract Request to Legal_Old</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Corporate_SOF_to_EU_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send eFax Corporate SOF to EU Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Corp_SOF_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send eFax Corporate SOF to EU Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Corporate_SOF_to_EU_Legal_Old</fullName>
        <apiVersion>44.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Corp_SOF_to_EU_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>vasanthi.sontha@j2global.com</integrationUser>
        <name>Send eFax Corporate SOF to EU Legal Old</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Corporate_SOF_to_Legal</fullName>
        <apiVersion>46.0</apiVersion>
        <description>Send eFax Corporate SOF to Legal</description>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Corporate_SOF_to_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send eFax Corporate SOF to Legal</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <outboundMessages>
        <fullName>Send_eFax_Corporate_SOF_to_Legal_Old</fullName>
        <apiVersion>38.0</apiVersion>
        <endpointUrl>https://workflow.congamerge.com/OBMListener.ashx</endpointUrl>
        <fields>Conga_Email_eFax_Corporate_SOF_to_Legal__c</fields>
        <fields>Id</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>arun.reddy@j2.com</integrationUser>
        <name>Send eFax Corporate SOF to Legal Old</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <rules>
        <fullName>Send New Amendment Request to EU legal</fullName>
        <actions>
            <name>Send_New_Amendment_Request_to_EU_legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Michael Teller</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New Amendment</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>equals</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send New Amendment Request to EU legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send New Amendment Request to Legal</fullName>
        <actions>
            <name>Send_New_Amendment_Request_to_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Hector Bobadilla,Bret Love,Todd Weiner,Michael Teller,Michael Mulvey,Franklin Williams</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New Amendment</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>notEqual</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send New Amendment Request to Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send New Developer Request to EU Legal</fullName>
        <actions>
            <name>Send_New_Developer_Request_to_EU_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Michael Teller</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New Developer Agreement</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>equals</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send New Developer Request to EU Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send New Developer Request to Legal</fullName>
        <actions>
            <name>Send_New_Developer_Request_to_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Bret Love,Todd Weiner,Michael Teller,Michael Mulvey,Franklin Williams</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New Developer Agreement</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>notEqual</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send New Developer Request toLegal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send eFax Contract Request to EU Legal</fullName>
        <actions>
            <name>Send_eFax_Contract_Request_to_EU_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Michael Teller</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New eFax Corporate Agreement</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>equals</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send eFax Contract Request to EU Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send eFax Contract Request to Legal</fullName>
        <actions>
            <name>Send_eFax_Contract_Request_to_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Hector Bobadilla,Bret Love,Todd Weiner,Michael Teller,Michael Mulvey,Franklin Williams</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>New eFax Corporate Agreement</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>notEqual</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send eFax Contract Request to Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send eFax Corporate SOF to EU Legal</fullName>
        <actions>
            <name>Send_eFax_Corporate_SOF_to_EU_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Michael Teller</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax Corporate SOF</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>equals</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send eFax Corporate SOF to EU Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Send eFax Corporate SOF to Legal</fullName>
        <actions>
            <name>Send_eFax_Corporate_SOF_to_Legal</name>
            <type>OutboundMessage</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.Status__c</field>
            <operation>equals</operation>
            <value>Approved</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Approved_by__c</field>
            <operation>equals</operation>
            <value>Hector Bobadilla,Bret Love,Todd Weiner,Michael Teller,Michael Mulvey,Franklin Williams</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax Corporate SOF</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Owner_Role__c</field>
            <operation>notEqual</operation>
            <value>European Sales &amp; CS Management</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Conga_Workflow_Trigger__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Creating WF as we are having issues with Approval process
Send eFax Corporate SOF to Legal</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>eFax Corporate SOF Lock Record</fullName>
        <actions>
            <name>eFax_Corporate_SOF_Lock_Record</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contract_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax Corporate SOF</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contract_Request__c.Customer_Signed_Date__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <description>eFax Corporate SOF Read Only</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
