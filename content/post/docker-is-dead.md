+++
author = "Chris Short"
categories = ["Linux"]
date = 2017-12-30T12:30:00Z
description = "Aside from Uber, I can't think of a more utilized, hyped, and well funded Silicon Valley startup (still in operation) fumbling as bad as Docker did in 2017."
draft = true
slug = "docker-is-dead"
tags = ["open source", "docker", "containers", "kubernetes"]
title = "Docker is Dead"
image = "https://cdn.chrisshort.net/docker-is-dead.png"

+++

To say that Docker had a very rough 2017 is an understatement. Aside from Uber, I can't think of a more utilized, hyped, and well funded Silicon Valley startup (still in operation) fumbling as bad as Docker did in 2017. People will look back on 2017 as the year Docker, a great piece of software, was completely ruined by bad business practices leading to its end in 2018. This is an outside facing retrospective on how and where Docker went wrong and how Docker's efforts to fix it are far too little way too late.

### Docker is Good Software

To be clear, Docker has helped revolutionize software development. Taking Linux primitives like cgroups, namespaces, process isolation, etc. and putting them into a single tool is an amazing feat. In 2012, I was trying to figure out how development environments could be more portable. Docker's rise allowed a development environment to become a simple, version controllable Dockerfile. The tooling went from Packer, Vagrant, VirtualBox, and a ton of infrastructure to Docker. The Docker UI is actually pretty good too! It's a good tool with many applications. The core Docker team should be very proud of the tool they built.

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

### Docker is a Silicon Valley Darling

Docker's early success lead to the company building a big community around its product. That early success fueled funding round after funding round. Well known investors like Goldman Sachs, Greylock Partners, Sequoia Capital, and Insight Venture Partners lined up to give truckloads of money to Docker. To date, Docker has raised capital investments totaling between $242 to over $250 million dollars. But, like most well funded, win at all cost start-ups of the 2010s, Docker made some human resources missteps. Docker has protected some crappy people along its rise. This led to my personal dislike of the company’s leadership. The product is still quality but it doesn’t excuse the company's behavior AT ALL.

### Kubernetes Dealt Damage to Docker

Docker’s doom has been accelerated by the rise of Kubernetes. Docker did itself no favors in its handling of Kubernetes, the open source community’s darling container orchestrator. Docker’s competing product, Docker Swarm, was the only container orchestrator in Docker’s mind. This decision was made despite Kubernetes preferring Docker containers at first. My Docker Captain friends confirmed early in 2017 that Kubernetes discussions in articles, at meetups, and at conferences was forbidden by Docker. Through dockercon17 in Austin this Kubernetes-less mantra held. Then, rather abruptly, at dockercon EU 17 Docker announced it was going all in on Kubernetes. The sudden change was an obvious admission to Kubernetes’ rise and impending dominance. This is only exacerbated by the fact that Docker sponsored and had a booth at KubeCon + CloudNativeCon North America 2017.

### Moby?

No one understood what Docker was doing in April at dockercon17 when it announced Moby. Moby is described as the new upstream for the Docker project. But, the rollout of Moby was not announced in advance. It was as if millions of voices suddenly cried out in terror when the drastic shift from Docker to Moby occurred on GitHub as Solomon Hykes was speaking at dockercon17. This drastic and poorly thought through change required intervention from GitHub staff directly. Not only was the change managed poorly the messaging was given little consideration as well. This led to an apology and later hand drawn explanations of the change. This further muddies the already cloudy container space and Docker (or is it Moby?) ecosystem. The Moby fiasco was mocked by those working in the industry. The Docker brand is forever tarnished by its handling of this change.

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

### The Cold Embrace of Kubernetes

Docker’s late and awkward embrace of Kubernetes at the last possible moment is a sign of the pending Docker downfall. When asked if Docker Swarm was dead, Solomon Hykes tweeted, “Docker will continue to support both Kubernetes and Swarm as first-class citizens, and encourage cross-pollination. Openness and choice create a healthier ecosystem for everyone." The problem here is that Docker Swarm isn’t fully baked and is quite far from it. The Docker Swarm product team and its handful of open source contributors will not be able to keep up with the Kubernetes community. As good as the Docker UI is the Kubernetes UI is far superior. It’s almost as if Docker is conceding itself to being a marginal consulting firm in the container space.

### Conclusion

The real problem with Docker is a lack of coherent leadership. There appears to have been a strategic focus around a singular person in the organization. This individual has been pushed further and further away from the core of the company but still remains. The company has reorganized and has shifted its focus to the enterprise. This shift makes sense for Docker’s investors (the company does have a fiduciary responsibility after all). But, this shift is going to reduce the brand’s cool factor that fueled its wild success. It is said that, "Great civilizations are not murdered. They commit suicide." Docker has done just that.

### Bonus Conspiracy Theory

I floated out a theory on Twitter about the awkward moments for Docker in 2017. It is possible Docker knows the end is near for the company itself. As organizational changes have indicated a pending exit (likely through acquisition) the technical core of the company prioritized some changes. Donating containerd to CNCF, making Moby the upstream of Docker, and embracing Kubernetes will immortalize the good work done by the folks at Docker. This allows a large organization like Oracle or Microsoft to come along and acquire the company without worrying about the technological advances made by Docker employees being locked behind licenses. This provides the best of both worlds for the software teams and company itself. Needless to say, 2018 will be an interesting year for Docker.