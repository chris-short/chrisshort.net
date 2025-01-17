---
aliases:
- /cfp/dark-side-of-devops/
author: Chris Short
date: "2018-02-23"
description: ""
tags:
- devops
- culture
- cfp
title: The Dark Side of DevOps
---

## Abstract

People think that [DevOps](https://devopsish.com), Cloud Native, Agile, GROWS, etc. are all rainbows and roses. You start small, work your way up or you decide as an organizational unit to change. These are two patterns associated with a Jedi-type maturation process of DevOps. Like in Star Wars, DevOps has a dark side. This talk provides examples of successful and failed DevOps transformations as well as some lessons learned along the way.

## Description

### The Ops Mutiny

#### The Setup

1. Former employer needed to change to stay competitive
2. IT team that needed changing was resisting
3. Development teams had started to speed up on flagship product
4. There was a mutiny and the majority of the IT team left the company en masse
5. No formal processes

#### The Moment

1. The company had been acquired for a huge sum of cash.
2. Architecture review was not for me, the new lead, it was for the company that had bought them.
3. Faulty HVAC in office comm closet that housed a few production pieces.
4. Windows NT 4.0 in 2015
5. I started nmap'ing the network looking for obvious vulns
6. Desktop support person said there was concern about the load I was putting on the network (from my laptop)
7. Desktop support was a holdover from the old regime and was trying to hinder my investigation

#### The Straw That Broke the Camel's Back

1. Flagship product was moving to a cloud provider (containers, microservices, 12 Factor, etc.)
2. Third party integrator was building new solution intending to hand it off to my team
3. Team was actively resisting new things and third party presence grew
4. I had no allies on the team
5. Shortly before a major US holiday, I determined enough was enough
6. After three weeks, I was putting in my two weeks notice
7. Ruthless tactics to get me to stay
8. Firing people in the name of DevOps before a holiday is not okay (I am human)

### The Dev Rebellion

#### The Setup

1. At another employer, I took part in a full blown DevOps rebellion against the monolithic IT department.
2. DevOps was brought to bear within a small team of people as they worked on a new open source product.
3. The product team was going to utilize a PaaS despite the IT organization stating "cloud" was not an option.
4. The assumption from the IT staff and paper pushers was that this new product was deploying in-house.
5. However, all the documentation clearly stated Heroku was the workload's destination.
6. Storage was the only thing staying in-house (because it was actually cheaper and compliant).
7. IT department approval authorities signed off on utilizing cloud resources despite having said they never would.
8. This proved their ITIL and ITSM death grip process was not meeting the desired objectives.

#### The Moment

1. The team used Docker, Papertrail, Postgres, Slack
2. It was truly exciting to prove safe, secure innovation could work with cloud resources
3. The bluster and resistance of the IT leadership quickly changed to attempts to satisfy the development teams' needs.
4. A sponsored OpenStack instance as a developer playground was going to take a year or more.
5. Tooling to enable API calls for IT resources was outsourced to a vendor with little feedback from our teams.
6. IT did not "get it" but the team was working around the bottlenecks.

#### Victory

1. The "no cloud" folks quickly became the "cloud is okay"
2. They still tried to build a private cloud but the genie was out of the bottle
3. Cloud was tolerable and they had to start detailing what it cost to run their infrastructure

### Conclusion

1. This is not to say Ops is bad and Devs are great.
2. The Dev Rebellion had people at all levels pointing at successes of the team. The Ops Mutiny had a core group of people trying to cast off change regardless of outcomes.
3. The DevOps journey is a combination of people, processes, and tooling.
4. The culmination of these is a team of allies pushing the envelope and never resting on their laurels.
5. There is no such thing as a completed DevOps transition.
6. Resting on your laurels is not a DevOps mindset.
7. DevOps and its allies should be iterating and improving upon what they have learned daily.

## Presented to

1. [DevOpsDays Raleigh 2017: The Dark Side of DevOps](/devopsdays-raleigh-2017-the-dark-side-of-devops/)