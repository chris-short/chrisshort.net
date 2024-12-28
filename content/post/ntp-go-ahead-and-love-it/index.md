---
aliases:
- ntp-go-ahead-and-love-it
author: Chris Short
cover:
  caption: 'Photo Credit: [Matteo Ianeselli](https://commons.wikimedia.org/wiki/User:Ianezz)
    via [Wikimedia Commons](http://commons.wikimedia.org/)'
  image: https://shortcdn.com/chrisshort/Trento-Mercatino_dei_Gaudenti-alarm_clocks.jpg
date: "2016-11-02"
description: ""
draft: false
slug: ntp-i-need-you-to-go-ahead-and-love-it
tags:
- ntp
- stratum
- time
- clock
- jitter
title: 'NTP: I Need You to Go Ahead and Love It'
---

It's 2016 (almost 2017) why is the time off on your system clocks? It became apparent to me that there are some folks out there that do not realize their clocks are off for a reason. [Julia Evans](https://twitter.com/b0rk) recently made a graphic about [distributed systems](https://twitter.com/b0rk/status/793288477060263936) that mentioned clock issues and it made me really sad.

![Clocks Lie](https://shortcdn.com/chrisshort/clocks-lie.jpg#center)
Photo Credit: [Julia Evans](http://jvns.ca/)

We had a saying when I was in the Air Force, "*Timing is everything.*" We lugged around GPS receivers that hooked up to our bulk and circuit encryption devices so that they would have accurate, consistent time with other encryption devices around the world.


The same theory still exists in modern encryption tools today. Set your clock to some arbitrary time and try to go to an HTTPS site. You might run into some issues.

The problem of clocks "lying" has been solved for years. What made me sad about Julia's tweet was that I know how to solve this problem. However, I have never written on the topic. If you are not familiar with how to solve this distributed systems problem, allow me to introduce you to **Network Time Protocol (NTP)**.

## What is NTP

> Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. In operation since before 1985, NTP is one of the oldest Internet protocols in current use.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Network_Time_Protocol)

In a nutshell, if you properly set up NTP on your network devices and systems you can have consistently set clocks across your enterprise. Keep in mind, NTP is time zone agnostic, it will not solve your time zone problems (you still need to address time zones in your environment). I would highly recommend bookmarking [RFC 5905](https://tools.ietf.org/html/rfc5905) and [ntp.org](http://www.ntp.org/) for future reference.

{{< carbon >}}

NTP utilizes UDP so it is very much a fire and forget protocol (which might be why NTP is so often unknown or poorly configured). ntpd (EL 6 or lower and Ubuntu) or chronyd (EL 7 or higher) are the Linux daemons (services) that are most commonly used to manage NTP (there are others but I have not used them lately).

## NTP stratum levels

> Loosely following the conventions established by the telephone industry, the level of each server in the hierarchy is defined by a stratum number.  Primary servers are assigned stratum one; secondary servers at each lower level are assigned stratum numbers one greater than the preceding level.  As the stratum number increases, its accuracy degrades depending on the particular network path and system clock stability.

Source: [RFC 5905](https://tools.ietf.org/html/rfc5905)

In a nutshell, stratum 0 sources are things like GPS, Cesium clocks, or cell networks (CDMA/GSM). Stratum 1 sources are systems that connect to stratum 0; stratum 2 sources are systems that connect to stratum 1 and so on. The lower the number the more accurate the clock source is; zero (0) through fifteen (15) are available. Stratum 16 represents an unsynchronized clock. Unsynchronized clocks are bad.

The absolute best graphical representation of the NTP stratum hierarchy I have seen comes from [Aaron Toponce](https://pthree.org/):

![NTP Stratum](https://shortcdn.com/chrisshort/stratum.png)

Photo Credit: [Aaron Toponce](https://pthree.org/)

If you are running bare metal, a virtual machine host, or a Docker Engine somewhere you need NTP. It will solve a lot of problems related to time. *I cannot emphasize enough the importance of NTP*. Many organizations have problems related to time that can be solved by a simple [Ansible playbook](https://galaxy.ansible.com/geerlingguy/ntp/), [yum](http://www.cyberciti.biz/faq/howto-install-ntp-to-synchronize-server-clock/), or [apt](https://help.ubuntu.com/lts/serverguide/NTP.html). Think of having accurate and consistent time across every device, log, and packet on your network. I actually run NTP on the AWS EC2 instance that I am writing this post on at the moment (scheduling posts for maximum exposure relies on good timing).

## How Does NTP Determine Quality?

**NERD ALERT:** If you are not concerned with the inner workings of NTP (or more accurately ntpq) *please feel free to skip this section*.

There are a lot of metrics that NTP utilizes algorithms to determine the quality of a time source; there is more to it than just stratum. A quick look at a system configured to use NTP will tell you a few metrics NTP uses to determine quality. The tool to query NTP metrics is ntpq:

{{< highlight bash >}}
$ ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
-foghorn.chrissh 152.2.133.53     2 u 1054 1024  376    0.399    2.495   0.516
-elmer.chrisshor 130.207.244.240  2 u  782 1024  376    0.218   -1.874   2.102
-pepe.chrisshort 152.2.133.55     2 u 1024 1024  376    0.414   -1.970   1.134
*level1e.cs.unc. .PPS.            1 u  532 1024  377   35.289   -1.657   3.973
+ntp-s1.cise.ufl .GPS.            1 u  408 1024  377   56.569    1.207   2.157
-rpop-probe-gb.n 152.45.7.44      2 u  807 1024  377   35.448    0.673   4.078
-time1.google.co 71.79.79.71      2 u 1019 1024  377   29.888    5.037   4.358
-mlbclock.isis.u 222.188.160.23   3 u  359 1024  377   27.518    3.167   3.281
+cpe-174-109-154 152.2.133.52     2 u  779 1024  377    1.856   -0.050   0.269
{{< / highlight >}}

In the output of `ntpq -p` there is a header row and then details about each time source in use:

* **remote**: The hostname of the time source (yes, NTP will use DNS, yay!)
* **refid**: This is the source that the remote is pulling its timing from. Notice how the stratum 1 sources say PPS and GPS? Those are stratum 0 sources being referenced by the stratum 1 sources.
* **st**: This is the stratum level of the remote being referenced (remember 16 is unsynchronized and that is not good).
* **t**: Stands for types available and it is usually u for unicast (I have not seen others in my twenty some years of using NTP)
* **when**: The last time (in seconds) the source was checked
* **poll**: How frequently (in seconds) the daemon will check the source for timing. This number goes up incrementally as a source is deemed reliable (the max is usually 1024 but is configurable).
* **reach**: This is an octal value of the last eight polls. 377 is eight successful polls in a row. NTP is UDP based so there is no delivery guarantee. If you want to know more about this check out [Understanding NTP Reachability Statistics](http://www.linuxjournal.com/article/6812) (or [archived here as a PDF](https://shortcdn.com/chrisshort/pdf/Understanding_NTP_Reachability_Statistics_Linux_Journal.pdf) since it's a twelve-year-old article).
* **delay**: Represents the round-trip time (in milliseconds) to obtain a response from the remote. This could represent many things; usually, it is a representation of network congestion (from my experience).
* **offset**: Shows the difference between the client (your system) and the remote (in milliseconds).
* **jitter**: Jitter is by far the weirdest metric here. According to the [RFC](http://www.ietf.org/rfc/rfc5905.txt), "jitter is a valuable indicator of fundamental timekeeping performance and network congestion state." [ntp.org](http://www.ntp.org/ntpfaq/NTP-s-sw-clocks-quality.htm) states, "When repeatedly reading the time, the difference may vary almost randomly. The difference of these differences (second derivation) is called jitter."

But what are those symbols on the far left of the results table? The dashes (-), asterisks (*), and pluses (+) all represent something important as well. These are called **tally codes** and live in the left margin (the following is straight from the [ntpq man page](https://linux.die.net/man/8/ntpq)):

* `space reject`: The peer is discarded as unreachable, synchronized to this server (synch loop) or outrageous synchronization distance.
* `x falsetick`: The peer is discarded by the intersection algorithm as a falseticker.
* `. excess`: The peer is discarded as not among the first ten peers sorted by synchronization distance and so is probably a poor candidate for further consideration.
* `-  outlyer`: The peer is discarded by the clustering algorithm as an outlyer.
* `+ candidat`: The peer is a survivor and a candidate for the combining algorithm.
* `#  selected`: The peer is a survivor, but not among the first six peers sorted by synchronization distance. If the association is ephemeral, it may be demobilized to conserve resources.
* `*  sys.peer`: The peer has been declared the system peer and lends its variables to the system variables.
* `o  pps.peer`: The peer has been declared the system peer and lends its variables to the system variables. However, the actual system synchronization is derived from a pulse-per-second (PPS) signal, either indirectly via the PPS reference clock driver or directly via kernel interface.

## NTP Pool

It is trivial to setup NTP these days thanks to the [NTP Pool Project](http://www.pool.ntp.org/). What is an NTP Pool?

>The pool.ntp.org project is a big virtual cluster of timeservers providing reliable easy to use NTP service for millions of clients.
>
>The pool is being used by millions or tens of millions of systems around the world. It's the default "time server" for most of the major Linux distributions and many networked appliances (see information for vendors).

If you are running a popular Linux distro or supported AWS AMI chances are when you install an NTP daemon (if it is not setup with one already) it will come pre-configured with NTP pool servers by default. This completely takes the guess work out of determining quality NTP servers.

I run an NTP pool server from my house. If you are using the pool in the US there is a chance you could be using timing from ntp.chrisshort.net. The more servers in the pools the better off systems using the pool will be. But, do not take adding a server to the pool lightly. There are some security concerns and configuration best practices that need to be taken into account when running a public NTP server that are outside the scope of this article.

## How Many NTP Sources Do I Need?

I have personally seen in far too many places where the number of NTP sources has been set too low. I have also argued with co-workers about the "right" number of NTP sources to use in your NTP configuration. My recommendation to folks new to NTP is to use the [NTP pool servers](http://www.pool.ntp.org/). However, according to [ntp.org](http://support.ntp.org/bin/view/Support/SelectingOffsiteNTPServers#Section_5.3.3.), you should have an **absolute minimum of four NTP sources** on your systems:

> With three servers, you have the minimum number of time sources needed to allow ntpd to detect if one time source is a "falseticker". However ntpd will then be in the position of choosing from the two remaining sources.This configuration provides no redundancy.
>
> With at least four upstream servers, one (or more) can be a "falseticker", or just unreachable, and ntpd will have a sufficient number of sources to choose from.

Not one, not two, not even three NTP sources is technically good enough. Use an absolute minimum of four, period. I encourage you to use more if you can but do not go overboard. ntp.chrisshort.net (the output from its `ntpq -p` is used above) is intentionally using a higher number of servers and peers to keep timing consistent on somewhat less than great hardware.

There is so much more that I could write about NTP. It is a truly fascinating protocol that has such a rich history. I encourage you to be aware of NTP and time in your day-to-day work. I also highly recommend researching more about NTP while I work on a follow-up to this piece.
