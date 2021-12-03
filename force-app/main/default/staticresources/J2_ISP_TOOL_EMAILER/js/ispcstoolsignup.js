//"use strict";
var fillccdtls = function () {
   
    $("#txtbillpaymentfirst_name").val("test");
    $("#txtbillpaymentlast_name").val("test");

    $("#txtbillpaymentcard_number").val("4001579999999992");
    $("#txtbillpaymentcvv_code").val("121");

    $("#txtbillpaymentexpiration_year").val("2025");
    $("#optbillpaymentcountry_code").val("US");
    $("#txtbillpaymentaddress_line1").val("test");
    $("#txtbillpaymentcity").val("test");
    $("#txtbillpaymentstate_province").val("AA");
    $("#txtbillpaymentpostal_code").val("12325");
    $("#txtbillpaymentbillingno").val("1232512325");


    
}
var fillmydatafordd = function () {
    $("#txtcontactfirst_name").val("test");
    $("#txtcontactlast_name").val("test");
    $("#optcontactbrand").val("5");
    $("#optcontactbrand").trigger("change");

    $("#txtcontactemail_address").val("test@test.com");
    $("#txtcontactemail_address").trigger("mouseleave");
   
    $("#txtDDaddress").val("test");
    $("#txtDDcity").val("test");
    $("#txtDDstate_province").val("AA");
    $("#txtDDpostal_code").val("12325");
    $("#txtDDbillingno").val("1232512325");


  
}
var fillmydata = function () {
    $("#txtcontactfirst_name").val("test");
    $("#txtcontactlast_name").val("test");
    $("#optcontactbrand").val("5");
    $("#optcontactbrand").trigger("change");

    $("#txtcontactemail_address").val("test@test.com");
    $("#txtcontactemail_address").trigger("mouseleave");
    $("#txtbillpaymentfirst_name").val("test");
    $("#txtbillpaymentlast_name").val("test");

    $("#txtbillpaymentcard_number").val("4001579999999992");
    $("#txtbillpaymentcvv_code").val("121");

    $("#txtbillpaymentexpiration_year").val("2025");
    $("#optbillpaymentcountry_code").val("US");
    $("#txtbillpaymentaddress_line1").val("test");
    $("#txtbillpaymentcity").val("test");
    $("#txtbillpaymentstate_province").val("AA");
    $("#txtbillpaymentpostal_code").val("12325");
    $("#txtbillpaymentbillingno").val("1232512325");


    setTimeout(function () {
        $("#optcontactcurrency").val("USD");
    }, 3000);
}
var supportedBrandforBTJapan = ['1','5','4'];

var supportedcountryfoPorting = [ 'US','CA',]
var supportedBrandforPorting = ['2','5','4'];
var supportedCurrencyforPortingOffer = ['EUR','USD','GBP','CAD'];

var supportedBrandforDD = ['1','5','4'];
var supportedCurrencyforDD = ['EUR','GBP','JPY'];
var supportedcountryforBankTransfer = [ 'JP'];
var supportedcountryforDD = [ 'JP','AT',
'BE',
'BG',
'HR',
'CY',
'CZ',
'DK',
'EE',
'FI',
'FR',
'DE',
'GB',
'GR',
'HU',
'IS',
'IE',
'IT',
'LV',
'LI',
'LT',
'LU',
'MT',
'MC',
'NL',
'NO',
'PL',
'PT',
'RO',
'SK',
'SI',
'ES',
'SE',
'GB',
'CH','UK' ];
var MAX = 999999999;
var MODULUS = 97;
var IBANNumbericValue = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 18,
    J: 19,
    K: 20,
    L: 21,
    M: 22,
    N: 23,
    O: 24,
    P: 25,
    Q: 26,
    R: 27,
    S: 28,
    T: 29,
    U: 30,
    V: 31,
    W: 32,
    X: 33,
    Y: 34,
    Z: 35
};

var secondErrorEnum = {
    none: 0,
    numeric: 1,
    byMinLength: 2
};

var addOrUpdate = { add: "add", update: "update" };

var // global variables
    formError1 = "",
    formError2 = "",
    charLengthForError1 = 0,
    charLengthForError2 = 0,
    CancelRequest = false, oldcollectionmethod,currency_decimalplaces = 2,mandateToDate="",
    validateErrorsBy = secondErrorEnum.none, currencies_symbol = "",
    oldCustomerKey, customerKey, serviceKey, oldServiceKey, oldModifiedServiceKey, jdassetkeyforInvoice = "", serviceType = "", serviceCSID = "", serviceSummaryVersion = 0, servicePhoneNumber = "", servicePhoneCity = "", serviceResourceType = "", serviceStatus = "", currentServiceTabOpen = "", Eventsclickedforfirsttime = false, Collectionsclickedforfirsttime = false,
    contact_form_keypress = false, accountmanagementform_original_data = "", accountmanagement_form_keypress = false, bal_transfer_form_keypress = false, reorder_form_keypress = false, isOrderAmountAvailable = true, event_form_keypress = false, collectionParentCustomer_form_keypress = false, isInModificationMode = false, isInDeactivationMode = false, isInSuspendFlagMode = false, isitCorporateAccount = false, suspensionFlag_original_data = "", reordercheckflag = "",
    contactform_original_data = "", baltransferform_original_data = "", defaultreorderAmount = "", adjustment_form_keypress = false, gift_form_keypress = false,
    adjustmentform_original_data = "", reorderform_original_data = "", eventform_original_data = "", giftform_original_data = "", collectionParentCustomerform_original_data = "", eventform_original_data_array = "", reorder_original_data_array = "", billpayment_original_data = "", saveCCMode = addOrUpdate.add, saveEventMode = addOrUpdate.update, saveGiftMode = addOrUpdate.update, creditcard_invalid = false,
    billingpaymentform_blank_data = "", billingpaymentCCinfo_original = "", billingpayment_form_keypress = false,ddpayment_form_keypress=false, contact_emailaddress_keypress=false,billingpaymentform_original_data = "",ddpaymentform_original_data="", ipaddress = "",
    otpProccessed = false, selectedCCVal = "", selectedCCType = "", isInOTP = false, currency_code = "", combogiftkey, servicegiftkey, eventskey, billingpaymentCCinfo_blank, credit_card_types, ispuserToken, balance_payment_ppu, isFilteredBillingVCC = false, isFilteredEvents = false,
    isFilteredbillInvoice = false, isFilteredCollection = false, isFilteredFaxUsage = false,
    servicedetailInbox_keypress = false, countryNCurrency_form_keypress = false, countryNCurrency_original_data = "", servicedetailSend_keypress = false; servicedetailInbox_original_data = "", servicedetailSend_original_data = "", ajaxCallInProgress = 0, closeOnDate = "", closeReasonCode = "",
        isCloseDateApplied = false,ccnum="", closeDateval = "", isInOfferCodeMM = false, divServiceSuspensionFlagsUpdateSuspensionFlagRights = 0, hrefServiceDetailsAddInboxServiceRights = 0, hrefServiceDetailsUpdateInboxServiceRights = 0, haveToChangeSelectedService = false, saveServiceDetailMode = addOrUpdate.update, listServiceKeysOfOrderedStatus = [], listExistingCCId = [],
        prorated_recurring_fee_total = 0, isPortingSaved = false, reorderdisabledoptval = "", combogift_end_date = "", allow_inbox_email_modification = false, allow_send_email_modification = false, isInReactivationMode = false, isInCollectionMethodUpdate = false,
        currency_form_keypress = false, currency_original_data = "", isCurrencyChanged = false,
        country_form_keypress = false, brand_form_keypress = false, brand_original_data = "", country_original_data = "",contact_email_address="", isBrandChanged = false, isCountryChanged = false,
        isMandateRecordAvailable = false,isContactEmailModify=false,isContactEmailValid=false,brandChangedFlag=false,directdebitchangeflag=false,isAccountActivate=false,isCollectionRefreshClick=false,isMandateRecordAvailable = false,isShowDDAlert=true,isShowPortingAlert=true,savedbrand="",savedcurrency="",savedCountry="", isSaveBillingSectionOnly = false, flagFreePlan = false, isCountryCurrencyModifyFlag = false, billingPhoneNumber = "", isServiceAdded = false; isInCollectionMethodDetailUpdate = false, isMainToUsageTransfer = true, isInReorderAmountUpdate = false, isComboGift = false, initial_value_optcontactbrand = "",initial_value_optbillpaymentcollection_methods = "", final_value_onchange_optbillpaymentcollection_methods = "";



var ccRanksUsed = [];
var NoOfCreditCard;
var preAuthDecline = ['PRE_AUTH_DECLINE',
    'PRE_AUTH_DECLINED',
    'PAYMENT_DECLINED',
    'INVALID_AMOUNT',
    'INVALID_CC_INFO',
    'INVALID_COUNTRY',
    'INVALID_CURRENCY',
    'INVALID_CARD_SECURITY_CODE',
    'INVALID_CARD_TYPE',
    'INVALID_PHONE',
    'DUPLICATE_TRANSACTION',
    'INVALID_INFORMATION',
    'PROCESS_ERROR',
    'TIMEOUT_ERROR',
    'INVALID_DIVISION',
    'PAYMENT_DECLINED'
];

var errorsMandate = {
    errdirectdebitholder_name2: "Please enter Account holder name",
    errdirectdebitbank_name: "Please enter bank name",
    errdirectdebitbankaccount_number: "Please enter bank account number",
    errdirectdebitswiftcode: "Please provide Swift/BIC Code",
    errdirectdebitsort_code: "Please enter sort code",
    errdirectdebitholder_email: "Please enter an email address",
    errdirectdebitholder_emailInvalid: "Invalid email format - Please enter a correct e-mail address",
    errdirectdebitmandate_ID: "Please enter mandate ID",
    errdirectdebitmandate_Date: "Please select mandate date",
    errdirectdebitOther: ""
};

var billingPaymentErrorCode = ['expiration_date',
    'card_number',
    'state_prov',
    'PRE_AUTH_DECLINED',
    'cvv',
    'card_type',
    'address_line1',
    'address_line2',
    'city',
    'state_prov',
    'postal_code',
    'PAYMENT_DECLINED',
    'INVALID_CC_INFO',
    'INVALID_CARD_SECURITY_CODE',
    'INVALID_CARD_TYPE',
];

var errorsPorting = {
    errPortingPhoneType: "Please Select Phone Type",
    errPortingPhoneCarrier: "Please Select Phone Carrier",
    errPortingAcountNumber: "Please enter Account Number",
    errPortingStreetNumber: "Please Enter Street  Number",
    errPortingStreetDirection1: "Please Select Street Direction",
    errPortingStreetName: "Please Enter Street Name",
    errPortingStreetType: "Please Select Street Type",
    errPortingStreetDirection2: "Please Select Street Direction",
    errPortingBuildingType: "Please Select Building Type",
    errPortingAptUnit: "Please Enter Apt Unit",
    errPortingCity: "Please Enter City",
    errPortingState: "Please Select State",
    errPortingCounty: "Please Select Country",
    errPortingZipCode: "Please Enter ZipCode"
};
var noErrorInvalidData = ['CREDIT_CARD_INVALID', 'INVALID_REQUEST_VERSION', 'CREDITCARD_NOT_FOUND'];

var pageEventsTotalPage = 1, pageEventsCurrentPage = 1,
    pageEventsStartAt = 1, pageEventsPageSize = 100,
    pageEventsTotalRecords = 0, pageEventsEndAt,
    startDateEvents = "", endDateEvents = "", eventTypeFilter = "",

    pageInvoicesTotalPage = 1, pageInvoicesCurrentPage = 1,
    pageInvoicesStartAt = 1, pageInvoicesPageSize = 25,
    pageInvoicesTotalRecords = 0, pageInvoicesEndAt,
    startDateInvoice = "", endDateInvoice = "",

    pageFaxUsageTotalPage = 1, pageFaxUsageCurrentPage = 1,
    pageFaxUsageStartAt = 1, pageFaxUsagePageSize = 100,
    pageFaxUsageTotalRecords = 0, pageFaxUsageEndAt,
    startDateFaxUsage = "", endDateFaxUsage = "",

    pageJournalsTotalPage = 1, pageJournalsCurrentPage = 1,
    pageJournalsStartAt = 1, pageJournalsPageSize = 100,
    pageJournalsTotalRecords = 0, pageJournalsEndAt,
    startDateJournal = "", endDateJournal = "",

    pageCollectionsTotalPage = 1, pageCollectionsCurrentPage = 1,
    pageCollectionsStartAt = 1, pageCollectionsPageSize = 100,
    pageCollectionsTotalRecords = 0, pageCollectionsEndAt,
    startDateCollections = "", endDateCollections = "";

var LIGHT_GREEN = "#C0FFC0",
    LIGHT_RED = "#FFC3C6",
    LIGHT_YELLOW = "#FFFFC6",
    LIGHT_WHITE = "#FFFFFF",
    LIGHT_BLUE = "#C0C0FF";
LIGHT_SKY = "#BBB9EB";

var oldbillingdates = {
    oldNextChargeDate: "",
    oldNextCollectionDate: "",
    oldNextBillDate: "",
    oldDayOfMonth: "",
    forcustid: "",
    olddatesSetFlag: false
};

var sortFaxUsageBy = "", sortFaxUsageType = "", sortOfferCodeBy = "", sortOfferCodeType = "", findOfferCodeFiltered = false;


var errorsContact = {
    errcontactfirst_name: "Please enter first name",
    errcontactlast_name: "Please enter last name",
    errcontactcompany_name: "Please enter company name",
    errcontactpostal_code: "Please provide a valid Zip code - For US must be 5 digits",
    errcontactEmailId: "Please enter an email address",
    errcontactEmailIdInvalid: "Invalid email format - Please enter a correct e-mail address",
    errcontactEmailIdUsed: "This e-mail address is assigned to the following customer(s):</br>+",
    errcontactBrandNotSelected: "Please select a brand",
    errcontactCurrencyNotSelected: "Please select a currency",
    errcontactCountryNotSelected: "Please select a country",
    errcontactSalesrepNotSelected: "Please select sales representative",
    errcontactEmailOther: ""


};

var errorsBillingPaymentDD = {
    errDDaddress: "Please enter address",
    errDDcity: "Please enter city",
    errDDstate_province: "Please enter State/Province",
    errDDstate_provincelength: "State/Province code must be 2 characters in length",
    errDDpostal_codeUS: "Please provide a valid Zip code - For US must be 5 digits",
    errDDpostal_codeUK: "Zip code for UK must be at least 6 characters",
    errDDpostal_codeCanada: "Zip code for Canada must be at least 3 characters",
    errDDpostal_codeALL: "Please enter Zip code",
    errDDbillingno: "Please provide Billing Phone Number"

};

var errorsBillingPayment = {
    errbillpaymentfirst_name: "Please enter first name",
    errbillpaymentlast_name: "Please enter last name",
    errbillpaymentcard_number: "Please enter credit card number",
    errbillpaymentcvv_code: "Please enter cvv code",
    errbillpaymentCCInvalid: "Please enter valid credit card number",
    errbillpaymentcvv_codeALL: "The security code must be 3 digit in length except for AMEX card",
    errbillpaymentcvv_codeAMEX: "The security code must be 4 digit in length for AMEX card",
    errbillpaymentcvv_codeNULL: "Please enter security code",
    errbillpaymentexpiration_month: "Please select expiration month",
    errbillpaymentexpiration_year: "Enter 4 digits for the Expiration Year",
    errbillpaymentexpiration_yearNULL: "Please enter expiration year",
    errbillpaymentexpirationExpired: "The credit card has already expired",
    errbillpaymentcountry_code: "Please select country",
    errbillpaymentaddress_line1: "Please enter address",
    errbillpaymentcity: "Please enter city",
    errbillpaymentstate_province: "Please enter State/Province",
    errbillpaymentstate_provincelength: "State/Province code must be 2 characters in length",
    errbillpaymentpostal_codeUS: "Please provide a valid Zip code - For US must be 5 digits",
    errbillpaymentpostal_codeUK: "Zip code for UK must be at least 6 characters",
    errbillpaymentpostal_codeCanada: "Zip code for Canada must be at least 3 characters",
    errbillpaymentpostal_codeALL: "Please enter Zip code",
    errbillpaymentbillingno: "Please provide Billing Phone Number"

};

var errorsAccountManagement = {
    erraccmanageaccount_tentative_close_date: "Please enter close date",
    erraccmanageclose_reason: "Please select close reason"
}

var tabsloaded = {
    contact: false,
    bill_info: false,
    bill_payment: false,
    bill_viewcharges: false,
    bill_transactionhistory: false,
    bill_invoice: false,
    servicessummary: false,
    services_gifts: false,
    services_details: false,
    services_numberactivation: false,
    services_cancel: false,
    servicesusage: false,
    services_faxusagehistory: false,
    events: false,
    accountmanagement: false
};
var currentTabOpen = "";

var token_errors = [
    "TOKEN_INVALID",
    "MISSING_TOKEN",
    "DECRYPTION_FAILED",
    "TOKEN_EXPIRED",
    "ACCESS_FAILED"
];

var orderOfTabs = [
    { tab: "hrefContact", order: 1 },
    { tab: "hrefBilling", order: 2 },
    { tab: "hrefServices", order: 3 },
    { tab: "hrefEvents", order: 4 },
    { tab: "hrefAccountManagement", order: 5 },

    { tab: "hrefBilling_viewCharges", order: 2.2 },
    { tab: "hrefBilling_invoice", order: 2.4 },
    { tab: "hrefBilling_payments", order: 2.1 },
    { tab: "hrefBilling_transactionhistory", order: 2.3 },

    { tab: "hrefServiceDetails", order: 3.1 },
    { tab: "hrefServiceNumberActivation", order: 3.2 },
    { tab: "hrefServiceGifts", order: 3.3 },
    { tab: "hrefServiceUsage", order: 3.4 },
    { tab: "hrefServiceFaxUsageHistory", order: 3.5 },
]


//===START:::page load calls
$(function () {
    // show blurred screen with loading image (hide cancel button)
    $("#DivDisablePage").show();
    $("#DivWaitprocess").show();//hide
    $("#DivWaitprocessWithButton").hide();
    hideSummaryAndDetail();
    preload();

});


function getAllService() {

    getAjaxFunc("customers/" + customerKey + "/services?status=all", setServiceDate, "");

}
var OrderServiceAvailable = false;
function setServiceDate(data, issuccess) {
    OrderServiceAvailable = false;
    for (var i = 0; i < data.services.length; i++) {

        if (data.services[i].status == "Ordered") {
            OrderServiceAvailable = true;
            break;
        }
    }

}

// login pop screen wil show up when this methos is called.
// called when : 1) there is no API is SF DB, 2) token is expired.
function showLoginScreen() {
    $("#DivDisablePage").show();
    $("#DivWaitprocess").hide();
    $("#DivWaitprocessWithButton").hide();

    var box = new SimpleDialog("LoginScreen" + Math.random(), true);
    parent.box = box;
    box.setTitle("Login");
    box.createDialog();
    box.setWidth(600);
    box.setContentInnerHTML("<apex:page><div></div><div><center><iframe style='width:100%;height:500px;' id='iframeContentId' src='" + $("body").data("iframe_url") + "' frameborder='0' marginheight='50' marginwidth='10' scrolling='no' /></center></div></apex:page>");
    // box.setContentInnerHTML("<apex:page><div></div><div><center>Login Page</center></div></apex:page>");
    box.setupDefaultButtons();

    var close = $('<a id="InlineEditDialogX" title="Close" tabindex="0" href="javascript:void(0)" class="dialogClose">Close</a>');
    // add some functionality to the close button (for the default ui we change the classname on mouseover/out
    close.mouseover(function () {
        this.className = 'dialogCloseOn';
    }).mouseout(function () {
        this.className = 'dialogClose';
    }).click(function () {
        // finally our on click handler which closes the dialog
        box.hide();
    });
    // insert the new generated close button before the h2 tag so it'll show up on the top right corner
    close.insertBefore($(box.dialog).find('.topLeft h2'));

    var btnSetUserToken = $("<a id='btnhdnSetUserToken' style='display:none;' href='javascript:void(0)'  value='x'/>");
    btnSetUserToken.click(function () {
        $("body").data("ispuserToken", $.cookie("ispusertoken"));
        $("body").data("ispldapusername", $.cookie("ispldapusername"));
        box.hide();
        preload();

    })
    btnSetUserToken.insertBefore($(box.dialog).find('.topLeft h2'));

    box.show();
}


function preload() {
    if ($("body").data("apiurl")) {
        // show only search customer section.
        //chek if we have user token...if not then show popup.
        //if yes then call one api by passing that token in header.
        //if API gives token error then we will show login pop up.
        // else we will continue.

        //console.log("ispuserToken " + $("body").data("ispuserToken"));
        if ($("body").data("ispuserToken") !== "") {
            // first api call which will check Token erros too. And if there is no token error then 
            // this further API's will be called.
            $("#DivWaitprocess").show();
            $("#DivDisablePage").hide();
            $("#DivWaitprocessWithButton").hide();
            getCallNoHeader()
        }
        else {
            showLoginScreen();
        }
    }
    else {

        setTimeout(function () {
            preload();
        }, 800);

    }
}

var checkTokenValidity = function (data, issuccess) {
    if (issuccess) {
        onloadReady();
        ispuserToken = $("body").data("ispuserToken");
    }
}
function getCallNoHeader() {
    getAjaxFuncSyncNoHeader("", getCallNoHeaderSuccessFunc, "");
}
function getCallNoHeaderSuccessFunc(data, issuccess) {
    //console.log('getCallNoHeaderSuccessFunc :: ' + issuccess);
    if (issuccess) {
        getSearchOptionSets();
    } else {
        // turnoffOnLoadError();
    }
}
function getSearchOptionSets() {
    //console.log('getSearchOptionSets ::');
    getAjaxFuncSync("customers/searchoptions", getSearchOptionSetsSuccessFunc, "");
}

function getSearchOptionSetsSuccessFunc(data, issuccess) {
    checkTokenValidity(data, issuccess);
    // console.log('getSearchOptionSetsSuccessFunc :: ' + issuccess);
    if (issuccess) {
        if (data.search_options) {
            $("div[id*=lbl_api_error]").hide();

            var selectcontrols = [
                { control: "#s1", bydefault: "fax_number_did" },
                { control: "#s2", bydefault: "full_contact_email_address" },
                { control: "#s3", bydefault: "full_send_email_address" },
                { control: "#s4", bydefault: "full_inbox_email_address" },
                { control: "#s5", bydefault: "full_credit_card_number" }
            ];

            $.each(selectcontrols, function (i, item) {
                setOptionSets(data.search_options, item.control, item.bydefault, "option", "description", true);
                if (i >= 4) {
                    getSetFromLocalStorage();
                }
            });

        }
    }
    else {
        $("div[id*=lbl_api_error]").html("Error Status returned: " + data.statusText);
        $("div[id*=lbl_api_error]").show();
    }
}
function resetPortingNumber() {
    $("#btnRemovePortingNumber").click(function () {
        document.getElementById("txtcontactportingnumber").value = '';
        $("input[id*=optportin]").val("");
        $("#optportingphonetype,#optportingphonecarrier,#optportingstreetdirection1,#optportingstreettype,#optportingstreetdirection2,#optportingstreetbuildingtype").val("Select");
        $("#portingDiv").hide();
        //$("#optportingcountry,#optportingstate").html("");
        $("#optportingcountry").val("Select");
        $("#optportingstate").val("Select");
        $("#txtcontactportingnumber").trigger("keyup");
        $("div[id*=lblErrPorting]").hide();
        //$(".PORTING_PLAN").hide();
        if ($("input[name='planfilter']:checked").data("value") == "P") {
            $("#tblISPsignup_findOfferCode > tbody").html("");
            $("input[name^='planfilter']").attr("checked", false);
        }

        $('#chkPorting').prop("disabled", true);
        $("#validatePortingFlag").hide();
        //$("#chkInvalidPortingNumber").hide();
    })
}
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
// on load function...which does a lot of things..
// REFACTOR ALERT
function onloadReady() {

    getAjaxFunc("customers/"+"finance"+"/invoice_requests?brand_name=EFAX", geteCorpEmailer, "");
	getAjaxFunc("lookup/"+"corp_brand_folders?brand_name=EFAX", geteCorpfolder, "");
	$("#porting :input").attr("disabled", true);
	$('#btnsubmitemailid').click(function(e) {
       e.preventDefault();
      var vatFormObj = new Object();                        
      vatFormObj.request_param_month = $("#optemailselmonth").val();
      vatFormObj.request_param_year= $("#optemailselyear").val();
      vatFormObj.entity_folder= $("#optemailselfolder").val();
      vatFormObj.document_type= $("#optemailseldoctosend").val();
      vatFormObj.brand= "EFAX";
      postAjaxFunc("customers/finance/invoice_request", JSON.stringify(vatFormObj), afterecorpFormSubmit);	  

});

$('#btnrefreshemailid').click(function(e) {
   getAjaxFunc("customers/"+"finance"+"/invoice_requests?brand_name=EFAX", geteCorpEmailer, "");   
});


    $("#btnService_chargeactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    $("#btnService_skipactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    $("#btnSavePortingInfo").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    $("#serviceSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
    $("#portingDiv").hide();
    $("#chkFree").attr("disabled", true);
    formatPortingVerificationNumber();

    onSavePorting();
    verifyPortingNumber();
    clearPortingSection();
    onChangePortingCountry();
    getPhoneTypeOptionSet();
    getBuildingTypesOptionSet();
    getPhoneCarriersOptionSet();
    getStreetDirectionsOptionSet();
    getStreetTypesOptionSet();
    onClickbtnService_skipactivate();
    onClickbtnService_findOfferCode();
    onChangetxtService_SubscriptionOfferCode();
    sortingOfferCode();
    onClickbtnService_chargeactivate();
    onKeyPressName();
    turnOffBillingPaymentErrors();
    resetPortingNumber();
    onClickbtnService_startnewsignup();
    onClickbtnService_mandate_startnewsignup();
    turnOffContactErrors();
    onKeyPressCvvCode();
    
    onClickbtnCancelRequest();
    turnoffOnLoadError();
    loadOfferCodeModification();
    onClickbtntoggleSearchCollapse2();
    getSetOEMOptionSetsFunc("");
    getSetCurrencyOptionSetsFunc("");
    getBillingCountryOptionSetsFunc("");
    getLanguageOptionSet();
    getSetSDSalesRepOptionSetFunc("", "");
    getBillTypeOptionSet();
    getContactMethodOptionSet();
    getCountryOptionSet();
    // getCollectionMethodOptionSet();
    getDIDCountryOptionSetsFunc("Select a country");
    onKeyPresstxtservicedetailDid_city();
    onKeyPresstxtservicedetailDid_phone();
    onKeyPresstxtservicedetailReserve_phone();
    onClickicnService_findDID();
    limitFieldLength();
    onSaveContactAndBillingInfo();
    validatetxtcontactemail_address();
    validatetxtcontactemail_address();
    onKeyPressPortingVerificationNumber();
    //onChangePortingVerificationNumber();
    onCheckchkService_findOC();
    onChangeBrand();
    onChangeCountry();
    onChangeCurrency();
    OnSaveDidAndPlan();
    onKeyPressBillingPhoneNumber();
    onChangeCCdetails();
    onChangeDIDRadioButtons();
	
    $("#txtservicenumber_subtotal").attr("disabled", "disabled");
    $("#txtservicenumber_prorationamount").attr("disabled", "disabled");
    $("#txtservicenumber_finalamount").attr("disabled", "disabled");
    $("#txtservicenumber_taxamount").attr("disabled", "disabled");
    $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
//billingpayment_form_keypress = true;
    onChangeBillingPaymentForm();
    
    onkeypressDirectDebitPaymentForm();
    onChangeDirectDebitPaymentForm();
    onChangeoptbillpaymentcollection_methods();
    onChangePlanRadioButtons();
    emailAddressCheck();
    $("#DirectDebitDiv").hide();
    //$("#BankTransferDiv").hide();
    $("#CCDiv").show();
     $("#billingmsgtxt").show();
    $("#CCDivDirectDebit").hide();
    onKeyUptxtservicenumber();
    onKeyPressDDBillingPhoneNumber();
    onClickbtnMandateRefresh();
    // $("#chargebtnwithcc").hide();
    onClickbtnSaveMandate();
    onChangeSelectCountryBillPayment();
    onChangetxtbillpaymentcard_number();
    onkeypressContactEmailAddress();
    onChangetxtcontactemailaddress();

    $("#txtcontactportingnumber").attr('data-original-title', "Number must be 10 digits long.");
    $('[data-toggle="portingnumbertooltip"]').tooltip({ trigger: "hover" });
    $("#porttooltip").attr('data-original-title', "Port category is disabled because there is no number to port");
    $('[data-toggle="portingoffertooltip"]').tooltip({ trigger: "hover" });
}

function geteCorpEmailer(data) {

bodyHtml = '';
for(i=0;i<data.email_requests.length;i++) {
bodyHtml+= '<tr><td style="width:10%">'+data.email_requests[i].request_id+'</td><td style="width:10%">'+data.email_requests[i].user_id+'</td><td style="width:20%">'+data.email_requests[i].req_start_time+'</td><td style="width:20%">'+data.email_requests[i].req_end_time+'</td><td style="width:10%">'+data.email_requests[i].status+'</td><td style="width:8%">'+data.email_requests[i].req_total_count+'</td><td style="width:7%">'+data.email_requests[i].req_fail_count+'</td><td style="width:8%">'+data.email_requests[i].req_success_count+'</td><td style="width:7%">'+data.email_requests[i].req_interrupted_count+'</td></tr>';

}

$('#tblemailer tbody').html(bodyHtml);

}
function geteCorpfolder(data) {
		   var territoryHtml = '';
			for(i=0;i<data.folder_list.length;i++){
				territoryHtml+='<option value="'+data.folder_list[i].folder_name+'">'+data.folder_list[i].folder_name+'</option>';   
			}
			$('#optemailselfolder').html(territoryHtml);
	   }
	   
	   

 function afterecorpFormSubmit(data) {        
	$('.errorMsg').remove();
	if (data.responseText) {     
        data.responseText = JSON.parse(data.responseText);
        for(i=0;i<data.responseText.errors.length;i++) {            
            $('#hrefefaxemailer').prepend('<div class="errorMsg text-center" ><span>'+data.responseText.errors[i].user_message+'</span></div>');
        }
        
    }
    else{
        $('#hrefefaxemailer').hide();
        customAlert('Record saved successfully!!');
        setTimeout(function() {		
             getAjaxFunc("customers/finance/invoice_requests?brand_name=EFAX", geteCorpEmailer, "");	
        },3000);
    }
}

function customAlert(alertString) {
	var sd = new SimpleDialog("Test" + Math.random(), false);       
        sd.createDialog();
        window.parent.sd = sd;
        sd.setContentInnerHTML("<p align='center'>"+alertString+"</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>Ok</button></p>");        
        sd.show();
}
	   
	   
	   

function removeRequiredFromDirectDebit(){
    $("div[id*=labelDD]").not("#labelDDpostal_code").removeClass("requiredBlock");
    $("input[id*=txtDD]").not("#txtDDaddress1,#txtDDpostal_code").removeAttr("required");
}
function addRequiredFromDirectDebit(){
    $("div[id*=labelDD]").not("#labelDDpostal_code").addClass("requiredBlock");
    $("input[id*=txtDD]").not("#txtDDaddress1,#txtDDpostal_code").attr("required","required");
    
}
function getPortingStateBasedOnCountryOptionSet() {
    getAjaxFunc("lookup/state_prov?country=" + $("#optportingcountry").val(), setPortingStateProvOptionSet, "");
}
function setPortingStateProvOptionSet(data, issuccess) {
    if (issuccess) {
        if (data.state_provinces) {
            //setOptionSetsForceDefaultValue("", "#optbillpaymentcollection_methods", "", "", "", "");
            setOptionSetsForceDefaultValue(data.state_provinces, "#optportingstate", "Select", "abbreviation", "name", "Select");
            //toggleDivsOfBillingForm(contact_detail_collectionmethod);
            //$("#optbillpaymentcollection_methods").prop("disabled", true);

        }
    }
}

var loadOfferCodeModification = function () {
    $("#divServiceOfferCodeError").hide();
    //offer code modification load.
    //validatetxtService_SubscriptionOfferCode();
    //onClickbtnService_findOfferCode();
    //sortingOfferCode();
    onChangetxtService_SubscriptionOfferCode();
    onClickbtntoggleserviceIfindplan();
    onCheckchkService_findOC();
    onClickbtnService_resetOfferCode();

    onChangetxtservicedetailIogm_msg_record_len();
    onChangetxtservicedetailIvoice_msg_record_len();

    toggleOfferCodeSection();
    toggleSelectDIDSection();
    //disable change plan controls
    $("#btnService_changeOfferCode").prop("disabled", true);
    $("#btnService_changeOfferCode").addClass("disabled");
    $("input[name*=serviceplanselection]").attr("disabled", "disabled");

    onClickbtnService_changeOfferCode();

}

var toggleOfferCodeSection = function () {
    $('[data-toggle="othertooltip3"]').tooltip("destroy");
    if ($("#btntoggleserviceIfindplan").attr("aria-expanded") == "true") {
        $("#btntoggleserviceIfindplan").trigger("click");
    }
    if ((isInModificationMode || serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED") && saveServiceDetailMode == addOrUpdate.update && isInReactivationMode == false) {
        $("#btntoggleserviceIfindplan").prop("disabled", true);
        $("#btntoggleserviceIfindplan").addClass("disabled");
    } else {
        $("#btntoggleserviceIfindplan").prop("disabled", false);
        $("#btntoggleserviceIfindplan").removeClass("disabled");
    }
}
function onSavePorting() {
    $("#btnSavePortingInfo").click(function () {
        $("div[id*=lblErrPorting]").hide();
        // if (validatePorting()) {
        $("div[id*=lblErrPorting]").hide();
        var objPortinginfo = new Object();
        objPortinginfo.customer_key = $("#txtsignupCustomerKey").val();
        objPortinginfo.phone_type = ($("#optportingphonetype").val() === "Select" ? "" : $("#optportingphonetype").val());

        objPortinginfo.offer_code = $("input[id*=chkService_findOC]:checked").data("offercode");
        var portingNo = $("#txtcontactportingnumber").val().replace(/-/g, "");///-/g
        objPortinginfo.port_verification_number = portingNo;
        //objPortinginfo.port_verification_number = $("#txtcontactportingnumber").val();
        objPortinginfo.carrier = ($("#optportingphonecarrier").val() === "Select" ? "" : $("#optportingphonecarrier").val());

        objPortinginfo.user_info = new Object();
        objPortinginfo.user_info.account_number = $("#optportingaccountno").val();
        objPortinginfo.user_info.first_name = $("#txtcontactfirst_name").val();
        objPortinginfo.user_info.last_name = $("#txtcontactlast_name").val();
        objPortinginfo.user_info.port_address = new Object();
        objPortinginfo.user_info.port_address.street_number = $("#optportingstreetnumber").val();
        objPortinginfo.user_info.port_address.street_direction_prefix = ($("#optportingstreetdirection1").val() === "Select" ? "" : $("#optportingstreetdirection1").val());

        objPortinginfo.user_info.port_address.street_name = $("#optportingstreetname").val();
        objPortinginfo.user_info.port_address.street_type = ($("#optportingstreettype").val() === "Select" ? "" : $("#optportingstreettype").val());
        objPortinginfo.user_info.port_address.street_direction_suffix = ($("#optportingstreetdirection2").val() === "Select" ? "" : $("#optportingstreetdirection2").val());
        objPortinginfo.user_info.port_address.building_type = ($("#optportingstreetbuildingtype").val() === "Select" ? "" : $("#optportingstreetbuildingtype").val());
        objPortinginfo.user_info.port_address.apartment = $("#optportingaptunit").val();
        objPortinginfo.user_info.port_address.city = $("#optportingcity").val();
        objPortinginfo.user_info.port_address.state_prov = ($("#optportingstate").val() === "Select" ? "" : $("#optportingstate").val());
        objPortinginfo.user_info.port_address.state_prov = ($("#optportingstate").val() ? $("#optportingstate").val() : "");
        //objPortinginfo.user_info.port_address.state_prov = ($("#optportingstate").val() === "null" ? "" : $("#optportingstate").val()); 
        objPortinginfo.user_info.port_address.postal_code = $("#optportingzipcode").val();
        objPortinginfo.user_info.port_address.country = ($("#optportingcountry").val() === "Select" ? "" : $("#optportingcountry").val());

        postAjaxFunc("customers/sign_up/port", JSON.stringify(objPortinginfo), onAddPortingInfo);
        //  }
    })
}

var onAddPortingInfo = function (data, issuccess) {
    turnOffPortingErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divPortingMainError").html("</br>" + data.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divPortingMainError").show();
                /// showAdjustmentError("No changes to save");
            }
        } else {
            isInModificationMode = false;
            isServiceAdded = true;
            // $("#txtsignupCustomerKey").val(data.account_id);
            $("#divPortingMainSuccess").html("Porting request added successfully.");
            $("#divPortingMainSuccess").show();
            $("#chkPortingInfo").show();
            isPortingSaved = true;
            // $("#btnService_chargeactivate").removeAttr("disabled").attr({ "class": "grey-btn" });
            // if ($("#txtservicenumber_finalamount").val() > 0) {
            // $("#btnService_skipactivate").removeAttr("disabled").attr({ "class": "grey-btn" });
            //}

            $("#porting :input").attr("disabled", true);
            //  $("#billingInfoDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
            // $("#accountSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divPortingMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divPortingMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divPortingMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            //$("#divAdjustmentMainError").show();
            $("#divPortingMainError").show();
        }
        else {
            $("#divPortingMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divPortingMainError").show();
            CancelRequest = false;
        }
    }
}

function validatePorting() {
    var checkPortingFields = true;
    if ($("#optportingphonetype").val() == "Select") {
        $("div[id=lblErrPortingPhoneType]").html(errorsPorting["errPortingPhoneType"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingphonecarrier").val() == "Select") {
        $("div[id=lblErrPortingPhoneCarrier]").html(errorsPorting["errPortingPhoneCarrier"]).show();
        checkPortingFields = false;
    }

    if ($("#optportingstreetnumber").val() == "") {
        $("div[id=lblErrPortingStreetNumber]").html(errorsPorting["errPortingStreetNumber"]).show();
        checkPortingFields = false;
    }
    /*if ($("#optportingstreetdirection1").val() == "Select") {
        $("div[id=lblErrPortingStreetDirection1]").html(errorsPorting["errPortingStreetDirection1"]).show();

        checkPortingFields = false;
    }
     if ($("#optportingstreettype").val() == "Select") {
        $("div[id=lblErrPortingStreetType]").html(errorsPorting["errPortingStreetType"]).show();
        checkPortingFields = false;
    }

     if ($("#optportingstreetdirection2").val() == "Select") {
        $("div[id=lblErrPortingStreetDirection2]").html(errorsPorting["errPortingStreetDirection2"]).show();
        checkPortingFields = false;
    }
     if ($("#optportingstreetbuildingtype").val() == "Select") {
        $("div[id=lblErrPortingBuildingType]").html(errorsPorting["errPortingBuildingType"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingaptunit").val() == "") {
        $("div[id=lblErrPortingAptUnit]").html(errorsPorting["errPortingAptUnit"]).show();
        checkPortingFields = false;
    }
    */
    if ($("#optportingstreetname").val() == "") {
        $("div[id=lblErrPortingStreetName]").html(errorsPorting["errPortingStreetName"]).show();
        checkPortingFields = false;
    }



    if ($("#optportingcity").val() == "") {
        $("div[id=lblErrPortingCity]").html(errorsPorting["errPortingCity"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingstate").val() == "" || $("#optportingstate").val() == undefined || $("#optportingstate").val() == "Select") {
        $("div[id=lblErrPortingState]").html(errorsPorting["errPortingState"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingcountry").val() == "" || $("#optportingcountry").val() == undefined || $("#optportingcountry").val() == "Select") {
        $("div[id=lblErrPortingCounty]").html(errorsPorting["errPortingCounty"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingzipcode").val() == "") {
        $("div[id=lblErrPortingZipCode]").html(errorsPorting["errPortingZipCode"]).show();
        checkPortingFields = false;
    }
    if ($("#optportingcountry").val() == "US") {
        if ($("#optportingzipcode").val().length != 5 || !(/^\d+$/.test($("#optportingzipcode").val()))) {
            $("div[id=lblErrPortingZipCode]").html(errorsBillingPayment["errbillpaymentpostal_codeUS"]).show();
            checkPortingFields = false;
        }
    }
    if ($("#optportingcountry").val() == "CA") {
        if ($("#optportingzipcode").val().length < 3) {
            $("div[id=lblErrPortingZipCode]").html(errorsBillingPayment["errbillpaymentpostal_codeCanada"]).show();
            checkPortingFields = false;
        }
    }
    if ($("#optportingcountry").val() == "UK") {
        if ($("#optportingzipcode").val().length < 6) {
            $("div[id=lblErrPortingZipCode]").html(errorsBillingPayment["errbillpaymentpostal_codeUK"]).show();
            checkPortingFields = false;
        }
    }
    return checkPortingFields;
}

function emailAddressCheck() {
    $("#txtcontactemail_address").off("focusout").on("focusout", function (e) {
        if($("#txtcontactemail_address").val() && isContactEmailModify){
            $("#txtcontactemail_address").trigger("mouseleave");
        }
    });
    $("#txtcontactemail_address").off("mouseleave").on("mouseleave", function (e) {

        setTimeout(function () {
            //handle modification mode.
            /*if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange(this.id);
                return false;
            }*/
            if($("#txtcontactemail_address").val() && isContactEmailModify){
                if (isValidEmailAddress($("#txtcontactemail_address").val())) {
                    var filterSelected = $("input[name=planfilter]:checked").val();
                    var appendvariable = "";
                    if (filterSelected == "active") {
                        appendvariable = "?status=Active,SUSPEND,ORDERED";
                    } else if (filterSelected == "inactive") {
                        appendvariable = "?status=InActive,Closed";
                    } else {
                        appendvariable = "?status=all";
                    }
    
    
                    //https://ffapi2.dev.j2noc.com:8443/faxforce/customers/sign_up/send_email?email_address=a.pate123123123l@cygnetinfotech.com
                    getAjaxFunc("customers/sign_up/send_email?email_address=" + $("#txtcontactemail_address").val(), getEmailResponse, "");
    
    
                } else {
                    $("#lblErrcontactemail_address").html("Invalid email format - Please enter a correct e-mail address");
                    $("#lblErrcontactemail_address").show();
                }
            }
            
        }, 200);

    });
    $("#txtcontactemail_address").off("change").on("change", function (e) {

    });
}
function onChangetxtcontactemailaddress() {
    $("#txtcontactemail_address").off("keyup").on("keyup", function () {


       // var formArr =  $("#txtcontactemail_address").serialize();

       // jQuery.each(formArr, function (i, field) {
       //     formArr[i].value = $.trim(field.value);
       // });
        var serializedForm = $("#txtcontactemail_address").serialize();
        serializedForm;

       
            if (contact_emailaddress_keypress) {
                if (serializedForm != contact_email_address) {
                    isContactEmailModify = true;
                }
                else {
                    isContactEmailModify = false;
                    
                }
            }
        
    });
   
}
function onkeypressContactEmailAddress() {
    $("#txtcontactemail_address").off("focusin").on("focusin", function () {
       
            if (!contact_emailaddress_keypress) {
                //var txtemailaddress = $("input[id*=txtDD]");
                //txtdd.each(function () {
                //    $(this).val($.trim($(this).val()));
               // });
               contact_email_address = $("#txtcontactemail_address").serialize();

               contact_emailaddress_keypress = true;
                
            }
        
    });
}

var getEmailResponse = function (data, issuccess) {
    $("#lblErrcontactemail_address").html("");
    $("#lblErrcontactemail_address").hide();
    isContactEmailModify=false;
    if (issuccess) {
        if (data && data.success) {
            isContactEmailValid=true;
        } else if (data && data.errors) {
            if (data.errors[0].developer_message) {
                $("#lblErrcontactemail_address").html(data.errors[0].user_message);
                $("#lblErrcontactemail_address").show();
            }
        }

    } else {
        if (data.responseJSON.errors) {
            if (data.responseJSON.errors[0].user_message) {
                $("#lblErrcontactemail_address").html(data.responseJSON.errors[0].user_message);
                $("#lblErrcontactemail_address").show();
                isContactEmailValid=false;
            }
        }
    }
}
var onKeyPressPortingVerificationNumber = function () {
    $('#txtcontactportingnumber').keypress(function(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if ((charCode > 47 && charCode < 58) || (charCode < 106 && charCode > 95) || (charCode==8 || charCode==46 || charCode==118)) {
            $('#txtcontactportingnumber').trigger("keyup");
        }else{
            return false;
        }
        
    });
    $('#txtcontactportingnumber').keyup(function(e) {
        turnOffPortingDIDValidateErrors();
       // $("#portingmaindiv").hide();
       // $("input[id*=txtporting],select[id*=optporting]").not("#txtporting_number,#txtporting_emailaddress,#txtporting_targetdate,#txtporting_jiraticket,#txtporting_firmorder,#txtportingfirstname,#txtportinglastname,#txtportingcompany").val("");
        //setPortingDataFromContactTab();
        var charCode = (e.which) ? e.which : e.keyCode;      
        if ((charCode > 47 && charCode < 58) || (charCode < 106 && charCode > 95)) {
          if($("#txtcontactportingnumber").val().length<8){
            this.value = this.value.replace(/(\d{3})\-?/g, '$1-');
            return true;
          }  else{
            return false;
          }
          
        }
        //$('#phone-number-field').keyup(function(){
           // $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
        //});
        
        //remove all chars, except dash and digits
        this.value = this.value.replace(/[^\-0-9]/g, '');
        $("#txtcontactportingnumber").val($("#txtcontactportingnumber").val().substring(0,12));
        $("#txtcontactportingnumber").val($("#txtcontactportingnumber").val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'));
        setTimeout(function () {
        if($("#txtcontactportingnumber").val().length==12){
            $("#btnClearPorting").removeAttr("disabled").attr({ "class": "grey-btn" });
            $("#btnVerifyPorting").removeAttr("disabled").attr({ "class": "grey-btn" });
        }else{
            $("#btnClearPorting").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            $("#btnVerifyPorting").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            
        }
    },500);
      });

      $("#txtcontactportingnumber").off("paste").on("paste", function (e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        setTimeout(function () {
        if ((charCode > 47 && charCode < 58) || (charCode < 106 && charCode > 95)) {
          
          }
       
    var phone = $("#txtcontactportingnumber").val(),
    formatted="";
    if(phone.substr(0, 3).length>2){
    formatted=(phone.substr(0, 3) + '-'); 
    }else{
    formatted=(phone.substr(0,phone.substr(0, 3).length));
    }
    if(phone.substr(0, 3).length >2){
      if(phone.substr(3, 3).length>2){
        formatted=(phone.substr(3, 3)) + '-'; 
      }else{
        formatted=(phone.substr(0, 3) + '-'+phone.substr(3,phone.substr(3, 3).length));
      }
   
    }
    if(phone.substr(3, 3).length>2){
    if(phone.substr(6, 4).length>2){
      formatted=(phone.substr(6, 4)) + '-'; 
    }else{
      formatted=(phone.substr(0, 3) + '-'+phone.substr(3, 3) + '-'+phone.substr(6,phone.substr(6, 4).length));
    }
 
    }
    if($("#txtcontactportingnumber").val().length!=12){
        $("#txtcontactportingnumber").val(formatted);
        $("#btnVerifyPorting").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        $("#btnClearPorting").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }else{
        $("#btnClearPorting").removeAttr("disabled").attr({ "class": "grey-btn" });
        $("#btnVerifyPorting").removeAttr("disabled").attr({ "class": "grey-btn" });
    }
    $("#txtcontactportingnumber").val($("#txtcontactportingnumber").val().replace(/[^\-0-9]/g, ''));
   
    },300);
     
    });
    /*$("#txtcontactportingnumber").off("focus").on("focus", function () {
        $("#txtcontactportingnumber").val($("#txtcontactportingnumber").val().replace(/-/g, ""));

    });
    $("#txtcontactportingnumber").off("focusout").on("focusout", function () {
        $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'));
    });*/
}

function billingPhoneNumber() {
    var phones = [{ "mask": "(###) ###-####" }, { "mask": "(###) ###-##############" }];
    $('#txtbillpaymentbillingno').inputmask({
        mask: phones,
        greedy: false,
        definitions: { '#': { validator: "[0-9]", cardinality: 1 } }
    });
}
function turnOffPortingDIDValidateErrors(){
    //$("div[id*=lblErrporting]").hide();
    //$("#divPortingMainError").html("<span>Red fields are mandatory - Please complete to continue</span>");
    $("#divPortingValidateMainError").hide();
    //$("input[id*=txtporting],select[id*=optporting]").removeClass("error");
   // $("#divPortingValidateMainSuccess").hide();
    $("#verifiedStatusIcon").hide();
    $("#btnClearPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
    //$("#LOAStatusIcon").hide();
   

}
function resetPortSection(){
    $("#txtcontactportingnumber").val("");
    $("#divPortingValidateMainError").html("");
    $("#portingverificationIcon").hide();
    $("#btnClearPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
    $("#porttooltip").attr('data-original-title', "Port category is disabled because there is no number to port");
}
function clearPortingSection(){
    
    $("#btnClearPorting").off("click").on("click", function (e) {
        if(customerKey){
            $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
       
        }
        if ($("#optcontactbrand").val() == "5") {
            $("#chkFree").attr("disabled", false);
            
        }else{
            $("#chkFree").attr("disabled", true);
        }  

        clearOfferCodeNDID();
        $("input[name^='planfilter']").attr("checked", false);
        $('#chkPorting').prop("disabled", true);
        $("#btnVerifyPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
        resetPortSection();
    });
}
function verifyPortingNumber(){
    $("#btnVerifyPorting").off("click").on("click", function (e) {
   //$("#btnVerifyPorting").click(function () {
       if($("#txtcontactportingnumber").val().length != 12){
            $("#divPortingValidateMainError").html("Please enter 10 digit number to verify.").show();
            //isInModificationMode=false;
       }else{
        savePortingMode = addOrUpdate.add;
        var portingDID = $("#txtcontactportingnumber").val().replace(/-/g, "");
        var objPortingVerify = new Object();
        var portingnumberlist = [portingDID];
        //objPortingVerify.customer_key=customerKey;
        objPortingVerify.phone_number=portingDID;
        //objPortingVerify.phone_numbers=portingnumberlist;
        postAjaxFunc("inventory/portable", JSON.stringify(objPortingVerify), onValidatePortingDID);
       }
        

    });
}

var onValidatePortingDID = function (data, issuccess) {
    turnOffPortingDIDValidateErrors();
    
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divPortingValidateMainError").html("" + data.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divPortingValidateMainError").show();
                /// showAdjustmentError("No changes to save");
            }
        } else {
            
            $("#btnClearPorting").removeAttr("disabled");
            $("#btnClearPorting").removeClass("disabled");
            $("#portingverificationIcon").show();
            if(data.porting_status){
                $("#verifiedStatusIcon").removeClass("glyphicon glyphicon-remove-sign").addClass("glyphicon glyphicon-ok-sign");

                $("#verifiedStatusIcon").show();
               // $("#txtporting_emailaddress").removeAttr("disabled");
               // $("#txtportingphonenumber").val($("#txtporting_number").val());
                //$("#txtporting_number").val("");
              //  $("#portingmaindiv").show();
               // toggleEnablePortingForm();
               // setPortingDataFromContactTab();
              //  $("#btnSendLOA").val("Send LOA")
               // $("#btnSendLOA").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
                //$("#btnReSendLOA").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
             //   $("#txtporting_emailaddress").attr("disabled", "disabled");
                $("#btnVerifyPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
               
            }else{
                
                $("#verifiedStatusIcon").removeClass("glyphicon glyphicon-ok-sign").addClass("glyphicon glyphicon-remove-sign");
                $("#divPortingValidateMainError").html("Please proceed with the Manual Process, Whitelist rejected the request").show();
                $("#verifiedStatusIcon").show(); 
               // toggleEnablePortingForm();
              //  setPortingDataFromContactTab();
              //  $("#txtporting_emailaddress").removeAttr("disabled");
             //   $("#tblPortingList tr").removeClass("active1");
             //   $("#btnSendLOA").val("Send LOA");
             //   $("#portingmaindiv").show();
                $("#btnVerifyPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
              //  $("#btnSendLOA").removeAttr("disabled").removeAttr("class").attr({ "class": "grey-btn" });
               // setPortingDataFromContactTab();
            }
            if(customerKey){// && !isServiceAdded
                $('#chkPorting').prop("disabled", false);
                $("#porttooltip").attr('data-original-title',"");

            }
           
           // getPortingNumberSummary();
           
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divPortingValidateMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divPortingValidateMainError").html("" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divPortingValidateMainError").html("" + data.responseJSON.errors[0].developer_message);
            }
            //$("#divAdjustmentMainError").show();
            $("#divPortingValidateMainError").show();
            $("#btnVerifyPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            $("#txtporting_emailaddress").attr("disabled", "disabled");
        }
        else {
            $("#divPortingValidateMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divPortingValidateMainError").show();
            CancelRequest = false;
        }
        if(data.responseJSON.errors[0].error_code != "DUPLICATE_REQUEST"){
            $("#portingverificationIcon").show();
            $("#verifiedStatusIcon").removeClass("glyphicon glyphicon-ok-sign").addClass("glyphicon glyphicon-remove-sign");
            $("#verifiedStatusIcon").show();
            $("#portingmaindiv").hide();
            //$("input[id*=txtporting],select[id*=optporting]").not("#txtporting_number,#txtporting_emailaddress,#txtporting_targetdate,#txtporting_jiraticket,#txtporting_firmorder,#txtportingfirstname,#txtportinglastname,#txtportingcompany").val("");
    
            //setPortingDataFromContactTab();
        }else{
            $("#divPortingValidateMainError").html("");
            $("#portingverificationIcon").hide();
            $("#btnClearPorting").removeAttr("disabled");
            $("#btnClearPorting").removeClass("disabled");
            showPortingNumberValidationAlert(data.responseJSON.errors[0].user_message);

          // alert()
            
        }
        
    }
}
function onClickCustomerKeyForPorting(){
    
    //   $("a[id*=openCustomerInFaxForce]").off("click").on("click", function (e) {
        //apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")
        window.open("/apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")+"?customerid=" + $("#openCustomerInFaxForce").text().replace('.', ""), '_blank');
          // window.open("/apex/J2_ISP_TOOL_DEV20"+"?customerid=" + $("#openCustomerInFaxForce").text().replace('.', ""), '_blank');
       //});
   }
var showPortingNumberValidationAlert = function(msg){
    $("#openCustomerInFaxForce").remove();
    var res = msg.split("#");
    var htmlcontent = "<p align='left'>"+res[0];
    if(res[1]){
        htmlcontent+="<a href='javascript:onClickCustomerKeyForPorting();' id='openCustomerInFaxForce'>"+res[1]+"</a></p>";
    }
   

    //var htmlcontent = "<p align='left'>"+msg+"</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='window.parent.sd.hide();resetPortSection();'>OK</button>";
    //htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";
    //onClickCustomerKeyForPorting();
    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}
var onChangePortingVerificationNumber = function () {
    $("#txtcontactportingnumber").off("keyup").on("keyup", function () {
        if ($('#txtcontactportingnumber').val().length == 10) {
            validatePortingNumber();
        }
        if ($('#txtcontactportingnumber').val() == '') {
            $("#optportingcountry").val("Select");
            $("#optportingstate").val("Select");
        }

        if ($(this).val()) {
            //$("#portingDiv").show();
            $("#porting :input").attr("disabled", false);
            $("#btnSavePortingInfo").removeAttr("disabled").attr({ "class": "grey-btn" });
            //  $('#PORTING').prop("disabled", false);
        } else {
            $("#portingDiv").hide()
            $("#porting :input").attr("disabled", true);
            $("#btnSavePortingInfo").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            //  $('#PORTING').prop("disabled", true);
        }


    });
}


function onClickPlanRadioButtons() {
    $("input[name=planfilter]:radio").off("click").on("click", function (e) {
        //handle modification mode.
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
    });
}

function clearDIDSection() {
    $("#optservicedetailDid_country").val("Select a country");
    $("#tblISPSignupservice_Did > tbody").html("");
    $("#txtservicedetailDid_city").val("");
    $("#txtservicedetailDid_phone").val("");
    $("#txtservicedetailReserve_phone").val("");
}
function onChangePlanRadioButtons() {
    $("input[name=planfilter]:radio").off("change").on("change", function (e) {

        $("[id*=spnSrtOfferCode]").hide();

        //handle modification mode.
        if ($('input[name=planfilter]:checked').val() == "Free") {
            clearDIDSection();
            flagFreePlan = true;
        } else {
            if (flagFreePlan) {
                clearDIDSection();
                flagFreePlan = false;
            }
        }
        var filterSelected = $("input[name=planfilter]:checked").val();
        if (filterSelected == "Free") {
            $("#chksearchreserveDID").attr("disabled", true);
            $("#chksearchDID").prop("checked", true);
            $("input[name=selectDID]:radio").trigger("change");
        } else {
            $("#chksearchreserveDID").attr("disabled", false);
        }
        var appendvariable = "";
        if (filterSelected == "active") {
            appendvariable = "?status=Active,SUSPEND,ORDERED";
        } else if (filterSelected == "inactive") {
            appendvariable = "?status=InActive,Closed";
        } else {
            appendvariable = "?status=all";
        }
        //https://ffapi2.dev.j2noc.com:8443/faxforce/lookup/offer_codes?oem_id=2&currencycode=USD&min_subscription=0&offer_code_type=W&resource_type=INBOX_GENERIC&porting_flag=Y
        if ($("input[name='planfilter']:checked").data("value") == "P") {
            getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + (savedbrand?savedbrand:$("#optcontactbrand").val()) + "&min_subscription=0&signup_flag=Y&offer_code_type=P", setService_findOfferCode, "");

        } else {
            getAjaxFunc("lookup/offer_codes?resource_type=&currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + (savedbrand?savedbrand:$("#optcontactbrand").val()) + "&offer_code_type=" + $("input[name='planfilter']:checked").data("value") + "&signup_flag=Y&min_subscription=0", setService_findOfferCode, "");
        }
        //https://ffapi2.dev.j2noc.com:8443/faxforce/lookup/offer_codes?resource_type=&currencycode=USD&oem_id=5&product_type=FREEFAX&signup_flag=Y&min_subscription=0

    });
}

function hideSummaryAndDetail() {
    if (!$.query.get("customerid")) {
        localStorage.clear();
        if (!$.query.get("resetpage")) {
            $("#contact_summary").hide();
            // $("#tabsdiv").hide();
        }
    }
}

var callPermissionAPI = function (components) {

    getAjaxFuncSync("admin/permission?components=" + components.filter(function (x) { return typeof x === "string" }).toString(), setPermissionsGeneral, components);
    //getAjaxFuncSync("admin/permission?components=" + components.filter(x => typeof x === "string").toString(), setPermissionsGeneral, components);

}

var setPermissionsGeneral = function (data, issuccess, components) {
    if (issuccess) {
        if (data && data.permissions) {
            components.reduce(function (x, component) {
                if (typeof component === "string") {

                    if (data.permissions && data.permissions[component]) {

                        if (!(data.permissions[component].fields || data.permissions[component].functionalities)) {
                            $("#" + component).hide();
                            $("div[id*=lbl_api_error]").html(" Please contact The Support Team to get access");
                            $("div[id*=lbl_api_error]").show();

                            if (component == "contact_summary") {
                                $("#contact_summary").hide();
                                $("#tabsdiv").hide();
                            }
                        } else {
                            $("#" + component).show();
                        }
                        if (data.permissions[component].fields) {
                            var fp = data.permissions[component].fields;
                            var fieldIdCss = "";
                            var tabsArray = [];
                            for (var key in fp) {
                                if (fp.hasOwnProperty(key)) {
                                    fieldIdCss += binaryPermission(key, fp[key]);
                                    if (key.startsWith("href", 0)) {
                                        tabsArray.push({ tab: key, permission: fp[key], order: orderOfTabs.filter(function (t) { return t.tab == key })[0].order });
                                    }
                                }
                            }
                            if (tabsArray.length > 0) {
                                decideTabToShow(tabsArray);
                            }
                            if (fieldIdCss !== "") {
                                addReadRightsToPage(fieldIdCss);
                            }
                        }
                        if (data.permissions[component].functionalities) {
                            var fp = data.permissions[component].functionalities;
                            for (var key in fp) {
                                if (fp.hasOwnProperty(key)) {
                                    var functocall = component + key;
                                    functocall = functocall.replace(/ /g, '');
                                    //console.log("function would be :: " + functocall);
                                    if (typeof window[functocall] === "function") {
                                        window[functocall](fp[key]);
                                    }
                                }
                            }
                        }
                    }
                }
            }, {});

        }
    } else {
        components.reduce(function (x, component) {
            if (typeof component === "string") {
                if (component == "contact_summary") {
                    $("#contact_summary").hide();
                    $("#tabsdiv").hide();
                }
            }
        }, {});
    }
}

var decideTabToShow = function (tabsToDecide) {

    var foundPermission = false;
    tabsToDecide.sortBy('order').forEach(function (t) {
        //console.log(t.order);
        if (!foundPermission && t.permission.charAt(2) == "1") {
            foundPermission = true;
            $("#" + t.tab).trigger("click");
            $("#" + t.tab).children("a").trigger("click");
        }
    });
}


var binaryPermission = function (elementId, binaryString, elementCssAttr, elementLabelCssAttr) {
    addPermissions(binaryString.charAt(1), binaryString.charAt(0), elementId);
    return readRights(binaryString.charAt(2), elementId, elementCssAttr, elementLabelCssAttr);
}

var addReadRightsToPage = function (cssToAdd) {
    //console.log(cssToAdd);
    $("<style type='text/css'>" + cssToAdd + "</style>").appendTo("head");
}

var elementClasses = ['Name_1', 'CreditCardNumber_2', 'ExpirationDate_3', 'Priority_4', 'service_key_1', 'service_id_2', 'service_description_3', 'service_type_4', 'service_offercode_5', 'service_status_6', 'service_npch_7', 'service_startdate_8', 'service_enddate_9', 'service_resourcetype_4_2'];

var readRights = function (permit, elementId) {
    var tempAttr = "";
    if (permit == 0 || permit == "0") {
        if (elementClasses.filter(function (x) { return x == elementId }).length == 0) {
            tempAttr = " #" + elementId + "{";
        } else {
            tempAttr = " ." + elementId + "{";
        }

        var tempAttrLabel = "label[for=" + elementId + "]{";

        tempAttr += "display:none !important;"
        tempAttrLabel += "display:none !important;"

        tempAttrLabel += "} ";
        tempAttr += "} " + tempAttrLabel;

        if (elementId.startsWith("href", 0)) {
            var hrefdiv = $('a', "#" + elementId).attr('href');
            tempAttr += hrefdiv + "{display:none !important;}";
        }
        if (elementId.startsWith("txtbill_", 0)) {
            var spanfor = "span[for=" + elementId + "]";
            tempAttr += spanfor + "{display:none !important;}";
        }

        //for copy button and image of decrypt password
        if ($("#" + elementId).next().is("i") || $("#" + elementId).next().is("img")) {
            $("#" + elementId).next().hide();
        }
    }
    return tempAttr;
}

var permissionArray = [];

var addPermissions = function (createPermit, updatePermit, elementId) {

    permissionArray.push(
        { id: elementId }
    );
    permissionArray.filter(function (elem) { return elem.id == elementId })[0].addAttr_create = (createPermit == 0 || createPermit == "0" ? "disabled" : "");
    permissionArray.filter(function (elem) { return elem.id == elementId })[0].removeAttr_create = (createPermit == 1 || createPermit == "1" ? "disabled" : "");

    permissionArray.filter(function (elem) { return elem.id == elementId })[0].addAttr_update = (updatePermit == 0 || updatePermit == "0" ? "disabled" : "");
    permissionArray.filter(function (elem) { return elem.id == elementId })[0].removeAttr_update = (updatePermit == 1 || updatePermit == "1" ? "disabled" : "");


}

var ids_for_hdrbtncollapse2 = ["#txthdrtotal_main_balance", "#txthdrtotal_usage_balance", "#txthdrprevious_balance", "#txthdrcharges", "#txthdrpayments", "#txthdrgift_balance", "#txthdrpaid_balance"];

var ids_for_hdrNextDate = ["#txthdrnext_charge_date", "#txthdrnext_collection_date", "#txthdrnext_bill_date", "#txthdrnext_periodic_charge_date"];
var ids_for_hdrLastDate = ["#txthdrlast_charge_date", "#txthdrlast_collection_date", "#txthdrlast_bill_date", "#txthdrlast_periodic_charge_date"];

var ids_for_contactBillingDiv = ["#optcontactcontact_method", "#optcontactbill_type"]
var ids_for_hdrChargeDate = ["#txthdrnext_charge_date", "#txthdrlast_charge_date"];
var ids_for_hdrCollectionDate = ["#txthdrnext_collection_date", "#txthdrlast_collection_date"];
var ids_for_hdrBillDate = ["#txthdrnext_bill_date", "#txthdrlast_bill_date"];
var ids_for_hdrPeriodicDate = ["#txthdrnext_periodic_charge_date", "#txthdrlast_periodic_charge_date"];

var hideExtraControlInHeader = function () {
    $("#btntogglebalanceCollapse2").trigger("click");
    if (!$(ids_for_hdrbtncollapse2.toString()).is(":visible")) {
        $("#btntogglebalanceCollapse2").hide();
    } else {
        $("#btntogglebalanceCollapse2").show();
        setTimeout(function () {
            $("#btntogglebalanceCollapse2").trigger("click")
        }, 700);

    }

    $("#btntogglebalanceCollapse").trigger("click");
    //column label Next Date
    if (!$(ids_for_hdrNextDate.toString()).is(":visible")) {
        $("#lblhdrNextDate").hide();
    } else {
        $("#lblhdrNextDate").show();
    }

    //Column label Last Date
    if (!$(ids_for_hdrLastDate.toString()).is(":visible")) {
        $("#lblhdrLastDate").hide();
    } else {
        $("#lblhdrLastDate").show();
    }

    //row label : Charge Date
    if (!$(ids_for_hdrChargeDate.toString()).is(":visible")) {
        $("#lblhdr_charge_date").hide();
    } else {
        $("#lblhdr_charge_date").show();
    }

    //row label : Collection Date
    if (!$(ids_for_hdrCollectionDate.toString()).is(":visible")) {
        $("#lblhdr_collection_date").hide();
    } else {
        $("#lblhdr_collection_date").show();
    }

    //row label : Bill Date
    if (!$(ids_for_hdrBillDate.toString()).is(":visible")) {
        $("#lblhdr_bill_date").hide();
    } else {
        $("#lblhdr_bill_date").show();
    }

    //row label : Periodic Date
    if (!$(ids_for_hdrPeriodicDate.toString()).is(":visible")) {
        $("#lblhdr_periodic_charge_date").hide();
    } else {
        $("#lblhdr_periodic_charge_date").show();
    }


    if (!$(ids_for_hdrNextDate.toString()).is(":visible") && !$(ids_for_hdrLastDate.toString()).is(":visible") && !$("#opthdrdayOfMonth").is(":visible")) {
        $("#btntogglebalanceCollapse").hide();
    } else {
        $("#btntogglebalanceCollapse").show();
        setTimeout(function () {
            $("#btntogglebalanceCollapse").trigger("click")
        }, 700);
    }


}
//===END::: Page load calls

//===Start:::Fill Dropdownlist options

//appends options in dropdowns(which is passed in parameter) and selects default 
function setOptionSets(items, selectcontrol, defaultselected, valuename, textname, clearSelectByDefault) {
    if (clearSelectByDefault) {
        $(selectcontrol).empty();
    }
    $.each(items, function (i, item) {
        var textis = "";
        if (textname.indexOf("+")) {
            var textnamesplit = textname.split("+");
            for (i = 0; i <= (textname.match(new RegExp("\\+", "g")) || []).length; i++) {
                textis += (item[textnamesplit[i]] ? item[textnamesplit[i]] : textnamesplit[i]);
            }

        } else {
            textis = item[textname];
        }
        $(selectcontrol).append($("<option>", {
            value: item[valuename],
            text: textis
        }));
    });
    if (defaultselected !== "") {
        if (!($(selectcontrol + " option[value='" + defaultselected + "']").length > 0)) {
            $(selectcontrol + " option").each(function () {
                if ($(this).html() == defaultselected) {
                    $(this).attr("selected", "selected");
                    return;
                }
            });
        } else {
            $(selectcontrol + " option[value='" + defaultselected + "']").prop('selected', 'selected').change();
        }
    }
    else {
        $(selectcontrol).val("");
    }
}

function setOptionSetsForceDefaultValue(items, selectcontrol, defaultselectedvalue, valuename, textname, defaultselectedtext) {
    $(selectcontrol).empty();
    $.each(items, function (i, item) {
        var textis = "";
        if (textname.indexOf("+")) {
            var textnamesplit = textname.split("+");
            for (i = 0; i <= (textname.match(new RegExp("\\+", "g")) || []).length; i++) {
                textis += (item[textnamesplit[i]] ? item[textnamesplit[i]] : textnamesplit[i]);
            }

        } else {
            textis = item[textname];
        }
        $(selectcontrol).append($("<option>", {
            value: item[valuename],
            text: textis
        }));
    });
    if (defaultselectedvalue !== "") {
        if (!($(selectcontrol + " option[value='" + defaultselectedvalue + "']").length > 0)) {
            $(selectcontrol).prepend($("<option>", { value: defaultselectedvalue, text: defaultselectedtext }));
        }
        $(selectcontrol + " option[value='" + defaultselectedvalue + "']").prop('selected', 'selected').change();
    }
}

//===END:::Fill Dropdownlist options

//===START::: FILL from LOCALSTORAGE
function getSetFromLocalStorage() {
    if (typeof (localStorage) != "undefined" && $.query.get("customerid")) {
        if (!$.query.get("searchcollapse")) {
            getLocalStoragetxtMainSearchValues();
            getLocalStoragechkIncludeInactive();
            getLocalStorageSearchGridBody();

            getLocalStoragetxtMainQSearchValues();
            getLocalStoragechkIncludeInactiveQ();
            getLocalStorageQSearchGridBody();
        }

        onClickbtnCustomerID();
        makeRowActive();

        if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
            if ($("a[id=customerkey" + $.query.get("customerid") + "]").length) {
                $("a[id=customerkey" + $.query.get("customerid") + "]").trigger("click");
            }
            else {
                $("#collapseSearch").append("<a href=\"#\" id=\"customerkey" + $.query.get("customerid") + "\" data-customer_key=\"" + $.query.get("customerid") + "\">" + $.query.get("customerid") + "</a>");
                //$("collapseSearch").html("<a href=\"#\" style=\"visibility:none\" id=\"customerkey" + $.query.get("customerid") + "\" data-customer_key=\"" + $.query.get("customerid") + "\">");
                onClickbtnCustomerID();
                makeRowActive();
                $("a[id=customerkey" + $.query.get("customerid") + "]").trigger("click");
                $("a[id=customerkey" + $.query.get("customerid") + "]").hide();
            }
        }
        if (!$.query.get("searchcollapse")) {
            getLocalStorageSearchRadios();
            getLocalStorageSearchOptionsDefaults();

            setTxtMainSearchAllProps();
            setTxtValueOnSelectChange();
            checkValidity();
        }

    }
}
//===END::: FILL from LOCALSTORAGE

//===START:: RESET button click

//===END:: RESET button click


function setDayOfMonthFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.dayOfMonth) {
            setOptionSets(data.dayOfMonth, "#opthdrdayOfMonth", defaultSelected, "dayofMonth", "dayofMonth", true);
        }
    }
}


function getContactDetails() {
    setTimeout(function () {
        //get and set Customer Contact Information
        getAjaxFunc("/customers/" + customerKey, setContactDetails, "");
        $("#tabsdiv").show();
    }, 1200);
}

function setContactDetails(data, issuccess) {
    if (issuccess) {
        if (data.customer) {
            for (var property in data.customer.details) {
                if (data.customer.details.hasOwnProperty(property)) {
                    $("input[id=txtcontact" + property + "]").val(data.customer.details[property]);
                    if ($("#optcontact" + property)) {
                        $("#optcontact" + property).val(data.customer.details[property]);
                    }
                }
            }
            $("#optcontactcountry").val(String(data.customer.details["country"]).toUpperCase());

            $("#txtcontactnotes").val(data.customer.details.notes);
            getSetOEMOptionSetsFunc(data.customer.details["oem_id"]);
            getSetUserOptionSetFunc(data.customer.details["salesuserid"]);

            currency_code = data.customer.details["currency_code"];


            //to set company name required
            if (data.customer.details["oem_id"] == "50" || data.customer.details["oem_id"] == "500") {
                companyNameRequired(true);
            }
            else {
                companyNameRequired(false);
            }

            //$("#optcontactcountry").trigger("change");

            if ($("#optcontactcountry").val() == "US") {
                $("#txtcontactpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
            } else {
                $("#txtcontactpostal_code").removeAttr("pattern");
            }
            if (data.customer.details["price_per_unit"] && data.customer.details["price_per_unit"] !== null) {
                balance_payment_ppu = data.customer.details["price_per_unit"];
            }

            $("#chkcontactInboxService,#chkcontactSendService").prop("checked", false);
            $("#chkcontactInboxService,#chkcontactSendService").attr("disabled", "disabled");
            $("#chkcontactInboxService").parent().attr("title", "");
            $("#chkcontactSendService").parent().attr("title", "")

            var original_formArr = $('#contact :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            contactform_original_data = $.param(original_formArr);

            allow_inbox_email_modification = data.customer.details["allow_inbox_email_modification"];
            allow_send_email_modification = data.customer.details["allow_send_email_modification"];
        }
        $("div[id*=lbl_api_error]").hide();
    }
    else {
        if (data.responseJSON.errors[0]) {
            $("div[id*=lbl_api_error]").html("Error: " + data.responseJSON.errors[0].developer_message);
            $("div[id*=lbl_api_error]").show();
        }
        else {
            $("div[id*=lbl_api_error]").html("Error Status returned: " + data.statusText);
            $("div[id*=lbl_api_error]").show();
        }
    }
}

function setWelcomeLetter(data, issuccess) {
    if (issuccess) {
        if (data.welcome_letter) {
            if (data.welcome_letter.enabled === false) {
                $("#btnSendWelcomeLetter").attr({ "disabled": "disabled", "class": "disabled" });
            } else {
                $("#btnSendWelcomeLetter").attr("class", "grey-btn");
            }
        }
    }

}

function revertBillingProcessDates() {
    window.onbeforeunload = function (e) {
        e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            //e.returnValue = 'Sure?';
        }

        var revertDatesFor = "";

        if (oldCustomerKey) {
            revertDatesFor = oldCustomerKey;
        } else {
            if (customerKey) {
                revertDatesFor = customerKey;
            }
        }

        if (revertDatesFor) {
            $.ajax({
                type: "GET",
                url: $("body").data("apiurl") + "customers/" + revertDatesFor + "/restorebillprocessdates?interval_day=" + oldbillingdates.oldDayOfMonth + "&next_charge_date=" + oldbillingdates.oldNextChargeDate + "&next_collection_date=" + oldbillingdates.oldNextCollectionDate + "&next_bill_date=" + oldbillingdates.oldNextBillDate,
                dataType: "json",
                async: false,
                success: function (data) {
                    // if (e) {
                    // 	e.returnValue = 'Sure?';
                    // }
                    // return 'Sure?';
                },
                error: function (e1) {
                    //return 'Sure?';
                }
            });

        }
    };
}
//===END::: Customer link click and fill Header and contact information

//===START::: fill all dropdowns of contact tab

function getAllContactOptionSets() {
    getSalutationOptionSet();
    getLanguageOptionSet();
    //getOSOptionSet();
    getBillTypeOptionSet();
    getContactMethodOptionSet();
    // getCountryOptionSet();

    getSetOEMOptionSetsFunc("");
    getSetUserOptionSetFunc("");
}

function getSalutationOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("salutations");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/salutations", setSalutationOptionSetsFunc, "");
    }
    else {
        setSalutationOptionSetsFunc(getFromLocalStorage, true);
    }
}
function setSalutationOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.salutations) {
            if (getLocalStorageOptionSetData("salutations") === "") {
                setLocalStorageOptionSetData("salutations", data);
            }
            setOptionSets(data.salutations, "#optcontactname_prefix", "", "salutation", "salutation", true);
        }
    }
}
function getLanguageOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("languages");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/languages", setLanguageOptionSetsFunc, "");
    }
    else {
        setLanguageOptionSetsFunc(getFromLocalStorage, true);
    }

}
function setLanguageOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.languages) {
            if (getLocalStorageOptionSetData("languages") === "") {
                setLocalStorageOptionSetData("languages", data);
            }
            setOptionSets(data.languages, "#optcontactlanguage", "en", "code", "description", false);
            //setOptionSetsForceDefaultValue(data.languages, "#optcontactlanguage", "code", "description", "en", "");
        }
    }
}

function getSetOEMOptionSetsFunc(oem_id) {

    var getFromLocalStorage = getLocalStorageOptionSetData("oems");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/oems", setOEMOptionSetsFunc, oem_id);
    }
    else {
        setOEMOptionSetsFunc(getFromLocalStorage, true, oem_id);
    }


    if (oem_id === "" || oem_id === null) {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]['id'] = "";
        objectArray[0]['name'] = "";
        setOptionSetsForceDefaultValue(objectArray, "#optcontactbrand", "", "id", "Select A Brand", "");
        $("#optcontactbrand").val("");
    }
}

function setOEMOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.oems) {

            if (getLocalStorageOptionSetData("oems") === "") {
                setLocalStorageOptionSetData("oems", data);
            }
            var validoemId = ["1", "2", "4", "5","8"];

            var newOemList = new Array();
            for (var i = 0; i < data.oems.length; i++) {
                if ((jQuery.inArray(data.oems[i].id, validoemId)) != -1) {
                    newOemList.push(data.oems[i]);
                }
            }

            setOptionSets(newOemList, "#optcontactbrand", defaultSelected, "id", "name+ +(+id+)", false);

            if (defaultSelected !== "" && defaultSelected !== null && defaultSelected !== undefined) {
                var active = false;
                data.oems.forEach(function (oems) {
                    if (oems.id == defaultSelected) {
                        active = true;
                    }
                }, this);
                if (!active) {
                    getAjaxFunc("oems/" + defaultSelected, setInactiveOEMOptionSetsFunc, defaultSelected);
                }
            }

        }
    } else {
        if (data.responseJSON.oems) {
            if (getLocalStorageOptionSetData("oems") === "") {
                setLocalStorageOptionSetData("oems", data.responseJSON);
            }

            setOptionSets(data.responseJSON.oems, "#optcontactbrand", defaultSelected, "id", "name+ +(+id+)", false);

            if (defaultSelected !== "" && defaultSelected !== null && defaultSelected !== undefined) {
                var active = false;
                data.responseJSON.oems.forEach(function (oems) {
                    if (oems.id == defaultSelected) {
                        active = true;
                    }
                }, this);
                if (!active) {
                    getAjaxFunc("oems/" + defaultSelected, setInactiveOEMOptionSetsFunc, defaultSelected);
                }
            }
        }
    }
}
function getOSOptionSet() {
    getAjaxFunc("lookup/oses", setOSOptionSetsFunc, "");
}
function setOSOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.oses) {
            setOptionSets(data.oses, "#optcontactoperating_system", "", "description", "description", true);
        }
    }
}


function getBillTypeOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("billtypes");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/billtypes", setBillTypeOptionSetsFunc, "");
    }
    else {
        setBillTypeOptionSetsFunc(getFromLocalStorage, true);
    }

}
function setBillTypeOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.bill_types) {
            if (getLocalStorageOptionSetData("billtypes") === "") {
                setLocalStorageOptionSetData("billtypes", data);
            }
            setOptionSets(data.bill_types, "#optcontactbill_type", "D", "type", "description", true);
        }
    }
}

function getContactMethodOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("contactmethods");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/contactmethods", setContactMethodOptionSetsFunc, "");
    }
    else {
        setContactMethodOptionSetsFunc(getFromLocalStorage, true);
    }

}
function setContactMethodOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.contact_methods) {
            if (getLocalStorageOptionSetData("contactmethods") === "") {
                setLocalStorageOptionSetData("contactmethods", data);
            }
            setOptionSets(data.contact_methods, "#optcontactcontact_method", "E", "method", "description", true);
        }
    }
}
function getCountryOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("countries");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/countries", setCountryOptionSetsFunc, "");
    }
    else {
        setCountryOptionSetsFunc(getFromLocalStorage, true);
        // var objectArray = [];
        // objectArray[0] = {};
        //objectArray[0]["id"] = "";


        // setOptionSetsForceDefaultValue(objectArray, "#optcontactcountry", "", "", "Select A Currency", "");

    }
}
function setCountryOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.countries) {
            if (getLocalStorageOptionSetData("countries") === "") {
                setLocalStorageOptionSetData("countries", data);
            }
            $("#optcontactcountry").val("");
            $("#optbillpaymentcountry_code").val("");
            setOptionSetsForceDefaultValue(data.countries, "#optcontactcountry", "US", "code", "name", "Select A Country");
            setOptionSetsForceDefaultValue(data.countries, "#optbillpaymentcountry_code", " ", "code", "name", " ");
            $("#optcontactcountry").trigger("change");

        }
    }
}

function getPhoneTypeOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("phonetype");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/phone_types", setPhoneTypeOptionSetsFunc, "");
    }
    else {
        setPhoneTypeOptionSetsFunc(getFromLocalStorage, true);
    }
}

function setPhoneTypeOptionSetsFunc(data, issuccess) {
    if (issuccess) {

        if (data.phone_types) {
            if (getLocalStorageOptionSetData("phonetype") === "") {
                setLocalStorageOptionSetData("phonetype", data);
            }
            setOptionSetsForceDefaultValue(data.phone_types, "#optportingphonetype", "Select", "phone_type", "description", "Select");
            //setOptionSets(data.phone_types, "#optportingphonetype", "", "phone_type", "description", true);
        }
    }
}

function getPhoneCarriersOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("phonecarriers");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/phone_carriers", setPhoneCarriersOptionSetsFunc, "");
    }
    else {
        setPhoneCarriersOptionSetsFunc(getFromLocalStorage, true);
    }
}

function setPhoneCarriersOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.phone_carriers) {
            if (getLocalStorageOptionSetData("phonecarriers") === "") {
                setLocalStorageOptionSetData("phonecarriers", data);
            }
            setOptionSetsForceDefaultValue(data.phone_carriers, "#optportingphonecarrier", "Select", "carrier_code", "carrier_name", "Select");
            //setOptionSets(data.phone_carriers, "#optportingphonecarrier", "", "carrier_code", "carrier_name", true);
        }
    }
}

function getStreetDirectionsOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("streetdirections");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/street_directions", setStreetDirectionsOptionSetsFunc, "");
    }
    else {
        setStreetDirectionsOptionSetsFunc(getFromLocalStorage, true);
    }
}

function setStreetDirectionsOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.street_directions) {
            if (getLocalStorageOptionSetData("streetdirections") === "") {
                setLocalStorageOptionSetData("streetdirections", data);
            }
            setOptionSetsForceDefaultValue(data.street_directions, "#optportingstreetdirection1", "Select", "street_direction", "description", "Select");
            setOptionSetsForceDefaultValue(data.street_directions, "#optportingstreetdirection2", "Select", "street_direction", "description", "Select");

            //setOptionSets(data.street_directions, "#optportingstreetdirection", "", "street_direction", "description", true);
        }
    }
}

function getStreetTypesOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("streettypes");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/street_types", setStreetTypesOptionSetsFunc, "");
    }
    else {
        setStreetTypesOptionSetsFunc(getFromLocalStorage, true);
    }
}

function setStreetTypesOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.street_types) {
            if (getLocalStorageOptionSetData("streettypes") === "") {
                setLocalStorageOptionSetData("streettypes", data);
            }
            setOptionSetsForceDefaultValue(data.street_types, "#optportingstreettype", "Select", "street_type", "description", "Select");
            //setOptionSets(data.street_types, "#optportingstreettype", "", "street_type", "description", true);
        }
    }
}

function getBuildingTypesOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("buildingtypes");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/building_types", setBuildingTypesOptionSetsFunc, "");
    }
    else {
        setBuildingTypesOptionSetsFunc(getFromLocalStorage, true);
    }
}

function setBuildingTypesOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.building_types) {
            if (getLocalStorageOptionSetData("buildingtypes") === "") {
                setLocalStorageOptionSetData("buildingtypes", data);
            }
            setOptionSetsForceDefaultValue(data.building_types, "#optportingstreetbuildingtype", "Select", "building_type", "description", "Select");
            //setOptionSets(data.street_types, "#optportingstreettype", "", "street_type", "description", true);
        }
    }
}

function getEventTypeOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("eventtype");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/eventtypes", setEventTypeOptionSetsFunc, "");
    }
    else {
        setEventTypeOptionSetsFunc(getFromLocalStorage, true);
    }
}
function setEventTypeOptionSetsFunc(data, issuccess) {
    if (issuccess) {

        if (data.event_types) {
            if (getLocalStorageOptionSetData("eventtype") === "") {
                setLocalStorageOptionSetData("eventtype", data);
            }
            setOptionSets(data.event_types, "#opteventsevent_type", "", "type", "description", true);
        }
    }
}

function getSetUserOptionSetFunc(sales_representative) {
    var getFromLocalStorage = getLocalStorageOptionSetData("users");
    if (getFromLocalStorage === "") {
        getAjaxFunc("admin/users?status=A", setUsersOptionSetsFunc, sales_representative);
    }
    else {
        setUsersOptionSetsFunc(getFromLocalStorage, true, sales_representative);
    }

    if (sales_representative === "" || sales_representative === null) {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]["id"] = "";


        setOptionSetsForceDefaultValue(objectArray, "#optcontactsales_rep", "", "", "", "");
        $("#optcontactsales_rep").val("");
    }
}

function setUsersOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_users) {

            if (getLocalStorageOptionSetData("users") === "") {
                setLocalStorageOptionSetData("users", data);
            }

            setOptionSets(data.sales_users, "#optcontactsales_rep", defaultSelected, "id", "id+ +(+name+)", false);

            if (defaultSelected !== "" && defaultSelected !== null && defaultSelected !== undefined) {
                var active = false;
                data.sales_users.forEach(function (salesuser) {
                    if (salesuser.id == defaultSelected) {
                        active = true;
                    }
                }, this);
                if (!active) {
                    getAjaxFunc("admin/users/" + defaultSelected, setInactiveUsersOptionSetsFunc, defaultSelected);
                }
            }
        }
    }
}

function getSetSDSalesRepOptionSetFunc(user_status, sales_representative) {

    var getFromLocalStorage = getLocalStorageOptionSetData("users");
    if (getFromLocalStorage === "") {
        getAjaxFunc("admin/users?status=A", setSDSalesRepOptionSetsFunc, sales_representative);
    }
    else {
        setSDSalesRepOptionSetsFunc(getFromLocalStorage, true, sales_representative);
    }

    if (sales_representative !== "") {
        if (user_status == "I" || user_status == "Inactive") {
            getAjaxFunc("admin/users/" + sales_representative, setInactiveSDSalesRepOptionSetsFunc, sales_representative);
        } else {
            $("#optcontactsalesrep option[value='" + sales_representative + "']").prop('selected', 'selected').change();
        }
    }
    else {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]['id'] = "";
        objectArray[0]['name'] = "";

        setOptionSets(objectArray, "#optcontactsalesrep", "", "", "", false);
        $("#optcontactsalesrep").val("");
        $('#optcontactsalesrep option')
            .filter(function () {
                return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
            })
            .remove();
    }

}

function setSDSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_users) {
            if (getLocalStorageOptionSetData("users") === "") {
                setLocalStorageOptionSetData("users", data);
            }
            setOptionSets(data.sales_users, "#optcontactsalesrep", $("body").data("ispldapusername").toString().toLowerCase(), "ldap_user_name", "id+ +(+name+)", false);
        }
    }
}

function getSetSendSalesRepOptionSetFunc(user_status, sales_representative) {

    var getFromLocalStorage = getLocalStorageOptionSetData("users");
    if (getFromLocalStorage === "") {
        getAjaxFunc("admin/users?status=A", setSDSendSalesRepOptionSetsFunc, sales_representative);
    }
    else {
        setSDSendSalesRepOptionSetsFunc(getFromLocalStorage, true, sales_representative);
    }

    if (sales_representative !== "") {
        if (user_status == "I" || user_status == "Inactive") {
            getAjaxFunc("admin/users/" + sales_representative, setInactiveSDSendSalesRepOptionSetsFunc, sales_representative);
        } else {
            $("#optservicedetailOsales_rep option[value='" + sales_representative + "']").prop('selected', 'selected').change();
        }
    }
    else {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]['id'] = "";
        objectArray[0]['name'] = "";

        setOptionSetsForceDefaultValue(objectArray, "#optservicedetailOsales_rep", "", "", "", "");
        $("#optservicedetailOsales_rep").val("");
    }

}

function setSDSendSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_users) {
            if (getLocalStorageOptionSetData("users") === "") {
                setLocalStorageOptionSetData("users", data);
            }
            setOptionSets(data.sales_users, "#optservicedetailOsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
        }
    }
}

//==All Inactive activities
function setInactiveUsersOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_user) {
            var objectArray = [];
            objectArray[0] = {};
            objectArray[0]['id'] = data.sales_user.id;
            objectArray[0]['name'] = data.sales_user.name;
            setOptionSets(objectArray, "#optcontactsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
        }
    }
}


function setInactiveSDSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_user) {
            var objectArray = [];
            objectArray[0] = {};
            objectArray[0]['id'] = data.sales_user.id;
            objectArray[0]['name'] = data.sales_user.name;
            setOptionSets(objectArray, "#optcontactsalesrep", defaultSelected, "id", "id+ +(+name+)", false);
        }
    }
}
function setInactiveSDSendSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_user) {
            var objectArray = [];
            objectArray[0] = {};
            objectArray[0]['id'] = data.sales_user.id;
            objectArray[0]['name'] = data.sales_user.name;
            setOptionSets(objectArray, "#optservicedetailOsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
        }
    }
}
function setInactiveOEMOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.oem) {
            var objectArray = [];
            objectArray[0] = {};
            objectArray[0]['id'] = data.oem.id;
            objectArray[0]['name'] = data.oem.name;
            setOptionSets(objectArray, "#optcontactbrand", defaultSelected, "id", "name+ +(+id+)", false);
        }
    }
}

//===END::: fill all dropdowns of contact tab

//===START::: radio button change, option set change, Validation, 
//Auto Save text field, Set value of search textbox on anychange
function onChangeRadioButton() {
    $("input[name=searchradios]:radio").change(function () {
        setTxtMainSearchAllProps();
        setTxtValueOnSelectChange();
        checkValidity();
    });
}

function onChangeSelectOption() {
    var selects = ["#s1,#s2,#s3,#s4,#s5"];
    $.each(selects, function (i, item) {
        $(item).change(function () {
            setTxtMainSearchAllProps();
            setTxtValueOnSelectChange();
            checkValidity();
        });
    });

}


function checkRadioOnSelectChange() {
    var selectRadioPair = [{ selectid: "#s1", radioid: "#r1" },
    { selectid: "#s2", radioid: "#r2" },
    { selectid: "#s3", radioid: "#r3" },
    { selectid: "#s4", radioid: "#r4" },
    { selectid: "#s5", radioid: "#r5" }
    ];
    $.each(selectRadioPair, function (i, item) {
        $(item.selectid).click(function () {
            if (!$(item.radioid).prop("checked"))
                $(item.radioid).prop("checked", true);
            $("input[name=searchradios]:radio").trigger("change");
        });
    });
}


function setLocalStorageOptionSetData(optionsetname, data) {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.lookup." + optionsetname] = JSON.stringify(data);
    }
}

function setLocalStorageSearchRadiosChange() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.selectedsearchradios"] = $("input[name=searchradios]:checked").val();
    }

}
function setLocalStoragetxtMainSearchValues() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.txtMainSearch"] = JSON.stringify($("#collapseSearch").children().data());
    }
}
function setLocalStoragetxtMainQSearchValues() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.txtMainQSearch"] = $("#txtMainQSearch").val();
    }
}
function setLocalStoragechkIncludeInactive() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.chkIncludeInactive"] = $("#chkIncludeInactive").is(":checked");
    }
}
function setLocalStoragechkIncludeInactiveQ() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.chkIncludeInactiveQ"] = $("#chkIncludeInactiveQ").is(":checked");
    }
}
function setLocalStorageAllSearchOptionsDefaults() {
    if (typeof (localStorage) !== "undefined") {
        var SearchOptionsDefaults =
            [{ selectid: "#s1", selected: $("#s1").val() },
            { selectid: "#s2", selected: $("#s2").val() },
            { selectid: "#s3", selected: $("#s3").val() },
            { selectid: "#s4", selected: $("#s4").val() },
            { selectid: "#s5", selected: $("#s5").val() }
            ];

        localStorage["isp.searchOptionsDefaults"] = JSON.stringify(SearchOptionsDefaults);
    }
}

function setLocalStorageSearchGridBody() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.tblISPSearchResultBody"] = $("#tblISPSearchResult > tbody").html();
        localStorage["isp.lblNoOfRecords"] = $("#lblNoOfRecords").html();
    }
}

function getLocalStorageSearchGridBody() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.tblISPSearchResultBody"]) {
            $("#tblISPSearchResult > tbody").html(localStorage["isp.tblISPSearchResultBody"]);
            if (localStorage["isp.lblNoOfRecords"]) {
                $("#lblNoOfRecords").html(localStorage["isp.lblNoOfRecords"]).show();
            }
        }
    }
}

function setLocalStorageQSearchGridBody() {
    if (typeof (localStorage) !== "undefined") {
        localStorage["isp.tblISPQSearchResultBody"] = $("#tblISPQSearchResult > tbody").html();
        localStorage["isp.lblQNoOfRecords"] = $("#lblQNoOfRecords").html();
    }
}

function getLocalStorageExpandedSearch() {
    if (typeof (localStorage) !== "undefined") {
        if (localStorage["isp.expandedSearch"] == "btntoggleSearchCollapse") {
            $("#btntoggleSearchCollapse").attr({ "class": "", "aria-expanded": true });
            $("#collapseSearch").attr({ "class": "collapse in", "aria-expanded": true }).removeAttr("style");;
            $('#collapseSearch').trigger('show.bs.collapse');
        }
        else {
            $("#btntoggleQSearchCollapse").attr({ "class": "", "aria-expanded": true });
            $("#collapseQSearch").attr({ "class": "collapse in", "aria-expanded": true }).removeAttr("style");;
            $('#collapseQSearch').trigger('show.bs.collapse');
        }
    }
}

function setLocalStorageExpandedSearch() {
    if (typeof (localStorage) !== "undefined") {
        if ($("#btntoggleSearchCollapse").attr("aria-expanded") == "true") {
            localStorage["isp.expandedSearch"] = "btntoggleSearchCollapse";
        } else {
            localStorage["isp.expandedSearch"] = "btntoggleQSearchCollapse";
        }

    }
}

function getLocalStorageQSearchGridBody() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.tblISPQSearchResultBody"]) {
            $("#tblISPQSearchResult > tbody").html(localStorage["isp.tblISPQSearchResultBody"]);
            if (localStorage["isp.lblQNoOfRecords"]) {
                $("#lblQNoOfRecords").html(localStorage["isp.lblQNoOfRecords"]).show();
            }
        }
    }
}

function getLocalStorageSearchRadios() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.selectedsearchradios"]) {
            $('input[name=searchradios][value=' + localStorage["isp.selectedsearchradios"] + ']').prop('checked', true);
        }
    }
}
function getLocalStorageSearchOptionsDefaults() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.searchOptionsDefaults"]) {
            var SearchOptionsDefaults = JSON.parse(localStorage["isp.searchOptionsDefaults"]);
            $.each(SearchOptionsDefaults, function (i, item) {
                $(item.selectid + " option[value=" + item.selected + "]").prop('selected', 'selected').change();
            });
        }
    }
}
function getLocalStoragetxtMainSearchValues() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.txtMainSearch"]) {
            $("#collapseSearch").children().data(JSON.parse(localStorage["isp.txtMainSearch"]));
        }
    }
}
function getLocalStoragetxtMainQSearchValues() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.txtMainQSearch"]) {
            $("#txtMainQSearch").val(localStorage["isp.txtMainQSearch"]);
            if ($("#txtMainQSearch").val()) {
                $("#btnMainQSearch").prop("disabled", false);
                $("#btnMainQSearch").removeClass("disabled").addClass("grey-btn");
            } else {
                $("#btnMainQSearch").prop("disabled", true);
                $("#btnMainQSearch").addClass("disabled").removeClass("grey-btn");
            }
        }
    }
}
function getLocalStoragechkIncludeInactive() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.chkIncludeInactive"]) {
            $("#chkIncludeInactive").prop("checked", (localStorage["isp.chkIncludeInactive"] == "true" ? true : false));
        }
    }
}
function getLocalStoragechkIncludeInactiveQ() {
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
        if (localStorage["isp.chkIncludeInactiveQ"]) {
            $("#chkIncludeInactiveQ").prop("checked", (localStorage["isp.chkIncludeInactiveQ"] == "true" ? true : false));
        }
    }
}
function getLocalStorageOptionSetData(optionsetname) {
    var data = "";
    if (typeof (localStorage) !== "undefined") {
        if (localStorage["isp.lookup." + optionsetname]) {
            data = JSON.parse(localStorage["isp.lookup." + optionsetname]);
        }
    }
    return data;
}

function checkValidity() {
    if ($("#txtMainSearch").val() !== "") {
        $("#btnMainSearch").prop("disabled", false);
        $("#btnMainSearch").removeClass("disabled").addClass("grey-btn");

        if (!$("#txtMainSearch")[0].checkValidity()) {
            $("#txtMainSearch").addClass("error");
            displayError();
        }
        else {
            $("#txtMainSearch").removeClass("error");
            $("#form_errors").hide();
        }
    }
    else {
        $("#txtMainSearch").removeClass("error");
        $("#form_errors").hide();
        $("#btnMainSearch").prop("disabled", true);
        $("#btnMainSearch").addClass("disabled").removeClass("grey-btn");

    }
}
function displayError() {
    var func_zero = function () { return formError1; };
    var errorToDisplay = {
        0: func_zero,
        1: function () {
            if ($.isNumeric($("#txtMainSearch").val())) {
                return formError1;
            }
            else {
                return formError2;
            }
        },
        2: function () {
            if (($("#txtMainSearch").val()).length > charLengthForError2) {
                return formError2.replace("%s", (($("#txtMainSearch").val()).length - charLengthForError2));
            }
            else {
                return formError1;
            }
        }
    };
    var form_error;
    if (validateErrorsBy === 0) {
        form_error = formError1;
    }
    else if (validateErrorsBy == 1) {
        if ($.isNumeric($("#txtMainSearch").val())) {
            form_error = formError1;
        }
        else {
            form_error = formError2;
        }
    }
    else if (validateErrorsBy == 2) {
        if (($("#txtMainSearch").val()).length > charLengthForError2) {
            form_error = formError2.replace("%s", (($("#txtMainSearch").val()).length - charLengthForError2));
        }
        else {
            form_error = formError1;
        }
    }
    $("#txtMainSearch").addClass("error");
    $("#form_errors").html("<strong>Error: </strong> " + form_error);
    $("#form_errors").show();
}

function txtMainSearchFocusOut() {
    $("#txtMainSearch").focusout(function () {
        checkValidity();
    });
}

function txtMainQSearchFocusOut() {
    $("#txtMainQSearch").focusout(function () {
        $("#txtMainQSearch").trigger("keyup");
    });
}

function typingInMainSearch() {
    $("#btnMainSearch").prop("disabled", true);
    $("#btnMainSearch").addClass("disabled").removeClass("grey-btn");

    var typingTimer,                //timer identifier
        doneTypingInterval = 300;  //time in ms, 0.5 second for example

    $("#txtMainSearch").keyup(function (event) {
        if (this.value.trim() === "") {
            $(this).val(this.value.trim());
            $("#btnMainSearch").prop("disabled", true);
            $("#btnMainSearch").addClass("disabled").removeClass("grey-btn");
        }
        else {
            $("#btnMainSearch").prop("disabled", false);
            $("#btnMainSearch").removeClass("disabled").addClass("grey-btn");

            //if enter pressed then call search click
            if (event.keyCode == 13) {
                $("#btnMainSearch").trigger("click");
            }

        }

        clearTimeout(typingTimer);
        if ($('#eventSearch').val) {
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        }
    });
}



function doneTyping() {
    autoSaveTxtMainSearchValues(getSelectedOptionSetValue(), $("#txtMainSearch").val());
}

function autoSaveTxtMainSearchValues(selectid, txtMainSearchValue) {
    $("#collapseSearch").children().data(selectid, txtMainSearchValue);
}

function typingInMainQSearch() {
    $("#btnMainQSearch").prop("disabled", true);
    $("#btnMainQSearch").addClass("disabled").removeClass("grey-btn");

    $("#txtMainQSearch").keyup(function (event) {
        if (this.value.trim() === "") {
            $(this).val(this.value.trim());
            $("#btnMainQSearch").prop("disabled", true);
            $("#btnMainQSearch").addClass("disabled").removeClass("grey-btn");
        }
        else {
            $("#btnMainQSearch").prop("disabled", false);
            $("#btnMainQSearch").removeClass("disabled").addClass("grey-btn");

            //if enter pressed then call search click
            if (event.keyCode == 13) {
                $("#btnMainQSearch").trigger("click");
            }
        }
    });
}

function setTxtValueOnSelectChange() {
    var selectid = getSelectedOptionSetValue();
    if ($("#collapseSearch").children().data(selectid)) {
        $("#txtMainSearch").val($("#collapseSearch").children().data(selectid));
        $("#btnMainSearch").prop("disabled", false);
        $("#btnMainSearch").addClass("grey-btn").removeClass("disabled");
    }
    else {
        $("#txtMainSearch").val("");
        $("#btnMainSearch").prop("disabled", true);
        $("#btnMainSearch").addClass("disabled").removeClass("grey-btn");
    }
}


function getSelectedOptionSetValueFrmRadio(selectedradiobtn) {
    return {
        "1": $("#s1").val(),
        "2": $("#s2").val(),
        "3": $("#s3").val(),
        "4": $("#s4").val(),
        "5": $("#s5").val()
    }[selectedradiobtn];
}


function GetAllAttributes(selectedvalue) {
    var attr = {};
    attr.title2 = "";
    attr.has2errors = false;
    attr.maxCharLength = 0;
    attr.minCharLength = 0;
    attr.type = "text";
    attr.validateErrorsBy = secondErrorEnum.none;


    var attrs = {
        "fax_number_did": function (attr) {
            attr.pattern = "[0-9]{6,20}";
            attr.required = true;
            attr.title = "Please type at least 6 characters to Search on Fax Number - DID";
            attr.has2errors = true;
            attr.title2 = "20 Characters are the Maximum allowed - Remove %s characters";
            attr.validateErrorsBy = secondErrorEnum.byMinLength;
            attr.maxCharLength = 20;
            attr.minCharLength = 6;
            attr.type = "text";
            attr.onkeydown = "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )";
            attr.onpasteonlyNumeric = true;
            return attr;
        },
        "full_credit_card_number": function (attr) {
            attr.pattern = "[0-9]{13,}";
            attr.required = true;
            attr.title = "Please type at least 13 characters to Search on Credit Cards";
            attr.has2errors = true;
            attr.title2 = "Please enter numeric value only";
            attr.validateErrorsBy = secondErrorEnum.numeric;
            attr.maxCharLength = 0;
            attr.minCharLength = 0;
            attr.onkeydown = "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )";
            attr.onpasteonlyNumeric = true;
            return attr;
        },
        "contact_email_begins": function (attr) {
            attr.pattern = ".{2,}";
            attr.required = true;
            attr.title = "Please type 2 characters or more to search on Contact email begins";
            return attr;
        },
        "contact_email_contains": function (attr) {
            attr.pattern = ".{4,}";
            attr.required = true;
            attr.title = "Please type 4 characters or more to search on Contact email address";
            return attr;
        },
        "send_email_begins": function (attr) {
            attr.pattern = ".{2,}";
            attr.required = true;
            attr.title = "Please type 2 characters or more to search on Send email begins";
            return attr;
        },
        "send_email_contains": function (attr) {
            attr.pattern = ".{4,}";
            attr.required = true;
            attr.title = "Please type 4 characters or more to search on Send email address";
            return attr;
        },
        "inbox_email_address_begins": function (attr) {
            attr.pattern = ".{2,}";
            attr.required = true;
            attr.title = "Please type 2 characters or more to search on Inbox email address";
            return attr;
        },
        "personal_mobile_number": function (attr) {
            attr.pattern = "[0-9]{6,20}";
            attr.required = true;
            attr.title = "Please type at least 6 characters to Search on Personal Mobile Number";
            attr.has2errors = true;
            attr.title2 = "20 Characters are the Maximum allowed - Remove %s characters";
            attr.validateErrorsBy = secondErrorEnum.byMinLength;
            attr.maxCharLength = 20;
            attr.minCharLength = 6;
            attr.type = "text";
            attr.onkeydown = "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )";
            attr.onpasteonlyNumeric = true;
            return attr;
        },
        "mailing_address_contains": function (attr) {
            attr.pattern = ".{6,10}";
            attr.required = true;
            attr.title = "Please type at least 6 characters to search on Mailing Address";
            attr.has2errors = true;
            attr.title2 = "10 Characters are the Maximum allowed - Remove %s characters";
            attr.maxCharLength = 10;
            attr.minCharLength = 6;
            attr.validateErrorsBy = secondErrorEnum.byMinLength;
            return attr;
        },
        "billing_address_contains": function (attr) {
            attr.pattern = ".{6,10}";
            attr.required = true;
            attr.title = "Please type at least 6 characters to search Billing Address";
            attr.has2errors = true;
            attr.title2 = "10 Characters are the Maximum allowed - Remove %s characters";
            attr.maxCharLength = 10;
            attr.minCharLength = 6;
            attr.validateErrorsBy = secondErrorEnum.byMinLength;
            return attr;
        },
        "full_contact_email_address": function (attr) {
            attr.pattern = "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$";
            attr.required = true;
            attr.title = "Please enter valid email address";
            attr.type = "email";
            return attr;
        },
        "full_send_email_address": function (attr) {
            attr.pattern = "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$";
            attr.required = true;
            attr.title = "Please enter valid email address";
            attr.type = "email";
            return attr;
        },
        "full_inbox_email_address": function (attr) {
            attr.pattern = "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$";
            attr.required = true;
            attr.title = "Please enter valid email address";
            attr.type = "email";
            return attr;
        },
        "company_name_begins": function (attr) {
            attr.pattern = ".{1,}";
            attr.required = true;
            attr.title = "";
            return attr;
        },
        "first_name_begins": function (attr) {
            attr.pattern = ".{2,}";
            attr.required = true;
            attr.title = "Please type 2 characters or more to search on First Name";
            return attr;
        },

        "last_name_begins": function (attr) {
            attr.pattern = ".{2,}";
            attr.required = true;
            attr.title = "Please type 2 characters or more to search on Last Name";
            return attr;
        },
        "customer_id": function (attr) {
            attr.pattern = "[0-9]{1,}";
            attr.required = true;
            attr.title = "";
            attr.type = "text";
            attr.onkeydown = "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )";
            attr.onpasteonlyNumeric = true;
            return attr;
        },
        "default": function (attr) {
            attr.pattern = ".{1,}";
            attr.required = false;
            attr.title = "";
            return attr;
        }
    };

    attr = attrs[selectedvalue](attr);
    return attr;
}

function setAttributes(attributesObj) {
    if (attributesObj.required) {
        if (attributesObj.onkeydown) {
            $("#txtMainSearch").attr({ "onkeydown": attributesObj.onkeydown });
        }
        else {
            $("#txtMainSearch").removeAttr("onkeydown");
        }
        if (attributesObj.onpasteonlyNumeric) {
            $("#txtMainSearch").on("paste", function () {
                setTimeout(function () {
                    onchangeOnlyNumeric("#txtMainSearch");
                }, 100);

            });
        }
        else {
            $("#txtMainSearch").off("paste");
        }
        if (attributesObj.removeSpecialChar) {
            $("#txtMainSearch").on("focusout", function () {
                removeSpecialChars("#txtMainSearch");
                txtMainSearchFocusOut();
            });
        }
        else {
            $("#txtMainSearch").off("focusout");
            txtMainSearchFocusOut();
        }
        if (attributesObj.has2errors) {
            $("#txtMainSearch").attr({ "type": attributesObj.type, "pattern": attributesObj.pattern, "required": "required" });
            formError1 = attributesObj.title;
            formError2 = attributesObj.title2;
            charLengthForError1 = attributesObj.minCharLength;
            charLengthForError2 = attributesObj.maxCharLength;
            validateErrorsBy = attributesObj.validateErrorsBy;
        }
        else {
            $("#txtMainSearch").attr({ "type": attributesObj.type, "pattern": attributesObj.pattern, "title": attributesObj.title, "required": "required" });
            formError1 = attributesObj.title;
            formError2 = "";
            charLengthForError1 = 0;
            charLengthForError2 = 0;
            validateErrorsBy = secondErrorEnum.none;

        }
    }
    else {
        formError1 = "";
        formError2 = "";
        charLengthForError1 = 0;
        charLengthForError2 = 0;
        validateErrorsBy = secondErrorEnum.none;
        $("txtMainSearch").removeAttr("required");
        if (attributesObj.pattern === "")
            $("#txtMainSearch").removeAttr("pattern");
        $("#txtMainSearch").attr({ "title": attributesObj.title });
    }
}

function onchangeOnlyNumeric(field) {
    var $this = $(field);
    $this.val($this.val().replace(/\D/g, ''));
}
function onchangeOnlyNumeric_firstCheck(field) {
    var $this = $(field);
    if (isNaN($this.val())) {
        $this.val($this.val().replace(/\D/g, ''));
    }
}
function getSelectedOptionSetValue() {
    return getSelectedOptionSetValueFrmRadio($("input[name=searchradios]:checked").val());
}

function removeSpecialChars(field) {
    var $this = $(field);
    $this.val($this.val().replace(/[^a-z0-9]/gi, ''));
}

function setTxtMainSearchAllProps() {
    var selectvalue = getSelectedOptionSetValue();
    var attributes = GetAllAttributes(selectvalue);
    setAttributes(attributes);
}
//===START::: radio button change, option set change, Validation, 
//Auto Save text field, Set value of search textbox on anychange

function icnCopyToClipboard() {

    $("i[id*=icnCopyCustomerId]").click(function (e) {
        $("#txthdrid").removeAttr("disabled");
        var temp = $("#txthdrid").val();

        var targ = document.getElementById("txthdrid");

        targ.focus();
        targ.select();
        document.execCommand("copy");

        $("#txthdrid").val("");
        $("#txthdrid").val(temp);
        $("#txthdrid").attr("disabled", "disabled");

        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });

    $("i[id*=icnCopyEmail]").click(function (e) {
        var wasdisabled = false;
        if ($("#txtcontactemail_address").prop("disabled")) {
            wasdisabled = true;
            $("#txtcontactemail_address").removeAttr("disabled");
        }

        var temp = $("#txtcontactemail_address").val();
        var targ = document.getElementById("txtcontactemail_address");

        targ.focus();
        targ.select();
        document.execCommand("copy");

        $("#txtcontactemail_address").val("");
        $("#txtcontactemail_address").val(temp);
        if (wasdisabled) {
            $("#txtcontactemail_address").prop("disabled", true);
        }

        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}
function validatetxtcontactemail_address() {
    $("#txtcontactemail_address").attr({ "pattern": "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$", "required": "required" });
}
function limitFieldLength() {
    //contact feilds limits
    TextLimit($("#txtcontactfirst_name"), 31);
    TextLimit($("#txtcontactlast_name"), 31);
    TextLimit($("#txtcontactemailid"), 101);
    TextLimit($("#txtcontactnotes"), 2001);

    /* TextLimit($("#txtcontactcompany_name"), 61);
     TextLimit($("#txtcontactaddress_line1"), 61);
     TextLimit($("#txtcontactaddress_line2"), 61);
     TextLimit($("#txtcontactcity"), 61);
    TextLimit($("#txtcontactstate_prov"), 21);
     TextLimit($("#txtcontactpostal_code"), 21);
  
     TextLimit($("#txtcontactwork_number"), 41);
     TextLimit($("#txtcontactfax_number"), 41);
     TextLimit($("#txtcontacthome_number"), 41);
     TextLimit($("#txtcontactmobile_number"), 41);*/




    TextLimit($("#txtbillpaymentfirst_name"), 31);
    TextLimit($("#txtbillpaymentlast_name"), 31);
    TextLimit($("#txtbillpaymentaddress_line1"), 61);
    TextLimit($("#txtbillpaymentaddress_line2"), 61);
    TextLimit($("#txtbillpaymentcity"), 61);
    TextLimit($("#txtbillpaymentstate_province"), 21);
    TextLimit($("#txtbillpaymentpostal_code"), 21);


    TextLimit($("#txtDDaddress"), 61);
    TextLimit($("#txtDDaddress1"), 61);
    TextLimit($("#txtDDcity"), 61);
    TextLimit($("#txtDDstate_province"), 21);
    TextLimit($("#txtDDbillingno"), 21);
     $("#txtDDstate_province").attr('maxlength', 20);
     $("#txtbillpaymentpostal_code").attr('maxlength', 20);
       $("#txtDDpostal_code").attr('maxlength', 20);
      $("#txtDDcity").attr('maxlength', 60);
       $("#txtDDaddress1").attr('maxlength', 60);
        $("#txtDDaddress").attr('maxlength', 60);

}

function isNumberAllowPaste(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (evt.ctrlKey)
        return true;

    if (evt.keyCode == 8 || evt.keyCode == 46
        || evt.keyCode == 37 || evt.keyCode == 39) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    // if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

    return true;

}
//===START::: general Methods
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isCharacter(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0)) {
        return false;
    }
    return true;
}

function isDecimal(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
        return false;
    }
    return true;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
Array.prototype.sortBy = function (p) {
    return this.slice(0).sort(function (a, b) {
        return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
}

var Strings = {};
Strings.orEmpty = function (entity) {
    if (entity === 0) {
        return entity;
    } else {
        return entity || "";
    }

};
function deleteAjaxFunc(urlendpoints, data, successCallback, extraparam) {
    $.ajax({
        type: "DELETE",
        url: $("body").data("apiurl") + urlendpoints,
        dataType: "json",
        contentType: "application/json",
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        data: data,
        success: function (data) {
            if (typeof successCallback === "function") {
                successCallback(data, true, extraparam);
            }
        },
        error: function (e) {
            handleApiError(e, successCallback, extraparam);
        }
    });
}
function postAjaxFunc(urlendpoints, data, successCallback, extraparam) {
    $.ajax({
        type: "POST",
        url: $("body").data("apiurl") + urlendpoints,
        dataType: "json",
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        contentType: "application/json",
        data: data,
        success: function (data) {
            if (typeof successCallback === "function") {
                successCallback(data, true);
            }
        },
        error: function (e) {
            handleApiError(e, successCallback, extraparam);
        }
    });
}

function getAjaxFunc_obsolete(urlendpoints, successCallback, extraparam) {
    $.ajax({
        type: "GET",
        url: $("body").data("apiurl") + urlendpoints,
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        dataType: "json",
        async: true,
        //beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', ispuserToken);},
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }

            }
        },
        error: function (e) {

            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(e, false, extraparam);
                }
                else {
                    successCallback(e, false);
                }
            }
        }
    });
}


function getAjaxFunc(urlendpoints, successCallback, extraparam) {
    $.ajax({
        type: "GET",
        url: $("body").data("apiurl") + urlendpoints,
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        dataType: "json",
        async: true,
        //beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', ispuserToken);},
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }

            }
        },
        error: function (e) {
            handleApiError(e, successCallback, extraparam);
        }
    });
}


function getAjaxFuncFFAPI(urlendpoints, successCallback, extraparam) {
    $.ajax({
        type: "GET",
        url: $("body").data("ffapiurl") + urlendpoints,
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        dataType: "json",
        async: true,
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }

            }
        },
        error: function (e) {
            handleApiError(e, successCallback, extraparam);
        }
    });
}

function getAjaxFuncSyncNoHeader(urlendpoints, successCallback, extraparam) {
    $.ajax({
        type: "GET",
        url: $("body").data("apiurl") + urlendpoints,
        
        async: false,
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }

            }
        },
        error: function (e) {
            turnoffOnLoadError();
            if (e && e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0] && e.responseJSON.errors[0].error_code) {
                if (token_errors.indexOf(e.responseJSON.errors[0].error_code) == -1) {
                    //console.log(e.responseJSON.errors[0].error_code);
                    if (typeof successCallback === "function") {
                        if (extraparam !== "") {
                            successCallback(e, false, extraparam);
                        }
                        else {
                            $("#DivWaitprocess").hide();
                            $("#DivDisablePage").hide();
                            $("#DivWaitprocessWithButton").hide();
                            if (e && e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0]) {
                                if (e.responseJSON.errors[0].user_message) {
                                    $("div[id*=lbl_api_error]").html(e.responseJSON.errors[0].user_message);
                                    $("div[id*=lbl_api_error]").show();
                                    // if (e.responseJSON.errors[0].developer_message) {
                                    //     $("div[id*=lbl_api_error]").append("(" + e.responseJSON.errors[0].developer_message + ")");
                                    //     $("div[id*=lbl_api_error]").show();
                                    // }
                                } else if (e.responseJSON.errors[0].developer_message) {
                                    $("div[id*=lbl_api_error]").html(e.responseJSON.errors[0].developer_message);
                                    $("div[id*=lbl_api_error]").show();
                                } else {
                                    $("div[id*=lbl_api_error]").html(" Service Unavailable - Please try again later");
                                    $("div[id*=lbl_api_error]").show();
                                }
                            } else {
                                $("div[id*=lbl_api_error]").html(" Service Unavailable - Please try again later");
                                $("div[id*=lbl_api_error]").show();
                            }
                            return false;
                        }
                    }
                } else {
                    showLoginScreen();
                }
            }
        }
    });
}

function getAjaxFuncSync(urlendpoints, successCallback, extraparam) {
    $.ajax({
        type: "GET",
        url: $("body").data("apiurl") + urlendpoints,
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        dataType: "json",
        async: false,
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }

            }
        },
        error: function (e) {
            if (e && e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0] && e.responseJSON.errors[0].error_code) {
                if (token_errors.indexOf(e.responseJSON.errors[0].error_code) == -1) {
                    //console.log(e.responseJSON.errors[0].error_code);
                    if (typeof successCallback === "function") {
                        if (extraparam !== "") {
                            successCallback(e, false, extraparam);
                        }
                        else {
                            if (e && e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0]) {
                                if (e.responseJSON.errors[0].user_message) {
                                    $("div[id*=lbl_api_error]").html(e.responseJSON.errors[0].user_message);
                                    $("div[id*=lbl_api_error]").show();
                                    if (e.responseJSON.errors[0].developer_message) {
                                        $("div[id*=lbl_api_error]").append("(" + e.responseJSON.errors[0].developer_message + ")");
                                        $("div[id*=lbl_api_error]").show();
                                    }

                                } else if (e.responseJSON.errors[0].developer_message) {
                                    $("div[id*=lbl_api_error]").html(e.responseJSON.errors[0].developer_message);
                                    $("div[id*=lbl_api_error]").show();
                                } else {
                                    $("div[id*=lbl_api_error]").html(" Service Unavailable - Please try again later");
                                    $("div[id*=lbl_api_error]").show();
                                }
                            } else {
                                $("div[id*=lbl_api_error]").html(" Service Unavailable - Please try again later");
                                $("div[id*=lbl_api_error]").show();
                            }
                            $("#DivWaitprocess").hide();
                            $("#DivDisablePage").hide();
                            $("#DivWaitprocessWithButton").hide();
                            return false;
                            //throw new Error("Service Unavailable - Please try again later")
                        }
                    }
                } else {
                    showLoginScreen();
                }
            }
        }
    });
}

function putAjaxFunc(urlendpoints, data, successCallback, extraparam) {
    $.ajax({
        type: "PUT",
        url: $("body").data("apiurl") + urlendpoints,
        dataType: "json",
        contentType: "application/json",
        headers: { 'Authorization': 'Bearer ' + $("body").data("ispuserToken") },
        data: data,
        success: function (data) {
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(data, true, extraparam);
                }
                else {
                    successCallback(data, true);
                }
            }
        },
        error: function (e) {
            handleApiError(e, successCallback, extraparam);
        }
    });
}

var handleApiError = function (e, successCallback, extraparam) {
    //console.log(e);
    if (e && e.responseJSON && e.responseJSON.errors && e.responseJSON.errors[0] && e.responseJSON.errors[0].error_code) {
        if (token_errors.indexOf(e.responseJSON.errors[0].error_code) == -1) {
            //console.log(e.responseJSON.errors[0].error_code);
            if (typeof successCallback === "function") {
                if (extraparam !== "") {
                    successCallback(e, false, extraparam);
                }
                else {
                    successCallback(e, false);
                }
            }
        } else {
            showLoginScreen();
        }
    }
}

var downloadExcelFile = function (fileurl, filename) {
    downloadFileFromAPI(fileurl, filename, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8")
    //downloadFileFromAPI(fileurl, filename, " application/vnd.ms-excel")

}


var downloadCSVFile = function (fileurl, filename) {
    downloadFileFromAPI(fileurl, filename, "text/csv")
}

var downloadFileFromAPI = function (fileurl, filename, fileContentType) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var a;
        if (xhttp.readyState === 4 && xhttp.status === 200) {

            if (window.navigator.msSaveOrOpenBlob) {  // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
                window.navigator.msSaveBlob(xhttp.response, filename);
                $("#DivWaitprocessWithButton").hide();
            }
            else {
                // Trick for making downloadable link
                a = document.createElement('a');
                a.href = window.URL.createObjectURL(xhttp.response);
                // Give filename you wish to download
                a.download = filename;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                $("#DivWaitprocessWithButton").hide();
            }

        }
    };
    // Post data to URL which handles post request
    $("#DivWaitprocessWithButton").show();

    xhttp.open("GET", $("body").data("apiurl") + "/" + fileurl);
    xhttp.setRequestHeader("Content-Type", fileContentType);
    xhttp.setRequestHeader("Authorization", 'Bearer ' + $("body").data("ispuserToken"));
    // You should set responseType as blob for binary responses
    xhttp.responseType = 'blob';
    xhttp.send();
}


function getDateByString(datepassed, format) {
    // /2014-04-01T02:30:00.000IST
    var dateString = String(datepassed);
    var date = dateString.split("T")[0];
    var time = String(dateString.split("T")[1]);

    var dd = date.split("-")[2];
    var mm = date.split("-")[1];
    var yyyy = date.split("-")[0];

    var hh = time.split(":")[0];
    var mi = time.split(":")[1];
    var ss = time.split(":")[2];

    if (format == 'mm-dd-yyyy') {
        return mm + '-' + dd + '-' + yyyy;
    }
    else {
        return new Date(dd, mm, yyyy, hh, mi, ss);
    }
}

function replaceNewCaseButton() {
    $("input[name='newCase']").hide();

    var htmlbtn = "<input type=\"button\" value=\"New Case\" class=\"grey-btn\" id=\"btnNewCase\" onClick=\"window.open('/setup/ui/recordtypeselect.jsp?ent=Case&save_new_url=500/e?def_account_id=" + $("body").data("sfAccountid") + "', '_blank');\" />";
    var newcaseParent = $("input[name='newCase']").parent().append(htmlbtn);
}

function TextLimit(elem, maxChars) {
    var permittedKeys = [9, 16, 17, 8, 35, 36, 37, 38, 39, 40, 46];

    elem.focus(function () {
        if (elem.val().length >= maxChars) {
            elem.data('prevent', true);
            elem.data('value', elem.val().substring(0, (maxChars - 1)));
            elem.val(elem.data('value'));
        }
    });

    elem.blur(function () {
        if (elem.data('prevent')) {
            elem.val(elem.data('value'));
        }
    });

    elem.keyup(function (event) {
        var count = elem.val().length;
        if (count >= maxChars && $.inArray(event.which, permittedKeys) < 0) {
            elem.data('prevent', true);
            elem.data('value', elem.val().substring(0, (maxChars - 1)));
            elem.val(elem.data('value'));
            elem.trigger("keyup");
            return false;
        } else {
            elem.data('prevent', false);
        }
    });
}

function isInArray(lookinto, seefor) {
    if (seefor) {
        return lookinto.indexOf(seefor.toUpperCase()) > -1;
    } else {
        return false;
    }

}
//===END::: general Methods

//===START:::loader
$(document).ajaxStart(function () {

});
$(document).ajaxStop(function () {

});
var ajaxstopfunc = function () {
    if (ajaxCallInProgress === 0) {
        setTimeout(function () {
            $("#DivWaitprocess").fadeOut(50);
            $("#DivWaitprocessWithButton").fadeOut(50);
        }, 1200);
    }

}

$.ajaxSetup({
    beforeSend: function () {
        ajaxCallInProgress++;

        if ($("#DivWaitprocess").is(":visible")) {
            $("#DivWaitprocessWithButton").hide();
        }
        else {
            $("#DivWaitprocessWithButton").fadeIn(50);
            $("#DivWaitprocess").hide();
        }
    },
    complete: function () {
        ajaxCallInProgress--;
        setTimeout(function () {
            ajaxstopfunc();
        }, 800);
    }
});
//===END:::loader

//===START:::Cancel all ajax request
function onClickbtnCancelRequest() {
    $("#btnCancelAllAjaxRequest").click(function () {
        CancelRequest = true;
        $.ajaxQ.abortAll();
    });
}
$.ajaxQ = (function () {
    var id = 0, Q = {};

    $(document).ajaxSend(function (e, jqx) {
        jqx._id = ++id;
        Q[jqx._id] = jqx;
    });
    $(document).ajaxComplete(function (e, jqx) {
        delete Q[jqx._id];
    });

    return {
        abortAll: function () {
            var r = [];
            $.each(Q, function (i, jqx) {
                r.push(jqx._id);
                jqx.abort();
            });
            return r;
        }
    };

})();
//===END:::Cancel all ajax request

//===START::: Manage tab clicks and changes.(including modification mode managing)
function clearLoadedTabs() {
    $.each(tabsloaded, function (key) {
        tabsloaded[key] = false;
    });
}




function showSimpleDialogTabChange(tabclicked) {
    var functiontocall = "";
    var popUpButtons = 0;
    var htmlcontent = "";
    if (htmlcontent !== "") {

        var sd = new SimpleDialog("Test" + Math.random(), false);
        sd.setTitle("");
        sd.createDialog();
        window.parent.sd = sd;
        //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
        sd.setContentInnerHTML(htmlcontent);
        sd.show();
    }
}






















//===END::: Manage tab clicks and changes.(including modification mode managing)




//===START::: Retrieve Info of Billing Tab -> Payment Tab



function getParentCustomerDtls() {
    if ($("#txthdrid").val() !== $("#txthdrbilling_customer_key").val()) {
        getParentCustomerSummary($("#txthdrbilling_customer_key").val());
    } else {
        clearParentCustomerForm();
    }
}
function getPaypalCollectionMethodDtls() {
    getAjaxFunc("customers/" + customerKey + "/paypal", setPaypalCollectionMethodData, "");

}

function setPaypalCollectionMethodData(data, issuccess) {
    if (issuccess) {
        if (data.paypal) {
            $("#txtbillpaymntPaypal_contractType").val(data.paypal.contract_type);
            $("#txtbillpaymntPaypal_contractEndDate").val(data.paypal.contract_end_date ? moment(data.paypal.contract_end_date).format('MM/DD/YYYY') : "");

        }
    }
}
var showDirectDebitAlert = function () {
    var htmlcontent = "<p align='left'>You must add a valid Direct Debit mandate to the customer account using ZUMA application. The customer needs to provide the required information for the mandate set-up. No payment collection attempt will be made for the customer until the mandate is added.</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>OK</button>";
    //htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var clearOfferCodeNDID = function () {
    $("#tblISPsignup_findOfferCode > tbody").html("");
    $("#tblISPSignupservice_Did > tbody").html("");
    $("input[name^='planfilter']").attr("checked", false);
    turnOffServiceErrors();
    $("#chkServiceInfo").hide();
    $("#txtservicedetailDid_city").val("");
    $("#txtservicedetailDid_phone").val("");
    $("#txtservicedetailReserve_phone").val("");
    $("#optservicedetailDid_country").val("Select a country");

    $("#divServiceDidError").hide();

}

var triggerToolTipForDD = function(){
    $('[data-toggle="tooltipformandateacno"]').tooltip({ trigger: "hover" });
    $('[data-toggle="tooltipformandatesortcode"]').tooltip({ trigger: "hover" });
    $('[data-toggle="tooltipformandateacholdername"]').tooltip({ trigger: "hover" });
    $('[data-toggle="tooltipformandatebankname"]').tooltip({ trigger: "hover" });
}
function allowAlphaNumericWithSpace(textbox) {
    $(textbox).keypress(function(e)
    {
           var k;
           k=e.which;//document.all ? k=e.keycode : k=e.which;
           if (((k>47 && k<58)||(k>64 && k<91)||(k>96 && k<123)||k==0 ||  k === 8 || k === 46) // uppercase
           ||
           
           k == 32) { // space
               return;
           }
           e.preventDefault();
    });
};
var onChangeCurrency = function () {
    $("#optcontactcurrency").off("change").on("change", function () {

        var formArr = $('#optcontactcurrency').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (currency_form_keypress) {
            if (serializedForm != currency_original_data) {
                isCurrencyChanged = true;
            }
            else {
                isCurrencyChanged = false;
            }
        }


        //$("input[name^='planfilter']").attr("checked", false);
        // $("#tblISPsignup_findOfferCode > tbody").html("");
        if ($("#optcontactcurrency option:selected").val() != "Select A Currency") {

            var active = false;
            var currency_symbol = "";
            var getCurrencyData = getLocalStorageOptionSetData("currencies");
            if (getCurrencyData) {
                getCurrencyData.currencies.forEach(function (currency) {
                    if (currency.code == $("#optcontactcurrency option:selected").val()) {
                        active = true;
                        //currency_symbol = currency.code + currency.currency_symbol;
                        currency_symbol = currency.code;
                        currency_decimalplaces = currency.decimal_places;
                        // console.log(currency.code);
                    }
                }, this);
                $("span[id*=spanbillpaymentCurrency]").html(currency_symbol);
                currencies_symbol = currency_symbol;
                $("label[id*=spanServiceNumberActivationCurrency]").html(currency_symbol);
            }

            //if (!active) {
            //    getAjaxFunc("currencies/" + currency_id, setInactiveCurrencyOptionSetsFunc, currency_id);
            // }

        }
        getCollectionMethodOptionSetForCurrency();
        setTimeout(function () {
                /*if(!($("#optcontactcurrency").val() == "EUR" || $("#optcontactcurrency").val() == "GBP")){
                    $("#optbillpaymentcollection_methods option[value='D']").remove();
                }else{
                    if($('#optbillpaymentcollection_methods').find("option:contains('D')").length <1){
                         $('#optbillpaymentcollection_methods').append('<option value="D">Intl-Invoice-DirectDebit</option>');
                    }
                   
                }*/
                //removeOtherCollectionMethod();
                
                 
                 
                /*  if($('#optbillpaymentcollection_methods').find("option:contains('C')").length ==1){
                    if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="C"){
                           $("#optbillpaymentcollection_methods").val("C");
                           $("#optbillpaymentcollection_methods").trigger("change");
                          // ddpayment_form_keypress=false;
                          // $("input[id*=txtDD]").trigger("focusin");
                           if($("#optcontactcountry").val() == "UK" || $("#optcontactcountry").val() == "US" || $("#optcontactcountry").val() == "CA"){
                               $("#txtbillpaymentpostal_code").removeAttr("disabled", "disabled");
                           }else{
                                $("#txtbillpaymentpostal_code").attr("disabled", "diabled");
                            }
                            if($("#optcontactcountry").val() == "US" || $("#optcontactcountry").val() == "CA"){
                                $("#txtbillpaymentstate_province").removeAttr("disabled", "disabled");
                            }else{
                                $("#txtbillpaymentstate_province").attr("disabled", "diabled");
                            }
                            if(!isShowDDAlert){
                                   $("#txtbillpaymentpostal_code").removeAttr("disabled", "disabled");
                            }


                           
                           
                    }
                  }*/
                
                  
                if($("#optcontactcurrency").val() != "EUR" && $("#optcontactcurrency").val() != "GBP" && $("#optcontactcurrency").val() != "JPY"){
                    $("#optbillpaymentcollection_methods option[value='D']").remove();
                    //$("#optbillpaymentcollection_methods option[value='B']").remove();
                    if(!isShowDDAlert && directdebitchangeflag){
                        if (customerKey  && (isCountryChanged || isCurrencyChanged || isBrandChanged)) {
                             $("#optbillpaymentcollection_methods").prop("disabled", false);
                        }
                    }
                 }
                 
                 if($('#optbillpaymentcollection_methods').find("option:contains('B')").length ==1){
                    if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="B"){
                           $("#optbillpaymentcollection_methods").val("B");
                           $("#optbillpaymentcollection_methods").trigger("change");
                           //ddpayment_form_keypress=false;
                            if(!isShowDDAlert){
                               if (customerKey  && !isCountryChanged  && !isBrandChanged) {
                                   $("#DirectDebitDiv :input").attr("disabled", true);
                                   $("#optbillpaymentcollection_methods").prop("disabled", true);
                               }else{
                                   $("#DirectDebitDiv :input").attr("disabled", false);
                                   $("#optbillpaymentcollection_methods").prop("disabled", false);
                               }
                            }
                           
                           
                           
                    }
           }
                 if($("#txtcontactcollection_method").val() != 'C' && $("#txtcontactcollection_method").val() != 'B' && isShowDDAlert && customerKey && $('#optbillpaymentcollection_methods').find("option:contains('D')").length != 1){
                   
                    if((savedbrand ==  $("#optcontactbrand").val() && 
                   savedCountry ==  $("#optcontactcountry").val() &&
                   $("#optcontactcurrency").val() != "Select A Currency" ) ||
                    ( $("#optcontactcurrency").val() != "Select A Currency" && !isCurrencySupportDirectDebit())){ // 
                         isShowDDAlert=false;
                            showSimpleDialogForCountryBrandChange();
                   }else{
                   // if(isBrandChanged){
                    //    clearOfferCode();
                    //}
                   }
                  
                    
                }else if($('#optbillpaymentcollection_methods').find("option:contains('D')").length ==1){
                         if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="D"){
                                $("#optbillpaymentcollection_methods").val("D");
                                $("#optbillpaymentcollection_methods").trigger("change");
                                ddpayment_form_keypress=false;
                                $("input[id*=txtDD]").trigger("focusin");
                                if($("#optcontactcountry").val() == "UK"){
                                    $("#txtDDpostal_code").removeAttr("disabled", "disabled");
                                }else{
                                     $("#txtDDpostal_code").attr("disabled", "diabled");
                                 }
                                 if(!isShowDDAlert){
                                        $("#txtDDpostal_code").removeAttr("disabled", "disabled");
                                 }



                                 
                                 if(!isShowDDAlert){
                                    if (customerKey  && !isCountryChanged && !isCurrencyChanged && !isBrandChanged) {
                                        $("#DirectDebitDiv :input").attr("disabled", true);
                                        $("#optbillpaymentcollection_methods").prop("disabled", true);
                                    }else{
                                        $("#DirectDebitDiv :input").attr("disabled", false);
                                        $("#optbillpaymentcollection_methods").prop("disabled", false);
                                    }
                                 }
                                
                                
                                
                         }
                } else if(customerKey && $('#optbillpaymentcollection_methods').find("option:contains('D')").length !=1 && $("#txtcontactcollection_method").val() != 'C' && !isShowDDAlert){
                         $("#CCParentDiv").append($('#CCDiv').detach());
                        $("#CCDivDirectDebit").hide();
                       
                       //  $("#billingInfoDiv").find("input, button, submit, textarea, select").not("#btnSaveContactBillinginfo").removeAttr("disabled", "disabled");//not("#optcontactcountry","#optcontactcurrency")
                }

                if($("#txtcontactcollection_method").val() == 'C' && customerKey && isShowPortingAlert && $("#portingverificationIcon").is(":visible")){
                   /* if((savedbrand ==  $("#optcontactbrand").val() && 
                    savedCountry ==  $("#optcontactcountry").val() &&
                    $("#optcontactcurrency").val() != "Select A Currency" ) ||
                     ( $("#optcontactcurrency").val() != "Select A Currency" && !isCurrencySupportPorting())){ *///
                        if(!isCurrencySupportPorting() || !isBrandSupportPorting() || !isCountrySupportedPorting()){
                             isShowPortingAlert=false;
                             showSimpleDialogForPortingCountryBrandChange();
                    }
                }

               
            }, 2000);
        //getAjaxFunc("lookup/offer_codes?resource_type=INBOX_GENERIC&currencycode=USD&offer_code_type=W&oem_id=" + $("#optcontactbrand").val() , setService_findOfferCode, "");
    });
}

var onChangePortingCountry = function () {
    $("#optportingcountry").off("change").on("change", function () {
        if ($("#optportingcountry").val() != "Select") {
            getPortingStateBasedOnCountryOptionSet();
        } else {
            $("#optportingcountry").html("");
        }


    }
    )
};
var onChangeBrand = function () {
    $("#optcontactbrand").off("focus").on("focus", function () {
        initial_value_optcontactbrand = $(this).val();
    }).off("change").on("change", function (e) {
    //$("#optcontactbrand").off("change").on("change", function () {


        var formArr = $('#optcontactbrand').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (brand_form_keypress) {
            if (serializedForm != brand_original_data) {
                isBrandChanged = true;
            }
            else {
                isBrandChanged = false;
            }
        }

        // getOfferCodeType();
        
       // $("#tblISPsignup_findOfferCode > tbody").html("");
        $('#optportingcountry').html("");
        if ($("#optcontactbrand option:selected").val() != "Select A Brand") {
            $('#optportingcountry').append($('<option>',
                {
                    value: 'Select',
                    text: 'Select'
                }));
            if ($("#optcontactbrand option:selected").val() == "2") {
                $('#optportingcountry').append($('<option>',
                    {
                        value: 'US',
                        text: 'United States'
                    }));
            }
            if ($("#optcontactbrand option:selected").val() == "4") {
                $('#optportingcountry').append($('<option>',
                    {
                        value: 'US',
                        text: 'United States'
                    }));
                $('#optportingcountry').append($('<option>',
                    {
                        value: 'CA',
                        text: 'Canada'
                    }));
            }
            if ($("#optcontactbrand option:selected").val() == "5") {
                if (customerKey) {
                   // $("#chkFree").attr("disabled", false);
                }

                $('#optportingcountry').append($('<option>',
                    {
                        value: 'US',
                        text: 'United States'
                    }));
            }
            getSetCurrencyOptionSetsFunc("");


            if ($("#optcontactcountry option:selected").val() != "Select A Country") {
              //  getCollectionMethodOptionSet();

            }
            setTimeout(function () {
                if ($("#optcontactcurrency option[value='USD']").length == 1) {
                    $("#optcontactcurrency").val("USD");
                }
                $("#optcontactcountry").trigger("change");
                
            }, 2000);
        }

        //getAjaxFunc("lookup/offer_codes?resource_type=INBOX_GENERIC&currencycode=USD&offer_code_type=W&oem_id=" + $("#optcontactbrand").val() , setService_findOfferCode, "");
    });
}
var onChangeCountry = function () {
    $("#optcontactcountry").off("change").on("change", function () {


        if ($(this).val() == "US" || $(this).val() == "CA" || $(this).val() == "UK") {
            $("#directdebitpostalcodediv").attr({ "class": " col-sm-12 col-md-6 requiredInput" });
           // $("#postalcodediv").attr({ "class": " col-sm-12 col-md-6 requiredInput" });
        } else {
            $("#directdebitpostalcodediv").attr({ "class": "col-sm-12 col-md-6" });
            $("#txtDDpostal_code").removeClass("error");
           // $("#postalcodediv").attr({ "class": "col-sm-12 col-md-6" });
           // $("#txtbillpaymentpostal_code").removeClass("error");
        }
        if ($(this).val() == "US") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtDDpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
            directdebitpostal_code(true);
           // $("#txtbillpaymentpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
           // billpaymentpostal_code(true);
        } else {
            if ($(this).val() == "CA" || $(this).val() == "GB" || $(this).val() == "UK") {
                directdebitpostal_code(true);
              //  billpaymentpostal_code(true);
            }
            else {
                directdebitpostal_code(false);
               // billpaymentpostal_code(false);
            }
            $("#txtDDpostal_code").removeAttr("pattern");
           // $("#txtbillpaymentpostal_code").removeAttr("pattern");
        }


        var formArr = $('#optcontactcountry').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (country_form_keypress) {
            if (serializedForm != country_original_data) {
                isCountryChanged = true;
            }
            else {
                isCountryChanged = false;

            }
        }

        var getFromLocalStorageCountry = getLocalStorageOptionSetData("countries");
        var isEnabled = true;
        $('input[name="chkmarketingemail"]').attr('checked', false);
        if (getFromLocalStorageCountry) {
            for (var i = 0; i < getFromLocalStorageCountry.countries.length; i++) {

                if (getFromLocalStorageCountry.countries[i].code == $("#optcontactcountry option:selected").val()) {
                    if ($('#optcontactcurrency').find('option[value=' + getFromLocalStorageCountry.countries[i].currency_code + ']').length > 0) {
                        $("#optcontactcurrency").val(getFromLocalStorageCountry.countries[i].currency_code);
                    }

                    if (getFromLocalStorageCountry.countries[i].marketing_email_option == "NONE") {
                        $("#chkemailoptin").prop('checked', 'checked');
                        isEnabled = false;
                    } else {
                        if (getFromLocalStorageCountry.countries[i].marketing_email_option == "OPT-IN") {
                            $("#chkemailoptin").prop('checked', 'checked');
                        }
                        if (getFromLocalStorageCountry.countries[i].marketing_email_option == "OPT-OUT") {
                            $("#chkemailoptout").prop('checked', 'checked');
                        }
                    }
                    break;
                }

            }
            $("#optcontactcurrency").trigger("change");
        }
        if (!isEnabled) {
            $('input[name="chkmarketingemail"]').attr('disabled', 'disabled');
        } else {
            $('input[name="chkmarketingemail"]').attr('disabled', false);
        }

        if ($("#optcontactbrand option:selected").text() != "Select A Brand") {
            if ($("#optcontactcountry option:selected").text() != "Select A Country") {
                getCollectionMethodOptionSet();
            }
        }

      /*  setTimeout(function () {
              //customerKey &&
                if(  $('#optbillpaymentcollection_methods').find("option:contains('D')").length != 1){
                  //  alert("Direct Debit is not supported for the Brand selected”Do you still want to proceed");
                    var r = confirm("Direct Debit is not supported for the Brand selected”Do you still want to proceed");
                    if (r == true) {
                        txt = "You pressed OK!";
                        setCreditCardDetails();


                    } else {
                        txt = "You pressed Cancel!";
                    }
                }
            }, 1500);*/
    });
}
function resetPortNServiceSection(){
    resetPortSection();
    $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
    if ($("#optcontactbrand").val() == "5") {
        $("#chkFree").attr("disabled", false);
        
    }else{
        $("#chkFree").attr("disabled", true);
    }  
    clearOfferCodeNDID();
    $("input[name^='planfilter']").attr("checked", false);
    
}
function setCreditCardDetails(){
    directdebitchangeflag=true;
                        $("#optbillpaymentcollection_methods").val("C");
                        $("#CCParentDiv").append($('#CCDiv').detach());
                         $("#billingmsgtxt").show();
                        $("#CCDivDirectDebit").hide();
                        $("#optbillpaymentcollection_methods").trigger("change");
                        $("#txtbillpaymentaddress_line1").val($("#txtDDaddress").val());
                        $("#txtbillpaymentaddress_line2").val($("#txtDDaddress1").val());
                        $("#txtbillpaymentcity").val($("#txtDDcity").val());
                        $("#txtbillpaymentstate_province").val($("#txtDDstate_province").val());
                        $("#txtbillpaymentpostal_code").val($("#txtDDpostal_code").val());
                        $("#txtbillpaymentbillingno").val($("#txtDDbillingno").val());
                        $("#billingInfoDiv").find("input, button, submit, textarea, select").not("#btnSaveContactBillinginfo").removeAttr("disabled", "disabled");//not("#optcontactcountry","#optcontactcurrency")
                        $("#optbillpaymentcollection_methods").prop("disabled", false);
                       // if(isBrandChanged){
                          //  clearOfferCode();
                        //}
}
function getCollectionMethodOptionSet() {

    getAjaxFunc("lookup/collection_methods?oem_id=" + $("#optcontactbrand").val() + "&country_iso_code=" + $("#optcontactcountry").val(), setCollectionMethodOptionSet, "");

}
function getCollectionMethodOptionSetForCurrency() {

    getAjaxFunc("lookup/collection_methods?oem_id=" + $("#optcontactbrand").val() + "&country_iso_code=" + $("#optcontactcountry").val(), setCollectionMethodOptionSetForCurrency, "");

}
var removeOtherCollectionMethod = function () {
    var getCollectionMethodFromLocalStorage = getLocalStorageOptionSetData("collectionmethods");

    if (getCollectionMethodFromLocalStorage) {
        for (var i = 0; i < getCollectionMethodFromLocalStorage.collection_methods.length; i++) {
            if (getCollectionMethodFromLocalStorage.collection_methods[i].collection_method != "C" &&
                getCollectionMethodFromLocalStorage.collection_methods[i].collection_method != "D" &&
                getCollectionMethodFromLocalStorage.collection_methods[i].collection_method != "B") {
                $("#optbillpaymentcollection_methods option[value='" + getCollectionMethodFromLocalStorage.collection_methods[i].collection_method + "']").remove();
            }

        }
        if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforDD ) < 0){
            $("#optbillpaymentcollection_methods option[value='D']").remove();
        }
        if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforBankTransfer ) < 0){
            $("#optbillpaymentcollection_methods option[value='B']").remove();
        }
    }
    
    
    $("#optbillpaymentcollection_methods").trigger("change");

}
function setCollectionMethodOptionSet(data, issuccess, contact_detail_collectionmethod) {
    if (issuccess) {

        if (data.collection_methods) {
            // if (getLocalStorageOptionSetData("collectionmethods") === "") {
            setLocalStorageOptionSetData("collectionmethods", data);
            var collection_methods = [];

    

            // }
            //setOptionSetsForceDefaultValue("", "#optbillpaymentcollection_methods", "", "", "", "");
            for (var i = 0; i < data.collection_methods.length; i++) {
                if (data.collection_methods[i].collection_method == "C" || 
                data.collection_methods[i].collection_method == "D" || data.collection_methods[i].collection_method == "B") {
                    collection_methods.push({
                        collection_method: data.collection_methods[i].collection_method,
                        description: data.collection_methods[i].description
                    });
                   
                    }
    
            }
           
            if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforDD ) < 0){
               for(var i = collection_methods.length; i--;) {
                if(collection_methods[i].collection_method === 'D') {
                    collection_methods.splice(i, 1);
                }
            }
               
            }
            if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforBankTransfer ) < 0){
                for(var i = collection_methods.length; i--;) {
                 if(collection_methods[i].collection_method === 'B') {
                     collection_methods.splice(i, 1);
                 }
             }
                
             }
            //var jsonCollectionMethodOptionSetData = JSON.stringify(collection_methods);
            $("#optbillpaymentcollection_methods").text("");
            setOptionSets(collection_methods, "#optbillpaymentcollection_methods", contact_detail_collectionmethod, "collection_method", "description", true);
            
            toggleDivsOfBillingForm(contact_detail_collectionmethod);
            // $("#optbillpaymentcollection_methods").prop("disabled", true);

            setTimeout(function () {
                removeOtherCollectionMethod();
                if($("#txtcontactcollection_method").val() == "D"){
                    if($("#txtcontactcollection_method").val() != 'C' && isShowDDAlert && customerKey && $('#optbillpaymentcollection_methods').find("option:contains('D')").length != 1){
                        isShowDDAlert=false;
                       showSimpleDialogForCountryBrandChange();
                   }else if($('#optbillpaymentcollection_methods').find("option:contains('D')").length ==1){
                            if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="D"){
                                   $("#optbillpaymentcollection_methods").val("D");
                                   $("#optbillpaymentcollection_methods").trigger("change");
                            }
                   }
                }
                if($("#txtcontactcollection_method").val() == "B"){
                    if($("#txtcontactcollection_method").val() != 'C' && isShowDDAlert && customerKey && $('#optbillpaymentcollection_methods').find("option:contains('B')").length != 1){
                        isShowDDAlert=false;
                       showSimpleDialogForCountryBrandChange();
                   }else if($('#optbillpaymentcollection_methods').find("option:contains('B')").length ==1){
                            if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="B"){
                                   $("#optbillpaymentcollection_methods").val("B");
                                   $("#optbillpaymentcollection_methods").trigger("change");
                            }
                   }
                }
                //if($("#txtcontactcollection_method").val() == 'C' && isShowPortingAlert && customerKey && $("#portingverificationIcon").is(":visible")){
                    
                //             isShowPortingAlert=false;
               //              showSimpleDialogForPortingCountryBrandChange();
                    
               // }
                if(isShowDDAlert){
                    //if(isBrandChanged){
                    //    clearOfferCode();
                    //}
                }
                 
            }, 500);

        }
    }
}

function setCollectionMethodOptionSetForCurrency(data, issuccess, contact_detail_collectionmethod) {
    if (issuccess) {

        if (data.collection_methods) {
            // if (getLocalStorageOptionSetData("collectionmethods") === "") {
            setLocalStorageOptionSetData("collectionmethods", data);
            // }
            //setOptionSetsForceDefaultValue("", "#optbillpaymentcollection_methods", "", "", "", "");
            var collection_methods = [];

    

            // }
            //setOptionSetsForceDefaultValue("", "#optbillpaymentcollection_methods", "", "", "", "");
            for (var i = 0; i < data.collection_methods.length; i++) {
                if (data.collection_methods[i].collection_method == "C" || 
                data.collection_methods[i].collection_method == "D" || data.collection_methods[i].collection_method == "B") {
                    collection_methods.push({
                        collection_method: data.collection_methods[i].collection_method,
                        description: data.collection_methods[i].description
                    });
                   
                    }
    
            }
           
            if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforDD ) < 0){
               for(var i = collection_methods.length; i--;) {
                if(collection_methods[i].collection_method === 'D') {
                    collection_methods.splice(i, 1);
                }
            }
               
            }
            if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforBankTransfer ) < 0){
                for(var i = collection_methods.length; i--;) {
                 if(collection_methods[i].collection_method === 'B') {
                     collection_methods.splice(i, 1);
                 }
             }
                
             }
            
            $("#optbillpaymentcollection_methods").text("");
            setOptionSets(collection_methods, "#optbillpaymentcollection_methods", contact_detail_collectionmethod, "collection_method", "description", true);
            toggleDivsOfBillingForm(contact_detail_collectionmethod);
            // $("#optbillpaymentcollection_methods").prop("disabled", true);

            setTimeout(function () {
                removeOtherCollectionMethod();
                 if($('#optbillpaymentcollection_methods').find("option:contains('D')").length ==1){
                         if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="D"){
                                $("#optbillpaymentcollection_methods").val("D");
                                $("#optbillpaymentcollection_methods").trigger("change");
                         }
                }
            }, 500);

        }
    }
}
var toggleDivsOfBillingForm = function (collection_method) {
    var divOfBillingForm = {
        C: function () {
            //credit card
            $("#divbillingCCform").show();
            $("#divbillingCCform2").show();
            $("#divbillingCCform_false").hide();
        },
        Y: function () {
            //paypal
            $("#divbillingPaypalForm").show();

            $("#divbillingCCform_false").hide();
        },
        P: function () {
            //parent
            $("#divbillingParentCustomerForm").show();
            $("#btnSavebillPaymntParent").prop("disabled", true);
            $("#btnSavebillPaymntParent").removeClass("grey-btn").addClass("disabled");
            $("#divbillingCCform_false").hide();

        },
        D: function () {
            //invoice direct debit
            $("#divbillingInvoiceDDForm").show();

            $("#divbillingCCform_false").hide();
            if (isInCollectionMethodUpdate && $("#optbillpaymentcollection_methods").val() === 'D') {
                showDirectDebitAlert();
            }

        },
        Other: function () {
            $("#divbillingCCform").hide();
            $("#divbillingCCform2").hide();
            $("#divbillingInvoiceDDForm").hide();
            $("#divbillingParentCustomerForm").hide();
            $("#divbillingPaypalForm").hide();

            $("#divbillingCCform_false").show();
        }
    }
    divOfBillingForm.Other();
    if (divOfBillingForm[collection_method]) {
        divOfBillingForm[collection_method]();
    }
}

var onChangeoptbillpaymentcollection_methods = function () {
    $("#optbillpaymentcollection_methods").off("focus").on("focus", function () {
        initial_value_optbillpaymentcollection_methods = $(this).val();
        oldcollectionmethod=initial_value_optbillpaymentcollection_methods;
    }).off("change").on("change", function (e) {
        turnOffBillingPaymentErrors();
        
       /* if (isInModificationMode && customerKey && (!isBrandChanged && !isCountryChanged && !isCurrencyChanged)){// (!isBrandChanged && !isCountryChanged && !isCurrencyChanged)) {
            final_value_onchange_optbillpaymentcollection_methods = $(this).val();
            $(this).val(initial_value_optbillpaymentcollection_methods);
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogForCCChange();;
            return false;
        }
       /* if ($("#txtcontactcollection_method").val() !== $(this).val()) {
           // isInCollectionMethodUpdate = true;
            isInModificationMode = true;
        } else {
           // isInCollectionMethodUpdate = false;
            isInModificationMode = false;
        }*/

        if (oldcollectionmethod !=$("#optbillpaymentcollection_methods").val() &&  $("#optbillpaymentcollection_methods").val() == "C" ) {
            turnOffBillingPaymentErrors();
            $("#DirectDebitDiv").hide();
            
           // $("#BankTransferDiv").hide();
             $("#billingmsgtxt").show();
            $("#CCDiv").show();
          
            
            if(!customerKey){
                   $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods").val("");
                   $("#optbillpaymentexpiration_month").val("JAN");
            }
            oldcollectionmethod='C';
        }
        if (oldcollectionmethod !=$("#optbillpaymentcollection_methods").val() && $("#optbillpaymentcollection_methods").val() == "D") {
             //$("#txtDDpostal_code").removeAttr("disabled", "disabled");
            turnOffDirectDebitCollectionMethodErrors();
            addRequiredFromDirectDebit();
            $("#DirectDebitDiv").show();
           // $("#BankTransferDiv").hide();
            $("#CCDiv").hide();
             if(!customerKey){
                   $("input[id*=txtDD]").val("");
            }
            oldcollectionmethod='D';
        }
        if (oldcollectionmethod !=$("#optbillpaymentcollection_methods").val() && $("#optbillpaymentcollection_methods").val() == "B") {
            //$("#txtDDpostal_code").removeAttr("disabled", "disabled");
           turnOffDirectDebitCollectionMethodErrors();
           removeRequiredFromDirectDebit();
           //$("#BankTransferDiv").show();
           $("#DirectDebitDiv").show();
          
           $("#CCDiv").hide();
            if(!customerKey){
                  $("input[id*=txtDD]").val("");
           }
           oldcollectionmethod='B';
       }
        /*setTimeout(function () {
            if ($("#optbillpaymentcollection_methods").val() == 'C' && $("#txtcontactcollection_method").val() == 'D') {
                $("#optbillpaymentcollection_methods").prop("disabled", false);
            }else{
                $("#optbillpaymentcollection_methods").prop("disabled", true);
            }
            
            
        }, 1500); */
    });
}

var togglebtnbillCollectionMethodUpdate = function (collection_method) {
    var CollectionMethodUpdate = {
        C: function () {
            //credit card
            clearCreditCardDetails();
            $("#optbillpaymentcollection_methods").focus()
            if ($("a[id*=credit_card_id]") && $("a[id*=credit_card_id]").length == 0) {
                $("#btnbillCollectionMethodUpdate").prop("disabled", true);
                $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
            }
        },
        P: function () {
            //
            getParentCustomerDtls();
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");

        },
        Other: function () {
            $("#btnbillCollectionMethodUpdate").prop("disabled", false);
            $("#btnbillCollectionMethodUpdate").addClass("grey-btn").removeClass("disabled");
        }
    }
    if (isInCollectionMethodUpdate) {
        CollectionMethodUpdate.Other();
        if (CollectionMethodUpdate[collection_method]) {
            CollectionMethodUpdate[collection_method]();
        }
    } else {
        $("#btnbillCollectionMethodUpdate").prop("disabled", true);
        $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
    }
}

function setCurrencyCode() {
    currency_code = $("#txtcontactcurrency_code").val();
    getSetCurrencyOptionSetsFunc(currency_code);

    // getAjaxFunc("customers/" + customerKey + "/collectionmethods", setCollectionMethodOptionSet, $("#txtcontactcollection_method").val());

}
function getSetCurrencyOptionSetsFunc(currency_id) {

    // var getFromLocalStorage = getLocalStorageOptionSetData("currencies");
    // if (getFromLocalStorage === "") {
    getAjaxFunc("lookup/currencies?include_inactive=false&oem_id=" + $("#optcontactbrand").val() + "&signup_flag=Y&porting_flag=Y", setCurrencyOptionSetsFunc, currency_id);
    //  }
    // else {
    //      setCurrencyOptionSetsFunc(getFromLocalStorage, true, currency_id);
    // }

    if (currency_id === "" || currency_id === null) {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]["id"] = "";


        setOptionSetsForceDefaultValue(objectArray, "#optcontactcurrency", "", "", "Select A Currency", "");
        $("#optcontactcurrency").val("");
    }
    //$("#optcontactcurrency").attr({ "disabled": "disabled" });
}



function setCurrencyOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.currencies) {
            if (getLocalStorageOptionSetData("currencies") === "") {
                setLocalStorageOptionSetData("currencies", data);
            }

            setOptionSets(data.currencies, "#optcontactcurrency", "Select A Currency", "code", "description", false);

            if (defaultSelected !== "" && defaultSelected !== null && defaultSelected !== undefined) {
                var active = false;
                var currency_symbol = "";

                data.currencies.forEach(function (currency) {
                    if (currency.code == defaultSelected) {
                        active = true;
                        //currency_symbol = currency.code + currency.currency_symbol;
                        currency_symbol = currency.code;
                        currency_decimalplaces = currency.decimal_places;
                        // console.log(currency.code);
                    }
                }, this);
                $("span[id*=spanbillpaymentCurrency]").html(currency_symbol);
                currencies_symbol = currency_symbol;
                $("label[id*=spanServiceNumberActivationCurrency]").html(currency_symbol);
                if (!active) {
                    getAjaxFunc("currencies/" + currency_id, setInactiveCurrencyOptionSetsFunc, currency_id);
                }
            }
        }
    }
}
function setInactiveCurrencyOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.currency) {
            var objectArray = [];
            objectArray[0] = {};
            objectArray[0]['code'] = data.currency.code;
            objectArray[0]['description'] = data.currency.description;
            setOptionSets(objectArray, "#optcontactcurrency", defaultSelected, "code", "description", false);
            if (defaultSelected !== "" && defaultSelected !== null && defaultSelected !== undefined) {
                var currency_symbol = "";
                data.currencies.forEach(function (currency) {
                    if (currency.code == defaultSelected) {
                        //currency_symbol = currency.currency_symbol;
                        currency_symbol = currency.code
                        //console.log(currency.code);
                    }
                }, this);
                $("span[id*=spanbillpaymentCurrency]").html(currency_symbol);
            }
        }
    }
}

function getBillingPaymentGrid() {
    ccRanksUsed = [];
    getAjaxFunc("customers/" + customerKey + "/creditcards", setBillingPaymentGrid, "");
    getAjaxFunc("lookup/creditcardtypes", setCreditCardTypesToGlobal, "");
}

function setCreditCardTypesToGlobal(data, issuccess) {
    if (issuccess) {
        credit_card_types = data.credit_card_types;
    }
}

function getCreditCardTypeDescription(cctype) {
    var CCdescription = "";
    $.each(credit_card_types, function (i, item) {
        if (item.type == cctype) {
            CCdescription = item.description;
        }
    });
    return CCdescription;

}

function toggleBillPaymentButtons_obsolete(NoOfCC, CollectionMethod) {
    if (CollectionMethod == "C") {
        NoOfCreditCard = NoOfCC;
        if (NoOfCC >= 3) {
            $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
            $("#btnbillpaymentAddCreditCard").attr({ "disabled": "disabled", "class": "disabled" });
            $("#btnSavebillPayment").attr({ "disabled": "disabled", "class": "disabled" });


        }
        else {
            //$("#chkbill_onetime_addtoacc").removeAttr("disabled");
            $("#btnbillpaymentAddCreditCard").removeAttr("disabled").removeAttr("class").attr({ "class": "grey-btn" });
            $("#btnSavebillPayment").removeAttr("disabled").removeAttr("class").attr({ "class": "grey-btn" });;
        }
    }
    else {
        $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
        $("#btnbillpaymentAddCreditCard").attr({ "disabled": "disabled", "class": "disabled" });
        $("#btnSavebillPayment").attr({ "disabled": "disabled", "class": "disabled" });
    }
}

function setBillingPaymentGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.credit_cards) {
            drawPaymentTable(data.credit_cards);
            //toggleBillPaymentButtons(data.credit_cards.length, $("#txtcontactcollection_method").val());
            NoOfCreditCard = data.credit_cards.length;
            toggleBillPaymentExtraControls();
            toggleAllButtonsBillingPayment();
            setSearchGridAfterSave(data, issuccess);
        }
        else {
            $("#tblISPCreditCards > tbody").html("");
            $("#tblISPCreditCards").append(newrow);
            newrow.append($("<td colspan=5 style=\"width:90%\">No Credit Cards found in the System</td>"));
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPCreditCards > tbody").html("");
            $("#tblISPCreditCards").append(newrow);
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=5 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=5 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
        }
        else {
            $("#tblISPCreditCards > tbody").html("");
            $("#tblISPCreditCards").append(newrow);
            newrow.append($("<td colspan=5 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
function drawPaymentTable(data) {
    $("#tblISPCreditCards > tbody").html("");
    for (var i = 0; i < data.length; i++) {
        drawPaymentRows(data[i]);
    }
    onClickbtnCreditCardKey();
    onClickbtnbillpaymentCCdelete();
    onClickbtnbillpaymentCCswitch();
    makeRowActive();
    var factors = getFactorsForBillingPayment();
    togglebtnbillpaymentCCSwitch(factors);
    togglebtnbillpaymentCCDelete(factors);
}

function getExpirationFromMonthAndYear(expMonth, expYear) {
    var expiration = "";
    if (expMonth !== "" && expYear !== "" && expYear !== undefined && expMonth !== undefined) {
        switch (expMonth) {
            case "JAN":
                expiration += "01";
                break;
            case "FEB":
                expiration += "02";
                break;
            case "MAR":
                expiration += "03";
                break;
            case "APR":
                expiration += "04";
                break;
            case "MAY":
                expiration += "05";
                break;
            case "JUN":
                expiration += "06";
                break;
            case "JUL":
                expiration += "07";
                break;
            case "AUG":
                expiration += "08";
                break;
            case "SEP":
                expiration += "09";
                break;
            case "OCT":
                expiration += "10";
                break;
            case "NOV":
                expiration += "11";
                break;
            case "DEC":
                expiration += "12";
                break;
            default:
                break;
        }
        if (expYear) {
            expYear = String(expYear);
            expiration += "-" + expYear.substr(expYear.length - 2, expYear.length);
        }
    }
    return expiration;
}

function drawPaymentRows(rowData) {

    var row = $("<tr >");
    $("#tblISPCreditCards").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td  class=\"Name_1\" >" + rowData.name_on_card + "</td>"));
    row.append($("<td class=\"CreditCardNumber_2\"><a href=\"#\" id=\"credit_card_id" + rowData.credit_card_id + "\" data-credit_card_id=\"" + rowData.credit_card_id + "\">" + rowData.card_number + "</td>"));
    row.append($("<td class=\"ExpirationDate_3\">" + getExpirationFromMonthAndYear(rowData.expiration_month, rowData.expiration_year) + "</td>"));
    row.append($("<td class=\"Priority_4\">" + rowData.credit_card_rank + "</td>"));
    if (rowData.credit_card_rank != 1) {
        row.append($("<td><input class=\"grey-btn\" style=\"width:105px;\" type=\"button\" id=\"btnbillpaymentCCswitch" + rowData.credit_card_id + "\" data-credit_card_id=\"" + rowData.credit_card_id + "\" data-credit_card_rank=\"" + rowData.credit_card_rank + "\" value=\"Switch Primary\" /><span id=\"btnbillpaymentCCdata" + rowData.credit_card_rank + "\" data-card_number=\"" + rowData.card_number.substr(rowData.card_number.length - 4, rowData.card_number.length) + "\" data-name_on_card=\"" + rowData.name_on_card + "\" data-credit_card_id=\"" + rowData.credit_card_id + "\" data-first_name=\"" + rowData.first_name + "\" data-expiration=\"" + getExpirationFromMonthAndYear(rowData.expiration_month, rowData.expiration_year) + "\" data-credit_card_rank=\"" + rowData.credit_card_rank + "\" data-version = \"" + rowData.version + "\" data-card_type = \"" + rowData.card_type + "\" /><input id=\"btnbillpaymentCCdelete" + rowData.credit_card_id + "\"  data-credit_card_id=\"" + rowData.credit_card_id + "\" data-credit_card_rank=\"" + rowData.credit_card_rank + "\" style=\"width:60px;\" value=\"Delete\" type=\"button\" class=\"grey-btn\" /></td>"));
    }
    else {
        row.append($("<td><span id=\"btnbillpaymentCCdata" + rowData.credit_card_rank + "\" data-card_number=\"" + rowData.card_number.substr(rowData.card_number.length - 4, rowData.card_number.length) + "\" data-name_on_card=\"" + rowData.name_on_card + "\" data-credit_card_id=\"" + rowData.credit_card_id + "\" data-first_name=\"" + rowData.first_name + "\" data-expiration=\"" + getExpirationFromMonthAndYear(rowData.expiration_month, rowData.expiration_year) + "\" data-credit_card_rank=\"" + rowData.credit_card_rank + "\" data-version = \"" + rowData.version + "\" data-card_type = \"" + rowData.card_type + "\" /></td>"));
    }
    ccRanksUsed.push(rowData.credit_card_rank);
}
function onClickbtnCreditCardKey() {
    $("a[id*=credit_card_id]").click(function (e) {
        if (isInModificationMode && !isInCollectionMethodUpdate) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }


        $("input[id*=txtbillpayment]").val("");
        //$("input[id*=txtbill]").val("");
        $("#optcontactcountry").val("");

        $("#txtbillpaymentexpiration_year").val("");
        //$("#optbillpaymentexpiration_year").val("");
        $("#optbillpaymentexpiration_month").val("");
        $("#imgbillcard_type").removeClass();
        $("#imgbilldiv_block").hide();
        turnOffBillingPaymentErrors();

        saveCCMode = addOrUpdate.update;

        var credit_card_id = $(this).data("credit_card_id");
        getAjaxFunc("customers/" + customerKey + "/creditcards/" + credit_card_id, setPaymentDetails, "");
        if (isInCollectionMethodUpdate) {
            isInModificationMode = true;
        } else {
            isInModificationMode = false;
        }

        billingpayment_form_keypress = false;
        toggleAllButtonsBillingPayment();
        toggleallbillpaymentControls();
        visibilityOfTxtCvvCode();

        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}



function setCCDetails(data, issuccess) {
    if (issuccess) {
        if (data.credit_cards) {
            for (var i = 0; i < data.credit_cards.length; i++) {
                $("#txtbillpaymentversion").val(data.credit_cards[i].version);
                $("#txtbillpaymentcredit_card_id").val(data.credit_cards[i].credit_card_id);
                $("#txtbillpaymentcredit_card_rank").val(data.credit_cards[i].credit_card_rank)
            }
            /*for (var property in data.credit_card) {
                if (data.credit_card.hasOwnProperty(property)) {
                    $("input[id=txtbillpayment" + property + "]").val(data.credit_card[property]);
                    if ($("#optbillpayment" + property)) {
                        $("#optbillpayment" + property).val(data.credit_card[property]);
                    }
                }
            }*/

        }
    }
}


function setPaymentDetails(data, issuccess) {
    if (issuccess) {
        if (data.credit_card) {
            for (var property in data.credit_card) {
                if (data.credit_card.hasOwnProperty(property)) {
                    $("input[id=txtbillpayment" + property + "]").val(data.credit_card[property]);
                    if ($("#optbillpayment" + property)) {
                        $("#optbillpayment" + property).val(data.credit_card[property]);
                    }
                }
            }
            if (data.credit_card.card_type && data.credit_card.card_type !== "") {
                var cctype_css = mapImageForCCtype(data.credit_card.card_type);
                selectedCCVal = $("#txtbillpaymentcard_number").val();
                selectedCCType = data.credit_card.card_type;

                $("#imgbillcard_type").removeClass().addClass(cctype_css);
                if ($("#txtbillpaymentcard_number").is(":visible")) {
                    $("#imgbilldiv_block").show();
                } else {
                    $("#imgbilldiv_block").hide();
                }

                $("#lblbillpaymentcredit_card_type").html(getCreditCardTypeDescription(data.credit_card.card_type));
            }
            setTimeout(function () {
                getBillingCountryOptionSetsFunc(data.credit_card["country_code"]);
            }, 400);
        }
    }
}
function getBillingCountryOptionSetsFunc(country_code) {
    var getFromLocalStorage = getLocalStorageOptionSetData("countries");
    if (getFromLocalStorage === "") {
        getAjaxFunc("/lookup/countries", setBillingCountryOptionSetsFunc, country_code);
    }
    else {
        setBillingCountryOptionSetsFunc(getFromLocalStorage, true, country_code);
    }
    //if (country_code === "" || country_code === null) {




}
function setBillingCountryOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.countries) {

            if (getLocalStorageOptionSetData("countries") === "") {
                setLocalStorageOptionSetData("countries", data);
            }
            setOptionSets(data.countries, "#optcontactcountry", selectedbydefault, "code", "name", false);
            //setOptionSetsForceDefaultValue(objectArray, "#optcontactcountry", "", "code", "Select A Country", "");
        }
    }
}

function mapImageForCCtype(cctype) {
    var imgCCtype = {
        "AIRPLUSMC": "img-airplus-card",
        "AIRPLUSVISA": "img-airplus-card",
        "AMEX": "img-amex-card",
        "CARTEBLEUE": "img-cartebleue-card",
        "DISC": "img-discover-card",
        "IM": "img-maestro-card",
        "JCB": "img-jcb-card",
        "MC": "img-master-card",
        "SW": "img-switch-card",
        "VISA": "img-visa-card"
    }[cctype];
    return imgCCtype;
}

function clearBillingInfoControls() {
    $("input[id*=txtbillpayment]").val("");
    $("select[id*=optbillpayment]").val("");
    $("#imgbillcard_type").removeClass();
    $("#imgbilldiv_block").hide();
    $("#chkbill_onetime_addtoacc").prop("checked", false);
}

//===END:::Retrieve Info of Billing Tab -> Payment Tab

//===START::: Billing Tab-> View Charges and collection tab(VCC)


function getBillingVCCGrid() {
    $("input[id*=txtbillVCC]").attr({ "disabled": "disabled" });
    $("#chkbillVCCmemo_flag").attr({ "disabled": "disabled" });

    onClickbtnFilterAccountTransanction();

    setDatePicker("txtbillVCCfromtofilter");
    togglebtnFilterAccountTransanction();
    isFilteredBillingVCC = false;
    $("#txtbillVCCfromtofilter").val("").trigger("change");

    clearVCCcontrols();
    if (customerKey) {
        getAjaxFunc("customers/" + customerKey + "/journals?startAt=1&maxResults=1", setJournalsPageParams, true);
    }
}
var setDatePicker = function (textboxID) {
    var start = moment().subtract(29, 'days');
    var end = moment();
    $("#" + textboxID).removeAttr("disabled").daterangepicker({
        startDate: start,
        endDate: end,
        showDropdowns: true,
        linkedCalendars: false,
        autoApply: false,
        opens: "left",
        alwaysShowCalendars: false,
        showCustomRangeLabel: true,
        applyClass: "grey-btn",
        cancelClass: "grey-btn",
        ranges: {
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });
    $("#" + textboxID).on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $("#" + textboxID).on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

}

var setSingleDatePickerEndDate = function (textboxID) {
    // var start = new Date();
    $("#" + textboxID).daterangepicker({
        //  startDate: start,
        singleDatePicker: true,
        //defaultDate: start,
        autoUpdateInput: true,
        showDropdowns: true,

    }, function (chosen_date) {
        $("#" + textboxID).val(chosen_date.format('MM/DD/YYYY'));
    });

    //  $("#" + textboxID).on('apply.daterangepicker', function (ev, picker) {
    // $("#" + textboxID).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    //  });

    // $("#" + textboxID).on('cancel.daterangepicker', function (ev, picker) {
    //$(this).val('');
    //});

}
var setSingleDatePicker = function (textboxID) {
    var start = new Date();
    $("#" + textboxID).daterangepicker({
        startDate: start,
        singleDatePicker: true,
        defaultDate: start,
        autoUpdateInput: true,
        showDropdowns: true,

    }, function (chosen_date) {
        $("#" + textboxID).val(chosen_date.format('MM/DD/YYYY'));
    });

}

var togglebtnFilterAccountTransanction = function () {
    $("#txtbillVCCfromtofilter").off("change").on("change", function () {
        if ($(this).val()) {
            $("#btnFilterAccountTransanction").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnFilterAccountTransanction").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}

var toggleAdjustmentSection = function () {

    if ($("#btntoggleAdjustmentCollapse").attr("aria-expanded") == "true") {
        $("#btntoggleAdjustmentCollapse").trigger("click");
    }
    var getFromLocalStorage = getLocalStorageOptionSetData("users");
    var adjustmentSalesRep = "";
    if (getFromLocalStorage) {
        for (var i = 0; i < getFromLocalStorage.sales_users.length; i++) {
            if (getFromLocalStorage.sales_users[i].ldap_user_name && $("body").data("ispldapusername") && getFromLocalStorage.sales_users[i].ldap_user_name.toLowerCase() == $("body").data("ispldapusername").toLowerCase()) {
                adjustmentSalesRep = getFromLocalStorage.sales_users[i].id;
                break;
            }

        }
    }


    if ($("#btntoggleAdjustmentCollapse").attr("aria-expanded") == "true") {
        $("#btntoggleAdjustmentCollapse").trigger("click");
    }
}


function getJournalsGridPages() {
    if (isFilteredBillingVCC) {
        getAjaxFunc("customers/" + customerKey + "/journals?startAt=" + pageJournalsStartAt + "&maxResults=" + pageJournalsPageSize + "&startDate=" + startDateJournal + "&endDate=" + endDateJournal, setBillingVCCGrid, "");
    } else {
        getAjaxFunc("customers/" + customerKey + "/journals?startAt=" + pageJournalsStartAt + "&maxResults=" + pageJournalsPageSize, setBillingVCCGrid, "");
    }

}

function journalsPageChange() {
    $("a[id*=hrefpageJournals]").off("click").on("click", function (e) {
        var pagebtn = $(this).data("pagebtn");
        if ($(this).css('pointer-events') == 'none') {
            e.preventDefault();
            return false;
        }
        if (pagebtn == "first") {
            pageJournalsCurrentPage = 1;
            setJournalsPageParams("", "", false);
        }
        if (pagebtn == "last") {
            pageJournalsCurrentPage = pageJournalsTotalPage;
            setJournalsPageParams("", "", false);
        }
        if (pagebtn == "next") {
            pageJournalsCurrentPage = pageJournalsCurrentPage + 1;
            setJournalsPageParams("", "", false);
        }
        if (pagebtn == "previous") {
            pageJournalsCurrentPage = pageJournalsCurrentPage - 1;
            setJournalsPageParams("", "", false);
        }
        $("#tblISPviewCharges > tbody").scrollTop(0);
        e.preventDefault();
    });


    $("#txtpageJournalsCurrentPage").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if (isNormalInteger(this.value)) {
                var enteredValue = parseInt(this.value);
                if (enteredValue >= pageJournalsTotalPage) {
                    pageJournalsCurrentPage = pageJournalsTotalPage;
                    setJournalsPageParams("", "", false);
                }
                else {
                    pageJournalsCurrentPage = enteredValue;
                    setJournalsPageParams("", "", false);
                }
            }
            else {
                pageJournalsCurrentPage = 1;
                setJournalsPageParams("", "", false);
            }
            $("#tblISPviewCharges > tbody").scrollTop(0);
        }
    });
}


function setJournalsPageParams(data, issuccess, settingFirstTime) {
    $("#txtpageJournalsCurrentPage").removeAttr("disabled");
    if (settingFirstTime) {
        if (issuccess) {
            if (data.journals && data.total) {
                pageJournalsTotalRecords = (parseInt(data.total)) ? parseInt(data.total) : 1;
                pageJournalsTotalPage = setNumberOfPages(pageJournalsTotalRecords, pageJournalsPageSize);
                pageJournalsTotalPage = (pageJournalsTotalPage) ? pageJournalsTotalPage : 1;

                $("#txtpageJournalsCurrentPage").val(String(pageJournalsCurrentPage));
                $("#lblpageJournalsTotalPage").html("of " + pageJournalsTotalPage);

                var lblpageJournals1 = "";
                if (pageJournalsPageSize >= pageJournalsTotalRecords) {
                    pageJournalsEndAt = pageJournalsTotalRecords;
                }
                else {
                    pageJournalsEndAt = pageJournalsPageSize;
                }
                lblpageJournals1 = pageJournalsStartAt + "-" + pageJournalsEndAt + " of " + pageJournalsTotalRecords;
                $("#lblpageJournalsStartAt").html(lblpageJournals1);
                $("#txtpageJournalsCurrentPage").parent().show();
                journalsPageChange();
            } else {
                $("#txtpageJournalsCurrentPage").val("");
                $("#txtpageJournalsCurrentPage").attr("disabled", "disabled");
                $("#lblpageJournalsTotalPage").html("");
                $("#lblpageJournalsStartAt").html("");

                $("#txtpageJournalsCurrentPage").parent().hide();

                $("#lipageJournalsPrevious").removeClass();
                $("#hrefpageJournalsFirst").attr("style", "pointer-events: none !important; cursor: default  !important;");
                $("#hrefpageJournalsPrevious").attr("style", "pointer-events: none !important; cursor: default  !important;");

                $("#lipageJournalsNext").removeClass();
                $("#hrefpageJournalsNext").attr("style", "pointer-events: none !important; cursor: default  !important;");
                $("#hrefpageJournalsLast").attr("style", "pointer-events: none !important; cursor: default  !important;");
            }
        }
        else {
            var newrow = $("<tr />");
            if (!CancelRequest) {
                $("#tblISPviewCharges > tbody").html("");
                $("#tblISPviewCharges").append(newrow);
                if (data.responseJSON.message) {
                    newrow.append($("<td colspan=6 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
                }
                if (data.responseJSON.errors) {
                    newrow.append($("<td colspan=6 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }
            }
            else {
                $("#tblISPviewCharges > tbody").html("");
                $("#tblISPviewCharges").append(newrow);
                newrow.append($("<td colspan=6 style=\"width:90%\">Request Cancelled.</td>"));
                CancelRequest = false;
            }
            return false;
        }
    }
    else {
        pageJournalsStartAt = ((pageJournalsCurrentPage * pageJournalsPageSize - pageJournalsPageSize) + 1);
        $("#txtpageJournalsCurrentPage").val(String(pageJournalsCurrentPage));

        if (pageJournalsCurrentPage < pageJournalsTotalPage) {
            pageJournalsEndAt = pageJournalsStartAt + (pageJournalsPageSize - 1);
        }
        else if (pageJournalsCurrentPage == pageJournalsTotalPage) {
            pageJournalsEndAt = pageJournalsTotalRecords;
        }
        lblpageJournals1 = pageJournalsStartAt + "-" + pageJournalsEndAt + " of " + pageJournalsTotalRecords;
        $("#lblpageJournalsStartAt").html(lblpageJournals1);
    }
    if (pageJournalsCurrentPage == 1) {
        $("#lipageJournalsPrevious").removeClass();
        $("#hrefpageJournalsFirst").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageJournalsPrevious").attr("style", "pointer-events: none; cursor: default;");
    }

    if (pageJournalsCurrentPage > 1) {
        $("#lipageJournalsPrevious").addClass("active");

        $("#hrefpageJournalsFirst").removeAttr("style");
        $("#hrefpageJournalsPrevious").removeAttr("style");
    }

    if (pageJournalsCurrentPage < pageJournalsTotalPage) {
        $("#lipageJournalsNext").addClass("active");

        $("#hrefpageJournalsNext").removeAttr("style");
        $("#hrefpageJournalsLast").removeAttr("style");
    }

    if (pageJournalsCurrentPage == pageJournalsTotalPage) {
        $("#lipageJournalsNext").removeClass();
        $("#hrefpageJournalsNext").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageJournalsLast").attr("style", "pointer-events: none; cursor: default;");
    }

    getJournalsGridPages();

}






function turnOffAccountBillingError() {

    $("#divAccountCreatedMainError").hide();
    $("#divAccountCreatedMainSuccess").hide();

}

function onkeypressCountryNCurrency() {

    $("#optcontactcountry").off("focusin").on("focusin", function () {
        // turnOffGiftErrors();
        if (!country_form_keypress) {

            country_form_keypress = true;
            var original_formArr = $('#optcontactcountry').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            country_original_data = $.param(original_formArr);
            //giftform_original_data = original_formArr;
        }
        $("#optcontactcurrency").trigger("focusin");
    });
    $("#optcontactcurrency").off("focusin").on("focusin", function () {
        // turnOffGiftErrors();
        if (!currency_form_keypress) {

            currency_form_keypress = true;
            var original_formArr = $('#optcontactcurrency').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            currency_original_data = $.param(original_formArr);
            //giftform_original_data = original_formArr;
        }

    });
    $("#optcontactbrand").off("focusin").on("focusin", function () {
        // turnOffGiftErrors();
        if (!brand_form_keypress) {

            brand_form_keypress = true;
            var original_formArr = $('#optcontactbrand').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            brand_original_data = $.param(original_formArr);
            //giftform_original_data = original_formArr;
        }
        $("#optcontactcurrency").trigger("focusin");
    });
}

function onChangeCountryNCurrency() {
    $("#optcontactcurrency").off("keyup").on("keyup", function () {

        var formArr = $('#optcontactcurrency').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (currency_form_keypress) {
            if (serializedForm != currency_original_data) {
                isCurrencyChanged = true;
            }
            else {
                isCurrencyChanged = false;
            }
        }

    });
    $("#optcontactcountry").off("keyup").on("keyup", function () {

        var formArr = $('#optcontactcountry').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (country_form_keypress) {
            if (serializedForm != country_original_data) {
                isCountryChanged = true;
            }
            else {
                isCountryChanged = false;
            }
        }

    });

    $("#optcontactbrand").off("keyup").on("keyup", function () {

        var formArr = $('#optcontactbrand').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (brand_form_keypress) {
            if (serializedForm != brand_original_data) {
                isBrandChanged = true;
            }
            else {
                isBrandChanged = false;
            }
        }

    });

}
function turnoffAccountUpdateMsg() {
    $("#divAccountUpdateMainSuccess").html("");
    $("#divAccountUpdateMainSuccess").hide();
}
function resetSignup() {
    turnoffAccountUpdateMsg();
    turnOffServiceErrors();
    $('[name=optcontactcountry ] option').filter(function () {
        return ($(this).val() == 'US');
    }).prop('selected', true);
    ccnum="";
    $("#chkServiceInfo").hide();
    $("#chkAccountBillingInfo").hide();
    $("#chkServiceActivate").hide();
    $('#offerCodeType input').removeAttr('checked');
    $('input:radio[name="chkmarketingemail"]').removeAttr('checked');
    $("#optbillpaymentcountry_code option[value=' ']").prop('selected', true);
    $("#chksearchDID").prop('checked', true);
    $("#reserveDIDDiv").hide();
    $("#didSearchDiv").show();
    turnoffChargeActivateErrorMsg();
    turnOffAccountBillingError();
    turnOffContactErrors();
    turnOffBillingPaymentErrors();
    $("#tblISPsignup_findOfferCode > tbody").html("");
    $("#tblISPSignupservice_Did > tbody").html("");
    $("#optcontactbill_type").val("D");
    $("#optcontactcontact_method").val("E");
    $("#validatePortingFlag").hide();
    //$("#optservicedetailDid_country option:selected").text('Select a country');
    $('[name=optservicedetailDid_country ] option').filter(function () {
        return ($(this).text() == 'Select a country');
    }).prop('selected', true);


    $("#tabsdiv").find("input, table,textarea").not(":button,:radio").val("");
    isShowPortingAlert=true;
    directdebitchangeflag=false;
    isShowDDAlert=true;
    isServiceAdded = false;
    isPortingSaved = false;
    isAccountActivate =false;
    isInModificationMode=false;
    isCountryCurrencyModifyFlag = false;
    isContactEmailValid=false;
    isContactEmailModify=false;
    $('#optcontactlanguage   option[value="en"]').prop("selected", "selected");
    $("#btnSaveContactBillinginfo").removeAttr("disabled");

    $("#billingInfoDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
    $("#accountSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");

    $('html,body').animate({
        scrollTop: $("#hrefporting_Div").offset().top
    },
        'slow');

    $("#imgbilldiv_block").hide();
    //$("#optbillpaymentcollection_methods").attr("disabled", true);
    $("#offerCodeType").show();
    sortingOfferCode();

    $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
    customerKey = "";
    savedbrand = "";
    isSaveBillingSectionOnly = false;
    $("#optcontactcountry").trigger("change");

    $("input[id*=optportin]").val("");
    $("#optportingphonetype,#optportingphonecarrier,#optportingstreetdirection1,#optportingstreettype,#optportingstreetdirection2,#optportingstreetbuildingtype").val("Select");
    $("#portingDiv").hide();
    turnOffPortingErrors();


    $("#DirectDebitDetails").hide();
    $("#optportingcountry").val("Select");
    $("#optportingstate").val("Select");
    $("#serviceSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");

    $("#btnmandatesignup").hide();
    $("#btnsignup").show();
     $("#CCParentDiv").append($('#CCDiv').detach());
     $("#optbillpaymentcollection_methods").text("");
     $("#DirectDebitDiv").hide();
     //$("#BankTransferDiv").hide();
     
      $("#billingInfoDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
      $("#CCDivDirectDebit").hide();
       $('[name=optcontactbrand ] option').filter(function () {
        return ($(this).text() == 'Select A Brand');
    }).prop('selected', true);

    $('[name=optcontactcurrency ] option').filter(function () {
        return ($(this).text() == 'Select A Currency');
    }).prop('selected', true);

    $("#txtbillpaymentbillingnoDiv").show();
    $("#divRequiredBillingno").show();
    $("#txtbillpaymentbillingno").attr({ "required": "required" });
    $('#txtdirectdebitbankaccount_number').unbind("keypress");
    $('#txtdirectdebitbankaccount_number').unbind("keydown");
    $('#txtdirectdebitsort_code').unbind("keypress");
    
    $("#mandaterightsection").prepend($('#bankacnumberdiv').detach());
    $("#swiftcoderequired").removeClass("requiredBlock");
    $("#txtdirectdebitswiftcode").removeAttr("required");
    $("#chkConfirmMandate").unbind('change');
    $('#chkConfirmMandate').prop('checked', false);
    $("#divService_skipactivate").attr({ "style": "display:block" });
    $("#optcontactcountry").trigger("change");
    setTimeout(function () {
        $("#optbillpaymentcollection_methods").text("");
    }, 4500);

    turnOffPortingDIDValidateErrors();
    $("#porintgverificationDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
    $("#btnClearPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
    $("#btnVerifyPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
    
}

var onKeyPressDDBillingPhoneNumber = function () {
    $("#txtDDbillingno").off("keypress").on("keypress", function (event) {
        return isNumberKey(event);
    });
    $("#txtDDbillingno").off("paste").on("paste", function (event) {
        return false;
    });


}


function isValidIBAN(code) {
        if (code == null || code.length < 5) {
            return false;
        }
        if(code == null || code.length > 5){
            var countrycode = code.substring(0, 2);
            if(countrycode != $("#optdirectdebitbank_country").val()){
                return false;
            }
        }
        var check = code.substring(2,4);
        if ("00"==check || "01"==check || "99"==check) {
            return false;
        }
        try {
            var modulusResult = calculateModulus(code);
            return (modulusResult == 1);
        } catch (ex) {
            return false;
        }
}
function calculateModulus(code){
        var reformattedCode = code.substring(4) + code.substring(0, 4);
        var total = 0;
        for (var i = 0; i < reformattedCode.length; i++) {
            var charValue = IBANNumbericValue[reformattedCode.charAt(i)];
            if (charValue < 0 || charValue > 35) {
                throw new CheckDigitException("Invalid Character[" +
                        i + "] = '" + charValue + "'");
            }
            total = (charValue > 9 ?   (total* 100) :   (total*10)) + charValue;
            if (total > MAX) {
                total = total % MODULUS;
            }
        }
        return (total % MODULUS);
}
function toggleplanfilter(){
    $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
    if ($("#txtcontactportingnumber").val() && $("#txtcontactcollection_method").val()!="B") {
        $('#chkPorting').prop("disabled", false);
    } else {
        $('#chkPorting').prop("disabled", true);
    }
    if($("#txtcontactcollection_method").val()=="B"){
        $('#chkPaidPlans').prop("disabled", true);
       
    }else{
        $('#chkPaidPlans').prop("disabled", false);
       
    }
    if ($("#optcontactbrand").val() != "5") {
        $("#chkFree").attr("disabled", true);
    }
} 
var onAddAccountAndBillingInfo = function (data, issuccess) {

    var portNo = $('#txtcontactportingnumber').val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3');
    $('#txtcontactportingnumber').val(portNo);
    turnOffAccountBillingError();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                if (!(jQuery.inArray(data.errors[0].element_name, billingPaymentErrorCode) == -1)
                    || !(jQuery.inArray(data.errors[0].error_code, billingPaymentErrorCode) == -1)) {
                    // isInArray(billingPaymentErrorCode, data.errors[0].error_code)) {
                    $("#divBillingPaymentMainError").html("</br>" + data.errors[0].developer_message);
                    //$("#divAdjustmentMainError").show();
                    $("#divBillingPaymentMainError").show();
                } else {

                    $("#divAccountCreatedMainError").html("</br>" + data.errors[0].developer_message);
                    //$("#divAdjustmentMainError").show();
                    $("#divAccountCreatedMainError").show();
                    $('html,body').animate({
                        scrollTop: $("#accountSetupDiv").offset().top
                    },
                        'slow');
                }


                /// showAdjustmentError("No changes to save");
            }
        } else {
            turnOffContactErrors();
            $("#txtbillpaymentcard_number").val(String($("#txtbillpaymentcard_number").val().substr(0, $("#txtbillpaymentcard_number").val().length - 4)).replace(/./g, 'X') + String($("#txtbillpaymentcard_number").val().substr($("#txtbillpaymentcard_number").val().length - 4, $("#txtbillpaymentcard_number").val().length - 1)));
            $("#txtsignupCustomerKey").val(data.account_id);
            $("#divAccountCreatedMainSuccess").html(" Customer ID : " + data.account_id);
            $("#divAccountCreatedMainSuccess").show();
            $("#chkAccountBillingInfo").show();
            getTaxInformation(data.account_id);
            customerKey = data.account_id;
            onkeypressBillingPaymentForm();
            $("#txtcontactcollection_method").val($("#optbillpaymentcollection_methods").val());
            if($("#txtcontactcollection_method").val()=="B"){
                $('#chkPaidPlans').prop("disabled", true);
            }else{
                $('#chkPaidPlans').prop("disabled", false);     
            }
            if (isCountryCurrencyModifyFlag) {
                $("#divAccountUpdateMainSuccess").html("Account Info Updated sucessfully.");
                isShowDDAlert=true;
                isShowPortingAlert=true;
                $("#divAccountUpdateMainSuccess").show();
                $("#CCDivDirectDebit").hide();
                if (isServiceAdded && isCountryChanged && !isCurrencyChanged && !isBrandChanged) {
                    $("#serviceSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");

                } else {
                    $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
                    if ($("#optcontactbrand").val() == "5") {
                        $("#chkFree").attr("disabled", false);
                        
                    }else{
                        $("#chkFree").attr("disabled", true);
                    }  
                    callPermissionAPI(["hrefServiceSetUp"]);
                    $("#divServiceSetupMainSuccess").hide();
                    $("#chkServiceInfo").hide();
                    clearOfferCodeNDID();
                    $("#btnService_chargeactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
                }
                if(!isCurrencySupportPorting() || !isBrandSupportPorting() || !isCountrySupportedPorting()){
                    $("#porintgverificationDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
                }else{
                    $("#porintgverificationDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
                }



            } else {
                $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
                callPermissionAPI(["hrefServiceSetUp"]);
                if ($("#optcontactbrand").val() == "5") {
                    $("#chkFree").attr("disabled", false);
                    
                }else{
                    $("#chkFree").attr("disabled", true);
                }  
            }
            $('html,body').animate({
                scrollTop: $("#accountSetupDiv").offset().top
            },
                'slow');

                  
            isInModificationMode = false;
            isCurrencyChanged = false;
            isCountryChanged = false;
            isBrandChanged = false;
            brand_form_keypress = false;
            country_form_keypress = false;
            currency_form_keypress = false;
            // $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
            $("#billingInfoDiv").find("input, button, submit, textarea, select").not("#btnSaveContactBillinginfo").attr("disabled", "disabled");//not("#optcontactcountry","#optcontactcurrency")
            $("#accountSetupDiv").find("input, button, submit, textarea, select").not("#btnRemovePortingNumber,#optcontactcountry,#optcontactcurrency,#optcontactbrand").attr("disabled", "disabled");
            //$("#btnRemovePortingNumber").attr("disabled", "disabled");
            if ($("#verifiedStatusIcon").is(":visible") && $("#txtcontactcollection_method").val()=="C" &&
            ($("#optcontactcountry").val()=='US' || $("#optcontactcountry").val() =='CA') && 
            (($("#optcontactbrand").val() == 2 && $("#optcontactcurrency").val() =='USD') ||
             ($("#optcontactbrand").val() == 4 && jQuery.inArray( $("#optcontactcurrency").val(), supportedCurrencyforPortingOffer ) > 0) ||
             ($("#optcontactbrand").val() == 5 && $("#optcontactcurrency").val() =='USD') ) ) {
                $('#chkPorting').prop("disabled", false);
                $("#porttooltip").attr('data-original-title',"");
            } else {
                $("#porttooltip").attr('data-original-title', "Porting is not supported for either the Brand or Country or Currency or Collection Method selected");
                $('#chkPorting').prop("disabled", true);
            }
            if(!$("#verifiedStatusIcon").is(":visible")){
                $("#porttooltip").attr('data-original-title', "Port category is disabled because there is no number to port");
            }
            if($("#txtcontactcollection_method").val()=="B"){
                $('#chkPaidPlans').prop("disabled", true);
            }
           
            if ($("#optcontactbrand").val() != "5") {
                $("#chkFree").attr("disabled", true);
                
            }
            
            if(brandChangedFlag){
                clearOfferCodeNDID();
                $("#btnService_chargeactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
                $("input[name^='planfilter']").attr("checked", false);
                brandChangedFlag=false;
            }
        }
    } else {
        if (!CancelRequest) {
            /* if (data.responseJSON.errors[0].user_message) {
                 if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                     $("#divAccountCreatedMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                 } else {
                     $("#divAccountCreatedMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                 }
 
             } else {
                 $("#divAccountCreatedMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
             }*/

            // if (isInArray(billingPaymentErrorCode, data.responseJSON.errors[0].element_name) || isInArray(billingPaymentErrorCode, data.responseJSON.errors[0].error_code)) {
            if (!(jQuery.inArray(data.responseJSON.errors[0].element_name, billingPaymentErrorCode) == -1)
                || !(jQuery.inArray(data.responseJSON.errors[0].error_code, billingPaymentErrorCode) == -1)) {
                $("#divBillingPaymentMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divBillingPaymentMainError").show();
            } else {
                $("#divAccountCreatedMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
                $("#divAccountCreatedMainError").show();
                $('html,body').animate({
                    scrollTop: $("#accountSetupDiv").offset().top
                },
                    'slow');
            }
            //$("#divAdjustmentMainError").show();


        }
        else {
            $("#divAccountCreatedMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divAccountCreatedMainError").show();
            CancelRequest = false;
            $('body').scrollTop(0);
        }
    }
}

function setBillingVCCGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.journals && data.journals.length > 0) {
            drawVCCTable(data.journals);
            $("#btnAccountTransanctionExportCSV,#btnAccountTransanctionExportExcel").removeProp("disabled");
            $("#btnAccountTransanctionExportCSV,#btnAccountTransanctionExportExcel").removeClass("disabled");
        }
        else {
            $("#tblISPviewCharges > tbody").html("");
            $("#tblISPviewCharges").append(newrow);
            newrow.append($("<td colspan=6 style=\"width:90%\">No Charges & Collection found in the System</td>"));
            $("input[id*=txtbillVCC]").not("#txtbillVCCfromtofilter").val("");
            $("#tblISPVCC_journal_items > tbody").html("");
            $("#chkbillVCCmemo_flag").prop("checked", false);

            $("#btnAccountTransanctionExportCSV,#btnAccountTransanctionExportExcel").prop("disabled", true);
            $("#btnAccountTransanctionExportCSV,#btnAccountTransanctionExportExcel").addClass("disabled");

        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPviewCharges > tbody").html("");
            $("#tblISPviewCharges").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=6 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=6 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPviewCharges > tbody").html("");
            $("#tblISPviewCharges").append(newrow);
            newrow.append($("<td colspan=6 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}

function drawVCCTable(data) {
    $("#tblISPviewCharges > tbody").html("");
    $("#tblISPviewCharges > thead > tr:first-child").removeClass();
    if (data.length > 4) {
        $("#tblISPviewCharges > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        drawVCCRows(data[i], ((i + 1) + ((pageJournalsCurrentPage - 1) * pageJournalsPageSize)));
    }
    onClickbtnVCCJournal();
    makeRowActive();
    if (data.length > 0) {
        $("#tblISPviewCharges > tbody").children(":first").children(":first").children(":first").trigger("click");
        $("#lblNoOfRecordsVCC").html(data.length + " row(s) returned.").show();
    }

}
var accountTransactionSettings = [
    { type: "", amount: -1, clr: LIGHT_YELLOW },
    { type: "SUBSCRIPTION", amount: -1, clr: LIGHT_WHITE },
    { type: "SUBSCRIPTION", amount: 0, clr: LIGHT_WHITE },
    { type: "PAYMENT", amount: 0, clr: LIGHT_GREEN },
    { type: "PAYMENT", amount: -1, clr: LIGHT_RED }
];



function drawVCCRows(rowData, SrNo) {
    var setColorCode = ((rowData.type && (accountTransactionSettings.filter(function (x) { return (x.type == rowData.type.toUpperCase() && x.amount == rowData.display_amount.indexOf("(")) })[0])) ? accountTransactionSettings.filter(function (x) { return (x.type == rowData.type.toUpperCase() && x.amount == rowData.display_amount.indexOf("(")) })[0].clr : LIGHT_YELLOW);
    var row = $("<tr style=\"background-color:" + setColorCode + " \">");
    $("#tblISPviewCharges").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td><a href=\"#\" id=\"vcc_journal_key" + rowData.journal_key + "\" data-vcc_journal_key=\"" + rowData.journal_key + "\">" + rowData.journal_key + "</a></td>"));
    row.append($("<td>" + rowData.post_date + "</td>"));
    row.append($("<td>" + rowData.description + "</td>"));
    row.append($("<td>" + rowData.credit_card_number + "</td>"));
    row.append($("<td>" + rowData.parent + "</td>"));
    row.append($("<td>" + rowData.child + "</td>"));
    row.append($("<td>" + rowData.display_amount + "</td>"));
}

function onClickbtnVCCJournal() {
    $("a[id*=vcc_journal_key]").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        turnOffAdjustmentErrors();
        $("input[id*=txtbillVCC]").not("#txtbillVCCfromtofilter").val("");
        $("#tblISPVCC_journal_items > tbody").html("");
        $("#chkbillVCCmemo_flag").prop("checked", false);

        var vcc_journal_key = $(this).data("vcc_journal_key");
        getAjaxFunc("customers/" + customerKey + "/journals/" + vcc_journal_key, setVCCDetails, "");

        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}
function setVCCDetails(data, issuccess) {
    if (issuccess) {
        if (data.journal) {
            for (var property in data.journal) {
                if (data.journal.hasOwnProperty(property)) {
                    $("input[id=txtbillVCC" + property + "]").val(data.journal[property]);
                }
            }
            if (data.journal["memo_flag"]) {
                $("#chkbillVCCmemo_flag").prop("checked", true);
            }
            else {
                $("#chkbillVCCmemo_flag").prop("checked", false);
            }
            setBillingVCC_journal_Grid(data.journal);
        }
    }
}
function setBillingVCC_journal_Grid(data) {
    var newrow = $("<tr />");

    if (data.journal_items) {
        drawVCC_journal_Table(data.journal_items);
    }
    else {
        $("#tblISPVCC_journal_items > tbody").html("");
        $("#tblISPVCC_journal_items").append(newrow);
        newrow.append($("<td colspan=3 style=\"width:90%\">No Journal Item found in the System</td>"));
    }
}
function drawVCC_journal_Table(data) {
    $("#tblISPVCC_journal_items > tbody").html("");
    for (var i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            data[i].row_color = LIGHT_GREEN;
        } else {
            data[i].row_color = LIGHT_WHITE;
        }
        drawVCC_journal_Rows(data[i]);
    }
}

function drawVCC_journal_Rows(rowData) {

    var row = $("<tr style=\"background-color:" + rowData.row_color + "\" >");
    $("#tblISPVCC_journal_items").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.account_code + "</td>"));
    row.append($("<td>" + rowData.description + "</td>"));
    row.append($("<td>" + rowData.display_amount + "</td>"));
}

function clearVCCcontrols() {
    $("input[id*=txtbillVCC]").val("");
    $("#tblISPVCC_journal_items > tbody").html("");
    $("#lblNoOfRecordsVCC").html("").hide();
    $("#chkbillVCCmemo_flag").prop("checked", false);
}


//START:: Account transaction UI permission
var hrefBilling_viewChargesMakeAdjustment = function (rights) {
    if (rights == "0") {
        if ($("#btntoggleAdjustmentCollapse").attr("aria-expanded") == "true") {
            $("#btntoggleAdjustmentCollapse").trigger("click");
        }
        $("#btntoggleAdjustmentCollapse").prop("disabled", true);
        $("#btntoggleAdjustmentCollapse").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#btntoggleAdjustmentCollapse").prop("disabled", false);
        $("#btntoggleAdjustmentCollapse").removeClass("disabled").addClass("grey-btn");
    }
}
//END:: Account transaction UI permission










function gridDesignFix(tblID) {
    var height = $(tblID + " tbody > tr").height();
    $(tblID + " tbody  > tr > td").css("height", height);
}






function setofferCodesOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.offer_codes) {
            if (getLocalStorageOptionSetData("offercodes") === "") {
                setLocalStorageOptionSetData("offercodes", data);
            }
            // setOptionSets(data.offer_codes, "#optservicedetailIoffer_code", selectedbydefault, "code", "code", true);
            if ($("#txtservicedetailIoffer_code").parent().data("toggle")) {
                $("#txtservicedetailIoffer_code").unwrap();
            }
            $("#txtservicedetailIoffer_code").attr("style", "pointer-events:none;").wrap("<div style=\"cursor:not-allowed;\" data-toggle = \"othertooltip2\" data-original-title=\"" + selectedbydefault + "\"></div>")
            $('[data-toggle="othertooltip2"]').tooltip();
        }
    }
}
function setjFaxLanguagesOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.jfax_languages) {
            if (getLocalStorageOptionSetData("jfaxlanguages") === "") {
                setLocalStorageOptionSetData("jfaxlanguages", data);
            }
            setOptionSetsForceDefaultValue(data.jfax_languages, "#optservicedetailIprimary_language", selectedbydefault, "language_code", "description", selectedbydefault);
        }
    }
}
function setfaxFormatsOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.fax_formats) {
            if (getLocalStorageOptionSetData("faxformats") === "") {
                setLocalStorageOptionSetData("faxformats", data);
            }
            //setOptionSets(data.faxFormats, "#optservicedetailIfax_format", selectedbydefault, "faxFormatCode", "description", true);
            setOptionSets(data.fax_formats, "#optservicedetailIfax_format", selectedbydefault, "fax_format_code", "description", true);
        }
    }
}

//GET OFFER CODE DETAILS
var getSerivceDetailOfferCodeDetails = function (offercode) {
    $("#tblISPservice_currentOfferCode").show();
    getAjaxFunc("lookup/offer_codes/" + offercode, setSerivceDetailOfferCodeDetailGrid, "");
}
var setSerivceDetailOfferCodeDetailGrid = function (data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data && data.offer_code) {
            drawService_currentOfferCodeTable(data);
        } else {
            $("#tblISPservice_currentOfferCode > tbody").html("");
            $("#tblISPservice_currentOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No offer code detail(s) found in the System</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPservice_currentOfferCode > tbody").html("");
            $("#tblISPservice_currentOfferCode").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].user_message + "</td>"));
            }
        } else {
            $("#tblISPservice_currentOfferCode > tbody").html("");
            $("#tblISPservice_currentOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_currentOfferCodeTable = function (data) {
    $('[data-toggle="othertooltip4"]').tooltip("destroy");

    $("#tblISPservice_currentOfferCode > tbody").html("");
    $("#tblISPservice_currentOfferCode > thead > tr:first-child").removeClass();
    drawService_currentOfferCodeRows(data);
    $('[data-toggle="othertooltip4"]').on('show.bs.tooltip', function () {
        $('.tooltip').not(this).hide();
    });
}

function drawService_currentOfferCodeRows(rowData) {

    var row = $("<tr>");
    $("#tblISPservice_currentOfferCode").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.subscription + "</td>"));
    row.append($("<td>" + rowData.billing_period_name + "</td>"));
    row.append($("<td>" + (rowData.first_month === 0 ? "Y" : "N") + "</td>"));
    row.append($("<td>" + rowData.activation + "</td>"));
    row.append($("<td>" + rowData.ib_gift + "</td>"));
    row.append($("<td>" + rowData.ib_page + "</td>"));
    row.append($("<td>" + rowData.combo_gift + "</td>"));
    row.wrap("<div data-html=\"true\" data-container=\"body\" data-toggle = \"othertooltip4\" data-original-title=\"" + rowData.offer_code + " </br> " + rowData.description + "\"></div>")
    $('[data-toggle="othertooltip4"]').tooltip({ trigger: "hover" });
}
//==END::: Service -> Service Detail TAB



function isNormalInteger(str) {
    var n = ~~Number(str);
    return String(n) === str && n > 0;
}





function setNumberOfPages(totalnumberofrecords, pagesize) {
    return Math.ceil(totalnumberofrecords / pagesize);
}






function setSalesGroup(data, issuccess) {
    if (data.responseText) {
        $("#txtcontactsales_group").val(data.responseText);
    }
}


function OnSaveDidAndPlan() {

    $("#btnSaveDidAndPlan").off("click").on("click", function () {
        if (!$("input[id*=chkService_findOC]").is(":checked") && !$("input[id*=chkService_findDID]").is(":checked")) {
            $("#divServiceSetupMainError").html("<span>Please select offer code and DID.</span>");
            $("#divServiceSetupMainError").show();
            return false;
        }
        if (!$("input[id*=chkService_findOC]").is(":checked")) {
            $("#divServiceSetupMainError").html("<span>Please select offer code.</span>");
            $("#divServiceSetupMainError").show();
            return false;
        }
        if (!$("input[id*=chkService_findDID]").is(":checked")) {
            $("#divServiceSetupMainError").html("<span>Please select DID.</span>");
            $("#divServiceSetupMainError").show();
            return false;
        }


        var objserviceinfo = new Object();

        objserviceinfo.customer_key = $("#txtsignupCustomerKey").val();


        objserviceinfo.product_type = $("input[id*=chkService_findOC]:checked").data("producttype");
        objserviceinfo.offer_code = $("input[id*=chkService_findOC]:checked").data("offercode");
        objserviceinfo.phone_number = $("input[id*=chkService_findDID]:checked").data("phonenumber");


        postAjaxFunc("customers/sign_up/add_service", JSON.stringify(objserviceinfo), onAddServiceInfo);

    });
}



var formatPortingVerificationNumber = function () {
    $('#txtcontactportingnumber').off("change").on("change", function (e) {
        //validatePortingNumber();


    });
}




function turnOffServiceErrors() {
    $("#divServiceSetupMainError").hide();
    $("#divServiceSetupMainSuccess").hide();
}
function turnOffPortingErrors() {
    $("#divPortingMainError").hide();
    $("#divPortingMainSuccess").hide();

    $("#chkPortingInfo").hide();
}

var onAddServiceInfo = function (data, issuccess) {
    turnOffServiceErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceSetupMainError").html("</br>" + data.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divServiceSetupMainError").show();
                /// showAdjustmentError("No changes to save");
            }
        } else {
            isInModificationMode = false;
            isServiceAdded = true;
            callPermissionAPI(["hrefServiceNumberActivation"]);
            // $("#txtsignupCustomerKey").val(data.account_id);
            $("#divServiceSetupMainSuccess").html("Service added successfully.");
            $("#divServiceSetupMainSuccess").show();
            $("#divAccountUpdateMainSuccess").hide();
            $("#chkServiceInfo").show();

            if($("#txtcontactcollection_method").val() == "B"){
                $("#txtservicenumber_additionalUsageBalance").prop("disabled", true);
                $("#divService_skipactivate").attr({ "style": "display:none" });
            }else{
                $("#txtservicenumber_additionalUsageBalance").removeAttr("disabled");
                $("#divService_skipactivate").attr({ "style": "display:block" });
            }
            
            //  if (!$("#txtcontactportingnumber").val()) {
            $("#btnService_chargeactivate").removeAttr("disabled").attr({ "class": "grey-btn" });
            setTimeout(function () {
                if ($("#txtservicenumber_finalamount").val() > 0) {
                    hrefServiceNumberActivationSkipActivate(permissionArray.filter(function (x) { return x.id == "ActivationSkipActivate" })[0].hasRights);
                    //$("#btnService_skipactivate").removeAttr("disabled").attr({ "class": "grey-btn" });
                } else {
                    $("#btnService_skipactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
                }
                if ($("#txtservicenumber_finalamount").val() > 0 && $("#optbillpaymentcollection_methods").val() == "D") {
                    $("#CCDivDirectDebit").show();
                   // $("#chargebtnwithcc").show();
                    // $("#chargebtnwithoutcc").hide();
                    $("#CCDivDirectDebit").append($('#CCDiv').detach());
                     $('#CCDiv').show();
                     $("#billingmsgtxt").hide();
                     $("#txtbillpaymentbillingnoDiv").hide();
                     $("#divRequiredBillingno").hide();
                     $("#txtbillpaymentbillingno").removeAttr("required");
                     $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods").val("");
                     $("#optbillpaymentexpiration_month").val("JAN");
                      $("#imgbilldiv_block").hide();
                     $("#CCDiv").find("input, button, submit, textarea, select").not("#btnSaveContactBillinginfo").removeAttr("disabled", "disabled");
                }
            }, 700);

            // }
            sortingOfferCode();

            $("#serviceSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
            $("#porintgverificationDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
            $("#btnClearPorting").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            //  $("#billingInfoDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
            // $("#accountSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceSetupMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceSetupMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceSetupMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            //$("#divAdjustmentMainError").show();
            $("#divServiceSetupMainError").show();
        }
        else {
            $("#divServiceSetupMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divAccountCreatedMainError").show();
            CancelRequest = false;
        }
    }
}

var isCharOnly = function (event) {
    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
    var key = String.fromCharCode(event.which);
    if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 9 || event.keyCode == 46 || englishAlphabetAndWhiteSpace.test(key)) {
        return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
}

function onKeyPressName() {
    $("#txtcontactfirst_name").off("keypress").on("keypress", function (event) {
        return isCharOnly(event);
    });
    $("#txtcontactlast_name").off("keypress").on("keypress", function (event) {
        return isCharOnly(event);
    });
    $("#txtbillpaymentfirst_name").off("keypress").on("keypress", function (event) {
        return isCharOnly(event);
    });
    $("#txtbillpaymentlast_name").off("keypress").on("keypress", function (event) {
        return isCharOnly(event);
    });
}

function directDebitAccountSetupJson(){
     var objaccountbillinginfo = new Object();
    objaccountbillinginfo.account_info = new Object();

    var txtaccountInfo = $("input[id*=txtcontact]").not("#txtcontactcollection_method");
    txtaccountInfo.each(function () {
        var attrid = $(this).attr("id");
        var propname = attrid.replace("txtcontact", "");
        objaccountbillinginfo.account_info[propname] = ($(this).val() === "" ? null : $(this).val());

    });
    objaccountbillinginfo.account_info.oem_id = $("#optcontactbrand option:selected").val();
    objaccountbillinginfo.account_info.currency_code = $("#optcontactcurrency option:selected").val();
    objaccountbillinginfo.account_info.country_code = $("#optcontactcountry option:selected").val();
    objaccountbillinginfo.account_info.language_code = $("#optcontactlanguage option:selected").val();
    objaccountbillinginfo.account_info.sales_userid = $("#optcontactsalesrep option:selected").text().substr(0, $("#optcontactsalesrep option:selected").text().indexOf('(')).trim();
    //$("#optcontactsalesrep option:selected").val();
    objaccountbillinginfo.account_info.language_code = $("#optcontactlanguage option:selected").val();
    objaccountbillinginfo.account_info.bill_type = $("#optcontactbill_type option:selected").val();
    objaccountbillinginfo.account_info.contact_method = $("#optcontactcontact_method option:selected").val();
    objaccountbillinginfo.account_info.notes = $("#txtcontactnotes").val();
   
    // if ($("#chkmarketingemail").is(':enabled')) {
    objaccountbillinginfo.account_info.marketing_opt_out = $('input[name=chkmarketingemail ]:checked').val();
    // }

    objaccountbillinginfo.billing_info = new Object();
    objaccountbillinginfo.billing_info.collection_method = $("#optbillpaymentcollection_methods option:selected").val();
   
   objaccountbillinginfo.account_info.address = new Object();
    /*if($("#optbillpaymentcollection_methods").val()=="B"){
        objaccountbillinginfo.account_info.address.address_line1 = $("#txtBTaddress").val();
        objaccountbillinginfo.account_info.address.address_line2 = $("#txtBTaddress1").val();
        objaccountbillinginfo.account_info.address.city = $("#txtBTcity").val();
        objaccountbillinginfo.account_info.address.state_prov = $("#txtBTstate_province").val();
        objaccountbillinginfo.account_info.address.postal_code = $("#txtBTpostal_code").val();
        objaccountbillinginfo.account_info.address.country = $("#optcontactcountry").val();
        objaccountbillinginfo.account_info.home_number = $("#txtBTbillingno").val();
    }else{ }*/
        objaccountbillinginfo.account_info.address.address_line1 = $("#txtDDaddress").val();
        objaccountbillinginfo.account_info.address.address_line2 = $("#txtDDaddress1").val();
        objaccountbillinginfo.account_info.address.city = $("#txtDDcity").val();
        objaccountbillinginfo.account_info.address.state_prov = $("#txtDDstate_province").val();
        objaccountbillinginfo.account_info.address.postal_code = $("#txtDDpostal_code").val();
        objaccountbillinginfo.account_info.address.country = $("#optcontactcountry").val();
        objaccountbillinginfo.account_info.home_number = $("#txtDDbillingno").val();
    
    
    
    return objaccountbillinginfo;
}
function getAccountSetupNBillingInfoJson() {
    var objaccountbillinginfo = new Object();
    objaccountbillinginfo.account_info = new Object();

    var txtaccountInfo = $("input[id*=txtcontact]").not("#txtcontactcollection_method");
    txtaccountInfo.each(function () {
        var attrid = $(this).attr("id");
        var propname = attrid.replace("txtcontact", "");
        objaccountbillinginfo.account_info[propname] = ($(this).val() === "" ? null : $(this).val());

    });
    objaccountbillinginfo.account_info.oem_id = $("#optcontactbrand option:selected").val();
    objaccountbillinginfo.account_info.currency_code = $("#optcontactcurrency option:selected").val();
    objaccountbillinginfo.account_info.country_code = $("#optcontactcountry option:selected").val();
    objaccountbillinginfo.account_info.language_code = $("#optcontactlanguage option:selected").val();
    objaccountbillinginfo.account_info.sales_userid = $("#optcontactsalesrep option:selected").text().substr(0, $("#optcontactsalesrep option:selected").text().indexOf('(')).trim();
    //$("#optcontactsalesrep option:selected").val();
    objaccountbillinginfo.account_info.language_code = $("#optcontactlanguage option:selected").val();
    objaccountbillinginfo.account_info.bill_type = $("#optcontactbill_type option:selected").val();
    objaccountbillinginfo.account_info.contact_method = $("#optcontactcontact_method option:selected").val();
    objaccountbillinginfo.account_info.notes = $("#txtcontactnotes").val();
    objaccountbillinginfo.account_info.home_number = $("#txtbillpaymentbillingno").val();
    // if ($("#chkmarketingemail").is(':enabled')) {
    objaccountbillinginfo.account_info.marketing_opt_out = $('input[name=chkmarketingemail ]:checked').val();
    // }

    objaccountbillinginfo.billing_info = new Object();
    objaccountbillinginfo.billing_info.collection_method = $("#optbillpaymentcollection_methods option:selected").val();
    objaccountbillinginfo.billing_info.credit_card = new Object();
    if(!customerKey || $("#txtcontactcollection_method").val() == 'D' || $("#txtcontactcollection_method").val() == 'B'){
        ccnum=$("#txtbillpaymentcard_number").val();
    }
    
    var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods");
    txtbillpayment.each(function () {
        var attrid = $(this).attr("id");
        var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
        objaccountbillinginfo.billing_info.credit_card[propname] = ($(this).val() === "" ? null : $(this).val());

    });

    objaccountbillinginfo.billing_info.credit_card.card_number=ccnum;
    return objaccountbillinginfo;
}
function onSaveContactAndBillingInfo() {
    turnOffContactErrors();

    $("#btnSaveContactBillinginfo").off("click").on("click", function () {
        $("#divAccountCreatedMainError").hide();
        if (customerKey  && !isCountryChanged && !isCurrencyChanged && !isBrandChanged && !isInModificationMode) { //!isCountryChanged && !isCurrencyChanged && !isBrandChanged
            $("#divAccountUpdateMainSuccess").hide();
            //$("#DirectDebitDiv :input").attr("disabled", true);
            $("#divAccountCreatedMainError").html("<span>No changes to save</span>");
            $("#divAccountCreatedMainError").show();
            //toggleplanfilter();
            return false;
        }
            //$("#txtcontactemail_address").trigger("focusout");
           // setTimeout(function () {
            if ($("#optbillpaymentcollection_methods").val() == "C") {
                savedbrand=$("#optcontactbrand").val();
                savedCountry=$("#optcontactcountry").val();
                savedcurrency=$("#optcontactcurrency").val();
                if (customerKey && isSaveBillingSectionOnly) {
                    if (validateBillingPaymentForm()) {
                        setTimeout(function () {
                            getAjaxFunc("customers/" + customerKey + "/creditcards", setCCDetails, "");
                        }, 1000);
                        setTimeout(function () {
                            var objbillpayment_detail = new Object();
                            objbillpayment_detail.credit_card = new Object();
    
                            var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
                            txtbillpayment.each(function () {
                                var attrid = $(this).attr("id");
                                var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
                                objbillpayment_detail.credit_card[propname] = ($(this).val() === "" ? null : $(this).val());
    
                            });
    
                            putAjaxFunc("customers/" + customerKey + "/creditcards/" + $("#txtbillpaymentcredit_card_id").val(), JSON.stringify(objbillpayment_detail), onBillPaymentSaved, "");
    
                        }, 5000);
    
    
                    }
                } else if (customerKey && (isCountryChanged || isCurrencyChanged || isBrandChanged)) {
                    $("#divAccountCreatedMainError").hide();
                    if (validateContactForm()) {
                        isCountryCurrencyModifyFlag = true;
                        putAjaxFunc("customers/sign_up/" + customerKey, JSON.stringify(getAccountSetupNBillingInfoJson()), onAddAccountAndBillingInfo);
                    }
                } else {
    
                    setTimeout(function () {
    
                        var txtContacts = $("input[id*=txtcontact]");
                        txtContacts.each(function () {
                            $(this).val($.trim($(this).val()));
                        });
                        if (validateContactForm()) {
                            postAjaxFunc("customers/sign_up", JSON.stringify(getAccountSetupNBillingInfoJson()), onAddAccountAndBillingInfo);
                        }
                    }, 500);
                }
            }
            if ($("#optbillpaymentcollection_methods").val() == "D") {
                        savedbrand=$("#optcontactbrand").val();
                        savedCountry=$("#optcontactcountry").val();
                        savedcurrency=$("#optcontactcurrency").val();
                 if (customerKey && (isCountryChanged || isCurrencyChanged || isBrandChanged)) {
                    $("#divAccountCreatedMainError").hide();
                    if (validateContactFormDD()) {
                        isCountryCurrencyModifyFlag = true;
                        putAjaxFunc("customers/sign_up/" + customerKey, JSON.stringify(directDebitAccountSetupJson()), onAddAccountAndBillingInfo);
                    }
                }else{
                    if (validateContactFormDD()) {
                        
                        postAjaxFunc("customers/sign_up", JSON.stringify(directDebitAccountSetupJson()), onAddAccountAndBillingInfo);
                   }
                }
                 
            }
            if ($("#optbillpaymentcollection_methods").val() == "B") {
                        if(savedbrand!=$("#optcontactbrand").val()){
                            brandChangedFlag=true;
                        }
                        savedbrand=$("#optcontactbrand").val();
                        savedCountry=$("#optcontactcountry").val();
                        savedcurrency=$("#optcontactcurrency").val();
    
                 if (customerKey && (isCountryChanged || isCurrencyChanged || isBrandChanged)) {
                    $("#divAccountCreatedMainError").hide();
                    if (validateContactFormBT()) {
                        isCountryCurrencyModifyFlag = true;
                        putAjaxFunc("customers/sign_up/" + customerKey, JSON.stringify(directDebitAccountSetupJson()), onAddAccountAndBillingInfo);
                    }
                }else{
                    
                     if(validateContactFormBT()){
                        postAjaxFunc("customers/sign_up", JSON.stringify(directDebitAccountSetupJson()), onAddAccountAndBillingInfo);
                     }   
                     
                   
                }
    
                 
            }
      //  }, 3000);
        
        

    });
}

function turnOffContactErrors() {
    $("div[id*=lblErrcontact]").hide();
    $("#divContactMainError").html("Error: Invalid Data. <span>Fields with in red are mandatory - Please complete to continue.</span>");
    $("#divContactMainError").hide();
    $("input[id*=txtcontact]").removeClass("error");
    $("#divContactMainSuccess").hide();
}

function validateContactForm() {
    turnOffContactErrors();
    var txtContacts = $("input[id*=txtcontact]");
    var contactHasError = false;
    var billingHasError = false;
    var portnumber = $("#txtcontactportingnumber").val().replace(/-/g, "");
    $("#txtcontactportingnumber").val(portnumber);
  //  $("#optbillpaymentcollection_methods").attr("disabled", false);
    //if($("#optbillpaymentcollection_methods").val() == "C"){
        $("#optbillpaymentcollection_methods").val("C");
    //}
   
    txtContacts.each(function () {
        //$(this).val($.trim($(this).val()));

        if (!this.checkValidity()) {
            contactHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "");
            if (errorsContact["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsContact["err" + lblid]).show();
            }

            if (lblid == "contactemail_address") {
                if ($(this).val() != "") {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailIdInvalid"]).show();
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailId"]).show();
                }
            }

        }

    });
    if ($("#txtcontactfirst_name").val() == "" || $("#txtcontactlast_name").val() == "") {
        $("#lblErrcontactfirst_nameclone").html("&nbsp;");
        $("#lblErrcontactfirst_nameclone").show();
    }

    if ($("#txtcontactemail_address").val()) {
        if (!isValidEmailAddress($("#txtcontactemail_address").val())) {
            $("#lblErrcontactemail_address").html("Invalid email format - Please enter a correct e-mail address");
            $("#lblErrcontactemail_address").show();
            $("#lblErrcontactemail_addressclone").html("&nbsp;");
            $("#lblErrcontactemail_addressclone").show();
            contactHasError = true;
        }
        if (!isContactEmailValid) {
            $("#lblErrcontactemail_address").show();
            contactHasError = true;
        }
    } else {
        $("#lblErrcontactemail_address").html(errorsContact["errcontactEmailId"]);
        $("#lblErrcontactemail_addressclone").html("&nbsp;");
        $("#lblErrcontactemail_addressclone").show();
        $("#lblErrcontactemail_address").show();
        contactHasError = true;
    }


    if ($("#optcontactbrand option:selected").text() == "Select A Brand") {
        $("div[id=lblErrcontactbrand]").html(errorsContact["errcontactBrandNotSelected"]).show();
        $("#lblErrcontactbrandclone").html("&nbsp;");
        $("#lblErrcontactbrandclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcurrency option:selected").text() == "Select A Currency") {
        $("div[id=lblErrcontactcurrency]").html(errorsContact["errcontactCurrencyNotSelected"]).show();
        $("#lblErrcontactcurrencyclone").html("&nbsp;");
        $("#lblErrcontactcurrencyclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcountry option:selected").text() == "Select A Country") {
        $("div[id=lblErrcontactcountry]").html(errorsContact["errcontactCountryNotSelected"]).show();

        $("#lblErrcontactcountryclone").html("&nbsp;");
        $("#lblErrcontactcountryclone").show();
        contactHasError = true;
    }

    if ($("#optcontactsalesrep option:selected").text() == "") {
        $("div[id=lblErrcontactsalesrep]").html(errorsContact["errcontactSalesrepNotSelected"]).show();
        contactHasError = true;
    }
    if (!validateBillingPaymentForm()) {
        billingHasError = true;
    }
    if ($("#optbillpaymentcountry_code option:selected").text() == " ") {
        $("div[id=lblErrbillpaymentcountry_code]").html(errorsContact["errcontactCountryNotSelected"]).show();
        billingHasError = true;
    }

    if (contactHasError) {
        $("#divContactMainError").html("<span>Fields with in red are mandatory - Please complete to continue.</span>");
        $("#divContactMainError").show();
        $('html,body').animate({
            scrollTop: $("#accountSetupDiv").offset().top
        },
            'slow');
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
        return false;
    }
    if (billingHasError) {
        $("#divBillingPaymentMainError").html("<span>Fields with in red are mandatory - Please complete to continue.</span>");
        $("#divBillingPaymentMainError").show();
        //$("#optbillpaymentcollection_methods").attr("disabled", true);
        return false;
    }

    else {
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
        return true;
    }
}

function validateContactFormBT() {
    turnOffContactErrors();
    var txtContacts = $("input[id*=txtcontact]");
    var contactHasError = false;
    var billingHasError = false;
    var portnumber = $("#txtcontactportingnumber").val().replace(/-/g, "");
    $("#txtcontactportingnumber").val(portnumber);
  //  $("#optbillpaymentcollection_methods").attr("disabled", false);
    //if($("#optbillpaymentcollection_methods").val() == "C"){
      //  $("#optbillpaymentcollection_methods").val("C");
    //}
   
    txtContacts.each(function () {
        //$(this).val($.trim($(this).val()));

        if (!this.checkValidity()) {
            contactHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "");
            if (errorsContact["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsContact["err" + lblid]).show();
            }

            if (lblid == "contactemail_address") {
                if ($(this).val() != "") {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailIdInvalid"]).show();
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailId"]).show();
                }
            }

        }

    });
    if ($("#txtcontactfirst_name").val() == "" || $("#txtcontactlast_name").val() == "") {
        $("#lblErrcontactfirst_nameclone").html("&nbsp;");
        $("#lblErrcontactfirst_nameclone").show();
    }

    if ($("#txtcontactemail_address").val()) {
        if (!isValidEmailAddress($("#txtcontactemail_address").val())) {
            $("#lblErrcontactemail_address").html("Invalid email format - Please enter a correct e-mail address");
            $("#lblErrcontactemail_address").show();
            $("#lblErrcontactemail_addressclone").html("&nbsp;");
            $("#lblErrcontactemail_addressclone").show();
        }
        if (!isContactEmailValid) {
            $("#lblErrcontactemail_address").show();
            contactHasError = true;
        }
    } else {
        $("#lblErrcontactemail_address").html(errorsContact["errcontactEmailId"]);
        $("#lblErrcontactemail_addressclone").html("&nbsp;");
        $("#lblErrcontactemail_addressclone").show();
        $("#lblErrcontactemail_address").show();
    }


    if ($("#optcontactbrand option:selected").text() == "Select A Brand") {
        $("div[id=lblErrcontactbrand]").html(errorsContact["errcontactBrandNotSelected"]).show();
        $("#lblErrcontactbrandclone").html("&nbsp;");
        $("#lblErrcontactbrandclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcurrency option:selected").text() == "Select A Currency") {
        $("div[id=lblErrcontactcurrency]").html(errorsContact["errcontactCurrencyNotSelected"]).show();
        $("#lblErrcontactcurrencyclone").html("&nbsp;");
        $("#lblErrcontactcurrencyclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcountry option:selected").text() == "Select A Country") {
        $("div[id=lblErrcontactcountry]").html(errorsContact["errcontactCountryNotSelected"]).show();

        $("#lblErrcontactcountryclone").html("&nbsp;");
        $("#lblErrcontactcountryclone").show();
        contactHasError = true;
    }

    if ($("#optcontactsalesrep option:selected").text() == "") {
        $("div[id=lblErrcontactsalesrep]").html(errorsContact["errcontactSalesrepNotSelected"]).show();
        contactHasError = true;
    }
    

    if (contactHasError) {
        $("#divContactMainError").html("<span>Fields with in red are mandatory - Please complete to continue.</span>");
        $("#divContactMainError").show();
        $('html,body').animate({
            scrollTop: $("#accountSetupDiv").offset().top
        },
            'slow');
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
        return false;
    }
    

    else {
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
        return true;
    }
}
function clearOfferCode(){
    $("#tblISPsignup_findOfferCode > tbody").html("");
}
function validateContactFormDD() {
    turnOffContactErrors();
    var txtContacts = $("input[id*=txtcontact]");
    var contactHasError = false;
    var billingHasError = false;
    var portnumber = $("#txtcontactportingnumber").val().replace(/-/g, "");
    $("#txtcontactportingnumber").val(portnumber);
 //   $("#optbillpaymentcollection_methods").attr("disabled", false);
  //  $("#optbillpaymentcollection_methods").val("C");
    txtContacts.each(function () {
        //$(this).val($.trim($(this).val()));

        if (!this.checkValidity()) {
            contactHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "");
            if (errorsContact["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsContact["err" + lblid]).show();
            }

            if (lblid == "contactemail_address") {
                if ($(this).val() != "") {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailIdInvalid"]).show();
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsContact["errcontactEmailId"]).show();
                }
            }

        }

    });
    if ($("#txtcontactfirst_name").val() == "" || $("#txtcontactlast_name").val() == "") {
        $("#lblErrcontactfirst_nameclone").html("&nbsp;");
        $("#lblErrcontactfirst_nameclone").show();
    }

    if ($("#txtcontactemail_address").val()) {
        if (!isValidEmailAddress($("#txtcontactemail_address").val())) {
            $("#lblErrcontactemail_address").html("Invalid email format - Please enter a correct e-mail address");
            $("#lblErrcontactemail_address").show();
            $("#lblErrcontactemail_addressclone").html("&nbsp;");
            $("#lblErrcontactemail_addressclone").show();
        }
        if (!isContactEmailValid) {
            $("#lblErrcontactemail_address").show();
            contactHasError = true;
        }
    } else {
        $("#lblErrcontactemail_address").html(errorsContact["errcontactEmailId"]);
        $("#lblErrcontactemail_addressclone").html("&nbsp;");
        $("#lblErrcontactemail_addressclone").show();
        $("#lblErrcontactemail_address").show();
    }


    if ($("#optcontactbrand option:selected").text() == "Select A Brand") {
        $("div[id=lblErrcontactbrand]").html(errorsContact["errcontactBrandNotSelected"]).show();
        $("#lblErrcontactbrandclone").html("&nbsp;");
        $("#lblErrcontactbrandclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcurrency option:selected").text() == "Select A Currency") {
        $("div[id=lblErrcontactcurrency]").html(errorsContact["errcontactCurrencyNotSelected"]).show();
        $("#lblErrcontactcurrencyclone").html("&nbsp;");
        $("#lblErrcontactcurrencyclone").show();

        contactHasError = true;
    }
    if ($("#optcontactcountry option:selected").text() == "Select A Country") {
        $("div[id=lblErrcontactcountry]").html(errorsContact["errcontactCountryNotSelected"]).show();

        $("#lblErrcontactcountryclone").html("&nbsp;");
        $("#lblErrcontactcountryclone").show();
        contactHasError = true;
    }

    if ($("#optcontactsalesrep option:selected").text() == "") {
        $("div[id=lblErrcontactsalesrep]").html(errorsContact["errcontactSalesrepNotSelected"]).show();
        contactHasError = true;
    }
    if (!validateDDForm()) {
        billingHasError = true;
    }
   // if ($("#optbillpaymentcountry_code option:selected").text() == " ") {
   //     $("div[id=lblErrbillpaymentcountry_code]").html(errorsContact["errcontactCountryNotSelected"]).show();
 //       billingHasError = true;
 //   }

    if (contactHasError) {
        $("#divContactMainError").html("<span>Fields with in red are mandatory - Please complete to continue.</span>");
        $("#divContactMainError").show();
        $('html,body').animate({
            scrollTop: $("#accountSetupDiv").offset().top
        },
            'slow');
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
        return false;
    }
    if (billingHasError) {
     //   $("#divBillingPaymentMainError").html("<span>Fields with in red are mandatory - Please complete to continue.</span>");
   //     $("#divBillingPaymentMainError").show();
        //$("#optbillpaymentcollection_methods").attr("disabled", true);
        return false;
    }else{
            return true;
    }

    //else {
        // $("#optbillpaymentcollection_methods").attr("disabled", true);
    //    return true;
   // }
   
}
function validateEmailAddresses() {
    turnOffContactErrors();
    //getAjaxFunc("customers/emailaddresses?email_address=" + $("#txtcontactemail_address").val())
    var erremailused = "";
    $.ajax({
        type: "GET",
        url: $("body").data("apiurl") + "customers/emailaddresses?email_address=" + $("#txtcontactemail_address").val(),
        dataType: "json",
        async: false,
        success: function (data) {
            if (data.associated_customers) {
                if (data.associated_customers.length > 1) {
                    // $.each(data.associated_customers, function (i, item) {
                    // 	erremailused += item.customer_key + " – " + item.status + "</br>";
                    // });
                    for (var i = 0; i < data.associated_customers.length; i++) {
                        erremailused += data.associated_customers[i].customer_key + " – " + data.associated_customers[i].status + "</br>";
                        if (i == data.associated_customers.length - 1) {
                            var errs = errorsContact.errcontactEmailIdUsed.replace("+", erremailused);
                            continueOnSave(false, errs);
                        }
                    }

                }
                else {
                    if (data.associated_customers[0]) {
                        if (data.associated_customers[0].customer_key == customerKey) {
                            continueOnSave(true, "");
                        }
                        else {
                            // $.each(data.associated_customers, function (i, item) {
                            // 	erremailused += item.customer_key + " – " + item.status + "</br>";
                            // });
                            for (var i = 0; i < data.associated_customers.length; i++) {
                                erremailused += data.associated_customers[i].customer_key + " – " + data.associated_customers[i].status + "</br>";
                                if (i == data.associated_customers.length - 1) {
                                    var errs = errorsContact.errcontactEmailIdUsed.replace("+", erremailused);
                                    continueOnSave(false, errs);
                                }
                            }
                        }
                    }
                    else {
                        continueOnSave(false, "");
                    }
                }
            }
            else {
                if (data.errors) {
                    if (data.errors[0].error_code) {
                        if (data.errors[0].field == "email_address") {
                            var errs = errorsContact.errcontactEmailOther = data.errors[0].developer_message;
                            continueOnSave(false, errs);
                        }
                    }
                }
            }
        },
        error: function (e) {
            if (e.responseJSON.errors) {
                if (e.responseJSON.errors[0].error_code) {
                    if (e.responseJSON.errors[0].error_code == "NOT_FOUND") {
                        continueOnSave(true, "");
                    }
                    else {
                        continueOnSave(false, "");
                    }
                }
                else {
                    continueOnSave(false, "");
                }
            } else {
                continueOnSave(false, "");
            }
        }
    });

}

function continueOnSave(isemailvalid, errorEmailIdUsed) {
    if (isemailvalid) {
        var objcontact_detail = new Object();

        objcontact_detail.customer = new Object();
        objcontact_detail.customer.details = new Object();
        objcontact_detail.customer.details["notes"] = $("#txtcontactnotes").val();

        objcontact_detail.customer.details.id = $.query.get("customerid");

        var txtContacts = $("input[id*=txtcontact]");
        txtContacts.each(function () {
            var attrid = $(this).attr("id");
            var propname = attrid.replace("txtcontact", "");
            objcontact_detail.customer.details[propname] = ($(this).val() === "" ? null : $(this).val());

        });
        var optContacts = $("select[id*=optcontact]");
        optContacts.each(function () {
            var attrid = $(this).attr("id");
            var propname = attrid.replace("optcontact", "");
            if (propname == "oems") {
                propname = "oem_id";
            }
            if (propname == "sales_rep") {
                propname = "salesuserid";
            }
            objcontact_detail.customer.details[propname] = ($(this).val() !== null ? $(this).val() : "");
        });
        objcontact_detail.customer.details["change_inbound_serv_email"] = $("#chkcontactInboxService").is(":checked");
        objcontact_detail.customer.details["change_send_serv_email"] = $("#chkcontactSendService").is(":checked");
        //alert(JSON.stringify(objcontact_detail));

        tabsloaded.events = false;
        putAjaxFunc("customers/" + customerKey, JSON.stringify(objcontact_detail), onContactSaved, "");
    } else {
        $("div[id=lblErrcontactemail_address]").html(errorEmailIdUsed).show();
        $("#divContactMainError").show();
    }
}

function onContactSaved(data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divContactMainError").html("<span>" + data.errors[0].developer_message + "</span>");
                $("#divContactMainError").show();
            }
        }
        else {
            $("#divContactMainSuccess").show();

            var original_formArr = $('#contact :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            contactform_original_data = $.param(original_formArr);

            contact_form_keypress = true;
            isInModificationMode = false;
            getContactDetails();
            getHeaderInformation();
            setSearchGridAfterSave(data, issuccess);
            tabsloaded.events = false;
            tabsloaded.servicessummary = false;
            tabsloaded.services_details = false;
            tabsloaded.bill_payment = false;
            getCollectionMethodOptionSet();
            getAdjustmentAccountCodeOptionSet();
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divContactMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divContactMainError").html("<span>" + data.responseJSON.errors[0].user_message + "</span>");
                }
            } else {
                $("#divContactMainError").html("<span>" + data.responseJSON.errors[0].developer_message + "</span>");
            }
            $("#divContactMainError").show();
        }
        else {
            $("#divContactMainError").html("<span>Request Cancelled.</span>");
            $("#divContactMainError").show();
            CancelRequest = false;
        }

    }
}

//END::: Contact Tab ---- "SAVE"

//START:: Contact Tab -- Send welcome letter


function showSimpleDialog() {
    var htmlcontent = "<p align='center'>Resend welcome letter?</p><p align='center'>	<br />	<button class='btn' onclick='getsetSendWelcomeEmail(); window.parent.sd.hide(); return false;'>Yes</button><button class='btn' onclick='window.parent.sd.hide(); return false;'>No</button> </p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}


//END:: Contact Tab -- Send welcome letter

//START:: Billing>Payment Functionality Mode

function validatetxtbill_onetime() {
    $("#txtbill_onetime_main,#txtbill_onetime_usage").attr({ "pattern": "/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/" });
    TextLimit($("#txtbill_onetime_main"), 10);
    TextLimit($("#txtbill_onetime_usage"), 10);
}

function onChangeSelectCountryBillPayment() {
    //  $("#optbillpaymentcountry_code").off("change").on("change", function () {
    $("#optbillpaymentcountry_code").off("change").on("change", function () {
        // $('#txtbillpaymentbillingno').val('');
        if ($(this).val() == "US" || $(this).val() == "CA" || $(this).val() == "UK") {
            $("#postalcodediv").attr({ "class": " col-sm-12 col-md-6 requiredInput" });
        } else {
            $("#postalcodediv").attr({ "class": "col-sm-12 col-md-6" });
            $("#txtbillpaymentpostal_code").removeClass("error");
        }

        if ($(this).val() == "US") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtbillpaymentpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
            billpaymentpostal_code(true);
        } /*else if ($(this).val() == "CA") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtbillpaymentpostal_code").attr({ "pattern": "([A-Za-z][0-9][A-Za-z]\s?[0-9][A-Za-z][0-9])" });
            billpaymentpostal_code(true);
        }
        else if ($(this).val() == "UK") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtbillpaymentpostal_code").attr({ "pattern": "([A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]?[0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2})" });
            billpaymentpostal_code(true);
        }*/
        else {
            if ($(this).val() == "CA" || $(this).val() == "GB" || $(this).val() == "UK") {
                billpaymentpostal_code(true);
            }
            else {
                billpaymentpostal_code(false);
            }
            $("#txtbillpaymentpostal_code").removeAttr("pattern");
        }
    });
}

function billpaymentpostal_code(isrequired) {
    if (isrequired) {
        $("#divRequiredbillpaymentpostal_code").show();
        $("#txtbillpaymentpostal_code").attr({ "required": "required" });
    }
    else {
        $("#divRequiredbillpaymentpostal_code").hide();
        $("#txtbillpaymentpostal_code").removeAttr("required");
        $("div[id=lblErrbillpaymentpostal_code]").hide();
    }
}

function turnoffOnLoadError() {
    $("#divBillingPaymentMainError").hide();
    $("#divBillingPaymentOTPSuccess").hide();
    $("#divBillingPaymentMainSuccess").hide();
    $("#divBillingProcessPaymentSuccess").hide();
    $("#divBillingProcessPaymentError").hide();

    $("#divServiceSummaryError").hide();
    $("#divServiceSummarySuccess").hide();


}

function turnOffDirectDebitCollectionMethodErrors() {
    $("div[id*=lblErrDD]").hide();
    $("#divBillingPaymentMainError").html(" <span>Review all error messages below to correct your data.</span>");
    $("#divBillingPaymentMainError").hide();
    $("input[id*=txtDD],select[id*=optDD]").removeClass("error");
    $("#divBillingPaymentMainSuccess").hide();
    $("#divBillingPaymentOTPSuccess").hide();
    $("#divBillingProcessPaymentSuccess").hide();
    $("#divBillingProcessPaymentError").hide();
}

function turnOffBillingPaymentErrors() {
    $("div[id*=lblErrbillpayment]").hide();
    $("#divBillingPaymentMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divBillingPaymentMainError").hide();
    $("input[id*=txtbillpayment],select[id*=optbillpayment]").removeClass("error");
    $("#divBillingPaymentMainSuccess").hide();
    $("#divBillingPaymentOTPSuccess").hide();
    $("#divBillingProcessPaymentSuccess").hide();
    $("#divBillingProcessPaymentError").hide();
}
function visibilityOfTxtCvvCode() {
    if (saveCCMode == addOrUpdate.add) {
        if ($("#divBillPaymentCCinfo :input").serialize() != billingpaymentCCinfo_blank) {
            $("#txtbillpaymentcvv_code").attr({ "required": "required" });
            $("#divBillPaymentCvvCode").removeAttr("style");

            if ($("#txtbillpaymentcard_type").val() == "AMEX") {
                $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{4}" });
            } else {
                $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{3}" });
            }

        } else {
            $("#txtbillpaymentcvv_code").removeAttr("required").removeAttr("pattern");
            $("#txtbillpaymentcvv_code").val("");
            $("#divBillPaymentCvvCode").attr({ "style": "display:none" });
        }
    } else if (saveCCMode == addOrUpdate.update) {
        if ($("#divBillPaymentCCinfo :input").serialize() != billingpaymentCCinfo_original && billingpayment_form_keypress) {
            $("#txtbillpaymentcvv_code").attr({ "required": "required" });
            $("#divBillPaymentCvvCode").removeAttr("style");

            if ($("#txtbillpaymentcard_type").val() == "AMEX") {
                $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{4}" });
            } else {
                $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{3}" });
            }

        } else {
            $("#txtbillpaymentcvv_code").removeAttr("required").removeAttr("pattern");
            $("#txtbillpaymentcvv_code").val("");
            $("#divBillPaymentCvvCode").attr({ "style": "display:none" });
        }
    }
}

function onChangetxtbillpaymentcard_number() {
    $("#txtbillpaymentcard_number").change(function () {
        var newtextvalueofcc = $("#txtbillpaymentcard_number").val().replace(/ /g, '');
        $("#txtbillpaymentcard_number").val(newtextvalueofcc);

        $("#txtbillpaymentcvv_code").attr({ "required": "required" });
        $("#divBillPaymentCvvCode").removeAttr("style");

        if ($("#txtbillpaymentcard_type").val() == "AMEX") {
            $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{4}" });
        } else {
            $("#txtbillpaymentcvv_code").attr({ "pattern": "[0-9]{3}" });
        }
    });
}

function onChangeCCdetails() {
    $("select[id*=optbillpaymentexpiration]").change(function () {
        $("#txtbillpaymentcard_number").trigger("keyup");
        visibilityOfTxtCvvCode();
    });
}

function onkeypressBillingPaymentForm() {
    $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods").off("focusin").on("focusin", function () {
        if (saveCCMode == addOrUpdate.add) {
            if (!billingpayment_form_keypress) {
                var txtbillpayment = $("input[id*=txtbillpayment]");
                txtbillpayment.each(function () {
                    $(this).val($.trim($(this).val()));
                });
                billingpaymentform_original_data = $("#CCParentDiv :input").serialize();

                billingpayment_form_keypress = true;
                billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            }
        }
    });
}
//Adjustment Menu


function getTaxRate() {
    var rate;
    if (balance_payment_ppu && balance_payment_ppu > 0) {
        rate = ((balance_payment_ppu - 1) * 100).toFixed(2);
        rate = rate.replace(/\.00$/, '');
    } else {
        rate = "0";
    }
    return rate;
}

function getTotalAdjustmentAmountwithtax(amount) {
    if (getTaxRate() > 0 && amount) {
        $("#txtbillATFinalamount").val((parseFloat(amount) + (parseFloat(amount) * getTaxRate() / 100)).toFixed(currency_decimalplaces));
    } else {
        $("#txtbillATFinalamount").val((amount ? parseFloat(amount) : 0).toFixed(currency_decimalplaces));
    }

}

function onChangeAccountCodeDropDown() {
    $("select[id=optbillATaccount_code]").change(function () {
        var getFromLocalStorage = getLocalStorageOptionSetData("adjustment_accountcode");
        var defaultAmount = "";
        if (getFromLocalStorage) {
            for (var i = 0; i < getFromLocalStorage.account_codes.length; i++) {
                if (getFromLocalStorage.account_codes[i].defaultAmount && getFromLocalStorage.account_codes[i].code == $("#optbillATaccount_code").find("option:selected").text()) {
                    defaultAmount = getFromLocalStorage.account_codes[i].defaultAmount;
                    break;
                }
            }
            $("#txtbillATamount").val(defaultAmount);
            defaultAmount = "";
        }

        if ($("#txtbillATamount").val()) {
            getTotalAdjustmentAmountwithtax($("#txtbillATamount").val());
        } else {
            $("#txtbillATFinalamount").val("");
        }

        if ($("#txtbillATamount").val() >= 1) {
            $("#btnSaveAdjustment").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
        $("#txtbillATadjustment_description").val($("#optbillATaccount_code").find("option:selected").attr("value") != "Select" ? $("#optbillATaccount_code").find("option:selected").attr("value") : "");
        $("#txtbillATadjustment_description").attr("title", $("#optbillATaccount_code").find("option:selected").attr("value"));
        $("#txtbillATamount").trigger("change");
    });
}



function onChangeBillingPaymentForm() {
    $("input[id*=txtbillpayment]").off("keyup").on("keyup", function () {


        var formArr = $('#CCParentDiv :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (saveCCMode == addOrUpdate.add) {
            if (billingpayment_form_keypress) {
                if (serializedForm != billingpaymentform_original_data) {
                    isInModificationMode = true;
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = true;
                    }
                }
                else {
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = false;
                    } else {
                        isInModificationMode = false;
                    }
                }
            }
        }
        else {
            if (NoOfCreditCard >= 3 && isInOTP == false) {
                isInModificationMode = false;
            } else {
                if (serializedForm != billingpaymentform_blank_data) {

                    isInModificationMode = true;
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = true;
                    }
                }
                else {
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = false;
                    } else {
                        isInModificationMode = false;
                    }
                }
            }
        }
       // toggleAllButtonsBillingPayment();
        if (isInCollectionMethodDetailUpdate) {
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
        } else {
            $("#btnbillCollectionMethodUpdate").prop("disabled", false);
            $("#btnbillCollectionMethodUpdate").addClass("grey-btn").removeClass("disabled");
        }
        //alert(isInModificationMode);
    });
    $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optcontactcurrency").off("change").on("change", function () {

        var formArr = $('#CCParentDiv :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (saveCCMode == addOrUpdate.add) {
            if (billingpayment_form_keypress) {
                if ($("#CCParentDiv :input").serialize() != billingpaymentform_original_data) {
                    isInModificationMode = true;
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = true;
                    }
                }
                else {
                    if (isInCollectionMethodUpdate) {
                        isInCollectionMethodDetailUpdate = false;
                    } else {
                        isInModificationMode = false;
                    }
                }
            }
        }
        else {
            if (NoOfCreditCard >= 3) {
                isInModificationMode = false;
            } else {
                var notnull = false;
                var txtbillpayment = $("input[id*=optbillpayment]");
                txtbillpayment.each(function () {

                    if ($("#CCParentDiv :input").serialize() != billingpaymentform_blank_data) {
                        isInModificationMode = true;
                        if (isInCollectionMethodUpdate) {
                            isInCollectionMethodDetailUpdate = true;
                        }
                    }
                    else {
                        if (isInCollectionMethodUpdate) {
                            isInCollectionMethodDetailUpdate = false;
                        } else {
                            isInModificationMode = false;
                        }
                    }
                });
            }
        }
        //toggleAllButtonsBillingPayment();
        if (isInCollectionMethodDetailUpdate) {
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
        } else {
            $("#btnbillCollectionMethodUpdate").prop("disabled", false);
            $("#btnbillCollectionMethodUpdate").addClass("grey-btn").removeClass("disabled");
        }
    });
}
function onkeypressDirectDebitPaymentForm() {
    $("input[id*=txtDD]").off("focusin").on("focusin", function () {
       
            if (!ddpayment_form_keypress) {
                var txtdd = $("input[id*=txtDD]");
                txtdd.each(function () {
                    $(this).val($.trim($(this).val()));
                });
                ddpaymentform_original_data = $("#DirectDebitDiv :input").serialize();

                ddpayment_form_keypress = true;
                
            }
        
    });
}

 function onChangeDirectDebitPaymentForm() {
    $("input[id*=txtDD]").off("keyup").on("keyup", function () {


        var formArr = $('#DirectDebitDiv :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

       
            if (ddpayment_form_keypress) {
                if (serializedForm != ddpaymentform_original_data) {
                    isInModificationMode = true;
                }
                else {
                        isInModificationMode = false;
                    
                }
            }
        
    });
   
}

var toggleFullBillingPayment = function () {
    toggleAllButtonsBillingPayment();
    toggleallbillpaymentControls();
}

var toggleAllButtonsBillingPayment = function () {
    var factors = getFactorsForBillingPayment();
    togglebtnbillpaymentCCSwitch(factors);
    togglebtnbillpaymentCCDelete(factors);
    togglebtnSavebillpayment(factors);
}

var getFactorsForBillingPayment = function () {
    return {
        isInModificationMode: isInModificationMode,
        saveCCMode: saveCCMode,
        NoOfCreditCard: NoOfCreditCard,
        isOtpChecked: $("#chkbillpaymentOTP").prop("checked"),
        CollectionMethod: $("#txtcontactcollection_method").val(),
        updateCC: Number(permissionArray.filter(function (x) { return x.id == "updateCC" })[0].hasRights),
        oneTimePayment: Number(permissionArray.filter(function (x) { return x.id == "oneTimePayment" })[0].hasRights),
        addCC: Number(permissionArray.filter(function (x) { return x.id == "addCC" })[0].hasRights),
        switchCC: Number(permissionArray.filter(function (x) { return x.id == "switchCC" })[0].hasRights),
        deleteCC: Number(permissionArray.filter(function (x) { return x.id == "deleteCC" })[0].hasRights)
    }
}

var togglebtnbillpaymentCCSwitch = function (factors) {
    //condition to disable button is:
    // 1. No rights.
    // 2. is is MM and in Update CC mode.
    if (factors.switchCC == "1" && !factors.isOtpChecked) {
        if (factors.isInModificationMode && factors.saveCCMode == addOrUpdate.update) {
            $("input[id*=btnbillpaymentCCswitch]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        } else {
            $("input[id*=btnbillpaymentCCswitch]").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
    } else {
        $("input[id*=btnbillpaymentCCswitch]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}
var togglebtnbillpaymentCCDelete = function (factors) {
    //condition to disable button is:
    // 1. No rights.
    // 2. is is MM and in Update CC mode.
    // 3. if OTP is checked
    if (factors.deleteCC == "1" && !factors.isOtpChecked) {
        if (factors.isInModificationMode && factors.saveCCMode == addOrUpdate.update) {
            $("input[id*=btnbillpaymentCCdelete]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        } else {
            $("input[id*=btnbillpaymentCCdelete]").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
    } else {
        $("input[id*=btnbillpaymentCCdelete]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}

var togglebtnSavebillpayment = function (factors) {
    if (factors.saveCCMode == addOrUpdate.add) {
        togglebtnSavebillpayment_AddMode(factors);
    } else if (factors.saveCCMode == addOrUpdate.update) {
        togglebtnSavebillpayment_UpdateMode(factors);
    }
}
var toggleBillPaymentExtraControls = function () {
    //if collection method is not credit card then disable everything.
    //if no. of cc >=3 then checkbox and add to cc button disabled.
    //else...if otp is checked, check Add cc rights and any existing credit card is selected.
    var factors = getFactorsForBillingPayment();
    if (factors.CollectionMethod == "C") {
        if (factors.NoOfCreditCard >= 3) {
            $("#chkbill_onetime_addtoacc").prop("checked", false);
            $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
            $("#btnbillpaymentAddCreditCard").attr({ "disabled": "disabled", "class": "disabled" });
        }
        else {
            if (factors.isOtpChecked) {
                //console.log("factors.saveCCMode" + factors.saveCCMode);
                if (factors.addCC && factors.saveCCMode == addOrUpdate.add) {
                    $("#chkbill_onetime_addtoacc").removeAttr("disabled");
                } else {
                    $("#chkbill_onetime_addtoacc").prop("checked", false);
                    $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
                }
                $("#btnbillpaymentAddCreditCard").attr({ "disabled": "disabled", "class": "disabled" });
            } else {
                $("#btnbillpaymentAddCreditCard").removeAttr("disabled").removeAttr("class").attr({ "class": "grey-btn" });
                $("#chkbill_onetime_addtoacc").prop("checked", false);
                $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
            }
        }
    } else {
        $("#chkbill_onetime_addtoacc").prop("checked", false);
        $("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });
        $("#btnbillpaymentAddCreditCard").attr({ "disabled": "disabled", "class": "disabled" });
    }

}
var togglebtnSavebillpayment_AddMode = function (factors) {
    if (factors.addCC == "1" && !factors.isOtpChecked) {
        if (factors.NoOfCreditCard < 3) {

            var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods,#optcontactcurrency");
            if (txtbillpayment.is(':visible') && !txtbillpayment.prop('disabled')) {
                $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
            } else {
                $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            }

        } else {
            $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    } else {
        $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}

var togglebtnSavebillpayment_UpdateMode = function (factors) {
    if (factors.updateCC == "1" && !factors.isOtpChecked) {
        var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
        if (txtbillpayment.not("#optbillpaymentcollection_methods,#optcontactcurrency").is(':visible') && !txtbillpayment.not("#optbillpaymentcollection_methods,#optcontactcurrency").prop('disabled')) {
            $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    } else {
        $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}

var togglechkbillpaymentOTP = function (factors) {
    if (factors.oneTimePayment == "0") {
        $("#chkbillpaymentOTP").prop("checked", false);
        $("#chkbillpaymentOTP").prop("disabled", true);
    } else {
        $("#chkbillpaymentOTP").prop("disabled", false);
    }
}

var toggleallbillpaymentControls = function () {
    var factors = getFactorsForBillingPayment();
    togglechkbillpaymentOTP(factors);
    var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optcontactcurrency");
    if (factors.isOtpChecked == "1") {
        toggleallbillpaymentControls_otp(factors, txtbillpayment);
        toggleBillPaymentExtraControls();
    } else {
        if (factors.saveCCMode == addOrUpdate.add) {
            toggleallbillpaymentControls_add(factors, txtbillpayment);
        } else if (factors.saveCCMode == addOrUpdate.update) {
            toggleallbillpaymentControls_udpate(factors, txtbillpayment);
        }
    }
}
var toggleallbillpaymentControls_otp = function (factors, txtbillpayment) {
    if (factors.saveCCMode == addOrUpdate.add) {
        txtbillpayment.prop("disabled", false);
    } else if (factors.saveCCMode == addOrUpdate.update) {
        txtbillpayment.prop("disabled", true);
    }
}
var toggleallbillpaymentControls_add = function (factors, txtbillpayment) {
    if (factors.addCC == "1") {
        //traverse through all billing fields

        txtbillpayment.toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
                }, {});
        }, {});
        togglebtnSavebillpayment(factors);
    } else {
        txtbillpayment.prop("disabled", true);
    }
}

var toggleallbillpaymentControls_udpate = function (factors, txtbillpayment) {
    //conditions: user has update CC rights and we are not in OTP mode.
    if (factors.updateCC == "1") {
        //traverse through all billing fields
        txtbillpayment.toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
        togglebtnSavebillpayment(factors);
    } else {
        txtbillpayment.prop("disabled", true);
    }
}

function togglebtnSavebillpayment_obsolete() {
    if (isInModificationMode) {
        if (saveCCMode == addOrUpdate.update) {
            $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });

            $("input[id*=btnbillpaymentCC]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });

        } else if (saveCCMode == addOrUpdate.add) {
            if (NoOfCreditCard < 3) {
                $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
            } else {
                $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            }
            $("input[id*=btnbillpaymentCC]").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
    }
    else if (!isInModificationMode) {
        if (saveCCMode == addOrUpdate.update) {
            if (NoOfCreditCard < 3) {
                $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
            } else {
                $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            }
        } else if (saveCCMode == addOrUpdate.add) {
            if (NoOfCreditCard < 3) {
                $("#btnSavebillPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
            } else {
                $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            }
        }
        $("input[id*=btnbillpaymentCC]").removeAttr("disabled").attr({ "class": "grey-btn" });
    }
    if ($("#chkbillpaymentOTP").prop("checked")) {
        $("input[id*=btnbillpaymentCC]").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        $("#btnSavebillPayment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}

function onClickbtnAddCreditCard() {
    $("#btnbillpaymentAddCreditCard").off("click").on("click", function () {
        saveCCMode = addOrUpdate.add;
        billingpayment_form_keypress = false;
        isInModificationMode = false;
        $("input[id*=txtbillpayment]").val("");
        $("select[id*=optbillpayment]").not($("#optcontactcurrency,#optbillpaymentcollection_methods")).val("");
        $("#optbillpaymentcountry_code").trigger("change");
        $("#txtbillpaymentfirst_name").focus();
        turnOffBillingPaymentErrors();
        $("#imgbillcard_type").removeClass();
        $("#imgbilldiv_block").hide();
        $("#tblISPCreditCards tbody > tr").removeAttr("class");
        toggleAllButtonsBillingPayment();
        toggleallbillpaymentControls();
    });
}

function clearCreditCardDetails() {


    billingpayment_form_keypress = false;

    $("input[id*=txtbillpayment]").val("");
    $("select[id*=optbillpayment]").not($("#optcontactcurrency,#optbillpaymentcollection_methods")).val("");
    $("#optbillpaymentcountry_code").trigger("change");
    $("#txtbillpaymentfirst_name").focus();
    turnOffBillingPaymentErrors();
    $("#imgbillcard_type").removeClass();
    $("#imgbilldiv_block").hide();
    $("#tblISPCreditCards tbody > tr").removeAttr("class");
    toggleAllButtonsBillingPayment();
    toggleallbillpaymentControls();

}

var onPasteExpirationYear = function () {
    $("#txtbillpaymentexpiration_year").on("paste", function () {
        setTimeout(function () {
            onchangeOnlyNumeric("#txtbillpaymentexpiration_year");
        }, 100);

    });
}

function onChangeDIDRadioButtons() {
    $("#selectDidTxt").html("Select DID");

    $("input[name=selectDID]:radio").off("change").on("change", function (e) {
        $("#divServiceDidError").hide();
        var filterSelected = $("input[name=selectDID]:checked").val();
        if (filterSelected == "did") {
            $("#selectDidTxt").html("Select DID");
            $("#didSearchDiv").show();
            $("#reserveDIDDiv").hide();
            $("#didtr").show();
            $("#reservtr").hide();
            $("#txtservicedetailReserve_phone").val("");
            $("#didISPSinguptbody").css("height", "275px");
        } else {
            $("#optservicedetailDid_country").val("Select a country");
            $("#txtservicedetailDid_city").val("");
            $("#txtservicedetailDid_phone").val("");
            $("#selectDidTxt").html("Reserve DID");
            $("#reserveDIDDiv").show()
            $("#didSearchDiv").hide();
            $("#didtr").hide();
            $("#reservtr").show();
            $("#didISPSinguptbody").css("height", "330px");
        }
        $("#tblISPSignupservice_Did > tbody").html("");
    });
}

var onKeyPresstxtservicedetailReserve_phone = function () {
    $("#txtservicedetailReserve_phone").off("keypress").on("keypress", function (event) {
        return isNumberAllowPaste(event);
    });
    $("#txtservicedetailReserve_phone").off("paste").on("paste", function (event) {
        setTimeout(function () {
            onchangeOnlyNumeric("#txtservicedetailReserve_phone");
        }, 100);
    });
    $("#txtservicedetailReserve_phone").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if ($("#txtservicedetailReserve_phone").val().length >= 11) {
                getService_findDID();
            }
        }
    });
}

function directdebitpostal_code(isrequired) {
    if (isrequired) {
        $("#labelDDpostal_code").show();
        $("#txtDDpostal_code").attr({ "required": "required" });
    }
    else {
        $("#labelDDpostal_code").hide();
        $("#txtDDpostal_code").removeAttr("required");
        $("div[id=lblErrDDpostal_code]").hide();
    }
}

function validateDDForm() {
    turnOffDirectDebitCollectionMethodErrors();
    var txtDD = $("input[id*=txtDD]");
    var directdebitHasError = false;
    txtDD.each(function () {
        $(this).val($(this).val().trim());
        //$(this).val($.trim($(this).val()));
        if (!this.checkValidity()) {
            directdebitHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "").replace("opt", "");
            if (errorsBillingPaymentDD["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid]).show();
            }

            if (lblid == "DDpostal_code") {
                if ($(this).val() !== "") {
                    if ($("#optcontactcountry").val() == "US") {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid + "US"]).show();
                    } else if ($("#optcontactcountry").val() == "CA") {

                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid + "Canada"]).show();
                    } else if ($("#optcontactcountry").val() == "UK") {

                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid + "UK"]).show();
                    } else {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid + "ALL"]).show();
                    }
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsBillingPaymentDD["err" + lblid + "ALL"]).show();
                }
            }

        }

    });


    if ($("#txtDDpostal_code").val() && $("#optcontactcountry").val() == "CA") {
        if ($("#txtDDpostal_code").val().length < 3) {
            $("div[id=lblErrDDpostal_code]").html(errorsBillingPaymentDD["errDDpostal_codeCanada"]).show();
            directdebitHasError = true;
        }
    }
    if ($("#txtDDpostal_code").val() && $("#optcontactcountry").val() == "UK") {
        if ($("#txtDDpostal_code").val().length < 6) {
            $("div[id=lblErrDDpostal_code]").html(errorsBillingPaymentDD["errDDpostal_codeUK"]).show();
            directdebitHasError = true;
        }
    }


    if ($("#optcontactcountry option:selected").val() == "US" || $("#optcontactcountry option:selected").val() == "CA") {
        if ($("#txtDDstate_province").val().length > 2 || $("#txtDDstate_province").val().length < 2) {
            $("div[id=lblErrDDstate_province]").html(errorsBillingPaymentDD["errDDstate_provincelength"]).show();
            directdebitHasError = true;
        }
    }

    if (directdebitHasError) {
        //   $("#divBillingPaymentMainError").show();
        return false;
    }
    else {
        return true;
    }
}
function validateBillingPaymentForm() {
    turnOffBillingPaymentErrors();
    var txtBill = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
    var billingPaymentHasError = false;
    $("#txtbillpaymentcard_number").trigger("keyup");
   // $("#txtbillpaymentpostal_code").attr("disabled", "diabled");
    txtBill.each(function () {
        //$(this).val($.trim($(this).val()));
        if (!this.checkValidity()) {
            billingPaymentHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "").replace("opt", "");
            if (errorsBillingPayment["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid]).show();
            }
            if (lblid == "billpaymentcvv_code") {
                if ($(this).val() !== "") {
                    if ($("#txtbillpaymentcard_type").val() == "AMEX") {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "AMEX"]).show();
                    } else {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "ALL"]).show();
                    }
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "NULL"]).show();
                }
            }
            if (lblid == "billpaymentpostal_code") {
                if ($(this).val() !== "") {
                    if ($("#optbillpaymentcountry_code").val() == "US") {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "US"]).show();
                    } else if ($("#optbillpaymentcountry_code").val() == "CA") {

                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "Canada"]).show();
                    } else if ($("#optbillpaymentcountry_code").val() == "UK") {

                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "UK"]).show();
                    } else {
                        $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "ALL"]).show();
                    }
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "ALL"]).show();
                }
            }
            if (lblid == "billpaymentexpiration_year") {
                if ($(this).val()) {
                    $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid]).show();
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsBillingPayment["err" + lblid + "NULL"]).show();
                }
            }
        }
    });
    /*if($("#optcontactcountry").val() == "UK" || $("#optcontactcountry").val() == "US" || $("#optcontactcountry").val() == "CA"){
        $("#txtbillpaymentpostal_code").removeAttr("disabled", "disabled");
    }*/
    if ($("#txtbillpaymentpostal_code").val() && $("#optbillpaymentcountry_code").val() == "CA") {
        if ($("#txtbillpaymentpostal_code").val().length < 3) {
            $("div[id=lblErrbillpaymentpostal_code]").html(errorsBillingPayment["errbillpaymentpostal_codeCanada"]).show();
            billingPaymentHasError = true;
        }
    }
    if ($("#txtbillpaymentpostal_code").val() && $("#optbillpaymentcountry_code").val() == "UK") {
        if ($("#txtbillpaymentpostal_code").val().length < 6) {
            $("div[id=lblErrbillpaymentpostal_code]").html(errorsBillingPayment["errbillpaymentpostal_codeUK"]).show();
            billingPaymentHasError = true;
        }
    }
    if ($("#txtbillpaymentcard_number").val().trim() != "") {
        if (creditcard_invalid) {
            $("div[id=lblErrbillpaymentcard_number]").html(errorsBillingPayment["errbillpaymentCCInvalid"]).show();
            billingPaymentHasError = true;
        }
    }

    if ($("#optbillpaymentcountry_code option:selected").val() == "US" || $("#optbillpaymentcountry_code option:selected").val() == "CA") {
        if ($("#txtbillpaymentstate_province").val().length > 2 || $("#txtbillpaymentstate_province").val().length < 2) {
            $("div[id=lblErrbillpaymentstate_province]").html(errorsBillingPayment["errbillpaymentstate_provincelength"]).show();
            billingPaymentHasError = true;
        }
    }

    var currentTime = new Date();
    //txtbillpaymentexpiration_year
    if ($("#txtbillpaymentexpiration_year").val() && $("#optbillpaymentexpiration_month").val()) {
        if (Number($("#txtbillpaymentexpiration_year").val()) == currentTime.getFullYear()) {

            var mmyy = getExpirationFromMonthAndYear($("#optbillpaymentexpiration_month").val(), $("#txtbillpaymentexpiration_year").val());
            var selectedmonth = Number(mmyy.substr(0, 2));
            if (selectedmonth < (currentTime.getMonth() + 1)) {
                $("div[id=lblErrbillpaymentexpiration_month]").html(errorsBillingPayment["errbillpaymentexpirationExpired"]).show();
                billingPaymentHasError = true;
            }
        }
        else if (Number($("#txtbillpaymentexpiration_year").val()) < currentTime.getFullYear()) {
            $("div[id=lblErrbillpaymentexpiration_month]").html(errorsBillingPayment["errbillpaymentexpirationExpired"]).show();
            billingPaymentHasError = true;
        }
    }

    if (billingPaymentHasError) {
        //   $("#divBillingPaymentMainError").show();
        return false;
    }
    else {
        return true;
    }
}


function getCCRank() {
    for (i = 1; i <= 3; i++) {
        if ($.inArray(i, ccRanksUsed) == -1) {
            return i;
        }
    }
}



function onBillPaymentSaved(data, issuccess) {
    turnOffBillingPaymentErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divBillingPaymentMainError > span").append("</br>" + data.errors[0].developer_message);
                $("#divBillingPaymentMainError").show();
            }
        }
        else {
            $("#txtbillpaymentcard_number").val(String($("#txtbillpaymentcard_number").val().substr(0, $("#txtbillpaymentcard_number").val().length - 4)).replace(/./g, 'X') + String($("#txtbillpaymentcard_number").val().substr($("#txtbillpaymentcard_number").val().length - 4, $("#txtbillpaymentcard_number").val().length - 1)));
            isInModificationMode = false;
            turnOffCollectionMethodErrors();
            $("#divBillingPaymentMainSuccess").html("Data Saved Successfully.");
            $("#divBillingPaymentMainSuccess").show();
            // $("#serviceSetupDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
            $("#billingInfoDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");
            // $("#accountSetupDiv").find("input, button, submit, textarea, select").attr("disabled", "disabled");

        }
    } else {
        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message);
                }
                else {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message);
                }
                $("#divBillingPaymentMainError").show();
            } else if (data.responseJSON.errors[0].user_message && (isInArray(noErrorInvalidData, data.responseJSON.errors[0].error_code) || data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0 || data.responseJSON.errors[0].user_message.toLowerCase().indexOf("pre-auth process is currently unavailable") == 0)) {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                }
                else {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
                }
                $("#divBillingPaymentMainError").show();
            } else {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingPaymentMainError > span").append("</br>" + data.responseJSON.errors[0].user_message);
                }
                else {
                    $("#divBillingPaymentMainError > span").append("</br>" + data.responseJSON.errors[0].developer_message);
                }
                $("#divBillingPaymentMainError").show();
            }
        }
        else {
            $("#divBillingPaymentMainError > span").append("</br>Request Cancelled.");
            $("#divBillingPaymentMainError").show();
            CancelRequest = false;
        }
    }
}


//Start--Delete/switch Credit Card

function getJsonObjForDeleteCC(credit_card_rank) {
    if (credit_card_rank) {
        var data_obj_id = "#btnbillpaymentCCdata" + credit_card_rank;
        var objbillpayment_detail = new Object();
        objbillpayment_detail.credit_card = new Object();
        objbillpayment_detail.credit_card["card_number"] = $(data_obj_id).data("card_number");
        objbillpayment_detail.credit_card["name_on_card"] = $(data_obj_id).data("name_on_card");
        objbillpayment_detail.credit_card["first_name"] = $(data_obj_id).data("first_name");
        objbillpayment_detail.credit_card["expiration"] = $(data_obj_id).data("expiration");
        objbillpayment_detail.credit_card["credit_card_id"] = $(data_obj_id).data("credit_card_id");
        objbillpayment_detail.credit_card["card_type"] = $(data_obj_id).data("card_type");
        objbillpayment_detail.credit_card["version"] = $(data_obj_id).data("version");
        objbillpayment_detail.credit_card["credit_card_rank"] = $(data_obj_id).data("credit_card_rank");
        return objbillpayment_detail;
    }
}

function getJsonObjForSwitchCC(credit_card_rank) {
    var objbillpayment_detail = new Object();
    objbillpayment_detail = new Object();
    objbillpayment_detail["credit_cards"] = [];
    $("span[id*=btnbillpaymentCCdata]").each(function (element) {
        if ($(this).data("credit_card_rank") == 1 || $(this).data("credit_card_rank") == credit_card_rank)
            objbillpayment_detail["credit_cards"].push({
                "credit_card_id": $(this).data("credit_card_id"),
                "version": $(this).data("version"),
            });
    }, this);
    return objbillpayment_detail;

}

function onClickbtnbillpaymentCCdelete() {
    $("input[id*=btnbillpaymentCCdelete]").off("click").on("click", function (e) {
        var data_obj_id = "#btnbillpaymentCCdata" + $(this).data("credit_card_rank");

        var objbillpayment_detail = getJsonObjForDeleteCC($(this).data("credit_card_rank"));

        //onDeleteCreditCard($(this).data("credit_card_id"),objbillpayment_detail.credit_card["credit_card_rank"], objbillpayment_detail.credit_card["version"]);

        var htmlcontent = "<p align='center'>Are you sure you want to delete the following Credit Card?</p>";
        htmlcontent += "<p align='center'>" + objbillpayment_detail.credit_card["name_on_card"] + " " + objbillpayment_detail.credit_card["card_type"] + " " + objbillpayment_detail.credit_card["card_number"] + " " + objbillpayment_detail.credit_card["expiration"] + "</p>";
        htmlcontent += "<p align='center'>	<br />	<button class='btn' onclick='onDeleteCreditCard(" + $(this).data("credit_card_id") + "," + objbillpayment_detail.credit_card["credit_card_rank"] + "," + objbillpayment_detail.credit_card["version"] + "); window.parent.sd.hide();'>Yes</button>";
        htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>No</button></p>";

        var sd = new SimpleDialog("Test" + Math.random(), false);
        sd.setTitle("");
        sd.createDialog();
        window.parent.sd = sd;
        sd.setContentInnerHTML(htmlcontent);
        sd.show();
    });
}

function onDeleteCreditCard(credit_card_id, credit_card_rank, version) {
    deleteAjaxFunc("customers/" + customerKey + "/creditcards/rank/" + credit_card_rank + "?version=" + version + "&modifiedby=ISPPOWER", "", deletedCreditCard, credit_card_id);
}



function onSavedSwitchPrimaryCC(data, issuccess, credit_card_id) {
    turnOffBillingPaymentErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.responseJSON.errors[0].user_message) {
                $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
            }
            else {
                $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
            }
            $("#divBillingPaymentMainError").show();
        }
        else {
            isInModificationMode = false;
            getBillingPaymentGrid();
            toggleAllButtonsBillingPayment();
            toggleallbillpaymentControls();
            visibilityOfTxtCvvCode();
            if (credit_card_id) {
                //$("#btnbillpaymentAddCreditCard").trigger("click");
                //$("#credit_card_id" + credit_card_id).trigger("click");
            }
            tabsloaded.events = false;
            $("#btnbillpaymentAddCreditCard").trigger("click");
            $("#txtbillpaymentfirst_name").blur();
        }
    } else {
        if (data.responseJSON.errors[0].user_message) {
            $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
        }
        else {
            $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
        }
        $("#divBillingPaymentMainError").show();


    }
}

function deletedCreditCard(data, issuccess, credit_card_id) {
    turnOffBillingPaymentErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.responseJSON.errors[0].user_message) {
                $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
            }
            else {
                $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
            }
            $("#divBillingPaymentMainError").show();
        }
        else {
            isInModificationMode = false;
            getBillingPaymentGrid();
            toggleAllButtonsBillingPayment();
            toggleallbillpaymentControls();
            visibilityOfTxtCvvCode();
            if (credit_card_id) {
                if ($("#txtbillpaymentcredit_card_id").val() == credit_card_id) {
                    $("#btnbillpaymentAddCreditCard").trigger("click");
                }
            }
            tabsloaded.events = false;
        }
    } else {
        if (data.responseJSON.errors[0].user_message) {
            $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
        }
        else {
            $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
        }
        $("#divBillingPaymentMainError").show();
    }
}
//end--delete credit card.

//start--One time payment
function onChangechkbillpaymentOTP() {
    $("#chkbillpaymentOTP").change(function (e) {
        if ($(this).prop("checked")) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).prop("checked", false);
                showSimpleDialogTabChange(this.id);
                return false;
            }
        }
        $("#btnbillpaymentAddCreditCard").trigger("click");
        $("#txtbill_onetime_main,#txtbill_onetime_usage,#txtbill_onetime_ppu,#txtbill_onetime_usagetax").val("");
        otpProccessed = false;
        toggleAllButtonsBillingPayment();
        toggleallbillpaymentControls();
        if ($(this).prop("checked")) {
            isInOTP = true;
            //$("#txtbill_onetime_main,#txtbill_onetime_usage").removeAttr("disabled");
            $txtbill_otp = $("#txtbill_onetime_main,#txtbill_onetime_usage");

            $txtbill_otp.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
                    }, {});
            }, {});

            copyHeaderBalanceToOTP();
        } else {
            $("#txtbill_onetime_main,#txtbill_onetime_usage").attr({ "disabled": "disabled" });
            isInOTP = false;
            //toggleBillPaymentButtons(NoOfCreditCard, $("#txtcontactcollection_method").val());

        }
        toggleBillPaymentExtraControls();
        $("#txtbill_onetime_main,#txtbill_onetime_usage").trigger("keyup");
        tooglebtnbillProcessPayment();
    });
}
function uncheckOTPifChecked() {
    if ($("#chkbillpaymentOTP").prop("checked")) {
        $("#chkbillpaymentOTP").prop("checked", false);
        $("#chkbillpaymentOTP").trigger("change");
    }
}

function copyHeaderBalanceToOTP() {
    //var mainbal = parseFloat($("#txthdrtotal_main_balance").val().match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/)[0]);
    //var usagebal = parseFloat($("#txthdrtotal_usage_balance").val().match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/)[0]);

    var mainbal = Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, ""));
    var usagebal = Number($("#txthdrtotal_usage_balance").val().replace(/[^0-9\.]+/g, ""));
    //var usagebal = 0;


    if (mainbal > 0 && $("#txthdrtotal_main_balance").val().substr(0, 1) != "(") {
        // if ($("#spanbillpaymentCurrency3").html() == "JPY") {
        $("#txtbill_onetime_main").val(mainbal.toFixed(currency_decimalplaces));
        //} else {
        //     $("#txtbill_onetime_main").val(mainbal.toFixed(currencies_symbol));
        // }
    } else {
        //if ($("#spanbillpaymentCurrency3").html() == "JPY") {
        //   $("#txtbill_onetime_main").val("0");
        // } else {
        $("#txtbill_onetime_main").val(parseFloat(0).toFixed(currency_decimalplaces));
        // }
    }
    if (usagebal > 0 && $("#txthdrtotal_usage_balance").val().substr(0, 1) != "(") {
        $("#txtbill_onetime_usage").val(usagebal.toFixed(currency_decimalplaces));
    } else {
        // if ($("#spanbillpaymentCurrency3").html() == "JPY") {
        //     $("#txtbill_onetime_usage").val("0");
        // } else {
        $("#txtbill_onetime_usage").val(parseFloat(0).toFixed(currency_decimalplaces));
        //}

    }

    if (balance_payment_ppu && balance_payment_ppu > 0) {
        var txrate = ((balance_payment_ppu - 1) * 100).toFixed(2);
        $("#txtbill_onetime_ppu").val(txrate.replace(/\.00$/, ''));
    } else {
        $("#txtbill_onetime_ppu").val(parseFloat(0).toFixed(0));
    }
}
function onChangetxtbill_onetime() {
    $("#txtbill_onetime_main,#txtbill_onetime_usage").off("keyup").on("keyup", function (e) {
        var mainbal = CurrencyFormatted($("#txtbill_onetime_main").val());
        var usagebal = CurrencyFormatted($("#txtbill_onetime_usage").val());
        var ppu = CurrencyFormatted(($("#txtbill_onetime_ppu").val() / 100) + 1);
        if (usagebal > 0) {
            // if ($("#spanbillpaymentCurrency3").html() == "JPY") {
            //    $("#txtbill_onetime_usagetax").val((parseFloat((usagebal * ppu)).toFixed(currency_decimalplaces)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            //} else {
            $("#txtbill_onetime_usagetax").val((parseFloat((usagebal * ppu)).toFixed(currency_decimalplaces)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            //}
        } else {
            $("#txtbill_onetime_usagetax").val("");
        }
        if (mainbal > 0 || usagebal > 0) {
            // if ($("#spanbillpaymentCurrency3").html() == "JPY") {
            //     $("#txtbill_onetime_total").val((parseFloat(parseFloat(mainbal) + parseFloat((usagebal * ppu))).toFixed(0)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            // } else {

            $("#txtbill_onetime_total").val((parseFloat(parseFloat(mainbal) + parseFloat((usagebal * ppu))).toFixed(currency_decimalplaces)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            //}
        } else {
            $("#txtbill_onetime_total").val("");
        }
        tooglebtnbillProcessPayment();
    });
}
function CurrencyFormatted(amount) {
    var i = Number(amount);
    if (isNaN(i)) { i = 0.00; }
    var minus = '';
    if (i < 0) { minus = '-'; }
    i = Math.abs(i);
    i = parseInt((i + .005) * 100);
    i = i / 100;
    var s = new String(i);
    if (s.indexOf('.') < 0) { s += '.00'; }
    if (s.indexOf('.') == (s.length - 2)) { s += '0'; }
    s = minus + s;
    return s;
}

function tooglebtnbillProcessPayment() {
    if ($("#chkbillpaymentOTP").prop("checked")) {
        if (Number($("#txtbill_onetime_main").val()) >= 0 && Number($("#txtbill_onetime_usage").val()) >= 0) {
            if (Number($("#txtbill_onetime_main").val()) > 0 || Number($("#txtbill_onetime_usage").val()) > 0) {
                if (!otpProccessed) {
                    $("#btnbillProcessPayment").removeAttr("disabled").attr({ "class": "grey-btn" });
                }
            }
            else {
                $("#btnbillProcessPayment").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
            }
        } else {
            $("#btnbillProcessPayment").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
        }
    }
    else {
        $("#btnbillProcessPayment").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
    }
}


function onClickbtnbillProcessPayment() {
    $("#btnbillProcessPayment").off("click").on("click", function () {

        turnOffBillingPaymentErrors();
        var txtBill = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
        txtBill.each(function () {
            $(this).val($.trim($(this).val()));
        });
        if (validateBillingPaymentForm()) {
            var objpaymentprocess = new Object();
            //objpaymentprocess["customerKey"] = customerKey;
            //objpaymentprocess["oem_id"] = $("#optcontactoems").val();
            //objpaymentprocess["currency_code"] = $("#txtcontactcurrency_code").val();
            //objpaymentprocess["email_address"] = $("#txtcontactemail_address").val();
            objpaymentprocess["ipaddress"] = ipaddress;
            //objpaymentprocess["processor_group"] = "C";
            //objpaymentprocess["charge_amount"] = parseFloat($("#txtbill_onetime_total").val());
            if (parseFloat($("#txtbill_onetime_main").val()) > 0) {
                objpaymentprocess["amount_main"] = parseFloat($("#txtbill_onetime_main").val());
            }
            if (parseFloat($("#txtbill_onetime_usage").val()) > 0) {
                objpaymentprocess["amount_usage"] = parseFloat($("#txtbill_onetime_usage").val());
            }
            objpaymentprocess["save_card_to_account"] = $("#chkbill_onetime_addtoacc").is(":checked");
            objpaymentprocess.credit_card = new Object();

            var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
            txtbillpayment.each(function () {
                var attrid = $(this).attr("id");
                var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
                objpaymentprocess.credit_card[propname] = ($(this).val() === "" ? null : $(this).val());

            });
            //objpaymentprocess.credit_card["home_number"] = $("#txtcontacthome_number").val();
            if (objpaymentprocess.credit_card.currencies) {
                delete objpaymentprocess.credit_card.currencies;
            }
            if (objpaymentprocess.credit_card.version) {
                delete objpaymentprocess.credit_card.version;
            }
            if (objpaymentprocess.credit_card.credit_card_rank) {
                delete objpaymentprocess.credit_card.credit_card_rank;
            }
            tabsloaded.servicessummary = false;

            postAjaxFunc("customers/" + customerKey + "/creditcards/one_time_payment", JSON.stringify(objpaymentprocess), onSavedProcessPayment, "");
        }

    });
}
function onSavedProcessPayment(data, issuccess) {
    turnOffBillingPaymentErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                //$("#divBillingPaymentMainError > span").append("</br>" + data.errors[0].developer_message);
                $("#divBillingPaymentMainError").show();

                $("#divBillingProcessPaymentError").html(data.errors[0].developer_message);
                $("#divBillingProcessPaymentError").show();
            }
        }
        else {
            if (data.oneTimePaymentResult) {
                $("#divBillingPaymentOTPSuccess").show();
                $("#divBillingProcessPaymentSuccess").html(data.oneTimePaymentResult.responsecode + "- " + data.oneTimePaymentResult.message);
                $("#divBillingProcessPaymentSuccess").show();
            }
            //setPaymentDetails(data, issuccess);
            isInModificationMode = false;
            //billingpaymentform_original_data = $("#Payments :input").serialize();
            //billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            billingpayment_form_keypress = true;
            //getBillingPaymentGrid();
            //visibilityOfTxtCvvCode();
            if ($("#chkbill_onetime_addtoacc").is(":checked")) {
                getBillingPaymentGrid();
            }
            toggleAllButtonsBillingPayment();
            toggleallbillpaymentControls();



            // if (String(data.credit_card.credit_card_rank) == "1") {
            //     setSearchGridAfterSave(data, issuccess);
            // }
            tabsloaded.servicessummary = false;
            tabsloaded.services_details = false;
            tabsloaded.events = false;
            tabsloaded.servicesusage = false;
            tabsloaded.bill_transactionhistory = tabsloaded.bill_viewcharges = false;
            $("#btnbillProcessPayment").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
            otpProccessed = true;
            isInOTP = false;
            isInModificationMode = false;

            //hide cvv
            $("#txtbillpaymentcvv_code").removeAttr("required").removeAttr("pattern");
            $("#txtbillpaymentcvv_code").val("");
            $("#divBillPaymentCvvCode").attr({ "style": "display:none" });


            $("#txtbillpaymentcard_number").val(String($("#txtbillpaymentcard_number").val().substr(0, $("#txtbillpaymentcard_number").val().length - 4)).replace(/./g, 'X') + String($("#txtbillpaymentcard_number").val().substr($("#txtbillpaymentcard_number").val().length - 4, $("#txtbillpaymentcard_number").val().length - 1)));



            setTimeout(function () {
                setTimeout(getHeaderInformation, 1000);
            }, 800);

        }
    } else {

        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                $("#divBillingProcessPaymentError").html(data.responseJSON.errors[0].user_message);
                $("#divBillingProcessPaymentError").show();
            } else if (isInArray(noErrorInvalidData, data.responseJSON.errors[0].error_code) || data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0 || data.responseJSON.errors[0].user_message.toLowerCase().indexOf("pre-auth process is currently unavailable") == 0) {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                }
                else {
                    $("#divBillingPaymentMainError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
                }
                $("#divBillingPaymentMainError").show();
            } else {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingPaymentMainError > span").append("</br>" + data.responseJSON.errors[0].user_message);
                }
                else {
                    $("#divBillingPaymentMainError > span").append("</br>" + data.responseJSON.errors[0].developer_message);
                }
                $("#divBillingPaymentMainError").show();
            }
        }
        else {
            $("#divBillingPaymentMainError > span").append("</br>Request Cancelled.");
            $("#divBillingPaymentMainError").show();
            CancelRequest = false;
        }
    }
}

//end--One time payment


//start:: collection method update



function turnOffCollectionMethodErrors() {
    // $("div[id*=divEventMainError]").hide();
    $("#divCollectionMethodError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divCollectionMethodError").hide();

    $("#divCollectionMethodSuccess").hide();
}

var onModifyCollectionMethodDetails = function (data, issuccess) {

    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divCollectionMethodError").html(data.errors[0].developer_message);
                $("#divCollectionMethodError").show();
            }
        } else {
            isInModificationMode = false;
            isInCollectionMethodUpdate = false;
            isInCollectionMethodDetailUpdate = false;
            getHeaderInformation();
            tabsloaded.contact = false
            tabsloaded.events = false;
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");

            $("#txtcontactcollection_method").val($("#optbillpaymentcollection_methods").val());
            getCollectionMethodOptionSet();
            setTimeout(function () {
                $("#divCollectionMethodSuccess").html("Collection Method Updated successfully");
                $("#divCollectionMethodSuccess").show();

            }, 2000);

        }

    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divCollectionMethodError  > span").html(data.responseJSON.errors[0].user_message);
                } else {
                    $("#divCollectionMethodError > span").html(data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divCollectionMethodError > span").html(data.responseJSON.errors[0].developer_message);
            }
            $("#divCollectionMethodError").show();

        }
        else {
            $("#divCollectionMethodError > span").html("Request Cancelled.");
            $("#divCollectionMethodError").show();
            CancelRequest = false;
        }
    }

}
var onClickCollectionMethodUpdate = function () {

    $("#btnbillCollectionMethodUpdate").off("click").on("click", function () {
        turnOffCollectionMethodErrors();
        if (isInCollectionMethodUpdate) {
            onClickbtnbillCollectionMethodUpdate();


        } else {
            $("#divEventMainError").html("<span>No changes to save</span>");
            $("#divEventMainError").show();
        }
    });
}
var onClickbtnbillCollectionMethodUpdate = function () {
    var objevent = new Object();
    objevent.collection_method = new Object();
    objevent.collection_method.collection_method = $("#optbillpaymentcollection_methods").val();
    objevent.collection_method.version = ($("#txthdrversion").val() === "" ? null : $("#txthdrversion").val());
    putAjaxFunc("customers/" + customerKey + "/collection_methods", JSON.stringify(objevent), onModifyCollectionMethodDetails);

}
var onClickParentCustomerMethodUpdate = function () {
    $("#btnSavebillPaymntParent").off("click").on("click", function () {
        //turnOffEventErrors();
        if (isInModificationMode) {
            if ($("#txtbillpaymntParent_customerid").val()) {
                parentCustomerCollectionMethodUpdate();
            } else {
                $("#divCollectionMethodError").html("<span>Please provide parent customer id.</span>");
                $("#divCollectionMethodError").show();
            }

        } else {
            $("#divCollectionMethodError").html("<span>No changes to save</span>");
            $("#divCollectionMethodError").show();
        }
    });
}
var parentCustomerCollectionMethodUpdate = function () {
    var objevent = new Object();
    objevent.collection_method = new Object();
    objevent.collection_method.parent_customer = new Object();
    objevent.collection_method.collection_method = $("#optbillpaymentcollection_methods").val();
    objevent.collection_method.version = objevent.collection_method.version = ($("#txthdrversion").val() === "" ? null : $("#txthdrversion").val());
    objevent.collection_method.parent_customer.parent_customer_key = $("#txtbillpaymntParent_customerid").val();
    putAjaxFunc("customers/" + customerKey + "/collection_methods", JSON.stringify(objevent), onModifyCollectionMethodDetails);

}

var isNumberic = function (event) {
    return (event.ctrlKey || event.altKey || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false) || (95 < event.keyCode && event.keyCode < 106) || (event.keyCode == 8) || (event.keyCode == 9) || (event.keyCode > 34 && event.keyCode < 40) || (event.keyCode == 46));
}



var onKeyPresstxtbillpaymntParent_customerid = function () {
    $("#txtbillpaymntParent_customerid").off("keydown").on("keydown", function (event) {
        return isNumberic(event);
    });
    $("#txtbillpaymntParent_customerid").off("paste").on("paste", function (event) {
        return false;
    });

}


function onkeypressParentCustomerForm() {

    $("input[id*=txtbillpaymntParent_customerid]").off("focusin").on("focusin", function () {
        turnOffCollectionMethodErrors();
        if (!collectionParentCustomer_form_keypress) {
            var txtCollection = $("input[id*=txtbillpaymntParent_customerid]");
            txtCollection.each(function () {
                $(this).val($.trim($(this).val()));
            });

            collectionParentCustomer_form_keypress = true;
            var original_formArr = $('#divbillingParentCustomerForm :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            collectionParentCustomerform_original_data = $.param(original_formArr);
            collectionParentCustomerform_original_data = original_formArr;
        }
    });
}

function onChangeParentCustomerForm() {

    $("input[id*=txtbillpaymntParent_customerid]").off("keyup").on("keyup", function () {
        turnOffCollectionMethodErrors();
        var formArr = $('#divbillingParentCustomerForm :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (collectionParentCustomer_form_keypress) {
            if (serializedForm != collectionParentCustomerform_original_data) {
                isInModificationMode = true;
                if (isInCollectionMethodUpdate) {
                    isInCollectionMethodDetailUpdate = true;
                }
            }
            else {
                if (isInCollectionMethodUpdate) {
                    isInCollectionMethodDetailUpdate = false;
                } else {
                    isInModificationMode = false;
                }
            }
        }

    });
    $("input[id*=txtbillpaymntParent_customerid]").off("change").on("change", function () {
        var formArr = $('#divbillingParentCustomerForm :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (collectionParentCustomer_form_keypress) {
            if (serializedForm != collectionParentCustomerform_original_data) {
                isInModificationMode = true;
                if (isInCollectionMethodUpdate) {
                    isInCollectionMethodDetailUpdate = true;
                }
            }
            else {
                if (isInCollectionMethodUpdate) {
                    isInCollectionMethodDetailUpdate = false;
                } else {
                    isInModificationMode = false;
                }
            }
        }
    });
}


var onSavedCollectionMethod = function (data, issuccess) {
    if (issuccess) {

        //no error then
        tabsloaded.contact = false;
        tabsloaded.events = false;
        $("#txtcontactcollection_method").val($("#optbillpaymentcollection_methods").val());

    }
}
var enableSavebtnParentCustomer = function () {
    $("#btnSavebillPaymntParent").prop("disabled", false);
    $("#btnSavebillPaymntParent").removeClass("disabled").addClass("grey-btn");
}
//start:: parent customer collection save
var onClickicnbillpaymntParent_customerid = function () {
    $("#icnbillpaymntParent_customerid").off("click").on("click", function () {
        enableSavebtnParentCustomer();
        getParentCustomerSummary($("#txtbillpaymntParent_customerid").val());
    });
}
var onEntertxtbillpaymntParent_customerid = function () {
    $("#txtbillpaymntParent_customerid").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            enableSavebtnParentCustomer();
            getParentCustomerSummary($("#txtbillpaymntParent_customerid").val());
        }

    });
}
//$("#txtbillpaymntParent_customerid").val()
var getParentCustomerSummary = function (customerid) {
    getAjaxFunc("/customers/" + customerid + "/summary", setParentCustomerSummary, "");
}
function setParentCustomerSummary(data, issuccess) {
    //clear header info and disable all controls
    $("#txtbillpaymntParent_customername,#txtbillpaymntParent_companyname").attr({ "disabled": "disabled" });
    $("#txtbillpaymntParent_customername,#txtbillpaymntParent_companyname").val("");
    if (issuccess) {
        if (data.customer && data.customer.summary) {
            $("#txtbillpaymntParent_customerid").val(data.customer.summary.billing_customer_key);
            $("#txtbillpaymntParent_customername").val(data.customer.summary.name);
            $("#txtbillpaymntParent_companyname").val(data.customer.summary.company_name)

        }
        else {
            $("#divCollectionMethodError").html("<span>No customer found.</span>");
            $("#divCollectionMethodError").show();
        }
    } else {

        if (data.responseJSON) {
            if (data.responseJSON.errors[0].user_message) {
                $("#divCollectionMethodError").html("</br>" + data.responseJSON.errors[0].user_message);
                $("#divCollectionMethodError").show();
            }
        }

    }
}
function clearParentCustomerForm() {
    $("#txtbillpaymntParent_customerid").val("");
    $("#txtbillpaymntParent_customername").val("");
    $("#txtbillpaymntParent_companyname").val("");

}
//end:: parent customer collection sa


//end:: collection method update

//END:: Billing>Payment Functionality Mode

//START:: handle tabs functionalities

var hrefContactSendWelcomeLetter = function (rights) {
    if (rights == 0) {
        $("#btnSendWelcomeLetter").prop("disabled", true);
        $("#btnSendWelcomeLetter").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#btnSendWelcomeLetter").prop("disabled", false);
        $("#btnSendWelcomeLetter").removeClass("disabled").addClass("grey-btn");
        setTimeout(function () {
            //get and set Customer Contact Information
            getAjaxFunc("/customers/" + customerKey + "/welcome_letter", setWelcomeLetter, "");
            $("#tabsdiv").show();
        }, 800);
    }
}

var hrefContactUpdateContact = function (rights) {
    setTimeout(function () {
        $txtcontact = $("select[id*=optcontact],input[id*=txtcontact],textarea[id*=txtcontact]");
        $txtcontact1 = $("select[id*=optcontact]");
        $txtcontact2 = $("input[id*=txtcontact]");
        $txtcontact3 = $("textarea[id*=txtcontact]");
        if (rights == 0) {
            $txtcontact.attr({ "disabled": "disabled" });
            $("#btnSaveContact").prop("disabled", true);
            $("#btnSaveContact").removeClass("grey-btn").addClass("disabled");
        } else {
            $txtcontact.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                    }, {})
            }, {});
            if ($txtcontact.is(':visible') && (!$txtcontact1.prop('disabled') || !$txtcontact2.prop('disabled') || !$txtcontact3.prop('disabled'))) {
                $("#btnSaveContact").prop("disabled", false);
                $("#btnSaveContact").removeClass("disabled").addClass("grey-btn");
            } else {
                $("#btnSaveContact").prop("disabled", true);
                $("#btnSaveContact").removeClass("grey-btn").addClass("disabled");
            }
        }
    }, 1500, rights);
}

var hrefBilling_paymentsUpdateCC = function (rights) {
    permissionArray.push(
        { id: "updateCC", hasRights: rights }
    );
}

var hrefBilling_paymentsOneTimePayment = function (rights) {
    permissionArray.push(
        { id: "oneTimePayment", hasRights: rights }
    );
}


var hrefBilling_paymentsCreateCC = function (rights) {
    permissionArray.push(
        { id: "addCC", hasRights: rights }
    );
}

var tblISPCreditCardsSwitchCC = function (rights) {
    permissionArray.push(
        { id: "switchCC", hasRights: rights }
    );
}

var tblISPCreditCardsDeleteCC = function (rights) {
    permissionArray.push(
        { id: "deleteCC", hasRights: rights }
    );
}


var addattrtoelements = function (id, addattr, removeattr) {
    $id = $(id);
    if (addattr !== "") {
        $id.prop(addattr, true);
    }
    if (removeattr !== "") {
        $id.removeAttr(removeattr);
    }
}

//service summary tab functionalities
var divServiceDeactivateServiceDeactivateService = function (rights) {
    permissionArray.push(
        { id: "deactivateService", hasRights: rights }
    );
}
var divServiceDeactivateServiceSuspendService = function (rights) {
    permissionArray.push(
        { id: "suspendService", hasRights: rights }
    );
}
var divServiceDeactivateServiceReactivateService = function (rights) {
    permissionArray.push(
        { id: "reactivateService", hasRights: rights }
    );
}
var divServiceDeactivateServiceReactivateServiceLeads = function (rights) {
    permissionArray.push(
        { id: "reactivateServiceLeads", hasRights: rights }
    );
}
//END:: handle tabs functionalities



$(document).keydown(function (event) {
    if (event.which == "17")
        cntrlIsPressed = true;
});

$(document).keyup(function () {
    cntrlIsPressed = false;
});

var cntrlIsPressed = false;

var sortingOfferCode = function () {
    $("i[id*=spnSrtOfferCode]").hide();
    $("a[id*=btnSrtOfferCode]").attr({ "class": "disabledLink", "tabindex": "-1" });
    $("a[id*=btnSrtOfferCode]").off("click").on("click", function (e) {
        $("#tblISPsignup_findOfferCode > thead > tr > th").removeClass("active");
        $("#tblISPsignup_findOfferCode > thead > tr > th").removeClass("active");
        $(this).parent().addClass("active");

        var btnid = $(this).attr("id");

        var sortusing = btnid.replace("btnSrtOfferCode", "");
        sortOfferCodeBy = sortusing;
        if (cntrlIsPressed) {
            $("i[id*=spnSrtOfferCode]").hide();
            $("i[id*=spnSrtOfferCode" + sortusing + "Desc]").show();
            sortOfferCodeType = "Desc";
        } else {
            if ($("i[id*=spnSrtOfferCode" + sortusing + "Asc]").is(":visible")) {
                $("i[id*=spnSrtOfferCode]").hide();
                $("i[id*=spnSrtOfferCode" + sortusing + "Desc]").show();
                sortOfferCodeType = "DESC";
            }
            else if ($("i[id*=spnSrtOfferCode" + sortusing + "Desc]").is(":visible")) {
                $("i[id*=spnSrtOfferCode]").hide();
                $("i[id*=spnSrtOfferCode" + sortusing + "Asc]").show();
                sortOfferCodeType = "ASC";
            }
            else {
                $("i[id*=spnSrtOfferCode]").hide();
                $("i[id*=spnSrtOfferCode" + sortusing + "Asc]").show();
                sortOfferCodeType = "Asc";
            }
        }

        $("#btnService_findOfferCode").trigger("click");
        return false;
        e.preventDefault();
    });
}
var onClickbtnService_findOfferCode = function () {
    $("#btnService_findOfferCode").off("click").on("click", function () {
        if (!isServiceAdded) {
            if ($("input[name='planfilter']:checked").data("value") == "P") {
                if (sortOfferCodeBy && sortOfferCodeType) {
                    getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&signup_flag=Y&offer_code_type=" + $("input[name='planfilter']:checked").data("value") + "&min_subscription=0&orderBy=" + sortOfferCodeBy + "&order=" + sortOfferCodeType, setService_findOfferCode, "");
                } else {
                    getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&signup_flag=Y&offer_code_type=" + $("input[name='planfilter']:checked").data("value") + "&min_subscription=0", setService_findOfferCode, "");
                }
            } else {
                if (sortOfferCodeBy && sortOfferCodeType) {
                    getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&offer_code_type=" + $("input[name='planfilter']:checked").data("value") + "&signup_flag=Y&min_subscription=0&orderBy=" + sortOfferCodeBy + "&order=" + sortOfferCodeType, setService_findOfferCode, "");
                } else {
                    getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&offer_code_type=" + $("input[name='planfilter']:checked").data("value") + "&signup_flag=Y&min_subscription=0", setService_findOfferCode, "");
                }
            }


            /*else {
               if ($('input[type=radio][name=planfilter]:checked').attr('id') == "PORTING") {
                   if (sortOfferCodeBy && sortOfferCodeType) {
                       getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&resource_type=INBOX_GENERIC&porting_flag=Y&offer_code_type=W&min_subscription=0&orderBy=" + sortOfferCodeBy + "&order=" + sortOfferCodeType, setService_findOfferCode, "");
                   } else {
                       getAjaxFunc("lookup/offer_codes?currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&resource_type=INBOX_GENERIC&porting_flag=Y&offer_code_type=W&min_subscription=0", setService_findOfferCode, "");
                   }
               } else {
                   if (sortOfferCodeBy && sortOfferCodeType) {
                       getAjaxFunc("lookup/offer_codes?resource_type=&currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&product_type=" + $('input[type=radio][name=planfilter]:checked').attr('id') + "&signup_flag=Y&min_subscription=0&orderBy=" + sortOfferCodeBy + "&order=" + sortOfferCodeType, setService_findOfferCode, "");
                   } else {
                       getAjaxFunc("lookup/offer_codes?resource_type=&currencycode=" + $("#optcontactcurrency").val() + "&oem_id=" + $("#optcontactbrand").val() + "&product_type=" + $('input[type=radio][name=planfilter]:checked').attr('id') + "&signup_flag=Y&min_subscription=0", setService_findOfferCode, "");
                   }
               }

           }*/

        }


    });
}



//enable disable controls when using offer code
var onClickbtntoggleserviceIfindplan = function () {
    $("#btntoggleserviceIfindplan").off("click").on("click", function () {
        $("#txtService_SubscriptionOfferCode").trigger("keyup");

    });
}
var onClickbtnService_resetOfferCode = function () {
    $("#btnService_resetOfferCode").off("click").on("click", function () {
        $("#txtService_SubscriptionOfferCode").val("").trigger("keyup");
        //uncheck offer code checkbox if checked.
        $("input[id*=chkService_findOC]").toArray()
            .reduce(function (t, element) {
                if ($(element).is(":checked")) {
                    $(element).trigger("click");
                }
            }, "");
        //clear get plan table
        $("#tblISPsignup_findOfferCode > tbody").html("");
        $("a[id*=btnSrtOfferCode]").attr({ "class": "disabledLink" });
    });
}

var onCheckchkService_findOC = function () {
    $("input[id*=chkService_findOC]").off("click").on("click", function (e) {
        // if (isInModificationMode && !isInOfferCodeMM && !isInReactivationMode && saveServiceDetailMode == addOrUpdate.update) {
        //      e.preventDefault();
        //      e.stopImmediatePropagation();
        //       showSimpleDialogTabChange(this.id);
        //      return false;
        //  } else {
        if ($(this).is(":checked")) {


            $("input[id*=txtservicenumber_]").val("");
            $("input[id*=chkService_findOC]").not(this).attr("disabled", "disabled");

            if ($(this).data("freetrail") == "Y") {
                $("#txtservicenumber_prorationamount").val(parseFloat("0").toFixed(currency_decimalplaces));
                $("#txtservicenumber_subtotal").val(parseFloat("0").toFixed(currency_decimalplaces));
                if (tax_percentage) {
                    $("#txtservicenumber_taxamount").val((parseFloat("0") * tax_percentage / 100).toFixed(currency_decimalplaces));
                } else {
                    $("#txtservicenumber_taxamount").val("0.00");
                }
                var total = parseFloat("0") + (parseFloat($("#txtservicenumber_taxamount").val()));
                $("#txtservicenumber_finalamount").val(total.toFixed(currency_decimalplaces));

                 
                $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
                $("#btnService_skipactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
                $("#btnService_chargeactivate").val("      Activate      ");
                //$("#txtservicenumber_additionalUsageBalance").val("0.00");
                $("#txtservicenumber_additionalUsageBalance").val(0.00.toFixed(currency_decimalplaces));

            } else {
                $("#txtservicenumber_prorationamount").val(parseFloat($(this).data("totalamount")).toFixed(currency_decimalplaces));
                $("#txtservicenumber_subtotal").val(parseFloat($(this).data("totalamount")).toFixed(currency_decimalplaces));
                if (tax_percentage) {
                    $("#txtservicenumber_taxamount").val((parseFloat($(this).data("totalamount")) * tax_percentage / 100).toFixed(currency_decimalplaces));
                } else {
                    $("#txtservicenumber_taxamount").val("0.00");
                }
                var total = parseFloat($(this).data("totalamount")) + (parseFloat($("#txtservicenumber_taxamount").val()));

                $("#txtservicenumber_finalamount").val(total.toFixed(currency_decimalplaces));

                if ($(this).data("totalamount") <= 0) {
                    $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
                    $("#btnService_skipactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
                    $("#btnService_chargeactivate").val("      Activate      ");
                    //$("#txtservicenumber_additionalUsageBalance").val("0.00");
                    $("#txtservicenumber_additionalUsageBalance").val(0.00.toFixed(currency_decimalplaces));
                } else {
                    if($("#optbillpaymentcollection_methods").val()!='B'){
                        $("#btnService_chargeactivate").val("Charge/Activate");
                    }else{
                        $("#btnService_chargeactivate").val("      Activate      ");
                    }
                    
                    $("#txtservicenumber_additionalUsageBalance").removeAttr("disabled");
                   // $("#txtservicenumber_additionalUsageBalance").val("0.00");
                   $("#txtservicenumber_additionalUsageBalance").val(0.00.toFixed(currency_decimalplaces));

                }
                if($(this).data("totalamount") > 0 && $("#optbillpaymentcollection_methods").val()=='B'){
                    $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
                }else{
                    $("#txtservicenumber_additionalUsageBalance").removeAttr("disabled");
                }

            }


            // $("#txtservicenumber_prorationamount").val($(this).data("totalamount").toFixed(currency_decimalplaces));





        } else {
            $("input[id*=txtservicenumber_]").val("");
            $("input[id*=chkService_findOC]").removeAttr("disabled");
            $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
        }
    });
}

var onChangetxtservicedetailIogm_msg_record_len = function () {
    $("#txtservicedetailIogm_msg_record_len").off("keypress").on("keypress", function (event) {
        return isNumber(event);
    });
}
var onChangetxtservicedetailIvoice_msg_record_len = function () {
    $("#txtservicedetailIvoice_msg_record_len").off("keypress").on("keypress", function (event) {
        return isNumber(event);
    });
}
var onChangetxtService_SubscriptionOfferCode = function () {
    $("#txtService_SubscriptionOfferCode").off("keypress").on("keypress", function (event) {
        return isNumber(event);
    });
    $("#txtService_SubscriptionOfferCode").off("keypress").on("keypress", function (event) {
        return isNumber(event);
    });
    $("#txtService_SubscriptionOfferCode").off("paste").on("paste", function (event) {
        setTimeout(function () {
            onchangeOnlyNumeric("#txtService_SubscriptionOfferCode");
            $("#txtService_SubscriptionOfferCode").trigger("keyup");
        }, 100);
    });
    $("#txtService_SubscriptionOfferCode").off("keyup").on("keyup", function (event) {
        if (event.keyCode == 13) {
            $("#btnService_findOfferCode").trigger("click");
        }
        if ($(this).val().trim()) {
            $("#btnService_resetOfferCode").prop("disabled", false);
            $("#btnService_resetOfferCode").removeClass("disabled");
        } else {
            $("#btnService_resetOfferCode").prop("disabled", true);
            $("#btnService_resetOfferCode").addClass("disabled");
        }

    });
}
function validatetxtService_SubscriptionOfferCode() {
    //TextLimit($("#txtService_SubscriptionOfferCode"), 10);
}
var setService_findOfferCode = function (data, issuccess) {
    var newrow = $("<tr />");
    $("a[id*=btnSrtOfferCode]").attr({ "class": "disabledLink" });
    if (issuccess) {
        if (data && data.offer_codes && data.offer_codes.length > 0) {
            var checkedOC_id = "";
            $("input[id*=chkService_findOC]").toArray()
                .reduce(function (t, element) {
                    if ($(element).is(":checked")) {
                        checkedOC_id = $(element).attr("id");
                    }
                }, "");
            if (checkedOC_id) {
                $("#" + checkedOC_id).trigger("click");
            }
            drawService_findOfferCode(data.offer_codes);
            $("a[id*=btnSrtOfferCode]").removeAttr("class");
        } else {
            $("#tblISPsignup_findOfferCode > tbody").html("");
            $("#tblISPsignup_findOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No Plans were Found</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPsignup_findOfferCode > tbody").html("");
            $("#tblISPsignup_findOfferCode").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].user_message + "</td>"));
            }
        } else {
            $("#tblISPsignup_findOfferCode > tbody").html("");
            $("#tblISPsignup_findOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_findOfferCode = function (data) {
    $("#tblISPsignup_findOfferCode > tbody").html("");
    $("#tblISPsignup_findOfferCode > thead > tr:first-child").removeClass();
    for (var i = 0; i < data.length; i++) {
        drawService_findOfferCodeRows(data[i], (i + 1));
    }
    var tb = document.querySelectorAll("#tblISPsignup_findOfferCode tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPsignup_findOfferCode > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    onCheckchkService_findOC();
    $('[data-toggle="othertooltip3"]').on('show.bs.tooltip', function () {
        $('.tooltip').not(this).hide();
    });
}
function drawService_findOfferCodeRows(rowData) {

    var row = $("<tr>");
    $("#tblISPsignup_findOfferCode").append(row);
    row.append($("<td>" + rowData.package_name + "</td>"));
    row.append($("<td class=\"pull-right\">" + rowData.subscription_formatted + "</td>"));
    row.append($("<td>" + rowData.billing_period_name + "</td>"));
    row.append($("<td>" + (rowData.first_month === 0 ? "Y" : "N") + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.activation_formatted + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ib_gift + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ib_page + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ob_gift + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.combo_gift + "</td>"));
    row.append($("<td><input type=\"checkbox\" id=\"chkService_findOC" + rowData.offer_code + "\" data-offercode=\"" + rowData.offer_code + "\" data-subscription=\"" + rowData.subscription + "\" data-totalAmountFormatted=\"" + rowData.total_amount_formatted + "\" data-totalAmount=\"" + rowData.total_amount + "\" data-freetrail=\"" + rowData.free_trial + "\"" + "\" data-producttype=\"" + rowData.product_type + "\"  /></td>"));
    row.wrap("<div  data-html=\"true\" data-container=\"body\" data-toggle = \"othertooltip3\" data-original-title=\"" + rowData.offer_code + " </br> " + rowData.description + "\"></div>")
    $('[data-toggle="othertooltip3"]').tooltip({ trigger: "hover" });
}

var onClickbtnService_changeOfferCode = function () {
    $("#btnService_changeOfferCode").off("click").on("click", function () {
        showSimpleDialogForOfferCodeChange();
    });
}

var focusonPorting = function () {
    setTimeout(function () {
        $("#optportingphonetype").focus();
    }, 100);

}
var showSimpleDialogForPorting = function () {
    var htmlcontent = "<p align='center'>The Customer requested to port a number Please fill out the Porting section and/or email the forms</p><p align='center'>	<br />	<button class='btn' onclick='focusonPorting();window.parent.sd.hide(); return false;'>OK</button></p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSimpleDialogForOfferCodeChange = function () {
    var htmlcontent = "<p align='center'>Are you sure you want to apply this change?</p><p align='center'>	<br />	<button class='btn' onclick='onContinueClickbtnService_changeOfferCode(); window.parent.sd.hide(); return false;'>Yes</button><button class='btn' onclick='window.parent.sd.hide(); return false;'>No</button> </p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var onContinueClickbtnService_changeOfferCode = function () {
    var checkedOC_id = "";
    var checkedOC_offerCode = "";
    $("input[id*=chkService_findOC]").toArray()
        .reduce(function (t, element) {
            if ($(element).is(":checked")) {
                checkedOC_id = $(element).attr("id");
                checkedOC_offerCode = $(element).data("offercode");
            }
        }, "");

    objOfferCode = new Object();
    objOfferCode.offer_code = checkedOC_offerCode;
    var offercodeurl = "customers/" + customerKey;
    if ($("input[name=serviceplanselection]:checked").val() == "selectedService") {
        offercodeurl += "/services/" + serviceKey + "/offer_code";
        objOfferCode.version = serviceSummaryVersion;
        //objOfferCode.services.push({ service_key: serviceKey, version: serviceSummaryVersion });

    } else {
        offercodeurl += "/offer_code";
        objOfferCode.services = [];
        $("a[id*=servicekey]").toArray()
            .reduce(function (t, element) {
                var thiselement = $(element);
                if (thiselement.data("servicestatus").toUpperCase() == "ORDERED" || thiselement.data("servicestatus").toUpperCase() == "ACTIVE" || thiselement.data("servicestatus").toUpperCase() == "SUSPEND") {
                    objOfferCode.services.push({ service_key: thiselement.data("servicekey"), version: thiselement.data("version") });
                }
            }, "");
    }
    putAjaxFunc(offercodeurl, JSON.stringify(objOfferCode), onSavedService_OfferCode, checkedOC_id);
}

var onSavedService_OfferCode = function (data, issuccess, checkbox_Offercode) {
    if (issuccess) {
        if (data && data.success) {
            isInModificationMode = false;
            isInOfferCodeMM = false;

            //checkbox uncheck and reverse all action.
            $("#" + checkbox_Offercode).trigger("click");

            //clear offer code table.
            $("#tblISPsignup_findOfferCode > tbody").html("");
            $("#txtService_SubscriptionOfferCode").val("");

            oldModifiedServiceKey = serviceKey;
            haveToChangeSelectedService = true;
            var filterSelected = $("input[name=servicesummaryfilter]:checked").val();
            if (filterSelected == "active") {
                $("#chkservicesummary_active").prop("checked", true);
                $("#chkservicesummary_active").trigger("change");

            } else if (filterSelected == "inactive") {
                $("#chkservicesummary_inactive").prop("checked", true);
                $("#chkservicesummary_inactive").trigger("change");

            } else {
                $("#chkservicesummary_all").prop("checked", true);
                $("#chkservicesummary_all").trigger("change");
            }

            getHeaderInformation();

            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    $("#divServiceDetailMainSuccess").html("<span>Offer code updated successfully.</span>")
                    $("#divServiceDetailMainSuccess").show();
                    haveToChangeSelectedService = false;

                }, 2500);
            }, 1800);

            tabsloaded.events = false;
            tabsloaded.services_gifts = false;
            tabsloaded.bill_info = false;
            tabsloaded.bill_viewcharges = false;
            tabsloaded.bill_transactionhistory = false;
            if ($("#btntoggleserviceIfindplan").attr("aria-expanded") == "true") {
                $("#btntoggleserviceIfindplan").trigger("click");
            }

        } else if (data && data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceOfferCodeError > span").html(data.errors[0].developer_message);
                $("#divServiceOfferCodeError").show();
            }
        }
    } else {
        if (data && data.responseJSON && data.responseJSON.errors) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceOfferCodeError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceOfferCodeError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceOfferCodeError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceOfferCodeError").show();
        } else {
            $("#divServiceOfferCodeError > span").html("Error in updating offer code. Please try again later");
            $("#divServiceOfferCodeError").show();
        }


    }
}

//END:: offercode modification story



//START: Select DID Sections
var toggleSelectDIDSection = function () {

    if (serviceStatus.toUpperCase() != "ORDERED") {
        if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "true") {
            $("#btntoggleserviceItelephone").trigger("click");
        }
    }
    if ((serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED" || serviceStatus.toUpperCase() == "SUSPEND") && saveServiceDetailMode == addOrUpdate.update && isInReactivationMode == false) {
        $("#btntoggleserviceItelephone").prop("disabled", true);
        $("#btntoggleserviceItelephone").addClass("disabled");
    } else {
        $("#btntoggleserviceItelephone").prop("disabled", false);
        $("#btntoggleserviceItelephone").removeClass("disabled");
    }
}

function getDIDCountryOptionSetsFunc(country_code) {
    var getFromLocalStorage = getLocalStorageOptionSetData("didcountries");
    if (getFromLocalStorage === "") {
        getAjaxFunc("/lookup/countries?didcountry=true", setDIDCountryOptionSetsFunc, country_code);
    }
    else {
        setDIDCountryOptionSetsFunc(getFromLocalStorage, true, country_code);
    }
}
function setDIDCountryOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.countries) {
            if (getLocalStorageOptionSetData("didcountries") === "") {
                setLocalStorageOptionSetData("didcountries", data);
            }
            setOptionSetsForceDefaultValue(data.countries, "#optservicedetailDid_country", selectedbydefault, "code", "name", selectedbydefault);
        }
    }
}

var turnOffServiceDID = function () {
    $("#divServiceDidError").html("").hide();
}

var isNumberKeyForGiftAmount = function (evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

var isNumberKey = function (evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

var onKeyPresstxtAdjustmentAmount = function () {
    $("#txtbillATamount").off("keypress").on("keypress", function (event) {
        //$("#txtbillATamount").val($("#txtbillATamount").val()?parseFloat($("#txtbillATamount").val()).toFixed(2):"");
        return isNumberKey(event);
    });
    $("#txtbillATamount").off("paste").on("paste", function (event) {
        return false;
    });

    $("#txtbillATamount").off("change").on("change", function (e) {
        var $adjustmentamount = $("#txtbillATamount");
        var $adjustmentamountval = parseFloat($adjustmentamount.val()) ? parseFloat($adjustmentamount.val()) : parseFloat(0);
        $adjustmentamount.val($adjustmentamountval.toFixed(currency_decimalplaces));
        var nArray = $adjustmentamount.val().split('.');
        if (nArray[0].length > 6) {
            // console.log("nArray[0] substring :: " + nArray[0].substring(0, 6));
            nArray[0] = nArray[0].substring(0, 6);
            $adjustmentamount.val(nArray[0] + "." + nArray[1]);
        }
        $("#txtbillATadjustment_date").trigger("change");
    });


}

var onKeyPresstxtservicedetailDid_city = function (e) {
    $("#txtservicedetailDid_city").off("paste").on("paste", function (event) {
        return false;
    });
    $("#txtservicedetailDid_city").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13)
            getService_findDID();
    });
}
var onKeyPresstxtservicedetailDid_city = function (e) {
    $("#txtservicedetailDid_city").off("paste").on("paste", function (event) {
        return false;
    });
    $("#txtservicedetailDid_city").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13)
            getService_findDID();
    });

}
var onKeyPresstxtservicedetailDid_phone = function () {
    $("#txtservicedetailDid_phone").off("keypress").on("keypress", function (event) {
        return isNumber(event);
    });
    $("#txtservicedetailDid_phone").off("paste").on("paste", function (event) {
        return false;
    });
    $("#txtservicedetailDid_phone").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13)
            getService_findDID();
    });
}
var onClickicnService_findDID = function () {
    $("i[id*=icnService_findDID],i[id*=icnService_findReserve_phone]").off("click").on("click", function (e) {
        if ($("#optservicedetailDid_country").attr('disabled') != "disabled") {
            if ($("input[name=selectDID]:checked").val() == "reserve") {
                if ($("#txtservicedetailReserve_phone").val().length >= 11)
                    getService_findDID();
            } else {
                getService_findDID();
            }

        }

    });
}
var getService_findDID = function () {
    if (validateFindDID()) {
        if ($("input[name=selectDID]:checked").val() == "did") {
            if ($("input[name='planfilter']:checked").data("value") == "F") {
                getAjaxFunc("/lookup/phonesearch?country=" + $("#optservicedetailDid_country").val() + "&city=" + $("#txtservicedetailDid_city").val() + "&phonenumber=" + $("#txtservicedetailDid_phone").val() + "&product_type=FREEFAX", setService_findDID, "");
            } else {
                getAjaxFunc("/lookup/phonesearch?country=" + $("#optservicedetailDid_country").val() + "&city=" + $("#txtservicedetailDid_city").val() + "&phonenumber=" + $("#txtservicedetailDid_phone").val() + "&product_type=UM", setService_findDID, "");
            }
        } else {
            getAjaxFunc("/lookup/phonesearch?phonenumber=" + $("#txtservicedetailReserve_phone").val() + "&reserve_flag=true", setService_findDID, "");
        }


    }
}
var validateFindDID = function () {
    $("#divServiceDidError").hide();
    if ($("input[name=selectDID]:checked").val() == "did") {
        if (!$('input[type=radio][name=planfilter]:checked').attr('id')) {
            $("#divServiceDidError").html("Please select Product Type").show();
            return false;
        }
        if ($("#optservicedetailDid_country").val() == "Select a country") {
            $("#divServiceDidError").html("Please select country").show();
            return false;
        }
        if (!$("#txtservicedetailDid_city").val().trim()) {
            $("#divServiceDidError").html("Please enter city or area code").show();
            return false;
        }
    } else {
        if (!$("#txtservicedetailReserve_phone").val().trim()) {
            $("#divServiceDidError").html("Please enter phonenumber").show();
            return false;
        }
    }

    return true;
}
var setService_findDID = function (data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data && data.phone && data.phone.length > 0) {
            var checkedDID_id = "";
            $("input[id*=chkService_findDID]").toArray()
                .reduce(function (t, element) {
                    if ($(element).is(":checked")) {
                        checkedDID_id = $(element).attr("id");
                    }
                }, "");
            if (checkedDID_id) {
                $("#" + checkedDID_id).trigger("click");
            }
            drawService_findDid(data.phone);
        } else {
            $("#tblISPSignupservice_Did > tbody").html("");
            $("#tblISPSignupservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">No DID(s) were Found</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPSignupservice_Did > tbody").html("");
            $("#tblISPSignupservice_Did").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=3 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=3 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        } else {
            $("#tblISPSignupservice_Did > tbody").html("");
            $("#tblISPSignupservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_findDid = function (data) {
    $("#tblISPSignupservice_Did > tbody").html("");
    $("#tblISPSignupservice_Did > thead > tr:first-child").removeClass();
    for (var i = 0; i < data.length; i++) {
        drawService_findDidRows(data[i], (i + 1));
    }
    onClickchkService_findDID();
    var tb = document.querySelectorAll("#tblISPSignupservice_Did tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPSignupservice_Did > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
}
function drawService_findDidRows(rowData) {

    var row = $("<tr>");
    $("#tblISPSignupservice_Did").append(row);

    if ($("input[name=selectDID]:checked").val() == "reserve") {
        row.append($("<td style=width:40%;>" + rowData.formatted_phone_number + "</td>"));
        row.append($("<td style=width:15%;text-align:center;>" + rowData.status + "</td>"));
        row.append($("<td style=width:30%;>" + rowData.phone_city + "</td>"));
        row.append($("<td style=width:15%;text-align:center;><input type=\"checkbox\" id=\"chkService_findDID" + rowData.phone_number + "\" data-phonecity=\"" + rowData.phone_city + "\" data-phonenumber=\"" + rowData.phone_number + "\" data-languagecode=\"" + rowData.default_language_code + "\" data-formattedphonenumber=\"" + rowData.formatted_phone_number + "\" /></td>"));

    } else {
        row.append($("<td style=width:45%;>" + rowData.formatted_phone_number + "</td>"));

        row.append($("<td style=width:40%;>" + rowData.phone_city + "</td>"));
        row.append($("<td style=width:15%;text-align:center;><input type=\"checkbox\" id=\"chkService_findDID" + rowData.phone_number + "\" data-phonecity=\"" + rowData.phone_city + "\" data-phonenumber=\"" + rowData.phone_number + "\" data-languagecode=\"" + rowData.default_language_code + "\" data-formattedphonenumber=\"" + rowData.formatted_phone_number + "\" /></td>"));

    }
    //row.append($("<td>" + rowData.formatted_phone_number + "</td>"));



}
var onClickchkService_findDID = function () {
    $("input[id*=chkService_findDID]").off("click").on("click", function (e) {
        // if (isInModificationMode && saveServiceDetailMode == addOrUpdate.update) {
        //     e.preventDefault();
        //     e.stopImmediatePropagation();
        //     showSimpleDialogTabChange(this.id);
        //     return false;
        // } else {
        if ($(this).is(":checked")) {
            $("input[id*=chkService_findDID]").not(this).attr("disabled", "disabled");
            if ($("#chkservicedetailIvoice_status_1").is(":checked")) {
                $("#optservicedetailIprimary_language").val($(this).data("languagecode"));
                //$("#optservicedetailIprimary_language").prop("disabled", true);
            }
            $("#txtservicedetailIcsid").val($(this).data("formattedphonenumber"));
            setTimeout(function (element) {
                element.removeAttr("disabled");
            }, 500, $(this));
            isInModificationMode = true;
        } else {
            $("input[id*=txtservicedetailI]").trigger("keyup");
            $("input[id*=chkService_findDID]").removeAttr("disabled");
            if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {
                $("#txtservicedetailIcsid").val(serviceCSID);
            } else {
                $("#txtservicedetailIcsid").val("");
            }
            isInModificationMode = false;
        }

        $("#optservicedetailIemail_addresses").trigger("change");

    });
}
//END: Select DID Sections







//START :Manage Number Activation tab
var togglehrefServiceNumberActivation = function () {

    if ($("input[name=servicesummaryfilter]:checked").val() != "inactive") {

        var isOneOrderedInboxServiceFound = false;
        $("a[id*=servicekey]").toArray().reduce(function (x, element) {
            var $element = $(element);
            if ($element.data("servicetype").toUpperCase() == "INBOX" && $element.data("servicestatus").toUpperCase() == "ORDERED") {
                isOneOrderedInboxServiceFound = true;
            }
        }, {});
        if (!isOneOrderedInboxServiceFound) {
            removeOnClickhrefServiceNumberActivation();
            if ($("#hrefServiceNumberActivation").attr("class") && $("#hrefServiceNumberActivation").attr("class").toUpperCase() == "ACTIVE") {
                $("#hrefServiceDetails").trigger("click");
                var navigateTo = $("#hrefServiceDetails").children().attr("href");
                $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
            }
        } else {
            bindOnClickhrefServiceNumberActivation();
        }
    }
    if ($("input[name=servicesummaryfilter]:checked").val() == "inactive") {
        setTimeout(function () {
            getAllService();
            setTimeout(function () {
                if (OrderServiceAvailable) {
                    bindOnClickhrefServiceNumberActivation();
                } else {
                    removeOnClickhrefServiceNumberActivation();
                }
            }, 500);
        }, 1000);


    }
}
var loadNumberActivation = function () {
    clearNumberActivationAllControls();
    getService_numberActivationSummary();
    toggleAllNumberActivationCotrols();
    onPastetxtservicenumber();
    onKeyUptxtservicenumber();
    setCurrencyCode();

    // button clicks
    onClickbtnService_skipactivate();
    onClickbtnService_chargeactivate();
}
function getTaxInformation(customerId) {
    //get and set headerinfo
    getAjaxFunc("/customers/" + customerId, setTaxInformation, "");
    $("#contact_summary").show();
}
function setTaxInformation(data, issuccess) {
    if (issuccess) {
        if (data.customer.details) {
            balance_payment_ppu = data.customer.details.price_per_unit;
            var taxrate = getTaxRate();
            // $("#txtservicenumber_taxamount").val(taxrate);
            if (balance_payment_ppu && balance_payment_ppu > 0) {
                tax_percentage = ((balance_payment_ppu - 1) * 100);
                $("label[for=txtservicenumber_taxamount]").html("Tax " + (tax_percentage.toFixed(0) == 0 ? ":" : tax_percentage.toFixed(0) + "% :"));
            }

        }
    }
}
var getService_numberActivationSummary = function () {
    getAjaxFunc("/customers/" + customerKey + "/services/activation_summary", setService_numberActivationSummary, "");
}

var validatePortingNumber = function () {
    getAjaxFunc("inventory/" + $('#txtcontactportingnumber').val() + "/portable", getPortingValidateRes, "");
}
var getPortingValidateRes = function (data, issuccess) {
    turnOffPortingDIDValidateErrors();
    if (issuccess) {
        if (data.result) {
            $("#validatePortingFlag").attr({ "class": "fa fa-check-circle-o" });
            $("#validatePortingFlag").css("color", "green");

        }
        else {
            $("#validatePortingFlag").attr({ "class": "fa fa-times-circle-o" });
            $("#validatePortingFlag").css("color", "red");
        }
        $("#validatePortingFlag").show();
    } else {
        $("#lblErrcontactPorting").html(data.responseJSON.errors[0].user_message);
        $("#lblErrcontactPorting").show();
        //$("#validatePortingFlag").attr({ "class": "fa fa-times-circle-o" });
        //$("#validatePortingFlag").css("color", "red");
        // $("#validatePortingFlag").show();
    }
}
var setService_numberActivationSummary = function (data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data && data.activation_summary && data.activation_summary.length > 0) {
            drawService_numberActivationSummary(data.activation_summary);
        } else {
            $("#tblISPnumberActivationSummary > tbody").html("");
            $("#tblISPnumberActivationSummary").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">No DID(s) were Found</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPnumberActivationSummary > tbody").html("");
            $("#tblISPnumberActivationSummary").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=3 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=3 style=\"width:90%\">" + data.responseJSON.errors[0].user_message + "</td>"));
            }
        } else {
            $("#tblISPnumberActivationSummary > tbody").html("");
            $("#tblISPnumberActivationSummary").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_numberActivationSummary = function (data) {
    $("#tblISPnumberActivationSummary > tbody").html("");
    $("#tblISPnumberActivationSummary > thead > tr:first-child").removeClass();
    prorated_recurring_fee_total = 0;
    for (var i = 0; i < data.length; i++) {
        drawService_numberActivationSummaryRows(data[i]);
    }
    setCurrentBillingCycleDates(data[0]);
    setProrationAmount(prorated_recurring_fee_total.toFixed(currency_decimalplaces));
    var tb = document.querySelectorAll("#tblISPnumberActivationSummary tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPnumberActivationSummary > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
}
function drawService_numberActivationSummaryRows(rowData) {
    var row = $("<tr>");
    $("#tblISPnumberActivationSummary").append(row);
    row.append($("<td>" + rowData.service_id + "</td>"));
    row.append($("<td>" + rowData.service_description + "</td>"));
    row.append($("<td>" + rowData.service_type + "</td>"));
    row.append($("<td  class=\"pull-right\">" + (rowData.activation_fee_formatted) + "</td>"));
    row.append($("<td  class=\"pull-right\">" + (rowData.recurring_fee_formatted) + "</td>"));
    row.append($("<td  class=\"pull-right\">" + (rowData.prorated_recurring_fee_formatted) + "</td>"));
    row.append($("<td  class=\"pull-right\">" + (rowData.item_total_formatted) + "</td>"));
    prorated_recurring_fee_total += rowData.item_total;
}
function setCurrentBillingCycleDates(data) {
    $("#txtservicenumber_startdateofperiod").val(data.start_date_of_period);
    $("#txtservicenumber_enddateofperiod").val(data.end_date_of_period);
    $("#txtservicenumber_daysinperiod").val(data.active_days_in_period + " / " + data.total_days_in_period);
    if ($("#txthdrtotal_main_balance").val().indexOf("(") > -1) {
        $("#txtservicenumber_availablecredit").val(Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, "")));
    } else {
        $("#txtservicenumber_availablecredit").val("0.00");
    }

}

var setProrationAmount = function (prorated_recurring_fee_total) {
    $("#txtservicenumber_prorationamount").attr("disabled", "disabled");
    $("#txtservicenumber_prorationamount").val(prorated_recurring_fee_total);
    calculations_of_numberActivation();
    $("#txtservicenumber_lessappliedcredit,#txtservicenumber_additionalUsageBalance").trigger("change");
}
var toggleAllNumberActivationCotrols = function () {
    $("#txtservicenumber_startdateofperiod,#txtservicenumber_enddateofperiod,#txtservicenumber_daysinperiod,#txtservicenumber_prorationamount,#txtservicenumber_subtotal,#txtservicenumber_taxamount,#txtservicenumber_amountpayable,#txtservicenumber_finalamount,#txtservicenumber_availablecredit").attr("disabled", "disabled");
}

var clearNumberActivationAllControls = function () {
    $("input[id*=txtservicenumber_").val("");
}
var onKeyUptxtservicenumber = function () {
    $("#txtservicenumber_lessappliedcredit,#txtservicenumber_additionalUsageBalance").attr({ "pattern": "/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/" });
    /* $("#txtservicenumber_lessappliedcredit").off("keypress").on("keypress", function (event) {

         if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
             (event.keyCode == 65 && event.ctrlKey === true) ||
             (event.keyCode >= 35 && event.keyCode <= 39)) {
             return true;
         }

         if ($(this).val().length >= 9) {
             $(this).val($(this).val().substring(0, 9));
         }
         return isDecimal(event) && ($(this).val().length >= 9 ? false : true)
     });*/
    $("#txtservicenumber_additionalUsageBalance").off("keypress").on("keypress", function (event) {
        // Allow: backspace, delete
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return true;
        }
        if ($(this).val().length >= 9) {
            $(this).val($(this).val().substring(0, 9));
        }

        return isDecimal(event) && ($(this).val().length >= 9 ? false : true)
    });
    // TextLimit($("#txtservicenumber_lessappliedcredit"), 7);
    // TextLimit($("#txtservicenumber_additionalUsageBalance"), 7);
    $("#txtservicenumber_additionalUsageBalance").off("input propertychange").on("input propertychange", function (e) {
        calculations_of_numberActivation();
        /*if ($("#txtservicenumber_additionalUsageBalance").val() != "0.00" && $("#txtservicenumber_additionalUsageBalance").val() != "") {
            $("#txtservicenumber_subtotal").val(parseFloat($("input[id*=chkService_findOC]:checked").data("totalamount") + parseFloat($("#txtservicenumber_additionalUsageBalance").val())).toFixed(currency_decimalplaces));
            $("#txtservicenumber_finalamount").val(parseFloat($("input[id*=chkService_findOC]:checked").data("totalamount") + parseFloat($("#txtservicenumber_additionalUsageBalance").val())).toFixed(currency_decimalplaces));

        } else {
            $("#txtservicenumber_subtotal").val(parseFloat($("input[id*=chkService_findOC]:checked").data("totalamount")).toFixed(currency_decimalplaces));
            $("#txtservicenumber_finalamount").val(parseFloat($("input[id*=chkService_findOC]:checked").data("totalamount")).toFixed(currency_decimalplaces));
        }

         var $taxamount = $("#txtservicenumber_taxamount");
        if (balance_payment_ppu && balance_payment_ppu > 0) {
            tax_percentage = ((balance_payment_ppu - 1) * 100);
            $("label[for=txtservicenumber_taxamount]").html("Tax " + (tax_percentage.toFixed(0) == 0 ? ":" : tax_percentage.toFixed(0) + "% :"));
        }
        var $additionalUsageBalanceval = parseFloat($additionalUsageBalance.val()) ? parseFloat($additionalUsageBalance.val()) : parseFloat(0);
        //$additionalUsageBalance.val($additionalUsageBalanceval.toFixed(2));
        $subtotal.val((parseFloat($prorationAmount.val()) + $additionalUsageBalanceval).toFixed(currency_decimalplaces));
        if (tax_percentage) {
            $taxamount.val((parseFloat($subtotal.val()) * tax_percentage / 100).toFixed(currency_decimalplaces));
        } else {
            $taxamount.val("0.00");
        }*/

    });
    /*$("#txtservicenumber_lessappliedcredit").off("keyup").on("keyup", function (e) {
        var max_credit = parseFloat($("#txtservicenumber_availablecredit").val());
        var paid_amount = parseFloat($("#txtservicenumber_amountpayable").val());
        if (parseFloat($(this).val()) > paid_amount) {
            $(this).val(paid_amount);
        }
        if (parseFloat($(this).val()) > max_credit) {
            $(this).val(max_credit);
        }
        setTimeout(calculations_of_numberActivation, 300);
    });
    $("#txtservicenumber_lessappliedcredit").off("change").on("change", function (e) {
        var $lessappliedcredit = $("#txtservicenumber_lessappliedcredit");
        // console.log(".length :: " + $lessappliedcredit.val().length);
        var $lessappliedcreditval = parseFloat($lessappliedcredit.val()) ? parseFloat($lessappliedcredit.val()) : parseFloat(0);
        $lessappliedcredit.val($lessappliedcreditval.toFixed(currency_decimalplaces));
        var nArray = $lessappliedcredit.val().split('.');
        if (nArray[0].length > 6) {
            // console.log("nArray[0] substring :: " + nArray[0].substring(0, 6));
            nArray[0] = nArray[0].substring(0, 6);
            $lessappliedcredit.val(nArray[0] + "." + nArray[1]);
        }

    });*/
    $("#txtservicenumber_additionalUsageBalance").off("change").on("change", function (e) {
        turnoffChargeActivateErrorMsg();
        var $additionalUsageBalance = $("#txtservicenumber_additionalUsageBalance");
        var $additionalUsageBalanceval = parseFloat($additionalUsageBalance.val()) ? parseFloat($additionalUsageBalance.val()) : parseFloat(0);
        $additionalUsageBalance.val($additionalUsageBalanceval.toFixed(currency_decimalplaces));
        var nArray = $additionalUsageBalance.val().split('.');
        if (nArray[0].length > 6) {
            //console.log("nArray[0] substring :: " + nArray[0].substring(0, 6));
            nArray[0] = nArray[0].substring(0, 6);
            $additionalUsageBalance.val(nArray[0] + "." + nArray[1]);
        }
        if ( ($("#txtservicenumber_prorationamount").val() >=1 || $("#txtservicenumber_additionalUsageBalance").val() > 0) && $("#optbillpaymentcollection_methods").val() == "D") {
                    $("#CCDivDirectDebit").show();
                    /// $("#chargebtnwithoutcc").hide();
                    //  $("#chargebtnwithcc").show();
                    if($("#optbillpaymentcollection_methods").val()!='B'){
                        $("#btnService_chargeactivate").val("Charge/Activate");
                    }else{
                        $("#btnService_chargeactivate").val("      Activate      ");
                    }
                     
                    $("#CCDivDirectDebit").append($('#CCDiv').detach());
                    $('#CCDiv').show();
                     $("#billingmsgtxt").hide();
                     $("#txtbillpaymentbillingnoDiv").hide();
                     $("#divRequiredBillingno").hide();
                     $("#txtbillpaymentbillingno").removeAttr("required");
                    
                    //$("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods").val("");
                   // $("#optbillpaymentexpiration_month").val("JAN");
                   
                     $("#imgbilldiv_block").show();
                    $("#CCDiv").find("input, button, submit, textarea, select").not("#btnSaveContactBillinginfo").removeAttr("disabled", "disabled");
        }
        if ($("#txtservicenumber_additionalUsageBalance").val() <=0 && $("#optbillpaymentcollection_methods").val() == "D" && $("#txtservicenumber_prorationamount").val() <=0) {
                    $("#CCDivDirectDebit").hide();
                    $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods").val("");
                    /// $("#chargebtnwithoutcc").hide();
                    //  $("#chargebtnwithcc").show();
                   // $("#CCDiv").append($('#CCDivDirectDebit').detach());
                  
                    $("#btnService_chargeactivate").val("      Activate      ");
                    $("#CCParentDiv").append($('#CCDiv').detach());
                    $("#CCDiv").hide();
                    $("#txtbillpaymentbillingnoDiv").show();
                    $("#divRequiredBillingno").show();
                    $("#txtbillpaymentbillingno").attr({ "required": "required" });
        }

    });
}
var onPastetxtservicenumber = function () {
    $("#txtservicenumber_additionalUsageBalance").off("paste").on("paste", function (e) {
        setTimeout(function () {
            var $additionalUsageBalance = $("#txtservicenumber_additionalUsageBalance");
            if ($additionalUsageBalance.val().length >= 9) {
                $additionalUsageBalance.val($additionalUsageBalance.val().substring(0, 9));
            }
            onchangeOnlyNumeric_firstCheck("#txtservicenumber_additionalUsageBalance");
        }, 100);
    });
    $("#txtservicenumber_lessappliedcredit").off("paste").on("paste", function (e) {
        setTimeout(function () {
            var $lessappliedcredit = $("#txtservicenumber_lessappliedcredit");
            if ($lessappliedcredit.val().length >= 9) {
                $lessappliedcredit.val($lessappliedcredit.val().substring(0, 9));
            }
            onchangeOnlyNumeric_firstCheck("#txtservicenumber_lessappliedcredit");
        }, 100);
    });
    $("#txtservicenumber_lessappliedcredit,#txtservicenumber_additionalUsageBalance").on("contextmenu", function () {
        return false;
    });
}
var calculations_of_numberActivation = function () {
    var $prorationAmount = $("#txtservicenumber_prorationamount");

    var $additionalUsageBalance = $("#txtservicenumber_additionalUsageBalance");

    var $subtotal = $("#txtservicenumber_subtotal");
    var $taxamount = $("#txtservicenumber_taxamount");
    var $amountpayable = $("#txtservicenumber_finalamount");

    var $lessappliedcredit = $("#txtservicenumber_lessappliedcredit");

    var $finalamount = $("#txtservicenumber_finalamount");

    //get tax percentage from ppu.

    if (balance_payment_ppu && balance_payment_ppu > 0) {
        tax_percentage = ((balance_payment_ppu - 1) * 100);
        $("label[for=txtservicenumber_taxamount]").html("Tax " + (tax_percentage.toFixed(0) == 0 ? ":" : tax_percentage.toFixed(0) + "% :"));
    }
    var $additionalUsageBalanceval = parseFloat($additionalUsageBalance.val()) ? parseFloat($additionalUsageBalance.val()) : parseFloat(0);
    //$additionalUsageBalance.val($additionalUsageBalanceval.toFixed(2));
    $subtotal.val((parseFloat($prorationAmount.val()) + $additionalUsageBalanceval).toFixed(currency_decimalplaces));
    if (tax_percentage) {
        $taxamount.val((parseFloat($subtotal.val()) * tax_percentage / 100).toFixed(currency_decimalplaces));
    } else {
        $taxamount.val("0.00");
    }
    $amountpayable.val((parseFloat($subtotal.val()) + parseFloat($taxamount.val())).toFixed(currency_decimalplaces));
    var $lessappliedcreditval = parseFloat($lessappliedcredit.val()) ? parseFloat($lessappliedcredit.val()) : parseFloat(0);
    //$lessappliedcredit.val($lessappliedcreditval.toFixed(2));
    $finalamount.val((parseFloat($amountpayable.val())).toFixed(currency_decimalplaces));
    // togglevalueofbtnService_chargeactivate((parseFloat($finalamount.val()) > 0));
    // togglebtnService_skipactivate((parseFloat($finalamount.val()) > 0));

    var paid_amount = parseFloat($("#txtservicenumber_amountpayable").val());
    if (parseFloat($("#txtservicenumber_lessappliedcredit").val()) > paid_amount) {
        $("#txtservicenumber_lessappliedcredit").val(paid_amount);
        $("#txtservicenumber_lessappliedcredit").trigger("keyup");
    }
}

var togglevalueofbtnService_chargeactivate = function (isFinalAmountGreaterThanZero) {
    if (isFinalAmountGreaterThanZero && $("#optbillpaymentcollection_methods").val()!='B') {
        $("#btnService_chargeactivate").val("Charge/Activate");
    } else {
        $("#btnService_chargeactivate").val("      Activate      ");
    }
}
var togglebtnService_skipactivate = function (isFinalAmountGreaterThanZero) {
    if (isFinalAmountGreaterThanZero) {
        hrefServiceNumberActivationSkipActivate(permissionArray.filter(function (x) { return x.id == "ActivationSkipActivate" })[0].hasRights);
    } else {
        $("#btnService_skipactivate").prop("disabled", true);
        $("#btnService_skipactivate").removeClass("grey-btn").addClass("disabled");
    }
}



var showSimpleDialogForNewSingUp = function () {
    var htmlcontent = "<p align='center'>Creating New Account in progress - You will lose all the data would you like to proceed?</p><p align='center'>	<br />	<button class='btn' onclick='resetSignup(); window.parent.sd.hide(); return false;'>Yes</button><button class='btn' onclick='window.parent.sd.hide(); return false;'>No</button> </p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}
var showSimpleDialogForDDNewSingUp = function () {
    var htmlcontent = "<p align='center'>Mandate details are incomplete. Do you want to continue with New Sign up?</p><p align='center'>	<br />	<button class='btn' onclick='resetSignup(); window.parent.sd.hide(); return false;'>Yes</button><button class='btn' onclick='window.parent.sd.hide(); return false;'>No</button> </p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSimpleDialogForConfirmCheckForAuddis = function () {
    var htmlcontent = "<p align='left'>Read Terms and Conditions In the future if there is a change to the date, amount or frequency of your Direct Debit, we will always give you 10 working days’ notice in advance of your account being debited. In the event of an error, you are entitled to an immediate refund from your bank or building society. You have the right to cancel at any time and this guarantee is offered by all the banks and building societies that accept instructions to pay Direct Debits. A copy of the safeguards under the Direct Debit Guarantee will be sent to you with our confirmation letter. That completes the setting up of your Direct Debit Instruction.</p><p align='center'>	<br />	<button class='btn' onclick=' window.parent.sd.hide(); return false;'>Close</button></p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSimpleDialogForConfirmCheckForSEPA = function () {
    var htmlcontent = "<p align='left'>Read Terms and Conditions We hereby confirm you have authorized j2 Global®, as a participant of the SEPA Scheme, to process and present Direct Debit instructions to your bank electronically. In the future if there is a change to the date, amount or frequency of your Direct Debit, we will always give you 10 working days’ notice in advance of your account being debited. In the event of an error, you are entitled to an immediate refund from your bank or building society. You have the right to cancel at any time and this guarantee is offered by all the banks and building societies that accept instructions to pay SEPA Direct Debits. A copy of the SEPA Direct Debit Instruction will be sent to you with our confirmation letter. That completes the setting up of your SEPA Direct Debit Instruction.</p><p align='center'>	<br />	<button class='btn' onclick=' window.parent.sd.hide(); return false;'>Close</button></p>"

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var onClickbtnService_startnewsignup = function () {
    $("#btnService_startnewsignup").off("click").on("click", function () {
        $("#optportingcountry").val("Select");
        $("#optportingstate").val("Select");
        if(isAccountActivate && customerKey){
            showSimpleDialogForDDNewSingUp();
        }else{
            showSimpleDialogForNewSingUp();
        }
      

    });
}
var onClickbtnService_mandate_startnewsignup = function () {
    $("#btnService_mandate_startnewsignup").off("click").on("click", function () {
        $("#optportingcountry").val("Select");
        $("#optportingstate").val("Select");
        if(isAccountActivate && customerKey){
            showSimpleDialogForDDNewSingUp();
        }else{
            showSimpleDialogForNewSingUp();
        }
      

    });
}

var turnoffChargeActivateErrorMsg = function () {
    $("#divServiceActivateMainError").hide();
    $("#divServiceActivateCCDeclineMainError").hide();
    $("#divServiceActivateMainSuccess").hide();
    
}
var hideBtnRefresh = function(){
    $("#btnMandateRefresh").hide();
    $("#lblMandateRefreshMsg").hide();
}
//charge/payment in number activation tab.
var onClickbtnService_chargeactivate = function () {
    $("#btnService_chargeactivate").off("click").on("click", function () {
        turnoffChargeActivateErrorMsg();

        if($("#txtcontactcollection_method").val() == "D" && $("#txtservicenumber_finalamount").val()>0){
                if(validateBillingPaymentForm()){
                    {
                        
                        var objNumber_activation = new Object();
                        objNumber_activation.usage_balance = ($("#txtservicenumber_additionalUsageBalance").val() ? $("#txtservicenumber_additionalUsageBalance").val() : 0);
                        objNumber_activation.less_applied_credit = 0;
                        objNumber_activation.credit_card = new Object();
                        var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods");
                        txtbillpayment.each(function () {
                            var attrid = $(this).attr("id");
                            var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
                                objNumber_activation.credit_card[propname] = ($(this).val() === "" ? null : $(this).val());

                        });

                        postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=false", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");
                 }
                }
        }else{
                        var objNumber_activation = new Object();
                        objNumber_activation.usage_balance = ($("#txtservicenumber_additionalUsageBalance").val() ? $("#txtservicenumber_additionalUsageBalance").val() : 0);
                        objNumber_activation.less_applied_credit = 0;
                        postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=false", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");

        }
       

      

    });
}
var onClickbtnService_skipactivate = function () {
    $("#btnService_skipactivate").off("click").on("click", function () {
        turnoffChargeActivateErrorMsg();
        
        var objNumber_activation = new Object();
        objNumber_activation.usage_balance = ($("#txtservicenumber_additionalUsageBalance").val() ? $("#txtservicenumber_additionalUsageBalance").val() : 0);
        objNumber_activation.less_applied_credit = ($("#txtservicenumber_lessappliedcredit").val() ? $("#txtservicenumber_lessappliedcredit").val() : 0);

        /* if ($("#txtcontactportingnumber").val()) {
             if (!isPortingSaved) {
                 showSimpleDialogForPorting();
             } else {
                 postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=true", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");
             }
         } else {*/
        postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=true", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");

        //}
    });
}

//Direct Debit
function getDDCountryOptionSet() {
    //var getFromLocalStorage = getLocalStorageOptionSetData("countries");
    //if (getFromLocalStorage === "") {
    getAjaxFunc("lookup/countries?currency_code=" + $("#txtcontactcurrency_code").val(), setDDCountryOptionSetsFunc, "");
    // }
    //else {
    //    setCountryOptionSetsFunc(getFromLocalStorage, true);
    //}
}

function setDDCountryOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.countries) {

            setOptionSetsForceDefaultValue(data.countries, "#optdirectdebitbank_country", "Select Any Country", "code", "name", "Select Any Country");
        }
    }
}

function getDirectDebitGrid() {

    getAjaxFunc("customers/" + customerKey + "/direct_debits", setDirectDebitGrid, "");
    //getAjaxFunc("lookup/creditcardtypes", setCreditCardTypesToGlobal, "");
}

function setDirectDebitGrid(data, issuccess) {
    
    if (issuccess) {
        if (data.direct_debits) {
            //drawDirectDebitTable(data.direct_debits);
            if (data.direct_debits.length > 0) {
                $("#txtdirectdebitbank_name").attr('data-original-title', "Length must be up to 35 characters long");
                
                isMandateRecordAvailable = true;
                //AUDDIS Mandate
                if ($("#optcontactcurrency").val() == "GBP") {
                    $("#txtdirectdebitbankaccount_numberlabel").text("Bank Account Number:");
                    $("#txtdirectdebitsort_codelabel").text("Sort Code:");
                    $("#sortcoderequired").addClass("requiredBlock");
                    $("#txtdirectdebitsort_code").attr("required","required");
                    $("#SwiftCodeDiv").hide();
                    $("#CleRIBDiv").hide();
                    $("#txtdirectdebitbankaccount_number").attr('data-original-title', "If needed, add Zeros in the starting of account number to make it 8 digits long");
                    $("#txtdirectdebitsort_code").attr('data-original-title', "If needed, add Zeros in the starting of sort code to make it 6 digits long");
                    $("#txtdirectdebitholder_name2").attr('data-original-title', "Length must be up to 18 characters long");
                    $("#txtdirectdebitholder_name2").attr('maxlength', 18);
                    $("#txtdirectdebitbankaccount_number").attr('maxlength', '8');
                    $("#txtdirectdebitsort_code").attr('maxlength', '6');
                    allowOnlyDigit("txtdirectdebitbankaccount_number");
                    allowOnlyDigit("txtdirectdebitsort_code");
                }
                //SEPA mandate
                if ($("#optcontactcurrency").val() == "EUR") {
                    $("#txtdirectdebitbankaccount_numberlabel").text("IBAN:");
                    $("#txtdirectdebitsort_codelabel").text("BIC:");
                    $("#txtdirectdebitsort_code").attr("required","required");
                    $("#SwiftCodeDiv").hide();
                    $("#CleRIBDiv").hide();
                    $("#sortcoderequired").addClass("requiredBlock");
                    onChangeoptdirectdebitbank_country();
                    $("#txtdirectdebitbankaccount_number").attr('data-original-title', "Length must be up to 34 characters. Must allow only alphanumeric");
                    $("#txtdirectdebitsort_code").attr('data-original-title', "Length must be either 8 or 11 characters with first 6 letters must be alphabets. Must allow only alphanumeric");
                    $("#txtdirectdebitholder_name2").attr('data-original-title', "Length must be up to 35 characters long");
                    $("#txtdirectdebitholder_name2").attr('maxlength', 35);
                    $("#txtdirectdebitbankaccount_number").attr('maxlength', '34');
                    $("#txtdirectdebitsort_code").attr('maxlength', '11');
                    allowAlphaNumeric("#txtdirectdebitbankaccount_number");
                    validatetxtdirectdebitsortcode("#txtdirectdebitsort_code");
                    onPastetxtdirectdebitbankaccount_number();
                    onPastetxtdirectdebitsort_code();
                }
                //JAPAN
                if ($("#optcontactcurrency").val() == "JPY") {
                    $("#mandateleftsection").append($('#bankacnumberdiv').detach());
                    $("#sortcoderequired").removeClass("requiredBlock");
                    $("#txtdirectdebitsort_code").removeAttr("required");
                    $("#txtdirectdebitswiftcode").attr("required","required");
                    $("#swiftcoderequired").addClass("requiredBlock");
                    $("#SwiftCodeDiv").show();
                    $("#CleRIBDiv").show();
                    $("#txtdirectdebitbankaccount_numberlabel").text("Bank Account Number:");
                    $("#txtdirectdebitsort_codelabel").text("Sort Code:");
                    onChangeoptdirectdebitbank_country();
                    $("#txtdirectdebitbankaccount_number").attr('data-original-title', "Length must be up to 15 characters long");
                    $("#txtdirectdebitsort_code").attr('data-original-title', "");
                    $("#txtdirectdebitsort_code").attr('data-original-title', "");
                    $("#txtdirectdebitholder_name2").attr('data-original-title', "Length must be up to 18 characters long");
                    $("#txtdirectdebitswiftcode").attr('data-original-title', "Length must be up to 8 characters long");
                    $("#txtdirectdebitholder_name2").attr('maxlength', 18);
                     $("#txtdirectdebitbankaccount_number").attr('maxlength', '15');
                     $("#txtdirectdebitswiftcode").attr('maxlength', '8');
                     $("#txtdirectdebitsort_code").attr('maxlength', '60');
                     $("#txtdirectdebitcle_code").attr('maxlength', '2');
                     directDebitBankAccountNumberValidation("#txtdirectdebitbankaccount_number");
                     $("#txtdirectdebitbankaccount_number").css('text-transform','none');
                     //validatetxtdirectdebitsortcode("#txtdirectdebitsort_code");
                     allowAlphaNumericWithSpace("#txtdirectdebitswiftcode");
                     //onPastetxtdirectdebitbankaccount_number();
                     onPastetxtdirectdebitsort_code();
                     triggerToolTipForDD();
                }
                $("#btnSaveMandate").show();
                $("#mandatedtlsdiv").show();
                $("#btnMandateRefresh").hide();
                 $("#nomandatemsg").hide();//end_date
                mandateToDate= data.direct_debits[0].end_date;
                getAjaxFunc("customers/" + customerKey + "/direct_debits/" + data.direct_debits[0].direct_debit_key, setDirectDebitDetails, "");



            } else {
                isMandateRecordAvailable = false;
                if ($("#txtcontactcollection_method").val() == 'D') {
                     $("#mandatedtlsdiv").hide();
                     $("#btnMandateRefresh").show();
                     $("#nomandatemsg").show();
                     $("#lblMandateRefreshMsg").show();
                     $("#btnSaveMandate").hide();
                }

               

                //$("#lblMandate").text("Load Customer in the ZUMA application, retrieve account information and set up first mandate.");
               

            }
            $('[data-toggle="tooltipformandaterefresh"]').tooltip({ trigger: "hover" });



        }
        
    }
    else {
        if (!CancelRequest) {
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=5 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=5 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
        }
        else {
            newrow.append($("<td colspan=5 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}

function allowAlphaNumeric(textbox) {
      $(textbox).keypress(function(e)
      {
             var k;
             k=e.which;//document.all ? k=e.keycode : k=e.which;
            return((k>47 && k<58)||(k>64 && k<91)||(k>96 && k<123)||k==0 ||  k === 8 || k === 46);
      });
  };
function validatetxtdirectdebitsortcode(textbox) {

      $(textbox).keypress(function(e)
      {
       //   var newStr=$(textbox).val().substring(0, 6).replace(/[^A-Za-z_\s]/,'');
          //var oldStr= $("#txtdirectdebitsort_code").val().substring(6, 11);

         // $(textbox).val(newStr.concat(oldStr));
          
             var k;
            k=e.which;//document.all ? k=e.keycode : k=e.which || e.keycode;
            return((k>47 && k<58)||(k>64 && k<91)||(k>96 && k<123)||k==0 ||  k === 8 || k === 46);
          
         
       
      });
  };


var onPastetxtdirectdebitbankaccount_number = function () {  
    $("#txtdirectdebitbankaccount_number").off("paste").on("paste", function (e) {
        setTimeout(function () {
             $("#txtdirectdebitbankaccount_number").val($("#txtdirectdebitbankaccount_number").val().replace(/\s/g, ''));
        }, 100);
          
     
    });
}
var onPastetxtdirectdebitsort_code = function () {  
    $("#txtdirectdebitsort_code").off("paste").on("paste", function (e) {
        setTimeout(function () {
              $("#txtdirectdebitsort_code").val($("#txtdirectdebitsort_code").val().replace(/\s/g, ''));
        }, 100);
          
     
    });
}
function getMandateStatusOptionSetsFunc() {
    // var getFromLocalStorage = getLocalStorageOptionSetData("mandatestatus");
    //  if (getFromLocalStorage === "") {
    getAjaxFunc("/lookup/mandate_statuses?dd_scheme=" + $("#optdirectdebitDD_scheme").val(), setMandateStatusOptionSetsFunc, "");
    /// }
    // else {
    //     setMandateStatusOptionSetsFunc(getFromLocalStorage, true, "");
    //  }
}
function setMandateStatusOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.mandate_statuses) {
            //  if (getLocalStorageOptionSetData("mandatestatus") === "") {
            setLocalStorageOptionSetData("mandatestatus", data);
            // }
            setOptionSets(data.mandate_statuses, "#optdirectdebitstatus", "", "status", "description", true);
        }
    }
}
var setDirectDebitDateTimePicker = function (textboxID) {
    $("#" + textboxID).removeAttr("disabled").daterangepicker({
        showDropdowns: true,
        linkedCalendars: false,
        autoApply: false,
        opens: "left",
        singleDatePicker: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker24Hour: false,
        "timePickerSeconds": false,
        applyClass: "grey-btn",
        cancelClass: "grey-btn",
        maxDate: moment(),
        locale: {
            format: 'MM/DD/YYYY'
        }


    }, function (start) {
        $('#txtdirectdebitmandate_Date').data('daterangepicker').maxDate = moment();

        //console.log("dateset");
    });


    $("#" + textboxID).on('apply.daterangepicker', function (ev, picker) {
        // isCloseDateApplied = true;
        $(this).val(picker.startDate.format('MM/DD/YYYY'));
        closeDateval = picker.startDate.format('MM/DD/YYYY');
        $("#txtdirectdebitmandate_Date").trigger("change");
    });

    $("#" + textboxID).on('cancel.daterangepicker', function (ev, picker) {
        // isCloseDateApplied = false;
        $(this).val('');
        closeDateval = '';
    });

    $("#" + textboxID).on('hide.daterangepicker', function (e) {
        //console.log("hide");
        // setTimeout(function () {
        //  if (!isCloseDateApplied) {

        $("#txtdirectdebitmandate_Date").val(closeDateval);
        $("#txtdirectdebitmandate_Date").trigger("change");
        // }
        //  }, 500);

    });


}
function setDirectDebitDetails(data, issuccess) {
    if (issuccess) {
        if (data.direct_debit) {

             callPermissionAPI(["hrefBilling_payments"]);
            $("#txtdirectdebitcustomer_currency").val($("#optcontactcurrency option:selected").text());
            if (data.direct_debit.dd_scheme) {
                $("#optdirectdebitDD_scheme").val(data.direct_debit.dd_scheme);
            } else {
                var ddscheme = getLocalStorageOptionSetData("DDscheme");
                if (ddscheme && ddscheme.direct_debit_scheme.length > 0) {
                    for (var i = 0; i < ddscheme.direct_debit_scheme.length; i++) {
                        if (ddscheme.direct_debit_scheme[i].is_default) {
                            $("#optdirectdebitDD_scheme").val(ddscheme.direct_debit_scheme[i].scheme_code);
                        }
                    }
                }
            }
            if(!$("#optdirectdebitDD_scheme").val() ){
                 if ($("#optcontactcurrency").val() == "EUR") {
                        $("#optdirectdebitDD_scheme").val("SEPA");
                } 
                 if($("#optcontactcurrency").val() == "GBP"){
                        $("#optdirectdebitDD_scheme").val("AUDS");
                } 
                 if($("#optcontactcurrency").val() == "JPY"){
                        $("#optdirectdebitDD_scheme").val("DOMS");
                }
            }
            getMandateStatusOptionSetsFunc();
            setTimeout(function () {
                if ($("#optcontactcurrency").val() == "GBP") {
                    if (data.direct_debit.country == "ZZ") {
                        $("#optdirectdebitbank_country").val("GB");
                    } else {
                        $("#optdirectdebitbank_country").val(data.direct_debit.country);
                    }
                } 
                 if ($("#optcontactcurrency").val() == "EUR"){
                    if (data.direct_debit.country == "ZZ") {
                        $("#optdirectdebitbank_country").val("Select Any Country");
                    } else {
                        $("#optdirectdebitbank_country").val(data.direct_debit.country);
                    }
                }
                 if ($("#optcontactcurrency").val() == "JPY"){
                    if (data.direct_debit.country == "ZZ") {
                        $("#optdirectdebitbank_country").val("JP");
                    } else {
                        $("#optdirectdebitbank_country").val(data.direct_debit.country);
                    }
                }

                
                setCustomerNameForDD();

                $("#txtdirectdebitholder_name2").val(data.direct_debit.account_holder_name);
                $("#txtdirectdebitholder_email").val(data.direct_debit.account_holder_email ? data.direct_debit.account_holder_email : $("#txtcontactemail_address").val());
                $("#txtdirectdebitbank_name").val(data.direct_debit.bank_name);
                if ($("#optcontactcurrency").val() == "EUR") {
                    $("#txtdirectdebitbankaccount_number").val(data.direct_debit.iban);
                    $("#txtdirectdebitsort_code").val(data.direct_debit.bic); //BIC
                    $("#optdirectdebitstatus").val(data.direct_debit.status);
                    if (!$("#optdirectdebitstatus").val()) {
                        $("#optdirectdebitstatus").val("FIRST");
                    }
                }
                 if($("#optcontactcurrency").val() == "GBP"){
                    $("#txtdirectdebitbankaccount_number").val(data.direct_debit.account_number);
                    $("#txtdirectdebitsort_code").val(data.direct_debit.sort_code); //BIC

                    $("#optdirectdebitstatus").val(data.direct_debit.status);
                    if (!$("#optdirectdebitstatus").val()) {
                        $("#optdirectdebitstatus").val("DDI0N");
                    }
                }
                 if($("#optcontactcurrency").val() == "JPY"){
                    $("#txtdirectdebitbankaccount_number").val(data.direct_debit.account_number);
                    $("#txtdirectdebitsort_code").val(data.direct_debit.sort_code); //BIC
                    $("#txtdirectdebitswiftcode").val(data.direct_debit.bic);
                    $("#txtdirectdebitcle_code").val(data.direct_debit.cle_rib);
                    $("#optdirectdebitstatus").val(data.direct_debit.status);
                }

                $("#txtdirectdebitmandate_ID").val(data.direct_debit.mandate_id);

                $("#txtdirectdebitmandate_to_Date").val(mandateToDate);

                data.direct_debit.mandate_date ? $("#txtdirectdebitmandate_Date").val(data.direct_debit.mandate_date) : "";
                $("#txtdirectdebitlast_date").val(data.direct_debit.modified_on);
                $("#txtdirectdebitmodified_user").val(data.direct_debit.modified_user);
                $("#txtmandateversion").val(data.direct_debit.version);
                $("#txthiddendirectdebitkey").val(data.direct_debit.direct_debit_key);
                onClickbtnAddMandate();
               
            }, 1500);


        }
    }
}

var setCustomerNameForDD = function () {
    if ($("#txtcontactlast_name").val() && $("#txtcontactfirst_name").val()) {
        $("#txtdirectdebitCustomer_name").val($("#txtcontactlast_name").val() + ", " + $("#txtcontactfirst_name").val());
        $("#txtdirectdebitholder_name1").val($("#txtcontactlast_name").val() + ", " + $("#txtcontactfirst_name").val());
    }
    if (!$("#txtcontactlast_name").val() && $("#txtcontactfirst_name").val()) {
        $("#txtdirectdebitCustomer_name").val($("#txtcontactfirst_name").val());
        $("#txtdirectdebitholder_name1").val($("#txtcontactfirst_name").val());
    }
    if ($("#txtcontactlast_name").val() && !$("#txtcontactfirst_name").val()) {
        $("#txtdirectdebitCustomer_name").val($("#txtcontactlast_name").val());
        $("#txtdirectdebitholder_name1").val($("#txtcontactlast_name").val());
    }
}
function turnoffMandateError() {
    $("input[id*=txtdirectdebit]").removeClass("error");
    $("div[id*=lblErrdirectdebit]").hide();
    $("#divDirectDebitMainError").hide();
    $("#divDirectDebitMainSuccess").hide();
    $("#divspace").html("");
    $("#divspace").hide();
}

function validateMandateForm() {
    turnoffMandateError();
    var txtMandate = $("input[id*=txtdirectdebit]");
    mandateHasError = false;
    txtMandate.each(function () {
        $(this).val($.trim($(this).val()));
        if (!this.checkValidity()) {
            mandateHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "");
            if (errorsMandate["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsMandate["err" + lblid]).show();
            }

            if (lblid == "directdebitholder_email") {
                if ($(this).val() != "") {
                    $("div[id=lblErr" + lblid + "]").html(errorsMandate["errdirectdebitholder_emailInvalid"]).show();
                }
                else {
                    $("div[id=lblErr" + lblid + "]").html(errorsMandate["errdirectdebitholder_email"]).show();
                }
            }

        }
    });

    if ($("#txtdirectdebitholder_email").val()) {
        if (!isValidEmailAddress($("#txtdirectdebitholder_email").val())) {
            mandateHasError = true;
            $("#lblErrdirectdebitholder_email").html(errorsMandate["errdirectdebitholder_emailInvalid"]).show();
        }
    }
    if ($("#optcontactcurrency").val() == "GBP" && $("#txtdirectdebitbankaccount_number").val() && $("#txtdirectdebitbankaccount_number").val().length != 8) {
        mandateHasError = true;
        $("#lblErrdirectdebitbankaccount_number").html("Bank Account Number must be 8 digits long").show();
    }
    if ($("#optcontactcurrency").val() == "GBP" && $("#txtdirectdebitsort_code").val() && $("#txtdirectdebitsort_code").val().length != 6) {
        mandateHasError = true;
        $("#lblErrdirectdebitsort_code").html("Sort Code must be 6 digits long").show();
    }
    if ($("#optcontactcurrency").val() == "EUR" && !$("#txtdirectdebitsort_code").val()) {

        mandateHasError = true;
        $("#lblErrdirectdebitsort_code").html("Please enter BIC Code").show();

    }
    if ($("#optdirectdebitbank_country").val() != "Select Any Country" && $("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitsort_code").val() && $("#txtdirectdebitsort_code").val().substring(4, 6) != $("#optdirectdebitbank_country").val()) {

        mandateHasError = true;
        $("#lblErrdirectdebitsort_code").html("Fifth and sixth characters of BIC must be " + $("#optdirectdebitbank_country").val() + ".").show();

    }
    if ($("#optcontactcurrency").val() == "EUR" && !$("#txtdirectdebitbankaccount_number").val()) {

        mandateHasError = true;
        $("#lblErrdirectdebitbankaccount_number").html("Please enter IBAN Number").show();

    }
    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitbankaccount_number").val() &&
        $("#txtdirectdebitbankaccount_number").val().length > 34) {

        mandateHasError = true;
        $("#lblErrdirectdebitbankaccount_number").html("IBAN Number must be up to 34 characters long.").show();

    }
    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitbankaccount_number").val() &&
        !isValidIBAN($("#txtdirectdebitbankaccount_number").val())) {

        mandateHasError = true;
        $("#lblErrdirectdebitbankaccount_number").html("IBAN Number is not valid.").show();

    }


    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitbank_name").val() && $("#txtdirectdebitbank_name").val().length > 35) {
        mandateHasError = true;
        $("#lblErrdirectdebitbank_name").html("Bank Name must be up to 35 characters long.").show();
    }
    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitsort_code").val() &&
        ($("#txtdirectdebitsort_code").val().length != 8 && $("#txtdirectdebitsort_code").val().length != 11)
    ) {
        mandateHasError = true;
        $("#lblErrdirectdebitsort_code").html("BIC must be 8 or 11 characters long with first 6 characters as a-z or A-Z.").show();
    }
    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitsort_code").val() &&
        !(/^[A-Za-z]+$/.test($("#txtdirectdebitsort_code").val().substring(0, 6)))) {
        mandateHasError = true;
        $("#lblErrdirectdebitsort_code").html("BIC must be 8 or 11 characters long with first 6 characters as a-z or A-Z.").show();
    }

    if (!($("#optdirectdebitstatus  option:selected").val())) {
        mandateHasError = true;
        $("#lblErrdirectdebitstatus").html("Please select status.").show();

    }
    if ($("#optcontactcurrency").val() == "GBP" && $("#txtdirectdebitholder_name2").val() && $("#txtdirectdebitholder_name2").val().length > 18) {
        mandateHasError = true;
        $("#lblErrdirectdebitholder_name2").html("Account Holder name must be up to 18 characters long").show();
    }
    if ($("#optcontactcurrency").val() == "EUR" && $("#txtdirectdebitholder_name2").val() && $("#txtdirectdebitholder_name2").val().length > 35) {
        mandateHasError = true;
        $("#lblErrdirectdebitholder_name2").html("Account Holder name must be up to 35 characters long").show();
    }
    if ($("#optdirectdebitbank_country").val() == "Select Any Country") {
        mandateHasError = true;
        $("#lblErrdirectdebitbank_country").html("Please select bank country").show();

    }
    if ($("#optcontactcurrency").val() == "JPY" && $("#txtdirectdebitholder_name2").val() && $("#txtdirectdebitholder_name2").val().length > 18) {
        mandateHasError = true;
        $("#lblErrdirectdebitholder_name2").html("Account Holder name must be up to 18 characters long").show();
    }
    if ($("#optcontactcurrency").val() == "JPY" && $("#txtdirectdebitswiftcode").val().length > 8) {
        mandateHasError = true;
        $("#lblErrdirectdebitswiftcode").html("Swift/BIC Code must be up to 8 digit long").show();
    }

    if (mandateHasError) {
        $("#divDirectDebitMainError").html(" <span>Review all error messages below to correct your data.</span>");
        $("#divDirectDebitMainError").show();
        return false;
    }
    else {
        return true;
    }
}
function allowOnlyDigit(textbox) {

    $("#" + textbox).keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {


            return false;
        }
    });
}
var onChangeofChkConfirmMandate = function () {
    $("#chkConfirmMandate").off("change").on("change", function (e) {
    if(this.checked) {
        
       if($("#optcontactcurrency").val() == "GBP"){
            showSimpleDialogForConfirmCheckForAuddis();
       } 
       if($("#optcontactcurrency").val() == "EUR"){
            showSimpleDialogForConfirmCheckForSEPA();
       }
    }
});
}
var onClickbtnSaveMandate = function () {
    $("#btnSaveMandate").off("click").on("click", function () {
        if (validateMandateForm()) {
            if (($("#optcontactcurrency").val() != "JPY") && !$("#chkConfirmMandate").is(":checked")) {
                $("#lblErrdirectdebitconfirmation").html("Please check confirmation checkbox.").show();
            } else {
                if ($("#optcontactcurrency").val() == "GBP") {
                    showDirectDebitMandateSaveAlert();
                }  if($("#optcontactcurrency").val() == "EUR"){
                    showDirectDebitMandateSaveAlert();
                   // onSaveMandate();
                }
                if($("#optcontactcurrency").val() == "JPY"){
                    
                        onSaveMandate();
                    
                }

            }
        }

    });
}

var showDirectDebitMandateSaveAlert = function () {
    var htmlcontent = "<p align='left'>Mandate will be added and confirmation will be emailed to the customer. You will not be able to make any changes later. Are you sure? Click OK to continue or Cancel.</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='window.parent.sd.hide();onSaveMandate()'>OK</button>";
    htmlcontent += "	<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
    //htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}
var onSaveMandate = function () {
    turnoffMandateError();
    var objmandate_detail = new Object();
    objmandate_detail.dd_scheme = $("#optdirectdebitDD_scheme").val();
    objmandate_detail.country = $("#optdirectdebitbank_country  option:selected").val();
    objmandate_detail.bank_name = $("#txtdirectdebitbank_name").val();
    objmandate_detail.account_holder_name = $("#txtdirectdebitholder_name2").val();
    objmandate_detail.account_holder_email = $("#txtdirectdebitholder_email").val();

    objmandate_detail.status = $("#optdirectdebitstatus  option:selected").val();
    if ($("#optcontactcurrency").val() == "EUR") {
        objmandate_detail.iban = $("#txtdirectdebitbankaccount_number").val().toUpperCase();
        objmandate_detail.bic = $("#txtdirectdebitsort_code").val();
    }
    if ($("#optcontactcurrency").val() == "GBP") {
        objmandate_detail.account_number = $("#txtdirectdebitbankaccount_number").val();
        objmandate_detail.sort_code = $("#txtdirectdebitsort_code").val();
    }
    if($("#optcontactcurrency").val() == "JPY"){
        objmandate_detail.account_number = $("#txtdirectdebitbankaccount_number").val();
        objmandate_detail.sort_code = $("#txtdirectdebitsort_code").val();
        objmandate_detail.bic = $("#txtdirectdebitswiftcode").val();
        objmandate_detail.cle_rib = $("#txtdirectdebitcle_code").val();

    }
    objmandate_detail.mandate_date = $("#txtdirectdebitmandate_Date").val();
    //if (isSaveMandate) {
     //   postAjaxFunc("customers/" + customerKey + "/direct_debits", JSON.stringify(objmandate_detail), onSaveMandateDetails);
   // } else {
        objmandate_detail.version = $("#txtmandateversion").val();
        putAjaxFunc("customers/" + customerKey + "/direct_debits/" + $("#txthiddendirectdebitkey").val(), JSON.stringify(objmandate_detail), onSaveMandateDetails);
   // }

}

var onClickBIC = function(){

    $("#txtdirectdebitbankaccount_number").off("click").on("click", function () {
       if ($("#optcontactcurrency").val() == "EUR") {
        MakeNonEditableBICCountryCode();
       }
     });
}

function MakeNonEditableBICCountryCode() {
  
    var readOnlyLength = 2;
    $('#txtdirectdebitbankaccount_number').on('keypress, keydown', function(event) {
      if ((event.which != 37 && (event.which != 39)) &&
        ((this.selectionStart < readOnlyLength) ||
          ((this.selectionStart == readOnlyLength) && (event.which == 8)))) {
        return false;
      }
    });

}
var onChangeoptdirectdebitbank_country = function () {
    $("#optdirectdebitbank_country").off("change").on("change", function (e) {
        if ($("#optcontactcurrency").val() == "EUR") {
        $("#txtdirectdebitbankaccount_number").val($("#txtdirectdebitbankaccount_number").val().replace($("#txtdirectdebitbankaccount_number").val().substr(0, 2),$("#optdirectdebitbank_country").val()))
        onClickBIC();
        }
    });
}

var onSaveMandateDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divDirectDebitMainError").html("</br>" + data.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divDirectDebitMainError").show();
                /// showAdjustmentError("No changes to save");
            }
        } else {

            turnoffMandateError();
            isInModificationMode = false;
            tabsloaded.events = false;
            $('#chkConfirmMandate').prop('checked', false);
            $("#lblBlankMandateMsg").hide();
           // getDirectDebitGrid();
            // $("#btnFilterAccountTransanction").trigger("click");

            setTimeout(function () {
                // $("#txtdirectdebitholder_name2,#txtdirectdebitholder_email,#txtdirectdebitbank_name,#txtdirectdebitbankaccount_number,#txtdirectdebitsort_code,#optdirectdebitstatus,#txtdirectdebitmandate_ID,#txtdirectdebitmandate_Date").attr("disabled", "disabled");
                /// $("#btnSaveMandate").hide();
                //  $("#mandateConfirmDiv").hide();
                //  $("#btnNewMandate").show();

                if (data.success.message) {
                    // $("#divDirectDebitMainSuccess").html("</br>" + 'Adjustment completed successfully.');
                    $("#divDirectDebitMainSuccess").html(" " + data.success.message);
                    $("#divDirectDebitMainSuccess").show();
                    $("#divspace").html("<br/>");
                    $("#divspace").show();
                     //window.open("/apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")+"?customerid=" + customerKey, '_blank');
                     //if($('#chkPorting').is(":checked")){
                   //     window.open("/apex/J2_ISP_TOOL_DEV20"+"?customerid=" + customerKey+"&number="+$("#txtcontactportingnumber").val(), '_blank');
                   //  }else{
                        window.open("/apex/J2_ISP_TOOL_DEV20"+"?customerid=" + customerKey, '_blank');
                   //  }
                     
                        setTimeout(function () {

                    //location.reload(true);
                    resetSignup();

                        }, 200);
                }


            }, 2500);

            directdebit_form_keypress = false;
            isBlankMandate = false;
            //  $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            //// $("#optbillATaccount_code").val($("#optbillATaccount_code option:first").val());
            // $("#optbillATaccount_code").trigger("change");
            // setTimeout(function () {
            //     togglebtnAddNewService();
            //  }, 5000);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divDirectDebitMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divDirectDebitMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divDirectDebitMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            //$("#divAdjustmentMainError").show();
            $("#divDirectDebitMainError").show();
        }
        else {
            $("#divDirectDebitMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divDirectDebitMainError").show();
            CancelRequest = false;
        }
    }
}
var onClickbtnMandateRefresh = function () {
    $("#btnMandateRefresh").off("click").on("click", function () {
        turnoffMandateError();
        isCollectionRefreshClick = true;
        $('[data-toggle="tooltipformandaterefresh"]').tooltip("destroy");
        getDirectDebitGrid();

        /*setTimeout(function () {
            if (isBlankMandate) {
                $("#lblBlankMandateMsg").hide();
            }
            $("#divCollectionMethodSuccess").html("Collection Method Updated successfully");

        }, 10000);*/

    });
}
var onclickbtnaccountsave= function(){
    $("#btnSaveContactBillinginfo").trigger("click");
}
var onclickbtnNoChangesSave= function(){
   isInModificationMode=false;
   turnOffDirectDebitCollectionMethodErrors();
   if($("#optbillpaymentcollection_methods").val() == "C" && $('#optbillpaymentcollection_methods option[value="D"]').length > 0 ){
        $("#optbillpaymentcollection_methods").val("D");
        $("#optbillpaymentcollection_methods").trigger("change");
        $("#optbillpaymentcountry_code option:selected").text() == " ";
        $('#CCDiv').find('input:text').val(''); 
        return;
   }
   if($("#optbillpaymentcollection_methods").val() == "D" && $('#optbillpaymentcollection_methods option[value="C"]').length > 0 ){
        $("#optbillpaymentcollection_methods").val("C");
        //$("#optbillpaymentcountry_code option:selected").text() == " ";
         $('#DirectDebitDiv').find('input:text').val(''); 
        $("#optbillpaymentcollection_methods").trigger("change");
        
        return;
   }

}
var onclicknoforCountryBrandChangePorting = function(){
    // $("#optcontactcountry").val(savedCountry);
     if(savedbrand !=  $("#optcontactbrand").val()){
         $("#optcontactbrand").val(savedbrand);
        $("#optcontactbrand").trigger("change");
     }
      if(savedCountry !=  $("#optcontactcountry").val()){
         $("#optcontactcountry").val(savedCountry);
         $("#optcontactcountry").trigger("change");
     }
     if(savedcurrency != $("#optcontactcurrency").val()){
          $("#optcontactcurrency").val(savedcurrency);
         $("#optcontactcurrency").trigger("change");
     }
     
      isShowPortingAlert=true;
     
 }
var onclicknoforCountryBrandChange = function(){
   // $("#optcontactcountry").val(savedCountry);
    if(savedbrand !=  $("#optcontactbrand").val()){
        $("#optcontactbrand").val(savedbrand);
       $("#optcontactbrand").trigger("change");
    }
     if(savedCountry !=  $("#optcontactcountry").val()){
        $("#optcontactcountry").val(savedCountry);
        $("#optcontactcountry").trigger("change");
    }
    if(savedcurrency != $("#optcontactcurrency").val()){
         $("#optcontactcurrency").val(savedcurrency);
        $("#optcontactcurrency").trigger("change");
    }
     setTimeout(function() {
            if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="D"){
                $("#optbillpaymentcollection_methods").val("D");
                $("#optbillpaymentcollection_methods").trigger("change");
            }
            if($("#txtcontactcollection_method").val() && $("#txtcontactcollection_method").val()=="B"){
                $("#optbillpaymentcollection_methods").val("B");
                $("#optbillpaymentcollection_methods").trigger("change");
            }
     }, 3000);   
     isShowDDAlert=true;
    
}
var isCountrySupportedPorting = function(){
    if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryfoPorting ) < 0){
        return false;
    }
    return true;
}
var isCountrySupportedDirectDebit = function(){
    if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforDD ) < 0){
        return false;
    }
    return true;
}
var isCountrySupportedBankTransferJapan = function(){
    if(jQuery.inArray( $("#optcontactcountry").val(), supportedcountryforBankTransfer ) < 0){
        return false;
    }
    return true;
}
var isBrandSupportDirectDebit = function(){
    
    if(jQuery.inArray( $("#optcontactbrand").val(), supportedBrandforDD ) < 0){
         return false;
    } 
    return true;
}
var isBrandSupportPorting = function(){
    
    if(jQuery.inArray( $("#optcontactbrand").val(), supportedBrandforPorting ) < 0){
         return false;
    } 
    return true;
}
var isBrandSupportBankTransferJapan = function(){
    
    if(jQuery.inArray( $("#optcontactbrand").val(), supportedBrandforBTJapan ) < 0){
         return false;
    } 
    return true;
}
var isCurrencySupportDirectDebit = function(){
    
    if(jQuery.inArray( $("#optcontactcurrency").val(), supportedCurrencyforDD ) < 0){
         return false;
    } 
    return true;
}
var isCurrencySupportPorting = function(){
    
    if(jQuery.inArray( $("#optcontactcurrency").val(), supportedCurrencyforPortingOffer ) < 0){
         return false;
    } 
    return true;
}
var getPortingAlertMessage = function(){
    var resmessage;
    if($("#txtcontactcollection_method").val()=='C'){
        resmessage="Number Porting is not supported for the Brand selected.";
        if(!isBrandSupportPorting() && !isCountrySupportedPorting() && !isCurrencySupportPorting()){
            resmessage="Number Porting  is not supported for the Brand,Country,Currency selected.";
            return resmessage;
        }
        if(!isBrandSupportPorting()){
            resmessage="Number Porting is not supported for the Brand selected.";
             return resmessage;
        }
         if(!isCountrySupportedPorting()){
            resmessage="Number Porting is not supported for the Country selected.";
             return resmessage;
        }
         if(!isCurrencySupportPorting()){
            resmessage="Number Porting is not supported for the Currency selected.";
             return resmessage;
        }
    }
    
   
    return resmessage;
}
var getDirectDebitAlertMessage = function(){
    var resmessage;
    if($("#txtcontactcollection_method").val()=='D'){
        resmessage="Direct Debit is not supported for the Brand selected.";
        if(!isBrandSupportDirectDebit() && !isCountrySupportedDirectDebit() && !isCurrencySupportDirectDebit()){
            resmessage="Direct Debit is not supported for the Brand,Country,Currency selected.";
            return resmessage;
        }
        if(!isBrandSupportDirectDebit()){
            resmessage="Direct Debit is not supported for the Brand selected.";
             return resmessage;
        }
         if(!isCountrySupportedDirectDebit()){
            resmessage="Direct Debit is not supported for the Country selected.";
             return resmessage;
        }
         if(!isCurrencySupportDirectDebit()){
            resmessage="Direct Debit is not supported for the Currency selected.";
             return resmessage;
        }
    }
    if($("#txtcontactcollection_method").val()=='B'){
        resmessage="Bank Transfer is not supported for the Brand selected.";
        if(!isBrandSupportBankTransferJapan() && !isCountrySupportedBankTransferJapan()){
            resmessage="Bank Transfer is not supported for the Brand,Country selected.";
            return resmessage;
        }
        if(!isBrandSupportBankTransferJapan()){
            resmessage="Bank Transfer is not supported for the Brand selected.";
             return resmessage;
        }
         if(!isCountrySupportedBankTransferJapan()){
            resmessage="Bank Transfer is not supported for the Country selected.";
             return resmessage;
        }
         
    }
   
    return resmessage;
}
var showSimpleDialogForCountryBrandChange = function () {
    //var htmlcontent = "<p align='center'>The Customer requested to port a number Please fill out the Porting section and/or email the forms</p><p align='center'>	<br />	<button class='btn' onclick='focusonPorting();window.parent.sd.hide(); return false;'>OK</button></p>"
    
    
    

    var htmlcontent = " <p align='center'>"+getDirectDebitAlertMessage()+" Do you still want to proceed?</p><p align='center'>	<button class='btn' onclick='setCreditCardDetails(); window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='onclicknoforCountryBrandChange();window.parent.sd.hide();'>No</button>";
              

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSimpleDialogForPortingCountryBrandChange = function () {
    //var htmlcontent = "<p align='center'>The Customer requested to port a number Please fill out the Porting section and/or email the forms</p><p align='center'>	<br />	<button class='btn' onclick='focusonPorting();window.parent.sd.hide(); return false;'>OK</button></p>"
    
    
    

    var htmlcontent = " <p align='center'>"+getPortingAlertMessage()+" Do you still want to proceed?</p><p align='center'>	<button class='btn' onclick='resetPortNServiceSection(); window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='onclicknoforCountryBrandChangePorting();window.parent.sd.hide();'>No</button>";
              

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSimpleDialogForCCChange = function () {
    //var htmlcontent = "<p align='center'>The Customer requested to port a number Please fill out the Porting section and/or email the forms</p><p align='center'>	<br />	<button class='btn' onclick='focusonPorting();window.parent.sd.hide(); return false;'>OK</button></p>"
    var htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='onclickbtnaccountsave(); window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='onclickbtnNoChangesSave();window.parent.sd.hide();'>No</button>";
                htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    //sd.setContentInnerHTML("<p align='center'><img src='/img/msg_icons/warning32.png' style='margin:0 5px;'/></p><p align='center'>This is awesome!</p><p align='center'><br /><button class='btn' onclick='window.parent.sd.hide(); return false;'>cancel</button></p>");
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}
function getCurrentDate() {

    //getAjaxFunc("customers/" + customerKey + "/direct_debits", setDirectDebitGrid, "");
    getAjaxFunc("lookup/current_date_time", setCurrentTime, "");
}
function setCurrentTime(data, issuccess) {
    if (issuccess) {
        if (data.current_date_formatted) {
            $("#txtdirectdebitmandate_Date").val(moment(data.current_date_formatted).format('MM/DD/YYYY'));
        }

    }
}

var directdebitpermission = function () {

    $txtdirectdebit = $("#optdirectdebitstatus,#txtdirectdebitmandate_Date");

    $txtdirectdebit.toArray().reduce(function (x, control) {
        permissionArray.filter(function (elem) { return elem.id == control.id })
            .reduce(function (x, element) {
                addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
            }, {});
    }, {});

}

function directDebitBankAccountNumberValidation(textbox) {
    $(textbox).keypress(function(e)
    {
           var k;
           k=e.which;//document.all ? k=e.keycode : k=e.which;
           if (((k>47 && k<58)||(k>64 && k<91)||(k>96 && k<123)||k==0 ||  k === 8 || k === 46) // uppercase
           ||
           
           k == 32 || k==45) { // space
               return;
           }
           
           e.preventDefault();
    });
};
var onClickbtnAddMandate = function () {
   
        // $('#txtdirectdebitmandate_Date').data('daterangepicker').maxDate = moment();
        //$('#chkConfirmMandate').prop('checked', false);
        turnoffMandateError();
       // $("#mandateLabel").hide();
        //$("input[id*=txtdirectdebit]").not("#txtdirectdebitholder_name2").val("");
        setDirectDebitDateTimePicker("txtdirectdebitmandate_Date");
       // $('[data-toggle="tooltipformandateacno"]').tooltip({ trigger: "hover" });
      //  $('[data-toggle="tooltipformandatesortcode"]').tooltip({ trigger: "hover" });
       // $('[data-toggle="tooltipformandateacholdername"]').tooltip({ trigger: "hover" });
      //  $('[data-toggle="tooltipformandatebankname"]').tooltip({ trigger: "hover" });
       

        $("#btnSaveMandate").show();
        $("#mandateConfirmDiv").show();
        $("#txtdirectdebitcustomer_currency").val($("#optcontactcurrency option:selected").text());
        triggerToolTipForDD();
        if ($("#optcontactcurrency").val() == "EUR") {
           // $("#optdirectdebitDD_scheme").val("SEPA");
            $("#optdirectdebitstatus").val("FIRST");
           // $("#optdirectdebitbank_country").val("Select Any Country");
            $("#txtdirectdebitholder_name2,#txtdirectdebitholder_email,#txtdirectdebitbank_name,#txtdirectdebitbankaccount_number,#txtdirectdebitsort_code,#optdirectdebitstatus,#txtdirectdebitmandate_Date,#optdirectdebitbank_country").removeAttr("disabled");
        } 
         if($("#optcontactcurrency").val() == "GBP")  {
           // $("#optdirectdebitDD_scheme").val("AUDS");
            $("#optdirectdebitstatus").val("DDI0N");
           // $("#optdirectdebitbank_country").val("GB");
            $("#txtdirectdebitholder_name2,#txtdirectdebitholder_email,#txtdirectdebitbank_name,#txtdirectdebitbankaccount_number,#txtdirectdebitsort_code,#optdirectdebitstatus,#txtdirectdebitmandate_Date").removeAttr("disabled");
            $("#optdirectdebitbank_country").attr("disabled", "disabled");
        }
        if($("#optcontactcurrency").val() == "JPY") {
            $("#mandateConfirmDiv").hide();
            $("#optdirectdebitDD_scheme").val("DOMS");
            $("#optdirectdebitstatus").val("INITIATED");
            $("#optdirectdebitbank_country").val("JP");
            $("#txtdirectdebitswiftcode,#txtdirectdebitcle_code,#txtdirectdebitholder_name2,#txtdirectdebitholder_email,#txtdirectdebitbank_name,#txtdirectdebitbankaccount_number,#txtdirectdebitsort_code,#optdirectdebitstatus,#txtdirectdebitmandate_Date").removeAttr("disabled");
            $("#optdirectdebitbank_country").attr("disabled", "disabled");
       }

        setCustomerNameForDD();
        getCurrentDate();
        //$("#txtdirectdebitlast_date").val(moment().format('MM/DD/YYYY'));

        //$("#txtdirectdebitmodified_user").val($("body").data("ispldapusername"));

        directdebitpermission();
        
        //$("#txtdirectdebitholder_name2").val($("#txtdirectdebitholder_name1").val());
       // $("#txtdirectdebitholder_name2").val($("#txtdirectdebitholder_name1").val());
        //$("#txtdirectdebitholder_email").val($("#txtcontactemail_address").val());
        
        
    
}
function getDirectDebitSchemeOptionSetsFunc() {
    //  var getFromLocalStorage = getLocalStorageOptionSetData("DDscheme");
    // if (getFromLocalStorage === "") {
    getAjaxFunc("/lookup/direct_debit_schemes?currency_code=" + $("#optcontactcurrency").val() + "", setDirectDebitSchemeOptionSetsFunc, "");
    //  }
    // else {
    //     setDirectDebitSchemeOptionSetsFunc(getFromLocalStorage, true, "");
    // }
}
function setDirectDebitSchemeOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.direct_debit_scheme) {
            //if (getLocalStorageOptionSetData("DDscheme") === "") {
            setLocalStorageOptionSetData("DDscheme", "");
            setLocalStorageOptionSetData("DDscheme", data);
            // }
            setOptionSetsForceDefaultValue(data.direct_debit_scheme, "#optdirectdebitDD_scheme", selectedbydefault, "scheme_code", "name", selectedbydefault);
        }
    }
}
var onSavedNumberActivation = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceActivateMainError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceActivateMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.
            turnoffMandateError();
            isAccountActivate = true;
            getDDCountryOptionSet();
            $("#divServiceActivateMainSuccess").html("<span>Service activated successfully.</span>")
            $("#divServiceActivateMainSuccess").show();
            turnOffBillingPaymentErrors();
            $("#txtservicenumber_additionalUsageBalance").attr("disabled", "disabled");
            $("#chkServiceActivate").show();
            $("#btnService_chargeactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            $("#btnService_skipactivate").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
           $("#CCDivDirectDebit").find("input, button, submit, textarea, select").attr("disabled", "disabled");
           $("#btnSaveContactBillinginfo").attr("disabled", "disabled");
           $("#optcontactcountry,#optcontactcurrency,#optcontactbrand").attr("disabled", "disabled");
            if ($("#optbillpaymentcollection_methods").val() == "D") {
              //  getMandateStatusOptionSetsFunc();
                getDirectDebitSchemeOptionSetsFunc();
                setTimeout(function () {
                getDirectDebitGrid();
                onChangeofChkConfirmMandate();
                 $("#DirectDebitDetails").show();
                //$("#btnmandatesignup").append($('#btnsignup').detach());
                $("#btnmandatesignup").show();
                $("#btnsignup").hide();
                },2000);

            } else {
               //window.open("/apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")+"?customerid=" + customerKey, '_blank');
               if($('#chkPorting').is(":checked")){
                window.open("/apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")+"?customerid=" + customerKey+"&number="+$("#txtcontactportingnumber").val(), '_blank');
             }else{
                window.open("/apex/J2_FAXFORCE_"+$("body").data("faxforceEnvironment")+"?customerid=" + customerKey, '_blank');
             }
               
                
                setTimeout(function () {

                    //location.reload(true);
                    resetSignup();

                }, 200);
            }



        }
    } else {
        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                
                if($("#txtcontactcollection_method").val() == 'C'){
                     $("#divServiceActivateMainError").append("<span><a id='hrefGoToPaymenttab' href=\"#Payments\">Click here to Update Payment Information.</a></span>")
                    onClickhrefGoToPaymenttab();
                     $("#divServiceActivateMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
                 if($("#txtcontactcollection_method").val() == 'D'){
                      $("#divServiceActivateCCDeclineMainError").html("" + data.responseJSON.errors[0].user_message).show();
                }
                
               
            } else {
                if (data.responseJSON.errors[0].user_message) {
                    if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                        $("#divServiceActivateMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                    } else {
                        $("#divServiceActivateMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                        if($("#txtcontactcollection_method").val() == 'C'){
                        if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("credit card") > -1) {
                            $("#divServiceActivateMainError").append("<span><a id='hrefGoToPaymenttab' href=\"#Payments\">Click here to Update Payment Information.</a></span>")
                            onClickhrefGoToPaymenttab();
                        }
                        }
                    }
                } else {
                    $("#divServiceActivateMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
                }
                $("#divServiceActivateMainError").show();
            }
            
        }
        else {
            $("#divServiceActivateMainError").html("</br>Request Cancelled.");
            $("#divServiceActivateMainError").show();
            CancelRequest = false;
        }
    }
}
var onClickhrefGoToPaymenttab = function () {
    $("#hrefGoToPaymenttab").off("click").on("click", function () {
        turnoffChargeActivateErrorMsg();
        $('html,body').animate({
            scrollTop: $("#billingInfoDiv").offset().top
        },
            'slow');
        $("#billingInfoDiv").find("input, button, submit, textarea, select").removeAttr("disabled");
        $("#optbillpaymentcollection_methods").attr("disabled", true);
        isSaveBillingSectionOnly = true;
        $("#divBillingPaymentMainSuccess").hide();
        $("#divBillingPaymentMainError").hide();
    });
}

var hrefServiceSetUpFreeEmployeeOffers = function (rights) {
    if (rights == 0) {
        $("#chkFreeEmployee").attr("disabled", true);
        //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#chkFreeEmployee").attr("disabled", false);
        // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceSetUpPaidPlansOffers = function (rights) {
    if (rights == 0) {
        $("#chkPaidPlans").attr("disabled", true);
        //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#chkPaidPlans").attr("disabled", false);
        // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceSetUpFreeTrialsOffers = function (rights) {
    if (rights == 0) {
        $("#chkFreeTrail").attr("disabled", true);
        //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#chkFreeTrail").attr("disabled", false);
        // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceSetUpPortingOffers = function (rights) {
    if ($("#txtcontactportingnumber").val()) {
        if (rights == 0) {
            $("#chkPorting").attr("disabled", true);
            //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
        } else {
            $("#chkPorting").attr("disabled", false);
            // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
        }
    } else {
        $('#chkPorting').prop("disabled", true);
    }

}
var hrefServiceSetUpFreeOffers = function (rights) {
    if (rights == 0) {
        $("#chkFree").attr("disabled", true);
        //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#chkFree").attr("disabled", false);
        // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceSetUpSavePlansOffers = function (rights) {
    if (rights == 0) {
        $("#chkSavePlans").attr("disabled", true);
        //$("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#chkSavePlans").attr("disabled", false);
        // $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
//UI Permission for popUpButtons
var hrefServiceNumberActivationChargeActivate = function (rights) {
    if (rights == 0) {
        $("#btnService_chargeactivate").prop("disabled", true);
        $("#btnService_chargeactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#btnService_chargeactivate").prop("disabled", false);
        $("#btnService_chargeactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceNumberActivationSkipActivate = function (rights) {
    permissionArray.push(
        { id: "ActivationSkipActivate", hasRights: rights }
    );
    if (rights == 0) {
        $("#btnService_skipactivate").prop("disabled", true);
        $("#btnService_skipactivate").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#btnService_skipactivate").prop("disabled", false);
        $("#btnService_skipactivate").removeClass("disabled").addClass("grey-btn");
    }
}
var hrefServiceNumberActivationSkipCredit = function (rights) {
    if (rights == 0) {
        $("#btnService_skipacredit").prop("disabled", true);
        $("#btnService_skipacredit").removeClass("grey-btn").addClass("disabled");
    } else {
        $("#btnService_skipacredit").prop("disabled", false);
        $("#btnService_skipacredit").removeClass("disabled").addClass("grey-btn");
    }
}

//END : Manage Number Activation tab

//START:: Export Excel, CSV functionalities
var allExportButtonClicks = function () {
    onClickbtnAccountTransanctionExportExcel();
    onClickbtnAccountTransanctionExportCSV();
    onClickbtnBillInvoiceExportExcel();
    onClicbtnBillinvoiceExportCSV();
    onClickbtnServiceFaxUsageExportExcel();
    onClickbtnServiceFaxUsageExportCSV();
}

var saveFile = function (data, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var blob = new Blob(data, { type: "application/vnd.ms-excel" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
};
//END:: Export Exel, CSV functionalities



var setDateTimePicker = function (textboxID) {
    $("#" + textboxID).removeAttr("disabled").daterangepicker({
        showDropdowns: true,
        linkedCalendars: false,
        autoApply: false,
        opens: "left",
        singleDatePicker: true,
        timePicker: true,
        timePickerIncrement: 1,
        timePicker24Hour: false,
        "timePickerSeconds": true,
        applyClass: "grey-btn",
        cancelClass: "grey-btn",
        locale: {
            format: 'MM/DD/YYYY hh:mm:ss A'
        }

    }, function (start) {
        //console.log("dateset");
    });


    $("#" + textboxID).on('apply.daterangepicker', function (ev, picker) {
        // isCloseDateApplied = true;
        $(this).val(picker.startDate.format('MM/DD/YYYY hh:mm:ss A'));
        closeDateval = picker.startDate.format('MM/DD/YYYY hh:mm:ss A');
    });

    $("#" + textboxID).on('cancel.daterangepicker', function (ev, picker) {
        // isCloseDateApplied = false;
        $(this).val('');
        closeDateval = '';
    });

    $("#" + textboxID).on('hide.daterangepicker', function (e) {
        console.log("hide");
        // setTimeout(function () {
        //  if (!isCloseDateApplied) {

        $("#txtaccmanageaccount_tentative_close_date").val(closeDateval);
        // }
        //  }, 500);

    });


}




var turnOffAccountManagementErrors = function () {
    $("div[id*=lblErraccmanage]").hide();
    $("#divAccountManagementError").html(" <span>Review all error messages below to correct your data.</span>");
    $("#divAccountManagementError").hide()
    $("#divAccountManagementSuccess").hide();
    $("input[id*=txtaccmanage],select[id*=optaccmanage]").removeClass("error");
}



var onKeyPressCvvCode = function () {
    $("#txtbillpaymentcvv_code").off("keypress").on("keypress", function (event) {
        return isNumberKey(event);
    });
    $("#txtbillpaymentcvv_code").off("paste").on("paste", function (event) {
        return false;
    });


}


var onKeyPressBillingPhoneNumber = function () {
    $("#txtbillpaymentbillingno").off("keypress").on("keypress", function (event) {
        return isNumberKey(event);
    });
    $("#txtbillpaymentbillingno").off("paste").on("paste", function (event) {
        return false;
    });


}



//CSS//

function makeRowActive() {
    $("#isp_pagestart tbody > tr > td > a").click(function () {
        var p = $(this).parent().parent().parent();
        $("tr", p).removeClass();
        $(this).parent().parent().addClass("active1");
        return false;
    });
}


function layoutwidth() {
    var layoutwidth = $(window).width();
    layoutwidth = layoutwidth - 100;
    $('.service-inner-tab-section').css('width', layoutwidth);
}


function onClickbtntoggleSearchCollapse2() {
    //Quick search collapse
    $('#collapseQSearch').on('hide.bs.collapse', function () {
        $('#btntoggleQSearchCollapse').html('<span class="glyphicon glyphicon-chevron-down"></span>');
        setTimeout(function () {
            $("#btntoggleQSearchCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'block');
        }, 300);
    });
    $('#collapseQSearch').on('show.bs.collapse', function () {
        $('#btntoggleQSearchCollapse').html('<span class="glyphicon glyphicon-chevron-up"></span>');
        $("#btntoggleQSearchCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'none');

        //collapse legacy search control
        if ($("#btntoggleSearchCollapse").attr("aria-expanded") == "true") {
            $("#btntoggleSearchCollapse").trigger("click");
        }
    });

    //search collapse
    $('#collapseSearch').on('hide.bs.collapse', function () {
        $('#btntoggleSearchCollapse').html('<span class="glyphicon glyphicon-chevron-down"></span>');
        setTimeout(function () {
            $("#btntoggleSearchCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'block');
        }, 300);
    });
    $('#collapseSearch').on('show.bs.collapse', function () {
        $('#btntoggleSearchCollapse').html('<span class="glyphicon glyphicon-chevron-up"></span>');
        $("#btntoggleSearchCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'none');

        //collapse quick search control
        if ($("#btntoggleQSearchCollapse").attr("aria-expanded") == "true") {
            $("#btntoggleQSearchCollapse").trigger("click");
        }
    });

    //balance console
    $('#collapseBalance').on('hide.bs.collapse', function () {
        $('#btntogglebalanceCollapse2').html('<span class="glyphicon glyphicon-chevron-down"></span>');
    });
    $('#collapseBalance').on('show.bs.collapse', function () {
        $('#btntogglebalanceCollapse2').html('<span class="glyphicon glyphicon-chevron-up"></span>');
    });

    //collapse date
    $('#collapseDate').on('hide.bs.collapse', function () {
        $('#btntogglebalanceCollapse').html('<span class="glyphicon glyphicon-chevron-down"></span>');
    });
    $('#collapseDate').on('show.bs.collapse', function () {
        $('#btntogglebalanceCollapse').html('<span class="glyphicon glyphicon-chevron-up"></span>');
    });


    //collapse date
    $('#collapseServiceDetailIfindplan').on('hide.bs.collapse', function () {
        $('#btntoggleserviceIfindplan').html('<span class="glyphicon glyphicon-chevron-down"></span>');
    });
    $('#collapseServiceDetailIfindplan').on('show.bs.collapse', function () {
        $('#btntoggleserviceIfindplan').html('<span class="glyphicon glyphicon-chevron-up"></span>');
    });

    //collapse DID
    $('#collapseServiceDetailIDid').on('hide.bs.collapse', function () {
        $('#btntoggleserviceItelephone').html('<span class="glyphicon glyphicon-chevron-down"></span>');
    });
    $('#collapseServiceDetailIDid').on('show.bs.collapse', function () {
        $('#btntoggleserviceItelephone').html('<span class="glyphicon glyphicon-chevron-up"></span>');
    });

    //collapse Adjustment
    $('#collapseAdjustment').on('hide.bs.collapse', function () {
        $('#btntoggleAdjustmentCollapse').html('<span class="glyphicon glyphicon-chevron-down"></span>');
        setTimeout(function () {
            $("#btntoggleAdjustmentCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'block');
        }, 300);
    });
    $('#collapseAdjustment').on('show.bs.collapse', function () {
        $('#btntoggleAdjustmentCollapse').html('<span class="glyphicon glyphicon-chevron-up"></span>');
        $("#btntoggleAdjustmentCollapse").parents().next('.search-top-section').find('.lbl-collapse').css('display', 'none');
        if ($("#btntoggleAdjustmentCollapse").attr("aria-expanded") == "true") {
            $("#btntoggleAdjustmentCollapse").trigger("click");
        }
    });

}



//Test: Print the IP addresses into the console



//Test: Print the IP addresses into the console

//END CSS//