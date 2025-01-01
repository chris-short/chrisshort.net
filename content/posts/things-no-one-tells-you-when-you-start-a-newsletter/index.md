---
ShowTOC: true
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/reading-the-news.jpg
date: "2020-03-24"
description: ""
tags:
- newsletter
- mail
- Gareth Rushgrove
- Mattias Geniar
- DevOps
- writing
- open source
- email
- template
- rewarding
- VScode
- DNS
- MJML
title: Things no one tells you when you start a newsletter
---

{{< carbon >}}

There were a lot of reasons I started writing a newsletter back in 2016. Having worked at a few organizations whose business was sending millions of emails a day, one thing is for sure: ***Mail is hard and not for the faint of heart***. Using a service that handles mail delivery is step one, in my opinion. After that, I figured a newsletter is, "sending an email every week." Anyone can do that, right?

What I did not expect were styling problems, a stream of feedback and opinions, and a few other gotchas that are worth mentioning. But, it is by far the single most rewarding personal project I've ever taken on.


## What do you mean IE 6?

Due to the wide range of mail clients in use across the globe, you'll get complaints about your newsletter's styling and formatting as it grows. Don't make the mistake of assuming your vendor of choice's mail templates have these issues covered. Nope! You must test every mail you send first. It's smart to build a template that is backward-compatible with Internet Explorer 6. That's right; some Outlook users are still in the early 2000s as far as their HTML rendering engine goes. It's insane, but there are some tools to help.

## Email is hard

I've learned from a ton of experience delivering email en masse. Mail delivery on the modern internet is one of the single hardest tasks out there. First, every administrator and engineer from the network to a user's inbox assumes your mail is garbage. Second, the number and size of hurdles to sending mail out to thousands of people every week are enormous. Conquering the knowledge of mail servers, DNS, internet routing, networking, not to mention, design, and writing skills necessitate the services that are available to help. Successfully delivering email these days requires a list of things that are outside the scope of this article but are worth mentioning here:

* [DKIM](https://tools.ietf.org/html/rfc6376)
* [DMARC](https://dmarc.org/resources/specification/)
* [SPF](https://tools.ietf.org/html/rfc7208)
* [RFC 5322](https://tools.ietf.org/html/rfc5322)
* Mail server software
* Networking (to include internet routing)
* Known good source IP addresses
* HTML
* CSS
* *And I'm certainly missing something*

![Neo from The Matrix saying, "I know DNS" instead of "I know Kung Fu."](https://shortcdn.com/chrisshort/matrix-neo-i-know-dns.jpg#center)

[mxtoolbox.com](https://mxtoolbox.com/) is going to become your friend as you learn about a whole bunch of DNS you never wanted to learn but now have to. If you want readers to be able to reply to your messages, you will need to set up mail infrastructure that enables folks to do so. Most newsletter writers want people to be able to respond directly. Quality feedback is in short supply. Enabling every avenue for feedback to come in is vital. Use a service, don't do any part of this you're uncomfortable  managing on your own.

## Be mindful of the word "weekly"

Something I learned early from [Gareth Rushgrove](https://morethanseven.net/) of [DevOps Weekly](https://www.devopsweekly.com/) before getting started was, "Never put the word weekly in the title of anything." I reached out to Gareth before writing this piece. Gareth reiterated, "I stand by [that] as a good bit of advice; never put the word weekly in the title of anything."

[Mattias Geniar](https://ma.ttias.be/) of [cron.weekly](https://ma.ttias.be/cronweekly/) agrees with Gareth. When asked, Mattias said, "When you name a newsletter 'something-something weekly,' it implies a weekly deadline. Fun at first, but a chore eventually. Don't impose deadlines on yourself."

Even so, "DevOps'ish is a weekly newsletter." But, it's not in the title. The cadence can be changed if needed. But, doing a newsletter every two weeks is about as infrequent as you can be to gain traction. A monthly newsletter typically makes for too long of a read for a lot of folks. Weekly balances the right cadence with the right amount of content. It also helps build the habit of newsletter writing. Building habits are hard, but I've managed to deliver a newsletter every week since starting with only one real break for a vacation to Yosemite.

## My workflow

One thing I learned from working in the news industry at the turn of the millennia is to build for the web first. Nowadays, the most common user interface for mail and internet is the mobile phone. I recommend that you create the mobile web version of your newsletter first.

Don't bother worrying about any other format than the web at first because that is where your creativity can be the greatest. I do not use Mailchimp's built-in web site feature. I use [Hugo](https://gohugo.io/) as a static site generator and maintain an independent site from the mail delivery service. This decision enables moving mail platforms with ease. It's crucial to [own and control the distribution of your works](https://nomedium.dev/).

Since I use GitHub throughout the day, I like making web pages in Markdown using VScode. Using Hugo's live server to test locally is handy. Once it's beaten into shape, I will use the rendered HTML and the [MJML VScode extension](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode-mjml) to give me a multiclient compliant HTML mail template. The mail template can be tested live in VScode. This workflow gives me a consistently readable newsletter in inboxes every week. Although, I did recently get a complaint from a Superhuman user about their client's inability to handle dark mode correctly.

## Keep it simple

Gareth and I also agree strongly on his point, "keep everything as simple as possible." Minimizing the toolchain in this process is a big deal. Gareth might have gone to an extreme as he does a text-only newsletter intentionally. He probably doesn't want to fight with IE6 rendering issues and dark mode problems that I'm willing to wrangle. Keeping it simple is all about you and what you're ready to do every time you write a newsletter. It's a personal decision; only you can tell yourself if something is simple or not.

[DevOps'ish](https://devopsish.com/) used to have a random yet symbolic photo featured at the top of the newsletter. When polled in 2018, an overwhelming majority of readers said they had little interest in it. It was pretty, but it added effort that had little to no value. I pulled it and haven't looked back. Adding in the step to use [MJML](https://mjml.io/) was necessary if I wanted to send HTML emails. But, I am not going to get too crazy with the template design. Keeping that simple, clean, and readable is a top priority.

## It is rewarding

Mattias noted, "It's super rewarding! More than I thought it would be. The feedback you get & the relations you build are extra valuable!" I can 100% confirm this. When I started DevOps'ish, Mattias and Gareth were people I looked up to for expert information (they still are). I read their newsletters and learn from them every week. But, we're now friends because newsletter writers talk to each other more than I realized.

A newsletter is an instant icebreaker in a lot of circles, too, "Hi, I'm Chris Short. I write a newsletter about DevOps, cloud native tooling, and open source software." Even if they've never heard of DevOps'ish or me, they know what a newsletter is. If they connect with the topics of the newsletter, they inevitably ask questions or tell you what they do for a living. It gets folks to open up about what they do or like doing, and that is pretty cool. I like talking to folks that are excited about the things they're doing.

Please [subscribe to DevOps'ish](https://devopsish.com/subscribe/) today to join me on this journey!
