/**
 * Created by Pavan.Prakash on 06/08/2014.
 */
var baseurl="http://test-hotels4uv2.h4u.me/"
var destination="Sharm El Sheikh Area"
var string1

module.exports= {


    setUp: function (browser) {
        console.log("Launching the Browser...");
        browser
            .url("http://prelive-hotels4uv2.h4u.me")
            .waitForElementVisible('#h4uLogo > img', 5000, 'Home Page is Loaded!')
            .pause(10000)
            .resizeWindow(1696,1026)

//            .resizeTo(top.screen.availWidth,top.screen.availHeight)
//            .click("#mainNavWrapper > ul > li.icon.HotelDestinations > a")
//            .windowSize("current", function(result){
//                console.log(result.height+' '+result.width)
//            })
//            .waitForElementVisible('#introPanel > div > div > div > h2', 5000,'Destination Page is Loaded!')
    },
//
//    "Verify if Destination List is Present and has many Destinations": function (browser) {
//        browser
//
//            .assert.elementPresent("#destinations-list > div", 'Verified if Destinations List is visible')
//
//            //Click a particular destination toggle down button
//            .click("#destinations-list > div > div > div > ul > li:nth-child(5) > ul > li:nth-child(1) > div.dest-panel-head.expand > a")
//
//            //click on the destination desired
//            .click("#childPlaceAnchor191")
//
//            .waitForElementVisible('#dest-header > div > div > h1', 5000, 'Destination Page for: ' + destination + ' is Loaded!')
//
//            // Check URL
//            //.assert.urlEquals(baseurl + "hotel/egypt/sharm-el-sheikh-area", "Verified Destination Page is opened for the destination selected which is: " + destination)
//
//            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > a > img",'Verified if Image is present for a hotel under Top 5* hotels section')
//            //verify if hotel name is present
////            .getAttribute("#topHotelList > li:nth-child(1) > div > div.info > h3", 'text', function(result) {
////
////                console.log('name of hotel: '+result.value)
////
////
////            })
//            //.click('#topHotelList > li:nth-child(1) > div > div.action-panel > a')
//
//      //      .click('#topHotelList > li:nth-child(1) > div > div.action-panel > a')
//
//
//            .useXpath()
//            .click('//*[@id="topHotelList"]/li[1]/div/div[2]/a')
//    }

    "Blank Test": function (browser) {
        var hotelname;
        browser

            .setValue("#destination", destination)
            .pause(2000)
            .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER])
            .click("#searchBtnContainer > button")
            //  browser

            .waitForElementVisible('#results-controls-container > div > div:nth-child(2) > div > h2', 10000, 'Results Page is loaded!')
            .pause(5000)

            .getText('#search-result-list > li:nth-child(1) > div > div.overview > div.overviewInfo > a:nth-child(1) > h3', function (result) {
                hotelname = result.value
                console.log('HotelName selected on Results Page: ' + hotelname)

                //browser

                this.click('#search-result-list > li:nth-child(1) > div > div.price > a')

                this.getText('#rating-address > h1', function (result) {
                    //console.log('Hotel Name  on hotel info page: '+result.value)
                    this.assert.equal(hotelname, result.value, 'Successfully verified that hotel selected from results page is correct')

                })

                    .click("#book-now", function (result) {
                        this.waitForElementVisible('#summaryheader', 5000, 'Booking Info Page is Loaded')

                    })

                    .getText("#ctl00_cp1_pnlA1HotelSummary > div > div:nth-child(3) > div > div.title > p", function test(result) {
                        console.log(result.value)
                        this.assert.equal(result.value, hotelname, 'Successfully verified correct Hotel is displayed on Booking Info Page')


                    })

            })


            .end();


    }


}
