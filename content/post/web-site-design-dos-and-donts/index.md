+++
author = "Chris Short"
categories = ["SEO", "2005"]
date = 2005-01-05T07:00:00Z
description = "A list of search engine optimization best practices when embarking on building a web site optimized for search"
draft = false
tags = ["search", "search engine", "search engine rankings", "search engine optimization", "meta tag", "web page", "load time", "domain name", "links", "keywords", "content"]
title = "Web Site Design Do's and Don'ts"
ShowToc = true
[cover]
image = "/img/posts/web-site-design-do's-and-don'ts.svg"
caption = "Web Site Design Do's and Don'ts"
+++

{{< carbon >}}

### Domain Name

Picking a **Domain Name** can be difficult but usually it's best to get a name that uses keywords that form a unique name (Keyword1 + Keyword2 = Unique Web Site name). "Brandable" URLs are desirable too (like Google, Overture, Amazon, etc.). Make **filenames** of images, directories, etc. into keywords and be sure to use hyphens (-) as opposed to underscores (_) in filenames as well.

### Title Tag

The `<title> </title>` tag should appear immediately after the `<head>` tag. It should be page specific, simple, and to the point. Don't try to make your page number one in search engine rankings with the title alone. Bare in mind that the title of a web page is how the majority of your visitors will first "see" your page in a search engine. Search engines factor in the title of a page as a larger chunk of their algorithms when determining what order to display web pages in their indexes.

### Description META Tag

The Description META tag (`<meta name="description" content="Your site's summary here">`) should have at most 150 characters (including spaces and punctuation) and be in place on all pages of your site. Avoid repeating keywords more than 3-7 times and place keywords close together. Try to stay away from using "Filter Words" (aka Stop Words like the, is, an, of, for, do, where, how, single letters or single digits, etc.) between keywords breaking up potential keyword phrases. This holds true in development of content as well.

### Keyword META Tag

A lot of people are still up in the air on this topic but use them as you see fit. Keep the number of keywords down to twenty at most and if it's in your keywords tag it should appear in the page itself at least twice.

### Robots META Tag

Use of the **Robots META tag** (`<meta name="robots" content="index,follow">`) is becoming more beneficial with search engines like Google. "index" instructs search engines to add that page to their index, "noindex" instructs them not to index that web page. "follow" tells search engines to go to all links on that page, "nofollow" tells them not to follow links, "all" tells spiders to index the page and follow the links, while "none" tells spiders to not index the page nor follow the links. Basically, as a search engine's spider crawls across your web site it will adhere to what is specified in the **Robots META tag** in terms of what should be added to that search engine's index and whether or not the spider should follow links to other pages that your web page links to. Use this tag wisely. If you create a link web page and put a "nofollow" in this tag some people and search engines will not think very highly of it. Another good thing to have is a [robots.txt](https://www.robotstxt.org/) file. This tells search engine spiders/crawlers where they should never go.

### Cascading Style Sheets (CSS)

**Cascading Style Sheets** (CSS) are a great tool that help simplify fluid design of web sites they're a small amount of code that have a huge effect. They can improve load time significantly by removing quite a bit of HTML from your pages and can simplify web site design and web page creation. Bare in mind that most browser have some issues with their implementation of CSS. Using CSS for layout may lead to pages that look good in only one or two browsers. But, using CSS to control appearance is highly recommended.

Make sure your site is using a good style sheet with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

### Design

Overall **Design** of your site should be fluid. Cater to your users though. If your users use Netscape design for it, if a user makes a suggestion about the design of your site, consider it. Make your web site's home page clean, simple and less than two screens in length (one screen is preferable). Try to keep the rest of your pages on your site a max of four screens. Place your most important information and navigation on the first screen of each page.

Focus attention (think Google; you open their page and your focus goes immediately to what's important). If you have a lot of material on your site, break it up, spread it across multiple pages, and give visitors the option of downloading larger files to their hard drive. Try to use Arial or another sans-serif fonts (don't use font embedding) and stay away from background images. The best combination for reading is a white background and black letters so keep the background light and the font dark.

You should try to have more text than HTML on content pages. Avoid frames, they're usually more of a headache than their worth and a lot of search engines have difficulty spidering pages that utilize frames. Frames also make the updating of information and site navigation some what more difficult in most circumstances.

### Site Navigation

Site Navigation is a very important thing to have on every page of your web site. If you have PHP or SSI available, the easiest way to implement navigation is to create a central HTML file and use an include on every page. That way if you need to change the navigation you only change it once and not dozens or thousands of times.

Place attractive navigation on the first screen of every page and use text links (that are different from other links on your site) at the bottom of every page should you decide to use graphics as a means of navigation. Making the text links at the bottom of a page different isn't difficult. Something as simple as making the links **bold** or putting them in italics and giving them a slightly different font size makes them stand out more. Should you use multimedia effects for navigation you definitely need the links at the bottom of the page. Keep navigation consistent throughout the site and try not to reinvent how people navigate web sites in the process. Vital parts of medium to large web sites are a **Help or FAQ** page, a [**sitemap**](/sitemap.xml), and a [**Search**](/search) function.

### Load Time

Load Time is probably the most overlooked yet incredibly vital aspect of building a good web site. Your pages have to load fast; slow pages are typically skipped over by visitors. Use no more than four images on your home page and make sure they're not .bmp (Paint) or .psd (Photoshop) files because a lot of browsers don't support those files. Try to keep page sizes below 15KB, optimize graphics (don't over optimize), and use CSS (it helps). Take into account what multimedia affects such as Flash and large images that appear on your site (does the added load time benefit the user?). If it's available to you use PHP's [ob_gzhandler](https://www.php.net/manual/en/function.ob-gzhandler.php) on every page. It doesn't hurt at all because if a browser doesn't support GZIP encoding PHP will note that and will not GZIP encode pages going to a browser that can't support GZIP encoding. It's as simple as changing the filename extensions on all your pages to .php and adding this line of code to the top of all your PHP pages:

`<?php ob_start("ob_gzhandler"); ?>`

This is assuming you have PHP installed on your web server of course. Also keep in mind that the majority of people who surf the web are connected at 56K or less. A good rule of thumb when looking at load time statistics is the consider the 28.8K speed as the speed it takes your web site to load. This way you're always looking out for the little guy. Typically pages that load in under 10 seconds on a 28.8K connection are optimal.

Check page load times at Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

### Link Popularity

**Link Popularity** is a very important aspect of search engine rankings (especially Google). However, it's the most difficult aspect to improve upon. Don't use "Free for All" link sites and other "Get Links Quick" type schemes because most search engines look at those sites as spam and may not get your site listed, EVER. The best links to get are from webmasters of other sites that have similar products or cover the same topics as your site (this is also known as Reciprocal Linking). Also be sure to Crosslink, which is the act of linking across content within the same site. In general, every page on your web site should have a link to another page on your web site. Don't link more than two directories deeper or higher from any given page. [**Improve your link popularity**](/link-popularity/).

Don't worry about submitting your web site to search engines. It's better to have search engines discover your site naturally (through links from other web sites).

If you're trying to get better rankings in search engines check out my [SEO Checklist](/seo-checklist/) which will assist you with search engine optimization.

### Web Site Design Don'ts

* Invisible text (putting up keywords at the bottom of your page the same color as the background)
* Meta refresh tags (refresh page every XX number of seconds)
* Irrelevant keywords in the title and META tags
* Excessive repetition of keywords (keywords can be overused)
* Mirror sites, other domains with exact same content, redirect pages, etc.
* Don't use 1 x 1 pixels to throw more keywords into your pages
* Don't use Construction Areas (good web sites are always under construction)
* Don't advertise your site unless you're planning a launch event or finished with the site and are merely adding content.

### Other Notes

* Track web site traffic ([Webalizer](http://www.webalizer.org/) is a great, free, and highly customizable tool for Unix or Linux and Win32 systems).
* Spell Check, spell check, spell check! Misspelled words are becoming a thing of the past on the world wide web. There are dozens of tools that can spell check your web pages so there is no excuse for poor spelling.
* Not all search engines can index multimedia files (Flash, PDFs, etc.) or the content within those files.
* No search engine can index text within images or graphics files
When adding something to your site ask yourself how it will effect users. If it benefits them then go for it. If it doesn't benefit them in any way then it would probably be best to think twice about it.
* Add content often, no one likes a site that doesn't change. Stale pages drop quickly is search engine rankings.
* Validate, validate, validate! Conform to web standards. They're there for a reason.
* Make sure your site has well formed HTML or XHTML with the [W3C Markup Validation Service](https://validator.w3.org/) and the [WDG HTML Validator](http://gnu.univ.gda.pl/wdg-html-validator/).
* Nothing drives people away more than broken links.  Use a link checker to check all links within and leaving your site. [W3C Link Checker](https://validator.w3.org/checklink) and [Dr. Watson](http://watson.addy.com/) are two good places to check your links.

{{< eo >}}
