---
author: Chris Short
date: "2017-07-22"
description: "Find out about a use case that created a need for testing certificate chains, appropriate web server security settings, and the Go code used for testing."
tags:
- Go
- golang
- DevOps
- tools
title: Testing Certificate Chains in Go
---

This talk was derived from an opensource.com article I wrote in April 2017, [Golang to the rescue: Saving DevOps from TLS turmoil](https://opensource.com/article/17/4/testing-certificate-chains-34-line-go-program). Presented at [GopherCon 2017](https://github.com/gophercon/2017-talks/) as a Lightning Talk. Source for the talk is available on [GitHub](https://github.com/chris-short/testing-certificate-chains-in-go).

### Introduction

Notes:

* Hi! I'm Chris!
* I manage do X at Y (we're hiring)
* I work in the DevOps space
* I contribute content a few places
* I run a DevOps Newsletter called DevOps'ish if you're into those please check it out
* This talk was derived from an opensource.com article I wrote in April 2017

### But Most Importantly

![Chris Short in Gopher Form](gopherize-me-chris-short.webp#center)

I'm many things
But Most Importantly, I'm a Gopher

### Not Too Long Ago in a Place of Work Far, Far Away...

![Star Wars Scroll Y'all](backstory.webp#center)

* My team of merry DevOps'ers inherited an application
* A third-party built the app a few years ago
* The app had long been abandoned
* Before we could do any re-engineering work, we had to resolve a critical issue.
* The certificates were about to expire!

### ...

![This Sound Familiar?](bill-murray-toaster.mp4#center)

* Oh!
* And the only environment this application was in was production
* And there was no time to implement a new key management system
* And it was a pet project of someone in senior leadership

### Let's Talk Certificate Chains

![This Sound Familiar?](2-chainz-tell-em.webp#center)
2 Chainz (we can talk rap music later)

* Let's Talk Certificate Chains for a minute
* HTTPS, SSL... it's all TLS, right?
* In my opinion, if you're using TLS you MUST have a rock solid configuration
* This means you have to include the certificate chain in the correct order
* This is no longer optional in the post-Heartbleed world
* The Internets are watching

### This is the Goal

![This is the Goal](chrisshort_net-qualys.webp#center)

* This is the goal
* If you are going to bother to encrypt your traffic you better do it right
* This is what we're aiming for; an A+
* At this company, we obtained certs from a preferred vendor that our company was cool with
* I prefer Let's Encrypt but some companies aren't comfortable with that yet for various reasons
* The process goes like this...
* You generate your CSR and private key
* You send the CSR to the vendor
* The certificate arrives but usually doesn't have an intermediate key in chain because... vendors be vendoring

### NBD ... OMG

![SSL Vendors Suck](ssl-vendors-suck.webp#center)

* No big deal
* Let's go to the vendor's documentation...
* And OMG...
* The vendor docs are terrible
* This is when you learn...
* Cryptography is hard but implementing cryptographic best practices might be even harder

### Now what

![Dispicable](mj-annoyed.mp4)

* What do we do?
* Look at statistical probabilities and start shuffling keys around?
* The series of games you have to play with openssl or nginx or some other method aren't intuitive
* Do you know how hard this is to explain to people?

### So What Does Any Good Engineer Do?

![Go Build by Ashley McNamara](go_build.webp#center)

* We needed a tool that would fail if the certificate chain provided was incorrect
* We wanted a lightweight tool that could be publicly accessible
* Conducting a third-party analysis of the certificates and configuration was also a requirement
* There were no tools that I could find meeting these needs
* So I decided to build my own
* With Go of course!

### Three Go Packages: log

* The go [`log`](https://pkg.go.dev/log/) package is pretty self-explanatory
* Package that enables logging
* Needed a spectacular failure at the sign of trouble
* `log` has three helper functions: `print`, `fatal`, and `panic`
* Output from the package goes to `stderr`
* Used a `fatal` error to get the web server to stop and log any issue
![Hugging Gophers by Ashley McNamara](Hugging_Gophers.webp#center)

* Let me just say the Go standard library is amazing!
* `log` is designed beautifully
* Using `fatal` to break the app and log to `stderr` if something isn't right is great!

### Three Go Packages: crypto/tls

* The Go[`crypto/tls`](https://pkg.go.dev/crypto/tls/) package partially implements TLS 1.2, as specified in [RFC 5246](https://tools.ietf.org/html/rfc5246)
* Package configures usable SSL/TLS versions
* Identifies preferred cipher suites and elliptic curves used during handshakes
* This is the package that handles connections securely

![Gopher Star Wars by Ashley McNamara](GOPHER_STAR_WARS.webp#center)

* The crypto/tls package is a splendid implementation of the RFC
* "It just works."

### Three Go Packages: net/http

* Go implementation of HTTP
* [`net/http`](https://pkg.go.dev/net/http/) has a function called `ListenAndServeTLS`
* ListenAndServeTLS provides the desired certificate checking functionality
* "If the certificate is signed by a certificate authority, the certFile should be the concatenation of the server's certificate, any intermediates, and the CA's certificate."

![Gopher Inclusion by Ashley McNamara](GOPHER_INCLUSION.webp#center)

* `net/http` has the `ListenAndServeTLS` function and it's awesome
* It fails if your certs aren't up to snuff or ordered properly
* It helps us Gophers out immensely by enforcing best practices

### main: mux, cfg, srv

- Code creates a `mux`, short for HTTP request multiplexer
- I ❤️ multiplexers (it's a long story that involves analog signals)
- `mux` has a function that creates an HTTP server with headers and content (Hello World!)
- `cfg` brings in all the TLS bits seen in a solid web server config
- `srv` puts the pieces together and defines what port to listen on
![Gopher Share by Ashley McNamara](GOPHER_SHARE.webp#center)

### Fail Spectacularly

* I ❤️ DevOps
* I embrace failure
* `log.Fatal(srv.ListenAndServeTLS("/etc/ssl-tester/tls.crt",` `"/etc/ssl-tester/tls.key"))`
* Defines path of certificate files to use
* Also logs a fatal error if certificate is not valid
* Fails Fast

![Nuclear Weapons Test](nuclear-weapons-test-explosion.webp#center)

* I love DevOps and I embrace failure
* The code allows us to fail quickly if the certificates aren't in accordance with RFC
* Stuff in the standard library JUST WORKS

### It's Open Source!

![ssl-tester on GitHub](ssl-tester.webp#center)
[https://github.com/chris-short/ssl-tester](https://github.com/chris-short/ssl-tester)

* The code is open-sourced
* Check it out on github.com/chris-short/ssl-tester
* Throw a star my way if you feel like it

### It Works!

![ssl-tester Output](ssl-tester-output.webp#center)

* Yes it Works
* Yes you can access it right now!
* [https://ssl-tester.chrisshort.net](https://github.com/chris-short/ssl-tester) redirects you to a reference implementation (ssl-tester has been retired in favor of [**chkcerts**](https://github.com/chris-short/chkcerts))

### No. It Really Works!

![ssl-tester Output](ssltest-ssl-tester-chrisshort-net.webp#center)

* You can even scan it with external tools!

### Conclusion

* The Go code does exactly what I need it to do and nothing more
* About 40 lines of code!!! I ❤️ Go!
* Binary is a self-contained web server
* Less than 6MB!!! I ❤️ Go!
* Can be safely deployed to any public server
* External testing run against it for extra vetting

![Gopher Mic Drop by Ashley McNamara](GOPHER_MIC_DROP.webp#center)

* The tool does exactly what I need it to do and nothing more
* It fails when the certificate chain provided is incorrect
* It's lightweight and publicly accessible
* I'm able to test via third-parties
* It's a tiny, single binary
