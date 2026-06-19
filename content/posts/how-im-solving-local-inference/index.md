---
author: ["Chris Short"]
cover:
  alt: Beige Scrabble tiles spelling LOCAL centered on a solid dark grey'ish blue background.
  caption: Photo by [Tima Miroshnichenko](https://www.pexels.com/photo/close-up-shot-of-text-on-a-blue-surface-5912633/) from Pexels
  image: pexels-tima-miroshnichenko-5912633.webp
  relative: false
title: "How I'm Solving Local Inference"
date: "2026-06-19"
description: "How I bridged my MacBook Air and Framework 13 using LM Studio's LM Link to run powerful local models, avoid token costs, and gain portability."
summary: "Addresses the shift toward per-token billing in AI tools and the rapidly improving quality of local models, prompting a move to local inference. Facing hardware limitations on a M2 MacBook Air, the author utilizes LM Studio's LM Link feature to connect their powerful Framework 13 laptop over the local network. This setup allows the MacBook Air to leverage the Framework's 64GB RAM for running models like qwen3-coder-next via the lms CLI, effectively combining portability with computational power while avoiding variable cloud costs."
tags: []
ShowToc: true
TocOpen: true
draft: false
---

Several AI tools have recently moved to per-token billing. I'm a lowly Claude Pro user, and I can reasonably stomach a fixed fee over wildly variable fees to use a frontier lab's large language model. I know I'm using more than $20/month in tokens, so the math doesn't math on that one, and that's okay until Anthropic starts reining in users like me. But my daily driver is an M2 MacBook Air; it's light and portable and gets the job done, but it is getting a little long in the tooth. With the chip shortages we're seeing, my next laptop will be the most expensive one I've ever bought.

In June of 2026, models from Moonshot AI, DeepSeek, Alibaba, and others are starting to catch up to the quality of frontier models. Between the token economics of OpenAI and Anthropic and the improving quality of models that can run locally, I want to run local models, but I face a real hardware constraint with 24 GB RAM on my MacBook Air. I do have a Framework 13 AMD Ryzen™ 5 7640U laptop running Bluefin, packing 64 GB RAM, which can really hum with a lot of models, but it's a little bit bulkier, hotter, and definitely louder than the fanless MacBook Air. To address my local inference desires, I finally wired the two systems together this week for a harmonious, dead-simple setup.

## **Enter LM Studio's LM Link**

As I've been testing local inference setups, I've fiddled with a lot of harnesses and tools. There isn't one I really like, at least until I learned about LM Studio's LM Link capability. [**LM Studio**](https://lmstudio.ai/) is a great tool. I especially like how it combines knowledge of your system with a model's specs to assess how well that model will run on your system in the model catalog UI. It really helps ease the pain of choosing which models to test with.

The Framework 13 can run many more models than the MacBook Air. There's even a [Flatpak for LM Studio](https://flathub.org/en/apps/ai.lmstudio.lm-studio), making installing it on Bluefin dead easy (open Bazaar, search for LM Studio, click Install). But LM Link answers how to marry my two laptops for local inference. I discovered it thanks to an update notification highlighting that you can use it to access models from your mobile device. I immediately opened the LM Link tool on both laptops and observed that both machines could see each other over the local network. That answers the chat part of my local inference desires.

## **Replacing Claude Code with LM Studio**

In the instance of LM Studio on my Framework 13, I loaded up several models, including `qwen3-coder-next`, to give me something to use in lieu of Claude Code. Then I had to decide which harness to use with LM Link. The immediate answer was already baked into LM Studio: `lms`.

`lms` is [the CLI tool to work with LM Studio](https://github.com/lmstudio-ai/lms) from your terminal. You can even manage LM Link with it. More importantly, it can use the model running on my Framework 13 on my MacBook Air. So much for having to figure out a harness to connect to the LM Studio server; there's a native tool that does that for me. This solves my local inference and most of my harness-selection problems in one fell swoop. I'll still want to tie NanoClaw into this setup, but lms already helps with many use cases. I can work on getting NanoClaw working with this in a future blog post.

In a world where the economics of cloud AI are becoming more unpredictable and local models are rapidly improving, closing the gap between portability and power has never been more important. Tools like LM Studio and its LM Link feature make it possible to get the best of both worlds—leveraging powerful hardware for local inference while keeping lightweight devices in play for everyday use. As more options open up for running state-of-the-art models on your own terms, it's an exciting time for anyone eager to take control of their AI workflows. This setup offers a simple, flexible way to use both machines, and I'm looking forward to seeing where local AI goes next.