# HackRUSpring2017
Creating a Simple Twilio NodeJS Cron Job. This can serve as a cool boilerplate.

A Twilio app to text a number every minute for no real reason.


## Twilio Account
This app needs a Twilio account and phone number tied to said account. Below is how to set that up:

  1. Go to [Twillio](https://www.twilio.com/) and sign up for a account
  2. Once your account is made, check your [Twilio Console](https://www.twilio.com/console) for your Account SID and Auth Token. Use these in your environmental variables (see below).
  3. Then, add a [Twilio Phone Number](https://www.twilio.com/console/phone-numbers/incoming) to your account. Also use this in your environmental variables
  4. If you have a free trial, you can [Verify Other Phone Numbers](https://www.twilio.com/console/phone-numbers/verified). Use this if you want to text other numbers with your account that are not the number you signed up with.


## Environmental Variables
For security, you should never push your API keys to github. This is how to set your environmental variables in Heroku. Note this assumes that you already have the Heroku CLI and have already added a heroku remote.

Set up the TWILLIO_SID: `$ heroku config:set TWILLIO_SID="{your sid here}"` 

Set up the TWILLIO_TOKEN: `$ heroku config:set TWILLIO_TOKEN="{your token here}"` 

Set up the TWILIO_NUMBER: `$ heroku config:set TWILLIO_NUMBER="{your twilio phone number here}"` 

Set up the number to text: `$ heroku config:set TEXT_THIS_NUMBER="{your real phone number here}"`

Note that the cruly brackets are not to be copied, they are there as a visual cue to paste your info there.
The twilio phone number and your phone number should be in the `+18001231234` format.

You can run `heroku config` to check if all your enivornmental variables are set.