<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>Order_Quantity</fullName>
        <field>Order_Quantity__c</field>
        <formula>IF( Product2.ProductCode   &lt;&gt;  &apos;Phone Number Fee&apos;  , SBQQ__OrderedQuantity__c ,  SBQQ__OrderedQuantity__c - 1 )</formula>
        <name>Order Quantity</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Invoice_Total</fullName>
        <field>CPQ_Total__c</field>
        <formula>Final_Quantity__c *  SBQQ__QuotedListPrice__c</formula>
        <name>Update Invoice Total</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Monthly_Price_Check</fullName>
        <field>Monthly_Price_Check__c</field>
        <formula>IF( Billing_Month__c ==  Current_Month__c , &apos;YES&apos;, &apos;NO&apos;)</formula>
        <name>Update Monthly Price Check</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Montly_Billing_Date</fullName>
        <field>Monthly_Billing_Date__c</field>
        <formula>IF(
  MONTH( SBQQ__QuoteLine__r.Start_Date__c) = 12,
  DATE( YEAR(SBQQ__QuoteLine__r.Start_Date__c), 12, 31 ),
  DATE( YEAR(SBQQ__QuoteLine__r.Start_Date__c), MONTH (SBQQ__QuoteLine__r.Start_Date__c) + 1, 1 ) - 1 
)</formula>
        <name>Update Montly Billing Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Segment3_for_Training</fullName>
        <field>Segment3__c</field>
        <formula>&apos;45015&apos;</formula>
        <name>Update Segment3 for Training</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Training_Monthly_Billing_Date</fullName>
        <field>Monthly_Billing_Date__c</field>
        <formula>IF( 
 ISNULL(SBQQ__QuoteLine__r.Billing_Date__c )  ,
IF(
MONTH( SBQQ__QuoteLine__r.Start_Date__c ) = 12,
DATE( YEAR(SBQQ__QuoteLine__r.Start_Date__c ), 12, 31 ),
DATE( YEAR(SBQQ__QuoteLine__r.Start_Date__c ), MONTH (SBQQ__QuoteLine__r.Start_Date__c ) + 1, 1 ) - 1),
IF(
MONTH( SBQQ__QuoteLine__r.Billing_Date__c ) = 12,
DATE( YEAR(SBQQ__QuoteLine__r.Billing_Date__c ), 12, 31 ),
DATE( YEAR(SBQQ__QuoteLine__r.Billing_Date__c ), MONTH (SBQQ__QuoteLine__r.Billing_Date__c ) + 1, 1 ) - 1
))</formula>
        <name>Update Training Monthly Billing Date</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>false</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>Admin%2FTraining Fee Segment Update</fullName>
        <actions>
            <name>Update_Segment3_for_Training</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.ProductCode</field>
            <operation>contains</operation>
            <value>Other Training,Training Session (Administrators),Training Session (Users)</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>CPQ Invoice Price Calculation</fullName>
        <actions>
            <name>Update_Invoice_Total</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.SBQQ__OrderedQuantity__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>OrderItem.TotalPrice</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Monthly Price Update</fullName>
        <actions>
            <name>Update_Monthly_Price_Check</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.Billing_Month__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>OrderItem.Current_Month__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <rules>
        <fullName>Order Product Quantity Update</fullName>
        <actions>
            <name>Order_Quantity</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.SBQQ__OrderedQuantity__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update Monthly Billing Date for All Product</fullName>
        <actions>
            <name>Update_Montly_Billing_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.ProductCode</field>
            <operation>notContain</operation>
            <value>Other Training,Training Session (Administrators),Training Session (Users),Professional Services</value>
        </criteriaItems>
        <description>Montly Billing Date is the Date Field to Update the Date to End of the Month Based on Start Date Values expect training and Prof Service Products</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Update Training and Professional Product Montlhly Billing Date</fullName>
        <actions>
            <name>Update_Training_Monthly_Billing_Date</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>OrderItem.ProductCode</field>
            <operation>contains</operation>
            <value>Other Training,Training Session (Administrators),Training Session (Users),Professional Services</value>
        </criteriaItems>
        <description>Monthly Billing Date is the Date Field to Update the Date as End of the Date of Start Date or Billing Date</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
