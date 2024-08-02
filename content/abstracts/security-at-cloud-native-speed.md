+++
author = "Chris Short"
date = 2019-11-07T00:33:00Z
description = ""
draft = false
slug = "security-at-cloud-native-speed"
tags = ["security", "cloud native", "cfp"]
title = "Security at Cloud Native Speed"
aliases =[
    "/cfp/security-at-cloud-native-speed/"
]

+++

## Abstract

Cloud native technologies are increasingly used by organizations to provide a competitive advantage. Containers and Kubernetes jumpstart developer productivity but, they could increase security teams' workloads. Threat vectors span cloud providers, control planes, developer tooling, and applications in environment hybrid environments. Use these technologies and cultures to improve security and reduce blast radius while improving velocity. This talk will analyze human tendencies and provide tips to improve security postures in cloud native environments.

## Description

Security needs to be a step in every part of the software development lifecycle. But, the tools, libraries, platforms, and attack surface never seems to shrink. When teams adopt Kubernetes and cloud native tooling, applications become ephemeral and infrastructure becomes elastic. Baking security tooling into the pipeline is critical. Mandating rigid boundaries around decoupled components is key. Embracing speed and collaboration are crucial to security teams in today's cloud native landscape. The more the merrier along this journey!

### whoami

* Cloud Native Ambassador
* DevOps'ish
* KubeWeekly

## Struggles

### The Security Professional

* Overworked
* Under resourced
* Overwhelmed
* Under pressure

### The Software Engineer

* Overworked
* Under resourced
* Overwhelmed
* Under pressure

### You're now using the same tooling

* Cloud providers
* APIs
* Kubernetes

### The same tooling

![CNCF Cloud Native Landscape](https://landscape.cncf.io/images/landscape.png)

What have we done?!?!

## Velocity

### How fast is this thing going

* "[T]he number of containers that are alive for 10 seconds or less has doubled to 22%."

Source: [Sysdig 2019 Container Usage Report](https://sysdig.com/blog/sysdig-2019-container-usage-report/)

### Big Number

73% of all containers live for thirty minutes OR LESS.

Source: [Sysdig 2019 Container Usage Report](https://sysdig.com/blog/sysdig-2019-container-usage-report/)

### Embrace Velocity

* High performing teams deploy multiple times a day
* Lead times are less than a day
* Service restorations happen in less than an hour
* Change failure rates are between 0-15%

Source: [2019 Accelerate State of DevOps Report](http://cloud.google.com/devops/state-of-devops/)

## CD for Security

### Continuous Security

* Integrate security into the lifecycle

### Remember the OSI Reference Model

* Troubleshoot the lowest layers first
* Containers are made with layers
* Build software pipelines that application and infrastructure changes can flow through

### Elements of a container pipeline

* Elements of the container pipeline

### CI/CD Must Include Security Gates

* CI/CD Must Include Security Gates

## Platform Security

### Tweets

* Screenshots of tweets (https://twitter.com/ChrisShort/status/1191840746988605440)

### Securing the container platform

* Securing the container platform

### Robust security standards

* SELINUX (access control)
* Namespaces (partitioning)
* Seccomp (system calls)
* Cgroups (resource allocation)
* Security policies (PSP, network policy, OPA)

### Active not Passive

* OWASP
* Static analysis of code at rest
* Dependency scanning
* Trusted base images
* Trusted registries

### Use K8s Primitives

* Use Kubernetes native controls
* Contextually aware
* Additional extensibility (CRDs)
* Industry standard APIs
* Speed of K8s internals
* Robust, scalable, portable controls

### Clear boundaries

* Network segmentation
* Admission controllers
* Infrastructure as Code

Source: [Cloud-native security for containers and
Kubernetes](https://shortcdn.com/chrisshort/StackRox-Kubernetes-Security-Platform-Solution-Brief.pdf)

## Speed Makes Us Safer

### Automation

* The first step is adopting tooling to help
* The next steps are a cultural shift towards speed
* Security must be automated and running at the same velocity as software development

### Rethinking Safety

* Reducing friction to make changes smaller and easier
* SRE Golden Signals
* Assume compromise will occur
* Plan for disasters
* Breaking things on purpose (Chaos Engineering)

### Detection leading to mitigation

* Automating mitigation
* Scale violating deployments to zero quickly
* Automating defense in depth response
* Offending metadata registered in security devices
* Ansible Operator to block bad actors at network boundary (not K8s boundary)

### *Continuous Learning*

* DevOps is continuous learning (Shafer quote)
* Meetups, Events, Community Participation
* Intelligence (Google alerts, newsletters, US-CERT, Infragard)

## Discards

### You don't stand a chance

* Attackers know this too
* Shodan and Google are available to everyone
* Vulnerable software is the expectation now
