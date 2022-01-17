+++
author = "Chris Short"
categories = ["2021", "GitOps"]
date = 2021-12-06T07:00:00Z
description = "GitOps is a prescriptive way of implementing DevOps. You will not succeed in using GitOps if you haven't embraced some DevOps philosophies along the way."
draft = false
slug = "gitops-an-implementation-of-devops"
tags = ["GitOps", "DevOps", "system", "state", "automation", "teams", "process", "automatically", "change", "GitOps Working Group", "code", "IaC", "deploys", "tooling", "merged", "pull", "source", "approvals", "version", "safeties", "Continuous Deployment", "infrastructure", "immutability", "versioning", "history", "commit", "software agents", "GitOps Principles", "declarative", "OpenGitOps"]
title = "GitOps: An implementation of DevOps"
[cover]
image = "https://c.chrisshort.net/file/chrisshort/opengitops-icon-color.svg"
imagealt = "Open GitOps logo"
showTOC = false

+++

{{< carbon >}}

*This post does not reflect the views of OpenGitOps or the GitOps Working Group. These are my opinions from years of experience in DevOps and in working with GitOps.*

I realized the other day; I talk a lot about [GitOps](https://devopsish.com/tags/gitops/) in my newsletter, [DevOps'ish](https://devopsish.com/). But I haven't written much at all about it here or anywhere else. [There's a reason for that](https://www.youtube.com/playlist?list=PLaR6Rq6Z4IqfGCkI28cUMbNhPhsnj4nq3). But now is time to put some words on this site about GitOps and how I view it in relation to [DevOps](https://devopsish.com/what-is-devops/).

I spoke about GitOps as far back as 2018 on [one of The New Stack's podcasts](https://thenewstack.io/the-best-ci-cd-tool-for-kubernetes-doesnt-exist/) (at the time, I called GitOps the Holy Grail of DevOps). I've written about it in my [2019](https://chrisshort.net/2019-learnings-2020-expectations/) and [2020](https://chrisshort.net/2020-learnings-2021-expectations/) end-of-year blog posts. As of December 2021, I think it's safe to say GitOps has landed in the market in a big way.

The second-ever [GitOpsCon](https://events.linuxfoundation.org/gitopscon-north-america/) took place on Day 0 of [KubeCon + CloudNativeCon NA 2021](https://www.cncf.io/events/kubecon-cloudnativecon-north-america-2021/) in Los Angeles. According to stats from CNCF, it was by far one of the most popular Day 0 events at the conference. An [ArgoCon](https://argoproj.github.io/argocon21/) is coming up too.

{{< eo_signup >}}

[OpenGitOps](https://opengitops.dev/), a group I'm a part of, guided by the [GitOps Working Group](https://github.com/gitops-working-group/gitops-working-group) (also part of), recently published version 1 of the [**GitOps Principles**](https://opengitops.dev/#principles). I want to frame those principles in how DevOps-oriented teams work under the premise of GitOps. If you want to talk about how multi-discipline DevOps is, the GitOps Working Group is under the [CNCF TAG App-Delivery](https://github.com/cncf/tag-app-delivery) umbrella. I'll probably write something about that later.

> ## Declarative: A system managed by GitOps must have its desired state expressed declaratively.

In essence, declarative, in this context, means Infrastructure-as-Code (IaC). IaC is often a stop along the DevOps journey. GitOps provides a forcing function as IaC is a tenet. But, GitOps takes this a step further. Infrastructure and application code deploys can occur with the same GitOps tooling. Dev and Ops can have independent sources of truths (unique repos, branches, etc.) or even separate GitOps tooling (example: platform teams can use [Flux](https://fluxcd.io/) while development teams use [ArgoCD](https://argoproj.github.io/cd/)). 

There are several ways to make this work. I'm not going to deep dive into them in this article; look for a future post on that. Regardless, the state of your system is declared. GitOps tooling will put the system into that declared state.

> ## Versioned and Immutable: Desired state is stored in a way that enforces immutability, versioning, and retains a complete version history.

Auditors are always my first thought here. Versioning the state of your system is a HUGE win for a lot of folks. Think about having the ability to identify the state of your system through a single interface. You can then turn around and have your security teams sign off on system changes by having them in the approval process. Retaining that complete version history allows for rollbacks, thus reducing potential foot guns. Those [commits have hashes](https://www.mikestreety.co.uk/blog/the-git-commit-hash). That's powerful stuff.

Most importantly, though, is the immutability of your system. No more logging into systems, you can set up a break glass process, but you really shouldn't have to do that unless something goes haywire. Using Git for this purpose means there's a clearly defined state, and the only way to change that is with another commit getting merged.

> ## Pulled Automatically: Software agents automatically pull the desired state declarations from the source.

GitOps plays no games. It will pull the defined state from the source as soon as changes are detected. Pulled automatically means that you'll have code running on your systems, watching for changes to your repositories, and applying those changes once merged into the specified branch. The pull model is imperative in GitOps. Your approvals happen as part of the commit process. Deploys occur immediately once merged into the trunk. If the system is out of whack and in distress, you can safely roll back to the last known good state.

Enabling a sole source of truth for approvals, change management, and automation is a compelling benefit of GitOps. Pulling automatically allows the change management process to exist as a part of the approvals leading to the system being placed into the declared state. This function also forces teams to think about safeties that need to exist for good deployment practices for their environments.

> ## Continuously Reconciled: Software agents continuously observe actual system state and attempt to apply the desired state.

Continuous reconciliation goes hand-in-hand with pulling automatically. For over a decade now, we've known that [continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment) (CD) is the place we all want to be or get to on our DevOps journeys. Our systems do the heavy lifting for us once changes merge. This fully automatic functionality allows for the speed and agility DevOps groups desire. It intends to ensure that changes are iterative on the more extensive system. This often leads to more frequent, smaller, and more manageable changes occurring in the system. Increasing feature velocity while decreasing the potential risk of changes to the system is a DevOps lesson learned.

### Change Challenge

This automation is often where we find the most resistance in DevOps. Letting go of manual deploys, "we've always done it this way," and changing processes is often met with a lot of resistance. People resist change by nature. But, last I checked, there's a talent shortage, especially in the tech sector. A continuous ask is to do more with less. This necessitates tried and true automation practices.

Building a GitOps pipeline will help organizations scale up quicker. You must build safeties into the process. Those safeties are what will help you build trust in automation. We cannot afford to have artisanal, hand-crafted deployments anymore. As an industry, we must reduce toil and improve our ability to be nimble.

## Conclusion

[GitOps](https://opengitops.dev/), as an implementation of [DevOps](https://devopsish.com/), will take you to something near DevOps nirvana rather quickly. The more you use it, the more folks will tap into it. Thus, creating this beautiful flywheel of automation. This flywheel will increase automation adoption with proper care and feeding in your environments, which will allow your teams to focus on more problems as they arise in the future. Then automate them away.
