+++

author = "Chris Short"
categories = ["Linux", "Windows", "2022"]
date = 2022-08-18T12:30:00Z
description = "Installing WSL2 on Windows 11 is a real pain in the ass. It's not as simple as going to the Microsoft Store and installing a distro."
draft = false
slug = "windows-11-how-to-install-wsl2"
tags = []
ShowTOC = true
title = "Windows 11: How to Install WSL2 and Linux Distros"
[cover]
image = "https://shortcdn.com/file/chrisshort/green-keyboard.webp"
alt = "Green Windows Keyboard"
caption = "Photo by [Max DeRoin](https://www.pexels.com/photo/close-up-photography-of-black-and-green-computer-keyboard-keys-51415/)"

+++

{{< carbon >}}

I'm not going to lie. Windows Subsystem for Linux (WSL) is a helpful technology. It's supposed to have made getting a Linux environment on Windows easier. However, having just tried getting it up and running on the lone Windows box I own, I can confirm it's a pain to install unless you're a Windows system administrator or know what you're doing. The hype for WSL2 appears to have overlooked the user experience.

## Error Messages that may have got you here

All of these error messages are terrible and unhelpful. Yes, Microsoft, it should be WAY easier to get WSL2 up and running.

```ps
Please restart WSL with the following command and try again:
wsl --shutdown
wsl --unregister DISTRO NAME
```

```ps
The Windows Subsystem for Linux optional component is not enabled. Please enable it and try again.
```

```ps
WslRegisterDistribution failed with error: 0x80070032
Error: 0x80070032 The request is not supported.
```

```ps
WslRegisterDistribution failed with error: 0x080370114
Error: 0x080370114 The operation could not be started because a required feature is not installed.
```

## Why doesn't this just work?

If you're like me and went to the Microsoft Store to install WSL2 and Ubuntu, you will have a bad time. You need to do more than that to get WSL2 up and running (before installing a Linux distro). Again, if you're like me, back out all the changes (Add or remove programs), you made, and let's get everything working right. Another potentially helpful tip from someone who hasn't used Windows regularly in a decade; hit the Windows key and search for everything.

Windows 11 is like four versions of Windows smashed into one. The thing we need to do first is in a feature that appeared in Windows 98.

## Installing WSL2 the right way

Push the Windows key, search for "Turn Windows features on or off" and click it. In here, we need to tick two boxes, then restart the computer once everything is done installing:

1. Virtual Machine Platform
2. Windows Subsystem for Linux

![Open Turn Windows features on or off and tick the two boxes](https://shortcdn.com/file/chrisshort/turn-windows-features-on-or-off.webp)

## Install a Linux Distribution

Once Windows is back up and you're logged in, you have a handy command line tool: `wsl.exe`

Installing Linux distros from the Microsoft Store should work. However, I suggest using the CLI (it's fewer clicks and pretty straightforward).

Run PowerShell as an Administrator. Of course, there are two ways to do this. If you have the `Terminal` app installed, you can right-click the Start button, and there should be an option for `Terminal (Admin)`. The other way is to push the Windows key, search for PowerShell, and select Run as Administrator.

The first command you should run is `wsl --help`. That will give you a ton of info about the `wsl` command line tool ([this is the output of the help flag](https://shortcdn.com/file/chrisshort/wsl-help.txt).)

If you want to list available Linux distros, run `wsl --list --online` and you should see something like this:

```ps
The following is a list of valid distributions that can be installed.
Install using 'wsl.exe --install <Distro>'.

NAME               FRIENDLY NAME
Ubuntu             Ubuntu
Debian             Debian GNU/Linux
kali-linux         Kali Linux Rolling
openSUSE-42        openSUSE Leap 42
SLES-12            SUSE Linux Enterprise Server v12
SLES-15            SUSE Linux Enterprise Server v15
Ubuntu-18.04       Ubuntu 18.04 LTS
Ubuntu-20.04       Ubuntu 20.04 LTS
OracleLinux_8_5    Oracle Linux 8.5
OracleLinux_7_9    Oracle Linux 7.9
```

When you've made your choice and are ready to install, **don't follow the command in the above output**, as I don't think that worked for me. I had to dig a little deeper into the [help file](https://shortcdn.com/file/chrisshort/wsl-help.txt). Instead, run:

```ps
wsl --install -d Ubuntu-20.04
```

After a bit, you'll be dropped into your environment and can experience the joy of running Linux on Windows with WSL2. I'm just sad I had to scour the internet, [post on Twitter](https://twitter.com/ChrisShort/status/1559598384461250563) about it, and phone a friend to get it all working.

Regardless, enjoy Linux in Windows!

{{< eo_signup >}}
