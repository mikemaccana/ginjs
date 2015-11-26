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
 - Update 'title', fix the name, set the new date, and set 'event URL' to 'ginjs'

Now https://ti.to/mikemaccana/ginjs should show the new event. Sign up yourself!

### Send announcement email to list members

Letting them know about event

 - Open https://mailchimp.com/ and log in
 - Click 'Campaigns' at the top nav bar
 - Find an old 'announcement' campaign (NOT a reminder campaign)
 - Click the down arrow beside the old campaign and select 'replicate'
 - Click 'Send to entire list' and hit next (in bottom right corner)
 - Change name to 'gin.js MONTH YEAR announce'
 - Change subject to be something interesting
 - Hit next (in bottom right corner)
 - Update the email - remember the very top text
 - Hit next (in bottom right corner)
 - Update the the non-HTML version!
 - Send a test email (and check it)
 - Send a real email

## Update attendees list 

 - Visit https://ti.to/mikemaccana/ginjs/admin/tickets/dash
 - Export a CSV, and name the saved file 'import.csv' (overwriting the old one)
 - Run ./import.js
 - mv attendees.json json

## Day of Event - Reminder email to just this month's ticket holders

 - Open tito
 - Click 'attendees' -> 'Export' -> 'Export CSV' (NOT TSV! MailChimp hates TSV!)
 - Edit the file in Numbers, remove all columns except 'First Name', 'Last name', 'Order Email' and 'Twitter'. This saves a bunch of time matching fields in MailChimps painful UI. Export back out to CSV again.

 - Open MailChimp
 - Click 'Lists' on the top, pick the 'GinJS' list, then 'Manage Subscribers' from the dropdown on the right
 - Click 'Groups' then (on the right) 'View Groups'
 - Scroll to the bottom, click 'Add Group' and add a group called 'SomeMonth SomeYear' for just this month
 - Click 'import to'
 - Click 'Upload from CSV or TXT file'
 - Pick the CSV file
 - Enable 'Auto update existing list'
 - Click 'Upload List' to upload it
 - Match the fields when asked
 - Import to 'subscribed'

The list should have now been imported.

 - Click 'campaigns'
 - Find an old (preferably recent) 'reminder' campaign, then click the down arrow beside it and select 'replicate'
 - You are now in a wizard! Note the 'next' in the bottom right corner.
 - Pick 'Send to a group or new segment' then pick 'Group:Events' and the group you just imported the CSV to (ie, the group for the current month)
 - Click 'Next' (bottom right), rename to 'reminder for (current month and year)'
 - Update the title and subject, hit next
 - Update the copy! Note particularly the sponsor changing.
 - Regenerate the plain text from the HTML 
 - Send!
 - High five!

