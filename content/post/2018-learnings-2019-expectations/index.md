+++
author = "Chris Short"
categories = ["Philosophy"]
date = 2018-12-28T23:20:00Z
description = "A former co-worker and now friend used to have a tagline, \"Everyday is a school day.\" I remind myself of this fact nearly every time I learn something new."
draft = false
slug = "2018-learnings-2019-expectations"
tags = ["philosophy", "life", "kubernetes", "devops", "site reliability engineering", "sre", "Impostor Syndrome", "kubekhan", "people", "folks"]
title = "2018 Learnings, 2019 Expectations"
image = "/2018-learnings-2019-expectations/happy-new-year.jpg"
aliases = [
    "/what-i-learned-in-2018/"
]

+++

A former co-worker and now friend used to have a tagline, “Everyday is a school day.” I remind myself of this fact nearly every time I learn something new. Overall, 2018 was great for me professionally. I'd like to share some things I picked up on this most recent journey around the sun we call 2018. I'll make some predictions about 2019 in the process too.

{{< mc >}}

## Kubernetes Will Get Easier

[Last year](/what-i-learned-in-2017/), I mentioned that Kubernetes Will Find Its Way in 2018. I do believe that came to fruition this year. Pretty much every major IT company has a range of ways to consume Kubernetes. They're all [Cloud Native Computing Foundation members](https://www.cncf.io/about/members/) at the very least. Operationalizing Kubernetes is getting easier as more people gain experience with Kubernetes. Even lab or cloud-only experience might be enough to get a job at the moment.

Kubernetes vendors and the community as a whole will need to focus on ease of use. There was a lot of talk about [Long-term Support at KubeCon NA 2018](/kubecon-cloudnativecon-na-2018/). Building and maintaining an LTS Kubernetes will be a lot of effort that could be better used elsewhere. Making Kubernetes easier to operationalize at scale should be the goal. There are potentially hundreds of ways to deploy a Kubernetes cluster at the moment. I can't tell you how many times I've been asked, "What's the 'right' way to deploy Kubernetes to bare metal?" this year.

## Kubernetes Will Start to Replace The Hypervisor

As Kubernetes skills develop across the industry and the barrier to entry trends downward, new uses will emerge. There is already a big push for [Kubeflow](https://github.com/kubeflow/kubeflow) to become the defacto machine learning (ML) platform on Kubernetes. ML is only one of many solid uses for Kubernetes.

One intriguing idea coming very close to the surface is to use Kubernetes as a hypervisor. Tools like [KubeVirt](http://kubevirt.io/) and [Kata Containers](https://katacontainers.io/) enable organizations to shorten onboarding of Kubernetes. These tools allow teams to keep legacy or hard to break apart virtualized workloads in Kubernetes environments. The KubeVirt homepage says it best:

> Benefits are broad and significant. Teams with a reliance on existing virtual machine-based workloads are empowered to rapidly containerize applications. With virtualized workloads placed directly in development workflows, teams can decompose them over time while still leveraging remaining virtualized components as is comfortably desired.
>
> This means a virtual machine could be containerized with little modification. With some already planned work, Kubernetes as a hypervisor will start to change the datacenter and cloud landscapes.

{{< carbon >}}

This enables teams to ask what their hypervisor of choice is gaining them. If it's scalability, [kubeadm join](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/) can handle adding nodes in a cluster with relative ease. Removing nodes is also a few commands (if you hold your teeth right). If it's redundancy/failover; it's hard to fathom a virtualized environment being faster in this scenario than containers.

If this concept gets the adoption I think it will in 2019, the [$550 million VMware paid for Heptio](https://www.lightreading.com/enterprise-cloud/infrastructure-and-platform/heres-what-vmware-paid-for-kubernetes-startup-heptio/d/d-id/748317) will look like one of its best investments ever. VMware is the Kleenex or Xerox of virtualization. But, the virtualization product market will start to shrink at an increasing rate over the coming years. Especially given cloud adoption rates and the deal VMware made with the devil AWS. With the Heptio acquisition, VMware is now primed to be able to adapt its current customer base to Kubernetes faster than that base could on its own.

My friend Paul Czarkowski published an article with a different approach to the same outcome; [The future of Kubernetes is Virtual Machines](https://tech.paulcz.net/blog/future-of-kubernetes-is-virtual-machines/). I read Paul's piece about twelve hours after I finished writing the previous paragraphs. I DM'ed Paul and shared my conclusion with him. His response was classic:

> ":thumbsup:  I think the two are pretty complimentary,   in fact i'm saying "the future of k8s is vms" and you're saying "the future of vms is k8s"  and we're both exactly right!  computers are weird." —Paul Czarkowski

## Less DevOps, More Everything That Makes Up DevOps

DevOps is about improved business outcomes. Like Obi Won Kenobi talking about Darth Vader, "DevOps is more fluff now than actual outcomes. Its purpose has become twisted." It's a sad fact of the situation.

In 2017, I asked for another story for DevOps to tell outside of the automotive industry. I wasn't able to get adoption on a non-automotive industry story for DevOps in 2018. I wasn't able to come up with a much better story than medicine. But, in the US, that's a very sticky subject that could turn into politics rather quickly. This means it's not ripe for storytelling and ideation. That ship sailed and in a way, the DevOps ship might have sailed too.

This means there will be a ripe environment for new, niche buzzwords. We are already getting buzzword fatigue. For example, the definition-fuzzy [serverless](https://www.serverlessops.io/), the difficult nature of [observability](https://www.honeycomb.io/), and the culmination of whatever sidecars, service mesh, and Istio end up getting labeled. In 2019 be extra wary of folks trying to go above and beyond in their marketing to attract sales


[Goldratt](https://en.wikipedia.org/wiki/Eliyahu_M._Goldratt), [Deming](https://en.wikipedia.org/wiki/W._Edwards_Deming), etc. are as important now as they ever were. The core tenets of DevOps matter WAY more than whatever the term DevOps means to folks this week. Smaller batches of work, releasing more often, and reducing the cost of change are all good things if they improve business outcomes. The culture changes and retooling needed to make this happen will almost always be worth it to the business.

The good news is some in the DevOps community have adapted to this new world. People like [Nicole Forsgren](http://nicolefv.com/) are charging to the helm armed with data. I learned more about DevOps and how to talk to people about it from [**Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations**](https://amzn.to/2BFXzLU) than a lot of other books I've read. Real world experiences and real outcomes are what's going to win in the long run. Buy the book, read it.

*Note: chrisshort.net may earn compensation for sales from links on this post through [affiliate programs](/terms/).*

### A Note on Site Reliability Engineering

Something like [Site Reliability Engineering](https://landing.google.com/sre/), that uses DevOps principles while empowering Operations-minded folks, is a welcome initiative. In the past, I've referred to SRE as the ‘metricification' of DevOps. But, SRE is way more than that. SRE is partly about empowering folks running software to hand back a dumpster fire to folks writing software. This single change in an organization will drive change faster than any of the work I've done in DevOps ever could. But, the people, process, and tools needed to do this will still need champions, supporters, backers, etc. Organizations that embrace SRE will be the ones that see themselves as technology organizations first and widget makers second.

I see SRE as a natural evolution of the industry. This isn't an end game by any stretch. SRE is yet another step in an ever-evolving industry (Webmaster was a job title at one point, y'all). I also see Automation Architect becoming a thing too. As more infrastructure becomes autonomously reactive (or gluing API calls together) someone will need to "orchestrate" all that. Keep in mind, I did say, “Google SRE is proof setting a pile of money on fire is a viable solution to engineering problems.” on stage at All Things Open in 2017. Needless to say, I'm not 100% bought into SRE. But, anything that helps Operations work with the business as opposed to against it (and vice versa) is a welcome change.

But, Site Reliability Engineering is getting the same treatment as DevOps. Teams of former SysAdmins turned DevOps Engineers are being rebranded to Site Reliability Engineers. This facade allows organizations to keep up with trends in the industry. This is normal and while it was easy to do this with DevOps, I do not think it will be as easy with SRE. The organizations faking SRE will be easier to identify.

### A Shorter Note on Serverless

Serverless frameworks on a mainframe-like, almost bulletproof platform could be the future of enterprise compute. Whether the compute is managed by a cloud provider or vendor or the organization itself will become less relevant. As the [on-prem to cloud bridges](https://www.lightreading.com/enterprise-cloud/infrastructure-and-platform/aws-launches-outposts-on-prem-cloud-hardware-with-vmware-help/d/d-id/747887) being built by AWS, Google Cloud, Azure, and others become the norm the landscape will change. Coupled with existing SaaS and Cloud services, the only thing that will begin to matter is how data and business logic are handled. Where the data lives will start to matter a lot less than how the data is treated. Lawmakers started to understand that this year. Hopefully, they will begin to actually regulate more effectively as a result. Serverless will begin to help us truly unlock the API daisy chain future we're all asking for. Whether we like it or not will remain to be seen.

## The Whole World is Complex

What I did learn in 2018, thanks to [Laura Maguire](https://twitter.com/LauraMDMaguire) (and [SNAFUcatchers](https://www.snafucatchers.com/)), is that everything is so complex [it's remarkable *anything* works, ever](https://itrevolution.com/center-of-the-cyclone-dr-richard-cook/). This is terrifying when you really think about it but, it makes a lot of sense.

Typing on a keyboard into an IDE involves so many standards and protocols. It's hard to fathom any one person knowing everything about all them, let alone hordes of people. That's why hardware engineering and software engineering are different professions though. This is why there is typically a divide between front end and back end engineers. **It's all complex!** We all happily go about our lives every day expecting when you flip a switch a light bulb comes on. That's how complex systems work though.

Can any one person know every facet of a complex system? Doubtful. They would have to know the code and every operator's and maintainer's personalities so that they could assess their assumptions about the system they're working on. Perhaps then one person could make enough educated guesses about how the system works they could safely assert they truly know the system. The problem is even with all that they still can't possibly know how all the decades of IT solutions glued together into an enterprise environment actual work in every scenario. Then a government regulation like [GDPR](https://eugdpr.org/) comes along and now that model changes in weird never thought of ways.

## Being Helpful Is More Important

In 2018, I learned a lot from folks about privilege and how lucky I truly am (despite all my misfortunes). This made me realize that I could do more good elevating and connecting folks than any singular work I could cobble together. So I started spending time figuring out how I could help others. There's a lot of ways to help people in this industry. Often times, it's grabbing a drink or meal with them. Give someone a half hour of your life and see what happens. A lot of magic is possible and you wouldn't even know it.

### Impostor Syndrome

[![XKCD: Impostor Syndrome](/2018-learnings-2019-expectations/impostor_syndrome.png)](https://xkcd.com/1954/)

[Impostor Syndrome](/cfp/managing-impostor-syndrome/) is something most people struggle with at some point. I might be lucky enough to have less of a challenge than most getting over my confidence issues. But, no one wants to hear from me about impostor syndrome. Make no mistake, impostor syndrome is a real thing and people *really* struggle with it. I would like to help some folks get over their impostor syndrome issues (assuming they're ready to).

### KubeKhan {#KubeKhan}

\#KubeKhan: What started as a way to do a one-to-many meeting turned into full-out party Sunday night at the Seattle Sheraton Grand. Here's the history of #KubeKhan how I see it. Not that there is any question. But, it's a thing that happened because of people and it's important to recognize them for their effort.

I tried to set the record straight early on but was asked to delete this tweet (there's always a tweet):

![Screenshot of original tweet assigning credit to folks for KubeKhan NA 2018](/2018-learnings-2019-expectations/original-credit-tweet.png)

[**Kim McMahon**](https://kimmcmahon.me/) and I were talking before KubeCon trying to set up dinner, lunch, drinks, or something while in Seattle. But, then a meeting popped up that required me to leave Seattle at noon on Wednesday. I told Kim and asked how can we ever have time to catch up with everyone we want to see at KubeCon? She had an idea a few hours later:

![iMessage thread between Kim McMahon and Chris Short prior to KubeCon NA 2018](/2018-learnings-2019-expectations/kim-mcmahon-one-to-many.png)

> [W]e just hang in the Sheraton lobby bar Sunday night and see how many people we can talk with. We'll see some and they will see us.

Later, Kim tagged me in a reply to a tweet from [Swarna Podila](https://twitter.com/skpodila/)...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I'll be there too!!! Thinking of holding ‘office hours' &lt;wink wink&gt; at the Sheraton Sunday night in the lobby bar. I think the amazing <a href="https://twitter.com/ChrisShort?ref_src=twsrc%5Etfw">@ChrisShort</a> will join. Swarna, when do you arrive?</p>&mdash; Kim McMahon - Winter Park ☀️⛰️🌲🐕🍷 (@kamcmahon) <a href="https://twitter.com/kamcmahon/status/1070707964011368448?ref_src=twsrc%5Etfw">December 6, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I added my tweet tagging a few people to let them know what was going on...

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">FYI <a href="https://twitter.com/nathenharvey?ref_src=twsrc%5Etfw">@nathenharvey</a> <a href="https://twitter.com/amanda_katona?ref_src=twsrc%5Etfw">@amanda_katona</a> <a href="https://twitter.com/cra?ref_src=twsrc%5Etfw">@cra</a> <a href="https://twitter.com/mbbroberg?ref_src=twsrc%5Etfw">@mbbroberg</a> <a href="https://twitter.com/jrrickard?ref_src=twsrc%5Etfw">@jrrickard</a></p>&mdash; Chris Short (@ChrisShort) <a href="https://twitter.com/ChrisShort/status/1070708893460910080?ref_src=twsrc%5Etfw">December 6, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Then things took on a life of their own. I grabbed my phone at one point and it was obvious it had restarted. Opening Twitter at one point made my iPhone Xs Max hot. If you don't think it blew up a few peoples' phones, check out this [tree of the Twitter thread](https://treeverse.app/view/rFWfcpbY):

[![Interactive view of the #KubeKhan Twitter Thread](/2018-learnings-2019-expectations/kubekhan-thread-spidered.png)](https://treeverse.app/view/rFWfcpbY)

[Jaice Singer DuMars](https://twitter.com/jaydumars/status/1071185111025049601) named it [#KubeKhan](https://twitter.com/search?l=&q=%23kubekhan). Although spelled incorrectly at first, like any good thread in tech someone acknowledged the misspelling and fixed it. Words are hard, y'all!

[Bob Killen](https://twitter.com/MrBobbyTables) brought us the fantastic `:khanparrot:` which is available in the Kubernetes Slack and as a higher resolution [Khan Parrot GIF](/my-kubecon-cloudnativecon-na-2018-recap/kubekhan-parrot.gif).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">:khanparrot: <a href="https://t.co/eTL1EXxgj4">pic.twitter.com/eTL1EXxgj4</a></p>&mdash; Bob Killen (@MrBobbyTables) <a href="https://twitter.com/MrBobbyTables/status/1071566233424646145?ref_src=twsrc%5Etfw">December 9, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Vallery Lancey](https://twitter.com/vllry) did the amazing KubeKhan stickers. She was also a driving force in spreading the message. She was even named [the first official KubeKhan Ambassador](https://twitter.com/vllry/status/1078477965015445504). And there are rumors about a KubeKhan Barcelona in 2019.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Find me tomorrow!!! <a href="https://t.co/kOTO2Qzgf3">pic.twitter.com/kOTO2Qzgf3</a></p>&mdash; Vallery Lancey (@vllry) <a href="https://twitter.com/vllry/status/1072738257387962368?ref_src=twsrc%5Etfw">December 12, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

None of this might have happened if it weren't for Kim McMahon. She opened a way to create a safe space for folks to gather. Making sure folks saw everyone they could during KubeCon. For that, I am truly thankful.

> I think a tradition has been born! —[Kim McMahon](https://kimmcmahon.me/)

I am also immensely thankful to Jaice, Swarna, Bob, and Vallery. But, more importantly, I'd like to thank everyone that came out to hang out during one of the more draining conferences of the year.

## Conclusion

In conclusion, 2018 was a mostly up and but somewhat down year.

Up: Work, personal, and industry accomplishments  
Down: The toll it takes on health and personal life

The lesson to learn here is to keep balance. Knowing [when and how to say no](https://opensource.com/article/18/5/art-saying-no-devops) is still important. I've forgotten how much emphasis the military put on taking care of the home front. This enabled folks going down range to focus on the difficult tasks of warfighting knowing there was a safety net at home for their family. Your physical and mental health is important too. Make sure your foundations are solid. This will enable you to be the best possible version of yourself you can be.

After Christmas morning this year, I was finally able to mentally shut the door on all that was 2017. My 2018 was filled with a lot of great people. I made some amazing friends this year that I'm very happy to be bringing into 2019. I am hopeful that whatever economic upheaval we face as a society in 2019 is limited. But, in case it isn't and times get hard for you, don't hesitate to reach out for help.

Oh and [5G](https://www.wired.com/story/wired-guide-5g/) (lulz... kinda).

## Works referencing this article

* [Kubernetes Future: VMs, Containers, or Hypervisor?](https://www.infoq.com/news/2019/05/kubernetes-future/)
* [Containers in 2019: They're Calling it a [Hypervisor] Comeback](https://www.infoq.com/articles/containers-hypervisors-2019/)
* [OpenStack Provider for Virtual Kubelet: A Nodeless Approach for Kubernetes (PDF)](https://object-storage-ca-ymq-1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-assets-prod/summits/27/presentations/23991/slides/OpenStack-Provider-for-Virtual-Kubelet-A-Nodeless-Approach-for-Kubernetes2.pdf) ([cached](/2018-learnings-2019-expectations/OpenStack-Provider-for-Virtual-Kubelet-A-Nodeless-Approach-for-Kubernetes2.pdf))


