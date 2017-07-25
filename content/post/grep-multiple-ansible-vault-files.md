+++
author = "Chris Short"
categories = ["ansible", "ansible-vault", "grep"]
date = 2015-09-22T23:56:00Z
description = ""
draft = false
image = "https://cdn.chrisshort.net/ansible_circleA_blue.png"
slug = "grep-multiple-ansible-vault-files"
tags = ["ansible", "ansible-vault", "grep"]
title = "Grep Multiple Ansible Vault Files"

+++

Here's a handy one-liner to grep multiple Ansible Vault files (like group_vars). All you need is an Ansible Vault password file (outside of your configuration repo, please) and a little bash.

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

<pre><code class="language-bash">ls -1 | while read N ; do echo -n $N: ; ansible-vault --vault-password-file ~/.ansible_vault view $N | grep <STRING> ; done</code></pre>