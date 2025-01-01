---
ShowTOC: false
aliases:
- moving-to-linux-partitioning
author: Chris Short
date: "2003-05-11"
description: ""
draft: false
tags:
- linux
- open source
title: Moving to Linux - Partitioning
---

After deciding to make the [move to Linux](/moving-to-linux/), determining that my [hardware is compatible with Linux](/moving-to-linux-hardware-compatibility/), and after [picking a Linux distro](/moving-to-linux-picking-a-distribution/) it's time to decide how to partition my hard drive.

Unlike Microsoft Windows where one partition is usually the case, Linux users agree that a few partitions should be made for certain paths that Linux uses. I've done some research on the [Linux Directory Structure](/linux-directory-structure/) and that would be very helpful information to read before continuing if you're not too familiar with Linux already.


A lot of people agree that the only things a home user should have to really worry about, in terms of partitioning are a swap partition and the root partition. Swap is similar to the Windows page file or virtual memory (virtual memory is the total of RAM and swap space). Root is used in Linux as the directory that everything else falls under, even devices (like hard drives, CD-ROMs, etc.). In most cases a home user really should just have a swap and root partition, it keeps things simple. But in my case I'm going to be using a huge drive (200 GB) and want certain things sorted a certain way. I also want the ability of positioning things on the hard disk so that MP3s for example aren't sharing the same space with critical files and documents. I'll also be using a second hard drive (20 GB) for simple file storage and activities that have a high disk usage (burning CDs).

I've seen some very complex Linux partitioning schemes before. A lot of distributions can recommend a partitioning scheme to you during installation. I have some special wants and needs so my partitioning scheme will be unique to my situation. But, you might be able to learn something, so read on.

## Swap

First, I had to determine a few things like, max swap partition sizes, a recommended size for a /boot partition, and how much empty space I'd need to edit digital video and how much storage space I want for MP3s. While doing all this I ran into a few stumbling blocks and a few tips. First, swap partitions on the i386 architecture can have a max size of 2 GB (on kernels newer than version 2.1). There can also be a maximum of eight swap partitions. The Linux Partition HOWTO recommends putting the swap partition on a fast part of the disk, placing the swap partition on a low activity disk, and if possible creating swap partitions on multiple disks and controllers. So essentially, on newer disks, it would be advisable to put the swap partition on the outside of the disk.

{{< carbon >}}

Being that I have two hard drives available (both on different controllers) I'll create a swap partition after the /boot partition on the 200 GB disk and the first partition on the 20 GB drive will be a swap partition. This should create optimal swap performance. The size of both partitions, being that available space isn't an issue in my case, will be 1 GB each, totaling 2 GB of swap space.

> [What's the right amount of swap space for a modern Linux system?](https://opensource.com/article/19/2/swap-space-poll?utm_source=chrisshort.net&utm_medium=web&utm_campaign=moving-to-linux)

## /boot

The next issue I needed to overcome was picking the right size for the /boot partition. Typically, 16 MB for /boot should be ample, but, I want everything to have breathing room some after asking around in some newsgroups and forums I decided that a 100 MB /boot partition would be more than adequate. The /boot partition will be the first partition on my 200 GB disk drive.

With /boot and swap out of the way now the more mundane task of determining what other partitions I should create. Typically, on home user would just allocate the rest to the root partition and be done. Not the case here.

## /home

The next easiest thing to determine would be how much space for the /home partition would be adequate. Considering it will be just three or four people using the computer user space won't be too hard to accommodate. I figured that since we're using a 10 GB partition in Windows to store all of our personal files that 30 GB for /home should be ample. An interesting thing I do is create a world readable directory for downloads. Everything from P2P program downloads to downloading programs off the Internet will end up in the download directory and either be moved from there. It makes things a little bit easier on everyone using the computer. Being that users keep their files in /home I decided that the best place to put the download directory would be directly under /home. But, considering this directory sees little use at times and high use at others I'm going to create a 5 GB partition for /home/download that will fall on the disk after /home. The /home partition will fall after the root partition.

The reason I'm going to use a 200 GB hard drive in Linux is because of storage of a huge MP3 collection and the need for digital video editing workspace. So to accommodate these overall low use, high capacity needs I'll be creating a /mp3 partition and a /video partition both 50 GB each. Sure that's half the disk but it is space that's needed and can be used for other things if needed. /mp3 and /video will appear towards the end of the 200 GB drive.

## Other Partitions

The remaining space on the 200 GB hard disk drive will be allocated to the root partition. The root partition will be about 63 GB and should be ample space for /var and /tmp. This is essentially the same as creating one huge root partition but there are some performance and organizational tweaks in this scheme.

### 200 GB Partitioning Scheme

`/boot` 100 MB  
`swap` 1 GB  
`/~` 63 GB  
`/home` 30 GB  
`/home/download` 5 GB  
`/mp3` 50 GB  
`/video` 50 GB

My 20 GB drive will utilize similar organizational and performance tweaks. As mentioned earlier the first partition on the 20 GB drive will be a 1 GB swap partition. The partition that will follow that is a burner partition (/burner). /burner is used for burning CDs which is often a high disk usage process so moving it off the main hard drive is a good idea. The partition following the /burner partition will be a 1 GB partition for holding the infamous "Oh Shit Disc" (/burner/osd). The "Oh Shit Disc" is a CD-ROM where I store frequently downloaded and installed programs that are often required after a crash or when setting up a new computer. The need for this disc was because of frequent Windows crashes and building new computers for people that didn't have Internet access yet. I imagine the need for the disc for my personal use will begin to diminish but I'll keep my current Windows "Oh Shit Disc" and create a Linux "Oh Shit Disc". The following partition will be a storage partition (/storage) totaling 5 GB. /storage will be used for archiving data files that are used so infrequently that you could burn them to a CD and never worry about them again. But, I tend to lose or damage CDs and it's easier to but the files in deep freeze on their own partition. The last partition that will be on the 20 GB hard drive will be a 3 GB partition for storing log files from my firewall (/var/log/SonicWALL). 3 GB is more than enough room and the reason for partitioning the space is so that the hard disk doesn't get fragmented as quickly from constant disk writes and so that the root partition (where /var is located) isn't filled up by firewall logs. There will be about 5 GB of unused disk space at the end of the 20 GB drive, just in case I find another need for it.

### 20 GB Partitioning Scheme

`swap` 1 GB  
`/burner` 5 GB  
`/burner/osd` 1 GB  
`/storage` 5 GB  
`/var/log/SonicWALL` 3 GB  
5 GB of Free Space

This overall partitioning scheme allows the most flexibility and best performance for my needs. This scheme is also customized to the needs of my household and simply won't work for everyone.

#### Resources

* [Linux Directory Structure](/linux-directory-structure/)
* [Linux Partition HOWTO](http://www.tldp.org/HOWTO/Partition/index.html)
* [comp.os.linux](https://groups.google.com/forum/#!search/comp.os.linux)


