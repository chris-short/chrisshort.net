+++
author = "Chris Short"
date = 2016-10-05T20:56:00Z
description = ""
draft = false
ShowTOC = false
slug = "notes-on-pagerduty"
tags = ["pagerduty", "oncall"]
title = "Notes on PagerDuty"
[cover]
image = "https://shortcdn.com/chrisshort/PagerDuty-logo-green.png"

+++

I have recently been added on to a PagerDuty rotation. I am sure numerous on-call people have a lot of different strategies to managing their rotations. However, there were two pieces of information I immediately wanted from PagerDuty:

* Can I add my on-call rotation to my Google Calendar or Mac Calendar app?
* What number is going to call me in the middle of the night to wake me up?


The answer to both those questions is an astounding, "YES!" PagerDuty provides iCalendar files and WebCal feeds for each schedule. Go to your On-Call Schedules page and by each schedule you will find an **Export** menu where you export yours or everyone's schedule in your preferred format.

{{< carbon >}}

![PagerDuty - On Call Schedules](https://shortcdn.com/chrisshort/On_Call_Schedules_-_PagerDuty.png#center)

The "What number is going to call me?" question was a little harder to solve but there was an obvious answer. PagerDuty has a [Phone numbers notifications are sent from](https://support.pagerduty.com/hc/en-us/articles/202828870-Phone-numbers-notifications-are-sent-from) support document and the list of phone numbers is rather long. PagerDuty has also created a [PagerDuty vCard](https://support.pagerduty.com/hc/en-us/article_attachments/205629327/PagerDuty_Outgoing_Numbers.vcf) so that you can quickly add all their numbers to your address book.
