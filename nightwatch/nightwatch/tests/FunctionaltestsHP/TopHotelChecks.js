require('date-utils');
var moment = require('moment');
var baseurl="http://www.hotels4u.com/";
var oldurl="https://prelive-securehotels4u.h4u.me/";

module.exports = {

    setUp : function(browser) {
        console.log("Launching the Browser...");
        browser
            .url(baseurl)
            .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
            .pause(5000)
            .resizeWindow(1696,1026)

        //.resizeTo(top.screen.availWidth,top.screen.availHeight)


    },


    "Verify if Top Hotels Header is visible" : function (browser) {
        browser
            .assert.elementPresent("#topHotelsHead > div > div > h2",'Verified Top Hotels Header field is visible')
            .assert.containsText("#topHotelsHead > div > div","Top Hotels","Verified if header text is Top Hotels")
            .end();
    },

    "Verify if for a Hotel,required info is displayed in the correct format" : function (browser) {
        browser
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > h3",'Verified Hotel Name is visible')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > div",'Verified Star Rating is visible')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > a",'Verified Location name is visible')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > p > span.rate.ng-binding",'Verified Rate for a Hotel is visible')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > a",'Verified Rate if View All Button is visible')

            //Verify if View All Button takes to the correct Page
            .click("#topHotelList > li:nth-child(1) > div > div.action-panel > a")

            // Check URL
            .assert.urlEquals("http://prelive-hotels4u.h4u.me/hotel/balearic-islands/majorca/alcudia/bellevue-club.aspx", "Verified View All button leads to hotel info Page")

            //verify if the header text is correct
            .assert.containsText("#rating-address > h1","Bellevue Club","Verified if header text is Bellevue Club")

            .end();
    },

    "Verify if Top Hotels Panel is visible" : function (browser) {
        browser
            //verify if top destination panel is visible
            .assert.elementPresent("#topHotelList",'Verified if Top Hotels Panel is visible')


            .end();
    },




    tearDown: function(callback) {
        // performing an async operation
        setTimeout(function() {
            // finished async duties
            callback();
        }, 200);
    }

};