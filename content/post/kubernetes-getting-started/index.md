+++
author = "Chris Short"
categories = ["Kubernetes"]
date = 2017-11-30T20:50:00Z
description = "How do you get started with 'an open-source system for automating deployment, scaling, and management of containerized applications'?"
draft = false
slug = "kubernetes-getting-started"
tags = ["DevOps", "kubernetes", "minishift", "minikube", "coreos", "tectonic", "cloud native"]
title = "Kubernetes: Getting Started"
image = "/kubernetes-getting-started/kubernetes-getting-started.png"

+++

Getting Started with [Kubernetes](https://kubernetes.io/) sounds like quite a daunting feat. How do you get started with "an open-source system for automating deployment, scaling, and management of containerized applications"? Let's examine Kubernetes' beginning. Containers have been in use for a very long time in the Unix world. Linux containers are popular thanks to projects like Docker. Google created Process Containers in 2006 and later realized they needed a way to maintain all these containers. Borg was born as an internal Google project and many tools sprang from its users. Omega was then built iterating on Borg. Omega maintained cluster state separate from the cluster members thus breaking Borg's monolith. Finally, Kubernetes sprung from Google. Kubernetes is now maintained by [Cloud Native Computing Foundation's](https://www.cncf.io/) members and contributors.

{{< mc >}}

## ELI5

If you want an "Explain Like I'm Five" guide to what Kubernetes is and some of its primitives take a look at "[The Children's Illustrated Guide to Kubernetes](https://kubernetes.io/blog/2016/06/illustrated-childrens-guide-to-kubernetes/)". The Guide ([PDF](https://cdn.chrisshort.net/The-Illustrated-Childrens-Guide-to-Kubernetes.pdf)) features a cute little giraffe that represents a tiny PHP app that is looking for a home. Core Kubernetes primitives like [pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/), [replication controllers](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/), [services](https://kubernetes.io/docs/concepts/services-networking/service/), [volumes](https://kubernetes.io/docs/concepts/storage/volumes/), and [namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) are covered in the guide. It's a good way to wrap your mind around the why and how of Kubernetes. Fair warning though, it does not cover Kubernetes networking components.

{{< adsense-inarticle >}}

Let's break down the two areas you can get started with Kubernetes. The first area is maintaining or operating the Kubernetes cluster itself. The second area is deploying and maintaining applications running in a Kubernetes cluster. The distinction here is to provide compartmentalization when learning Kubernetes. To be proficient at Kubernetes you should know both but, you can get started knowing one area or the other.

## Kubernetes Innards

To learn how the internals of Kubernetes works I would recommend [Kelsey Hightower's "Kubernetes The Hard Way"](https://github.com/kelseyhightower/kubernetes-the-hard-way). It is a hands-on series of labs to bringing up Kubernetes with zero automation. If you want to know how to stand up all the pieces that make a full Kubernetes cluster then this is the path for you.

## Kubernetes Operations

If you want to get started with deploying containerized apps to Kubernetes then [minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) is the way to go. minikube is a tool that helps you deploy Kubernetes locally. You have to be able to run a hypervisor on your host but most modern devices can. Each OS is different with regards to setting up everything for minikube. But, you can run minikube on Linux, macOS, or Windows so sky's is the limit. Deploying Docker (or rkt) containers to minikube is easy. It's the things that make your container more resilient in a Kubernetes cluster.

{{< adsense-inarticle >}}

After kicking the tires on minikube if you feel like it is missing a few components then I would recommend [minishift](https://github.com/MiniShift/minishift) or CoreOS Tectonic. minishift is the minikube of Red Hat OpenShift. OpenShift has a fantastic UI and many features that make Kubernetes a little better. [CoreOS Tectonic](https://coreos.com/tectonic/) is a more opinionated Enterprise-ready Kubernetes. Luckily, CoreOS Tectonic has a free sandbox version. The nice thing about CoreOS Tectonic is the networking and monitoring that come baked into this iteration of Kubernetes. CoreOS has been very thoughtful about the decisions made in Tectonic and it shows.

## Conclusion

Regardless of how you get started learning Kubernetes now is the time to start. There are so many places to deploy Kubernetes now it doesn't make sense to not kick the tires now before determining if it is a great fit for your use cases. Before you deploy to AWS, Google Cloud, or Azure make sure you're not wasting your time.

{{< adsense-matched >}}