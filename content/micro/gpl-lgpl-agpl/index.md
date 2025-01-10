---
author: ["Chris Short"]
title: "GPL vs. LGPL vs. APGL"
date: "2025-01-10"
description: "A comprehensive comparison of GPL, LGPL, and AGPL licenses, examining their key differences, use cases, and impact on software development and distribution"
summary: "A comparison of GPL, LGPL, and AGPL licenses"
tags: ["GNU", "license", "open source", "software", "copyleft", "code", "General Public License", "GPL", "LGPL", "AGPL", "2025"]
ShowToc: true
TocOpen: true
---

**Disclaimer**: I'm not a lawyer and this is not legal advice

I'm no fan of GNU or FSF, but their licenses are open source friendly and worth a comparison. It is worth looking at these copyleft licenses before considering adopting one. How do these licenses impact contributions from external developers? I'll use myself as an example. If we exclude Linux distros and adjacent tooling, it's been a long time since I've worked on a project that uses a copyleft license. More recently, I have seen these licenses the most:

- BSD 3-clause (Valkey)
- Apache License v2 (almost all AWS open source projects, Kubernetes, Bluefin/Universal Blue)
- MIT are the licenses (side projects or home lab things)

## GNU General Public License (GPL)

- The basic copyleft license that ensures software remains free
- Requires that any derivative work or software that links to GPL code must also carry the GPL license (hence copyleft)
- Covers distribution and modification of software
- Does not have special provisions for network use or library linking (linking is a topic for a separate long-form post, in my opinion)

### Projects using GPL

- Linux
- Ansible
- WordPress
- Drupal

## GNU Lesser General Public License (LGPL)

- A more permissive version of the GPL designed explicitly for libraries
- Key difference from GPL: Allows linking to a library from non-GPL (this includes proprietary) software
- From the LGPL text: "An 'Application' is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library"
- You can use LGPL libraries in proprietary software without having to release your entire software under LGPL
- Still requires sharing modifications to the LGPL library itself

### Projects using LGPL

- OpenOffice
- QT
- Graphics program, the name of which I find insulting (no one should mock disability. That word is one I've heard often.)

## GNU Affero General Public License (AGPL)

- Builds on the GPL to address network software/server applications
- Key addition: The "network use is distribution" provision
- From the AGPL text: "...if you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network [...] an opportunity to receive the Corresponding Source"
- Specifically designed to ensure that users of software running on servers can get the source code
- Closes the "application service provider loophole" where software with changes here and there could power services over a network without sharing the code (this is the Big Tech poison pill)
- With the license changes of 2024, we saw AGPL show up quite a bit

### Projects using AGPL

- MongoDB
- ownCloud/Nextcloud
- Minio
- Mastodon
- ScyllaDB

## The main distinguishing points

- GPL: Basic copyleft, requires sharing source code when distributing software
- LGPL: More permissive, allows linking without requiring the entire application to be open source
- AGPL: More restrictive, requires sharing source code even when software is being consumed over a network

## All three licenses share common elements

- They are all copyleft licenses from the Free Software Foundation
- They all require providing source code for modifications to the covered software
- They all include similar warranty disclaimers and basic permissions
- They all allow charging money for distributing the software
- They all require copies of the license with the software
