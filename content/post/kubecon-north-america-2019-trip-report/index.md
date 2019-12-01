+++
author = "Chris Short"
categories = ["Community", "Kubernetes"]
date = 2019-12-01T03:40:00Z
description = "CNCF Ambassador, Chris Short, describes the week that was in San Diego at KubeCon North America 2019"
draft = false
tags = ["KubeCon", "Kubernetes", "CNCF", "Ambassador", "Contributor Summit", "San Diego", "Marriott", "NATS", "iPad",  "blame", "conference", "cloud", "community", "pain", "open source"]
title = "KubeCon North America 2019 Trip Report"
image = "/kubecon-north-america-2019-trip-report/keep-cloud-native-classy.jpg"
imagealt = "Keep Cloud Native Classy"

+++

Disclaimer: I work for Red Hat, [my views and opinions are solely mine](/terms/) though.

> Please feel free to share your comments at  
> [/r/Kubernetes](https://www.reddit.com/r/kubernetes/comments/e4hm47/kubecon_north_america_2019_trip_report/), [/r/devopsish](https://www.reddit.com/r/devopsish/comments/e4fq86/kubecon_north_america_2019_trip_report/), or [The Orange Site](https://news.ycombinator.com/item?id=21676169)

I attended, worked, volunteered, spoke, etc. in San Diego at KubeCon + CloudNativeCon North America 2019. 12,000 people attended the conference, which was held in the same venue ComicCon is held every year. The event was grueling and it has taken almost a full week to recover. To give you an idea, I didn't even want to write the bare minimum report I sent internally to Red Hat. I was in so much pain that reliving the week felt like it'd do more harm than good so I put off writing this trip report for a week.

Why? I'll get into that. But, to give you an idea of how I felt a day after KubeCon ended, I wrote in [DevOps'ish](https://devopsish.com/155/) that I wasn't sure why I put in so much energy:

> I can tell you for certain, I’m not the only one that feels this way. One CNCF Ambassador already hung it up. I have legitimate concerns about the long term viability of Cloud Native Computing Foundation. At this rate of disregard for the communities forming underneath it, the intent seems to get as much money as possible at all costs. It’s frustrating as hell and I’m still mulling what to do.

For my own health and for the benefit of others, I'm going to recap my KubeCon NA 2019 experience. It will be hard to read at points, feel free to skip ahead. But, this is me going through an event 12,000 other people did. Just because my experience was a net negative for me, it doesn't mean that was the case for everyone. To be clear, this is my account of my time. I'm still a CNCF Ambassador because I'm going to work to fix the problems.

## The Run Up

Once I got done with [AnsibleFest](https://chrisshort.net/ansiblefest-atlanta-2019-trip-report/), I immediately shifted my event focus over to KubeCon. I reached out to my colleague Josh Berkus in the Red Hat Open Source Program Office to see where I could help with the KubeCon NA 2019 Contributor Summit. Josh said I should with the Contributor Workshop. I reached out to Guinevere, Rael, and Marky to see where they needed help and off we went.

{{< mc >}}

At first, the team seemed a little small to me but, I think we had four people between two sets of curriculum. New and Intermediate Contributor Workshops were going to be combined for the first half of the day then split when it was time to go hands-on. I got into the [combined workshop slides](https://docs.google.com/presentation/d/18LcwvqyNn74HgqIk7O-ChgfSsJAqDIYm7obguEXto4Q/edit?usp=sharing) and immediately saw nits I couldn't let fly. I'm a real stickler for slides. I spent over half my Air Force career as a non-commissioned officer and the past two in "marketing" roles. One thing I can't stand is inconsistent font selections. I spent a few evenings pouring over each of the 230 slides trying to make improvements to every slide. The alignment of objects, font face, images, etc. were all tweaked in some capacity. To me, these are table stakes things that I do to every slide deck I work on. I've done this for two decades now, I can list my nits here:

* Images that don't have transparent backgrounds: for example, a white rectangle surrounding a cartoon Where's Waldo
* Inconsistent font faces: Arial here, Calibri there. Google Sans not Open Sans. It bugs me when I see it so I fix it.
* Alignment: The entire deck should allow the viewer's eye to flow like water over and through the content. Misaligned text blocks or images that force the viewer to move their eyes like a pinball slapped about is not conducive to learning.
* Sentences instead of bullets: If I can say it in five words, it shouldn't take two lines. Don't write sentences in slides unless it's a quote, theorem, law, etc. Tight bullet points only.
* Mismatched layouts: Copy and pasting slides is cool. I wholeheartedly approve of repackaging good content. But, it should match the medium it is being pasted into. To be honest, it's often easier to create a new slide with the new deck's layout and 'Paste without formatting' from the source material. This way the content matches the new deck's layout.

Two-hundred and thirty slides. I touched almost every, single one. That in itself was a lot of work. But, I needed to actually add content and bring things up to date too. Also, I needed time to familiarize myself with the content to be able to actually teach it. Keep in mind, we didn't have this workshop or a well documented process when I jumped into the Kubernetes community. Also, I don't think I was a member of the Kubernetes GitHub organization until this year despite having a contributor patch since 2017. This was likely several people's first experience in the Kubernetes community and maybe even some people's first time using GitHub. I put a lot of pressure on myself to get this right.

{{< carbon >}}

As the date approached, I could feel the unnecessary pressure I put on myself to make this perfect start turning into a cold of some sort. This is how my body tells me to slow down. The last time I didn't listen to this signal, I wound up with a long, debilitating case of Shingles that sidelined me from KubeCon EU and China last year. This is something I'm actively working on in therapy. From 9/11 to the end of 2010, I lived in a "You have to be lucky all the time. We only have to be lucky once." world in the military. When I start to get stressed and overwhelmed, I instinctively invoke some of the not so healthy endurance skills I learned. This leads to the need to be perfect all the time mentality too. I'll keep this in mind in the future but, sadly there I was.

Then the team lead got the flu and was pretty much grounded. Something else happened and I pretty much hit the panic button. Paris came to the rescue with more hands to help. A few of my friends answered the call for help too. But, there was a distinct possibility I was leading the class by myself with a few proctors. I think around the Wednesday before KubeCon, Guin finally got me to reduce my scope down to less than the entire deck (I'd already tweaked it so I was okay with that). I was working late hours, on meeting after meeting, and recording podcasts the entire week before KubeCon. I would wake up and my voice would be rough be clear as the day went. Then it like departed for a morning and I realized I needed to take a break. The last two nights before my flight to San Diego, I did not work. I conserved what little energy I had and tried to save my voice.

## Rejeckts

I ended up flying on the same flight as another Kubernetes Contributor from Michigan. We touched down in the AM hours in San Diego. The coolest thing about the airport was the fact we could pick up badges in luggage claim. We headed over to [Cloud Native Rejeckts](https://cloud-native.rejekts.io/). I stayed there for a little bit. I chatted with some folks, met some new people, bumped into a lot of old friends, and Red Hatters. The tacos were dope. I watched part of a talk about GitOps but, I could not get past the overly complicated infrastructure being described. I would totally attend Rejeckts again though for the networking alone. If you happen to hear a great talk in the process, that's gravy on top.

I spent the rest of the Sunday afternoon [with my friend Kim](https://twitter.com/ChrisShort/status/1196193477119209473), trying to recharge, and getting my bearings for Day 0. I was still reviewing and familiarizing myself with the content so that nothing would blindside me. I wanted to be as ready as possible to help attendees work with me to find answers. At the very least, I wanted to know where to tell folks to start looking if I couldn't answer the question myself. The problem is, you'll never feel 100% comfortable with any material. Unless you created 100% of it with references to every possible thing, you're going to get questions. They're not going to be questions you could have thought to ask either. With all the stress of getting ready for Kubecon, it seems I had forgotten this fun gotcha. Turns out, nothing but my life experiences could have prepared me for Day 0.

## The Day 0 Disaster

Let me preface this section by emphasizing that I stated there were too many day zero events at KubeCon months ago. Also, when Rejeckts and [Kubeyland](https://twitter.com/hashtag/kubeyland) were being discussed in the CNCF Ambassadors Slack channel a while back, I pointed out that including travel days, pre, and post-event activities that this year's KubeCon was going to be eleven days. To me, that is far too long a time to be going at a conference pace. I hope CNCF will do something to keep this kind of event sprawl from happening in the immediate future.

Paris got us good. All the contributor summit staff got [special hats](https://twitter.com/ChrisShort/status/1196470760333664256). The hats did end up making it easier for attendees to find staff members. It was a good thing too because the contributor workshops were a total trainwreck and the participants needed probably needed more help than normal (and it wasn't only because I was teaching, thankfully).

Note: Huge shout out to Benjamin Elder for patching [KinD](https://kind.sigs.k8s.io/) the day of the Contributor Summit. I tripped over [a dependency issue and it was fixed almost immediately](https://twitter.com/BenTheElder/status/1196483070498496512).

As I mentioned, New and Intermediate Contributor Workshops were going to be combined for the first half of the day then split when it was time to go hands-on. The split was actually going to be the closing of a conference room wall dividing rooms 14 and 15 at the Marriot Marquis San Diego. I walked into the room and quickly learned the team on the ground was woefully underprepared for the day ahead. The facility nor A/V crew knew that the wall was in play during the day. The room had been set up as two different rooms. I walked in after the wall was open and the A/V was working on getting the two separate projectors to work from one HDMI cable. After many attempts at getting two projectors to be driven by my laptop, the team gave up as they had run out of options.

### Why I buy Apple products

The good news was the moment I realized the A/V team was in trouble, my brain started cranking away at a solution. I started with the contents of my laptop bag and figured if I needed any cables the A/V team could find them if they weren't too crazy. As it turns out, I have everything I need to drive two projectors from my laptop in my actual laptop bag.

![Thank you, Apple.](/kubecon-north-america-2019-trip-report/ncw-disaster-diagram.jpg)

All it took to make things work (I write this with a touch of sarcasm):

1. MacBook Air with USB-C to HDMI dongle (for Projector A)
2. iPad Mini with Lightning to HDMI dongle (for Projector B)
3. iPadOS 13 latest beta
4. macOS Catalina (latest GA release)

Turns out the macOS feature called [Sidecar](https://support.apple.com/en-afri/HT210380) is a real lifesaver. I was able to mirror the output of the MacBook Air's HDMI dongle over to the iPad Mini across the room. The iPad Mini then pushed a mirror of its display to Projector B. It was functional and working before the 9 AM general session started. It was amazing to see a new feature work so well the first time I ever used it right out of the box. Sadly, later on in the conference the iPad Mini was stolen (and AppleCare+ doesn't cover theft on iPads but it does on iPhones).

### Silly Hats, Sillier WiFi, and That Wasn't the Worst of It

Things were hectic but, seemed to be stabilizing. Then the actual instruction began and the WiFi collapsed. I don't mean it slowed down, it literally died. Two laptops with neighboring IP addresses connected to the same access point could not see each other. The event staff scrambled to try to get something working but it was the slowest possible WiFi I think I've had at a conference. It made instruction incredibly difficult and we received negative feedback before the day was even close to over as a result. But, we're going to work on setting up something to help us should this ever be a problem in the future.

The scrambling in during the pre-event projector scenario, the shitshow of the morning teaching from an iPhone hotspot, and with the WiFi not ever fully recovering, it made for an exhausting day. Everything was a hike and few things were intuitive (restroom locations, lunch location, etc.). Lunch was served outside, behind the hotel (past the dumpsters), on one of the hottest days of the year. Clearly there wasn't a backup plan for lunch. There wasn't even the appearance of a thought given to the temperature and what could be done on the day of. A handful of tables outside had umbrellas providing shade. There you'd find clusters of people stuffed into a shadow eating mediocre hotel lunch. There were a few details that flat out didn’t get considered, scenarios that weren’t thought through at all, and zero backup plans for many things. To make matters worse, I caught my hip flexor on the corner of something (push bar door handle?) and it was bruised and hurting bad even my pain meds weren't stopping it by mid-afternoon.

### Blameless? No. Marriott Fucked Up.

During Day 0, I was mad as hell at Cloud Native Computing Foundation. It was their event space, the community had several discussions with CNCF on how to handle some of these day of issues that shouldn't have been issues. From my point of view, on the ground, the only people stepping up to do anything to fix the problems were CNCF affiliated people. This gave the appearance that CNCF was taking on some blame or responsibility in screwing all this up. It was very clear no communication had occurred between Marriott staff and CNCF employees.

In the week since KubeCon ended, I've attended or read postmortems and have had some third-hand information shared with me. It would appear Marriott really screwed up. Bad. I mean real bad. Also, not only with CNCF folks but, pretty much San Diego wide. For example, Red Hat had space in the other Marriott in the Gaslamp Quarter. My understanding is they completely forgot about a day of catering that was in the contract. I also heard that a call for help from the regional team in San Diego to Marriott HQ was never made. I was told there was someone new in charge of the area and wanted to prove themselves. You'd think with the 12,000 people descending on KubeCon, a double-digit percentage of which were attending Day 0 events in Marriott facilities, you'd want all the help you can get. That is how I approached the workshop I was running when I though we didn't have enough help.

CNCF people were stepping up to help because the Marriott folks threw their hands up and walked away at times on a few occasions. This was consistent with my morning experience. Once I had the Apple Sidecar projector workaround in play, the event staff pretty much checked out. At one point before the official opening introduction, I walked into the room to a very panicked Guin trying to rally people to do something. Guin had heard about the wall and projector fiasco but not the fix. The folks in the room did not seemed to care about Guin's concerns so I interrupted to explain what had transpired. Guin was very thankful. That meant a lot and I really appreciated it. But, I do feel Marriott should've tried harder not to get outdone by an out of towner with a messenger bag. At the very least say sorry to the attendees so I don't have to keep passing blame around.

### Blamelessness

We can talk about blameless postmortems all we want in this industry. But, when people pay money and sign contracts, blame becomes an important legal tool to set expectations and right wrongs. A lot of people paid money to fly to San Diego, stay in not cheap lodging, and some of those people have corporations funding their trip. Those same corporations have expectations that their employees' time is being used wisely. If I were sitting in the room having to deal with all the issues the workshop was having, I would've been asking who I needed to talk to as well. I would want enough information as possible so that I could convey to my leadership why I didn't get what I wanted from the thing they sent me to. Again, I was told this by someone I trust for good information, I heard that Marriott was remitting 20% of their event fees citywide. That's called taking blame.

### The People

[![Attendees from the KubeCon NA Contributor Summit pose for a group photo](/kubecon-north-america-2019-trip-report/kubecon-na-2019-contributor-summit-group.jpg)](https://flickr.com/photos/143247548@N03/49093416562)

The people are what matter though. I think we brought new knowledge to people. Albeit slowly, we did work through all the content. But, this was not the community's best effort. It was an absolute disaster and for that I am sorry. New members of the Kubernetes community should have a better experience onboarding. The barrier to entry is higher than it should be. The challenges faced during the New and Intermediate Contributor Workshops might have made people less than enthusiastic about contributing to Kubernetes. It really sucks. But, I'm going to try to help fix it. Do I want to teach the New Contributor Workshop again? Yes, but, there will have to be a lot of caching and more breaks involved.

## Day 1: The Keynotes

After the Day 0 disaster, I woke up the morning of the first official day of KubeCon North America 2019 in a lot more pain than I wanted to be in. Coffee and pain meds were the story of the morning. My existing injuries were sore and my hip was bruised and bugging me when I walked. I was filled with energy though walking towards the San Diego Convention Center. I saw no one I knew until I got to the CNCF Ambassador seating area. I thought that was pretty awesome. Seeing new faces attending is a great thing. As a matter of fact, when the audience was asked if this was their first KubeCon a very large number of hands went up. This is encouraging to see and hear when building out communities. But, the keynotes the first day made me wonder how much CNCF did care about community.

I'll sum up the keynotes in two words: *generally terrible*. There were some gems. Kelsey Hightower always provides a good talk. Liz Fong Jones' OpenTelemetry demo was legit [magic on stage](https://twitter.com/ChrisShort/status/1196970149892354052). Some other interesting concepts and ideas were discussed. But, overall, they were an awful waste of time. The creme de le creme worst talk was hands down, bar none the NATS talk.

### Don't Use NATS

If you're thinking about using NATS for something or already are, I'd suggest finding an alternative. The talk took a crowd that was relatively energetic into an absolute rut. The NATS presentation spent time talking up their Bosh and Cloud Foundry experience. Someone with knowledge in that space explained to me that NATS was getting ripped out of CF because of various issues. I can believe it. The talk seemed to alienate the audience so it's not surprising the software would too since the talk was from the creator of NATS. I looked over at the Director of Marketing for CNCF and said, "This is fucking terrible," as I pointed at the stage. [There was no reason NATS needed that much airplay](https://twitter.com/ChrisShort/status/1196851230624010241). It was kinda gross too because you could feel the mood of the room change and the presenter kept on force-feeding us NATS. Who thought this talk needed to be longer than five minutes? I'm not sure what happened here but, the program committee gave NATS too much time. They alienated people, myself included. I felt bad for Lachlan Everson who had to follow this talk.

I didn't attend any Keynotes after Day 1. My gauge from Twitter was that they did not improve in the following days. There is a lot of opportunity here. But, I am starting to wonder if less is more.

## Community is real

The highlight of Day 1 for me were two meetings both led by Diane Mueller. The [Operator Framework](https://github.com/operator-framework) team sat down with folks from [KUDO](https://kudo.dev/) and [kubebuilder](https://book.kubebuilder.io/) to figure out how to encourage more interoperability between the various ways to build, deploy, and manage Kubernetes APIs. It was awesome to see how much everyone in the meetings was focused on improving the experience of using Kubernetes. We're approaching a time where Kubernetes becoming a baseline, industry standard set of infrastructure and tooling APIs. The fact folks (anyone) can create custom APIs on top of Kubernetes with a handful of commands and some YAML is powerful stuff. Working on giving the power of the API to as many as possible is important work, in my opinion. Huge shout out to everyone involved here.

## The Sponsor Showcase

This might have been the absolute worst place to hold as many people trying to get people's attention as possible. The room was a massive walless space with a glass covered, steel frame arch ceiling. There was nothing to stop sound and the arch ensured that all the sound reverberated back down into the space. It was a cacophony of vendors and to make matters even worse, music was being pumped into the space. Many attendees and sponsors complained about headaches after spending a short amount of time on the floor.

I'm not going to lie, going from the sand blastingly loud space to the eerily quiet Ambassador Lounge a couple hundred feet away triggered me. It reminded me of coming home from my first deployment. No one tells you that you get quite comfortable sleeping and working in loud environments out in the field. But, when I came home from my first deployment, the very first night home, I was completely unable to sleep. It was too quiet. It was "something is wrong" quiet. The decibel level change from the sponsor showcase to any side room was so dramatic it brought back war memories. I was able to work it out without calling for backup but, it's worth mentioning because the conference was a net negative and the noise was a key factor in that.

There were some awkward moments on the floor too. For example, Docker was a Platinum Sponsor. Given their month, you'd think they'd downsize their presence? Nah... It's [Docker](/docker-inc-is-dead/)! Who am I kidding? They went all in. I didn't stop to chat. Oh! Then there was this gem given to us by none other than WeWork:

{{< tweet 1196898085919547393 >}}

## Security at Cloud Native Speed

I think the security tooling that makes Kubernetes possible and the extension of Kubernetes tooling to bolster security is really powerful stuff. As a matter of fact, I was chatting in a small group of contributors and maintainers about security policies. I asked a maintainer about security policies around amplification attacks (or maybe it was BGP hijacking), did we want to baked clear preventative measures into policy that was enabled by default? I forget the specifics of the conversation but, I definitely left the group with a question, "Should we allow the mistakes of the past to permeate through our systems? We certainly have the tools to stop traffic that violates RFCs or is abusive in nature within Kubernetes; why not use build it in and turn it on by default? It's thought provoking. Tools like Open Policy Agent available and companies like [StackRox](http://stackrox.com/) and [Snyk](https://snyk.io/) are doing great work in this space.

When Michelle McLean from StackRox reached out to me and asked if I wanted to give a talk in their booth about Kubernetes security, I answered yes before I even checked to make sure my boss was okay with it. For what it's worth, booth talks can be great sources of information especially if it's someone from another company giving it. For speakers, it's a great way to test out new content. I ended up doing my [Security at Cloud Native Speed](https://speakerdeck.com/chrisshort/security-at-cloud-native-speed) talk in the StackRox booth twice and both times it drew a crowd in. Clearly I'm on to something here. But, I think it speaks to the fact that there are a ton of levers available and for the first time ever there isn't one lever that can protect you from more of the evils than the rest (firewalls, for example). Developers still need to define resource limits. Namespaces still need tight controls. Security policies should be applied under the  a breach will occur and this is the last line of defense to minimize the blast radius. We should all be operating as if someone is inside the wire at this point. This talk emphasizes that.

{{< tweet 1196964742218125312 >}}

Bonus: In it's current form this talk is only 12 minutes. This means it's extendable and shrinkable making it a versatile talk that could be a lightning, ignite, or keynote talk. That's a huge win for me and you might get to see it at some point soon.

## Day 2

The morning of the second day, I woke up and FaceTime'd the family that was on east coast time. The first words out of my mouth weren't so much words but more rocks rattling around in a can. Something was in the air making my sinuses act up and my voice was gone right along with it. That should give you an idea of how loud things were. It takes a lot for me to lose my voice and it happened. I had to cancel many podcast recordings and reschedule some things. I got through the day but had to take it very easy. I ended up walking 18000 steps for a total of 8.6 miles, so much for taking it easy. It rained too making things a real clusterfuck. The San Diego Convention Center leaks like a cruise ship made of swiss cheese,  by the way.

I was back in my room by 4:45 with a heating pad on my shoulder and my arm propped up on some pillows to keep everything from hurting as bad. I definitely wasn't going to be going very far for dinner. I was in excruciating pain and needed to catch up on press releases, announcements, and other industry news from the week. People started discussing dinner plans on Twitter. Then it was decided that a group was coming to my hotel for dinner. That was awesome. It made me feel very included even though I was not in any real shape to go out, the hotel restaurant were my dinner plans anyway. Getting to eat with friends was the best thing for me at that moment. I took my iPad to catch up on things while people talked about their days. I could chime in whenever and ended up setting the iPad down for a bit (I ended up leaving it there for a restroom break and bill discussion).

### Hostility

I don't know if other attendees felt it but, I could sense a low level hostility amongst the cloud vendors. It definitely seemed like people who were actual friends were avoiding each others booths because of who they worked for. I did not see much cross-pollination on the showroom floor between many vendors which kinda sucked. To me, project over company is what makes Kubernetes awesome. But, a lot of people seem to think they need the entire pie when it comes to the commercial space. There is plenty here for everyone. What good is first class if my friends can't sit?

During this dinner there was an employee from one vendor that took umbrage with an employee from another vendor paying the bill. It seemed like a policy decision the one employee might have been dealing with. There was an actual discussion between the two on how to handle a carve out for the one employee. It didn't happen because it was absurd and insane plus, the staff seemed not to be able to manage it. That's a new one on me though; y'all need to chill with ridiculous travel policies. The bill was over $700, be happy you don't have to expense it.

## Is this healthy?

By day three, [I was legit asking if this was all worth it](https://twitter.com/ChrisShort/status/1197525614569242625). I don't think people that had to do more self care to get through the day would be able to get through KubeCon anymore. I genuinely don't think I'll be able to do a full KubeCon again. I'm going to have to have Day 2 as a down day or something if this pace and size continues. I did an interview on [JFrog's DevOps Speakeasy](https://youtu.be/EO54iYYDZoU) which was super and fun. But, I watched it on the plane on the way home and was astonished by how obvious it was I was in a lot of pain. Even after sixteen years with this injury, I couldn't act my way through the entirety of KubeCon.

[![Chris Short rubbing his injured shoulder during an interview at Kubecon](/kubecon-north-america-2019-trip-report/chris-short-kubecon-injured-shoulder.jpg)](https://youtu.be/EO54iYYDZoU)

I wasn't the only one with an endurance concern either and I think that changing this should be CNCF's #1 priority. Growth at this speed is taking a physical toll on conference participants in two days. It's not sustainable at all. To make matters worse, there was actually a team onsite dedicated to mental health. The problem is, no one could find them. At a late lunch on day three it dawned on a few of us that we hadn't even seen the [OSMI booth](https://twitter.com/kivashch/status/1197644090784935936). This was particularly sad because a friend of mine had a panic attack on the last day. Who knows if it could have been avoided if they knew that this was available and where it was.

## Quality

I have serious concerns about the keynote content for the 2020 KubeCon events. As such, I have volunteered to be on the Amsterdam and Boston program committees. Sadly, due to personal security concerns, I will not be able to travel to China for the foreseeable future (sorry, y'all). I told the CNCF executive director to count me in on whatever it takes to improve things. The CNCF Ambassador program is a little nebulous right now too. I seriously considered hanging it up after everything this year in San Diego (one Ambassador did already). There are several Ambassador like programs out there that offer better perks. But, I'm going to stick around and try to fix things. But, I will have to balance my own health with this.

## Diversity

Diversity was pretty bad too. Large dinner groups would form where there would be only one underrepresented minority at the table. A lot of these dinners were blasted out on Twitter before and during inviting folks to join. One attendee noted at the last dinner that they really don't like being the only woman in a room full of dudes during one of the talks she attended. I don't blame her. Who wants to be the only one of anything in a group?

## Conclusion

I do not want to do the full conference again. I will do everything I can but, I am human and I am disabled. As if a reminder from the heavens, the VA sent me a letter after getting home from KubeCon reminding me of my VA disability rating. I don't recall ever having to take the quantity of painkillers I took to get through KubeCon. The conference is worth trying to save but, if the foundation doesn't listen, I can contribute to Kubernetes without them. Change is inevitable; I always hope it's for the better.

> Please feel free to share your comments at  
> [/r/Kubernetes](https://www.reddit.com/r/kubernetes/comments/e4hm47/kubecon_north_america_2019_trip_report/), [/r/devopsish](https://www.reddit.com/r/devopsish/comments/e4fq86/kubecon_north_america_2019_trip_report/), or [The Orange Site](https://news.ycombinator.com/item?id=21676169)

{{< adsense-matched >}}
