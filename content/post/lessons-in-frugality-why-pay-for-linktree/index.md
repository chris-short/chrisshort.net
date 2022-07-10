+++

author = "Chris Short"
categories = ["Internet", "Philosphy", "2022"]
date = 2022-07-11T07:00:00Z
description = "With the help of some great static HTML template sites, I built my own Linktree alternative that allows complete control of the entire site and analytics."
draft = false
slug = "lessons-in-frugality-why-pay-for-linktree"
tags = ["analytics", "Linktree", "service", "static site", "hosting", "platform", "privacy", "Zapier", "CSS", "code", "website"]
ShowTOC = true
title = "Lessons in Frugality: Why Pay for Linktree?"
[cover]
image = "https://shortcdn.com/file/chrisshort/burning-money.webp"
alt = "Hands holding burning money"
caption = "Photo by ArtHouse Studio: <https://www.pexels.com/photo/woman-holding-burning-banknotes-4588670/>"

+++

{{< carbon >}}

I opened someone's Twitter profile in April and saw a Linktree URL. I click it and start to poke around after signing up for an account. The changing gradient backgrounds amuse me. I appreciate the mobile-friendliness and the built-in analytics. I needed something like this to help me add newsletter subscribers, guide folks to my various projects, and all the other things Linktree does. I have a lot of sites and social profiles. Plus, Linktree is better than throwing my entire website at someone and saying, "You figure me out." With a Zapier integration, this can lead to newsletter signups too?!?! "I kinda need this," I think to myself. I plop down my $60 for a year of service and spend the next few weeks adding, tweaking, and tinkering. Then let it sit.

Then, I forgot about it. Not because Linktree isn't useful (its purpose and need are established). I see traffic coming from Linktree to my sites. But, I don't look at Linktree to see how things are going. It's not a habit I picked up. I go to $PLATFORM to see $ANALYTICS, not $PLATFORM01 and $PLATFORM02. More specifically, I click an icon on my iOS or iPadOS home screen to see analytics.

## I'm already paying for great analytics

I almost forgot about the analytics that Linktree gives me. This past week, I poked at them a bit and was, well, like how I am with Google Analytics, overwhelmed by the breadth and scope to which things are being tracked and how privacy is often disregarded to enhance metrics.

I also notice I've only received two newsletter signups since April through this. Linktree is not a good way to garner newsletter subscribers, it would appear. Plus, the Zapier integration to get newsletter signups uses a webhook rule in Zapier. Do you know how expensive Zapier can get? I'm lucky that I had an extra one to spare for this.

![Lifetime Linktree Analytics](https://shortcdn.com/file/chrisshort/linktree-lifetime-analytics.webp)

Aggressive analytics tools will get less accurate data from the industry's devs, engineers, advocates, and privacy-conscious folks. These metrics are wrong, too, because most nerds I know roll around the internet with DNS filtering and many layers of protection in their browsers. I'd bet money that many clicks weren't tracked at all.

I use Fathom Analytics because of the privacy it gives users and the right amount of visibility it provides me. I can track how traffic comes and goes without using invasive analytics tools. I really like Fathom Analytics a lot. They also have monitoring (and a [lovely affiliate program][1]) bundled in as a _chef's kiss_ on top.

[![Fathom Analytics](https://shortcdn.com/file/chrisshort/aff04.png)](https://usefathom.com/ref/Z8NTXN)

## I'm already paying for web hosting

I stopped using WordPress over a decade ago. Gone are the days of grabbing a VPS or EC2 instance and building out all the bells and whistles I need to get a content management system up and running with databases, web servers, and security testing. There's a lot involved in spinning up, securing, and maintaining WordPress nowadays (don't get me started if you need email working). I was tired of seeing folks have their sites kicked over because I didn't update a plugin before I saw the notification. I used various platforms for a few years but finally found a stack I love.

There are many ways to host a website connected to a git repo for free or stupid cheap these days. There are even more ways if you are willing, or like me, to have passed the free tier to pay based on usage. I happily admit to being a Netlify user for years now. I became a paying customer to thank them for helping the community projects I work within.

Then it hit me. I'm paying other folks to manage hosting and analytics for me. Why on earth would I pay a third company to do the same thing for a niche use case??? I felt duped for a moment, but this was my own doing. I'd paid for a year of service. But I can cancel the next payment and stop pointing at Linktree in the meantime.

## The Solution

I am a big fan of [Hugo][13] (as noted in my recent [dev environment][5] post) for rapidly prototyping and building websites and cranking out content. But, even Hugo was overkill for this use case. At this point, I have so many Hugo and other sites that I'm paying for a static site hosting service (build minutes are a metric you need to measure and manage).

Hugo would be overkill for a simple one-page, static site like this one. Hugo would not be as flexible for SEO purposes as simple HTML, CSS, and JavaScript would be either. Where we're going, we will only need our three friends: HTML, CSS, and JavaScript.

Drawing inspiration from a recent [dev.to article][6], I went to look at different landing pages on what I found were a surprising number of great static site templates for use. I pulled [Aerial][7] from [html5up.net][8]. Other template repos include [ThemeFisher][9] and [Bootstrap Made][10].

This is how websites were built in ye olden times. My first ever actual corporate website I made from the ground up using vim on a Red Hat Linux 5 box. It was tough, but you have granular controls with static HTML sites that you don't always get with Static Site Generator (SSG) themes. That and the overkill of an SSG for a single page. These templates would have been a big help back in the early 00s.

I made my customizations to the HTML and CSS (it needed more animation configuration because I had more than ten sites to link to 😬). My friend [JJ Asghar][11] liked the idea so much that he built his static landing page the next day (I like it; [here's his code too][14]). Now we have tools like code-server with extensions that make managing one HTML page and CSS easy compared to 20+ years ago. The advances in those technologies are just the icing on the cake. Pro-tip: [favicon-generator.org][12] will add that last bit of polish to your site.

Once the site looked good on my local network, I took it to a static hosting service, told it to deploy `/`, and off the service went with the shortest build time that service probably saw all day. [chrisshort.me][2] is live and distributed across a global CDN in less than a minute.

## Conclusion

I am treating this project as a way to test out other tooling and tinker with experiences across all the tools I want. For example, I spun up [chrisshort.me][2] on [AWS Amplify][3] in seconds ([code on GitHub][4]). Right now, it's sitting on another service I wish to compare to Netlify and AWS Amplify. The site is easy enough to deploy; I'll probably use it regularly to test out different services.

The moral of the story is, don't pay for something when you already have the services, tools, time, and skills needed to accomplish the same thing. I was fascinated by "new shiny" and used a service I could have easily just made the equivalent of myself. The importance of owning your platform is ever-present. Find the suitable abstraction layer that fits your requirements and build your presence on top of that. You'll thank me for it in the long run.

[1]: https://usefathom.com/ref/Z8NTXN
[2]: https://chrisshort.me
[3]: https://aws.amazon.com/getting-started/hands-on/host-static-website/
[4]: https://github.com/chris-short/chrisshort.me
[5]: https://devopsi.sh/env
[6]: https://dev.to/jihedkdiss/how-to-create-a-portfolio-website-for-free-4d0a
[7]: https://html5up.net/aerial
[8]: https://html5up.net/
[9]: https://themefisher.com/free-bootstrap-templates
[10]: https://bootstrapmade.com/bootstrap-portfolio-templates/
[11]: https://jjasghar.me/
[12]: http://www.favicon-generator.org/
[13]: /categories/hugo/
[14]: https://github.com/jjasghar/jjasghar.me

{{< eo_signup >}}
