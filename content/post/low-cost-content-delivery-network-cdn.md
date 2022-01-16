+++
author = "Chris Short"
categories = ["DevOps", "Cloud", "AWS", "2016"]
date = 2016-06-14T17:18:30Z
description = ""
draft = false
ShowTOC = false
slug = "low-cost-content-delivery-network-cdn"
tags = ["CDN", "Content Delivery Network", "CloudFlare", "Amazon", "S3", "AWS"]
title = "Low Cost Content Delivery Network (CDN)"
[cover]
image = "/img/posts/cloudflare-s3-cdn.png"

+++

A content delivery network (CDN) provides a service that enables public facing, web based responsive access to said resources in an effort to maintain a good user experience across the planet. A CDN provides a localized cache (copy) of your web site and its content closer to end users. CDNs leverage local data centers closer to end users and a little DNS magic to make this work. CDNs help their customers have a significantly smaller infrastructure footprint while maintaining fast load time for services provided. In theory, a CDN allows for web based resources hosted in Miami to be as responsive for the folks in Miami as it would be for the folks in Anchorage, Bangkok, Charlotte, Dallas, Edinburgh, Frankfurt, Glasgow, Helsinki, Instanbul... You get the idea.

{{< eo_signup >}}

The problem with CDNs is that they are not cheap to build thus are not cheap to utilize. High speed, blended provider connectivity to data centers across the globe is an expensive venture. As is maintaining the servers, network infrastructure, facilities, etc. to provide a local copy of your favorite cat video. For anyone that has ever had issues scaling a reverse proxy service, think of a CDN as a planetary distributed reverse proxy for all of humanity to utilize. When thought of in those terms it is easy to understand why CDNs cost so much to use.

Enter [CloudFlare](https://www.cloudflare.com/); a lower-cost content delivery network for the masses. CloudFlare's objective is, "[helping power and protect the entire Internet.](https://www.cloudflare.com/overview/)" The free tier of CloudFlare will be utilized in our low cost content delivery network.

Amazon S3 is a cheap place to host content. As of June 12, 2016, S3 storage costs are, at most, $0.03 per gigabyte in the United States. With the combination of low cost storage and free CDN (and DNS services) there isn't much of a reason not to get your own CDN up and running. Let's get started:

{{< carbon >}}

First, setup a [CloudFlare](https://www.cloudflare.com/a/sign-up) (you will need to change the nameservers for the domain you intend to use as instructed) and [Amazon AWS](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) account if you don't already have one.

In your AWS Console create an S3 bucket with the URL for your new CDN (cdn.chrisshort.net is my URL for content delivery):

[![AWS S3 Management Console](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-01.png)](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-01.png)

Next, right-click your new bucket and select **Properties**. Make note of the **Endpoint** URL (1). Select **Enable website hosting** (2), and optionally specify index.html as a **Index Document** (3):

[![AWS S3 Management Console](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-02.png)](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-02.png)

This is an optional but exceedingly helpful step. You can make every object you place in your S3 bucket publicly readable by setting an [S3 Policy](http://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-overview.html). This will ensure that the permissions on everything uploaded to your S3 bucket will not need to be changed upon upload.[^n]

* Right click your S3 bucket and select **Properties**
* Expand the **Permissions** section
* Click **Add bucket policy** (the image below shows Edit bucket policy because I have already set up public readability)

[![AWS S3 Management Console](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-03.png)](https://cdn.chrisshort.net/file/chrisshort/S3-Management-Console-03.png)

* Copy and paste the policy below and click **Save** (make sure to change YOUR\_BUCKET\_NAME to your bucket's actual name (the URL for your CDN)

{{< highlight json >}}
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::YOUR_BUCKET_NAME/*"]
    }
  ]
}
{{< / highlight >}}

[![Amazon S3 Bucket Policy Editor](https://cdn.chrisshort.net/file/chrisshort/Bucket-Policy-Editor.png)](https://cdn.chrisshort.net/file/chrisshort/Bucket-Policy-Editor.png)

Next, login to your CloudFlare account, open your DNS configuration, and add a CNAME that points to your Amazon AWS S3 Endpoint:

[![CloudFlare DNS CNAME](https://cdn.chrisshort.net/file/chrisshort/DNS-CloudFlare.png)](https://cdn.chrisshort.net/file/chrisshort/DNS-CloudFlare.png)

Last we will need to setup a CloudFlare Page Rule to Cache Everything. Open your Page Rules configuration, click **Create Page Rule**, type in your CDN's URL with a trailing slash followed by a splat (For example: cdn.chrisshort.net/*). Add settings for SSL (if you want to use SSL with S3, and you should, the Flexible setting is necessary), Browser Cache TTL, Always Online, Edge Cache TTL, and the most important setting of all is Cache Level **Cache Everything**:

[![CloudFlare Page Rules](https://cdn.chrisshort.net/file/chrisshort/Page-Rules-CloudFlare.png)](https://cdn.chrisshort.net/file/chrisshort/Page-Rules-CloudFlare.png)

Your new CDN is up and running. Upload objects to S3 and serve them up via CloudFlare's CDN. To confirm that the files are being cached by CloudFlare you can the following command:

{{< highlight bash >}}
curl -I htps://URL/FILE | grep CF-Cache-Status
{{< / highlight >}}

If this is the first time an object has evert been accessed or after the Edge Cache TTL has expired you will see `CF-Cache-Status: MISS`. Run the command again and you should see `CF-Cache-Status: HIT`.

Congrats! You are now running your low cost, high quality, branded CDN from Amazon S3 and CloudFlare. Bask in the greatness that is improved responsiveness and decreased bandwidth costs.

[^n]: The cybersecurity professional in me would like to reiterate that by setting this S3 policy *every object you upload will be public by default*. If you want to set an object so that it is no longer public that is easily done on a file by file basis. However, you should manually upload the object so that the data is never exposed publicly.
