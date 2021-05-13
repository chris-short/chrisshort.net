+++
author = "Chris Short"
categories = ["DevOps", "Kubernetes", "Open Source", "2020"]
date = 2020-10-21T07:00:00Z
description = "Learning YAML might be table stakes, but we still need to strive for a better solution. One that's more human friendly."
draft = false
ShowTOC = false
slug = "fear-and-loathing-in-yaml"
tags = ["YAML", "DevOps", "markup", "Puppet", "CFEngine", "Kubernetes", "human-readable", "machine-readable", "code", "YAML spec", "language", "XML", "JSON", "systems", "infrastructure", "yq", "syntax", "git", "open source"]
title = "Fear and Loathing in YAML"
[cover]
image = "/img/posts/pexels-christina-morillo-1181325.jpg"

+++

> This post was originally written as the introduction to [DevOps'ish 188](https://devopsish.com/188/), has been modified based on feedback, and deemed worthy to share as its own blog post.
>
> Photo by [Christina Morillo](https://twitter.com/wocintechchat) from [Pexels](https://www.pexels.com/photo/adult-computer-eyewear-female-1181325/)

[We kinda went down a rabbit hole](https://twitter.com/brunoborges/status/1315230767207784450) the other day when I suggested folks check out [*yq*](https://dev.to/vikcodes/yq-a-command-line-tool-that-will-help-you-handle-your-yaml-resources-better-8j9), "The aim of the project is to be the jq or sed of yaml files." First, there's nothing wrong with this project. I like it, I find the tool useful, and that's that. But the great debate started over our lord and savior, [YAML](https://yaml.org/). Yeah, I know, XML vs. JSON vs. YAML vs. TOML vs. the next thing is a tired and old debate.

Let me level set here. I routinely joke about how I’m a “Calendar Driven YAML Engineer” and have been for years on [openshift.tv](https://openshift.tv). But I'm not too fond of YAML. Let me tell you a story...

In 2012, I worked at McClatchy Interactive (before the really dark times) and enjoyed the systems and security work I was doing. We had our machine creation down to a finite science. Bare metal spun up, you punched the MAC address into a database file, and off the machine went to get all the needed packaging and code to run as its defined purpose in our infrastructure.

{{< carbon >}}

[CFEngine](https://en.wikipedia.org/wiki/CFEngine) provisioned the machine accordingly based on purpose and positioned it in the network ready for code deployment. DevOps was something the company was embracing at the time. So instead of using the existing CFEngine infrastructure, the DevOps tandem at the time was using [Puppet](https://en.wikipedia.org/wiki/Puppet_(company)) for code deploys. This system worked fine until it didn't. There were clear lines between infrastructure (typical IT in the datacenter) and software deployment and configuration (developers). In our case, DevOps represented the development team more so than the Operations team. Sound familiar?

But, as you can imagine, even with all the automation in place, it was still a throw over the wall kind of scenario. When Puppet needed system packages installed because of modifications to the codebase (requiring a newer version of Perl, for example) or new services coming online using different OS packages, Puppet now had to do the task CFEngine was doing; systems management. The idea was to build an overarching WebOps team that was cross-functional, spirited, and deeply technical. The first edict laid down to the team by the DevOps lead was, "read the [YAML spec](https://yaml.org/spec/1.2/spec.html)." We were all jumping into the Puppet pool to help integrate our processes and procedures better.

"Ugh..." I thought to myself. "I have to read this horribly written spec." It was not an RFC, which I am fond of reading, but something about the YAML spec made me sad and frustrated. Syntax *really* mattered. Whitespace *really* mattered. My experiences have taught me that rote memorization and getting humans to see the absence of something were incredibly difficult tasks. These are things that most hackers take advantage of when infiltrating systems. Humans aren't as good as computers at finding the absence of something or memorizing things. I was not too fond of this non-markup language for these reasons.

It irked me that the YAML creators laid out goal #1 as "YAML is easily readable by humans." It is human-readable because you see the human-readable words in the scalars and structures, but there was something off-putting about YAML. It was a markup language claiming not to be a markup language. I held the firm belief that markup languages are supposed to make things simpler for humans, not harder (XML is the antithesis of markup languages, in my opinion).

Here I was, relatively fresh to the DevOps game, learning some core developer concepts to understand a markup language, the crux of which was two Achilles heels. I also didn't like how big, bulky, and cumbersome Puppet was to work with. But, here I was thrust headfirst into this world. Might as well make the best of it. I've since embraced YAML, but it doesn't mean I'm writing my notes in YAML format.

{{< eo >}}

Close to ten years later, I see YAML in the same somewhat offputting light. It's not friendly to new people in the same sense [git](https://git-scm.com/) isn't. [Kubernetes](https://www.kubernetes.dev/) has almost abused YAML to the point that it has become a punchline. And we've stuck ourselves with it for a long time to come too. If Kubernetes is the platform of the future, that means we'll be using a spec written in 2009 well into the 2030s (and likely beyond).

I hope that a drop in replacement is possible. The fact that we need tools like [yq](https://github.com/mikefarah/yq/) does show that there is some work to be done when it comes to wrangling the YAML beast at scale. In 2009, when the latest version of the YAML spec was written, no one thought of applying pod security policies to massive Kubernetes deployments spread out across data centers the world over. Something better will come along and I hope adopting it isn't as painful as adopting YAML is.

Remember, comparing things relatively to like something (YAML vs. XML or YAML vs. JSON) completely throws out the beginner's journey. Start from the newb and go forward from there. YAML doesn't. Git doesn't. Incrementally, YAML is better than XML but, it sucks compared to something like HTML or Markdown (which I can teach to execs and children alike). Yes, balancing machine and human readability is hard. The compromises suck, but, at some point, there's enough compute to run a process to take in something 100% human-readable and make it 100% machine-readable. In the same sense that compute has become so readily available that we gzip and encrypt almost all HTTP traffic today, I hope we can do the same with systems configuration languages. Move the complexity from the human to code. Computers are better at remembering things and syntax-semantics than humans could ever hope to be.

There's always a happy medium between human and machine readability. However, I'd much rather see a human first, [80-20](https://en.wikipedia.org/wiki/Pareto_efficiency) approach here where entry-level skills can solve 80% of the markup language's use cases. That's the true nirvana, in my opinion. There will always be complexity and a need to understand the tool you're using. But, YAML gives us an example that there can and should be better things.
