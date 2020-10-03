+++
author = "Chris Short"
categories = ["Linux", "Open Source"]
date = 2013-05-03T18:18:00Z
description = ""
draft = false
image = "/img/posts/Virtualbox_logo.png"
slug = "install-virtualbox-guest-additions-via-command-line"
tags = ["virtualbox", "centos"]
title = "Install VirtualBox Guest Additions via Command Line"

+++

I routinely spin up CentOS virtual machines in VirtualBox. Sometimes they are temporary and others might be around for months. These seemingly throw away VMs utilize the CentOS minimal install ISO for speed of setup (I really should just build a standard starting point VM and clone it as needed but I digress).

{{< carbon >}}

I understand that installing the VirtualBox guest additions is a nicety for some so you probably rarely do it. But, when I do need to install them, I always seem to forget everything that is needed by the VirtualBox guest additions; I am documenting them here for everyone's benefit.

Install VirtualBox Guest Additions via Command Line (CentOS 6.4):

* `yum update`
* `yum install gcc make kernel-devel`
* Reboot
* Go to "Devices" menu and select "Install Guest Additions"
* `mount /dev/scd0 /media/`
* `sh /media/VBoxLinuxAdditions.run`

Complete! Guest Additions should be installed. It's up to you whether or not you want to remove gcc and make after the Guest Additions are installed. Keep in mind, that when you upgrade VirtualBox you'll need to upgrade the Guest Additions too which means you'll need gcc and make again.

NOTE: The error log is `/var/log/vboxadd-install.log`

{{< sib >}}
