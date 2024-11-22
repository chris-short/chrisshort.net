+++

author = "Chris Short"
date = 2024-05-15
description = "After the death of my niece, Lucy, I decided to donate a portion of our household compute to cancer research through Folding@Home"
draft = false
slug = "folding-for-lucy"
tags = ["cancer", "Folding@Home", "research", "niece", "GPU", "compute", "FoldingForLucy"]
ShowTOC = false
title = "Folding for Lucy"
[cover]
image = "https://shortcdn.com/chrisshort/folding-for-lucy-tweet.webp"
alt = "The tweet where I announced my intention to dedicate 25% of household compute to cancer research through Folding@Home"

+++

{{< carbon >}}

If you’ve known me for a while or followed me on social media long enough, you know I have a niece. She died of an aggressive cancer at four and a half months old in April 2022. Finding out your only niece has cancer is terrible. Lucy’s passing was profoundly saddening. No parent expects their newborn to have cancer. It was nature at its absolute cruelest.

Nevertheless, Lucy gave science an enormous boost. Through all the labs, tests, and treatments, Lucy has made her form of cancer more detectable. Labs in Michigan got a clear look at cancer cells a lab in Washington state could not even detect. Institutions across the US had received Lucy’s cancer cells, and a study began immediately.

Losing my niece was painful. But, I took some comfort in the fact Lucy was making this rare cancer more detectable. Detection is everything. More treatments come after that. Hope. Lucy gave others hope.

Towards the end of 2022, I set a goal to donate 25% of our total household compute to running Folding@Home. I use the #FoldingForLucy hashtag on social media to provide updates on the project.

My strategy at first was to use a core or two on multiple machines, thinking that more computers dedicating a core would easily add up to 25%. The flaw in this logic was that I thought it wouldn’t significantly impact the user experience. I was wrong. This wasn’t easy on any of the computers doing the work. I dedicated whole computers to cancer research to achieve the 25% goal.

When live streaming was handled by a second computer running OBS, I used two 8th-generation Intel NUCs for streaming rigs. Given the advances in live-streaming technology, these NUCs are researching cancer full-time.

When [my Framework Laptop][1] arrived, I flipped my last Intel NUC to research cancer full-time (but it’s not operational yet). I installed shelving in the utility closet next to my office. I put these loud, screaming computers between the concrete wall of our basement and the back of my office so they could run in cooler air. Folding@Home is using 100% of these CPUs.

When our power company switched to time-of-use rates, I optimized power consumption using tuned. I set up cron jobs to switch profiles to save energy during peak usage. Setting up tuned was a big win for our power bill and the environment.

While at Red Hat and now AWS, I picked up experience with Nvidia GPU usage in containers. I was curious how cheaply I could run a GPU for Folding@Home. GPUs are great for compute-heavy tasks, so I knew a budget GPU would churn through Folding@Home and work faster than any CPU.

If you’ve watched any of the live streaming I did at Red Hat, you might recall that I have a 2U Dell R820 in the house (someone near Detroit, please take this off my hands). It was the core of my home lab for many years. It hogged power, and I didn’t want to run two sockets at 100% out of fear that the electric company would bankrupt us.

The good news is that once I joined AWS, keeping the beast of a server running for a home lab environment made no sense. I had easy access to a growing multitude of AWS instances for my work. Newer, smaller storage systems could do the work I needed and more.

I wanted to compress that 2U server to a smaller footprint (like that [Crush iPad commercial][2] everyone hates). I bought a [QNAP TS-873A][3] (I’ve had mixed experiences with it). But, the one thing it had over any Synology rig at the time was a higher capacity for RAM and a PCI-E slot. This slot gave me the ability to run a GPU. The QNAP has a short, open-ended slot, so cheaper GPUs were the name of the game. Running one at 100% would boost my ability to turn electrons into cancer research.

I’ve run these systems like this for a long time. They’ve been plugging away at the Folding@Home workloads. They’ve done so admirably and with little fuss. I’m glad to say I passed 100 million “points.” I also completed over 4,000 work units. All of that is dedicated to cancer research. I hope someday, children don’t have to die due to cancer. I’m working to hasten that pace in memory of my niece, Lucy. #FoldingForLucy

[![Folding@Home Certificate for 100,000,000 points](https://shortcdn.com/chrisshort/FoldingAtHome-points-certificate-69764384.jpg)](https://stats.foldingathome.org/donor/id/69764384)

[![Folding@Home Certificate for 4,000 Work Units](https://shortcdn.com/chrisshort/FoldingAtHome-wus-certificate-69764384.jpg)](https://stats.foldingathome.org/donor/id/69764384)

[1]: https://www.flickr.com/photos/chris-short/albums/72177720316779405
[2]: https://shortcdn.com/chrisshort/crush-apple-ipad-pro.mp4
[3]: https://www.qnap.com/en-us/product/ts-873a
