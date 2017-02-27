

 require('date-utils');
 var moment = require('moment');
 var stringvar1;
 var destination;
 destination="Sharm El Sheikh Area, Egypt";
 var baseurl;
     baseurl="http://ww1.hotels4u.com/";
 var oldurl="https://prelive-securehotels4u.h4u.me/";

 module.exports = {

 setUp : function(browser) {
 console.log("Launching the Browser...");
 browser
 .url(baseurl)
 .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
 .pause(5000)
 .resizeWindow(1696,1026)
 .click("#mainNavWrapper > ul > li.icon.HotelDestinations > a")
 .waitForElementVisible('#introPanel > div > div > div > h2', 10000,'Destination Page is Loaded!')
 },



 "Enter the search criteria and verify results" : function (browser) {
 var that=this;

 browser
 .setValue("#destination",destination)
 //  .sendKeys(browser.DOWN);         //
 .pause(5000)
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

 .waitForElementVisible('#results-controls-container > div > div:nth-child(2) > div > h2', 20000,'Results Page Loaded')

 .waitForElementVisible('#search-details-section > div > div.col-sm-6 > div > h1', 15000,'Destination Label present')

 .getText("#search-details-section > div > div.col-sm-6 > div > h1", function(result){

 this.assert.equal(result.value, destination, 'Verified if Results are displayed for destination: '+destination);
 })

 //.assert.attributeEquals("#search-details-section > div > div.col-sm-6 > div > h1","text",destination)
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


//require('date-utils');
//var moment = require('moment');
//var stringvar1;
//var destination;
//destination="Sharm El Sheikh Area, Egypt";
//
//module.exports = {
//  /*"Load Homepage" : function (browser) {
//    browser
//      .url("http://test-hotels4uv2.h4u.me")
//      .waitForElementVisible('body', 5000)
//      .pause(5000)
//      .end();
//  },*/
//    setUp : function(browser) {
//        console.log("Launching the Browser...");
//        browser
//        .url("http://test-hotels4uv2.h4u.me")
//        .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
//         .pause(5000)
//    },
//
//
//
//   "Enter the search criteria and verify results" : function (browser) {
//       var that=this;
//
//        browser
//            .setValue("#destination",destination)
//          //  .sendKeys(browser.DOWN);         //
//            .pause(5000)
//            .keys([browser.Keys.DOWN_ARROW,browser.Keys.ENTER])
//           // .setValue("#destination",[browser.keys.ARROW_DOWN,browser.keys.TAB])
//            //Get the value of the Destination entered
//            .getAttribute("#destination",'value', function test(result) {
//            that.stringvar1=result.value
////            /console.log(result.value)
//            console.log(that.stringvar1)
//
//       })
//
//            .click("#dateFrom")
//            //** select 1st sunday of 3 months in the future****
//            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")
//            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")
//            .click("#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span")
//
//            .click("#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(7) > a")
//            .pause(5000)
//            .click("#dateTo")
//            .click("#ui-datepicker-div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a")
//            .pause(5000)
//            .click("#searchBtnContainer > button")
//
//            .waitForElementVisible('#results-controls-container > div > div:nth-child(2) > div > h2', 20000,'Results Page Loaded')
//
//            .waitForElementVisible('#search-details-section > div > div.col-sm-6 > div > h1', 15000,'Destination Label present')
//
//            .getText("#search-details-section > div > div.col-sm-6 > div > h1", function(result){
//
//                this.assert.equal(result.value, destination, 'Verified if Results are displayed for destination chosen before');
//            })
//
//            //.assert.attributeEquals("#search-details-section > div > div.col-sm-6 > div > h1","text",destination)
//            .end();
//    },
//
//
//
//    tearDown: function(callback) {
//        // performing an async operation
//        setTimeout(function() {
//            // finished async duties
//            callback();
//        }, 200);
//    }
//
//};
//
