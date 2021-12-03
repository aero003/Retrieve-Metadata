function loadjscssfile(filename, filetype) {
  if (filetype == "js") { //if filename is a external JavaScript file
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filename)
  }
  else if (filetype == "css") { //if filename is an external CSS file
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
  }
  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref)
}




function loadChat(orgURL, siteURL, orgID, eswLabel, contentURL, deploymentID, buttonID, liveAgentURL, eswID) {

  loadjscssfile(siteURL + '/resource/chat_resources/css/chat_styles.css?t=' + Date.now(), "css");

  // PROD Chat endpoint switcher
  if (contentURL == 'https://c.la4-c1-phx.salesforceliveagent.com/content') {
    contentURL = "https://c.la4-c1-dfw.salesforceliveagent.com/content";
  }
  if (liveAgentURL == "https://d.la4-c1-phx.salesforceliveagent.com/chat") {
    liveAgentURL = "https://d.la4-c1-dfw.salesforceliveagent.com/chat";
  }

  var initESW = function (gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

    //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

    //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
    //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

    // Settings for Chat
    //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
    // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
    // Returns a valid button ID.
    //};
    //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
    //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
    //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.defaultMinimizedText = "Chat With Us"
    embedded_svc.settings.entryFeature = 'LiveAgent';

    embedded_svc.settings.extraPrechatInfo = [{
      "entityFieldMaps": [{
        "doCreate": false,
        "doFind": false,
        "fieldName": "FirstName",
        "isExactMatch": true,
        "label": "First Name"
      },
      {
        "doCreate": false,
        "doFind": false,
        "fieldName": "LastName",
        "isExactMatch": true,
        "label": "Last Name"
      },
      {
        "doCreate": false,
        "doFind": true,
        "fieldName": "Email",
        "isExactMatch": true,
        "label": "Email"
      }],
      "entityName": "Contact"

    }];

    embedded_svc.settings.extraPrechatFormDetails = [
      {
        "label": "First Name", "transcriptFields": ["Pre_Chat_Form_First_Name__c"], "displayToAgent": true, "value": 'Guest'
      },
      {
        "label": "Last Name", "transcriptFields": ["Pre_Chat_Form_Last_Name__c"], "displayToAgent": true, "value": 'Unknown'
      },
      {
        "label": "Email", "transcriptFields": ["Pre_Chat_Form_Email__c"], "displayToAgent": true, "value": 'Unknown@unknown.unknown'
      },
      {
        "label": "Page URL", "value": location.href && location.href.substring(0, 255), "displayToAgent": true, "transcriptFields": ['Page_URL__c']
      }
    ];

    embedded_svc.init(
      orgURL,
      siteURL,
      gslbBaseURL,
      orgID,
      eswLabel,
      {
        baseLiveAgentContentURL: contentURL,
        deploymentId: deploymentID,
        buttonId: buttonID,
        baseLiveAgentURL: liveAgentURL,
        eswLiveAgentDevName: eswID,
        isOfflineSupportEnabled: false
      }
    );
  };

  if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', orgURL + '/embeddedservice/5.0/esw.min.js');
    s.onload = function () {
      initESW(null);
    };
    document.body.appendChild(s);
  } else {
    initESW('https://service.force.com');
  }


  var checker = setInterval(listenClick, 1000);
  var firstNameVal = "";
  var lastNameVal = "";
  var emailVal = "";

  function listenClick() {
    if (document.getElementById('Subject') != undefined) {
      document.getElementById('Subject').addEventListener("change", function () {
        firstNameVal = document.getElementById('FirstName').value;
        lastNameVal = document.getElementById('LastName').value;
        emailVal = document.getElementById('Email').value;
        console.log("Prechat first name: " + firstNameVal + " last: " + lastNameVal + " email: " + emailVal)
        embedded_svc.settings.extraPrechatFormDetails[0]['value'] = firstNameVal;
        embedded_svc.settings.extraPrechatFormDetails[1]['value'] = lastNameVal;
        embedded_svc.settings.extraPrechatFormDetails[2]['value'] = emailVal;
      })

      document.getElementById('Email').addEventListener("change", function () {
        emailVal = document.getElementById('Email').value;
        console.log("Prechat first name: " + firstNameVal + " last: " + lastNameVal + " email: " + emailVal)
        embedded_svc.settings.extraPrechatFormDetails[2]['value'] = emailVal;
      })

      document.getElementById('FirstName').addEventListener("change", function () {
        firstNameVal = document.getElementById('FirstName').value;
        console.log("Prechat first name: " + firstNameVal + " last: " + lastNameVal + " email: " + emailVal)
        embedded_svc.settings.extraPrechatFormDetails[0]['value'] = firstNameVal;
      })

      document.getElementById('LastName').addEventListener("change", function () {
        lastNameVal = document.getElementById('LastName').value;
        console.log("Prechat first name: " + firstNameVal + " last: " + lastNameVal + " email: " + emailVal)
        embedded_svc.settings.extraPrechatFormDetails[1]['value'] = lastNameVal;
      })

      clearInterval(checker)
    }
  }

}

function loadChatProactive(orgURL, siteURL, orgID, eswLabel, contentURL, deploymentID, buttonID, liveAgentURL, eswID) {

  loadjscssfile(siteURL + '/resource/chat_resources/css/chat_styles.css?t=' + Date.now(), "css");

  // PROD Chat endpoint switcher
  if (contentURL == 'https://c.la4-c1-phx.salesforceliveagent.com/content') {
    contentURL = "https://c.la4-c1-dfw.salesforceliveagent.com/content";
  }
  if (liveAgentURL == "https://d.la4-c1-phx.salesforceliveagent.com/chat") {
    liveAgentURL = "https://d.la4-c1-dfw.salesforceliveagent.com/chat";
  }

  document.write("<!-- Start of Invitations --><div class='embeddedServiceInvitation' id='snapins_invite' inert='true' aria-live='assertive' role='dialog' aria-atomic='true'>	<div class='embeddedServiceInvitationHeader' aria-labelledby='snapins_titletext' aria-describedby='snapins_bodytext'>		<img id='embeddedServiceAvatar'></img>		<span class='embeddedServiceTitleText' id='snapins_titletext'>Need help?</span>		<button type='button' id='closeInvite' class='embeddedServiceCloseIcon' aria-label='Exit invitation'>&times;</button>	</div>	<div class='embeddedServiceInvitationBody'>		<p id='snapins_bodytext'>How can we help you?</p>	</div>	<div class='embeddedServiceInvitationFooter' aria-describedby='snapins_bodytext'>		<button type='button' class='embeddedServiceActionButton' id='rejectInvite'>Close</button>		<button type='button' class='embeddedServiceActionButton' id='acceptInvite'>Start Chat</button>	</div></div><style type='text/css'>	#snapins_invite { background-color: #FFFFFF; font-family: 'Arial', sans-serif; overflow: visible; border-radius: 8px; visibility: hidden; }	.embeddedServiceInvitation { background-color: transparent; max-width: 290px; max-height: 210px; -webkit-box-shadow: 0 7px 12px rgba(0,0,0,0.28); -moz-box-shadow: 0 7px 12px rgba(0,0,0,0.28); box-shadow: 0 7px 12px rgba(0,0,0,0.28); }	@media only screen and (min-width: 48em) { /*mobile*/ .embeddedServiceInvitation { max-width: 332px; max-height: 210px; } }	.embeddedServiceInvitation > .embeddedServiceInvitationHeader { width: inherit; height: 32px; line-height: 32px; padding: 10px; color: #FFFFFF; background-color: #222222; overflow: initial; display: flex; justify-content: space-between; align-items: stretch; border-top-left-radius: 8px; border-top-right-radius: 8px; }	.embeddedServiceInvitationHeader #embeddedServiceAvatar { width: 32px; height: 32px; border-radius: 50%; }	.embeddedServiceInvitationHeader .embeddedServiceTitleText { font-size: 18px; color: #FFFFFF; overflow: hidden; word-wrap: normal; white-space: nowrap; text-overflow: ellipsis; align-self: stretch; flex-grow: 1; max-width: 100%; margin: 0 12px; }	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon { border: none; border-radius: 3px; cursor: pointer; position: relative; bottom: 3%; background-color: transparent; width: 32px; height: 32px; font-size: 23px; color: #FFFFFF; }	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus { outline: none; }	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus::before { content: ' '; position: absolute; top: 11%; left: 7%; width: 85%; height: 85%; background-color: rgba(255, 255, 255, 0.2); border-radius: 4px; pointer-events: none; }	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:active, .embeddedServiceCloseIcon:hover { background-color: #FFFFFF; color: rgba(0,0,0,0.7); opacity: 0.7; }	.embeddedServiceInvitation > .embeddedServiceInvitationBody { background-color: #FFFFFF; max-height: 110px; min-width: 260px; margin: 0 8px; font-size: 14px; line-height: 20px; overflow: auto; }	.embeddedServiceInvitationBody p { color: #333333; padding: 8px; margin: 12px 0; }	.embeddedServiceInvitation > .embeddedServiceInvitationFooter { width: inherit; color: #FFFFFF; text-align: right; background-color: #FFFFFF; padding: 10px; max-height: 50px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }	.embeddedServiceInvitationFooter > .embeddedServiceActionButton { font-size: 14px; max-height: 40px; border: none; border-radius: 4px; padding: 10px; margin: 4px; text-align: center; text-decoration: none; display: inline-block; cursor: pointer; }	.embeddedServiceInvitationFooter > #acceptInvite { background-color: #005290; color: #FFFFFF; }	.embeddedServiceInvitationFooter > #rejectInvite { background-color: #FFFFFF; color: #005290; }</style><scr" + "ipt type='text/javascript'>	(function() {		document.getElementById('closeInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); };		document.getElementById('rejectInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); };		document.getElementById('acceptInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.acceptInvite(); };		document.addEventListener('keyup', function(event) { if (event.keyCode == 27) { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }})	})();</scr" + "ipt><!-- End of Invitations -->")

  var initESW = function (gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

    //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
    //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

    //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
    //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

    // Settings for Chat
    //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
    // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
    // Returns a valid button ID.
    //};
    //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
    //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
    //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.defaultMinimizedText = "Chat With Us"
    embedded_svc.settings.entryFeature = 'LiveAgent';

    embedded_svc.settings.extraPrechatInfo = [{
      "entityFieldMaps": [{
        "doCreate": false,
        "doFind": false,
        "fieldName": "FirstName",
        "isExactMatch": true,
        "label": "First Name"
      },
      {
        "doCreate": false,
        "doFind": false,
        "fieldName": "LastName",
        "isExactMatch": true,
        "label": "Last Name"
      },
      {
        "doCreate": false,
        "doFind": true,
        "fieldName": "Email",
        "isExactMatch": true,
        "label": "Email"
      }],
      "entityName": "Contact"

    }];

    embedded_svc.settings.extraPrechatFormDetails = [
      {
        "label": "First Name", "transcriptFields": ["Pre_Chat_Form_First_Name__c"], "displayToAgent": true, "value": 'Guest'
      },
      {
        "label": "Last Name", "transcriptFields": ["Pre_Chat_Form_Last_Name__c"], "displayToAgent": true, "value": 'Unknown'
      },
      {
        "label": "Email", "transcriptFields": ["Pre_Chat_Form_Email__c"], "displayToAgent": true, "value": 'Unknown@unknown.unknown'
      },
      {
        "label": "Page URL", "value": location.href && location.href.substring(0, 255), "displayToAgent": true, "transcriptFields": ['Page_URL__c']
      }
    ];

    embedded_svc.init(
      orgURL,
      siteURL,
      gslbBaseURL,
      orgID,
      eswLabel,
      {
        baseLiveAgentContentURL: contentURL,
        deploymentId: deploymentID,
        buttonId: buttonID,
        baseLiveAgentURL: liveAgentURL,
        eswLiveAgentDevName: eswID,
        isOfflineSupportEnabled: false
      }
    );
  };

  if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', orgURL + '/embeddedservice/5.0/esw.min.js');
    s.onload = function () {
      initESW(null);
    };
    document.body.appendChild(s);
  } else {
    initESW('https://service.force.com');
  }


  var checker = setInterval(listenClick, 1000);

  function listenClick() {
    if (document.getElementById('Subject') != undefined) {
      document.getElementById('Subject').addEventListener("focus", function () {
        var firstNameVal = document.getElementById('FirstName').value;
        var lastNameVal = document.getElementById('LastName').value;
        var emailVal = document.getElementById('Email').value;
        console.log("Prechat first name: " + firstNameVal + " last: " + lastNameVal + " email: " + emailVal)
        embedded_svc.settings.extraPrechatFormDetails[0]['value'] = firstNameVal;
        embedded_svc.settings.extraPrechatFormDetails[1]['value'] = lastNameVal;
        embedded_svc.settings.extraPrechatFormDetails[2]['value'] = emailVal;

      }
      )
      clearInterval(checker)
    }
  }

}

// special function to open the chat
function openSalesforceChat() {
  if (document.getElementsByClassName('helpButtonEnabled').length > 0) {
    document.getElementsByClassName('helpButtonEnabled')[0].click()
  }
}

var chatbtn = document.getElementById('salesforcechat');
if (chatbtn != null) {
  chatbtn.onclick = function () {
    openSalesforceChat();
  }
}


// fix for CSS conflict
document.head.insertAdjacentHTML("beforeend", `<style>.embeddedServiceHelpButton .helpButton {bottom:26.2px !important;}</style>`);

