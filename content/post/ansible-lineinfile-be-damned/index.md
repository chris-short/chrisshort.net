+++
author = "Chris Short"
categories = ["Ansible"]
date = 2016-09-06T16:30:00Z
description = "Ansible lineinfile module is a cumbersome one to work. Here is a use case and examples of how to utilize Ansible lineinfile"
draft = false
image = "/ansible-lineinfile-be-damned/Ansible-Mark-Large-RGB-Black.png"
slug = "ansible-lineinfile-be-damned"
tags = ["ansible", "lineinfile", "module", "security"]
title = "Ansible lineinfile be damned"
aliases = [
  "lineinfile-be-damned",
  "lineinfile-be-d"
]

+++

The [Ansible](/tags/ansible/) [lineinfile](http://docs.ansible.com/ansible/lineinfile_module.html) module is designed to search a file for a line, and ensure that it is present or absent. lineinfile is very effective at that particular task. However, when the line has to be in a certain place or before or after a certain line, lineinfile becomes a hassle to manage.

{{< mc >}}

Most people on IRC (#ansible) tend to agree, lineinfile is not a very good module in practice. Even [Brain Coca says to avoid the lineinfile module](https://groups.google.com/d/msg/ansible-project/vjquGCRcLJc/QEgebch_DQAJ). But, there is one use case I have found where line in file really excels.

If you are not using the [Mozilla SSL Configuration Generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/) you are really missing out. It is a great tool that is super easy to use to maintain [recommended SSL/TLS configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations) on all your HTTP endpoints.

We recently had a task to get our TLS configurations up to the latest recommended guidance as well as make those configurations as consistent as possible. But this meant we had to touch over 900 different customer impacting Apache configurations.

{{< adsense-inarticle >}}

Ansible to the rescue! But making and deploying templated configurations was going to be far too time-consuming to meet the self-imposed deadline we had set. This is the first time in my 2+ years of working with Ansible where I have come across a good use case for the lineinfile module.

There are only a handful of lines in the Apache configs that we needed to worry about two of which were already present and two of which that needed to be added:

* SSLProtocol (present)
* SSLCipherSuite (present)
* SSLHonorCipherOrder (absent)
* Header always set Strict-Transport-Security (absent)

I should also add that we have some configurations for endpoints that do not require encryption. Not only did we have to find and replace and add lines to the configs but we had to identify configs that only had configurations for port 443. Finding the files with the port 443 configurations is easy enough with the [Ansible find module](http://docs.ansible.com/ansible/find_module.html).

{{< adsense-inarticle >}}

Here is the Ansible Playbook:

{{< highlight yaml >}}
---
- hosts: webserver
  gather_facts: no
  tasks:
    - name: Find all the conf files
      find:
        paths="/etc/httpd/conf.d"
        patterns="*.conf"
        file_type=file
        contains='<VirtualHost [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:443>'
      register: conf_files
      always_run: yes
      tags: find

    - name: Edit SSLProtocol
      lineinfile:
        dest={{ item.path }}
        regexp="[ \t]SSLProtocol"
        line="\tSSLProtocol\t\tall -SSLv2 -SSLv3"
        insertafter="^[ \t]SSLEngine on"
      with_items: "{{ conf_files.files }}"

    - name: Edit SSLCipherSuite
      lineinfile:
        dest={{ item.path }}
        regexp="[ \t]SSLCipherSuite"
        line="\tSSLCipherSuite\t\tECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS"
      with_items: "{{ conf_files.files }}"

    - name: Edit SSLHonorCipherOrder
      lineinfile:
        dest="{{ item.path }}"
        regexp="[ \t]SSLHonorCipherOrder[ \t]"
        line="\tSSLHonorCipherOrder\t\ton"
        insertafter="[ \t]SSLCipherSuite[ \t]"
      with_items: "{{ conf_files.files }}"

    - name: HSTS
      lineinfile:
        dest="{{ item.path }}"
        regexp="[ \t]Header always set Strict-Transport-Security[ \t]"
        insertbefore="&lt;/VirtualHost&gt;"
        line='\tHeader always set Strict-Transport-Security "max-age=15768000"'
      with_items: "{{ conf_files.files }}"
{{< / highlight >}}

There are a few bits I would like to expound on:

The Ansible find module has some [unique return values](http://docs.ansible.com/ansible/find_module.html#return-values); one of these values is files. The register of conf_files is all the output of the find module. The item `{{ conf_files.files }}` is the *files* array from the find module output. The `{{ item.path }}` is the *path* object from the *files* array. It is a little wonky but it grabs the full path for all files matching the options given to the find module which is exactly what we need.

{{< adsense-inarticle >}}

The Ansible lineinfile module usage in this playbook is intense; `insertafter`, `insertbefore`, and `regexp` are used in every step. The matching of spaces and/or tabs is handled by the `[ \t]` regex throughout the playbook. The `regexp` option in the lineinfile module makes sure lines that match the expression are replaced. The `insertafter` and `insertbefore` options allow for putting the lines where they need to be.

This playbook took a while to run but once it was done we had consistent, well configured Apache configurations that went from F's to A's on the [Qualys SSL Server Test](https://www.ssllabs.com/ssltest/). Give it a try and let me know how it works out for you.

UPDATE: Thanks to [pferde on Hacker News](https://news.ycombinator.com/item?id=12435809) for pointing out a flaw in my regex in insertafter for the Edit SSLProtocol task. It has been corrected.

{{< adsense-matched >}}