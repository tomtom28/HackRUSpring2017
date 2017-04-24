// Import Node Modules
var schedule = require('node-schedule');
var twilio = require('twilio');

// Enivronmental Variables for your Twilio Account
var accountSid = process.env.TWILLIO_SID; // Environmental Variable of your Account SID from www.twilio.com/console
var authToken = process.env.TWILLIO_TOKEN;  // Environmental Variable of your Auth Token from www.twilio.com/console
var twilioNumber = process.env.TWILLIO_NUMBER; // Environmental Variable of your Twilio Account Phone Number from https://www.twilio.com/console/phone-numbers/incoming

// Add the number you want to text below:
var textThisNumber = process.env.TEXT_THIS_NUMBER;; // Environmental Variable of the number you want to text here. Note it must be verified in https://www.twilio.com/console/phone-numbers/verified


// Run Code Every Monday at 7:55am
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 1; // Monday
rule.hour = 7 + 4; // Heorku server is 4 hours ahead of me (EDT)
rule.minute = 55;
var j = schedule.scheduleJob(rule, function(){

  // Send Text Message To a (verified) Number
  var client = new twilio.RestClient(accountSid, authToken);
  client.messages.create({
      body: 'Hey, it\'s Monday! Get ready for work!',
      to: textThisNumber,  // Text this number
      from: twilioNumber // From this valid Twilio number
  }, function(err, message) {
      if (err) {
        console.log('Error!')
        console.log(err);
      }
      else {
        console.log('Message Sent!')
        console.log(message.sid);
      }
  });
  
});




