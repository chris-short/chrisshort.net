+++
author = "Chris Short"
categories = ["CFP"]
date = 2018-02-23T06:15:00Z
description = ""
draft = false
slug = "go-enabling-devops"
tags = ["open source", "devops", "go", "golang", "security"]
title = "Go to the rescue: Saving DevOps from TLS turmoil"

+++

## Abstract

Find out about a use case that created a need for testing certificate chains, appropriate web server security settings, and the Go code used for testing.

## Description

Talk would be based on this article: https://opensource.com/article/17/4/testing-certificate-chains-34-line-go-program

If you ever need to validate certificates or certificate chains before deploying them, Go provides a near foolproof test method.

A 3rd party developed a tool that was then handed off to our DevOps team to manage and maintain. Before I could do any re-engineering work, I had to resolve a critical issue—the certificates on the ELBs were about to expire and needed updating.

I assumed that if the ELB, NGINX, or httpd started, it was a good sign. This was a false assumption on my part and I ended up serving a bad chain for a few minutes. This did not break the site, but it was definitely not the way I wanted things to remain.

I needed a tool that would fail if the certificate chain provided was incorrect. I wanted a lightweight tool that could be publicly accessible. Conducting a third-party analysis of the certificates and configuration was a requirement. There were no tools that I could find meeting this need, so I decided to build my own. I turned to the open source language, Go.

A detailed breakdown of how I built a tiny web server to fit my needs along with what each package is doing as detailed in the article linked above.

## Presented to

1. [Gophercon 2017](/gophercon-2017-lightning-talk-video/)
2. [DevOpsDays NYC 2018 Ignite Talk on Golang](/devopsdays-nyc-2018-ignite-talk-on-golang/)
3. [DevOpsDays Charlotter 2018 Ignite Talk on Go](/devopsdays-clt-2018-ignite-talk-on-go/)