+++
author = "Chris Short"
categories = ["DevOps", "2016"]
date = 2016-08-09T18:13:30Z
description = ""
draft = false
slug = "technical-debt-and-the-ongoing-battle-against-it"
tags = ["technical debt", "DevOps", "systemd", "AWS"]
title = "Technical Debt and the Ongoing Battle Against It"
[cover]
image = "https://shortcdn.com/chrisshort/technical-debt.jpg"
caption = "Photo: [Twitter](https://twitter.com/Carnage4Life/status/585458646680670208)"
+++

I have been trying to fit a lot of square pegs into round holes lately. Eliminating technical debt with modern day [**DevOps**](https://devopsish.com/) practices to reduce costs is seldom fun or glamorous but is very often beneficial. Reducing costs should be the mindset of IT and one surefire way to do that is to spend the right amount of time on a task to complete it successfully. Finding that balance is definitely tricky especially when a lot of us are human time division multiplexers now. But, that right combination of good work and adequate time spent is definitely out there.

{{< carbon >}}

### Time + Technical Debt + Competing Priorities = Short-Term, Single Use Solutions To Long-Term Problems

Technical debt often prevents you from rolling out features faster. Time is the reality that sucks the fun out of a lot of great ideas. Not proud of this, but I occasionally pull out Ansible as a substitute for [log aggregation](http://www.devopsbookmarks.com/monitoring). A simple grep across an Ansible group can save the day sometimes. It is elegant in the sense it is low cost and high gain. It is hammering a screw through a cinder block to an extent but it is a means to an end.

{{< eo_signup >}}

However, most people know that there are a lot of benefits to proper log aggregation. Business and DevOps have to coalesce to remove the technical debt boat anchor. Adding new features that benefit Development and Operations is hard but the benefits typically flow back to customers quickly.

### Why Not Do X and Y and...

I have also been working on a project to reconcile archival data across multiple S3 buckets. Back in the beginnings of Amazon Web Services S3 did not have the four nines (99.99%) of reliability it has today. A decision was made to have multiple copies of data in several locations/buckets to improve integrity. Now that S3 is very reliable it makes little sense to continue this practice. The application has been changed to no longer do this but what do you do with the leftover archived data? You go clean it up by essentially reversing the logic that put it there to begin with. The problem is the application put the data there over years; we need it moved in a few days.

The application is written in Java (no offense, I loathe Java's clunkiness and [assumptions](/take-ownership-plant-your-flag/)). Two Java developers brought me some processes to collect object identifiers, verify where the objects are stored, and then properly purge the objects and their references in the various databases. The problem I had to solve was scaling these processes. The solution that was hashed out amongst us was to use SQS to pass along work through the various processes, store the inputs and outputs in a separate S3 bucket, and run the processes as system services. Once we got everything fleshed out we would package the system as an AMI and spin up as many as we need to run through the archives at a spend rate that pleased the business.

Gluing all the bits from the Java devs and the Amazon Web Services fell to me. I would not say this was as trivial as it sounds, there were a lot of bugs along the way. But to make a long story short, I leaned on good ole Bash and GNU tools as well as an AWS CLI tool coupled with systemd unit files to get the job done. The Bash process could have a few more features to make them perfect. The systemd unit files could be feature complete but it would probably take me another hour or two working on them to flesh out the features then they would need to be QA'd. systemctl stop, start, and status work and that's all that's needed.

A lot of time could be spent making this whole solution feature complete but the value add is minimal. It is not my most complete work but it is striking the right balance between effectiveness and time spent.

### The Takeaway

You must do things right; you should not be creating technical debt. Benjamin Franklin once said, "Don't put off until tomorrow what you can do today." The same should hold true when it comes to your work. One thing to keep in mind though is that there is no such thing as perfect in a DevOps environment. Use the tools you can to create the processes you need to get the job done right. Do not throw together a crap solution and expect others to appreciate it. There can be some well-documented limitations in your solutions but they must be communicated effectively. Do not let the perfect be the enemy of the good. You will never finish a task if the expected outcome is perfection.
