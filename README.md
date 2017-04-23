# HackRUSpring2017
Creating a Simple Twilio NodeJS Cron Job. This can serve as a cool biolerplate.


## Twilio Account
This app needs a Twilio account and phone number tied to said account. Below is how to set that up:

  1. Go to [Twillio](https://www.twilio.com/) and sign up for a account
  2. Once your account is made, check your [Twilio Console](https://www.twilio.com/console) for your Account SID and Auth Token. Use these in your environmental variables (see below).
  3. Then, add a [Twilio Phone Number](https://www.twilio.com/console/phone-numbers/incoming) to your account. Also use this in your environmental variables
  4. If you have a free trial, you can [Verify Other Phone Numbers](https://www.twilio.com/console/phone-numbers/verified). Use this if you want to text other numbers with your account that are not the number you signed up with.


## Environmental Variables
For security, you should never push your API keys to github. This is how to set your environmental variables in Heroku. NOte this assuming that you already have the Heroku CLI.

Set up the TWILLIO_SID: `$ heroku config:set TWILLIO_SID={your sid here}` 

Set up the TWILLIO_TOKEN: `$ heroku config:set TWILLIO_TOKEN={your token here}` 

Set up the TWILIO_NUMBER: `$ heroku config:set TWILLIO_NUMBER={your twilio phone number here}` 

Set up the number to text: `$ heroku config:set TEXT_THIS_NUMBER={your real phone number here}`