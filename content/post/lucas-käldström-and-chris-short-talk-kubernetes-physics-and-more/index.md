+++

author = "Chris Short"
categories = ["Kubernetes", "2022"]
date = 2022-06-06T07:00:00Z
description = "Lucas Käldström has a thesis out, 'Encoding human-like operational knowledge using declarative Kubernetes operator patterns.' We sat down to talk about it."
draft = false
slug = "lucas-käldström-and-chris-short-talk-kubernetes-physics-and-more"
tags = ["Lucas Käldström", "Chris Short", "Kubernetes", "state", "servers", "chaos", "latency", "physics", "failure", "dishes", "taxi", "thesis", "plan", "action", "model", "GitHub", "theory", "consistency", "control", "scale", "probability", "systems", "container", "nodes", "DNS", "operator"]
title = "Lucas Käldström and Chris Short Talk Kubernetes, Physics, and more"
showToc = true
[cover]
    image = "https://shortcdn.com/file/chrisshort/lucas-kaldstrom-and-chris-short-talk-kubernetes-physics-and-more.webp"
        alt = "Lucas Käldström and Chris Short talking at KubeCon + CloudNativeCon EU 2022"
        caption = "Lucas Käldström and Chris Short talking at KubeCon + CloudNativeCon EU 2022"

+++

{{< carbon >}}

Lucas Käldström has a brilliant thesis out titled, "Encoding human-like operational knowledge using declarative Kubernetes operator patterns." We sat down to talk about how, "Kubernetes operators form a novel programming model, allowing a shift from humans managing servers to servers managing servers, analogously to the Industrial Revolution."

I had a chance to speak with Lucas at KubeCon + CloudNativeCon EU 2022 in Valencia. This topic is pretty mind blowing. Lucas' [thesis is available via GitHub](https://github.com/luxas/research/raw/main/bsc_thesis.pdf).

## Video

{{< youtube 0rOvC8IhIEk >}}

## Research Paper

{{< pdf bsc_thesis.pdf >}}


Direct download via [GitHub](https://github.com/luxas/research/raw/main/bsc_thesis.pdf)

## Transcript

**Please note**, this transcript is a *best effort* after feeding it through [Descript](https://www.descript.com/). If there are errors that need to be corrected (there are probably a lot because AI/ML is what it is these days). If you don't mind, please [file a pull request](https://github.com/chris-short/chrisshort.net).

**Chris Short:** Hey everybody. I'm Chris Short, I'm here with the one and only Lucas Käldström. And we had an interesting discussion here a few minutes ago. Um, you know, Lucas was working on why Kubernetes is the way it is. And I'm super curious what your findings are. You mentioned, you know, you mentioned like a taxi driver.

Take me to X place versus take me 50 kilometers south. Why is... Kubernetes the way it is? And you're finding so far, I guess, is the best way to frame it. 

**Lucas Käldström:** Yeah, definitely. So I'll have a talk tomorrow about, about this as well. So Thursday at 5: 15, or I'll go into more depth about this, but, uh, what I've been researching the latest couple of months, is it just that.

We, we take some of the things kind of almost full granted these days what's coming at us. Like we have all kinds of fancy concepts on how to do things. And, and, um, I started wondering like, why did we do the things we do? And, uh, it's good to every now and then, I guess, going back and see, um, the really interesting, I found a lot of, a lot of interesting things, but the kind of key, key part of what.

Why we do what we do and in and assist that we've learned from failure. And we have learned from that the world is not as easy or like simple as we think it is. Right. So we see us and see that, oh yeah, that's going to do, you know, if I make it, do a command that it's always going to work, but it's not right.

I think that will be sailors. They will be. Chaos. Yeah. 

**Chris Short:** And technically it is chaos and Sysco. It's really just electrons moving around at some point in time we'd have visited. Right. That's part of the discussion we had a little bit earlier is physics play a role. Yeah. And inside any system, you're going to have some physical limitations.

**Lucas Käldström:** Yes. Th the servers are not isolated from the rest of the world. They are obeying the same rules. And at the toxic prior example is, is like, uh, in cabanas, we have got kind of seeing this model over and over again, where, where you kind of, you measure where you, where are you. So like what, what, and then kind of, where are you, what is your current state?

Right. And once you know that any system, be it a container. Be it DNS records or be some security policy can be really whatever. Um, then you will want to know that, okay, I'm here, but where do I want to go? Right. So with, with good ops, for example, then you start saying, you start from nothing. You have nothing, your actual state is nothing.

And then you look at your get report and say that, okay, this is where I want to go. I have all the things. I want to have a load bias around. I want to have a, I like to go to different environments, all that kind of stuff. And, um, then I need you to start measuring, like, what is the difference between the actual state and the desired state?

And that's really the same thing. Like if you're calling it. Right. You're saying that, okay, I'm calling. Yeah. I want to go to the, see the lighter. Right? So then you have an actual state then you ever decided to stay, right? Exactly. 

**Chris Short:** Yeah. Like the app taxis here. Take 

**Lucas Käldström:** me there. Yes. Yes. But they're, they're kind of funny thing is that when you, even though you have a plan and action plan, so you're doing a difference between the coordinates.

Uh, you have an action plan on, they might not work out. Yeah, maybe the taxi doesn't show 

**Chris Short:** up. Maybe the tech like yesterday, for example, maybe the taxi dropped you off a half mile too far from your hotel, right. 

**Lucas Käldström:** Or maybe there's a roadblock somewhere. It might be many different things like a burning dump truck.

And that is so we have an actual plan and we do that. Uh, and then now I'm just target system if I want to get transported. Right. Um, and then, then we see that. Okay. What is none of the states say that the road devil's a roadblock? Um, I call it the guest for any further. Um, now we do kind of we've reported back.

So, cause I, you know, I wanna say I was about to meet someone in the city when I'm going back. Right. Then I need to text them and say that I don't get anywhere. 

**Chris Short:** Oh, my desired state didn't actually end up the way. I want 

**Lucas Käldström:** to know exactly. It's the same thing. So now the controller, you know, in the controller model equipment, it's like, that's the same thing.

You post back status to come in and say, oh, you know, I want to. Uh, give you this, this, um, I wanted to scale off from, from three replicates to five, but I couldn't because there was no more resources or something like that. There was no, 

**Chris Short:** I had 

**Lucas Käldström:** an auto scaling. There's no, nothing. I can, all the computers, 

**Chris Short:** all the disc is full chaos ensues.

Right. And in Kubernetes land, that chaos is just continuously trying to reconcile that state. 

**Lucas Käldström:** Right. So, which means that if I, if I. The CAPTRUST, less me at the road. And you 

**Chris Short:** get part of the part of that desire state. Yeah. But you're not in it. No, 

**Lucas Käldström:** no. And then say then, then the kind of funny thing is I need to call a new cab and say that taken me from the roadblock now to, to the place I wouldn't go.

Right. But saying that it gets even messier because saying that now I have the action plan again. But meanwhile, when driving then the friend goes to another hotel. Yeah. Yeah. Then the desired state moves while I'm doing the corrective action, which means that then when I arrive at the hotel, then later where the second cab is, I'm going to be there alone.

Right. You're going to be there by 

**Chris Short:** yourself or get another cat. Yeah. . 

**Lucas Käldström:** So now when we do the same, the third time around, we checked that I'm going to have the desired states. No, I'm not, because now it has changed and I do need to do a second. So that was one of the kind of intuitive ways of looking at the criminals, controlling what all that is, what it does, and kind of a real example of why we need to, we need to always continue reconciling and always, always kind of see check, where are we, how do we get to where we were?

Your 

**Chris Short:** car for, you know, a good example is that pod might have moved during your attempt to correct 

**Lucas Käldström:** somewhere. Right? So, 

**Chris Short:** so now we're at the state where, okay. Physics matter and we've hit this part of the discussion where latency, and then intervene can be introduced very easily because there's all kinds of places and a computer and a network and Kubernetes where latency occurs.

Right. And that is increasing probability of 

**Lucas Käldström:** missing the mark, right? Absolutely. So is there kind of everything interrupted first? That is kind of the funny, funny thing. We will have days where we, you know, come to the desk, we clean the desk on Friday. Right, right.

**Chris Short:** Beautiful and extra week 

**Lucas Käldström:** all week. And then I come down on Monday. It's all clean and a little table. Let's go. Uh, but they know Friday, you know that it's going to be papers on one side. You've got like four coffee cups that you forgot to wash over here. Yeah, 

**Chris Short:** exactly. Can't find your phone anymore. You don't know where anything 

**Lucas Käldström:** is.

Exactly. So, so what has happened? Well, we had some orderly states in the beginning of the week. On Monday, we were all good, but then we had chaos at the end of. Right. And, and that is interesting because, um, you know, it happens to service as well. We, we installed the server first time. We know it's a shiny,

yeah. 

**Chris Short:** I get those 10 gig connections going. It feels great when you're done, but oh, wait a minute 

**Lucas Käldström:** here. I think in a week it's going to be the fan. It's going to be maybe a bit more time than it. The finally soul, you know, dusty. Now 

**Chris Short:** there's more latency because I am slower and heat dissipation. Oh yeah.

**Lucas Käldström:** It's chaos. I said in short, and that is kind of these kinds of things. They actually have a name and that is the second law of thermodynamics. Okay. It actually is called entropy and information theory. And if we go to kind of physics side and then. Theoretical physics. And I need it just says that, you know, like everything in the universe, regardless like it or not becomes simultaneously more Celtic.

Right. So we start with the order at, in a week, we're going to have case in a year we're going to use them case, but of course there's some things we can do. And then, um, well, you can also remember that. It's all good to remember that the. Yes that we are, what we call order is, is kind of subjective. Yeah, 

**Chris Short:** exactly.

It is. It is not a cut and dry thing. What are in your world could be different than order. 

**Lucas Käldström:** Yeah. Just try and go and cleaning. You're cleaning your friend's room, right? 

**Chris Short:** Oh yeah. Like me putting away the dishes at home, where is everything says my wife. Sorry. 

**Lucas Käldström:** So, so it's kind of, it's really important to remember that.

Somehow, it always gets, gets more chaotic and the second law of thermodynamics and then it servers at the same thing, but what do we need to do while we know what to do kind of from the real world, we, you know, if, if, uh, say the coffee cups or whether the, the dishes overflow, I told them when you kind of make lunch, um, then you know what to do.

You need to do the dishes, you know, clean it all up. And then, then the entropy that kind of chaos, the measure of chaos, uh, decreases. So we, we kind of had it going up spontaneously, but then it decreases again when we, uh, with time when we, when we do it in reconciled situations. Right. And then same thing with cabana.

So like bananas, the cyber starts, uh, all orderly, all goods. Very much chaos again. Right. But what Kubernetes is, is it's trying to minimize the chaos, a mix it orderly again. So convenience is doing our dishes for us. Actually. That's an interesting concept because feats it all the time, like you would serve kind of dirty servers.

Thank you. Thank you. That's the best thing is kind of, we do the dishes. Well, I, I can only speak for myself, you know? Every three days and nest and Mr. Bananas, it's, it's operating 24 7, right. Doing our dishes. They are next the speed of 

**Chris Short:** the article, right? Yeah, exactly. It happens. And 

**Lucas Käldström:** then he starts doing, doing things and it doesn't the taxi driver model that see where we all see we're going, want to go, et cetera, et cetera.

Um, but the funny thing is, is even more of that when, if this weren't enough on the kind of Y Y. Made this way. Um, we still have, even though we do an action, we might not in the same way as we might not get to the hotel in the taxi. Sure. When we pressing the bottom, you know, regardless if it's a banana set, that's kind of presses the bottom.

No, I was saying, creating a DNS record or starting a container or something like. Um, it might or might not work. That's always servers back off go link developers know this well, you know, from every single function, if error not Neal. Yeah, exactly. Right. 

**Chris Short:** So 

**Lucas Käldström:** we, we need to always expect there is. And that's why companies kind of keeps on doing during a single 24 7, right.

Kind of are, they are prepared for the errors and they're prepared for that. The kind of things will be messy and things will be random as well. So although you say that you had a thing the way you say that a thousand web servers, I want to run a thousand web servers, right? The comedian starts spinning them up.

Okay. So 1, 2, 3, 4, 5, 6, then maybe by the time you hit a thousand. The first ones have crashed maybe. Yeah. So, or maybe, although you did exactly the same command in creating a container, maybe just 5% of those 50 over Clemson. For some reason, it didn't work just failed for 

**Chris Short:** just random network error, pack, a drop, whatever 

**Lucas Käldström:** it could be got messed with something, something happened on the way.

And we don't know why, but we know that. There is a risk, always that all the, we do something which should be successful. It might not be right. And we need to prepare herself for that, that there is randomness and variability in all kinds of operations. Right. And, um, and that is also kind of with this coming as controlling.

It's built in because we always check for it where if the, if the 50 failed the first time around the finish render, we try again in 30 seconds or something like that. It will say 

**Chris Short:** it gets 25 of them. And then I'll try it again. The next 25, 

**Lucas Käldström:** hopefully. Yeah. Yeah. So that's kind of the eventual consistency as well.

Getting to an end. Then the last concept that we were talking about fluency and. And then then coming in is, is, is designed in a way that actually takes this into account. So the practical example, um, you have two. Well, it started with persons. So, so like, um, uh, person, a and person B, and now there comes a message or a letter or something to the person be.

Yeah. Okay. So if, if person B wants to say this today, um, what are they going to do it? Are they able to do it physically instantaneously? So at the same time he read some later. Yeah, can they kind of actually like transform the exact message to, Hey, at the same time there, they will always be a school delay.

Right? Always, even though you run to your friend, the fastest, you can be right in your 

**Chris Short:** friend and you start to speed reading this thing to your friend. They're still the 

**Lucas Käldström:** leg there. They will do so. So even though we have this, we have two servers now, same thing. One message comes in as a server. It will always take some small amount of time to communicate what they now know to serve rank.

Right. And, um, and this has consequences. It's kind of latency it's otherwise, you know, a pretty known concept. And then we have. We know that when we're pressing the, you know, writing a URL and it's a browser, it well. Yeah. 

**Chris Short:** And it does a DNS lookup HTTP server, and it gets there. Okay. And then a page is rendered and then JavaScript around 

**Lucas Käldström:** no of latency from, from the real world.

And we know, but we think that we can still, we have maybe Tony distributed systems that often that they're actually. There's no consistency. That is immediate to say that we would have now the same situation and we would have immediate direct consistency exactly. At the same time. Then at the same time it gets to be, it was 

like, 

**Chris Short:** I, I hit save vs code.

And then all of a sudden my clusters. Exactly, 

**Lucas Käldström:** exactly. It doesn't work like that. There will be, if there would be in finite kind of Lightspeed's and then we could actually. That that they know it at the same time, but there is no such thing why it is always in by, by light. That's also information delaying always, there's always for information to travel from one place to another, it's limited by Lightspeed at best.

And um, this way it could be that it's actually, you know, accounts for this too. And it's quite amazing. So, so it's, it's a. One of the, one of the analogies will make a, and now I don't want any, anyone feeling scared from this, but, uh, there's this notion of that airplanes can actually turn off their engines while they're, while they're running area and they can just fly, you know, and then keep on doing what they need to, and the same way companies was designed.

Right. And so you can, you can remove the control. For a short amount of time come completely disconnect. That's right. Your, your notes nodes will still be living there. Your applications will note that notice anything the only until you try to introduce. Yeah, of course. Well, if you're trying to change that, then things will be a bit worse, but, but like they won't have removing the control plane won't have any direct effects on the, what is happening in the same way.

Shutting the engines off, you know, airplane will not have a direct effect, but of course, if you would, on the long term, 

**Chris Short:** then it gets down to the ground. 

**Lucas Käldström:** Yeah. So you don't want to do it too for too long, but it is kind of for short periods of time, that is actually to get away. Yeah. So company and sexually favors the local reconsolation.

So it's favorites, it's kind of taxi driver model loop actually locally on the node. Yeah, because then the latency is. We were really close because we haven't kind of inevitable, uh, latency when doing things we are as close as possible in the node. So the node engine, the Cubelets in Kubernetes actually can start the containers and keep the containers running without anyone else you start begging.

So, so kind of the, the, the API, it, the control plane can go down for some, some time. It doesn't matter. It will still do it. And this is actually incorporated too many proper systems, which actually favored more that we have a really long link. We have like a long latency trans-Atlantic yeah, exactly. Yeah.

We're trying to do something, uh, inspect the state on the other side of the Atlantic, but why we, when we get the message back the state four times, by the time you get back, Right, but let's go bananas by, by minimizing and kind of doing the reconciliation really closely to what it's kind of controlling that actually kind of gives us better probabilities of success.

It's not like eventually we'll get there, but it kind of hopefully goes faster then as well. We're minimizing 

**Chris Short:** the chance of error. 

**Lucas Käldström:** Yeah. So, so the consistency will always be with some probability, right after some time, 

**Chris Short:** you know, that kind of goes in line with some dev ops principles of like reducing. Um, like the harm of failure, right?

Like making failure a normal thing. Yup. Right. Like an embracing that Kubernetes says, okay, something failed on immediately do something. Whereas opposed to like getting woken up by PagerDuty. Yeah. Broccoli walking across your house to your computer and then. Yeah, logging in and then realizing, okay, this thing's busted, but what's the underlying reason for that Kubernetes is looking at that group originally and it needs to look like this and it's not put it like that.

Yeah. Yeah. 

**Lucas Käldström:** So it's really intriguing. These kinds of things are actually just examples of how the kind of physical world elements from the physical world. I'm familiar with, from, from our ordinary life, like taking a cab or, or organizing our desk, doing the dishes, uh, talking to the friends, um, these have real practical implications for how we should or should know what to design our, our service systems.

Um, and although many of them are quiet, you know, when you hear. And then it's like, oh, it makes sense. Right. It's kind of this, it makes sense to kind of try again if you have an error, but it's not obvious when you're a designer or a system. It's not obvious that you know, how, how to do that. And I actually think it's not obvious to always think about failure.

They will always be failure in those places that you, that you didn't expect at 

**Chris Short:** scale, there will be unexpected failure. Absolutely. Yeah. There's only so many nodes that you can actually successfully upgrade because of probability, right? Like. It's something will fail if you're at a certain scale. Yeah.

And then you just keep trying that's the beautiful part about communities is that they will keep drying until it's like, okay, I can't fix this anymore. Whatever that time at you 

**Lucas Käldström:** said is yes. Yes. So, and then in the kind of, uh, grand scheme of things, um, these, these philosophies are also current, uh, cold, like a promise theory and then control theory.

And that's where some of these kind of theories coming from. And, uh, well then of course, all of the physics that we have kind of covered so far and the laws and that kind of stuff. And, um, well then finally, uh, this is, we can conclude with that, that this is like, um, why this is giving actually something, some example of why companies is working the way that, the way it is.

And then the kind of, um, when you're seeing African bananas now, My, hopefully it kind of looks more sane. Yeah. And the interesting thing is that if you're at a small scale, say you have three servers or something like that, right. You will be bound to the same loss. Yeah. We'll have failures at some point.

That's right. But it will just take maybe a bit more time for your, before you notice that. So say. Before the hell just breaks loose, but

but if you're Google or someone running launch system, then you know, if you have a million nodes, then it will break loose directly, right. There will always be something failing directly. So then you will see it and you will learn to design for it, uh, from the upfront, but it, you're not safe and you're not.

Immune to failure, although, although you have a small system, so that's why it kind of makes sense to use cabanas, or if you're not using commands, that's also fine. But at least use something else which will base the same principles. So it, for these same kind of practices, right? Like continuous, 

**Chris Short:** continuously reconciling continuous.

Yes. Checking the health checks, that kind of thing you want 

**Lucas Käldström:** declaring like, cause it's also funny that if I never, if I do this. Right then we said that the kind of order is subjective, so, oh yeah. 

**Chris Short:** Yeah. Like sort our ideas 

**Lucas Käldström:** might be different than mine. Exactly. So, so then the, the kind of my desired state of kind of my kitchen, how I want the kitchen to look when it's clean might be different from yours.

So that's why it's so important to kind of, this is you're declaring something. You're declaratively saying that this is a clean kitchen, what looked like. So it's really important to kind of define that and say that. Here is my view of, of how right. Order it looks like. I mean, that's 

**Chris Short:** Sarah, it's 

**Lucas Käldström:** one of the principles which are really important.

Yeah. I mean, that's it, 

**Chris Short:** when you get to thinking about it really deeply, right? Like you're talking about physics and electrons. Whatever that is going to be. Environmental effects will impact that. Uh, you know, you pulling a cable out will impact that somebody in the data center tripping over something and you know, a butterfly flaps, its wings and your Kubernetes cluster is gone.

Some kind of theory like that. The. This has been very enlightening, just talking with you today. So I really appreciate it. You're doing a talk at coupon 

**Lucas Käldström:** tomorrow. Yes. Tomorrow at five 15. Uh, we'll go more into these kinds of concepts. Nice. And, um, if you're even more interested than like, just watching the talk, uh, tomorrow, that's also my, my thesis.

So bachelor thesis from where I kind of got the head space, got the time to actually think about this. Like there's not something that, you know, it was just like one day, just come down. It's a, it's a process of. Thinking about it a longer period of time and looking also at what our people have done, what is in the literature.

So it's in the bachelor thesis, which is published at my GitHub. So <https://github.com/luxas>. So Lucas would have next it's actually coming actually from me. Mistyping XLC.

**Chris Short:** Wow! that's a cool name though.

**Lucas Käldström:** So it looks as Lucas with an X and then slash. So then there you find a PDF, uh, all the details.

**Chris Short:** This has been a mind blowing conversation. This is, and you're only caught a little bit of it cause he had to explain it to me to some extent before we started filming. So go read the paper. If this interests you check out his talk, it'll be online it'll be later. So thank you so much for sitting down with me. I really appreciate it. And, uh, look forward to hearing your talk and reading your paper.

**Lucas Käldström:** Cool.

## Contact Info

Lucas Käldström  
GitHub: <https://github.com/luxas>  
Twitter: <https://twitter.com/kubernetesonarm>  
LinkedIn: <https://www.linkedin.com/in/luxas>  

Chris Short  
GitHub: <https://github.com/chris-short>  
Twitter: <https://twitter.com/ChrisShort>  
LinkedIn: <https://www.linkedin.com/in/thechrisshort>  

{{< eo_signup >}}
