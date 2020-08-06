+++
author = "Chris Short"
categories = ["Kubernetes"]
date = 2018-01-17T16:35:00Z
description = ""
draft = false
slug = "raspberry-pi-kubernetes-cluster"
tags = ["open source", "ansible", "containers", "kubernetes", "raspberry pi", "ARM", "k8s", "cluster"]
title = "Raspberry Pi Kubernetes Cluster"
image = "/raspberry-pi-kubernetes-cluster/building-raspberry-pi-kubernetes-cluster.jpg"
aliases = [
     "my-raspberry-pi-kubernetes-cluster"
]

+++

For many months, I have wanted a **Kubernetes** cluster of my very own. One that I can tinker with, break, rebuild, and deploy services to. In the fall of 2017, I decided to stand up a three node cluster in Google Kubernetes Engine (GKE). It was nice and shiny and Googly but it wasn't cheap. Totaling almost $40/month to run I was envious of my friends who have virtually unlimited access to cloud compute.



Once I [left Bankrate](/leaving-bankrate/), the GKE cluster was shuttered and a lower cost option was needed. I ran minikube for a while. I got annoyed when a laptop went to sleep and ruined minikube. I tried to run a single node cluster on an old 2010 MacBook Pro. But, it wasn't up to the task without [VT-x](https://en.wikipedia.org/wiki/X86_virtualization#Intel_virtualization_(VT-x)). I abandoned the idea for later on once I realized the four old Raspberry Pis I had weren't going to be able to handle but a handful of containers.

{{< carbon >}}

While job hunting, writing, and everything else I did at the end of 2017 I started a side mission. I was going to figure out where the sweet spot is in the cost to capabilities ratio for in-home Kubernetes clusters. I went to the University of Michigan Property Disposition building after a trip to the Ann Arbor VA Hospital. There wasn't much there given the time of year and what was there were old Mac Pros at around $200 each (with no hard drives). I searched Craigslist but there wasn't much available. I'll be honest, looking on Craigslist in the Detroit Metro area left me wondering, "If I do find something, how safe would I be going to buy it?" Plus, hardware consistency is very important to me. It was going to be hard to find three, four, or five identical systems. I know this isn't a requirement of Kubernetes but it makes things simpler when it comes to systems management. I looked at other surplus hardware sites and while there were options I hit a moral dilemma. "If I buy these cheap systems will I be taking away from someone who would benefit more from them?"

* Low cost (less than $500 which eliminates a lot of options)
* Four or more nodes (for rolling cluster updates; emulate real-world deployments)
* Consistency of hardware (to ease sysadmin duties)
* Low noise (I've done the server room life; it's given me bad hearing)

Time and time again I kept searching and coming back to the [**Raspberry Pi 3**](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) as a decent platform that fit my needs. It seems like Raspberry Pi Kubernetes clusters are popping up everywhere. The trend certainly has grown at the onset of 2018. Folks like [Alex Ellis](https://blog.alexellis.io/the-state-of-netbooting-raspberry-pi/) and [Scott Hanselman](https://www.hanselman.com/blog/HowToBuildAKubernetesClusterWithARMRaspberryPiThenRunNETCoreOnOpenFaas.aspx) are talking about Kubernetes running on Raspberry Pi clusters. It seems like the Raspberry Pi is a decent platform for Kubernetes.

After having lunch one day in Ann Arbor with Ed Vielmetti of [Packet](https://www.packet.net/) and talking about [ARM](https://en.wikipedia.org/wiki/ARM_architecture) in the datacenter it made a lot of sense to go this route. ARM is the CPU of the future as chips will need to be more plentiful, more power efficient, and smaller. The Apple iPhone 8 I carry has six cores and amazing performance from ARM chips. Once Meltdown and Spectre hit my belief got a real-life wake-up call. Is Intel the chip of the future? No. ARM is (yes, I know ARM is susceptible to Spectre).

* Six [Raspberry Pi 3 Model B Motherboards](https://amzn.to/2K6lfQ7)
* Six [SanDisk Ultra 32GB microSDHC UHS-I Card with Adapter, Grey/Red, Standard Packaging (SDSQUNC-032G-GN6MA)](https://amzn.to/2DA6H7q)
* Two [AmazonBasics USB 2.0 A-Male to Micro B Cable (3 Pack), 3 feet, Black](https://amzn.to/2BnRDZ4)
* One [AmazonBasics 6-Port USB Wall Charger (60-Watt) - Black](https://amzn.to/2z43dGP)
* One [GeauxRobot Raspberry Pi 3 Model B 6-layer Dog Bone Stack Clear Case Box Enclosure also for Pi 2B B+ A+ B A](https://amzn.to/2DxXb4N)

*Note: chrisshort.net may earn compensation for sales from links on this post through [affiliate programs](/terms/).*

I also ordered [USB wifi adapters](https://amzn.to/2Bp0qdj) but that was a mistake given the performance of the Raspberry Pi 3 onboard wifi. It was time to assemble and test everything. While copying [Raspbian Lite](https://www.raspberrypi.org/downloads/raspbian/) to six microSD cards I began putting all the pieces together. The GeauxRobot case assembly is not intuitive. After a few reads of the instructions, I realized they looked a lot like a sandwich or lasagna recipe. The bottom and top layers were a little different but everything in the middle fit together nicely. Once the Raspberry Pis were racked and microSD cards were inserted I tested each one to make sure it would boot. Raspbian Lite booted without issue on all six boards. I did the bare minimum OS configuration on each system then I was ready to go. It was time to install Kubernetes.

One thing I learned in the late 90s was that rebuilding Linux boxes was something you had to get good at. If you wanted to run on tiny hard disks cleaning out cruft from packages was a regular task. Sometimes it was faster to rebuild the box than remove all the cruft after a round of experiments. One thing I learned in the 2010s was that if you automated your configuration management and software deployment undoing things was as simple as a flag. There are a lot of moving pieces to building a Kubernetes cluster. I want the same consistency in my software that I had in my hardware. The Kubernetes cluster setup and management should be automated to within an inch of its life.

If you know me, you know my automation tool of choice is **[Ansible](/tags/ansible/)**. The only time I want to manually SSH into these systems is to fix something very abnormal. There is [kubespray](https://kubespray.io/) but it doesn't address ARM. Kubespray is also overkill for what I'm trying to do. It's also a little heavy for the Raspberry Pi platform itself. I decided to set off and build my own Ansible automation.

rak8s is born. [**rak8s**](https://rak8s.io/) (pronounced rackets) is an Ansible playbook to deploy Kubernetes to Raspberry Pis. The idea of rak8s is two-fold, automate and educate:

* Help automate Kubernetes cluster management on Raspberry Pi ([lowering the barrier to entry of Kubernetes](/kubernetes-getting-started/))
* Help others who aren't sure where to get started with Kubernetes deployments
* Aid people who understand Ansible but can't quite wrap their heads around Kubernetes

rak8s is a little rough around the edges but I intend to improve on it. It's open source on GitHub so feel free to submit your PRs. Step one (automate) is done, step two (educate) is still a work in progress (and likely always will be). Huge thanks to [Alex Ellis for his k8s on raspbian](https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975) guide as it served as a solid foundation for rak8s.

My setup is far from perfect but it's great for under $400. It's hard to beat a Kuberenetes cluster that can fit in a shoebox and is stone silent too. Power distribution in my makeshift office is becoming an issue. I likely need another UPS. Power consumption by the cluster is also interesting. Having all the Raspberry Pis plugged into a single power brick creates a single point of failure. The draw on that power brick gets maxed out shortly after a kubectl apply sometimes too. Adding another power brick plugged into a different UPS should fix that.

While I highly recommend Kubernetes on Raspberry Pi, there are some trade-offs to running Kubernetes on ARM systems. A lot of the Kubernetes tools that people know and love don't support ARM (yet). But, after talking with some folks at Weave and Heptio there is a desire to get their tooling on ARM architecture. As a member of the Kubernetes community, I can help push ARM adoption along. I offered my help and access to my cluster should anyone want to work towards the goal of getting their tools on ARM-powered Kubernetes clusters.



I am very happy with the progress I made in a handful of evenings on building and deploying a Raspberry Pi Kubernetes cluster. I'm hopeful that [rak8s](https://rak8s.io/) will turn into a full-blown project. Hopefully, it will allow others to learn and improve their skills while getting into Kubernetes on Raspberry Pi. PRs welcome and happy k8s'ing!


