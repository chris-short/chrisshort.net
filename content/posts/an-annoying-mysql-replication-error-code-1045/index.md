---
ShowToc: false
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/logo-mysql-170x115.png
date: "2015-10-05"
description: ""
draft: false
tags:
- mysql
- replication
title: 'An Annoying MySQL Replication Error Code: 1045'
---

I was fixing MySQL replication on a slave this past week. Everything seemed to be ready to go after bringing data over from the master manually. I went to connect the slave to the master and nothing happened.  Whaaaaaa?

{{< highlight bash >}}
Last_IO_Errno: 1045
Last_IO_Error: error connecting to master 'repl@blah.local:3306' - retry-time: 60 retries: 86400
{{< / highlight >}}

{{< carbon >}}

Let me look up [MySQL error code 1045](https://web.archive.org/web/20161118213427/https://dev.mysql.com/doc/refman/5.6/en/error-messages-server.html#error_er_access_denied_error):

{{< highlight bash >}}
Error: 1045 SQLSTATE: 28000 (ER_ACCESS_DENIED_ERROR)
    Message: Access denied for user '%s'@'%s' (using password: %s)
{{< / highlight >}}

That's not helpful. After some additional testing I realized the password might be too long. Sure enough, the [CHANGE MASTER TO syntax guide](https://dev.mysql.com/doc/refman/8.0/en/change-master-to.html) states MASTER_PASSWORD has a maximum length of 32 characters (despite the MySQL client having a longer limit).


It's annoying that this limit exists and the error 1045 message isn't clearer about it. Hopefully you found this very early on in your search for an answer.
