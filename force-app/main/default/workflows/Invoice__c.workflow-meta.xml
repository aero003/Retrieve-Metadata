<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Append_Description_Billed_to_Direct</fullName>
        <description>Testing the Priorvalue and value append</description>
        <field>Description__c</field>
        <formula>PRIORVALUE( Description__c ) + &quot; &quot; +  DescMonth__c  + &quot; &quot; + DescYear__c</formula>
        <name>Append Description - Billed to Direct</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Billed_to_Direct</fullName>
        <description>Changing 6/28/2012 - A. Hikamapour requested the last value dropped and appending of the month value.  - First doing this for All - then will branch out for Current Month and NB.</description>
        <field>Description__c</field>
        <formula>If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 6 Months - &apos;+ TEXT(Usage_GB__c)+ &apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 12 Months - &apos;+ TEXT(Usage_GB__c)+ &apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 3 Months - &apos;+ TEXT(Usage_GB__c)+&apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - Every Month - &apos;+ TEXT(Usage_GB__c)+&apos; GB&apos; ,
If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;),&apos;Fully Managed Online Backup - 6 Months&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;),&apos;Fully Managed Online Backup - 12 Months&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;),&apos;Fully Managed Online Backup - 3 Months&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;),&apos;Fully Managed Online Backup - Every Month&apos;,  
Null))))))))</formula>
        <name>Update Description Billed to Direct</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Customer_ID_Direct</fullName>
        <field>Billed_Customer_ID__c</field>
        <formula>Account__r.Customer_Number__c</formula>
        <name>Customer ID Direct</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Customer_ID_Partner</fullName>
        <field>Billed_Customer_ID__c</field>
        <formula>Account__r.Parent.Customer_Number__c</formula>
        <name>Customer ID Partner</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Invoice_Expire_One_off_Invoice</fullName>
        <field>Status__c</field>
        <literalValue>Inactive</literalValue>
        <name>Invoice: Expire One-off Invoice</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>KIS_Invoice_Status_to_Inactive</fullName>
        <field>Status__c</field>
        <literalValue>Inactive</literalValue>
        <name>KIS - Invoice Status to Inactive</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Reopened_Update_Invoice_Status_Active</fullName>
        <description>KIS Invoice Status Update Re-Opened - based upon on Account Status</description>
        <field>Status__c</field>
        <literalValue>Active</literalValue>
        <name>Reopened -Update Invoice Status - Active</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Transaction_Number</fullName>
        <field>Transaction_Type_Number__c</field>
        <formula>&quot;1&quot;</formula>
        <name>Transaction Number</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Description_for_Direct_NB</fullName>
        <description>Changing 6/28/2012 - A. Hikamapour requested the last value dropped and appending of the month value. - First doing this for All - then will branch out for Current Month and NB.</description>
        <field>Description__c</field>
        <formula>If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 6 Months - &apos;+ TEXT(Usage_GB__c)+ &apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 12 Months - &apos;+ TEXT(Usage_GB__c)+ &apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 3 Months - &apos;+ TEXT(Usage_GB__c)+&apos; GB&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - Every Month - &apos;+ TEXT(Usage_GB__c)+&apos; GB&apos; ,
If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;),&apos;Fully Managed Online Backup - 6 Months&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;),&apos;Fully Managed Online Backup - 12 Months&apos; , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;),&apos;Fully Managed Online Backup - 3 Months&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;),&apos;Fully Managed Online Backup - Every Month&apos;,  
Null))))))))</formula>
        <name>Update Description for Direct - NB</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Description_for_Partner</fullName>
        <description>Changing 6/28/2012 - A. Hikamapour requested the last value dropped and appending of the month value. - First doing this for All - then will branch out for Current Month and NB.</description>
        <field>Description__c</field>
        <formula>If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 6 Months&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 12 Months&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 3 Months&apos; + &apos;  -  &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - Every Month&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;,

If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;),&apos;Fully Managed Online Backup - 6 Months&apos; + &apos;  - &apos; + Account__r.Name , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;),&apos;Fully Managed Online Backup - 12 Months&apos; + &apos;  - &apos; + Account__r.Name , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;),&apos;Fully Managed Online Backup - 3 Months&apos; + &apos;  -  &apos; + Account__r.Name, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;),&apos;Fully Managed Online Backup - Every Month&apos; + &apos;  - &apos; + Account__r.Name,  
Null))))))))</formula>
        <name>Update Description Billed to Partner</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Description_for_Partner_NB</fullName>
        <description>Changing 6/28/2012 - A. Hikamapour requested the last value dropped and appending of the month value. - First doing this for All - then will branch out for Current Month and NB.</description>
        <field>Description__c</field>
        <formula>If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 6 Months&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 12 Months&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - 3 Months&apos; + &apos;  -  &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;)&amp;&amp;NOT(ISBLANK( Usage_GB__c)),&apos;Fully Managed Online Backup - Every Month&apos; + &apos;  - &apos; + Account__r.Name+ &apos;  - &apos; + TEXT(Usage_GB__c)+ &apos; GB&apos;,

If( ISPICKVAL(Billing_Period__c, &apos;Bi-Annual&apos;),&apos;Fully Managed Online Backup - 6 Months&apos; + &apos;  - &apos; + Account__r.Name , 
If( ISPICKVAL(Billing_Period__c, &apos;Annual&apos;),&apos;Fully Managed Online Backup - 12 Months&apos; + &apos;  - &apos; + Account__r.Name , 
If( ISPICKVAL(Billing_Period__c, &apos;Quarterly&apos;),&apos;Fully Managed Online Backup - 3 Months&apos; + &apos;  -  &apos; + Account__r.Name, 
If( ISPICKVAL(Billing_Period__c, &apos;Monthly&apos;),&apos;Fully Managed Online Backup - Every Month&apos; + &apos;  - &apos; + Account__r.Name,  
Null))))))))</formula>
        <name>Update Description for Partner - NB</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Invoice%3A Expire One-off Invoice</fullName>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Billing_Period__c</field>
            <operation>equals</operation>
            <value>One-off</value>
        </criteriaItems>
        <criteriaItems>
            <field>Invoice__c.Sign_Up_Date__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <actions>
                <name>Invoice_Expire_One_off_Invoice</name>
                <type>FieldUpdate</type>
            </actions>
            <timeLength>35</timeLength>
            <workflowTimeTriggerUnit>Days</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Customer ID Update Direct</fullName>
        <actions>
            <name>Customer_ID_Direct</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Direct</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Customer ID Update Partner</fullName>
        <actions>
            <name>Customer_ID_Partner</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Partner</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Description Update Direct - Current Month</fullName>
        <actions>
            <name>Billed_to_Direct</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Direct</value>
        </criteriaItems>
        <criteriaItems>
            <field>Invoice__c.Description__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <description>For Current Month Invoices</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Description Update Direct Invoice - NB</fullName>
        <actions>
            <name>Update_Description_for_Direct_NB</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Direct</value>
        </criteriaItems>
        <description>For KIS NB Invoice Description</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Description Update Partner - Current Month</fullName>
        <actions>
            <name>Update_Description_for_Partner</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Partner</value>
        </criteriaItems>
        <criteriaItems>
            <field>Invoice__c.Description__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <description>For KIS Current Month Business</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Description Update Partner Description- NB</fullName>
        <actions>
            <name>Update_Description_for_Partner_NB</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Partner</value>
        </criteriaItems>
        <description>For KIS NB Invoice</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Status Update from Account Status</fullName>
        <actions>
            <name>KIS_Invoice_Status_to_Inactive</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.AccountStatus__c</field>
            <operation>equals</operation>
            <value>Closed,Suspended - KIS</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafe,KeepItSafeUS</value>
        </criteriaItems>
        <description>KIS Invoice Status Update - based upon on Account Status</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Update Partner Description- NB</fullName>
        <actions>
            <name>Update_Description_for_Partner_NB</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Partner</value>
        </criteriaItems>
        <criteriaItems>
            <field>Invoice__c.Description__c</field>
            <operation>equals</operation>
        </criteriaItems>
        <description>For KIS NB Invoice</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Invoice%3A KIS - Update Status on Re-Opened - Account Status</fullName>
        <actions>
            <name>Reopened_Update_Invoice_Status_Active</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Account_Status__c</field>
            <operation>equals</operation>
            <value>Re-Opened</value>
        </criteriaItems>
        <criteriaItems>
            <field>Account.RecordTypeId</field>
            <operation>equals</operation>
            <value>KeepItSafe,KeepItSafeUS</value>
        </criteriaItems>
        <description>KIS Invoice Status Update Re-Opened - based upon on Account Status</description>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Update Direct Invoice Description - NB</fullName>
        <actions>
            <name>Update_Description_for_Direct_NB</name>
            <type>FieldUpdate</type>
        </actions>
        <active>false</active>
        <criteriaItems>
            <field>Invoice__c.Bill_To__c</field>
            <operation>equals</operation>
            <value>Direct</value>
        </criteriaItems>
        <criteriaItems>
            <field>Invoice__c.Description__c</field>
            <operation>equals</operation>
        </criteriaItems>
        <description>For KIS NB Invoice Description</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update Transaction Number</fullName>
        <actions>
            <name>Transaction_Number</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Invoice__c.Product__c</field>
            <operation>equals</operation>
            <value>Reselling Data Backup Equipment</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
