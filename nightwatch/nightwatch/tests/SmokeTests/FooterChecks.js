//*********** Tests are written for tab menu links which are located at top section of the page**************

require('date-utils');
var moment = require('moment');
var baseurl="http://prelive-hotels4uv2.h4u.me/";
var oldurl="https://prelive-securehotels4u.h4u.me/";

module.exports = {

    setUp : function(browser) {
        console.log("Launching the Browser...");
        browser
            .url(baseurl)
            .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
            .pause(5000);

        //.resizeTo(top.screen.availWidth,top.screen.availHeight)


    },


    "Verify if there are 4 major Hotel Destinations Tabs in the footer section" : function (browser) {
        var tabarr=["City Breaks", "Beach Hotels", "Uk & Ireland", "All Inclusive"]
        browser

            //verify if hotel destinations tab exist in the footer section
            .assert.elementPresent("#tabFooter > div.col-md-3 > div","Verified Hotel Destinations tab section exists in the footer area")

            .assert.containsText("#tab1",tabarr[0],'Verified Hotel Destination Tab exists in the list, which is: '+tabarr[0])
            .assert.containsText("#tab2",tabarr[1],"Verified Hotel Destination Tab exists in the list, which is: "+tabarr[1])
            .assert.containsText("#tab3",tabarr[2],"Verified Hotel Destination Tab exists in the list, which is: "+tabarr[2])
            .assert.containsText("#tab4",tabarr[3],"Verified Hotel Destination Tab exists in the list, which is: "+tabarr[3])

            .click("#mainNavWrapper > ul > li.icon.LateDeals > a")
            // Check URL
            .assert.urlEquals(baseurl + "late-availability-rooms", "Verified Late Deals Navigates Link to Late Availability Rooms Page")
            //verify if the header text is correct
            .assert.containsText("#introPanel > div > div > div > h1","LATE DEALS","Verified if header text is Late Deals")
            .end();
    },


    "Verify if City Breaks Tab displays all the configured hotels" : function (browser) {
        var arrvar=["Amsterdam Hotels", "Athens Hotels", "Barcellona Hotels", "Berlin Hotels", "Dublin Hotels", "London Hotels", "Marrakech Hotels", "Paris Hotels", "Prague Hotels","Rome Hotels", "Venice Hotels"]
        browser


            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(1) > a",arrvar[0],"Verified City Breaks Hotel Name exists in the list, which is: "+arrvar[0])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(2) > a",arrvar[1],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[1])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(3) > a",arrvar[2],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[2])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(4) > a",arrvar[3],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[3])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(5) > a",arrvar[4],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[4])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(6) > a",arrvar[5],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[5])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(7) > a",arrvar[6],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[6])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(8) > a",arrvar[7],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[7])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(9) > a",arrvar[8],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[8])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(10) > a",arrvar[9],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[9])
            .assert.containsText("#content1 > div.panel-body.expanded > ul > li:nth-child(11) > a",arrvar[10],"Verified Hotel Destination Tab exists in the list, which is: "+arrvar[10])




            .end();
    },

//    "Verify if City Breaks Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.CityBreaks > a")
//            // Check URL
//            .assert.urlEquals(baseurl + "city-hotels", "Verified City Breaks Navigates Link to City Hotels Page")
//            //verify if the header text is correct
//            .assert.containsText("#introPanel > div > div > div > h1","Best City Hotel deals","Verified if header text is Beach City Hotel Deals")
//            .end();
//    },
//
//    "Verify if Beach Hotels Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.BeachHotels > a")
//            // Check URL
//            .assert.urlEquals(baseurl + "beach-hotels", "Verified Beach Hotels Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#introPanel > div > div > div > h1","Beach Hotels","Verified if header text is Beach Hotels")
//            .end();
//    },
//
//    "Verify if Ski Hotels Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.SkiHotels > a")
//            // Check URL
//            .assert.urlEquals(baseurl + "ski-hotels", "Verified Ski Hotels Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#introPanel > div > div > div > h1","Top Ski Hotel Deals","Verified if header text is Top Ski Hotel Deals")
//            .end();
//    },
//
//    "Verify if UK & Ireland Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.UKandIreland > a")
//            // Check URL
//            .assert.urlEquals(baseurl + "uk-and-ireland-hotels", "Verified UK & Ireland Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#introPanel > div > div > div > h1","UK & Ireland Hotel Deals","Verified if header text is UK & Ireland Hotel Deals")
//            .end();
//    },
//
//    "Verify if All Inclusive Hotels Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click( '#mainNavWrapper > ul > li.icon.AllInclusiveHotels > a')
//
//            .pause(5000)
//            // Check URL
//            .assert.urlEquals(baseurl + "all-inclusive-hotels", "Verified All Inclusive Link Hotels Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#introPanel > div > div > div > h1","All Inclusive Hotel Deals","Verified if header text is All Inclusive Hotel Deals")
//            .end();
//    },
//
//    "Verify if Destinations Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.HotelDestinations > a")
//            // Check URL
//            .assert.urlEquals("http://prelive-hotels4u.h4u.me/hotels.aspx", "Verified Destinations Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#ctl00_cp1_pnlC1Hotels > h1","Destinations","Verified if header text is Destinations")
//            .end();
//    },
//
//
//    "Verify if Login Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.LoginRegister > span > a:nth-child(1)")
//            // Check URL
//            .assert.urlEquals(oldurl + "SignIn.aspx", "Verified Login Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#ctl00_cp1_pnlA1SignIn > div > h3","Sign In to MyHotels4u","Verified if header text is Sign In to MyHotels4u")
//            .end();
//    },
//
//    "Verify if Register Link is navigating to the correct page" : function (browser) {
//        browser
//
//            .click("#mainNavWrapper > ul > li.icon.LoginRegister > span > a:nth-child(2)")
//            // Check URL
//            .assert.urlEquals(oldurl + "Register.aspx", "Verified Register Link Navigates to correct Page")
//            //verify if the header text is correct
//            .assert.containsText("#ctl00_cp1_ucRegister_pnlRegister > h1","Register","Verified if header text is Register")
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