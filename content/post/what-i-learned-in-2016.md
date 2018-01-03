+++
author = "Chris Short"
categories = ["Philosophy"]
date = 2017-01-01T02:45:18Z
description = ""
draft = false
slug = "what-i-learned-in-2016"
tags = ["philosophy", "life", "kubernetes"]
title = "What I Learned in 2016"

+++

A former co-worker and now friend used to have a tagline, "Everyday is a school day." I remind myself of this fact nearly every time I learn something new. 2016 brought a lot of new knowledge and skill sets into my ever-expanding arsenal of tools.

Surprisingly, 2016 brought a mix of both soft skills and technical skills. Let's review some of the things I picked up during this journey around the sun:

### Abstraction Layers are Critical

You must have APIs at all levels of your application and infrastructure. If not an API then a tool that acts as an abstraction layer. At no point in time should your application or systems be exposed through anything other than this abstraction layer. At no point in time should your application talk to anything other than an API either (aside from a protected database).

Additionally, at no point should you as an engineer talk to anything other than an abstraction layer. Need to do some one-off change; do it through an API. Can't do said thing through the API? Why not? Fix it! Do said thing through the API even if you have to use curl by hand. Does your infrastructure not get managed through an API but is through some other tool (Puppet, Ansible, Salt, etc.)? Use that tool no matter what. Otherwise, you are just building technical debt.

### 2017 Will Be the Year of Kubernetes

There is no doubt in my mind that 2017 will be the Year of Kubernetes. 2016 proved that containers matter. However, at scale, the container orchestration tool matters an order of magnitude more. Your single microservice cannot be productive on its own, right? If your infrastructure exists in containers what are you doing to ensure its high-availability?

The answer to these container questions will be answered in 2017 and the answer will be Kubernetes. Many, many companies and product teams are putting an enormous amount of effort into Kubernetes. Red Hat has definitely pushed OpenShift as the platform of choice. Docker is pushing its tools but they seem to be slow to be adopted outside of the container itself. The real winner will be Google's cloud agnostic tools (k8s) and a good understanding of where to put compute and storage based on cost and performance.

### Soft Skills are Amazing

Public speaking was something I made a conscious effort of doing more of this year and I learned so much just by doing it. How to make effective slides, how to hold a conversation, and how to learn from others are all as important as ever. 

Everyone has a story to tell. Learning how to align that story to the needs of a conference or meetup can be highly enlightening. Interacting with people on social media just does not compare to face-to-face conversations with total strangers.
 
 
I am certain there is a great deal more I have learned this year but these three things are definitely the most noteworthy (despite how obvious they might seem). I wish you all the best in 2017 and beyond!