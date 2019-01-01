+++
author = "Chris Short"
categories = ["Apple"]
date = 2015-10-13T17:22:32Z
description = ""
draft = false
slug = "disabling-mac-os-x-el-capitan-system-integrity-protection"
tags = ["apple", "mac os x", "el capitan", "security", "system integrity protection", "sip", "macos", "users"]
title = "Disabling Mac OS X El Capitan System Integrity Protection"

+++

Apple has introduced a new security feature in Mac OS X El Capitan (10.11) called **System Integrity Protection** (sometimes referred to as [rootless](http://arstechnica.co.uk/apple/2015/06/preview-os-x-el-capitans-first-beta-is-a-promising-heap-of-refinements/4/#h1)).

{{< mc >}}

What is System Integrity Protection? According to [Apple's documentation](https://developer.apple.com/library/prerelease/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_11.html):

>A new security policy that applies to every running process, including privileged code and code that runs out of the sandbox. The policy extends additional protections to components on disk and at run-time, only allowing system binaries to be modified by the system installer and software updates. Code injection and runtime attachments to system binaries are no longer permitted.

What does it really do? It prevents users, processes, etc. from modifying certain resources on the system (even if you're running as root).

{{< adsense-inarticle >}}

This is a great security enhancement for the vast majority of Mac users. But, some people need to modify the resources protected by System Integrity Protection. 

For example, I compile and use a few GNU utilities ([sed for example](/gnu-sed-on-mac-os-x/)) so that I don't have to worry about BSD vs. GNU syntax changes when bouncing between my laptop and servers I'm administering.

Even though the [security configuration  is stored in NVRAM](https://developer.apple.com/library/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/ConfiguringSystemIntegrityProtection/ConfiguringSystemIntegrityProtection.html) it is easy enough to disable System Integrity Protection (NOTE: The vast majority of users will never need to do this).

1. Reboot Your Mac
2. Enter Recovery Mode (hold CMD+R during reboot)
3. Go to Utilities -> Terminal
4. `csrutil disable`
5. Reboot Normally

System Integrity Protection will now be disabled; you're back to having complete control of your operating system again. You can verify the System Integrity Protection configuration by entering `csrutil status` in a terminal.

If you want to get down into the nuts and bolts of System Integrity Protection (aka SIP, rootless) I recommend reading [Rootfool – a small tool to dynamically disable and enable SIP in El Capitan](https://reverse.put.as/2015/10/12/rootfool-a-small-tool-to-dynamically-disable-and-enable-sip-in-el-capitan/)

{{< adsense-matched >}}