# Organizing gin.js

## Book Venue

 - Barrio East: call #, option 3 then 1.

## Website

Checkout gh-pages branch and update it.

## Ticketing - Tito

### Update old event

 - Pick last event
 - Click *customize*
 - On 'Basics' change old event URL to be 'ginjssomedate-'

### Create new event

 - Go to 'dashboard'
 - Click 'duplicate' event icon (looks like paste icon). You'll now have a 'ginjs somedate copy' event
 - Click 'customize' on left
 - In details update 'title', set 'date', and set 'event URL' to ginjs

### Send announcement email to list members


Letting them know about event

 - Click campaigns
 - Find an old 'announcement' campaign
 - Click down arrow 'replicate'
Send to entire list

## Reminder email to just this month's ticket holders

 - Open tito
 - Click 'attendees' -. 'Export' -> 'Export CSV'


Edit the file in numbers, remove all columsn except First Name, Last name, Email and Twitter. This saves a bunch of time matching fields in MailChimps painful UI.

 - Open MailChimp
 - Find list

 - Make a group for just this month

 - Down arrow import
 - Upload from TXT or CSV file
 - Click the group you just created
 - Tick 'Add subscribers to new group'
- Auto update existing list

 - Click campaigns
 - Find an old 'reminder' campaign
 - Click down arrow 'replicate'
Send to a new segment,s then pick group.

# Reminder - Day of Event

In Tito Attendees - > Export all attendees as TSV
In Excel, clean up TSV so just

    Ticket First Name  Ticket Last Name    Ticket Email    What's your Twitter handle?

show



In MailChimp
Lists -> Groups
Under events, expand, then add a group (April 2014,)

Import
Add imported subscribers to new group