+++
author = "Chris Short"
categories = ["ansible", "DevOps"]
date = 2016-09-27T16:15:00Z
description = "Puppet was too cumbersome for simple user management. Ansible came in to save the day in less than half an hour."
draft = false
image = "https://cdn.chrisshort.net/ansible_circleA_blue.png"
slug = "ansible-user-management"
tags = ["ansible", "DevOps"]
title = "User Management with Ansible"

+++

*The contents of this article originally appeared on [DZone](https://dzone.com/articles/user-management-with-ansible)*

A few weeks ago, one of my [**DevOps**](https://devopsish.com/) counterparts was working on building out a new environment for one of our applications. This deployment included a new Puppet server (we are in an orchestration/configuration management state of flux) and my teammate was having some issues provisioning users (I did not ask why nor did I really care). My teammate asked if I could help with some Ansible knowledge.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hey, Chris? Yes. Can you whip up an <a href="https://twitter.com/ansible">@ansible</a> playbook to provision users on this Puppet box. Heh... *cracks knuckles* Sure.</p>&mdash; Chris Short (@ChrisShort) <a href="https://twitter.com/ChrisShort/status/768485051180978176">August 24, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

User management usually falls into one of two categories; disjointed or a monumental effort. This Ansible solution could be that nice middle ground between the disjointed and monumental.

There are probably a dozen or more ways to manage users with Ansible. But for the quick and dirty requirement to add specific (and intelligent) users, I believe this Ansible role is a good approach.

First, we need to build a dict of users that we want to create in a vars file:

<pre><code>---
pre_puppet_users:
  - {
      user: auser,
      comment: "A User",
      state: present
    }
  - {
      user: buser,
      comment: "B User",
      state: present
    }
  - {
      user: cuser,
      comment: "C User",
      state: present
    }
  - {
      user: snowflake,
      comment: "You'll See",
      state: present
    }
</code></pre>

If you are using SSH keys (and you should be) you can add each users' key as a text file and deploy those as well:

<pre><code>/user-role
|--files
|  |-- auser
|  |-- buser
|  |-- cuser
|--playbook.yml
|--tasks
|  |-- main.yml
|--vars
   |__ main.yml
</code></pre>

The Ansible tasks are fairly simple but there was one user (snowflake) that did not want to use SSH keys (ugh) so they are going to be our special snowflake that we have to worry about setting a password on.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- chrisshort.net Responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="1297095894"
     data-ad-format="auto"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>

**SECURITY NOTE**: Best practice would be to set all these accounts to have random passwords and force the users to change them upon login. However, the assumption was made that the users we were speaking of for this use case were setting their passwords the instant they logged in. Please reference "[How do I generate crypted passwords for the user module?](http://docs.ansible.com/ansible/faq.html#how-do-i-generate-crypted-passwords-for-the-user-module)" for details on creating passwords for use with Ansible.

<pre><code>---
- name: Create pre_puppet_users
  user:
    createhome=yes
    comment={{ item.comment }}
    expires=[SOME FUTURE EPOCH]
    groups=groupname
    name={{ item.user }}
    state={{ item.state }}
  with_items:
    - "{{ pre_puppet_users }}"

- name: Special snowflake but really should be all users
  user:
    name=snowflake
    password=[UNIX PASSWORD HASH]

- name: Populate SSH Keys
  authorized_key:
    key="{{ lookup('file',item) }}"
    user="{{ item | basename }}"
    manage_dir=yes
  with_fileglob:
    - "files/*"
</code></pre>

All of these components build an Ansible role. The higher level Ansible playbook that executes this role is pretty straight forward:

<pre><code>---
- name: Create Users
  hosts: all
  gather_facts: false
  strategy: free
  become: yes
  roles:
    - user-role
</code></pre>

Make sure your inventory contains the necessary systems, run the Ansible playbook, and you will have users provisioned how you see fit in no time.
