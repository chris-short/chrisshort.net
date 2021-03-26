+++
author = "Chris Short"
categories = ["Open Source", "2019"]
date = 2019-06-25T13:19:00Z
description = "The differences between upstream and downstream"
draft = false
tags = ["open source", "upstream", "downstream"]
title = "Upstream vs Downstream"
[cover]
image = "/upstream-vs-downstream/stream.jpg"

+++

I was working on things for work (as one does) when it dawned on me. Very few folks understand the difference between upstream and downstream as it relates to open source software. I used Red Hat projects as a pointer. Here is the output of that effort (which was scratching the surface).

## Upstream vs. Downstream

Upstream vs. Downstream is confusing at times. But, for the bigger Red Hat projects this holds true:

AWX Project is upstream of Ansible Tower
Kubernetes is upstream of OKD
OKD is the upstream of Red Hat OpenShift
Fedora is the upstream of Red Hat Enterprise Linux
CentOS is more of a clone than a downstream of RHEL, but it could be simplified to RHEL is upstream of CentOS.

The expectation with upstream work is that it's community governed, managed, and supported. People build downstream products to sell by adding value to them like services or support. Now, open source vs. open core is a topic for another day.

{{< eo >}}
