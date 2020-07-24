+++
author = "Chris Short"
categories = ["AWS", "Cloud", "Cloudflare", "2020"]
date = 2020-07-21T03:00:00Z
description = "The tale of the July 4th surprise $2700 AWS bill. It is more nuanced than you think."
draft = true
slug = "the-aws-bill-heard-around-the-world"
tags = []
title = "The AWS bill heard around the world"
image = "/the-aws-bill-heard-around-the-world/june-2020-aws-bill-header.png"

+++

## Scene

It was a bright, Saturday morning, July 4, 2020. I had just gotten Max all situated with breakfast and cartoons (Mighty Mike, if you're curious). Julie was sleeping in like she normally does on every day I have off. I'm an early riser and this is a cherished part of our co-parenting because it gives Max and I time to bond (when he's not stuffing his face and laughing at cartoons). I sat down with my laptop to plow through the week's personal email.

### The e-mail

"Oh look, the AWS bill, I should have a laugh at that," I thought to myself. Until recently, it had been pennies a month for some very light SES usage. In February, I moved off Google Cloud back to AWS. The primary motivation there was that Google had so intertwined GSuite and GCP IAM, it became overly confusing.

{{< carbon >}}

Along with that migration came the CDN for this web site (cdn.chrisshort.net). When I say CDN, [I mean a Cloudflare fronted, S3 bucket that holds assets deemed too big for git](https://chrisshort.net/low-cost-content-delivery-network-cdn/). It's not even [chrisshort.net](https://chrisshort.net) itself, as it is hosted on Netlify's CDN along with every other static site I own or manage. I've been a Cloudflare user for a long time. The CDN is less than 300 files and has existed for over five years on various clouds. Moving it back to AWS from GCP bumped the AWS bill to an average of $23/month. Not too bad given the [site's traffic](https://app.usefathom.com/share/suwvjwwc/chrisshort.net).

### The shock

Not on this Saturday morning, nope. June 2020's AWS bill was a heart palpitation causing **$2,657.68** ([PDF](/pdf/invoice498711077_redacted.pdf)). I audibly gasped, "Keep your shit together." I thought to myself. Max was leaned up against me drinking his milk. I know he could tell something was wrong because he looked at the laptop screen. I only assume when he saw letters and numbers he thought, "Adult stuff... These cartoons and this Cinnamon Toast Crunch tho." 2020 being the year that it is and my military history being what it is, I've been diagnosed with a panic disorder (on top of the PTSD and physical injuries).

{{< tweet 1279406322837082114 >}}

### The panic

I immediately began having a panic attack. As I took the mental steps, to mitigate the onset of the panic attack, I started forming a battle plan. Yes, I can switch back to emergency mode, like back in the old days, when something would go bang or boom and I'd run towards it (it's not helpful overall, trust me).

First, Max: Maslow's Hierarchy of Needs? Check.  
Next, me: As if it was destined, my alert for morning medications went off.

"Daddy's gotta grab his meds, bud." Instinctively, Max leans off me (wow... okay... he's used to hearing that reminder and statement shortly thereafter; my brain is now in overdrive). I take everything I need to conquer this while still being able to cognitively function. I refill my coffee and grab a laptop charger.

## Incident response

Check the source of truth.

What's diverged?

How do we get things back to normal?

I login to the AWS console hoping I got some output that was just off this month. Weirder stuff has happened (like [S3 going down](https://aws.amazon.com/message/41926/)). This bill couldn't be more out of norm than ever. This AWS bill is several hundred dollars more than our mortgage! I hit the AWS Billing page and am deeply saddened by what I see:

![AWS Billing landing page showing a $2,657.68 balance](/the-aws-bill-heard-around-the-world/aws-bill-landing-page.png)

There it was... **$2,657.68**, staring at me. "This can't be legit." Drilling down even further, it looks like it is indeed legitimate traffic from the cdn.chrisshort.net S3 bucket in us-east-2. In total, **more than 30.6 terabytes of traffic** had moved out of that one S3 bucket. WHEN?!? Did this just happen? Nope.

![AWS data transfer billing break down](/the-aws-bill-heard-around-the-world/aws-june-2020-data-transfer.png)

![S3 Activity](/the-aws-bill-heard-around-the-world/june-23-24-2020-s3-breakdown.png)

**30.6 TB?!?!** how is that even possible???  
$1,011.59 on 23 June 2020.  
$1,639.07 on 24 June 2020.

I immediately open a ticket with AWS Support frantically wondering what broke? How is this even possible? Did someone bypass Cloudflare? What the hell is Cloudflare saying?

![Cloudflare 22 June 2020](/the-aws-bill-heard-around-the-world/cloudflare_june_22_2020.png)  
Oh cool, Cloudflare let those 2,700 requests passthrough completely uncached? How is that not anomaly detected as a DDoS??? How is it that barely of the fraction of the traffic is cached (more on that later)?

![Cloudflare 23 June 2020](/the-aws-bill-heard-around-the-world/cloudflare_june_23_2020.png)  
Oh another 4,400 requests the next day... Sweet, baby Jesus. Oh but you served 9 GB from cache. Thanks, Cloudflare.

## Help Arrives

Apparently, when you tweet something crazy af, like a $2700 AWS bill, on a quiet holiday morning, it gets a lot of attention. The tweet was seen by a quarter million people and a third of them interacted with it. This is so much attention that the AWS Support Twitter account was on it before, [my friend](https://twitter.com/QuinnyPig/status/1186319925901586432) and [cloud economist](https://www.duckbillgroup.com/), Corey Quinn.

{{< tweet 1279424879566163970 >}}  
Praise Twitter for at least its ability to draw attention to things. I am not sure this would've ended up as well as it did without it.

{{< tweet 1279446759664611329 >}}  
I forwarded the bill to Corey almost immediately after seeing it at pre-dawn west coast time. I am forever thankful to Corey for his analysis. When he was ready, Corey sent me a list of things he needed to do an analysis (instead, I created him a regular IAM account with the proper perms 😉 and yes I cleaned up after).

Corey Quinn's thread on the topic covers what happened on the AWS side pretty well:

{{< tweet 1280280727133642753 >}}

## But, wait! There's more!

I had tickets in with Cloudflare (1918916) and AWS (7153956931). Cloudflare was the absolutely least helpful service I could have imagined. A long term user and on and off customer thinks they were attacked for two days and you don't life a finger? Hell. I might go spend money elsewhere just to not have to deal with Cloudflare support ever again. Matthew Prince, fix it. The industry knows your company is toxic af.

The backchannel opens up. I've worked in a lot of different spaces. In government and private sector; intelligence to journalism. There are always backchannels. I want to make it very clear. These backchannels are rarely used things. But, they exist as the kryptonite for the bureaucratic bottleneck that is necessary to prevent access to the high-value assets in the backchannel. When the backchannel opens up you know.
