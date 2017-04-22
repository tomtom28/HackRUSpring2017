// Import Node Modules
var schedule = require('node-schedule');
var twilio = require('twilio');

// Twilio Account
var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console
 

// Run Code Every Hour on the Hour
var rule = new schedule.RecurrenceRule();
rule.minute = 0;
var j = schedule.scheduleJob(rule, function(){

  // Send Text Message To Me
  var client = new twilio.RestClient(accountSid, authToken);
  client.messages.create({
      body: 'Hey there! Another hour has gone by!',
      to: '',  // Text this number
      from: '' // From this valid Twilio number
  }, function(err, message) {
      console.log(message.sid);
  });

  
});




