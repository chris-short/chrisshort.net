+++

author = "Chris Short"
categories = ["eBPF", "2022"]
date = 2022-07-31T07:00:00Z
description = ""
draft = false
slug = "intro-to-ebpf"
tags = ["eBPF"]
ShowTOC = true
title = "Intro to eBPF"
[cover]
image = "https://shortcdn.com/file/devopsish/ebpf-logo.webp"
alt = "eBPF"
caption = "eBPF bee is named eBee"

+++

{{< carbon >}}

*This introdution to eBPF is adapted from the introduction to [DevOps'ish 278][23]*

I occasionally ask for writing prompts from folks on Twitter for DevOps'ish. Sometimes asking on social media works well. Other times it's giving someone a good URL and still scratching my head about what to write. But for [DevOps'ish 278][23], the people have spoken. They want to learn more about **eBPF**.

## What is eBPF?

> eBPF (which is no longer an acronym for anything) is a revolutionary technology with origins in the Linux kernel that can run sandboxed programs in a privileged context such as the operating system kernel. It is used to safely and efficiently extend the capabilities of the kernel without requiring to change kernel source code or load kernel modules.

## How does eBPF work?

> eBPF programs are event-driven and are run when the kernel or an application passes a certain hook point. Pre-defined hooks include system calls, function entry/exit, kernel tracepoints, network events, and several others.

There are two sites you should bookmark regarding eBPF right off the bat:

- [https://ebpf.foundation/][1] (Linux Foundation site)
- [https://ebpf.io][2] (Run by Daniel Borkmann)

At the time of writing, these two sites look strikingly similar, but different folks run them. For "reasons," the .foundation site decided to start as a fork of the .io site. Yes, I know a few SEOs reading this spit their drink of choice just now. Calm thyself. Your device is probably waterproof ¯\\\_(ツ)\_/¯.

If you're unfamiliar with [Isovalent][3], the folks who make an enterprise-ready [Cilium][4] product (Cilium the Container Network Interface (CNI)), it's where my peeps [Liz Rice][5] and [Duffie Cooley][6] work. If you recall, I sat down with them [earlier this year to chat about what they're up to pre-KubeCon EU 2022][7]. The tag line on Isovalent's site is "eBPF-based networking, security, and observability." You can do a lot of hard work with eBPF.

If you're like me and have been in the guts of the kernel before adding and removing modules to optimize the system or make unique hardware work, you know this can often be very disruptive or damaging. eBPF enables you to muck with the kernel in new and exciting ways without running a single modprobe command or even rebooting. They are generally safer than kernel modules as well.

You write eBPF programs that trigger on different events in the Linux kernel or prevent them from happening altogether. As a result, eBPF is VERY powerful because it's so ingrained where all the magic happens (the Linux kernel). eBPF lets you write custom code in the kernel. Since the activity occurs in the kernel, it often makes eBPF programs fast and efficient. The programs you write, for example, could intercept network access before even hitting the network stack or provide detailed execution information on calls being made by what programs for observability.

Here's where a lot of folks learning paths diverge. Some folks will want to read all the things. The good news is that the [BPF and XDP Reference Guide][8] and [HOWTO interact with the BPF subsystem][9] are _fantastic_ deep dives. Others would love to see some implementations. If you want to pick and choose, check out the [awesome-ebpf][10] repo. Want to see some implementations? First, I recommend watching [A Beginner's Guide to eBPF Programming with Go by Liz Rice at GOTO 2021][11]. Also, [What is eBPF, anyway, and why should Kubernetes admins care?](https://www.groundcover.com/blog/what-is-ebpf) is a good reference if you're going to be using eBPF in the context of Kubernetes. 

## eBPF Apps

What kind of programs are out there taking advantage of eBPF? Quite a few, actually:

- [pixie][12]: Instant Kubernetes-Native Application Observability (aka FM: F'ing Magic)
- [boopkit][13]: Linux eBPF backdoor over TCP. Spawn reverse shells, RCE, on prior privileged access. Less Honkin, More Tonkin.
- [Calico][14]: an open source networking and network security solution for containers, virtual machines, and native host-based workloads (their [eBPF page has pretty pictures][15])
- [kubectl trace][16]: kubectl plugin that allows you to schedule the execution of bpftrace programs in your Kubernetes cluster
- [bpftrace][17]: High-level tracing language for Linux systems
- [Falco][18]: Falco eBPF probe is a viable option in environments where kernel modules are not trusted or are not allowed but eBPF programs are
- [SysmonForLinux][19]: Sysmon For Linux is a port of the Windows Sysmon tool, with the driver replaced by eBPF programs
- [tracee][20]: Linux Runtime Security and Forensics using eBPF
- [ebpf-for-windows][21]: eBPF implementation that runs on top of Windows
- [Katran][22]: Facebook-created network load balancer

## Is eBPF worthy of they hype?

Yes! eBPF is good stuff. I am waiting for a project to bust out one of the above projects to dive into performance issues. "Any sufficiently advanced technology is indistinguishable from magic" applies here. But, eBPF is a rubber mallet, and you can't fix EVERYTHING with it. You can cover a lot of sins with eBPF. You can FIND damn near anything with it, and that's as good a start as anyone can give you.

[1]: https://ebpf.foundation/
[2]: https://ebpf.io
[3]: https://isovalent.com/
[4]: https://cilium.io/
[5]: https://twitter.com/lizrice
[6]: https://twitter.com/mauilion
[7]: https://chrisshort.net/video/aws-container-days-eu-2022-day-3/#cilium-on-eks-anywhere--liz-rice-chief-open-source-officer-isovalent---duffie-cooley-field-cto-isovalent
[8]: https://docs.cilium.io/en/latest/bpf/
[9]: https://www.kernel.org/doc/html/latest/bpf/bpf_devel_QA.html
[10]: https://github.com/zoidbergwill/awesome-ebpf
[11]: https://youtu.be/uBqRv8bDroc
[12]: https://github.com/pixie-io/pixie
[13]: https://github.com/kris-nova/boopkit
[14]: https://projectcalico.docs.tigera.io/about/about-calico
[15]: https://projectcalico.docs.tigera.io/about/about-ebpf
[16]: https://github.com/iovisor/kubectl-trace
[17]: https://bpftrace.org/
[18]: https://falco.org/blog/choosing-a-driver/#ebpf-probe
[19]: https://github.com/Sysinternals/SysmonForLinux
[20]: https://github.com/aquasecurity/tracee
[21]: https://github.com/microsoft/ebpf-for-windows
[22]: https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/
[23]: https://devopsish.com/278/

{{< eo_signup >}}
