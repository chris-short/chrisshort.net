+++
author = "Chris Short"
categories = ["Imposter Syndrome", "2019"]
date = 2019-09-10T18:00:00Z
description = "Our voices generate so much knowledge yet transmit so little data. It's time respect the metadata we create around the 39 bits per second of our voices."
draft = false
tags = ["imposter syndrome", "metadata", "privacy"]
title = "Your 39 bps matters more than you think"
image = "/your-39-bps-matters-more-than-you-think/sine-wave.jpg"

+++

> A slightly shorter version of this article was featured in [DevOps'ish 144: Your 39 bps matters, happy little hybrid clouds, Kubernetes with a side of service mesh, HA SQLite, and more](https://devopsish.com/144/)

This week I read about a study of 17 languages that suggests humans, "no matter how fast or slowly languages are spoken, they tend to send information at about the same rate: [39 bits per second](https://www.sciencemag.org/news/2019/09/human-speech-may-have-universal-transmission-rate-39-bits-second), about twice the speed of Morse code." The study points out that some languages are clearly "faster" than others but, [a steady average rate of 39.15 **bits per second** (bps) kept coming up](https://advances.sciencemag.org/content/5/9/eaaw2594). This study fascinated me since I talk to people as part of my work. My mind jumped to being on stage somewhere and spewing 1s and 0s out at a measly **17.6 kilobytes per hour**. That is such a low data rate. It's relatively equal to [this random file I found on GitHub](https://raw.githubusercontent.com/cttobin/ggthemr/master/misc/build.txt). At 39 bps,  [Kubernetes 1.15.3](https://github.com/kubernetes/kubernetes/releases/tag/v1.15.3) would take about 1 day, 1 hour, and 14 minutes to download it's whopping 443 KB of container orchestration code.

{{< carbon >}}

Telemetry data alone on some of the oldest satellites I ever worked with was 4 kbps of status, position, orientation, and other measurements. That's a continuously updated status update, and it only needed 4 kbps. Meanwhile, there I am on a stage somewhere, rendered inadequate with my paltry 39.15 bps. To add insult to injury, the thing giving me impostor syndrome is a device floating in space. No one in the room can see or hear it but, I theorize it is broadcasting 4 kbps at earth at that very moment. That device floating in earth's orbit can transmit more information per second than I could ever hope.

But, then I realize that the 4 kbps is 1s and 0s that are encoded (and hopefully encrypted). That means there are specs, protocols, languages, algorithms, and a lot of sand doing math to glean anything significant from that data. Then to get that data from [Layer 4 to Layer 7](https://chrisshort.net/drawings/osi-model/) requires even more on top of that (frameworks, other protocols, more languages, etc.) to present you with one screen of that telemetry data in a human consumable format. When you take this path of including all the things that have to come together to make that 4 kbps of satellite telemetry usable; you suddenly realize it's not the quantity of data that matters. How your transmission is used is what is vital. It's the ability to use that data for something meaningful after it's transmitted. The human voice has that amazing capability because it's attached to a brain. The brain can take decades of inputs and put them into coherent, digestible, and meaningful human-understandable objects. This is why People matter far more than Process or Tools in [DevOps](https://devopsish.com/). The value of your people is in their ever-increasing ability to turn their numerous and varied inputs into value elsewhere in your organization.

{{< sib >}}

Take it a step further and consider everything outside of that 39 bits per second *metadata*. Now, put yourself in a webinar or a Zoom call. Think of all the protocols, frameworks, standards, and other components that make up the hardware and software between you and the person on the other end, speaking and presenting. The Ethernet standards floating around the air or copper wiring (more standards). The video encoding standard used to stream to your device. Your device itself, which has literally hundreds of standards and protocols in it. This all now falls under our definition of metadata. That's a ton of metadata to send the paltry 39 bits per second of information a voice can carry. This is why metadata is so valuable to folks. Because there is so much of it, [metadata often ends up being more useful than the content of the conversation itself](https://www.theguardian.com/film/2015/nov/09/a-good-american-review-nsa-whistleblower-william-binney-911-world-trade-centre?utm_source=devopsish&utm_medium=newsletter&utm_campaign=144). This is why being mindful of others' privacy and concerns as humans are essential in our industry. The thing you're doing today could be generating value you never thought possible.
