require('date-utils');
var moment = require('moment');
var preliveurl="http://prelive-hotels4uv2.h4u.me/"
var baseurl="http://www.hotels4u.com/";

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

    "Verify if calender picker appears when checkin date or checkout date is clicked" : function (browser) {
        browser
            .click("#dateFrom")
            .assert.elementPresent("#ui-datepicker-div",'Verified if calender picker is visible when checkin date field is clicked')
            .click("#destination")
            .pause(2000)

            .click("#dateTo")
            .assert.elementPresent("#ui-datepicker-div",'Verified if calender picker is visible when checkout date field is clicked')
            .click("#destination")
            .end();
    },

    "Verify if Checkin Date is visible and is today's date" : function (browser) {
        browser
            .assert.elementPresent("#dateFrom",'Verified Check in Date field is visible')
            .getAttribute("#dateFrom", 'value', function(result){
                var today = new Date();
                console.log(today);
                this.assert.equal(result.value, today.toFormat('DD-MMM-YYYY'), 'Verified if Check in Date displayed is Todays Date');
            })
            .end();
    },

    "Verify if Checkout Date is visible and is Tomorrow's date" : function (browser) {
        browser
            .assert.elementPresent("#dateTo",'Verified Check Out Date field is visible')
            .getAttribute("#dateTo", 'value', function(result){
                var tomorrow=Date.tomorrow();
                this.assert.equal(result.value, tomorrow.toFormat('DD-MMM-YYYY'), 'Verified if Checkout Date displayed is Tomorrows Date');
            })
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