+++
author = "Chris Short"
categories = ["Open Source", "2019"]
date = 2019-09-22T12:15:00Z
description = "Seth Vargo, a former Chef employee, learned something he wasn't comfortable with about code he'd written. Chef had an active contract with the US DHS' ICE"
draft = false
tags = ["DevOps", "Chef", "Seth Vargo", "Open Source", "impact"]
title = "Seth Vargo says hell no—puts Chef on ICE"
image = "/seth-vargo-says-hell-noputs-chef-on-ice/balance-stacked-stones-2171464.jpg"
aliases = [
  "/seth-vargo-says-hell-no-puts-chef-on-ice/"
]

+++

Just when you thought a toxic, old, white guy with lousy hygiene was going to dominate the news this week, in walks [Seth Vargo](https://twitter.com/sethvargo). On Thursday, Seth Vargo, a former Chef employee, learned something he wasn't comfortable with about code he'd written. Seth discovered Chef had an active contract with the US Department of Homeland Security's Immigration and Customs Enforcement (yes, [that one](https://time.com/5623148/migrant-detention-centers-conditions/)). Seth then did something rather extraordinary. He yanked his code (including [chef-sugar](https://github.com/sethvargo/chef-sugar)) from GitHub and RubyGems. This resulted in many production systems going offline across the globe. We could see some metrics about impact in a lawsuit at some point. When DM'ing Seth early Friday AM he told me, "It's almost certain that Chef is going to sue."

{{< carbon >}}

Before we get into the reasoning, let's think about that for a second. A former employee (and current open source contributor) could bring an entire DevOps toolchain company to its knees. Sending it into a complete tailspin as it tried to restore production code it didn't have control over (or maybe even good backups for). Chef CEO, Barry Crist, [had to issue a statement](https://blog.chef.io/2019/09/19/chefs-position-on-customer-engagement-in-the-public-and-private-sectors/) damn near immediately.

{{< mc >}}

One person. One company. One policy. One decision. Global impact. If anyone wants to know why I care about technology's impact on humanity, and use [my newsletter](https://devopsish.com) as a platform for that position, this is it. As technologists, we have tremendous control over what we do. But, we have little to no control over how our outputs are used. If we are not incredibly thoughtful and deliberate with our decision making the impact could be globally catastrophic. In Seth's own words, "I'm not trying to make a political statement. As software engineers, we have to abide by some sort of moral compass. When I learned that my code was being used for purposes that I perceive as evil, I had to act."

Seth continues, "Chef's decision to remain silent on the issue, and their decision to restore an older version of the code, removing me as an author from the metadata, however, speaks volumes to their own moral and ethical standards." Chef has since put Seth's name back on the chef-sugar codebase.

In my opinion, Chef is as culpable as Seth is in all this. The fact someone not at their company anymore could have an impact like this shows an apparent lack of software supply chain controls and safeties. The fact [their timeline shows over a day of unavailability](https://blog.chef.io/2019/09/20/an-update-to-the-chef-community-regarding-current-events/) for some components leads me to believe that Chef's footing is even shakier than I suspected. Perhaps we should all look in the mirror and ask if our codebases are safe and our decisions are sound, moral, and ethical.

{{< adsense-matched >}}
