---
ShowTOC: false
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/badlock.png
date: "2016-04-12"
description: ""
tags:
- ansible
- samba
- badlock
- yum
- apt
- dpkg
- security
title: Got Badlock? Ansible Can Help
---

[Badlock](http://badlock.org/) might not be bad for all. If you are using Ansible you can patch your systems with a single playbook (or ad hoc command).

For RPM based OS users Badlock (samba) patching is as easy as:
`ansible -m shell -a "yum update *samba*" all`

{{< carbon >}}

Or you can be very granular and use an Ansible Playbook to audit and patch samba packages:

```bash
---
- hosts: all
  tasks:
    - name: Check if samba packages are installed
      shell: "yum list installed *samba* | awk '!/^Loaded|^Installed/' | cut -d ' ' -f 1"
      register: yum_samba
    - name: Update samba if installed
      yum: name={{ item }} state=latest
      when: yum_samba.stdout != ""
      with_items: '{{yum_samba.stdout_lines}}'
```

A similar Ansible Playbook for a Debian based system would look something like this:

```yaml
---
- hosts: all
  tasks:
    - name: Check if samba packages are installed
      shell: "dpkg --get-selections | grep samba | cut -f 1"
      register: dpkg_samba
    - name: Update samba if installed
      apt: name={{ item }} state=latest
      when: dpkg_samba.stdout != ""
      with_items: '{{dpkg_samba.stdout_lines}}'
```

Your bad nightmares about Badlock will be a not so bad memory in no time.
