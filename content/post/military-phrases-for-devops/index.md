---
author: Chris Short
canonicalURL: https://opensource.com/article/18/7/military-phrases-devops
cover:
  caption: Parental Discretion is Advised
  image: https://shortcdn.com/chrisshort/low-crawl.jpg
date: "2018-07-23"
description: There are many military phrases that I have used for a long time that
  could be in greater use in the DevOps space.
draft: false
slug: military-phrases-for-devops
tags:
- devops
- military
title: Military Phrases For Use in DevOps
---

An edited version of this article was originally written for opensource.com: [5 military phrases for DevOps practitioners](https://opensource.com/article/18/7/military-phrases-devops)

The U.S. military is known for quite a few things, including its excessive and fascinating use of acronyms, euphemisms, and colorful phrases to describe certain situations. But many of these terms are applicable to other areas of life, including many non-military jobs. These are a few phrases I think crossover between both DevOps and the armed forces.

## Good Idea Fairy

> Definition: Military term; An evil mythical creature that whispers advice and ideas into the ears of military leadership, causing hundreds unnecessary changes and countless wasted man-hours every year. —[Urban Dictionary](https://www.urbandictionary.com/define.php?term=good%20idea%20fairy)


I discussed the Good Idea Fairy in "[What the military taught me about DevOps](/what-the-military-taught-me-about-devops/)." The best example of the *Good Idea Fairy* in DevOps is when someone wants to use a new tool that offers no new functionality nor improvement. This happens more often than you realize. Sometimes new tools will result in new and improved functionality. But, if no one uses that functionality, what good is taking the time to implement it? DevOps is about getting the job done with the right tool now while being mindful of the future. If it's time to retool, do it. Otherwise, resist that "new DevOps tool" someone read about on [The Evil Orange Site](https://news.ycombinator.com/).

Another example is when leadership decides that your well-trained developers are going to code in a different language. Or your infrastructure is well-managed with Ansible and, for no reason, everything has to be ported over to Terraform. That's insane, yes, but I've seen it happen. The Good Idea Fairy is not your friend in DevOps (or in life for that matter).

## Hurry Up and Wait

The urge to rush to the airport so you can get through security and relax at the gate or in a lounge—that's "hurry up and wait." It's neither good nor bad, and it's sometimes the best thing to do. In the military, folks are quickly marshaled to a place so they can wait for the next thing to hurry up and do.

{{< carbon >}}

It's much better to get a function or system deployed early and have it lying in wait rather than trying to rush it out the door. A project finishing too early can be bad, too. The requirements can change, requiring rework, which is a DevOps anti-pattern. The trick is finding the balance between readiness and waiting.

Much like getting a group of people to a certain place at a certain time requires more time the more people there are, the same holds true for code. The more code you try to deploy at once, the longer it takes. Make sure you are breaking down work in progress to the smallest possible unit.

## Embrace The Suck

"The suck" is frequently used by Marines to describe the U.S. Marine Corps. But I have seen its context expand to a ton of situations. "The suck" is any miserable situation that someone has to get through to get to a better situation (hopefully). In DevOps, "the suck" is going to be building that tedious, repetitive pipeline. Another good example is doing the investigative work to figure out how legacy systems got to their current state (bonus points for no documentation and no one that could have built the system still being employed).

Let's face it, DevOps isn't all rainbow, flowers, unicorns, and glory. There are going to be things that you will have to do in DevOps that you're not going to like. Embracing "the suck" reminds folks that there are better things ahead. Push through this now and move on to a better future.

## Cluster Fuck

A cluster fuck (or fustercluck if you so desire) is described as a situation that is or has been mishandled beyond reason. The DevOps term most synonymous with cluster fuck might be dumpster fire (or the AWS status page). Think of a cluster fuck as a  series of decisions that have led to an enormous amount of technical debt. This technical debt will take an exponential amount of time to untangle compared to how long it took to put in place. This is a cluster fuck.

Be mindful of how your quick hack has to be fed and cared for before rolling it out to production. Remember, the best time to address technical debt is before it's created. The second best time is immediately after it's implemented. Avoid creating cluster fucks when possible.

## You Can Only Expect What You Inspect

"You can only expect what you inspect" often refers to a leader's expectations versus the inevitable reality. If there is an expectation that something is done a certain way, be sure to periodically check that it was done right (or at all). For DevOps, consistently check that outcomes are improving business metrics and providing value. Don't assume that processes are running when you think they are; monitor them. Don't assume users will use a tool in a certain way, observe feature usage. Assumptions are an enemy in DevOps organizations, so make sure to eliminate them through inspection.

## "The standard you walk past is the standard you accept."

"The standard you walk past is the standard you accept."
[David Morrison](https://en.wikiquote.org/wiki/David_Morrison), a former chief of the Australia Army, made a prolific statement when addressing unacceptable behavior: "The standard you walk past is the standard you accept." This holds true in life and in DevOps. If your coding practices or culture do not live up to the standards your organization has set for itself, correct it on the spot. Think of the concept of [Toyota's Andon Cord](https://itrevolution.com/kata/). It signals an issue and calls for swarming so quality issues can be corrected before being rolled out into a finished vehicle. The same should hold true for the tooling and people in an organization. Do not allow the bar to be lowered. Keep the standards high.
