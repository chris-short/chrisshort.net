+++
author = "Chris Short"
categories = ["Apple"]
date = 2016-06-01T16:44:00Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/hexley-darwin-vs-heckert-gnu.png"
slug = "gnu-sed-on-mac-os-x"
tags = ["sed", "gnu", "bsd", "mac os x", "apple", "system integrity protection", "sip", "macos", "tools"]
title = "GNU sed on Mac OS X"

+++

Like a lot of systems folks I use sed, a lot. It is probably an unhealthy amount of sed use but so be it. I operate on a lot of Linux servers but my desktop environment of choice is Mac OS X which means BSD tools (not the Linux-y GNU tools).

The differences are relatively subtle between BSD sed and GNU sed. However, most of my work is done through iTerm (a literal black box). I frequently find myself diving down rabbit holes and I really do not want to have to remember the differences between BSD and GNU sed. I want the same sed everywhere so I compile GNU sed on Mac OS X:

{{< mc >}}

1. [Disable Mac OS X System Integrity Protection](/disabling-mac-os-x-el-capitan-system-integrity-protection/) (aka rootless). This is a new-ish step thanks to Mac OS X El Capitan (10.11) and Apple's System Integrity Protection but if you are going to have GNU sed as your default sed this is a requirement[^n].

2. Install Xcode (via Mac App Store)

3. Install Xcode Command Line Tools:
`xcode-select --install`

4. Download the latest version of GNU sed from http://ftp.gnu.org/gnu/sed/

5. Untar the sed package you just downloaded

6. cd into the unpacked GNU sed directory then run:
`./configure --prefix=/usr/ --program-suffix=-gnu`[^n]

7. `make -j 16`[^n]

8. `sudo make install`

9. `mv /usr/bin/sed /usr/bin/sed-bsd`

10. `mv /usr/bin/sed /usr/bin/sed-bsd`

11. `ln -s /usr/bin/sed-gnu /usr/bin/sed`

It does not appear obvious to me that any internal OS X processes depend on BSD sed. I have done this for years without any noticeable issues. However, I have to point out that you are changing system internals and the chances of some going haywire are present.

{{< carbon >}}

The one annoyance I need to note when fully replacing the BSD sed version by following these steps (see footnotes if you do not want to do that) is that after every OS update (10.11.4 to 10.11.5, etc.) you will have to run through all these steps again.

For me, it is all about consistently having the same sed everywhere. Most people either do not notice the difference or just deal with them. I choose not to and you are free to choose differently too.

Footnotes:
[^n]: If you want to leave System Integrity Protection on you can install GNU sed to /usr/local and call GNU sed by the full path (/usr/local/bin/sed-gnu).
[^n]: If you decided to not disable System Integrity Protection you should run this instead: ./configure --prefix=/usr/local/ --program-suffix=-gnu and you can skip steps 9 through 11.
[^n]: You can change the number of jobs here if you desire; see MAKE(1).


