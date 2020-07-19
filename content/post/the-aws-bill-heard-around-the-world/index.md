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

## The e-mail

"Oh look, the AWS bill, I should have a laugh at that," I thought to myself. Until recently, it had been pennies a month for some very light SES usage. In February, I moved off Google Cloud back to AWS. The primary motivation there was that Google had so intertwined GSuite and GCP IAM, it became overly confusing.

{{< carbon >}}

Along with that migration came the CDN for this web site (cdn.chrisshort.net). When I say CDN, I mean a Cloudflare fronted, S3 bucket that holds assets deemed too big for git. It's not even [chrisshort.net](https://chrisshort.net) itself, as it is hosted on Netlify. The CDN is less than 300 files. Moving it to AWS bumped the AWS bill to an average of $23/month. Not too bad given the [site's traffic](https://app.usefathom.com/share/suwvjwwc/chrisshort.net).

### The shock

Not on this Saturday morning, nope. June 2020's AWS bill was a heart palpitation causing **$2,657.68** ([PDF](/pdf/invoice498711077_redacted.pdf)). I audibly gasped, "Keep your shit together." I thought to myself. Max was leaned up against me drinking his milk. I know he could tell something was wrong because he looked at the laptop screen. I only assume when he saw letters and numbers he thought, "Adult stuff... These cartoons and this Cinnamon Toast Crunch tho." 2020 being the year that it is and my military history being what it is, I've been diagnosed officially diagnosed with a panic disorder (on top of the PTSD and physical injuries).

{{< tweet 1279406322837082114 >}}

### The panic

I immediately began having a panic attack. As I took steps the mental steps, to mitigate the onset of the panic attack, I started forming a battle plan. Yes, I can switch back to emergency mode like back in the old days when something would go bang or boom and I'd run towards it. First, Max: Maslow's Hierarchy of Needs? Check. Next, me: As if it was destined, my alert for morning medications went off. "Daddy's gotta grab his meds, bud." Instinctively, Max leans off me (wow... okay... he's used to hearing that reminder and statement shortly thereafter; my brain is now in overdrive). I take everything I need to conquer this. Re-fill my coffee and grab a laptop charger.

## Incident response

Check the source of truth. What's diverged? How do we get things back to normal. I login to the AWS console hoping I got some output that was just off this month. The bill couldn't bill more 



