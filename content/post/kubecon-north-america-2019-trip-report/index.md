+++
author = "Chris Short"
categories = ["DevOps"]
date = 2019-11-30T07:00:00Z
description = ""
draft = false
tags = []
title = "KubeCon North America 2019 Trip Report"
image = "/kubecon-north-america-2019-trip-report/kubecon-na-2019-contributor-summit-group.jpg"
imagealt = "Attendees from the KubeCon NA Contributor Summit pose for a group photo"

+++

Disclaimer: I work for Red Hat, [my views and opinions are solely mine](/terms/) though.

I attended, worked, volunteered, spoke, etc. in San Diego at KubeCon + CloudNativeCon North America 2019. Overall, 12,000 people attended the conference which was held in the same venue ComicCon is held every year. The event was absolutely grueling and it has taken almost a full week to recover. To give you an idea, I didn't even want to write the bare minimum report I sent internally to Red Hat. I was in so much pain that reliving the week felt like it'd probably do more harm than good so I put off writing this trip report for a week.

Why? I'll get into that. But, to give you an idea of how I felt a day after KubeCon ended, I wrote in [DevOps'ish](https://devopsish.com/155/) that I wasn't sure why I put in so much energy:

> I can tell you for certain, I’m not the only one that feels this way. One CNCF Ambassador already hung it up. I have legitimate concerns about the long term viability of Cloud Native Computing Foundation. At this rate of disregard for the communities forming underneath it, the intent seems to get as much money as possible at all costs. It’s frustrating as hell and I’m still mulling what to do.

For my own health and for the benefit of others, I'm going to recap my KubeCon NA 2019 experience. It will be hard to read at points, feel free to skip ahead. But, this is me going through an event 12,000 other people did. Just because my experience was a net negative for me, it doesn't mean that was the case for everyone. To be clear, this is my account of my time. I'm still a CNCF Ambassador because I'm going to work to fix the problems.

## The Run Up

Once I got done with [AnsibleFest](https://chrisshort.net/ansiblefest-atlanta-2019-trip-report/), I immediately shifted my event focus over to KubeCon. I reached out to my colleague Josh Berkus in the Red Hat Open Source Program Office to see where I could help with the KubeCon NA 2019 Contributor Summit. Josh said I should with the Contributor Workshop. I reached out to Guinevere, Rael, and Marky to see where they needed help and off we went.

{{< mc >}}

At first, the team seemed a little small to me but, I think we had four people between two sets of cirriculum. New and Intermediate Contributor Workshops were going to be combined for the first half of the day then split when it was time to go hands-on. I got into the [combined workshop slides](https://docs.google.com/presentation/d/18LcwvqyNn74HgqIk7O-ChgfSsJAqDIYm7obguEXto4Q/edit?usp=sharing) and immediately saw nits I couldn't let fly. I'm a real stickler for slides. I spent over half my Air Force career as a non-commissioned officer and the past two in "marketing" roles. One thing I can't stand is inconsistent font selections. I spent a few evenings pouring over all 230 slides trying to make improvements to every slide. The alignment of objects, font face, images, etc. were all tweaked in some capacity. To me, these are table stakes things that I do to every slide deck I work on. I've done this for two decades now, I can list my nits here:

* Images that don't have transparent backgrounds: for example, a white rectangle surrounding a cartoon Where's Waldo
* Inconsistent font faces: Arial here, Calibri there. Google Sans not Open Sans. It bugs me when I see it so I fix it.
* Alignment: The entire deck should allow the viewers eye to flow like water over and through the content. Misaligned text blocks or images that force the viewer to move their eyes like a pinball slapped about is not conducive to learning.
* Sentences instead of bullets: If I can say it in five words, it shouldn't take two lines. Don't write sentences in slides unless it's a quote, theorum, law, etc. Tight bullet points only.
* Mismatched layouts: Copy and pasting slides is cool. I wholeheartedly approve of repackaging good content. But, it should match the medium it is being pasted into. To be honest, it's often easier to create a new slide with the new deck's layout and 'Paste without formatting' from the source material. This way the content matches the new deck's layout.

Two-hundred and thirty slides. I touched almost every one. That in itself was a lot of work. But, I needed to actually add content and bring things up to date too. Also, I needed time to familiarize myself with the content to be able to actually teach it. Keep in mind, we didn't have this workshop or a well documented process when I jumped into the Kubernetes community. Also, I don't think I was actually a member of the Kubernetes GitHub organization until this year despite having a contributor patch since 2017. This was likely several people's first experience in the Kubernetes community and maybe even some people's first time using GitHub. I put a lot of pressure on myself to get this right.

{{< carbon >}}

As the date approached, I could feel the unnecessary pressure I put on myself to make this perfect start turning into a cold of some sort. This is how my body tells me to slow down. The last time I didn't listen to this signal, I wound up with a long, debilitating case of Shingles that sidelined me from KubeCon EU and China last year. This is something I'm actually working on in therapy. From 9/11 to the end of 2010, I lived in a "You have to be lucky all the time. We only have to be lucky once." world in the military. When I start to get stressed and overwhelmed, I instinctively invoke some of the not so healthy endurance skills I learned. This leads to the need to be perfect all the time mentatility too. I'll keep this in mind in the future but, sadly there I was.

Then the team lead got the flu and was pretty much grounded. Something else happened and I pretty much hit the panic button. Paris came to the rescue with more hands to help. A few of my friends answered the call for help too. But, there was a distinct possibility I was leading the class by myself with a few proctors. I think around the Wednesday before KubeCon, Guin finally got me to reduce my scope down to less than the entire deck (I'd already tweaked it so I was okay with that). I was working late hours, on meeting after meeting, and recording podcasts the entire week before KubeCon. I would wake up and my voice would be rough be clear as the day went. Then it like departed for a morning and I realized I needed to take a break. The last two nights before my flight to San Diego, I did not work. I conserved what little energy I had and tried to save my voice.

## Rejeckts

I ended up flying on the same flight as another Kubernetes Contributor from Michigan. We touched down in the AM hours in San Diego. The coolest thing about the airport was the fact we could pick up badges in luggage claim. We headed over to [Cloud Native Rejeckts](https://cloud-native.rejekts.io/). I stayed there for a little bit. I chatted with some folks, met some new people, bumped into a lot of old friends, and Red Hatters. The tacos were dope. I watched part of a talk about GitOps but, I could not get past the overly complicated infrastructure being described. I would totally attend Rejeckts again though for the networking alone. If you happen to hear a great talk in the process, that's gravy on top.

## The Day 0 Disaster

Let me preface this section by emphasizing that I stated there were too many day zero events at KubeCon months ago. Also, when Rejeckts and [Kubeyland](https://twitter.com/hashtag/kubeyland) were being discussed in the CNCF Ambassadors Slack channel a while back, I pointed out that including travel days, pre, and post-event activities KubeCon was going to be eleven days this year. To me, that is too long a time to be going at a conference pace.

Paris got us good. All the contributor summit staff got [special hats](https://twitter.com/ChrisShort/status/1196470760333664256). The hats did end up making it easier for attendees to find staff members. It was a good thing too because the contributor workshops were a total trainwreck and the participants needed probably needed more help than normal (and it wasn't only because I was teaching, thankfully).

As I mentioned, New and Intermediate Contributor Workshops were going to be combined for the first half of the day then split when it was time to go hands-on. The split was actually going to be the closing of a conference room wall dividing rooms 14 and 15 at the Marriot Marquis San Diego. I walked into the room and quickly learned the team on the ground was woefully underprepared for the day ahead. The facility nor A/V crew knew that the wall was in play during the day. The room had been set up as two different rooms. I walked in after the wall was open and the A/V was working to get the two seperate projectors to work from one HDMI cable. After numerous attempts at getting two projectors to be driven by my laptop, the team gave up as they had run out of options.

### Why I buy Apple products

The good news was the moment I realized the A/V team was in trouble, my brain started cranking away at a solution. I started with the contents of my laptop bag and figured if I needed any cables the A/V team could probably find them if they weren't too crazy. As it turns out, I have everything I need to drive two projectors from my laptop in my actual laptop bag.

![Thank you, Apple.](/kubecon-north-america-2019-trip-report/ncw-disaster-diagram.jpg)

All it took to make things work (I write this with a touch of sarcasm):

1. MacBook Air with USB-C to HDMI dongle (for Projector A)
2. iPad Mini with Lightning to HDMI dongle (for Projector B)
3. iPadOS 13 latest beta
4. macOS Catalina (latest GA release)

Turns out the macOS feature called [Sidecar](https://support.apple.com/en-afri/HT210380) is a real lifesaver. I was able to mirror the output of the MacBook Air's HDMI dongle over to the iPad Mini across the room. The iPad Mini then pushed a mirror of its display to Projector B. It was fully functional and working before the 9 AM general session started. It was amazing to see a new feature work so well the first time I ever used it right out of the box. Sadly, later on in the conference the iPad Mini was stolen (and AppleCare+ doesn't cover theft on iPads but it does on iPhones).

### Silly Hats, Sillier WiFi

Things were hectic but, seemed to be stabilizing. Then the actual instruction began and the WiFi went down. I don't mean it slowed down, it literally died. Two laptops with neighboring IP addresses connected to the same access point could not see each other. The event staff scrambled to try to get something working but it was the slowest possible WiFi I think I've had at a conference. It made instruction incredibly difficult and we received negative feedback before the day was even close to over as a result. But, we're going to work on setting up something to help us should this ever be a problem in the future.

The WiFi not ever fully recovering made for an exhausting day.

{{< adsense-matched >}}
