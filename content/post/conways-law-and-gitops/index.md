+++

author = "Chris Short"
date = 2022-06-20
description = "Conway's Law and GitOps go hand in hand."
draft = false
slug = "conways-law-and-gitops"
tags = ["GitOps", "Conway's Law", "system", "management", "communication", "structure", "communicate"]
ShowTOC = false
title = "Conway's Law and GitOps"
[cover]
image = "https://shortcdn.com/chrisshort/laws.webp"

+++

{{< carbon >}}

*Pulled directly from the introduction of [DevOps'ish 272](https://devopsish.com/272)*

[Conway's Law](https://melconway.com/Home/Conways_Law.html) and [GitOps](https://opengitops.dev/) are two things that go hand in hand. I'd like that not to be the case, but in building and working with an upcoming demo of multi-cluster GitOps, I'm worried GitOps might not reach an escape velocity over Conway's Law.

[Conway's Law](https://melconway.com/Home/Conways_Law.html) states, "Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure." This might seem natural but think about the different ways we communicate now. E-mail, text messages, phone calls, Slack, Discord, Twitter, etc. are all communication tools that serve various purposes. But, in GitOps, whether you design around a good developer experience (using git as the only interface) or design around a minimalistic amount of tooling (one secret management solution), that tooling has to fit within Conway's Law usually.

For example, if you want to use an existing tool with GitOps, that's entirely possible. But, that tool, let's say a key management system (KMS), has rules of its use, and automating them will need you to build a system that can interface well with the team that runs that system. If you're lucky, you can run your Vault in your namespace and minimize handoffs. This is the only way to escape Conway's Law in GitOps. Decoupling the entire system from the rest of the org. Bring everything you need as a team to the platform, and running it all yourself will minimize the communication lanes, but I doubt it will reduce your system's footprint.

Sure. You can then dictate what communications need to occur to make system changes. But, this will create a lot of overlap, and at some point, someone in compliance or finance or both will say, "Everyone is running their own Vaults with different policies and availability metrics. We could run Vault Enterprise and have all our regulatory needs met and HA." Now you have to communicate outside your team. That will lead to you building a system that looks like the communication structure of your organization. This isn't bad. It's something you need to be aware of.

This is when Conway's Law and GitOps intersect. The moment you start to make optimizations to the system at scale. Secrets management is a crucial yet still engineering-intensive part of GitOps. Who manages the key management system? Who creates an "inception secret" that opens the door to seed all the other secrets? What processes create a management cluster? All these answers will come back to Conway's Law. It's like fate or Darth Vader telling Luke Skywalker, "Let's rule the Galaxy together as Father and Son!" This is something that isn't pleasant, but we have to accept it.

There are specific components you need to make a GitOps workflow. These foundational steps should be on a trail map of their own for GitOps. CNCF, Weaveworks, or Amazon could make it. That would be the top half of the page. The bottom half of the page lies this intro about the intersection of GitOps and Conway's Law.

