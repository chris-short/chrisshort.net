+++
author = "Chris Short"
categories = ["DevOps"]
date = 2018-02-06T08:30:00Z
description = "There are four military phrases that I have used for a long time that could be in greater use in the DevOps space."
draft = true
slug = "military-phrases-for-devops"
tags = ["devops", "military"]
title = "Four Military Phrases For Use in DevOps"
image = "https://cdn.chrisshort.net/low-crawl.jpg"

+++

The US military is known for quite a few things. Two that I always find fascinating are its excessive use of acronyms and flowery language to describe certain situations. There are four military phrases that I have used for a long time that could be in greater use in the DevOps space.

### Good Idea Fairy

> Definition: Military term; An evil mythical creature that whispers advice and ideas into the ears of military leadership, causing hundreds unnecessary changes and countless wasted man-hours every year.

I have discussed the Good Idea Fairy before in my talk, "[What the Miltary Taught Me About DevOps](/what-the-military-taught-me-about-devops/)". The best example of the Good Idea Fairy in DevOps is when someone wants to use a new tool that offers no new functionality or improvement. This happens more often than you realize. Sometimes new tools will result in new and improved functionality.  But, if no one uses that functionality what good is taking the time to implement it? DevOps is about getting the job done with the right tool now while being mindful of the future. If it's time to retool, do it. Otherwise, resist that new "DevOps tool" someone read about on Hacker News.

Another example is when leadership decides that your well-trained developers are going to code in a different language. Or your infrastructure is deployed with Terraform and for no reason, everything has to be ported over to Ansible. That's insane, yes, but I've seen it happen. The Good Idea Fairy is not your friend in DevOps (or life for that matter).

<!-- chrisshort.net Responsive -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="1297095894"
     data-ad-format="auto"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>

### Hurry Up and Wait

The urge to rush to the airport so you can get through security and relax at the gate or in a lounge; that's hurry up and wait. It's not good or bad but it's sometimes the best thing to do. In the military, folks are quickly marshaled to a place so they can wait for the next thing to hurry up and do. Much like getting a group of people to a certain place at a certain requires more time to do the same holds true for code. The more of it you try to deploy at once the longer it takes. Make sure you are breaking down your work in progress to the smallest possible unit. It's much better to get a function or system deployed early and have it laying in wait than trying to rush it out the door. The trick is finding the balance between readiness and waiting. But, a project finishing too early can be bad too. The requirements can change requiring rework which is a DevOps anti-pattern.

> [**Subscribe to DevOps'ish**](/newsletter/) for updates on DevOps, Cloud Native, and Open Source news.

### Cluster Fuck

A cluster fuck (or fustercluck if you so desire) is described as a situation that is or has been mishandled beyond reason. The DevOps term most synonymous with cluster fuck might be dumpster fire (or the AWS status page). Think of a cluster fuck as a  series of decisions that have led to an enormous amount of technical debt. This technical debt will take an exponential amount of time to untangle compared to how long it took to put in place. This is a cluster fuck.

Be mindful of how your quick hack has to be fed and cared for before rolling it out to production. Remember, the best time to address technical debt is before it's created. The second best time is immediately after it's implemented. Avoid creating cluster fucks when possible.

<!-- chrisshort.net Responsive -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="1297095894"
     data-ad-format="auto"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>

### Embrace The Suck

The Suck is frequently used to describe the US Marine Corps by Marines. But, I have seen its context expand to a ton of situations. "The suck" is any miserable situation that you have to get through to get to a better situation (hopefully). In DevOps, "the suck" is going to be building that tedious, repetitive pipeline. Another good example is doing the investigative work to figure out how new systems got to their current state (bonus points for no documentation and no one still being employed that could have built the system).

Let's face it, DevOps isn't all rainbow, flowers, unicorns, and glory. There are going to be things that you will have to do in DevOps that you're not going to like. Embracing the suck reminds folks that there are better things ahead. Push through this now and move on with life.