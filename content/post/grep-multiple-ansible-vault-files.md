+++
author = "Chris Short"
categories = ["Ansible", "Red Hat", "Open Source"]
date = 2015-09-22T23:56:00Z
description = ""
draft = false
image = "https://cache.chrisshort.net/file/cache-chrisshort-net/ansible_circleA_blue.png"
slug = "grep-multiple-ansible-vault-files"
tags = ["ansible", "ansible-vault", "grep"]
title = "Grep Multiple Ansible Vault Files"

+++

Here's a handy one-liner to grep multiple Ansible Vault files (like group_vars). All you need is an Ansible Vault password file (outside of your configuration repo, please) and a little bash.

{{< highlight bash >}}
ls -1 | while read N ; do echo -n $N: ; ansible-vault --vault-password-file ~/.ansible_vault view $N | grep <STRING> ; done
{{< / highlight >}}


