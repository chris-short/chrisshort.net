+++
author = "Chris Short"
categories = ["internet", "culture", "diversity"]
date = 2017-08-31T12:00:00Z
description = "Time, bugs, unprecedented events, and reason all played a factor in deciding to stick with Cloudflare"
draft = false
slug = "why-im-not-ditching-cloudflare"
tags = ["internet", "cloudflare", "hate", "diversity", "bgp"]
title = "Why I'm Not Ditching Cloudflare"
image = "https://cdn.chrisshort.net/cf-logo-v-rgb.png"

+++

[ARPANET](http://searchnetworking.techtarget.com/definition/ARPANET) (the precursor to the internet) was built to connect scarce computing resources across the country to foster research and development. It's designers say that it was never designed to survive a nuclear attack rather, it was built to work around flaky network links of its era. The Internet of today is powered by the [Border Gateway Protocol (BGP)](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) routing protocol. BGP is powerful as it shares information throughout myriad locations about how to send traffic from one part of the internet to another. I have seen this protocol work in war simulations with almost no service degradation of military networks during "catastrophic events". The Internet, at its core, is designed to be decentralized, survivable, and accessible.

For a long time I have been preaching about diversity. Not only diversity in your staff but diversity in your service providers. Your registrar shouldn't also house your DNS. Your CDN backend shouldn't be in the same place as your front end. While this seems more complex, it's simplified when using APIs. Managing resources with [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_Code) concepts makes cloud diversity manageable. This is why my website's code is on [GitLab](https://gitlab.com/chrisshort/chrisshort.net/), has DNS and CDN at [Cloudflare](https://www.cloudflare.com/), and all assets are in [Google Cloud Storage](https://cloud.google.com/storage/) distributed by Cloudflare. Why Cloudflare twice (DNS/CDN)? It's free and utilizes [Anycast](https://en.wikipedia.org/wiki/Anycast) (made possible by BGP) which is a very resilient way to build out Internet scale infrastructure and services.

If you weren't aware, after [the murder of Heather Hyer](http://www.cnn.com/2017/08/13/us/charlottesville-heather-heyer-profile/index.html) in Charlottesville, [several neo-Nazi websites were kicked off various service providers](https://qz.com/1055141/what-websites-and-apps-have-banned-neo-nazis-and-white-supremacists/). Neo-Nazis aren't good at distributed systems. They created single points of failure across their platforms. This is good for their detractors and those that oppose hate (at first, I applauded the bans). But, as the EFF has warned, [the tools used to ban unpopular opinion today could be the tools used to ban truth tomorrow](https://www.eff.org/deeplinks/2017/08/fighting-neo-nazis-future-free-expression). As much as I detest neo-Nazis, fascists, white supremacists, etc. having their right to be online revoked by a handful of major players in the tech space is a little troubling. Plus, I really like it when morons, hate-filled people, and racists self identify. It makes it very easy to avoid them once they do so.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- chrisshort.net Responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="1297095894"
     data-ad-format="auto"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>

What is even more troubling is the how and why a particular neo-Nazi/alt-right web site was punted off Cloudflare. As Matthew Prince, CEO, Cloudflare, so eloquently put it, "[I woke up this morning in a bad mood and decided to kick them off the Internet... It was a decision I could make because I'm the CEO of a major Internet infrastructure company.](https://gizmodo.com/cloudflare-ceo-on-terminating-service-to-neo-nazi-site-1797915295)"

It's important to recognize that Cloudflare has historically not caved into pressure to censor people that utilize their services. It's part of their policy to NOT choose WHO can be protected by their services. Yet, I felt that if my name was in any way affiliated with a service also used by neo-Nazis it was my moral responsibility to break that affiliation. Cloudflare was under enormous pressure to do something. But, they've historically made the decision to not cave into pressure from outside entities to kick people off the Internet. I was going to migrate my DNS to [Microsoft Azure](https://azure.microsoft.com/) and start paying Google more for traffic to Google Cloud Storage as a result of leaving Cloudflare.

I began to export DNS zone files from Cloudflare to push to Azure. When I went to use the Azure CLI tool something broke when importing the zone files. [I reached out to Kris Nova](https://twitter.com/Kris__Nova/status/897946854477910016) for help and after some bandying about we concluded [I found a bug in the Azure CLI tool](https://github.com/Azure/azure-cli/issues/4245). I decided it was worth waiting for the bug to get fixed to migrate away from Cloudflare. Then something happened; [Cloudflare banned the neo-Nazis from their service](https://blog.cloudflare.com/why-we-terminated-daily-stormer/).

I listened to Ben Thompson and James Allworth discuss Cloudflare's decision on [The Exponent Episode 121](http://exponent.fm/episode-121-the-uber-mutation/) and got a lot more of the back story than I originally had on the banning. Matthew Prince waking up in a bad mood and deciding to kick folks off the service he and his team built was something I did not see coming. His reluctance to do so and the explanation as to why doing it was actually a bad thing is well reasoned. For that reason, among many others (like their impeccable uptime record made possible by BGP), I am deciding to stay with Cloudflare. It wasn't an easy decision but time, bugs, unprecedented events, and reason all played a factor.
