+++
author = "Chris Short"
categories = ["Civics", "2019"]
date = 2019-07-29T07:00:00Z
description = "Oracle has been pitching a Larry Ellison sized fit over JEDI, the $10 billion DoD cloud contract, and endangering US national security in the process."
draft = false
tags = ["Oracle", "JEDI", "AWS", "cloud", "DoD", "Interoperability Clearinghouse", "China", "Larry Ellison"]
title = "Use The Force, Larry: Oracle Playing Politics with Nation's Defense"
[cover]
image = "/use-the-force-larry-oracle-playing-politics-with-nations-defense/jedi-oracle-yoda.jpg"

+++

> This article is based on the introduction to [DevOps'ish on 2019-07-28](https://devopsish.com/138/). Some parts are duplicated but this is a much deeper dive than I could do in the newsletter (and these 1500 words barely do the topic justice). Also, yes, I work for Red Hat. Yes, I'm a CNCF Ambassador. No, these views do not represent theirs. [Please take a moment to read my disclaimer](/disclaimer/). Above all things, I'm an American, and this issue trancends business.

Let's talk about JEDI. Not the lightsaber wielding type; it's US Department of Defense's [Joint Enterprise Defense Infrastructure (JEDI)](https://devopsish.com/tags/jedi/). JEDI is a $10 billion, single-award, indefinite delivery, indefinite quantity contract for the largest department in the United States' government's cloud business. The process started in late 2017 and has had all sorts of twists and turns. The competition for the contract had come down to two suitable companies: [Amazon Web Services (AWS) and Microsoft Azure](https://www.onmsft.com/news/microsoft-and-amazon-now-the-last-two-companies-in-the-race-for-pentagons-jedi-contract). But, Oracle has been pitching a Larry Ellison sized fit over the process. Specifically, [Oracle has protested JEDI's selection process](https://www.washingtonpost.com/business/2018/11/14/gao-strikes-down-oracles-bid-protest-clearing-way-pentagons-billion-cloud-effort/) since last November.

{{< eo >}}

## Interoperability Clearinghouse: Is this a joke?

But, there's a twist in the Oracle portest of JEDI. [Interoperability Clearinghouse](https://www.ichnet.org/) protested on Oracle's behalf which struck me as odd. But, when looking at the Interoperability Clearinghouse web site suspicious things jumped out. It looks like a default Wordpress site with the default posts still up and some awkwardly formatted content added after the fact. Since no one has ever stood up a web site hastily for the purpose of anything nefarious, further digging was a worthwhile venture. There's an address at the bottom of the Interoperability Clearinghouse [contact us](https://www.ichnet.org/contact-us/) page. It's actually linked to the Google Maps location of a private residence owned by none other than, [Robert K. Weiler](https://www.linkedin.com/in/bob-weiler-12a3905b/), Executive Vice President, Global Business Units at **Oracle**.

Interoperability Clearinghouse and along with it, Oracle's protest, [were deemed malarkey](https://federalnewsnetwork.com/defense-news/2019/07/judge-rules-dods-jedi-contract-violated-law-on-multiple-awards/). The method by which DoD decided to source the contract to a single-vendor was flawed. But, "[the court also ruled that Oracle couldn't have been harmed by the single-award decision, since the company was disqualified from the JEDI procurement on other grounds.](https://federalnewsnetwork.com/defense-news/2019/07/judge-rules-dods-jedi-contract-violated-law-on-multiple-awards/)"

{{< carbon >}}

Oracle should not be in the hunt for JEDI, *period*. DoD set a requirement that JEDI vendors must have, "[a large enough commercial cloud business as of January that the DoD contract wouldn't make up a majority of their cloud sales.](https://federalnewsnetwork.com/dod-reporters-notebook-jared-serbu/2018/12/oracle-lawsuit-claims-dods-jedi-contract-violates-law-on-7-counts/)" Oracle's cloud isn't big enough to prevent it from falling victim to catering to DoD. As opposed to pushing DoD to move faster and innovate based off other customers' innovations getting integrated back into the products. It's the "rising tide lifts all boats" philosophy and DoD wants in on it.

## Trump vs. the obvious winner, ~~Bezos~~ AWS

[In my newsletter last week](https://devopsish.com/137), I shared a story with part of the headline stating, "Judge shoots down Oracle protest." Like any good government procurement process though, this is where the lawyers stepped back and the lobbyist stepped forward. I also linked to a story last week discussing [the US President's concern over JEDI](https://www.bloomberg.com/news/articles/2019-07-17/trump-expressed-concerns-about-pentagon-cloud-computing-contract). The sitting US President hates Jeff Bezos, richest man in the world, owner of the Washington Post (a frequent critic of the Trump administration), and CEO of Amazon. AWS is the clear front runner as the [#1 cloud provider *in the world*](https://www.datamation.com/cloud-computing/cloud-computing-companies.html). AWS is the most popular cloud provider in the US by a long shot. It might even be safe to say that thanks to [AWS GovCloud](https://aws.amazon.com/govcloud-us/), which has been up and running since 2011, AWS is probably the most popular cloud provider in the US government. The seventeen named entities encompassing the US Intelligence Community use [AWS Secret Region](https://aws.amazon.com/blogs/publicsector/announcing-the-new-aws-secret-region/) extensively. Azure is in there too but, probably not to the extent and depth AWS is.

## Holy corruption, Batman

If you thought last week's warning shot was the end, you'd be wrong. [Senator Marco Rubio has sent letters to the President](https://www.fedscoop.com/jedi-letter-rubio-republicans/) urging further scrutinization of JEDI. What's interesting is that during his failed presidential run in 2016, [Senator Rubio took $4 million from Oracle co-founder Larry Ellison](https://www.usatoday.com/story/tech/2016/07/17/tech-turns-its-back-trump-except-few/86508920/). It's also worth noting that [Oracle's CEO was on Trump's Transition Team](https://fortune.com/2016/12/15/trump-oracle-safra-catz/).

Make no mistake, Oracle is playing *petty politics* here. JEDI could be Oracle's legacy. It could easily turn out to be a bad legacy (cost overruns, poor delivery, etc.). But, this is a legacy that will make Oracle investors happy. Oracle is pushing hard to have a seat at the $10 billion table. Corporations are built for self-preservation. If the US government continues its move to AWS, there's little hope Oracle's fledgling cloud business will gain much traction. Oracle seemingly can't compete on features and has decided to compete in other ways. Let's face it, [the moment Google Cloud bowed out](https://www.bloomberg.com/news/articles/2018-10-08/google-drops-out-of-pentagon-s-10-billion-cloud-competition), Oracle saw an opportunity and is doing everything it can to disrupt the process in Washington DC. [Amazon is rightfully getting their own lobbyists with Trump ties on board](https://www.geekwire.com/2019/amazon-hires-lobbyist-trump-ties-amid-contentious-pentagon-cloud-contest/). But, I fear it might be too little, too late. President Trump strikes me as someone who might value personal and political connections far more than logic and reason.

## It's not about you, Oracle

The [Joint Staff has already said, "Our warfighters need this capability **now**."](https://www.fedscoop.com/joint-chiefs-cio-jedi-delay-letter/) Which in military speak means, they needed to start the JEDI process three to five years ago. Regardless, I agree with the Joint Staff here; now is not the time for delays. US warfighters are no longer two or three technologies ahead. There is a lot of legacy cruft in the Department's vast network of earth and space based assets. Azure or AWS architects and engineers will make it the best possible experience as more workloads move to JEDI.

With the launch of [AWS Ground Station](https://aws.amazon.com/ground-station/) (on top of the massive AWS portfolio), I have a high degree of confidence in the capabilities AWS has to successfully put the right tool in the hands of the right warfighters at the right time. I do not have confidence Oracle could do the same. Not because of the Oracle folks themselves but, because of the People, Process, and Tools that make up Oracle, the company, as a whole.

> Regardless of your politics or nationality, if you live in the post-World War II "west" you likely will be impacted by JEDI.

JEDI gives the Department of Defense's cloud budget to another company to do the work the Department can't. I believe DoD has finally learned that it can't innovate at the speed of industry and now wants industry leads to guide its cloud efforts. This gives the JEDI contract winner a lot of power in determining how cloud computing works in the future and how well it can help governments. NIST and DARPA could, in theory, be customers of JEDI. Putting those two entities on AWS or Azure is going to net the United States and its economy the most benefit as a whole, in my opinion.

## The US is losing the #1 spot

The US is starting to lose its footing as the #1 economy and military in the world. Don't believe me? You should watch my [Thucydides Trap talk](/chefconf-2018-devops-is-not-war/). When you're done there, [read the book that research came from](https://amzn.to/30ZqLZd). China is setting itself up to be [the world's leading economy sooner rather than later](https://www.cfr.org/backgrounder/chinas-massive-belt-and-road-initiative). Meanwhile, some folks in the US are still calling China an emerging market. 🤦‍♂️🙀🤯

*Note: chrisshort.net may earn compensation for sales from links on this post through [affiliate programs](/terms#affiliate-link-policy).*

Do you think China, Russia, or any US adversary for that matter, has this problem? Probably not. China is technologically and politically adept enough to have all this sorted out. Look at the [entity list](https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern/entity-list) and the speed and effectiveness of the Chinese response. Politically, [China has worked to make getting waivers](https://www.reuters.com/article/us-huawei-tech-usa-ross/us-will-deal-with-huawei-waiver-applications-within-weeks-ross-idUSKCN1UI27I) to avoid the ban a probability. Now, [China is focusing on US allies](https://www.scmp.com/tech/gear/article/2176968/huawei-agrees-uk-security-steps-avoid-5g-ban-report) all the while [bringing more of their technology onshore](https://technode.com/2019/07/24/chinas-chipmakers-risc-v-sanctions/).

All this time, China has also been working within a politically naive technology industry. Through means outside the scope of this article, China has enabled [businesses with US and EU presences to lobby against the entity list bans](https://www.cloudbees.com/blog/huawei-how-we-have-become-business-hostages-trade-war-against-china) (Cloudbees is one of many examples that came to mind immediately). Make no mistake, IT workers across the globe are in the middle of a propaganda war, potentially on many fronts, whether we like it or not.

### They never should have let you split the atom

Russia plays in a very different theater of operations than the US has traditionally. The elasticity and security capabilities of a fully integrated cloud might pay huge dividends against Russian tactics. Russia continues to move with impunity across the globe. Delaying this acquisition from going forward has compounding negative effects. Aging systems are yet again expected to survive somehow while the dithering in Washington drags on.

## What can we do?!?

If you are a voter in the US, please do me a favor this week. Reach out to your [Representatives](https://www.house.gov/representatives) and [Senators](https://www.senate.gov/general/contact_information/senators_cfm.cfm). Tell them the politics over JEDI needs to stop. Future generations are at stake here. The more the US dithers on cloud adoption, the stronger our adversaries become. We need to give our service members the best tools to do their job right the first time. Demand from Congress that the JEDI selection moves forward unencumbered by the White House with AWS and Azure as the final two bidders. Don't force the Department of Defense to use potentially inferior tooling against an ever evolving set of adversaries across the globe.

### Bonus

Who wants Oracle getting $10 billion more in US taxpayer money anyway? You should call Congress based on that possibility alone.
