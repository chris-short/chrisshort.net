+++
author = "Chris Short"
categories = ["junos pulse", "apple keychain", "mac os x", "el capitan", "apple"]
date = 2015-10-06T20:54:19Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/Pulse-Secure-Logo-Medium_optimized.png"
slug = "mac-os-x-el-capitan-and-junos-pulse"
tags = ["junos pulse", "apple keychain", "mac os x", "el capitan", "apple"]
title = "Mac OS X El Capitan and Junos Pulse"

+++

I had some [Apple Keychain issues after upgrading to Mac OS X El Capitan](/mac-os-x-el-capitan-keychain-issues/) yesterday. Apple provided a reasonable resolution (blow away the login Apple Keychain and re-create it). As it turns out, my issues weren't limited to just the El Capitan upgrade. The Juniper Networks' VPN client, Junos Pulse, has some pretty awful issues.

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

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/JuniperNetworks">@JuniperNetworks</a> If you could fix Pulse bug in OS X El Capitan that&#39;d be great. Your downloads site is down too. <a href="http://t.co/b86KHpRtgG">pic.twitter.com/b86KHpRtgG</a></p>&mdash; Chris Short (@ChrisShort) <a href="https://twitter.com/ChrisShort/status/651417366992146437">October 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>