---
ShowTOC: false
aliases:
- talking-operators-on-l8ist-sh9y-podcast
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/talking-operators-on-L8ist-Sh9y-podcast.png
date: "2020-06-15"
description: Chris Short from Red Hat talks Operators and Kubernetes with Rob Zehicle
draft: false
tags:
- Chris Short
- Rob Zehicle
- Operator
- Operators
- Kubernetes
- OpenShift
- CRD
- cluster
- application
- Operator pattern
- Ansible
- magic
- Red Hat
- clusters
- pods
- DevOps
- podcast
- Operator Framework
title: Talking Operators with Rob Zehicle on L8ist Sh9y Podcast
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810685114&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-410091210" title="L8ist Sh9y Podcast" target="_blank" rel="noopener" style="color: #cccccc; text-decoration: none;">L8ist Sh9y Podcast</a> · <a href="https://soundcloud.com/user-410091210/chris-short-from-red-hat-talks-operators-and-kubernetes" title="Chris Short from Red Hat talks Operators and Kubernetes" target="_blank" style="color: #cccccc; text-decoration: none;">Chris Short from Red Hat talks Operators and Kubernetes</a></div>

[![Operator Framework](https://shortcdn.com/chrisshort/operator-framework-logo-color.png)](https://github.com/Operator-framework)

On May 2nd, I joined my friends over at L8ist Sh9y Podcast as [Rob Zehicle](https://twitter.com/zehicle) was trying to wrap his mind around [Kubernetes Operators](https://red.ht/operators/). I've created the [transcript](https://shortcdn.com/chrisshort/whxmHvMw1QIi.128.txt) so folks can read it if they desire.


{{< carbon >}}

**Rob Zehicle:**
Hello everybody and welcome to another episode of the Latest Shiny. This is Rob Zehicle. I am driving, uh, without my cohost so we'll probably take some more jigs and jags and I have to do my own timekeeping. Uh, so we'll figure that out as we go. Uh, somebody here will help me keep it short.

**Chris Short:**
That's fine.

**Rob:**
Um. Uh, joining me today is Chris Short who, uh, I know mainly 'cause he's doing this amazing job with [DevOps'ish](https://DevOpsish.com), this newsletter, uh, Telegram group, this building a community around it. Um, that is just, you know, sincere and present and I have really been enjoying that. And you have a day job too with (laughs) doing [OpenShift](https://openshift.com/), um, the OpenShift team, which is actually why we called you up to get you on. Um, because I've been struggling with Operators and whether they're good, frankly whether they're a good idea or not. And so Chris, can you give us a little background and then, and then help enlighten me as to why everybody-

**Chris:**
Sure.

**Rob:**
... should be writing Operators?

**Chris:**
So, I mean not everyone should be writing operators but-

**Rob:**
(laughs)

**Chris:**
... um, if they make sense for you, you should definitely write it. But essentially, operators are, uh, like DevOps is like a culture and a pattern. Operators are based on a pattern. The Operator pattern was created by a Core LS before the Red Hat acquisition. Uh, and since the acquisition, we have embraced it wholeheartedly and have built, uh, hundreds of operators to run our Kubernetes platform, OpenShift, in, you know, pretty much any Cloud environment.

**Chris:**
So, the idea behind an Operator is that you essentially write, uh, either as code and go or Python or Ansible or Bash, however you wanna write it. Um, a, a, uh, operational piece of logic that handles things like, installation, upgrades, backups, AJDR kind of things for any of your services or applications that might be running in a Kubernetes environment. So that obviously relies on CRDs, which just went GA a couple of releases ago in Kubernetes land. So it has really picked up momentum of late since CRDs have gone, uh, GA. And, uh, I am here to help you not struggle with it as much anymore, how about that?

**Rob:**
So, we, we need to decouple this a little bit 'cause-

**Chris:**
Mm-hmm (affirmative).

**Rob:**
... CRD is a custom resource-

**Chris:**
Definition.

**Rob:**
... definition?

**Chris:**
Yes.

**Rob:**
Uh, which basically is the, I, I wanna get to operators. We, but-

**Chris:**
Yeah, yeah, yeah.

**Rob:**
... to do it, we need this, we need to [crosstalk 00:02:41]-

**Chris:**
Yeah.

**Rob:**
... who was talking like, oh we're talking operators. I'm like, well what about CRDs? And they're like, I don't know, what are those? I'm like, oh, really?

**Chris:**
Hm. Okay.

**Rob:**
Um, so let's start at, (laughs) let's start with that.

**Chris:**
(laughs)

**Rob:**
Basically, a CRD is a way to extend the object space in Kubernetes, right?

**Chris:**
Right.

**Rob:**
That's the main thing.

**Chris:**
So-

**Rob:**
Then when I ... Go ahead.

**Chris:**
And so, I, I like to think of a CRD as like a, you know, create your own, or BYO API, right? Like bring your own API, right? Like that's kind of like what that's CR and CRD is gonna actually do for you, right? And, uh, there's a lot of nuance in that. But yeah, go ahead.

**Rob:**
Well so, because you know, when you add, but it's not really a full API. It's really just a object. I mean it, Kubernetes API is sort of like extended self all over the place.

**Chris:**
Right.

**Rob:**
[crosstalk 00:03:31].

**Chris:**
And controllers and CRs are just more ways to just build on top of the API, right? Um. And when I say B- BYO API, it's-

**Rob:**
(laughs)

**Chris:**
... it really depends on what you're trying to do with your Operator too, right? Like if you're just trying to call out to like, uh, I don't know, like an external load balancer or something to update like a service, like IP address, like yeah, okay. That's a, you can do that with an Operator but that's not necessarily right like, the full capability of an Operator either.

**Rob:**
So, but I'm, I'm still a little stuck on the CRDs, right? 'Cause-

**Chris:**
Sure.

**Rob:**
... this, these, there's my dog.

**Chris:**
Hey.

**Rob:**
(laughs) Um. The CRDs are, you know, pretty flat objects right?

**Chris:**
Mm-hmm (affirmative).

**Rob:**
I, I, I started to crack open operators and I, I basically came along a do not, thou shalt not use CRDs in a whole bunch of like there's, there's a whole bunch of like s- rules. Maybe they're being violated but, rules about, you know, CRDs should be, you know, not wrote, written that often, not very complex, not very deep.

**Chris:**
Yeah.

**Rob:**
They shouldn't be actions. They should be nouns. Right? There's a, is that, is that still in sort of the, the current vouge of thinking?

**Chris:**
So, I just did a blog post with, uh, a coworker of mine or fellow Red Hatter, uh, Daniel Messer. You know, title is, uh, [inaudible 00:04:51] Operators Best Practices. And, um, you know, there's, you need to have a reconciliation loop essentially, right? Like you have to watch for events, um. You have to be able to, uh, you know, reconcile, you know. You know, as things are happening, right, like your operators has to be able to do things. You need to have, you know, some basically premises of, you know, validation, uh, you know, initializing your resources and finalizing them. And, you know, having ownership, you know. Having that status managed, you know, basic things, um, that we kind of like heavily imply.

**Chris:**
But you know, as far as, you know, the CRs themselves and CRDs that like you, like literally everything in Kubernetes should be as simple as possible, right? So like business complexity is what adds, uh, to some of the, the problems that we see, right? Like we get that. Um.

**Rob:**
Those, those, those darn business rules.

**Chris:**
Right. But like that's why operators exist too, right? Like we understand that you're gonna need backups and you're gonna need to be able to do like automated updates inside Kubernetes because you can, right? Um, you don't wanna have to have a 14 step process or, you know, maybe run three or four different scripts to update something. You have to, you know, embrace these Cloud native things, or these Kubernetes native paramatives and use them to your advantage, if that makes sense.

**Rob:**
So, so that bit, that makes sense.

**Chris:**
CRs themselves-

**Rob:**
Yeah.

**Chris:**
... need to be clean and, you know, relatively simple because, well why make it hard? Um, if you have-

**Rob:**
(laughs) Sure.

**Chris:**
... if you have too much operational knowledge baked into your CR, you're going to have a lot of operational problems with it because you're gonna have all these if's or else's or, you know, all these weird things where, instead of having one Operator to do everything, you should have multiple operators to do a few things, right? You know, or application based operators. So for example, you see a lot of, you know, if you go to [operatorhub.io](https://operatorhub.io/), you see like an SED Operator or a Percona Operator or a MongoDB Operator.

**Chris:**
And that's gotta handle everything for, you know, like Percona XtraDB cluster. It's going to handle, you know, Crunchy DBs, post-griseous implementation for HA, um, OpenShift, right? Like it's not gonna handle the SED component of that thing, and all these other bits and pieces. It's going to only manage the app and let Kubernetes take care of the rest.

**Rob:**
So, but that, I mean it's the Operator that's doing the management. So we have this, you know, thin, um, interface point, an, an object to write-

**Chris:**
Mm-hmm (affirmative).

**Rob:**
... you know, hey I need a database. I need it to be this. The Operator's watching for an event. So basically that, that model changes.

**Chris:**
Mm-hmm (affirmative).

**Rob:**
And then, you know, the Operator, so there's a, there's a pod. I mean, operators really code in a pod, right?

**Chris:**
Yeah, basically. Yeah. I mean it, it's a tiny executable, essentially running inside your cluster that looks for events and then, you know, you, you basically declare your state and your CRD and it sees an event that, uh, you know, implies a stay change and then does something, right?

**Rob:**
Makes perfect sense. And then, yeah, so you're, so when you, you write data into that CRD, that's your, that's sorta your, your control point.

**Chris:**
Mm-hmm (affirmative).

**Rob:**
The, uh, Operator program watches for that, that thing to happen. It says, oh I now need to take some action, some stay change. It goes and does the setup of database, talk to SED, run a, I saw some that run Ansible plans [crosstalk 00:08:32]-

**Chris:**
Yeah. You can run Ansible playbooks, yeah.

**Rob:**
Um, [inaudible 00:08:35] now runs terraform plans I think, or actually interacts to the terraform Cloud. (laughs)

**Chris:**
Yeah. Yeah, yeah, yeah. No, I read that last week. Yeah.

**Rob:**
Um.

**Chris:**
No they're, everybody's making operators now. Right, and so-

**Rob:**
Everybody's, everybody's popping them out.

**Chris:**
Yeah.

**Rob:**
And so, and then so it take, takes some, it does that, it does the thing.

**Chris:**
Mm-hmm (affirmative).

**Rob:**
And then it writes it a back to that CRD and says, I did the thing?

**Chris:**
Yeah. Essentially it, you know, events out that I did this thing. Here was the status done, you know, exe- you know, execute next thing or, you know, continue waiting for events, that kinda deal.

**Rob:**
Okay.

**Chris:**
Um. The, the implied, uh, you know, idea is that like, these should, it should feel like if this were, you know, a much, you know, simpler, you know, less complex system that wasn't running as fast at like, this is almost like a CLI kind of experience where you hit, you know, do something. Okay, now echo, dollar sign, question mark, right? Like you want to have that kind of experience with the Operator itself in that Unex kind of philosophy to, um, just do the thing, give me the output and then let me act on that if I need to.

**Rob:**
So, I mean the, I guess when I think of that, I mean it makes sense to me that you're, you're basically it's a, you know, I, we would describe that in [inaudible 00:09:55] as a wall and you're writing a request on the wall. Something's on the wall. It goes off, takes actions. Is it good practice to have the Operator come in and say, "Hey I got the ball? I'm working on it." Like there's an intermediate. I mean there's, there's all these messaging requirements to make something like this scale, where you're saying, you know, you have airlocks and you have like a big new request. I saw it, I'm telling you I'm in, in the middle. It did it, it didn't do it. It failed.

**Chris:**
Hm.

**Rob:**
There's, is that left to each Operator to build or is there an emerging pattern?

**Chris:**
So, there's quite a few like ways to do it. Um. Ways to build an Operator. Um, and we have, you know, levels of maturity, we have maturity model, uh. I don't necessarily like love the layout of it or anything, or like some of the terminology. But like we have phase one to phase five, like phase five is called autopilot which that includes horizontal and vertical scaling and, you know, scheduled tuning and all those other, you know, like abn- abominated textion. Everything, you know, AI and, so like that's like-

**Rob:**
[crosstalk 00:11:00]-

**Chris:**
... pie, pie in the sky autopilot like legit like, you know, level five like driving type Tesla thing. So that's, you know, that's very hard to like operationalize but people can do it. Um.

**Rob:**
But, but for the Operator or for the Operator it's, for the thing the Operator is effecting or the Operator itself?

**Chris:**
The Operator can effect the thing, right? Like the Operator's in charge of touching a thing. In general it is, you know, a service or application.

**Rob:**
Oh, okay.

**Chris:**
So like the Operator touches the database and if it is a, you know, let's say phase three life cycle, you know, you can handle the application life cycle, storage, backup, failure, recovery. That kinda thing. Right? So it's watching for an event. It sees, hey all pods down. Okay, bring all the pods back up. Um. Or it sees, um, you know, hey, uh, you know, a persistent volume just detached. Uh, you know, we, we're out of discs, you know. Go find another volume somewhere, get more discs somewhere, you know. Add the persistent, add more persistent volume if needed, kind of thing, right? You can do that, uh, with an Operator and say, "Okay, give me a backup here and then done."

**Rob:**
[crosstalk 00:12:09].

**Chris:**
Um, the idea is that you'd layer these, uh, things step by step, right? Like you get the installation done, then you get the upgrade done. Then you figure out how to do all the backup and fail over. Um.

**Rob:**
What, what you're describing is actually using operators to manage the Kubernetes cluster itself in that case, so that they would-

**Chris:**
Not necessarily. You can manage, uh, all the apps with a, you know, an Operator as well, right? Like if I'm doing application delivery, I want to be able to do that with an Operator. I wanna be able to do essentially everything with an Operator, right? Like it's kind of trying to be that Swiss army knife for-

**Rob:**
Hm.

**Chris:**
... Kubernetes application and service management.

**Rob:**
Which, which makes sense. I mean, I know that Red Hat's, OpenShift, the new version of the OpenShift installer is very Operator focused right? It's, it's-

**Chris:**
Mm-hmm (affirmative).

**Rob:**
... clean, it's a chain of operators-

**Chris:**
Right. Um.

**Rob:**
... that are sort of being one to another.

**Chris:**
Like if I install like an OpenShift cluster with all the bells and whistles, there's I think just under 200 operators running on that. I'm talking with server lists, with monitoring, with everything running on that cluster. Uh, and all those operators are doing is making sure that the declared state for every service on the cluster is running. And that includes things like K-Native, the dashboard, the, you know, or [inaudible 00:13:22], the whole nine yards. All the o- you know, all the projects underneath the hood are all using operators and interacting with each other with operators, the entire installation process operators. It's, we're all in on the Operator pattern and, you know, that's, that's paying of for us in the ways that, you know, like going all in on [inaudible 00:13:41] did.

**Rob:**
Hm.

**Chris:**
Um, in the sense of, you know, these, these operators, (laughs) I like to, you know, like that's the LS command. That's the, the unique command. That's the, the CD command, right? Like these are the, the Kubernetes Unex tools of the future, if you like.

**Rob:**
I guess, I mean, when I, when I think about though and that number of operators, that, then somewhere you're going to have to have a, a view panel that basically shows you, you know, all the CRDs and then somehow you have to know what, what pods are backing the CRD and if there's issues you have to see that it's there or it's working.

**Chris:**
The Operator does that. The Operator, you don't, you don't necessarily care about which pods are th- you, the person, the human Operator do not necessarily care about, you know, which pods are running where. The Operator manages it. You tell the Operator, this is how I want this, right? It's-

**Rob:**
Through this, through the, through the CRD.

**Chris:**
Right.

**Rob:**
But I've, I've been troubleshooting, you know, Kubernetes stuff. It's, you know, if something's not working, you are, you are trying to figure out, you know, what's, what's going on, you're, you know, doing mods against containers to try and figure out-

**Chris:**
Mm-hmm (affirmative).

**Rob:**
... you know, what, what errors are throwing. It feels, you know, it feels like magic, which can be awesome when it works and, you know, very hard to understand when it doesn't.

**Chris:**
I think, yeah. Like any, what's the quote? Any, any technology's indistinguishable from magic or whatever.

**Rob:**
Mm-hmm (affirmative).

**Chris:**
The, I think there's a lot of that in Kubernetes in general right now. And I think your, you know, frustration is, you know, merited and your, your questioning is, you know, with reason because a lot of it does seem a little magical at times. And it just, you know, the, the idea of CRDs, I think, in general is magical in the sense, because you have to wrap your mind around the idea that you're creating something out of nothing. Right?

**Chris:**
Like you're literally writing like text in a Yama file and creating an object in Kubernetes with it. And, you know, the, out of thin air you have now created this thing, right? Like (laughs) so like wrapping your mind around that and then saying, okay now since I can create this thing, I can now do all these other things with it with just a little bit of code or Ansible or whatever I need the do. And this-

**Rob:**
Right.

**Chris:**
... Operator framework STK. Um, and then you can actually, you know, package and productize your Operator, and I know that's kind of a big deal for you. Uh, the, you know, having something to run on top of Kubernetes was a discussion the last time we talked, right?

**Rob:**
Yeah.

**Chris:**
Like, is there a killer app for Kubernetes? No, but there are some really killer like operators out there right now. That's for sure.

**Rob:**
I guess, so, so there's, there's a question in my mind 'cause some of what you're describing I'm like, I thought Helm was gonna be the way that we-

**Chris:**
Mm-hmm (affirmative).

**Rob:**
... deliver apps into Kubernetes, but Helm is very much like an installer. It doesn't really-

**Chris:**
Yeah, I-

**Rob:**
... operationalize it. And so-

**Chris:**
Right. Like I look at Helm as right, like, like it is, it is the, uh, you know, the, the tar, you know, (laughs) the tar and the gzip of the, the Kubernetes world, right? Like, it's gonna get me the download and the, the up and running of the thing, um. Once I get to that point-

**Rob:**
It almost feels like it should become the thing that installs the Operator for your application. Um.

**Chris:**
Right. Well so, you can build operators with Helm. Um.

**Rob:**
Okay.

**Chris:**
You know, there's that capability there, but because of, you know, some limitations in Helm, you can't necessarily do like, you know, alerting and, you know, logging and (laughs) everything inside, you know, Helm. So, the, the Operator takes that-

**Rob:**
Well with, with, with killer being, I mean it's, it's funny to me. It sounds almost like, oh we killed Tiller in Helm too and said, oh we don't want that stuff anymore. And then it's like, oh but we needed it. Let's do operators. I mean, (laughs) is that, is that fair?

**Chris:**
I mean, that's entirely possible that operators, you know, were the answer to Helm and Tiller, right? Like there was, you know, with reason some concern around Tiller for, you know, security reasons. And that's why in Helm three it's gone and, you know-

**Rob:**
Right.

**Chris:**
... I'm all for that. It was a lot of work and like, I am very thankful for it because Helm three is now like something that I can go to people and say, yeah just use this right? Like this is what you need to solve this problem right now.

**Rob:**
Right, you don't, you don't [crosstalk 00:17:57]-

**Chris:**
Whereas before it was like, you have to use this, oh and there's the security concern and now you have to go through all these hoops to get this, (laughs) you know, so.

**Rob:**
Fair enough. But I mean, are, are, are operators, you know, somebody's gonna be like oh pop in this Operator and you're like, wait, what-

**Chris:**
So no. There's, right now I think, uh, for, you'll forgive me on the versions, in OpenShift 4, uh, originally like every Operator ran close to admin and we know that's not gonna fly, right? Like, we know that we want, you know, very specific project teams to be able to write their own Operator.

**Rob:**
Right.

**Chris:**
So that's getting baked in, uh, you know, that fine grain [inaudible 00:18:34] control. Having it so it's not running as close to our admin is very important to us. So that it's either this version that has just been released or it's just coming out, uh, either four three or four four, I think is where we're doing that. Um. If, unless it's been pushed somehow. Uh, but yeah. Like that's a very, very valid concern, right? Like we don't necessarily like want to have to have a cluster admin managing hundreds of operators for people, because you know, in theory it should be a very kind of get ops kinda flow, right? Like I check in some code, uh-

**Rob:**
Mm-hmm (affirmative).

**Chris:**
... and it kinda just goes off and running. But if you don't have that flow set up yet, you're kinda gonna have to hand it to somebody and say, please instantiate Operator, right? And, and update it, you know, as needed kind of thing.

**Rob:**
Right.

**Chris:**
So yeah. That's, that's definitely a concern.

**Rob:**
No that's, it gets, it gets, it can actually get weird 'cause your Operator could then do a, you know, dock or pull, um.

**Chris:**
Mm-hmm (affirmative).

**Rob:**
You know, and I, I say dock or pull very specifically because I'm implying that it's coming from, you know, some hub somewhere that you might not know that's there. It's not, you know, a nice, safe, pod man like, you know, local, local repo.

**Chris:**
Yeah. Like I mean, alternatively like that's the, you know, some of the best practices too, right? Like you have to have that, you know, security best practice of having, you know, the local [inaudible 00:19:52] repository or some trusted repository. It doesn't necessarily have to be local, but a trusted repository, right? Like you're not pulling directly from the internet or if you are, there's a proxy there that's actually doing something for you kinda deal.

**Chris:**
Um, like those things still need to be managed, right? Like you still have to have those good, clean practices even in your operators. So yeah, like having a testing framework, uh. We're working on some things with a project that Ansible required. It's called molecule, right? Like having that testing framework in place with the Operator FTK is very important to like give you that kind of idea of best, good thing or not best, good thing. So yeah, we definitely recognize that this, while this is new stuff, there are some definite, uh, concerns around security and best practices. And we're working on that.

**Rob:**
Yeah.

**Chris:**
Um. But yeah, like there's, there's a lot that you can do with an Operator. There's a lot of mistakes you can make with Kubernetes and-

**Rob:**
(laughs)

**Chris:**
... we don't necessarily stop you from doing that. (laughs)

**Rob:**
Right. And that's what, I mean 'cause I'm, I'm watching operators come in and I'm, I'm seeing a lot of enthusiasm for them. And so, we're sorta getting to a point where we're, you know, like oh I'm popping in an Operator and I'm, I'm, and I'm watching some people, um, build up, you know, CRDs and their CRDs are starting the look like a subway map in New York.

**Chris:**
Hm.

**Rob:**
Um. And I'm like, I don't, I don't think that's the right, you know, and with any-

**Chris:**
Yeah, yeah.

**Rob:**
... any pattern, things, things get to be, you know, they, they, they get pulled back. We figure out what the right things are.

**Chris:**
Well, remember, uh, you know, when Kubernetes kind of, you know, blew up on the scene, we had this question of is it gonna be a lot of small clusters or a few big clusters?

**Rob:**
Right.

**Chris:**
And we're kind of seeing-

**Rob:**
I read an article about exactly that. Yeah.

**Chris:**
Right. Like we saw initially it was big clusters at first and now it's gone to these very small like, you know, almost specialized clusters where it's not just necessarily Prod or Dev. It's, you know, I've got like my app is in a cluster by itself because this application team needs cluster admin. So we gave them a whole cluster.

**Chris:**
We realize that there's a overhead in that. And that's part of the Operator, you know, making it so you don't have to have cluster admin permissions to do that. Um.

**Rob:**
And that's one thing. One thing I like about the cluster pa- the, the, the pattern is, if you define a CRD, that becomes your interface spec. So it's like yeah, I don't care what the, you know, what the black box implementation is behind the scenes. I'm gonna write data to the, to the CRD and s- good things are gonna happen, right?

**Rob:**
The, the, an early definition, I think it was [inaudible 00:22:25] who had a, um, interview about this, um, on the, the, uh, his cube pod, pod cube.

**Chris:**
Pod CTL.

**Rob:**
Pod CTL, thank you. Pod cuddle, of course. (laughs) And [inaudible 00:22:41] again. And so, um, but it was like, oh this allows us to extract out getting a database. 'Cause if you're in a Cloud provider, you can use their native build me a database thing.

**Chris:**
Mm-hmm (affirmative).

**Rob:**
Um. But the CRD should remain the same. And I, I was, that's very, very compelling in that.

**Chris:**
Right. So, right. Like if I'm, if I am using like Cloud services, right? When I say Cloud services, I'm talking about like AWS's three or, uh, MSSQL on Azure land.

**Rob:**
That's right.

**Chris:**
Like I want to be able to manage those things with tooling that I'm already using and not have to pull in, you know, like a third party thing. You know, obviously there's, you know, their CLI tools for individual user management. And I would rather have a Operator maintain that for me as opposed to trying to maintain that like in something else, right? Like I already have to have all these Kubernetes Yama.

**Rob:**
Right.

**Chris:**
Do I need another tool to manage my Kubernetes Yama and, you know, on top of everything else-

**Rob:**
Of course you do.

**Chris:**
... or should I just, you know-

**Rob:**
(laughs)

**Chris:**
... continue making operators to do these things that, you know, are for operational logic to be done with?

**Rob:**
Right. Well, and, and in those cases, it ends up being very skinny. Because really what you're doing is the Operator is providing a, a translation layer between the CRD and the back end.

**Chris:**
Right.

**Rob:**
It's not implementing the database stuff, right? I think the thing I've started to see creep in is the operators are actually the app in a lot of cases.

**Chris:**
Yeah. And that's kinda like, that's where it's very much like out of, (laughs) out of like what I would call like a good practice. Um. Not even best practice, right? Like if you have an application that is s- sitting in a CRD right, like that's kinda, uh, uh, very, very, very, uh, flaky ground to be standing on if that, if that makes sense, right? Like if you have-

**Rob:**
That makes, you're, you're actually, you're actually helping me feel better about the pattern. I'm like, I am not comfortable with, you know, writing it, a whole application as an Operator. That's [crosstalk 00:24:43]-

**Chris:**
No. Like if your application needs to have its own stuff, where like your Operator should then (laughs) instantiate your application or, you know, instantiate blogging for that application or instantiate, you know, just back ups. Whatever or, you know, all those things manage the application or manage that service that you're standing up. That-

**Rob:**
Absolutely. That makes sense.

**Chris:**
Use that Operator to do management of service, right? Like if you're gonna have a person do this backup, program the Operator to do it. If you're gonna have someone do this fail over, program an Operator to do the fail over.

**Rob:**
Gotcha. But, but yet this, so this, this comes back to my troubleshooting question. So, if you're troubleshooting an application and you're having to interface with the Operator to do it, and something, something's wrong in the design. You're saying, look go do your application. Figure out your application making at work. The Operator should basically be sitting in between to issue the instruction. So if you're doing a fail over, the Operator's not doing the fail over. It's just shimmying commands forward basically.

**Chris:**
No, the op- okay. So when you say the Operator, you talking about the code Operator or the human Operator? (laughs)

**Rob:**
The code Operator.

**Chris:**
Yeah. So, if you're doing a fail over right, like you should be telling the Operator to do the fail over, if that makes sense, right?

**Rob:**
Right.

**Chris:**
Like, you're not like consider it as like the, the, the Ansible or the terraform or the, the chef of your app in Kubernetes at that point, right? Like you want to use that automation tool to do the things as opposed to you doing them yourself.

**Rob:**
Okay. So I mean, in some ways it sounds, it's not, I know it's not like this. It's not a scrip wrapper.

**Chris:**
No.

**Rob:**
It really is an inter- it really is-

**Chris:**
Well it can be if you really, if, if that's all you need to do is run a script, it can just do that. But it can do way more than that, right? Like you can write full go, like you said you can write full go apps and, you know, to be able to do this for you if you need it to.

**Rob:**
Hm. So-

**Chris:**
For example, if I had a really gnarly like database set up and I have to execute all these things and do a number of, you know, checks, uh, (laughs) on different outside external services before I can say, you know, flip off this database service, um, you know, you would write potentially go code for that or, you know, some other kind of, you know, code base to do that. And yeah, that would look kind of like an app, but if it's, you know, needed to check everything off your operational box first, then you're gonna need to write an app. But-

**Rob:**
I remember watching Kelsey Hightower at the first Cube Con actually show like single run containers that would do use cases like that though. I mean is, you know, why, why is the Operator better than just, you know, writing a, a short lived pod for just, to just run a script in that case?

**Chris:**
Well, the Operator's gonna be, you're not gonna ru- like if you need to do something one time-

**Rob:**
Okay.

**Chris:**
... hopefully you don't do it with an Operator, right? Like this would be something that you would normally do. Upgrades, backups.

**Rob:**
Ah, okay. So we're doing a consistent pattern. This is-

**Chris:**
It's declarative, right. You're declaring state as a pattern in Kubernetes clusters or across clusters.

**Rob:**
Makes sense.

**Chris:**
You, yeah. Yeah.

**Rob:**
So, so one of the things that occurred to me when I was thinking about this the other day and I wanna bounce off you is, it feels sorta like a stored procedure to me.

**Chris:**
Hm. Maybe.

**Rob:**
Which, which isn't necessarily, right, and, and here's why. So I have, I write, I have, I have data somewhere and then something gets triggered based on a change to that data. Action, magic happens. I might actually write back to that, that data that I had that might take other actions. Side effects in the system. Um. And, you know, and so it's, it's sort of decoupled from the data but it's triggered by the data. Um. And it, it, there was a part of my brain that said, that's a sequel trigger, service trigger.

**Chris:**
Kind of. I mean, instead of like data right, like stored in the database, uh, it is evidence or, you know, triggers in Kubernetes logs or, you know, it's watching for something happening. So yeah, instead of like acting on data when touched, it's, uh, you know, (laughs) acting on events when triggered. So, there's a lot of similarity there, you know.

**Rob:**
Okay.

**Chris:**
On a generic level, yeah.

**Rob:**
I, it's, it's an interesting, you know, thing to me because I, I used to do a lot of sequel, uh, stored procedure programming and it's mindblowingly powerful. It's back to the magic thing.

**Chris:**
Right.

**Rob:**
You're like, oh yeah just write something in this table and, you know, all sorts of magic, (laughs) all sorts of good things happen in the background. And, uh, at the same time it was, it, it-

**Chris:**
You had people abusing it.

**Rob:**
... had to be very careful.

**Chris:**
Yeah. You had people abusing it. No, I remember I worked for a, uh, data center company that had a ton of stored procedures in their, uh, MSS QL database. Oh sorry, my family just came home. Um. The amount of logic that you put in there is at your own risk, if that makes sense. Do you wanna wait for my dog to stop?

**Rob:**
No. Oh, we're about to wrap up, so.

**Chris:**
Okay.

**Rob:**
I, we're, we're right at the, the time and you have been, you know, a true gentlemen in, in allowing me to (laughs) poke holes in-

**Chris:**
(laughs) This is actually a lot easier than I thought it was gonna be.

**Rob:**
Well I, this is, this, I mean I, the pattern is powerful.

**Chris:**
Right.

**Rob:**
That's clear. And I also feel like it's confusing because I feel like we're just at a point now where everybody's like, well I'm gonna rub an Operator on it and it's gonna be-

**Chris:**
Oh yeah. It has a purpose. The purpose is very well defined, you know, if, if you so seek out that definition, right? Um, you, you can go outside of the definition, sure. Nothing's gonna stop you. But there's inherent risk there.

**Rob:**
So where should somebody go as a, as a-

**Chris:**
So, first stop-

**Rob:**
Just help us wrap out.

**Chris:**
Right. Like first stop I would encourage you to go to [operatorhub.io](https://operatorhub.io/). That is all the operators that are like certified or community, uh, you know, donated or, you know, presented, uh, and available pretty much to run in any cluster but, you know, specifically designed, uh, for OpenShift if they're quite certified Red Hat, uh, you know, operators. But, um, these can run in any Kubernetes cluster essentially, uh, with, you know, a little magic extra, you know, stuff running.

**Chris:**
And, uh, from there, uh, I would check out the [openshift.com/blog](https://www.openshift.com/blog) and there's a whole section for operators there that we've done a lot of work around. And, uh, last but not least, always check out the actual original, uh, Core LS operators host-

**Rob:**
Makes sense.

**Chris:**
... at the Core LS blog introducing operators.

**Rob:**
They've been talking about it for a long, long time. So-

**Chris:**
2016, yeah. Long time.

**Rob:**
... this is, this is part of a, part of a big vision for how Core LS looked at Kubernetes, um, from the very, very early days. So this isn't, this isn't a, uh, a recent thing. This has gotten a lot of thought. And of course, if you're interested in something beyond operators, [DevOps'ish](https://devopsish.com), how do people get the newsletter? Right, you're [crosstalk 00:31:53]-

**Chris:**
So yeah. The newsletter, yeah. So newsletter's going strong. Uh, I'm super happy with it, done some recent changes around privacy and, you know, simplifying the layout, making it easier for me to write and folks not have to worry about their data getting slurped up and all that fun stuff. So, yeah. Go to [devopsish.com/subscribe/](https://devopsish.com/subscribe/) and, you know, subscribe to the newsletter. You'll get it ever Sunday morning, you know, right when you're waking up hopefully. And, you know, you can digest it throughout the week and get up to date on all the devops and Cloud native and open source fun going on in the industry.

**Rob:**
Awesome. Chris, thank you. This has been everything I was hoping, um. I feel smarter, which is always helpful for-

**Chris:**
Good. I'm, I'm glad. Thank you very much for the opportunity.

**Rob:**
Thanks.

An MP3 download of this episode is available on the [Interviews](/interviews/) page. Big Thanks to The L8ist Sh9y Podcast for allowing me to share this transcript with y'all.
