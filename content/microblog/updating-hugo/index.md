---
author: ["Chris Short"]
title: "Hugo: Upgrading and Updating"
date: "2024-12-29"
description: "Updating Hugo is hard. Here's what I did to help the upgrade process."
summary: "Updating Hugo is hard. Here's what I did to help the upgrade process."
tags: ["hugo", "theme", "upgrading", "upgrades", "PaperMod", "2024"]
ShowToc: false
TocOpen: false
---

Upgrading Hugo or your chosen theme along with Hugo is often unreasonably burdensome. These two things are managed independently: Hugo by the Hugo dev team and your theme by its designer. This is what creates the difficulty in upgrading Hugo and updating your theme. Well, that and time.

I like to tinker with themes. I want that to be bigger. I don't want that. Oh! Drop down menu here! This has bitten me quite hard in my years with Hugo. But for the previous iteration of chrisshort.net, I made a conscious effort to customize the theme only via Hugo partials and shortcodes. 

I also really like the [PaperMod][1] theme, and it's wonderfully maintained. During the most recent updates, I was considering a whole new theme. Then I realized that PaperMod has a clean update process. For me, I look at the diff in the partials to make sure I can reuse what's there. The theme's maintainer, [Aditya Telange][2], has been porting more things into the hugo.yaml (config.yaml). A few of my customizations weren't needed at all and were instead changed into configuration.

The deep connection between Hugo's versions and themes is real. The best thing is finding a well-maintained theme and using Hugo partials and shortcodes ONLY for your customizations (PaperMod makes that pretty easy, too).

I got lucky, but you could benefit from the guidance. Happy SSGing!

## What did I learn?

### TOML to YAML

I find TOML to be better than YAML, in general. But, the world has made YAML our grace and savior. I wanted to edit all of my front matter so that only one markup language was used (Fun fact! YAML was). Hugo has a built-in tool to speed converting front matter:

```bash
hugo convert toYAML --unsafe
```

### Thinking through structure

I went into the redesign wanting two things to change:

1. The home page should be more of a landing page
2. I wanted to add a microblog as a separate directory for posts

As with a many of things, there's a lot of ways to implement a landing page, blog, microblog, website, and personal archive. The landing page was handled by using the `profileMode` in [PaperMod][1]. The microblog is a directory of the the same name with the following defined in the Hugo config file.

```yaml
site.permalinks:
  page:
    posts: ":title/"
  section:
    posts: /blog/
    microblog: /microblog/
```

```yaml
site.Params.mainSections:
    - blog
    - microblog
```

[1]: https://github.com/adityatelange/hugo-PaperMod "PaperMod Hugo theme"
[2]: https://adityatelange.in/ "Aditya Telange"
