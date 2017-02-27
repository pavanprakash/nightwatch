require('date-utils');
var moment = require('moment');


module.exports = {

    setUp : function(browser) {
        console.log("Launching the Browser...");
        browser
        .url("http://prelive-hotels4uv2.h4u.me")
        .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
         .pause(5000)

          //.resizeTo(top.screen.availWidth,top.screen.availHeight)


    },


    "Verify if Top Destination Header is visible" : function (browser) {
        browser
            .assert.elementPresent("#topDestinationsHead > div > div",'Verified Top Destinations Header field is visible')
            .assert.containsText("#topDestinationsHead > div > div","Top Destinations","Verified if header text is Top Destinations")
            .end();
    },

    "Verify if for a destination,required information is displayed in the correct format" : function (browser) {
        browser
            .assert.elementPresent("#topDestinationsList > li:nth-child(1) > div > div.destination-info > h3",'Verified City Text is visible')
            .assert.elementPresent("#topDestinationsList > li:nth-child(1) > div > div.destination-info > p.country",'Verified Country Text is visible')
            .assert.elementPresent("#topDestinationsList > li:nth-child(1) > div > div.destination-info > p.info",'Verified Hotel Text is visible')
            .assert.elementPresent("#topDestinationsList > li:nth-child(1) > div > div.action-panel > p > span.rate",'Verified Rate for a destination is visible')
            .assert.elementPresent("#topDestinationsList > li:nth-child(1) > div > div.action-panel > a",'Verified Rate if View All Button is visible')

            //Verify if View All Button takes to the correct Page
            .click("#topDestinationsList > li:nth-child(1) > div > div.action-panel > a")

            // Check URL
            .assert.urlEquals("http://prelive-hotels4u.h4u.me/hotel/cyprus/paphos-area.aspx", "Verified View All goes to View ALl hotels for a particular destination Page")

            //verify if the header text is correct
            .assert.containsText("#right-column > div.fsi > h1","Paphos Area Hotels","Verified if header text is Paphos Area Hotels")

            .end();
    },

    "Verify if Top Destination Panel is visible" : function (browser) {
        browser
            //verify if top destination panel is visible
            .assert.elementPresent("#topDestinationsList",'Verified if Top Destinations Panel is visible')

            //verify if More Destinations Button is visible
            .assert.elementPresent("#topDestinations > div.buttonContainer > a",'Verified if More Destinations Button is visible')


            //Verify if More Destinations Button takes to the correct Page
            .click("#topDestinations > div.buttonContainer > a")

            // Check URL
            .assert.urlEquals("http://prelive-hotels4u.h4u.me/hotels.aspx", "Verified More Destinations button leads to DestinationsPage")

            //verify if the header text is correct
            .assert.containsText("#ctl00_cp1_pnlC1Hotels > h1","Destinations","Verified if header text is Destinations")

            .end();
    },

//    "Verify if Advertising Banners under the Top Destinations are visible" : function (browser) {
//        browser
//            .assert.elementPresent('#\34 882813 > a > img','Verified Top Destinations banner 1 is visible')
//            .assert.elementPresent('#\35 138079 > a > img','Verified Top Destinations banner 2 is visible')
//
//            .assert.containsText("#topDestinationsHead > div > div","Top Destinations","Verified if header text is Top Destinations")
//            .end();
//    },



    tearDown: function(callback) {
        // performing an async operation
        setTimeout(function() {
            // finished async duties
            callback();
        }, 200);
    }

};