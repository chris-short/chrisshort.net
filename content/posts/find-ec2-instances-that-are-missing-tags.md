---
ShowTOC: false
author: Chris Short
cover:
  image: https://shortcdn.com/chrisshort/aws.jpg
date: "2017-01-26"
description: ""
draft: false
tags:
- EC2
- AWS
- jq
- DevOps
title: Find EC2 Instances That Are Missing Tags
---

The team here was trying to align AWS resources for billing by using Tags. Seems easy enough but we were having issues trying to figure out which EC2 instances were not tagged. We also wanted to find EC2 instances that are missing a ROLE tag. We searched high and low and found that several people needed a solution. We tried to cobble something together with the AWS CLI and then Ansible. We could not come up with a viable solution. So we did what any could [**DevOps**](https://devopsish.com/) team should do; we opened a ticket with AWS Support.


The response from AWS came quickly and succinctly. Here is what we came up with after their input.

Display instances that have no tags:

```bash
aws ec2 describe-instances --query "Reservations[].Instances[].[InstanceId, Tags]" --output text | grep None | awk '{print $1}'
```

Display instances that are missing a specific tag (defined by key):

```bash
aws ec2 describe-instances --query "Reservations[].Instances[].{ID: InstanceId, Tag: Tags[].Key}" --output text | grep -v ROLE
```

Viola! Problem solved, right? Not quite. We noticed that the output formats are very different based on region.

{{< carbon >}}

In **eu-central-1** we are seeing instances in this format:

```
i-cd5ade70
TAG	Name
TAG	OWNER
TAG	SYSTEM
```

In **us-east-1** we are seeing instances in this format:

```
i-0d879e60cb5053af3	['aws:autoscaling:groupName', 'Name']
```

We are thinking the API versions in each region were different but aren't positive. How did we fix this? We needed a consistent format and we landed on JSON. But, now we have a screen full of JSON that while consistently formatted isn't easily editable.

Enter `jq`:

> jq is a lightweight and flexible command-line JSON processor.

Yeah, I know... Another third party tool. But when all you have to do is pipe the `aws` command to `jq -c '.[]'` and you have a `grep -v`'able output it is well worth it:

```bash
aws ec2 describe-instances --query "Reservations[].Instances[].{ID: InstanceId, Tag: Tags[].Key}" --output json | jq -c '.[]' | grep -v ROLE
```

`jq` is available from brew, epel, and the [jq web site](https://stedolan.github.io/jq/).
