+++
author = "Chris Short"
categories = ["CFP"]
date = 2018-02-28T11:15:00Z
description = ""
draft = false
slug = "devops-101"
tags = ["devops", "job", "career", "culture", "the three ways", "people", "process", "tools", "cfp"]
title = "DevOps 101"

+++

# Abstract

With the need to build, test and release software more rapidly, frequently and reliably the concept of DevOps has never been more popular, and to a degree, more misunderstood.

DevOps skills are consistently highly sought after and in huge demand, yet at the same time little education and training is available in both the professional world and in higher education.

This meeting will address both issues for both entry level professionals and those more advanced. It will feature:

1. An introduction to DevOps, in language attendees can understand with real world examples.  
2. An overview and hands-on demo's of some of the best practices, tools and processes that result in automating software delivery and infrastructure changes.  
3. An interactive Q&A


# Description

## What is DevOps?

### Not everyone agrees on this

* Take a Deep Breath
* We are all allowed to have an opinion about this
* http://theoatmeal.com/comics/believe_clean

### What DevOps Isn't

* Let's rule some things out first

#### I think this tweet puts to bed some IT misnomers

{{< tweet 859158123722010628 >}}

### What DevOps Isn't (cont'd)

* Not Cloud
* Not a Tool or a Product You Can Buy
* Not Job Title or Position
* Not Department

## So What is DevOps?!?

### UNICORN IMAGE

## DevOps is The Three Ways Applied to Three Things

* This is what DevOps is to me...
* "The Three Ways" applied to "The Three Things"
* Hippy enough for you?

### The Three Ways

* Let's go over "The Three Ways" first
* Origin: The Pheonix Project by Kevin Behr, George Spafford, and Gene Kim
* Backstory: The Pheonix Project authors state the “Three Ways,” are the principles that all of the DevOps patterns can be derived from.
* Let's discuss each way further

#### The First Way

* Entire System Flow
* Not One Box or Silo

#### The First Way (cont'd)

* This is a broken First Way
* This is how a lot of IT organization operate

#### The First Way (cont'd)

* Who has run in to this problem?
* Developers say it works, Ops says it's broken

#### The Second Way

* Enabling Feedback
* Amplifying Feedback

#### The Second Way (cont'd)

* John Willis sent me this to represent all Three Ways
* I removed a couple components to have it apply better to The Second Way
* Ultimately business is what matters
* Getting more information to developers faster and into products faster makes business more competitive

#### The Third Way

* Continual Learning and Experimentation
* This should be the goal of every IT organization
* This is the process in which developers and operations are iterating small improvements to system and they are being pushed out to production through an often automate process

#### The Third Way (cont'd)

* This is The Third Way infinity loop
* A process of Continuous Integration and Continuous Deployment (CI/CD)
* This is very achievable and it's a great place to be

### The Three Things

* People
* Processes
* Tools

## Applying "The Three Ways" to "The Three Things"

* Let's dive into how "The Three Ways" applies to "The Three Things"

### People

* Let's tackle the hardest thing first and talk about the people part of DevOps

#### Joining Flows

* Develop
* Operations
* To achieve The Third Way you should build cross-functional teams of systems, network, QA, devs, etc.

#### Same Team, Same Fight

* Developers
* Operations
* QA
* PMs
* Working Together Toward Common Goals

#### Communication/Collaboration (Expediting Person-to-Person Feedback)

* Devs and Ops working together regularly
* Example: Collaborative Scrum Teams
* Slack, FlowDock, IRC, etc.
* Managers aren't the only conduit between teams
* Everyone is a conduit

#### Passion, Pride, Ownership

* Team members must inspire passion in each other's work
* Individuals must take pride in their work and what the team is achieving
* Teams must take ownership in what they produce
* Highlight accomplishments! We overcame X to get to where we are today!
* Quantify in business terms like dollars and hours saved

#### Diverse backgrounds bring diverse solutions

* Different upbringings breed different people
* Different paths to get where your team is results in different ideas of how to achieve goals

#### A Case Study (Kinda)

MOVIE CLIP

#### A Case Study (Kinda) (cont'd)

* Five very different characters:
    * Rey
    * Han Solo
    * Chewbacca
    * Finn
    * BB-8
* From all walks of life (or non-life in BB-8's case)
* Fixing Problems as They Arise
    * Triaging Chewbacca
    * Fixing the Millennium Falcon
* Building Trust in Each Other
* Going on to save the galaxy

#### The Psychology of it All

* Meat is Hard
* "I'm sorry. Would you two mind changing seats?"

#### People Resist Change

* Assumptions are hard to break
* Studies show that even if a new way is better people will not change unless properly incentivized

#### Game Theory

* DISCLAIMER!
* I'm not a Game Theory expert (AT ALL)
* I got this from Nirmal Mehta who got this from Andrew Clay Shafer; Do Not Reproduce Without Permission

#### Who Are Pareto and Nash?

* Pareto: Italian engineer, sociologist, economist, political scientist, and philosopher
* Known for the 80/20 rule, named after him as the Pareto principle
* Nash: American mathematician who made fundamental contributions to game theory, differential geometry, and the study of partial differential equations.
* Nash's work has provided insight into the factors that govern chance and decision-making inside complex systems found in everyday life.

#### Pareto Efficiency

* An allocation of resources in which it is impossible to make any one individual better off without making at least one individual worse off (KIND OF LIKE ZERO SUM)

#### Pareto Inefficiency

* A situation is inefficient if someone can be made better off even after compensating those made worse off.

#### Nash Equilibrium

* A concept of game theory where the optimal outcome of a game is one where no player has an incentive to deviate from his chosen strategy after considering an opponent's choice.

#### Pareto Inefficient Nash Equilibrium

* A Nash equilibrium is what's strategically feasible.
* A Pareto optimal solution is what's efficient.

#### Pareto Inefficient Nash Equilibrium (cont'd)

* Possible to make an individual better off
* Without making any individual worse off
* But no one will change their strategy...

#### Pareto Inefficient Nash Equilibrium (cont'd)

* ...Until the game changes

### Processes

* People are difficult
* How can we help them?

#### How Do We Change the Game in our Organizations?

#### Remember We Are Trying to Get Here!

* Tight Feedback Loops
* Failing Fast
* What does Failing Fast mean to you?
* What Processes Can We Put In Place to Enable This?
* How are we going to get people to embrace the new process?

#### Incentivize the new way of work

* People resist change, right?
* If you have to use the stick and the carrot you aren't doing it right

#### I prefer the ALL CARROT approach

* Make people's lives easier
* Make people enjoy their work more
* Example: No CCB if you release through new pipeline

#### Implement Automation

* Build an attack plan
* Break the work into numerous, small, manageable pieces
* Release Frequently
* Remember: You are building a pipeline to speed business approval
* Measure your results; metrics are key
* Remember there will always be more work to automate

#### Communication/Collaboration

* Openness and honesty is KEY
* Engineering Blogs (Internal or External)
* Publicly Readable Code Repos
* ChatOps

#### Infrastructure as Code

* NOT JUST FOR CLOUDS
* You can build pipelines in your own datacenter too
* Think of each step in this process as a feedback loop
* We want to automate as much of this as possible
* Ops can enable Devs and vice versa if we work together

#### Infrastructure as Code (cont'd)

* In the Infrastructure as Code model we must think bigger than individual servers/VMs
* DNS not /etc/hosts
* Service Discovery not Static Configuration
* Cattle not Pets

#### Think Globally

* Would you micro-manage your team members?
* Why are you micro-managing your servers then?
* Create an environment where services can flourish through your pipelines

#### This is the goal

* Enable push button releases
* Developers pushing code and off it goes into production

### Tools

#### Wait! You said DevOps isn't a tool!

* DevOps is not anyone one tool
* DevOps has common tooling but often the tools represent a formalized way to do something
* The Three Ways have to be applied to the tooling you use too

#### Caveat:

{{< tweet 861208965610434560 >}}

#### Version Control

* Many benefits:
    * Traceability
    * Backup
    * Collaboration
    * Feedback (hooks)
* git with all its warts has won the version control battle
* GitHub, GitLab, Apache Allura
* Everything must be in version control
* master/trunk should always be production ready

#### "Your system can't tell you what is not in Version Control" –Nicole Forsgren

* This is the biggest reason version control is important
* "Your system can't tell you what is not in Version Control" –Nicole Forsgren
* Random configuration or dependency not in version control is a recipe for disaster

#### Configuration Management

* Templating your configs is VERY handy
* Variables are awesome

#### Orchestration

* Orchestration tools are literally the conductor
* Glues all the pieces together
* Jenkins is the Swiss Army knife here

#### Monitoring/Alerting

* This one slide could be a talk all by itself
* White-box monitoring (Internal)
* Black-box monitoring (External)
* Monitoring and Alerting should be separated
* Alerting tools need to be flexible to your people and your systems

#### Communication/Collaboration

* Your tools should talk
* If automation is running everyone should know
* If you are pushing changes the business should know
* If you have changed something there should be a ticket
* git should talk to JIRA
* Your orchestrator should talk to chat
* Your monitoring should talk to alerting AND chat AND a status page
* ChatOps
* The third rail of ChatOps is doing most of your production work in chat!

#### DevOps Booksmarks

* If you are looking for a tool to do something there are two useful resources
* DevOps Bookmarks is one

#### CLOUD NATIVE LANDSCAPE

* Cloud Native Landscape is the holy grail (IMO)

### When You Apply The Three Ways to The Three Things

#### Culture!!!

* What does that mean?
* DevOps is a Culture!

## Examples of DevOps

* Let's take a break
* When we come back we can talk about some practical examples of DevOps

### "The Dark Side of DevOps"

* The Ops Mutiny
* The Dev Rebellion
* DevOps Strikes Back

### LIVE DEMO!!! (THIS IS FINE)

* I can do this because I have Cloudflare in front of my website
* AWS
* Ansible
* Papertrail

### LIVE DEMO!!! (THIS IS FINE) (cont'd)

## DevOps is a Never-Ending Journey

### Continuous Learning and Self-Improvement

* Continuous Learning and Self-Improvement is KEY!!!
* Meetups
* DevOpsDays
* Newsletters ([DevOps'ish](https://devopsish.com/))
* Podcasts
* Lobste.rs
* Hacker News

### Continuous Learning and Self-Improvement (cont'd)

* The Phoenix Project is a novel
* DevOps Handbook is a guide
* I happen to have three copies of The Phoenix Project for y'all

### Continuous Learning and Self-Improvement (cont'd)

* Shameless plug
* I contributed to an upcoming Open Organization Book
* Several great people in DevOps and Culture contributed pieces as well
* Coming June 2, 2017

## Conclusion

## Conclusion (cont'd)

## Questions?

## Cutting Room Floor

### Blameless Postmortems

* Team Designed and Implemented a Process/Product That Failed
* Not Any One Person's Fault
* Learn From Your Mistakes
* Share Documentation and Lessons Learned
* Improve
* Move-on

### Influencers in DevOps Space

* Gene Kim
* Jez Humble
* Nicole Forsgren
* Bridget Kromhout
* Alice Goldfuss
* Josh Atwell
* Ashley McNamara
* Jessie Frazelle
* Charity Majors
* Julia Evans

## Analysis of the CLOUD NATIVE LANDSCAPE

# Presented to

1. [A Night of DevOps at Open Source South Carolina](/a-night-of-devops-at-open-source-south-carolina/)