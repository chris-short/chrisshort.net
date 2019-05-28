+++
author = "Chris Short"
categories = ["Kubernetes"]
date = 2019-05-28T07:00:00Z
description = ""
draft = false
slug = "the-secret-to-kubernetes-secrets"
tags = ["kubernetes", "secrets"]
title = "The Secret to Kubernetes Secrets"
image = "/the-secret-to-kubernetes-secrets/kubernetes-secrets.png"

+++

I made an innocent [comment on Twitter](https://twitter.com/ChrisShort/status/1131771381438394368) last week that led to WAY more feedback than I was expecting. I made the statement

> Every single time I have to create a secret, I have to read the docs. I should have this figured out by now."

The many ways you can peel the Kubernetes Secrets onion seems to grow daily. There's inline secrets, secrets as YAML files, secrets with base64 encoded values, and secrets through third-party providers (like Hasicorp Vault). When looking at the [~~Best~~](https://devopsish.com/128/) Practices the Kubernetes Secrets documentation gives it's a precautionary tale of how things can go horribly wrong.

The tweets started rolling in on how folks managed Kubernetes Secrets themselves. The first suggested using zsh-autocomplete:

{{< tweet 1131984672198713350 >}}

The next suggestiong was to use VSCode snippets and that is a viable option for me:

{{< tweet 1131814890715439106 >}}

One response about using Shell functions piqued my interest for a different reason:

{{< tweet 1132220199330099200 >}}

This incredibly thorough response reads more like a HOWTO and less like a Tweet:

{{< tweet 1131869227634184198>}}

When a colleague asked Albert Einstein if he knew his own phone number. the rebuttal was short and though provoking, "Never memorize something that you can look up." So when this reminder of how, "Memorization is an anti pattern." came up I was quite relieved:

{{< tweet 1132165745389912064 >}}

One thing that did come up in discussion was [stringData in Kubernetes Secrets](https://twitter.com/alejandrox135/status/1131890155822952449). Per the documentation, a Secret has:

> "Two maps: data and stringData. The data field is used to store arbitrary data, encoded using base64. The stringData field is provided for convenience, and allows you to provide secret data as unencoded strings."

This means that the infamous `echo -n "[REDACTED]" | base64` is not needed if `stringData` is used. This essentially eliminates one command when creating a Kubernetes Secret. I'll be using `stringData` by default in the future. I think `stringData` [arrived in Kubernetes 1.12](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.12/#secret-v1-core) (if that's not the case, let me know); please don't feel bad for not knowing about it sooner (it's literally brand new in the grand scheme of things). With this in mind, a YAML file built for use with `kubectl apply` would like this:

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: my-special-secret
type: Opaque
stringData:
  key: [REDACTED]
```

{{< mc >}}

In the past, I would keep Secret files in 1Password, Vault, or some other secure storage mechanism. The idea was, I wouldn't have to go look at the Kubernetes Secret docs and do it all again. Reducing errors was the idea here. But, no one necessarily needs to make a file because they think that's the only way. for relatively simple Secrets the `--from-literal` flag allows for a key pair after to create a full fledge Secret:

```bash
kubectl create secret generic my-special-secret \
    --from-literal=key0=barf \
    --from-literal=key1=frab
```

When in doubt, run `kubectl describe secret my-special-secret` to verify the secret is at the very least there and has two keys.

```yaml
Name:         my-special-secret
Namespace:    default
Labels:       <none>
Annotations:  <none>

Type:  Opaque

Data
====
key0:  4 bytes
key1:  4 bytes
```

As far Kubernetes Secrets go, there's a few ways to create them. But, I'm going to try to stick to a one-liner or YAML files stored securely and make use of `stringData` for specifying keys and values. Ditching `echo -n "[REDACTED]" | base64` definitely reduces a source of potential confusion and a step entirely. This lowers Kubernetes' barrier to entry just a smidge so I am all for.

{{< adsense-matched >}}