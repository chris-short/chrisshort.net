+++
author = "Chris Short"
date = 2019-07-19T10:50:00Z
description = "Operators help simplify deployment & operations of stateful applications in Kubernetes & OpenShift. Writing Operators with Ansible lowers the barrier to entry."
draft = false
tags = ["Kubernetes", "Operator", "Ansible", "operators", "talk", "app"]
title = "How to Teach Old Apps New Tricks with Ansible-based Operators (Parts 1 & 2)"
[cover]
image = "https://shortcdn.com/chrisshort/how-to-teach-old-apps-new-tricks-with-ansible-based-operators-parts-1-2.png"

+++

At Red Hat Summit this year, I had the task of explaining [Kubernetes Operators with Ansible](https://ansible.com/operators) in two, fifteen-minute talks, separated by three hours, in the middle of the busy Red Hat booth to anyone that walked up. I had to explain Kubernetes, the difference stateful and stateless apps, what a Kubernetes Operator is, how to write an operator with Ansible, and then demonstrate this capability. Use of video and sound was discouraged. Also, there wasn't going to be an ethernet cable available, meaning only conference show floor WiFi was available for a demo.

{{< carbon >}}

## Constraints are the devil

I should mention, I decided to build an [motd operator](https://github.com/chris-short/motd-operator). It's literally *the most worthless operator* I could have possibly written. Who needs [motd](https://en.wikipedia.org/wiki/Motd_(Unix)) in a container? The reasoning I gave was equally dumb; Amazon had just taken an outage due to a configuration issue. My logic was that if there were some metadata about the container, in the container itself, it could have helped prevent execution of configuration changes somehow. That's a stretch and I openly admit that.

The last thing I wanted was someone taking an operator I wrote for this talk into production (given the aforementioned constraints). There was little likelihood any operator I built specifically for this talk was going to be even a little bit complex. There wasn't enough time.

## Inception

**The idea behind the talk was to plant the idea** into people's heads that there might actually be a path to Kubernetes for their legacy workloads. These workloads  require a high level of operational knowledge. I think back to my time at Bankrate working on a decade-old .NET application. We had a lot of automation capabilities that might have already been written. We already had work in progress to move to some things to .NET Core. If we could have written [Kubernetes Operators in Ansible](https://ansible.com/operators), it might have saved us some time and ass pain. Alas, if only we had the technology of today only a few years earlier.

## Slides

With all these parameters in place, I took to making talk titled, "How to Teach Old Apps New Tricks with Ansible-based Operators (Parts 1 & 2)" [PDF](https://files.speakerdeck.com/presentations/4ddcd10b6a4a4b1e981e62376003b176/how-to-teach-old-apps-new-tricks-with-ansible-based-operators-parts-1-2-chris-short.pdf)

{{< speakerdeck 4ddcd10b6a4a4b1e981e62376003b176 >}}

Red Hat Developer has a good [Ansible Operator Overview course](https://developers.redhat.com/learn/openshift/operators).

## Artifacts

If you want to actually see the monstrosity I built...

<https://github.com/chris-short/ansible-role-motd>: Ansible Role to manage /etc/motd to simulate managing state

<https://galaxy.ansible.com/chris-short/ansible_role_motd>: Ansible Role available from Ansible Galaxy

<https://github.com/chris-short/motd-operator>: Ansible-based Kubernetes Operator Using ansible_role_motd from Ansible Galaxy as an example from managing state in a Kubernetes cluster

