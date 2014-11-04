# Organizing gin.js

## Book Venue

 - Barrio East: call # 020 7749 3940, option 3 then 1.

## Website

Checkout gh-pages branch and update it.

## Ticketing - Tito

### Update old event

 - Visit tito.io
 - Click the |||| menu in the top left corner - this is a actually a hamburger menu with a shitty icon.
 - Pick last event
 - Click *customize*
 - On 'Basics' change old event URL to be 'ginjssomedate-'

### Create new event

 - Go to 'dashboard'
 - Click 'duplicate' event icon (looks like paste icon). You'll now have a 'ginjs somedate copy' event
 - Click 'customize' on left
 - In details update 'title', fix the name, set the proper date, and set 'event URL' to 'ginjs'

### Send announcement email to list members

Letting them know about event

 - Click campaigns
 - Find an old 'announcement' campaign
 - Click down arrow 'replicate'
Send to entire list

## Reminder email to just this month's ticket holders

 - Open tito
 - Click 'attendees' -> 'Export' -> 'Export CSV'


Edit the file in numbers, remove all columsn except First Name, Last name, Email and Twitter. This saves a bunch of time matching fields in MailChimps painful UI.

 - Open MailChimp
 - Click 'Lists' on the left, pick the 'GinJS' list, then 'Manage Subscribers' then 'Groups' then 'View Groups'
 - Click 'Add Group' (down the bottom') and add a group called 'SomeMonth SomeYear' for just this month
 - Click 'import to'
 - Click 'Upload from CSV or TXT file'
 - Enable 'Auto update existing list'
 - Click 'Upload List' to upload it
 - Match the fields when asked

THe list should have now been imported.

 - Click 'campaigns'
 - Find an old 'reminder' campaign
 - Click down arrow 'replicate'
 - Pick 'Send to a new segment' then pick group you just added (ie, the group for the current month)

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
