+++
author = "Chris Short"
categories = ["Philosophy", "2020", "2021"]
date = 2020-12-30T07:00:00Z
description = "Chris Short looks back at 2020 and looks ahead to 2021."
draft = false
slug = "2020-learnings-2021-expectations"
tags = ["developer", "live streaming", "Kubernetes", "cloud native", "GitOps", "DevOps", "ARM", "data", "perfection", "speaking", "developer experience", "platform", "events", "global pandemic", "assumptions", "Edge", "5G", "infrastructure", "marketing", "Kubernetes release team", "chronic pain", "disability", "disabled", "release", "CFP", "open source", "exponential advancement", "automation", "systems", "OpenShift.tv", "software", "code", "joy", "Ford", "Detroit", "distributed systems", "management", "Ansible", "Kat Cosgrove", "ArgoCD", "Flux", "Weaveworks", "DevOps'ish", "conferences", "public speaking", "Christian Hernandez"]
title = "2020 Learnings, 2021 Expectations"
[cover]
image = "/2020-learnings-2021-expectations/hope.jpg"

+++

We've all had challenging years before. However, none were quite as challenging as in 2020. In the conclusion of last year's post, I wrote, "I am hopeful that whatever economic upheaval we face as a society in 2020 is limited." At that time, economic indicators were bubble-ish. However, a global pandemic was not something I had in the cards. No one did. A global pandemic, international protests against horrific injustices, and a US government damn near inept at helping with any of it. These events led to the largest voter turnout in this nation's history. Hopefully, this will change our path and put the country back on track.

Internationally, things were nuts as well. Global trade wars, nations locked down, protests, and even still, I can't traverse the Canadian border merely minutes away from me after all these months. This year, this pandemic could be looked back upon as our generation's Great Depression. Remember, a lot of us said the same thing about 9-11 in 2001. Prudent leadership working together across the globe is what we need most in 2021, period, for us all.

## Last Year's Predictions

Let's take a look at the predictions I made last year and how they panned out.

{{< carbon >}}

### Developer Definition

I said the very definition of developer might be up for grabs. I still think, "we’re entering a world in which we’re all going to have to be developers at various points throughout our careers." But, who we call a developer and who we don't doesn't matter. If you code, you're a developer. It might not be your job title. You might not do it every day but, you can claim it regardless, in my opinion.

The definition of "developer" is still fuzzy but, the arguments over CS vs. non-CS credentialed folks have died down. In my opinion, this happened because elitism was on full display in various ways in 2020, and no one in tech wanted to play that game, given the global environment we found ourselves in.

### Developer Experience is more important than ever

This thinking was tied directly to Developer Experience (DX). 2020 featured a big focus on developer experience, as I predicted. If you build it, they will come is not true in tech. You have to continually push feedback into the product to improve it (aka DevOps). I observed a lot of focus on getting folks onboarded and productive quickly, improving overall workflows, and a general sentiment of removing impediments to productivity for developers.

I saw this to such a great extent that I feel like we all should consider twisting folks' job titles to be more developer-centric. You're an _Infrastructure Developer_ if you build pipelines or maintain applications and systems they run on. You're a _Network Developer _as we deal with more and more networks that are software-based. You're a _Platform Developer _if you build the platform that an organization's code runs on.

For example, my job title is _Principal Technical Marketing Manager_. In this potential paradigm shift, I would change to a _Principal Technical Marketing Developer_. My focus would be on helping the Infrastructure and Platform development teams. The mission doesn't change, but the job title does so that traditional Ops doesn't get left in a dark basement and grossly underpaid. This is a wild idea, I know. I haven't discussed this with anyone, but maybe this will spark a better idea to close the divide in the attention given to specific personas in tech.

### GitOps exploded onto the scene in 2020

It all makes sense when you look at the explosion in GitOps adoption. Last year I said, "I think GitOps intrigues me so much because it takes into account the above three topics: Kubernetes, DevOps, and Developer Experience. I think that GitOps will get turned up to 11 in 2020." It sure did too. There are now two very viable GitOps solutions in ArgoCD and Flux. There are several other GitOps solutions out there also. [Red Hat and Intuit announced a cooperation agreement](https://www.redhat.com/en/about/press-releases/red-hat-and-intuit-join-forces-argo-project-extending-gitops-community-innovation-better-manage-multi-cluster-cloud-native-applications-scale) to build ArgoCD into the tool we all want. Weaveworks [landed a Series C funding round](https://www.weave.works/blog/announcing-weaveworks-36m-series-c/) based on their GitOps works. GitOps is quickly becoming the defacto DevOps implementation for cloud native environments. I'm going to put in a shameless plug for Christian Hernandez and I's **_[GitOps Happy Hour](https://www.youtube.com/playlist?list=PLaR6Rq6Z4IqfGCkI28cUMbNhPhsnj4nq3)_**.

{{< eo_signup >}}

## Looking forward to 2021

2021 should be a wild ride. One that we see so much change, it'll have the potential to make our heads spin. [Some people understand that the advancement of technology is marching at an ever quickening pace](https://www.thomaslfriedman.com/thank-you-for-being-late/). The size, shape, and even scope of infrastructure have changed so much in the past two years; it’s hard to recall some ten years ago when Vagrant was brand new. Kubernetes 1.0 was released on 2015-07-21. Now it’s democratizing computing across clouds and on-premises data centers. We’re going to be talking about exponential advancement every year now. This means it's more important than ever to understand the underlying principles, protocols, RFCs, and limitations of the technology we're using. We need to [keep our assumptions safe](https://queue.acm.org/detail.cfm?id=3380777).

## 5G and Edge got real in 2020

5G became a real thing in 2020. If you think about it, 5G will potentially be as impactful as the internet itself. 5G in its fully fleshed out form will enable so many things that aren't possible today. Think [autonomous corridors](https://www.dbusiness.com/business-features/tech-track/), like the one being planned from Detroit to Ann Arbor, eventually becoming the norm. I think about my Ford Escape being able to tell Ford of every bug encountered across the vehicle's software in real-time. Then daily or even multiple deployments a day for software components in anything becomes possible. 5G will hopefully force manufacturers and vendors to embrace more standards across their industries.

Think about what you can do when you ditch that copper line coming into your home and everything connects to a 5G access point. That will eventually become faster than a lot of people's internet access capabilities now. 5G will change the way we think about security too. If every consumer device that has a 5G connection will need to be defended. Firewalls and IPS programs will need to become more efficient, for example.

The crux of ever increasing bandwidth means that the range of 5G is less than previous generations. This will require a high number of 5G devices working as both consumers and infrastructure. Mesh networks could become the future of everything until a full rollout of 5G happens globally.

This also means that Edge got real in 2020 too. As we start to deal with more and more data, we need to push compute closer to the sensors and things generating that data. This is all possible today. We've seen an explosion of RISC-V and especially ARM chips being used (partial thanks to the [bevy of nasty vulnerabilities in Intel kit](https://www.cvedetails.com/vulnerability-list/vendor_id-238/Intel.html)).

We're seeing more and more Kubernetes kubelets popping up in weird places. It's time to start thinking about how platforms can be managed when they can psychically move or be powered off frequently. Automation is the key, but automation that assumes periodic connectivity might become the norm for many sectors. For example, you wouldn't wait for the system to connect and then run an Ansible playbook to do something to it. You'd deploy the Ansible stack to the device and update the collections the device is consuming when/if it connects. Think of it as distributed management and automation in the same way _git_ is distributed version control. GitOps has a role here and will likely become the new standard in deployment, configuration, and management (even outside of Kubernetes environments).

## ARM had a big 2020; ARM will have a bigger 2021

ARM exploded in 2020 too. It might even have become a household name thanks to Apple in 2020, but this has been a long time in the making. It's also a critical part of making 5G and Edge very real. It's hard not to talk about 5G, Edge, and ARM all in the same breath. That Raspberry Pi 4 or whatever comes next might very well be the thing processing data and sending actionable information to the organizations that need it instead of pushing a stream of events, logs, and data over the air. ARM has been in the data center for years. [Some of the fastest supercomputers in the world are running ARM architectures](https://www.top500.org/news/japan-captures-top500-crown-arm-powered-supercomputer/). Expect much, much more ARM in 2021. It'll enable all manner of things thanks to ARM's low power consumption. [Nvidia DPUs](https://blogs.nvidia.com/blog/2020/05/20/whats-a-dpu-data-processing-unit/) are a thing now. [Smarter storage](https://www.arm.com/solutions/storage) is in the works as well. The potential for compute at every layer of the stack is now a thing. I can't even fathom the changes this will bring to our industry. ARM is a big deal.

## Livestreaming becomes the norm

There will always be a need for pre-recorded talks or shows. But, as we are all completely burned out on virtual events, I expect live streaming will add a degree of humanity that we're all missing right now. Our efforts on [OpenShift.tv](https://openshift.tv) are what lead me to believe this. The experience of KubeCon pales in comparison to the experiences I have daily running a live streaming channel. There is something to live streaming that just works. Viewers can inject themselves into the conversation, those speaking get real feedback from the audience, and most importantly, it's live, like the demos and talks of 2019. Failure is expected because it is live. Embracing failures and turning them into learning opportunities is a vital part of live streaming. It helps the audience immerse themselves in how folks go about troubleshooting. In general, we don't teach people enough about troubleshooting things, so seeing experts do it live is a fantastic chance to learn. I will freely admit that I never thought live streaming would become my day job but, this year being what it was, I'm glad it did. I get to talk to more people every day, and I can make a more significant impact than ever before without leaving my house.

## Education is more important than ever

[The dockershim debacle](https://devopsish.com/195#deprecation) made something [Kat Cosgrove](https://twitter.com/Dixie3Flatline/) frequently says very apparent in my mind. To quote Kat, "To you, the expert, maybe with years of experience in the field and a title with the word DevOps in it, our documentation makes sense. You have context. Your users aren’t you, though -- a newcomer may not understand what orchestration means, or what a service mesh is, or how a container differs from a VM. If you want your tool to be approachable by newbies, act like it, and write more friendly documentation."

I think we might need to go a step further though. I see this problem in the Kubernetes community quite a bit. I struggled on the 1.20 release team because the documentation is written by folks that had done this before (the curse of knowledge). I didn't understand a lot of the whys behind what we were supposed to do. This, coupled with a sharp increase in doctor's appointments in Q4, led me to take a step back from the release because I couldn't keep up. I had a knowledge gap of unknown size that had to be crossed while the release was in flight. It's great that there's a shadow program for the Kubernetes release. It enables folks to learn without having to be experts in what they're doing. Even still, like some of the Kubernetes docs, things didn't click for me. I needed an outside hand to help me figure out which way was up.

This makes me wonder if every team needs a sort of Developer Educator. This role would need someone with impeccable communication skills (because we're bad at communicating in tech, in general). More folks than ever are learning on the fly because of the exponential change in tech. So much so that I feel like this is the norm where it wasn't in the past. The idea that you have to understand the underpinnings of a technology to use it is a fallacy. We'd love for that to be the case but, evidence shows at least when it comes to containers and Kubernetes, some folks do not have a deep understanding of the underlying components they're using. The systems we work on evolve so quickly [there's no way one person can fully understand any system at any moment](https://queue.acm.org/detail.cfm?id=3380777). People make a lot of assumptions about how systems work. This Developer Educator would help quell those assumptions, research them, and help turn assumptions into facts. We need to plan for faster depreciation as exponential growth continues. This leads to a higher need to be generally informed. The Developer Educator would be reading docs, newsletters, watching live streams, and writing more and more about their learnings, then sharing that knowledge with development teams. Think of the Developer Educator as a cross between analyst and developer, but highly tailored to your organization.  They'd teach fundamentals and work with vendors and suppliers to maximize the organization's usage of products and projects in use. This would help juniors immensely while keeping egos in check among the most senior developers. They'd also make sure that there isn't a center of knowledge gravity in a department (or worse, one person that gatekeeps).

I know it sounds crazy, but this might be a necessary function sooner rather than later.

## Me

I went to a lot more doctor's appointments this year than a lot of other years. One thing I have to remember is that disabled is what I am, not who I am. But, as I age, the injuries are harder to manage. But, we're doing new things to make life maintainable (as I write this, I'm having a procedure tomorrow). I mention this because I'm approaching a point where I need to prioritize what's important with everything I'm doing. Its possible things that are on the bottom of the list could get cut.

### Understanding Perfection

Something I've had to work on quite a bit this year is understanding perfection is rarely, if ever, attainable. There's greatness, which is close to perfection. There's good, which is further from perfection. But, great and good are _not bad_. Good and great are attainable; perfection should not be a goal. Sadly, due to upbringing and previous experiences, perfection was often required. It's not something that I have to attain with every single task. As DevOps and SRE have taught us, perfection is often too laborious in most cases (like the cost of getting from four nines to five nines). I mention this because my therapist says this is not an uncommon phenomenon. I hope it helps others understand too.

### The work I'm putting in is paying off

One thing I’ve always wanted a platform. Now I have two and a voice that can be heard. I never thought **[ChrisShort.net](https://chrisshort.net/)** would get mentioned on other sites as much as it has in 2020. **[DevOps'ish](https://devopsish.com/)** (after a brief hiatus as I refigured out life during a pandemic; aka filtering the ever-loving bejesus out of my news feeds), is recognized as a valuable learning resource for others in our industry. A goal for DevOps'ish in 2021 is trying to make more newsletters with fewer large media outlets as sources. I want more blogs from engineers, technicians, and non-code contributors that are doing good in the world.

I appreciate both of these projects, the folks reading them, and even more, the folks sharing them. Writing has always brought me joy. Others enjoying that writing brings me even more joy.

However, nothing I've encountered so far brings me joy professionally like live streaming on **[OpenShift.tv](https://openshift.tv)** does. It has supplanted live speaking (at least in the virtual sense; we'll see if that holds) as my favorite part of my job. It's hard work requiring a mastery of logistics, organization, A/V, speaking skills, and data gathering, but it's more fun than I ever dreamed it'd be. I'm humbled and honored to be leading up OpenShift's live streaming efforts. As I mentioned, I think live streaming will be the future of a lot of one-to-many conversations. Why do I feel that way? The feedback we've received and a #streaming or #livestreaming channel on every Slack or chat platform I'm on now. It's a real sea change.

#### At Work in Pain

The work  and I are putting in on dealing with working with chronic pain, illnesses, conditions, and diseases for **[At Work in Pain](http://atworkinpain.com)** is game changing. Julia and I have been friends for a few years now, and we're both comfortable with talking about our conditions. It only made sense to combine our stories and experiences into a series that speaks for the often voiceless disabled working next to us. We've done two episodes at the time of this writing. Each episode generates many thank yous after debuting. This work needs to be done to displace the stereotypes, misconceptions, and FUD around being disabled or dealing with chronic pain. It's time for us to speak up. We can be the people that cross the chasm to break the mold. Julia and I plan on doing these biweekly. We've had a slow start, but I expect our cadence to kick in with the new year.

### Public Speaking in Pandemic Times

However, one thing I've noticed with live streaming is that I don't want to ride, what I call "the CFP train" at the moment. It's very commonplace for people in this line of work to be submitting CFPs to conferences left and right that align with the message you're trying to get out (either personally or as a vendor). This puts a lot of pressure on speakers to come up with content that works for wide-ranging audiences. With two great writing platforms and one great video creative outlet, I feel like I should patiently wait for in-person events to become the norm again and crank out some new CFPs based of what I've learned along the way in 2020.

I thoroughly enjoy public speaking. But, we put out 377 hours of live streaming this year _from our home offices_. That's more than an hour a day over a year, and we only started it in May. I'm very proud of [OpenShift.tv](https://www.openshift.tv/), if you can't tell.

With all the being said, I'll be more thoughtful about where/when I submit CFPs as long as I'm producing and hosting live streaming content. Regardless, feel free to invite me to come to talk at your event. But your event should be amazing. I'm probably going to refer you to someone more diverse that's trying to make a name for themselves. But, if you insist, I'll do what I can.

Much like last year, I want to elevate more people in 2021. That doesn't mean that I'm not going to submit CFPs to anything. There will always be conferences that are dear to my heart and I'll submit to those, as well as work-related/adjacent events. Regardless, live streaming is awesome and democratizes access to great speakers in ways I never thought possible.

### Escalator in Chief

As I mentioned, I want to elevate others even more in 2021. Last year, [I said that I wanted to make more impact from home](https://chrisshort.net/2019-learnings-2020-expectations/) (if that jinxed us somehow, I'm sorry). In Q4 of 2020, I referred someone to a conference after realizing I was over capacity and couldn't meet their needs. This worked well. I intend to do that at the beginning of conversations in 2021.

In the last [[SIG ContribEx] Weekly Marketing Meeting of 2020](https://youtu.be/8VUAR13vGbg), I heard something no one had ever said to me before and it gave me some ideas. I'm going to try a few of them and see if they work at getting more folks involved in the communities and projects I'm interested in. If you're interested in getting involved with Kubernetes, you can always hit me up, and I'll get you where your skills and goals line up. But, I'd like to scale that out to help more people land where they can make the most of their time and energy.

## Conclusion

Whatever fresh hell faces us in 2021, we'll be doing it together. Never forget that working as a team, together, will always trump working as an individual. We can do more by working in an open manner than we even think possible.
