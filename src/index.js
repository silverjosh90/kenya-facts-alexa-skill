'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined;

var SKILL_NAME = "Facts About Kenya";
var GET_FACT_MESSAGE = "Here's your interesting fact: ";
var HELP_MESSAGE = "You can say tell me a fact about Kenya, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "How can I help you?";
var STOP_MESSAGE = "Have a great day!";

var data = [
    "The First president of Kenya was Jomo Kenyatta.",
    "Kenya gained independence in 1964.",
    "Kenya was previously controlled by the British.",
    "Kenya\' number one export is coffee.",
    "The second largest income generator behind coffee is tourism."
    "Kenya has two only two seasons, the rainy season and the dry season.",
    "The capital of Kenya is Nairobi.",
    "The biggest tribe in Kenya are the Kikuyus.",
    "The national language of Kenya is Swahili.",
    "The currency of kenya is the Shilling.",
    "The population of Kenya is about 48.5 million.",
    "The highest mountain in Kenya, Mt. Kenya, is over 17,000 ft above sea level.",
    "Agriculture employs nearly 75% of Kenyas population.",
    "The country is named after its highest mountain, Mt. Kenya.",
    "Kenya is nearly the same size as Texas.",
    "Their are over 42 tribes in Kenya.",
    "Scientists believe that Kenya may have been the birthplace for humans."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
