---
aliases:
- /php-memory-relationships/
- /php-memory-directives-relationship/
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/drawings/php-logo-large-white.webp
date: "2015-10-09"
description: ""
tags:
- php
- memory
- drawing
title: PHP Memory Directives Relationship
---

{{< carbon >}}

I recently had to templatize PHP configurations using Ansible and Jinja2. I had to do some research to ensure that the memory directives that were being defined were actually valid. The three directives I was tinkering with were:

1. [memory_limit](http://docs.php.net/manual/en/ini.core.php#ini.memory-limit)
2. [upload\_max\_filesize](http://php.net/manual/en/ini.core.php#ini.upload-max-filesize)
3. [post\_max\_size](http://php.net/manual/en/ini.core.php#ini.post-max-size)

These three directives values' are actually tied together. **memory\_limit** is the max amount of memory that a script can consume. **upload\_max\_filesize** defines the largest size a file upload can be. **post\_max\_size** limits the max size of post data.

{{< carbon >}}

It's not until you read the documentation on [post\_max\_size](http://php.net/manual/en/ini.core.php#ini.post-max-size) that it is clearly laid out that these three directives are related:

>This setting also affects file upload. To upload large files, this value must be larger than upload\_max\_filesize. Generally speaking, memory_limit should be larger than post\_max\_size.

To summarize, memory\_limit must be greater than post\_max\_size and if your uploading files with a [POST method](http://www.w3schools.com/tags/ref_httpmethods.asp) post\_max\_size should be greater than upload\_max\_filesize.

post\_max\_size > upload\_max\_filesize
memory\_limit > post\_max\_size

Or...

memory\_limit > post\_max\_size > upload\_max\_filesize

Or...

![PHP Memory Relationships](/drawings/php-memory-relationships.webp)

