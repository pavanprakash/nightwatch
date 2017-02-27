require('date-utils');
var moment = require('moment');
var stringvar1;
//var baseurl="http://prelive-hotels4u.h4u.me/";
var url="http://www.hotels4u.com";

module.exports = {
  "Load Homepage" : function (browser) {
    browser

       .url(url)
       .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
        .resizeWindow(1696,1026)
      //.end();
  },

   "Enter Destination and stay dates" : function (browser) {
       var that=this;
        browser
            .setValue("#destination",'Sharm El Sheikh Area, Egypt')
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
            //select 3 days from the to date
            .click("#dateTo")
            .click("#ui-datepicker-div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a")
            .pause(5000)
            .click("#searchBtnContainer > button")

            .waitForElementVisible('#results-controls-container > div > div:nth-child(2) > div > h2', 30000, 'Results Page is loaded!')
            .pause(5000)


          //  .end();
    },

    "Select a Hotel from the results page and continue" : function (browser) {
        var that=this;
        browser

            //.getText('#search-result-list > li:nth-child(1) > div > div.overview > div.overviewInfo > a:nth-child(1) > h3', function(result){
            .getText('#search-result-list > li:nth-child(4) > div > div.overview > div.overviewInfo > a:nth-child(1) > h3', function(result){
                hotelname=result.value
                console.log('HotelName selected on Results Page: '+hotelname)

                //browser

                //this.click('#search-result-list > li:nth-child(1) > div > div.price > a')
                //*** click the 4th property in the results page*******
                this.click('#search-result-list > li:nth-child(4) > div > div.price > a')

                this.getText('#rating-address > h1',function(result){
                    //console.log('Hotel Name  on hotel info page: '+result.value)
                    this.assert.equal(hotelname,result.value,'Successfully verified that hotel selected from results page is correct')

                })

                .click("#book-now", function(result){
                     this.waitForElementVisible('#summaryheader', 5000,'Booking Info Page is Loaded')

                })

                .getText("#ctl00_cp1_pnlA1HotelSummary > div > div:nth-child(3) > div > div.title > p", function test(result) {
                     console.log(result.value)
                     this.assert.equal(result.value,hotelname,'Successfully verified correct Hotel is displayed on Booking Info Page')



                })



            })

            .end();
    }



};