---
author: Chris Short
cover:
  image: git-logo.png
  relative: true
date: "2016-06-25"
description: Distributed version control isn't designed to allow folks to delete every instance of a file. But, if you run into a case where you need to expunge a file in git, here is how we did it.
tags:
- git
- remove
- scm
- vcs
- repo
- cloud
title: Permanently Remove Any Record of a File From git
---

A co-worker and I needed to remove all instances of a binary blob from one of our git repos a while back. This was a lot harder than I thought it should have been, in my opinion. However, distributed version control is not really designed to easily allow folks to delete every instance of a file. But, if you ever run into a case where you do need to expunge a file in git here is how we did it. This would work to remove a file from any cloud, service, or local git repository.



## Get a new clone of the repo (in scratch/temp space)

`git clone REPO_LOCATION`

## Detach it from the remote origin

`git remote rm origin`

## Remove the file and rewrite history

`git filter-branch --index-filter 'git rm --cached --ignore-unmatch FILENAME' HEAD`

## Remove garbage and lingering files

`git reflog expire --expire=now --all && git gc --prune=now --aggressive`

## IMPORTANT

Replace the centralized repo (aka REPO LOCATION) and any copies (cloud or otherwise) others might be using. Everyone should re-clone the newly replaced repo.


### Sources

There are several guides and HOWTOs that we stumbled across to do this; those might work better for your use case (Google is your friend). But, this five step process worked very well for us.

* [https://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository](https://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository)
* [https://git-scm.com/docs/git-filter-branch](https://git-scm.com/docs/git-filter-branch)
* [https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)
