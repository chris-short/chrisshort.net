+++
author = "Chris Short"
categories = ["Kubernetes", "Red Hat OpenShift", "Live Streaming", "2020"]
date = 2020-06-24T03:00:00Z
description = "Sharing what it's like to be live streaming on OpenShift.tv and some lessons learned along the way"
draft = false
ShowTOC = false
slug = "live-streaming-on-openshift.tv-and-some-lessons-learned"
tags = ["live streaming", "streaming", "learned", "OpenShift.tv", "Red Hat OpenShift", "OpenShift", "CNCF", "Kubernetes", "cloud native", "community", "Cloud Native Computing Foundation", "OBS", "open source"]
title = "Live streaming on OpenShift.tv and some lessons learned"
[cover]
image = "https://shortcdn.com/chrisshort/openshift.tv.png"

+++

This post intends to share what I’ve been up to the past couple of months. Also, what it's like to be live streaming on [OpenShift.tv](https://openshift.tv). We've been in a startup mode for over two months now. We've been on air for a almost two months. I've learned so much. I want to share some lessons learned along the way.

Live streaming is a hot topic these days due to the COVID-19 pandemic. The topic has been so hot in fact that Cloud Native Computing Foundation (CNCF) has done two webinars on about live streaming and using [Open Broadcaster Software](https://obsproject.com/) (OBS):

* [CNCF Community Webinar: How to Conduct a GREAT Live Stream](https://www.cncf.io/webinars/cncf-community-webinar-how-to-conduct-a-great-live-stream/): There's a whole backstory on how this came together. Long story short, huge shoutout to [Jorge Castro](https://twitter.com/castrojo) and [Alex Lustenberg](https://www.linkedin.com/in/alustenberg/).
* [CNCF Community Webinar: How to conduct a great livestream - Open Broadcaster Software (OBS) deep dive](https://www.cncf.io/webinars/how-to-conduct-a-great-livestream-open-broadcaster-softwareobs-deep-dive/)

There are now *#streaming* channels in the [CNCF Slack](https://cncf.slack.com/), my work Slack(s), and other internal chat applications (if I'm there, chances are there's a #streaming channel). All these channels have people asking questions from how to get started to how to get the right Keyframe Interval. It's great to have as many people interested in the topic as there is right now. Hopefully, the long term gain from all this is a little less travel and more time with our families. But, a lot of us are picking up OBS and running with it.

I'm now a user and somewhat of a fan of [Discord](https://discord.com/). I've had to ask the [OBS Community](https://discord.com/invite/obsproject) if something I was experiencing was a bug, unexpected behavior, or a scenario not even thought of. It turns out it's not a bug if you have a Blank Scene as the first scene of all your OBS Scene Collections. Other tooling we're using has had some interesting responses to questions like, "Haven't thought of that yet." That's right, some of the tooling in the space is so new that I've found instances where teams have said things along the lines of, "Oh, we didn't think of that. We'll add it to the roadmap." Live streaming is a pretty bleeding edge space and **it's awesome to be a part of it**! I've found a way to connect with folks in real time, face to face, right from my desk. I've wanted this since I began working from home years ago and it's finally here!

{{< carbon >}}

When we started down this path, we knew we wanted to keep things as simple and open as possible. For the first month and a half, I have had to wear multiple hats as I've juggled a number of roles; producer, host, [showrunner](https://en.wikipedia.org/wiki/Showrunner), project management, marketing, etc. As my boss puts it, "We're in startup mode." It really is an delightful experience seeing live streaming bringing some good indicators of success too. We've seen increases in social media platform engagement (we stream to multiple platforms at once). People seem to dig a lot of the content. Costs are low but, not so low this would be a hobbyist thing and we're moving from a home-based model to a cloud one to open up production capabilities to others.

I mention simplifying production because OBS is not for the faint of heart. Once you get it, you get it. But, like a lot of tools in the space, the way you are using it matters when it comes to configuring OBS. We've [open sourced our docs](https://github.com/cloud-platforms-streaming/streaming-docs) intentionally because we're adding learnings from others as we go (and hope others are willing to check our work). Using OBS for live streaming is way different than you would use it if you were screen recording for a high quality playback. I hope to, at some point, merge these into a higher-level project for live streaming OBS docs but, we had to start somewhere better than the Slack messages and notes we had gathered up from various blog posts across the web. I've [learned more about x264](https://github.com/cloud-platforms-streaming/streaming-docs/blob/master/streamers-guide.md#x264-cpu-usage-preset) in the past two months than I think I learned any VTC protocol in the eleven years I did them on and off in the Air Force.

{{< eo_signup >}}

I think the craziest and coolest thing about live streaming is that it's a somewhat untapped dimension of the social media landscape. Yes, webinars have been around forever but, there's just something a little different about live streaming. I freely admit we're not the first on the block to do this. We've learned from [some of the cool kids](https://www.twitch.tv/ibmdeveloper) that have been willing to share their knowledge with us. We're so thankful to them and the many others we've chatted and worked with along the way. We are going to be doing this for a while it sounds like too. I'm not expected to be in a Red Hat facility for the rest of the year. I do not intend to travel unless it is an emergency or a driving distance, long weekend vacation.

Buckle up, folks! We're going to be [streaming and learning all the cloud native and Kubernetes](https://openshift.tv/) together!
