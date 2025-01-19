---
ShowTOC: false
author: Chris Short
date: "2018-02-22"
description: History can help prevent conflict when driving change. This talk will
  analyze human tendencies, historical data, and provide real-world examples of how
  to avoid conflict during your DevOps journey.
tags:
- talks
- videos
- public speaking
title: 'Golang to the rescue: Saving DevOps from TLS turmoil — DevOpsDays Charlotte
  2018'
---

{{< youtube -jg_SyoIIsA >}}

{{< carbon >}}

> If you ever need to validate certificates or certificate chains before deploying them, Golang provides a near foolproof test method.
> A 3rd party developed a tool that was then handed off to our DevOps team to manage and maintain. Before I could do any re-engineering work, I had to resolve a critical issue—the certificates on the ELBs were about to expire and needed updating.
> I assumed that if the ELB, NGINX, or httpd started, it was a good sign. This was a false assumption on my part and I ended up serving a bad chain for a few minutes. This did not break the site, but it was definitely not the way I wanted things to remain.
> I needed a tool that would fail if the certificate chain provided was incorrect. I wanted a lightweight tool that could be publicly accessible. Conducting a third-party analysis of the certificates and configuration was a requirement. There were no tools that I could find meeting this need, so I decided to build my own. I turned to the open source language, Golang.
> A detailed breakdown of how I built a tiny web server to fit my needs along with what each package is doing as detailed in the article linked above.

Blog Post: [DevOpsDays Charlotte 2018 Ignite Talk on Golang](/devopsdays-charlotte-2018-ignite-talk-on-go/)

Source: [Golang to the rescue: Saving DevOps from TLS turmoil](https://youtu.be/-jg_SyoIIsA) (right click, Save As...)

{{< speaker >}}
