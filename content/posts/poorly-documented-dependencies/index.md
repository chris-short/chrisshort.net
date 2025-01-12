---
ShowTOC: false
author: Chris Short
cover:
  image: broken-heart.jpg
date: "2016-05-23"
description: ""
tags:
- ansible
- new relic
- nodejs
- npm
- yum
- dependency
- dependencies
- tools
title: Poorly Documented Dependencies
---

Few things irritate me more than poorly documented dependencies. If your tool or software documentation states you can install your widget with one command and it does not work you are probably annoying people.


Consider this a running list of tools and their often not well documented dependency chains. Feel free to chime in with your examples in the comments.

**Ansible**

Ansible is one of my favorite tools has many installation options. I tend to need the latest features so I end up [using pip to install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-and-upgrading-ansible-with-pip). On CentOS 7 and Red Hat 7 the Ansible dependency chain has been growing lately:

`sudo yum install gcc libffi-devel openssl-devel python-devel python-setuptools`

Once you install these dependencies you can run the following error free:

`sudo easy_install pip && sudo pip install -U setuptools && sudo pip install ansible`

**New Relic Node.js APM Agent**

I have New Relic running in a few places but one annoyance I came across was the rather long dependency chain the [New Relic Node.js APM Agent](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-maintain-nodejs) assuming you have npm and Node.js installed you need to npm install this rather lengthy chain of dependencies:

`sudo npm install agent-base core-util-is debug extend isarray process-nextick-args util-deprecate`

Once that is complete you should be able to successfully run:

`sudo npm install newrelic`

{{< carbon >}}
