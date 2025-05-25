---
aliases:
- /microblog/updating-hugo/
author: ["Chris Short"]
title: "Hugo: Upgrading and Updating"
date: "2024-12-29"
lastmod: "2025-05-25"
description: "Updating Hugo is hard. Here's what I did to help the upgrade process."
summary: "Updating Hugo is hard. Here's what I did to help the upgrade process."
tags: ["hugo", "theme", "upgrading", "upgrades", "PaperMod", "2024", "2025"]
ShowToc: true
TocOpen: true
---

{{< carbon >}}

Upgrading Hugo or your chosen theme along with Hugo is often unreasonably burdensome. These two things are managed independently: Hugo by the Hugo dev team and your theme by its designer. This is what creates the difficulty in upgrading Hugo and updating your theme. Well, that and time.

I like to tinker with themes. I want that to be bigger. I don't want that. Oh! Drop-down menu here! This has bitten me quite hard in my nearly a decade with Hugo. But for the previous iteration of [chrisshort.net][5], I made a conscious effort to customize the theme only via Hugo partials and shortcodes. This has made life much easier and is the best advice I can give.

## Importance of Hugo theme choice

I also really like the [PaperMod][1] theme, and it's wonderfully maintained. During the most recent updates, I was considering a whole new theme. Then I realized that PaperMod has a clean update process. I look at the differences in the partials to ensure I can reuse what's there. The theme's maintainer, [Aditya Telange][2], has been porting more things into the hugo.yaml (config.yaml). A few of my customizations weren't needed at all and were instead changed into configuration.

The deep connection between Hugo's versions and themes is real. The best thing is finding a well-maintained theme and using Hugo partials and shortcodes ONLY for your customizations (PaperMod makes that pretty easy, too).

I got lucky, but you could benefit from the guidance. Happy SSGing!

## What did I learn?

### TOML to YAML

I find TOML to be better than YAML, in general. But, the world has made YAML our grace and savior. I wanted to edit all of my front matter so that only one markup language was used. Hugo has a built-in tool to speed up converting front matter:

```bash
hugo convert toYAML --unsafe
```

### Thinking through structure

I went into the redesign wanting two things to change:

1. The home page should be more of a landing page
2. I wanted to add a microblog as a separate directory for posts

As with many things, there are many ways to implement a landing page, blog, microblog, website, and personal archive. The landing page was handled using the `profileMode` in [PaperMod][1]. The microblog is a directory of the same name with the following defined in the Hugo config file.

```yaml
site.permalinks:
  page:
    posts: ":title/"
  section:
    posts: /blog/
    microblog: /micro/
```

```yaml
site.Params.mainSections:
 - blog
 - microblog
```

## Update: 23 May 2025

### Lessons learned: Kubernetes Community Websites

As Hugo has introduced more breaking changes (0.145.1 through the latest 0.147.x release) and I am looking to update Hugo versions again, I think of a few things I have picked up from maintaining the Kubernetes websites (yes, two big Hugo sites):

#### Keep customizations manageable

Adding complex functions through Hugo shortcodes and partials will inevitably create a problem during an upgrade at some point.

#### Using Hugo modules

Git submodules can be a real pain. Using [Hugo Modules][3] (aka Go modules) can ease some frustrations when upgrading Hugo (and themes).

#### Theme choice matters

The Kubernetes sites use Hugo with the [Docsy][4] theme. Docsy is not trivial to maintain or upgrade on any site, let alone a big, ever-evolving website with complexity built out of necessity. Imagine trying to add a social media icon for a new network, and it taking a shockingly long time to do all because of how the theme was installed and customized.

[1]: https://github.com/adityatelange/hugo-PaperMod "PaperMod Hugo theme"
[2]: https://adityatelange.in/ "Aditya Telange"
[3]: https://chrisshort.net/from-git-submodule-to-hugo-modules-using-netlify/ "From git submodule to Hugo Modules using Netlify"
[4]: https://www.docsy.dev "Docsy"
[5]: https://chrisshort.net "Chris Short"
