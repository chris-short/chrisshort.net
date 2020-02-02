+++
author = "Chris Short"
categories = ["Kubernetes"]
date = 2018-12-21T17:00:00Z
description = "A recap of what I did at KubeCon + CloudNativeCon North America 2018"
draft = false
slug = "my-kubecon-cloudnativecon-na-2018-recap"
tags = ["kubernetes", "cloud native", "kubekhan", "kubecon", "mentorship", "contributor", "experience", "community", "cloudnativecon", "summit", "BoF", "birds of a feather", "CNCF", "people", "seattle", "volunteering"]
title = "My KubeCon + CloudNativeCon NA 2018 Recap"
image = "/my-kubecon-cloudnativecon-na-2018-recap/kubecon-cloudnativecon-2018.jpg"
aliases = [
    "kubecon-cloudnativecon-na-2018"
]

+++

I went to [KubeCon + CloudNativeCon North America 2018](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in Seattle, Washington this week. My trip was cut short due to a work meeting in Raleigh, NC. But, I definitely pushed myself to my limits in Seattle. Make no mistake, had I been staying the entire week as planned I would not have done the time on site the way I did. I wore quite a few hats on this trip:

* Product Marketing Manager, Ansible
* Cloud Native Computing Foundation (CNCF) Ambassador
* sig-contributor-experience member
* opensource.com Community Moderator
* Red Hat OpenShift quasi-ambassador
* DevOps'ish newsletter writer

## It's The Journey

Air travel is generally okay for me. I don't seem to mind the crowds at airports like I do crowds of people sitting (more on that in a minute). I'm usually through security in single digit minutes thanks to NEXUS and Clear. I also am perfectly capable of keeping myself busy in the short bursts of waiting around for the next thing to happen. Flying from DTW, my trips are usually shorter, east coast bound ones. The flight to Seattle was my longest this year.

{{< carbon >}}

I was not looking forward to four hours on a plane. My busted ankles do weird things on longer flights. Couple that with the fact I'm huge, which makes it hard to stay comfortable long in small seats. Also, don't  get me started on the hell that flying put [my shoulder and back](/long-thoracic-nerve-palsy/) through. I mentioned my unfortunate seat selection to [Emily Freeman](http://editingemily.com) she asked if I thought about upgrading myself to First Class. Emily made a very logical argument and I'm very glad she did (thank you, Ems). I had to hit the ground running in Seattle. Being a ball of knots and high on painkillers wasn't an option.

I sat up front on the way to Seattle. What it costs me monetarily more than paid for itself in reduced pain and lower anxiety as a result. It worked better than expected. I didn't hurt too bad when we landed despite it already being a long day (Max got up in the five o'clock hour that morning). I met [Chuck Svoboda](https://twitter.com/Chuckernetes/) onboard too!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Arrived! <a href="https://twitter.com/hashtag/KubeCon?src=hash&amp;ref_src=twsrc%5Etfw">#KubeCon</a> <a href="https://t.co/7swGZmtLPn">pic.twitter.com/7swGZmtLPn</a></p>&mdash; Chuck Svoboda (@Chuckernetes) <a href="https://twitter.com/Chuckernetes/status/1071947239596019712?ref_src=twsrc%5Etfw">December 10, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< mc >}}

## KubeKhan

A few of us on Twitter decided to announce we were all going to the bar in the Sheraton Seattle to hang out and chat. General networking events like this are awesome. They allow folks to sit, stand, float, or whatever in an environment where all it is are folks like them. No concert going on, no conference crews herding you, no sales folks crowding you, and most important of all, come as you are. Some people getting together to chat in person instead of on Twitter or Slack. It wasn't anything formal or official (the code of conduct did apply though). #KubeKhan, as [Jaice coined it](https://twitter.com/jaydumars/status/1071663564417466368), became something. During the overnight hours Saturday into Sunday, things escalated quickly.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/kubekhan?src=hash&amp;ref_src=twsrc%5Etfw">#kubekhan</a> <a href="https://twitter.com/hashtag/wrathofkube?src=hash&amp;ref_src=twsrc%5Etfw">#wrathofkube</a> is in full effect <a href="https://t.co/Wp1WDgvu43">pic.twitter.com/Wp1WDgvu43</a></p>&mdash; Bob Killen (@MrBobbyTables) <a href="https://twitter.com/MrBobbyTables/status/1071995467716681729?ref_src=twsrc%5Etfw">December 10, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Before it was all said and done, folks discovered that Twitter notifications are hard to manage (I know I learned new methods for managing them). The group also learned the number of people in a single tweet that can be mentioned is capped at 50. There was a Kubernetes Slack channel (#kubekhan is now archived). I met with a CNCF staff member on Monday morning before everything started about something completely unrelated; they asked about [#KubeKhan](https://twitter.com/hashtag/kubekhan). Seeing the creativity from people in the community was really cool. Bob Killen gave us this wonderful [KubeKhan Parrot GIF](/my-kubecon-cloudnativecon-na-2018-recap/kubekhan-parrot.gif). By Day 2, there were even stickers thanks to [Vallery Lancey](https://twitter.com/vllry).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Find me tomorrow!!! <a href="https://t.co/kOTO2Qzgf3">pic.twitter.com/kOTO2Qzgf3</a></p>&mdash; Vallery Lancey (@vllry) <a href="https://twitter.com/vllry/status/1072738257387962368?ref_src=twsrc%5Etfw">December 12, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

What a fun, impromptu way to connect with people! There is already talk of a KubeKhan Barcelona. Which reminds me, [I need to submit my talk ASAP](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/cfp/).

## 2018 Kubernetes Contributor Summit US

I had a [2018 Kubernetes Contributor Summit US](https://github.com/kubernetes/community/tree/master/events/2018/12-contributor-summit) volunteer meeting at 7:45 AM PT on the sixth floor of the Washington State Convention Center. The problem was, for whatever reason, event security was putting the screws to people as they were trying to get where they needed to be. I was stopped three times on the way into that 7:45 AM PT meeting. The first time I explained that I was volunteering on the sixth floor with a CNCF event and was coming to a pre-meeting. The person apologized and waved me through. The issue was, there were no comms between the security staff for some reason. No one radioed ahead to state someone had been cleared. I can only imagine someone more respectful of authority than I getting completely turned away from an event they were trying to show up on time for.

If I had to pick only one suggestion to improve the event next time it would be to somehow identify people better with the badge itself. My badge was printed in a hotel lobby near the event. I appreciate that convenience. But, I would much rather go to the venue and get a badge that says something other more than "Attendee". Provide a little color or at least allow for special cases to be addressed. I'm not a unique snowflake. None of the volunteers or Ambassadors had anything to identify them as such until the beginning of keynotes the first full day (in some cases). There's a lot of unnecessary harassment to deal with if security is like this in other places.

### The Calm

I built some quiet time into my schedule the morning of the contributor summit. I wasn't sure how well I informed my ever-evolving team of Red Hatters how out of touch I'd be. There wasn't much noise there surprisingly. But, I did need to get some tasks done from the previous twenty-four hours. This gave me the ability to step in and help where I could and begin to adjust to a very large crowd I'd be in later in the day. Thank you to [Noah Abrahams](https://twitter.com/noah_abrahams) and SIG-ContribEx for being 100% cool with that.

My first official volunteer activity was facilitating [Guinevere Saenger](https://twitter.com/guincodes)'s [Kubernetes Automation & Github Workflow](https://kcs2018.sched.com/event/JJ6q/kubernetes-automation-github-workflow) session. I like to call this my "Calm before the storm". Noah was in the room facilitating before my arrival. To say that Noah is a professional would be an understatement. My job was so easy in this session I barely did anything. The room was prepped perfectly, Guinevere was very conscious of time, and we were able to finish the session a little early. This allowed attendees to button up what they were doing before lunch. This was a perfect intro to room facilitating.

### L - T - Son of a... What Did I Get Myself Into?

Next for me was the [Architecture BoF](https://kcs2018.sched.com/event/JJ6Y/architecture-bof-jaice-singer-dumars-brian-grant-google). I was not ready for the workout I got in this session. Things started off a little slow but escalated to another level real quick. Then Long-term support (LTS) came up and these birds were feathering on a higher fucking level. People from around the Kubernetes world had thoughts on the sustainability of such a process. Another group recognized the current release velocity is not practical for use by most organizations.

As a facilitator, I did not weigh-in because there was so much audience input the session ran over. I am torn on this topic myself. I think that while Kubernetes LTS might be feasible, it's not the wisest use of precious open source contributors' time. [Red Hat patched OpenShift](https://access.redhat.com/security/cve/cve-2018-1002105) all the way back to OpenShift 3.2 (which is based on Kubernetes 1.2.x). Is the Kubernetes community willing to maintain a code base that consistent and compatible on its own? You could argue the community already has, sure. But, again, while it's feasible it might not be the most effective use of resources. I get it, a lot of people don't want to run a vendor solution for fear of lock-in (thanks, AWS) or purity or simplicity or whatever.

But, here's the even harder question, is NOW the right time to even be talking about Kubernetes LTS? I think it's a little premature but I also understand that this is a problem for folks NOW; CVE-2018-1002105 made this topic very fresh on people's minds. While I do love the idea of forcing the industry to reduce the cost of change to the point change is more manageable (by making the Kubernetes upgrade path easier). I fear that this mountain might be too high for even the Kubernetes community to summit. I've been trying to make change the norm since 2013 and I work in Marketing now so that has gone well.

### Calm

Immediately following the Architecture BoF, I facilitated [etcd Maintainers: Ask Us Anything](https://kcs2018.sched.com/event/JJ6b/etcd-maintainers-ask-us-anything). Comparatively speaking, this session was really calm. The audience needing a little coaching a nudging but, the entire time slot was filled with questions and answers and that's about as good as I can ask for. There were some very interesting etcd scaling questions asked by the audience. I am kicking myself for not asking where these folks worked and what led them to where they're at. I bet there are some fascinating stories there.

I ended my Kubernetes Contributor Summit duties with the [SIG Meet & Greet](https://kcs2018.sched.com/event/JN4A/sig-meet-greet). It started in a room that was going to be WAY too small for the audience. After some quick thinking and action from a few folks, we got the session moved to more appropriate space. This was an interesting experience for me. My normal use case were folks coming in and asking what table a certain SIG was at so they could talk. But, there was one cool  scenario where I helped someone choose the SIG they wanted to work with based off what they did for work and fun. The last thing for the Contributor Summit was a group picture!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We tried to take a group pic 😄 thanks to <a href="https://twitter.com/dekkagaijin?ref_src=twsrc%5Etfw">@dekkagaijin</a> for being even taller on a chair 😂<br><br>This marks an end to 2018 Kubernetes Contributor Summits. Now on to 2019 planning! <a href="https://t.co/fvpvYX1Dw2">pic.twitter.com/fvpvYX1Dw2</a></p>&mdash; Paris 🧜‍♀️ (@ParisInBmore) <a href="https://twitter.com/ParisInBmore/status/1072523308611051520?ref_src=twsrc%5Etfw">December 11, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## DAY 1

When I went into the venue on the first official day of KubeCon I was stunned by the progress that had been made in the vendor hall. The previous morning, it seemed more likely to become a hard hat area than a place that would have thousands of people milling around in it. The hall morphed into an almost dizzying vendor cavern. At one point when I was walking around at first, I got turned around and couldn't find a way out (that was fun). But, once I got my bearings I was able to find some friends working on the floor before the keynotes even started.

Walking into the keynotes I immediately noticed two things that I appreciated:

1. The keynote stage isn't that far from the entrance
2. The audience wraps around the stage

I appreciated the width of the audience. It made it seem like a less packed room. But, it did not change the fact I knew there were thousands of people in this space. GopherCon last year was when I realized I had this phobia of being trapped in a room full of people. I end up feeling like the softest target in existence usually. It's manageable though. For example, football games don't bother me. But, for some reason, keynotes do. It's a truly odd mental challenge.

I found a seat to the side of the stage near the backstage exit. ~~That was my evac route.~~ What follows is the mental back and forth I went through after two keynotes. This was triggered by a pair of speakers appearing to my left unexpectedly. This made me more aware of my surroundings. Suddenly, I didn't want to be sitting in a crowd of people anymore. The chair wasn't comfortable. I no longer wanted to be static in a sea of people. I didn't want to have a bad pain day so I kept adjusting in the chair. I wanted to see what else there might be to see. I wanted my nervousness to subside a little. I began to worry if I couldn't handle this then I couldn't handle re:Invent (going to re:Invent might be unavoidable this year).

Thankfully, I remembered I had friends I wanted to talk to out in the vendor hall. I decided that it was time to stop fighting with my own demons. I went to talk to old friend [Heidi Waterhouse](https://twitter.com/wiredferret) and new friend [Katy Farmer](https://twitter.com/TheKaterTot). Heidi is as busy and eloquent as always. We chatted typical vendor-y chatty stuff. Then talked about personal stuff. She went off to talk feature flags and dark release strategies with a booth visitor. Meeting Katy was super interesting. She has been in tech for one year and is curious about how things got to where they are now. Katy is doing great work and is someone to watch for in 2019. In general, talking to anyone from a non-tech background is always fascinating. One thing I'd like to do in 2019 is talk to more folks that came from non-CS backgrounds. I want to know what led them here, what they heard about it coming up, and what they see now that they're here.

Later in the day, I sat down to talk with Patrick Chanezon of Docker. In the wake the fallout from of my [Docker is Dead](/docker-inc-is-dead/) piece last year, I wanted to give Docker the opportunity to show me they are changing their ways. When I asked a friend who's in the know what they would want from Docker after everything earlier this year, my friend simply responded with, "An apology." Patrick showed up fifteen minutes late, didn't know who I was, and didn't seem to care about the concerns I raised.

After a break to give my aching injuries a rest it was time to go find the handful of friends I wanted to make sure I said hello to. That was followed by a little bit of research and a general assessment of what the sponsor makeup looked like. In general, the number of smaller companies represented were minimal. Historically larger sponsors had smaller booth presence this year too. There are a lot of reasons why but I fear it's leading to consolidation (again). I finished the day at the #KubeKhan gathering point.

## DAY 2

The second (and last day of KubeCon for me) started off earlier than expected. I wasn't sleeping all that well and decided to get up early. I got ready and headed over to the KubeCon Speed Networking & Mentoring Sessions. This was a fantastic session where greener community members could sit down with folks that are more experienced in the community or people who could offer career advice. I believe 70 people were there for a session that started at 0730 Seattle time. In my quick synopsis of KubeCon I sent to my co-workers, I explained the following:

> "I talked to a junior engineer from eastern Europe during a mentoring session on Wednesday morning. He was very interested in how Red Hat tackled feature development as well as IBM acquisition questions. He was a little shocked to find that customers had influence over feature development. I understand that's somewhat anecdotal but, there was a general feeling the community was a little greener than previous years. This is great for Kubernetes and CNCF.”

This is great for CNCF and its projects because it means that the pipeline of new developers is thriving. The leadership in the Kubernetes community is already solid. The scale of issues that can be tackled will continue to grow at the current rate I'd surmise.

After the Networking & Mentoring Sessions, I went around and said a few goodbyes. Then I was off to Sea-Tac to catch a flight over to Raleigh, NC for meetings.

## Conclusion

> Kubernetes is everything and everything is Kubernetes: This goes without saying at KubeCon but, there were 8,000 attendees in Seattle (more online) and next year in San Diego there is capacity for 12,000+. I'd estimate around 11-12K attendees next year. The growth here is huge. —Chris Short to Colleagues

I'm very much looking forward to my next KubeCon (and KubeKhan). To say the community is amazing would be an understatement. I feel very much at home in the Kubernetes world and have plans to deepen my involvement in it.

{{< mc >}}

{{< adsense-matched >}}
