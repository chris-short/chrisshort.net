---
ShowTOC: true
TOCOpen: true
author: Chris Short
aliases:
- /google-search-console-insufficient-https-coverage-on-your-site
cover:
  caption: Google says a site has no URLs with HTTPS but, according to testing tools like Qualys SSL Labs, HTTPS is fine
  image: your-site-has-no-urls-with-good-page-experience.webp
  relative: true
date: "2021-04-26"
description: Jumping back into Search Engine Optimization because I felt forced to
  by Google Search Console after hours of troubleshooting why it was reporting HTTPS
  issues
tags:
- search
- search engine
- search engine optimization
- SEO
- Google Search Console
- Google
- HTTPS
- error
- header
- permissions policy
- experience
- coverage
- Google
title: 'Insufficient HTTPS coverage on your site: What does that mean?'
---

## History

In the early 2000s, I did a lot of side hustle work around [Search Engine Optimization](/tags/seo/) (SEO). I'd help clients with their search engine rankings. Back then, folks cared about all the search engines. Nowadays, there's only one search engine people care enough to write about, Google.

As [Matthew Broberg so eloquently put on Twitter](https://twitter.com/mbbroberg/status/1385987372223979521) the other day, "Google is both the monopoly and trend setter. It's a good target either way you look at it." If you own a website and you care about it enough that you want people to look at it, do some SEO basics and [add your site](https://support.google.com/webmasters/answer/34592?hl=en) to the [Google Search Console](https://search.google.com/search-console).

{{< carbon >}}

## Renewed interest in search engine optimization

I've been reading more SEO-related content lately as I've been trying to grow the readership of this site and my newsletter, [DevOps'ish](https://devopsish.com/). I've been watching traffic in Google Search Console to this site dipping for of the past few months, and I started to look into the matter over the weekend seriously. Google shares quality information about your site with what it calls "[Page experience signals](https://developers.google.com/search/docs/guides/page-experience#signals)," which encompass [Core Web Vitals](https://developers.google.com/search/docs/guides/page-experience#core-web-vitals), [mobile friendliness](https://developers.google.com/search/docs/guides/page-experience#mobile-friendly), and [HTTPS](https://developers.google.com/search/docs/guides/page-experience#https).

## "A page **must** be served over HTTPS to be eligible for Good page experience status"

If you're not serving your site over [HTTPS](https://developers.google.com/search/docs/advanced/security/https), you're going to have a harder time getting good results on Google Search Results Pages (SERPs). Everyone wants to be on the front page of Google. There are many jokes about how the second page of Google search results is akin to being thrown into an abyss. I could make a joke about how SEO content is nothing but a series of links to pages with a series of additional links to other pages, all of which you must consume and apply to get to the first page of Google.

![HTTPS is vitally important for good search engine results](https://shortcdn.com/chrisshort/page-experience-signals-https-failing.webp "HTTPS is vitally important for good search engine results. But, this warning is not helpful.")

The **LEARN MORE** that I was naively hopeful would provide an answer was indeed worthless. All pages on [ChrisShort.net are being served over HTTPS](https://www.ssllabs.com/ssltest/analyze.html?d=chrisshort.net&hideResults=on&ignoreMismatch=on&latest) and have been for *years*. There was no obvious answer to this problem. Google documentation left a lot to be desired. Even [the discussion matching the error message, "Insufficient HTTPS coverage on your site"](https://support.google.com/webmasters/thread/106824024?hl=en) featured questions from others in an equal state of confusion as I.

## Oh, there are some other non-HTTPS related errors here

I was at a loss and assumed something was indeed wrong (I doubt Google would be secretive about this). I did what every frontend developer I know would do. I opened the [Developer Tools in my browser](https://developer.mozilla.org/en-US/docs/Tools). I had many errors in the Console due to a poorly implemented CSP reporting HTTP header—that needed fixing. Then I had some fingerprinting issues due to Netlify consolidating assets and serving across their vast CDN. I had to ultimately remove the fingerprinting of these assets as it was breaking [site search](/search), and there was no other reasonable fix (not using the Netlify CDN is not an option).

### Permissions Policy (tl;dr here)

Then I saw this tiny, one-line error message. Something was wrong with my  [Permissions Policy](https://developer.chrome.com/blog/new-in-chrome-90/#permission-policy) header. I [fixed that error due to a syntax error in my implementation of the Permissions Policy header](https://github.com/chris-short/devopsish.com/pull/168/files). Like magic, before I could even go to check, the Google Search Console was reporting good HTTPS for ChrisShort.net.

![Your site just started using HTTPS according to Google. Congrats?](https://shortcdn.com/chrisshort/your-site-uses-https.jpg "While the outcome was successful, I would have liked this to be a little better experience for folks.")

## Conclusion

What does this mean? Well, if you have implemented headers and happen to make a simple syntax error, it will impact Google’s interpretation of your website’s HTTPS configuration. The TLS encryption itself was NOT compromised or even made weaker by the poorly implemented Permissions Policy header. But, because it was an improper header, Google penalized the entire site by showing the HTTPS as somehow broken. Google can and should do better than this when it comes to the Google Search Console. It’s a vital tool for businesses across the planet. At the end of the day, “A page must be served over HTTPS to be eligible for Good page experience status.” It shouldn’t error on HTTPS when that wasn’t the actual issue, though.

