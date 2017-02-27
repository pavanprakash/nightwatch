require('date-utils');
var moment = require('moment');
var destination="Sharm El Sheikh Area, Egypt";
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


    "Verify if destination field is visible" : function (browser) {
        browser
            .assert.elementPresent("#destination",'Verified Destination field is visible')

            //type 3 chars verify if destination list appears
            .setValue("#destination","sha")
            .assert.elementPresent(" #searchForm > fieldset.destination > span > span",'Verified Destination List is visible when 3 characters are typed')
            .end();
    },

    "Verify if Banner field (below seacrh panel) is visible" : function (browser) {
        browser
            .assert.elementPresent("#promo1 > a",'Verified Banner field 1 is visible')
            .assert.elementPresent("#heroFooter > div > div > ul",'Verified Banner field 2 (promises) is visible')

            .end();
    },


    "Verify if Occupancy field is visible" : function (browser) {
        browser
            .assert.elementPresent("#occupancy",'Verified Occupancy field is visible')

            //Occupancy field validations
            .click("#occupancy")
            .assert.elementPresent("body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-dialog-buttons.ui-draggable.ui-resizable",'Verified Occupancy popup field is visible')
            .assert.containsText("#room-list > li.ng-scope.editable > div > span","2 Adults, 0 Children","Verified if Default value for occupancy field is 2 adults and 0 children")

            //add another room and verify if 2 adults is added by default
            .click("#room-list > li.button-row.ng-scope > a")
            .assert.elementPresent("#room-list > li:nth-child(2) > span","Verified that Room 2 text is present")
            .assert.containsText("#room-list > li:nth-child(2) > div > span","2 Adults, 0 Children","Verified if Default value for occupancy field is 2 adults and 0 children")
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