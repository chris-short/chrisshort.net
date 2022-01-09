+++
author = "Chris Short"
categories = ["Philosophy", "2021", "2022"]
date = 2022-01-08T07:00:00Z
description = "Chris Short looks back at 2021 and looks ahead to 2022."
draft = false
slug = "2021-learnings-2022-expectations"
tags = ["live streaming", "open source", "Arm", "serverless", "privacy", "Kubernetes", "Open Source Surety", "containers", "supply chain", "community", "AWS", "Facebook", "cluster", "Artifact Hub", "pandemic", "working from home", "CNCF", "Intel", "compute", "developer", "Docker", "Los Angeles", "Kabul", "infrastructure", "DevOps", "code", "chips", "COVID-19", "nuclear", "iPhone", "Nvidia", "Restream", "Streamyard"]
title = "2021 Learnings, 2022 Expectations"
[cover]
image = "/2021-learnings-2022-expectations/hopefully.jpg"

+++

Photo by [Aaron Burden](https://www.pexels.com/@aaronburden?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com/photo/white-daisy-flower-bloom-2449543/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

It's been one of the more challenging years of my life for many reasons. Please allow me the space to do some healing in this intro. I promise the juicy tech bits are [a header away](#last-years-predictions).

If 2020 was hell on earth (which, while close, wasn't quite there), 2021 asked us all to hold our collective beverages. Vaccines and boosters aside, the pandemic was a staunch obstacle to tackle along with every decision. A thorn in the side of everything at this point, we tried to live as normal a life as a family can that has young, unvaccinated children amongst us. But, how do you reduce human interaction in a world that needs more humans to be human to each other? We have to figure out the answer to this question. In the face of a pandemic, government spending buoyed the economy here in the United States. Abroad other nations took stock and saw a world where everyone looked after themselves first. I am relieved that adults have returned to the White House, but I fear it might be short-lived given the stalling in Washington DC the past few weeks.

I watched helplessly from my office, then later from my family room, as an insurrection took place on January 6th of 2021. The fact this happened a mere seven days after publishing last year's piece of a similar title is why I subconsciously stalled writing this year's version. As I watched the US Capitol fall into the hands of fascists, little did I know that it was preparing me for the fall of another capital nine and a half hours ahead of Detroit time: Kabul.

This year, privacy, an overarching theme, came into play as I deleted all my Meta (Facebook with a different name) owned profiles. With it, hundreds of connections to my old life went. I did this two months before the fall of Kabul when I would need those contacts the most. Friends and strangers alike in Kabul reached out for help. There was little I could offer them other than forms to fill out, email addresses to send them to. All I had were nuggets of intelligence, hope, and a chance, albeit slim, that they could be the fraction of a percent of the Afghan population to escape during the [US-led airlift operations](https://en.wikipedia.org/wiki/2021_Kabul_airlift).

Lesson learned: Staying out of politics comes at a price. I deleted Facebook for privacy reasons. The motivations were set in place years before after a series of horrible interactions with supposed friends around topics that shouldn't have been politicized. For the most part, Facebook compromised my privacy while treating me like shit. No one needs that in their life. I deleted it, closing a gateway to a life that's no longer mine. The actual closure came in the weeks and months after the US pulled out of Afghanistan. I put a lot of demons to bed in 2021.

I can't help but wonder what if I still had that stack of current and former government contacts I left behind when I deleted my Facebook account. You might wonder, why didn't you pull up a backup or offload those contacts somewhere? Yes, hindsight is 20/20. But, you usually don't make backups of things you never intend to restore. But, for the evac of Afghanistan, I reached DEEP into my contacts and pulled as many strings as I could to help. I did everything I could given the circumstances, and I am at peace.

## Last Year's Predictions

1. 5G and Edge would explode in 2021
1. ARM will have a bigger 2021
1. Livestreaming becomes the norm
1. Education is more important than ever

### 5G

5G stumbled in 2021 due to supply chain issues. While I supposedly have 5G service at home, it's not actual 5G, and the speeds are subpar. When I was in downtown Los Angeles earlier this year, I finally got to experience the battery-draining, high-speed 5G that made good on its promises. 5G from millimeter wave antennas installed throughout LA Live and the core of Los Angeles is fast. That was real 5G but on older tech. I remember reading about [millimeter wave technology](https://www.verizon.com/about/our-company/5g/what-millimeter-wave-technology) in the early-2000s. It was revolutionary back then, but to see it in practice, well, I'm glad I had battery packs with me the whole time. My iPhone 13 Pro Max battery was getting sucked dry walking around with the phone in my pocket (the biggest battery in the flagship Apple iPhone). [5G deployments using the old C-band spectrum are stalled as well](https://www.protocol.com/policy/5g-delay-faa-att-verizon).

### Arm

[**Arm**](https://www.arm.com/) had a fantastic year, as predicted. 2022 will be a very successful year for Arm too. But, with [Nvidia's buyout all but dead](https://www.marketwatch.com/story/nvidias-deal-for-arm-is-dead-how-long-until-ceo-jensen-huang-admits-it-11638493523), it means that Softbank will likely have to figure out another way to get their value out of Arm. But Arm will have no problems providing it either. Think about this for a second. I have a 72" wide standing desk (on wheels), a DSLR camera, TV, monitors, two computers, a tablet, a Kindle, and many peripherals sitting on it. NONE of them have an Intel CPU in them. NONE. Arm had an excellent 2021. Arm will continue to slay the Intel beast until Pat Gelsinger and crew turn things around. We'll see Arm Intel chips at some point. The architecture is robust, and the Intel price tag is becoming too high (plus, AMD, RISC-V, and others are out there).

Meanwhile, Arm chips enable reduced power consumption and improved productivity—a win-win in my book. The gaming industry and Nvidia's failed acquisition aside, Arm will thunder forward successfully in 2022.

### Live streaming has become the norm

Live streaming is now another tool in many folks' tool bags these days. Services like [Restream](https://restream.io/join/VzLV9) and [Streamyard](https://streamyard.com?pal=5495807930531840) continue to lower the barrier to entry too. We needed tons of bandwidth, performant GPUs, and dedicated signal processing and distribution systems when I started live streaming. When I was leaving Red Hat to join AWS, I suggested the team at Red Hat immediately switch to [Restream Studio](https://restream.io/join/VzLV9). It was more than ready for primetime, and maintaining cloud compute was outside a typical producer's wheelhouse.

I got asked how I felt about live streaming in my first week at AWS. I have no problem producing and hosting live streams. That's a cakewalk I can navigate. Want me to join you on air for a show? Sure! Want me to take over all streaming efforts for the entire business? Hard pass.

Live streaming took a heavy toll on me. The constant, always on air focus made me vain, inflated my ego far more prominent than it should have been, and generally exhausted me. At one point at Red Hat this year, I had my hand in 26 different live streaming shows/series. Before I left Red Hat, we distilled that down to 15, but even then, I would need a lot of help to mature the efforts.

Don't get me wrong. I love live streaming! I want to do so much more of it. But I'd like my little piece of a larger pie. AWS has had many folks live streaming from a lot of different teams. The fact that AWS was the statistical #1 according to numbers I was tracking at the time set them apart from a Developer Advocacy perspective for me. If I want to have a recurring show once I'm ready, I can. I'll have support from others across many teams, including mine, as live streaming is common at AWS. Keep your eyes peeled to [Containers from the Couch](https://containersfromthecouch.com/) for the time being.

### Education is more important than ever

Last year, I used [the dockershim debacle](https://kubernetes.io/blog/2020/12/02/dockershim-faq/) as a perfect point that, as an industry, we don't have our minds wrapped around containers and Kubernetes. It could be any technology at some point during its existence. But it just happens to be the one I'm focused on. [Dockershim's deprecation](https://kubernetes.io/blog/2022/01/07/kubernetes-is-moving-on-from-dockershim/) aside, last year, I floated out the idea that teams might want to invest in a position I referred to as a Developer Educator. At this point, **that** is **my** role in the world. I still hear stories about wrong assumptions about the learning path for Kubernetes. At this point, Docker Desktop is a confusing component in the learning journey. [Docker is dead since before I labeled them as such in 2017](https://chrisshort.net/docker-inc-is-dead/). Their technology is now a commodity (thank you, [Open Container Initiative](https://opencontainers.org/) (OCI)).

The lesson learned from Docker's debacle should be that widely popular tech CAN'T make money unless you build a robust and open community. The second you start screwing around with your contributors and community members, things go south. Listen to your contributors and end users (you're not more intelligent than the rest of the world, sorry).

To be honest, I'm more likely to spin up a bevy of containers in a namespace on a Kubernetes cluster before I run, say Docker Compose. Compose is a story of, "Works on my machine. But, this isn't enough for prod." Telemetry, monitoring, resilience, and high availability are real-world needs that are a lot of work (so you want to set it up once per environment). Thinking past MVP needs to become a new norm.

#### CNCF Artifact Hub

The good news is, CNCF already has [Artifact Hub](https://artifacthub.io/). Despite its odd introduction during the Operator Framework incubating discussion, I'm hopeful this can be a place where production-ready solutions land. As Helm charts, Operators, or whatever comes next. I'm curious to see what happens with Artifact Hub in 2022. Right now, it feels like a Helm chart dumping ground, and many folks could benefit from that. Still, there are as many people who that won't work for due to their environment's needs. Building a healthy community of Artifact Hub users and maintainers will be critical to its success.

#### Kubernetes

As we see Kubernetes grow in usage, we're doing ourselves a disservice by not addressing the learning paths to [getting started](https://www.kubernetes.dev/docs/guide/). I've said Kubernetes will have to get easier to use so many times now that I'm not calling it out anymore; the industry gets it. Kubernetes' challenges will continue to get solved in 2022. I aim to be a significant contributor to that. I'm more than happy to be the person that helps you wrap your mind around this lovely compute option. I'd love to be the world's expert in Kubernetes, but, let's face it, I'm an [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html) away from as many clusters as I want (I have two running right now). I don't claim to be an expert (Kubernetes is far too big now anyway) but, my sleeves are rolled up, and my hands are dirty.

[Karpenter](https://karpenter.sh/) is an excellent example of folks seeing a real thorn in the side of cluster operators and putting a solution in place. That will help them keep their clusters lean and mean (but still capable of spinning up whatever is necessary based on workloads). Tooling like Karpenter takes away cluster administrators' need to understand every workload on the cluster. I've long thought this to be an unsustainable pattern. Cluster admins can address auto-scaling needs on a per workload basis. That optimization of compute usage is part of the promise behind containers and Kubernetes. It's cool to be at the forefront of this tectonic shift not only to the cloud but to Kubernetes as well.

## Privacy

One thing I did not foresee happening in 2021 was the rapid march of millions toward more privacy-focused technologies. [Brave Browser had a banner year](https://brave.com/2021-recap/). [DuckDuckGo had a pivotal year as well](https://www.ghacks.net/2021/12/27/search-engine-duckduckgo-had-another-record-year-in-2021/). My actions were part of the droves marching towards more privacy and not sticking with the status quo. As I mentioned in the introduction, I deleted all my Meta-owned profiles. I enabled settings and installed software that would allow me to personalize my experience on a site-by-site basis (Brave, [Privacy Badger](https://privacybadger.org/), and [DuckDuckGo Privacy Essentials](https://duckduckgo.com/app)). Then I realized that wasn't enough and employed connection by connection rulesets to fit my privacy needs. I became a [NextDNS](https://nextdns.io/?from=atf4r8uh) customer and started scrutinizing DNS lookups like never before (I ran DNS infrastructure in the home for years). I chose [NextDNS](https://nextdns.io/?from=atf4r8uh) because it could travel with me wherever I went, making the same privacy at home on the road much more attainable. If I could get Julie to realize these things are exploiting her, I could sinkhole Facebook, Instagram, and TikTok for good.

## ​​Looking forward to 2022

A lot already has happened that will shape what 2022 looks like. The supply chain disruptions, inflation, and a couple of years of increased government spending will cause some significant changes. But, let's use some data!

This year, I made a conscious effort to tag [DevOps'ish](https://devopsish.com/) issues as much as possible. I've analyzed DevOps'ish's 2021 issues to see what might be facing us over the horizon. DevOps and GitOps will continue to march forth as the tooling for shifting left improves. The platform of choice increasingly becomes a declarative one. They are frequently based around containers. This leads me to the first prediction for 2022.

### Serverless peaking in 2022

There will be pitchforks and torches for saying this but, I think we've hit peak serverless. I admit we could also be in the "[Trough of Disillusionment](https://en.wikipedia.org/wiki/Gartner_hype_cycle)" but, I don't believe that is the case. Don't get me wrong; I love the idea of serverless. Writing and executing code while not worrying about infrastructure is a fantastic concept. But, stringing together a lot of code in an event-based architecture can become complicated quickly. Those using serverless technologies and who are happy with them will continue to do so. But, there's a saturation point for any technology.

I'm not a developer by trade either (this is likely clouding my view too). But, when I need software for a project, I search for an existing tool with a community that already exists, install it, and move on with life. My support of that community will grow as I continue utilizing that tool. Giving this support is a personality trait and part of being a member of open source communities for decades.

Me writing function after function isn't my idea of a good time. Dependency management is always F.U.N. (Freaking Unbearable Nonsense, yes, I made that up). It isolates my organization to an extent and me. It can stifle a community around your code from building up unless you're very intentional about open sourcing it. Even then, varying degrees of serverless tech at equally varying maturity could limit any actor in the serverless community to one implementation or vendor. That might turn out to be a good thing. But, all the problems of a dev environment persist, too, unless you're diligent about that as well.

A lot of tooling exists to help with this ([direnv](https://direnv.net/), among many other tools, look intriguing) but, does it come close to a container? Sometimes real close. But, the beauty of a container is that versioning, dependencies, and packages are all part and parcel. There are many ways to run a container too. Serverless, I feel, still could use some help in making more folks productive. I don't take [a report from CNCF showing a decrease in serverless usage](https://www.infoworld.com/article/3645374/kubernetes-up-serverless-down-report.html) as a sole indicator. The data from DevOps'ish backs up this theory, too (serverless only appeared twice in 2021). Containers are a suitable abstraction layer for me and many folks like me. I'm happy to see serverless containers becoming a thing. Serverless containers could be the right combo for delightful productivity.

### Security in 2022

We have so much work to do as an industry. The F.U.N. police are coming! The [Log4j vulnerabilities](https://devopsish.com/tags/Log4j) (how many are we up to now?) shows how important open source is in our day and age. But, all the money in the world wouldn't have fixed this problem. We need to identify industry-wide, critically important software. Then we need to figure out how to get the biggest consumers of those open source projects to support the projects they're using the most.

This isn't something any organization in existence is capable of doing (at least not one I've heard). This open source surety effort will need a [US Digital Service](https://www.usds.gov/) or [GSA 18F](https://18f.gsa.gov/) style organization solely focused on this. Yes, some government backing is critical. I know that will lead to politics, but, at this point, the essential nature of the internet necessitates it. Think of a [PBS](https://www.pbs.org/) for open source surety. An open source surety organization that can take government and private funds will be vital. Citizens alone should not foot the bill. Surety orgs will need an elegant, lightweight reporting structure up through whatever national security arm of government they report. They'll need an ambassador that can go out and talk to folks at organizations and get them to understand the necessity of this work and ultimately fund the effort. This surety organization will incubate technologies, create or adopt standards, and teach many people how to build secure software from the start. This will be the ultimate benefit to the public good of the open source surety organization.

It would be wonderful if this is something that the world could set its differences aside and rally around. But, COVID-19 is already stretching strained relationships the world over. A UN agency isn't the correct answer. An [NGO](https://en.wikipedia.org/wiki/Non-governmental_organization)? Maybe. But, many governments having entities like this would be huge. How those governments decide to fund their Open Source Surety programs can best be determined inside their own borders.

I don't use the word *surety* lightly. That word is often used by governments worldwide for a subset of things that can't fail. [Nuclear surety](https://www.doctrine.af.mil/Portals/61/documents/AFDP_3-72/3-72-D50-NUKE-OPS-Surety.pdf) is a thing here in the United States. The policy intends to mitigate risks, accidents, and help other nations with similar issues. Open Source Surety is a critical infrastructure initiative that must be thoughtfully implemented globally. Given the unlikely use of nuclear weapons in my lifetime, [a cause to which I contribute](https://chrisshort.net/causes/), this open source surety program is more critical than the US nuclear weapons program.

### Supply Chain woes will continue (with an added dose of inflation)

[Inflation](https://www.theguardian.com/business/2021/dec/10/us-inflation-rate-rise-2021-highest-increase-since-1982), increased demand, and [supply chain woes](https://cheddar.com/media/the-supply-chain-crisis-enters-its-second-year-heres-what-to-expect) sent even the most staple of items skyrocketing in price. Here in Detroit, [fields of GM and Ford vehicles awaiting chips](https://www.cnbc.com/2021/03/22/chip-shortage-has-detroit-automakers-struggling-to-maintain-truck-production-and-meet-orders.html) from other far-flung factories were a stark reminder of the global world we live.

We need to build more stable supply chains physically and digitally. This is a multi-prong problem too. The physical components (Layer 1) are often solved politically and expensively. With the emergence of the [Open Source Security Foundation (OpenSSF)](https://openssf.org/), companies like [Chainguard](https://chainguard.dev/), a collective awakening is happening. Given the number of internet-breaking vulnerabilities in the past decade, I'm hopeful the software supply chain efforts will stabilize faster than those physical ones involving factories, ships, ports, trains, planes, and trucks.

Those of us working diligently from home for years before the pandemic found ourselves grappling with complicated logistics at every turn. I can only hope we did our part in keeping the economy going in 2021. Inflation and supply chain constraints had us paying $8 per board for a subpar 2x4 (wood, a building block of lots of things). As we finish our basement with my talented father-in-law leading the effort; the pricing of commodities is another humbling reminder of our interconnected world. The good news is, to a person, each contractor we worked with told us after a long 2020, with little to no work, they were happy to have folks working again on jobs across the state. I don't want to know the final total of the basement project. It will hopefully be worth it for the local economy and ourselves.

When the pandemic started, I steeled myself for a seven-year ordeal (this is why I was ***so*** depressed and anxious at the beginning). Signs of hope emerged as friends and colleagues descended on Los Angeles for [CloudNativeCon + KubeCon North America 2021](https://www.cncf.io/events/kubecon-cloudnativecon-north-america-2021/). Only to be slapped right back down into our dungeons by the [Omicron COVID-19 variant](https://www.oakgov.com/covid/dashboard.html). Increased testing, more folks getting vaccinated and boosted, and a collective realization, COVID-19 is still years from going away. We might be able to get out of the pandemic faster. Regardless, we're into year three now.

## Conclusion

Whatever new hell faces us in 2022, we'll be doing it together. Never forget that working as a global team will always trump working with animosity towards each other. We can do more by working openly and genuinely than we ever think possible.
