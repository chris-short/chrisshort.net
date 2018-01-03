+++
author = "Chris Short"
categories = ["Git"]
date = 2016-06-25T17:06:05Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/git-logo.png"
slug = "permanently-remove-any-record-of-a-file-from-git"
tags = ["git", "scm", "vcs", "repo"]
title = "Permanently Remove Any Record of a File From git"

+++

A co-worker and I needed to remove all instances of a binary blob from one of our git repos a while back. This was a lot harder than I thought it should have been, in my opinion. However, distributed version control is not really designed to easily allow folks to delete every instance of a file. But, if you ever run into a case where you do need to expunge a file in git here is how we did it.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- chrisshort.net Responsive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8972983586873269"
     data-ad-slot="1297095894"
     data-ad-format="auto"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>

**Get a new clone of the repo (in scratch/temp space):** <br />
`git clone REPO_LOCATION`

**Detach it from the remote origin:**<br />
`git remote rm origin`

**Remove the file and rewrite history:**<br />
`git filter-branch --index-filter 'git rm --cached --ignore-unmatch FILENAME' HEAD`

**Remove garbage and lingering files:**<br />
`git reflog expire --expire=now --all && git gc --prune=now --aggressive`

**Replace the centralized repo (aka REPO LOCATION) and any copies others might be using (everyone should re-clone the newly replaced repo)**

There are several guides and HOWTOs that we stumbled across to do this; those might work better for your use case (Google is your friend). But, this five step process worked very well for us.

Sources:
[http://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository](http://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository)<br />
[http://git-scm.com/docs/git-filter-branch
](http://git-scm.com/docs/git-filter-branch)<br />
[https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)
