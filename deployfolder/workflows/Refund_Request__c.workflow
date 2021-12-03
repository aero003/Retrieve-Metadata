<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Refund_Request_International_Over_50</fullName>
        <ccEmails>creditdept@j2.com</ccEmails>
        <ccEmails>Satoshi.Sato@j2.com</ccEmails>
        <description>Refund Request - International: Over $50</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Refund_Request_International</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_International_Under_50</fullName>
        <ccEmails>creditdept@j2.com</ccEmails>
        <description>Refund Request - International: Under $50</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Refund_Request_International</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_Microsites_Over_300</fullName>
        <ccEmails>j2customerservicemanagershollywood@j2.com</ccEmails>
        <description>Refund Request - Microsites: Over $300</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Refund_Request_Microsites</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_Microsites_Under_300</fullName>
        <ccEmails>creditdept@j2.com</ccEmails>
        <description>Refund Request - Microsites: Under $300</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Refund_Request_Microsites</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_Ottawa</fullName>
        <ccEmails>creditrequest@j2.com</ccEmails>
        <ccEmails>creditdept@j2.com</ccEmails>
        <description>Refund Request - Ottawa</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Refund_Request_Ottawa</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_Voice_Over_500</fullName>
        <ccEmails>oneboxfinance@j2global.com</ccEmails>
        <description>Refund Request - Voice: Over $500</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Onebox_EVR_Refund_Request</template>
    </alerts>
    <alerts>
        <fullName>Refund_Request_Voice_Under_500</fullName>
        <description>Refund Request - Voice: Under $500</description>
        <protected>false</protected>
        <recipients>
            <recipient>adrian.williams@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>cheryl.lowe@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>cindy.mckenna@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>david.lee@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>jeff.brownlee@j2.com</recipient>
            <type>user</type>
        </recipients>
        <recipients>
            <recipient>jerome.jackson@j2.com</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>Refund_Requests/Onebox_EVR_Refund_Request</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Refund_Request_Below_300</fullName>
        <ccEmails>billing@sfax.j2.com</ccEmails>
        <description>Sfax Refund Request Below $300</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Refund_Request_Template</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Refund_Request_Over_300</fullName>
        <ccEmails>j2customerservicemanagershollywood@j2.com</ccEmails>
        <description>Sfax Refund Request Over $300</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Refund_Request_Template</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Refund_Request_Over_550</fullName>
        <ccEmails>j2customerservicemanagershollywood@j2.com</ccEmails>
        <description>Sfax Refund Request Over $550</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Refund_Request_Template</template>
    </alerts>
    <alerts>
        <fullName>Sfax_Refund_Request_Under_550</fullName>
        <ccEmails>billing@sfax.j2.com</ccEmails>
        <description>Sfax Refund Request Under $550</description>
        <protected>false</protected>
        <senderType>CurrentUser</senderType>
        <template>sFax_Templates/Sfax_Refund_Request_Template</template>
    </alerts>
    <rules>
        <fullName>Refund Request - International%3A Over %2450</fullName>
        <actions>
            <name>Refund_Request_International_Over_50</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>50</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS International</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - International%3A Under %2450</fullName>
        <actions>
            <name>Refund_Request_International_Under_50</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>lessThan</operation>
            <value>50</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS International</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - Microsites%3A Over %24300</fullName>
        <actions>
            <name>Refund_Request_Microsites_Over_300</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>300</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS Microsites</value>
        </criteriaItems>
        <description>Refund Request - Microsites: Over $300</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - Microsites%3A Under %24300</fullName>
        <actions>
            <name>Refund_Request_Microsites_Under_300</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>lessThan</operation>
            <value>300</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS Microsites</value>
        </criteriaItems>
        <description>Refund Request - Microsites: Under $300</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - Ottawa</fullName>
        <actions>
            <name>Refund_Request_Ottawa</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS Ottawa</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - Voice%3A Over %24500</fullName>
        <actions>
            <name>Refund_Request_Voice_Over_500</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>500</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS HLW</value>
        </criteriaItems>
        <description>Refund Request - Voice: Over $550
SFSD-1151: changed amount from 300 to 550 on Sep 10 2019
SFSD-1269: changed amount from 550 to 500 on Sep 10 2019</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Refund Request - Voice%3A Under %24500</fullName>
        <actions>
            <name>Refund_Request_Voice_Under_500</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>lessThan</operation>
            <value>500</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>CS HLW</value>
        </criteriaItems>
        <description>Refund Request - Voice: Under $550
SFSD-1151: changed amount from 300 to 550 on Sep 10 2019
SFSD-1269 : changed amount from 550 to 500 on Oct 29 2019</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Refund Request Below %24300</fullName>
        <actions>
            <name>Sfax_Refund_Request_Below_300</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <booleanFilter>1 AND (2 OR 3)</booleanFilter>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>Sfax</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>lessThan</operation>
            <value>300</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>lessThan</operation>
            <value>300</value>
        </criteriaItems>
        <description>Sfax: Refund Request Below $300
Or Credit Amount Requested Below $300</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Refund Request Over %24300</fullName>
        <actions>
            <name>Sfax_Refund_Request_Over_300</name>
            <type>Alert</type>
        </actions>
        <active>false</active>
        <booleanFilter>1 AND (2 OR 3)</booleanFilter>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>Sfax</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>300</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>300</value>
        </criteriaItems>
        <description>Sfax: Refund Request Over $300
Or Credit Amount Requested Over $300</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Refund Request Over %24550</fullName>
        <actions>
            <name>Sfax_Refund_Request_Over_550</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <booleanFilter>(1 AND ((2 AND 3) OR (4 AND 5)))</booleanFilter>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>Sfax</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>550</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>equals</operation>
            <value>0</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>greaterOrEqual</operation>
            <value>550</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>equals</operation>
            <value>0</value>
        </criteriaItems>
        <description>Sfax: Refund Request Over $550
Or Credit Amount Requested Over 550
SFSD-1151: changed amount from 300 to 550 on Sep 10 2019</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <rules>
        <fullName>Sfax%3A Refund Request Under %24550</fullName>
        <actions>
            <name>Sfax_Refund_Request_Under_550</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <booleanFilter>(1 AND ((2 AND 5) OR (4 AND 3)))</booleanFilter>
        <criteriaItems>
            <field>Refund_Request__c.RecordTypeId</field>
            <operation>equals</operation>
            <value>Sfax</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>lessThan</operation>
            <value>550</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Refund_Amount__c</field>
            <operation>equals</operation>
            <value>0</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>lessThan</operation>
            <value>550</value>
        </criteriaItems>
        <criteriaItems>
            <field>Refund_Request__c.Requested_Credit_Amount__c</field>
            <operation>equals</operation>
            <value>0</value>
        </criteriaItems>
        <description>Sfax: Refund Request Under $550
Or Credit Amount Requested Under 550
SFSD-1151: changed amount from 300 to 550 on Sep 10 2019</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
