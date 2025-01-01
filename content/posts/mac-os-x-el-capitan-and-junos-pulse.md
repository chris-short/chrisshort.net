---
ShowTOC: false
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/Pulse-Secure-Logo-Medium_optimized.png
date: "2015-10-06"
description: ""
tags:
- junos pulse
- apple keychain
- mac os x
- el capitan
- apple
- macos
title: Mac OS X El Capitan and Junos Pulse
---

I had some [Apple Keychain issues after upgrading to Mac OS X El Capitan](/mac-os-x-el-capitan-keychain-issues/) yesterday. Apple provided a reasonable resolution (blow away the login Apple Keychain and re-create it). As it turns out, my issues weren't limited to just the El Capitan upgrade. The Juniper Networks' VPN client, Junos Pulse, has some pretty awful issues.


The behavior went something like this:

1. Save a password for a VPN connection in Junos Pulse VPN client
2. The first use of the VPN connection will be fine
3. Disconnect VPN connection
4. Close Junos Pulse VPN client
5. Open VPN client
6. Attempt to connect to recently created VPN (with saved password)

All hell breaks loose; Apple Keychain issues galore. Literally every Apple Keychain becomes unusable to some extent and a reboot is required to resolve the issue.

The workaround is to not save passwords in the Junos Pulse client (even in the supposedly El Capitan supported version of Junos Pulse; [thank you commenter JJ Duru](/mac-os-x-el-capitan-keychain-issues/#comment-2292351153)).

Hopefully this bug gets fixed very soon.
