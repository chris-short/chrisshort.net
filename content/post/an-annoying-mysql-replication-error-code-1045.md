+++
author = "Chris Short"
categories = ["Databases"]
date = 2015-10-05T16:53:18Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/logo-mysql-170x115.png"
slug = "an-annoying-mysql-replication-error-code-1045"
tags = ["mysql", "replication"]
title = "An Annoying MySQL Replication Error Code: 1045"

+++

I was fixing MySQL replication on a slave this past week. Everything seemed to be ready to go after bringing data over from the master manually. I went to connect the slave to the master and nothing happened.  Whaaaaaa?

<pre><code class="language-bash">Last_IO_Errno: 1045
Last_IO_Error: error connecting to master 'repl@blah.local:3306' - retry-time: 60 retries: 86400</code></pre>

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

Let me look up [MySQL error code 1045](https://dev.mysql.com/doc/refman/5.6/en/error-messages-server.html#error_er_access_denied_error):

<pre><code class="language-bash">Error: 1045 SQLSTATE: 28000 (ER_ACCESS_DENIED_ERROR)
    Message: Access denied for user '%s'@'%s' (using password: %s)</code></pre>

That's not helpful. After some additional testing I realized the password might be too long. Sure enough, the [CHANGE MASTER TO syntax guide](https://dev.mysql.com/doc/refman/5.6/en/change-master-to.html) states MASTER_PASSWORD has a maximum length of 32 characters (despite the MySQL client having a longer limit).

It's annoying that this limit exists and the error 1045 message isn't clearer about it. Hopefully you found this very early on in your search for an answer.

> [**Subscribe to DevOps'ish**](/newsletter/) for updates on DevOps, Cloud Native, and Open Source news.