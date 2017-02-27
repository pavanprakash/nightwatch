require('date-utils');
var moment = require('moment');
var baseurl="http://ww1.hotels4u.com/";
var destination="Sharm El Sheikh Area"

module.exports = {

    setUp : function(browser) {
        console.log("Launching the Browser...");
        browser
        .url(baseurl)
        .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
        .pause(5000)
        .resizeWindow(1696,1026)
        .click("#mainNavWrapper > ul > li.icon.HotelDestinations > a")
        .waitForElementVisible('#introPanel > div > div > div > h2', 5000,'Destination Page is Loaded!')

          //.resizeTo(top.screen.availWidth,top.screen.availHeight)


    },


    "Verify if Destination Page and Header is visible" : function (browser) {
        browser
            // Check URL
            .assert.urlEquals(baseurl+"destination", "Verified the url is correct for destination page opened")

            .assert.containsText("#introPanel > div > div > div > h2","Destinations","Verified if the Header Text is Destinations")
            .assert.elementPresent("#introContent",'Verified if Intro Content under Destination Header is visible')
            .end();
    },

    "Verify if Destination List is Present and has many Destinations" : function (browser) {
        browser
            .assert.elementPresent("#destinations-list > div",'Verified if Destinations List is visible')

            //Click a particular destination toggle down button
            .click("#destinations-list > div > div > div > ul > li:nth-child(5) > ul > li:nth-child(1) > div.dest-panel-head.expand > a")

            //click on the destination desired
            .click("#childPlaceAnchor191")

            .waitForElementVisible('#dest-header > div > div > h1', 5000,'Destination Page for: '+destination+' is Loaded!')

            // Check URL
            .assert.urlEquals(baseurl+"hotel/egypt/sharm-el-sheikh-area", "Verified Destination Page is opened for the destination selected which is: "+destination)

            //********************** Verifications for Top 5* hotels section******************
           // console.log('********************** Verifications for Top 5* hotels section******************');

            //verify if if Top 5* Hotels text is displayed
            .assert.containsText("#topHotels > h2","Top 5* Hotels in "+destination,"Verified if header text for Top 5* Hotels is for "+destination)
            .assert.elementPresent("#topHotelsCarousel",'Verified if Hotels Panel is visible under Top 5* Hotels section')

            //verify if image is present for a hotel
//            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > img",'Verified if Image is present for a hotel under Top 5* hotels section')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > a > img",'Verified if Image is present for a hotel under Top 5* hotels section')
            //verify if hotel name is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > h3",'Verified if Hotel Name is present for a hotel under Top 5* hotels section')
            //verify if star rating is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > div",'Verified if Star Rating is present for a hotel under Top 5* hotels section')
            //verify if star rating is present
            .assert.containsText("#topHotelList > li:nth-child(1) > div > div.info > a",destination,"Verified if Area is present for a hotel under Top 5* hotels section and is: "+destination)
            //verify if View Details Button is present
//            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > button",'Verified if View All is present for a hotel under Top 5* hotels section')
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > a",'Verified if View All is present for a hotel under Top 5* hotels section')

            //********************** Verifications for Top 4* hotels section******************
            //console.log('********************** Verifications for Top 4* hotels section******************');


            //verify if if Top 4* Hotels text is displayed
            .assert.containsText("#topHotels > h2:nth-child(3)","Top 4* Hotels in "+destination,"Verified if header text for Top 4* Hotels is for "+destination)
            .assert.elementPresent("#topHotelsCarousel",'Verified if Hotels Panel is visible under Top 4* Hotels section')

            //verify if image is present for a hotel
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > a > img",'Verified if Image is present for a hotel under Top 4* hotels section')

            //verify if hotel name is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > h3",'Verified if Hotel Name is present for a hotel under Top 4* hotels section')
            //verify if star rating is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > div",'Verified if Star Rating is present for a hotel under Top 4* hotels section')
            //verify if star rating is present
            .assert.containsText("#topHotelList > li:nth-child(1) > div > div.info > a",destination,"Verified if Area is present for a hotel under Top 4* hotels section and is: "+destination)
            //verify if View Details Button is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > a",'Verified if View All is present for a hotel under Top 4* hotels section')


            //********************** Verifications for Top 3* hotels section******************
         //   console.log('********************** Verifications for Top 3* hotels section******************');

            //verify if if Top 3* Hotels text is displayed
            .assert.containsText("#topHotels > h2:nth-child(5)","Top 3* Hotels in "+destination,"Verified if header text for Top 3* Hotels is for "+destination)
            .assert.elementPresent("#topHotelsCarousel",'Verified if Hotels Panel is visible under Top 3* Hotels section')

            //verify if image is present for a hotel
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > a > img",'Verified if Image is present for a hotel under Top 3* hotels section')
            //verify if hotel name is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > h3",'Verified if Hotel Name is present for a hotel under Top 3* hotels section')
            //verify if star rating is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.info > div",'Verified if Star Rating is present for a hotel under Top 3* hotels section')
            //verify if star rating is present
            .assert.containsText("#topHotelList > li:nth-child(1) > div > div.info > a",destination,"Verified if Area is present for a hotel under Top 3* hotels section and is: "+destination)
            //verify if View Details Button is present
            .assert.elementPresent("#topHotelList > li:nth-child(1) > div > div.action-panel > a",'Verified if View All is present for a hotel under Top 3* hotels section')

            //*********************** Verifying ABout section for the destination***********************
          //  console.log('*********************** Verifying ABout section for the destination***********************');


//            .assert.containsText("#about-panel > h3","About "+destination,"Verified if header text for Top 3* Hotels is for "+destination)
            .assert.elementPresent("#about-panel > h3",'Verified if ABout Header Text is present in the ABout section for a destination')
            .assert.elementPresent("#about-panel > h3 > i",'Verified if Flag Icon is Present in ABout Destination section')
            .assert.elementPresent("#about-panel",'Verified if About Destination Panel is present')

            //******************* Verifying Weather Section***********************
          //  console.log('*********************** Verifying Weather section for the destination***********************');


            .assert.containsText("#weatherWidget > h3","Weather Information","Verified if Weather Information Header Text is present")
            .assert.elementPresent("#weatherWidget",'Verified if Weather Information Section is present')

            //******************* Verifying if Google Maps Section is present***********************
           // console.log('*********************** Verifying Google Maps section for the destination***********************');


            .assert.elementPresent("#map-canvas > div > div:nth-child(1) > div:nth-child(2)",'Verified if Google Maps section is present')

            //*********************** Verifying if Hotel Destinations for location is present ***********************
//            .assert.containsText("#multiWidget > h3","Hotel Destinations in "+destination,"Verified if header text for Hotel Destinations is Present")
//            .assert.elementPresent("#multiWidget",'Verified if Hotel Destinations Panel')
//            .assert.elementPresent("#about-panel",'Verified if About Destination Panel is present')

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