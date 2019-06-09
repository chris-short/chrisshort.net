+++
author = "Chris Short"
categories = ["CFP"]
date = 2018-03-01T16:22:00Z
description = ""
draft = false
slug = "kubernetes-cron-jobs-dreams-do-come-true"
tags = ["devops", "kubernetes", "cfp"]
title = "Kubernetes Cron Jobs: Dreams Really Do Come True"

+++

## Abstract

I worked for a large company with several hundred cron jobs running on two systems. Managing these jobs was cumbersome. Resource use during peak times brought things to a halt. Imagine what it was like when systems were down! In this talk, we discuss Kubernetes' killer feature: Cron Jobs.

## Description

### Kubernetes, Jobs, and Cron Jobs

1. What is Kubernetes?
2. Kubernetes has the concept of Jobs
3. Kubernetes Cron Jobs are a relatively new thing

### Use Case

1. Former employer had several hundred cron jobs running on two systems
2. Resource contention during peak times brought the systems to a halt
3. If one cron job didn't run it was hard to determine what task failed or didn't run based on user tickets
4. Chaos if the systems were offline for one reason or another

Using minikube and Docker running locally...

### The Docker Bits

1. Example: The cron job that automates my newsletter publishing
2. Demonstrate simplicity of Dockerfile creation
3. docker build -t devopsish-netlify-cron .
4. Using Google Container Registry (GCR) to distribute Docker images

### The Kubernetes Bits

1. Configure Kubernetes to pull images from GCR
2. Demonstrate creating Kubernetes secrets
3. Demonstrate Kubernetes Cron Job Configuration
4. kubectl apply -f devopsish-netlify-cronjob.yml
5. kubectl get cronjob
6. Watch a job/pod run!

### Conclusion

We have built a Docker container, deployed the image to Google Container Registry, configured the Kubernetes cluster to pull images from GCR, created a secret to store the build hook, and created the CronJob. Imagine the possibilities of having all cron jobs in version control, the distribution of jobs so they can run in better parts of a cluster, etc.