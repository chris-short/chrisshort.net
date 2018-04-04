+++
author = "Chris Short"
categories = ["CFP"]
date = 2018-03-02T12:31:00Z
description = ""
draft = false
slug = "devops-is-not-a-war"
tags = ["devops", "culture", "thucydides", "thucydides trap", "cfp"]
title = "DevOps is Not a War"
aliases = [
    "/cfp/devops-as-a-war-crime"
]

+++

## Abstract

Over the past 500 years, there have been 16 cases of a rising power threatening to displace a ruling power. 75% of those cases resulted in war. Although your organizational transformation probably won't lead to war, it could be contentious. History can help prevent conflict when driving change. This talk will analyze human tendencies, historical data, and provide real-world examples of how to prevent conflict during your DevOps journey.

## Description

DevOps needs to focus on more than Dev and Ops to be truly transformative for an organization. What about your security folks? What about your network team? We'll introduce the work of Thucydides and the concept of Thucydides's Trap, a political scientist's take on how rising and established powers are destined for conflict. Transformations can often be contentious and sometimes rebellious. History can actually help us avoid failure in our transformations. The more the merrier along this journey!

### whoami

* Brands
* Partially Disabled Veteran

### Thucydides

* c. 460 – c. 400 BC
* Athenian historian and general
* *History of the Peloponnesian War* (fifth-century BC war between Sparta and Athens)
* "Father of Scientific History"
* "Father of the school of political realism"
    * "political behavior of individuals and the subsequent outcomes of relations between states as ultimately mediated by and constructed upon the emotions of fear and self-interest."
    * "It was the rise of Athens and the fear that this instilled in Sparta that made war inevitable."

SOURCES:

* [https://en.wikipedia.org/wiki/Thucydides](https://en.wikipedia.org/wiki/Thucydides)
* [Belfer Center for Science and International Affairs](https://www.belfercenter.org/thucydides-trap/case-file)

### Graham Allison

* American political scientist
* Professor at the John F. Kennedy School of Government at Harvard
* US national security and defense policy analyst
* Defense Medal for Distinguished Public Service recipient

SOURCE: [https://en.wikipedia.org/wiki/Graham_T._Allison](https://en.wikipedia.org/wiki/Graham_T._Allison)

### Thucydides's Trap

* Allison coined "Thucydides Trap"
* "Thucydides's Trap refers to the natural, inevitable discombobulation that occurs when a rising power threatens to displace a ruling power. This can happen in any sphere."
* "Intentions aside, when a rising power threatens to displace a ruling power, the resulting structural stress makes a violent clash the rule, not the exception."
* "Over the past five hundred years, in sixteen cases a major rising power has threatened to displace a ruling power. In twelve of those, the result was war. The four cases that avoided this outcome did so only because of huge, painful adjustments in attitudes and actions on the part of challenger and challenged alike."

Source: [Destined for War: Can America and China Escape Thucydides's Trap?](https://www.amazon.com/dp/B01IAS9FZY/)

### 12 of 16 Overview

* Portugal vs. Spain 🕊
* France vs. Hapsburgs 💥
* Hapsburgs vs. Ottoman Empire 💥
* Hapsburgs vs. Sweden 💥
* Dutch Republic vs. England 💥
* France vs. Great Britain 💥
* United Kingdom vs. France 💥
* France and United Kingdom vs. Russia 💥
* France vs. Germany 💥
* China and Russia vs. Japan 💥
* United Kingdom vs. United States 🕊
* United Kingdom (supported by France, Russia) vs. Germany (aka WWI) 💥
* Soviet Union, France, and United Kingdom vs. Germany (aka WWII) 💥
* United States vs. Japan  (aka WWII) 💥
* United States vs. Soviet Union (aka Cold War) 🕊
* United Kingdom and France vs. Germany 🕊

Source: [Belfer Center for Science and International Affairs](https://www.belfercenter.org/thucydides-trap/case-file)

### Dev and Ops

* The divide here is closing (if not already closed)
* Only the outliers remain (aka not Silicon Valley)
* DevOps is happening; [the US nuclear weapons program is adopting DevOps and Agile](https://www.fbo.gov/index?s=opportunity&mode=form&id=2482d620e399c5fd667a8e4d059cc9ec&tab=core&_cview=0)
* That won't work HERE is malarkey; sorry, not sorry
* Your organization has no excuse

### Fear

"It was the rise of Athens and the **fear** that this instilled in Sparta that made war inevitable."

Source: [Belfer Center for Science and International Affairs](https://www.belfercenter.org/thucydides-trap/case-file)

### Fear Causes Resistance

* "Tech is easy. Meat is hard." —Nirmal Metha
* "Computers are easy, people are hard." —Bridget Kromhout

### United Kingdom vs. United States 🕊

* Let's look to the most recent, successful, and peaceful transfer of global power
* Early 20th century
* US economy outstripped UK economy
* Prime Minister Lord Salisbury advised his finance minister that "a war with America, not this year but in the not distant future — has become something more than a possibility."
* US Navy was rapidly expanding under President Teddy Roosevelt
* "I would never quarrel with the United States if I could possibly avoid it." —First Lord of the Admiralty, 1901
* Britain also had no allies in Western hemisphere to enlist to help them in a struggle against the US
* The UK not only decided to not oppose provocative US behavior but to concede global domination to the US for the betterment of both societies
* When WWI came in 1914, US was an essential supplier of materiel to the UK
* Joined the fight tipping the scales towards Allied victory

Source: [Belfer Center for Science and International Affairs](https://www.belfercenter.org/thucydides-trap/case-file)

### DevOps: The War Crime

* Some people feel threatened by the cloud, fast changes, etc.
* What happens to my job?
* Will I have to completely relearn everything I know?
* I've worked so hard to get here and now I have to pivot?!?
* Should I just retire now?
* Empathy goes a long way here (but we've probably all heard enough about that)

### What About Networking?

* Great you can deploy code and "infrastructure" on commit
* Multiple releases a week/day/hour/minute
* What happens when you need more hardware? Eek!
* Network Engineers are awesome at VLANs, subnets, NAT, VPNs, etc. 
    * That's VPC in a nutshell!
* Imagine if your network folks could automate and iterate as fast as the rest of your organization
* Bring your network people into your DevOps transformation it will reduce conflict and alienation
* Version controlled network configs are a thing network teams have struggled with for years
    * [RANCID](http://www.shrubbery.net/rancid/)
* Concessions:
    * Greater purview into projects; knowing more sooner
    * More people available for on-call rotation
    * Skilling up more people
* Pointing to DevOps wins will help

### What About Security?

* If your security organization is the group of "no" you're going to have a bad time.
* Shift security left
    * Running pentesting in the pipeline
    * Routinely scan source code for vulnerabilities
    * Vulnerability scanning as a commit-hook
* DevSecOps
    * DevSecOps is a thing ("SJ sells it, we have fliers")
    * Prove to Security DevOps helps their cause
    * Increasing the amount and frequencing of scanning
    * Connect the dots for them; points in pipeline to governance/compliance
    * More secure software baked in the process
    * Higher visibility into changes in systems for all involved
* Look to leadership to help bring them on board if need be
* Pointing to DevOps wins will help

### DevOps Isn't Just for IT

* Being lowercase agile as an organization requires more than just development and operations
* Eventually your DevOps transformation will bump into these weird things called business processes
* Some business processes will need to be changed along the way
* The more allies the better!
* C-Suite, Marketing, Legal, Sales, Finance, etc. can all help
* Don't discredit those not writing code

### Change and Failing Fast

* Humans resist change
    * Either you're a learning organization or you're losing to one
* We inherently value success
    * You can't learn from mistakes if you never make them
* Different isn't always bad
    * We all agree cars are better than horses and buggies
* Figuring out a dud early is better than dumping millions into a failure
    * "Throwing good money after bad"

### Conclusion

* It's human nature to battle the things we fear
* Finding Allies and creating successes together is key
* Early inclusion and concessions are keys to success
* Fail fast
* Be a learning organization