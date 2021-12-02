+++
author = "Chris Short"
categories = ["Philosophy", "GitOps", "2019", "2020"]
date = 2020-01-01T07:00:00Z
description = "Chris Short looks back at 2019 and looks ahead to 2020."
draft = false
slug = "2019-learnings-2020-expectations"
tags = ["DevOps", "developer", "open source", "Kubernetes", "developer experience", "security", "code", "health care", "China", "Docker", "GitOps", "Red Hat", "IBM", "cloud", "cloud native", "API", "WebAssembly", "Wasm", "community", "infrastructure", "AWS", "InfoSec", "software", "chronic pain", "velocity", "medically separated"]
title = "2019 Learnings, 2020 Expectations"
[cover]
image = "/2019-learnings-2020-expectations/happy-new-year-gold.jpg"

+++

A former co-worker and now friend has a tagline, “Every day is a school day.” I remind myself of this fact almost every time I learn something new. 2019 was the hardest year of my life. I'd like to share some things I picked up on this most recent journey around the sun we call 2019. I'll make some predictions about 2020 in the process too.

## Kubernetes

[Last year](/2018-learnings-2019-expectations/), I said I thought Kubernetes would get easier. That didn't happen. It's not any easier to use Kubernetes. But, to be honest, I'm not sure if Kubernetes itself will ever get easier, it'll be us getting more used to using it and building tools around it. I still think vendors need to focus on ease of use if they want to see their products getting adopted. But, the project in general, might not need to worry about ease of use. This seems like hair splitting, sure, but, it seems like Kubernetes did manage to penetrate every sector of tech in 2019. This is going to lend itself to a big ole ecosystem of people and orgs working on ease of use on behalf of the community.

This will allow for the Kubernetes project, much like Linux to an extent, to fade into the background. It's no longer a matter of is an org or isn't an org using Linux. It's `yum`/`dnf` versus `apt`/`apt-get` or, "What package manager am I using here?" Much like how I stopped caring about which distro I'm using, Kubernetes is starting to get the tooling around it to allow folks using it to focus on what matters, business logic.

{{< eo_signup >}}

## DevOps

[Last year](/2018-learnings-2019-expectations/), I said I there will be less DevOps and more everything that makes up DevOps without actually calling it DevOps. I think that remains the case in 2020. It is why my [definition of DevOps](https://devopsish.com/what-is-devops/) is much more technical and broad than others' definitions:

> DevOps is the professional practice of frequent, continued, and iterative improvements through measurable changes, the goal of which is to become a high-velocity organization, thus improving business outcomes.

This isn't to say that someone is wrong and I'm right. Let me be crystal clear, [Emily Freeman nailed what DevOps is](https://amzn.to/2ImDdLV) and how to go about doing it. It's to say that, I think DevOps is a better way to do business than how it has been done in the past (which is what I think we're all saying). As opposed to it being limited to only IT, in practice, it should have touch points across the entire business. I said it once and I'll say it again:

> [Goldratt](https://en.wikipedia.org/wiki/Eliyahu_M._Goldratt), [Deming](https://en.wikipedia.org/wiki/W._Edwards_Deming), etc. are as important now as they ever were. The core tenets of DevOps matter WAY more than whatever the term DevOps means to folks this week. Smaller batches of work, releasing more often, and reducing the cost of change are all good things if they improve business outcomes. The culture changes and retooling needed to make this happen will almost always be worth it to the business.

The good news this year is that DevOps has faded into the background a little bit much like how I think Kubernetes will eventually. It's no longer if you have or haven't picked up some DevOps practices. It's which DevOps practices has an organization started iterating on and how they're being applied. Believe it or not, you're doing some aspects of DevOps whether you realize it or not when using Kubernetes in prod.

*Note: ChrisShort.net may earn compensation for sales from links on this post through [affiliate programs](/terms#affiliate-link-policy).*

## Developer Experience

If you were under a rock for the news of [Docker's demise](https://devopsish.com/154/), let me remind you that in 2020, Docker has no interest in enterprises and is all in on developer tooling. I think developer experience is going to be huge in 2020. No one will likely be able to build a mom and pop style business out of it but, it's going to be something a lot of companies focus on for the foreseeable future. I certainly believe Docker will not survive with this model. But, the fact Docker even thinks they have a chance at redemption by focusing on developer tooling or experience is noteworthy.

{{< carbon >}}

A lot of the work I've been doing the past six months is around creating great experiences and interactions with technology. A lot of this is education but, more of it is thoughtful workflows, empathy, and understanding. Developers have more choice than ever before. IDEs are truly awesome nowadays, containers have made environments more manageable, and APIs are everywhere. I don't interact with databases or filesystems as much as I interact with APIs these days. These abstractions are hopefully adding safeties and improving things. But, much like the satellite constellations, I wonder how much space there is for an API for everything world. This isn't a 2020 concern though.

### What is a Developer

I think there is a question that needs to be answered in 2020: what is a developer? [I moved over to the OpenShift team this year](/joining-forces-with-openshift/). One of the main questions I was asked while interviewing for the two positions I was gunning for was around languages and which ones I'm most comfortable with. I always mention I'm not a coder but, I remember hacking on Perl in the 90s and I've written [tiny Go programs](https://github.com/chris-short/ssl-tester). This year though, I added a wrinkle to my response though, "I'm seeing more YAML than anything now though." I honestly think we're entering a world in which we're all going to have to be developers at various points throughout our careers. Whether it's backend or frontend code, infrastructure, or gluing together business systems there are coding practices in every facet of our day-to-day work. We're going to want to interact with APIs, SaaS tools, or the systems we're working on and the most performant way to do that is usually code.

I can tell you now though if you're arguing about having a CS degree and how having a CS degree is required, you're an elitist prick. Some of the most brilliant minds I've ever come across never graduated college or sure as hell didn't get a CS degree if they did. They probably had a ton of field experience in different or adjacent lines of work and came to tech more organically than through schooling. If you write code for your work, you're a developer. It might not even be your primary job responsibility, you can call yourself a developer. If someone wants to argue that point with me, that's fine. It all goes back to elitism and that's not something I'm going to tolerate.

With all that out of the way, what is a developer might be less important than ever. But, we're all going to have to figure out who we're improving experiences for. This makes it a necessary question a reader will need to answer for themselves at some point. When we look around, we'll probably realize that the majority of folks we're improving experiences for aren't actually devs writing code day-to-day; it's going to be a cross section of business purposes. I also think developer experience is going to evolve in terms of what it's actually called too. It's entirely possible we'll be talking about something else and still mean "Developer Experience" in 2021.

## GitOps

> "GitOps is a way of implementing Continuous Deployment for cloud native applications. It focuses on a developer-centric experience when operating infrastructure, by using tools developers are already familiar with, including Git and Continuous Deployment tools." <https://www.gitops.tech/>

When I first heard about GitOps it intrigued me. I couldn't quite put my finger on it before. It puts a toolset and documented process around a DevOps mindset and applies it. But, there's more to it than that. I think GitOps intrigues me so much because it takes into account the above three topics: Kubernetes, DevOps, and Developer Experience. I think that GitOps will get turned up to 11 in 2020.

## WebAssembly

> "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications." <https://webassembly.org/>

I have not even really dug into WebAssembly. But, it's making noise in all the right places to become something big. Wasm [went 1.0 in all four major browsers](https://webassembly.org/roadmap/) this year. [WebAssembly received W3C Recommendation](https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en) this year as well. It looks to be a great bridge between front and backend systems that a few of us have been looking for.

## Open Source

Ugh… Open source is going to start feeling gross. It won't be because the idea of open source is tainted or some weird non-open source license making us redefine what open source is. Organizations are going to latch on to the term open source now more than ever. They will attempt to redefine what working in open source looks like. If you're sharing the code you're working on with a non-open source license; you're not an open source developer. You are a developer, there's no doubt about that, but open source *is clearly defined*. No offense to Matt Asay, I like a lot of the work Matt has done, but AWS' foray into a for-hire writer to talk up their open source work is disingenuous. The problem is, it'll probably work in the short term because of the AWS market share and their gravity in the industry.

One thing I think we can all agree on is the compensation and appreciation for open source folks is very limited. AWS and companies like it making millions upon millions of dollars running open source code at scale with little to nothing given to the creators directly is not sustainable. People will stop writing open source code (like we've seen with Elastic, Chef, and many others). The problem is that it doesn't fix the actual compensation model, nor does it address the inequity. I don't know how to fix this. I would not be surprised if there were some significant upheaval around open source in 2020.

## Security

InfoSec is a really tough line of work. I've done it in very high stakes industries and very fluid industries with less risk. One thing I can tell you is that InfoSec is even harder to do well when it's impeding progress. If you're in a security role, your number one job in 2020 is going to be, you guessed it, **Developer Experience**. It is no longer possible to increase friction and slow velocity solely in the name of security. Security tooling HAS TO BE in the software delivery pipeline. It should always be there working with us, not against us. If you're a smart developer (we're all devs, whether we're smart is debatable), you should bring your security teams into discussions earlier and earlier. Building bridges and reaching across chasms works in both directions. Teach each other about the pain points you're creating. Collaborate to make changes to production faster. Work with Finance to make sure Security has what it needs to keep you from slowing down. Also, ask yourselves why these disciplines separated (software development and information security). Should they be? Is it a regulatory requirement? Is it working?

### China

Last year, I wanted to go to China. This year, that doesn't look to be possible. I received word that it's not the best environment for folks that served some of the places I served. It sucks because I see China as a place I'd like to go, learn some new things, and make some friends. But, that's not in the cards for me. Last year, I joked about 5G's impact on the technology landscape. In 2019, the joke's not funny *at all*. The US and China are in a full blown trade war. The US and some of its allies have outright banned Huawei equipment due to security concerns. This all started with 5G and the beginning of the hegemonic transition that is occurring between the US and China at the moment.

#### China, Huawei and the future of global technology

I did a podcast this summer talking about China, US policy, intelligence concerns, and more on The Frontier Podcast:

> How will Chinese companies like Huawei affect the future of cyber security? How does our relationship with China affect the open source community and the future of AI? These are big questions for big thinkers like Chris Short.
>
> Chris runs the newsletter DevOpsish and is also a Principal Product Marketing Manager for Red Hat. In this episode, Chris and Ledge discuss the fundamental differences between Chinese and US internet, the technological, legal, and contractual hoops companies jump through in order to tap into a Chinese market, and a breakdown on how Huawei could shape the tech landscape in years to come.

If you want to listen to the full episode or read the transcript, head over to the [**Interviews**](/interviews/#china-huawei-and-the-future-of-global-technology) page when you're done reading here. Also, I'm happy to come on to any podcast to discuss anything I've work on past, present, or future.

## Me

I'm not looking to move to a new company any time soon. But, IBM's acquisition of Red Hat has made leaving Red Hat at some point inevitable. That was not the case before the IBM acquisition. Why is that? None of the reasons you're likely thinking. Where I work is now based around one thing: health care. If you're not aware, I suffered an injury in 2003 and have been in constant pain ever since. I was medically separated from the US Air Force in 2010. I was officially labeled a disabled veteran earlier this year when ***my appeals to the Veteran's Administration were finally addressed after nine years***. I suffer from a bevy of issues related to my military service to include PTSD, anxiety, depression, nerve damage, and other issues. I had a hard time with all these issues this year.

Nothing hurt as bad as the VA telling me there was nothing else they could do for me. I altogether jettisoned VA care in all forms immediately after that. It was clear to me I was going to end up a statistic of the worst kind had I not. This was a hard fought lesson and decision though. I had many friends reach out to help. But, few were as impactful as a Kubernetes community member walking me through Red Hat's mental health care coverage. They likely saved my life. With that being said, I'm fearful of the eventual merging of IBM and Red Hat benefits. Once that happens, I will likely need to seek an enormous pay raise or find better health care elsewhere. It's an impossible situation I will find myself in until health care policy in the US changes. But, I come from the VA system, so I don't know if a national health care system would be better than what we have now. That's the kind of shit that makes me have to take meds to sleep at night.

{{< tweet user="ChrisShort" id="1212189481849303041" >}}

## DevOps'ish

[One hundred sixty issues and still going strong](https://devopsish.com/160/). I did take my first vacation from the newsletter ever this year when we went to Yosemite. But, the newsletter is at a weird point. It needs promotion to grow, but I need sponsors to get the funding to promote it. Marketing is hard. It's even harder when you're the one touching the dollars and cents too. But, I did manage to build a shiny, new [DevOps'ish Sponsorship Prospectus](https://devopsish.com/sponsor/DevOps'ish_Sponsorship_Prospectus.pdf). If you work at a company that wants to market to Kubernetes, cloud, developer, and DevOps folks every week, send it over to your marketing and events teams.

Another noteworthy moment about sponsorships of DevOps'ish: This year was the first year I had to decline a sponsorship due to a potential quid pro quo situation. It's hard to balance working at a vendor and writing a newsletter about the parts of the same industry. If a prospective Red Hat partner is working with me on something and mentions DevOps'ish sponsorship, I have to say no. I think for the first time, I will have to talk to counsel about [DevOps'ish](https://devopsish.com/) in 2020.

## Goals

I feel like out in the community; I shouldn't be doing too much by myself anymore. I feel very strongly that I will need to cultivate folks to shadow other people in the community. I don't scale; I am only one human. I need to spread my workload around because I have taken on more than one person can theoretically manage. I want to find folks interested in doing more in open source (Kubernetes in particular) so that we can mutually gain something together.

I had a shadow, Vamshi, for the Kubernetes 1.17 retro meeting. Vamshi seems very squared away and punctual, once he gets comfortable, he'll do wonders in the Kubernetes community. If asked to moderate a retro for 1.18 or beyond, I can request Vamshi get the nod before I feel obligated to accept the invitation.

### Make more impact from home

I want to do more podcasting and virtual events like webinars that don't require travel. These are easy wins for everyone involved since my office and desk setup is more and more like a recording studio than an open source contributors primary work surface.

{{< speaker >}}

### Make more impact at home

I need to hype Detroit everywhere I go. I need to talk about Detroit, whether it's a super corporate event or not. Detroit is awesome, you should bring your events here, and if you need help convincing folks, please reach out. I have a great writeup from a recent site visit that I can continue building on to fit others' needs. I want to help Detroit rebuild. Part of that looks like broadcasting far and wide that Detroit is the fantastic city I thrive in, and you can too.

### Escalator in Chief

I want to help folks achieve their dreams. But, I can't ***put*** people where they want to be in life. I want to help escalate people where I can. If I'm known as the "Escalator in Chief" at the end of my life, I'd likely die happy.

I have created a [1:1 event](https://calendly.com/chrisshort/1-1) so that folks can schedule time directly with me. I expect there to be a goal for the meeting and there should be at least one takeaway. But, aside from that, you can schedule a 1:1 directly with me, any time you want [via Calendly](https://calendly.com/chrisshort/1-1).

## Conclusion

I am hopeful that whatever economic upheaval we face as a society in 2020 is limited. In 2019, we saw equity retract somewhat and unicorn growth slow. But, the public markets grew. Hopefully, everything remains good. But, in case it isn't and times get hard for you, don't hesitate to reach out for help (especially if you are still at Docker).
