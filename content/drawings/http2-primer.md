+++
author = "Chris Short"
categories = ["HTTP2", "2016"]
date = 2016-11-16T13:15:00Z
description = ""
draft = false
slug = "http2-primer"
tags = ["HTTP2", "drawing"]
title = "HTTP/2 Primer"
aliases = [
    "http2-primer",
    "/http2-primer",
    "/http-2-primer-and-drawing/",
    "/http/2-primer/"
]
[cover]
image = "https://shortcdn.com/chrisshort/drawings/chrome-devtools-h2.png"

+++

Hypertext Transport Protocol v2 (HTTP/2) is here and is being implemented at an ever quickening pace. HTTP/2 is going to speed up the web and enable new capabilities. There is a lot that stays the same but there are some significant changes coming. In educating myself I decided to illustrate some of the changes in HTTP/2:

![HTTP/2](https://shortcdn.com/chrisshort/drawings/http2.png)

The first thing to keep in mind is the primary reason for HTTP/2 even being a protocol is to improve performance (and not necessarily security). With that in mind let's hit the highlights (this is not intended to be a [fully formed guide](https://http2.github.io/faq/)):

* HTTP/2 is **multiplexed** and this is awesome! At the turn of the century, I was using military-grade multiplexers on a regular basis. I thought that it would be great to be able to do this with TCP/IP based connections; that reality is finally here for HTTP! Multiplexing essentially is combining multiple signals or streams into a single signal or stream. It is really quite innovative and will establish only one TCP connection. This will handle resource blocking in a better fashion as well.

{{< carbon >}}

* HTTP/2 **compresses headers** by default with a newly built compression algorithm called [HPACK](https://httpwg.github.io/specs/rfc7541.html). Compressing headers will allow more data to flow faster by getting headers down into the manageable realm of a packet or two as opposed several round trips.

* HTTP/2 is a **binary** protocol unlike HTTP which is plaintext. In my opinion, this is good and bad but I am okay with HTTP/2 being binary. It is good in the sense that it will potentially reduce errors and ease machine parsing (not having to deal with special characters, white space, etc.). However, with it not being plaintext that means you won't be able to easily manipulate an HTTP/2 server with a tool like telnet. Fear not, [Wireshark has some support for HTTP/2](https://wiki.wireshark.org/HTTP2) and it is improving and [curl supports HTTP/2](https://curl.haxx.se/docs/http2.html).

* HTTP/2 is built for performance. Some thought was put into forcing the protocol to require encryption. Ultimately, it is not an explicit requirement of HTTP/2. But, several implementations do require TLS for HTTP/2. One good thing the working group did decide was that the **lowest TLS version supported by HTTP/2 is TLS 1.2**. There is also a ciphersuite blacklist as part of the protocol. While this is not going far enough to some this is a great improvement! No more SSL v3 configs lingering around and no more TLS implementations with poor ciphersuites.

* There is one thing that is not changing in HTTP/2 and that is **status codes**. 200 is still OK, 404 is still not found, and 451 is still Unavailable For Legal Reasons. There will be no need to memorize new codes (and I will still ask you to define at least three codes during an interview).

There are a lot of great things happening in HTTP/2 and I would encourage to consider implementing where you can as soon as you can. Find your favorite [code's implementation or web server](https://github.com/httpwg/http2-spec/wiki/Implementations) and get rolling with HTTP/2.

{{ eo_text }}
