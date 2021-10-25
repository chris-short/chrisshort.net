+++
author = "Chris Short"
categories = ["Go", "DevOps", "2017"]
date = 2017-07-22T22:23:32Z
description = ""
draft = false
slug = "testing-certificate-chains-in-go"
tags = ["Go", "golang", "DevOps", "tools"]
title = "Testing Certificate Chains in Go"

+++

This talk was derived from an opensource.com article I wrote in April 2017, [Golang to the rescue: Saving DevOps from TLS turmoil](https://opensource.com/article/17/4/testing-certificate-chains-34-line-go-program). Presented at [GopherCon 2017](https://gophercon.com/) as a Lightning Talk. Source for the talk is available on [GitHub](https://github.com/chris-short/testing-certificate-chains-in-go).

### **Introduction**
Chris Short

* Manager of DevOps at [Bankrate](http://www.bankrate.com/)
* [opensource.com](https://opensource.com/users/chrisshort) and [DZone](https://dzone.com/users/2868764/chrisshort.html) Contributor
* Contributed to [The Open Organization Guide to IT Culture Change](https://opensource.com/open-organization/resources/culture-change)
* [DevOpsDays](https://www.devopsdays.org/) Speaker and Organizer
* [DevOps'ish](https://devopsish.com/)
* [ChrisShort.net](https://chrisshort.net)
* [@ChrisShort](https://twitter.com/ChrisShort)

Notes:

* Hi! I'm Chris!
* I manage DevOps activities at Bankrate (we're hiring)
* I work in the DevOps space
* I contribute content a few places
* I run a DevOps Newsletter called DevOps'ish if you're into those please check it out
* This talk was derived from an opensource.com article I wrote in April 2017

### **But Most Importantly**
![Chris Short in Gopher Form](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/gopherize-me-chris-short.png#center)

I'm many things
But Most Importantly, I'm a **Gopher**

### **Not Too Long Ago in a Place of Work Far, Far Away...**
![Star Wars Scroll Y'all](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/backstory.png#center)

* My team of merry DevOps'ers inherited an application
* A third-party built the app a few years ago
* The app had long been abandoned
* Before we could do any re-engineering work, we had to resolve a critical issue.
* The certificates were about to expire!

### ...
![This Sound Familiar?](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/bill-murray-toaster.gif#center)

* Oh!
* And the only environment this application was in was production
* And there was no time to implement a new key management system
* And it was a pet project of someone in senior leadership

### **Let's Talk Certificate Chains**
![This Sound Familiar?](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/2-chainz-tell-em.png#center)
2 Chainz (we can talk rap music later)

* Let's Talk Certificate Chains for a minute
* HTTPS, SSL... it's all TLS, right?
* In my opinion, if you're using TLS you MUST have a rock solid configuration
* This means you have to include the certificate chain in the correct order
* This is no longer optional in the post-Heartbleed world
* The Internets are watching

### **This is the Goal**
![This is the Goal](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/chrisshort_net-qualys.png#center)

* This is the goal
* If you are going to bother to encrypt your traffic you better do it right
* This is what we're aiming for; an A+
* At this company, we obtained certs from a preferred vendor that our company was cool with
* I prefer Let's Encrypt but some companies aren't comfortable with that yet for various reasons
* The process goes like this...
* You generate your CSR and private key
* You send the CSR to the vendor
* The certificate arrives but usually doesn't have an intermediate key in chain because... vendors be vendoring

### **NBD ... OMG**
![This is the Goal](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/ssl-vendors-suck.png#center)

* No big deal
* Let's go to the vendor's documentation...
* And OMG...
* The vendor docs are terrible
* This is when you learn...
* Cryptography is hard but implementing cryptographic best practices might be even harder

### ...
![Dispicable](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/mj-annoyed.gif#center)
: What do we do?
: Look at statistical probabilities and start shuffling keys around?
: The series of games you have to play with openssl or nginx or some other method aren't intuitive
: Do you know how hard this is to explain to people?

### **So What Does Any Good Engineer Do?**
![Go Build by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/go_build.png#center)

* We needed a tool that would fail if the certificate chain provided was incorrect
* We wanted a lightweight tool that could be publicly accessible
* Conducting a third-party analysis of the certificates and configuration was also a requirement
* There were no tools that I could find meeting these needs
* So I decided to build my own
* With Go of course!

### **Three Go Packages: log**
* The go [`log`](https://golang.org/pkg/log/) package is pretty self-explanatory
* Package that enables logging
* Needed a spectacular failure at the sign of trouble
* `log` has three helper functions: `print`, `fatal`, and `panic`
* Output from the package goes to `stderr`
* Used a `fatal` error to get the web server to stop and log any issue
![Hugging Gophers by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/Hugging_Gophers.png#center)

* Let me just say the Go standard library is amazing!
* `log` is designed beautifully
* Using `fatal` to break the app and log to `stderr` if something isn't right is great!

### **Three Go Packages: crypto/tls**
* The Go[`crypto/tls`](https://golang.org/pkg/crypto/tls/) package partially implements TLS 1.2, as specified in [RFC 5246](https://tools.ietf.org/html/rfc5246)
* Package configures usable SSL/TLS versions
* Identifies preferred cipher suites and elliptic curves used during handshakes
* This is the package that handles connections securely

![Gopher Star Wars by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/GOPHER_STAR_WARS.png#center)

* The crypto/tls package is a splendid implementation of the RFC
* "It just works."

### **Three Go Packages: net/http**
* Go implementation of HTTP
* [`net/http`](https://golang.org/pkg/net/http/) has a function called `ListenAndServeTLS`
* ListenAndServeTLS provides the desired certificate checking functionality
* "If the certificate is signed by a certificate authority, the certFile should be the concatenation of the server's certificate, any intermediates, and the CA's certificate."

![Gopher Inclusion by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/GOPHER_INCLUSION.png#center)

* `net/http` has the `ListenAndServeTLS` function and it's awesome
* It fails if your certs aren't up to snuff or ordered properly
* It helps us Gophers out immensely by enforcing best practices

### **main: mux, cfg, srv**
- Code creates a `mux`, short for HTTP request multiplexer
- I ❤️ multiplexers (it's a long story that involves analog signals)
- `mux` has a function that creates an HTTP server with headers and content (Hello World!)
- `cfg` brings in all the TLS bits seen in a solid web server config
- `srv` puts the pieces together and defines what port to listen on
![Gopher Share by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/GOPHER_SHARE.png#center)

### **Fail Spectacularly**
* I ❤️ DevOps
* I embrace failure
* `log.Fatal(srv.ListenAndServeTLS("/etc/ssl-tester/tls.crt",` `"/etc/ssl-tester/tls.key"))`
* Defines path of certificate files to use
* Also logs a fatal error if certificate is not valid
* Fails Fast

![Nuclear Weapons Test](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/nuclear-weapons-test-explosion.jpg#center)

* I love DevOps and I embrace failure
* The code allows us to fail quickly if the certificates aren't in accordance with RFC
* Stuff in the standard library JUST WORKS

### **It's Open Source!**
![ssl-tester on GitHub](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/ssl-tester.png#center)
[https://github.com/chris-short/ssl-tester](https://github.com/chris-short/ssl-tester)

* The code is open-sourced
* Check it out on github.com/chris-short/ssl-tester
* Throw a star my way if you feel like it

### **It Works!**
![ssl-tester Output](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/ssl-tester-output.png#center)

* Yes it Works
* Yes you can access it right now!
* https://ssl-tester.chrisshort.net redirects you to a reference implementation


### **No. It Really Works!**
![ssl-tester Output](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/ssltest-ssl-tester-chrisshort-net.png#center)

* You can even scan it with external tools!

### **Conclusion**
* The Go code does exactly what I need it to do and nothing more
* About 40 lines of code!!! I ❤️ Go!
* Binary is a self-contained web server
* Less than 6MB!!! I ❤️ Go!
* Can be safely deployed to any public server
* External testing run against it for extra vetting

![Gopher Mic Drop by Ashley McNamara](https://cache.chrisshort.net/file/cache-chrisshort-net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png#center)

* The tool does exactly what I need it to do and nothing more
* It fails when the certificate chain provided is incorrect
* It's lightweight and publicly accessible
* I'm able to test via third-parties
* It's a tiny, single binary

{{< eo_signup >}}
