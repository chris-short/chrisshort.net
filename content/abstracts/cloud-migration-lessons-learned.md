---
aliases:
- /cfp/cloud-migration-lessons-learned/
author: Chris Short
date: "2018-03-07"
description: ""
draft: false
slug: cloud-migration-lessons-learned
tags:
- devops
- cfp
- cloud
title: 'Lessons Learned from Cloud Migrations: Planning is Everything'
---

## Abstract

"Migrating to the cloud saves money!" "Not running your own infrastructure reduces your bottom line!" "Lift and shift is a legitimate first step towards moving to the cloud!"  These are all potential pitfalls if you're not careful. Proper planning prevents piss poor performance. Using a real chaotic cloud migration as a guide, we'll walk through the pitfalls of cloud migrations and how to avoid them and the terrifying vendor lock-in (when it makes sense).

## Description

### Introduction: What is "the cloud" and is it worth moving to it?

* Opinionated Definition: Compute, storage, network, etc. optimized to work with high levels of redundancy and availability while being maintained and consumed by its users via APIs.
* Build vs. Buy: It's definitely worth moving to a cloud provider but consider doing it yourself too; it might be easier in the long run.
* Colocating could be considered cloud if infrastructure is API driven (OpenStack, Kubernetes, Pivotal Cloud Foundry, etc.)
* We shot ourselves in the foot by not planning and choosing a very aggressive deadline

### Assumption #1: Migrating to the cloud saves money

* If done right, yes. But, at my previous employer, it was a costly venture.
* We did not optimize for cost
* We planned on discounts but didn't plan or execute how get discounts
* Pay attention to asterisks!

### Assumption #2: Not running your own infrastructure reduces your bottom line

* CAPEX and OPEX still apply in the cloud.
* The expectation is that when you help a cloud provider better predict their CAPEX they will pass some savings onto you.
* We did not realize that early enough and did not plan accordingly

### Assumption #3: Lift and shift is a legitimate first step towards moving to the cloud

* Lift and shift then optimize is a good strategy
* Those loops have to be very tight though
* Take the time to optimize often
* Increase density like you would in any datacenter

### Planning is Vitally Important

* Planning and observing!
* Monitor everything; find holes in infrastructure and fill them, analyze bill and act often
* Adopting cloud native concepts is important (Cron jobs to functions, containers to increase density, etc.).
* Dedicating a technical person towards cloud utilization, spend, and cost optimizations is a wise decision.
* Business logic really matters; having data to back up specs is important

### Vendor Lock-in Kills

* Your multi-cloud dreams will be fraught with roadblocks unless you plan effectively.
* If you don't think Microsoft, Amazon, and Google aren't thinking of ways to make changing providers difficult for customers you are fooling yourself.
* Eat your own dog food applies to infrastructure as well
* Build your freedom and accessibility on top of compute, storage, and networking
* Use vendor specific features as a way to augment personnel but always put a ticket in the backlog to replace them with something more flexible
