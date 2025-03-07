---
ShowTOC: false
author: Chris Short
cover:
  image: gitlab-logo.png
  relative: true
date: "2017-01-23"
description: ""
tags:
- gitlab
- git
- test kitchen
- ansible
- DevOps
- vcs
title: 'GitLab Annoyance: Private to Public Repos'
---

{{< carbon >}}

I was working on a new Ansible role last week and was having problems with [Test Kitchen](https://kitchen.ci/). The issue I was having was that Test Kitchen was unable to pull in dependencies from GitLab for the Ansible role I  was developing. Here is the error message I was seeing:

```bash
[WARNING]: - rsyslog was NOT installed successfully: - command git clone https://gitlab.logicnow.com/ansible-roles/rsyslog.git rsyslog failed in directory /tmp/tmpEaRVAA (rc=128)
```

I realized that on our internal, private GitLab server a repo needed to be changed from Private to Public. I did not have rights on the repo so I pinged a co-worker who did. Once the repo was public, for some reason, Test Kitchen was still unable to pull in the role.

After a significant amount of testing and tweaking this morning we found a GitLab issue titled, [Switching project from private to public, still requires authentication](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/24947) and [this issue pointed out by GitLab](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/27049) in the comments below. It turns out that there is an additional dropdown to change when switching from Private to Public. Under "Feature Visibility" there is a drop down titled, "**Repository**: *Push files to be stored in this project*"

[![GitLab Private to Public Repo Change](gitlab-private-public-repo.png#center)](gitlab-private-public-repo.png)

This is a minor annoyance. There is an issue filed to resolve it. But, we spent almost an hour trying to figure out what was going wrong so hopefully, you can benefit from our struggles.
