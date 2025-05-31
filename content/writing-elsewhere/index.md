---
aliases:
- publications
author: Chris Short
date: "2018-08-14"
description: Writing that Chris Short has done outside of his own web properties
title: Writing Elsewhere
---

## CIQ

### [Open Source Thrives on Contribution, Not Just Consumption](https://ciq.com/blog/open-source-thrives-on-contribution-not-just-consumption/)

> But if you build on open source, you have a responsibility to the communities making that software possible. That means investing time. It means showing up consistently. It means treating maintainers and contributors as collaborators—not as an extension of your dev team, and definitely not as a marketing bullet point.

## Kubernetes

### [Kubernetes Legacy Package Repositories Will Be Frozen On September 13, 2023](https://kubernetes.io/blog/2023/08/31/legacy-package-repository-deprecation/)

**Authors:** Bob Killen (Google), Chris Short (AWS), Jeremy Rickard (Microsoft), Marko Mudrinić (Kubermatic), Tim Bannister (The Scale Factory)

> On August 15, 2023, the Kubernetes project announced the general availability of the community-owned package repositories for Debian and RPM packages available at pkgs.k8s.io. The new package repositories are replacement for the legacy Google-hosted package repositories: apt.kubernetes.io and yum.kubernetes.io. The announcement blog post for pkgs.k8s.io highlighted that we will stop publishing packages to the legacy repositories in the future.

### [k8s.gcr.io Redirect to registry.k8s.io - What You Need to Know](https://kubernetes.io/blog/2023/03/10/image-registry-redirect/)

**Authors**: Bob Killen (Google), Davanum Srinivas (AWS), Chris Short (AWS), Frederico Muñoz (SAS Institute), Tim Bannister (The Scale Factory), Ricky Sadowski (AWS), Grace Nguyen (Expo), Mahamed Ali (Rackspace Technology), Mars Toktonaliev (independent), Laura Santamaria (Dell), Kat Cosgrove (Dell)

> On Monday, March 20th, the k8s.gcr.io registry will be redirected to the community owned registry, registry.k8s.io .

### [Prow and Tide for Kubernetes Contributors](https://www.kubernetes.dev/blog/2022/12/12/prow-and-tide-for-kubernetes-contributors)

**Authors**: Authors: Chris Short, Frederico Muñoz

> In my work in the Kubernetes world, I look up a label or Prow command often. The systems behind the scenes ([Prow](https://prow.kubernetes.io/) and [Tide](https://pkg.go.dev/sigs.k8s.io/prow/cmd/tide)) are here to help Kubernetes Contributors get stuff done.

### [Updated: Dockershim Removal FAQ | Kubernetes](https://kubernetes.io/blog/2022/02/17/dockershim-faq/)

**Authors**: Dockershim Adhoc Docs Team

> This is an update to the original [Dockershim Deprecation FAQ](https://kubernetes.io/blog/2020/12/02/dockershim-faq/) article, published in late 2020.
>
> This document goes over some frequently asked questions regarding the deprecation and removal of dockershim, that was [announced](https://kubernetes.io/blog/2020/12/08/kubernetes-1-20-release-announcement/) as a part of the Kubernetes v1.20 release. For more detail on what that means, check out the blog post [Don't Panic: Kubernetes and Docker](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/).

### [Kubernetes is Moving on From Dockershim: Commitments and Next Steps](https://kubernetes.io/blog/2022/01/07/kubernetes-is-moving-on-from-dockershim/)

**Authors**: Sergey Kanzhelev (Google), Jim Angel (Google), Davanum Srinivas (VMware), Shannon Kularathna (Google), Chris Short (AWS), Dawn Chen (Google)

> Kubernetes is removing dockershim in the upcoming v1.24 release. We're excited to reaffirm our community values by supporting open source container runtimes, enabling a smaller kubelet, and increasing engineering velocity for teams using Kubernetes...

### [How to choose a SIG as a non-code Kubernetes contributor](https://www.kubernetes.dev/blog/2021/07/09/how-to-choose-a-sig-as-a-non-code-kubernetes-contributor/)

> My first work in the cloud native world was working with the SIG Docs team. I helped review some documentation and learned some of their processes. I wasn't there long before I found out about another great SIG: Contributor Experience. Contributor Experience is all about improving the workflow, removing bottlenecks, and generally making Kubernetes a great project to contribute your time and effort. I knew ContribEx (as it's called) is where I could make an impact.

## AWS

### [Amazon EKS and Kubernetes sessions at AWS re:Invent 2023](https://aws.amazon.com/blogs/containers/amazon-eks-and-kubernetes-sessions-at-aws-reinvent-2023/)

> AWS re:Invent 2023 is right around the corner, offering a full track of sessions focused on Kubernetes and cloud-native related topics. To help you discover and select the right sessions for you, we’ve listed the sessions below grouped by core focus area with links to the re:Invent sessions catalog.

### [Changes to the Kubernetes Container Image Registry](https://aws.amazon.com/blogs/containers/changes-to-the-kubernetes-container-image-registry/)

> The release of Kubernetes 1.25 was when [it was first announced](https://kubernetes.io/blog/2022/08/23/kubernetes-v1-25-release/##moved-container-registry-service-from-k8s-gcr-io-to-registry-k8s-io) that the Kubernetes project would be updating its official container image registry endpoint from k8s.gcr.io to the community owned registry, registry.k8s.io. The goal was to eventually sunset the old registry over time. However, as [highlighted on the official Kubernetes website](https://kubernetes.io/blog/2023/02/06/k8s-gcr-io-freeze-announcement/), this changeover has since been expedited to adopt a more sustainable infrastructure model with the first set of changes happening on **Monday March 20, 2023**. This post covers what changes are happening, why they're happening, important dates to keep in mind, and what actions you need to take.

### [Amazon EKS now supports Kubernetes 1.23](https://aws.amazon.com/blogs/containers/amazon-eks-now-supports-kubernetes-1-22/)

> The Amazon Elastic Kubernetes Service (Amazon EKS) team is happy to announce support for Kubernetes 1.23. Amazon EKS and Amazon EKS Distro can now run Kubernetes version 1.23, with support in Amazon EKS Anywhere launching soon after.

### [Amazon EKS now supports Kubernetes 1.22](https://aws.amazon.com/blogs/containers/amazon-eks-now-supports-kubernetes-1-23/)

> The Amazon Elastic Kubernetes Service (Amazon EKS) team is pleased to announce support for Kubernetes 1.22. Amazon EKS, Amazon EKS Distro, and Amazon EKS Anywhere can now run Kubernetes version 1.22. The upstream project theme for this release is “Reaching New Peaks.” The theme for the release, according to release lead [Savitha Raghunathan](https://github.com/savitharaghunathan), is due to what she described as: “in spite of the pandemic and burnout, Kubernetes 1.22 had the highest number of enhancements in any release.” This release does bring a significant number of API changes, a Kubernetes release cadence change, and many other updates. Thank you for all the work the upstream [Kubernetes 1.22 Release Team](https://github.com/kubernetes/sig-release/blob/master/releases/release-1.22/release-team.md) did to bring this release to the greater cloud-native ecosystem.

## Ansible

> Chris Short's ansible.com blog posts are available here: <https://www.ansible.com/blog/author/chris-short>

### [Ansible Operators October 2019 Update](https://blog.openshift.com/ansible-operators-october-2019-update/)

> During this month's Operator Framework SIG Meeting, I presented an update on the latest happenings with Ansible Operators ([slides here](https://speakerdeck.com/chrisshort/operator-framework-sig-ansible-operators-october-2019-update)). I touched on a few topics that I wanted to share with the greater universe.

### [How DevOps is like auto racing](https://developers.redhat.com/blog/2019/08/22/how-devops-is-like-auto-racing/)

> To achieve their goals, race teams don't think from start to finish; they flip the table to look at the race from the end goal to the beginning. They set a goal, a stretch goal, and then work backward from that goal to determine how to get there. Work is delegated to team members to push toward the objectives that will get the team to the desired outcome.

### [The people, processes, and tools of DevOps in 2018](https://opensource.com/article/18/12/top-devops)

Check out the 2018 DevOps dirty dozen—the 12 most popular articles from the year.

### [5 Firefox extensions to protect your privacy](https://opensource.com/article/18/7/firefox-extensions-protect-privacy)

Keep your browser from leaking your data with these privacy-focused tools.

### [5 military phrases for DevOps practitioners](https://opensource.com/article/18/7/military-phrases-devops)

Many of the armed forces' colorful euphemisms are equally at home in DevOps.

### [16 blogs and newsletters to follow for DevOps practitioners](https://opensource.com/article/18/6/devops-blogs-newsletters-follow)

It's important to keep up with trends in this fast-paced world of technology.

### [Navigating the container security ecosystem](https://opensource.com/article/18/5/navigating-container-security-ecosystem)

As container adoption increases, security automation will become a critical element of every organization's workflow.

### [DevOps hiring strategies to attract top talent](https://opensource.com/article/18/5/devops-hiring-strategies-attract-top-talent)

Top DevOps recruiter Ken Middleton offers insight on how to attract and hire the best candidates.

### [DevSecOps and Containers: The Numbers Don't Lie](https://blog.sonatype.com/numbersdontlie)

Container Security is quickly becoming a segment ripe for standardization and simplification. Given the recent explosive growth of Kubernetes and the creation of new container runtimes in the past year, this should not come as a surprise.

### [How to create a cron job with Kubernetes on a Raspberry Pi](https://opensource.com/article/18/3/kubernetes-cron-job-tasks)

Find a better way to run your scheduled tasks efficiently and reliably.

### [9 tech influencers you should know](https://opensource.com/article/18/3/list-tech-influencers)

These inspiring technology leaders are creating positive change and making a difference in the industry every day.

### [Tips and resources for learning Kubernetes](https://opensource.com/article/17/12/resources-learning-kubernetes)

Regardless of how you decide to begin, it's time to start learning Kubernetes.

### [Who drives culture in DevOps?](https://opensource.com/article/17/12/who-drives-culture-devops)

Culture change can be driven from the top down or the bottom up, but one is more effective than the other.

### [10 must-read DevOps resources](https://opensource.com/article/17/12/10-must-read-devops-books)

Whether you're building up your DevOps team or just starting your organization's digital transformation, these resources will help guide the way.

### [What's your DevOps problem?](https://opensource.com/article/17/10/dear-devops)

Announcing Dear DevOps and a focus on the intersection of open source and the DevOps community

### [5 laws every aspiring DevOps engineer should know](https://opensource.com/open-organization/17/5/5-devops-laws)

Good engineers become great engineers when they follow these rules.

### [Golang to the rescue: Saving DevOps from TLS turmoil](https://opensource.com/article/17/4/testing-certificate-chains-34-line-go-program)

Find out about a use case that created a need for testing certificate chains, appropriate web server security settings, and the Go code used for testing.

### [Improve your DevOps security game with Ansible Vault](https://opensource.com/article/16/12/devops-security-ansible-vault)

### [Tangible Intangibles: Questions to Ask While Being Interviewed](https://medium.com/@chrisshort/tangible-intangibles-questions-to-ask-while-being-interviewed-c13887bb9854)
