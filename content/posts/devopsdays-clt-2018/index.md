---
ShowTOC: false
aliases:
- devopsdays-charlotte-2018-ignite-talk-on-golang
- /devopsdays-clt-2018-ignite-talk-on-go/
author: Chris Short
cover:
  image: chris-short-sj-technologies-devopsdays-clt.jpg
  alt: Chris Short on stage at DevOpsDays Charlotte
  relative: true
date: "2018-02-28"
description: This talk walks through the use case of having to apply new certificates to an unfamiliar application. I built a 50-line Go tool to test and audit certificate chains and web server configurations.
tags:
- open source
- devops
- go
- golang
- talks
- security
title: DevOpsDays Charlotte 2018 Ignite Talk on Go
---

{{< streaming 50fc5408-36a6-4f97-b5de-7dff746b1b4e >}}

{{< carbon >}}

All other DevOpsDays events should be put on notice. DevOpsDays Charlotte 2018 set the bar unattainably high for the quality of the venue and speaker line up. It'll be insanely hard to beat the great folks who spoke in Charlotte this year. Almost every talk was a home run. The Red Ventures facility was also jaw dropping. Also, I don't think we could have asked for a more inviting and welcoming speaker lounge either.

I was able to speak about Go and using it to save my [DevOps](https://devopsish.com) bacon. My team of merry DevOps'ers inherited an application. A third-party built the app a few years before we inherited it. The app had been in maintenance mode for quite some time. Before we could do any re-engineering work, we had to resolve a critical issue. The certificates were about to expire!

This talk walks through the use case of having to apply new certificates to an unfamiliar application. I built a 40-line Go tool to test and audit certificate chains and web server configurations. I'm not a coder but Go makes me happy and really did save the day.

## Slides

{{< speakerdeck 05c5de9646ba4b4eb42e1983c47a5275 >}}
