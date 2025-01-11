---
ShowToc: false
author: Chris Short
date: "2016-12-09"
description: Setup Papertrail with a role for Ansible Galaxy
draft: true
tags:
- ansible
- DevOps
- cloud native
title: Ansible Role for Papertrail
---

I have written my first publicly reusable Ansible role. It is freely available for use via Ansible Galaxy at [**chris-short.ansible-role-papertrail**](https://galaxy.ansible.com/chris-short/ansible-role-papertrail/) and helps you get Papertrail up and running.


What is [Papertrail](https://papertrailapp.com/)? A hosted log management tool that, in my opinion, can bridge the gap between your terminal and a full blown ELK stack. It is no frills streaming log aggregation and search.

[![Papertrail](https://shortcdn.com/chrisshort/papertrail-screenshot.png)](https://shortcdn.com/chrisshort/papertrail-screenshot.png)

Being my first Ansible role I have submitted to Galaxy I am pretty stoked about it. It did not come without finding a quirk or two but [the role is updating from GitHub despite my issue](https://github.com/ansible/galaxy-issues/issues/217). The role somehow makes it through to Galaxy regardless of this error. A huge thanks to [**Jeff Geerling**](http://www.jeffgeerling.com/) for his work to make this so much easier and his advice.

{{< carbon >}}

One nifty feature I discovered while working on the Travis CI playbook was the addition of the `ansible_pkg_mgr` fact. This is awesome because you can apply tasks to systems that have a specific package manager. Previously you would need to address Debian, Ubuntu, Fedora, CentOS, and on, and on separately. Three tasks covered the all the OSes I really wanted to test (apt, dnf, and yum).
