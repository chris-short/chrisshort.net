+++

author = "Chris Short"
categories = ["Open Source", "2024"]
date = 2024-07-23T07:00:00Z
description = "The OSI's draft Open Source AI Definition could harm open source by allowing non-reproducible data, enabling openwashing and threatening transparency."
slug = "data-deception-osi-open-source-ai-fallacy"
tags = ["Open Source", "Data", "Artificial Intelligence", "OSI", "Open Source Initiative", "AI", "OSAID", "openwashing", "proprietary"]
ShowTOC = true
title = "Data Deception: OSI's Open Source AI Fallacy"
[cover]
image = "https://shortcdn.com/chrisshort/AI-drawing-AI.webp"
alt = "I prompted Stable Diffusion (Generative AI model) to draw itself. It drew something that's a cross between a robot and an electronic toy you'd give a five-year-old."
caption = "Prompting Stable Diffusion to draw itself. Graphic created by Generative AI."

+++

{{< carbon >}}

If the current [Open Source Initiative's](https://opensource.org/) (OSI) [Open Source AI Definition](https://opensource.org/deepdive/drafts/the-open-source-ai-definition-draft-v-0-0-8) (OSAID) is implemented as is, it could potentially lead to a catastrophe for the open source software community and the OSI itself. The fact that the data doesn't necessarily have to be reproducible in the draft OSAID is a major concern, paving the way for increased openwashing. Even the NY Times has a page dedicated to [openwashing](https://www.nytimes.com/2024/05/17/business/what-is-openwashing-ai.html), a clear indication of the significant harm this could inflict.

## Openwashing

We're already witnessing instances like IBM's Granite, which is using proprietary data in a supposedly open source manner, or at least as per the draft OSAID's interpretation of open source. The [IBM Granite page on Hugging Face](https://huggingface.co/ibm-granite) proudly displays 'IBM ❤️ Open Source AI'. But the devil is in the details.

When you look at Pre-Training Data for, say, [granite-7b-base](https://huggingface.co/ibm-granite/granite-7b-base), you will see that 5% of the data is entirely proprietary from Webz.io (formerly Webhose). It's described as "Unstructured web content converted into machine-readable data feeds purchased by IBM." Of course, no weights are mentioned, so we cannot determine if that 5% is the core of the data being used.

## Problem

Why is this a problem? It's a problem because it's not open source. The lack of transparency and reproducibility is a critical issue. We are yet to uncover the true nature of that data or its accuracy. We can't inspect it, no one can share it, and it's proprietary in the sense that 'money was spent on this.' I could not reproduce the same outcomes with any other model or a model I'd build independently. I can't even verify that the data is error-free. To compound the issue, according to the current draft OSAID, this is considered 100% open source because the data is 'described.'

## Described isn't open

If you had code that was merely described, you couldn't reproduce anything. You'd be sitting there writing code to replicate something that's already written and supposedly open. Imagine Kubernetes repos with only READMEs in them because the description of what the code in the repo does stops at "Production-Grade Container Scheduling and Management." The rest is up to the user to decide. But, according to the draft OSAID, this would be 100% pure open source. This is the crux of the problem.

Imagine a world where one sentence can replace millions of lines of open source code. I don't think OSI wants that to happen (I'm not sure anyone does), but it could if the draft OSAID stands as is. Data matters and a lot of big datasets are already open. Injecting something proprietary into the mix that no one can share and only has to have a description isn't just a deviation from open source principles, it's a direct threat to its very integrity. This could lead to a future where open source becomes a mere facade, with the actual code and data being hidden behind proprietary walls, undermining the collaborative and transparent nature of open source development.
