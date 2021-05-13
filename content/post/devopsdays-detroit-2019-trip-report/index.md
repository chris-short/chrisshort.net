+++
author = "Chris Short"
categories = ["DevOps", "2019"]
date = 2019-10-26T13:30:00Z
description = "I spoke, sponsored, and worked from DevOpsDays Detroit 2019 this week. The event sold out for the first time this year!"
draft = false
ShowTOC = false
tags = ["DevOps", "DevOpsDays", "Detroit", "Site Reliability Engineering", "SRE", "Conway's Law", "business", "metrics", "data", "vendor pitch", "red hat", "engineering"]
title = "DevOpsDays Detroit 2019 Trip Report"
[cover]
image = "/devopsdays-detroit-2019-trip-report/chris-short-devopsdays-detroit-2019.jpg"
caption = "Photo used with permission from [Brandon Dimcheff](https://twitter.com/bdimcheff)"

+++

Disclaimer: I work for Red Hat, [my views and opinions are solely mine](/terms/) though.

I [spoke](https://speakerdeck.com/chrisshort/devops-is-not-war-df415c22-a29d-4cab-8689-143f9922c0f3), [sponsored](https://devopsdays.org/events/2019-detroit/sponsor) (as did Red Hat, my employer, thank you), and worked from the front row of [**DevOpsDays Detroit 2019**](https://devopsdays.org/events/2019-detroit/) this week. The event sold out for the first time this year. The venue has been the [College for Creative Studies](https://www.collegeforcreativestudies.edu/) in downtown Detroit for the past four years.

The venue is awesome, in my opinion, because it puts systems thinkers in a venue space on top of an arts school overflowing with creative ideas. There is art around every corner. Attendees share the elevators with students going up to the event space. It's both humbling and inspiring. Detroit is a real-life Phoenix Project. Instead of an auto parts manufacturer, it's the 23rd most populous city in the US (and is ironically, The Motor City). But, the school is [putting its students' ideas to use to rebuild Detroit](https://www.collegeforcreativestudies.edu/experience/detroit). Detroit vs. Everybody.



Overall, the event was done far better than in previous years. But, for whatever reason, things felt rushed. When you look at the [program](https://devopsdays.org/events/2019-detroit/program), it appeared the organizers were making more time for speakers and networking though. The talks covered [Site Reliability Engineering](https://landing.google.com/sre/books/) (SRE), disaster management and incident response, and using data to drive decisions that impact business goals. The only low light of the event is that I had to file a code of conduct complaint for the first time ever (for a speaker too). ***That sucked***.

{{< carbon >}}

I need to emphasize how heavily SRE practices and principles were discussed. Nearly every thirty-minute talk touched on an SRE principle of some sort. It is also worth noting, two talks mentioned, "You are not Google." Which is 100% accurate for everyone but Google. The first SRE book dropped in 2016 (to much fanfare). The SRE drumbeat has been picking up speed ever since (with two more books publishing as well). I think it's very safe to say Site Reliability Engineering is a "thing," and at the very least, parts of it can be quite beneficial to organizations.

There was not a lot of Kubernetes talk on stage the first day, but the second day made up for it. The first day did have a wonderful open space on book recommendations. I will try to get that together in the coming days and publish that publicly. There was another open space to talk about improving diversity in workplaces. I was surprised (although I really shouldn't be) at how well Red Hat handles its programs. The discussion did manage to tie blamelessness, openness, and resiliency to diversity in a few ways. If you want to discuss that further, let me know. The industry is changing. It's great to be at Red Hat, a company helping to lead the way. Also, stop saying, "Guys."

![Ramin Keene at DevOpsDays Detroit 2019](/devopsdays-detroit-2019-trip-report/ramin-keene-devopsdays-detroit-2019.jpg)

[Ramin Keene](https://twitter.com/rmn) spoke of Unknown unknowns (unforeseen failure modes) in a way that resonated with the audience. He mentioned that complexity and change are constants in systems. Ramin also said, “complexity is a side effect of success.” When people talk about how complex Kubernetes is, I don't disagree at all. But, I also wonder if the same folks out there haven't hit the problems K8s solves enough to realize the complexity solved a ton of problems along the way. Kubernetes answers the question of, “How do I run all these containers at scale?”

Ramin also mentioned [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law) and how folks ship their organizational charts as code more often than not. You can go all-in on microservices or service mesh, but it's going to look a lot like your organization chart when deployed and running. It might behoove us to embrace this idea going in. It'd be interesting to see how we can project the org chart on an organization through technology.

There was a talk from Codefresh that was a flat out vendor pitch in which the speaker basically told the audience what their KPIs were. However, it was a talk about using Istio for canary deploys. The speaker did a good job explaining Istio and sidecar pattern. But it felt like every, other, slide, was a product pitch. The audience had a lot of questions so it seemed to work. But, EEEK! Gross. This was not a great way to give a talk at [DevOpsDays](https://devopsdays.org/). Product pitch talks make it harder for folks with great talks at smaller companies to get selected. Does an organizer gamble on a lesser-known talent at a smaller company or choose someone from Red Hat or Microsoft? It does the community a disservice.

The last two talks were about using data to drive decision making. [Daniel Sauble](https://twitter.com/djsauble), npm, talked about what they've been doing to improve ecosystem security and npm's [Security Insights API](https://blog.npmjs.org/post/188385634100/npm-security-insights-api-preview-part-2-malware) (GraphGL-based). npm does have a very unique dataset that it's using to provide users with a more secure ecosystem. It's thought-provoking given the metrics Daniel and team have found to be useful for package distribution security concerns. [Steve Ross](https://twitter.com/stevewritescode), Elastic, had an excellent talk (although borderline vendor pitch). One point Steve made about prioritizing self-service when building data-oriented tooling struck home with me — democratizing access to compute resources and more creates competitive advantages within organizations.

These two talks were probably the most important because it talked about data driving services adding up to improved business value. I had a long discussion with one attendee about how business leaders probably don't care too much about build time improvements and percentage increases in compute saturation. Businesses are generally measured by their investors. Public or private, there are things that the CEO, CTO/CIO/CISO/etc. care about that you're only going to see in business publications and CNBC. EBITDA, net revenue growth, profit growth, debt reduction, etc. All those things some of us glanced over in Econ suddenly matter again when you're trying to drive business through technological innovation. It might sound surprising to some but, I probably have to tell someone this at least once a month. You have to align your metrics to business metrics. Improvements in your metrics should correlate with improvements in business metrics.
