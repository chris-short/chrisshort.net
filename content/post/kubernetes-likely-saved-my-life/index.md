+++

author = "Chris Short"
date = 2024-06-06T07:00:00Z
description = "Kubernetes contributor Chris Short recounts how the open source project, its community, and access to mental health resources through an employer likely saved his life while struggling with PTSD, anxiety, and depression."
slug = "kubernetes-likely-saved-my-life"
tags = ["Kubernetes", "Open Source", "mental health", "EMDR", "community", "therapist", "psychiatrist", "KubeCon"]
ShowTOC = true
title = "Kubernetes Likely Saved My Life"
[cover]
image = "https://shortcdn.com/chrisshort/KCSNA_2019.jpg"
alt = "Happy 10th Birthday, Kubernetes | Photo from Kubernetes Contributor Summit San Diego 2019"

+++

{{< carbon >}}

Kubernetes and I share something: We were born on June 6th (I didn't pick the date; I probably would've though to take more attention away from me). I've contributed to Kubernetes for 70% of its life. Today, [Kubernetes turns 10][22]. There are many things I could write about to commemorate this day. It has improved my life (like every other open source project I have worked on) by giving me desirable skills in an emerging space. It also allowed me to lead again (I'm a co-lead of the [Kubernetes Contributor Comms subproject][4]). Today, however, I'm writing about a personal story that would not be befitting of Kubernetes' websites ([K8s.io][1] and [K8s.dev][2]). As it's personal and my life is eventful, there's been a lot of twists and turns

## Humble Beginnings

I started tinkering with Kubernetes one night in our Wake Forest, NC, house in 2016. I'd heard about Kubernetes as part of my emerging technology reading (where do you think Suggested Reads came from?). I knew I needed a lot of time and some caffeine to sit down and learn this new thing. When Max was a baby, I could lock myself off in my home office and learn while Max slept comfortably in his crib. I did this with Ansible a few years before Max's birth. This time, I emerged from the office after more hours than it took to learn Ansible, telling Julie I saw the future of technology and would start getting involved in the Kubernetes project itself. I will never forget how [Max giggled at the word Kubernetes][3] when he was a wee baby.

Not too long after this, I recall sitting in my cubicle while I was at SolarWinds MSP (now called N-able) in Raleigh in 2017 and contributing to the Special Interest Group (SIG) for Docs ([my first Kubernetes PR][5]). I loved being able to work on a project while learning the technology. Plus, the people were terrific. I enjoyed working with the folks around the Kubernetes project and saw Go code being used extensively for the first time—a co-worker introduced me to Go years before. We had gone to a few Go Meetups in Raleigh (where I met Vincent Batts and Michael Hrivnak, which means I learned about containers at one of these Meetups).

By now, I'd already set up a baby Kubernetes cluster on Raspberry Pis in my home office (yes, [before Max and I built this cluster][6]). The cluster was slow, but the workloads I had to test were cronjobs, scripts, and random containers I'd spin up as part of a [DaemonSet][7] and [Deployment][8] to test my skills. Kubernetes had many moving pieces, and there was no way I could learn them all with my existing slate of doctor's appointments and other things that took me away from technology.A getting to know you exercise

[![Three Things Chris Short is Professionally Known For from A getting to know you exercise][15]][16]

## Contributing

Like many Kubernetes Contributors, I got my start in Docs. I was looking for another SIG to help with something more kinetic than Docs, and that's when I found SIG Contributor Experience (SIG ContribEx). Now is the point in the story where we diverge from discussing my history in Kubernetes to how Kubernetes likely saved my life.

SIGs have leads. These leads volunteer to provide guidance, continuity, and leadership in their group (Working Group, Sub-Project, or other community unit). They are generally good people with extensive experience in the Kubernetes ecosystem. When I started in SIG ContribEx, we had two tremendously talented leads (much like the current leads).

I built relationships with everyone in Contributor Experience; it felt like home. I also met all the Michigan CNCF Ambassadors (Jorge Castro, Bob Killen, and Jeffrey "Jeefy" Sica) in these meetings (I'd go down to Ann Arbor often in the following years). When I lost all job prospects in late 2017, Dan Kohn at CNCF stepped up to cover my hotel and admission so that I could go to Austin for KubeCon to do some significant job searching. At a crowded hotel bar/restaurant in Austin, Jorge told me I should volunteer to be a CNCF Ambassador (another life-altering event). It also snowed on us in Austin; I was coming from Michigan and was not expecting that. I didn't have a hoodie, jacket, or any outerwear, so I threw on a DigitalOcean hoodie from the show floor and continued my business. Bob and Jeefy have since moved, but for a while there, Michigan had an unusually high number of significant Kubernetes contributors.

[![chris-short Kubernetes Contributions | CNCF ContribCard](https://shortcdn.com/chrisshort/chris-short_CNCF_ContribCard.webp)][19]

## First Signs of Mental Health Trouble

Sadly, it was after this KubeCon that my mental health unraveled. I was on trepidatious footing mentally. At GopherCon 2017 in Denver, I started getting anxious when a room was overcrowded for a Kris Nova talk. It took every ounce of strength not to bolt out the door as I felt trapped in a sea of people. But I got through it and met Kris Nova for the first time.

Kris recognized my name from Twitter. I asked a question or two about her talk, and we parted ways. But we remained conference friends until her passing.

### I miss Kris Nova

Believe it or not, Kris and I shared much in common. She's what made me realize that I wasn't alone in not having a place to call "home" (where you're from) and having significant problems with family members. I don't know if she ever noticed. Still, Kris and many others helped me understand the hate, abuse, and injustices that existed toward the transgender community (and many people I called friends). Kris played an outsized role in helping me understand how I could help trans friends and others in the LBGTQ+ communities. I'm forever grateful to Kris Nova for that.

## Everything Falls Apart

Fast forward to September 2017, I was having a lot of anxiety around my hell week **before** the 9/11 anniversary when I lost family and friends only to emerge from that week to a massive terror attack. This series of events forever changed my life. I went off to get some payback and came out of it injured.

Anxiety (and depression) became palpable and started changing me. I had to quit my job as a Manager of DevOps & Infrastructure. The stress this role was putting on me as I was navigating these symptoms alone was compromising my mental health even more (don't work for a workaholic was a big takeaway from this).

No matter. I had another job lined up to work at StockX on their Kubernetes clusters, which became [the source of a hack][17] later on. StockX pulled their offer at 3 PM on Wednesday before Thanksgiving (I was supposed to start after Thanksgiving 2017). The source of this rejection was the Quicken/Rocket family of companies, which Dan Gilbert owned in addition to StockX. Dan Gilbert has a stake in most of downtown Detroit through his Bedrock property management company.

I had interviewed there previously, and I rejected the offer when the recruiters tried to pull a fast one on me and cut my salary expectations to match how Quicken does things (underpays and overworks). I was livid. Quicken brought me up here and showed me parts of Detroit that I still show off to people today. The recruiters put me in a corner where I had to either significantly reduce my expected salary or reject the offer outright, which I did. I then went to town on the recruiters for doing something so unethical. That word made it back to the company, and then I was blackballed at Quicken/Rocket, which had a material impact on my job prospects in downtown Detroit. I should've brought a civil case against the recruiters, but all that would do is bankrupt them financially. It wouldn't change the fact they were morally bankrupt.

For the second time in my civilian career, I suddenly had no idea how my future would unfold. It was an incredibly stressful period. [We had a miscarriage][9], we had a terrible Christmas, and all I felt was anger and sadness at the whole situation (this was a new thing for me). But, thanks to Dan Kohn for sending me to KubeCon. Without that, I wouldn't have talked to as many people as I did at KubeCon in Austin in 2017.

During the downtime, like a fool, I binge-watched an entire Netflix series that followed a [National Reconnaissance Office (NRO)][10] site in Australia. I was stationed at another facility similiar to the one in this series; a joint NSA, NRO, and [Five Eyes][11] intelligence facility. I was there for an eventful bit over two years. The crew must've had some former intelligence folks helping with production because the plotlines crammed all my years working with and for intelligence agencies into an 8 episode, triggering event. The series compressed my time in and around the intelligence community into 8 hours.

All the memories rush back in as I relived them with every episode. This show pushed me beyond the brink. It broke me mentally. It took the knowledge I had tried to forget due to its classification and the knowledge Snowden unleashed on the world and made them one consciousness (they had not been before). It made me realize I had unknowingly aided in violating multiple laws while working in the intelligence community. Compartmentalization brings a profound personal responsibility you're never told about: [Don't cross the streams][12].

## Finding My Way Again

At the beginning of 2018, I started working with John Willis (thank you, John, I owe you a tremendous favor). The company was a consulting firm with various contracts, including a very lucrative government contract. John and a sales team member would talk to stakeholders at the high level of the IT org. I went into these places and implemented changes alongside the developers and infrastructure folks. My DevOps, Go, Linux, Ansible, Kubernetes, and every other skill were brought to bear. When it became apparent the consulting company was pivoting to 100% government work, I began looking for a new role. Thankfully, my Ansible friends came through and wanted me to join the Product Marketing Team at Ansible.

I liked working with the Ansible team as an end-user and part-time community member. I was still working in the Kubernetes community, but returning to Ansible would be easy. But, to my surprise, it was challenging. Then, there was the initiative to build Kubernetes Operators with Ansible. I now knew why they brought me in.

Nevertheless, the two communities were so different that it became hard to switch contexts between them. I was increasingly confused as the lines blurred between how to do things in one project and the other. I knew Kubernetes was a path of technological advancement, so I wanted to continue working on it. I eventually found a home in the OpenShift team, and folks can [see that play out on YouTube playlists][13].

## The SIG Lead that saved my life

While on the Ansible team, I attended a Red Hat company gathering for marketing folks in the Red Hat Tower annex. At this event, I met one of the co-leads of Kubernetes SIG ContribEx in Raleigh in person. We talked during one of the breaks. They mentioned the tone-deafness of an activity we had done earlier, and I agreed wholeheartedly.

The leader of this gathering had a peeve about folks being on their mobile phone (Boomer thing? ¯\\\_(ツ)\_/¯). My iPhone is always my link back to my mental health providers, and I needed to get some answers to things I was feeling. The leader walked by me in the back of the room as I was trying to figure out what, if anything, I could do to reduce my anxiety and angst. I was going back and forth with the Head of Psychology at the Ann Arbor VA. That's when this leader walked past me and snarled. I couldn't say or do anything out of fear of retaliation (I'd already heard some stories to make me think that).

The snarl and my inability to do anything about it caused me to lose control of my emotions. Little did I know then that this was due to numerous incidents in my military life **and childhood**. I'll leave out some details here, but I had a long list of things I needed to work through.

## The Life-Saving Part

I pulled the SIG lead aside the next day and told them what happened. We both did not like this leader for an ever-increasing list of reasons. After explaining everything and ensuring I was okay, they inquired what mental health at the VA was doing for me. I explained the VA's resource constraints and an ever-growing number of patients. I also mentioned I felt like both Julie and I wanted me to get out of the VA system entirely after I took part in a Ketamine trial/study they were doing for Pain Management and PTSD patients.

Primary Care Management, Pain Management, Radiology, and Physical Therapy were all easy to figure out in the civilian healthcare system as I had navigated them in the military trying to get my injury from 2003 diagnosed. But, any Mental Health was a black hole—a knowledge gap I knew not how to fill. I also barely understood health insurance (a very foreign concept of our own making here in the US). When the SIG Lead said, "You know, we have great mental health benefits at Red Hat. You should explore those." I explained this was new territory for me. I had no idea what I needed to do to get my mental health care going outside of the VA. After the on-site, we met so they could walk me through how to get things going.

In the US, you need a psychiatrist who gives you medicine, and you need a therapist who helps you with your feelings. The SIG Lead taught me everything I know about obtaining mental healthcare and teaching me how to find a psychiatrist and a therapist. These two things are hard. I reached out to other friends who had indicated they were seeing folks for their mental health. I got pretty lucky with my therapist; more on that in a moment. I did not get so lucky with a psychiatrist. I'm on all the meds I'm on, and some of them aren't good for me, all thanks to a few poorly informed psychiatrists (this is why continuous learning is so critical to me).

### EMDR

There are many ways to get to therapy now, thanks to a proliferation of mental health apps and many types of treatments. The therapy that helped me the most was **_[Eye Movement Desensitization and Reprocessing][14]_** [(EMDR)][14]. Many people have heard of Cognitive Behavioral Therapy (CBT), but there's a newer specialty called EMDR. I had read about it in WIRED as an emerging therapy **_years_** before. My wife, Julie, had read a detailed piece about how it helped people who had experienced multiple traumas. She recalled the WIRED piece I'd read and told her it might be helpful in the future. The article Julie read made it clear this was for me, and it was now available to many folks. That's when I knew it was now time to pursue EMDR and find a therapist who could do this.

[![This Graphic Perfectly Shows How EMDR Can Help You With Trauma | Source: https://themighty.com/topic/trauma/therapy-illustrated-emdr-graphic-trauma/][18]](https://themighty.com/topic/trauma/therapy-illustrated-emdr-graphic-trauma/)

EMDR is very interesting. You and your therapist work to list all the impactful things that have happened in your life up to this point. You and your therapist queue up a previously discussed memory. The hard part is when you're reviewing every minute detail to ensure you connect to the feelings you've suppressed.

EMDR simulates the eye movements of REM sleep using motion and light. The logic is that your brain processes memories and trauma while you are in this phase of sleep. I had a "lock it up in a box" mentality regarding bad memories and emotions. To make matters even worse, I hardly slept. The pain from the nerve and spine damage often made me so uncomfortable I couldn't sleep.

The lack of sleep was hurting me as much as the bad memories. Making matters worse, I had straight-up nightmares of the world ending in various ways every night. It's hard to sleep when your brain torments you every night. I remember one nightmare I had was so vivid I woke and thought that the US Women's National Soccer team had been the target of a massive terrorist attack, and I started looking for info on social media. The lines blurred often. But, given the proper medications, I could sleep again. That was tremendously helpful, but the VA never picked up on it.

I had suppressed numerous memories for so long that my mind did not fully process them like other memories. I could do EMDR from home throughout the pandemic (thankfully). I knew things were happening in my brain when I felt the back of my head tingling during the eye movement part of the session. I don't know if others have had similar experiences, but this made me realize things I knew little about were happening.

The way we did EMDR remotely was fantastic. My psychiatrist would spin up a customized session in a web app (`ngrok` in use on the backend). The full-screen web app comprises a simple background color and a contrasting circle. The circle moves horizontally at an often unnoticeable variable speed. You lock your neck and follow the circle with your eyes to emulate what happens to your eyes during REM sleep. You and your therapist queue up a memory, discuss how it affects you, and how you want to feel about the memory. This part is quite clinical. You repeat several series of watching the circle move across the screen horizontally with check-ins to see what you're thinking as you work through a negative feeling and replace it with a positive one during the processing.

Anything is possible with the proper care. In conclusion, a kid with a rough upbringing can come from the middle of nowhere in North Carolina, become a known person in an industry in a big city, speak at events across North America and Europe, become an ally to many, and work in open source for a living.

### Comments

**Feel free to comment about this blog on [Reddit][20], [Hacker News][21], or the social media network of your choice.**

[1]: https://k8s.io
[2]: https://k8s.dev
[3]: https://chrisshort.net/kubernetes-illustrated-childrens-guide/#reading-it-to-max
[4]: https://github.com/kubernetes/community/tree/master/communication/contributor-comms
[5]: https://github.com/kubernetes/website/pull/3285
[6]: https://chrisshort.net/raspberry-pi-kubernetes-cluster/
[7]: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
[8]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
[9]: https://chrisshort.net/miscarriage-a-culture-of-silence-helps-no-one/
[10]: https://www.nro.gov/
[11]: https://en.wikipedia.org/wiki/Five_Eyes
[12]: https://youtu.be/wyKQe_i9yyo
[13]: https://www.youtube.com/@OpenShift/search?query=chris%20short
[14]: https://www.emdr.com/what-is-emdr/
[15]: https://shortcdn.com/chrisshort/professionally-known-for.png
[16]: https://chrisshort.net/a-getting-to-know-you-exercise/#three-things
[17]: https://techcrunch.com/2019/08/03/stockx-hacked-millions-records/
[18]: https://shortcdn.com/chrisshort/EMDR-Therapy-Before-After.jpg
[19]: https://shortcdn.com/chrisshort/chris-short_CNCF_ContribCard.webp
[20]: https://www.reddit.com/r/devopsish/comments/1d9c6r0/kubernetes_likely_saved_my_life/
[21]: https://news.ycombinator.com/item?id=40597378
[22]: https://kubernetes.io/blog/2024/06/06/10-years-of-kubernetes/
