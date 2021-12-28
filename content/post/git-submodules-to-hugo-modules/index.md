+++
author = "Chris Short"
categories = ["2021", "Hugo", "Git", "Go"]
date = 2021-09-27T07:00:00Z
description = "How to switch from git submodules to Hugo Modules"
draft = false
slug = "git-submodules-to-hugo-modules"
tags = ["git", "hugo", "modules", "submodules", "theme", "submodule", "Netlify", "branch", "mod"]
title = "From git submodule to Hugo Modules using Netlify"
[cover]
image = "/img/posts/hugo-logo-wide.svg"

+++

{{< carbon >}}

{{< tweet user="ChrisShort" id="1441773641276919822" >}}

Git submodules are cumbersome to manage. In my opinion, git submodules are a sort of anti-pattern for [**Hugo**](https://gohugo.io/) (I know many themes suggest using git submodules). There's a better way to manage your Hugo site's theme: [Hugo Modules](https://gohugo.io/hugo-modules/).

Suppose you have a Hugo site and use a theme that supports Hugo Modules. I think the theme would need to require a minimum of Hugo v0.55.0. But, more features are available in later versions. Regardless, your mileage may vary:

* Install [Go 1.12 or higher](https://golang.org/dl/) (Go Modules power Hugo Modules)
* Create a new branch

Time to embrace Hugo Modules and leave git submodules to the dust bin of your site's history.

## Step One: Hate git submodules. You do? Good, me too. Let's get rid of them!

Open your existing Hugo project that's using a git submodule. Create a new branch. Then let's rip out all the git submodule nonsense. This is highly destructive, be sure you're not on your main git branch.

    rm -rf .git/modules
    rm .gitmodules
    rm -rf theme*

Note: You'll need to clear out the submodule from `.git/config` as well.

## Step Two: Change Theme in config.toml

This section assumes you're using TOML. If you're using YAML, reference the Hugo docs for the right syntax. TOML users, your theme line should look like this:

    theme = ["github.com/luizdepra/hugo-coder"]

In a new section of your config.toml add the following (making sure to replace the appropriate fields in the example):

    [module]
    [[module.imports]]
        path = 'github.com/<USERNAME>/<THEME>'

Note the lack of https:// in the path. Also, the single quotes are important.

## Step Three: Initialize the using modules

Next run these commands (I know these seem a little redundant but, I don't think there's harm in running them all):

    hugo mod init github.com/<YOUR_USERNAME>/<YOUR_PROJECT>
    hugo mod get -u
    go mod tidy

NOTE: This is YOUR git repos URI

## Last Step: Disable Post Processing in netlify.toml

Disabling post processing in netlify.toml is a good idea. This will prevent Netlify from breaking your site (SRI hashes).

    [build.processing]
        skip_processing = true

Commit, watch your build for errors, address any as they come up (I'd be interested in learning more if you have errors), and... PROFIT. Goodbye git submodules. We never liked you anyway.

If you notice something out of sorts here, please let me know or [submit a pull request](https://github.com/chris-short/chrisshort.net).

References:  
<https://github.com/theNewDynamic/gohugo-theme-ananke#installation>  
<https://gohugo.io/hugo-modules/configuration/>  
<https://gohugo.io/hugo-modules/use-modules/>

{{< eo_signup >}}
