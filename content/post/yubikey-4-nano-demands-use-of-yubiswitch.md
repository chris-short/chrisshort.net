+++
author = "Chris Short"
categories = ["yubikey", "mac os x"]
date = 2016-02-27T18:40:10Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/yubikey-nano.png"
slug = "yubikey-4-nano-demands-use-of-yubiswitch"
tags = ["yubikey", "mac os x"]
title = "Yubikey 4 Nano Demands Use of yubiswitch"

+++

As more and more security policies demand the use of multi-factor authentication the number of times a day you use a multi-factor token will increase. Hopefully that number will not increase to a level that throws the balance of security and convenience towards the annoyingly secure side of the scale. But, if that ever does happen hopefully you can use an [Yubikey](https://www.yubico.com/) as your token.

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

There are various sizes and styles of Yubikey to suit your need but the Yubikey of choice with myself and my co-workers seems to be the FIDO U2F ready [Yubikey Nano 4](https://www.yubico.com/products/yubikey-hardware/yubikey4/).

The Yubikey Nano 4 inputs the access code into whatever field is in use when it is touched. This is a very convenient option until you realize how often you touch the Yubikey Nano. Think about sitting in a chair with your laptop in your lap and suddenly *vvhttjekbkcvgtnvgjkekjkfvdrvuljndenkrcebhkfh* gets dropped into whatever you're working on. That is where [**yubiswitch**](https://github.com/pallotron/yubiswitch) comes in.

[yubiswitch provides releases](https://github.com/pallotron/yubiswitch/releases/) (source and Mac ready DMG files) for easy installation. But, there is some configuration required after installing yubiswitch. 

Install yubiswitch, run it, and open the Yubiswitch Preferences pane:

![](https://cdn.chrisshort.net/YubiSwitch_Preferences.png)

The YubiKey ProductID in the Preferences field needs to be set correctly or yubiswitch simply won't work. Open a Terminal and run the following command:

`ioreg -p IOUSB -l -w 0 -x | grep Yubikey -A10 | grep Product`

The output will look something like this:
<pre><code class="language-bash">|     "idProduct" = 0x407
|     "iProduct" = 0x2
|     "USB Product Name" = "Yubikey 4 OTP+U2F+CCID"</code></pre>

Plug the value from `idProduct` into the YubiKey ProductID field in the yubiswitch preferences pane, click OK, and yubiswitch should be working. You should now be able to enable and disable the Yubikey with a shortcut key combo or mouse click so you don't get random Yubikey codes dumped into whatever you're working on.