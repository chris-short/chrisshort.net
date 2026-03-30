---
author: ["Chris Short"]
cover:
  alt: A black man in a gray suit sits in an office conference room, hand on chin in a thoughtful pose, looking sideways with a skeptical expression. Two women work at a desk in the background near a glass wall covered in colorful sticky notes.
  caption: [Photo by Yan Krukau](https://www.pexels.com/photo/man-wearing-a-suit-7793980/)
  image: pexels-yankrukov-7793980.webp
  relative: false
title: "OSPO Notes: Open Source Governance — Who Decides, and How"
date: "2026-03-31"
description: "Open source governance answers one question: who decides, and how? A plain-language guide to every major model — and why mature projects layer several at once."
summary: "Every open source project eventually hits a moment where someone has to make a call nobody agreed on in advance — and governance is the system that determines who has the authority to make it. This post walks through every major governance model in plain language, from BDFLs and do-ocracies to lazy consensus and multi-stakeholder consortia, including how mature projects like Kubernetes layer several models at once. MkDocs is included as a real-world example of what happens when governance gets skipped entirely."
tags: ["OSPO", "open source", "open source governance", "community", "CNCF", "Kubernetes", "Linux", "Apache", "decision making", "BDFL", "meritocracy", "lazy consensus", "2026"]
ShowToc: true
TocOpen: true
draft: false
---

**TL;DR:** Governance answers one question: *who decides, and how?* Knowing the model before a controversial decision lands is what separates projects that handle conflict well from ones that break during decision-making. This post maps the major governance models — and explains why many projects use more than one model to get work done.

When a hard decision hits your project, a license change, a breaking API, or a controversial new feature direction, two things become clear *fast*. Somebody needs to make the call. And if the process for who is making that call isn't already understood by the people involved, you're in for a painful experience.

That's what governance is. It's the system that determines who has a *voice* and who has a *vote*. My friend, [Ben Cotton](https://funnelfiasco.com/), draws that distinction cleanly in [*Program Management for Open Source Projects*](https://a.co/d/084fpRim): giving someone a voice means inviting their input; giving them a vote means they're part of making the actual decision.

Governance tells you *in advance* which people have which, and for which types of decisions. Without it, you relitigate authority in the middle of conflict. That's the worst possible time to do it.

Here are the major governance models, explained plainly.

## Leadership Models

### BDFL — Benevolent Dictator for Life

Imagine one person has the final word on everything. That's a BDFL. A single, trusted leader holds veto power and can break any tie. Early Linux and Python both ran this way. It works well when that person is genuinely wise, available, and respected by the community. It breaks down when they burn out, step back, or start demonstrating interests that the community doesn't need or agree with. Most BDFLs eventually evolve into something more distributed as projects grow.

**Escalate to:** the BDFL for decision-making.

### Meritocracy

In meritocracies, influence and authority are earned through contribution. The more code, documentation, and community interaction an individual has, the more weight their opinion carries. The Apache Software Foundation pioneered and formalized the meritocracy model. The underlying logic seems sound: people who've done the work understand the tradeoffs best. An honest critique is warranted, as "merit" is hard to measure and quantify, and it often undervalues contributions that don't show up in a `git log`.

As we learned in my earlier piece, [How to Find Your Community](https://chrisshort.net/ospo-notes-how-to-find-your-community/), there is more to a community than the codebase and its committers. Ignoring those members of your community can alienate them. Be mindful of who else is involved in the project outside of the codebase, as they may have an equally important perspective to share.

**Escalate to:** the project management committee (PMC), if there is one, or the project's most prolific contributors.

### Do-ocracy

Do-ocracy is meritocracy in motion. Whoever does the work decides how to do it. Ship the patch, own the direction — until someone else shows up and does more. It's fast and pragmatic, especially in early-stage projects. The limitation is that it favors people with available time, which isn't always the same as the people with the best judgment. If you've ever joined a project and found nobody in formal authority — just a pull request queue and whoever merged last — you've been in a do-ocracy.

**Escalate to:** whoever is actively doing the work in that area right now.

### Steering Committee

A steering committee is a small, structured group — usually elected by contributors or appointed by a foundation — that meets regularly to make consequential decisions. Kubernetes and Node.js both use this model. It's more accountable than a BDFL, more structured than a do-ocracy, and it scales better as a project matures. Most steering committees combine formal votes for consequential decisions with community input-gathering for lower-stakes ones. Who gets to vote on what should be spelled out from day one.

**Escalate to:** the sanctioning committee or its chair.

### Foundation-Led

A legal entity — the Linux Foundation, the Apache Software Foundation, or the Cloud Native Computing Foundation (CNCF) — holds the project's assets. The foundation sets the ground rules and provides structural accountability, assuring no single entity controls the project. The foundation doesn't write code; it creates a level playing field and shields the project from capture by any entity. This is the most durable governance model for multi-vendor projects. Decisions live in charters and bylaws, not Slack threads and late-night emails.

**Escalate to:** the relevant foundation board or its technical oversight body.

### Corporate-Backed / Single-Vendor

One company effectively controls the project: it employs most of the maintainers and makes most of the strategic calls. This is common and isn't inherently bad. But the community's interests and the company's commercial interests can diverge — and when that happens, the community usually finds out after the fact. The license changes at HashiCorp, MongoDB, and Redis made that tension very public. Understand this situation clearly before your organization makes a long-term bet on a project governed this way.

**Escalate to:** the sponsoring company's engineering or product leadership.

## Decision Models

### Rough Consensus

An [IETF concept](https://datatracker.ietf.org/doc/html/rfc7282) that does a lot of work in practice: you don't need unanimity, you need to show that no well-reasoned objection remains unaddressed. A leader reads the room and makes a decision. It's not a vote, it's more of a judgment call. The critical test is whether someone can articulate *why* they object, not just that they do. This model keeps one motivated holdout from indefinitely blocking the group's progress. The keyword is *rough* — close enough that the community can move forward, but may leave out certain objections.

**Escalate to:** the group's chairs or designated facilitators.

### Lazy Consensus

Lazy consensus is akin to "speak now or forever hold your peace." A proposal is posted; if nobody objects within a defined window — usually 72 hours to a week — it's approved. Apache projects and many CNCF projects routinely use Lazy Consensus in day-to-day operations. The burden of proof shifts to the objectors. This keeps things moving without requiring a vote or escalation on every decision. The barrier to raising a valid objection must be genuinely low to demonstrate fairness. Silence usually means agreement, not confusion or withdrawal. If the choices are confusing, say so, as there could be others equally confused but for reasons don't want to speak up. Asking for clarification is acceptable.

**Escalate to:** if objections surface, bring it to the full committer group.

### Consortium / Multi-Stakeholder

Multiple organizations co-govern the project with formalized seats at the table. No single entity can capture it; major decisions require cross-organizational alignment. OpenSSF operates this way, as do many standards bodies and several CNCF working groups. It's one of the more resilient models for long-term community trust — and the slowest to reach decisions. When the infrastructure matters enough that no single entity should own it, that tradeoff is worth the extra calendar overhead.

**Escalate to:** the consortium's governing or technical board.

## Most Projects Use Several Governance Models at Once

Here's where most people's mental model breaks down. They look for *the* governance model a project uses, when mature projects actually layer several simultaneously, applying different models to different types of decisions at different levels.

Kubernetes is the clearest example to me. CNCF provides the foundation-led structure for assets and legal matters. A Steering Committee handles cross-cutting architectural and community decisions. Individual Special Interest Groups (SIGs) run on something close to do-ocracy for day-to-day work. Lazy consensus handles most of the day-to-day changes.

The Linux kernel layers BDFL-adjacent authority at the top with meritocracy-based hierarchies across subsystems, each maintained by a leader who has earned their scope through years of involvement.

None of this is contradictory. The models apply to *types of decisions at different levels*, not to the project as a whole. That's the frame that makes this practically useful for Open Source Program Office (OSPO) work. When a decision lands on your desk, ask:

1. What kind of decision is this?  
2. What level of the governance structure handles it?

A feature proposal might be a SIG leadership call. A change to the release process might need steering committee sign-off. A licensing question goes to the foundation. Knowing this in advance means knowing exactly who to escalate to, which is the entire point of governance.

## Governance Is Infrastructure

It's tempting to treat governance as paperwork — something to sort out after the project gets big enough to need it. That's backwards and doesn't consider the here and now while risking the long-term health of a project. Governance is what *enables* a project to grow safely. Without it, the loudest voice wins every contested decision, and community trust erodes each time that happens. As the Open Organization Leaders Manual frames it: open leaders don't hoard decision-making authority — they distribute it. That distribution, made explicit and predictable, is governance.

[MkDocs provides us with a wonderful example](https://fpgmaas.com/blog/collapse-of-mkdocs/) of what happens to a project when governance models aren't applied. The project has had many leaders, but no decision-making framework to support those leaders at any given moment. The project is pretty much completely stalled due to contention between prolific committers and the project's creator.

Your job in the OSPO or as an open source leader isn't to impose a model on every project you touch. It's to understand which model, or combination of models, a project could use, and what that means for how you or your organization contributes, escalates, and builds relationships over time.

The projects that last are not usually the ones with the most committers or the most funding. They're the ones with governance clear enough that contributors from all walks of life know how to participate, and community members know the outcome is fair even when they disagree with it. Clear governance is how open source projects outlive their founders, survive controversy, and continue to earn the trust of a world that depends on them.  
