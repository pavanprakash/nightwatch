
require('date-utils');

var moment = require('moment');

var stringvar1;
var destination;
destination="Sharm El Sheikh Area, Egypt";

module.exports = {

    setUp : function(browser) {
        console.log("Launching the Browser...");
        browser
        .url("http://prelive-hotels4uv2.h4u.me")
        .waitForElementVisible('#h4uLogo > img', 5000,'Home Page is Loaded!')
         .pause(5000)
    },



   "Verify different currencies available in the list on the home page" : function (browser) {
       var list,i;
       var currlist=["AUD","EUR","GBP","USD"];
       var len=currlist.length;


        browser

            //*** clicking the currency change dropdown***********
            .click("#currencyControl > div > button.btn.dropdown-toggle")

            //** verify if Currency dropdown is visible
            .assert.elementPresent("#currencyList","Verified if currency dropdown list is visible")



           	.assert.containsText("#currencyList > li:nth-child(1)",currlist[0],'Verified currency exists in the list, which is: '+currlist[0])
           	.assert.containsText("#currencyList > li:nth-child(2)",currlist[1],"Verified currency exists in the list, which is: "+currlist[1])
           	.assert.containsText("#currencyList > li:nth-child(3)",currlist[2],"Verified currency exists in the list, which is: "+currlist[2])
           	.assert.containsText("#currencyList > li:nth-child(4)",currlist[3],"Verified currency exists in the list, which is: "+currlist[3])

            .end();
    },

    "Change Currency and verify the change" : function (browser) {
        var list,i;
        var currlist=["AUD","EUR","GBP","USD"];
        var len=currlist.length;


         browser



             //******************* Select AUD from the dropdown**************************

	         //*** clicking the currency change dropdown***********
	         .click("#currencyControl > div > button.btn.dropdown-toggle")

	         .click("#currencyList > li:nth-child(1)")

             .getText("#currencyControl > div > button:nth-child(1)", function(result){

                this.assert.equal(result.value, currlist[0], 'Verified: '+currlist[0]+' Currency is selected correctly');
              })

              //verify if the prices on the page are displayed in
              .assert.containsText("#topDestinationsList > li:nth-child(1) > div > div.action-panel > p > span.rate","$", 'Verified if the prices are displayed in AUD')


             //******************* Select EUR from the dropdown**************************

              //*** clicking the currency change dropdown***********
             .click("#currencyControl > div > button.btn.dropdown-toggle")

             .pause(6000)

              .click("#currencyList > li:nth-child(2)")


              .getText("#currencyControl > div > button:nth-child(1)", function(result){


                this.assert.equal(result.value, currlist[1], 'Verified: '+currlist[1]+' Currency is selected correctly');
              })

              //verify if the prices on the page are displayed in

             // .assert.containsText("#topDestinationsList > li:nth-child(1) > div > div.action-panel > p > span.rate","�", 'Verified if the prices are displayed in EUR')


             //******************* Select GBP from the dropdown**************************

              //*** clicking the currency change dropdown***********
             .click("#currencyControl > div > button.btn.dropdown-toggle")

             .click("#currencyList > li:nth-child(3)")

              .getText("#currencyControl > div > button:nth-child(1)", function(result){

                this.assert.equal(result.value, currlist[2], 'Verified: '+currlist[2]+' Currency is selected correctly');
              })

              //verify if the prices on the page are displayed in
             // .assert.containsText("#topDestinationsList > li:nth-child(1) > div > div.action-panel > p > span.rate","�", 'Verified if the prices are displayed in GBP')


             //******************* Select USD from the dropdown**************************


              //*** clicking the currency change dropdown***********
             .click("#currencyControl > div > button.btn.dropdown-toggle")

              .click("#currencyList > li:nth-child(4)")

              .getText("#currencyControl > div > button:nth-child(1)", function(result){

                this.assert.equal(result.value, currlist[3], 'Verified: '+currlist[3]+' Currency is selected correctly');
              })

              //verify if the prices on the page are displayed in
             // .assert.containsText("#topDestinationsList > li:nth-child(1) > div > div.action-panel > p > span.rate","$", 'Verified if the prices are displayed in USD')

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

