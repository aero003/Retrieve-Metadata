//"use strict";


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
    CancelRequest = false, currency_decimalplaces = 2,
    validateErrorsBy = secondErrorEnum.none, currencies_symbol = "",
    oldCustomerKey, customerKey, serviceKey, oldServiceKey, oldModifiedServiceKey, jdassetkeyforInvoice = "", serviceType = "", serviceCSID = "", serviceSummaryVersion = 0, servicePhoneNumber = "", servicePhoneCity = "", serviceResourceType = "", serviceStatus = "", currentServiceTabOpen = "", Eventsclickedforfirsttime = false, Collectionsclickedforfirsttime = false,
    contact_form_keypress = false, accountmanagementform_original_data = "", accountmanagement_form_keypress = false, bal_transfer_form_keypress = false, reorder_form_keypress = false, isOrderAmountAvailable = true, event_form_keypress = false, collectionParentCustomer_form_keypress = false, isInModificationMode = false, isInDeactivationMode = false, isInSuspendFlagMode = false, isitCorporateAccount = false, suspensionFlag_original_data = "", reordercheckflag = "",
    contactform_original_data = "", baltransferform_original_data = "", defaultreorderAmount = "", adjustment_form_keypress = false, gift_form_keypress = false,
    adjustmentform_original_data = "", reorderform_original_data = "", eventform_original_data = "", giftform_original_data = "", collectionParentCustomerform_original_data = "", eventform_original_data_array = "", reorder_original_data_array = "", billpayment_original_data = "", saveCCMode = addOrUpdate.add, saveEventMode = addOrUpdate.update, saveGiftMode = addOrUpdate.update, creditcard_invalid = false,
    billingpaymentform_blank_data = "", billingpaymentCCinfo_original = "", billingpayment_form_keypress = false, billingpaymentform_original_data = "", ipaddress = "",
    otpProccessed = false, selectedCCVal = "", selectedCCType = "", isInOTP = false, currency_code = "", combogiftkey, servicegiftkey, eventskey, billingpaymentCCinfo_blank, credit_card_types, ispuserToken, balance_payment_ppu, isFilteredBillingVCC = false, isFilteredEvents = false,
    isFilteredbillInvoice = false, isFilteredCollection = false, isFilteredFaxUsage = false,
    servicedetailInbox_keypress = false, servicedetailSend_keypress = false; servicedetailInbox_original_data = "", servicedetailSend_original_data = "", ajaxCallInProgress = 0, closeOnDate = "", closeReasonCode = "",
        isCloseDateApplied = false, closeDateval = "", isInOfferCodeMM = false, divServiceSuspensionFlagsUpdateSuspensionFlagRights = 0, hrefServiceDetailsAddInboxServiceRights = 0, hrefServiceDetailsUpdateInboxServiceRights = 0, haveToChangeSelectedService = false, saveServiceDetailMode = addOrUpdate.update, listServiceKeysOfOrderedStatus = [], listExistingCCId = [],
        prorated_recurring_fee_total = 0, reorderdisabledoptval = "", combogift_end_date = "", allow_inbox_email_modification = false, allow_send_email_modification = false, isInReactivationMode = false, isInCollectionMethodUpdate = false,
        isInCollectionMethodDetailUpdate = false, isMainToUsageTransfer = true, isInReorderAmountUpdate = false, isComboGift = false, initial_value_optbillpaymentcollection_methods = "", final_value_onchange_optbillpaymentcollection_methods = "";



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
    errcontactEmailOther: ""
};


var errorsBillingPayment = {
    errbillpaymentfirst_name: "Please enter first name",
    errbillpaymentlast_name: "Please enter last name",
    errbillpaymentcard_number: "Please enter credit card number",
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
    errbillpaymentpostal_codeUS: "Please provide a valid Zip code - For US must be 5 digits",
    errbillpaymentpostal_codeALL: "Please enter Zip code"
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
    "ACCESS_FAILED",
    "SIGNATURE_INVALID"
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


// on load function...which does a lot of things..
// REFACTOR ALERT
function onloadReady() {
   
    onClickbtnCancelRequest();
    turnOffContactErrors();
    $('input[name=searchradios][value=1]').prop('checked', true);

    checkRadioOnSelectChange(); //to change radio button selection when selects are directly changed.
    typingInMainSearch();//changes mode of button(enable, disable toggle). And saves whatever is written.
    typingInMainQSearch();
    onChangeRadioButton();
    onChangeSelectOption();
    txtMainSearchFocusOut();
    txtMainQSearchFocusOut();

    onClickbtnMainSearch();
    onClickbtnMainQSearch();

    setTimeout(function () {
        //fill all option set of Contact tab before retrieving contact information
        getAllContactOptionSets();



    }, 500);
    onClickbtnMainReset();

    onClickTabs();
    $("#txtMainSearch").removeAttr("disabled");
    $("#chkIncludeInactive").removeAttr("disabled");


    //revertBillingProcessDates();
    makeRowActive();

    turnoffOnLoadError();
    icnCopyToClipboard();
    limitFieldLength();
    validatetxtcontactemail_address();
    onChangeSelectOEM();
    onChangeSelectCountry();
    onSaveContact();
    onClickbtnSendWelcomeLetter();
    onkeypressContactForm();
    onChangeContactForm();
    replaceNewCaseButton();
    onChangeAccountLocked();
    getCloseReasonOptionSet();
    layoutwidth();
    $(window).resize(function () {
        layoutwidth();
    });
    onClickbtntoggleSearchCollapse2();

    if ($.query.get("customerid")) {
        if ($.query.get("searchcollapse")) {
            $("#btntoggleSearchCollapse").attr({ "class": "collapsed", "aria-expanded": false });
            $("#collapseSearch").attr({ "class": "collapse", "aria-expanded": false, "style": "height: 0px;" });
            $('#collapseSearch').trigger('hide.bs.collapse');

            $("#btntoggleQSearchCollapse").attr({ "class": "", "aria-expanded": false });
            $("#collapseQSearch").attr({ "class": "collapse", "aria-expanded": false, "style": "height: 0px;" });
            $('#collapseQSearch').trigger('hide.bs.collapse');



        } else {
            getLocalStorageExpandedSearch()
        }
    }
    allExportButtonClicks();

}

function hideSummaryAndDetail() {
    if (!$.query.get("customerid")) {
        localStorage.clear();
        if (!$.query.get("resetpage")) {
            $("#contact_summary").hide();
            $("#tabsdiv").hide();
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
function onClickbtnMainReset() {

    $("#btnMainReset").click(
        function (e) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange(this.id);
                return false;
            }

            $("#DivWaitprocess").show();
            $("#DivDisablePage").hide();
            localStorage.clear();


            $("#collapseSearch").children().removeData();

            clearVCCcontrols();
            clearBillingInfoControls();
            clearBillingTransactionDetails();
            var reset_url = $.query.remove("customerid").remove("searchcollapse").set("resetpage", "true");
            window.location.search = reset_url;
        });
    $("#btnMainResetQ").click(function () {
        $("#btnMainReset").trigger("click");
    });
}
//===END:: RESET button click

//===Start:::Search Customer List
function onClickbtnMainSearch() {
    $("#btnMainSearch").click(
        function (e) {
            setLocalStorageAllSearchOptionsDefaults();
            setLocalStorageSearchRadiosChange();
            setLocalStoragetxtMainSearchValues();
            setLocalStoragechkIncludeInactive();
            setLocalStorageExpandedSearch();

            if (!$("#txtMainSearch")[0].checkValidity()) {
                checkValidity();
                e.preventDefault();
            }
            else {
                $("#txtMainSearch").val($("#txtMainSearch").val().trim());
                var data = "{\"search_option\":\"" + getSelectedOptionSetValue() + "\" ,\"search_value\":\"" + $.trim($("#txtMainSearch").val()) + "\", \"include_inactive\":\"" + $("#chkIncludeInactive").is(":checked") + "\"}";
                postAjaxFunc("customers/search", data, searchResultSuccessFunc, "");
            }
        });
}

function searchResultSuccessFunc(data, issuccess, extraparam) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.customers) {
            drawTable(data.customers);
            $("#lblNoOfRecords").html(data.total_customers + " row(s) returned.");
            $("#lblNoOfRecords").show();
        }
        else {
            $("#tblISPSearchResult > tbody").html("");
            $("#tblISPSearchResult").append(newrow);
            newrow.append($("<td colspan=7 style=\"width:90%\">No Customer(s) found in the System</td>"));
            $("#lblNoOfRecords").html("").hide();
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPSearchResult > tbody").html("");
            $("#tblISPSearchResult").append(newrow);
            $("#lblNoOfRecords").html("").hide();
            if (data.responseJSON.errors) {
                if (data.responseJSON.errors[0] && data.responseJSON.errors[0].user_message) {
                    newrow.append($("<td colspan=7 style=\"width:90%\">" + data.responseJSON.errors[0].user_message + "</td>"));
                } else {
                    newrow.append($("<td colspan=7 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }

            }
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=7 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
        }
        else {
            $("#tblISPSearchResult > tbody").html("");
            $("#tblISPSearchResult").append(newrow);
            $("#lblNoOfRecords").html("").hide();
            newrow.append($("<td colspan=7 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
    //table is ready --> store it in localstorage
    setLocalStorageSearchGridBody();
}
function drawTable(data) {
    $("#tblISPSearchResult > tbody").html("");
    $("#tblISPSearchResult > thead > tr:first-child").removeClass();
    if (data.length > 4) {
        $("#tblISPSearchResult > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        drawRows(data[i]);
    }

    onClickbtnCustomerID();
    makeRowActive();

}

function drawRows(rowData) {

    var row = $("<tr id=\"customertr" + rowData.customer_id + "\" style=\"background-color:" + rowData.row_color_code + " \">");
    $("#tblISPSearchResult").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td><a href=\"#\" id=\"customerkey" + rowData.customer_id + "\" data-customer_key=\"" + rowData.customer_id + "\">" + rowData.customer_id + "</td>"));
    row.append($("<td>" + rowData.status + "</td>"));
    row.append($("<td class=\"searchtdcustomer_name" + rowData.customer_id + "\">" + rowData.customer_name + "</td>"));
    row.append($("<td class=\"searchtdcompany_name" + rowData.customer_id + "\">" + rowData.company_name + "</td>"));
    row.append($("<td class=\"searchtdemail_address" + rowData.customer_id + "\">" + rowData.email_address + "</td>"));
    row.append($("<td class=\"searchtdzip_code" + rowData.customer_id + "\">" + rowData.zip_code + "</td>"));
    row.append($("<td class=\"searchtdcc_last_4_digits" + rowData.customer_id + "\">" + rowData.cc_last_4_digits + "</td>"));
}

function setSearchGridAfterSave(data, issuccess) {
    if (issuccess) {
        if (data.customer) {
            if (data.customer.details) {
                $(".searchtdcustomer_name" + customerKey).html(data.customer.details.first_name + " " + data.customer.details.last_name);
                $(".searchtdcompany_name" + customerKey).html(data.customer.details.company_name);
                $(".searchtdemail_address" + customerKey).html(data.customer.details.email_address);
                $(".searchtdzip_code" + customerKey).html(data.customer.details.postal_code);
                setLocalStorageSearchGridBody();
            }
        }
        else if (data.credit_card) {
            var cc = data.credit_card.card_number;
            $(".searchtdcc_last_4_digits" + customerKey).html(cc.substr(cc.length - 4, cc.length));
            setLocalStorageSearchGridBody();
        }
        else if (data.credit_cards) {
            if (data.credit_cards[0]) {
                var cc = data.credit_cards[0]["card_number"];
                $(".searchtdcc_last_4_digits" + customerKey).html(cc.substr(cc.length - 4, cc.length));
                setLocalStorageSearchGridBody();
            }
        }
    }

}
//===END::: Search Customer List

//===Start:::Quick Search Customer List
function onClickbtnMainQSearch() {
    $("#btnMainQSearch").click(
        function (e) {
            setLocalStoragetxtMainQSearchValues();
            setLocalStoragechkIncludeInactiveQ();

            setLocalStorageExpandedSearch();

            if (!$("#txtMainQSearch")[0].checkValidity()) {
                e.preventDefault();
            }
            else {
                $("#txtMainQSearch").val($("#txtMainQSearch").val().trim());
                getAjaxFunc("customers/search?value=" + encodeURIComponent($.trim($("#txtMainQSearch").val())) + "&include_inactive=" + (($("#chkIncludeInactiveQ").is(":checked")) ? "Y" : "N"), qsearchResultSuccessFunc, "");
            }
        });
}

function qsearchResultSuccessFunc(data, issuccess, extraparam) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.customers && data.customers.length) {
            drawQSearchTable(data.customers);
            $("#lblQNoOfRecords").html(data.total_customers + " row(s) returned.");
            $("#lblQNoOfRecords").show();
        }
        else {
            $("#tblISPQSearchResult > tbody").html("");
            $("#tblISPQSearchResult").append(newrow);
            newrow.append($("<td colspan=7 style=\"width:90%\">No Customer(s) found in the System</td>"));
            $("#lblQNoOfRecords").html("").hide();
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPQSearchResult > tbody").html("");
            $("#tblISPQSearchResult").append(newrow);
            $("#lblQNoOfRecords").html("").hide();
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=7 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=7 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
        }
        else {
            $("#tblISPQSearchResult > tbody").html("");
            $("#tblISPQSearchResult").append(newrow);
            $("#lblQNoOfRecords").html("").hide();
            newrow.append($("<td colspan=7 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
    //table is ready --> store it in localstorage
    setLocalStorageQSearchGridBody();
}
function drawQSearchTable(data) {
    $("#tblISPQSearchResult > tbody").html("");
    $("#tblISPQSearchResult > thead > tr:first-child").removeClass();
    if (data.length > 4) {
        $("#tblISPQSearchResult > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        drawQSearchRows(data[i]);
    }

    onClickbtnCustomerID();
    makeRowActive();

}

var getSearchGridColorCodes = function (status, oem) {
    var searchgridcolorcode = "";
    if (status && oem) {
        status = status.toUpperCase();
        if ((status == "I" || status == "C") && oem == "500") {
            searchgridcolorcode = "#FF6500";
        } else if ((status == "I" || status == "C") && oem != "500") {
            searchgridcolorcode = "#CECFCE";
        } else if ((status == "A" || status == "R" || status == "N" || status == "B") && oem == "500") {
            searchgridcolorcode = "#FFCF00";
        } else if ((status == "A" || status == "R" || status == "N" || status == "B") && oem != "500") {
            searchgridcolorcode = "#FFFFFF";
        }
    }
    return searchgridcolorcode;
}

function drawQSearchRows(rowData) {

    var row = $("<tr id=\"customertr" + rowData.customer_id + "\" style=\"background-color:" + getSearchGridColorCodes(rowData.status, rowData.oem_id) + " \">");
    $("#tblISPQSearchResult").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td><a href=\"#\" id=\"customerkey" + rowData.customer_key + "\" data-customer_key=\"" + rowData.customer_key + "\">" + rowData.customer_key + "</td>"));
    row.append($("<td>" + rowData.status + "</td>"));
    row.append($("<td class=\"searchtdcustomer_name" + rowData.customer_key + "\">" + Strings.orEmpty(rowData.customer_name) + "</td>"));
    row.append($("<td class=\"searchtdcompany_name" + rowData.customer_key + "\">" + Strings.orEmpty(rowData.company_name) + "</td>"));
    row.append($("<td class=\"searchtdemail_address" + rowData.customer_key + "\">" + Strings.orEmpty(rowData.email_address) + "</td>"));
    row.append($("<td class=\"searchtdzip_code" + rowData.customer_key + "\">" + Strings.orEmpty(rowData.zip_code) + "</td>"));
    row.append($("<td class=\"searchtdcc_last_4_digits" + rowData.customer_key + "\">" + Strings.orEmpty(rowData.cc_last_4_digits) + "</td>"));
}

function setQSearchGridAfterSave(data, issuccess) {
    if (issuccess) {
        if (data.customer) {
            if (data.customer.details) {
                $("#searchtdcustomer_name" + customerKey).html(data.customer.details.first_name + " " + data.customer.details.last_name);
                $("#searchtdcompany_name" + customerKey).html(data.customer.details.company_name);
                $("#searchtdemail_address" + customerKey).html(data.customer.details.email_address);
                $("#searchtdzip_code" + customerKey).html(data.customer.details.postal_code);
                setLocalStorageQSearchGridBody();
            }
        }
        else if (data.credit_card) {
            var cc = data.credit_card.card_number;
            $("#searchtdcc_last_4_digits" + customerKey).html(cc.substr(cc.length - 4, cc.length));
            setLocalStorageQSearchGridBody();
        }
        else if (data.credit_cards) {
            if (data.credit_cards[0]) {
                var cc = data.credit_cards[0]["card_number"];
                $("#searchtdcc_last_4_digits" + customerKey).html(cc.substr(cc.length - 4, cc.length));
                setLocalStorageQSearchGridBody();
            }
        }
    }

}
//===END::: Search Customer List

//===START::: Customer link click and fill Header and contact information
function onClickbtnCustomerID() {
    $("a[id*=customerkey]").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        $("#DivWaitprocess").show();

        //set text box value and include inactive checkbox value in local storage.
        setLocalStoragetxtMainSearchValues();
        setLocalStoragechkIncludeInactive();
        setLocalStorageSearchGridBody();

        //set text box search for quick search too.
        setLocalStoragetxtMainQSearchValues();
        setLocalStoragechkIncludeInactiveQ();
        setLocalStorageQSearchGridBody();

        setLocalStorageExpandedSearch();
        //load all the tabs again.
        clearLoadedTabs();

        customerKey = $(this).data("customer_key");
        turnOffContactErrors();

        if ($.query.get("customerid")) {
            if ($.query.get("customerid") != customerKey) {
                oldCustomerKey = $.query.get("customerid");
                var search_url = $.query.remove("resetpage").remove("searchcollapse").set("customerid", customerKey);
                var currenturl = window.location.href.split(/[?#]/)[0];

                window.location.replace(currenturl + search_url);
                //window.location.search = search_url;
                return false;
            } else if ($.query.get("customerid") == customerKey) {
                //contact_summary info
                callPermissionAPI(['contact_summary']);
                hideExtraControlInHeader();
                if ($("#contact_summary").is(":visible")) {
                    getHeaderInformation();
                }

                //have to change it to choose it from tabs order.
                // currentTabOpen = "";
                // tabsloaded.contact = false;
                // $("#hrefContact").trigger("click");
            }
        }
        else {
            var search_url = $.query.remove("resetpage").remove("searchcollapse").set("customerid", customerKey);
            var currenturl = window.location.href.split(/[?#]/)[0];
            //window.open(currenturl + search_url, "_blank");
            window.location.replace(currenturl + search_url);
            //window.location.search = search_url;
            return false;
        }

    });
}

function getHeaderInformation() {
    //get and set headerinfo
    getAjaxFunc("/customers/" + customerKey + "/summary", setHeaderInformation, "");
    $("#contact_summary").show();
}

function setHeaderInformation(data, issuccess) {
    turnoffAccountUnlockErros();
    //clear header info and disable all controls
    $("input[id*=txthdr]").attr({ "disabled": "disabled" });
    $("input[id*=chkhdr]").attr({ "disabled": "disabled" });
    $("select[id*=opthdr]").attr({ "disabled": "disabled" });
    $("input[id*=txthdr]").val("");

    if (issuccess) {
        if (data.customer) {
            //alert(data.header_information);
            for (var property in data.customer.summary) {
                if (data.customer.summary.hasOwnProperty(property)) {

                    if (property.indexOf("_date") != -1) {
                        if (data.customer.summary[property] !== null) {
                            $("input[id=txthdr" + property + "]").val(getDateByString(data.customer.summary[property], "mm-dd-yyyy"));
                        }
                    }
                    else {
                        $("input[id=txthdr" + property + "]").val(data.customer.summary[property]);
                    }
                }


            }
            if (data.customer.summary.account_locked) {
                $('#chkaccountlocked').prop('checked', true);
            }


            toggleUnlockAccount();
            // Have to write logic of color code.
            // $("#txthdraccount_status").attr("style", "background-color:" + data.customer.summary.status_color_code + "");
            // /.css({ "background-color": data.header_information.status_color_code });
            //$("#txthdrtotal_main_balance").attr("style", "background-color:" + data.account_balances.total_main_balance_color_code + "");
            var account_status = String(data.customer.summary.account_status).toUpperCase();
            switch (account_status) {
                case "ACTIVE":
                    $("#txthdraccount_status").attr("style", "background-color:" + LIGHT_GREEN + "");
                    break;
                case "CLOSE":
                    $("#txthdraccount_status").attr("style", "background-color:" + LIGHT_RED + "");
                    break;
                case "INACTIVE":
                    $("#txthdraccount_status").attr("style", "background-color:" + LIGHT_RED + "");
                    break;
                case "NEW":
                    $("#txthdraccount_status").attr("style", "background-color:" + LIGHT_YELLOW + "");
                    break;
                case "BT_REVIEW":
                    $("#txthdraccount_status").attr("style", "background-color:" + LIGHT_GREEN + "");
                    break;
                default:
                    $("#txthdraccount_status").attr("style", "background-color:");
                    break;
            }


            var total_main_balance = 0;

            if (String(data.customer.summary.total_main_balance).substr(0, 1) == "(") {
                total_main_balance = -1;
            }
            else {
                total_main_balance = data.customer.summary.total_main_balance.replace(/\D/g, '');
            }

            if (total_main_balance > 0) {
                $("#txthdrtotal_main_balance").attr("style", "background-color:" + LIGHT_RED + "");
            } else if (total_main_balance < 0) {
                $("#txthdrtotal_main_balance").attr("style", "background-color:" + LIGHT_GREEN + "");
            } else {
                $("#txthdrtotal_main_balance").attr("style", "background-color:");
            }



            //billable checkbox
            if (data.customer.summary.billable) {
                $("input:checkbox[id=chkhdrbillable]").prop("checked", data.customer.summary.billable);
            }
            else {
                $("input:checkbox[id=chkhdrbillable]").prop("checked", false);
            }
            if (data.customer.summary.anniversary_day) {
                getAjaxFunc("/lookup/dayofmonthlist", setDayOfMonthFunc, data.customer.summary.anniversary_day);
            }

            //if account is closed.
            closeOnDate = data.customer.summary.close_date;
            closeReasonCode = data.customer.summary.close_reason;
            accountStatus = account_status;

            //check if current tab visible is service.
            if (currentTabOpen.indexOf("tabsloaded.services") > -1) {
                //console.log("togglebtnAddNewService fired from 1163");
                //toggle add new service button.
                togglebtnAddNewService();
                togglebtnReactivateService();
            }
        }
    }
    else {

    }
}

function setBillProcessDates(data, issuccess) {
    if (issuccess) {
        if (data.billProcessDates) {
            for (var property in data.billProcessDates) {
                if (data.billProcessDates.hasOwnProperty(property)) {
                    $("input[id=txthdr" + property + "]").val(data.billProcessDates[property]);
                    if (!oldbillingdates.olddatesSetFlag) {
                        oldbillingdates[property] = data.billProcessDates[property];
                    }
                }
            }
            oldbillingdates.olddatesSetFlag = true;
            if (data.billProcessDates.billable) {
                $("input:checkbox[id=chkhdrbillable]").prop("checked", data.billProcessDates.billable);
            }
            else {
                $("input:checkbox[id=chkhdrbillable]").prop("checked", false);
            }
            if (data.billProcessDates.dayOfMonth) {
                getAjaxFunc("/lookup/dayofmonthlist", setDayOfMonthFunc, data.billProcessDates.dayOfMonth);
            }
        }
    }
    else {

    }
}

function setDayOfMonthFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.dayOfMonth) {
            setOptionSets(data.dayOfMonth, "#opthdrdayOfMonth", defaultSelected, "dayofMonth", "dayofMonth", true);
        }
    }
}

function setAccountBalances(data, issuccess) {
    if (issuccess) {
        if (data.account_balances) {
            for (var property in data.account_balances) {
                if (data.account_balances.hasOwnProperty(property)) {
                    $("input[id=txthdr" + property + "]").val(data.account_balances[property]);
                    $("input[id=txthdr" + property + "]").attr({ "disabled": "disabled" });
                }
            }
            if (data.account_balances.total_main_balance_color_code) {
                if (data.account_balances.total_main_balance_color_code != "#FFFFFF") {

                    //$("#txthdrtotal_main_balance").attr("style", "background-color:" + data.account_balances.total_main_balance_color_code + "");
                }
            }
        }
    }
    else {

    }
}
function setUsageBalance(data, issuccess) {
    if (issuccess) {
        if (data.usages) {
            for (var property in data.usages.current_amount) {
                if (data.usages.current_amount.hasOwnProperty(property)) {
                    $("input[id=txthdr" + property + "]").val(data.usages.current_amount[property]);
                    $("input[id=txthdr" + property + "]").attr({ "disabled": "disabled" });
                }
            }
        }
    }
    else {

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
    getCountryOptionSet();

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
            setOptionSets(data.languages, "#optcontactlanguage_code", "", "code", "description", true);
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
        setOptionSetsForceDefaultValue(objectArray, "#optcontactoems", "", "id", "name", "");
        $("#optcontactoems").val("");
    }
}

function setOEMOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.oems) {

            if (getLocalStorageOptionSetData("oems") === "") {
                setLocalStorageOptionSetData("oems", data);
            }

            setOptionSets(data.oems, "#optcontactoems", defaultSelected, "id", "name+ +(+id+)", false);

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

            setOptionSets(data.responseJSON.oems, "#optcontactoems", defaultSelected, "id", "name+ +(+id+)", false);

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
            setOptionSets(data.bill_types, "#optcontactbill_type", "", "type", "description", true);
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
            setOptionSets(data.contact_methods, "#optcontactcontact_method", "", "method", "description", true);
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
    }
}
function setCountryOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.countries) {
            if (getLocalStorageOptionSetData("countries") === "") {
                setLocalStorageOptionSetData("countries", data);
            }
            setOptionSets(data.countries, "#optcontactcountry", "", "code", "name", true);
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
            $("#optservicedetailIsales_rep option[value='" + sales_representative + "']").prop('selected', 'selected').change();
        }
    }
    else {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]['id'] = "";
        objectArray[0]['name'] = "";

        setOptionSets(objectArray, "#optservicedetailIsales_rep", "", "", "", false);
        $("#optservicedetailIsales_rep").val("");
    }

}

function setSDSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.sales_users) {
            if (getLocalStorageOptionSetData("users") === "") {
                setLocalStorageOptionSetData("users", data);
            }
            setOptionSets(data.sales_users, "#optservicedetailIsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
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
            setOptionSets(objectArray, "#optservicedetailIsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
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
            setOptionSets(objectArray, "#optcontactoems", defaultSelected, "id", "name+ +(+id+)", false);
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

function onCheckedSecureStorageForInbox() {
    $("#chkservicedetailIsecure_storage").change(function () {
        if (this.checked) {
            showSecureStorageAlert("INBOX");
        }
    });
}

function onCheckedSecureStorageForSend() {
    $("#chkservicedetailOsecure_storage").change(function () {
        if (this.checked) {
            showSecureStorageAlert("SEND");
        }
    });
}


function toggleUnlockAccount() {
    if ($('#chkaccountlocked').prop("checked")) {
        $("#chkaccountlocked").removeAttr("disabled");
        //$("#chkaccountlocked").attr({ "disabled": "disabled" });
    } else {
        $("#chkaccountlocked").attr({ "disabled": "disabled" });
    }
}
function onChangeAccountLocked() {

    $('#chkaccountlocked').change(function () {
        putAjaxFunc("customers/" + customerKey + "/accountunlock", null, onAccountUnlocked, "");
        //alert("account locked");
        //labelforsucces
    });
}

var onAccountUnlocked = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divAccountUnlockedMainError > span").html(data.errors[0].developer_message);
                $("#divAccountUnlockedMainError").show();
            }
        } else {
            $("#divAccountUnlockedMainSuccess > span").html(data.success.message);
            $("#divAccountUnlockedMainSuccess").show();
            toggleUnlockAccount();
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divAccountUnlockedMainError  > span").html(data.responseJSON.errors[0].user_message);
                } else {
                    $("#divAccountUnlockedMainError > span").html(data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divAccountUnlockedMainError > span").html(data.responseJSON.errors[0].developer_message);
            }
            $("#divAccountUnlockedMainError").show();

        }
        else {
            $("#divAccountUnlockedMainError > span").html("Request Cancelled.");
            $("#divAccountUnlockedMainError").show();
            CancelRequest = false;
        }
    }
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
                $(item.radioid).prop("checerked", true);
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
    if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
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
    TextLimit($("#txtcontactcompany_name"), 61);
    TextLimit($("#txtcontactaddress_line1"), 61);
    TextLimit($("#txtcontactaddress_line2"), 61);
    TextLimit($("#txtcontactcity"), 61);
    TextLimit($("#txtcontactstate_prov"), 21);
    TextLimit($("#txtcontactpostal_code"), 21);
    TextLimit($("#txtcontactemail_address"), 101);
    TextLimit($("#txtcontactwork_number"), 41);
    TextLimit($("#txtcontactfax_number"), 41);
    TextLimit($("#txtcontacthome_number"), 41);
    TextLimit($("#txtcontactmobile_number"), 41);
    TextLimit($("#txtcontactnotes"), 2001);



    TextLimit($("#txtbillpaymentfirst_name"), 31);
    TextLimit($("#txtbillpaymentlast_name"), 31);
    TextLimit($("#txtbillpaymentaddress_line1"), 61);
    TextLimit($("#txtbillpaymentaddress_line2"), 61);
    TextLimit($("#txtbillpaymentcity"), 61);
    TextLimit($("#txtbillpaymentstate_province"), 21);
    TextLimit($("#txtbillpaymentpostal_code"), 21);
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
                                    showLoginScreen();
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
function onClickTabs() {
    $("#hrefContact").off("click").on("click", function (e) {
        turnOffCollectionMethodErrors();
        if (currentTabOpen != "tabsloaded.contact") {
            $("#divContactMainSuccess").hide();
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefContact");
                return false;
            }
            else {
                tabsloaded.bill_payment = false;
                tabsloaded.bill_info = false;
                if (!tabsloaded.contact) {
                    tabsloaded.contact = true;
                    //$("#hrefContact").children(":first").trigger("click");
                    callPermissionAPI(["hrefContact"]);
                    //
                    if (!$(ids_for_contactBillingDiv.toString()).is(":visible")) {
                        $("#hrefcontact_billingDiv").hide();
                    } else {
                        $("#hrefcontact_billingDiv").show();
                    }

                    getContactDetails();
                }
                uncheckOTPifChecked();
                currentTabOpen = "tabsloaded.contact";
            }
        }
    });
    $("#hrefBilling").off("click").on("click", function (e) {
        turnOffCollectionMethodErrors();
        if (currentTabOpen != "tabsloaded.bill_payment") {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefBilling");
                return false;
            }
            else {
                if (!tabsloaded.bill_info) {
                    callPermissionAPI(["hrefBilling"]);
                    tabsloaded.bill_info = true;
                }
                uncheckOTPifChecked();
                $("[id*=hrefBilling_]").toArray().forEach(function (elem) {
                    if (elem.className == "active") {
                        var searchActive = {
                            "hrefBilling_payments": "tabsloaded.bill_payment",
                            "hrefBilling_transactionhistory": "tabsloaded.bill_transactionhistory",
                            "hrefBilling_viewCharges": "tabsloaded.bill_viewcharges",
                            "hrefBilling_invoice": "tabsloaded.bill_invoice"
                        };
                        currentTabOpen = searchActive[elem.id];
                    }
                });
                //currentTabOpen = "tabsloaded.bill_payment";
            }
        }
    });
    $("#hrefBilling_payments").off("click").on("click", function (e) {
        if (currentTabOpen != "tabsloaded.bill_payment") {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefBilling_payments");
                return false;
            }
            else {
                turnOffCollectionMethodErrors();
                turnOffBillingPaymentErrors();
                if (!tabsloaded.bill_payment) {

                    callPermissionAPI(["hrefBilling_payments", "tblISPCreditCards"]);
                    tabsloaded.bill_payment = true;
                    getBillingPayment();

                }
                currentTabOpen = "tabsloaded.bill_payment";
                uncheckOTPifChecked();
            }
        }
    });

    $("#hrefBilling_viewCharges").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange("#hrefBilling_viewCharges");
            return false;
        }
        else {
            if (!tabsloaded.bill_viewcharges) {
                callPermissionAPI(["hrefBilling_viewCharges"]);
                tabsloaded.bill_viewcharges = true;
                loadBilliing_AccountTransactionTab();
            }
            uncheckOTPifChecked();
            currentTabOpen = "tabsloaded.bill_viewcharges";
        }
        turnOffAdjustmentErrors();
        clearAdjustmentForm();
        toggleAdjustmentSection();

        $("#txtbillATadjustment_date").val(moment().format('MM/DD/YYYY'));
        setSingleDatePicker("txtbillATadjustment_date");

        if ($("#btntoggleAdjustmentCollapse").attr("aria-expanded") == "true") {
            $("#btntoggleAdjustmentCollapse").trigger("click");
            onClickbtnSaveAdjustment();
        }

    });
    $("#hrefBilling_invoice").off("click").on("click", function (e) {
        turnOffInvocieErrors()
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange("#hrefBilling_invoice");
            return false;
        }
        else {
            if (!tabsloaded.bill_invoice) {
                tabsloaded.bill_invoice = true;
                getBillingInvoiceGrid();
            }
            uncheckOTPifChecked();
            currentTabOpen = "tabsloaded.bill_invoice";
        }

    });
    $("#hrefBilling_transactionhistory").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange("#hrefBilling_transactionhistory");
            return false;
        }
        else {
            if (!tabsloaded.bill_transactionhistory) {
                tabsloaded.bill_transactionhistory = true;
                getTransactionHistoryGrid();
            }
            uncheckOTPifChecked();
            currentTabOpen = "tabsloaded.bill_transactionhistory";
        }

    });
    $("#hrefServices").off("click").on("click", function (e) {
        if (currentTabOpen.toString().indexOf("tabsloaded.services") == -1) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServices");
                return false;
            }
            else {
                if (!tabsloaded.servicessummary) {
                    callPermissionAPI(["hrefServices", "tblISPservice_summary", "divServiceSuspensionFlags", "divServiceDeactivateService"]);
                    tabsloaded.servicessummary = true;
                    getServiceSummaryGrid();

                }
                tabsloaded.usage = false;
                tabsloaded.servicesusage = false;
                tabsloaded.bill_info = false;
                tabsloaded.bill_payment = false;

                turnOffServiceDeactivationErrors();
                uncheckOTPifChecked();
                $("#optdeactivationreason").val("Select a reason");
                $("[id*=hrefService]").not("#hrefServices").toArray().forEach(function (elem) {
                    if (elem.className == "active") {
                        var searchActive = {
                            "hrefServiceDetails": "tabsloaded.services_details",
                            "hrefServiceNumberActivation": "tabsloaded.services_numberactivation",
                            "hrefServiceGifts": "tabsloaded.services_gifts",
                            "hrefServiceUsage": "tabsloaded.servicesusage",
                            "hrefServiceFaxUsageHistory": "tabsloaded.services_faxusagehistory"
                        };
                        $("#" + elem.id).trigger("click");
                        //currentTabOpen = searchActive[elem.id];
                    }
                });
                //currentTabOpen = "tabsloaded.servicessummary";
            }
        }
    });
    $("#hrefServiceDetails").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.services_details" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceDetails");
                return false;
            } else {
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                currentTabOpen = "tabsloaded.services_details";
                currentServiceTabOpen = "hrefServiceDetails";
                if (!tabsloaded.services_details) {
                    tabsloaded.services_details = true;
                    callPermissionAPI(["divServiceSuspensionFlags"]);
                    callPermissionAPI(["hrefServiceDetails"]);
                    getServiceDetail();
                }
            }
        }
    });

    bindOnClickhrefServiceNumberActivation();

    $("#hrefServiceCancel").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.services_numberactivation" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceCancel");
                return false;
            } else {
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                currentTabOpen = tabsloaded.services_cancel;
                currentServiceTabOpen = "hrefServiceCancel";

                if (!tabsloaded.services_cancel) {

                    tabsloaded.services_cancel = true;
                }
            }
        }
    });

    $("#hrefServiceGifts").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.services_gifts" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceGifts");
                return false;
            } else {
                currentTabOpen = " tabsloaded.services_gifts";
                currentServiceTabOpen = "hrefServiceGifts";
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                if (!tabsloaded.services_gifts) {
                    callPermissionAPI(["hrefServiceGifts"]);
                    tabsloaded.services_gifts = true;
                    getGiftsGrid();
                }
            }
        }
    });

    $("#hrefServiceUsage").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.servicesusage" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceUsage");
                return false;
            } else {
                currentTabOpen = "tabsloaded.servicesusage";
                currentServiceTabOpen = "hrefServiceUsage";
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                getOrderAmount();
                if (!tabsloaded.servicesusage) {
                    callPermissionAPI(["hrefServiceUsage"]);
                    tabsloaded.servicesusage = true;
                    getServiceUsageTab();
                }
            }
        }
    });

    $("#hrefServiceFaxUsageHistory").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.services_faxusagehistory" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceFaxUsageHistory");
                return false;
            } else {
                currentTabOpen = "tabsloaded.services_faxusagehistory";
                currentServiceTabOpen = "hrefServiceFaxUsageHistory";
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                if (!tabsloaded.services_faxusagehistory) {
                    callPermissionAPI(["hrefServiceFaxUsageHistory"]);
                    tabsloaded.services_faxusagehistory = true;
                    getServiceFaxUsage();
                }
            }
        }
    });

    $("#hrefEvents").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange("#hrefEvents");
            return false;
        }
        else {
            turnOffEventErrors();
            if (!tabsloaded.events) {
                tabsloaded.events = true;
                getEventsGrid();
            }
            uncheckOTPifChecked();
            currentTabOpen = "tabsloaded.events";
        }
    });
    $("#hrefAccountManagement").off("click").on("click", function (e) {
        if (currentTabOpen != "tabsloaded.accountmanagement") {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefAccountManagement");
                return false;
            }
            else {
                turnOffAccountManagementErrors();
                getHeaderInformation();
                isCloseDateApplied = false;
                setTimeout(function () {
                    setCloseAccountFields();
                }, 2000);
                if (!tabsloaded.accountmanagement) {
                    tabsloaded.accountmanagement = true;
                    getAccountManagement();
                    onkeypressCloseAccount();
                    clearControlsAccountManagement();
                }
                uncheckOTPifChecked();
                currentTabOpen = "tabsloaded.accountmanagement";

            }
        }
    });
}

var removeOnClickhrefServiceNumberActivation = function () {
    $("#hrefServiceNumberActivation > a").css({
        "pointer-events": "none",
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceNumberActivation").css({
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceNumberActivation").off("click").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    });
}
var bindOnClickhrefServiceNumberActivation = function () {
    $("#hrefServiceNumberActivation > a").css({
        "pointer-events": "auto",
        "color": "#000 !important"
    });
    $("#hrefServiceNumberActivation").off("click").on("click", function (e) {
        if ($("#txtcontactcollection_method").val() == "N") {
            $("#numberActivationUsageBal").hide();
            $("#numberActivationSubTotal").hide();
        } else {
            $("#numberActivationUsageBal").show();
            $("#numberActivationSubTotal").show();
        }
        if ((currentTabOpen != "tabsloaded.services_numberactivation" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceNumberActivation");
                return false;
            } else {
                currentTabOpen = "tabsloaded.services_numberactivation";
                currentServiceTabOpen = "hrefServiceNumberActivation";
                callPermissionAPI(["hrefServiceNumberActivation"]);
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                loadNumberActivation();
            }
        }
    });
}

function showSimpleDialogTabChange(tabclicked) {
    var functiontocall = "";
    var popUpButtons = 0;
    var htmlcontent = "";

    switch (currentTabOpen) {
        case "tabsloaded.contact":
            functiontocall = "tabChangeFromContactMM";
            //set html
            htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
            htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
            htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
            break;
        case "tabsloaded.bill_payment":
            if (isInOTP) {
                functiontocall = "tabChangeFromBillingPaymentOTP";
                //set html
                htmlcontent = "<p align='center'> Would you like to continue Processing the Payment? </p><p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";

            } else {
                functiontocall = "tabChangeFromBillingPaymentMM";
                //set html
                htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";

            }
            break;
        case "tabsloaded.bill_viewcharges":
            functiontocall = "tabChangeFromBillingViewCharge";
            //set html
            htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
            htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
            htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
            break;
        case "tabsloaded.services" + currentTabOpen.toString().slice("tabsloaded.services".length):
            if (isInDeactivationMode) {
                functiontocall = "tabChangeFromServiceDeactivation";
                //set html
                htmlcontent = "<p align='center'> Would you like to Deactivate the Service? </p><p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                break;
            }
            if (isInSuspendFlagMode) {
                functiontocall = "tabChangeFromServiceSuspensionFlag";

                htmlcontent = "<p align='center'> Do you want to apply the changes to the suspension flags? </p><p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>Yes</button>";
                htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                break;
            }
            switch (currentTabOpen) {
                case "tabsloaded.services_details":
                    if (isInOfferCodeMM) {
                        functiontocall = "tabChangeFromOfferCodeMM";

                        htmlcontent = "<p align='center'> Would you like to continue changing the plan?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                        htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                    } else if (isInReactivationMode) {
                        functiontocall = "tabChangeFromServiceDetailReactivation";

                        htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                        htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                        htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";

                    } else if (saveServiceDetailMode == addOrUpdate.add) {
                        functiontocall = "tabChangeFromServiceDetailAddService";

                        htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                        htmlcontent += "<button class='btn' onclick='window.parent.sd.hide(); $(`#DivWaitprocessWithButton`).show();setTimeout(function(){" + functiontocall + "(false, \"" + tabclicked + "\");},100);'>No</button>";
                        htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";

                    }
                    else {
                        functiontocall = "tabChangeFromServiceDetail";

                        htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                        htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                        htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
                    }
                    break;
                case "tabsloaded.servicesusage":
                    functiontocall = "tabChangeFromUsage";
                    //set html
                    htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                    htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                    htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
                    break;

                case "tabsloaded.services_gifts":
                    functiontocall = "tabChangeFromServiceGift";
                    //set html
                    htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
                    htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
                    htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
                    break;
            }

            break;
        case "tabsloaded.accountmanagement":
            functiontocall = "tabChangeFromAccountManagement";
            //set html
            htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
            htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
            htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
            break;
        case "tabsloaded.events":
            functiontocall = "tabChangeFromEvents";
            //set html
            htmlcontent = "<p align='center'>Please Save your changes before proceeding.  <br /></p> <p align='center'> Would you like to save the data?</p><p align='center'>	<button class='btn' onclick='" + functiontocall + "(true, \"" + tabclicked + "\"); window.parent.sd.hide();'>Yes</button>";
            htmlcontent += "<button class='btn' onclick='" + functiontocall + "(false, \"" + tabclicked + "\");window.parent.sd.hide();'>No</button>";
            htmlcontent += "<button class='btn' onclick='window.parent.sd.hide();'>Cancel</button>";
            break;


        default:
            functiontocall = "";
            htmlcontent = "";
            break;
    }

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
function tabChangeFromServiceDetailAddService(saveData, tabclicked) {

    if (saveData) {
        $('.nav-tabs a[href="#service-details"]').tab('show');
        if (serviceType == "INBOX")
            $("#btnSaveServiceDetailInbox").trigger("click");
        else
            $("#btnSaveServiceDetailSend").trigger("click");
        currentTabOpen = "tabsloaded.services_details";
    } else {

        isInModificationMode = false;
        saveServiceDetailMode = addOrUpdate.update;
        //empty table of current plan detail
        $("#tblISPservice_findOfferCode > tbody").html("");
        $("#btnService_resetOfferCode").trigger("click");
        //empty table of select DID.
        $("#tblISPservice_Did > tbody").html("");
        $('[data-toggle="othertooltip3"]').tooltip("destroy");
        if ($("#btntoggleserviceIfindplan").attr("aria-expanded") == "true") {
            $("#btntoggleserviceIfindplan").trigger("click");
        }
        if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "true") {
            $("#btntoggleserviceItelephone").trigger("click");
        }


        var ahref = $("#tblISPservice_summary > tbody").children(":first").children(":first").children(":first");
        ahref.trigger("click");
        servicedetailInbox_keypress = true;
        turnOffServiceDetail();


        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }

}

function tabChangeFromContactMM(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#contact"]').tab('show');
        $("#btnSaveContact").trigger("click");
        currentTabOpen = "tabsloaded.contact";
    } else {
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkbillpaymentOTP") == -1) {
            //tabsloaded.contact = false;
            isInModificationMode = false;
            //contactform_original_data = $("#contact :input").serialize();
            getContactDetails();
            turnOffContactErrors();


            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            $("#" + tabclicked).trigger("click");
        }
    }
}
function tabChangeFromBillingPaymentMM(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#Payments"]').tab('show');
        tabsloaded.bill_transactionhistory = false;
        if ($("#optbillpaymentcollection_methods").val() == "C") {
            $("#btnSavebillPayment").trigger("click");
        } else if ($("#optbillpaymentcollection_methods").val() == "P") {
            $("#btnSavebillPaymntParent").trigger("click");
        } else if ($("#optbillpaymentcollection_methods").val() == "N") {
            $("#btnbillCollectionMethodUpdate").trigger("click");
        }
        currentTabOpen = "tabsloaded.bill_payment";
    } else {
        tabsloaded.bill_transactionhistory = false;
        getCollectionMethodOptionSet();
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("credit_card_id") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkbillpaymentOTP") == -1 && tabclicked.indexOf("optbillpaymentcollection_methods") == -1) {
            isInModificationMode = false;
            turnOffBillingPaymentErrors();
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');

            if (saveCCMode == addOrUpdate.add) {
                $("#btnbillpaymentAddCreditCard").trigger("click");
            } else {
                $("#credit_card_id" + $("#txtbillpaymentcredit_card_id").val()).trigger("click");
            }
        } else {
            if (tabclicked.indexOf("optbillpaymentcollection_methods") == 0) {
                isInModificationMode = false;
                isInCollectionMethodDetailUpdate = false;
                $("#optbillpaymentcollection_methods").val(final_value_onchange_optbillpaymentcollection_methods);
                $("#optbillpaymentcollection_methods").trigger("change");
            } else {
                isInModificationMode = false;
                $("#" + tabclicked).trigger("click");
            }

        }

    }
}
function tabChangeFromBillingPaymentOTP(saveData, tabclicked) {
    if (saveData) {

    } else {
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("credit_card_id") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkbillpaymentOTP") == -1) {

            isInModificationMode = false;
            turnOffBillingPaymentErrors();
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');

            if (saveCCMode == addOrUpdate.add) {
                $("#btnbillpaymentAddCreditCard").trigger("click");
            } else {
                $("#credit_card_id" + $("#txtbillpaymentcredit_card_id").val()).trigger("click");
            }
        } else {
            isInModificationMode = false;
            $("#" + tabclicked).trigger("click");
        }

    }
}
function tabChangeFromBillingViewCharge(saveData, tabclicked) {
    turnOffAdjustmentErrors();
    if (saveData) {
        $('.nav-tabs a[href="#Charges"]').tab('show');

        $("#btnSaveAdjustment").trigger("click");

        currentTabOpen = "tabsloaded.bill_viewcharges";
    } else {
        clearAdjustmentForm();
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("credit_card_id") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("vcc_journal_key") == -1 && tabclicked.indexOf("btnFilterAccountTransanction") == -1) {
            isInModificationMode = false;

            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            $("#" + tabclicked).trigger("click");

        }

    }
}

function tabChangeFromServiceDeactivation(saveData, tabclicked) {
    if (saveData) {

    } else {
        isInModificationMode = false;
        isInDeactivationMode = false;
        turnOffServiceDeactivationErrors();
        getDeactivationReasons();
        toggleDeactivationReason();
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("chkServices_") == -1) {
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}
function tabChangeFromServiceSuspensionFlag(saveData, tabclicked) {
    if (saveData) {

    } else {
        isInModificationMode = false;
        turnOffServiceDeactivationErrors();
        getServiceSuspedFlags();
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}
function tabChangeFromServiceDetail(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#service-details"]').tab('show');
        if (serviceType == "INBOX")
            $("#btnSaveServiceDetailInbox").trigger("click");
        else
            $("#btnSaveServiceDetailSend").trigger("click");
        currentTabOpen = "tabsloaded.services_details";
    } else {
        isInModificationMode = false;
        servicedetailInbox_keypress = true;
        turnOffServiceDetail();
        getServiceDetail();
        toggleOfferCodeSection();
        toggleSelectDIDSection();

        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}

function tabChangeFromServiceDetailReactivation(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#service-details"]').tab('show');
        if (serviceType == "INBOX")
            $("#btnSaveServiceDetailInbox").trigger("click");
        else
            $("#btnSaveServiceDetailSend").trigger("click");
        currentTabOpen = "tabsloaded.services_details";
    } else {
        isInModificationMode = false;
        isInReactivationMode = false;
        servicedetailInbox_keypress = true;
        turnOffServiceDetail();
        getServiceDetail();
        toggleOfferCodeSection();
        toggleSelectDIDSection();
        togglebtnReactivateService();

        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}

function tabChangeFromServiceDetail(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#service-details"]').tab('show');
        if (serviceType == "INBOX")
            $("#btnSaveServiceDetailInbox").trigger("click");
        else
            $("#btnSaveServiceDetailSend").trigger("click");
        currentTabOpen = "tabsloaded.services_details";
    } else {
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {
            if (tabclicked.indexOf("btnServiceDetailIEmailAdd") != -1) {
                isInModificationMode = false;
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked.indexOf("btnServiceDetailIEmailRemove") != -1) {
                isInModificationMode = false;
                $("#" + tabclicked).trigger("click");
            }
            else {

                isInModificationMode = false;
                servicedetailInbox_keypress = true;
                turnOffServiceDetail();
                getServiceDetail();
                toggleOfferCodeSection();
                toggleSelectDIDSection();

                $(tabclicked).trigger("click");
                var navigateTo = $(tabclicked).children().attr("href");
                $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
            }
        } else {
            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                isInModificationMode = false;
                servicedetailInbox_keypress = true;
                turnOffServiceDetail();
                getServiceDetail();
                toggleOfferCodeSection();
                toggleSelectDIDSection();
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                isInModificationMode = false;
                servicedetailInbox_keypress = true;
                turnOffServiceDetail();
                getServiceDetail();
                toggleOfferCodeSection();
                toggleSelectDIDSection();
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}

function tabChangeFromOfferCodeMM(saveData, tabclicked) {
    if (saveData) {

    } else {
        isInModificationMode = false;
        isInOfferCodeMM = false;
        turnOffServiceDetail();
        getServiceDetail();

        $("input[id*=chkService_findOC]").toArray().reduce(function (t, element) { if ($(element).is(":checked")) { $(element).trigger("click") } }, "");
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("servicekey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkservicesummary_") == -1 && tabclicked.indexOf("btnSuspendService") == -1) {

            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');

        } else {

            if (tabclicked.indexOf("chkservicesummary_") == -1) {
                $("#" + tabclicked).trigger("click");
            } else if (tabclicked != $("input[name=servicesummaryfilter]:checked").attr("id")) {
                $("#" + tabclicked).trigger("click");
                $("#" + tabclicked).trigger("change");
            }
        }
    }
}
function tabChangeFromEvents(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#Events"]').tab('show');
        setTimeout(function () {
            //$("#btnSaveEvents").trigger("click");
            if (saveEventMode === addOrUpdate.add) {
                onClickbtnInsertEvent();
            } else {
                onClickbtnModifyEvent();
            }
        }, 300);
        currentTabOpen = "tabsloaded.events";
    } else {
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("eventskey") == -1 && tabclicked.indexOf("btnResetfilterEvents") == -1 && tabclicked.indexOf("btnFilterEvents") == -1) {
            //tabsloaded.contact = false;
            isInModificationMode = false;

            //contactform_original_data = $("#contact :input").serialize();
            if (saveEventMode == addOrUpdate.add) {
                saveEventMode = addOrUpdate.update;
                $("#tblISPevents > tbody").children(":first").children(":first").children(":first").next().trigger("click");
            } else {
                $("#eventskey" + eventskey).trigger("click");
            }
            turnOffEventErrors();

            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            turnOffEventErrors();
            saveEventMode = addOrUpdate.update;
            $("#" + tabclicked).trigger("click");
        }
    }
}


function tabChangeFromUsage(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#usage"]').tab('show');
        setTimeout(function () {
            //$("#btnSaveEvents").trigger("click");
            if (isInReorderAmountUpdate) {
                $("#btnsavereorderamount").trigger("click");
            } else {
                $("#btnserviceusageTransferUsage").trigger("click");
            }

        }, 300);
        currentTabOpen = "tabsloaded.servicesusage";
    } else {
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("eventskey") == -1 && tabclicked.indexOf("btnResetfilterEvents") == -1 && tabclicked.indexOf("btnFilterEvents") == -1) {
            //tabsloaded.contact = false;
            isInModificationMode = false;

            //contactform_original_data = $("#contact :input").serialize();

            turnoffReorderAmountError();
            turnoffTransferAmountError();
            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            turnoffReorderAmountError();
            turnoffTransferAmountError();
            $("#" + tabclicked).trigger("click");
        }
    }
}

function tabChangeFromServiceGift(saveData, tabclicked) {
    if (saveData) {
        //  $('.nav-tabs a[href="#gift-usage"]').tab('show');
        setTimeout(function () {
            //$("#btnSaveEvents").trigger("click");
            if (saveGiftMode === addOrUpdate.add) {
                onClickbtnInsertGift();
            } else {
                onClickbtnModifyGift();
            }
        }, 300);
        currentTabOpen = "tabsloaded.services_gifts";
    } else {
        saveGiftMode = addOrUpdate.update;
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("combogifts") == -1 && tabclicked.indexOf("btnResetfilterEvents") == -1 && tabclicked.indexOf("btnFilterEvents") == -1) {
            //tabsloaded.contact = false;
            isInModificationMode = false;

            //contactform_original_data = $("#contact :input").serialize();

            // if (saveGiftMode == addOrUpdate.add) {
            //     saveGiftMode = addOrUpdate.update;
            //    $("#tblISPgifts > tbody").children(":first").children(":first").children(":first").trigger("click")
            // } else {
            if (isComboGift) {
                $("#combogifts" + combogiftkey).trigger("click");
            } else {
                $("#servicegifts" + servicegiftkey).trigger("click");
            }

            // }

            turnOffGiftErrors();

            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            turnOffGiftErrors();
            saveGiftMode = addOrUpdate.update;
            $("#" + tabclicked).trigger("click");
        }
    }
}


function tabChangeFromAccountManagement(saveData, tabclicked) {
    if (saveData) {
        $('.nav-tabs a[href="#AccountManagement"]').tab('show');
        $("#btnaccmanageSaveCloseAccount").trigger("click");
        currentTabOpen = "tabsloaded.accountmanagement";
    } else {
        $("#txtaccmanageaccount_tentative_close_date").val("");
        $("#optaccmanageclose_reason").val("");
        if (tabclicked.indexOf("customerkey") == -1 && tabclicked.indexOf("btnMainReset") == -1 && tabclicked.indexOf("chkbillpaymentOTP") == -1) {
            //tabsloaded.contact = false;
            isInModificationMode = false;
            //contactform_original_data = $("#contact :input").serialize();
            getContactDetails();
            turnOffAccountManagementErrors();


            $(tabclicked).trigger("click");
            var navigateTo = $(tabclicked).children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        } else {
            isInModificationMode = false;
            $("#" + tabclicked).trigger("click");
        }
    }
}

//===END::: Manage tab clicks and changes.(including modification mode managing)




//===START::: Retrieve Info of Billing Tab -> Payment Tab

function getBillingPayment() {
    //diable all controls
    $("input[id*=txtbill_]").attr({ "disabled": "disabled" });
    $("input[id*=txtbillpayment]").removeAttr("disabled");
    toggleDivsOfBillingForm("Other");
    //$("select[id*=optbill]").attr({ "disabled": "disabled" });
    //$("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });

    if (customerKey) {
        //getExpirationyear();
        clearBillingInfoControls();

        getHeaderInformation();
        getBillingPaymentGrid();
        //setCurrencyCode();
        getCollectionMethodOptionSet();
        billingpaymentform_blank_data = $("#Payments :input").serialize();
        billingpaymentCCinfo_blank = $("#divBillPaymentCCinfo :input").serialize();
        onClickbtnicnCopyFromContactTab();

        onChangetxtbillpaymentcard_number();
        onClickbtnSavebillPayment();
        onClickbtnResetbillPayment();
        onClickbtnAddCreditCard();
        onClickbtnbillProcessPayment();
        onChangetxtbillCreditCard();
        getBillingCountryOptionSetsFunc("");
        onChangeBillingPaymentForm();

        onChangeParentCustomerForm();
        onkeypressParentCustomerForm();

        onkeypressBillingPaymentForm();
        onChangeCCdetails();
        onChangeSelectCountryBillPayment();
        onPasteExpirationYear();
        onClickCollectionMethodUpdate();
        onClickParentCustomerMethodUpdate();
        onChangechkbillpaymentOTP();
        onChangetxtbill_onetime();
        validatetxtbill_onetime();
        $("#chkbillpaymentOTP").prop("checked", false);
        $("#chkbillpaymentOTP").trigger("change");

        onKeyPresstxtbillpaymntParent_customerid();
        onClickicnbillpaymntParent_customerid();
        onEntertxtbillpaymntParent_customerid();
        onChangeoptbillpaymentcollection_methods();
        getPaypalCollectionMethodDtls();
        getParentCustomerDtls();
        setTimeout(function () {
            if ($("#optbillpaymentcollection_methods option:selected").val() == "A") {
                $("#optbillpaymentcollection_methods").attr("disabled", true);
            } else {
                $("#optbillpaymentcollection_methods").attr("disabled", false);
            }
        }, 2800);


    }
}

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

var showUsagesAlert = function () {
    var htmlcontent = "<p align='left'>Cannot complete this request until Main Balance is collected.</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>OK</button>";
    //htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";
    // if(serviceType == "INBOX"){
    //     htmlcontent += "<button class='btn' onclick='uncheckSecureStorageInbox();window.parent.sd.hide();'>Cancel</button>";
    //  }else{
    ////      htmlcontent += "<button class='btn' onclick='uncheckSecureStorageSend();window.parent.sd.hide();'>Cancel</button>";
    // }

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var showSecureStorageAlert = function (serviceType) {
    var htmlcontent = "<p align='left'>Please advise the customer that, all stored messages of Inbox & Send services will be deleted.</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='window.parent.sd.hide();'>OK</button>";
    //htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";
    if (serviceType == "INBOX") {
        htmlcontent += "<button class='btn' onclick='uncheckSecureStorageInbox();window.parent.sd.hide();'>Cancel</button>";
    } else {
        htmlcontent += "<button class='btn' onclick='uncheckSecureStorageSend();window.parent.sd.hide();'>Cancel</button>";
    }

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

function uncheckSecureStorageInbox() {
    $('#chkservicedetailIsecure_storage').attr("checked", false);
    $('#chkservicedetailIsecure_storage').trigger("change");
}
function uncheckSecureStorageSend() {
    $('#chkservicedetailOsecure_storage').attr("checked", false);
    $('#chkservicedetailOsecure_storage').trigger("change");
}
function getCollectionMethodOptionSet() {
    currency_code = $("#txtcontactcurrency_code").val();
    getSetCurrencyOptionSetsFunc(currency_code);
    getAjaxFunc("customers/" + customerKey + "/collection_methods", setCollectionMethodOptionSet, $("#txtcontactcollection_method").val());

}
function setCollectionMethodOptionSet(data, issuccess, contact_detail_collectionmethod) {
    if (issuccess) {
        if (data.collection_methods) {

            setLocalStorageOptionSetData("collectionmethods", data);

            //setOptionSetsForceDefaultValue("", "#optbillpaymentcollection_methods", "", "", "", "");
            setOptionSets(data.collection_methods, "#optbillpaymentcollection_methods", contact_detail_collectionmethod, "collection_method", "description", true);
            toggleDivsOfBillingForm(contact_detail_collectionmethod);
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
            // $("#divbillingCCformInvoice").hide();
            $("#billingdivcurrency").show();
            $("#divbillingccdtls").show();
            $("#BillingInoviceButton").hide();
            $("#BillingCCButton").show();
            $("#chkbill_onetime_addtoaccount").show();
             $("#CCDetails :input").attr("disabled", false);
            // $("#CCDetails :input").not("#btnicnCopyFromContactTabInvoice,#btnResetbillPayment").val("");
        },
        N: function () {
            //credit card
            $("#divbillingCCform").show();
            $("#divbillingccdtls").hide();
            $("#CCDetails").show();
            // $("#divbillingCCformInvoice").hide();
            $("#BillingInoviceButton").show();
            $("#divbillingCCform2").show();
            $("#divbillingCCform_false").hide();
            $("#billingdivcurrency").show();
            $("#BillingCCButton").hide();
           // $("#CCDetails :input").not("#btnicnCopyFromContactTabInvoice,#btnResetbillPayment,#btnbillpaymentAddCreditCard,#btnicnCopyFromContactTab,#btnSavebillPayment").val("");
            if (!$("#chkbillpaymentOTP").is("checked") ) {
                $("#CCDetails :input").attr("disabled", true);
            }
            $("#chkbill_onetime_addtoaccount").hide();

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
    }).off("change").on("change", function (e) {
        turnOffCollectionMethodErrors();
        turnOffBillingPaymentErrors();
        if (isInModificationMode && ((!isInCollectionMethodUpdate && !isInCollectionMethodDetailUpdate) || (isInCollectionMethodUpdate && isInCollectionMethodDetailUpdate))) {
            final_value_onchange_optbillpaymentcollection_methods = $(this).val();
            $(this).val(initial_value_optbillpaymentcollection_methods);
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        if ($("#txtcontactcollection_method").val() !== $(this).val()) {
            isInCollectionMethodUpdate = true;
            isInModificationMode = true;
        } else {
            isInCollectionMethodUpdate = false;
            isInModificationMode = false;
        }
        if($(this).val() == "C" || $(this).val() == "N"){

              $("#chkbillpaymentOTP").prop("checked", false);
        $("#txtbill_onetime_main,#txtbill_onetime_usage,#txtbill_onetime_ppu,#txtbill_onetime_usagetax").val("");
        }
       
        // if($(this).val() == "C" && !isInModificationMode){
        ///     clearCreditCardDetails();
        //     $("#optbillpaymentcollection_methods").focus()
        // }


        toggleDivsOfBillingForm($(this).val());
        togglebtnbillCollectionMethodUpdate($(this).val());
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

    var getFromLocalStorage = getLocalStorageOptionSetData("currencies");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/currencies", setCurrencyOptionSetsFunc, currency_id);
    }
    else {
        setCurrencyOptionSetsFunc(getFromLocalStorage, true, currency_id);
    }

    if (currency_id === "" || currency_id === null) {
        var objectArray = [];
        objectArray[0] = {};
        objectArray[0]["id"] = "";


        setOptionSetsForceDefaultValue(objectArray, "#optbillpaymentcurrencies", "", "", "", "");
        $("#optbillpaymentcurrencies").val("");
    }
    $("#optbillpaymentcurrencies").attr({ "disabled": "disabled" });
}

/*function getCurrencyDecimalPlacesFunc() {
    var getFromLocalStorage = getLocalStorageOptionSetData("currencies_decimalplaces");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/currencies/" + currencies_symbol, setCurrencyDecimalPlaces, "");
    }
    else {
        setCurrencyDecimalPlaces(getFromLocalStorage, true, "");
    }
}

function setCurrencyDecimalPlaces(data, issuccess, defaultSelected) {
    if (data.currencies) {
        currency_decimalplaces = data.decimal_places;
    }
}*/

function setCurrencyOptionSetsFunc(data, issuccess, defaultSelected) {
    if (issuccess) {
        if (data.currencies) {
            if (getLocalStorageOptionSetData("currencies") === "") {
                setLocalStorageOptionSetData("currencies", data);
            }

            setOptionSets(data.currencies, "#optbillpaymentcurrencies", defaultSelected, "code", "description", false);

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
            setOptionSets(objectArray, "#optbillpaymentcurrencies", defaultSelected, "code", "description", false);
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
        $("#optbillpaymentcountry_code").val("");

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
}
function setBillingCountryOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.countries) {
            if (getLocalStorageOptionSetData("countries") === "") {
                setLocalStorageOptionSetData("countries", data);
            }
            setOptionSets(data.countries, "#optbillpaymentcountry_code", selectedbydefault, "code", "name", true);
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

var loadBilliing_AccountTransactionTab = function () {
    onKeyPresstxtAdjustmentAmount();

    onClickbtnSaveAdjustment();
    onkeypressAdjustmentForm();
    onChangeAdjustmentForm();
    onChangeAccountCodeDropDown();
    getAdjustmentAccountCodeOptionSet();
    $("#txtbillATadjustment_description").prop("disabled", true);
    $("#lbladjustmentFinalamountlabel").text("Final Amount to be adjusted: " + currencies_symbol);
    $("#lblAdjustmentAmount").text("Enter Amount: " + currencies_symbol);

    $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    // $("#btnSaveAdjustment").addClass("disabled").removeClass("grey-btn");
    getBillingVCCGrid();
}

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

    //  $("#" + textboxID).on('apply.daterangepicker', function (ev, picker) {
    // $("#" + textboxID).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    //  });

    // $("#" + textboxID).on('cancel.daterangepicker', function (ev, picker) {
    //$(this).val('');
    //});

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
var onClickbtnFilterAccountTransanction = function () {
    $("#btnFilterAccountTransanction").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        clearAdjustmentForm();
        turnOffAdjustmentErrors();
        var $txtbillVCCfromtofilter = $("#txtbillVCCfromtofilter").val();
        pageJournalsCurrentPage = 1;
        pageJournalsTotalPage = 1;
        pageJournalsStartAt = 1;
        if ($txtbillVCCfromtofilter) {
            isFilteredBillingVCC = true;
            var $txtbillVCCfromtofilter_split = $txtbillVCCfromtofilter.split('-');
            startDateJournal = moment($txtbillVCCfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateJournal = moment($txtbillVCCfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');


            getAjaxFunc("customers/" + customerKey + "/journals?startAt=1&maxResults=1&startDate=" + startDateJournal + "&endDate=" + endDateJournal, setJournalsPageParams, true);

            //getJournalsGridPages();
        } else {
            getAjaxFunc("customers/" + customerKey + "/journals?startAt=1&maxResults=100&startDate=" + startDateJournal + "&endDate=" + endDateJournal, setJournalsPageParams, true);
        }
    });
    $("#btnResetfilterAccountTransanction").off("click").on("click", function () {
        $("#txtbillVCCfromtofilter").val("").trigger("change");
        if (isFilteredBillingVCC) {
            pageJournalsCurrentPage = 1;
            pageJournalsStartAt = 1;
            getBillingVCCGrid();
        }
        isFilteredBillingVCC = false;
    });
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


/*var getAdjustmentAccountCode = function () {
    getAjaxFunc("/customers/" + $("#txthdrid").val() + "/adjustment", setAccountCodeForAdjustment, "");
}

function setAccountCodeForAdjustment(data, issuccess) {

    if (issuccess) {
        if (data.account_codes) {
            setOptionSetsForceDefaultValue(data.account_codes, "#optbillATaccount_code", "", "description", "code", "");
            $("#txtbillATadjustment_description").val(data.account_codes[0].description);
            $("#txtbillATadjustment_description").attr("title", data.account_codes[0].description);
            // $("#txtbillATadjustment_description").attr("data-adjustment-description",)
        }
    }
}*/

function turnOffAdjustmentErrors() {
    // $("div[id*=divEventMainError]").hide();
    $("#divAdjustmentMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divAdjustmentMainError").css('visibility', 'hidden');

    $("#divAdjustmentMainSuccess").css('visibility', 'hidden');
}

function showAdjustmentError(msg) {
    $("#divAdjustmentMainError").html("<span>" + msg + "</span>");
    $("#divAdjustmentMainError").css('visibility', 'visible');
}
var onClickbtnSaveAdjustment = function () {

    $("#btnSaveAdjustment").off("click").on("click", function () {
        turnOffAdjustmentErrors();
        if (isInModificationMode) {
            if (!$("#txtbillATadjustment_date").val()) {
                //  $("#divAdjustmentMainError").html("<span>Please provide adjustment date.</span>");
                // $("#divAdjustmentMainError").show("Please provide adjustment date.");
                showAdjustmentError("Please provide adjustment date.");
            }
            else if ($("#optbillATaccount_code").val() == "Select") {
                showAdjustmentError("Please provide account code.");
                // $("#divAdjustmentMainError").html("<span>Please provide account code.</span>");
                //  $("#divAdjustmentMainError").show();
            }
            else if (!$("#txtbillATadjustment_description").val()) {
                // $("#divAdjustmentMainError").html("<span>Please provide adjustment description.</span>");
                //$("#divAdjustmentMainError").show();
                showAdjustmentError("Please provide adjustment description.");
            } else if (!$("#txtbillATamount").val()) {
                // $("#divAdjustmentMainError").html("<span>Please provide adjustment amount.</span>");
                // $("#divAdjustmentMainError").show();
                showAdjustmentError("Please provide adjustment amount.");
            } else if ($("#txtbillATamount").val() <= 0) {
                // $("#divAdjustmentMainError").html("<span>Adjustment amount should be greater than 0.</span>");
                // $("#divAdjustmentMainError").show();
                showAdjustmentError("Adjustment amount should be greater than 0.");
            } else {
                onSaveAdjustment();
            }


        } else {
            //  $("#divAdjustmentMainError").html("<span>No changes to save</span>");
            // $("#divAdjustmentMainError").show();
            showAdjustmentError("No changes to save");
        }
    });
}

var onSaveAdjustment = function () {
    turnOffAdjustmentErrors();
    var objadjustment_detail = new Object();
    objadjustment_detail.adjustment = new Object();

    var txtbillATAdjustment = $("input[id*=txtbillAT],select[id*=optbillAT],input[id*=chkbillAT]");
    txtbillATAdjustment.each(function () {
        var attrid = $(this).attr("id");
        var propname = attrid.replace("txtbillAT", "").replace("optbillAT", "").replace("chkbillATadjustment", "").replace("chkbillAT", "");
        objadjustment_detail.adjustment[propname] = ($(this).val() === "" ? null : $(this).val());

    });
    objadjustment_detail.adjustment.amount = $("#txtbillATamount").val();
    objadjustment_detail.adjustment.account_code = $("#optbillATaccount_code  option:selected").text();
    objadjustment_detail.adjustment.post_credit = $("#chkbillATadjustmentpost_credit").is(":checked");
    objadjustment_detail.adjustment.post_charge = $("#chkbillATadjustmentpost_charge").is(":checked");
    objadjustment_detail.adjustment.create_memo = $("#chkbillATcreate_memo").is(":checked");
    postAjaxFunc("customers/" + customerKey + "/adjustment", JSON.stringify(objadjustment_detail), onAddAdjustmentDetails);
}


var onAddAdjustmentDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divAdjustmentMainError").html("</br>" + data.errors[0].developer_message);
                //$("#divAdjustmentMainError").show();
                $("#divAdjustmentMainError").css('visibility', 'visible');
                /// showAdjustmentError("No changes to save");
            }
        } else {


            isInModificationMode = false;

            $("#btnFilterAccountTransanction").trigger("click");

            setTimeout(function () {
                getHeaderInformation();
                getAdjustmentAccountCodeOptionSet();
                $("#divAdjustmentMainSuccess").html("</br>" + 'Adjustment completed successfully.');
                $("#divAdjustmentMainSuccess").css('visibility', 'visible');

            }, 3000);

            adjustment_form_keypress = false;

            $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            $("#optbillATaccount_code").val($("#optbillATaccount_code option:first").val());
            $("#optbillATaccount_code").trigger("change");
            setTimeout(function () {
                togglebtnAddNewService();
            }, 5000);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divAdjustmentMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divAdjustmentMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divAdjustmentMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            //$("#divAdjustmentMainError").show();
            $("#divAdjustmentMainError").css('visibility', 'visible');
        }
        else {
            $("#divAdjustmentMainError").html("</br>Request Cancelled.");
            //$("#divAdjustmentMainError").show();
            $("#divAdjustmentMainError").css('visibility', 'visible');
            CancelRequest = false;
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

//==END::: Billing Tab-> View Charges and collection tab

//==START::: Billing Tab-> Invoice Tab

function getBillingInvoiceGrid() {
    onClickbtnFilterBillInvoice();
    setDatePicker("txtbillInvoicefromtofilter");
    togglebtnFilterBillInvoice();
    isFilteredbillInvoice = false;
    onClickbtnBillNumber();
    onClickbtnInvoiceEmail();
    $("#txtbillInvoicefromtofilter").val("").trigger("change");

    if (customerKey) {
        getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=1", setInvoicesPageParams, true);
    }
}
var togglebtnFilterBillInvoice = function () {
    $("#txtbillInvoicefromtofilter").off("change").on("change", function () {
        if ($(this).val()) {
            $("#btnFilterBillInvoice").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnFilterBillInvoice").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}
var onClickbtnFilterBillInvoice = function () {
    $("#btnFilterBillInvoice").off("click").on("click", function (e) {
        var $txtbillInvoicefromtofilter = $("#txtbillInvoicefromtofilter").val()
        if ($txtbillInvoicefromtofilter) {
            isFilteredbillInvoice = true;
            var $txtbillInvoicefromtofilter_split = $txtbillInvoicefromtofilter.split('-');
            startDateInvoice = moment($txtbillInvoicefromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateInvoice = moment($txtbillInvoicefromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            pageInvoiceCurrentPage = 1;
            pageInvoicesTotalPage = 1;
            pageInvoiceStartAt = 1;
            getAjaxFunc("customers/" + customerKey + "/invoices?startAt=1&maxResults=1&startDate=" + startDateInvoice + "&endDate=" + endDateInvoice, setInvoicesPageParams, true);
        }
    });
    $("#btnResetfilterBillInvoice").off("click").on("click", function () {
        $("#txtbillInvoicefromtofilter").val("").trigger("change");
        if (isFilteredbillInvoice) {
            pageInvoiceCurrentPage = 1;
            pageInvoiceStartAt = 1;
            pageInvoicesTotalPage = 1;
            getBillingInvoiceGrid();
        }
        isFilteredbillInvoice = false;
    });
}
function getInvoicesGridPages() {
    if (isFilteredbillInvoice) {
        getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=" + pageInvoicesPageSize + "&startDate=" + startDateInvoice + "&endDate=" + endDateInvoice, setBillingInvoiceGrid, "");
    } else {
        getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=" + pageInvoicesPageSize, setBillingInvoiceGrid, "");
    }
    //getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=" + pageInvoicesPageSize, setBillingInvoiceGrid, "");
}

function invoicesPageChange() {
    $("a[id*=hrefpageInvoices]").off("click").on("click", function (e) {
        turnOffInvocieErrors();
        var pagebtn = $(this).data("pagebtn");
        if ($(this).css('pointer-events') == 'none') {
            e.preventDefault();
            return false;
        }
        if (pagebtn == "first") {
            pageInvoicesCurrentPage = 1;
            setInvoicesPageParams("", "", false);
        }
        if (pagebtn == "last") {
            pageInvoicesCurrentPage = pageInvoicesTotalPage;
            setInvoicesPageParams("", "", false);
        }
        if (pagebtn == "next") {
            pageInvoicesCurrentPage = pageInvoicesCurrentPage + 1;
            setInvoicesPageParams("", "", false);
        }
        if (pagebtn == "previous") {
            pageInvoicesCurrentPage = pageInvoicesCurrentPage - 1;
            setInvoicesPageParams("", "", false);
        }
        $("#tblISPbillinvoices > tbody").scrollTop(0);
        e.preventDefault();
    });


    $("#txtpageInvoicesCurrentPage").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if (isNormalInteger(this.value)) {
                var enteredValue = parseInt(this.value);
                if (enteredValue >= pageInvoicesTotalPage) {
                    pageInvoicesCurrentPage = pageInvoicesTotalPage;
                    setInvoicesPageParams("", "", false);
                }
                else {
                    pageInvoicesCurrentPage = enteredValue;
                    setInvoicesPageParams("", "", false);
                }
            }
            else {
                pageInvoicesCurrentPage = 1;
                setInvoicesPageParams("", "", false);
            }
            $("#tblISPbillinvoices > tbody").scrollTop(0);
        }

    });
}

function setInvoicesPageParams(data, issuccess, settingFirstTime) {
    if (settingFirstTime) {
        if (issuccess) {
            if (data.invoices) {
                pageInvoicesTotalRecords = (parseInt(data.total)) ? parseInt(data.total) : 1;
                pageInvoicesTotalPage = setNumberOfPages(pageInvoicesTotalRecords, pageInvoicesPageSize);
                pageInvoicesTotalPage = (pageInvoicesTotalPage) ? pageInvoicesTotalPage : 1;

                $("#txtpageInvoicesCurrentPage").val(String(pageInvoicesCurrentPage));
                $("#lblpageInvoicesTotalPage").html("of " + pageInvoicesTotalPage);

                var lblpageInvoices1 = "";
                if (pageInvoicesPageSize >= pageInvoicesTotalRecords) {
                    pageInvoicesEndAt = pageInvoicesTotalRecords;
                }
                else {
                    pageInvoicesEndAt = pageInvoicesPageSize;
                }
                lblpageInvoices1 = pageInvoicesStartAt + "-" + pageInvoicesEndAt + " of " + pageInvoicesTotalRecords;
                $("#lblpageInvoicesStartAt").html(lblpageInvoices1);
                invoicesPageChange();
            }
        }
        else {
            var newrow = $("<tr />");
            if (!CancelRequest) {
                $("#tblISPbillinvoices > tbody").html("");
                $("#tblISPbillinvoices").append(newrow);
                if (data.responseJSON.message) {
                    newrow.append($("<td colspan=10 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
                }
                if (data.responseJSON.errors) {
                    newrow.append($("<td colspan=10 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }
            }
            else {
                $("#tblISPbillinvoices > tbody").html("");
                $("#tblISPbillinvoices").append(newrow);
                newrow.append($("<td colspan=10 style=\"width:90%\">Request Cancelled.</td>"));
                CancelRequest = false;
            }
            return false;
        }
    }
    else {
        pageInvoicesStartAt = ((pageInvoicesCurrentPage * pageInvoicesPageSize - pageInvoicesPageSize) + 1);
        $("#txtpageInvoicesCurrentPage").val(String(pageInvoicesCurrentPage));

        if (pageInvoicesCurrentPage < pageInvoicesTotalPage) {
            pageInvoicesEndAt = pageInvoicesStartAt + (pageInvoicesPageSize - 1);
        }
        else if (pageInvoicesCurrentPage == pageInvoicesTotalPage) {
            pageInvoicesEndAt = pageInvoicesTotalRecords;
        }
        lblpageInvoices1 = pageInvoicesStartAt + "-" + pageInvoicesEndAt + " of " + pageInvoicesTotalRecords;
        $("#lblpageInvoicesStartAt").html(lblpageInvoices1);
    }
    if (pageInvoicesCurrentPage == 1) {
        $("#lipageInvoicesPrevious").removeClass();
        $("#hrefpageInvoicesFirst").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageInvoicesPrevious").attr("style", "pointer-events: none; cursor: default;");
    }

    if (pageInvoicesCurrentPage > 1) {
        $("#lipageInvoicesPrevious").addClass("active");

        $("#hrefpageInvoicesFirst").removeAttr("style");
        $("#hrefpageInvoicesPrevious").removeAttr("style");
    }

    if (pageInvoicesCurrentPage < pageInvoicesTotalPage) {
        $("#lipageInvoicesNext").addClass("active");

        $("#hrefpageInvoicesNext").removeAttr("style");
        $("#hrefpageInvoicesLast").removeAttr("style");
    }

    if (pageInvoicesCurrentPage == pageInvoicesTotalPage) {
        $("#lipageInvoicesNext").removeClass();
        $("#hrefpageInvoicesNext").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageInvoicesLast").attr("style", "pointer-events: none; cursor: default;");
    }

    getInvoicesGridPages();

}

function setBillingInvoiceGrid(data, issuccess) {
    turnOffInvocieErrors();
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.invoices) {
            drawBillingInvoicesTable(data.invoices);
            $("#btnBillinvoiceExportCSV,#btnBillInvoiceExportExcel").prop("disabled", false);
            $("#btnBillinvoiceExportCSV,#btnBillInvoiceExportExcel").removeClass("disabled");

            $("#lblpageInvoicesStartAt").show();
            $("#txtpageInvoicesCurrentPage").parent().show();
        }
        else {
            if (isFilteredbillInvoice) {
                $("#btnBillinvoiceExportCSV,#btnBillInvoiceExportExcel").prop("disabled", true);
                $("#btnBillinvoiceExportCSV,#btnBillInvoiceExportExcel").addClass("disabled");
            }
            $("#tblISPbillinvoices > tbody").html("");
            $("#tblISPbillinvoices").append(newrow);

            newrow.append($("<td colspan=10 style=\"width:90%\">No Invoices found in the System</td>"));

            $("#lblpageInvoicesStartAt").hide();
            $("#txtpageInvoicesCurrentPage").parent().hide();
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPbillinvoices > tbody").html("");
            $("#tblISPbillinvoices").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=10 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=10 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPbillinvoices > tbody").html("");
            $("#tblISPbillinvoices").append(newrow);
            newrow.append($("<td colspan=10 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
function drawBillingInvoicesTable(data) {
    $("#lblNoOfRecordsBillInvoice").hide();

    $("#tblISPbillinvoices > tbody").html("");
    $("#tblISPbillinvoices > thead > tr:first-child").removeClass();
    if (data.length > 7) {
        $("#tblISPbillinvoices > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            data[i].row_color = LIGHT_GREEN;
        } else {
            data[i].row_color = LIGHT_WHITE;
        }
        drawBillingInvoicesRows(data[i]);
    }
    if (data.length > 0) {
        //$("#lblNoOfRecordsBillInvoice").html(data.length + " row(s) returned.").show();
    }
    onClickbtnBillNumber();
    onClickbtnInvoiceEmail();
    turnOffInvocieErrors();

}

function drawBillingInvoicesRows(rowData) {

    var row = $("<tr style=\"background-color:" + rowData.row_color + " \">");
    $("#tblISPbillinvoices").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + ((rowData.bill_date) ? moment(rowData.bill_date.slice(0, -3)).format("MM/DD/YYYY") : "") + "</td>"));
    // row.append($("<td>" + rowData.bill_number + "</td>"));
    row.append($("<td><a href=\"#\" id=\"billnumber" + rowData.bill_number + "\" data-billnumber=\"" + rowData.bill_number + "\"  data-jdassetkey=\"" + rowData.jdasset_key + "\" data-billkey=\"" + rowData.bill_key + "\" data-invoiceurl=\"" + rowData.invoice_url + "\">" + rowData.bill_number + "</a></td>"));
    //   row.append($("<td>" + rowData.bill_number  + "</br><a href=\"#\" id=\"invoicebillnumberkey" + rowData.bill_number + "\" data-invoicebillnumberkey=\"" + rowData.bill_number + "\">#" + rowData.event_key + "</a></td>"));
    //row.append($("<td>" + rowData.system_code + "</td>"));
    row.append($("<td>" + rowData.previous_balance + "</td>"));
    row.append($("<td>" + rowData.payment_amount + "</td>"));
    row.append($("<td>" + rowData.adjustment_amount + "</td>"));
    row.append($("<td>" + rowData.charge_amount + "</td>"));
    row.append($("<td>" + rowData.current_amount + "</td>"));
    //row.append($("<td>" + Strings.orEmpty(rowData.email_status) + "</td>"));
    //row.append($("<td>" + Strings.orEmpty(rowData.print_status) + "</td>"));
    row.append($("<td> <input type=\"button\" class=\"grey-btn\" value=\"Email\"  id=\"btnInvoiceEmail" + rowData.bill_number + "\" data-invoicenumber=\"" + rowData.bill_number + "\" data-billkey=\"" + rowData.bill_key + "\"  data-systemcode=\"" + rowData.system_code + "\"></input></td>"));

}

function turnOffInvocieErrors() {
    // $("div[id*=divEventMainError]").hide();
    $("#divInvoiceMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divInvoiceMainError").hide();

    $("#divInvoiceMainSuccess").hide();
}

function onClickbtnInvoiceEmail() {

    $("input[id*=btnInvoiceEmail]").off("click").on("click", function (e) {
        turnOffInvocieErrors()
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }

        postAjaxFunc("customers/" + customerKey + "/invoices/" + $(this).data("billkey") + "/send_email", "", onSendInvoiceEmail);
        //      $('#opteventsevent_type option[value="S"]').prop("disabled", false);
        //    $('#opteventsevent_type option[value="A"]').prop("disabled", false);

        // clearEventsTab();
        // $("#btnAddEvents").removeAttr("disabled").attr({ "class": "grey-btn" });
        // eventskey = $(this).data("eventskey");

        //  turnOffEventErrors();
        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}

var onSendInvoiceEmail = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divInvoiceMainError").html("</br>" + data.errors[0].developer_message);
                $("#divInvoiceMainError").show();
            }
        } else {
            isInModificationMode = false;
            getBillingInvoiceGrid();
            setTimeout(function () {
                $("#divInvoiceMainSuccess").html("</br>" + 'Invoice sent.');
                $("#divInvoiceMainSuccess").show();
            }, 3000);
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divInvoiceMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divInvoiceMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divInvoiceMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divInvoiceMainError").show();
        }
        else {
            $("#divInvoiceMainError").html("</br>Request Cancelled.");
            $("#divInvoiceMainError").show();
            CancelRequest = false;
        }
    }
}

function onClickbtnBillNumber() {

    $("a[id*=billnumber]").off("click").on("click", function (e) {
        turnOffInvocieErrors();
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }

        jdassetkeyforInvoice = $(this).data("jdassetkey");
        if (jdassetkeyforInvoice) {
            window.open($(this).data("invoiceurl"), '_blank');
        } else {

            window.open("/apex/J2_ISP_TOOL_INVOICE?customerkey =" + customerKey + "&billnumber=" + $(this).data("billkey") + "&oemid=" + $("#optcontactoems").val() + "&customer=" + customerKey, '_blank');
            //window.open("E:/Salesforce/ISP%2520UI%2520To%2520Salesforce/branches/ISPUI_To_Salesforce/Release11/invoice.html?customerkey =" + customerKey + "&billnumber=" + $(this).data("billkey") + "&oemid=" + $("#optcontactoems").val() + "&customer=" + customerKey, '_blank');
        }
        //      $('#opteventsevent_type option[value="S"]').prop("disabled", false);
        //    $('#opteventsevent_type option[value="A"]').prop("disabled", false);

        // clearEventsTab();
        // $("#btnAddEvents").removeAttr("disabled").attr({ "class": "grey-btn" });
        // eventskey = $(this).data("eventskey");

        //  turnOffEventErrors();
        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}
//==END::: Billing Tab-> Invoice Tab

//==START::: Billing Tab -> Transaction tab
function getTransactionHistoryGrid() {

    onClickbtnFilterTHcollection();
    Collectionsclickedforfirsttime = false;

    setDatePicker("txtbillTHcollectionfromtofilter");
    togglebtnFilterTransctionHistory();

    $("#txtbillTHcollectionfromtofilter").val("").trigger("change");
    if (customerKey) {
        getAjaxFunc("customers/" + customerKey + "/collections?startAt=" + pageCollectionsStartAt + "&maxResults=1", setCollectionsPageParams, true);
    }
}

var togglebtnFilterTransctionHistory = function () {
    $("#txtbillTHcollectionfromtofilter").off("change").on("change", function () {
        if ($(this).val()) {
            $("#btnFilterTHcollection").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnFilterTHcollection").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}
var onClickbtnFilterTHcollection = function () {
    $("#btnFilterTHcollection").off("click").on("click", function (e) {
        var $txtbillTHcollectionfromtofilter = $("#txtbillTHcollectionfromtofilter").val()
        if ($txtbillTHcollectionfromtofilter) {
            isFilteredCollection = true;
            var $txtbillTHcollectionfromtofilter_split = $txtbillTHcollectionfromtofilter.split('-');
            startDateCollections = moment($txtbillTHcollectionfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateCollections = moment($txtbillTHcollectionfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            Collectionsclickedforfirsttime = false;

            pageCollectionsCurrentPage = 1;
            pageCollectionsTotalPage = 1;
            pageCollectionsStartAt = 1;
            getAjaxFunc("customers/" + customerKey + "/collections?startAt=1&maxResults=1&startDate=" + startDateCollections + "&endDate=" + endDateCollections, setCollectionsPageParams, true);
        }
    });
    $("#btnResetfilterTHcollection").off("click").on("click", function () {
        $("#txtbillTHcollectionfromtofilter").val("").trigger("change");

        if (isFilteredCollection) {
            pageCollectionsCurrentPage = 1;
            pageCollectionsStartAt = 1;
            Collectionsclickedforfirsttime = false;
            getTransactionHistoryGrid();
        }
        isFilteredCollection = false;
    });
}

function getCollectionsGridPages() {
    if (isFilteredCollection) {
        getAjaxFunc("customers/" + customerKey + "/collections?startAt=" + pageCollectionsStartAt + "&maxResults=" + pageCollectionsPageSize + "&startDate=" + startDateCollections + "&endDate=" + endDateCollections, setBillingTransactionGrid, "");
    } else {
        getAjaxFunc("customers/" + customerKey + "/collections?startAt=" + pageCollectionsStartAt + "&maxResults=" + pageCollectionsPageSize, setBillingTransactionGrid, "");
    }
}

function collectionsPageChange() {
    $("a[id*=hrefpageCollections]").off("click").on("click", function (e) {
        var pagebtn = $(this).data("pagebtn");
        if ($(this).css('pointer-events') == 'none') {
            e.preventDefault();
            return false;
        }
        if (pagebtn == "first") {
            pageCollectionsCurrentPage = 1;
            setCollectionsPageParams("", "", false);
        }
        if (pagebtn == "last") {
            pageCollectionsCurrentPage = pageCollectionsTotalPage;
            setCollectionsPageParams("", "", false);
        }
        if (pagebtn == "next") {
            pageCollectionsCurrentPage = pageCollectionsCurrentPage + 1;
            setCollectionsPageParams("", "", false);
        }
        if (pagebtn == "previous") {
            pageCollectionsCurrentPage = pageCollectionsCurrentPage - 1;
            setCollectionsPageParams("", "", false);
        }

        $("#tblISPbillingTransaction_history > tbody").scrollTop(0);
        e.preventDefault();
    });


    $("#txtpageCollectionsCurrentPage").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if (isNormalInteger(this.value)) {
                var enteredValue = parseInt(this.value);
                if (enteredValue >= pageCollectionsTotalPage) {
                    pageCollectionsCurrentPage = pageCollectionsTotalPage;
                    setCollectionsPageParams("", "", false);
                }
                else {
                    pageCollectionsCurrentPage = enteredValue;
                    setCollectionsPageParams("", "", false);
                }
            }
            else {
                pageCollectionsCurrentPage = 1;
                setCollectionsPageParams("", "", false);
            }
            $("#tblISPbillingTransaction_history > tbody").scrollTop(0);
        }
    });
}

function setCollectionsPageParams(data, issuccess, settingFirstTime) {
    if (settingFirstTime) {
        if (issuccess) {
            if (data.collections) {
                pageCollectionsTotalRecords = (parseInt(data.total)) ? parseInt(data.total) : 1;
                pageCollectionsTotalPage = setNumberOfPages(pageCollectionsTotalRecords, pageCollectionsPageSize);
                pageCollectionsTotalPage = (pageCollectionsTotalPage) ? pageCollectionsTotalPage : 1;

                $("#txtpageCollectionsCurrentPage").val(String(pageCollectionsCurrentPage));
                $("#lblpageCollectionsTotalPage").html("of " + pageCollectionsTotalPage);

                var lblpageCollections1 = "";
                if (pageCollectionsPageSize >= pageCollectionsTotalRecords) {
                    pageCollectionsEndAt = pageCollectionsTotalRecords;
                }
                else {
                    pageCollectionsEndAt = pageCollectionsPageSize;
                }
                lblpageCollections1 = pageCollectionsStartAt + "-" + pageCollectionsEndAt + " of " + pageCollectionsTotalRecords;
                $("#lblpageCollectionsStartAt").html(lblpageCollections1);
                $("#txtpageCollectionsCurrentPage").parent().show();
                collectionsPageChange();
            } else {
                $("#lblpageCollectionsStartAt").html("");
                $("#txtpageCollectionsCurrentPage").val("");
                //$("#txtpageCollectionsCurrentPage").attr("disabled", "disabled");
                $("#txtpageCollectionsCurrentPage").parent().hide();
                $("#lblpageCollectionsTotalPage").html("");
                $("#lblpageCollectionsStartAt").html("");
            }
        }
        else {
            var newrow = $("<tr />");
            if (!CancelRequest) {
                $("#tblISPbillingTransaction_history > tbody").html("");
                $("#tblISPbillingTransaction_history").append(newrow);
                if (data.responseJSON.message) {
                    newrow.append($("<td colspan=9 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
                }
                if (data.responseJSON.errors) {
                    newrow.append($("<td colspan=9 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }
            }
            else {
                $("#tblISPbillingTransaction_history > tbody").html("");
                $("#tblISPbillingTransaction_history").append(newrow);
                newrow.append($("<td colspan=9 style=\"width:90%\">Request Cancelled.</td>"));
                CancelRequest = false;
            }
            return false;
        }
    }
    else {
        pageCollectionsStartAt = ((pageCollectionsCurrentPage * pageCollectionsPageSize - pageCollectionsPageSize) + 1);
        $("#txtpageCollectionsCurrentPage").val(String(pageCollectionsCurrentPage));

        if (pageCollectionsCurrentPage < pageCollectionsTotalPage) {
            pageCollectionsEndAt = pageCollectionsStartAt + (pageCollectionsPageSize - 1);
        }
        else if (pageCollectionsCurrentPage == pageCollectionsTotalPage) {
            pageCollectionsEndAt = pageCollectionsTotalRecords;
        }
        lblpageCollections1 = pageCollectionsStartAt + "-" + pageCollectionsEndAt + " of " + pageCollectionsTotalRecords;
        $("#lblpageCollectionsStartAt").html(lblpageCollections1);
    }
    if (pageCollectionsCurrentPage == 1) {
        $("#lipageCollectionsPrevious").removeClass();
        $("#hrefpageCollectionsFirst").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageCollectionsPrevious").attr("style", "pointer-events: none; cursor: default;");
    }

    if (pageCollectionsCurrentPage > 1) {
        $("#lipageCollectionsPrevious").addClass("active");

        $("#hrefpageCollectionsFirst").removeAttr("style");
        $("#hrefpageCollectionsPrevious").removeAttr("style");
    }

    if (pageCollectionsCurrentPage < pageCollectionsTotalPage) {
        $("#lipageCollectionsNext").addClass("active");

        $("#hrefpageCollectionsNext").removeAttr("style");
        $("#hrefpageCollectionsLast").removeAttr("style");
    }

    if (pageCollectionsCurrentPage == pageCollectionsTotalPage) {
        $("#lipageCollectionsNext").removeClass();
        $("#hrefpageCollectionsNext").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageCollectionsLast").attr("style", "pointer-events: none; cursor: default;");
    }

    getCollectionsGridPages();

}

function setBillingTransactionGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data && data.collections && data.collections.length > 0) {
            drawBillingTransactionTable(data.collections);
        }
        else {
            $("#tblISPbillingTransaction_history > tbody").html("");
            $("#tblISPbillingTransaction_history").append(newrow);
            $("input[id*=txtbillTH]").not("#txtbillTHcollectionfromtofilter").val("");
            $("input[id*=txtbillTH]").removeAttr("style");
            $("input[id*=txtbillTH]").not("#txtbillTHcollectionfromtofilter").attr("disabled", "disabled");
            newrow.append($("<td colspan=9 style=\"width:90%\">No Collection History found in the System</td>"));
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPbillingTransaction_history > tbody").html("");
            $("#tblISPbillingTransaction_history").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=9 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=9 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPbillingTransaction_history > tbody").html("");
            $("#tblISPbillingTransaction_history").append(newrow);
            newrow.append($("<td colspan=9 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
function drawBillingTransactionTable(data) {
    //clear all details
    //$("#lblNoOfRecordsBillTransaction").hide();
    clearBillingTransactionDetails();
    $("#chkbillTHupdate_status").attr({ "disabled": "disabled" });

    $("#tblISPbillingTransaction_history > tbody").html("");
    $("#tblISPbillingTransaction_history > thead > tr:first-child").removeClass();
    if (data.length > 6) {
        $("#tblISPbillingTransaction_history > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    var rowcolor = "#ffffff";
    for (var i = 0; i < data.length; i++) {
        drawBillingTransactionRows(data[i], rowcolor);
        rowcolor = (rowcolor == "#c0ffc0" ? "#ffffff" : "#c0ffc0");
    }

    onClickbtnCollectionKey();
    makeRowActive();
    if (data.length > 0) {
        //if (!Collectionsclickedforfirsttime) {
        $("#tblISPbillingTransaction_history > tbody").children(":first").children(":first").children(":first").trigger("click");
        //  Collectionsclickedforfirsttime = true;
        //}
        //$("#lblNoOfRecordsBillTransaction").html(data.length + " row(s) returned.").show();
    }
    $("input[id*=txtbillTH]").not("#txtbillTHcollectionfromtofilter").attr("disabled", "disabled");
    //gridDesignFix("#tblISPbillingTransaction_history");
}

function drawBillingTransactionRows(rowData, rowcolor) {

    var row = $("<tr style=\"background-color:" + rowcolor + " \">");
    $("#tblISPbillingTransaction_history").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td><a href=\"#\" id=\"collectionkey" + rowData.collection_key + "\" data-collectionkey=\"" + rowData.collection_key + "\">" + rowData.collection_key + "</a></td>"));
    row.append($("<td>" + rowData.request_date + "</td>"));
    row.append($("<td>" + (rowData.description !== undefined ? rowData.description : "") + "</td>"));
    row.append($("<td>" + (rowData.account_number !== undefined ? rowData.account_number : "") + "</td>"));
    row.append($("<td>" + (rowData.collection_method !== undefined ? rowData.collection_method : "") + "</td>"));
    var statusColorCode = "";

    if (rowData.status && (rowData.status == "CB" || rowData.status == "S" || rowData.status == "Z")) {
        statusColorCode = LIGHT_RED;
    } else {
        statusColorCode = "";
    }
    row.append($("<td style=\"background-color:" + statusColorCode + " !important\">" + Strings.orEmpty(rowData.status) + "</td>"));

    var responseColorCode = "";
    if (rowData.status != "A" && rowData.status != "N" && rowData.status != "U") {
        if (rowData.response && (rowData.response.toUpperCase() == "DECLINED" || rowData.response.toUpperCase() == "ERROR" || rowData.response.toUpperCase() == "CHARGEBACK" || rowData.response.toUpperCase() == "SUSPEND" || rowData.response.toUpperCase() == "UNKNOWN")) {
            responseColorCode = LIGHT_RED;
        } else {
            responseColorCode = "";
        }
    }
    row.append($("<td style=\"background-color:" + responseColorCode + " !important\">" + Strings.orEmpty(rowData.response) + "</td>"));


    var amountColorCode = "";
    var amountinNumbers = Number(rowData.amount.replace(/[^0-9\.]+/g, ""));
    if (rowData.preauth_flag != 0) {
        amountColorCode = LIGHT_YELLOW;
    } else if (rowData.amount.indexOf("(") == 0 || amountinNumbers === 0) {
        amountColorCode = "";
    } else {
        amountColorCode = LIGHT_RED;
    }
    row.append($("<td style=\"background-color:" + amountColorCode + " !important\">" + ((rowData.amount) ? rowData.amount : "") + "</td>"));
    row.append($("<td>" + rowData.created_by + "</td>"));
}

function gridDesignFix(tblID) {
    var height = $(tblID + " tbody > tr").height();
    $(tblID + " tbody  > tr > td").css("height", height);
}

function onClickbtnCollectionKey() {
    $("a[id*=collectionkey]").off("click").on("click", function (e) {

        clearBillingTransactionDetails();

        var collectionKey = $(this).data("collectionkey");
        getAjaxFunc("customers/" + customerKey + "/collections/" + collectionKey, setTransactionDetails, "");

        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}
function setTransactionDetails(data, issuccess) {
    if (issuccess) {
        if (data.collection) {
            for (var property in data.collection) {
                if (data.collection.hasOwnProperty(property)) {
                    $("input[id=txtbillTH" + property + "]").val(data.collection[property]);
                }
            }
            var statusColorCode = "";
            if (data.collection.status && (data.collection.status.toUpperCase() == "CHARGEBACK" || data.collection.status.toUpperCase() == "SUSPEND")) {
                statusColorCode = LIGHT_RED;
            } else {
                statusColorCode = "";
            }
            $("#txtbillTHstatus").val(Strings.orEmpty(data.collection.status));
            $("#txtbillTHstatus").attr("style", "background-color:" + statusColorCode + "");

            var responseColorCode = "";
            if (data.collection.status.toUpperCase() != "ACTIVE" && data.collection.status.toUpperCase() != "NEW" && data.collection.status.toUpperCase() != "USER INTERVENTION") {
                if (data.collection.response) {
                    if ((data.collection.response.toUpperCase() == "APPROVED")) {
                        responseColorCode = LIGHT_GREEN;
                    } else {
                        responseColorCode = LIGHT_RED;
                    }
                }
            }
            //$("#txtbillTHresponse_description").val(((data.collection.response_description) ? data.collection.response_description : ""));
            $("#txtbillTHresponse").attr("style", "background-color:" + responseColorCode + "");

            var amountColorCode = "";
            var amountinNumbers = Number(data.collection.amount.replace(/[^0-9\.]+/g, ""));
            if (data.collection.preauth_flag && data.collection.preauth_flag != 0) {
                amountColorCode = LIGHT_YELLOW;
            } else if (data.collection.amount.indexOf("(") == 0 && amountinNumbers !== 0) {
                amountColorCode = LIGHT_RED;
            } else {
                amountColorCode = "";
            }
            $("#txtbillTHamount").val(Strings.orEmpty(data.collection.amount).replace("(", "").replace(")", ""));
            $("#txtbillTHamount").attr("style", "background-color:" + amountColorCode + "");

            if (data.collection.update_status) {
                $("#chkbillTHupdate_status").prop("checked", data.collection.update_status)
            }
            else {
                $("#chkbillTHupdate_status").prop("checked", false)
            }
        }
    }
}
function clearBillingTransactionDetails() {
    $("input[id*=txtbillTH]").not("#txtbillTHcollectionfromtofilter").val("");
    $("input[id*=txtbillTH]").removeAttr("style");
}

//==END::: Billing Tab -> Transaction tab

//==START::: Service TAB -> Summary
function clearServicesTab() {
    $("input:checkbox[id*=chkServices_]").prop("checked", false);
    $("#optdeactivationreason").val("Select a reason");
    $("#divServiceSummaryError").hide();
    $("#divServiceSummarySuccess").hide();

}
function getServiceSummaryGrid() {
    //disable all checkboxes
    //$("input:checkbox[id*=chkServices_]").attr({ "disabled": "disabled" });
    clearServicesTab();
    if ($("#optcontactoems").val() == "2") {
        $("#gift").text("Combo Gift");
        $("#btngiftdiv").css("display", "block");
        isComboGift = true;
    } else {
        $("#gift").text("Gift & Usage");
        $("#btngiftdiv").css("display", "block");
        isComboGift = false;
    }
    if (customerKey) {
        onClickServiceRadioButtons();
        onChangeServiceRadioButtons();
        getServiceSuspedFlags();
        onChangeoptdeactivationreason();
        $("#chkservicesummary_active").prop("checked", true);
        $("#chkservicesummary_active").trigger("change");
    }
}

function onClickServiceRadioButtons() {
    $("input[name=servicesummaryfilter]:radio").off("click").on("click", function (e) {
        //handle modification mode.
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
    });
}

function onChangeServiceRadioButtons() {
    $("input[name=servicesummaryfilter]:radio").off("change").on("change", function (e) {
        //handle modification mode.
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }

        var filterSelected = $("input[name=servicesummaryfilter]:checked").val();
        var appendvariable = "";
        if (filterSelected == "active") {
            appendvariable = "?status=Active,SUSPEND,ORDERED";
        } else if (filterSelected == "inactive") {
            appendvariable = "?status=InActive,Closed";
        } else {
            appendvariable = "?status=all";
        }

        getAjaxFunc("customers/" + customerKey + "/services" + appendvariable, setServiceSummaryGrid, "");
    });
}

function setServiceSummaryGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.services) {
            drawServiceSummaryTable(data.services);
        }
        else {
            $("#tblISPservice_summary > tbody").html("");
            $("#tblISPservice_summary").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No service(s) found in the System</td>"));
            togglebtnAddNewService();
            togglehrefServiceNumberActivation();
            togglehrefServiceComboGift();
            togglebtnReactivateService();

        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPservice_summary > tbody").html("");
            $("#tblISPservice_summary").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPservice_summary > tbody").html("");
            $("#tblISPservice_summary").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
        togglebtnAddNewService();
        togglehrefServiceNumberActivation();
        togglehrefServiceComboGift();
        togglebtnReactivateService();
    }
}
function drawServiceSummaryTable(data) {
    $("#lblNoOfRecordsServiceSummary").hide();

    $("#tblISPservice_summary > tbody").html("");
    $("#tblISPservice_summary > thead > tr:first-child").removeClass();

    for (var i = 0; i < data.length; i++) {
        drawServiceSummaryRows(data[i], (i + 1));
    }
    var tb = document.querySelectorAll("#tblISPservice_summary tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPservice_summary > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    onClickbtnserviceKey();
    makeRowActive();
    $('[data-toggle="tooltip"]').tooltip();
    getDeactivationReasons();
    toggleDeactivationReason();
    if (data.length > 0) {
        var ahref = $("#tblISPservice_summary > tbody").children(":first").children(":first").children(":first");
        if (serviceKey && ahref.data("servicekey") == serviceKey) {
            ahref.parent().parent().addClass("active1");
            ahref.trigger("click");
        } else {
            if (!haveToChangeSelectedService) {
                ahref.trigger("click");
                haveToChangeSelectedService = false;
            } else {
                $("#servicekey" + serviceKey).trigger("click");
            }

        }
        $("#lblNoOfRecordsServiceSummary").html(data.length + " row(s) returned.").show();
        $("#divServiceDetailTabs").show();
    } else {
        $("#tblISPservice_summary > tbody").html("");
        //show message.
        var newrow = $("<tr />");
        $("#tblISPservice_summary").append(newrow);
        var noServiceRecordmsg = [
            { selected: "active", message: "No Active service records found in the system." },
            { selected: "inactive", message: "No Inactive/Closed service records found in the system." },
            { selected: "all", message: "No service records found in the system." }
        ];
        newrow.append($("<td colspan=8 style=\"width:90%\">" + noServiceRecordmsg.filter(function (x) { return x.selected == $("input[name=servicesummaryfilter]:checked").val() })[0].message + "</td>"));
        //hide all tabs if there is no service summary.
        $("#divServiceDetailTabs").hide();
        //disable deactivation reason dropdown and button.
        $("#optdeactivationreason").attr("disabled", "disabled")
        $("#btnDeactivateService").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });

        serviceKey = "";
        serviceStatus = "";
        serviceType = "";
        serviceSummaryVersion = "";
        serviceResourceType = "";
        toggleChkServiceSuspensionFlag();
        //manage deactivate reasons and logic.
        toggleDeactivationReason();
        onClickbtnDeactivateService();

        //manage suspend button label and visibility and click event
        togglebtnSuspendService();
        onClickbtnSuspendService();

        //manage add new service button.
        togglebtnAddNewService();
        togglebtnReactivateService();
    }
}

var serviceStatusSettings = [
    { btnsuspendServiceEnable: true, optdeactivateServiceEnable: true, status: "ACTIVE", clr: LIGHT_WHITE, suspendServiceBtnLabel: "Suspend Service" },
    { btnsuspendServiceEnable: false, optdeactivateServiceEnable: true, status: "ORDERED", clr: LIGHT_YELLOW, suspendServiceBtnLabel: "Suspend Service" },
    { btnsuspendServiceEnable: false, optdeactivateServiceEnable: false, status: "PAID", clr: LIGHT_YELLOW, suspendServiceBtnLabel: "Suspend Service" },
    { btnsuspendServiceEnable: true, optdeactivateServiceEnable: true, status: "SUSPEND", clr: LIGHT_YELLOW, suspendServiceBtnLabel: "Unsuspend Service" },
    { btnsuspendServiceEnable: false, optdeactivateServiceEnable: false, status: "INACTIVE", clr: LIGHT_RED, suspendServiceBtnLabel: "Suspend Service" },
    { btnsuspendServiceEnable: false, optdeactivateServiceEnable: false, status: "CLOSED", clr: LIGHT_RED, suspendServiceBtnLabel: "Suspend Service" }
];

function drawServiceSummaryRows(rowData) {

    var row = $("<tr style=\"background-color:" + serviceStatusSettings.filter(function (x) { return x.status == rowData.status.toUpperCase() })[0].clr + " \">");
    $("#tblISPservice_summary").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td class=\"service_key_1\"><a href=\"#\" id=\"servicekey" + rowData.service_key + "\" data-servicetype=\"" + rowData.service_type + "\" data-servicestatus=\"" + rowData.status + "\"data-version=\"" + (rowData.version ? rowData.version : 0) + "\" data-serviceresourcetype = \"" + rowData.resource_type + "\" data-servicephonenumber = \"" + (rowData.service_id ? rowData.service_id : "") + "\" data-servicephonecity = \"" + (rowData.description ? rowData.description : "") + "\" data-servicekey=\"" + rowData.service_key + "\">" + rowData.service_key + "</a></td>"));
    row.append($("<td class=\"service_id_2\">" + (rowData.service_id ? rowData.service_id : "") + "</td>"));
    row.append($("<td class=\"service_description_3\">" + (rowData.description ? rowData.description : "") + "</td>"));
    row.append($("<td class=\"service_type_4\">" + (rowData.service_type ? rowData.service_type : "") + "</td>"));
    row.append($("<td class=\"service_resourcetype_4_2\">" + (rowData.resource_type ? rowData.resource_type : "") + "</td>"));
    row.append($("<td class=\"service_offercode_5\"><div data-toggle='tooltip' title=" + (rowData.offer_code ? rowData.offer_code : "") + ">" + (rowData.offer_code ? rowData.offer_code : "") + "</div></td>"));
    row.append($("<td class=\"service_npch_7\">" + (rowData.next_periodic_charge_date ? rowData.next_periodic_charge_date : "") + "</td>"));
    row.append($("<td class=\"service_status_6\">" + (rowData.status ? rowData.status : "") + "</td>"));
    row.append($("<td class=\"service_startdate_8\">" + (rowData.start_date ? rowData.start_date : "") + "</td>"));
    row.append($("<td class=\"service_enddate_9\">" + (rowData.end_date ? rowData.end_date : "") + "</td>"));
}

//servicekey click function
function onClickbtnserviceKey() {
    $("a[id*=servicekey]").off("click").on("click", function (e) {
        //handle modification mode
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }



        serviceKey = $(this).data("servicekey");
        serviceStatus = $(this).data("servicestatus");
        serviceType = $(this).data("servicetype");
        serviceSummaryVersion = $(this).data("version");
        serviceResourceType = $(this).data("serviceresourcetype");
        servicePhoneNumber = $(this).data("servicephonenumber");
        servicePhoneCity = $(this).data("servicephonecity");
        $.each(tabsloaded, function (key) {
            if (key.indexOf("services_") != -1) {
                tabsloaded[key] = false;
            }
        });

        /*    if (isComboGift && serviceType == "SEND") {
                removeOnClickhrefServiceGift();
            }else{
                bindOnClickhrefServiceGift();
            }*/

        saveServiceDetailMode = addOrUpdate.update;
        //$("li[id=" + currentServiceTabOpen + "]").trigger("click");

        $("[id*=hrefService]").not("#hrefServices").toArray().forEach(function (elem) {
            if (elem.className == "active") {
                var searchActive = {
                    "hrefServiceDetails": "tabsloaded.services_details",
                    "hrefServiceNumberActivation": "tabsloaded.services_numberactivation",
                    "hrefServiceGifts": "tabsloaded.services_gifts",
                    "hrefServiceUsage": "tabsloaded.servicesusage",
                    "hrefServiceFaxUsageHistory": "tabsloaded.services_faxusagehistory"
                };
                $("#" + elem.id).trigger("click");
            }
        });

        //manage deactivate reasons and logic.
        toggleDeactivationReason();
        onClickbtnDeactivateService();
        $("#optdeactivationreason").val("Select a reason");
        $("#optdeactivationreason").trigger("change");
        toggleChkServiceSuspensionFlag();
        //manage suspend button label and visibility and click event
        togglebtnSuspendService();
        onClickbtnSuspendService();

        togglehrefServiceNumberActivation();
        togglehrefServiceComboGift();
        togglebtnComboGift();
        //manage add new service button.
        // console.log("togglebtnAddNewService fired from line # 5375")
        togglebtnAddNewService();
        togglebtnReactivateService();
        return false; // prevent default click action from happening!
        //e.preventDefault(); // same thing as above
    });
}
//hide error and success message on service summary section
var turnOffServiceDeactivationErrors = function () {
    $("#divServiceSummaryError > span").html("");
    $("#divServiceSummaryError").hide();
    $("#divServiceSummarySuccess").hide();
}


function getDeactivationReasons() {
    setTimeout(function () {
        var getFromLocalStorage = getLocalStorageOptionSetData("deactivatereasons");
        if (getFromLocalStorage === "") {
            getAjaxFunc("lookup/deactivatereasons", setdeactivateReasonsOptionSetsFunc, "");
        }
        else {
            setdeactivateReasonsOptionSetsFunc(getFromLocalStorage, true, "");
        }

    }, 200);
}

function setdeactivateReasonsOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.deactivate_reasons) {
            if (getLocalStorageOptionSetData("deactivatereasons") === "") {
                setLocalStorageOptionSetData("deactivatereasons", data);
            }
            setOptionSetsForceDefaultValue(data.deactivate_reasons, "#optdeactivationreason", "Select a reason", "cancel_code", "description", "Select a reason");
        }
    }
}

//toggle deactivation reason dropdown depending on Service status and rights.
var toggleDeactivationReason = function () {
    $("#optdeactivationreason").attr("disabled", "disabled");
    if (Number(permissionArray.filter(function (x) { return x.id == "deactivateService" })[0].hasRights)) {
        if (serviceStatus && (serviceStatusSettings.filter(function (x) { return x.status == serviceStatus.toUpperCase() })[0].optdeactivateServiceEnable) && serviceType.toUpperCase() == "INBOX") {
            $("#optdeactivationreason").removeAttr("disabled");
        }
    }
}

// check if last active inbox service then show message.
var no_of_activeInboxService = function () {
    return $("a[id*=servicekey]").toArray().filter(
        function (x) {
            var x2 = $(x);
            var x2ss = x2.data("servicestatus").toUpperCase();
            return (x2.data("servicetype").toUpperCase() == "INBOX" && (x2ss == "ACTIVE" || x2ss == "SUSPEND" || x2ss == "ORDERED"));
        }).length;
}
//check if any other service is in progress or not
//why? on changing deactivation reason we have to check if other service is in modification.
var otherServiceInModification = function () {
    return (isInSuspendFlagMode);
}

//toggle deactivate service button depending on deactivation reason selected.
var togglebtnDeactivateService = function (optdeactivationreason_value) {
    if (optdeactivationreason_value && optdeactivationreason_value != "Select a reason") {
        if (no_of_activeInboxService() == 1) {
            $("#divServiceSummaryError > span").html("Last Service Record will be Deactivated – Please go to the Account Management Tab to cancel the account");
            $("#divServiceSummaryError").show();
            $("#btnDeactivateService").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
            isInDeactivationMode = false;
            if (!otherServiceInModification()) {
                isInModificationMode = false;
            }
        } else {
            isInModificationMode = true;
            isInDeactivationMode = true;
            $("#btnDeactivateService").removeAttr("disabled").attr({ "class": "grey-btn" });
        }

    } else {
        isInDeactivationMode = false;
        if (!otherServiceInModification()) {
            isInModificationMode = false;
        }
        $("#btnDeactivateService").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
    toggleOfferCodeSection();
    toggleSelectDIDSection();
}

var onChangeoptdeactivationreason = function () {
    $("#optdeactivationreason").off("click change").on("click change", function (e) {
        if (isInModificationMode && !isInDeactivationMode && no_of_activeInboxService() > 1) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        turnOffServiceDeactivationErrors();
        togglebtnDeactivateService($(this).val());
    });
}
var onClickbtnDeactivateService = function () {
    $("#btnDeactivateService").off("click").on("click", function (e) {

        var objDeactivateService = new Object();
        objDeactivateService["reason_code"] = $("#optdeactivationreason").val();
        objDeactivateService["version"] = serviceSummaryVersion;
        tabsloaded.events = false;
        putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/deactivate", JSON.stringify(objDeactivateService), onDeactivationComplete, "");
    });
}

var onDeactivationComplete = function (data, issuccess) {
    turnOffServiceDeactivationErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceSummaryError > span").html(data.errors[0].developer_message);
                $("#divServiceSummaryError").show();
            }
        } else {
            //deactivation process completed
            isInDeactivationMode = false;
            isInModificationMode = false;

            oldModifiedServiceKey = serviceKey;
            haveToChangeSelectedService = true;
            $("#optdeactivationreason").val("Select a reason");
            $("#chkservicesummary_all").prop("checked", true);
            $("#chkservicesummary_all").trigger("change");
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    $("#divServiceSummarySuccess").show();
                    haveToChangeSelectedService = false;
                }, 1200);
            }, 1800);
        }

    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceSummaryError  > span").html(data.responseJSON.errors[0].user_message);
                } else {
                    $("#divServiceSummaryError > span").html(data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceSummaryError > span").html(data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceSummaryError").show();

        }
        else {
            $("#divServiceSummaryError > span").html("Request Cancelled.");
            $("#divServiceSummaryError").show();
            CancelRequest = false;
        }
    }
}

//get and set suspension flags.
function getServiceSuspedFlags() {
    if (customerKey) {
        getAjaxFunc("customers/" + customerKey + "/suspend_flags", setServicesSuspendFlags, "");
    }
}
function setServicesSuspendFlags(data, issuccess) {
    if (issuccess) {
        if (data.suspend_flags && Object.keys(data.suspend_flags).length > 0) {
            //keep a counter, so that we can serialize controls in json after all the suspension flags are loaded
            toggleChkServiceSuspensionFlag();
            var suspensionFlagCounter = 0;
            $("#txtServices_suspend_flags_version").val(data.suspend_flags.version);
            for (var property in data.suspend_flags) {
                if (data.suspend_flags.hasOwnProperty(property)) {
                    suspensionFlagCounter++;
                    $("input:checkbox[id=chkServices_" + property + "]").prop("checked", data.suspend_flags[property]);

                    //serialize json because this is the last control in the list
                    if (Object.keys(data.suspend_flags).length == suspensionFlagCounter) {

                        var serializeSuspensionFlags = [];
                        $('#divServiceSuspensionFlags :input').each(function () {
                            serializeSuspensionFlags.push({ "name": $(this).attr("id"), "value": $(this).is(":checked") })
                        });

                        suspensionFlag_original_data = JSON.stringify(serializeSuspensionFlags);
                        onChangeSuspensionFlags();
                    }
                }
            }
        }
    }
}

//check permission + check change json.

var onChangeSuspensionFlags = function () {
    //toggling update button
    togglebtnUpdateSuspensionflags();
    //bind click event of update button.
    onClickbtnUpdateSuspensionflags();
    $("input:checkbox[id*=chkServices_]").off("keyup").on("keyup click", function (e) {
        if (isInModificationMode && !isInSuspendFlagMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        var serializeSuspensionFlags = [];
        $('#divServiceSuspensionFlags :input').each(function () {
            serializeSuspensionFlags.push({ "name": $(this).attr("id"), "value": $(this).is(":checked") })
        });
        var serializedForm = JSON.stringify(serializeSuspensionFlags);
        if (serializedForm != suspensionFlag_original_data) {
            isInModificationMode = true;
            isInSuspendFlagMode = true;
        }
        else {
            isInModificationMode = false;
            isInSuspendFlagMode = false;
        }
        togglebtnUpdateSuspensionflags();
        toggleOfferCodeSection();
        toggleSelectDIDSection();
        toggletxtservicedetailIemailaddress();
        togglebtnServiceDetailIEmailAdd();
        toggleoptservicedetailIemail_addresses();
        togglebtnServiceDetailEmailDelete();

        toggletxtservicedetailOemailaddress();
        togglebtnServiceDetailOEmailAdd();
        toggleoptservicedetailOemail_addresses();
        togglebtnServiceDetailOEmailDelete();
    });
}
//toggle update suspension flags and update button
var toggleChkServiceSuspensionFlag = function () {
    var isCustomerActive = ($("#txthdraccount_status").val().toUpperCase() == "ACTIVE" ? true : false);
    if (isitCorporateAccount || !serviceKey || !isCustomerActive) {
        $("input:checkbox[id*=chkServices_]").prop("disabled", "disabled");
    } else {
        //check update rights from UI permission table.
        divServiceSuspensionFlagsUpdateSuspensionFlag(divServiceSuspensionFlagsUpdateSuspensionFlagRights);
        //$("input:checkbox[id*=chkServices_]").removeAttr("disabled");
    }
}
var togglebtnUpdateSuspensionflags = function () {
    $("#btnUpdateSuspensionflags").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    if (isInSuspendFlagMode && isInModificationMode) {
        if (divServiceSuspensionFlagsUpdateSuspensionFlagRights) {
            $("#btnUpdateSuspensionflags").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
    }
}
var onClickbtnUpdateSuspensionflags = function () {
    $("#btnUpdateSuspensionflags").off("click").on("click", function () {
        var suspend_flag = new Object();
        suspend_flag.suspend_flags = new Object();
        var chkservices = $("input:checkbox[id*=chkServices_]").toArray();
        chkservices.reduce(function (x, chkbox) {
            var $this = $(chkbox);
            suspend_flag.suspend_flags[$this.attr("id").replace("chkServices_", "")] = $this.is(":checked");
        }, null);
        suspend_flag.suspend_flags.version = $("#txtServices_suspend_flags_version").val();
        putAjaxFunc("customers/" + customerKey + "/suspend_flags", JSON.stringify(suspend_flag), onUpdateSuspensionFlagComplete, "");
    });
}
var onUpdateSuspensionFlagComplete = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceSummaryError > span").html(data.errors[0].user_message);
                $("#divServiceSummaryError").show();
            }
        } else {
            isInSuspendFlagMode = false;
            isInModificationMode = false;
            tabsloaded.events = false;
            getServiceSuspedFlags();
            //toggle add new service button.
            togglebtnAddNewService();
            togglebtnReactivateService();
            toggleOfferCodeSection();
            toggleSelectDIDSection();
            toggletxtservicedetailIemailaddress();
            togglebtnServiceDetailIEmailAdd();
            toggleoptservicedetailIemail_addresses();
            togglebtnServiceDetailEmailDelete();
            toggletxtservicedetailOemailaddress();
            togglebtnServiceDetailOEmailAdd();
            toggleoptservicedetailOemail_addresses();
            togglebtnServiceDetailOEmailDelete();
        }
    } else {
        if (data && data.responseJSON && data.responseJSON.errors && data.responseJSON.errors[0] && data.responseJSON.errors[0].developer_message) {
            $("#divServiceSummaryError > span").html(data.responseJSON.errors[0].user_message);
            $("#divServiceSummaryError").show();
        } else {
            $("#divServiceSummaryError > span").html("Update unsuccessfull");
            $("#divServiceSummaryError").show();
        }

    }
}

var divServiceSuspensionFlagsUpdateSuspensionFlag = function (rights) {
    $txtserviceSuspensionFlags = $("input:checkbox[id*=chkServices_]");
    divServiceSuspensionFlagsUpdateSuspensionFlagRights = rights;

    if (rights == 0) {
        $txtserviceSuspensionFlags.attr({ "disabled": "disabled" });
        $("#btnUpdateSuspensionflags").prop("disabled", true);
        $("#btnUpdateSuspensionflags").removeClass("grey-btn").addClass("disabled");
    } else {
        $txtserviceSuspensionFlags.toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {})
        }, {});
        if ($txtserviceSuspensionFlags.is(':visible')) {
            togglebtnUpdateSuspensionflags();
        } else {
            $("#btnUpdateSuspensionflags").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    }
}

// Suspend button functionalities
//toggle visibility of btnSuspendService button, and its Label
var togglebtnSuspendService = function () {
    $("#btnSuspendService").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    if (serviceStatus) {
        $("#btnSuspendService").val(serviceStatusSettings.filter(function (x) { return x.status == serviceStatus.toUpperCase() })[0].suspendServiceBtnLabel);

        if (Number(permissionArray.filter(function (x) { return x.id == "suspendService" })[0].hasRights)) {
            if (serviceStatus && serviceStatusSettings.filter(function (x) { return x.status == serviceStatus.toUpperCase() })[0].btnsuspendServiceEnable) {
                $("#btnSuspendService").removeAttr("disabled").attr({ "class": "grey-btn" });
            }
        }
    }
}

var onClickbtnSuspendService = function () {
    $("#btnSuspendService").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        tabsloaded.events = false;
        if ($("#btnSuspendService").val().indexOf("Unsuspend") == -1) {
            putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/suspend?version=" + serviceSummaryVersion, "", onSuspendServiceComplete, "");
        } else {
            putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/unsuspend?version=" + serviceSummaryVersion, "", onSuspendServiceComplete, "");
        }

    });
}
var onSuspendServiceComplete = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceSummaryError > span").html(data.errors[0].developer_message);
                $("#divServiceSummaryError").show();
            }
        } else {
            oldModifiedServiceKey = serviceKey;
            tabsloaded.contact = false;
            $("#chkservicesummary_active").trigger("change");
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
            }, 1000);
        }
    }
}

//==END::: Service TAB -> Summary

//==START::: Service -> Service detail TAB

function clearServiceDetail() {
    $("input[id*=txtservicedetail]").val("");
    //$("select[id*=chkservicedetail] option['']").prop('selected', 'selected').change();
    $("input:checkbox[id*=chkservicedetail]").prop("checked", false);
}

function getServiceDetail() {
    clearServiceDetail();

    //$("input[id*=txtservicedetailO]").not("#optservicedetailOemail_addresses").not("#txtservicedetailOemailaddress").attr({ "disabled": "disabled" });
    //$("textarea[id*=txtservicedetailO]").attr({ "disabled": "disabled" });
    //$("select[id*=optservicedetailO]").not("#optservicedetailIemail_addresses").attr({ "disabled": "disabled" });
    //$("input[id*=chkservicedetailO]").attr({ "disabled": "disabled" });

    if (serviceKey)
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey, setServiceDetail, "");
}

var setServiceDetail_Send = function (data) {
    $("#divservicedetailInbound").hide();
    $("#divservicedetailOutbound").show();

    for (var property in data.send_service) {
        if (data.send_service.hasOwnProperty(property)) {
            $("input[id=txtservicedetailO" + property + "]").val(data.send_service[property]);
            $("input:checkbox[id=chkservicedetailO" + property + "]").prop("checked", data.send_service[property]);
        }
    }
    for (var property in data.send_service.send_prefs) {
        if (data.send_service.send_prefs.hasOwnProperty(property)) {
            $("input[id=txtservicedetailO" + property + "]").val(data.send_service.send_prefs[property]);
            $("input:checkbox[id=chkservicedetailO" + property + "]").not("#chkservicedetailOallow_send").prop("checked", data.send_service.send_prefs[property]);
        }
    }

    if (data.send_service.status.toUpperCase() == "ACTIVE") {
        $("#divservicedetailOstatus").removeClass("white red");
        $("#divservicedetailOstatus").addClass("green");
    } else {
        $("#divservicedetailOstatus").removeClass("green white");
        $("#divservicedetailOstatus").addClass("red");
    }


    $("#optservicedetailOemail_addresses").empty();
    if (data.send_service.send_emails && data.send_service.send_emails.email_addresses) {
        $.each(data.send_service.send_emails.email_addresses, function (i, val) {
            $("#optservicedetailOemail_addresses").append($("<option>", {
                value: val,
                text: val
            }));
        });
    }

    if (data.send_service.sales_rep) {
        getSetSendSalesRepOptionSetFunc(((data.send_service.sales_rep_status) ? (data.send_service.sales_rep_status) : "I"), data.send_service.sales_rep);
    }

    if (data.send_service.send_prefs.allow_send) {

        $("#chkservicedetailOallow_send").removeAttr("disabled");
        $("#chkservicedetailOallow_send").prop("checked", false);

    } else {
        $("#chkservicedetailOallow_send").prop("checked", true);
        $("#chkservicedetailOallow_send").attr("disabled", "disabled");
    }



    if ($("#optcontactoems").val() == 5 && data.send_service.product_type == "UM" && $("#optcontactlanguage_code").val().toUpperCase() == "EN" && $("#optcontactcountry").val() == "US" && $("#txthdrcustomer_type").val().toUpperCase() == "PAID") {
        $("#chkservicedetailOem_storage").data("em_storage_enabled", true);
        $("#chkservicedetailOsecure_storage").data("secure_storage_enabled", true);
    } else {
        $("#chkservicedetailOem_storage").data("em_storage_enabled", false);
        $("#chkservicedetailOsecure_storage").data("secure_storage_enabled", false);
    }


    $("input:checkbox[id=chkservicedetailOem_storage]").prop("checked", data.send_service.em_storage);
    $("input:checkbox[id=chkservicedetailOsecure_storage]").prop("checked", data.send_service.secure_storage);
    togglechkservicedetailOem_storage();
    togglechkservicedetailOsecure_storage();
    //password toggle
    toggleoptservicedetailOpassword();

    $("#txtservicedetailOsend_serviceversion").val(data.send_service.version);
    $("#txtservicedetailOsend_perfsversion").val(data.send_service.send_prefs.version);

    //set original data for inbox service detail
    setTimeout(function () {
        var txtservicedetailO = $("input[id*=txtservicedetailO]").not("#txtservicedetailOemailaddress");

        txtservicedetailO.each(function () {
            $(this).val($.trim($(this).val()));
        });
        isInModificationMode = false;

        var formArr = $("#divservicedetailOutbound :input").not("#txtservicedetailOpassword").not("#chkservicedetailOsecure_storage").not("#chkservicedetailOem_storage").serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        formArr.push({ "name": "txtservicedetailOpassword", "value": $("#txtservicedetailOpassword").val() });
        formArr.push({ "name": "chkservicedetailOsecure_storage", "value": $("#chkservicedetailOsecure_storage").is(":checked") });
        formArr.push({ "name": "chkservicedetailOem_storage", "value": $("#chkservicedetailOem_storage").is(":checked") });

        servicedetailSend_original_data = $.param(formArr);


        servicedetailSend_keypress = false;
    }, 1000);
}

var setServiceDetail_Inbox = function (data) {

    $("#divservicedetailInbound").show();
    $("#divservicedetailOutbound").hide();

    $("#txtservicedetailIphone_city").val("");

    $("#txtservicedetailIphone_number").val("");
    $("#optservicedetailIemail_addresses").empty();

    for (var property in data.inbox_service) {
        if (data.inbox_service.hasOwnProperty(property)) {
            $("input[id=txtservicedetailI" + property + "]").val(data.inbox_service[property]);
            $("input:checkbox[id=chkservicedetailI" + property + "]").not("#chkservicedetailIported").prop("checked", data.inbox_service[property]);
        }
    }
    for (var property in data.inbox_service.inbox_prefs) {
        if (data.inbox_service.inbox_prefs.hasOwnProperty(property)) {
            $("input[id=txtservicedetailI" + property + "]").val(data.inbox_service.inbox_prefs[property]);
            $("input[id=txtservicedetailI" + property + "]").data("inbox_prefs", "true");
            $("input:checkbox[id=chkservicedetailI" + property + "]").not("#chkservicedetailIported").prop("checked", data.inbox_service.inbox_prefs[property]);
        }
    }
    if (data.inbox_service.service_emails && data.inbox_service.service_emails.email_addresses) {
        $.each(data.inbox_service.service_emails.email_addresses, function (i, val) {
            $("#optservicedetailIemail_addresses").append($("<option>", {
                value: val,
                text: val
            }));
        });
    }


    if (data.inbox_service.inbox_prefs.phone_city) {
        // setOptionSetsForceDefaultValue("", "#txtservicedetailIphone_city", data.inbox_service.inbox_prefs.phone_city, "", "", data.inbox_service.inbox_prefs.phone_city);
        if ($("#txtservicedetailIphone_city").parent().data("toggle")) {
            $("#txtservicedetailIphone_city").unwrap();
        }
        $("#txtservicedetailIphone_city").attr("style", "pointer-events:none;").wrap("<div style=\"cursor:not-allowed;\"  data-toggle = \"othertooltip\" data-original-title=\"" + data.inbox_service.inbox_prefs.phone_city + "\"></div>")
        $('[data-toggle="othertooltip"]').tooltip();
    }


    if (data.inbox_service.inbox_prefs.phone_number) {

        // setOptionSetsForceDefaultValue("", "#txtservicedetailIphone_number", data.inbox_service.inbox_prefs.phone_number, "", "", data.inbox_service.inbox_prefs.phone_number);
    }
    //get set sales rep
    if (data.inbox_service.sales_rep) {
        if (data.inbox_service.sales_rep_status) {
            getSetSDSalesRepOptionSetFunc(data.inbox_service.sales_rep_status, data.inbox_service.sales_rep)
        }
    } else {
        getSetSDSalesRepOptionSetFunc("", "");
    }


    if (data.inbox_service.inbox_prefs.fax_status) {
        $("#divservicedetailIfaxEnabled").removeClass("white red");
        $("#divservicedetailIfaxEnabled").addClass("green");
    } else {
        $("#divservicedetailIfaxEnabled").removeClass("green white");
        $("#divservicedetailIfaxEnabled").addClass("red");
    }

    //ported checkbox color
    if (data.inbox_service.inbox_prefs.phone_number && data.inbox_service.inbox_prefs.phone_number == null) {
        $("#divservicedetailIported").removeClass("green white");
        $("#divservicedetailIported").addClass("red");
    } else if (data.inbox_service.is_phone_number_ported) {
        $("#divservicedetailIported").removeClass("white red");
        $("#divservicedetailIported").addClass("green");
    } else {
        $("#divservicedetailIported").removeClass("green white");
        $("#divservicedetailIported").addClass("red");
    }

    if (data.inbox_service.product_type && data.inbox_service.product_type == "UM" && $("#optcontactoems").val() == 5 && $("#optcontactlanguage_code").val() && $("#optcontactlanguage_code").val().toUpperCase() == "EN" && $("#optcontactcountry").val() && $("#optcontactcountry").val().toUpperCase() == "US" && $("#txthdrcustomer_type").val() && $("#txthdrcustomer_type").val().toUpperCase() == "PAID") {
        $("#chkservicedetailIem_storage").data("em_storage_enabled", true);
        $("#chkservicedetailIsecure_storage").data("secure_storage_enabled", true);
    } else {
        $("#chkservicedetailIem_storage").data("em_storage_enabled", true);
        $("#chkservicedetailIsecure_storage").data("secure_storage_enabled", false);
    }


    $("input:checkbox[id=chkservicedetailIem_storage]").prop("checked", data.inbox_service.inbox_prefs.em_storage);
    $("input:checkbox[id=chkservicedetailIsecure_storage]").prop("checked", data.inbox_service.inbox_prefs.secure_storage);
    togglechkservicedetailIem_storage();
    togglechkservicedetailIsecure_storage();

    //write version number in hidden field.
    $("#txtservicedetailIinbox_serviceversion").val(data.inbox_service.version);
    $("#txtservicedetailIinbox_perfsversion").val(data.inbox_service.inbox_prefs.version);
    $("#txtservicedetailIinbox_perfsversion").data("inbox_prefs", "true");


    serviceCSID = data.inbox_service.inbox_prefs.csid;

    setTimeout(function () {
        var getFromLocalStorage = getLocalStorageOptionSetData("offercodes");
        if (getFromLocalStorage === "") {
            getAjaxFunc("lookup/offercodes", setofferCodesOptionSetsFunc, data.inbox_service["offer_code"]);
        }
        else {
            setofferCodesOptionSetsFunc(getFromLocalStorage, true, data.inbox_service["offer_code"]);
        }
    }, 200);
    getSerivceDetailOfferCodeDetails(data.inbox_service["offer_code"]);

    setTimeout(function () {
        var getFromLocalStorage = getLocalStorageOptionSetData("jfaxlanguages");
        if (getFromLocalStorage === "") {
            getAjaxFunc("lookup/jfaxlanguages", setjFaxLanguagesOptionSetsFunc, (data.inbox_service["inbox_prefs"]["prompt_language_code_1"] !== null ? data.inbox_service["inbox_prefs"]["prompt_language_code_1"] : ""));
        }
        else {
            setjFaxLanguagesOptionSetsFunc(getFromLocalStorage, true, (data.inbox_service["inbox_prefs"]["prompt_language_code_1"] !== null ? data.inbox_service["inbox_prefs"]["prompt_language_code_1"] : ""));
        }

    }, 200);

    setTimeout(function () {
        var getFromLocalStorage = getLocalStorageOptionSetData("faxformats");
        if (getFromLocalStorage === "") {
            getAjaxFunc("lookup/faxformats", setfaxFormatsOptionSetsFunc, data.inbox_service["inbox_prefs"]["fax_format_code"]);
        }
        else {
            setfaxFormatsOptionSetsFunc(getFromLocalStorage, true, data.inbox_service["inbox_prefs"]["fax_format_code"]);
        }
    }, 100);

    //set original data for inbox service detail
    setTimeout(function () {
        var txtservicedetailI = $("input[id*=txtservicedetailI]").not("#txtservicedetailIemailaddress");

        txtservicedetailI.each(function () {
            $(this).val($.trim($(this).val()));
        });
        isInModificationMode = false;

        var formArr = $("#divservicedetailInbound :input").not("#optservicedetailIprimary_language").not("#chkservicedetailIem_storage").not("#chkservicedetailIsecure_storage").serializeArray();

        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });

        formArr.push({ "name": "optservicedetailIprimary_language", "value": $("#optservicedetailIprimary_language").val() });
        formArr.push({ "name": "chkservicedetailIem_storage", "value": $("#chkservicedetailIem_storage").is(":checked") });
        formArr.push({ "name": "chkservicedetailIsecure_storage", "value": $("#chkservicedetailIsecure_storage").is(":checked") });
        servicedetailInbox_original_data = $.param(formArr);

        servicedetailInbox_keypress = false;
        toggleOfferCodeSection();
        toggleSelectDIDSection();
    }, 1000);
}

function setServiceDetail(data, issuccess) {
    if (issuccess) {
        if (data.send_service) {
            setServiceDetail_Send(data);
        }

        if (data.inbox_service) {
            setServiceDetail_Inbox(data);
        }
        //load service modification methods after all data is loaded.
        serviceModificationLoad();
        //load number activation toggle method
        togglehrefServiceNumberActivation();
        togglehrefServiceComboGift();

        $("#tblISPservice_Did > tbody").html("");

        if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "true") {
            $("#btntoggleserviceItelephone").trigger("click");
        }

    } else {
        $("#divservicedetailInbound").hide();
        $("#divservicedetailOutbound").hide();
    }
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
    getAjaxFunc("lookup/offer_codes/" + offercode+"?resource_type="+serviceResourceType, setSerivceDetailOfferCodeDetailGrid, "");
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

//START::: Service -> Usage TAB

function clearServiceUsageTab() {
    $("input[id*=txtserviceusage]").val("");
    $("#txtserviceusagetotal").removeAttr("style");
    $("#chkserviceusageauto_reorder").prop("checked", false);
}

function toggleautoreorder() {
    if ($("#txtcontactcollection_method").val() == "C") {
        $("#chkserviceusageauto_reorder").removeAttr("disabled");
    } else {
        $("#chkserviceusageauto_reorder").attr("disabled", "diabled");
    }

}
function disableReorderControls() {
    $("#chkserviceusageauto_reorder").attr("disabled", "diabled");
    $("#optserviceusagereorder_amount").attr("disabled", "diabled");
    $("#btnsavereorderamount").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
}
function enableReorderControls() {
    if ($("#txtcontactcollection_method").val() == "C") {
        //  $("#optserviceusagereorder_amount").removeAttr("disabled");
        $("#chkserviceusageauto_reorder").removeAttr("disabled", "diabled");
        //$("#btnsavereorderamount").removeAttr("disabled").attr({ "class": "grey-btn" });
    } else {
        $("#chkserviceusageauto_reorder").attr("disabled", "diabled");
    }
    if ($("#chkserviceusageauto_reorder").is(':checked')) {
        $("#optserviceusagereorder_amount").removeAttr("disabled");
    } else {
        $("#optserviceusagereorder_amount").attr("disabled", "diabled");
    }


}
function onchangeautoreorderflag() {
    $("#chkserviceusageauto_reorder").change(function () {
        turnoffTransferAmountError();
        var ischecked = $(this).is(':checked');
        if (ischecked) {
            $("#optserviceusagereorder_amount").removeAttr("disabled");
            // $("#btnsavereorderamount").removeAttr("disabled").attr({ "class": "grey-btn" });

        } else {
            $("#optserviceusagereorder_amount").attr("disabled", "diabled");
            // $("#btnsavereorderamount").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });

        }
        if ($("#txtreorder_amount").val() !== $("#optserviceusagereorder_amount option:selected").text() ||
            reordercheckflag != $("#chkserviceusageauto_reorder").is(':checked')) {
            isInReorderAmountUpdate = true;
            isInModificationMode = true;
            disablebalancetransfercontrols();
        } else {
            isInReorderAmountUpdate = false;
            isInModificationMode = false;
            enabledbalancetransfercontrols();
        }
        if (reordercheckflag != $(this).is(':checked')) {
            $("#btnsavereorderamount").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnsavereorderamount").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}



function toggleorderamount() {
    if ($("#txtcontactcollection_method").val() == "C" && $("#chkserviceusageauto_reorder").prop("checked")) {
        $("#optserviceusagereorder_amount").removeAttr("disabled");
        //  $("#btnsavereorderamount").removeAttr("disabled").attr({ "class": "grey-btn" });

    } else {
        $("#optserviceusagereorder_amount").attr("disabled", "diabled");
        //$("#btnsavereorderamount").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });

    }

    if (isInReorderAmountUpdate && $("#txtcontactcollection_method").val() == "C") {
        $("#btnsavereorderamount").removeAttr("disabled").attr({ "class": "grey-btn" });
    } else {
        $("#btnsavereorderamount").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
    }
}
function getServiceUsageTab() {
    clearServiceUsageTab();
    $("*[id*=serviceusage]").not("#txtserviceusagetransferamount").not("#btnserviceusageTransferUsage").attr({ "disabled": "disabled" });
    setCurrencyCode();
    setTimeout(function () {
        //get and set Account Balances
        getAjaxFunc("/customers/" + customerKey + "/balances", setServiceUsageTab, "");
    }, 300);

    // setTimeout(function () {
    //get and set Usage Balaces
    //  getAjaxFunc("/customers/" + customerKey + "/usages", setServiceUsageTab, "");
    // }, 400);

    // setTimeout(function () {
    //get and set Usage Balaces
    //   getAjaxFunc("/customers/" + customerKey + "/reorder/amount", setServiceReorderDetails, "");
    //  }, 400);


    //getOrderAmount();
    //load transfer account methos.
    turnoffTransferAmountError();
    turnoffReorderAmountError();
    toggletxtserviceusagetransferamount();
    onClickbtnserviceusageTransferUsage();
    onChangeTransferRadioButton();
    onChangeTransferBalance();
    onkeypressTransferBalance();
    onClickbtnsavereorderamount();
    onkeypressReorderAmount();
    onChangeReorderAmount();
    validatetxtserviceusagetransferamount();
    onChangetxtserviceusagetransferamount();
    onKeyPresstxtTransferAmount();
    onChangeoptserviceusagereorder_amount();
    resetbalTransferform();
    getOrderAmount();
    onchangeautoreorderflag();

    $("#lblUsageamount").text("Enter Amount: " + currencies_symbol);
    setTimeout(function () {
        //  if (isOrderAmountAvailable) {

        //toggleorderamount();
        // }

        //changeRadioForTransfer();
    }, 2000);


}
var getReorderAmountOptionsSetsFun = function (defaultSelected) {
    getAjaxFunc("/customers/" + customerKey + "/reorder/amount", setReorderAmountOptionSetsFunc, defaultSelected);
}
function setReorderAmountOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.reorder_amounts.length > 0) {
            for (var i = 0; i < data.reorder_amounts.length; i++) {
                if (data.reorder_amounts[i].reorder_amount_formated == selectedbydefault) {
                    isOrderAmountAvailable = true;
                    break;
                } else {
                    isOrderAmountAvailable = false;
                }
            }

            if (!isOrderAmountAvailable) {
                setOptionSetsForceDefaultValue(data.reorder_amounts, "#optserviceusagereorder_amount", reorderdisabledoptval, "reorder_amount", "reorder_amount_formated", selectedbydefault);
                $("#optserviceusagereorder_amount option[value='" + reorderdisabledoptval + "']").prop('disabled', true);
                toggleorderamount();
            } else {
                setOptionSets(data.reorder_amounts, "#optserviceusagereorder_amount", selectedbydefault, "reorder_amount", "reorder_amount_formated", true);
            }



            //    break;
            //}else{
            //      isOrderAmountAvailable = false;
            //      break;
            // }
            //}
        } else {
            setOptionSetsForceDefaultValue(data.reorder_amounts, "#optserviceusagereorder_amount", reorderdisabledoptval, "reorder_amount", "reorder_amount_formated", selectedbydefault);
            $("#optserviceusagereorder_amount option[value='" + reorderdisabledoptval + "']").prop('disabled', true);
            toggleorderamount();
            //getAjaxFunc("/customers/" + customerKey + "/reorder", setDefaultReorderAmountOptionSetsFunc, "");
            // getOrderAmount();
            isOrderAmountAvailable = false;
        }
    }
}

/*function setDefaultReorderAmountOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.reorder) {
            //setOptionSetsForceDefaultValue(data.reorder, "#optserviceusagereorder_amount", selectedbydefault, "reorder_amount", "reorder_amount", selectedbydefault);
            //$("#optserviceusagereorder_amount").html(data.reorder.reorder_amount);
            $('#optserviceusagereorder_amount ').append($("<option></option>").attr("value", data.reorder.reorder_amount).text(data.reorder.reorder_amount));
        }
    }
}*/

function getOrderAmount() {
    getAjaxFunc("/customers/" + customerKey + "/reorder", setOrderAmountDtls, "");
}

function setOrderAmountDtls(data, issuccess) {
    if (issuccess) {
        setTimeout(function () {
            toggleorderamount();
        }, 2000);
        toggleautoreorder();
        if (data.reorder) {
            $("#txtorderamountversion").val(data.reorder.version);
            // defaultreorderAmount = data.reorder.reorder_amount;
            // if (isOrderAmountAvailable) {
            $('#optserviceusagereorder_amount option').filter(function () {
                return !this.value || $.trim(this.value).length == 0;
            }).remove();
            $('#optserviceusagereorder_amount').val(data.reorder.reorder_amount);
            $("#txtreorder_amount").val(data.reorder.reorder_amount_formatted);
            $("#txtserviceusagereorder_point").val(data.reorder.reorder_point_formatted);
            $("#txtserviceusagemaximum_credit").val(parseFloat(data.reorder.maximum_credit).toFixed(currency_decimalplaces));
            reordercheckflag = data.reorder.auto_reorder;
            if (data.reorder.auto_reorder) {
                $("#chkserviceusageauto_reorder").prop("checked", data.reorder.auto_reorder);
            }
            reorderdisabledoptval = data.reorder.reorder_amount;
            getReorderAmountOptionsSetsFun(data.reorder.reorder_amount_formatted);



            //} else {
            // $('#optserviceusagereorder_amount').append($("<option></option>").attr("value", data.reorder.reorder_amount).text(data.reorder.reorder_amount));
            // }

        }
    }
}

function setServiceUsageTab(data, issuccess) {
    if (issuccess) {
        if (data.balances) {
            //for (var property in data.account_balances) {
            //   if (data.account_balances.hasOwnProperty(property)) {
            //       $("input[id=txtserviceusage" + property + "]").val(data.account_balances[property]);
            //  }
            //}
            /* if (data.account_balances.total_main_balance_color_code) {
                 if (data.account_balances.total_main_balance_color_code != "#FFFFFF") {
                     $("#txtserviceusagetotal").attr("style", "background-color:" + data.account_balances.total_main_balance_color_code + "")
                 }
             }*/

            $("#txtserviceusagepaid_balance").val(data.balances.usage.paid_balance);
            $("#txtserviceusagetotal_balance").val(data.balances.usage.usage_balance);
            $("#txtserviceusagetotal").val(data.balances.account.total_main_balance);
            //  $("#txtserviceusagepaid_balance").val(data.balances.usage.paid_balance);


            if (data.balances.account.total_main_balance) {

                var total_usage_main_balance = 0;
                if (String(data.balances.account.total_main_balance).substr(0, 1) == "(") {
                    total_usage_main_balance = -1;
                }
                else {
                    total_usage_main_balance = data.balances.account.total_main_balance.replace(/\D/g, '');
                }

                if (total_usage_main_balance > 0) {
                    $("#txtserviceusagetotal").attr("style", "background-color:" + LIGHT_RED + "");
                } else if (total_usage_main_balance < 0) {
                    $("#txtserviceusagetotal").attr("style", "background-color:" + LIGHT_GREEN + "");
                } else {
                    $("#txtserviceusagetotal").attr("style", "background-color:");
                }

            }
        }

        /*  if (data.usages) {
              for (var property in data.usages.current_amount) {
                  if (data.usages.current_amount.hasOwnProperty(property)) {
                      $("input[id=txtserviceusage" + property + "]").val(data.usages.current_amount[property]);
                  }
              }
              for (var property in data.usages.setup) {
                  if (data.usages.setup.hasOwnProperty(property)) {
                      $("input[id=txtserviceusage" + property + "]").val(data.usages.setup[property]);
                  }
                  // if (data.usages.setup.auto_reorder_flag) {
                  //    $("#chkserviceusageauto_reorder").prop("checked", data.usages.setup.auto_reorder_flag);
                  // }
  
              }
              // if (data.usages.setup.reorder_amount) {
  
  
  
              //}
  
  
          }*/
    }
    else {

    }
}

//END==::: Service -> Usage TAB

//==START:::Service -> Gift and Usage TAB
function clearGiftsTab() {
    $("input[id*=txtservicegift]").val("");
    $("#optservicegift_unit_type").val("");
}

function getGiftsGrid() {
    clearGiftsTab();

    //diable all controls
    $("input[id*=txtservicegift]").attr({ "disabled": "disabled" });
    $("select[id*=optservicegift]").attr({ "disabled": "disabled" });
    // turnOffGiftErrors();
    onkeypressGiftForm();
    onChangeGiftForm();
    onClickbtnSaveGift();
    onClickbtnAddComboGift();
    onKeyPresstxtservicegiftgiftAmount();
    //toggleEnabledGiftForm();
    toggleEnabledGiftFormInEditMode();
    togglebtnComboGift();
    tabsloaded.events = false;
    //setSingleDatePicker("txtservicegiftstart_date");
    //setSingleDatePickerEndDate("txtservicegiftend_date");
    if (serviceKey && !isComboGift) {
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/gifts", setGiftsGrid, "");
    }
    if (serviceKey && isComboGift) {
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/combogifts", setGiftsGrid, "");
    }
}
function setGiftsGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (isComboGift ? data.combo_gifts.length > 0 : data.gifts) {
            drawGiftsTable(isComboGift ? data.combo_gifts : data.gifts);
        }
        else {
            $("#tblISPgifts > tbody").html("");
            $("#tblISPgifts").append(newrow);
            if (isComboGift) {
                newrow.append($("<td colspan=8 style=\"width:90%\">No Combo Gift found in the System</td>"));
            } else {
                newrow.append($("<td colspan=8 style=\"width:90%\">No Gift & Usages found in the System</td>"));
            }
            toggleDisabledGiftForm();
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPgifts > tbody").html("");
            $("#tblISPgifts").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPgifts > tbody").html("");
            $("#tblISPgifts").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
function drawGiftsTable(data) {
    $("#lblNoOfRecordsGifts").hide();

    $("#tblISPgifts > tbody").html("");
    $("#tblISPgifts > thead > tr:first-child").removeClass();
    if (data.length > 5) {
        $("#tblISPgifts > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        drawGiftsRows(data[i], (i + 1));
    }
    onClickbtnGifts();

    if ($('#tblISPgifts tbody').children().length > 0) {
        $("#tblISPgifts > tbody").children(":first").children(":first").children(":first").trigger("click");
    }



    makeRowActive();
    if (data.length > 0) {
        $("#tblISPgifts > tbody").children(":first").children(":first").children(":first").trigger("click");
        $("#lblNoOfRecordsGifts").html(data.length + " row(s) returned.").show();
    }

}

function drawGiftsRows(rowData) {
    if (new Date(rowData.end_date) < new Date()) {
        var row = $("<tr style=\"background-color:" + LIGHT_RED + " \">");
    } else if (new Date(rowData.start_date) > new Date()) {
        var row = $("<tr style=\"background-color:" + LIGHT_YELLOW + " \">");
    } else {
        var row = $("<tr style=\"background-color:" + LIGHT_WHITE + " \">");
    }
    if (isComboGift) {

        // var row = $("<tr>");
        $("#tblISPgifts").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
        row.append($("<td><a href=\"#\" id=\"combogifts" + rowData.customer_gift_key + "\" data-combogifts=\"" + rowData.customer_gift_key + "\" data-startDateForCombo=\"" + rowData.start_date + "\" data-endDateForCombo=\"" + rowData.end_date + "\">" + rowData.customer_gift_key + "</a></td>"));
    } else {
        //var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");

        $("#tblISPgifts").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
        row.append($("<td><a href=\"#\" id=\"servicegifts" + rowData.service_gift_key + "\" data-servicegifts=\"" + rowData.service_gift_key + "\">" + rowData.service_gift_key + "</a></td>"));
    }
    row.append($("<td>" + rowData.start_date + "</td>"));
    row.append($("<td>" + rowData.end_date + "</td>"));
    row.append($("<td>" + rowData.gift_unit_type + "</td>"));
    row.append($("<td>" + rowData.gift_amount + "</td>"));
    row.append($("<td>" + rowData.balance + "</td>"));
    row.append($("<td>" + rowData.create_date_time + "</td>"));
}

function onClickbtnGifts() {

    $(isComboGift ? "a[id*=combogifts]" : "a[id*=servicegifts]").off("click").on("click", function (e) {
        if (isComboGift) {
            combogiftkey = $(this).data("combogifts");
        } else {
            servicegiftkey = $(this).data("servicegifts");
        }
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        clearGiftsTab();
        turnOffGiftErrors();
        togglebtnComboGift();

        if (isComboGift) {
            combogift_end_date = $(this).data("enddateforcombo");
            if (new Date($(this).data("enddateforcombo")) < new Date()) {
                // $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
                $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            } else {
                $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
                //  $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            }


            //combogiftkey = $(this).data("combogifts");

            getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/combogifts/" + combogiftkey, setGiftsDetails, "");
        } else {
            combogift_end_date = $(this).data("enddateforcombo");
            if (new Date($(this).data("enddateforcombo")) < new Date()) {
                // $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
                $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            } else {
                $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
                //  $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            }
            var servicegifts = $(this).data("servicegifts");
            getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/gifts/" + servicegifts, setGiftsDetails, "");
        }


        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}


/*var removeOnClickComboGift = function () {
    $("#hrefServiceGifts > a").css({
        "pointer-events": "none",
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceGifts").css({
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceGifts").off("click").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    });
}
var bindOnClickhrefComboGift = function () {
    $("#hrefServiceGifts > a").css({
        "pointer-events": "auto",
        "color": "#000 !important"
    });
}*/

function setGiftsDetails(data, issuccess) {
    if (issuccess) {
        if (isComboGift ? data.combo_gifts : data.gifts) {
            for (var property in isComboGift ? data.combo_gifts : data.gifts) {
                if (isComboGift ? data.combo_gifts : data.gifts.hasOwnProperty(property)) {
                    $("input[id=txtservicegift" + property + "]").val(isComboGift ? data.combo_gifts[property] : data.gifts[property]);
                }
            }

            if (isComboGift) {
                toggleDisabledGiftForm();
                gift_form_keypress = false;
                toggleEnabledGiftFormInEditMode();
                $('#optservicegift_unit_type').empty();
                $('#optservicegift_unit_type ').append($("<option></option>").attr("value", data.combo_gifts.gift_unit_type).text(data.combo_gifts.gift_unit_type));

            } else {
                toggleDisabledGiftForm();
                toggleEnabledGiftFormInEditMode();
                gift_form_keypress = false;
                $("#optservicegift_unit_type").val("");
                if ((data.gifts["gift_unit_type"]) !== "") {
                    setTimeout(function () {
                        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/gift_unit_types", setGiftUnitTypeOptionSetsFunc, data.gifts["gift_unit_type"]);
                    }, 100);
                }
            }
            setDateforComboGift($('#txtservicegiftstart_date').val(), $('#txtservicegiftend_date').val());


        }
    }
}
function setGiftUnitTypeOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.gift_unit_type) {
            setOptionSets(data.gift_unit_type, "#optservicegift_unit_type", selectedbydefault, "gift_unit_type", "gift_unit_type", true);
        }
    }
}

function turnOffGiftErrors() {
    // $("div[id*=divEventMainError]").hide();
    $("#divGiftMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divGiftMainError").hide();

    $("#divGiftMainSuccess").hide();
}

function onkeypressGiftForm() {

    $("select[id*=optservicegift],input[id*=txtservicegif]").off("focusin").on("focusin", function () {
        turnOffGiftErrors();
        if (!gift_form_keypress) {
            var txtGift = $("input[id*=txtservicegif]");
            txtGift.each(function () {
                $(this).val($.trim($(this).val()));
            });

            gift_form_keypress = true;
            var original_formArr = $('#giftDetails :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            giftform_original_data = $.param(original_formArr);
            //giftform_original_data = original_formArr;
        }
        /**/
        if ($("#txtservicegiftgift_amount").val() >= 1 && new Date(combogift_end_date) >= new Date().setHours(0, 0, 0, 0)) {
            $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveGift").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}

function onChangeGiftForm() {
    $("select[id*=optservicegift],input[id*=txtservicegif]").off("keyup").on("keyup", function () {

        var formArr = $('#giftDetails :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (gift_form_keypress) {
            if (serializedForm != giftform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
        if ($("#txtservicegiftgift_amount").val() >= 1 && new Date(combogift_end_date) >= new Date().setHours(0, 0, 0, 0)) {
            $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveGift").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }

    });
    $("select[id*=optservicegift],input[id*=txtservicegif]").off("change").on("change", function () {
        var formArr = $('#giftDetails :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (gift_form_keypress) {
            if (serializedForm != giftform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
        if ($("#txthdrnext_charge_date").val() && serviceStatus.toUpperCase() == "ACTIVE" && $("#txtservicegiftgift_amount").val() >= 1 && new Date(combogift_end_date) >= new Date().setHours(0, 0, 0, 0)) {
            // $("#txtservicegiftend_date").removeAttr("disabled");
            $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            // $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            // $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
            $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            // $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
        if (saveGiftMode == addOrUpdate.update && serviceStatus.toUpperCase() == "ACTIVE" && $("#txthdrnext_charge_date").val()) {
            // $("#txtservicegiftend_date").removeAttr("disabled");
            $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
        //togglebtnComboGift();
    });
}



var onClickbtnSaveGift = function () {
    $("#btnSaveGift").off("click").on("click", function () {
        turnOffGiftErrors();
        if (isInModificationMode) {
            if ($("#txtservicegiftstart_date").val() === "") {
                $("#divGiftMainError").html("<span>Start date is mandatory.</span>");
                $("#divGiftMainError").show();
            } else if ($("#txtservicegiftend_date").val() === "") {
                $("#divGiftMainError").html("<span>End date is mandatory.</span>");
                $("#divGiftMainError").show();
            } else if ($("#txtservicegiftgift_amount").val() === "") {
                $("#divGiftMainError").html("<span>Gift Amount cannot be blank.</span>");
                $("#divGiftMainError").show();
            } else {
                if (saveGiftMode === addOrUpdate.add) {
                    onClickbtnInsertGift();
                } else {
                    onClickbtnModifyGift();
                }
            }
        } else {
            $("#divGiftMainError").html("<span>No changes to save</span>");
            $("#divGiftMainError").show();
        }
    });
}


var onKeyPresstxtservicegiftgiftAmount = function () {
    $("#txtservicegiftgift_amount").off("keypress").on("keypress", function (event) {
        return isNumberKeyForGiftAmount(event);
    });
    $("#txtservicegiftgift_amount").off("paste").on("paste", function (event) {
        return false;
    });


}

var setDateforComboGift = function (startdate, enddate) {
    //var chargeDate = moment($("#txthdrnext_charge_date").val()).format('MM/DD/YYYY');
    var chargeDate = moment($("#txthdrnext_charge_date").val(), 'MM/DD/YYYY');
    //console.log("current ====="+chargeDate);

    $('#txtservicegiftstart_date').daterangepicker({
        format: 'L',
        singleDatePicker: true,
        startDate: moment(startdate, 'MM/DD/YYYY'),
        // minDate: new Date(),
        // autoUpdateInput: true,
        //   showDropdowns: true,
        maxDate: isComboGift ? moment(chargeDate).add(1, 'months').subtract(1, "days") : moment(chargeDate)
        // maxDate: moment(new Date()).format('MM/DD/YYYY')
    }, function (start) {
        $('#txtservicegiftend_date').data('daterangepicker').setStartDate(moment(start));
        $('#txtservicegiftend_date').data('daterangepicker').minDate = moment(start);
        // console.log("start date == "+ $('#startDate').val() + "  chargeDate === "+moment(chargeDate).format('L')  );
        if (moment(start, 'L') < moment(chargeDate, 'L')) {
            $('#txtservicegiftend_date').data('daterangepicker').maxDate = moment(chargeDate);
            $('#txtservicegiftend_date').data('daterangepicker').setStartDate(moment(chargeDate));
        }
        else {
            //console.log("else block")
            $('#txtservicegiftend_date').data('daterangepicker').maxDate = isComboGift ? moment(chargeDate).add(1, 'months').subtract(1, "days") : moment(chargeDate);
            $('#txtservicegiftend_date').data('daterangepicker').setStartDate(isComboGift ? moment(chargeDate).add(1, 'months').subtract(1, "days") : moment(chargeDate));
            $('#txtservicegiftend_date').data('daterangepicker').minDate = moment(start);
        }
    });
    $('#txtservicegiftend_date').daterangepicker({
        format: 'L',
        singleDatePicker: true,
        minDate: new Date(),
        startDate: moment((saveGiftMode === addOrUpdate.add) ? chargeDate : enddate, 'MM/DD/YYYY'),
        //autoUpdateInput: true,
        //showDropdowns: true,
        //maxDate: moment(chargeDate).subtract(1, "days").add(1, 'months')
        maxDate: (saveGiftMode === addOrUpdate.add) ? moment(chargeDate) : moment(enddate)
    });

    //  if (saveGiftMode === addOrUpdate.update) {
    $('#txtservicegiftstart_date').data('daterangepicker').minDate = moment(startdate);
    $('#txtservicegiftend_date').data('daterangepicker').setStartDate(moment(enddate));
    $('#txtservicegiftend_date').data('daterangepicker').minDate = moment(startdate);
    //$('#txtservicegiftstart_date').data('daterangepicker').setStartDate(moment(startdate));
    // console.log("start date == "+ $('#startDate').val() + "  chargeDate === "+moment(chargeDate).format('L')  );
    if (moment(startdate, 'L') < moment(chargeDate, 'L')) {
        $('#txtservicegiftend_date').data('daterangepicker').maxDate = moment(chargeDate);
        if (saveGiftMode === addOrUpdate.add) {
            $('#txtservicegiftend_date').data('daterangepicker').setStartDate(moment(chargeDate));
        }

    }
    else {
        //console.log("else block")
        $('#txtservicegiftend_date').data('daterangepicker').maxDate = isComboGift ? moment(chargeDate).add(1, 'months').subtract(1, "days") : moment(chargeDate);
    }
    combogift_end_date = $('#txtservicegiftend_date').val();
    //}
}
var onClickbtnAddComboGift = function () {
    $("#btnAddGift").off("click").on("click", function () {
        toggleEnabledGiftForm();
        turnOffGiftErrors();
        // $("#txtservicegiftstart_date").val(moment().format('MM/DD/YYYY'));

        //  $("#txtservicegiftend_date").val(moment($("#txthdrnext_charge_date").val()).format('MM/DD/YYYY'));

        $("#txtservicegiftgift_amount").val("");
        // $("#txtservicegiftend_date").removeAttr("disabled");
        $("#btnAddGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
        saveGiftMode = addOrUpdate.add;
        isInModificationMode = true;
        $("#tblISPgifts tr").removeClass("active1");

        setDateforComboGift(moment().format('MM/DD/YYYY'), $("#txthdrnext_charge_date").val().trim().split('-').join('/'));

    });
}

var onClickbtnInsertGift = function () {
    turnOffGiftErrors();
    var objcombogift = new Object();
    if (isComboGift) {
        objcombogift.combo_gifts = new Object();
        objcombogift.combo_gifts.gift_amount = $("#txtservicegiftgift_amount").val();
        objcombogift.combo_gifts.start_date = $("#txtservicegiftstart_date").val();
        objcombogift.combo_gifts.end_date = $("#txtservicegiftend_date").val();
        var combogiftkey = $("#txtservicegiftcustomer_gift_key").val();

        postAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/combogifts", JSON.stringify(objcombogift), onAddGiftDetails);
    } else {
        objcombogift.gifts = new Object();
        objcombogift.gifts.gift_amount = $("#txtservicegiftgift_amount").val();
        objcombogift.gifts.gift_unit_type = $("#optservicegift_unit_type option:selected").val();
        objcombogift.gifts.start_date = $("#txtservicegiftstart_date").val();
        objcombogift.gifts.end_date = $("#txtservicegiftend_date").val();
        var servicegiftkey = $("#txtservicegiftservice_gift_key").val();
        postAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/gifts", JSON.stringify(objcombogift), onAddGiftDetails);
    }

}

var onClickbtnModifyGift = function () {
    turnOffGiftErrors();
    var objcombogift = new Object();
    if (isComboGift) {
        objcombogift.combo_gifts = new Object();
        objcombogift.combo_gifts.end_date = $("#txtservicegiftend_date").val();
        objcombogift.combo_gifts.version = ($("#txtservicegiftversion").val() === "" ? null : $("#txtservicegiftversion").val());
        var combogiftkey = $("#txtservicegiftcustomer_gift_key").val();
        putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/combogifts/" + combogiftkey, JSON.stringify(objcombogift), onModifyGiftDetails);

    } else {
        objcombogift.gifts = new Object();
        objcombogift.gifts.end_date = $("#txtservicegiftend_date").val();
        objcombogift.gifts.version = ($("#txtservicegiftversion").val() === "" ? null : $("#txtservicegiftversion").val());
        var servicegiftkey = $("#txtservicegiftservice_gift_key").val();
        putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/gifts/" + servicegiftkey, JSON.stringify(objcombogift), onModifyGiftDetails);

    }

}

var onAddGiftDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divGiftMainError").html("</br>" + data.errors[0].developer_message);
                $("#divGiftMainError").show();
            }
        } else {
            isInModificationMode = false;
            getGiftsGrid();
            setTimeout(function () {
                $("#divGiftMainSuccess").html("</br>" + (isComboGift ? 'Combo gift created.' : "Service gift created."));
                $("#divGiftMainSuccess").show();

            }, 3000);
            gift_form_keypress = false;
            saveGiftMode = addOrUpdate.update;

            $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divGiftMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divGiftMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divGiftMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divGiftMainError").show();
        }
        else {
            $("#divGiftMainError").html("</br>Request Cancelled.");
            $("#divGiftMainError").show();
            CancelRequest = false;
        }
    }
}
var onModifyGiftDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divGiftMainError").html("</br>" + data.errors[0].developer_message);
                $("#divGiftMainError").show();
            }
        } else {
            isInModificationMode = false;
            saveGiftMode = addOrUpdate.update;
            var oldservicegiftkey = isComboGift ? combogiftkey : servicegiftkey;
            getGiftsGrid();
            setTimeout(function () {
                ///console.log("oldservicegiftkey ::"+oldservicegiftkey+" servicegiftkey :: "+servicegiftkey);
                if (oldservicegiftkey != (isComboGift ? combogiftkey : servicegiftkey)) {
                    isComboGift ? $("#combogifts" + oldservicegiftkey).trigger("click") : $("#servicegifts" + oldservicegiftkey).trigger("click");
                }
                setTimeout(function () {
                    $("#divGiftMainSuccess").html("</br>" + 'Gift record updated.');
                    $("#divGiftMainSuccess").show();
                }, 500);

            }, 3300);

            gift_form_keypress = false;
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divGiftMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divGiftMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divGiftMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divGiftMainError").show();
        }
        else {
            $("#divGiftMainError").html("</br>Request Cancelled.");
            $("#divGiftMainError").show();
            CancelRequest = false;
        }
    }
}

var toggleDisabledGiftForm = function () {
    $("input[id*=txtservicegift]").attr({ "disabled": "disabled" });
    $("select[id*=optservicegift]").attr({ "disabled": "disabled" });
    $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
    $("#btnAddGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
}

var toggleEnabledGiftForm = function () {
    $("input[id*=txtservicegift]").removeAttr("disabled");
    //  $("select[id*=optservicegift]").removeAttr("disabled");
    $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
    //$("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
}
var toggleEnabledGiftFormInEditMode = function () {
    if ($("#txthdrnext_charge_date").val()) {
        if (serviceStatus.toUpperCase() == "ACTIVE") {
            if (new Date($("#txtservicegiftend_date").val()) < new Date()) {
                $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
            } else {
                $("#txtservicegiftend_date").removeAttr("disabled");
            }
        } else {
            $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
        }
    } else {
        $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
    }



}
//==END::: Service -> Gift and Usage TAB

//==START::: Service -> Fax Usage History TAB

function getServiceFaxUsage() {
    sortingFaxUsage();

    onClickbtnFilterServiceFaxUsage();
    //SHOW HIDE GRID ON BASIS OF SERVICE TYPE SELECTED.
    if (serviceType.toUpperCase() == "INBOX") {
        $("#tblISPserviceIFaxUsage").show();
        $("#tblISPserviceOFaxUsage").hide();
    }
    else {
        $("#tblISPserviceIFaxUsage").hide();
        $("#tblISPserviceOFaxUsage").show();
    }

    setDatePicker("txtserviceFaxUsagefromtofilter");
    togglebtnFilterServiceFaxUsage();
    isFilteredFaxUsage = false;
    $("#txtserviceFaxUsagefromtofilter").val("").trigger("change");

    if (serviceKey) {
        pageFaxUsageStartAt = 1;
        pageFaxUsageCurrentPage = 1;
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/usage?startAt=" + pageFaxUsageStartAt + "&maxResults=" + pageFaxUsagePageSize, setFaxUsagePageParams, true);
    }
}

var togglebtnFilterServiceFaxUsage = function () {
    $("#txtserviceFaxUsagefromtofilter").off("change").on("change", function () {
        if ($(this).val()) {
            $("#btnFilterServiceFaxUsage").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnFilterServiceFaxUsage").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}
var onClickbtnFilterServiceFaxUsage = function () {
    $("#btnFilterServiceFaxUsage").off("click").on("click", function (e) {
        var $txtserviceFaxUsagefromtofilter = $("#txtserviceFaxUsagefromtofilter").val()
        if ($txtserviceFaxUsagefromtofilter) {
            isFilteredFaxUsage = true;
            var $txtserviceFaxUsagefromtofilter_split = $txtserviceFaxUsagefromtofilter.split('-');
            startDateFaxUsage = moment($txtserviceFaxUsagefromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateFaxUsage = moment($txtserviceFaxUsagefromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            pageFaxUsageCurrentPage = 1;
            pageFaxUsageTotalPage = 1;
            pageFaxUsageStartAt = 1;
            getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/usage?startAt=1&maxResults=1&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy + "&startDate=" + startDateFaxUsage + "&endDate=" + endDateFaxUsage, setFaxUsagePageParams, true);
        }
    });
    $("#btnResetfilterServiceFaxUsage").off("click").on("click", function () {
        $("#txtserviceFaxUsagefromtofilter").val("").trigger("change");
        if (isFilteredFaxUsage) {
            pageFaxUsageCurrentPage = 1;
            pageFaxUsageStartAt = 1;
            getServiceFaxUsage();
        }
        isFilteredFaxUsage = false;
    });
}
function getFaxUsageGridPages() {
    if (isFilteredFaxUsage) {
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/usage?startAt=" + pageFaxUsageStartAt + "&maxResults=" + pageFaxUsagePageSize + "&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy + "&startDate=" + startDateFaxUsage + "&endDate=" + endDateFaxUsage, setFaxUsageGrid, "");
    } else {
        getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/usage?startAt=" + pageFaxUsageStartAt + "&maxResults=" + pageFaxUsagePageSize + "&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, setFaxUsageGrid, "");
    }
}

function sortingFaxUsage() {
    $("i[id*=spnSrtFaxUsage]").hide();
    $("a[id*=btnSrtFaxUsage]").unbind().click(function (e) {
        $("#tblISPserviceIFaxUsage > thead > tr > th").removeClass("active");
        $("#tblISPserviceOFaxUsage > thead > tr > th").removeClass("active");
        $(this).parent().addClass("active");

        var btnid = $(this).attr("id");
        if (btnid.indexOf("btnSrtFaxUsageI") >= 0) {

            var sortusing = btnid.replace("btnSrtFaxUsageI", "");
            sortFaxUsageBy = sortusing;
            if ($("i[id*=spnSrtFaxUsageI" + sortusing + "Asc]").is(":visible")) {
                $("i[id*=spnSrtFaxUsageI]").hide();
                $("i[id*=spnSrtFaxUsageI" + sortusing + "Desc]").show();
                sortFaxUsageType = "DESC";
            }
            else if ($("i[id*=spnSrtFaxUsageI" + sortusing + "Desc]").is(":visible")) {
                $("i[id*=spnSrtFaxUsageI]").hide();
                $("i[id*=spnSrtFaxUsageI" + sortusing + "Asc]").show();
                sortFaxUsageType = "ASC";
            }
            else {
                $("i[id*=spnSrtFaxUsageI]").hide();
                $("i[id*=spnSrtFaxUsageI" + sortusing + "Desc]").show();
                sortFaxUsageType = "DESC";
            }
        }
        else if (btnid.indexOf("btnSrtFaxUsageO") >= 0) {
            var sortusing = btnid.replace("btnSrtFaxUsageO", "");
            sortFaxUsageBy = sortusing;

            if ($("i[id*=spnSrtFaxUsageO" + sortusing + "Asc]").is(":visible")) {
                $("i[id*=spnSrtFaxUsageO]").hide();
                $("i[id*=spnSrtFaxUsageO" + sortusing + "Desc]").show();
                sortFaxUsageType = "DESC";
            }
            else if ($("i[id*=spnSrtFaxUsageO" + sortusing + "Desc]").is(":visible")) {
                $("i[id*=spnSrtFaxUsageO]").hide();
                $("i[id*=spnSrtFaxUsageO" + sortusing + "Asc]").show();
                sortFaxUsageType = "ASC";
            }
            else {
                $("i[id*=spnSrtFaxUsageO]").hide();
                $("i[id*=spnSrtFaxUsageO" + sortusing + "Desc]").show();
                sortFaxUsageType = "DESC";
            }
        }

        getFaxUsageGridPages();
        return false;
        e.preventDefault();
    });
}

function faxUsagePageChange() {
    $("a[id*=hrefpageFaxUsage]").unbind().click(function (e) {
        var pagebtn = $(this).data("pagebtn");
        if ($(this).css('pointer-events') == 'none') {
            e.preventDefault();
            return false;
        }
        if (pagebtn == "first") {
            pageFaxUsageCurrentPage = 1;
            setFaxUsagePageParams("", "", false);
        }
        if (pagebtn == "last") {
            pageFaxUsageCurrentPage = pageFaxUsageTotalPage;
            setFaxUsagePageParams("", "", false);
        }
        if (pagebtn == "next") {
            pageFaxUsageCurrentPage = pageFaxUsageCurrentPage + 1;
            setFaxUsagePageParams("", "", false);
        }
        if (pagebtn == "previous") {
            pageFaxUsageCurrentPage = pageFaxUsageCurrentPage - 1;
            setFaxUsagePageParams("", "", false);
        }
        $("#tblISPserviceIFaxUsage > tbody").scrollTop(0);
        $("#tblISPserviceOFaxUsage > tbody").scrollTop(0);
        return false;
        e.preventDefault();
    });


    $("#txtpageFaxUsageCurrentPage").keyup(function (e) {
        if (e.keyCode == 13) {
            if (isNormalInteger(this.value)) {
                var enteredValue = parseInt(this.value);
                if (enteredValue >= pageFaxUsageTotalPage) {
                    pageFaxUsageCurrentPage = pageFaxUsageTotalPage;
                    setFaxUsagePageParams("", "", false);
                }
                else {
                    pageFaxUsageCurrentPage = enteredValue;
                    setFaxUsagePageParams("", "", false);
                }
            }
            else {
                pageFaxUsageCurrentPage = 1;
                setFaxUsagePageParams("", "", false);
            }
            $("#tblISPserviceIFaxUsage > tbody").scrollTop(0);
            $("#tblISPserviceOFaxUsage > tbody").scrollTop(0);
        }
    });
}

function setFaxUsagePageParams(data, issuccess, settingFirstTime) {
    if (settingFirstTime) {
        if (issuccess) {
            if (data.inbox_messages || data.send_messages) {
                pageFaxUsageTotalRecords = (parseInt(data.total)) ? parseInt(data.total) : 1;
                pageFaxUsageTotalPage = setNumberOfPages(pageFaxUsageTotalRecords, pageFaxUsagePageSize);
                pageFaxUsageTotalPage = (pageFaxUsageTotalPage) ? pageFaxUsageTotalPage : 1;

                $("#txtpageFaxUsageCurrentPage").val(String(pageFaxUsageCurrentPage));
                $("#lblpageFaxUsageTotalPage").html("of " + pageFaxUsageTotalPage);

                var lblpageFaxUsage1 = "";
                if (pageFaxUsagePageSize >= pageFaxUsageTotalRecords) {
                    pageFaxUsageEndAt = pageFaxUsageTotalRecords;
                }
                else {
                    pageFaxUsageEndAt = pageFaxUsagePageSize;
                }
                lblpageFaxUsage1 = pageFaxUsageStartAt + "-" + pageFaxUsageEndAt + " of " + pageFaxUsageTotalRecords;
                $("#lblpageFaxUsageStartAt").html(lblpageFaxUsage1);

                //set sorting parameters
                if (data.inbox_messages) {
                    sortFaxUsageBy = "msg_time";
                    sortFaxUsageType = "DESC";
                    $("#spnSrtFaxUsageImsg_timeDesc").show();
                    $("#spnSrtFaxUsageImsg_timeDesc").parent().parent().parent().addClass("active");
                } else if (data.send_messages) {
                    sortFaxUsageBy = "usage_date_time";
                    sortFaxUsageType = "DESC";
                    $("#spnSrtFaxUsageOusage_date_timeDesc").show();
                    $("#spnSrtFaxUsageOusage_date_timeDesc").parent().parent().parent().addClass("active");
                }
                $("#txtpageFaxUsageCurrentPage").parent().show();
                faxUsagePageChange();
            } else {
                $("#txtpageFaxUsageCurrentPage").val("");
                //$("#txtpageJournalsCurrentPage").attr("disabled", "disabled");
                $("#lblpageFaxUsageTotalPage").html("");
                $("#lblpageFaxUsageStartAt").html("");
                $("#txtpageFaxUsageCurrentPage").parent().hide();
            }
        }
        else {
            var newrow = $("<tr />");
            if (!CancelRequest) {
                $("#tblISPserviceOFaxUsage").hide();
                $("#tblISPserviceIFaxUsage").show();

                $("#tblISPserviceIFaxUsage > tbody").html("");
                $("#tblISPserviceIFaxUsage").append(newrow);
                if (data.responseJSON.message) {
                    newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
                }
                if (data.responseJSON.errors) {
                    newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }
            }
            else {
                $("#tblISPserviceOFaxUsage").hide();
                $("#tblISPserviceIFaxUsage").show();

                $("#tblISPserviceIFaxUsage > tbody").html("");
                $("#tblISPserviceIFaxUsage").append(newrow);
                newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
                CancelRequest = false;
            }
            return false;
        }
    }
    else {
        pageFaxUsageStartAt = ((pageFaxUsageCurrentPage * pageFaxUsagePageSize - pageFaxUsagePageSize) + 1);
        $("#txtpageFaxUsageCurrentPage").val(String(pageFaxUsageCurrentPage));

        if (pageFaxUsageCurrentPage < pageFaxUsageTotalPage) {
            pageFaxUsageEndAt = pageFaxUsageStartAt + (pageFaxUsagePageSize - 1);
        }
        else if (pageFaxUsageCurrentPage == pageFaxUsageTotalPage) {
            pageFaxUsageEndAt = pageFaxUsageTotalRecords;
        }
        lblpageFaxUsage1 = pageFaxUsageStartAt + "-" + pageFaxUsageEndAt + " of " + pageFaxUsageTotalRecords;
        $("#lblpageFaxUsageStartAt").html(lblpageFaxUsage1);
    }
    if (pageFaxUsageCurrentPage == 1) {
        $("#lipageFaxUsagePrevious").removeClass();
        $("#hrefpageFaxUsageFirst").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageFaxUsagePrevious").attr("style", "pointer-events: none; cursor: default;");
    }

    if (pageFaxUsageCurrentPage > 1) {
        $("#lipageFaxUsagePrevious").addClass("active");

        $("#hrefpageFaxUsageFirst").removeAttr("style");
        $("#hrefpageFaxUsagePrevious").removeAttr("style");
    }

    if (pageFaxUsageCurrentPage < pageFaxUsageTotalPage) {
        $("#lipageFaxUsageNext").addClass("active");

        $("#hrefpageFaxUsageNext").removeAttr("style");
        $("#hrefpageFaxUsageLast").removeAttr("style");
    }

    if (pageFaxUsageCurrentPage == pageFaxUsageTotalPage) {
        $("#lipageFaxUsageNext").removeClass();
        $("#hrefpageFaxUsageNext").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageFaxUsageLast").attr("style", "pointer-events: none; cursor: default;");
    }

    getFaxUsageGridPages();

}

function setFaxUsageGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.inbox_messages) {
            $("#tblISPserviceIFaxUsage").show();
            $("#tblISPserviceOFaxUsage").hide();
            drawFaxUsageInboundTable(data);
            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").prop("disabled", false);
            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").removeClass("disabled");
        }
        else if (data.send_messages) {
            $("#tblISPserviceIFaxUsage").hide();
            $("#tblISPserviceOFaxUsage").show();
            drawFaxUsageSendTable(data);

            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").prop("disabled", false);
            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").removeClass("disabled");
        }
        else {
            $("#tblISPserviceOFaxUsage").hide();
            $("#tblISPserviceIFaxUsage").show();

            $("#tblISPserviceIFaxUsage > tbody").html("");
            $("#tblISPserviceIFaxUsage").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No service usage log(s) found in the system</td>"));
            var row = $("<tr>");
            //var tfoot = $("<tfoot style='position: static; left:0; bottom:0;'>");
            //$("#tblISPserviceIFaxUsage").append(tfoot);
            $("#tblISPserviceIFaxUsage > tfoot").html("");

            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").prop("disabled", true);
            $("#btnServiceFaxUsageExportCSV,#btnServiceFaxUsageExportExcel").addClass("disabled");

        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPserviceOFaxUsage").hide();
            $("#tblISPserviceIFaxUsage").show();

            $("#tblISPserviceIFaxUsage > tbody").html("");
            $("#tblISPserviceIFaxUsage").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
            $("#tblISPserviceIFaxUsage > tfoot").html("");
        }
        else {
            $("#tblISPserviceOFaxUsage").hide();
            $("#tblISPserviceIFaxUsage").show();

            $("#tblISPserviceIFaxUsage > tbody").html("");
            $("#tblISPserviceIFaxUsage").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
            $("#tblISPserviceIFaxUsage > tfoot").html("");
        }
    }
}

function drawFaxUsageInboundTable(data) {

    $("#tblISPserviceIFaxUsage > tbody").html("");
    $("#tblISPserviceIFaxUsage > tfoot").html("");
    $("#tblISPserviceIFaxUsage > thead > tr:first-child").removeClass();
    var tb = document.querySelectorAll("#tblISPserviceIFaxUsage tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPserviceIFaxUsage > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }

    for (var i = 0; i <= data.inbox_messages.length; i++) {
        if (i < data.inbox_messages.length) {
            if (i % 2 == 0) {
                data.inbox_messages[i].row_color = LIGHT_GREEN;
            } else {
                data.inbox_messages[i].row_color = LIGHT_WHITE;
            }
            drawFaxUsageInboundRows(data.inbox_messages[i]);
        } else {
            var row = $("<tr>");
            //var tfoot = $("<tfoot style='position: static; left:0; bottom:0;'>");
            //$("#tblISPserviceIFaxUsage").append(tfoot);
            $("#tblISPserviceIFaxUsage > tfoot").append(row);
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td>" + data.total_pages + "</td>"));
            row.append($("<td>" + data.total_duration + "</td>"));
            row.append($("<td>" + data.total_amount + "</td>"));
            row.append($("<td>" + data.total_bill_pages + "</td>"));

            row.append($("<td>" + data.total_bill_duration + "</td>"));
            row.append($("<td>" + data.total_bill_amount + "</td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));

            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
        }
    }

    $("#tblISPserviceIFaxUsage > tbody").scrollTop(0);
}

function drawFaxUsageInboundRows(rowData) {

    var row = $("<tr style=\"background-color:" + rowData.row_color + " \">");
    $("#tblISPserviceIFaxUsage").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it

    row.append($("<td>" + Strings.orEmpty(rowData.message_time) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.csid) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.pages) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.duration) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.amount) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.bill_pages) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.bill_duration) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.bill_amount) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.bill_time) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.type) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.charged) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.status) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.j2_number) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.email_address) + "</td>"));
}


function drawFaxUsageSendTable(data) {
    $("#tblISPserviceOFaxUsage > tfoot").html("");
    $("#tblISPserviceOFaxUsage > tbody").html("");
    $("#tblISPserviceOFaxUsage > thead > tr:first-child").removeClass();
    var tb = document.querySelectorAll("#tblISPserviceOFaxUsage tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPserviceOFaxUsage > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    // if (data.send_messages.length > 5) {
    //     $("#tblISPserviceOFaxUsage > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    // }
    for (var i = 0; i <= data.send_messages.length; i++) {
        if (i < data.send_messages.length) {
            if (i % 2 == 0) {
                data.send_messages[i].row_color = LIGHT_GREEN;
            } else {
                data.send_messages[i].row_color = LIGHT_WHITE;
            }
            drawFaxUsageSendRows(data.send_messages[i]);
        } else {
            var row = $("<tr>");
            //$("#tblISPserviceOFaxUsage").append(row);
            $("#tblISPserviceOFaxUsage > tfoot").append(row);
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td>" + data.total_pages + "</td>"));

            row.append($("<td></td>"));
            row.append($("<td>" + data.total_duration + "</td>"));
            row.append($("<td>" + data.total_adj_pages + "</td>"));
            row.append($("<td></td>"));

            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));

            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));

            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td></td>"));
            row.append($("<td><td>"));

            row.append($("<td></td>"));
            row.append($("<td></td>"));
        }
    }

    if (data.length > 0) {
        $("#tblISPserviceOFaxUsage > tbody").children(":first").children(":first").next().children(":first").next().trigger("click");
    }
    $("#tblISPserviceOFaxUsage > tbody").scrollTop(0);
}

function drawFaxUsageSendRows(rowData) {

    var row = $("<tr style=\"background-color:" + rowData.row_color + " \">");
    $("#tblISPserviceOFaxUsage").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it

    row.append($("<td>" + Strings.orEmpty(rowData.usage_date_time) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.message_id) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.destination) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.csid) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.subject) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.pages) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.bill_retry) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.duration) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.adjusted_pages) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.status) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.last_attempt_duration) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.error_key) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.bill_pages) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.bill_amount) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.bill_duration) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.last_attempt_amount) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.last_attempt_status) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.giftable_zone) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.country) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.send_colo) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.comments) + "</td>"));

    row.append($("<td>" + Strings.orEmpty(rowData.resource_id) + "</td>"));
    row.append($("<td>" + Strings.orEmpty(rowData.type) + "</td>"));
}


//==END::: Service -> Fax Usage History TAB

//==START::: Event Tab
function clearEventsTab() {
    $("input[id*=txtevents]").not("#txteventsfromtofilter").val("");
    $("textarea[id*=txtevents]").val("");
    $("#chkeventsbill_status").prop("checked", false);
    $("#opteventspriority").removeAttr("style");

}
function getEventsGrid() {
    clearEventsTab();
    //disable all the controls

    //$("input[id*=txtevents]").attr({ "disabled": "disabled" });
    // $("textarea[id*=txtevents]").attr({ "disabled": "disabled" });
    // $("select[id*=optevents]").attr({ "disabled": "disabled" });
    // $("#chkeventsbill_status").attr({ "disabled": "disabled" });

    onClickbtnFilterEvents();
    onClickbtnSaveEvent();

    setDatePicker("txteventsfromtofilter");
    togglebtnFilterEvents();

    getEventTypeOptionSet();
    $('#opteventsevent_type option[value="S"]').attr("disabled", "disabled");
    $('#opteventsevent_type option[value="A"]').attr("disabled", "disabled");

    onkeypressEventForm();
    onChangeEventForm();
    isFilteredEvents = false;
    onClickbtnAddEvent();
    getAjaxFunc("lookup/eventsearchtypes", setEventTypeSearchOptionSetsFunc, "");
    setTimeout(function () {
        $('#opteventtype_search').multiselect({
            numberDisplayed: 1,
            buttonClass: 'btn multiselectdropdown input-height',
            buttonWidth: '183px',
            includeSelectAllOption: true,
            allSelectedText: 'All Selected',
            nonSelectedText: 'None selected'
        });
        $("#opteventtype_search").multiselect('selectAll', false);
        $('#opteventtype_search').multiselect('updateButtonText');
        eventTypeFilter = $("#opteventtype_search").val();
        $("#txteventsfromtofilter").val("").trigger("change");
        if (customerKey) {
            getAjaxFunc("customers/" + customerKey + "/events?startAt=" + pageEventsStartAt + "&maxResults=1", setEventsPageParams, true);
        }
    }, 1300)


}

function turnOffEventErrors() {
    // $("div[id*=divEventMainError]").hide();
    $("#divEventMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divEventMainError").hide();

    $("#divEventMainSuccess").hide();
}
var togglebtnFilterEvents = function () {
    $("#txteventsfromtofilter").off("change").on("change", function () {
        if ($("#txteventsfromtofilter").val()) {
            $("#btnFilterEvents").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnFilterEvents").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
    $("#opteventtype_search").off("change").on("change", function () {
        if ($("#opteventtype_search").val()) {

            $("#btnFilterEvents").removeAttr("disabled").attr({ "class": "grey-btn" });

        } else {
            $("#btnFilterEvents").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
    });
}
var togglebtnEvents = function () {
    $("#btnAddEvents").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
}

var toggleDisabledbtnEventsForm = function () {
    $("input[id*=txtevents]").not("[id=txteventsfromtofilter]").attr({ "disabled": "disabled" });
    $("textarea[id*=txtevents]").attr({ "disabled": "disabled" });
    $("select[id*=optevents]").attr({ "disabled": "disabled" });
    $("#chkeventsbill_status").attr({ "disabled": "disabled" });
    $("#btnSaveEvents").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });

}

var toggleEnabledbtnEventsForm = function () {
    $("input[id*=txtevents]").removeAttr("disabled");
    $("textarea[id*=txtevents]").removeAttr("disabled");
    $("select[id*=optevents]").removeAttr("disabled");
    $("#chkeventsbill_status").removeAttr("disabled");
    $("#btnSaveEvents").removeAttr("disabled").attr({ "class": "grey-btn" });
    // if($("#opteventsevent_type option:selected").val() === 'S' || $("#opteventsevent_type option:selected").val() === 'A'){
    //       $("select[id*=optevents]").attr("disabled", "disabled");
    //        $("#txteventsnotes").attr("disabled", "disabled");
    //}


}


var onClickbtnFilterEvents = function () {
    $("#btnFilterEvents").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        var $txteventsfromtofilter = $("#txteventsfromtofilter").val()
        var $txteventstypefilter = $("#opteventtype_search").val()
        if ($txteventsfromtofilter || $txteventstypefilter) {
            isFilteredEvents = true;

            var $txteventsfromtofilter_split = $txteventsfromtofilter.split('-');
            Eventsclickedforfirsttime = false;
            clearEventsTab();
            pageEventsCurrentPage = 1;
            pageEventsTotalPage = 1;
            pageEventsStartAt = 1;
            //if($txteventstypefilter && !$txteventsfromtofilter){
            eventTypeFilter = $txteventstypefilter

            //}else if(!$txteventstypefilter && $txteventsfromtofilter){ 
            startDateEvents = $txteventsfromtofilter ? moment($txteventsfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD') : "";
            endDateEvents = $txteventsfromtofilter ? moment($txteventsfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD') : "";
            getAjaxFunc("customers/" + customerKey + "/events?startAt=1&maxResults=1&startDate=" + startDateEvents + "&endDate=" + endDateEvents + "&eventType=" + eventTypeFilter, setEventsPageParams, true);
            //	getAjaxFunc("customers/" + customerKey + "/events?startAt=1&maxResults=1&startDate=" + startDateEvents + "&endDate=" + endDateEvents, setEventsPageParams, true);
            //}else if($txteventstypefilter && $txteventsfromtofilter){ 
            //startDateEvents = moment($txteventsfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            //endDateEvents = moment($txteventsfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            //	getAjaxFunc("customers/" + customerKey + "/events?startAt=1&maxResults=1&startDate=" + startDateEvents + "&endDate=" + endDateEvents + "&eventType=" + eventTypeFilter, setEventsPageParams, true);
            //}else if(!$txteventstypefilter && !$txteventsfromtofilter){
            //	getAjaxFunc("customers/" + customerKey + "/events?startAt=1&maxResults=1&startDate=" + startDateEvents + "&endDate=" + endDateEvents + "&eventType=" + eventTypeFilter, setEventsPageParams, true);
            //}

        }
    });
    $("#btnResetfilterEvents").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        $("#txteventsfromtofilter").val("").trigger("change");
        //  $("#opteventtype_search").val("").trigger("change");
        Eventsclickedforfirsttime = false;
        $("#btnFilterEvents").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        if (isFilteredEvents) {
            pageEventsCurrentPage = 1;
            pageEventsStartAt = 1;
            getEventsGrid();

        }
        // $('.multiselect-selected-text').attr('title', 'None selected').html('None selected');
        $('.multiselect-container li').removeClass('active');
        $('#opteventtype_search').multiselect('selectAll', false);
        $('#opteventtype_search').multiselect('updateButtonText');
        //$("#opteventtype_search").trigger("change");
        isFilteredEvents = false;
    });
}

var onClickbtnAddEvent = function () {

    $("#btnAddEvents").off("click").on("click", function () {
        turnOffEventErrors();
        //  $("select[id*=optevents]").removeAttr("disabled");
        //  $('#opteventsevent_type option[value="S"]').attr("disabled",false);
        //$('#opteventsevent_type option[value="A"]').attr("disabled",false);
        //  $("#txteventsnotes").removeAttr("disabled");
        //$('#opteventsevent_type option[value="N"]').attr("selected", true);
        $("#opteventsevent_type").val("N");
        $("#txteventsnotes").val("");
        togglebtnEvents();
        saveEventMode = addOrUpdate.add;
        isInModificationMode = true;
        $("#tblISPevents tr").removeClass("active1");
        toggleEnabledbtnEventsForm();

        //$('#opteventsevent_type option[value="S"]').attr("disabled", "disabled");
        //$('#opteventsevent_type option[value="A"]').attr("disabled", "disabled");


    });
}

var onModifyEventConfirm = function () {
    var htmlcontent = "<p align='center'>Do you want to save changes?</p>";
    htmlcontent += "<p align='center'>	<button class='btn' onclick='onClickbtnModifyEvent();window.parent.sd.hide();'>Yes</button>";
    htmlcontent += "<button class='btn' onclick='setPrevEventDate();window.parent.sd.hide();'>No</button>";

    var sd = new SimpleDialog("Test" + Math.random(), false);
    sd.setTitle("");
    sd.createDialog();
    window.parent.sd = sd;
    sd.setContentInnerHTML(htmlcontent);
    sd.show();
}

var onClickbtnSaveEvent = function () {

    $("#btnSaveEvents").off("click").on("click", function () {
        turnOffEventErrors();
        if (isInModificationMode) {
            if ($("#txteventsnotes").val() === "") {
                $("#divEventMainError").html("<span>Please provide event description.</span>");
                $("#divEventMainError").show();
            } else {
                if (saveEventMode === addOrUpdate.add) {
                    onClickbtnInsertEvent();
                } else {
                    onModifyEventConfirm();
                }
            }


        } else {
            $("#divEventMainError").html("<span>No changes to save</span>");
            $("#divEventMainError").show();
        }
    });
}

var onClickbtnInsertEvent = function () {
    turnOffEventErrors();
    var objevent = new Object();
    objevent.event = new Object();
    var getFromLocalStorage = getLocalStorageOptionSetData("eventtype");


    if (getFromLocalStorage) {
        for (var i = 0; i < getFromLocalStorage.event_types.length; i++) {
            if (getFromLocalStorage.event_types[i].type && getFromLocalStorage.event_types[i].description.toLowerCase() == $("#opteventsevent_type option:selected").html().toLowerCase()) {
                objevent.event.event_type = getFromLocalStorage.event_types[i].type;
                objevent.event.event_subtype = getFromLocalStorage.event_types[i].subType;
                break;
            }

        }
    }

    objevent.event.notes = $("#txteventsnotes").val();
    var eventskey = $("#txteventsevent_key").val();
    postAjaxFunc("customers/" + customerKey + "/events", JSON.stringify(objevent), onAddEventDetails);
}

/*var onAddEventDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divEventMainError").html("</br>" + data.errors[0].developer_message);
                $("#divEventMainError").show();
            }
        } else {

            isInModificationMode = false;
            $("#btnFilterEvents").trigger("click");
            setTimeout(function () {
                $("#divEventMainSuccess").html("</br>" + 'Event created successfully.');
                $("#divEventMainSuccess").show();
            }, 6000);
            event_form_keypress = false;
            saveEventMode = addOrUpdate.update;

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divEventMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divEventMainError").show();
        }
        else {
            $("#divEventMainError").html("</br>Request Cancelled.");
            $("#divEventMainError").show();
            CancelRequest = false;
        }
    }
}*/

var onClickbtnModifyEvent = function () {
    turnOffEventErrors();
    var objevent = new Object();
    objevent.event = new Object();
    var getFromLocalStorage = getLocalStorageOptionSetData("eventtype");
    if (getFromLocalStorage) {
        for (var i = 0; i < getFromLocalStorage.event_types.length; i++) {
            if (getFromLocalStorage.event_types[i].type && getFromLocalStorage.event_types[i].description.toLowerCase() == $("#opteventsevent_type option:selected").html().toLowerCase()) {
                objevent.event.event_type = getFromLocalStorage.event_types[i].type;
                objevent.event.event_subtype = getFromLocalStorage.event_types[i].subType;
                break;
            }

        }
    }

    objevent.event.notes = $("#txteventsnotes").val();
    objevent.event.version = ($("#txteventsversion").val() === "" ? null : $("#txteventsversion").val());
    var eventskey = $("#txteventsevent_key").val();


    putAjaxFunc("customers/" + customerKey + "/events/" + eventskey, JSON.stringify(objevent), onModifyEventDetails);


}
var onAddEventDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divEventMainError").html("</br>" + data.errors[0].developer_message);
                $("#divEventMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.



            isInModificationMode = false;
            $("#btnFilterEvents").trigger("click");
            setTimeout(function () {
                $("#divEventMainSuccess").html("</br>" + 'Event created successfully.');
                $("#divEventMainSuccess").show();
            }, 3000);
            event_form_keypress = false;
            saveEventMode = addOrUpdate.update;
            $("#btnAddEvents").removeAttr("disabled").attr({ "class": "grey-btn" });


        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divEventMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divEventMainError").show();
        }
        else {
            $("#divEventMainError").html("</br>Request Cancelled.");
            $("#divEventMainError").show();
            CancelRequest = false;
        }
    }
}
var onModifyEventDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divEventMainError").html("</br>" + data.errors[0].developer_message);
                $("#divEventMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.



            isInModificationMode = false;
            //$("#btnFilterEvents").trigger("click");
            var oldeventskey = eventskey;
            getEventsGridPages();
            setTimeout(function () {
                if (oldeventskey != eventskey) {
                    $("#eventskey" + oldeventskey).trigger("click");
                }
                setTimeout(function () {
                    $("#divEventMainSuccess").html("</br>" + 'Event updated successfully.');
                    $("#divEventMainSuccess").show();
                }, 500);
            }, 3000);

            event_form_keypress = false;
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divEventMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divEventMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divEventMainError").show();
        }
        else {
            $("#divEventMainError").html("</br>Request Cancelled.");
            $("#divEventMainError").show();
            CancelRequest = false;
        }
    }
}

function getEventsGridPages() {
    if (isFilteredEvents) {
        getAjaxFunc("customers/" + customerKey + "/events?startAt=" + pageEventsStartAt + "&maxResults=" + pageEventsPageSize + "&startDate=" + startDateEvents + "&endDate=" + endDateEvents + "&eventType=" + eventTypeFilter, setEventsGrid, "");
    } else {
        getAjaxFunc("customers/" + customerKey + "/events?startAt=" + pageEventsStartAt + "&maxResults=" + pageEventsPageSize, setEventsGrid, "");
    }
}

function eventsPageChange() {
    $("a[id*=hrefpageEvents]").off("click").on("click", function (e) {
        var pagebtn = $(this).data("pagebtn");
        if ($(this).css('pointer-events') == 'none') {
            e.preventDefault();
            return false;
        }
        if (pagebtn == "first") {
            pageEventsCurrentPage = 1;
            setEventsPageParams("", "", false);
        }
        if (pagebtn == "last") {
            pageEventsCurrentPage = pageEventsTotalPage;
            setEventsPageParams("", "", false);
        }
        if (pagebtn == "next") {
            pageEventsCurrentPage = pageEventsCurrentPage + 1;
            setEventsPageParams("", "", false);
        }
        if (pagebtn == "previous") {
            pageEventsCurrentPage = pageEventsCurrentPage - 1;
            setEventsPageParams("", "", false);
        }
        $("#tblISPevents > tbody").scrollTop(0);
        e.preventDefault();
    });


    $("#txtpageEventsCurrentPage").off("keyup").on("keyup", function (e) {
        if (e.keyCode == 13) {
            if (isNormalInteger(this.value)) {
                var enteredValue = parseInt(this.value);
                if (enteredValue >= pageEventsTotalPage) {
                    pageEventsCurrentPage = pageEventsTotalPage;
                    setEventsPageParams("", "", false);
                }
                else {
                    pageEventsCurrentPage = enteredValue;
                    setEventsPageParams("", "", false);
                }
            }
            else {
                pageEventsCurrentPage = 1;
                setEventsPageParams("", "", false);
            }
            $("#tblISPevents > tbody").scrollTop(0);
        }
    });
}

function isNormalInteger(str) {
    var n = ~~Number(str);
    return String(n) === str && n > 0;
}

function setEventsPageParams(data, issuccess, settingFirstTime) {
    if (settingFirstTime) {
        if (issuccess) {
            if (data.events) {
                pageEventsTotalRecords = (parseInt(data.total)) ? parseInt(data.total) : 1;
                pageEventsTotalPage = setNumberOfPages(pageEventsTotalRecords, pageEventsPageSize);
                pageEventsTotalPage = (pageEventsTotalPage) ? pageEventsTotalPage : 1;

                $("#txtpageEventsCurrentPage").val(String(pageEventsCurrentPage));
                $("#lblpageEventsTotalPage").html("of " + pageEventsTotalPage);

                var lblpageEvents1 = "";
                if (pageEventsPageSize >= pageEventsTotalRecords) {
                    pageEventsEndAt = pageEventsTotalRecords;
                }
                else {
                    pageEventsEndAt = pageEventsPageSize;
                }
                lblpageEvents1 = pageEventsStartAt + "-" + pageEventsEndAt + " of " + pageEventsTotalRecords;
                $("#lblpageEventsStartAt").html(lblpageEvents1);
                $("#txtpageEventsCurrentPage").parent().show();
                eventsPageChange();
            } else {
                $("#txtpageEventsCurrentPage").val("");
                $("#lblpageEventsTotalPage").html("");
                $("#lblpageEventsStartAt").html("");
                $("#txtpageEventsCurrentPage").parent().hide();
            }
        }
        else {
            var newrow = $("<tr />");
            if (!CancelRequest) {
                $("#tblISPevents > tbody").html("");
                $("#tblISPevents").append(newrow);
                if (data.responseJSON.message) {
                    newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
                }
                if (data.responseJSON.errors) {
                    newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
                }
            }
            else {
                $("#tblISPevents > tbody").html("");
                $("#tblISPevents").append(newrow);
                newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
                CancelRequest = false;
            }
            return false;
        }
    }
    else {
        pageEventsStartAt = ((pageEventsCurrentPage * pageEventsPageSize - pageEventsPageSize) + 1);
        $("#txtpageEventsCurrentPage").val(String(pageEventsCurrentPage));

        if (pageEventsCurrentPage < pageEventsTotalPage) {
            pageEventsEndAt = pageEventsStartAt + (pageEventsPageSize - 1);
        }
        else if (pageEventsCurrentPage == pageEventsTotalPage) {
            pageEventsEndAt = pageEventsTotalRecords;
        }
        lblpageEvents1 = pageEventsStartAt + "-" + pageEventsEndAt + " of " + pageEventsTotalRecords;
        $("#lblpageEventsStartAt").html(lblpageEvents1);
    }
    if (pageEventsCurrentPage == 1) {
        $("#lipageEventsPrevious").removeClass();
        $("#hrefpageEventsFirst").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageEventsPrevious").attr("style", "pointer-events: none; cursor: default;");
    }

    if (pageEventsCurrentPage > 1) {
        $("#lipageEventsPrevious").addClass("active");

        $("#hrefpageEventsFirst").removeAttr("style");
        $("#hrefpageEventsPrevious").removeAttr("style");
    }

    if (pageEventsCurrentPage < pageEventsTotalPage) {
        $("#lipageEventsNext").addClass("active");

        $("#hrefpageEventsNext").removeAttr("style");
        $("#hrefpageEventsLast").removeAttr("style");
    }

    if (pageEventsCurrentPage == pageEventsTotalPage) {
        $("#lipageEventsNext").removeClass();
        $("#hrefpageEventsNext").attr("style", "pointer-events: none; cursor: default;");
        $("#hrefpageEventsLast").attr("style", "pointer-events: none; cursor: default;");
    }

    getEventsGridPages();

}

function setEventsGrid(data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data.events) {
            drawEventsTable(data.events);
        }
        else {
            $("#tblISPevents > tbody").html("");
            $("#tblISPevents").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No Event(s) found in the System</td>"));
        }
    }
    else {
        if (!CancelRequest) {
            $("#tblISPevents > tbody").html("");
            $("#tblISPevents").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        }
        else {
            $("#tblISPevents > tbody").html("");
            $("#tblISPevents").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
function drawEventsTable(data) {

    $("#tblISPevents > tbody").html("");
    $("#tblISPevents > thead > tr:first-child").removeClass();
    if (data.length > 5) {
        $("#tblISPevents > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    for (var i = 0; i < data.length; i++) {
        drawEventsRows(data[i], (i + 1));
    }
    onClickbtnEventskey();
    makeRowActive();
    if (data.length > 0) {
        //if (!Eventsclickedforfirsttime) {
        $("#tblISPevents > tbody").children(":first").children(":first").children(":first").next().trigger("click");
        //Eventsclickedforfirsttime = true;
        //}
    }
    $("#tblISPevents > tbody").scrollTop(0);
}

var setEventsRowColor = function (eventRow) {
    var eventcolorcode = "";
    if (eventRow.event_class && eventRow.event_class.indexOf("TL-") != -1) {
        var eventclass = eventRow.event_class.replace("TL-", "");
        if (eventclass.indexOf("-") == -1) {
            eventcolorcode = LIGHT_WHITE;
        } else {
            var eventTransactionLog = eventclass.substring(eventclass.indexOf("-") + 1);
            if (eventTransactionLog) {
                var eventTransactionLogColorCodes = [
                    { etl: "A", clr: LIGHT_GREEN },
                    { etl: "T", clr: LIGHT_GREEN },
                    { etl: "R", clr: LIGHT_GREEN },
                    { etl: "U", clr: LIGHT_GREEN },
                    { etl: "BU", clr: LIGHT_GREEN },
                    { etl: "B", clr: LIGHT_GREEN },

                    { etl: "D", clr: LIGHT_RED },
                    { etl: "C", clr: LIGHT_RED },
                    { etl: "I", clr: LIGHT_RED },
                    { etl: "S", clr: LIGHT_RED },
                    { etl: "BS", clr: LIGHT_RED },

                    { etl: "M", clr: LIGHT_BLUE },
                    { etl: "E", clr: LIGHT_BLUE }
                ];

                eventcolorcode = (eventTransactionLogColorCodes.filter(function (x) { return x.etl == eventTransactionLog })[0]) ? eventTransactionLogColorCodes.filter(function (x) { return x.etl == eventTransactionLog })[0].clr : LIGHT_WHITE;

            } else {
                eventcolorcode = LIGHT_WHITE;
            }
        }
    } else if (eventRow.event_class) {
        var eventServicesColorCodes = [
            { etl: "COMBO", clr: LIGHT_BLUE },
            { etl: "SEND", clr: LIGHT_BLUE },
            { etl: "INBOX", clr: LIGHT_BLUE },
        ];
        if (eventRow.event_class == "COMBO") {
            eventcolorcode = LIGHT_SKY;
        } else {
            eventcolorcode = (eventServicesColorCodes.filter(function (x) { return x.etl == eventTransactionLog })[0]) ? eventServicesColorCodes.filter(function (x) { return x.etl == eventTransactionLog })[0].clr : LIGHT_YELLOW;
        }

    } else {
        eventcolorcode = LIGHT_WHITE;
    }



    if (eventRow.event_status != "E" && eventRow.event_status != "C") {
        eventcolorcode = LIGHT_RED;
    }
    if (!eventRow.event_class) {
        eventcolorcode = LIGHT_WHITE;
    }
    var eventPriorityColorCodes = [
        { priority: 1, clr: "#FFC3C6" },
        { priority: 2, clr: "#FFE3E7" },
        { priority: 3, clr: "#FFFFFF" },
        { priority: 4, clr: "#E7E3FF" },
        { priority: 5, clr: "#C6C3FF" }
    ];
    if (eventRow.priority) {
        eventcolorcode = (eventPriorityColorCodes.filter(function (x) { return x.priority == eventRow.priority })[0]) ? eventPriorityColorCodes.filter(function (x) { return x.priority == eventRow.priority })[0].clr : "";
    }
    return eventcolorcode;
}

function drawEventsRows(rowData) {

    var row = $("<tr style=\"background-color:" + setEventsRowColor(rowData) + " \">");
    $("#tblISPevents").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    /*if (rowData.event_status == "E" || rowData.event_status == "C") {
        row.append($("<td> <input type=\"checkbox\" checked disabled /></td>"));
    }
    else {
        row.append($("<td> <input type=\"checkbox\" disabled /></td>"));
    }*/

    row.append($("<td>" + ((rowData.sorting_date) ? rowData.sorting_date : "") + "</br><a href=\"#\" id=\"eventskey" + rowData.event_key + "\" data-eventskey=\"" + rowData.event_key + "\">#" + rowData.event_key + "</a></td>"));
    row.append($("<td>" + ((rowData.event_class == "COMBO") ? rowData.event_class : (rowData.event_type_description ? rowData.event_type_description.replace(/(?:\r\n|\r|\n)/g, "<br />") : "")) + "</td>"));
    row.append($("<td>" + (rowData.assignee ? rowData.assignee.replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + (rowData.entry_user_id ? rowData.entry_user_id.replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + "</td>"));
    row.append($("<td>" + (rowData.notes ? rowData.notes.replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/"/ig, "&quot;").replace(/'/, "&apos;").replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + "</td>"));
}

function onClickbtnEventskey() {

    $("a[id*=eventskey]").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        //      $('#opteventsevent_type option[value="S"]').prop("disabled", false);
        //    $('#opteventsevent_type option[value="A"]').prop("disabled", false);

        clearEventsTab();
        $("#btnAddEvents").removeAttr("disabled").attr({ "class": "grey-btn" });
        eventskey = $(this).data("eventskey");
        getAjaxFunc("customers/" + customerKey + "/events/" + eventskey, setEventskeyDetails, "");
        turnOffEventErrors();
        return false; // prevent default click action from happening!
        e.preventDefault(); // same thing as above
    });
}
function setEventskeyDetails(data, issuccess) {
    if (issuccess) {
        if (data.event) {

            for (var property in data.event) {
                if (data.event.hasOwnProperty(property)) {
                    $("input[id=txtevents" + property + "]").val(data.event[property]);
                    $("textarea[id=txtevents" + property + "]").val(data.event[property]);
                }
            }
            //$("#opteventsevent_type").val(data.event.event_type_description);

            $('#opteventsevent_type option[value="S"]').removeAttr("disabled");
            $('#opteventsevent_type option[value="A"]').removeAttr("disabled");
            $("#opteventsevent_type option:contains(" + data.event.event_type_description + ")").prop('selected', 'selected');//.change();
            $('#opteventsevent_type option[value="S"]').attr("disabled", "disabled");
            $('#opteventsevent_type option[value="A"]').attr("disabled", "disabled");

            var getFromLocalStorage = getLocalStorageOptionSetData("users");
            var eventSalesRep = "";
            if (getFromLocalStorage) {
                for (var i = 0; i < getFromLocalStorage.sales_users.length; i++) {
                    if (getFromLocalStorage.sales_users[i].ldap_user_name && $("body").data("ispldapusername") && getFromLocalStorage.sales_users[i].ldap_user_name.toLowerCase() == $("body").data("ispldapusername").toLowerCase()) {
                        eventSalesRep = getFromLocalStorage.sales_users[i].id;
                        break;
                    }

                }
            }
            if (data.event.entry_user_id) {

                if (JSON.stringify(data.event.entry_user_id).replace(/\"/g, "").toLowerCase() != eventSalesRep.toLowerCase() || ($("#opteventsevent_type option:selected").val() === 'S' || $("#opteventsevent_type option:selected").val() === 'A')) {
                    toggleDisabledbtnEventsForm();
                } else {
                    toggleEnabledbtnEventsForm();
                }
            } else {
                toggleDisabledbtnEventsForm();
            }
        }

    }

}


function setEventTypeSearchOptionSetsFunc(data, issuccess, selectedbydefault) {
    if (issuccess) {
        if (data.event_types) {
            setOptionSets(data.event_types, "#opteventtype_search", selectedbydefault, "searchType", "searchTypeDescription", true);
        }
    }
}



function setNumberOfPages(totalnumberofrecords, pagesize) {
    return Math.ceil(totalnumberofrecords / pagesize);
}

function onkeypressEventForm() {

    $("select[id*=optevents],textarea[id*=txtevents]").off("focusin").on("focusin", function () {
        turnOffEventErrors();
        if (!event_form_keypress) {
            var txtContacts = $("input[id*=txtevents]");
            txtContacts.each(function () {
                $(this).val($.trim($(this).val()));
            });

            event_form_keypress = true;
            var original_formArr = $('#eventDetail :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            eventform_original_data = $.param(original_formArr);
            eventform_original_data_array = original_formArr;
        }
    });
}

function setPrevEventDate() {
    //var formArr = $('#eventDetail :input').serializeArray();
    // var original_formArr = eventform_original_data_array;//$('#eventDetail :input').serializeArray();
    jQuery.each(eventform_original_data_array, function (i, field) {
        eventform_original_data_array[i].value = $.trim(field.value);
        $("#" + eventform_original_data_array[i].name + "").val($.trim(field.value));
    });
    isInModificationMode = false;

}
function onChangeEventForm() {

    $("select[id*=optevents],textarea[id*=txtevents]").off("keyup").on("keyup", function () {
        turnOffEventErrors();
        var formArr = $('#eventDetail :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            if (formArr[i].name === "opteventsevent_type") {
                formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            } else {
                formArr[i].value = $.trim(field.value);
            }

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (event_form_keypress) {
            if (serializedForm != eventform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }

    });
    $("select[id*=optevents]").off("change").on("change", function () {
        var formArr = $('#eventDetail :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            if (formArr[i].name === "opteventsevent_type") {
                formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            } else {
                formArr[i].value = $.trim(field.value);
            }

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (event_form_keypress) {
            if (serializedForm != eventform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
    });
}


//==END::: Event TAB

//START::: Contact Tab ---- "SAVE"

function onkeypressContactForm() {
    $("input[id*=txtcontact],select[id*=optcontact],textarea[id*=txtcontact]").focusin(function () {
        if (!contact_form_keypress) {
            var txtContacts = $("input[id*=txtcontact]");
            txtContacts.each(function () {
                $(this).val($.trim($(this).val()));
            });

            contact_form_keypress = true;
            var original_formArr = $('#contact :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            contactform_original_data = $.param(original_formArr);
        }
    });
}

function onChangeContactForm() {
    $("input[id*=txtcontact],select[id*=optcontact],textarea[id*=txtcontact]").keyup(function () {

        var formArr = $('#contact :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (contact_form_keypress) {
            if (serializedForm != contactform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
        if ($(this).attr("id") == "txtcontactemail_address") {
            var crod = contactform_original_data.substring(contactform_original_data.indexOf("txtcontactemail_address") + 24).substring(0, contactform_original_data.substring(contactform_original_data.indexOf("txtcontactemail_address") + 24).indexOf("&"));
            var srod = serializedForm.substring(serializedForm.indexOf("txtcontactemail_address") + 24).substring(0, serializedForm.substring(serializedForm.indexOf("txtcontactemail_address") + 24).indexOf("&"));

            if (crod == srod) {
                $("#chkcontactInboxService,#chkcontactSendService").prop("checked", false);
                $("#chkcontactInboxService,#chkcontactSendService").attr("disabled", "disabled");
            } else {
                if (allow_inbox_email_modification) {
                    $("#chkcontactInboxService").removeAttr("disabled");
                    $("#chkcontactInboxService").parent().attr("title", "");
                } else {
                    $("#chkcontactInboxService").parent().attr("title", "Cannot Update: Email address not found in the Inbox service")
                    $("#chkcontactInboxService").prop("checked", false);
                    $("#chkcontactInboxService").attr("disabled", "disabled");
                }

                if (allow_send_email_modification) {
                    $("#chkcontactSendService").removeAttr("disabled");
                    $("#chkcontactSendService").parent().attr("title", "")
                } else {
                    $("#chkcontactSendService").parent().attr("title", "Cannot Update: Email address not found in the Send service")
                    $("#chkcontactSendService").prop("checked", false);
                    $("#chkcontactSendService").attr("disabled", "disabled");
                }
            }

        }
    });
    $("select[id*=optcontact]").change(function () {
        var formArr = $('#contact :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (contact_form_keypress) {
            if (serializedForm != contactform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
    });
}

function onChangeSelectCountry() {
    $("#optcontactcountry").change(function () {
        if ($(this).val() == "US") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtcontactpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
        } else {
            $("#txtcontactpostal_code").removeAttr("pattern");
        }

    });
}

function onChangeSelectOEM() {
    $("#optcontactoems").change(function () {
        if ($(this).val() == "500" || $(this).val() == "50") {
            isitCorporateAccount = true;
            companyNameRequired(true);
        }
        else {
            isitCorporateAccount = false;
            companyNameRequired(false);
        }
    });
}

function companyNameRequired(iscorpaccount) {
    if (iscorpaccount) {
        $("#divRequiredCompany").show();
        $("#txtcontactcompany_name").attr({ "required": "required" });
    }
    else {
        $("#divRequiredCompany").hide();
        $("#txtcontactcompany_name").removeAttr("required");
        $("div[id=lblErrcontactcompany_name]").hide();
    }

}

///obsolete function...
function onChangeSalesRep() {
    $("#optcontactsales_rep").change(function () {
        if ($(this).val() !== "") {
            getAjaxFunc("users/" + $(this).val() + "/usergroup", setSalesGroup, "");
        } else {
            $("#txtcontactsales_group").val("");
        }
    });
}



var toggleEmailCheckboxes = function () {

}

function setSalesGroup(data, issuccess) {
    if (data.responseText) {
        $("#txtcontactsales_group").val(data.responseText);
    }
}

function turnOffContactErrors() {
    $("div[id*=lblErrcontact]").hide();
    $("#divContactMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divContactMainError").hide();
    $("input[id*=txtcontact]").removeClass("error");
    $("#divContactMainSuccess").hide();
}

function onSaveContact() {
    turnOffContactErrors();
    $("#btnSaveContact").off("click").on("click", function () {
        turnOffContactErrors();
        var txtContacts = $("input[id*=txtcontact]");
        txtContacts.each(function () {
            $(this).val($.trim($(this).val()));
        });
        if (validateContactForm()) {

            if (isInModificationMode) {
                // validateEmailAddresses();
                continueOnSave(true, "");
                contact_form_keypress = true;
                //contactform_original_data = $("#contact :input").serialize();
            }
            else {
                $("#divContactMainError").html("<span>No changes to save</span>");
                $("#divContactMainError").show();
            }
        }
    });
}

function validateContactForm() {
    turnOffContactErrors();
    var txtContacts = $("input[id*=txtcontact]");
    var contactHasError = false;
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
    if (contactHasError) {
        $("#divContactMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
        $("#divContactMainError").show();
        return false;
    }
    else {
        return true;
    }
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

function onClickbtnSendWelcomeLetter() {
    $("#btnSendWelcomeLetter").click(function () {
        showSimpleDialog();
    });
}

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
function getsetSendWelcomeEmail() {
    postAjaxFunc("customers/" + customerKey + "/welcome_letter", "", setSendWelcomeEmail, "")
}
function setSendWelcomeEmail(data, issuccess) {
    if (issuccess) {
        //alert("Welcome Letter Sent");
    }
    else {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                alert("Error in sending welcome letter: " + data.errors[0].developer_message);
            }
        }
    }
}

//END:: Contact Tab -- Send welcome letter

//START:: Billing>Payment Functionality Mode
function onClickbtnicnCopyFromContactTab() {
    $("#btnicnCopyFromContactTab,#btnicnCopyFromContactTabInvoice").click(function (e) {
        $("#txtbillpaymentstate_province").trigger("focusin");
        var txtContacts = $("input[id*=txtcontact]").not("[id=txtcontactversion]");
        txtContacts.each(function () {
            var attrid = $(this).attr("id");
            var propname = attrid.replace("txtcontact", "txtbillpayment");
            if (!$("#" + propname).prop("disabled")) {
                $("#" + propname).val($(this).val());
            }

        });
        if (!$("#optbillpaymentcountry_code").prop("disabled")) {
            $("#optbillpaymentcountry_code").val($("#optcontactcountry").val());
            $("#optbillpaymentcountry_code").trigger("change");
        }
        if (!$("#txtbillpaymentstate_province").prop("disabled")) {
            $("#txtbillpaymentstate_province").val($("#txtcontactstate_prov").val());
            $("#txtbillpaymentstate_province").trigger("keyup");
        }

        return false;
        e.preventDefault();
    });
}

function validatetxtbill_onetime() {
    $("#txtbill_onetime_main,#txtbill_onetime_usage").attr({ "pattern": "/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/" });
    TextLimit($("#txtbill_onetime_main"), 10);
    TextLimit($("#txtbill_onetime_usage"), 10);
}

function onChangeSelectCountryBillPayment() {
    $("#optbillpaymentcountry_code").change(function () {
        if ($(this).val() == "US") {
            //$("#txtcontactpostal_code").attr({ "pattern": "(\\d{5,})" });
            $("#txtbillpaymentpostal_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
            billpaymentpostal_code(true);
        } else {
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

function onChangetxtbillCreditCard() {
    $("#txtbillpaymentcard_number").validateCreditCard(function (result) {
        var isChromium = window.chrome,
            winNav = window.navigator,
            vendorName = winNav.vendor,
            isOpera = winNav.userAgent.indexOf("OPR") > -1,
            isIEedge = winNav.userAgent.indexOf("Edge") > -1,
            isIOSChrome = winNav.userAgent.match("CriOS");
        isIE = winNav.userAgent.indexOf("MSIE") > -1;

        if (isIOSChrome) {
            if (event && event.target)
                var position = event.target.selectionStart;
        } else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
            if (event && event.target)
                var position = event.target.selectionStart;
        } else if (isIEedge || isIE) {
            if (event && event.target)
                var position = event.target.selectionStart;
        }
        //var newtextvalueofcc = $("#txtbillpaymentcard_number").val().replace(/ /g, '');

        //$("#txtbillpaymentcard_number").val(newtextvalueofcc);
        if (result.card_type) {
            var cctype_css = mapImageForCCtype(String(result.card_type.name).toUpperCase());
            $("#imgbillcard_type").removeClass().addClass(cctype_css);
            if ($("#txtbillpaymentcard_number").is(":visible")) {
                $("#imgbilldiv_block").show();
            } else {
                $("#imgbilldiv_block").hide();
            }
            $("#lblbillpaymentcredit_card_type").html(result.card_type.description);
            $("#txtbillpaymentcard_type").val(String(result.card_type.name).toUpperCase());
            if (!result.length_valid || !result.luhn_valid) {
                creditcard_invalid = true;
            } else {
                creditcard_invalid = false;
            }
            visibilityOfTxtCvvCode();
        } else {
            if (saveCCMode == addOrUpdate.add) {
                if ($("#txtbillpaymentcard_number").val() !== "") {
                    creditcard_invalid = true;
                    $("#imgbilldiv_block").hide();
                    $("#txtbillpaymentcard_type").val("");
                } else {
                    $("#imgbilldiv_block").hide();
                    $("#txtbillpaymentcard_type").val("");
                }
            }
            else {
                if ($("#divBillPaymentCCinfo :input").serialize() != billingpaymentCCinfo_original && billingpayment_form_keypress) {
                    creditcard_invalid = true;
                    $("#imgbilldiv_block").hide();
                    $("#txtbillpaymentcard_type").val("");
                } else {
                    creditcard_invalid = false;
                }
            }
            visibilityOfTxtCvvCode();
        }
        if (position) {
            event.target.selectionEnd = position;
        }
    });

    $("#txtbillpaymentcard_number").bind('keydown', function (evt) {
        if (((evt.ctrlKey || evt.metaKey) && String.fromCharCode(evt.which).toLowerCase() == 'z') || evt.keyCode == 32) {
            evt.preventDefault();
        }
    });
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
    $("input[id*=txtbillpayment],select[id*=optbillpayment]").off("focusin").on("focusin", function () {
        if (saveCCMode == addOrUpdate.update) {
            if (!billingpayment_form_keypress) {
                var txtbillpayment = $("input[id*=txtbillpayment]");
                txtbillpayment.each(function () {
                    $(this).val($.trim($(this).val()));
                });
                billingpaymentform_original_data = $("#Payments :input").serialize();

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


function clearAdjustmentForm() {

    $("input[id*=txtbillAT],input[id*=chkbillAT]").not("#txtbillATadjustment_date").not("#optbillATaccount_code").val("");
    $("#chkbillATcreate_memo").attr('checked', false);
}
function onkeypressAdjustmentForm() {

    $("select[id*=optbillAT],input[id*=chkbillAT],input[id*=txtbillAT]").off("focusin").on("focusin", function () {
        turnOffAdjustmentErrors();

        if (!adjustment_form_keypress) {
            var txtAdjustment = $("input[id*=txtadjustment]");
            txtAdjustment.each(function () {
                $(this).val($.trim($(this).val()));
            });

            adjustment_form_keypress = true;
            var original_formArr = $('#adjustmentDetail :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            adjustmentform_original_data = $.param(original_formArr);
            adjustmentform_original_data_array = original_formArr;
        }
        if ($("#txtbillATamount").val() >= 1) {
            $("#btnSaveAdjustment").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
        getTotalAdjustmentAmountwithtax($("#txtbillATamount").val());
    });
}


function onChangeAdjustmentForm() {
    $("select[id*=optbillAT],input[id*=chkbillAT],input[id*=txtbillAT]").off("keyup").on("keyup", function () {

        var formArr = $('#adjustmentDetail :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (adjustment_form_keypress) {
            if (serializedForm != adjustmentform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }
        if ($("#txtbillATamount").val() >= 1) {
            $("#btnSaveAdjustment").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }
        getTotalAdjustmentAmountwithtax($("#txtbillATamount").val());

    });//select[id*=optbillAT],
    $("input[id*=chkbillAT],input[id*=txtbillAT]").not("#txtbillATamount").off("change").on("change", function () {
        var formArr = $('#adjustmentDetail :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (adjustment_form_keypress) {
            if (serializedForm != adjustmentform_original_data) {
                isInModificationMode = true;
            }
            else {
                isInModificationMode = false;
            }
        }

        if ($("#optbillATaccount_code option:selected").text() == "A550") {
            $('#chkbillATadjustmentpost_charge').prop("disabled", true)
            $("#chkbillATadjustmentpost_charge").attr('checked', false);
            $("#chkbillATadjustmentpost_credit").prop('checked', true);
        } else {
            $('#chkbillATadjustmentpost_charge').prop("disabled", false);
        }
        $("#txtbillATtaxrate").val(getTaxRate());
        //if ($("#txtbillATamount").val()) {

        // }
        if ($("#txtbillATamount").val() >= 1) {
            $("#btnSaveAdjustment").removeAttr("disabled").attr({ "class": "grey-btn" });
        } else {
            $("#btnSaveAdjustment").attr("disabled", "diabled").attr({ "class": "grey-btn disabled" });
        }


        //  $("#txtbillATadjustment_description").val($("#optbillATaccount_code").find("option:selected").attr("value"));
        //  $("#txtbillATadjustment_description").attr("title", $("#optbillATaccount_code").find("option:selected").attr("value"));
    });
}


function onChangeBillingPaymentForm() {
    $("input[id*=txtbillpayment]").off("keyup").on("keyup", function () {


        var formArr = $('#Payments :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (saveCCMode == addOrUpdate.update) {
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
        toggleAllButtonsBillingPayment();
        if (isInCollectionMethodDetailUpdate) {
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
        } else {
            $("#btnbillCollectionMethodUpdate").prop("disabled", false);
            $("#btnbillCollectionMethodUpdate").addClass("grey-btn").removeClass("disabled");
        }
        //alert(isInModificationMode);
    });
    $("select[id*=optbillpayment]").not("#optbillpaymentcurrencies").off("change").on("change", function () {

        var formArr = $('#Payments :input').serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (saveCCMode == addOrUpdate.update) {
            if (billingpayment_form_keypress) {
                if ($("#Payments :input").serialize() != billingpaymentform_original_data) {
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

                    if ($("#Payments :input").serialize() != billingpaymentform_blank_data) {
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
        toggleAllButtonsBillingPayment();
        if (isInCollectionMethodDetailUpdate) {
            $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
        } else {
            $("#btnbillCollectionMethodUpdate").prop("disabled", false);
            $("#btnbillCollectionMethodUpdate").addClass("grey-btn").removeClass("disabled");
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

            var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods,#optbillpaymentcurrencies");
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
        if (txtbillpayment.not("#optbillpaymentcollection_methods,#optbillpaymentcurrencies").is(':visible') && !txtbillpayment.not("#optbillpaymentcollection_methods,#optbillpaymentcurrencies").prop('disabled')) {
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
    var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcurrencies");
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
        $("select[id*=optbillpayment]").not($("#optbillpaymentcurrencies,#optbillpaymentcollection_methods")).val("");
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
    $("select[id*=optbillpayment]").not($("#optbillpaymentcurrencies,#optbillpaymentcollection_methods")).val("");
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

function validateBillingPaymentForm() {
    turnOffBillingPaymentErrors();
    var txtBill = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
    var billingPaymentHasError = false;
    $("#txtbillpaymentcard_number").trigger("keyup");
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
    if ($("#txtbillpaymentcard_number").val().trim() != "") {
        if (creditcard_invalid) {
            $("div[id=lblErrbillpaymentcard_number]").html(errorsBillingPayment["errbillpaymentCCInvalid"]).show();
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
        $("#divBillingPaymentMainError").show();
        return false;
    }
    else {
        return true;
    }
}
function onClickbtnResetbillPayment() {
    $("#btnResetbillPayment").off("click").on("click", function () {
        $("#CCDetails :input").not("#btnicnCopyFromContactTabInvoice,#btnResetbillPayment").val("");
        turnOffBillingPaymentErrors();
    });
}
function onClickbtnSavebillPayment() {
    turnOffBillingPaymentErrors();
    $("#btnSavebillPayment").off("click").on("click", function () {
        turnOffBillingPaymentErrors();
        var newtextvalueofcc = $("#txtbillpaymentcard_number").val().replace(/ /g, '');
        $("#txtbillpaymentcard_number").val(newtextvalueofcc);
        var txtBill = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
        txtBill.each(function () {
            $(this).val($.trim($(this).val()));
        });
        if (validateBillingPaymentForm()) {
            if (isInModificationMode) {


                if (selectedCCVal == $("#txtbillpaymentcard_number").val()) {
                    $("#txtbillpaymentcard_type").val(selectedCCType);
                }

                //alert(JSON.stringify(objbillpayment_detail));

                tabsloaded.events = false;
                if (isInCollectionMethodUpdate) {

                    var objbillpayment_detail = new Object();
                    objbillpayment_detail.collection_method = new Object();
                    objbillpayment_detail.collection_method.collection_method = ($('#optbillpaymentcollection_methods').val() === "" ? null : $('#optbillpaymentcollection_methods').val());
                    objbillpayment_detail.collection_method.version = ($("#txthdrversion").val() === "" ? null : $("#txthdrversion").val());
                    objbillpayment_detail.collection_method.credit_cards = new Object();
                    var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]").not("#optbillpaymentcollection_methods,#txtbillpaymentstate_province");
                    txtbillpayment.each(function () {
                        var attrid = $(this).attr("id");
                        var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
                        objbillpayment_detail.collection_method.credit_cards[propname] = ($(this).val() === "" ? null : $(this).val());

                    });
                    objbillpayment_detail.collection_method.credit_cards.state_prov = ($("#txtbillpaymentstate_province").val() === "" ? null : $("#txtbillpaymentstate_province").val());
                    objbillpayment_detail.collection_method.credit_cards.version = ($("#txtbillpaymentversion").val() === "" ? null : $("#txtbillpaymentversion").val());
                    /* var objbillpayment_detail = new Object();
                     objbillpayment_detail.collection_method = new Object();

                     //objbillpayment_detail.collection_method.credit_cards.address = new Object();
                     objbillpayment_detail.collection_method.collection_method = ($('#optbillpaymentcollection_methods').val() === "" ? null : $('#optbillpaymentcollection_methods').val());
                      objbillpayment_detail.collection_method.credit_cards = new Object();
                     objbillpayment_detail.collection_method.credit_cards.credit_card_id = ($("#txtbillpaymentcredit_card_id").val() === "" ? null : $("#txtbillpaymentcredit_card_id").val());
                     objbillpayment_detail.collection_method.credit_cards.card_number = ($("#txtbillpaymentcard_number").val() === "" ? null : $("#txtbillpaymentcard_number").val());
                     objbillpayment_detail.collection_method.credit_cards.first_name = ($("#txtbillpaymentfirst_name").val() === "" ? null : $("#txtbillpaymentfirst_name").val());
                     objbillpayment_detail.collection_method.credit_cards.last_name = ($("#txtbillpaymentlast_name").val() === "" ? null : $("#txtbillpaymentlast_name").val());
                     objbillpayment_detail.collection_method.credit_cards.expiration_year = ($("#txtbillpaymentexpiration_year").val() === "" ? null : $("#txtbillpaymentexpiration_year").val());
                     objbillpayment_detail.collection_method.credit_cards.expiration_month = ($("#optbillpaymentexpiration_month").val() === "" ? null : $("#optbillpaymentexpiration_month").val());
                     objbillpayment_detail.collection_method.credit_cards.card_type = ($("#txtbillpaymentcard_type").val() === "" ? null : $("#txtbillpaymentcard_type").val());
                     objbillpayment_detail.collection_method.credit_cards.cvv_code = ($("#txtbillpaymentcvv_code").val() === "" ? null : $("#txtbillpaymentcvv_code").val());
                    // objbillpayment_detail.collection_method.credit_cards.valid_from_date = ($("#txtbillpaymentcard_number").val() === "" ? null : $("#txtbillpaymentcard_number").val());
                    // objbillpayment_detail.collection_method.credit_cards.issue_number = ($("#txtbillpaymentcard_number").val() === "" ? null : $("#txtbillpaymentcard_number").val());
                     objbillpayment_detail.collection_method.credit_cards.version = ($("#txtbillpaymentversion").val() === "" ? null : $("#txtbillpaymentversion").val());


                     objbillpayment_detail.collection_method.credit_cards.address_line1 = ($("#txtbillpaymentaddress_line1").val() === "" ? null : $("#txtbillpaymentaddress_line1").val());
                     objbillpayment_detail.collection_method.credit_cards.address_line2 = ($("#txtbillpaymentaddress_line2").val() === "" ? null : $("#txtbillpaymentaddress_line2").val());
                     objbillpayment_detail.collection_method.credit_cards.city = ($("#txtbillpaymentcity").val() === "" ? null : $("#txtbillpaymentcity").val());
                     objbillpayment_detail.collection_method.credit_cards.state_prov = ($("#txtbillpaymentstate_province").val() === "" ? null : $("#txtbillpaymentstate_province").val());
                     objbillpayment_detail.collection_method.credit_cards.postal_code = ($("#txtbillpaymentpostal_code").val() === "" ? null : $("#txtbillpaymentpostal_code").val());
                     objbillpayment_detail.collection_method.credit_cards.country_code = ($("#optbillpaymentcountry_code").val() === "" ? null : $("#optbillpaymentcountry_code").val());
 */
                    listExistingCCId = [];
                    $("a[id*=credit_card_id]").toArray().reduce(function (x, element) {
                        var $element = $(element);
                        listExistingCCId.push({ creditcardId: $element.data("credit_card_id") });

                    }, {});
                    if (saveCCMode == addOrUpdate.add) {
                        objbillpayment_detail.collection_method.credit_cards["credit_card_rank"] = getCCRank();
                        delete objbillpayment_detail.collection_method.credit_cards["version"];
                        //objbillpayment_detail.credit_card["version"] = 0;

                        putAjaxFunc("customers/" + customerKey + "/collection_methods", JSON.stringify(objbillpayment_detail), onBillPaymentAndCollectionMethodSaved, "");
                    } else if (saveCCMode == addOrUpdate.update) {

                        putAjaxFunc("customers/" + customerKey + "/collection_methods", JSON.stringify(objbillpayment_detail), onBillPaymentAndCollectionMethodSaved, "");
                    }
                } else {
                    var objbillpayment_detail = new Object();
                    objbillpayment_detail.credit_card = new Object();

                    var txtbillpayment = $("input[id*=txtbillpayment],select[id*=optbillpayment]");
                    txtbillpayment.each(function () {
                        var attrid = $(this).attr("id");
                        var propname = attrid.replace("txtbillpayment", "").replace("optbillpayment", "");
                        objbillpayment_detail.credit_card[propname] = ($(this).val() === "" ? null : $(this).val());

                    });
                    if (saveCCMode == addOrUpdate.add) {
                        objbillpayment_detail.credit_card["credit_card_rank"] = getCCRank();
                        delete objbillpayment_detail.credit_card["version"];
                        //objbillpayment_detail.credit_card["version"] = 0;

                        postAjaxFunc("customers/" + customerKey + "/creditcards", JSON.stringify(objbillpayment_detail), onBillPaymentSaved, "");
                    } else if (saveCCMode == addOrUpdate.update) {

                        putAjaxFunc("customers/" + customerKey + "/creditcards/" + $("#txtbillpaymentcredit_card_id").val(), JSON.stringify(objbillpayment_detail), onBillPaymentSaved, "");
                    }
                }



            }
            else {
                $("#divBillingPaymentMainError").html("<span>No changes to save</span>");
                $("#divBillingPaymentMainError").show();
            }
        }
    });
}

function getCCRank() {
    for (i = 1; i <= 3; i++) {
        if ($.inArray(i, ccRanksUsed) == -1) {
            return i;
        }
    }
}

function onBillPaymentAndCollectionMethodSaved(data, issuccess) {
    turnOffBillingPaymentErrors();
    turnOffCollectionMethodErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divBillingPaymentMainError > span").append("</br>" + data.errors[0].developer_message);
                $("#divBillingPaymentMainError").show();
            }
        }
        else {


            //setPaymentDetails(data, issuccess);
            getBillingPaymentGrid();
            isInModificationMode = false;
            isInCollectionMethodDetailUpdate = false;
            selectedCCType = "";
            selectedCCVal = "";
            if (isInCollectionMethodUpdate) {
                $("#btnbillCollectionMethodUpdate").prop("disabled", true);
                $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
                isInCollectionMethodUpdate = false;
            }
            $("#txtcontactcollection_method").val($("#optbillpaymentcollection_methods").val());
            saveCCMode = addOrUpdate.update;
            //
            setTimeout(function () {
                var newCCKeyCreated = "", listofUpdatedCCId = [];
                $("a[id*=credit_card_id]").toArray().reduce(function (x, element) {
                    var $element = $(element);
                    listofUpdatedCCId.push({ creditcardId: $element.data("credit_card_id") });
                }, {});
                //console.log("list of updated cc ", listofUpdatedCCId);

                var newCCCreated = listofUpdatedCCId.filter(function (current) {
                    return listExistingCCId.filter(function (current_b) {
                        return current_b.creditcardId == current.creditcardId
                    }).length == 0
                });
                // console.log('new cc created log: ' + newCCCreated);
                if (newCCCreated && newCCCreated[0] && newCCCreated[0].creditcardId) {
                    $("#credit_card_id" + newCCCreated[0].creditcardId).trigger("click");
                }
                getCollectionMethodOptionSet();
                setTimeout(function () {
                    $("#divBillingPaymentMainSuccess").show();
                    $("#divCollectionMethodSuccess").html("Collection Method Updated successfully");
                    $("#divCollectionMethodSuccess").show();
                }, 1500);

            }, 3000);
            //
            //billingpaymentform_original_data = $("#Payments :input").serialize();
            //billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            //billingpayment_form_keypress = true;
            //toggleAllButtonsBillingPayment();
            //toggleallbillpaymentControls();
            // visibilityOfTxtCvvCode();
            // billingpaymentform_original_data = $("#Payments :input").serialize();
            // billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            tabsloaded.events = false;
            getHeaderInformation();

        }
    } else {
        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingProcessPaymentError").html(data.responseJSON.errors[0].user_message);
                }
                else {
                    $("#divBillingProcessPaymentError").html(data.responseJSON.errors[0].developer_message);
                }
                $("#divBillingProcessPaymentError").show();
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


function onBillPaymentSaved(data, issuccess) {
    turnOffBillingPaymentErrors();
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divBillingPaymentMainError > span").append("</br>" + data.errors[0].developer_message);
                $("#divBillingPaymentMainError").show();
            }
            tabsloaded.bill_transactionhistory = false;
        }
        else {
            turnOffCollectionMethodErrors();
            $("#divBillingPaymentMainSuccess").show();
            setPaymentDetails(data, issuccess);
            getBillingPaymentGrid();
            isInModificationMode = false;

            $("#txtcontactcollection_method").val($("#optbillpaymentcollection_methods").val());
            saveCCMode = addOrUpdate.update;

            billingpaymentform_original_data = $("#Payments :input").serialize();
            billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            billingpayment_form_keypress = true;
            selectedCCType = "";
            selectedCCVal = "";
            toggleAllButtonsBillingPayment();
            toggleallbillpaymentControls();
            visibilityOfTxtCvvCode();
            billingpaymentform_original_data = $("#Payments :input").serialize();
            billingpaymentCCinfo_original = $("#divBillPaymentCCinfo :input").serialize();
            tabsloaded.events = false;
            tabsloaded.bill_transactionhistory = false;
            getHeaderInformation();
            if (isInCollectionMethodUpdate) {
                $("#btnbillCollectionMethodUpdate").prop("disabled", true);
                $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");
                isInCollectionMethodUpdate = false;
            }
        }
    } else {
        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                if (data.responseJSON.errors[0].user_message) {
                    $("#divBillingProcessPaymentError").html(data.responseJSON.errors[0].user_message);
                }
                else {
                    $("#divBillingProcessPaymentError").html(data.responseJSON.errors[0].developer_message);
                }
                $("#divBillingProcessPaymentError").show();
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

function onClickbtnbillpaymentCCswitch() {
    $("input[id*=btnbillpaymentCCswitch]").off("click").on("click", function (e) {
        var data_obj_id = "#btnbillpaymentCCdata" + $(this).data("credit_card_rank");
        var objbillpayment_detail = getJsonObjForSwitchCC($(this).data("credit_card_rank"));

        putAjaxFunc("customers/" + customerKey + "/creditcards/swap", JSON.stringify(objbillpayment_detail), onSavedSwitchPrimaryCC, $(this).data("credit_card_id"));

    });
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


    $("#chkbillpaymentOTP,#chkbillpaymentOTPInvoice").change(function (e) {
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
        if ($("#txtcontactcollection_method").val() == "N") {
            $("#txtbill_onetime_main,#txtbill_onetime_usage,#txtbill_onetime_ppu,#txtbill_onetime_usagetax").val("");
            // $("#txtbill_invoice_onetime_main,#txtbill_invoice_onetime_usage,#txtbill_invoice_onetime_ppu,#txtbill_invoice_onetime_usagetax").val("");
        } else {
            $("#txtbill_onetime_main,#txtbill_onetime_usage,#txtbill_onetime_ppu,#txtbill_onetime_usagetax").val("");
        }

        otpProccessed = false;
        toggleAllButtonsBillingPayment();
        toggleallbillpaymentControls();
        if ($(this).prop("checked")) {

            isInOTP = true;
            //$("#txtbill_onetime_main,#txtbill_onetime_usage").removeAttr("disabled");
            if ($("#txtcontactcollection_method").val() == "N") {
                $("#CCDetails :input").attr("disabled", false);
                $("#btnbillCollectionMethodUpdate").prop("disabled", true);
            $("#btnbillCollectionMethodUpdate").addClass("disabled").removeClass("grey-btn");

                // $txtbill_otp = $("#txtbill_invoice_onetime_main,#txtbill_invoice_onetime_usage");
            } else {
 //$("#CCDetails :input").attr("disabled", false);
            }
            $txtbill_otp = $("#txtbill_onetime_main,#txtbill_onetime_usage");

            $txtbill_otp.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
                    }, {});
            }, {});

            //if ($("#txthdrtotal_main_balance").val().substr(0, 1) != "(" && Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, "")) > 0) {
            //    $("#txtbill_onetime_usage").prop('disabled',true);
            //  $("#txtbill_onetime_usage").attr({ "disabled": "disabled" });
            //   }


            copyHeaderBalanceToOTP();
        } else {

            isInOTP = false;
            if ($("#txtcontactcollection_method").val() == "N") {
                $("#CCDetails :input").attr("disabled", true);
                $("#txtbill_onetime_main,#txtbill_onetime_usage").attr({ "disabled": "disabled" });
                //  $("#txtbill_invoice_onetime_main,#txtbill_invoice_onetime_usage").attr({ "disabled": "disabled" });
            } else {
                $("#txtbill_onetime_main,#txtbill_onetime_usage").attr({ "disabled": "disabled" });
            }
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
    if ($("#chkbillpaymentOTP,#chkbillpaymentOTPInvoice").prop("checked")) {
        if (Number($("#txtbill_onetime_main").val()) >= 0 && Number($("#txtbill_onetime_usage").val()) >= 0) {
            if (Number($("#txtbill_onetime_main").val()) > 0 || Number($("#txtbill_onetime_usage").val()) > 0) {
                if (!otpProccessed) {
                    $("input[id*=btnbillProcessPayment]").removeAttr("disabled").attr({ "class": "grey-btn" });
                }
            }
            else {
                $("input[id*=btnbillProcessPayment]").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
            }
        } else {
            $("input[id*=btnbillProcessPayment]").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
        }
    }
    else {
        $("input[id*=btnbillProcessPayment]").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
    }
}


function onClickbtnbillProcessPayment() {
    $("input[id*=btnbillProcessPayment],input[id*=btnbillProcessPaymentInvoice]").off("click").on("click", function () {
        turnOffCollectionMethodErrors();
        if ($("#txtbill_onetime_usage").val() > 0 && $("#txthdrtotal_main_balance").val().substr(0, 1) != "(" &&
            Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, "")) > 0 && $("#txtbill_onetime_main").val() < Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, ""))) {
            //alert("Cannot complete this request until Main Balance is collected");
            showUsagesAlert();
            $("#chkbillpaymentOTP").prop("checked", false);
            $("#chkbillpaymentOTP").trigger("change");
            //  $("#txtbill_onetime_main,#txtbill_onetime_usage,#txtbill_onetime_ppu,#txtbill_onetime_usagetax").val("");
            return false;
        }

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
            $("input[id*=btnbillProcessPayment]").attr({ "disabled": "disabled" }).attr({ "class": "grey-btn disabled" });
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


//START: Service Detail modification functionalities

var serviceModificationLoad = function () {
    if (serviceType.toUpperCase() == "INBOX") {
        serviceModificationLoad_allInbox();
    } else {
        serviceModificationLoad_allSend();
    }
    serviceModificationLoad_addNew();
    serviceModificationLoad_reactivation();
}

var serviceModificationLoad_allInbox = function () {
    //all email address inbox methods.
    validatetxtservicedetailIemailaddress();

    togglebtnServiceDetailIEmailAdd();
    onClickbtnServiceDetailIEmailAdd();
    togglebtnServiceDetailEmailDelete();
    onClickbtnServiceDetailIEmailRemove();
    onChangetxtservicedetailIemailaddress();
    toggletxtservicedetailIemailaddress();

    //all service detail inbox
    onKeypressServiceDetailInbox();
    onChangeServiceDetailInbox();
    onCheckedSecureStorageForInbox();
    onClickbtnSaveServiceDetailInbox();

    toggleoptservicedetailIemail_addresses();

    setTimeout(function () {
        $("#optservicedetailIemail_addresses").trigger("change");
        $("#optservicedetailIfax_format").trigger("change");
        $("#chkservicedetailIvoice_status_1").trigger("change");
    }, 2000);
    //text limit for csid textbox
    TextLimit($("#txtservicedetailIcsid"), 26);

    //validate PIN textbox
    validatateServiceDetailInboxPIN();
    allExportButtonClicks();

    loadOfferCodeModification();
}

var serviceModificationLoad_addNew = function () {
    onClickbtnAddNewService();
    getDIDCountryOptionSetsFunc("Select a country");
    turnOffServiceDID();

    onKeyPresstxtservicedetailDid_city();
    onKeyPresstxtservicedetailDid_phone();
    onClickicnService_findDID();
}

var serviceModificationLoad_allSend = function () {
    //all service detail send
    onKeypressServiceDetailSend();
    onChangeServiceDetailSend();
    onCheckedSecureStorageForSend();
    onClickbtnSaveServiceDetailSend();


    //Send email address modification
    validatetxtservicedetailOemailaddress();

    togglebtnServiceDetailOEmailAdd();
    onClickbtnServiceDetailOEmailAdd();
    togglebtnServiceDetailOEmailDelete();
    onClickbtnServiceDetailOEmailRemove();
    onChangetxtservicedetailOemailaddress();
    toggletxtservicedetailOemailaddress();
    //text limit for csid textbox
    TextLimit($("#txtservicedetailOsend_csid"), 26);

    toggleoptservicedetailOemail_addresses();
    setTimeout(function () {
        $("#optservicedetailOemail_addresses").trigger("change");
    }, 2000);
}
var serviceModificationLoad_reactivation = function () {

    onClickbtnReactivateService();
}


var validatateServiceDetailInboxPIN = function () {
    $("#txtservicedetailIpin").off("paste").on("paste", function () {
        setTimeout(function () {
            onchangeOnlyNumeric("#txtservicedetailIpin");
        }, 100);
    });
}


var turnOffServiceDetail = function () {
    $("#divServiceDetailMainError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divServiceDetailMainError").hide();
    $("input[id*=txtservicedetail]").removeClass("error");
    $("#divServiceDetailMainSuccess").hide();
    $("#brServiceDetailsMainSuccess").hide();
    $("#divServiceDetailInboxEmailError").hide();
    $("#divServiceDetailSendEmailError").hide();
    turnOffServiceReactivationError();
}

//START:: EMAIL modify all functionalities
var toggletxtservicedetailIemailaddress = function () {
    // setTimeout(function () {
    if (!Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) || (serviceStatus.toUpperCase() != "ACTIVE" && serviceStatus.toUpperCase() != "ORDERED") || isInModificationMode) {
        $("#txtservicedetailIemailaddress").prop("disabled", true);
        $("#txtservicedetailIemailaddress").removeClass("error");
    } else {
        $("#txtservicedetailIemailaddress").prop("disabled", false);
        $("#txtservicedetailIemailaddress").removeClass("error");
    }
    //}, 1000);
}


var validatetxtservicedetailIemailaddress = function () {
    $("#txtservicedetailIemailaddress").attr({ "pattern": "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$", "required": "required" });
}
var onChangetxtservicedetailIemailaddress = function () {
    $("#txtservicedetailIemailaddress").off("keyup").on("keyup", function (e) {
        togglebtnServiceDetailIEmailAdd();
    })
}
var togglebtnServiceDetailIEmailAdd = function () {
    $("#txtservicedetailIemailaddress").removeClass("error");
    if (!Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) || $("#optservicedetailIemail_addresses > option").length >= 5 || !$("#txtservicedetailIemailaddress").val() || (serviceStatus.toUpperCase() != "ACTIVE" && serviceStatus.toUpperCase() != "ORDERED") || isInModificationMode) {
        $("#btnServiceDetailIEmailAdd").prop("disabled", true);
        $("#btnServiceDetailIEmailAdd").addClass("disabled");
    } else {
        $("#btnServiceDetailIEmailAdd").prop("disabled", false);
        $("#btnServiceDetailIEmailAdd").removeClass("disabled");
    }
}
var onClickbtnServiceDetailIEmailAdd = function () {
    $("#btnServiceDetailIEmailAdd").off("click").on("click", function (e) {
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        turnOffServiceDetail();
        isInModificationMode = false;
        servicedetailInbox_keypress = true;
        toggleOfferCodeSection();
        toggleSelectDIDSection();

        if (!$("#txtservicedetailIemailaddress")[0].checkValidity()) {
            $("#txtservicedetailIemailaddress").addClass("error");
            if ($("#txtservicedetailIemailaddress").val())
                $("#divServiceDetailInboxEmailError").html("Invalid email address.<span></span>").show();
            else
                $("#divServiceDetailInboxEmailError").html("Please enter email address.<span></span>").show();
        } else {
            $("#txtservicedetailIemailaddress").removeClass("error");
            emailaddress = new Object();
            emailaddress.email_address = $("#txtservicedetailIemailaddress").val();
            postAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/inboxemails", JSON.stringify(emailaddress), onSavedServiceInboxEmails);

            $("#txtservicedetailIemailaddress").val("");
        }
    });
}
var onSavedServiceInboxEmails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailInboxEmailError").html(data.errors[0].developer_message + "<span></span>");
                $("#divServiceDetailInboxEmailError").show();
            }
        } else {
            tabsloaded.events = false;
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;

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
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    //getServiceDetail();
                    haveToChangeSelectedService = false;
                }, 600);
            }, 1000);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailInboxEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailInboxEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                }
            } else {
                $("#divServiceDetailInboxEmailError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
            }
            $("#divServiceDetailInboxEmailError").show();
        }
        else {
            $("#divServiceDetailInboxEmailError").html("</br>Request Cancelled.");
            $("#divServiceDetailInboxEmailError").show();
            CancelRequest = false;
        }
    }
}

var toggleoptservicedetailIemail_addresses = function () {
    setTimeout(function () {
        if (!Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) || (serviceStatus.toUpperCase() != "ACTIVE" && serviceStatus.toUpperCase() != "ORDERED") || isInModificationMode) {
            $("#optservicedetailIemail_addresses").attr("disabled", "disabled");
        } else {
            $("#optservicedetailIemail_addresses").removeAttr("disabled");
        }
    }, 1000);
}

var togglebtnServiceDetailEmailDelete = function () {
    $("#optservicedetailIemail_addresses").off("change").on("change", function () {
        if (Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) && $("#optservicedetailIemail_addresses option:selected").length && $("#optservicedetailIemail_addresses > option").length > 1 && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "ORDERED") && !isInModificationMode) {
            $("#btnServiceDetailIEmailRemove").prop("disabled", false);
            $("#btnServiceDetailIEmailRemove").removeClass("disabled");
        } else {
            $("#btnServiceDetailIEmailRemove").prop("disabled", true);
            $("#btnServiceDetailIEmailRemove").addClass("disabled");
        }
    });
}
var onClickbtnServiceDetailIEmailRemove = function () {
    $("#btnServiceDetailIEmailRemove").off("click").on("click", function (e) {

        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        turnOffServiceDetail();
        isInModificationMode = false;
        servicedetailInbox_keypress = true;
        toggleOfferCodeSection();
        toggleSelectDIDSection();

        turnOffServiceDetail();
        if ($("#optservicedetailIemail_addresses option:selected").length) {
            deleteAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/inboxemails?emailAddress=" + encodeURIComponent($("#optservicedetailIemail_addresses option:selected").val()), "", onDeletedServiceInboxEmails);
        }
    });
}

var onDeletedServiceInboxEmails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailInboxEmailError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailInboxEmailError").show();
            }
        } else {
            //console.log(data);
            tabsloaded.events = false;
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;

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
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    //getServiceDetail();
                    haveToChangeSelectedService = false;
                }, 600);
            }, 1000);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailInboxEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailInboxEmailError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailInboxEmailError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailInboxEmailError").show();
        }
        else {
            $("#divServiceDetailInboxEmailError").html("</br>Request Cancelled.");
            $("#divServiceDetailInboxEmailError").show();
            CancelRequest = false;
        }
    }
}


var toggletxtservicedetailOemailaddress = function () {
    if ((!Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) || (serviceStatus.toUpperCase() != "ACTIVE" && serviceStatus.toUpperCase() != "ORDERED")) || isInModificationMode) {
        $("#txtservicedetailOemailaddress").prop("disabled", true);
        $("#txtservicedetailOemailaddress").removeClass("error");
    } else {
        $("#txtservicedetailOemailaddress").prop("disabled", false);
        $("#txtservicedetailOemailaddress").removeClass("error");
    }
}


var validatetxtservicedetailOemailaddress = function () {
    $("#txtservicedetailOemailaddress").attr({ "pattern": "^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$", "required": "required" });
}
var onChangetxtservicedetailOemailaddress = function () {
    $("#txtservicedetailOemailaddress").off("keyup").on("keyup", function (e) {
        togglebtnServiceDetailOEmailAdd();
    })
}
var togglebtnServiceDetailOEmailAdd = function () {
    if (!Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) || $("#optservicedetailOemail_addresses > option").length >= 5 || !$("#txtservicedetailOemailaddress").val() || (serviceStatus.toUpperCase() != "ACTIVE" && serviceStatus.toUpperCase() != "ORDERED") || isInModificationMode) {
        $("#btnServiceDetailOEmailAdd").prop("disabled", true);
        $("#btnServiceDetailOEmailAdd").addClass("disabled");
        $("#txtservicedetailOemailaddress").removeClass("error");
    } else {
        $("#btnServiceDetailOEmailAdd").prop("disabled", false);
        $("#btnServiceDetailOEmailAdd").removeClass("disabled");
        $("#txtservicedetailOemailaddress").removeClass("error");
    }
}
var onClickbtnServiceDetailOEmailAdd = function () {
    $("#btnServiceDetailOEmailAdd").off("click").on("click", function () {
        turnOffServiceDetail();
        if (!$("#txtservicedetailOemailaddress")[0].checkValidity()) {
            $("#txtservicedetailOemailaddress").addClass("error");
            if ($("#txtservicedetailOemailaddress").val())
                $("#divServiceDetailSendEmailError").html("Invalid email address.<span></span>").show();
            else
                $("#divServiceDetailSendEmailError").html("Please enter email address.<span></span>").show();
        } else {
            $("#txtservicedetaiOIemailaddress").removeClass("error");
            emailaddress = new Object();
            emailaddress.email_address = $("#txtservicedetailOemailaddress").val();
            postAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/sendemails", JSON.stringify(emailaddress), onSavedServiceSendEmails);

            $("#txtservicedetailIemailaddress").val("");
        }
    });
}

var getAddNewService_PIN = function () {

    getAjaxFunc("customers/" + customerKey + "/services/pin", setAddNewServicePIN, "");

}

var setAddNewServicePIN = function (data, issuccess) {
    var newrow = $("<tr />");
    if (issuccess) {
        if (data && data.default_pin) {
            $("#txtservicedetailIpin").val(data.default_pin);
        } else {
            $("#txtservicedetailIpin").val("");
        }
    } else {
        if (!CancelRequest) {

            if (data.responseJSON.message) {
                newrow.append($("<td colspan=3 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=3 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        } else {

            newrow.append($("<td colspan=3 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}

var onSavedServiceSendEmails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailSendEmailError").html(data.errors[0].developer_message + "<span></span>");
                $("#divServiceDetailSendEmailError").show();
            }
        } else {
            tabsloaded.events = false;
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;

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
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    // getServiceDetail();
                    haveToChangeSelectedService = false;
                }, 600);
            }, 1000);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailSendEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailSendEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                }
            } else {
                $("#divServiceDetailSendEmailError").html(data.responseJSON.errors[0].developer_message + "<span></span>");
            }
            $("#divServiceDetailSendEmailError").show();
        }
        else {
            $("#divServiceDetailSendEmailError").html("</br>Request Cancelled.");
            $("#divServiceDetailSendEmailError").show();
            CancelRequest = false;
        }
    }
}
var toggleoptservicedetailOemail_addresses = function () {
    setTimeout(function () {
        if (Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "ORDERED") && !isInModificationMode) {
            $("#optservicedetailOemail_addresses").prop("disabled", false);
        } else {
            $("#optservicedetailOemail_addresses").prop("disabled", true);
        }
    }, 1000);
}

var togglebtnServiceDetailOEmailDelete = function () {
    $("#optservicedetailOemail_addresses").off("change").on("change", function () {
        if (Number(permissionArray.filter(function (x) { return x.id == "AddEmailAddress" })[0].hasRights) && $("#optservicedetailOemail_addresses option:selected").length && $("#optservicedetailOemail_addresses > option").length > 1 && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "ORDERED") && !isInModificationMode) {
            $("#btnServiceDetailOEmailRemove").prop("disabled", false);
            $("#btnServiceDetailOEmailRemove").removeClass("disabled");
        } else {
            $("#btnServiceDetailOEmailRemove").prop("disabled", true);
            $("#btnServiceDetailOEmailRemove").addClass("disabled");
        }
    });
}
var onClickbtnServiceDetailOEmailRemove = function () {
    $("#btnServiceDetailOEmailRemove").off("click").on("click", function (e) {
        turnOffServiceDetail();
        if ($("#optservicedetailOemail_addresses option:selected").length) {
            deleteAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/sendemails?emailAddress=" + encodeURIComponent($("#optservicedetailOemail_addresses option:selected").val()), "", onDeletedServiceSendEmails);
        }
    });
}

var onDeletedServiceSendEmails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailSendEmailError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailSendEmailError").show();
            }
        } else {
            //console.log(data);
            tabsloaded.events = false;
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;

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
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    // getServiceDetail();
                    haveToChangeSelectedService = false;
                }, 600);
            }, 1500);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailSendEmailError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailSendEmailError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailSendEmailError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailSendEmailError").show();
        }
        else {
            $("#divServiceDetailSendEmailError").html("</br>Request Cancelled.");
            $("#divServiceDetailSendEmailError").show();
            CancelRequest = false;
        }
    }
}

//END:: EMAIL modify all functionalities

var togglechkservicedetailIem_storage = function () {
    if ($("#chkservicedetailIem_storage").data("em_storage_enabled") && !$("#chkservicedetailIsecure_storage").is(":checked") && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "SUSPEND" || serviceStatus.toUpperCase() == "" || serviceStatus.toUpperCase() == "ORDERED" || isInReactivationMode)) {
        $("#chkservicedetailIem_storage").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    } else {
        $("#chkservicedetailIem_storage").attr("disabled", "disabled");
    }
}
var togglechkservicedetailIsecure_storage = function () {
    if ($("#chkservicedetailIsecure_storage").data("secure_storage_enabled") && $("#chkservicedetailIem_storage").is(":checked") && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "SUSPEND" || serviceStatus.toUpperCase() == "" || serviceStatus.toUpperCase() == "ORDERED" || isInReactivationMode)) {
        $("#chkservicedetailIsecure_storage").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    } else {
        $("#chkservicedetailIsecure_storage").attr("disabled", "disabled");
    }
}


var onChangeoptservicedetailIfax_format = function () {
    $("#optservicedetailIfax_format").off("change").on("change", function () {
        toggletxtservicedetailIpassword();
    });
}
var toggleoptservicedetailIprimary_language = function () {
    if (!$("#chkservicedetailIvoice_status_1").is(":checked")) {
        $("#optservicedetailIprimary_language").prop("disabled", true);
        //  $("#optservicedetailIprimary_language").val("");
    } else {
        if ($("input[id*=chkService_findDID]").is(":checked")) {

            var checkedDID_id = "", checkedDID_phonenumber = "", checkedDID_languagecode = "";
            $("input[id*=chkService_findDID]").toArray()
                .reduce(function (t, element) {
                    if ($(element).is(":checked")) {
                        checkedDID_id = $(element).attr("id");
                        checkedDID_phonenumber = $(element).data("phonenumber");
                        checkedDID_languagecode = $(element).data("languagecode");
                    }
                }, "");
            if (checkedDID_languagecode) {
                $("#optservicedetailIprimary_language").val(checkedDID_languagecode);
            }
             if (checkedDID_languagecode=="0") {
                $("#optservicedetailIprimary_language").val(checkedDID_languagecode);
            }
        }

        if (saveServiceDetailMode == addOrUpdate.update) {
            $("#optservicedetailIprimary_language").toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                    }, {});
            }, {});
        } else {
            $("#optservicedetailIprimary_language").toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
                    }, {});
            }, {});
        }

        //if (serviceStatus.toUpperCase() == "INACTIVE") {
        //    $("#optservicedetailIprimary_language").prop("disabled", true);
        //}

    }
}


var toggletxtservicedetailIpassword = function () {
    if ($("#optservicedetailIfax_format").val() && $("#optservicedetailIfax_format").val() != "2") {
        $("#txtservicedetailIpassword").prop("disabled", true);
    } else {
        $("#txtservicedetailIpassword").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    }
}

var onKeypressServiceDetailInbox = function () {
    $("input[id*=txtservicedetailI],select[id*=optservicedetailI],input[id*=chkservicedetailI]").not("#txtservicedetailIemailaddress").off("focusin").on("focusin", function () {
        if (!servicedetailInbox_keypress) {
            var txtservicedetailI = $("input[id*=txtservicedetailI]").not("#txtservicedetailIemailaddress");

            txtservicedetailI.each(function () {
                $(this).val($.trim($(this).val()));
            });



            var formArr = $("#divservicedetailInbound :input").not("#optservicedetailIprimary_language").not("#chkservicedetailIem_storage").not("#chkservicedetailIsecure_storage").serializeArray();

            jQuery.each(formArr, function (i, field) {
                formArr[i].value = $.trim(field.value);
            });

            formArr.push({ "name": "optservicedetailIprimary_language", "value": $("#optservicedetailIprimary_language").val() });
            formArr.push({ "name": "chkservicedetailIem_storage", "value": $("#chkservicedetailIem_storage").is(":checked") });
            formArr.push({ "name": "chkservicedetailIsecure_storage", "value": $("#chkservicedetailIsecure_storage").is(":checked") });
            servicedetailInbox_original_data = $.param(formArr);

            servicedetailInbox_keypress = true;
        }
    });
}

var onChangeServiceDetailInbox = function () {
    $("input[id*=txtservicedetailI]").not("#txtservicedetailIemailaddress").off("keyup").on("keyup", function () {
        if (saveServiceDetailMode == addOrUpdate.add || isInReactivationMode) {
            return;
        }

        var formArr = $("#divservicedetailInbound :input").not("#optservicedetailIprimary_language").not("#chkservicedetailIem_storage").not("#chkservicedetailIsecure_storage").serializeArray();

        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });

        formArr.push({ "name": "optservicedetailIprimary_language", "value": $("#optservicedetailIprimary_language").val() });
        formArr.push({ "name": "chkservicedetailIem_storage", "value": $("#chkservicedetailIem_storage").is(":checked") });
        formArr.push({ "name": "chkservicedetailIsecure_storage", "value": $("#chkservicedetailIsecure_storage").is(":checked") });


        var serializedForm = $.param(formArr);

        // console.log("serialize:" + $('#divservicedetailInbound :input').serialize());

        if (servicedetailInbox_keypress) {
            if (serializedForm != servicedetailInbox_original_data) {
                isInModificationMode = true;
            } else {
                isInModificationMode = false;
            }
            toggleOfferCodeSection();
            toggleSelectDIDSection();
            toggletxtservicedetailIemailaddress();
            togglebtnServiceDetailIEmailAdd();
            toggleoptservicedetailIemail_addresses();
            //togglebtnServiceDetailEmailDelete();
            $("#optservicedetailIemail_addresses").trigger("change");
        }

    });
    $("input[id*=txtservicedetailI],input[id*=chkservicedetailI]").not("#txtservicedetailIemailaddress").off('change').on("change", function () {
        if ($(this).attr("id") == "chkservicedetailIem_storage" || $(this).attr("id") == "chkservicedetailIsecure_storage") {
            $("#chkservicedetailIem_storage").attr("disabled", "disabled");
            $("#chkservicedetailIsecure_storage").attr("disabled", "disabled");
        }
        setTimeout(function (element) {
            if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {
                var formArr = $("#divservicedetailInbound :input").not("#optservicedetailIprimary_language").not("#chkservicedetailIem_storage").not("#chkservicedetailIsecure_storage").serializeArray();

                jQuery.each(formArr, function (i, field) {
                    formArr[i].value = $.trim(field.value);
                });

                formArr.push({ "name": "optservicedetailIprimary_language", "value": $("#optservicedetailIprimary_language").val() });
                formArr.push({ "name": "chkservicedetailIem_storage", "value": $("#chkservicedetailIem_storage").is(":checked") });
                formArr.push({ "name": "chkservicedetailIsecure_storage", "value": $("#chkservicedetailIsecure_storage").is(":checked") });

                var serializedForm = $.param(formArr);
                serializedForm;

                //console.log("serialize:" + $('#divservicedetailInbound :input').serialize());

                if (servicedetailInbox_keypress) {
                    if (serializedForm != servicedetailInbox_original_data) {
                        isInModificationMode = true;
                    } else {
                        isInModificationMode = false;
                    }
                    toggleOfferCodeSection();
                    toggleSelectDIDSection();
                    toggletxtservicedetailIemailaddress();
                    togglebtnServiceDetailIEmailAdd();
                    toggleoptservicedetailIemail_addresses();
                    // togglebtnServiceDetailEmailDelete();
                    $("#optservicedetailIemail_addresses").trigger("change");
                }
            }

            if (element.attr("id") == "chkservicedetailIvoice_status_1") {
                toggleoptservicedetailIprimary_language();
            }
            if (element.attr("id") == "chkservicedetailIem_storage" || element.attr("id") == "chkservicedetailIsecure_storage") {
                togglechkservicedetailIem_storage();
                togglechkservicedetailIsecure_storage();
            }

        }, 800, $(this));

    });
    $("select[id*=optservicedetailI]").not("#optservicedetailIemail_addresses").off('change').on("change", function () {
        setTimeout(function (element) {
            if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {
                var formArr = $("#divservicedetailInbound :input").not("#optservicedetailIprimary_language").not("#chkservicedetailIem_storage").not("#chkservicedetailIsecure_storage").serializeArray();

                jQuery.each(formArr, function (i, field) {
                    formArr[i].value = $.trim(field.value);
                });

                formArr.push({ "name": "optservicedetailIprimary_language", "value": $("#optservicedetailIprimary_language").val() });
                formArr.push({ "name": "chkservicedetailIem_storage", "value": $("#chkservicedetailIem_storage").is(":checked") });
                formArr.push({ "name": "chkservicedetailIsecure_storage", "value": $("#chkservicedetailIsecure_storage").is(":checked") });

                var serializedForm = $.param(formArr);
                serializedForm;

                //console.log("serialize:" + $('#divservicedetailInbound :input').serialize());

                if (servicedetailInbox_keypress) {
                    if (serializedForm != servicedetailInbox_original_data) {
                        isInModificationMode = true;
                    } else {
                        isInModificationMode = false;
                    }
                    toggleOfferCodeSection();
                    toggleSelectDIDSection();
                    toggletxtservicedetailIemailaddress();
                    togglebtnServiceDetailIEmailAdd();
                    toggleoptservicedetailIemail_addresses();
                }
            }
            if (element.attr("id") == "optservicedetailIfax_format") {
                toggletxtservicedetailIpassword();
            }
        }, 900, $(this));
    });
}
var onClickbtnSaveServiceDetailInbox = function () {
    turnOffServiceDetail();
    $("#btnSaveServiceDetailInbox").off("click").on("click", function () {
        turnOffServiceDetail();

        setTimeout(function () {
            if (isInModificationMode) {
                if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {
                    onClickbtnSaveServiceDetailInbox_update();
                } else {
                    onClickbtnSaveServiceDetailInbox_add();
                }
            } else {
                $("#divServiceDetailMainError").html("<span>No changes to save</span>");
                $("#divServiceDetailMainError").show();
            }

        }, 500);


    });
}
var onClickbtnSaveServiceDetailInbox_update = function () {
    var objservicedetailInbox = new Object();
    objservicedetailInbox.inbox_service = new Object();

    objservicedetailInbox.inbox_service.sales_userid = $("#optservicedetailIsales_rep").val();
    objservicedetailInbox.inbox_service.version = $("#txtservicedetailIinbox_serviceversion").val();
    objservicedetailInbox.inbox_service.pin = $("#txtservicedetailIpin").val();

    objservicedetailInbox.inbox_service.inbox_prefs = new Object();
    objservicedetailInbox.inbox_service.inbox_prefs.csid = $("#txtservicedetailIcsid").val();
    objservicedetailInbox.inbox_service.inbox_prefs.voice_status_1 = $("#chkservicedetailIvoice_status_1").is(":checked")
    objservicedetailInbox.inbox_service.inbox_prefs.prompt_language_code_1 = $("#optservicedetailIprimary_language").val();
    objservicedetailInbox.inbox_service.inbox_prefs.fax_format_code = $("#optservicedetailIfax_format").val();
    objservicedetailInbox.inbox_service.inbox_prefs.em_storage = $("#chkservicedetailIem_storage").is(":checked")
    objservicedetailInbox.inbox_service.inbox_prefs.secure_storage = $("#chkservicedetailIsecure_storage").is(":checked")
    objservicedetailInbox.inbox_service.inbox_prefs.password = ($("#txtservicedetailIpassword").val()) ? $("#txtservicedetailIpassword").val() : null;
    objservicedetailInbox.inbox_service.inbox_prefs.version = $("#txtservicedetailIinbox_perfsversion").val();

    objservicedetailInbox.inbox_service.inbox_prefs.voice_msg_record_len = $("#txtservicedetailIvoice_msg_record_len").val();
    objservicedetailInbox.inbox_service.inbox_prefs.ogm_msg_record_len = $("#txtservicedetailIogm_msg_record_len").val();


    var checkedDID_id = "", checkedDID_phonenumber = "", checkedDID_phonecity = "";

    $("input[id*=chkService_findDID]").toArray()
        .reduce(function (t, element) {
            if ($(element).is(":checked")) {
                checkedDID_id = $(element).attr("id");
                checkedDID_phonenumber = $(element).data("phonenumber");
                checkedDID_phonecity = $(element).data("phonecity");
            }
        }, "");
    objservicedetailInbox.inbox_service.inbox_prefs.phone_number = String(checkedDID_phonenumber);
    objservicedetailInbox.inbox_service.inbox_prefs.phone_city = String(checkedDID_phonecity);

    if (!checkedDID_phonenumber || !checkedDID_phonecity) {
        objservicedetailInbox.inbox_service.inbox_prefs.phone_number = servicePhoneNumber;
        objservicedetailInbox.inbox_service.inbox_prefs.phone_city = servicePhoneCity;
    }

    putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey, JSON.stringify(objservicedetailInbox), onSavedServiceDetailInbox);
}

var onSavedServiceDetailInbox = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailMainError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.
            tabsloaded.events = false;
            tabsloaded.bill_viewcharges = false;
            tabsloaded.bill_transactionhistory = false;

            isInModificationMode = false;
            oldModifiedServiceKey = serviceKey;
            haveToChangeSelectedService = true;
            // servicedetailInbox_keypress =false;
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
            $("#tblISPservice_Did > tbody").html("");
            if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "true") {
                $("#btntoggleserviceItelephone").trigger("click");
            }
            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    //getServiceDetail();
                    setTimeout(function () {
                        $("#divServiceDetailMainSuccess").html("<span>Data saved successfully.</span>")
                        $("#divServiceDetailMainSuccess").show();
                        haveToChangeSelectedService = false;
                        toggletxtservicedetailIemailaddress();
                    }, 1000);
                }, 1000);
            }, 1800);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailMainError").show();
        }
        else {
            $("#divServiceDetailMainError").html("</br>Request Cancelled.");
            $("#divServiceDetailMainError").show();
            CancelRequest = false;
        }
    }
}

//START::SEND SERVICE MODIFICATION

var togglechkservicedetailOem_storage = function () {
    if ($("#chkservicedetailOem_storage").data("em_storage_enabled") && !$("#chkservicedetailOsecure_storage").is(":checked") && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "ORDERED" || serviceStatus.toUpperCase() == "SUSPEND")) {
        $("#chkservicedetailOem_storage").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    } else {
        $("#chkservicedetailOem_storage").attr("disabled", "disabled");
    }
}
var togglechkservicedetailOsecure_storage = function () {
    if ($("#chkservicedetailOsecure_storage").data("secure_storage_enabled") && $("#chkservicedetailOem_storage").is(":checked") && (serviceStatus.toUpperCase() == "ACTIVE" || serviceStatus.toUpperCase() == "ORDERED" || serviceStatus.toUpperCase() == "SUSPEND")) {
        $("#chkservicedetailOsecure_storage").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    } else {
        $("#chkservicedetailOsecure_storage").attr("disabled", "disabled");
    }
}

var toggleoptservicedetailOpassword = function () {
    if (!$("#chkservicedetailOpassword_enabled").is(":checked")) {
        $("#txtservicedetailOpassword").val("");
        $("#txtservicedetailOpassword").attr("disabled", "disabled");
    } else {
        $("#txtservicedetailOpassword").toArray().reduce(function (x, control) {
            permissionArray.filter(function (elem) { return elem.id == control.id })
                .reduce(function (x, element) {
                    addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                }, {});
        }, {});
    }
}

var onKeypressServiceDetailSend = function () {
    $("input[id*=txtservicedetailO],select[id*=optservicedetailO],input[id*=chkservicedetailO]").not("#txtservicedetailOemailaddress").off("focusin").on("focusin", function () {
        if (!servicedetailSend_keypress) {
            var txtservicedetailO = $("input[id*=txtservicedetailO]").not("#txtservicedetailOemailaddress");

            txtservicedetailO.each(function () {
                $(this).val($.trim($(this).val()));
            });

            var formArr = $("#divservicedetailOutbound :input").not("#txtservicedetailOpassword").not("#chkservicedetailOsecure_storage").not("#chkservicedetailOem_storage").serializeArray();
            jQuery.each(formArr, function (i, field) {
                formArr[i].value = $.trim(field.value);
            });
            formArr.push({ "name": "txtservicedetailOpassword", "value": $("#txtservicedetailOpassword").val() });
            formArr.push({ "name": "chkservicedetailOsecure_storage", "value": $("#chkservicedetailOsecure_storage").is(":checked") });
            formArr.push({ "name": "chkservicedetailOem_storage", "value": $("#chkservicedetailOem_storage").is(":checked") });

            servicedetailSend_original_data = $.param(formArr);

            servicedetailSend_keypress = true;
        }
    });
}

var onChangeServiceDetailSend = function () {
    $("input[id*=txtservicedetailO]").not("#txtservicedetailOemailaddress").off("keyup").on("keyup", function () {

        var formArr = $("#divservicedetailOutbound :input").not("#txtservicedetailOpassword").not("#chkservicedetailOsecure_storage").not("#chkservicedetailOem_storage").serializeArray();
        jQuery.each(formArr, function (i, field) {
            formArr[i].value = $.trim(field.value);
        });
        formArr.push({ "name": "txtservicedetailOpassword", "value": $("#txtservicedetailOpassword").val() });
        formArr.push({ "name": "chkservicedetailOsecure_storage", "value": $("#chkservicedetailOsecure_storage").is(":checked") });
        formArr.push({ "name": "chkservicedetailOem_storage", "value": $("#chkservicedetailOem_storage").is(":checked") });


        var serializedForm = $.param(formArr);

        //console.log("serialize:" + $('#divservicedetailOutbound :input').serialize());

        if (servicedetailSend_keypress) {
            if (serializedForm != servicedetailSend_original_data) {
                isInModificationMode = true;
            } else {
                isInModificationMode = false;
            }
        }
        toggleOfferCodeSection();
        toggletxtservicedetailOemailaddress();
        togglebtnServiceDetailOEmailAdd();
        toggleoptservicedetailOemail_addresses();
        togglebtnServiceDetailOEmailDelete();

    });
    $("input[id*=txtservicedetailO],input[id*=chkservicedetailO]").not("#txtservicedetailOemailaddress").off('change').on("change", function (element) {
        setTimeout(function (element) {
            var formArr = $("#divservicedetailOutbound :input").not("#txtservicedetailOpassword").not("#chkservicedetailOsecure_storage").not("#chkservicedetailOem_storage").serializeArray();
            jQuery.each(formArr, function (i, field) {
                formArr[i].value = $.trim(field.value);
            });
            formArr.push({ "name": "txtservicedetailOpassword", "value": $("#txtservicedetailOpassword").val() });
            formArr.push({ "name": "chkservicedetailOsecure_storage", "value": $("#chkservicedetailOsecure_storage").is(":checked") });
            formArr.push({ "name": "chkservicedetailOem_storage", "value": $("#chkservicedetailOem_storage").is(":checked") });

            var serializedForm = $.param(formArr);
            serializedForm;

            //console.log("serialize:" + $('#divservicedetailOutbound :input').serialize());

            if (servicedetailSend_keypress) {
                if (serializedForm != servicedetailSend_original_data) {
                    isInModificationMode = true;
                } else {
                    isInModificationMode = false;
                }
                toggleOfferCodeSection();
                toggletxtservicedetailOemailaddress();
                togglebtnServiceDetailOEmailAdd();
                toggleoptservicedetailOemail_addresses();
                togglebtnServiceDetailOEmailDelete();
            }
            if (element.attr("id") == "chkservicedetailOpassword_enabled") {
                toggleoptservicedetailOpassword();

            }
            if (element.attr("id") == "chkservicedetailOem_storage" || element.attr("id") == "chkservicedetailOsecure_storage") {
                togglechkservicedetailOem_storage();
                togglechkservicedetailOsecure_storage();
            }

        }, 400, $(this));

    });
    $("select[id*=optservicedetailO]").not("#optservicedetailOemail_addresses").off('change').on("change", function () {
        setTimeout(function () {
            var formArr = $("#divservicedetailOutbound :input").not("#txtservicedetailOpassword").not("#chkservicedetailOsecure_storage").not("#chkservicedetailOem_storage").serializeArray();
            jQuery.each(formArr, function (i, field) {
                formArr[i].value = $.trim(field.value);
            });
            formArr.push({ "name": "txtservicedetailOpassword", "value": $("#txtservicedetailOpassword").val() });
            formArr.push({ "name": "chkservicedetailOsecure_storage", "value": $("#chkservicedetailOsecure_storage").is(":checked") });
            formArr.push({ "name": "chkservicedetailOem_storage", "value": $("#chkservicedetailOem_storage").is(":checked") });

            var serializedForm = $.param(formArr);
            serializedForm;

            //console.log("serialize:" + $('#divservicedetailOutbound :input').serialize());

            if (servicedetailSend_keypress) {
                if (serializedForm != servicedetailSend_original_data) {
                    isInModificationMode = true;
                } else {
                    isInModificationMode = false;
                }
                toggleOfferCodeSection();
                toggletxtservicedetailOemailaddress();
                togglebtnServiceDetailOEmailAdd();
                toggleoptservicedetailOemail_addresses();
                togglebtnServiceDetailOEmailDelete();
            }
        }, 900);
    });
}
var onClickbtnSaveServiceDetailSend = function () {
    turnOffServiceDetail();
    $("#btnSaveServiceDetailSend").off("click").on("click", function () {
        turnOffServiceDetail();

        setTimeout(function () {
            if (isInModificationMode) {

                var objservicedetailSend = new Object();
                objservicedetailSend.send_service = new Object();

                objservicedetailSend.send_service.sales_userid = $("#optservicedetailOsales_rep").val();
                objservicedetailSend.send_service.version = $("#txtservicedetailOsend_serviceversion").val();
                //objservicedetailSend.send_service.pin = $("#txtservicedetailIpin").val();

                objservicedetailSend.send_service.send_prefs = new Object();
                objservicedetailSend.send_service.send_prefs.csid = $("#txtservicedetailOsend_csid").val();

                objservicedetailSend.send_service.send_prefs.deliver_receipts_option = (($("#chkservicedetailOdeliver_receipts_option").is(":checked")) ? "1" : "0");
                objservicedetailSend.send_service.send_prefs.allow_send = $("#chkservicedetailOallow_send").is(":checked");
                objservicedetailSend.send_service.send_prefs.block_flag = "0";

                objservicedetailSend.send_service.send_prefs.em_storage = $("#chkservicedetailOem_storage").is(":checked");
                objservicedetailSend.send_service.send_prefs.secure_storage = $("#chkservicedetailOsecure_storage").is(":checked");
                objservicedetailSend.send_service.send_prefs.password_enabled = $("#chkservicedetailOpassword_enabled").is(":checked");
                objservicedetailSend.send_service.send_prefs.password = ($("#txtservicedetailOpassword").val()) ? $("#txtservicedetailOpassword").val() : null;
                objservicedetailSend.send_service.send_prefs.version = $("#txtservicedetailOsend_perfsversion").val();

                tabsloaded.events = false;
                //console.log("send service modification json:::" + JSON.stringify(objservicedetailSend));

                putAjaxFunc("customers/" + customerKey + "/services/" + serviceKey, JSON.stringify(objservicedetailSend), onSavedServiceDetailSend);



            } else {
                $("#divServiceDetailMainError").html("<span>No changes to save</span>");
                $("#divServiceDetailMainError").show();
            }
        }, 700);

    });
}

var onSavedServiceDetailSend = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailMainError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.
            tabsloaded.events = false;
            isInModificationMode = false;
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



            setTimeout(function () {
                $("#servicekey" + oldModifiedServiceKey).trigger("click");
                setTimeout(function () {
                    $("#divServiceDetailMainSuccess").html("<span>Data saved successfully.</span>")
                    $("#divServiceDetailMainSuccess").show();
                    haveToChangeSelectedService = false;
                    toggletxtservicedetailOemailaddress();
                }, 2500);
            }, 1800);

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailMainError").show();
        }
        else {
            $("#divServiceDetailMainError").html("</br>Request Cancelled.");
            $("#divServiceDetailMainError").show();
            CancelRequest = false;
        }
    }
}
//END::SEND SERVICE MODIFICATION


//START:: Service detail UI permission
var hrefServiceDetailsUpdateInboxService = function (rights) {
    setTimeout(function () {
        hrefServiceDetailsUpdateInboxServiceRights = rights;

        $txtservicedetailI = $("select[id *=optservicedetailI],input[id*=txtservicedetailI],input[id*=chkservicedetailI]").not("#txtservicedetailIemailaddress,#chkservicedetailIem_storage,#chkservicedetailIsecure_storage");

        if ((rights == 0 || serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED") && (!isInReactivationMode)) {
            $txtservicedetailI.attr({ "disabled": "disabled" });
            $("#btnSaveServiceDetailInbox").prop("disabled", true);
            $("#btnSaveServiceDetailInbox").addClass("disabled");
        } else {
            $txtservicedetailI.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                    }, {})
            }, {});

            if ($txtservicedetailI.is(':visible')) {
                $("#btnSaveServiceDetailInbox").prop("disabled", false);
                $("#btnSaveServiceDetailInbox").removeClass("disabled");
            } else {
                $("#btnSaveServiceDetailInbox").prop("disabled", true);
                $("#btnSaveServiceDetailInbox").addClass("disabled");
            }
        }
    }, 2500);
}

var hrefServiceDetailsUpdateSendService = function (rights) {
    setTimeout(function () {

        $txtservicedetailO = $("select[id*=optservicedetailO],input[id*=txtservicedetailO],input[id*=chkservicedetailO]").not("#txtservicedetailOemailaddress,#chkservicedetailOem_storage,#chkservicedetailOsecure_storage,#txtservicedetailOpassword");

        if (rights == 0 || serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED") {
            $txtservicedetailO.attr({ "disabled": "disabled" });
            $("#btnSaveServiceDetailSend").prop("disabled", true);
            $("#btnSaveServiceDetailSend").removeClass("grey-btn").addClass("disabled");
        } else {
            $txtservicedetailO.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_update, element.removeAttr_update);
                    }, {})
            }, {});
            //console.log("$txtservicedetailO.is(':visible') ........ " + $txtservicedetailO.is(':visible'));
            if ($txtservicedetailO.is(':visible')) {
                $("#btnSaveServiceDetailSend").prop("disabled", false);
                $("#btnSaveServiceDetailSend").removeClass("disabled").addClass("grey-btn");
            } else {
                $("#btnSaveServiceDetailSend").prop("disabled", true);
                $("#btnSaveServiceDetailSend").removeClass("grey-btn").addClass("disabled");
            }
        }
    }, 3500);
}

var hrefServiceDetailsAddEmailAddress = function (rights) {
    permissionArray.push(
        { id: "AddEmailAddress", hasRights: rights }
    );
}

var hrefServiceDetailsDeleteEmailAddress = function (rights) {
    permissionArray.push(
        { id: "DeleteEmailAddress", hasRights: rights }
    );
}

var hrefServiceDetailsAddInboxService = function (rights) {
    hrefServiceDetailsAddInboxServiceRights = rights;
}
var toggleservicedetailInboxControls_add = function () {
    setTimeout(function () {
        rights = hrefServiceDetailsAddInboxServiceRights;
        $txtservicedetailI = $("select[id*=optservicedetailI],input[id*=txtservicedetailI],input[id*=chkservicedetailI]").not("#txtservicedetailIemailaddress,#chkservicedetailIem_storage,#chkservicedetailIsecure_storage,#optservicedetailIprimary_language");

        if ((rights == 0 || serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED") && (!isInReactivationMode)) {
            $txtservicedetailI.attr({ "disabled": "disabled" });
            $("#btnSaveServiceDetailInbox").prop("disabled", true);
            $("#btnSaveServiceDetailInbox").addClass("disabled");
        } else {
            $txtservicedetailI.toArray().reduce(function (x, control) {
                permissionArray.filter(function (elem) { return elem.id == control.id })
                    .reduce(function (x, element) {
                        addattrtoelements("#" + element.id, element.addAttr_create, element.removeAttr_create);
                    }, {})
            }, {});
            if ($txtservicedetailI.is(':visible')) {
                togglebtnSaveServiceDetailInbox_add_reactivate();
            } else {
                $("#btnSaveServiceDetailInbox").prop("disabled", true);
                $("#btnSaveServiceDetailInbox").addClass("disabled");
            }
        }
    }, 800);
}
//END:: Service detail UI Permission

//START:: offercode modification story
var loadOfferCodeModification = function () {
    $("#divServiceOfferCodeError").hide();
    //offer code modification load.
    //validatetxtService_SubscriptionOfferCode();
    onClickbtnService_findOfferCode();
    sortingOfferCode();
    onChangetxtService_SubscriptionOfferCode();
    onClickbtntoggleserviceIfindplan();
    onCheckchkService_findOC();
    onClickbtnService_resetOfferCode();

    onChangetxtservicedetailIogm_msg_record_len();
    onChangetxtservicedetailIvoice_msg_record_len();

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
        $("#tblISPservice_findOfferCode > thead > tr > th").removeClass("active");
        $("#tblISPservice_findOfferCode > thead > tr > th").removeClass("active");
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
        if (sortOfferCodeBy && sortOfferCodeType) {
            getAjaxFunc("lookup/offer_codes?resource_type=" + serviceResourceType + "&currencycode=" + currency_code + "&offer_code_type=W&oem_id=" + $("#optcontactoems").val() + "&min_subscription=" + $("#txtService_SubscriptionOfferCode").val() + "&orderBy=" + sortOfferCodeBy + "&order=" + sortOfferCodeType, setService_findOfferCode, "");
        } else {
            getAjaxFunc("lookup/offer_codes?resource_type=" + serviceResourceType + "&currencycode=" + currency_code + "&offer_code_type=W&oem_id=" + $("#optcontactoems").val() + "&min_subscription=" + $("#txtService_SubscriptionOfferCode").val(), setService_findOfferCode, "");
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
        $("#tblISPservice_findOfferCode > tbody").html("");
        $("a[id*=btnSrtOfferCode]").attr({ "class": "disabledLink" });
    });
}

var onCheckchkService_findOC = function () {
    $("input[id*=chkService_findOC]").off("click").on("click", function (e) {
        if (isInModificationMode && !isInOfferCodeMM && !isInReactivationMode && saveServiceDetailMode == addOrUpdate.update) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        } else {
            if ($(this).is(":checked")) {
                $("input[id*=chkService_findOC]").attr("disabled", "disabled");

                if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {
                    //enable change plan button.
                    $("#btnService_changeOfferCode").prop("disabled", false);
                    $("#btnService_changeOfferCode").removeClass("disabled");
                    $("input[name*=serviceplanselection]").removeAttr("disabled");


                    //disable service summary grid and active/inactive/all checkbox.
                    $("a[id*=servicekey]").attr({ "class": "disabledLink" });
                    $("input[name=servicesummaryfilter]").attr("disabled", "disabled");
                    $("input[id*=chkServices_]").attr("disabled", "disabled");
                    $("#optdeactivationreason").attr("disabled", "disabled");
                    $("#btnSuspendService").prop("disabled", true);
                    $("#btnSuspendService").addClass("disabled");


                    //disable all controls of service detail
                    $("select[id*=optservicedetailI],input[id*=txtservicedetailI],input[id*=chkservicedetailI]").attr("disabled", "disabled");
                    $("#btnSaveServiceDetailInbox").prop("disabled", true);
                    $("#btnSaveServiceDetailInbox").addClass("disabled");
                    //set flag isInOfferCodeModification to true
                    isInOfferCodeMM = true;
                }
                isInModificationMode = true;
                setTimeout(function (element) {
                    element.removeAttr("disabled");
                }, 2600, $(this));

            } else {
                $("input[id*=chkService_findOC]").attr("disabled", "disabled");
                if (saveServiceDetailMode == addOrUpdate.update && !isInReactivationMode) {

                    $("#btnService_changeOfferCode").prop("disabled", true);
                    $("#btnService_changeOfferCode").addClass("disabled");
                    $("input[name*=serviceplanselection]").attr("disabled", "disabled");

                    //enable service summary grid
                    $("a[id*=servicekey]").removeAttr("class");
                    $("input[name=servicesummaryfilter]").removeAttr("disabled");

                    toggleDeactivationReason();
                    toggleChkServiceSuspensionFlag();
                    togglebtnSuspendService();

                    hrefServiceDetailsUpdateInboxService(hrefServiceDetailsUpdateInboxServiceRights);
                    serviceModificationLoad();
                }
                setTimeout(function () {
                    $("input[id*=chkService_findOC]").removeAttr("disabled");
                }, 2600);

                isInOfferCodeMM = false;
                isInModificationMode = false;
            }
            togglebtnSaveServiceDetailInbox_add_reactivate();
            toggletxtservicedetailIemailaddress();
            togglebtnServiceDetailIEmailAdd();
            toggleoptservicedetailIemail_addresses();
            //togglebtnServiceDetailEmailDelete();
            $("#optservicedetailIemail_addresses").trigger("change");

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
            $("#tblISPservice_findOfferCode > tbody").html("");
            $("#tblISPservice_findOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">No Plans were Found</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPservice_findOfferCode > tbody").html("");
            $("#tblISPservice_findOfferCode").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=8 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=8 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        } else {
            $("#tblISPservice_findOfferCode > tbody").html("");
            $("#tblISPservice_findOfferCode").append(newrow);
            newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_findOfferCode = function (data) {
    $("#tblISPservice_findOfferCode > tbody").html("");
    $("#tblISPservice_findOfferCode > thead > tr:first-child").removeClass();
    for (var i = 0; i < data.length; i++) {
        drawService_findOfferCodeRows(data[i], (i + 1));
    }
    var tb = document.querySelectorAll("#tblISPservice_findOfferCode tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPservice_findOfferCode > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
    onCheckchkService_findOC();
    $('[data-toggle="othertooltip3"]').on('show.bs.tooltip', function () {
        $('.tooltip').not(this).hide();
    });
}
function drawService_findOfferCodeRows(rowData) {

    var row = $("<tr>");
    $("#tblISPservice_findOfferCode").append(row);
    row.append($("<td>" + rowData.package_name + "</td>"));
    row.append($("<td class=\"pull-right\">" + rowData.subscription + "</td>"));
    row.append($("<td>" + rowData.billing_period_name + "</td>"));
    row.append($("<td>" + (rowData.first_month === 0 ? "Y" : "N") + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.activation + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ib_gift + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ib_page + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.ob_gift + "</td>"));
    row.append($("<td  class=\"pull-right\">" + rowData.combo_gift + "</td>"));
    row.append($("<td><input type=\"checkbox\" id=\"chkService_findOC" + rowData.offer_code + "\" data-offercode=\"" + rowData.offer_code + "\" /></td>"));
    row.wrap("<div  data-html=\"true\" data-container=\"body\" data-toggle = \"othertooltip3\" data-original-title=\"" + rowData.offer_code + " </br> " + rowData.description + "\"></div>")
    $('[data-toggle="othertooltip3"]').tooltip({ trigger: "hover" });
}

var onClickbtnService_changeOfferCode = function () {
    $("#btnService_changeOfferCode").off("click").on("click", function () {
        showSimpleDialogForOfferCodeChange();
    });
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
            $("#tblISPservice_findOfferCode > tbody").html("");
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
    $("i[id*=icnService_findDID]").off("click").on("click", function (e) {
        getService_findDID();
    });
}
var getService_findDID = function () {
    if (validateFindDID()) {
        getAjaxFunc("/lookup/phonesearch?country=" + $("#optservicedetailDid_country").val() + "&city=" + $("#txtservicedetailDid_city").val() + "&phonenumber=" + $("#txtservicedetailDid_phone").val(), setService_findDID, "");
    }
}
var validateFindDID = function () {
    $("#divServiceDidError").hide();
    if ($("#optservicedetailDid_country").val() == "Select a country") {
        $("#divServiceDidError").html("Please select country").show();
        return false;
    }
    if (!$("#txtservicedetailDid_city").val().trim()) {
        $("#divServiceDidError").html("Please enter city").show();
        return false;
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
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">No DID(s) were Found</td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=3 style=\"width:90%\">Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=3 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
            }
        } else {
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
    }
}
var drawService_findDid = function (data) {
    $("#tblISPservice_Did > tbody").html("");
    $("#tblISPservice_Did > thead > tr:first-child").removeClass();
    for (var i = 0; i < data.length; i++) {
        drawService_findDidRows(data[i], (i + 1));
    }
    onClickchkService_findDID();
    var tb = document.querySelectorAll("#tblISPservice_Did tbody");
    if (tb[0] && (tb[0].scrollHeight > tb[0].clientHeight)) {
        $("#tblISPservice_Did > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
    }
}
function drawService_findDidRows(rowData) {

    var row = $("<tr>");
    $("#tblISPservice_Did").append(row);
    row.append($("<td>" + rowData.formatted_phone_number + "</td>"));
    row.append($("<td>" + rowData.phone_city + "</td>"));

    row.append($("<td><input type=\"checkbox\" id=\"chkService_findDID" + rowData.phone_number + "\" data-phonecity=\"" + rowData.phone_city + "\" data-phonenumber=\"" + rowData.phone_number + "\" data-languagecode=\"" + rowData.default_language_code + "\" data-formattedphonenumber=\"" + rowData.formatted_phone_number + "\" /></td>"));
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
            $("input[id*=chkService_findDID]").attr("disabled", "disabled");
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
        togglebtnSaveServiceDetailInbox_add_reactivate();
        toggletxtservicedetailIemailaddress();
        togglebtnServiceDetailIEmailAdd();
        toggleoptservicedetailIemail_addresses();
        //togglebtnServiceDetailEmailDelete();
        $("#optservicedetailIemail_addresses").trigger("change");
        //}
    });
}
//END: Select DID Sections

//START:: Add new Service functions.
var togglebtnAddNewService = function () {
    var isCustomerActive = ($("#txthdraccount_status").val().toUpperCase() == "ACTIVE" ? true : false);

    var isAccountBalanceValid = false;
    var total_main_balance = 0;
    if (String($("#txthdrtotal_main_balance").val()).substr(0, 1) == "(") {
        total_main_balance = -1;
    }
    else {
        total_main_balance = $("#txthdrtotal_main_balance").val().replace(/\D/g, '');
    }

    if (total_main_balance > 0) {
        isAccountBalanceValid = false;
    } else if (total_main_balance < 0) {
        isAccountBalanceValid = true;
    } else {
        isAccountBalanceValid = true;
    }

    var isUsageBalanceValid = false;
    var usage_main_balance = 0;
    if (String($("#txthdrtotal_usage_balance").val()).substr(0, 1) == "(") {
        usage_main_balance = -1;
    }
    else {
        usage_main_balance = $("#txthdrtotal_usage_balance").val().replace(/\D/g, '');
    }

    if (usage_main_balance > 0) {
        isUsageBalanceValid = false;
    } else if (usage_main_balance < 0) {
        isUsageBalanceValid = true;
    } else {
        isUsageBalanceValid = true;
    }

    var isSuspensionFlagValid = true;
    $('#divServiceSuspensionFlags :input').each(function () {
        if ($(this).is(":checked")) {
            isSuspensionFlagValid = false;
        }
    });

    var isOneActiveInboxServiceFound = false;
    $("a[id*=servicekey]").toArray().reduce(function (x, element) {
        var $element = $(element);
        if ($element.data("servicetype") == "INBOX" && $element.data("servicestatus") == "Active") {
            isOneActiveInboxServiceFound = true;
        }
    }, {});

    if ($("#txtcontactcollection_method").val() == "N") {
        if (isCustomerActive && isSuspensionFlagValid && isOneActiveInboxServiceFound && serviceType.toUpperCase() == "INBOX" && serviceStatus.toUpperCase() == "ACTIVE" && saveServiceDetailMode != addOrUpdate.add) {
            $("#btnAddNewService").prop("disabled", false);
            $("#btnAddNewService").removeClass("disabled");
        } else {
            $("#btnAddNewService").prop("disabled", true);
            $("#btnAddNewService").addClass("disabled");
        }
    } else {
        if (isCustomerActive && isAccountBalanceValid && isUsageBalanceValid && isSuspensionFlagValid && isOneActiveInboxServiceFound && serviceType.toUpperCase() == "INBOX" && serviceStatus.toUpperCase() == "ACTIVE" && saveServiceDetailMode != addOrUpdate.add) {
            $("#btnAddNewService").prop("disabled", false);
            $("#btnAddNewService").removeClass("disabled");
        } else {
            $("#btnAddNewService").prop("disabled", true);
            $("#btnAddNewService").addClass("disabled");
        }
    }

}

var onClickbtnAddNewService = function () {
    $("#btnAddNewService").off("click").on("click", function (e) {
        turnOffServiceDetail();
        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        if ($("#txtcontactcollection_method").val() != "C" && $("#txtcontactcollection_method").val() != "N") {
            var data = getLocalStorageOptionSetData("collectionmethods");
            var isInvoice = false;
            var isCC = false;

            if (data.collection_methods.length > 0) {
                //for (var collection_method in data.collection_methods.collection_method) {
                for (var i = 0; i < data.collection_methods.length; i++) {
                    if (data.collection_methods[i].collection_method == "N") {
                        isInvoice = true;
                    }
                    if (data.collection_methods[i].collection_method == "C") {
                        isCC = true;
                    }

                }
            }
            if (isInvoice && isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Credit Card or Invoice.");
            }
            if (isInvoice && !isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Invoice.");
            }
            if (!isInvoice && isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Credit Card.");
            }

            $("#divServiceDetailMainError").show();
            return false;
        }
        if (currentServiceTabOpen != "hrefServiceDetails") {
            if ((serviceKey != oldServiceKey)) {
                setTimeout(onClickbtnAddNewService_effects, 4200);
            } else {
                setTimeout(onClickbtnAddNewService_effects, 300);
            }
            $("#hrefServiceDetails").trigger("click");
            var navigateTo = $("#hrefServiceDetails").children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');

        } else {
            onClickbtnAddNewService_effects();
        }

    });
}
var onClickbtnAddNewService_effects = function () {
    saveServiceDetailMode = addOrUpdate.add;
    isInModificationMode = true;

    serviceKey = "";
    serviceStatus = "";
    serviceType = "";
    serviceSummaryVersion = "";
    toggleChkServiceSuspensionFlag();
    //manage deactivate reasons and logic.
    toggleDeactivationReason();
    onClickbtnDeactivateService();

    //manage suspend button label and visibility and click event
    togglebtnSuspendService();
    onClickbtnSuspendService();

    //manage add new service button.
    togglebtnAddNewService();

    //UI permission according to UI matrix
    toggleservicedetailInboxControls_add();

    togglebtnSaveServiceDetailInbox_add_reactivate();

    $("a[id*=servicekey]").toArray().reduce(function (x, element) {
        var $element = $(element);
        if ($element.data("servicetype") == "INBOX" && $element.data("servicestatus").toUpperCase() == "ORDERED") {
            listServiceKeysOfOrderedStatus.push({ servicekey: $element.data("servicekey") });
        }
    }, {});


    $("#tblISPservice_summary tr").removeClass("active1");

    $("#txtservicedetailIphone_number").val("");
    $("#txtservicedetailIsales_group").val("");

    $("#txtservicedetailIphone_city").val("");
    if ($("#txtservicedetailIphone_city").parent().data("toggle")) {
        $("#txtservicedetailIphone_city").unwrap();
    }



    // $("#optservicedetailIsales_rep").val($("#optcontactsales_rep ").val());

    var getFromLocalStorage = getLocalStorageOptionSetData("users");
    if (getFromLocalStorage) {
        for (var i = 0; i < getFromLocalStorage.sales_users.length; i++) {
            if (getFromLocalStorage.sales_users[i].ldap_user_name && $("body").data("ispldapusername") && getFromLocalStorage.sales_users[i].ldap_user_name.toLowerCase() == $("body").data("ispldapusername").toLowerCase()) {
                $("#optservicedetailIsales_rep").val(getFromLocalStorage.sales_users[i].id);
                break;
            }

        }
    }

    $("#txtservicedetailIoffer_code").val("");
    if ($("#txtservicedetailIoffer_code").parent().data("toggle")) {
        $("#txtservicedetailIoffer_code").unwrap();
    }

    if ($("#chkservicedetailIvoice_status_1").is(":checked")) {
        $("#chkservicedetailIvoice_status_1").trigger("click");
    }

    //$("#optservicedetailIprimary_language").val($("optcontactlanguage_code").val()?$("optcontactlanguage_code").val():"0");
    $("#optservicedetailIprimary_language").val("0");
    $("#txtservicedetailIogm_msg_record_len,#txtservicedetailIvoice_msg_record_len").val("3");

    $('#chkservicedetailIem_storage').attr('checked', true);
    $('#chkservicedetailIsecure_storage').attr('checked', false);

    $("#txtservicedetailIcsid").val("");
    $("#optservicedetailIfax_format").val("21");
    $("#optservicedetailIfax_format").trigger("change");

    $("#txtservicedetailIpassword").val("ABCDEF");
    $("#txtservicedetailIserver_id").val("");

    $("#optservicedetailIemail_addresses").empty();

    $("#optservicedetailIemail_addresses").append($("<option>", {
        value: $("#txtcontactemail_address").val(),
        text: $("#txtcontactemail_address").val()
    }));

    $("#divservicedetailIfaxEnabled").removeClass("white red");


    //empty table of current plan detail
    $("#tblISPservice_currentOfferCode > tbody").html("");

    $("#btnService_resetOfferCode").trigger("click");
    //$("#tblISPservice_findOfferCode > tbody").html("");
    getAddNewService_PIN();
    toggleOfferCodeSection();
    toggleSelectDIDSection();
    toggletxtservicedetailIemailaddress();
    togglebtnServiceDetailIEmailAdd();
    toggleoptservicedetailIemail_addresses();
    togglebtnServiceDetailEmailDelete();
    //empty table of select DID.
    $("#tblISPservice_Did > tbody").html("");

    togglechkservicedetailIem_storage();




}
var onClickbtnSaveServiceDetailInbox_add = function () {
    var objservicedetailInbox = new Object();
    objservicedetailInbox.add_inbox_service = new Object();
    objservicedetailInbox.add_inbox_service.reseller_id = $("#txtservicedetailIreseller_id").val();


    objservicedetailInbox.add_inbox_service.sales_userid = $("#optservicedetailIsales_rep").val();
    objservicedetailInbox.add_inbox_service.pin = $("#txtservicedetailIpin").val();

    objservicedetailInbox.add_inbox_service.csid = $("#txtservicedetailIcsid").val();
    objservicedetailInbox.add_inbox_service.voice_status_1 = $("#chkservicedetailIvoice_status_1").is(":checked")
    objservicedetailInbox.add_inbox_service.prompt_language_code_1 = ($("#optservicedetailIprimary_language").val() ? $("#optservicedetailIprimary_language").val() : "");
    objservicedetailInbox.add_inbox_service.fax_format_code = $("#optservicedetailIfax_format").val();
    objservicedetailInbox.add_inbox_service.em_storage = $("#chkservicedetailIem_storage").is(":checked")
    objservicedetailInbox.add_inbox_service.secure_storage = $("#chkservicedetailIsecure_storage").is(":checked")
    objservicedetailInbox.add_inbox_service.efx_password = ($("#txtservicedetailIpassword").val() && $("#txtservicedetailIpassword").is(":enabled")) ? $("#txtservicedetailIpassword").val() : null;
    objservicedetailInbox.add_inbox_service.voice_msg_record_len = $("#txtservicedetailIvoice_msg_record_len").val();
    objservicedetailInbox.add_inbox_service.ogm_msg_record_len = $("#txtservicedetailIogm_msg_record_len").val();
    objservicedetailInbox.add_inbox_service.resource_type = serviceResourceType;

    //offer code
    var checkedOC_id = "", checkedOC_offerCode = "";
    $("input[id*=chkService_findOC]").toArray()
        .reduce(function (t, element) {
            if ($(element).is(":checked")) {
                checkedOC_id = $(element).attr("id");
                checkedOC_offerCode = $(element).data("offercode");
            }
        }, "");
    objservicedetailInbox.add_inbox_service.offer_code = checkedOC_offerCode;
    //did
    var checkedDID_id = "", checkedDID_phonenumber = "", checkedDID_phonecity = "";

    $("input[id*=chkService_findDID]").toArray()
        .reduce(function (t, element) {
            if ($(element).is(":checked")) {
                checkedDID_id = $(element).attr("id");
                checkedDID_phonenumber = $(element).data("phonenumber");
                checkedDID_phonecity = $(element).data("phonecity");
            }
        }, "");
    objservicedetailInbox.add_inbox_service.phone_number = String(checkedDID_phonenumber);
    objservicedetailInbox.add_inbox_service.phone_city = String(checkedDID_phonecity);

    //for reactivation
    objservicedetailInbox.add_inbox_service.reactivation_service_key = ((isInReactivationMode) ? String(serviceKey) : "");


    //console.log("inbox service add json:::" + JSON.stringify(objservicedetailInbox));

    postAjaxFunc("customers/" + customerKey + "/services", JSON.stringify(objservicedetailInbox), onSavedServiceDetailInbox_add);
}
var onSavedServiceDetailInbox_add = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailMainError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailMainError").show();
            }
        } else {
            if (isInReactivationMode) {
                onSavedServiceDetailInbox_reactivation_effects(data);
                return false;
            }
            //reset all loaded tabs.
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;
            tabsloaded.events = false;
            tabsloaded.bill_info = false;
            tabsloaded.bill_viewcharges = false;
            tabsloaded.bill_transactionhistory = false;
            tabsloaded.bill_payment = false;
            //get which filter is selected and call change event once again.
            isInModificationMode = false;
            oldModifiedServiceKey = serviceKey;
            haveToChangeSelectedService = true;
            // servicedetailInbox_keypress=false;

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

            $("#tblISPservice_findOfferCode > tbody").html("");
            $("#tblISPservice_Did > tbody").html("");
            $(".tooltip").hide();
            if ($("#btntoggleserviceIfindplan").attr("aria-expanded") == "true") {
                $("#btntoggleserviceIfindplan").trigger("click");
            }
            if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "true") {
                $("#btntoggleserviceItelephone").trigger("click");
            }


            setTimeout(function () {
                var newServiceKeyCreated = "", listServiceKeysOfOrderedStatus_current = [];
                $("a[id*=servicekey]").toArray().reduce(function (x, element) {
                    var $element = $(element);
                    if ($element.data("servicetype") == "INBOX" && $element.data("servicestatus").toUpperCase() == "ORDERED") {
                        listServiceKeysOfOrderedStatus_current.push({ servicekey: $element.data("servicekey") });
                    }
                }, {});

                var newServiceKeyCreated = listServiceKeysOfOrderedStatus_current.filter(function (current) {
                    return listServiceKeysOfOrderedStatus.filter(function (current_b) {
                        return current_b.servicekey == current.servicekey
                    }).length == 0
                });
                saveServiceDetailMode = addOrUpdate.update;
                if (newServiceKeyCreated[0] && newServiceKeyCreated[0].servicekey)
                    $("#servicekey" + newServiceKeyCreated[0].servicekey).trigger("click");
                setTimeout(function () {
                    setTimeout(function () {
                        if (data.success.message) {
                            $("#divServiceDetailMainSuccess").html(" " + data.success.message);
                            $("#divServiceDetailMainSuccess").show();
                            $("#brServiceDetailsMainSuccess").show();
                        }
                        //$("#divServiceDetailMainSuccess").html("<span>Service created successfully.</span>")
                        // $("#divServiceDetailMainSuccess").show();
                        toggletxtservicedetailIemailaddress();
                        haveToChangeSelectedService = false;


                    }, 1500);
                }, 1500);
            }, 1800);
        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailMainError").show();
        }
        else {
            $("#divServiceDetailMainError").html("</br>Request Cancelled.");
            $("#divServiceDetailMainError").show();
            CancelRequest = false;
        }
    }
}
var onSavedServiceDetailInbox_reactivation_effects = function (data) {
    //reset all loaded tabs.
    tabsloaded.contact = false;
    tabsloaded.accountmanagement = false;
    tabsloaded.events = false;
    tabsloaded.bill_info = false;
    tabsloaded.bill_viewcharges = false;
    tabsloaded.bill_transactionhistory = false;
    tabsloaded.bill_payment = false;
    //get which filter is selected and call change event once again.
    isInModificationMode = false;
    isInReactivationMode = false;
    oldModifiedServiceKey = serviceKey;
    servicedetailInbox_keypress=false;
    $("#chkservicesummary_all").prop("checked", true);
    $("#chkservicesummary_all").trigger("change");

    $("#tblISPservice_findOfferCode > tbody").html("");
    $("#tblISPservice_Did > tbody").html("");
    $(".tooltip").hide();

    setTimeout(function () {
        setTimeout(function () {
            if (data.success.message) {
                $("#divServiceDetailMainSuccess").html(" " + data.success.message + "<br/>");
                $("#divServiceDetailMainSuccess").show();
                $("#brServiceDetailsMainSuccess").show();
            }
            //$("#divServiceDetailMainSuccess").html("<span>Service reactivated successfully.</span>")
            // $("#divServiceDetailMainSuccess").show();
            saveServiceDetailMode = addOrUpdate.update;
            hrefServiceDetailsUpdateInboxService(hrefServiceDetailsUpdateInboxServiceRights);
            setTimeout(function () {
                $("#chkservicedetailIvoice_status_1").trigger("change");
                $("#optservicedetailIfax_format").trigger("change");
                $("#chkservicedetailIem_storage").trigger("change");
            }, 2600);
        }, 2500);
    }, 2000);
}
var togglebtnSaveServiceDetailInbox_add_reactivate = function () {
    if (saveServiceDetailMode == addOrUpdate.add || isInReactivationMode) {
        $("#btnSaveServiceDetailInbox").prop("disabled", true);
        $("#btnSaveServiceDetailInbox").addClass("disabled");

        var checkedOC_id = "";
        $("input[id*=chkService_findOC]").toArray()
            .reduce(function (t, element) {
                if ($(element).is(":checked")) {
                    checkedOC_id = $(element).attr("id");
                }
            }, "");

        //did
        var checkedDID_id = "";
        $("input[id*=chkService_findDID]").toArray()
            .reduce(function (t, element) {
                if ($(element).is(":checked")) {
                    checkedDID_id = $(element).attr("id");
                }
            }, "");
        if (checkedOC_id && checkedDID_id) {
            $("#btnSaveServiceDetailInbox").prop("disabled", false);
            $("#btnSaveServiceDetailInbox").removeClass("disabled");
        }
    }
}
//END:: Add new Service functions.


//START: Reactivation functions.

var turnOffServiceReactivationError = function () {
    $("#divServiceDetailReactivateOfferCode").hide();
}

var togglebtnReactivateService = function () {

    $("#btnReactivateService").prop("disabled", true);
    $("#btnReactivateService").addClass("disabled");

    var isCustomerActive = ($("#txthdraccount_status").val().toUpperCase() == "ACTIVE" ? true : false);

    var isAccountBalanceValid = false;

    if (permissionArray.filter(function (x) { return x.id == "reactivateService" })[0].hasRights == "1") {
        var total_main_balance = 0;
        if (String($("#txthdrtotal_main_balance").val()).substr(0, 1) == "(") {
            total_main_balance = -1;
        }
        else {
            total_main_balance = $("#txthdrtotal_main_balance").val().replace(/\D/g, '');
        }

        if (total_main_balance > 0) {
            isAccountBalanceValid = false;
        } else if (total_main_balance < 0) {
            isAccountBalanceValid = true;
        } else {
            isAccountBalanceValid = true;
        }
    } else {
        isAccountBalanceValid = false;
    }


    var isUsageBalanceValid = false;
    var usage_main_balance = 0;
    if (String($("#txthdrtotal_usage_balance").val()).substr(0, 1) == "(") {
        usage_main_balance = -1;
    }
    else {
        usage_main_balance = $("#txthdrtotal_usage_balance").val().replace(/\D/g, '');
    }

    if (usage_main_balance > 0) {
        isUsageBalanceValid = false;
    } else if (usage_main_balance < 0) {
        isUsageBalanceValid = true;
    } else {
        isUsageBalanceValid = true;
    }


    var isSuspensionFlagValid = true;
    $('#divServiceSuspensionFlags :input').each(function () {
        if ($(this).is(":checked")) {
            isSuspensionFlagValid = false;
        }
    });
    if ($("#txtcontactcollection_method").val() == "N") {
        if (!isInReactivationMode && serviceStatus && serviceType && serviceType.toUpperCase() == "INBOX" && $("#optcontactoems").val() != 50 && $("#optcontactoems").val() != 500 && (serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED")) {
            if (isCustomerActive && isSuspensionFlagValid) {
                $("#btnReactivateService").prop("disabled", false);
                $("#btnReactivateService").removeClass("disabled");
            } else if (!isCustomerActive) {
                $("#btnReactivateService").prop("disabled", false);
                $("#btnReactivateService").removeClass("disabled");
            }

        }
    } else {
        if (isAccountBalanceValid && isUsageBalanceValid && !isInReactivationMode && serviceStatus && serviceType && serviceType.toUpperCase() == "INBOX" && $("#optcontactoems").val() != 50 && $("#optcontactoems").val() != 500 && (serviceStatus.toUpperCase() == "INACTIVE" || serviceStatus.toUpperCase() == "CLOSED")) {
            if (isCustomerActive && isSuspensionFlagValid) {
                $("#btnReactivateService").prop("disabled", false);
                $("#btnReactivateService").removeClass("disabled");
            } else if (!isCustomerActive) {
                $("#btnReactivateService").prop("disabled", false);
                $("#btnReactivateService").removeClass("disabled");
            }

        }
    }


}
var onClickbtnReactivateService = function () {
    $("#btnReactivateService").off("click").on("click", function (e) {

        if (isInModificationMode) {
            e.preventDefault();
            e.stopImmediatePropagation();
            showSimpleDialogTabChange(this.id);
            return false;
        }
        //if ($("#txtcontactcollection_method").val() != "C") {
        //    $("#divServiceDetailMainError").html("</br>Collection Method must be Credit Card.");
        //     $("#divServiceDetailMainError").show();
        //     return false;
        //  }
        if ($("#txtcontactcollection_method").val() != "C" && $("#txtcontactcollection_method").val() != "N") {
            var data = getLocalStorageOptionSetData("collectionmethods");
            var isInvoice = false;
            var isCC = false;

            if (data.collection_methods.length > 0) {
                //for (var collection_method in data.collection_methods.collection_method) {
                for (var i = 0; i < data.collection_methods.length; i++) {
                    if (data.collection_methods[i].collection_method == "N") {
                        isInvoice = true;
                    }
                    if (data.collection_methods[i].collection_method == "C") {
                        isCC = true;
                    }

                }
            }
            if (isInvoice && isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Credit Card or Invoice.");
            }
            if (isInvoice && !isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Invoice.");
            }
            if (!isInvoice && isCC) {
                $("#divServiceDetailMainError").html("</br>Payment method must be updated to Credit Card.");
            }

            $("#divServiceDetailMainError").show();
            return false;
        }
        if (currentServiceTabOpen != "hrefServiceDetails") {
            $("#hrefServiceDetails").trigger("click");
            var navigateTo = $("#hrefServiceDetails").children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
            if ((serviceKey != oldServiceKey)) {
                setTimeout(onClickbtnReactivateService_effects, 4500);
            } else {
                setTimeout(onClickbtnReactivateService_effects, 300);
            }

        } else {
            onClickbtnReactivateService_effects();
        }
    });
}
var onClickbtnReactivateService_effects = function () {
    saveServiceDetailMode = addOrUpdate.update;
    isInReactivationMode = true;
    isInModificationMode = true;
    turnOffServiceReactivationError();
    turnOffServiceDetail();
    togglebtnReactivateService();
    $("#divServiceSummaryError").hide();
    $("#divServiceSummarySuccess").hide();
    $("#txtservicedetailDid_city").val("");

    //toggle all controls of service detail section
    toggleservicedetailInboxControls_add(hrefServiceDetailsUpdateInboxServiceRights);
    setTimeout(function () {
        $("#chkservicedetailIvoice_status_1").trigger("change");
        $("#optservicedetailIfax_format").trigger("change");
        $("#chkservicedetailIem_storage").trigger("change");
        togglebtnSaveServiceDetailInbox_add_reactivate();

        var getFromLocalStorage = getLocalStorageOptionSetData("users");
        if (getFromLocalStorage) {
            for (var i = 0; i < getFromLocalStorage.sales_users.length; i++) {
                if (getFromLocalStorage.sales_users[i].ldap_user_name && $("body").data("ispldapusername") && getFromLocalStorage.sales_users[i].ldap_user_name.toLowerCase() == $("body").data("ispldapusername").toLowerCase()) {
                    $("#optservicedetailIsales_rep").val(getFromLocalStorage.sales_users[i].id);
                    break;
                }

            }
        }

    }, 2500);
    toggleOfferCodeSection();
    toggleSelectDIDSection();
    toggletxtservicedetailIemailaddress();
    togglebtnServiceDetailIEmailAdd();
    toggleoptservicedetailIemail_addresses();
    togglebtnServiceDetailEmailDelete();



    //call reactivate_offercode
    $("#tblISPservice_findOfferCode > tbody").html("");
    getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey + "/reactivate_offercode", setReactivateOfferCodeDetails, "");
    if (servicePhoneNumber) {
        getAjaxFunc("lookup/phonesearch?phonenumber=" + servicePhoneNumber + "&reactivateflag=true", setReactivate_findDID, "");
    } else {
        setReactivate_DIDCountry_City();
        $("#tblISPservice_Did > tbody").html("");
        var newrow = $("<tr />");
        $("#tblISPservice_Did").append(newrow);
        newrow.append($("<td colspan=3 style=\"width:90%\"><b>DID not available - Proceed to manual number selection.</b></td>"));
    }

    if ($("#btntoggleserviceItelephone").attr("aria-expanded") == "false") {
        $("#btntoggleserviceItelephone").trigger("click");
    }
    setTimeout(function () {
        var checkedDID_id = "";
        $("input[id*=chkService_findDID]").toArray()
            .reduce(function (t, element) {
                checkedDID_id = $(element).attr("id");
            }, "");
        if (checkedDID_id) {
            $("#" + checkedDID_id).trigger("click");
        }
    }, 5000);
}

var setReactivateOfferCodeDetails = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailReactivateOfferCode").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailReactivateOfferCode").show();
            }
        } else {
            if (data && data.offer_code) {
                $("#tblISPservice_findOfferCode > thead > tr:first-child").removeClass();
                drawService_findOfferCodeRows(data);
                onCheckchkService_findOC();
                if ($("#btntoggleserviceIfindplan").attr("aria-expanded") == "false") {
                    $("#btntoggleserviceIfindplan").trigger("click");
                }
                $("input[id*=chkService_findOC]").trigger("click");
            }

        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divServiceDetailReactivateOfferCode").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divServiceDetailReactivateOfferCode").html("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divServiceDetailReactivateOfferCode").html("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divServiceDetailReactivateOfferCode").show();
        }
        else {
            $("#divServiceDetailReactivateOfferCode").html("</br>Request Cancelled.");
            $("#divServiceDetailReactivateOfferCode").show();
            CancelRequest = false;
        }
    }
}
var setReactivate_findDID = function (data, issuccess) {
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
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\"><b>No DID(s) were Found</b></td>"));
        }
    } else {
        if (!CancelRequest) {
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            if (data.responseJSON.message) {
                newrow.append($("<td colspan=3 style=\"width:90%\"><b>Error:" + data.responseJSON.error + ", Error Message: " + data.responseJSON.message + "</b></td>"));
            }
            if (data.responseJSON.errors) {
                newrow.append($("<td colspan=3 style=\"width:90%\"><b>" + data.responseJSON.errors[0].developer_message + "</b></td>"));
            }
        } else {
            $("#tblISPservice_Did > tbody").html("");
            $("#tblISPservice_Did").append(newrow);
            newrow.append($("<td colspan=3 style=\"width:90%\">Request Cancelled.</td>"));
            CancelRequest = false;
        }
        setReactivate_DIDCountry_City();
    }
}
var setReactivate_DIDCountry_City = function () {
    $("#optservicedetailDid_country").val($("#optcontactcountry").val());

    if (!$("#optservicedetailDid_country").val()) {
        $("#optservicedetailDid_country").val("Select a country");
        $("#txtservicedetailDid_city").val("");
    } else {
        $("#txtservicedetailDid_city").val($("#txtcontactcity").val());
    }

}

//Start gift function
var togglehrefServiceComboGift = function () {

    if ($("#optcontactoems").val() == "2" && serviceType == "INBOX") {
        bindOnClickhrefServiceGift();
    } else {
        removeOnClickhrefServiceGift();
        if ($("#hrefServiceGifts").attr("class") && $("#hrefServiceGifts").attr("class").toUpperCase() == "ACTIVE" && isComboGift) {

            $("#hrefServiceDetails").trigger("click");
            var navigateTo = $("#hrefServiceDetails").children().attr("href");
            $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
        }
    }
    if ($("#optcontactoems").val() != "2") {

        bindOnClickhrefServiceGift();


    }

}

var togglebtnComboGift = function () {
    if (isComboGift) {
        if (serviceStatus.toUpperCase() == "ACTIVE" && serviceType == "INBOX" && $("#txthdrnext_charge_date").val()) {
            $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            //$("#txtservicegiftend_date").removeAttr("disabled");
        } else {
            $("#btnAddGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            //   $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
        }
    } else {
        if (serviceStatus.toUpperCase() == "ACTIVE" && (serviceType == "INBOX" || serviceType == "SEND") && $("#txthdrnext_charge_date").val()) {
            $("#btnAddGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            $("#btnSaveGift").removeAttr("disabled").attr({ "class": "grey-btn" });
            //  $("#txtservicegiftend_date").removeAttr("disabled");

        } else {
            $("#btnAddGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            $("#btnSaveGift").attr("disabled", "disabled").attr({ "class": "grey-btn disabled" });
            // $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
        }
    }

    //if($("#txthdrnext_charge_date").val()){
    //     $("#txtservicegiftend_date").removeAttr("disabled");
    // }else{
    //     $("#txtservicegiftend_date").attr({ "disabled": "disabled" });
    //}


}
var removeOnClickhrefServiceGift = function () {
    $("#hrefServiceGifts > a").css({
        "pointer-events": "none",
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceGifts").css({
        "color": "#d6d6d6 !important"
    });
    $("#hrefServiceGifts").off("click").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    });
}
var bindOnClickhrefServiceGift = function () {
    $("#hrefServiceGifts > a").css({
        "pointer-events": "auto",
        "color": "#000 !important"
    });
    $("#hrefServiceGifts").off("click").on("click", function (e) {
        if ((currentTabOpen != "tabsloaded.services_gifts" && serviceKey) || (serviceKey != oldServiceKey)) {
            if (isInModificationMode) {
                e.preventDefault();
                e.stopImmediatePropagation();
                showSimpleDialogTabChange("#hrefServiceGifts");
                return false;
            } else {
                currentTabOpen = "tabsloaded.services_gifts";
                currentServiceTabOpen = "hrefServiceGifts";
                turnoffTransferAmountError();
                turnoffReorderAmountError();
                turnOffServiceDetail();
                turnOffGiftErrors();


                if (!tabsloaded.services_gifts) {
                    callPermissionAPI(["hrefServiceGifts"]);
                    tabsloaded.services_gifts = true;
                    getGiftsGrid();
                }
            }
        }
    });
}

//END : Gift functions
//END: Reactivation functions.

//END:: Service Detail modification functionalities

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
var getService_numberActivationSummary = function () {
    getAjaxFunc("/customers/" + customerKey + "/services/activation_summary", setService_numberActivationSummary, "");
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
    $("#txtservicenumber_lessappliedcredit").off("keypress").on("keypress", function (event) {

        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return true;
        }

        if ($(this).val().length >= 9) {
            $(this).val($(this).val().substring(0, 9));
        }
        return isDecimal(event) && ($(this).val().length >= 9 ? false : true)
    });
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
    });
    $("#txtservicenumber_lessappliedcredit").off("keyup").on("keyup", function (e) {
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

    });
    $("#txtservicenumber_additionalUsageBalance").off("change").on("change", function (e) {
        var $additionalUsageBalance = $("#txtservicenumber_additionalUsageBalance");
        var $additionalUsageBalanceval = parseFloat($additionalUsageBalance.val()) ? parseFloat($additionalUsageBalance.val()) : parseFloat(0);
        $additionalUsageBalance.val($additionalUsageBalanceval.toFixed(currency_decimalplaces));
        var nArray = $additionalUsageBalance.val().split('.');
        if (nArray[0].length > 6) {
            //console.log("nArray[0] substring :: " + nArray[0].substring(0, 6));
            nArray[0] = nArray[0].substring(0, 6);
            $additionalUsageBalance.val(nArray[0] + "." + nArray[1]);
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
    var $amountpayable = $("#txtservicenumber_amountpayable");

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
    $finalamount.val((parseFloat($amountpayable.val()) - parseFloat($lessappliedcreditval)).toFixed(currency_decimalplaces));
    togglevalueofbtnService_chargeactivate((parseFloat($finalamount.val()) > 0));
    togglebtnService_skipactivate((parseFloat($finalamount.val()) > 0));

    var paid_amount = parseFloat($("#txtservicenumber_amountpayable").val());
    if (parseFloat($("#txtservicenumber_lessappliedcredit").val()) > paid_amount) {
        $("#txtservicenumber_lessappliedcredit").val(paid_amount);
        $("#txtservicenumber_lessappliedcredit").trigger("keyup");
    }
}

var togglevalueofbtnService_chargeactivate = function (isFinalAmountGreaterThanZero) {
    if (isFinalAmountGreaterThanZero) {
        $("#btnService_chargeactivate").val("Charge/Activate");
    } else {
        $("#btnService_chargeactivate").val("Activate");
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


//charge/payment in number activation tab.
var onClickbtnService_chargeactivate = function () {
    $("#btnService_chargeactivate").off("click").on("click", function () {
        var objNumber_activation = new Object();
        objNumber_activation.usage_balance = ($("#txtservicenumber_additionalUsageBalance").val() ? $("#txtservicenumber_additionalUsageBalance").val() : 0);
        objNumber_activation.less_applied_credit = ($("#txtservicenumber_lessappliedcredit").val() ? $("#txtservicenumber_lessappliedcredit").val() : 0);

        postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=false", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");
    });
}
var onClickbtnService_skipactivate = function () {
    $("#btnService_skipactivate").off("click").on("click", function () {
        var objNumber_activation = new Object();
        objNumber_activation.usage_balance = ($("#txtservicenumber_additionalUsageBalance").val() ? $("#txtservicenumber_additionalUsageBalance").val() : 0);
        objNumber_activation.less_applied_credit = ($("#txtservicenumber_lessappliedcredit").val() ? $("#txtservicenumber_lessappliedcredit").val() : 0);

        postAjaxFunc("/customers/" + customerKey + "/services/number_activation?skip_payment=true", JSON.stringify(objNumber_activation), onSavedNumberActivation, "");
    });
}
var onSavedNumberActivation = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divServiceDetailMainError").html("</br>" + data.errors[0].developer_message);
                $("#divServiceDetailMainError").show();
            }
        } else {
            //get which filter is selected and call change event once again.
            tabsloaded.contact = false;
            tabsloaded.accountmanagement = false;
            tabsloaded.events = false;
            tabsloaded.bill_info = false;
            tabsloaded.bill_viewcharges = false;
            tabsloaded.bill_transactionhistory = false;
            tabsloaded.services_gifts = false;
            tabsloaded.services_faxusagehistory = false;
            tabsloaded.customer = false;

            isInModificationMode = false;
            oldModifiedServiceKey = serviceKey;

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
            setTimeout(getHeaderInformation, 300);
            if ($("#txtMainSearch").val()) {

                $("#btnMainSearch").trigger("click");
            }
            if ($("#txtMainQSearch").val()) {

                $("#btnMainQSearch").trigger("click");
            }
            else {
                $("#chkservicesummary_all").prop("checked", true);
                $("#chkservicesummary_all").trigger("change");
            }
            setTimeout(getHeaderInformation, 300);

            setTimeout(function () {
                $("#hrefServiceDetails").trigger("click");
                var navigateTo = $("#hrefServiceDetails").children().attr("href");
                $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');
                getServiceSuspedFlags();
                setTimeout(function () {
                    $("#servicekey" + oldModifiedServiceKey).trigger("click");
                    setTimeout(function () {
                        setTimeout(togglehrefServiceNumberActivation, 1000);

                        $("#divServiceDetailMainSuccess").html("<span>Service(s) activated.</span>")
                        $("#divServiceDetailMainSuccess").show();
                    }, 2200);
                }, 1200)
            }, 1000);
        }
    } else {
        if (!CancelRequest) {
            if (isInArray(preAuthDecline, data.responseJSON.errors[0].error_code)) {
                $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                $("#divServiceDetailMainError").append("<span><a id='hrefGoToPaymenttab' href=\"#Payments\">Click here to Update Payment Information.</a></span>")
                onClickhrefGoToPaymenttab();
            } else {
                if (data.responseJSON.errors[0].user_message) {
                    if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                        $("#divServiceDetailMainError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                    } else {
                        $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].user_message);
                        if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("credit card") > -1) {
                            $("#divServiceDetailMainError").append("<span><a id='hrefGoToPaymenttab' href=\"#Payments\">Click here to Update Payment Information.</a></span>")
                            onClickhrefGoToPaymenttab();
                        }
                    }
                } else {
                    $("#divServiceDetailMainError").html("</br>" + data.responseJSON.errors[0].developer_message);
                }
            }
            $("#divServiceDetailMainError").show();
        }
        else {
            $("#divServiceDetailMainError").html("</br>Request Cancelled.");
            $("#divServiceDetailMainError").show();
            CancelRequest = false;
        }
    }
}
var onClickhrefGoToPaymenttab = function () {
    $("#hrefGoToPaymenttab").off("click").on("click", function () {
        $("#hrefBilling").trigger("click");
        var navigateTo = $("#hrefBilling").children().attr("href");
        $('.nav-tabs a[href="' + navigateTo + '"]').tab('show');

        $("#hrefBilling_payments").trigger("click");
        var navigateTo2 = $("#hrefBilling_payments").children().attr("href");
        $('.nav-tabs a[href="' + navigateTo2 + '"]').tab('show');
    });
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
var onClickbtnAccountTransanctionExportExcel = function () {
    $("#btnAccountTransanctionExportExcel").off("click").on("click", function () {

        var $txtbillVCCfromtofilter = $("#txtbillVCCfromtofilter").val()
        if ($txtbillVCCfromtofilter) {
            var $txtbillVCCfromtofilter_split = $txtbillVCCfromtofilter.split('-');
            startDateJournal = moment($txtbillVCCfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateJournal = moment($txtbillVCCfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadExcelFile("customers/" + customerKey + "/journals/export?exportType=excel&startDate=" + startDateJournal + "&endDate=" + endDateJournal, "AccountTransaction" + + moment().unix() + ".xlsx");

        } else {
            downloadExcelFile("customers/" + customerKey + "/journals/export?exportType=excel", "AccountTransaction" + + moment().unix() + ".xlsx");
        }

    });
}
var onClickbtnAccountTransanctionExportCSV = function () {
    $("#btnAccountTransanctionExportCSV").off("click").on("click", function () {
        var $txtbillVCCfromtofilter = $("#txtbillVCCfromtofilter").val()
        if ($txtbillVCCfromtofilter) {
            var $txtbillVCCfromtofilter_split = $txtbillVCCfromtofilter.split('-');
            startDateJournal = moment($txtbillVCCfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDateJournal = moment($txtbillVCCfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadCSVFile("customers/" + customerKey + "/journals/export?exportType=csv&startDate=" + startDateJournal + "&endDate=" + endDateJournal, "AccountTransaction" + + moment().unix() + ".csv");

        } else {
            downloadCSVFile("customers/" + customerKey + "/journals/export?exportType=csv", "AccountTransaction" + + moment().unix() + ".csv");
        }

    });
}


var onClickbtnBillInvoiceExportExcel = function () {
    $("#btnBillInvoiceExportExcel").off("click").on("click", function () {

        var $txtbillfromtofilter = $("#txtbillInvoicefromtofilter").val()
        if ($txtbillfromtofilter) {
            var $txtbillfromtofilter_split = $txtbillfromtofilter.split('-');
            startDate = moment($txtbillfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDate = moment($txtbillfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadExcelFile("customers/" + customerKey + "/invoices/export?exportType=excel&startDate=" + startDate + "&endDate=" + endDate, "InvoiceSummary" + + moment().unix() + ".xlsx");

        } else {
            downloadExcelFile("customers/" + customerKey + "/invoices/export?exportType=excel", "InvoiceSummary" + + moment().unix() + ".xlsx");
        }

    });
}
var onClicbtnBillinvoiceExportCSV = function () {
    $("#btnBillinvoiceExportCSV").off("click").on("click", function () {
        var $txtbillfromtofilter = $("#txtbillInvoicefromtofilter").val()
        if ($txtbillfromtofilter) {
            var $txtbillfromtofilter_split = $txtbillfromtofilter.split('-');
            startDate = moment($txtbillfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDate = moment($txtbillfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadCSVFile("customers/" + customerKey + "/invoices/export?exportType=csv&startDate=" + startDate + "&endDate=" + endDate, "InvoiceSummary" + + moment().unix() + ".csv");

        } else {
            downloadCSVFile("customers/" + customerKey + "/invoices/export?exportType=csv", "InvoiceSummary" + + moment().unix() + ".csv");
        }

    });
}


var onClickbtnServiceFaxUsageExportExcel = function () {
    $("#btnServiceFaxUsageExportExcel").off("click").on("click", function () {

        var $txtfromtofilter = $("#txtserviceFaxUsagefromtofilter").val()
        if ($txtfromtofilter) {
            var $txtfromtofilter_split = $txtfromtofilter.split('-');
            startDate = moment($txtfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDate = moment($txtfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadExcelFile("customers/" + customerKey + "/services/" + serviceKey + "/usage/export?exportType=excel&startDate=" + startDate + "&endDate=" + endDate + "&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, "FaxUsageHistory" + + moment().unix() + ".xlsx");

        } else {
            downloadExcelFile("customers/" + customerKey + "/services/" + serviceKey + "/usage/export?exportType=excel&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, "FaxUsageHistory" + moment().unix() + ".xlsx");
        }

    });
}
var onClickbtnServiceFaxUsageExportCSV = function () {
    $("#btnServiceFaxUsageExportCSV").off("click").on("click", function () {
        var $txtfromtofilter = $("#txtserviceFaxUsagefromtofilter").val()
        if ($txtfromtofilter) {
            var $txtfromtofilter_split = $txtfromtofilter.split('-');
            startDate = moment($txtfromtofilter_split[0].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');
            endDate = moment($txtfromtofilter_split[1].trim(), 'MM/DD/YYYY').format('YYYY-MM-DD');

            downloadExcelFile("customers/" + customerKey + "/services/" + serviceKey + "/usage/export?exportType=csv&startDate=" + startDate + "&endDate=" + endDate + "&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, "FaxUsageHistory" + + moment().unix() + ".csv");

        } else {
            downloadExcelFile("customers/" + customerKey + "/services/" + serviceKey + "/usage/export?exportType=csv&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, "FaxUsageHistory" + moment().unix() + ".csv");
        }

    });
}

var onExportDataRetrieved = function (issuccess, data) {
    if (issuccess) {
        if (data) {
            //var downloaddata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
            var dl = document.createElement('a');
            dl.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
            dl.setAttribute('download', 'filename.txt');
            dl.click();

        }
    }
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

//START:: Account Management Tab
var getAccountManagement = function () {

    setDateTimePicker("txtaccmanageaccount_tentative_close_date");
    $("#txtaccmanageaccount_tentative_close_date").val('');
    onClickbtnaccmanageSaveCloseAccount();
    clearControlsAccountManagement();
    // onChangeCloseAccount();

    setTimeout(function () {
        setCloseAccountFields();
        onChangeCloseAccountTab();
        //onChangeCloseAccount();
    }, 2000);
    // setTimeout(function () {

    // $("#txtaccmanageaccount_tentative_close_date").trigger("change");
    //}, 1000);
}

var setCloseAccountFields = function () {
    if (closeOnDate) { //accountStatus == "INACTIVE"
        // if (closeOnDate)
        $("#txtaccmanageaccount_tentative_close_date").val(moment(closeOnDate).format("MM/DD/YYYY hh:mm:ss A"));
        closeDateval = moment(closeOnDate).format("MM/DD/YYYY hh:mm:ss A");
        // $("#txtaccmanageaccount_tentative_close_date").prop("disabled", true);
        $("#optaccmanageclose_reason").val(closeReasonCode);
        //  $("#btnaccmanageSaveCloseAccount").prop("disabled", true);
        // $("#btnaccmanageSaveCloseAccount").addClass("disabled");
    } else {
        $("#txtaccmanageaccount_tentative_close_date").prop("disabled", false);
        $("#optaccmanageclose_reason").prop("disabled", false);
        $("#btnaccmanageSaveCloseAccount").prop("disabled", false);
        $("#btnaccmanageSaveCloseAccount").removeClass("disabled");
    }
}

var clearControlsAccountManagement = function () {
    turnOffAccountManagementErrors();
    $("#txtaccmanageaccount_tentative_close_date").val('');
    $("#optaccmanageclose_reason").val("");
}

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


function getCloseReasonOptionSet() {
    var getFromLocalStorage = getLocalStorageOptionSetData("close_reasons");
    if (getFromLocalStorage === "") {
        getAjaxFunc("lookup/close_reasons", setCloseReasonOptionSetsFunc, "");
    }
    else {
        setCloseReasonOptionSetsFunc(getFromLocalStorage, true);
    }
}
function setCloseReasonOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.close_reasons) {
            if (getLocalStorageOptionSetData("close_reasons") === "") {
                setLocalStorageOptionSetData("close_reasons", data);
            }
            setOptionSets(data.close_reasons, "#optaccmanageclose_reason", "", "cancel_code", "description", true);
        }
    }
}


function getAdjustmentAccountCodeOptionSet() {
    //var getFromLocalStorage = getLocalStorageOptionSetData("adjustment_accountcode");
    // if (getFromLocalStorage === "") {
    getAjaxFunc("/customers/" + $("#txthdrid").val() + "/adjustment", setAdjustmentAccountCodeOptionSetsFunc, "");
    // }
    //else {
    //setAdjustmentAccountCodeOptionSetsFunc(getFromLocalStorage, true);
    //}
}
function setAdjustmentAccountCodeOptionSetsFunc(data, issuccess) {
    if (issuccess) {
        if (data.account_codes) {
            //if (getLocalStorageOptionSetData("adjustment_accountcode") === "") {
            setLocalStorageOptionSetData("adjustment_accountcode", data);
            //}
            setOptionSetsForceDefaultValue(data.account_codes, "#optbillATaccount_code", "Select", "description", "code", "Select");
            // $("#txtbillATadjustment_description").val(data.account_codes[0].description);
            //$("#txtbillATadjustment_description").attr("title", data.account_codes[0].description);

        }
    }
}

var turnoffAccountUnlockErros = function () {

    $("#divAccountUnlockedMainError").hide()
    $("#divAccountUnlockedMainSuccess").hide();
}
var turnOffAccountManagementErrors = function () {
    $("div[id*=lblErraccmanage]").hide();
    $("#divAccountManagementError").html("Error: Invalid Data. <span>Review all error messages below to correct your data.</span>");
    $("#divAccountManagementError").hide()
    $("#divAccountManagementSuccess").hide();
    $("input[id*=txtaccmanage],select[id*=optaccmanage]").removeClass("error");
}

/*var onChangeCloseAccount = function () {
    $("select[id*=optaccmanage]").off("change").on("change", function () {
        //if ($("#txtaccmanageaccount_tentative_close_date").val() || $("#optaccmanageclose_reason").val()) {
       //     isInModificationMode = true;
       // } else {
        //    isInModificationMode = false;
        //}
         $("#txtaccmanageaccount_tentative_close_date").trigger("change");
    });
}*/

var validateCloseAccount = function () {
    var closeAccountHasError = false;
    var txtaccmanage = $("input[id*=txtaccmanage],select[id*=optaccmanage]");
    txtaccmanage.each(function () {
        //$(this).val($.trim($(this).val()));
        if (!this.checkValidity()) {
            closeAccountHasError = true;
            $(this).addClass("error");
            var lblid = this.id.replace("txt", "").replace("opt", "");
            if (errorsAccountManagement["err" + lblid]) {
                $("div[id=lblErr" + lblid + "]").html(errorsAccountManagement["err" + lblid]).show();
            }
        }
    });
    if (closeAccountHasError) {
        $("#divAccountManagementError").show();
        return false;
    }
    else {
        return true;
    }

}

var onClickbtnaccmanageSaveCloseAccount = function () {
    $("#btnaccmanageSaveCloseAccount").off("click").on("click", function () {
        turnOffAccountManagementErrors();
        if (isInModificationMode) {
            if (validateCloseAccount()) {
                objCloseAccount = new Object();
                objCloseAccount.account_tentative_close_date = moment.utc($("#txtaccmanageaccount_tentative_close_date").val()).toISOString();
                objCloseAccount.cancel_code = $("#optaccmanageclose_reason").val();
                objCloseAccount.version = $("#txtcontactversion").val();
                tabsloaded.events = false;
                closeDateval = $("#txtaccmanageaccount_tentative_close_date").val();

                putAjaxFunc("customers/" + customerKey + "/close_account", JSON.stringify(objCloseAccount), onSavedCloseAccount, "");
            }
        } else {
            $("#divAccountManagementError").html("No changes to save");
            $("#divAccountManagementError").show();
        }
    });
}

var onSavedCloseAccount = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divAccountManagementError > span").append("</br>" + data.errors[0].developer_message);
                $("#divAccountManagementError").show();
            }
        }
        else {

            $("#divAccountManagementSuccess").show();
            accountmanagement_form_keypress = false;
            isInModificationMode = false;
            isCloseDateApplied = false;
            getContactDetails();


        }
    } else {
        if (!CancelRequest) {
            if (data.responseJSON.errors[0].user_message) {
                if (data.responseJSON.errors[0].user_message.toLowerCase().indexOf("please refresh") == 0) {
                    $("#divAccountManagementError").html(data.responseJSON.errors[0].user_message + "<span></span>");
                } else {
                    $("#divAccountManagementError > span").append("</br>" + data.responseJSON.errors[0].user_message);
                }
            } else {
                $("#divAccountManagementError > span").append("</br>" + data.responseJSON.errors[0].developer_message);
            }
            $("#divAccountManagementError").show();
        }
        else {
            $("#divAccountManagementError > span").append("</br>Request Cancelled.");
            $("#divAccountManagementError").show();
            CancelRequest = false;
        }

    }

}

    //END:: Account Management Tab
    ;
//START:: Service Usage Tab Edit--Usage Transfer Balances

var disablebalancetransfercontrols = function () {
    $("#txtserviceusagetransferamount").attr({ "disabled": "disabled" });
    $("#btnserviceusageTransferUsage").prop("disabled", true);
    $("#btnserviceusageTransferUsage").addClass("disabled");
    $("input[name='chkbalancetransfer']").attr('disabled', true);

}

var enabledbalancetransfercontrols = function () {
    $("#txtserviceusagetransferamount").removeAttr("disabled").removeClass("disabled");
    $("input[name='chkbalancetransfer']").attr('disabled', false);
    toggletxtserviceusagetransferamount();

}
var toggletxtserviceusagetransferamount = function () {
    var mainbal = Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, ""));
    var usagebal = Number($("#txthdrpaid_balance").val().replace(/[^0-9\.]+/g, ""));

    if ((isMainToUsageTransfer ? $("#txthdrtotal_main_balance").val().substr(0, 1) != "(" : $("#txthdrpaid_balance").val().substr(0, 1) == "(") || $("#txtcontactcollection_method").val() == "P") {
        $("#txtserviceusagetransferamount").attr({ "disabled": "disabled" });
    } else {
        $("#txtserviceusagetransferamount").removeAttr("disabled").removeClass("disabled");
    }

    if ($("#txthdrtotal_main_balance").val().substr(0, 1) != "(" || $("#txtcontactcollection_method").val() == "P") {
        $("#chkbalancetransfermaintousage").attr("disabled", true);
    } else {
        $("#chkbalancetransfermaintousage").attr("disabled", false);
    }
    if ($("#txthdrpaid_balance").val().substr(0, 1) == "(" || usagebal <= 0 || $("#txtcontactcollection_method").val() == "P") {
        $("#chkbalancetransferusagetomain").attr("disabled", true);
    } else {
        $("#chkbalancetransferusagetomain").attr("disabled", false);
    }

}

function changeRadioForTransfer() {
    if ($("#chkbalancetransferusagetomain").is(':enabled')) {
        $("#chkbalancetransferusagetomain").prop('checked', true);
        $("#txtserviceusagetransferamount").removeAttr("disabled").removeClass("disabled");
    }
    if ($("#chkbalancetransfermaintousage").is(':enabled')) {
        $("#chkbalancetransfermaintousage").prop('checked', true);
        $("#txtserviceusagetransferamount").removeAttr("disabled").removeClass("disabled");
    }
    if ($("input[name='chkbalancetransfer']:checked").val() == "usagetomain") {
        isMainToUsageTransfer = false;
    } else {
        isMainToUsageTransfer = true;
    }
    $("#txtserviceusagetransferamount").trigger("change");
}

function validatetxtserviceusagetransferamount() {
    $("#txtserviceusagetransferamount").attr({ "pattern": "/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/" });
    TextLimit($("#txtserviceusagetransferamount"), 10);
}

var onKeyPresstxtTransferAmount = function () {
    $("#txtserviceusagetransferamount").off("keypress").on("keypress", function (event) {
        return isNumberKey(event);
    });
    $("#txtserviceusagetransferamount").off("paste").on("paste", function (event) {
        return false;
    });


}

var onChangetxtserviceusagetransferamount = function () {
    $("#txtserviceusagetransferamount").off("keyup").on("keyup", function () {
        var tbal = CurrencyFormatted($("#txtserviceusagetransferamount").val());
        if (tbal > 0 && tbal <= Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, ""))) {
            $("#btnserviceusageTransferUsage").prop("disabled", false);
            $("#btnserviceusageTransferUsage").removeClass("disabled");
        } else {
            $("#btnserviceusageTransferUsage").prop("disabled", true);
            $("#btnserviceusageTransferUsage").addClass("disabled");
        }
        if (!isMainToUsageTransfer && tbal > 0) {
            if (tbal <= Number($("#txthdrpaid_balance").val().replace(/[^0-9\.]+/g, ""))) {
                $("#btnserviceusageTransferUsage").prop("disabled", false);
                $("#btnserviceusageTransferUsage").removeClass("disabled");
            } else {
                $("#btnserviceusageTransferUsage").prop("disabled", true);
                $("#btnserviceusageTransferUsage").addClass("disabled");
            }
        }
    });
}

function onChangeTransferRadioButton() {
    // $("input[name=chkbalancetransfer]:radio").change(function () {
    $("input[name=chkbalancetransfer]:radio").off("change").on("change", function (e) {
        //console.log("check change transfer radio");
        $("#txtserviceusagetransferamount").val("");
        $("#btnserviceusageTransferUsage").prop("disabled", true);
        $("#btnserviceusageTransferUsage").addClass("disabled");
        turnoffTransferAmountError();
        if ($("input[name='chkbalancetransfer']:checked").val() == "usagetomain") {
            isMainToUsageTransfer = false;
        } else {
            isMainToUsageTransfer = true;
        }
        $("#txtserviceusagetransferamount").trigger("change");
        toggletxtserviceusagetransferamount();
    });

}

var turnoffTransferAmountError = function () {
    $("#divTransferUsageAmountError").hide();
    $("#txtserviceusagetransferamount").removeClass("error");
    $("#divTransferUsageAmountSuccess").hide();
}

var onClickbtnserviceusageTransferUsage = function () {
    $("#btnserviceusageTransferUsage").off("click").on("click", function () {
        turnoffTransferAmountError();
        turnoffReorderAmountError();
        if (validateTransferAmount()) {
            objtranferamount = new Object();
            objtranferamount.transfer = new Object();
            if (isMainToUsageTransfer) {
                objtranferamount.transfer.usage = new Object();
                objtranferamount.transfer.usage.amount = $("#txtserviceusagetransferamount").val();
                putAjaxFunc("customers/" + customerKey + "/usage_transfer", JSON.stringify(objtranferamount), transferBalanceSuccessfull, "");
            } else {
                objtranferamount.transfer.main = new Object();
                objtranferamount.transfer.main.amount = parseFloat($("#txtserviceusagetransferamount").val());
                putAjaxFunc("customers/" + customerKey + "/usage_transfer", JSON.stringify(objtranferamount), transferBalanceSuccessfull, "");

            }
        }

    });

}

function onkeypressTransferBalance() {

    $("input[id*=chkbalancetransfer],input[id*=txtserviceusagetransferamount]").off("focusin").on("focusin", function () {
        turnoffReorderAmountError();
        if (!bal_transfer_form_keypress) {
            // var txtreorder = $("select[id*=optserviceusagereorder_amount]");
            // txtreorder.each(function () {
            //    $(this).val($.trim($(this).val()));
            //});

            bal_transfer_form_keypress = true;
            var original_formArr = $('#baltransfer :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            baltransferform_original_data = $.param(original_formArr);

            // reorder_original_data_array = original_formArr;
        }



    });
}

function onChangeTransferBalance() {

    $("input[id*=chkbalancetransfer],input[id*=txtserviceusagetransferamount]").off("keypress").on("keypress", function () {
        turnoffTransferAmountError();
        var formArr = $('#baltransfer :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            //if (formArr[i].name === "opteventsevent_type") {
            //     formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            // } else {
            formArr[i].value = $.trim(field.value);

            // }

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (bal_transfer_form_keypress) {
            if (serializedForm != baltransferform_original_data) {
                isInModificationMode = true;
                disableReorderControls();
            }
            else {
                isInModificationMode = false;
                enableReorderControls();
            }
            //onChangeTransferRadioButton();
        }

    });
    $("input[id*=chkbalancetransfer],input[id*=txtserviceusagetransferamount]").off("keyup").on("keyup", function () {
        turnoffTransferAmountError();
        var formArr = $('#baltransfer :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            //if (formArr[i].name === "opteventsevent_type") {
            //     formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            // } else {
            formArr[i].value = $.trim(field.value);

            // }

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (bal_transfer_form_keypress) {
            if (serializedForm != baltransferform_original_data) {
                isInModificationMode = true;
                disableReorderControls();
            }
            else {
                isInModificationMode = false;
                enableReorderControls();
            }
            //   onChangeTransferRadioButton();
        }

    });
    $("input[id*=txtserviceusagetransferamount]").off("change").on("change", function () {
        var formArr = $('#baltransfer :input').serializeArray();

        jQuery.each(formArr, function (i, field) {
            // if (formArr[i].name === "opteventsevent_type") {
            //    formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            // } else {
            formArr[i].value = $.trim(field.value);
            //}

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (bal_transfer_form_keypress) {
            if (serializedForm != baltransferform_original_data) {
                isInModificationMode = true;
                disableReorderControls();
            }
            else {
                isInModificationMode = false;
                enableReorderControls();
            }

            if (!$("#txtserviceusagetransferamount").val()) {
                isInModificationMode = false;
            }
            // onChangeTransferRadioButton();
            // onChangeTransferRadioButton();
        }
    });
}

function onkeypressCloseAccount() {

    $("input[id*=txtaccmanage],select[id*=optaccmanage]").off("focusin").on("focusin", function () {
        turnOffAccountManagementErrors();
        if (!accountmanagement_form_keypress) {
            //var txtreorder = $("select[id*=optserviceusagereorder_amount]");
            // txtreorder.each(function () {
            //     $(this).val($.trim($(this).val()));
            // });

            accountmanagement_form_keypress = true;
            var original_formArr = $('#AccountManagement :input').serializeArray();
            // jQuery.each(original_formArr, function (i, field) {
            //     original_formArr[i].value = $.trim(field.value);
            // });

            jQuery.each(original_formArr, function (i, field) {
                if (original_formArr[i].name === "txtaccmanageaccount_tentative_close_date") {
                    original_formArr[i].value = $.trim($("#txtaccmanageaccount_tentative_close_date").val().replace("AM", ""));
                    original_formArr[i].value = original_formArr[i].value.replace("PM", "");
                } else {
                    original_formArr[i].value = $.trim(field.value);
                }

            });

            accountmanagementform_original_data = $.param(original_formArr);
            //reorder_original_data_array = original_formArr;
        }
    });
}
function onChangeCloseAccountTab() {

    $("input[id*=txtaccmanage],select[id*=optaccmanage]").off("keyup").on("keyup", function () {
        turnOffAccountManagementErrors();
        //var disabled = $('#usages').find(':input:disabled').removeAttr('disabled');
        var formArr = $('#AccountManagement :input').serializeArray();
        // disabled.attr('disabled', 'disabled');
        ///if (!$("#chkserviceusageauto_reorder").is(':checked')) {
        //    formArr.push({ "name": "chkserviceusageauto_reorder", "value": "off" });
        //  }
        //
        jQuery.each(formArr, function (i, field) {
            if (formArr[i].name === "txtaccmanageaccount_tentative_close_date") {
                formArr[i].value = $.trim($("#txtaccmanageaccount_tentative_close_date").val().replace("AM", ""));
                formArr[i].value = formArr[i].value.replace("PM", "");
            } else {
                formArr[i].value = $.trim(field.value);
            }

        });
        var serializedForm = $.param(formArr);

        serializedForm;

        if (accountmanagement_form_keypress) {
            if (serializedForm != accountmanagementform_original_data) {
                isInModificationMode = true;
                //disablebalancetransfercontrols();
            }
            else {
                isInModificationMode = false;
                // enabledbalancetransfercontrols();
            }

        }

    });
    $("input[id*=txtaccmanage],select[id*=optaccmanage]").off("change").on("change", function () {
        //var formArr; //= $('#usages :input').serializeArray();
        //var disabled = $('#usages').find(':input:disabled').removeAttr('disabled');
        var formArr = $('#AccountManagement :input').serializeArray();
        //  disabled.attr('disabled', 'disabled');
        //if (!$("#chkserviceusageauto_reorder").is(':checked')) {
        //    formArr.push({ "name": "chkserviceusageauto_reorder", "value": "off" });
        //}
        jQuery.each(formArr, function (i, field) {
            if (formArr[i].name === "txtaccmanageaccount_tentative_close_date") {
                formArr[i].value = $.trim($("#txtaccmanageaccount_tentative_close_date").val().replace("AM", ""));
            } else {
                formArr[i].value = $.trim(field.value);
            }

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (accountmanagement_form_keypress) {
            if (serializedForm != accountmanagementform_original_data) {
                isInModificationMode = true;
                // disablebalancetransfercontrols();
            }
            else {
                isInModificationMode = false;
                // enabledbalancetransfercontrols();

            }

        }
    });
}




function onkeypressReorderAmount() {

    $("input[id*=chkserviceusageauto_reorder],select[id*=optserviceusagereorder_amount]").off("focusin").on("focusin", function () {
        turnoffReorderAmountError();
        if (!reorder_form_keypress) {
            // var txtreorder = $("select[id*=optserviceusagereorder_amount]");
            // txtreorder.each(function () {
            //     $(this).val($.trim($(this).text()));
            // });

            reorder_form_keypress = true;
            var original_formArr = $('#usages :input').serializeArray();
            jQuery.each(original_formArr, function (i, field) {
                original_formArr[i].value = $.trim(field.value);
            });
            reorderform_original_data = $.param(original_formArr);
            //reorder_original_data_array = original_formArr;
        }
    });
}

var onChangeoptserviceusagereorder_amount = function () {
    $("#optserviceusagereorder_amount").off("focus").on("focus", function () {
        initial_value_optserviceusagereorder_amount = $(this).val();
    }).off("change").on("change", function (e) {
        turnoffReorderAmountError();
        // turnOffBillingPaymentErrors();

        if ($("#txtreorder_amount").val() !== $("#optserviceusagereorder_amount option:selected").text() ||
            reordercheckflag != $("#chkserviceusageauto_reorder").is(':checked')) {
            isInReorderAmountUpdate = true;
            isInModificationMode = true;
            disablebalancetransfercontrols();
        } else {
            isInReorderAmountUpdate = false;
            isInModificationMode = false;
            enabledbalancetransfercontrols();
        }

        // if($(this).val() == "C" && !isInModificationMode){
        ///     clearCreditCardDetails();
        //     $("#optbillpaymentcollection_methods").focus()
        // }

        toggleorderamount();
        toggleautoreorder();
        //toggleDivsOfBillingForm($(this).val());
        //togglebtnbillCollectionMethodUpdate($(this).val());
    });
}

function onChangeReorderAmount() {

    $("input[id*=chkserviceusageauto_reorder],select[id*=optserviceusagereorder_amount]").off("keyup").on("keyup", function () {
        turnoffReorderAmountError();
        var disabled = $('#usages').find(':input:disabled').removeAttr('disabled');
        var formArr = $('#usages :input').serializeArray();
        disabled.attr('disabled', 'disabled');
        if (!$("#chkserviceusageauto_reorder").is(':checked')) {
            formArr.push({ "name": "chkserviceusageauto_reorder", "value": "off" });
        }
        //
        jQuery.each(formArr, function (i, field) {
            // if (formArr[i].name === "opteventsevent_type") {
            //   formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            //} else {
            formArr[i].value = $.trim(field.value);
            // }

        });
        var serializedForm = $.param(formArr);

        serializedForm;

        if (reorder_form_keypress) {
            if (serializedForm != reorderform_original_data) {
                isInModificationMode = true;
                disablebalancetransfercontrols();
            }
            else {
                isInModificationMode = false;
                enabledbalancetransfercontrols();
            }

        }

    });
    $("input[id*=chkserviceusageauto_reorder],select[id*=optserviceusagereorder_amount]").off("change").on("change", function () {
        //var formArr; //= $('#usages :input').serializeArray();
        var disabled = $('#usages').find(':input:disabled').removeAttr('disabled');
        var formArr = $('#usages :input').serializeArray();
        disabled.attr('disabled', 'disabled');
        if (!$("#chkserviceusageauto_reorder").is(':checked')) {
            formArr.push({ "name": "chkserviceusageauto_reorder", "value": "off" });
        }
        jQuery.each(formArr, function (i, field) {
            // if (formArr[i].name === "opteventsevent_type") {
            //    formArr[i].value = $.trim($("#opteventsevent_type option:selected").text());
            // } else {
            formArr[i].value = $.trim(field.value);
            //}

        });
        var serializedForm = $.param(formArr);
        serializedForm;

        if (reorder_form_keypress) {
            if (serializedForm != reorderform_original_data) {
                isInModificationMode = true;
                disablebalancetransfercontrols();
            }
            else {
                isInModificationMode = false;
                enabledbalancetransfercontrols();

            }

        }
    });
}

var turnoffReorderAmountError = function () {
    $("#divOrderAmountError").hide();
    $("#divOrderAmountSuccess").hide();
}

var onClickbtnsavereorderamount = function () {
    $("#btnsavereorderamount").off("click").on("click", function () {
        turnoffReorderAmountError();
        if (isInModificationMode) {
            objreorderamount = new Object();
            objreorderamount.reorder = new Object();
            objreorderamount.reorder.reorder_amount = $("#optserviceusagereorder_amount option:selected").val();
            objreorderamount.reorder.version = $("#txtorderamountversion").val();
            objreorderamount.reorder.auto_reorder = $("#chkserviceusageauto_reorder").prop("checked");
            putAjaxFunc("customers/" + customerKey + "/reorder", JSON.stringify(objreorderamount), saveReorderAmountSuccessfull, "");
        } else {
            $("#divOrderAmountError").html("<span>No changes to save</span>");
            $("#divOrderAmountError").show();
        }
    });

}



var validateTransferAmount = function () {
    var transferAmountHasError = false;

    var mainbal = Number($("#txthdrtotal_main_balance").val().replace(/[^0-9\.]+/g, ""));
    var usagebal = Number($("#txthdrpaid_balance").val().replace(/[^0-9\.]+/g, ""));

    var txtusagetranferamount = $("#txtserviceusagetransferamount");

    if (isMainToUsageTransfer) {
        if (!txtusagetranferamount.val()) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Please enter transfer amount").show();
        } else if (Number(txtusagetranferamount.val()) <= 0) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Transfer amount cannot be zero").show();
        } else if (Number(txtusagetranferamount.val()) > mainbal) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Transfer amount cannot be greater than the Total Main Balance").show();
        }
    } else {
        if (!txtusagetranferamount.val()) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Please enter transfer amount").show();
        } else if (Number(txtusagetranferamount.val()) <= 0) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Transfer amount cannot be zero").show();
        } else if (Number(txtusagetranferamount.val()) > usagebal) {
            transferAmountHasError = true;
            $("#divTransferUsageAmountError").html("Transfer amount cannot be greater than the Total Usage Balance").show();
        }

    }


    if (transferAmountHasError) {
        txtusagetranferamount.addClass("error");
        return false;
    }
    else {
        return true;
    }
}

var resetbalTransferform = function () {
    $('input[name=chkbalancetransfer][value="maintousage"]').prop('checked', 'checked');
    $("#btnserviceusageTransferUsage").prop("disabled", true);
    $("#btnserviceusageTransferUsage").addClass("disabled");

}
var transferBalanceSuccessfull = function (data, issuccess) {
    if (issuccess) {
        if (data && data.success) {

            getHeaderInformation();
            getServiceUsageTab();


            setTimeout(function () {

                toggletxtserviceusagetransferamount();
                changeRadioForTransfer();

                setTimeout(function () {
                    $("#divTransferUsageAmountSuccess").html("Transfer complete.").show();

                }, 200);
            }, 4000);

            tabsloaded.events = false;
            tabsloaded.bill_viewcharges = false;
            isInModificationMode = false;
            isMainToUsageTransfer = true;
            resetbalTransferform();
            enableReorderControls();
        } else {
            $("#divTransferUsageAmountError").html("Unable to Transfer").show();
        }

    } else {
        $("#divTransferUsageAmountError").html("Unable to Transfer").show();
    }
}
var saveReorderAmountSuccessfull = function (data, issuccess) {
    if (issuccess) {
        if (data.errors) {
            if (data.errors[0].developer_message) {
                $("#divOrderAmountError > span").html(data.errors[0].developer_message);
                $("#divOrderAmountError").show();
            }
        } else {
            var successmsg = "";
            if (reordercheckflag != $("#chkserviceusageauto_reorder").is(':checked')) {
                successmsg = "Automatically Reorder flag is updated.";
            }
            if ($("#txtreorder_amount").val() !== $("#optserviceusagereorder_amount option:selected").text()) {
                successmsg = "Reorder amount is set.";
            }
            isInModificationMode = false;
            reorder_form_keypress = false;
            isInReorderAmountUpdate = false;
            tabsloaded.events = false;
            reordercheckflag = "";
            getServiceUsageTab();
            enabledbalancetransfercontrols();
            // $("#txtreorder_amount").val($("#optserviceusagereorder_amount").val());
            $("#txtreorder_amount").val($("#optserviceusagereorder_amount option:selected").text());
            reordercheckflag = $("#chkserviceusageauto_reorder").is(":checked");
            setTimeout(function () {
                $("#divOrderAmountSuccess").html(successmsg).show();
                toggleorderamount();
            }, 3500);

            toggletxtserviceusagetransferamount();


            //tabsloaded.events = false;
        }
    } else {
        if (data && data.responseJSON && data.responseJSON.errors && data.responseJSON.errors[0] && data.responseJSON.errors[0].developer_message) {
            $("#divOrderAmountError > span").html(data.responseJSON.errors[0].developer_message);
            $("#divOrderAmountError").show();
        } else {
            $("#divOrderAmountError > span").html("Update unsuccessfull");
            $("#divOrderAmountError").show();
        }
    }
}

//END:: Service Usage Tab Edit--Usage Transfer Balances

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

//END CSS//