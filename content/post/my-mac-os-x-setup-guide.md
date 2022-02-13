+++
author = "Chris Short"
categories = ["Apple", "2016"]
date = 2016-06-08T19:58:34Z
description = ""
draft = false
slug = "my-mac-os-x-setup-guide"
tags = ["mac os x", "macos", "virtualbox", "tools"]
title = "My Mac OS X Setup Guide"
[cover]
image = "https://shortcdn.com/file/chrisshort/macbook.jpg"

+++

I happen to be someone that finds themselves setting up new systems for myself often. I have to remind myself there are tools that I need installed before the scenario in which I need to use them (on an airplane, during a crisis, etc.). I use a Mac so this list of software and setup is going to be very Mac OS X centric.

{{< eo_signup >}}

**From the web:**

* [Google Chrome](https://www.google.com/chrome/browser/desktop/)
* [Evernote](https://evernote.com/) - My brain lives here
* [Google Drive](https://www.google.com/drive/download/) - I keep some .files (dot files) here
* [iTerm](https://www.iterm2.com/) - My Terminal of choice
* [Shuttle](http://fitztrev.github.io/shuttle/) - Super awesome ssh config menu creator
* [Little Snitch](https://www.obdev.at/products/littlesnitch/download.html) - I don't trust any one or any code
* [Shimo](https://www.shimovpn.com/) - Need to use more than one VPN? Shimo is for you
* [GPG Tools](https://gpgtools.org/)
* [MySQL Workbench](http://dev.mysql.com/downloads/workbench/) - When you login to a MySQL server and say, "WTF?!?" you might want a GUI as a safety
* [Witch](https://manytricks.com/witch/) - CMD + TAB will never be the same
* [Spectacle](https://www.spectacleapp.com/) - Position your windows where you want them
* [Skitch](https://evernote.com/skitch/) - Screeenshot tool that saves to Evernote
* [Dropbox](https://www.dropbox.com/)
* [CleanMyMac](http://macpaw.com/cleanmymac) - I use this to uninstall software and clear caches (among other things)
* [DaisyDisk](https://daisydiskapp.com/) - Find wasted disk
* [Wireshark](https://www.wireshark.org/)
* [Postman](https://www.getpostman.com/)
* [Mercurial](https://www.mercurial-scm.org/)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant](https://www.vagrantup.com/downloads)
* [SourceTree](https://www.sourcetreeapp.com/) - I am using this less and less these days but still want it around
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Chrome Canary](https://www.google.com/chrome/browser/canary.html)
* [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
* [Safari Technology Preview](https://developer.apple.com/safari/download/)
* [Padbury Clock](https://padbury.app/) - I am fascinated by time and I love this screensaver!
* [Telegram](https://desktop.telegram.org/)
* [VLC](http://www.videolan.org/)

{{< carbon >}}

**From the Mac App Store:**

* Microsoft Remote Desktop
* Noizio
* Pixelmator
* Slack
* SubnetCalc
* TextWrangler
* Textual
* Tweetbot
* Xcode (and Xcode Command Line Tools `xcode-select --install`)

**From the CLI:**

* [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-and-upgrading-ansible-with-pip)
* [csshx](https://github.com/brockgr/csshx) - Need to open twenty SSH sessions at once and execute the same commands in all of them?
* [nmap](https://nmap.org/book/install.html#inst-svn)
* [openssl](https://www.openssl.org/source/)

The majority of my time is spent in iTerm and Google Chrome. Google Chrome backs up my extensions, settings, etc. but iTerm does not have a reliable backup or sync solution. As a result I save the iTerm com.googlecode.iterm2.plist file to Google Drive. That way it is constantly synced to a cloud source.

I spend a lot of time in vim as well. As a result, I update my .vimrc file accordingly. I have an Ansible Playbook to update vim settings as I like a specific color scheme. I try to stray from defaults as little as possible but it happens.
