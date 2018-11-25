+++
author = "Chris Short"
categories = ["Talks"]
date = 2018-04-30T18:00:00Z
description = ""
draft = false
slug = "detroit-kubernetes-apr-2018"
tags = ["kubernetes", "Michigan", "talks", "Detroit", "cron", "cron jobs"]
title = "Detroit Kubernetes:  Kubernetes Cron Jobs"
image = "https://cdn.chrisshort.net/detroit-kubernetes-apr-2018-cron-jobs.png"
aliases = [
    "detroit-kubernetes--kubernetes-cron-jobs"
]

+++

I spoke at [Detroit Kubernetes, Docker & all related things](https://www.meetup.com/Detroit-Kubernetes-Docker-all-things-Cloud-Native/events/249593802/) about Kubernetes Cron Jobs. The talk was more like an explanation with a demo. My demo skills are non-existent so I needed to build those a little. Overall, the demo went well. But, I feel like the zoom feature in Visual Studio Code needs some work. I ended up in iTerm2 using vim to make up for the oddities VSCode threw at me. All the code for the demo is available here: [chrisshort/k8s-cron-job-demo](https://gitlab.com/chrisshort/k8s-cron-job-demo)

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="4663018952"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

The talk and corresponding demo is based on the article I wrote back in February, [*Kubernetes: Cron Jobs*](/kubernetes-cron-jobs/). I had Pushover notifications setup too so every time the cron job ran in minikube my Apple Watch would ping. It added a nice, albeit unintended, effect that I'll try to make use of during future demos for sure. You can view the slides below or [download the version with notes](https://cdn.chrisshort.net/Kubernetes-Cron-Jobs-Notes.pdf).

{{< upscribe >}}

## Slides

<script async class="speakerdeck-embed" data-id="e9011b237112405b804055e167d2ef5a" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>