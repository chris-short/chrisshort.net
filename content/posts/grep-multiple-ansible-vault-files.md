---
ShowTOC: false
author: Chris Short
date: "2015-09-22"
description: ""
image: https://shortcdn.com/chrisshort/ansible_circleA_blue.png
tags:
- ansible
- ansible-vault
- grep
title: Grep Multiple Ansible Vault Files
---

Here's a handy one-liner to grep multiple Ansible Vault files (like group_vars). All you need is an Ansible Vault password file (outside of your configuration repo, please) and a little bash.

```bash
ls -1 | while read N ; do echo -n $N: ; ansible-vault --vault-password-file ~/.ansible_vault view $N | grep <STRING> ; done
```
