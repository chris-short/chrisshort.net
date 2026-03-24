---
author: ["Chris Short"]
cover:
  alt: Picture of stars in the sky with a slightly blue tint to it
  caption: Photo by [Felix Mittermeier](https://www.pexels.com/photo/blue-universe-956981/)
  image: pexels-felix-mittermeier-956981.webp
  relative: false
title: "OSPO Notes: How to find your community"
date: "2026-03-25"
description: "How to find your open source community beyond git commits using repo data, GitHub Insights, GrimoireLab, and social listening to discover who's really out there."
summary: "Most OSPO leaders think their committers are their community — they're not. Start with git shortlog -sne to identify contributors, then layer in GitHub Insights and LFX Insights for richer data. For the full picture, spin up GrimoireLab to pull from Slack, Discourse, mailing lists, and more. But the real community — the bug reporters, bloggers, meetup organizers, and lurkers in a Telegram group you've never heard of — lives outside your repo entirely. Cast a wide net across social media, forums, and conference talks, and don't be shy about asking your known community where they hang out."
tags: ["OSPO", "community", "open source", "DevRel", "contributor metrics", "community health", "git", "CHAOSS", "GrimoireLab", "2026"]
ShowToc: true
TocOpen: true
draft: false
---

Leaders in open source projects or Open Source Program Offices (OSPOs) often struggle with a fundamental question: "Where is our community?"

Finding your community online can be easy if you've built some structure and have a community gathering place (like Slack or Discord). But how do you find your community that hasn't coalesced anywhere?

The answer might be straightforward if you have only a few open source repositories with limited external contributions. As projects age and new contributors join, things get more complex. To nurture your community, you need to find them online so your organization can participate authentically.

## **Start Where You Already Are: The Repo**

Your git history is your first community dataset. The repo is your project's foundation; it serves as the anchor for everything else in the community. I recommend starting here first. 

1. Clone the repo  
2. Open it  
3. Run `git shortlog -sne` against it

The output will show a ranked list of everyone who has ever contributed a commit, along with their email addresses. This info gives you a decent starting point.

Do an analysis of the email addresses; they alone begin to tell a story:

* Are most of your contributors using corporate addresses from one or two organizations? That gives you the [organizational diversity](https://chaoss.community/kb/metric-organizational-diversity/) (or lack thereof).  
* See a lot of Gmail and personal domains? That could indicate grassroots adoption.  
* Are there contributors who showed up once and never came back versus people who've been committing steadily for months?

All these patterns matter because they offer insight into your community.

### You know the committers, engage with them

Use the email list to start engaging with your top committers, as they will likely know how best to communicate with the community (or have suggestions on where to create such a place). Plus, you need to establish rapport with them. Making sure the project is healthy is key. Offer your own and your organization's resources to foster and nourish the community, as you introduce yourself.

One word of advice: don't create a place for your community without talking to them first. They may not want a central location outside the git repo, or they may want to use an open source tool they manage themselves (I don't recommend this, but it's up to the community to decide).

### Where is the repo hosted?

If your project lives on GitHub, you have even more data through GitHub Insights. GitLab also has an Insights tool, but let's focus on GitHub. In GitHub Insights, you can see several useful community data points:

* **Pulse** offers a snapshot of recent activity — Pull Requests (PRs), issues filed and closed, and participation  
* The **Contributors** tab shows commit activity over time, including lines added and removed per user  
* The **Commits** tab shows you how many commits occurred over time  
* **Code Frequency** shows you additions and deletions per week, looking back a month  
* **Forks** can tell you two potential things:  
  * Who has forked the repo to contribute to it or  
  * Who might be using the project

This serves as a quick health check, but only scratches the surface.

### Where else can you get community data?

For Linux Foundation projects and others, [**LFX Insights**](https://insights.linuxfoundation.org/) goes further. It aggregates contributor data, tracks affiliations, and provides dashboards from commit volume to issue resolution times. If your project qualifies, it's worth setting up. My personal experience with the LFX Insights team has been stellar. I highly recommend adding your GitHub organization, if possible.

## **Going Deeper: Who Is Doing What?**

Knowing *who* your contributors are is step one. Understanding *what they're doing* is where things get genuinely interesting.

All of the tools above help with this to varying degrees. GitHub Insights can show you who's reviewing PRs versus who's writing code. LFX Insights can break down contributions by type and organization. But if you really want to understand the full picture of community activity, you need to look at GrimoireLab.

[**GrimoireLab**](https://chaoss.github.io/grimoirelab/) emerged from the CHAOSS (Community Health Analytics in Open Source Software) project and is extremely powerful. It can ingest data from Git, GitHub, GitLab, Discourse, Slack, mailing lists, Jira, Stack Exchange, and more — then give you unified dashboards showing who's contributing what, where, and when. You can track metrics such as contributor onboarding velocity, organizational diversity over time, issue response times, and the number of people who conduct code reviews, file bugs, or participate in forum discussions.

I recommend getting GrimoireLab up and running locally via Docker Compose before asking your infrastructure team to provision a system for it. The projects.json file, where you configure the data sources, can be finicky to manage at first. If you need help, join the [\#grimoirelab](https://chaoss-workspace.slack.com/archives/C022NPTPC8Z) channel in the [CHAOSS Slack](https://chaoss-workspace.slack.com/join/shared_invite/zt-r65szij9-QajX59hkZUct82b0uACA6g). Also, [Bitergia](https://bitergia.com/) offers a commercial version of GrimoireLab with support if you outgrow the open source version.

## **The Uncomfortable Truth: Your Community Is Bigger Than Your Repo**

Here's where most organizations get tripped up. They look at commit stats and think they've found their community. They haven't.

**They've found their *committers*, which is a subset — sometimes a small one — of their actual community.**

Think about all the people who participate in a project without ever touching the codebase:

* The person who answers questions in your Slack or Discord every day  
* The person who filed 40 detailed bug reports  
* The blogger who wrote a tutorial that drove a spike in adoption  
* The developer advocate at another company who recommended your project in an architecture review  
* The meetup organizer who put together a talk about your technology

None of these folks show up in the git log, and all of them are your community.

So where do you find them? You have to go looking, and you're going to have to cast a wide net. Check the project's communication channels (if any):

* Slack  
* Discord  
* Discourse forums  
* mailing lists  
* Look at Stack Overflow for your project's tag(s) and keyword(s)  
* Search for your project name on social media:  
  * Bluesky  
  * Mastodon  
  * LinkedIn  
  * Reddit  
  * X/Twitter  
* Look for conference talks  
* YouTube tutorials  
* blog posts on Dev.to and Hashnode, and personal sites.  
* Search for your project name alongside words like:  
  * "Tutorial,  
  * "Production,  
  * "Migration"  
  * "Alternative to"

### The thing nobody tells you

Sometimes your community is gathering somewhere you don't know about. There might be a Telegram group in Portuguese, a WeChat group of developers at a Chinese tech company, a Discord server you've never seen, an IRC channel, or an internal Slack channel at a Fortune 500 company where a team has been running your project in production for two years.

The only way to find these pockets of community is to start asking. Put out a call to your known community: "Where do you collaborate on this project? We want to meet you where you are."

## **Putting It All Together**

If you're starting from zero, here's the sequence I'd recommend:

Start from the repo. Run `git shortlog -sne`, pull data from GitHub or Gitlab Insights or LFX Insights, and get a baseline of who your code contributors are. Then expand outward — set up GrimoireLab to pull data from your communication channels and issue trackers, and use [CHAOSS metrics](https://chaoss.community/kbtopic/all-metrics/) to define what "healthy" means for your project. Finally, look for conversations happening outside your owned channels, and don't be afraid to ask people where they hang out.

The community is already out there. Your job is to find them, acknowledge them, and — most importantly — make it easy for them to find each other.
