+++

author = "Chris Short"
categories = ["DevOps", "Kubernetes", "Linux", "2022"]
date = 2022-09-16T11:30:00Z
description = "My notes from a DevOpsDay Chicago 2022 Open Space suggestion: 'Container Conundrum: Pain points around containers'"
draft = false
slug = "container-conundrum-devopsdays-chicago-2022"
tags = ["Open Space", "cloud", "Container Conundrum", "team", "security", "pain", "Vault", "Chicago", "agnostic", "problems", "DevOpsDays", "secrets", "containers", "Kubernetes", "clusters", "open source", "developers", "environments"]
ShowTOC = false
title = "Container Conundrum: DevOpsDays Chicago 2022 Open Space Notes"
[cover]
image = "https://shortcdn.com/chrisshort/shipping-container-pile.webp"
alt = "Shipping containers piled high"
caption = "Photo by [Chanaka](https://www.pexels.com/photo/cargo-container-lot-906494/)"

+++

{{< carbon >}}

I found a topic that I'm going to suggest for an Open Space at every DevOpsDays I go to from this point forward: "**Container Conundrum: Pain points around containers**"

These notes are presented here without opinion. Distilling these notes into a concise narrative will be the topic for an introduction to an upcoming DevOps'ish newsletter. Please subscribe today!

{{< eo_signup >}}

I think the best way to look at these notes is to assume that each bullet point is a pain point.

One pair of folks in the Open Space were building their artisanal Kubernetes clusters by hand across multiple cloud providers (AWS, GCP, Azure, and IBM Cloud). Rolling your own Kubernetes *still* sounds awful. Managing everything in a cloud-agnostic way, while possible, is horrifically complicated, and you end up leaning on upstream contributions hard.

Meanwhile, that same team said most of their problems were staying cloud agnostic and using IBM's cloud offerings. How did they wind up in this conundrum? When they needed more compute for a project, procurement would ask all the clouds for their best rates. That's what the team had to work with. They did not influence that decision-making. I mention this here because most of the Open Space was dominated by this team's problems, comments, and questions to the group.

* Security
  * the container itself
  * the kernel it's running on
  * the orchestrator
  * and all the code in the container
  * no one running OPA/Kyverno
  * no one doing least privilege access (we had just listened to a great ignite talk about least privelege)
  * Tooling in use:
    * Sops for Secrets (looking at open source Vault)
    * Open Source Hashicorp Vault (with an understanding its a sev 1 if it goes down)
    * Parameter Store → External Secrets → Plain K8s Secrets
    * Anecdote about Vault: app roles are more narrowly scoped
    * Config Maps with an array of passwords for applications connected up with Vault and config management (I thought this was kinda brilliant)
  * One story featured a security team at an organization becoming a "non-operational" security team
    * Their roles changed from helping to fix problems to merely identifying them to be fixed by someone else
    * Engineers' workloads increased as a result
    * Speaks to complexity and voracity of security right now
* R/O Filesystems
  * How to manage them?
  * Verifying it's actually read only?
  * Security practices around storage
  * Getting developers to understand writes have to occur through APIs elsewhere
    * Read only storage has many benefits for scaling
    * No other real incentives for developers; it's a pain point
* Environments
  * Dev, staging, prod consistency
  * Issues with local development (Machine capacities are an issue)
  * Getting devs to use same/similar Dockerfile across environments
  * Getting developers used to app configs being separate from code is still a problem
  * A lot of tracing and metrics tooling but not always helpful or fully utilized
* Contention against old ways vs. new ways
  * VMs vs. containers
  * Complexity but scale is finally achievable
* Debugging production is challenging in stripped down containers (no shells, dev tools, etc.)
  * `kubectl debug` is helping but not everyone is on a version that supports it yet
* Suggested Solutions
  * Creating Champions in orgs are helpful
* Other anecdotes
  * Cloud agnostic usage is still a goal; one team was still rolling their own K8s clusters
  * Tons of groans around upgrading Kubernetes
  * People really don't want to manage control planes

If you happened to be in the same Open Space and would like to clarify some points, please feel free to reach out or submit [Pull Requests via GitHub](https://github.com/chris-short/chrisshort.net/tree/main/content/post/container-conundrum-chicago-open-space). Thank you!
