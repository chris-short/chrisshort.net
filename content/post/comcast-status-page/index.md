+++
author = "Chris Short"
date = 2021-10-05T07:00:00Z
description = "Comcast had a local area issue that they didn't resolve until I proved there was a widespread issue"
draft = false
slug = "comcast-status-page"
tags = ["Comcast", "Comcast Business", "Xfinity", "status page", "internet", "house", "home", "network", "tech", "forced", "outage", "outages", "problem", "modem", "blame", "area", "connectivity", "wifi", "replace"]
title = "Having a status page forced Comcast to fix my internet"
[cover]
image = "https://shortcdn.com/chrisshort/UptimeRobot_Home.webp"

+++

TL;DR: Comcast had a local area issue. I set up a status page for my house after many outages. The status page actively monitoring connectivity forced Comcast to look outside our home for a fix after several visits.

{{< carbon >}}

## Forced switch to Comcast Business

The pandemic hit, and our lives became 100% "virtual" last year. As a family that "cut the cord" years ago and I've been working from home for quite some time, our internet consumption was pretty high. Our neighborhood is only serviced by one provider, Xfinity (aka Comcast, one of the worst providers of them all). We were ever mindful of our Xfinity usage. The 50% emails before the halfway mark in our billing period made for some dining room table conversations about peak usage and devices. Once I fired up Red Hat Livestreaming, Xfinity's data caps would be smoked within the first fifteen days of the month. We had no choice but to make the switch to Comcast Business to remove those caps.

### Comcast Business review

I thought this would mean higher quality service. Nope! Comcast Business sucks a little less from a hassle perspective every month. I should have known better, given they did the cut over a little after noon on a Tuesday in the middle of a live stream. Gee thanks, for that technical issue. We thought it was some power issue until an email notification came in welcoming us to Comcast Business. My assessment of Comcast Business is, it's the same bureaucratic insanity for customer support. You get that support faster. Then, we started having problems. Big problems.

## The start of unstable internet

In mid to late June, I was running an errand. I noticed a few Xfinity trucks doing what looked like a significant job, given the presence, on the main road running in front of our neighborhood. Later that day, I had to reset our modem. While everything indicated the network was up, there was no carrier for that connectivity to get out of the house. This issue was only the ominous beginning. We had some minor problems with packet loss on air the days following. Then, our area started falling off the internet for longer than comfortable periods. But, I didn't know the scope of the issue yet.

During all this, I had to have my intern (thank you so much, Bobby) on alert to take over the production of live streams. Because who knew when I'd drop off the internet? At some point, Bobby was the de facto producer, and I was hosting live streams because we never knew if I'd fall off the internet. Every outage, I would tweet, call, and have a tech show up to do something in the home. The first tech found nothing wrong and blamed the modem we owned (no, I'm not paying $10/month, forever, for a device that costs less than $100). The second tech realized we had an older connection from the curb to the house. They ran cable above the ground, down around the back of our home to get buried later. After the next outage, I replaced our modem, thinking, "Well, it is a year out of warranty. Of course, it'd fail."

Narrator: It wasn't the modem.

## July 4th weekend apocalypse

On July 4th weekend, we spent quite a bit of time without internet access. Do you know how hard it is to explain to a five-year-old how the internet works? Let alone how everything in the house he uses relies on it in some way.

Comcast had a problem, and I suspected it was related to the previous month's maintenance I had driven past. I scoured Nextdoor. Meanwhile, Julie death scrolled Facebook. Sure enough, large swaths of neighborhoods to the east and west were experiencing similar outages.

## ENOUGH!!!

There was another frustrating mid-live stream outage. That's when I went ahead and decided the house was getting a public status page.

I was already using the freemium version of [UptimeRobot](https://uptimerobot.com/) to monitor the [various web properties](/projects/) I maintain. I could add more monitors and build a public-facing status page for $84 a year. The cost was well worth it to prove Comcast had a problem (not the house). I swiped ye ole credit card, added some DNS records, and [status.chrisshort.net](https://status.chrisshort.net/) was born. I setup an old Raspberry Pi with Fedora as an endpoint to be pinged by UptimeRobot so my home could have a status page to show anyone asking.

Note: I ended up applying the network-latency tuned profile so the Raspberry Pi could keep up with checks and the normal internet scans.

[![UptimeRobot status page for my house as of 2021-09-30](https://shortcdn.com/chrisshort/UptimeRobot_Home.png)](https://status.chrisshort.net/)

## Replace EVERYTHING

Did I mention I bought a Ubiquiti EdgeRouter because of all this? I thought the problem might have been our consumer-grade wifi mesh was being pushed beyond its limits. We did have more than 50 devices on the network. The EdgeRouter improved our internal network. It was now taking on a large swath of functionality the wifi mesh devices had been doing. Now the only thing the consumer wifi had to do was handle the consumer wifi devices. All other network services were now on the EdgeRouter. I installed new managed switches throughout the house too. This upgrade gave me some more abilities to isolate and test internal network issues too. At that point, everything on the network was removed or replaced (minus end-user devices).

Another outage, another Xfinity tech dispatched. They came in and cleared all the coax in the house. They ended up removing an inline power device that we didn't need anymore (leftover from the previous owners' TV service). That's when I pulled out my phone and showed the tech the status page for the house. They looked at all the yellow, oranges, and red on the status page in horror. I told him I was looking into 5G internet to replace Comcast Business. I ultimately got a 5G hotspot from [Calyx Institute](https://calyxinstitute.org/) as an emergency backup (thank you to the kind Red Hatter for the recommendation). The Comcast tech noted that the customer (me) was tracking the outages. Also, that we were likely leaving Comcast Business if they didn't resolve the problem fast. The status page gave us an out from our "contract" with Comcast Business. After replacing everything between my network and Comcast's network, it was made abundantly clear Comcast had an issue.

## Comcast takes the blame

Comcast finally had to admit there was a more significant problem in the area. That's right! Comcast took the blame. I had concrete evidence their service was not meeting their standards. I got a case number and a phone number to call to check up on things whenever I wanted. Comcast was monitoring connectivity to my home now after their many outages in my area. The status page ultimately forced a fix to the multi-neighborhood impacting issue. 

A few days later, I looked at the status page and noticed more green than average. I joked about the number of nines I had (one, then two, then three). I think we had one more outage after Comcast took the blame. Since then, it has been pretty steady (minus during heavy summer storms and subsequent power outages). The moral of the story is, speak softly and carry a status page when dealing with Comcast connectivity issues. Bring your hard evidence to the table, and Comcast will bend over backward.

