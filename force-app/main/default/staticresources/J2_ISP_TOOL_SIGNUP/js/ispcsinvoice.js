//"use strict";


var token_errors = [
    "TOKEN_INVALID",
    "MISSING_TOKEN",
    "DECRYPTION_FAILED",
    "TOKEN_EXPIRED",
    "ACCESS_FAILED"
];

var oemid = "";

function preload() {
    if ($("body").data("apiurl")) {
        // show only search customer section.
        //chek if we have user token...if not then show popup.
        //if yes then call one api by passing that token in header.
        //if API gives token error then we will show login pop up.
        // else we will continue.
        getServiceDetail();
        console.log("ispuserToken " + $("body").data("ispuserToken"));
        if ($("body").data("ispuserToken") !== "") {
            // first api call which will check Token erros too. And if there is no token error then 
            // this further API's will be called.
            $("#DivWaitprocess").show();
            $("#DivDisablePage").hide();
            $("#DivWaitprocessWithButton").hide();
            // getCallNoHeader()
        }

        else {
            // showLoginScreen();
        }
    }
    else {

        setTimeout(function () {
            preload();
        }, 800);

    }
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

function getServiceDetail() {
    getAjaxFunc("customers/" + $.query.get("customer") + "/invoices/" + $.query.get("billnumber"), setInvoiceDetail, "");
}


function setInvoiceDetail(data, issuccess) {
    if (issuccess) {
        //  $("#divservicedetailInbound").hide();
        //  $("#divservicedetailOutbound").show();
        for (var property in data.invoice) {
            if (data.invoice.hasOwnProperty(property)) {
                $("label[id=lblinvoice" + property + "]").html(data.invoice[property]);
                $("td[id=lblinvoice" + property + "]").html(data.invoice[property]);
            }
        }
        for (var property in data.invoice.customer_address) {
            if (data.invoice.customer_address.hasOwnProperty(property)) {
                $("label[id=lblcust" + property + "]").html(data.invoice.customer_address[property]);
                $("td[id=lblcust" + property + "]").html(data.invoice.customer_address[property]);

            }
        }

        for (var property in data.invoice.oem) {
            if (data.invoice.oem.hasOwnProperty(property)) {
                $("label[id=lbloem" + property + "]").html(data.invoice.oem[property]);
                $("td[id=lbloem" + property + "]").html(data.invoice.oem[property]);

            }
        }


        $("#lbloemcityaddress").html((data.invoice.oem.city ? data.invoice.oem.city + "," : "")
            + (data.invoice.oem.mailregion ? data.invoice.oem.mailregion : "") +
            " " + (data.invoice.oem.mailcode ? data.invoice.oem.mailcode : ""));


        $("#lblcustcityaddress").html((data.invoice.customer_address.city ? data.invoice.customer_address.city + "," : "")
            + (data.invoice.customer_address.state_prov ? data.invoice.customer_address.state_prov : "") +
            " " + (data.invoice.customer_address.postal_code ? data.invoice.customer_address.postal_code : ""));
        $("#lblinvoicename").html((data.invoice.first_name ? data.invoice.first_name : "") + " " + (data.invoice.last_name ? data.invoice.last_name : ""));
       




        $("#lblinvoiceoemcity").html(data.invoice.oem.city);
        $("#lblinvoiceoememailregion").html(data.invoice.oem.mailregion);
        $("#lblinvoiceoemmailcode").html(data.invoice.oem.mailcode);


        
        $("#lbloemhelpurl").html("Online Help: " + (data.invoice.oem.help_url ? data.invoice.oem.help_url : ""));
        $("#lbloemhelemail").html("Email: " + (data.invoice.oem.email ? data.invoice.oem.email : ""));
       

        $("#lblinvoicepaymentdue").html(" Please note that it may take up to 5 business days to process your payment.  Make sure to include your " + (data.invoice.oem.service_name ? data.invoice.oem.service_name : "") + ($.query.get("oemid") == "7" ? " account number: " + (data.invoice.primary_conf_id ? data.invoice.primary_conf_id : "") + " " : " phone number: " + (data.invoice.primary_phone_number ? data.invoice.primary_phone_number : "") + "") + " with your payment, or print this email and send it with your payment.");
        $("#lblinvoicepaymentoverdue2").html("To restore your service, please send a payment a soon as possible.  Please note that it may take up to 5 business days to process your payment.  Make sure to include your " + (data.invoice.oem.service_name ? data.invoice.oem.service_name : "") + ($.query.get("oemid") == "7" ? " account number" : " phone number") + "  with your payment, or print this email and send it with your payment.");
        $("#lblinvoicepaymentoverdue1").html("We did not receive payment for your " + (data.invoice.oem.service_name ? data.invoice.oem.service_name : "") + " service on the due date. To cover your overdue account balance, we applied money from your usage balance, and suspended use of usage-based services until we receive your payment. For an itemized account statement, please refer to the email bill sent to you two weeks prior to your due date.");
        $("#lbloemloginurl").html((data.invoice.oem.login_url ? data.invoice.oem.login_url : ""));


      

        if (data.invoice.section_code) {
            if (data.invoice.section_code == "CURRENT BALANCE") {
                $("#invoicecurrentbalance").show();
            } else if (data.invoice.section_code == "CREDITCARD DUE") {
                $("#invoiceccdue").show();
            } else if (data.invoice.section_code == "PAYMENT DUE") {
                $("#lblinvoicepaymentdue").show();
                $("#invoicemoneyorder").show();
                $("#invoicebankdtls").show();
            } else if (data.invoice.section_code == "PAYMENT OVERDUE") {
                $("#lblinvoicepaymentoverdue1").show();
                $("#lblinvoicepaymentoverdue2").show();
                $("#invoicemoneyorder").show();
                $("#invoicebankdtls").show();
            }
        }

        
        //For Uk Customer Setting Invoice Report Data
         if (data.invoice.bill_email_format_file == "BillEmailFormatUK.txt") {

            $("#lblmoneryOrdersummary").html("Personal cheques can be sent to:");
            $("#lblbanksummary").html("BACS payments should be made to:");
            $("#lblinvoiceoemname").html("j2 Global UK Limited.");
            $("#lblinvoiceoemaddressline1").html("2 Hookstone Chase");
            $("#lblinvoiceoemaddressline2").html("Harrogate");
            $("#lblcityaddress").html("North Yorkshire");
            $("#lblinvoiceoemcountry").html("HG2 7HS");

            $("#lblbankname").html("Account Name:");
            $("#lblbankaddress").html("Bank:");
            $("#lblbankaccountname").html("Sort Code:");
            $("#lblbankaccountno").html("Account No:");
            $("#lblbankroutingno").html("Swift Code:");

            $("#lblinvoicebankname").html("j2 Global UK Limited.");
            $("#lblinvoicebankaddress1").html("National Westminster PLC");
            $("#lblinvoicebankaddress2").html("");
            $("#lblinvoiceaccountname").html("56 - 00 - 06");
            $("#lblinvoiceaccountno").html("10342907");
            $("#lblinvoiceroutingno").html("NWBKGB2L");

           
       
            $("#lbloemname").html("j2 Global UK Limited.");
            $("#lbloemaddressline1").html("2 Hookstone Chase");
            $("#lbloemaddressline2").html("Harrogate");
            $("#lbloemcityaddress").html("North Yorkshire");
            $("#lbloemcityaddress1").html("HG2 7HS");
            $("#lbloemcityaddress2").html("VAT Reg No. GB 734 6874 02");

            $("#lbloemnameshort").html("Customer Service, eFax Ltd.");
            $("#lbloemphone").html("Telephone: 44 (0)8707112211");

            if (data.invoice.section_code == "PAYMENT DUE"){
                 $("#lblinvoicepaymentdueterm").html("Terms of Trade: PAYMENT BY RETURN");
                 $("#lblinvoicepaymentdueterm").show();
            }
           
            
            

        } else {

            $("#lbloemnameshort").html((data.invoice.oem.name_short ? data.invoice.oem.name_short + " Customer Service" : ""));
            $("#lbloemphone").html("Telephone: " + (data.invoice.oem.telephone ? data.invoice.oem.telephone : ""));
            $("#lblmoneryOrdersummary").html("Money orders and personal checks can be sent to:");
            $("#lblbanksummary").html("Wire transfers should be submitted as follows:");
            if ($.query.get("oemid") == "7") {
                $("#lblinvoiceoemname").html(data.invoice.oem.name);
                $("#lblinvoiceoemaddressline1").html(data.invoice.oem.addressline1);
                $("#lblinvoiceoemaddressline2").html(data.invoice.oem.addressline2);
                $("#lblcityaddress").html((data.invoice.oem.city ? data.invoice.oem.city + "," : "")
                    + (data.invoice.oem.mailregion ? data.invoice.oem.mailregion : "") +
                    " " + (data.invoice.oem.mailcode ? data.invoice.oem.mailcode : ""));
                $("#lblinvoiceoemcountry").html(data.invoice.oem.country);
            } else {
                $("#lblinvoiceoemname").html("j2 Global Communications");
                $("#lblinvoiceoemaddressline1").html("P.O. Box 512008");
                $("#lblinvoiceoemaddressline2").html("");
                $("#lblcityaddress").html("Los Angeles, CA 90051-0008");
                $("#lblinvoiceoemcountry").html("U.S.A.");
            }

            $("#lblinvoicebankname").html("Union Bank of California");
            $("#lblinvoicebankaddress1").html("9460 Wilshire Blvd.");
            $("#lblinvoicebankaddress2").html("Beverly Hills, CA 90212");
            $("#lblinvoiceaccountname").html("j2 Global Communications, Inc.");
            $("#lblinvoiceaccountno").html("0720049163");
            $("#lblinvoiceroutingno").html("122000496");
        }

        drawTable(data.invoice.payment_items, (data.invoice.oem.service_name ? data.invoice.oem.service_name : ""), "tblinvoicepaymentreceivedsection", "invoicebillingpaymentreceivedsection");
        drawTable(data.invoice.adjustment_items, (data.invoice.oem.service_name ? data.invoice.oem.service_name : ""), "tblinvoiceadjustmentsection", "invoicebillingadjustmentsection");
        drawTable(data.invoice.charge_items, (data.invoice.oem.service_name ? data.invoice.oem.service_name : ""), "tblinvoicebillingdetailssection", "invoicebillingdetailssection");


    }

    else {

    }
}


//===START:::page load calls
$(function () {
    // show blurred screen with loading image (hide cancel button)
    $("#DivDisablePage").show();
    $("#invoice_pagestart").hide();
    oemid = $.query.get("oemid");


    $("#invoicecurrentbalance").hide();
    $("#invoiceccdue").hide();
    $("#lblinvoicepaymentdue").hide();
    $("#lblinvoicepaymentdueterm").hide();
    $("#invoicemoneyorder").hide();
    $("#invoicebankdtls").hide();
    $("#lblinvoicepaymentoverdue1").hide();
    $("#lblinvoicepaymentoverdue2").hide();
    $("#invoicemoneyorder").hide();
    $("#invoicebankdtls").hide();
    preload();

    setTimeout(function () {
        $("#DivWaitprocess").hide();
        $("#DivWaitprocessWithButton").hide();
        $("#invoice_pagestart").show();
    }, 3500);


});

//$(document).ready(function () {

//});

function drawTable(data, oemservicetypevalue, tablename, divId) {
    if (tablename == "tblinvoicebillingdetailssection") {
        $("#tblISPSearchResult > tbody").html("");
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                drawRowscurrentfees(data[i], oemservicetypevalue, tablename);
            }
        } else {
            $("#" + divId).hide();
        }
    } else {
        $("#tblISPSearchResult > tbody").html("");
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                drawRows(data[i], oemservicetypevalue, tablename);
            }
        } else {
            $("#" + divId).hide();
        }
    }


}

function drawRows(rowData, oemservicetypevalue, tablename) {

    var row = $("<tr>");
    $("#" + tablename).append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.post_date + "</td>"));
    row.append($("<td>" + (oemservicetypevalue ? oemservicetypevalue : "") + "</td>"));
    row.append($("<td>" + rowData.description + "</td>"));
    row.append($("<td>" + rowData.total_amount + "</td>"));
}
function drawRowscurrentfees(rowData, oemservicetypevalue, tablename) {

    var row = $("<tr>");
    $("#" + tablename).append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td   style='border-top: dashed 1px;padding:4px 0px 4px 0px;'>" + rowData.post_date + "</td>"));
    row.append($("<td   style='border-top: dashed 1px;padding:4px 0px 4px 0px;'>" + (oemservicetypevalue ? oemservicetypevalue : "") + "</td>"));
    row.append($("<td   style='border-top: dashed 1px;padding:4px 0px 4px 0px;'>" + rowData.description + "</td>"));
    row.append($("<td   style='border-top: dashed 1px;padding:4px 0px 4px 0px;'>" + rowData.total_amount + "</td>"));

    if (rowData.journal_items.length > 0) {
        var className = "linedotted";
        for (var i = 0; i < rowData.journal_items.length; i++) {
            className = (i == 0 ? "linedotted" : "");
            drawRowscurrentfeesJournalItem(rowData.journal_items[i], oemservicetypevalue, tablename, className);
        }
    }

}
function drawRowscurrentfeesJournalItem(rowData, oemservicetypevalue, tablename, className) {

    var row1 = $("<tr>");
    $("#" + tablename).append(row1); //  this will append tr element to table... keep its reference for a while since we will add cels into it
    row1.append($("<td > </td>"));
    row1.append($("<td> </td>"));
    row1.append($("<td class=" + className + ">" + rowData.description + "</td>"));
    row1.append($("<td class=" + className + ">" + rowData.display_amount + "</td>"));
}