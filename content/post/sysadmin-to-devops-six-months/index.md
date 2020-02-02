+++
author = "Chris Short"
categories = ["DevOps"]
date = 2017-05-11T12:04:00Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/gears-galore.jpg"
slug = "sysadmin-to-devops-six-months"
tags = ["DevOps", "tools"]
title = "\"Good SysAdmin to DevOps Engineer in Six Months\""
aliases = ["sysadmin-to-devops-six-months"]

+++

The other day my Vice President asked me a question, "What would it take to turn a good SysAdmin into a [DevOps](https://devopsish.com/) engineer?" He followed it up with, "Don't spend more than ten minutes thinking about it." He was not disappointed when I told him the next day I am spending way more than ten minutes on answering the question. This is a hard question for me to answer. This is a question that you won't know if your answer is right for at least six months.

{{< mc >}}

I had more than ten minutes worth of thoughts pop into my head within seconds of the question. A deluge of DevOps lessons learned washed over me. I realized that I needed to build a framework to help others embrace DevOps culture and thinking. It's not feasible to have a framework that does not define what you are trying to build.

## What is DevOps?

Many in the DevOps world are hesitant to define what DevOps actually is. There are also many people trying to define DevOps that sometimes miss the mark. For the sake of this discussion, DevOps is a culture! The DevOps culture is a combination of three key pieces that further define it: [*People, Processes, and Tools*](/the-dark-side-of-devops/). Let's discuss how these three pieces can mold a good System Administrator into a DevOps engineer.

### People

To say a culture contains people is a "no brainer". If you work with a reliable SysAdmin what will they need to morph into a DevOps-minded engineer? The number one thing this person will need is *drive*. You have to commit to starting a DevOps journey and yearn to continue it. Resting on your laurels is not a DevOps mindset. Improving upon what they have learned daily is a key skill everyone in DevOps must cultivate.

It takes a willingness that is often hard to force someone to do. You can incentivize it all you want. But, the best incentive that you can give someone in DevOps is self-improvement. The perspective you should have is that this person will not work for you forever. You are building skills in your people that might end up leaving for what they see as greener pastures. Embrace this idea and watch your SysAdmin turn DevOps engineer grow.

{{< carbon >}}

Taking pride in one's work is also another characteristic needed in a good DevOps personality. A good SysAdmin taking ownership in their work elevates them. Knowing their solution will be improved upon over time by others prevents engineers from taking too much pride in their work. Giving a sense of ownership in driving solutions to problems is a key thing leadership can provide to a DevOps engineer. If an engineer has an idea they are passionate about, let them work on it. The engineer might not have the expertise others on the team have but try your best not to tamp the fire of passion.

Empathy is another key trait in a good DevOps personality. It is hard to measure and even harder to invoke in others. If you hear team members suggesting to others to think of an issue from the customer's perspective, they are likely ready to work in DevOps spaces. Empathy for solving others' problems goes a long way in the DevOps space. DevOps personalities must be able to empathize with the business as well. This means your product and project managers need to be aware of what the goals of DevOps are.

A sure-fire way to kill any chance of developing empathy is to throw an engineer into the deep end of the pool. As suggested in Google's book, [Site Reliability Engineering](http://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html), "This 'trial by fire' method of orienting one's newbies is often born out of a team's current environment." You are trying to change your environment and your people into proactive, forward thinking, DevOps-minded engineers. Dropping your people into a firefight is never a good idea.

### Processes

How do you teach someone a process that they don't know and they aren't practicing? Example is the best thing. Sometimes good examples of DevOps best practices are hard to find in your own environment. The first process that should go in place is production work must happen through automation. Nothing should change or go out into production without being peer reviewed, tested, and logged. This is a difficult process to put in place. A common objection to the automation first mindset will be, "How do you automate something that isn't built yet?" The tooling matters to an extent in this case. But, the mentality of an automation-first process is what is most important. 

Implementing the automation-first process is hard when development and test environments don't exist. The only solution to that problem is to build them. The environments must be as close to production as possible. Humans are very fallible and slow. This only increases the importance of automation being baked in as a process and a way of thinking. If something is being done it deserves to use the automation frameworks you have implemented, period. One-off changes cannot exist and should be mitigated during the automation framework rollout. There is no chicken, no egg; only automation.

[Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_Code) is a concept that successful DevOps practices need to embrace to be successful. Having configuration and implementation laid out in common, domain specific languages managed by version control is imperative to the automation process. This enables team members to monitor, implement, and manage changes to all environments and systems. The dev/test/prod environment methodology combined with Infrastructure as Code allows for consistency throughout the environment and minimizes mistakes entering production.

If your aspiring engineer needs a nudge in the right direction on processes, encourage them to read two books:

* [The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win](https://amzn.to/2DBVoM3)
* [The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations](https://amzn.to/2DBARXO)

*Note: chrisshort.net may earn compensation for sales from links on this post through [affiliate programs](/terms/).*

People learn in different ways. These two books provide a story and a guide in different, digestible formats. This will expose them to the concepts and thought processes required to embrace everyday DevOps processes. Concepts like tracking and automating work, making smaller changes more often, tightening feedback loops, and continuous learning are processes that are best explained by a third party.

### Tools

A common misconception about DevOps is that it is all about tooling. Tools are but a fraction of the larger DevOps picture. Your DevOps teams should feel free to enable whatever tooling makes the most sense to the team. Being agnostic is important but, it is better for the business if simpler, well-known tooling is in use. For example, git may not be the easiest to use version control software but, it is the most widely known. A configuration management tool that is simple to use but has a smaller market share could end up being a bad decision as the need for talent grows. Even the creator of Ansible was not specific when suggesting the importance of a configuration management tool. A thoughtfully chosen tool to manage something is better than nothing.

[![Michael DeHaan on Twitter](michael-dehaan-tools.png)](https://twitter.com/laserllama/status/857382468378390533)

Tools that enable collaboration and increase communication amongst your DevOps team are critical. No one exists in a vacuum. Writing documentation, communicating changes, updating tickets or work orders, and committing code to version control are all necessary tools and processes for DevOps. Project management should integrate with these tools as well to prevent tool sprawl. As your teams focus on fewer and fewer entry points into the systems they are maintaining they will have a harder time interfacing with one-off systems. Project management, HR, or other business processes need to integrate into the daily routines of people to be successful. Keeping the tooling tight and consistent is critical to DevOps.

Continuous Improvement applies not only to systems and code but to people too. It's logical to mention some continuous improvement tools for DevOps practitioners. Encouraging engineers to attend Meetups is helpful for them to learn things that are outside of their sphere of influence. Attending and speaking at conferences (for example, [DevOpsDays](https://www.devopsdays.org/)) should be encouraged as well. Culture is as much about community as it individuals within it; DevOps is no different.

Reading newsletters cultivated by active community members (not product makers) can be helpful for continuous learning (shameless plug for [DevOps'ish](https://devopsish.com/)). Technical news sites like [lobste.rs](https://lobste.rs/), [Hacker News](https://news.ycombinator.com/) (don't read the comments), [Twitter (#DevOps)](https://twitter.com/hashtag/DevOps), [DevOps Newsletters](https://devopsnewsletters.com/), etc. are also helpful at pushing new concepts to engineers. Books are fabulous resources but, there are so many they cannot be consumed in their entirety. Engineers will often have books as a reference for when needed. A subscription to O'Reilly's Safari would enable your engineers to have access to a world's worth of information for a marginal fee. It also removes some financial burden from your engineers as they look to build their libraries.

## Conclusion

The [DevOps](https://devopsish.com/) journey is a combination of people, processes, and tools. The culmination of these is a team of allies pushing the envelope and never resting on their laurels. There is no such thing as a completed DevOps transition. Resting on your laurels is not a DevOps mindset. DevOps and its allies should be iterating and improving upon what they have learned daily. Building a team to do anything is no simple task. But, building a person that's willing to embrace cultures and methods is an easier task. Show them a path, help them go down it, and embrace their feedback.

{{< adsense-matched >}}
