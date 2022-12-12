+++
author = "Chris Short"
categories = ["Ansible", "2019", "Kubernetes", "Operators"]
date = 2019-10-14T14:00:00Z
description = "The Ansible team made the Atlanta Hilton into a living and breathing Ansible experience. From the lobby as attendees walked into the hotel to the Open Lounge."
draft = false
tags = ["Ansible", "AnsibleFest", "automation", "Kubernetes", "operators", "Red Hat"]
title = "AnsibleFest Atlanta 2019 Trip Report"
image = "https://shortcdn.com/chrisshort/AnsibleFest-2019.png"

+++

Background: I started using Ansible in 2014 at a datacenter company. I implemented Ansible to deploy our customer portal, which contained hundreds of war files, load balancer changes, database schema changes, etc. I've used Ansible at every position since. I joined Red Hat as part of the Ansible team in [June 2018](/joining-ansible-team-at-red-hat/). I moved over to the OpenShift team in [June 2019](/joining-forces-with-openshift/). I'm a long time Ansible user, advocate, and fan. I work for Red Hat, [these views and opinions are solely](/terms/) though.

{{< tweet user="ChrisShort" id="1176478273691443201" >}}

I attended AnsibleFest Atlanta this year. It was a fantastic event. The Ansible team made the Atlanta Hilton into a living and breathing Ansible experience. From the lobby as attendees walked into the hotel to the Open Lounge (showroom floor). It was a very Ansible event.

The Open Lounge featured everything from an art wall with custom sticker printing to impromptu games of cornhole. Having the vendors in a setting like the Open Lounge was awesome. I wanted to play games and interact more with not only community members and customers but vendors too. There were massive bean bags in the Open Lounge. One attendee that slept on a bean bag for a solid 90 minutes (or more). That's a good sign in my book.

## Red Hat Ansible Automation Platform

AnsibleFest Atlanta featured the launch of the [Red Hat Ansible Automation Platform](https://www.ansible.com/products/automation-platform). The platform consists of Ansible Engine and Tower (including the Network and Security components), and two new SaaS services: Automation Hub and Automation Analytics.

### Automation Hub

Automation Hub is the central location for certified, supported collections. The partners involved for launch are working with Ansible support to help customers. [Ansible Collections](https://galaxy.ansible.com/docs/contributing/creating_collections.html) are the component that makes Automation Hub possible. Collections allow core Ansible components to be decoupled from faster-moving components, like modules and plugins.

{{< carbon >}}

Ansible content can now be delivered and updated independently as Ansible Collections (available since Ansible 2.8). This eliminates the dependency of new or updated modules not being available until the next Ansible release. The Automation Hub also has namespacing for customers to host their own trusted Ansible content for use within their orgs.

### Automation Analytics

Automation Analytics gathers execution stats (pass/fail), module usage, and other tidbits of useful info. Right now, Tower is set to collect stats like this for local use but, it does not share them with Red Hat. Customers have to opt-in to this information sharing with Red Hat (it's off by default).

The capability to get metrics out of an organization's Ansible usage could be beneficial. At a high level, I can use the module usage stats to figure out what is automated in my organization. I can take that data and compare it to an outside inventory of equipment and software. This could allow an organization to see where success with automation is occurring and where more help might be needed.


The overall reception was VERY positive. Immediately after the opening session, the Ansible booth was swamped. I spent Wednesday morning in the Ansible booth, answering questions from features to pricing to architecture to the roadmap. It was awesome to talk to so many people at different stages of their DevOps journey during AnsibleFest.

## Building Kubernetes Operators with Ansible Hands-on Workshop

![Operabull: Operators with Ansible Make Kubernetes Sing!](https://shortcdn.com/chrisshort/operabull-official-500.png#center)

The largest single workshop held at AnsibleFest this year was: Building Kubernetes Operators with Ansible Hands On Workshop. This is the output of a lot of folks' work. Matt, Melvin, Michael, and I took a room full of Ansible folks and brought them up to speed on [Kubernetes Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) and writing [Operators with Ansible](https://ansible.com/operators/).

{{< tweet user="ChrisShort" id="1177242933415895042" >}}

The room was packed! We had 100 folks register and some extra space for some late registrants. From "show of hands" polling of the room, 25% of the room had used Kubernetes in some capacity. Four of those folks were OpenShift customers. Another four had written Go before. The entire room had familiarity with Ansible (as expected).

The joy of watching eyes light up and light bulbs come on when explaining that a classic, artisanal app could have its operational complexity managed with existing Ansible content is always awesome. Not having to rewrite things is a nice concept. Being able to take an Ansible role that manages many moving things and port that into Kubernetes brings a degree of relief to some people. Rewriting everything in a cloud native way isn't always possible (or ever possible). Legacy workloads are everywhere, and luckily, Ansible can help thanks to the [Operator SDK](https://github.com/operator-framework/operator-sdk).

The reception to the workshop and its content was very positive. The team did a truly wonderful job! This tweet made my day.

{{< tweet user="LeMatty" id="1177316355953102848" >}}

All the artifacts from the Building Kubernetes Operators with Ansible Hands-on Workshop can be found at [http://workshop.coreostrain.me/](http://workshop.coreostrain.me/)
