# Organizing gin.js

## Book Venue

 - Barrio East: call # 020 7749 3940, option 3 then 1.

## Website

Checkout gh-pages branch and update it.

## Ticketing - Tito

### Update old event

 - Visit https://ti.to
 - Pick last event
 - Click *customize*
 - On 'Basics' change old event URL to be 'ginjs-somedate'

### Create new event

Still on the old event page

 - Click 'duplicate this event' on the top right. After a moment you'll have 'old event copy'
 - Click 'customize'
 - In Basics update 'title', fix the name, set the new date, and set 'event URL' to 'ginjs'

### Send announcement email to list members

Letting them know about event

 - Open https://mailchimp.com/
 - Click 'Campaigns'
 - Find an old 'announcement' campaign. 
 - Click the down arrow beside the old campaign and select 'replicate'
 - Click 'Send to entire list' and hit next (in bottom right corner)
 - Change name to 'gin.js MONTH YEAR announce'
 - Change subject to be something interesting
 - Hit next (in bottom right corner)
 - Update the email - remember the very top text as wel as the non-HTML version!
 - Send a test email (and check it)
 - Send a real email

## Update attendees list 

 - Visit https://ti.to/mikemaccana/ginjs/admin/tickets/dash
 - Export a CSV and overwrite import.csv
 - Run ./import.js
 - mv attendees.json json

## Reminder email to just this month's ticket holders

 - Open tito
 - Click 'attendees' -> 'Export' -> 'Export CSV' (NOT TSV! MailChimp hates TSV!)
 - Edit the file in Numbers, remove all columns except 'First Name', 'Last name', 'Email' and 'Twitter'. This saves a bunch of time matching fields in MailChimps painful UI. Export back out to CSV again.

 - Open MailChimp
 - Click 'Lists' on the top, pick the 'GinJS' list, then 'Manage Subscribers' then 'Groups' then (beside 'Events') View Groups'
 - Click 'Add Group' (down the bottom') and add a group called 'SomeMonth SomeYear' for just this month
 - Click 'import to'
 - Click 'Upload from CSV or TXT file'
 - Enable 'Auto update existing list'
 - Click 'Upload List' to upload it
 - Match the fields when asked

THe list should have now been imported.

 - Click 'campaigns'
 - Find an old (preferably recent) 'reminder' campaign
 - Click down arrow 'replicate'
 - You are now in a wizard! See the 'next' in the bottom right corner.
 - Pick 'Send to a new segment' then pick 'Group:Events' and the group you just added (ie, the group for the current month)
- Click 'Next; (bottom right), rename to 'reminder for (current month and year)'

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
