+++
author = "Chris Short"
categories = ["DevOps"]
date = 2017-03-10T12:02:00Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/dagobah-cave.jpg"
slug = "the-dark-side-of-devops"
tags = ["DevOps"]
title = "The Dark Side of DevOps"

+++

**Disclaimer:** These are real world experiences I have had within organizations that I have been employed by. Identifying information is intentionally anonymous. If you think you are in one of these organizations please consider keeping that to yourself for the sake of others.

{{< mc >}}

A lot of people think that [DevOps](https://devopsish.com/), [Cloud Native](https://pivotal.io/cloud-native), [Agile](http://agilemanifesto.org/), [GROWS](http://growsmethod.com/), etc. are all rainbows and roses. You start small and work your way up to full blown operations or you decide as an organizational unit to change. These are the two patterns associated with a Jedi-type maturation process of DevOps. What if I told you that, like in Star Wars, DevOps has a dark side? I have seen the light side everyone thinks of and have carried the red lightsaber as well. Let's walk into the cave on Dagobah together.

{{< carbon >}}

### The Ops Mutiny

A former employer of mine had a serious issue. They needed to change to stay competitive and the IT team that needed changing was resisting. Development teams had started to speed up on a flagship product. Meanwhile, the traditional IT team was not evolving. As a matter of fact, the IT team was actively resisting the transition towards a DevOps workflow. There was a mutiny and the majority of the IT team left the company en masse.

With the IT team already lagging behind there were now fewer people to do the work regardless of process. The fact that institutional knowledge and control rested with the two IT members that stayed made matters worse. It was obvious the company was not on a good path so they needed people fast. This is where I came in as an operations lead.

I joined the team and immediately realized they had no formal processes. I changed desks halfway through the second day, I had a loaner laptop, and never had a work phone number while I worked there. I spent my first week working on compliance training I did not need to do. I did not have access to what I needed to complete the goals my developer turned manager laid out for me. Then the architecture review happened.

The company had been acquired for a huge sum of cash. The architecture review was not for me, the new lead, it was for the company that had bought them. This is when I learned the office server room with faulty HVAC held some production functions. I also learned that Windows NT 4.0 was still present in their infrastructure in 2015. My boss told me I would have to do something with this ultra-legacy hardware. But,  changes could not happen due to business concerns. The company acquiring them agreed it would be a hard conversion. The legal coverage was good enough for the corporate lawyers (no data stored on archaic OS versions long term).

Then I started poking around the network and was immediately told to stop. The desktop support person said there was concern about the load I was putting on the network (from my laptop). Come to find out, desktop support was a holdover from the old regime and did not want me figuring things out. The mutiny was still taking place as the lingering staff continued to consolidate power.

There was an ambitious plan underway to move the flagship project over to a cloud provider and use containers. The majority of that work was being handled by a third party integrator. I was working with them to align internal priorities with the new infrastructure model. I was meeting resistance at every turn. The plan was for the vendor to integrate and stand up the new infrastructure. The team would then take over and conduct operations. The company was relying more and more on the vendor when the opposite was the desired outcome. It was becoming clear the team was going to continue their resistance and I had no allies.

Shortly before a major US holiday, I determined enough was enough. I informed my manager and VP that I was done. After three weeks, I was putting in my two weeks notice. The anti-DevOps mutiny was successful. The leadership tried very hard to get me to stay on. Their tactics were ruthless. Leadership dedicated itself to change but no one else wanted it. They offered to terminate the remaining holdouts days before a major holiday. I was definitely not okay with morally bankrupting myself in the name of DevOps. You expect bumps in the road towards DevOps but rarely do you see coordinated sabotage like this.

### The Dev Rebellion

At another employer, I took part in a full blown DevOps rebellion against the monolithic IT department. The silos of the old guard IT teams were hampering progress. Getting a virtual machine took weeks. Simple DNS changes usually took days. DevOps was brought to bear within a small team of people as they worked on a new open source project. The team was going to utilize a PaaS despite the IT organization stating "cloud" was not an option.

The best part was that shortly before my arrival they had done all the appropriate paperwork to deploy this new project. The assumption from the IT staff and paper pushers was that this new project was deploying in-house. However, all the documentation clearly stated Heroku was the workload's destination. Storage was the only thing staying in-house (because it was actually cheaper). The IT department approval authorities signed off on utilizing cloud resources despite having said they never would. This proved their ITIL and ITSM death grip process was not meeting the desired objectives.

The team used Docker for development work. Despite having to make workarounds for the corporate VPN on certain platforms it was quite popular. Log aggregation went to Papertrail. Databases were Postgres while IT maintained a huge Oracle cluster and resisted MySQL. Slack was used for meetings as people saw integrated tooling for communications was not resilient. It was truly exciting to prove safe, secure innovation could work with cloud resources.

The bluster and resistance of the IT leadership quickly changed to attempts to satisfy the development teams' needs. The problem was the IT process was never going to be able to keep up with change if the strict adherence to all ITIL processes was to stay in place. A sponsored OpenStack instance as a developer playground was going to take a year or more. Tooling to enable API calls for IT resources was outsourced to a vendor with little feedback from our teams. IT did not get it but the team was working around the bottlenecks.

The rebellion was in full force and it was bringing change to the higher level organization. This all stemmed from cost. It was much cheaper for small projects to go outside of the IT org for everything but object storage. The applications were being designed as microservices that took minutes to upgrade. IT did not have a handle on the future so the team took matters into their own hands and it worked!

### DevOps Strikes Back

A mutiny and a rebellion might look the same from opposing perspectives. The rebellion was to change for the better while the mutiny was to maintain the status quo. This is not to say Ops is bad and Devs are great. All it indicates is that motivated teams can act towards their common goal.

What these experiences have taught me is the need for allies at all levels of the DevOps organization. The Ops folks have to be on board with the change agents. The leadership and developers have to want to better their environments. The Dev Rebellion had people at all levels pointing at successes of the team. The Ops Mutiny had a core group of people trying to cast off change regardless of outcomes.

The DevOps journey is a combination of people, processes, and tooling. The culmination of these is a team of allies pushing the envelope and never resting on their laurels. There is no such thing as a completed DevOps transition. Resting on your laurels is not a DevOps mindset. DevOps and its allies should be iterating and improving upon what they have learned daily.


