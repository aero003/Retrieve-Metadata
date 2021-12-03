/* global contactform_original_data */
/* global currency_code */
/* global eventskey */
/* global credit_card_types */
var secondErrorEnum = {
	none: 0,
	numeric: 1,
	byMinLength: 2
};
var // global variables for displaying errors
	formError1 = "",
	formError2 = "",
	charLengthForError1 = 0,
	charLengthForError2 = 0,
	CancelRequest = false,
	validateErrorsBy = secondErrorEnum.none,
	oldCustomerKey,customerKey, serviceKey, currentServiceTabOpen = "", Eventsclickedforfirsttime = false, Collectionsclickedforfirsttime = false,
	contact_form_keypress = false;

var pageEventsTotalPage = 1, pageEventsCurrentPage = 1,
	pageEventsStartAt = 1, pageEventsPageSize = 100,
	pageEventsTotalRecords = 0, pageEventsEndAt,

	pageInvoicesTotalPage = 1, pageInvoicesCurrentPage = 1,
	pageInvoicesStartAt = 1, pageInvoicesPageSize = 25,
	pageInvoicesTotalRecords = 0, pageInvoicesEndAt,

	pageFaxUsageTotalPage = 1, pageFaxUsageCurrentPage = 1,
	pageFaxUsageStartAt = 1, pageFaxUsagePageSize = 100,
	pageFaxUsageTotalRecords = 0, pageFaxUsageEndAt,

	pageJournalsTotalPage = 1, pageJournalsCurrentPage = 1,
	pageJournalsStartAt = 1, pageJournalsPageSize = 25,
	pageJournalsTotalRecords = 0, pageJournalsEndAt,

	pageCollectionsTotalPage = 1, pageCollectionsCurrentPage = 1,
	pageCollectionsStartAt = 1, pageCollectionsPageSize = 25,
	pageCollectionsTotalRecords = 0, pageCollectionsEndAt;

var oldbillingdates = {
	oldNextChargeDate: "",
    oldNextCollectionDate: "",
    oldNextBillDate: "",
    oldDayOfMonth: ""
};

var sortFaxUsageBy = "", sortFaxUsageType = "";

var errorsContact = {
	errcontactfirst_name: "Please enter first name",
	errcontactlast_name: "Please enter last name",
	errcontactcompany: "Please enter company name",
	errcontactzip_code: "Please provide a valid Zip code - For US must be 5 digits",
	errcontactEmailId: "Please enter an email address",
	errcontactEmailIdInvalid: "Invalid email format - Please enter a correct e-mail address",
	errcontactEmailIdUsed: "This e-mail address is assigned to the following customer(s):</br>+",
	errcontactEmailOther: ""
};

var tabsloaded = {
	contact: false,
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
	events: false
};

//===START:::page load calls
$(function () {	
	//save url of api calls in data
	//$("body").data("apiurl", "https://billapp-ui1.dev.j2noc.com/faxforce/");
	//$("body").data("apiurl", "https://csapi.j2noc.com/faxforce/");

	$("#DivWaitprocess").show();
	$("#DivWaitprocessWithButton").hide();
	preload();

});


function preload() {
	if ($("body").data("apiurl")) {
		onloadReady();
	}
	else {

		setTimeout(function () {
			preload();
		}, 800);

	}
}

function onloadReady() {
	btnCancelRequestClick();
	$('input[name=searchradios][value=1]').prop('checked', true);
	getSearchOptionSets(); //fill all dropdownlist.	
	checkRadioOnSelectChange(); //to change radio button selection when selects are directly changed.
	typingInMainSearch();//changes mode of button(enable, disable toggle). And saves whatever is written.
	changeRadioButton();
	changeSelectOption();
	txtMainSearchFocusOut();
	btnMainSearchClick();
	setTimeout(function () {
		//fill all option set of Contact tab before retrieving contact information
		getAllContactOptionSets();
	}, 500);
	btnMainResetClick();

	tabClicks();

	if (!$.query.get("customerid")) {
		localStorage.clear();
		if (!$.query.get("resetpage")) {
			$("#headerdiv").hide();
			$("#tabsdiv").hide();
		}
		//$("input[id*=txt]").attr({ "disabled": "disabled" });
		//$("select[id*=opt]").attr({ "disabled": "disabled" });

		//$("input[type=checkbox]").attr({ "disabled": "disabled" });
		//$("textarea").attr({ "disabled": "disabled" });
	}
	$("#txtMainSearch").removeAttr("disabled");
	$("#chkIncludeInactive").removeAttr("disabled");

	if ($.query.get("customerid")) {
		if ($.query.get("searchcollapse")) {
			$("#btntoggleSearchCollapse").attr({ "class": "collapsed", "aria-expanded": false });
			$("#collapseSearch").attr({ "class": "collapse", "aria-expanded": false, "style": "height: 0px;" });
			//$("#collapseSearch").collapse();
		}
	}

	revertBillingProcessDates();

	icnCopyToClipboard();
	onchangeSalesRep();
	changeSelectCountry();
	onSaveContact();
	btnSendWelcomeLetterClick();
	onkeypressContactForm();
}
//===END::: Page load calls

//===Start:::Fill Dropdownlist options
function getSearchOptionSets() {
	getAjaxFunc("customers/searchoptions", getSearchOptionSetsSuccessFunc, "");
}
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
			$(selectcontrol).append($("<option>", { value: defaultselectedvalue, text: defaultselectedtext }));
		}
		$(selectcontrol + " option[value='" + defaultselectedvalue + "']").prop('selected', 'selected').change();
	}
}

function getSearchOptionSetsSuccessFunc(data, issuccess) {
	if (issuccess) {
		if (data.search_options) {
			var selectcontrols = [{ control: "#s1", bydefault: "fax_number_did" },
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
		$("#lbl_api_error").hide();
	}
	else {
		$("#lbl_api_error").html("Error Status returned: " + data.statusText);
		$("#lbl_api_error").show();

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
		}

		btnCustomerIDClick();

		if (typeof (localStorage) !== "undefined" && $.query.get("customerid")) {
			if ($("a[id=customerkey" + $.query.get("customerid") + "]").length) {
				$("a[id=customerkey" + $.query.get("customerid") + "]").trigger("click");
			}
			else {
				$("#collapseSearch").append("<a href=\"#\" id=\"customerkey" + $.query.get("customerid") + "\" data-customer_key=\"" + $.query.get("customerid") + "\">" + $.query.get("customerid") + "</a>");
				//$("collapseSearch").html("<a href=\"#\" style=\"visibility:none\" id=\"customerkey" + $.query.get("customerid") + "\" data-customer_key=\"" + $.query.get("customerid") + "\">");
				btnCustomerIDClick();
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
function btnMainResetClick() {

	$("#btnMainReset").click(
		function () {

			$("#DivWaitprocess").show();
			localStorage.clear();


			$("#collapseSearch").removeData();

			clearVCCcontrols();
			clearBillingInfoControls();
			clearBillingTransactionDetails();

// 			formError1 = "",
// 			formError2 = "",
// 			charLengthForError1 = 0,
// 			charLengthForError2 = 0,
// 			CancelRequest = false,
// 			validateErrorsBy = secondErrorEnum.none,
// 			customerKey = undefined;
// 
// 			$("#hrefContact").children(":first").trigger("click");
// 
// 			clearLoadedTabs();
// 		
// 			//document.location.reload(true);
// 			//clear input,dropdows, tables, textarea, checkbox
// 			$("input[id*=txt]").val("");
// 			$("select[id*=opt]").val("");
// 			$("table[id*=tblISP] > tbody").html("");
// 			$("input[type=checkbox]").prop("checked", false);
// 			$("textarea").val("");
// 		
// 		
// 			//change selected radio and selection
// 			getSearchOptionSets();
// 			$("#r1").prop("checked", true);
// 			$("#s1 option[value=fax_number_did]").prop('selected', 'selected').change();
// 			$("input[name=searchradios]:radio").trigger("change");
// 		
// 			//hide labels
// 			$("#lblNoOfRecords").hide();
// 			$("#lblNoOfRecordsBillInvoice").hide();
// 			$("#lblNoOfRecordsBillTransaction").hide();
// 			$("#DivWaitprocess").hide();
// 			$("#lblNoOfRecordsBillInvoice").hide();

			var reset_url = $.query.remove("customerid").remove("searchcollapse").set("resetpage", "true");
			window.location.search = reset_url;
		});

}
//===END:: RESET button click

//===Start:::Search Customer List
function btnMainSearchClick() {
	$("#btnMainSearch").click(
		function (e) {
			setLocalStorageAllSearchOptionsDefaults();
			setLocalStorageSearchRadiosChange();
			setLocalStoragetxtMainSearchValues();
			setLocalStoragechkIncludeInactive();

			if (!$("#txtMainSearch")[0].checkValidity()) {
				checkValidity();
				e.preventDefault();
			}
			else {
				var data = "{\"search_option\":\"" + getSelectedOptionSetValue() + "\" ,\"search_value\":\"" + $.trim($("#txtMainSearch").val()) + "\", \"include_inactive\":\"" + $("#chkIncludeInactive").is(":checked") + "\"}";
				postAjaxFunc("customers/search", data, searchResultSuccessFunc);
			}
		});
}

function searchResultSuccessFunc(data, issuccess) {
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
				newrow.append($("<td colspan=7 style=\"width:90%\">" + data.responseJSON.errors[0].developer_message + "</td>"));
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

	btnCustomerIDClick();

}

function drawRows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPSearchResult").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td><a href=\"#\" id=\"customerkey" + rowData.customer_id + "\" data-customer_key=\"" + rowData.customer_id + "\">" + rowData.customer_id + "</td>"));
	row.append($("<td>" + rowData.status + "</td>"));
	row.append($("<td>" + rowData.customer_name + "</td>"));
	row.append($("<td>" + rowData.company_name + "</td>"));
	row.append($("<td>" + rowData.email_address + "</td>"));
	row.append($("<td>" + rowData.zip_code + "</td>"));
	row.append($("<td>" + rowData.cc_last_4_digits + "</td>"));
}
//===END::: Search Customer List

//===START::: Customer link click and fill Header and contact information
function btnCustomerIDClick() {
	$("a[id*=customerkey]").click(function () {
		
		//set text box value and include inactive checkbox value in local storage.
		setLocalStoragetxtMainSearchValues();
		setLocalStoragechkIncludeInactive();
		//load all the tabs again.
		clearLoadedTabs();

		customerKey = $(this).data("customer_key");
		turnOffContactErrors();

		if ($.query.get("customerid")) {
			if ($.query.get("customerid") != customerKey) {
				oldCustomerKey = $.query.get("customerid");
				var search_url = $.query.remove("resetpage").remove("searchcollapse").set("customerid", customerKey);
				window.location.search = search_url;
			}
		}
		else {
			var search_url = $.query.remove("resetpage").remove("searchcollapse").set("customerid", customerKey);
			window.location.search = search_url;
		}


		if ($.query.get("customerid")) {
			if ($.query.get("customerid") == customerKey) {
				//get and set headerinfo
				getAjaxFunc("/customers/" + customerKey + "/headerinformation", setHeaderInformation, "");
				$("#headerdiv").show();

				setTimeout(function () {
					//get and set Account Balances
					getAjaxFunc("/customers/" + customerKey + "/accountbalances", setAccountBalances, "");
				}, 300);
				setTimeout(function () {
					//get and set Usage Balaces
					getAjaxFunc("/customers/" + customerKey + "/usages", setUsageBalance, "");
				}, 400);
				
				setTimeout(function () {
					//get and set Account Balances
					getAjaxFunc("/customers/" + customerKey + "/billprocessdates", setBillProcessDates, "");
				}, 300);
				
				setTimeout(function () {
					//get and set Customer Contact Information
					getAjaxFunc("/customers/" + customerKey, setContactDetails, "");
					$("#tabsdiv").show();
					$("#hrefContact").trigger("click");
				}, 1200);
			}
		}

	});
}

function setHeaderInformation(data, issuccess) {
	//clear header info and disable all controls
	$("input[id*=txthdr]").attr({ "disabled": "disabled" });
	$("input[id*=chkhdr]").attr({ "disabled": "disabled" });
	$("select[id*=opthdr]").attr({ "disabled": "disabled" });
	$("input[id*=txthdr]").val("");

	if (issuccess) {
		if (data.header_information) {
			//alert(data.header_information);
			for (var property in data.header_information) {
				if (data.header_information.hasOwnProperty(property)) {
					$("input[id=txthdr" + property + "]").val(data.header_information[property]);
				}
			}
			$("#txthdrstatus").attr("style", "background-color:" + data.header_information.status_color_code + "");
			// /.css({ "background-color": data.header_information.status_color_code });
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
					oldbillingdates[property] = data.billProcessDates[property];
				}
			}
			if (data.billProcessDates.billable) {
				$("input:checkbox[id=chkhdrbillable]").prop("checked", data.billProcessDates.billable);
			}
			else{
				$("input:checkbox[id=chkhdrbillable]").prop("checked", false);
			}
			if(data.billProcessDates.dayOfMonth){
				getAjaxFunc("/lookup/dayofmonthlist", setDayOfMonthFunc, data.billProcessDates.dayOfMonth);
			}
		}
	}
	else {

	}
}

function setDayOfMonthFunc(data, issuccess,defaultSelected) {
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
					$("#txthdrtotal").attr("style", "background-color:" + data.account_balances.total_main_balance_color_code + "");
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
function setContactDetails(data, issuccess) {
	//$("input[id*=txtcontact]").attr({ "disabled": "disabled" });
	//$("select[id*=optcontact]").attr({ "disabled": "disabled" });
	if (issuccess) {
		if (data.contact_detail) {
			for (var property in data.contact_detail) {
				if (data.contact_detail.hasOwnProperty(property)) {
					$("input[id=txtcontact" + property + "]").val(data.contact_detail[property]);
					if ($("#optcontact" + property)) {
						$("#optcontact" + property).val(data.contact_detail[property]);
					}
				}
			}
			$("#txtcontactnotes").val(data.contact_detail.notes);
			getSetOEMOptionSetsFunc(data.contact_detail["oem_status"], data.contact_detail["oem_id"]);
			getSetUserOptionSetFunc(data.contact_detail["sales_user_status"], data.contact_detail["sales_representative"]);

			if (data.contact_detail["disable_enable_oem_flag"] == "1") {
				$("#optcontactoems").attr({ "disabled": "disabled" });
			}
			else {
				$("#optcontactoems").removeAttr("disabled");
			}
			currency_code = data.contact_detail["currency_code"];
			
			//to set company name required
			if (data.contact_detail["oem_id"] == "50" || data.contact_detail["oem_id"] == "500") {
				companyNameRequired(true);
			}
			else {
				companyNameRequired(false);
			}

			if (data.contact_detail.enable_send_welcome_email) {
				$("#btnSendWelcomeLetter").removeAttr("attr");
			} else {
				$("#btnSendWelcomeLetter").attr({ "disabled": "disabled" });
			}


			$("#optcontactcountry_code").trigger("change");
			contactform_original_data = $("#contact :input").serialize();
		}
		$("#lbl_api_error").hide();
	}
	else {
		if (data.responseJSON.errors[0]) {
			$("#lbl_api_error").html("Error: " + data.responseJSON.errors[0].developer_message);
			$("#lbl_api_error").show();
		}
		else {
			$("#lbl_api_error").html("Error Status returned: " + data.statusText);
			$("#lbl_api_error").show();
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
		
		if(oldCustomerKey){
			revertDatesFor = oldCustomerKey;
		} else{
			if(customerKey){
				revertDatesFor = customerKey;
			}
		}

		if (revertDatesFor) {
			$.ajax({
				type: "GET",
				url: $("body").data("apiurl") + "/customers/" + revertDatesFor + "/restorebillprocessdates?interval_day=" + oldbillingdates.oldDayOfMonth + "&next_charge_date=" + oldbillingdates.oldNextChargeDate + "&next_collection_date=" + oldbillingdates.oldNextCollectionDate + "&next_bill_date=" + oldbillingdates.oldNextBillDate,
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
	getOSOptionSet();
	getBillTypeOptionSet();
	getContactMethodOptionSet();
	getCountryOptionSet();
}

function getSalutationOptionSet() {
	getAjaxFunc("lookup/salutations", setSalutationOptionSetsFunc, "");
}
function setSalutationOptionSetsFunc(data, issuccess) {
	if (issuccess) {
		if (data.salutations) {
			setOptionSets(data.salutations, "#optcontactname_prefix", "", "salutation", "salutation", true);
		}
	}
}
function getLanguageOptionSet() {
	getAjaxFunc("lookup/languages", setLanguageOptionSetsFunc, "");
}
function setLanguageOptionSetsFunc(data, issuccess) {
	if (issuccess) {
		if (data.languages) {
			setOptionSets(data.languages, "#optcontactcustomer_lang", "", "code", "description", true);
		}
	}
}

function getSetOEMOptionSetsFunc(oem_status, oem_id) {
	getAjaxFunc("lookup/oems", setOEMOptionSetsFunc, oem_id);
	if (oem_status !== "") {
		if (oem_status != "A") {
			getAjaxFunc("oems/" + oem_id, setInactiveOEMOptionSetsFunc, oem_id);
		}
	}
	else {
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
			setOptionSets(data.oems, "#optcontactoems", defaultSelected, "id", "name+ +(+id+)", false);
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
	getAjaxFunc("lookup/billtypes", setBillTypeOptionSetsFunc, "");
}
function setBillTypeOptionSetsFunc(data, issuccess) {
	if (issuccess) {
		if (data.bill_types) {
			setOptionSets(data.bill_types, "#optcontactbill_type", "", "type", "description", true);
		}
	}
}

function getContactMethodOptionSet() {
	getAjaxFunc("lookup/contactmethods", setContactMethodOptionSetsFunc, "");
}
function setContactMethodOptionSetsFunc(data, issuccess) {
	if (issuccess) {
		if (data.contact_methods) {
			setOptionSets(data.contact_methods, "#optcontactcontact_method", "", "method", "description", true);
		}
	}
}
function getCountryOptionSet() {
	getAjaxFunc("lookup/countries", setCountryOptionSetsFunc, "");
}
function setCountryOptionSetsFunc(data, issuccess) {
	if (issuccess) {
		if (data.countries) {
			setOptionSets(data.countries, "#optcontactcountry_code", "", "code", "name", true);
		}
	}
}


function getSetUserOptionSetFunc(user_status, sales_representative) {
	getAjaxFunc("lookup/users", setUsersOptionSetsFunc, sales_representative);
	if (sales_representative !== "") {
		if (user_status == "I") {
			getAjaxFunc("users/" + sales_representative, setInactiveUsersOptionSetsFunc, sales_representative);
		}
	}
	else {
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
			setOptionSets(data.sales_users, "#optcontactsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
		}
	}
}

function getSetSDSalesRepOptionSetFunc(user_status, sales_representative) {
	getAjaxFunc("lookup/users", setSDSalesRepOptionSetsFunc, sales_representative);
	if (sales_representative !== "") {
		if (user_status == "I" || user_status == "Inactive") {
			getAjaxFunc("users/" + sales_representative, setInactiveSDSalesRepOptionSetsFunc, sales_representative);
		} else {
			$("#optservicedetailIsales_rep option[value='" + sales_representative + "']").prop('selected', 'selected').change();
		}
	}
	else {
		var objectArray = [];
		objectArray[0] = {};
		objectArray[0]['id'] = "";
		objectArray[0]['name'] = "";

		setOptionSetsForceDefaultValue(objectArray, "#optservicedetailIsales_rep", "", "", "", "");
		$("#optservicedetailIsales_rep").val("");
	}

}

function setSDSalesRepOptionSetsFunc(data, issuccess, defaultSelected) {
	if (issuccess) {
		if (data.sales_users) {
			setOptionSets(data.sales_users, "#optservicedetailIsales_rep", defaultSelected, "id", "id+ +(+name+)", false);
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
function changeRadioButton() {
	$("input[name=searchradios]:radio").change(function () {
		setTxtMainSearchAllProps();
		setTxtValueOnSelectChange();
		checkValidity();
	});
}

function changeSelectOption() {
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

function setLocalStorageSearchRadiosChange() {
	if (typeof (localStorage) !== "undefined") {
		localStorage["isp.selectedsearchradios"] = $("input[name=searchradios]:checked").val();
	}

}
function setLocalStoragetxtMainSearchValues() {
	if (typeof (localStorage) !== "undefined") {
		localStorage["isp.txtMainSearch"] = JSON.stringify($("#collapseSearch").data());
	}
}
function setLocalStoragechkIncludeInactive() {
	if (typeof (localStorage) !== "undefined") {
		localStorage["isp.chkIncludeInactive"] = $("#chkIncludeInactive").is(":checked");
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
			$("#collapseSearch").data(JSON.parse(localStorage["isp.txtMainSearch"]));
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

function typingInMainSearch() {
	$("#btnMainSearch").prop("disabled", true);
	$("#btnMainSearch").addClass("disabled").removeClass("grey-btn");

	var typingTimer,                //timer identifier
		doneTypingInterval = 300;  //time in ms, 0.5 second for example

	$("#txtMainSearch").keyup(function (event) {
		if (this.value === "") {
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
	$("#collapseSearch").data(selectid, txtMainSearchValue);
}
function setTxtValueOnSelectChange() {
	var selectid = getSelectedOptionSetValue();
	if ($("#collapseSearch").data(selectid)) {
		$("#txtMainSearch").val($("#collapseSearch").data(selectid));
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

		var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val($("#txthdrcustomer_id").val()).select();
        document.execCommand("copy");
        $temp.remove();

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});

	$("i[id*=icnCopyEmail]").click(function (e) {

		var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val($("#txtcontactemail_address").val()).select();
        document.execCommand("copy");
        $temp.remove();

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});
}


//===START::: general Methods for API CALLS
function postAjaxFunc(urlendpoints, data, successCallback) {
	$.ajax({
		type: "POST",
		url: $("body").data("apiurl") + urlendpoints,
		dataType: "json",
		contentType: "application/json",
		data: data,
		success: function (data) {
			if (typeof successCallback === "function") {
				successCallback(data, true);
			}
		},
		error: function (e) {
			if (typeof successCallback === "function") {
				successCallback(e, false);
			}
		}
	});
}

function getAjaxFunc(urlendpoints, successCallback, extraparam) {
	$.ajax({
		type: "GET",
		url: $("body").data("apiurl") + urlendpoints,
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

function putAjaxFunc(urlendpoints, data, successCallback, extraparam) {
	$.ajax({
		type: "PUT",
		url: $("body").data("apiurl") + urlendpoints,
		dataType: "json",
		contentType: "application/json",
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
			if (typeof successCallback === "function") {
				successCallback(e, false);
			}
		}
	});
}

//===END::: general Methods for API CALLS

//===START:::loader
$(document).ajaxStart(function () {
	if (!$("#DivWaitprocess").is(":visible")) {
		$("#DivWaitprocessWithButton").show();
	}
	else {
		$("#DivWaitprocessWithButton").hide();
	}
});
$(document).ajaxStop(function () {
	if (!$("#DivWaitprocess").is(":visible")) {
		if ($.active === 0) {
			setTimeout(function () {
				$("#DivWaitprocessWithButton").hide();
			}, 1300);
		}
	}
	else {
		if ($.active === 0) {
			setTimeout(function () {
				$("#DivWaitprocess").hide();
			}, 1300);
		}

	}
});
//===END:::loader

//===START:::Cancel all ajax request
function btnCancelRequestClick() {
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

//===START::: Declare ALL Tab click Functions
function clearLoadedTabs() {
	$.each(tabsloaded, function (key) {
		tabsloaded[key] = false;
	});
}
function tabClicks() {
	$("#hrefContact").on("click", function () {
		if (!tabsloaded.contact) {
			tabsloaded.contact = true;
			$("#hrefContact").children(":first").trigger("click");
		}
	});
	$("#hrefBilling").on("click", function () {
		if (!tabsloaded.bill_payment) {
			$("#hrefBilling_payments").children(":first").trigger("click");
		}
	});
	$("#hrefBilling_payments").on("click", function () {
		if (!tabsloaded.bill_payment) {
			tabsloaded.bill_payment = true;
			getBillingPayment();
		}
	});

	$("#hrefBilling_viewCharges").on("click", function () {
		if (!tabsloaded.bill_viewcharges) {
			tabsloaded.bill_viewcharges = true;
			getBillingVCCGrid();
		}
	});
	$("#hrefBilling_invoice").on("click", function () {
		if (!tabsloaded.bill_invoice) {
			tabsloaded.bill_invoice = true;
			getBillingInvoiceGrid();
		}
	});
	$("#hrefBilling_transactionhistory").on("click", function () {
		if (!tabsloaded.bill_transactionhistory) {
			tabsloaded.bill_transactionhistory = true;
			getTransactionHistoryGrid();
		}
	});
	$("#hrefServices").on("click", function () {
		if (!tabsloaded.servicessummary) {
			tabsloaded.servicessummary = true;
			getServiceSummaryGrid();
			if (currentServiceTabOpen === "") {
				currentServiceTabOpen = "hrefServiceDetails";
				$("#hrefServiceDetails").trigger("click");
			}
		}
	});
	$("#hrefServiceDetails").on("click", function () {
		currentServiceTabOpen = "hrefServiceDetails";
		if (!tabsloaded.services_details) {
			tabsloaded.services_details = true;
			getServiceDetail();
		}
	});

	$("#hrefServiceNumberActivation").on("click", function () {
		currentServiceTabOpen = "hrefServiceNumberActivation";
		if (!tabsloaded.services_numberactivation) {
			tabsloaded.services_numberactivation = true;
		}
	});

	$("#hrefServiceCancel").on("click", function () {
		currentServiceTabOpen = "hrefServiceCancel";
		if (!tabsloaded.services_cancel) {
			tabsloaded.services_cancel = true;
		}
	});

	$("#hrefServiceGifts").on("click", function () {
		currentServiceTabOpen = "hrefServiceGifts";
		if (!tabsloaded.services_gifts) {
			tabsloaded.services_gifts = true;
			getGiftsGrid();
		}
	});

	$("#hrefServiceUsage").on("click", function () {
		currentServiceTabOpen = "hrefServiceUsage";
		if (!tabsloaded.servicesusage) {
			tabsloaded.servicesusage = true;
			getServiceUsageTab();
		}
	});

	$("#hrefServiceFaxUsageHistory").on("click", function () {
		currentServiceTabOpen = "hrefServiceFaxUsageHistory";
		if (!tabsloaded.services_faxusagehistory) {
			tabsloaded.services_faxusagehistory = true;
			getServiceFaxUsage();
		}
	});

	$("#hrefEvents").on("click", function () {
		if (!tabsloaded.events) {
			tabsloaded.events = true;
			getEventsGrid();
		}
	});


}
//===END::: Declare ALL Tab click Functions

//===START::: Retrieve Info of Billing Tab -> Payment Tab

function getBillingPayment() {
	//diable all controls
	$("input[id*=txtbill]").attr({ "disabled": "disabled" });
	$("select[id*=optbill]").attr({ "disabled": "disabled" });
	$("#chkbill_onetime_addtoacc").attr({ "disabled": "disabled" });

	if (customerKey) {
		getCurrencyCode();
		getExpirationyear();
		clearBillingInfoControls();
		getBillingPaymentGrid();
	}
}

function getCollectionMethodOptionSet() {
	getAjaxFunc("customers/" + customerKey + "/collectionmethods", setCollectionMethodOptionSet, "");
}
function setCollectionMethodOptionSet(data, issuccess, contact_detail) {
	if (issuccess) {
		if (data.collection_methods) {
			var default_select = "";
			$.each(data.collection_methods, function (i, item) {
				if (item["default_collection_method"] == "true") {
					default_select = item["collection_method"];
				}
			});
			setOptionSetsForceDefaultValue(data.collection_methods, "#optbillcollection_methods", contact_detail["collection_method"], "collection_method", "description", contact_detail["collection_method_description"]);
			if (default_select == "C") {
				$("#divbillingCCform").show();
				$("#divbillingCCform2").show();
				$("#divbillingCCform_false").hide();
			}
			else {
				$("#divbillingCCform").hide();
				$("#divbillingCCform2").hide();
				$("#divbillingCCform_false").show();
			}
		}
	}
}

function getExpirationyear() {
	getAjaxFunc("lookup/expirationyears", setExprirationyear, "");
}
function setExprirationyear(data, issuccess, defaultSelected) {
	if (issuccess) {
		if (data.expiration_years) {
			setOptionSets(data.expiration_years, "#optbillexpiration_year", defaultSelected, "year", "year", true);
		}
	}
}

function getCurrencyCode() {
	getAjaxFunc("customers/" + customerKey, setCurrencyCode, "");

}
function setCurrencyCode(data, issuccess) {
	if (issuccess) {
		if (data.contact_detail) {
			getSetCurrencyOptionSetsFunc(data.contact_detail["currency_code_status"], data.contact_detail["currency_code"]);
			currency_code = data.contact_detail["currency_code"];
			getAjaxFunc("customers/" + customerKey + "/collectionmethods", setCollectionMethodOptionSet, data.contact_detail);
		}
		else {
			$("#optbillcurrencies").val("");
		}
	}
}
function getSetCurrencyOptionSetsFunc(currency_status, currency_id) {
	if (currency_status !== "") {
		getAjaxFunc("lookup/currencies", setCurrencyOptionSetsFunc, currency_id);
		if (currency_status != "A") {
			getAjaxFunc("currencies/" + currency_id, setInactiveCurrencyOptionSetsFunc, currency_id);
		}
	}
	else {
		$("#optbillcurrencies").val("");
	}
	$("#optbillcurrencies").attr({ "disabled": "disabled" });
}

function setCurrencyOptionSetsFunc(data, issuccess, defaultSelected) {
	if (issuccess) {
		if (data.currencies) {
			setOptionSets(data.currencies, "#optbillcurrencies", defaultSelected, "code", "description", false);
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
			setOptionSets(objectArray, "#optbillcurrencies", defaultSelected, "code", "description", false);
		}
	}
}

function getBillingPaymentGrid() {
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

function setBillingPaymentGrid(data, issuccess) {
	var newrow = $("<tr />");
	if (issuccess) {
		if (data.credit_cards) {
			drawPaymentTable(data.credit_cards);
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
	btnCreditCardKeyClick();
}

function drawPaymentRows(rowData) {

	var row = $("<tr >");
	$("#tblISPCreditCards").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td>" + rowData.name_on_card + "</td>"));
	row.append($("<td><a href=\"#\" id=\"credit_card_key" + rowData.credit_card_key + "\" data-credit_card_key=\"" + rowData.credit_card_key + "\">" + rowData.card_number + "</td>"));
	row.append($("<td>" + rowData.expiration + "</td>"));
	row.append($("<td>" + rowData.rank + "</td>"));
}
function btnCreditCardKeyClick() {
	$("a[id*=credit_card_key]").click(function (e) {

		$("input[id*=txtbill]").not($("input[id*=txtbillVCC]")).not($("input[id*=txtbillTH]")).val("");
		//$("input[id*=txtbill]").val("");
		$("#optbillcountry_code").val("");
		$("#optbillexpiration_year").val("");
		$("#optbillexpiration_month").val("");
		$("#imgbillcard_type").removeClass();
		$("#imgbilldiv_block").hide();

		var credit_card_key = $(this).data("credit_card_key");
		getAjaxFunc("customers/" + customerKey + "/creditcards/" + credit_card_key, setPaymentDetails, "");

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});
}
function setPaymentDetails(data, issuccess) {
	if (issuccess) {
		if (data.credit_card_detail) {
			for (var property in data.credit_card_detail) {
				if (data.credit_card_detail.hasOwnProperty(property)) {
					$("input[id=txtbill" + property + "]").val(data.credit_card_detail[property]);
					if ($("#optbill" + property)) {
						$("#optbill" + property).val(data.credit_card_detail[property]);
					}
				}
			}
			if (data.credit_card_detail.card_type && data.credit_card_detail.card_type !== "") {
				var cctype_css = mapImageForCCtype(data.credit_card_detail.card_type);
				$("#imgbillcard_type").removeClass().addClass(cctype_css);
				$("#imgbilldiv_block").show();
				$("#lblbillcredit_card_type").html(getCreditCardTypeDescription(data.credit_card_detail.card_type));
			}
			setTimeout(function () {
				getAjaxFunc("/lookup/countries", setBillingCountryOptionSetsFunc, data.credit_card_detail["country_code"]);
			}, 400);
		}
	}
}
function setBillingCountryOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.countries) {
			setOptionSets(data.countries, "#optbillcountry_code", selectedbydefault, "code", "name", true);
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
	$("input[id*=txtbill]").not($("input[id*=txtbillVCC]")).not($("input[id*=txtbillTH]")).val("");
	$("select[id*=optbill]").val("");
	$("#imgbillcard_type").removeClass();
	$("#imgbilldiv_block").hide();
	$("#chkbill_onetime_addtoacc").prop("checked", false);
}

//===END:::Retrieve Info of Billing Tab -> Payment Tab

//===START::: Billing Tab-> View Charges and collection tab(VCC)

function getBillingVCCGrid() {
	$("input[id*=txtbillVCC]").attr({ "disabled": "disabled" });
	$("#chkbillVCCmemo_flag").attr({ "disabled": "disabled" });

	clearVCCcontrols();
	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/journals", setJournalsPageParams, true);
	}
}

function getJournalsGridPages() {
	getAjaxFunc("customers/" + customerKey + "/journals?startAt=" + pageJournalsStartAt + "&maxResults=" + pageJournalsPageSize, setBillingVCCGrid, "");
}

function journalsPageChange() {
	$("a[id*=hrefpageJournals]").click(function (e) {
		var pagebtn = $(this).data("pagebtn");
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
		e.preventDefault();
	});


	$("#txtpageJournalsCurrentPage").keyup(function (e) {
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
		}
	});
}


function setJournalsPageParams(data, issuccess, settingFirstTime) {
	if (settingFirstTime) {
		if (issuccess) {
			if (data.journal) {
				pageJournalsTotalRecords = parseInt(data.total);
				pageJournalsTotalPage = setNumberOfPages(pageJournalsTotalRecords, pageJournalsPageSize);

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
				journalsPageChange();
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

function setBillingVCCGrid(data, issuccess) {
	var newrow = $("<tr />");
	if (issuccess) {
		if (data.journal) {
			drawVCCTable(data.journal);
		}
		else {
			$("#tblISPviewCharges > tbody").html("");
			$("#tblISPviewCharges").append(newrow);
			newrow.append($("<td colspan=6 style=\"width:90%\">No Charges & Collection found in the System</td>"));
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
		drawVCCRows(data[i], (i + 1));
	}
	btnVCCJournal_Click();
	if (data.length > 0) {
		$("#tblISPviewCharges > tbody").children(":first").children(":first").children(":first").trigger("click");
		$("#lblNoOfRecordsVCC").html(data.length + " row(s) returned.").show();
	}

}

function drawVCCRows(rowData, SrNo) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPviewCharges").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td><a href=\"#\" id=\"vcc_journal_key" + rowData.journal_key + "\" data-vcc_journal_key=\"" + rowData.journal_key + "\">" + SrNo + "</a></td>"));
	row.append($("<td>" + rowData.post_date + "</td>"));
	row.append($("<td>" + rowData.description + "</td>"));
	row.append($("<td>" + rowData.credit_card_number + "</td>"));
	row.append($("<td>" + rowData.parent + "</td>"));
	row.append($("<td>" + rowData.child + "</td>"));
	row.append($("<td>" + rowData.display_amount + "</td>"));
}

function btnVCCJournal_Click() {
	$("a[id*=vcc_journal_key]").click(function (e) {

		$("input[id*=txtbillVCC]").val("");
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
		if (data.journal_entry_detail) {
			for (var property in data.journal_entry_detail) {
				if (data.journal_entry_detail.hasOwnProperty(property)) {
					$("input[id=txtbillVCC" + property + "]").val(data.journal_entry_detail[property]);
				}
			}
			if (data.journal_entry_detail["memo_flag"]) {
				$("#chkbillVCCmemo_flag").prop("checked", true);
			}
			else {
				$("#chkbillVCCmemo_flag").prop("checked", false);
			}
			setBillingVCC_journal_Grid(data.journal_entry_detail);
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
		drawVCC_journal_Rows(data[i]);
	}
}

function drawVCC_journal_Rows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + "\" >");
	$("#tblISPVCC_journal_items").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td>" + rowData.account_code + "</td>"));
	row.append($("<td>" + rowData.description + "</td>"));
	row.append($("<td>" + rowData.amount + "</td>"));
}

function clearVCCcontrols() {
	$("input[id*=txtbillVCC]").val("");
	$("#tblISPVCC_journal_items > tbody").html("");
	$("#lblNoOfRecordsVCC").html("").hide();
	$("#chkbillVCCmemo_flag").prop("checked", false);
}

//==END::: Billing Tab-> View Charges and collection tab

//==START::: Billing Tab-> Invoice Tab

function getBillingInvoiceGrid() {
	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=" + pageInvoicesPageSize, setInvoicesPageParams, true);
	}
}

function getInvoicesGridPages() {
	getAjaxFunc("customers/" + customerKey + "/invoices?startAt=" + pageInvoicesStartAt + "&maxResults=" + pageInvoicesPageSize, setBillingInvoiceGrid, "");
}

function invoicesPageChange() {
	$("a[id*=hrefpageInvoices]").click(function (e) {
		var pagebtn = $(this).data("pagebtn");
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
		e.preventDefault();
	});


	$("#txtpageInvoicesCurrentPage").keyup(function (e) {
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
		}
	});
}

function setInvoicesPageParams(data, issuccess, settingFirstTime) {
	if (settingFirstTime) {
		if (issuccess) {
			if (data.invoices) {
				pageInvoicesTotalRecords = parseInt(data.total);
				pageInvoicesTotalPage = setNumberOfPages(pageInvoicesTotalRecords, pageInvoicesPageSize);

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
	var newrow = $("<tr />");
	if (issuccess) {
		if (data.invoices) {
			drawBillingInvoicesTable(data.invoices);
		}
		else {
			$("#tblISPbillinvoices > tbody").html("");
			$("#tblISPbillinvoices").append(newrow);
			newrow.append($("<td colspan=10 style=\"width:90%\">No Invoices found in the System</td>"));
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
	if (data.length > 8) {
		$("#tblISPbillinvoices > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
	}
	for (var i = 0; i < data.length; i++) {
		drawBillingInvoicesRows(data[i], (i + 1));
	}
	if (data.length > 0) {
		//$("#lblNoOfRecordsBillInvoice").html(data.length + " row(s) returned.").show();
	}

}

function drawBillingInvoicesRows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPbillinvoices").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td>" + rowData.date + "</td>"));
	row.append($("<td>" + rowData.number + "</td>"));
	row.append($("<td>" + rowData.system + "</td>"));
	row.append($("<td>" + rowData.previous + "</td>"));
	row.append($("<td>" + rowData.payments + "</td>"));
	row.append($("<td>" + rowData.adjustments + "</td>"));
	row.append($("<td>" + rowData.charges + "</td>"));
	row.append($("<td>" + rowData.current + "</td>"));
	row.append($("<td>" + rowData.email + "</td>"));
	row.append($("<td>" + rowData.print + "</td>"));
	// row.append($("<td>" + rowData.bill_key + "</td>"));
	// row.append($("<td>" + rowData.caption + "</td>"));
}

//==END::: Billing Tab-> Invoice Tab

//==START::: Billing Tab -> Transaction tab
function getTransactionHistoryGrid() {
	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/collections?startAt=" + pageCollectionsStartAt + "&maxResults=" + pageCollectionsPageSize, setCollectionsPageParams, true);
	}
}


function getCollectionsGridPages() {
	getAjaxFunc("customers/" + customerKey + "/collections?startAt=" + pageCollectionsStartAt + "&maxResults=" + pageCollectionsPageSize, setBillingTransactionGrid, "");
}

function collectionsPageChange() {
	$("a[id*=hrefpageCollections]").click(function (e) {
		var pagebtn = $(this).data("pagebtn");
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
		e.preventDefault();
	});


	$("#txtpageCollectionsCurrentPage").keyup(function (e) {
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
		}
	});
}

function setCollectionsPageParams(data, issuccess, settingFirstTime) {
	if (settingFirstTime) {
		if (issuccess) {
			if (data.collections) {
				pageCollectionsTotalRecords = parseInt(data.total);
				pageCollectionsTotalPage = setNumberOfPages(pageCollectionsTotalRecords, pageCollectionsPageSize);

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
				collectionsPageChange();
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
		if (data.collections) {
			drawBillingTransactionTable(data.collections);
		}
		else {
			$("#tblISPbillingTransaction_history > tbody").html("");
			$("#tblISPbillingTransaction_history").append(newrow);
			newrow.append($("<td colspan=9 style=\"width:90%\">No Transaction History found in the System</td>"));
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
	$("#chkbillTHupdateStatus").attr({ "disabled": "disabled" });

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

	btnCollectionKeyClick();
	if (data.length > 0) {
		if (!Collectionsclickedforfirsttime) {
			$("#tblISPbillingTransaction_history > tbody").children(":first").children(":first").children(":first").trigger("click");
			Collectionsclickedforfirsttime = true;
		}
		//$("#lblNoOfRecordsBillTransaction").html(data.length + " row(s) returned.").show();
	}
	//gridDesignFix("#tblISPbillingTransaction_history");
}

function drawBillingTransactionRows(rowData, rowcolor) {

	var row = $("<tr style=\"background-color:" + rowcolor + " \">");
	$("#tblISPbillingTransaction_history").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td><a href=\"#\" id=\"collectionkey" + rowData.collectionKey + "\" data-collectionkey=\"" + rowData.collectionKey + "\">" + rowData.collectionKey + "</a></td>"));
	row.append($("<td>" + rowData.date + "</td>"));
	row.append($("<td>" + (rowData.description !== undefined ? rowData.description : "") + "</td>"));
	row.append($("<td>" + (rowData.creditCardNumber !== undefined ? rowData.creditCardNumber : "") + "</td>"));
	row.append($("<td>" + (rowData.type !== undefined ? rowData.type : "") + "</td>"));
	if (rowData.statusColorCodeMap) {
		for (var property in rowData.statusColorCodeMap) {
			if (rowData.statusColorCodeMap.hasOwnProperty(property)) {
				row.append($("<td style=\"background-color:" + rowData.statusColorCodeMap[property] + " !important\">" + property + "</td>"));
			}
		}
	}
	else {
		row.append($("<td></td>"));
	}
	if (rowData.responseColorCodeMap) {
		for (var property in rowData.responseColorCodeMap) {
			if (rowData.responseColorCodeMap.hasOwnProperty(property)) {
				row.append($("<td style=\"background-color:" + rowData.responseColorCodeMap[property] + " !important\">" + property + "</td>"));
			}
		}
	}
	else {
		row.append($("<td></td>"));
	}
	if (rowData.amountColorCodeMap) {
		for (var property in rowData.amountColorCodeMap) {
			if (rowData.amountColorCodeMap.hasOwnProperty(property)) {
				row.append($("<td style=\"background-color:" + rowData.amountColorCodeMap[property] + " !important\">" + property + "</td>"));
			}
		}
	}
	else {
		row.append($("<td></td>"));
	}
	row.append($("<td>" + rowData.createdBy + "</td>"));
}

function gridDesignFix(tblID) {
	var height = $(tblID + " tbody > tr").height();
	$(tblID + " tbody  > tr > td").css("height", height);
}

function btnCollectionKeyClick() {
	$("a[id*=collectionkey]").click(function (e) {

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
			if (data.collection.statusColorCodeMap) {
				for (var property in data.collection.statusColorCodeMap) {
					if (data.collection.statusColorCodeMap.hasOwnProperty(property)) {
						$("#txtbillTHstatus").val(property);
						//$("#txtbillTHstatus").css({ "background-color": data.collection.statusColorCodeMap[property] });
						$("#txtbillTHstatus").attr("style", "background-color:" + data.collection.statusColorCodeMap[property] + "");
					}
				}
			}
			if (data.collection.responseColorCodeMap) {
				for (var property in data.collection.responseColorCodeMap) {
					if (data.collection.responseColorCodeMap.hasOwnProperty(property)) {
						$("#txtbillTHresponse").val(property);
						//$("#txtbillTHresponse").css({ "background-color": data.collection.responseColorCodeMap[property] });
						$("#txtbillTHresponse").attr("style", "background-color:" + data.collection.responseColorCodeMap[property] + "");
					}
				}
			}
			if (data.collection.amountColorCodeMap) {
				for (var property in data.collection.amountColorCodeMap) {
					if (data.collection.amountColorCodeMap.hasOwnProperty(property)) {
						$("#txtbillTHamount").val(property);
						//$("#txtbillTHamount").css({ "background-color": data.collection.amountColorCodeMap[property] });
						$("#txtbillTHamount").attr("style", "background-color:" + data.collection.amountColorCodeMap[property] + "");

					}
				}
			}
			if (data.collection.updateStatus) {
				$("#chkbillTHupdateStatus").prop("checked", data.collection.updateStatus)
			}
			else {
				$("#chkbillTHupdateStatus").prop("checked", false)
			}
		}
	}
}
function clearBillingTransactionDetails() {
	$("input[id*=txtbillTH]").val("");
	$("input[id*=txtbillTH]").removeAttr("style");
}

//==END::: Billing Tab -> Transaction tab

//==START::: Service TAB -> Summary
function clearServicesTab() {
	$("input:checkbox[id*=chkServices_]").prop("checked", false);
}
function getServiceSummaryGrid() {
	//disable all checkboxes
	$("input:checkbox[id*=chkServices_]").attr({ "disabled": "disabled" });
	clearServicesTab();

	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/services", setServiceSummaryGrid, "");
		getServiceSuspedFlags();
	}
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
	}
}
function drawServiceSummaryTable(data) {
	$("#lblNoOfRecordsServiceSummary").hide();

	$("#tblISPservice_summary > tbody").html("");
	$("#tblISPservice_summary > thead > tr:first-child").removeClass();
	if (data.length > 5) {
		$("#tblISPservice_summary > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
	}
	for (var i = 0; i < data.length; i++) {
		drawServiceSummaryRows(data[i], (i + 1));
	}
	btnserviceKeyClick();
	 //$('[data-toggle="tooltip"]').tooltip(); 
	if (data.length > 0) {
		$("#tblISPservice_summary > tbody").children(":first").children(":first").children(":first").trigger("click");
		$("#lblNoOfRecordsServiceSummary").html(data.length + " row(s) returned.").show();
	}
}

function drawServiceSummaryRows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.rowColorCode + " \">");
	$("#tblISPservice_summary").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td><a href=\"#\" id=\"servicekey" + rowData.serviceKey + "\" data-servicetype=\"" + rowData.serviceType + "\" data-servicekey=\"" + rowData.serviceKey + "\">" + rowData.serviceKey + "</a></td>"));
	row.append($("<td>" + (rowData.serviceId !== undefined ? rowData.serviceId : "") + "</td>"));
	row.append($("<td>" + (rowData.description !== undefined ? rowData.description : "") + "</td>"));
	row.append($("<td>" + (rowData.serviceType !== undefined ? rowData.serviceType : "") + "</td>"));
	row.append($("<td>" + (rowData.offerCode !== undefined ? rowData.offerCode : "") + "</td>"));
	row.append($("<td>" + (rowData.status !== undefined ? rowData.status : "") + "</td>"));
	row.append($("<td>" + (rowData.startDate !== undefined ? rowData.startDate : "") + "</td>"));
	row.append($("<td>" + (rowData.endDate !== undefined ? rowData.endDate : "") + "</td>"));
}

//servicekey click function
function btnserviceKeyClick() {
	$("a[id*=servicekey]").click(function (e) {
		serviceKey = $(this).data("servicekey");
		$.each(tabsloaded, function (key) {
			if (key.indexOf("services_") != -1) {
				tabsloaded[key] = false;
			}
		});
		$("li[id=" + currentServiceTabOpen + "]").trigger("click");

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});
}


function getServiceSuspedFlags() {
	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/servicessuspendflags", setServicesSuspendFlags, "");
	}
}
function setServicesSuspendFlags(data, issuccess) {

	if (issuccess) {
		if (data.servicesSuspendFlags) {
			if (data.servicesSuspendFlags.length > 0) {
				for (var property in data.servicesSuspendFlags[0]) {
					if (data.servicesSuspendFlags[0].hasOwnProperty(property)) {
						//$("#chkServices_"+ property).prop("checked", data.servicesSuspendFlags[property]);
						$("input:checkbox[id=chkServices_" + property + "]").prop("checked", data.servicesSuspendFlags[0][property]);
					}
				}
			}
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

	$("input[id*=txtservicedetail]").attr({ "disabled": "disabled" });
	$("textarea[id*=txtservicedetail]").attr({ "disabled": "disabled" });
	$("select[id*=optservicedetail]").attr({ "disabled": "disabled" });
	$("input[id*=chkservicedetail]").attr({ "disabled": "disabled" });

	getAjaxFunc("customers/" + customerKey + "/services/" + serviceKey, setServiceDetail, "");
}

function setServiceDetail(data, issuccess) {
	if (issuccess) {
		if (data.send_service) {
			$("#divservicedetailInbound").hide();
			$("#divservicedetailOutbound").show();
			for (var property in data.send_service.common) {
				if (data.send_service.common.hasOwnProperty(property)) {
					$("input[id=txtservicedetailO" + property + "]").val(data.send_service.common[property]);
				}
			}
			for (var property in data.send_service.general) {
				if (data.send_service.general.hasOwnProperty(property)) {
					$("input[id=txtservicedetailO" + property + "]").val(data.send_service.general[property]);
					$("input:checkbox[id=chkservicedetailO" + property + "]").prop("checked", data.send_service.general[property]);
				}
			}

			if (data.send_service.common.status_color_code) {
				if (data.send_service.common.status_color_code == "#FFC3C6") {
					$("#divservicedetailOstatus").removeClass("green white");
					$("#divservicedetailOstatus").addClass("red");

				} else if (data.send_service.common.status_color_code == "#C0FFC0") {
					$("#divservicedetailOstatus").removeClass("white red");
					$("#divservicedetailOstatus").addClass("green");
				} else {
					$("#divservicedetailOstatus").removeClass("green red");
					$("#divservicedetailOstatus").addClass("white");
				}
			}
			$("#optservicedetailOemail_addresses").empty();
			if (data.send_service.general.email_addresses) {
				$.each(data.send_service.general.email_addresses, function (i, val) {
					$("#optservicedetailOemail_addresses").append($("<option>", {
						value: val,
						text: val
					}));
				});
			}


			// $("#optservicegift_unit_type").val("");
			// if (data.service_gift["gift_unit_type"] !== "") {
			// 	setTimeout(function () {
			// 		getAjaxFunc("/lookup/giftunittypes", setGiftUnitTypeOptionSetsFunc, data.service_gift["gift_unit_type"]);
			// 	}, 400);
			// }
		}

		if (data.inbox_service) {
			$("#divservicedetailInbound").show();
			$("#divservicedetailOutbound").hide();

			$("#optservicedetailIphoneCity").empty();
			$("#optservicedetailIphoneNumber").empty();
			$("#optservicedetailIemailAddresses").empty();

			for (var property in data.inbox_service) {
				if (data.inbox_service.hasOwnProperty(property)) {
					$("input[id=txtservicedetailI" + property + "]").val(data.inbox_service[property]);
					$("input:checkbox[id=chkservicedetailI" + property + "]").prop("checked", data.inbox_service[property]);
				}
			}
			if (data.inbox_service.emailAddresses) {
				$.each(data.inbox_service.emailAddresses, function (i, val) {
					$("#optservicedetailIemailAddresses").append($("<option>", {
						value: val,
						text: val
					}));
				});
			}


			if (data.inbox_service.phoneCity) {
				setOptionSetsForceDefaultValue("", "#optservicedetailIphoneCity", data.inbox_service.phoneCity, "", "", data.inbox_service.phoneCity);
			}


			if (data.inbox_service.phoneNumber) {

				setOptionSetsForceDefaultValue("", "#optservicedetailIphoneNumber", data.inbox_service.phoneNumber, "", "", data.inbox_service.phoneNumber);
			}
			if (data.inbox_service.salesRep) {
				if (data.inbox_service.salesRepStatus) {
					getSetSDSalesRepOptionSetFunc(data.inbox_service.salesRepStatus, data.inbox_service.salesRep)
				}
			}

			if (data.inbox_service.faxEnabled) {
				if (data.inbox_service.faxEnabled == "#FFC3C6") {
					$("#divservicedetailIfaxEnabled").removeClass("green white");
					$("#divservicedetailIfaxEnabled").addClass("red");

				} else if (data.inbox_service.faxEnabled == "#C6FFC6" || data.inbox_service.faxEnabled == "#C0FFC0") {
					$("#divservicedetailIfaxEnabled").removeClass("white red");
					$("#divservicedetailIfaxEnabled").addClass("green");
				} else {
					$("#divservicedetailIfaxEnabled").removeClass("green red");
					$("#divservicedetailIfaxEnabled").addClass("white");
				}
			}

			if (data.inbox_service.ported) {
				if (data.inbox_service.ported == "#FFC3C6") {
					$("#divservicedetailIported").removeClass("green white");
					$("#divservicedetailIported").addClass("red");

				} else if (data.inbox_service.ported == "#C6FFC6" || data.inbox_service.ported == "#C0FFC0") {
					$("#divservicedetailIported").removeClass("white red");
					$("#divservicedetailIported").addClass("green");
				} else {
					$("#divservicedetailIported").removeClass("green red");
					$("#divservicedetailIported").addClass("white");
				}
			}

			setTimeout(function () {
				getAjaxFunc("/lookup/offercodes", setofferCodesOptionSetsFunc, data.inbox_service["offerCode"]);
			}, 400);

			setTimeout(function () {
				getAjaxFunc("/lookup/jfaxlanguages", setjFaxLanguagesOptionSetsFunc, data.inbox_service["primaryLanguage"]);
			}, 400);

			setTimeout(function () {
				getAjaxFunc("/lookup/faxformats", setfaxFormatsOptionSetsFunc, data.inbox_service["faxFormat"]);
			}, 400);
		}

	}
}
function setofferCodesOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.offer_codes) {
			setOptionSets(data.offer_codes, "#optservicedetailIofferCode", selectedbydefault, "code", "description", true);
		}
	}
}
function setjFaxLanguagesOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.languages) {
			setOptionSets(data.languages, "#optservicedetailIprimaryLanguage", selectedbydefault, "code", "description", true);
		}
	}
}
function setfaxFormatsOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.faxFormats) {
			//setOptionSets(data.faxFormats, "#optservicedetailIfaxFormat", selectedbydefault, "faxFormatCode", "description", true);
			setOptionSets(data.faxFormats, "#optservicedetailIfaxFormat", selectedbydefault, "description", "description", true);
		}
	}
}

//==END::: Service -> Service Detail TAB

//START::: Service -> Usage TAB

function clearServiceUsageTab() {
	$("input[id*=txtserviceusage]").val("");
	$("#txtserviceusagetotal").removeAttr("style");
	$("#chkserviceusageauto_reorder").prop("checked", false);
}

function getServiceUsageTab() {
	clearServiceUsageTab();
	$("*[id*=serviceusage]").attr({ "disabled": "disabled" });

	setTimeout(function () {
		//get and set Account Balances
		getAjaxFunc("/customers/" + customerKey + "/accountbalances", setServiceUsageTab, "");
	}, 300);

	setTimeout(function () {
		//get and set Usage Balaces
		getAjaxFunc("/customers/" + customerKey + "/usages", setServiceUsageTab, "");
	}, 400);
}
function setReorderAmountOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.reorderAmount) {
			setOptionSets(data.reorderAmount, "#optserviceusagereorder_amount", selectedbydefault, "reorder_amount", "reorder_amount", true);
		}
	}
}

function setServiceUsageTab(data, issuccess) {
	if (issuccess) {
		if (data.account_balances) {
			for (var property in data.account_balances) {
				if (data.account_balances.hasOwnProperty(property)) {
					$("input[id=txtserviceusage" + property + "]").val(data.account_balances[property]);
				}
			}
			if (data.account_balances.total_main_balance_color_code) {
				if (data.account_balances.total_main_balance_color_code != "#FFFFFF") {
					$("#txtserviceusagetotal").attr("style", "background-color:" + data.account_balances.total_main_balance_color_code + "")
				}
			}
		}

		if (data.usages) {
			for (var property in data.usages.current_amount) {
				if (data.usages.current_amount.hasOwnProperty(property)) {
					$("input[id=txtserviceusage" + property + "]").val(data.usages.current_amount[property]);
				}
			}
			for (var property in data.usages.setup) {
				if (data.usages.setup.hasOwnProperty(property)) {
					$("input[id=txtserviceusage" + property + "]").val(data.usages.setup[property]);
				}
				if (data.usages.setup.auto_reorder_flag) {
					$("#chkserviceusageauto_reorder").prop("checked", data.usages.setup.auto_reorder_flag);
				}

			}
			if (data.usages.setup.reorder_amount) {
				getAjaxFunc("/lookup/reorderamount?currencycode=" + currency_code, setReorderAmountOptionSetsFunc, data.usages.setup.reorder_amount);
			}


		}
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

	if (serviceKey) {
		getAjaxFunc("services/" + serviceKey + "/servicegifts", setGiftsGrid, "");
	}
}
function setGiftsGrid(data, issuccess) {
	var newrow = $("<tr />");
	if (issuccess) {
		if (data.gifts) {
			drawGiftsTable(data.gifts);
		}
		else {
			$("#tblISPgifts > tbody").html("");
			$("#tblISPgifts").append(newrow);
			newrow.append($("<td colspan=8 style=\"width:90%\">No Gift & Usages found in the System</td>"));
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
	btnGiftsClick();
	if (data.length > 0) {
		$("#tblISPgifts > tbody").children(":first").children(":first").children(":first").trigger("click");
		$("#lblNoOfRecordsGifts").html(data.length + " row(s) returned.").show();
	}

}

function drawGiftsRows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPgifts").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	row.append($("<td><a href=\"#\" id=\"servicegifts" + rowData.number + "\" data-servicegifts=\"" + rowData.number + "\">" + rowData.number + "</a></td>"));
	row.append($("<td>" + rowData.start_date + "</td>"));
	row.append($("<td>" + rowData.end_date + "</td>"));
	row.append($("<td>" + rowData.gift_unit_type + "</td>"));
	row.append($("<td>" + rowData.gift_amount + "</td>"));
	row.append($("<td>" + rowData.balance + "</td>"));
	row.append($("<td>" + rowData.create_date_time + "</td>"));
}

function btnGiftsClick() {
	$("a[id*=servicegifts]").click(function (e) {

		clearGiftsTab();

		var servicegifts = $(this).data("servicegifts");
		getAjaxFunc("services/servicegifts/" + servicegifts, setGiftsDetails, "");

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});
}
function setGiftsDetails(data, issuccess) {
	if (issuccess) {
		if (data.service_gift) {
			for (var property in data.service_gift) {
				if (data.service_gift.hasOwnProperty(property)) {
					$("input[id=txtservicegift" + property + "]").val(data.service_gift[property]);
				}
			}
			$("#optservicegift_unit_type").val("");
			if (data.service_gift["gift_unit_type"] !== "") {
				setTimeout(function () {
					getAjaxFunc("/lookup/giftunittypes", setGiftUnitTypeOptionSetsFunc, data.service_gift["gift_unit_type"]);
				}, 400);
			}
		}
	}
}
function setGiftUnitTypeOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.gift_unit_types) {
			setOptionSets(data.gift_unit_types, "#optservicegift_unit_type", selectedbydefault, "type", "description", true);
		}
	}
}


//==END::: Service -> Gift and Usage TAB

//==START::: Service -> Fax Usage History TAB

function getServiceFaxUsage() {
	sortingFaxUsage();
	if (serviceKey) {
		pageFaxUsageStartAt = 1;
		getAjaxFunc("services/" + serviceKey + "/serviceusagelog?startAt=" + pageFaxUsageStartAt + "&maxResults=" + pageFaxUsagePageSize, setFaxUsagePageParams, true);
	}
}

function getFaxUsageGridPages() {
	getAjaxFunc("services/" + serviceKey + "/serviceusagelog?startAt=" + pageFaxUsageStartAt + "&maxResults=" + pageFaxUsagePageSize + "&order=" + sortFaxUsageType + "&orderBy=" + sortFaxUsageBy, setFaxUsageGrid, "");
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
		}
	});
}

function setFaxUsagePageParams(data, issuccess, settingFirstTime) {
	if (settingFirstTime) {
		if (issuccess) {
			if (data.inbox_service_usage_log || data.send_service_usage_log) {
				pageFaxUsageTotalRecords = parseInt(data.total);
				pageFaxUsageTotalPage = setNumberOfPages(pageFaxUsageTotalRecords, pageFaxUsagePageSize);

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
				if (data.inbox_service_usage_log) {
					sortFaxUsageBy = "msg_time";
					sortFaxUsageType = "DESC";
					$("#spnSrtFaxUsageImsg_timeDesc").show();
					$("#spnSrtFaxUsageImsg_timeDesc").parent().parent().parent().addClass("active");
				} else if (data.send_service_usage_log) {
					sortFaxUsageBy = "usage_date_time";
					sortFaxUsageType = "DESC";
					$("#spnSrtFaxUsageOusage_date_timeDesc").show();
					$("#spnSrtFaxUsageOusage_date_timeDesc").parent().parent().parent().addClass("active");
				}
				faxUsagePageChange();
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
		if (data.inbox_service_usage_log) {
			$("#tblISPserviceIFaxUsage").show();
			$("#tblISPserviceOFaxUsage").hide();
			drawFaxUsageInboundTable(data);
		}
		else if (data.send_service_usage_log) {
			$("#tblISPserviceIFaxUsage").hide();
			$("#tblISPserviceOFaxUsage").show();
			drawFaxUsageSendTable(data);
		}
		else {
			$("#tblISPserviceOFaxUsage").hide();
			$("#tblISPserviceIFaxUsage").show();

			$("#tblISPserviceIFaxUsage > tbody").html("");
			$("#tblISPserviceIFaxUsage").append(newrow);
			newrow.append($("<td colspan=8 style=\"width:90%\">No service usage log(s) found in the system</td>"));
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
		}
		else {
			$("#tblISPserviceOFaxUsage").hide();
			$("#tblISPserviceIFaxUsage").show();

			$("#tblISPserviceIFaxUsage > tbody").html("");
			$("#tblISPserviceIFaxUsage").append(newrow);
			newrow.append($("<td colspan=8 style=\"width:90%\">Request Cancelled.</td>"));
			CancelRequest = false;
		}
	}
}

function drawFaxUsageInboundTable(data) {

	$("#tblISPserviceIFaxUsage > tbody").html("");
	$("#tblISPserviceIFaxUsage > tfoot").html("");
	$("#tblISPserviceIFaxUsage > thead > tr:first-child").removeClass();
	if (data.inbox_service_usage_log.length > 5) {
		$("#tblISPserviceIFaxUsage > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
	}
	for (var i = 0; i <= data.inbox_service_usage_log.length; i++) {
		if (i < data.inbox_service_usage_log.length) {
			drawFaxUsageInboundRows(data.inbox_service_usage_log[i]);
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

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPserviceIFaxUsage").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	
	row.append($("<td>" + rowData.msg_time + "</td>"));
	row.append($("<td>" + rowData.csid + "</td>"));
	row.append($("<td>" + rowData.pages + "</td>"));
	row.append($("<td>" + rowData.duration + "</td>"));
	row.append($("<td>" + rowData.amount + "</td>"));
	row.append($("<td>" + rowData.bill_pages + "</td>"));

	row.append($("<td>" + rowData.bill_duration + "</td>"));
	row.append($("<td>" + rowData.bill_amount + "</td>"));
	row.append($("<td>" + rowData.billing_date_time + "</td>"));
	row.append($("<td>" + rowData.msg_type + "</td>"));

	row.append($("<td>" + rowData.pay_stat + "</td>"));
	row.append($("<td>" + rowData.status + "</td>"));
	row.append($("<td>" + rowData.phonenumber + "</td>"));
	row.append($("<td>" + rowData.email + "</td>"));
}


function drawFaxUsageSendTable(data) {
	$("#tblISPserviceOFaxUsage > tfoot").html("");
	$("#tblISPserviceOFaxUsage > tbody").html("");
	$("#tblISPserviceOFaxUsage > thead > tr:first-child").removeClass();
	if (data.send_service_usage_log.length > 5) {
		$("#tblISPserviceOFaxUsage > thead > tr:first-child").addClass("reduceWidthOfTableHeader");
	}
	for (var i = 0; i <= data.send_service_usage_log.length; i++) {
		if (i < data.send_service_usage_log.length) {
			drawFaxUsageSendRows(data.send_service_usage_log[i]);
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

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPserviceOFaxUsage").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	
	row.append($("<td>" + rowData.usage_date_time + "</td>"));
	row.append($("<td>" + rowData.message_id + "</td>"));
	row.append($("<td>" + rowData.destination + "</td>"));
	row.append($("<td>" + rowData.csid + "</td>"));
	row.append($("<td>" + rowData.subject + "</td>"));
	row.append($("<td>" + rowData.pages + "</td>"));

	row.append($("<td>" + rowData.bill_retry + "</td>"));
	row.append($("<td>" + rowData.duration + "</td>"));
	row.append($("<td>" + rowData.adj_pages + "</td>"));
	row.append($("<td>" + rowData.status + "</td>"));

	row.append($("<td>" + rowData.last_attempt_duration + "</td>"));
	row.append($("<td>" + rowData.errorkey + "</td>"));
	row.append($("<td>" + rowData.bill_pages + "</td>"));

	row.append($("<td>" + rowData.bill_amount + "</td>"));
	row.append($("<td>" + rowData.bill_duration + "</td>"));
	row.append($("<td>" + rowData.last_attempt_amount + "</td>"));
	row.append($("<td>" + rowData.last_attempt_status + "</td>"));

	row.append($("<td>" + rowData.giftable_zone + "</td>"));
	row.append($("<td>" + rowData.country + "</td>"));
	row.append($("<td>" + rowData.send_colo + "</td>"));
	row.append($("<td>" + rowData.comments + "</td>"));

	row.append($("<td>" + rowData.resource_id + "</td>"));
	row.append($("<td>" + rowData.type + "</td>"));
}


//==END::: Service -> Fax Usage History TAB

//==START::: Event Tab
function clearEventsTab() {
	$("input[id*=txtevents]").val("");
	$("textarea[id*=txtevents]").val("");
	$("#chkeventsbill_status").prop("checked", false);
	$("#opteventspriority").removeAttr("style");

}
function getEventsGrid() {
	clearEventsTab();
	//disable all the controls
	$("input[id*=txtevents]").attr({ "disabled": "disabled" });
	$("textarea[id*=txtevents]").attr({ "disabled": "disabled" });
	$("select[id*=optevents]").attr({ "disabled": "disabled" });
	$("#chkeventsbill_status").attr({ "disabled": "disabled" });

	if (customerKey) {
		getAjaxFunc("customers/" + customerKey + "/events?startAt=" + pageEventsStartAt + "&maxResults=" + pageEventsPageSize, setEventsPageParams, true);
	}
}

function getEventsGridPages() {
	getAjaxFunc("customers/" + customerKey + "/events?startAt=" + pageEventsStartAt + "&maxResults=" + pageEventsPageSize, setEventsGrid, "");
}

function eventsPageChange() {
	$("a[id*=hrefpageEvents]").click(function (e) {
		var pagebtn = $(this).data("pagebtn");
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
		e.preventDefault();
	});


	$("#txtpageEventsCurrentPage").keyup(function (e) {
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
				pageEventsTotalRecords = parseInt(data.total);
				pageEventsTotalPage = setNumberOfPages(pageEventsTotalRecords, pageEventsPageSize);

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
				eventsPageChange();
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
	btnEventskeyClick();
	if (data.length > 0) {
		if (!Eventsclickedforfirsttime) {
			$("#tblISPevents > tbody").children(":first").children(":first").next().children(":first").next().trigger("click");
			Eventsclickedforfirsttime = true;
		}
	}
	$("#tblISPevents > tbody").scrollTop(0);
}

function drawEventsRows(rowData) {

	var row = $("<tr style=\"background-color:" + rowData.row_color_code + " \">");
	$("#tblISPevents").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
	if (rowData.event_status) {
		row.append($("<td> <input type=\"checkbox\" checked disabled /></td>"));
	}
	else {
		row.append($("<td> <input type=\"checkbox\" disabled /></td>"));
	}

	row.append($("<td>" + rowData.sorting_date + "</br><a href=\"#\" id=\"eventskey" + rowData.event_key + "\" data-eventskey=\"" + rowData.event_key + "\">#" + rowData.event_key + "</a></td>"));
	row.append($("<td>" + (rowData.type_subtype_display ? rowData.type_subtype_display.replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + "</td>"));
	row.append($("<td>" + (rowData.assginment_display ? rowData.assginment_display.replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + "</td>"));
	row.append($("<td>" + (rowData.notes_display ? rowData.notes_display.replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/"/ig, "&quot;").replace(/'/, "&apos;").replace(/(?:\r\n|\r|\n)/g, "<br />") : "") + "</td>"));
}

function btnEventskeyClick() {
	$("a[id*=eventskey]").click(function (e) {

		clearEventsTab();

		eventskey = $(this).data("eventskey");
		getAjaxFunc("events/" + eventskey, setEventskeyDetails, "");

		return false; // prevent default click action from happening!
		e.preventDefault(); // same thing as above
	});
}
function setEventskeyDetails(data, issuccess) {
	if (issuccess) {
		if (data.event_detail) {
			for (var property in data.event_detail) {
				if (data.event_detail.hasOwnProperty(property)) {
					$("input[id=txtevents" + property + "]").val(data.event_detail[property]);
					$("textarea[id=txtevents" + property + "]").val(data.event_detail[property]);
				}
			}
			if (data.event_detail.completion_date_color_code) {
				if (data.event_detail.completion_date_color_code != "#D6D3CE") {
					$("#txteventscompletion_date").attr("style", "background-color:" + data.event_detail.completion_date_color_code);
				}
				else {
					$("#txteventscompletion_date").removeAttr("style");
				}

			}
			if (data.event_detail["bill_status"] != "N" && data.event_detail["bill_status"] != "") {
				$("#chkeventsbill_status").prop("checked", true);
			}
			else {
				$("#chkeventsbill_status").prop("checked", false);
			}

			$("#opteventsevent_type").val(data.event_detail["event_type"]);
			if (data.event_detail["event_type"] !== "") {
				setTimeout(function () {
					getAjaxFunc("lookup/eventtypes", setEventTypeOptionSetsFunc, data.event_detail);
				}, 150);
			}

			$("#opteventsassignment_type").val("");
			if (data.event_detail["assignment_type"] !== "") {
				setTimeout(function () {
					getAjaxFunc("lookup/assignmenttypes", setEventAssignmentTypeOptionSetsFunc, data.event_detail["assignment_type"]);
				}, 150);
				//$("#opteventsassignment_types").append("<option val=\""+ data.event_detail["assignment_type"] +"\">"+ data.event_detail["assignment_type_description"] +"</option")
				

				if (data.event_detail["assignment_type"] == "G") {
					setTimeout(function () {
						getAjaxFunc("lookup/usersgroups?assignmenttype=G", setEventAssigneeGroupOptionSetsFunc, data.event_detail);
					}, 150);
				}
				else if (data.event_detail["assignment_type"] == "U") {
					setTimeout(function () {
						getAjaxFunc("lookup/usersgroups?assignmenttype=U", setEventAssigneeUserOptionSetsFunc, data.event_detail);
					}, 150);
				}
				else {
					setTimeout(function () {
						getAjaxFunc("lookup/usersgroups?assignmenttype=" + data.event_detail["assignment_type"], setEventAssigneeUserOptionSetsFunc, data.event_detail);
					}, 150);
					/*
					if (!($("#opteventsassignee option[val='']").length > 0)) {
						$("#opteventsassignee").append($("<option>", { value: '', text: '' }));
					}
					$("#opteventsassignee").val("");*/
				}
				//$("#opteventsassignee").val(data.event_detail["assignee"]);
			}

			setTimeout(function () {
				getAjaxFunc("/lookup/priorities", setEventPrioritiesOptionSetsFunc, (data.event_detail["priority"] === "" ? "None" : data.event_detail["priority"]));
			}, 150);
			if (data.event_detail["priority_color_code"]) {
				$("#opteventspriority").attr("style", "background:" + data.event_detail["priority_color_code"]);
			}
		}
	}
}
function setEventTypeOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.event_types) {
			setOptionSetsForceDefaultValue(data.event_types, "#opteventsevent_type", selectedbydefault["event_type"], "type", "description", selectedbydefault["event_type"]);
		}
	}
}
function setEventAssignmentTypeOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.assignment_types) {
			setOptionSets(data.assignment_types, "#opteventsassignment_type", selectedbydefault, "type", "description", true);
		}
	}
}

function setEventAssigneeUserOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.users) {
			setOptionSetsForceDefaultValue(data.users, "#opteventsassignee", selectedbydefault["assignee"], "user_id", "user_id", selectedbydefault["assignee"]);
		}
	}
}

function setEventAssigneeGroupOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.groups) {
			setOptionSetsForceDefaultValue(data.groups, "#opteventsassignee", selectedbydefault["assignee"], "group_id", "group_id", selectedbydefault["assignee"]);
		}
	}
}

function setEventPrioritiesOptionSetsFunc(data, issuccess, selectedbydefault) {
	if (issuccess) {
		if (data.priorties) {
			setOptionSets(data.priorties, "#opteventspriority", selectedbydefault, "code", "description", true);
		}
	}
}

function setNumberOfPages(totalnumberofrecords, pagesize) {
	return Math.ceil(totalnumberofrecords / pagesize);
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
			contactform_original_data = $("#contact :input").serialize()
			contact_form_keypress = true;
		}
	})
}

function changeSelectCountry() {
	$("#optcontactcountry_code").change(function () {
		if ($(this).val() == "US") {
			//$("#txtcontactzip_code").attr({ "pattern": "(\\d{5,})" });
			$("#txtcontactzip_code").attr({ "pattern": "(\\d{5}([\-]\\d{4})?)" });
		} else {
			$("#txtcontactzip_code").removeAttr("pattern");
		}

	});
}

function companyNameRequired(iscorpaccount) {
	if (iscorpaccount) {
		$("#divRequiredCompany").show();
		$("#txtcontactcompany").attr({ "required": "required" });
	}
	else {
		$("#divRequiredCompany").hide();
		$("#txtcontactcompany").removeAttr("required");
	}

}

function onchangeSalesRep() {
	$("#optcontactsales_rep").change(function () {
		if ($(this).val() !== "") {
			getAjaxFunc("users/" + $(this).val() + "/usergroup", setSalesGroup, "");
		} else {
			$("#txtcontactsales_group").val("");
		}
	});
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
	$("#btnSaveContact").click(function () {
		turnOffContactErrors();
		var txtContacts = $("input[id*=txtcontact]");
		txtContacts.each(function () {
			$(this).val($.trim($(this).val()));
		});
		if (validateContactForm()) {
			if (contact_form_keypress && $("#contact :input").serialize() != contactform_original_data) {
				validateEmailAddresses();
				contactform_original_data = $("#contact :input").serialize();
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
		objcontact_detail.contact_detail = new Object();
		objcontact_detail.contact_detail["notes"] = $("#txtcontactnotes").val();

		var txtContacts = $("input[id*=txtcontact]");
		txtContacts.each(function () {
			var attrid = $(this).attr("id");
			var propname = attrid.replace("txtcontact", "");
			objcontact_detail.contact_detail[propname] = $(this).val();

		});
		var optContacts = $("select[id*=optcontact]");
		optContacts.each(function () {
			var attrid = $(this).attr("id");
			var propname = attrid.replace("optcontact", "");
			if (propname == "oems") {
				propname = "oem_id";
			}
			if (propname == "sales_rep") {
				propname = "sales_representative";
			}
			objcontact_detail.contact_detail[propname] = ($(this).val() !== null ? $(this).val() : "");
		});
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
				$("#divContactMainError > span").append("</br>" + data.errors[0].developer_message);
				$("#divContactMainError").show();
			}
		}
		else {
			$("#divContactMainSuccess").show();
		}
	} else {
		$("#divContactMainError > span").append("</br>" + data.responseJSON.errors[0].developer_message);
		$("#divContactMainError").show();
	}
}

//END::: Contact Tab ---- "SAVE"

//START:: Contact Tab -- Send welcome letter

function btnSendWelcomeLetterClick() {
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
	getAjaxFunc("customers/" + customerKey + "/sendwelcomeemail", setSendWelcomeEmail)
}
function setSendWelcomeEmail(data, issuccess) {
	if (issuccess) {
		alert("Welcome Letter Sent");
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

//CSS//
$(document).ready(function () {
	function layoutwidth() {
		var layoutwidth = $(window).width();
		layoutwidth = layoutwidth - 100;
		$('.service-inner-tab-section').css('width', layoutwidth);
	}
	layoutwidth();
    $(window).resize(function () {
		layoutwidth();
    });
});
//END CSS//


