<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Contact_Notify_Owner_on_ABM_Record_Creation</fullName>
        <ccEmails>Carol.Shim@j2.com; Seth.Walworth@j2.com</ccEmails>
        <description>Contact: Notify Owner on ABM Record Creation</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>All_Templates/Notify_Owner_on_ABM_Record_Creation</template>
    </alerts>
    <alerts>
        <fullName>DE_Efax_Proof_of_identity_mass_email_English</fullName>
        <description>DE Efax Proof of identity mass email English</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>hilfede@mail.efax.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>All_Templates/eFax_contact_profile_update_english_email_v2</template>
    </alerts>
    <alerts>
        <fullName>DE_Efax_Proof_of_identity_mass_email_German</fullName>
        <description>DE Efax Proof of identity mass email German</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>hilfede@mail.efax.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>All_Templates/eFax_contact_profile_update_new_german_email_v2</template>
    </alerts>
    <alerts>
        <fullName>Efax_Proof_of_identity_email</fullName>
        <description>Efax Proof of identity email</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>aiutoit@mail.efax.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>eFax_Corporate_Support/Efax_contact_profile_update_email_v2_March2018</template>
    </alerts>
    <alerts>
        <fullName>JGC_Auto_Email_to_Submit_Documents</fullName>
        <description>JGC Auto Email to Submit Documents</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>j2salesforceadmin@j2.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>eFax_Japan_Geo_Compliance/JGC_Email_to_submit_documents</template>
    </alerts>
    <alerts>
        <fullName>JGC_Email_Alert_for_Unsuccessful_Document_Upload</fullName>
        <description>JGC Email Alert for Unsuccessful Document Upload</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>j2salesforceadmin@j2.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>eFax_Japan_Geo_Compliance/JGC_Unsuccessful_Document_Upload</template>
    </alerts>
    <alerts>
        <fullName>JGC_Email_for_successful_document_upload</fullName>
        <description>JGC_Email for successful document upload</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>j2salesforceadmin@j2.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>eFax_Japan_Geo_Compliance/JGC_Email_for_successful_document_upload</template>
    </alerts>
    <alerts>
        <fullName>SEPA_DD_Germany_Email_Alert</fullName>
        <description>SEPA DD Germany Email Alert</description>
        <protected>false</protected>
        <recipients>
            <field>Email</field>
            <type>email</type>
        </recipients>
        <senderAddress>lastschriftverfahren.de@efax.com</senderAddress>
        <senderType>OrgWideEmailAddress</senderType>
        <template>SEPA_Direct_Debit_Germany/SEPA_DD_Germany_Email_Alert_Ger</template>
    </alerts>
    <fieldUpdates>
        <fullName>Avoid_Marketo_Sync</fullName>
        <field>Avoid_Marketo_Sync__c</field>
        <literalValue>1</literalValue>
        <name>Avoid Marketo Sync</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Fonebox_Update_Contact_record_type</fullName>
        <description>Update fonebox contact record type to Fonebox: contact</description>
        <field>RecordTypeId</field>
        <lookupValue>Fonebox_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Fonebox: Update Contact record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_Contact_End_Date</fullName>
        <description>Update Contact End Date  = Created Date + 42 days</description>
        <field>Contact_End_Date__c</field>
        <formula>CreatedDate + 42</formula>
        <name>JGC Update Contact End Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_CustomerGeoCompliance</fullName>
        <field>Customer_Geo_Compliance__c</field>
        <literalValue>N</literalValue>
        <name>JGC Update CustomerGeoCompliance</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_DocumentsReviewed</fullName>
        <field>Documents_Reviewed__c</field>
        <literalValue>N</literalValue>
        <name>JGC Update DocumentsReviewed</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_DocumentsSubmitted</fullName>
        <field>Documents_Submitted__c</field>
        <literalValue>N</literalValue>
        <name>JGC Update DocumentsSubmitted</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_PostCardDelivered</fullName>
        <field>Post_Card_Delivered__c</field>
        <name>JGC Update PostCardDelivered</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>JGC_Update_no_of_links_sent</fullName>
        <field>No_of_links_sent__c</field>
        <formula>0</formula>
        <name>JGC Update no of links sent</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Line2_Update_Contact_Record_Type</fullName>
        <description>Update contact record type Line2: Contact</description>
        <field>RecordTypeId</field>
        <lookupValue>Line2_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Line2: Update Contact Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_ContactStatus_toActive</fullName>
        <description>Livevault: Update Contact Status to Active</description>
        <field>Contact_Status__c</field>
        <literalValue>Active</literalValue>
        <name>Livevault: Update ContactStatus toActive</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Contact_Record_Type</fullName>
        <description>Livevault: Update Contact Record Type</description>
        <field>RecordTypeId</field>
        <lookupValue>LiveVault_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Livevault: Update Contact Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Livevault_Update_Contact_Type_to_NANB</fullName>
        <description>Livevault: Update Contact Type to NANB (Neither Admin nor Billing)</description>
        <field>Contact_Type__c</field>
        <literalValue>Neither Admin nor Billing</literalValue>
        <name>Livevault: Update Contact Type to NANB</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Contact_Record_Type</fullName>
        <description>Update contact record type</description>
        <field>RecordTypeId</field>
        <lookupValue>Sfax_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Sfax: Update Contact Record Type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Contact_Status_to_Active</fullName>
        <description>update contact status to active</description>
        <field>Contact_Status__c</field>
        <literalValue>Active</literalValue>
        <name>Sfax: Update Contact Status to Active</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Sfax_Update_Contact_Type_to_Admin</fullName>
        <description>update contact type to admin</description>
        <field>Contact_Type__c</field>
        <literalValue>Administrator</literalValue>
        <name>Sfax: Update Contact Type to Admin</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>UpdateContactActiveDate</fullName>
        <description>JGC Update Contact Active Date</description>
        <field>Contact_Active_Date__c</field>
        <formula>Today()</formula>
        <name>UpdateContactActiveDate</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_SEPA_Email_Sent_Field_to_True</fullName>
        <description>SEPA DD Germany Email Alert, Update SEPA Email Sent Field to True</description>
        <field>SEPA_Email_Sent__c</field>
        <literalValue>1</literalValue>
        <name>Update SEPA Email Sent Field to True</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_contact_record_type_to_keepitsafe</fullName>
        <field>RecordTypeId</field>
        <lookupValue>Keepitsafe</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>Update contact record type to keepitsafe</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eFax_AU_Update_Contact_record_type</fullName>
        <field>RecordTypeId</field>
        <lookupValue>eFax_AU_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eFax AU Update Contact record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_AU_Update_contact_record_type</fullName>
        <description>update contact record type for eVoice AU</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_AU_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice AU: Update contact record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>eVoice_NZ_Update_Contact_record_type</fullName>
        <description>update eVoice NZ record type to eVoice NZ: Contact</description>
        <field>RecordTypeId</field>
        <lookupValue>Zintel_NZ_Contact</lookupValue>
        <lookupValueType>RecordType</lookupValueType>
        <name>eVoice NZ: Update Contact record type</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Avoid Marketo Sync</fullName>
        <actions>
            <name>Avoid_Marketo_Sync</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <booleanFilter>1 OR 2 OR 3</booleanFilter>
        <criteriaItems>
            <field>Contact.Email</field>
            <operation>equals</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.OwnerId</field>
            <operation>contains</operation>
            <value>ETL</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.OwnerId</field>
            <operation>contains</operation>
            <value>ISP</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Contact%3A Notify Owner on ABM Record Creation</fullName>
        <actions>
            <name>Contact_Notify_Owner_on_ABM_Record_Creation</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax Corporate:Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.LeadSource</field>
            <operation>equals</operation>
            <value>Email</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Lead_Source_Type__c</field>
            <operation>contains</operation>
            <value>ABM</value>
        </criteriaItems>
        <description>Contact: Notify Owner on ABM Record Creation</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>DE Efax Proof of identity mass email English</fullName>
        <actions>
            <name>DE_Efax_Proof_of_identity_mass_email_English</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>DE_Mass_Email_Email_sent_to_contacts_in_bulk_for_proof_of_identity</name>
            <type>Task</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.EfaxSendMassEmail__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Language__c</field>
            <operation>notEqual</operation>
            <value>DE,Germany,AT,Austria,CH,Switzerland</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.GCC__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Proof_of_identity_submitted__c</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <description>Mass email to eFax contact for proof of identity.
DE Efax Proof of identity mass email English</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>DE Efax Proof of identity mass email German</fullName>
        <actions>
            <name>DE_Efax_Proof_of_identity_mass_email_German</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>DE_Mass_Email_Email_sent_to_contacts_in_bulk_for_proof_of_identity</name>
            <type>Task</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.EfaxSendMassEmail__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Language__c</field>
            <operation>equals</operation>
            <value>DE,Germany,AT,Austria,CH,Switzerland</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.GCC__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Proof_of_identity_submitted__c</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <description>Mass email to eFax contact for proof of identity.
DE Efax Proof of identity mass email German</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Efax Proof of identity mass email</fullName>
        <actions>
            <name>Efax_Proof_of_identity_email</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Mass_Email_Email_sent_to_contacts_in_bulk_for_proof_of_identity</name>
            <type>Task</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.EfaxSendMassEmail__c</field>
            <operation>equals</operation>
            <value>True</value>
        </criteriaItems>
        <description>Mass email to MyFax contact for proof of identity.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Fonebox%3A Update Contact record type</fullName>
        <actions>
            <name>Fonebox_Update_Contact_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Fonebox: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Fonebox: Lead</value>
        </criteriaItems>
        <description>update Contact record type to Fonebox</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>JGC-Calculate Contact Active Date Field</fullName>
        <actions>
            <name>UpdateContactActiveDate</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Language__c</field>
            <operation>equals</operation>
            <value>Japanese,JA</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Status__c</field>
            <operation>equals</operation>
            <value>Active,A</value>
        </criteriaItems>
        <description>This workflow rule is used to update the Field Contact Active Date when the contact status become Active</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>JGC-Email 2%3A Successful document upload</fullName>
        <actions>
            <name>JGC_Email_for_successful_document_upload</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Language__c</field>
            <operation>equals</operation>
            <value>Japanese,JA</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Customer_Geo_Compliance__c</field>
            <operation>notEqual</operation>
            <value>Y</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Documents_Submitted__c</field>
            <operation>equals</operation>
            <value>Y</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Documents_Uploaded__c</field>
            <operation>equals</operation>
            <value>Customer</value>
        </criteriaItems>
        <description>Email to customers that the documents are uploaded successfully</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>JGC-Email to Customer to upload documents</fullName>
        <actions>
            <name>JGC_Auto_Email_to_Submit_Documents</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>JGC_Update_Contact_End_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>JGC_Update_CustomerGeoCompliance</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>JGC_Update_DocumentsReviewed</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>JGC_Update_DocumentsSubmitted</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>JGC_Update_PostCardDelivered</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>JGC_Update_no_of_links_sent</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>equals</operation>
            <value>eFax®: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Language__c</field>
            <operation>equals</operation>
            <value>Japanese,JA</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Customer_Geo_Compliance__c</field>
            <operation>notEqual</operation>
            <value>Y</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Documents_Submitted__c</field>
            <operation>notEqual</operation>
            <value>Y</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.Status__c</field>
            <operation>equals</operation>
            <value>Pending Review</value>
        </criteriaItems>
        <description>Email to customers to upload documents with vf page link</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>JGC_Email on Unsuccessful Document Upload</fullName>
        <actions>
            <name>JGC_Email_Alert_for_Unsuccessful_Document_Upload</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <description>Send email on unsuccessful upload of documents</description>
        <formula>AND(RecordType.DeveloperName =&apos;eFax_Contact&apos;, ISCHANGED( No_of_links_sent__c ) )</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Line2%3A Update Contact Record Type</fullName>
        <actions>
            <name>Line2_Update_Contact_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Line2: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Line2: Lead</value>
        </criteriaItems>
        <description>update sfax record type to Line2: Contact</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Livevault%3A Update Contact Record Type</fullName>
        <actions>
            <name>Livevault_Update_ContactStatus_toActive</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_Contact_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Livevault_Update_Contact_Type_to_NANB</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>LiveVault: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Livevault: Lead</value>
        </criteriaItems>
        <description>update sfax record type to LiveVault: Contact</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>SEPA DD Germany Email Alert</fullName>
        <actions>
            <name>SEPA_DD_Germany_Email_Alert</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Update_SEPA_Email_Sent_Field_to_True</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Status__c</field>
            <operation>equals</operation>
            <value>Review</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Collection_Method__c</field>
            <operation>equals</operation>
            <value>Intl-Invoice-DirectDebit</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.DID_Number__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.SEPA_Email_Sent__c</field>
            <operation>equals</operation>
            <value>False</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Brand__c</field>
            <operation>equals</operation>
            <value>eFax</value>
        </criteriaItems>
        <description>SEPA DD Germany Email Alert</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Update Contact Record Type</fullName>
        <actions>
            <name>Sfax_Update_Contact_Record_Type</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Sfax_Update_Contact_Status_to_Active</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Sfax_Update_Contact_Type_to_Admin</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>Sfax: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>Sfax: Lead</value>
        </criteriaItems>
        <description>update sfax record type to Sfax: Contact</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update contact record type to KeepItSafe when account is KIS</fullName>
        <actions>
            <name>Update_contact_record_type_to_keepitsafe</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Contact.AccountName</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafeNL,KeepItSafeNZ,KeepItSafeDK,KeepItSafe,KeepItSafeUS,KeepItSafeCA,KeepItSafeUK,KeepItSafeIC</value>
        </criteriaItems>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>KeepItSafe: Contact</value>
        </criteriaItems>
        <description>Contact&apos;s record type should be KeepItSafe when account&apos;s record type is KIS</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eFax AU%3A Update Contact record type</fullName>
        <actions>
            <name>eFax_AU_Update_Contact_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>contains</operation>
            <value>eFax AU</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>eVoice AU%3A Update Contact record type</fullName>
        <actions>
            <name>eVoice_AU_Update_contact_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eVoice AU: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice AU: Lead</value>
        </criteriaItems>
        <description>update eVoice AU record type to eVoice AU: Contact</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>eVoice NZ%3A Update Contact record type</fullName>
        <actions>
            <name>eVoice_NZ_Update_Contact_record_type</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Contact.RecordTypeId</field>
            <operation>notEqual</operation>
            <value>eVoice NZ: Contact</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.Account_Record_Type_Hidden__c</field>
            <operation>equals</operation>
            <value>eVoice NZ: Lead</value>
        </criteriaItems>
        <description>update eVoice NZ record type to eVoice NZ: Contact</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <tasks>
        <fullName>DE_Mass_Email_Email_sent_to_contacts_in_bulk_for_proof_of_identity</fullName>
        <assignedToType>owner</assignedToType>
        <dueDateOffset>0</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Completed</status>
        <subject>DE Mass Email: Email sent to contacts in bulk for proof of identity</subject>
    </tasks>
    <tasks>
        <fullName>Mass_Email_Email_sent_to_contacts_in_bulk_for_proof_of_identity</fullName>
        <assignedToType>owner</assignedToType>
        <dueDateOffset>0</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Completed</status>
        <subject>Mass Email: Email sent to contacts in bulk for proof of identity</subject>
    </tasks>
</Workflow>
