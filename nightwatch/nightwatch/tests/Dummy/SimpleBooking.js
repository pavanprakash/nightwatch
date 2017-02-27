require('date-utils');
var moment = require('moment');
var stringvar1;
var varurl="http://www.hotels4u.com";

//88 Live card details**************
var cardtype="AmexCard (4% fee applies)";
var cardno="370055005607573";
var cardname="IT Testing 5";
var cvv="1955";
var expmonth="02";
var expyear="2017";

module.exports = {
  "Load Homepage" : function (browser) {
    browser

       .url(varurl)
       .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
        .resizeWindow(1696,1026)
      //.end();
  },

   "Enter Destination and stay dates" : function (browser) {
       var that=this;
        browser
            .setValue("#destination",'Sharm El Sheikh Area, Egypt')
          //  .sendKeys(browser.DOWN);         //
            .pause(2000)
            .keys([browser.Keys.DOWN_ARROW,browser.Keys.ENTER])
           // .setValue("#destination",[browser.keys.ARROW_DOWN,browser.keys.TAB])
            //Get the value of the Destination entered
            .getAttribute("#destination",'value', function test(result) {
            that.stringvar1=result.value
//            /console.log(result.value)
            console.log(that.stringvar1)

       })

            .click("#dateFrom")
            //** select 1st sunday of 3 months in the future****
            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")
            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")
            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")

            .click("#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(7) > a")
            .pause(5000)
            .click("#dateTo")
            .click("#ui-datepicker-div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a")
            .pause(5000)
            .click("#searchBtnContainer > button")

            .waitForElementVisible('#results-controls-container > div > div:nth-child(2) > div > h2', 30000,'Results Page is loaded!')
            .pause(5000)


          //  .end();
    },

    "Select the First property and continue" : function (browser) {
        var that=this;
        browser
            .click("#search-result-list > li:nth-child(4) > div > div.price > a")

            .pause(5000)

            .waitForElementVisible('#rating-address > h1', 5000,'Hotel Info Page is loaded')

            //.end();
    },

    "Complete the booking process" : function (browser) {
        var that=this;
        browser
            .click("#book-now")

            .pause(5000)

            .waitForElementVisible('#summaryheader', 5000,'Booking Info Page is Loaded')

            //** click on Fill Dummy Details Link
          //  .click("#ctl00_cp1_pnlB5cHotelSummary > div > h3 > a")


            //*** this section is needed only for live scripts************
            .setValue("#ctl00_cp1_ctl06_txtFirstName","TestFName")
            .setValue("#ctl00_cp1_ctl06_txtSurName","TestLastName")
            .setValue("#ctl00_cp1_ctl06_txtPostcode","TW20 9DU")
            .setValue("#ctl00_cp1_ctl06_txtAddr1","Prestige House 23 - 26 High Street")
            .setValue("#ctl00_cp1_ctl06_txtCity","TestFName")
            .setValue("#ctl00_cp1_ctl06_txtPhone","0123456789")

            //*** cart type***
            .setValue("#ctl00_cp1_ctl07_ddlCardType",cardtype)

            //***** card name and number
            .setValue("#ctl00_cp1_ctl07_txtCardHoldersName",cardname)
            .setValue("#ctl00_cp1_ctl07_txtCardNumber",cardno)

            //** fill the email and confirm email fields***
            .setValue("#ctl00_cp1_ctl06_txtEmail","qa@hotels4u.com")
            .setValue("#ctl00_cp1_ctl06_txtEmail2","qa@hotels4u.com")

            //**fill the card details
            //.setValue("#ctl00_cp1_ctl07_ddlExpiryFromMonth","01")
           // .setValue("#ctl00_cp1_ctl07_ddlExpiryFromYear","2015")

            .setValue("#ctl00_cp1_ctl07_ddlExpiryFromMonth",expmonth)
            .setValue("#ctl00_cp1_ctl07_ddlExpiryFromYear",expyear)

            //** enter security number
            .setValue("#ctl00_cp1_ctl07_txtSecurityNumber",cvv)

            //** click on terms & conditions checkbox
            .click("#ctl00_cp1_ctl02_chkCheckToConfim")

            //** click on Book Now button
            .click("#book-now")

            .pause(5000)

            .waitForElementVisible('#ctl00_cp1_pnlM1BookingDetails > div.mybooking-detail-container.border-rad-four > div.mybooking-detail > h2', 5000,'Booking is completed')

//          .getAttribute("#ctl00_cp1_pnlM1BookingDetails > div.mybooking-detail-container.border-rad-four > div.mybooking-detail > h2",'value', function test(result) {
//            console.log(result.value)
//
//
//        })

            .getText("#ctl00_cp1_pnlM1BookingDetails > div.mybooking-detail-container.border-rad-four > div.mybooking-detail > h2", function test(result) {
                console.log(result.value)


            })

            .end();
    }

};