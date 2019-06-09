+++
author = "Chris Short"
categories = ["Git"]
date = 2016-06-25T17:06:05Z
description = "Distributed version control isn't designed to allow folks to delete every instance of a file. But, if you run into a case where you need to expunge a file in git, here is how we did it."
draft = false
image = "https://cdn.chrisshort.net/git-logo.png"
slug = "permanently-remove-any-record-of-a-file-from-git"
tags = ["git", "scm", "vcs", "repo"]
title = "Permanently Remove Any Record of a File From git"

+++

A co-worker and I needed to remove all instances of a binary blob from one of our git repos a while back. This was a lot harder than I thought it should have been, in my opinion. However, distributed version control is not really designed to easily allow folks to delete every instance of a file. But, if you ever run into a case where you do need to expunge a file in git here is how we did it.

{{< adsense-inarticle >}}

## Get a new clone of the repo (in scratch/temp space)

`git clone REPO_LOCATION`

## Detach it from the remote origin

`git remote rm origin`

## Remove the file and rewrite history

`git filter-branch --index-filter 'git rm --cached --ignore-unmatch FILENAME' HEAD`

## Remove garbage and lingering files

`git reflog expire --expire=now --all && git gc --prune=now --aggressive`

## IMPORTANT

Replace the centralized repo (aka REPO LOCATION) and any copies others might be using. Everyone should re-clone the newly replaced repo.

{{< mc >}}

### Sources

There are several guides and HOWTOs that we stumbled across to do this; those might work better for your use case (Google is your friend). But, this five step process worked very well for us.

* [http://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository](http://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository)

* [http://git-scm.com/docs/git-filter-branch](http://git-scm.com/docs/git-filter-branch)

* [https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)
