+++
author = "Chris Short"
categories = ["Linux", "Open Source", "2003"]
date = 2003-05-15T01:41:00Z
description = ""
draft = false
ShowTOC = false
slug = "moving-to-linux-filesystems"
tags = ["linux", "xfs", "ext2", "ext3", "filesystems", "open source"]
title = "Moving to Linux - Filesystems"
aliases = ["moving-to-linux-filesystems"]

+++

After deciding how my [hard disk will be partitioned in Linux](/moving-to-linux-partitioning/), I need to select a filesystem for those partitions. A filesystem is a system for organizing directories and files, generally in terms of how it is implemented in the disk operating system. In layman's terms it is code that tells your operating system how data is stored, organized, and managed on a hard disk drive.


Every operating system has a filesystem of some sort. In the Microsoft Windows world you're fairly limited as to what filesystems are available to you. FAT, FAT32, NTFS, and eventually WinFS are really your only options. In Linux however, there are quite a few filesystems available. They all have their own unique advantages and disadvantages and can have application specific reasons for existence. In this article I'll be discussing what I believe the four candidate filesystems are for my move to Linux.

{{< carbon >}}

I have narrowed my four potential filesystems (based on popularity) to ext2, ext3, XFS, and ReiserFS. The last three in that list are journaling filesystems. A journaling filesystem basically creates a log (or journal) for each partition and keeps track of that partitions structural information (called metadata). The Filesystem HOWTO explained it best, here is a quote:

> File systems update their structural information (called metadata) by synchronous writes. Each metadata update may require many separate writes, and if the system crashes during the write sequence, metadata may be in inconsistent state.
At the next boot the filesystem check utility (called fsck) must walk through the metadata structures, examining and repairing them. This operation takes a very very long time on large filesystems. And the disk may not contain sufficient information to correct the structure. This results in misplaced or removed files.

> A journaling file system uses a separate area called a log or journal. Before metadata changes are actually performed, they are logged to this separate area. The operation is then performed. If the system crashes during the operation, there is enough information in the log to "replay" the log record and complete the operation.

> This approach does not require a full scan of the file system, yielding very quick filesystem check time on large file systems, generally a few seconds for a multiple-gigabyte file system. In addition, because all information for the pending operation is saved, no removals or lost-and-found moves are required. Disadvantage of journaling filesystems is that they are slower than other filesystems.

The quote does mention a minor disadvantage in terms of speed. While that is VERY important it's not the end all, be all of a filesystem. Stability is. After a crash instead of waiting on a filesystem check to complete on a huge partition I'll be going about my business as normal after a consistency check on one file (not the entire filesystem). That time saved is worth the loss in performance.

Ext2 is the de facto standard filesystem for Linux. It's not a journaling filesystem but is very robust and quite stable. Ext2 can support filesystems as large as four terabytes. It has selectable black sizes (1024, 2048, and 4096) and can be defragmented. It's been around a long time and there is a nice set of utilities to go along with it.

Ext3 is the ext2 filesystem plus journaling. This means that ext3 inherits ext2's stability and utilities. There has been solid kernel support for ext3 since kernel version 2.4.15. It is a natural extension of the ext2 filesystem and is in some cases actually faster than ext2. There are two things that I like about ext3. The first being that you can go in between ext2 and ext3 without having to format that partition. This is very nice considering that in some cases the need for journaling a partition sometimes disappears. The second thing that I like about ext3 is the fact that it has three journaling modes (writeback, ordered, and journal). Writeback (data=writeback) only journals metadata changes, data updates are left up to a "sync" process. Writeback is the equivalent of running ext2 with a very fast fsck on reboot, the consistency of the filesystem is not guaranteed. The ordered journaling mode journals all metadata. Ordered (data=ordered) is the default journaling mode for ext3. The journal mode (data=journal) logs all data and metadata and typically requires a larger journal file to maintain performance. This means that all data is written twice making journal the low performance, high integrity option. The journaling mode can be selectable on mount so the degree of journaling can be changed with a few simple commands.

ReiserFS is another viable option for a filesystem. However, after further research I've deemed it to be a filesystem that wouldn't fit in well in the desktop environment. Its performance in comparison to ext3 leaves something to be desired. It would be a great option for mail and database servers in terms of performance but ext3 beat out ReiserFS in quite a few desktop scenarios. After looking at its development history and hearing the opinion of some other Linux administrators it would appear that the development tree itself has changed significantly from version to version, displaying a either a lack or coordination or trying to satisfy too many wants at once. ReiserFS also doesn't have native Redhat support (yet) and only journals metadata (this should be addressed in version 4 of ReiserFS). So due to a lack of performance on the desktop and some other issues I won't be using ReiserFS on my desktop.

XFS is a journaling filesystem developed by SGI. It has recently been ported to Linux and has mainstream kernel support since version 2.5.36. XFS has great performance, delivering near raw I/O throughputs. Its performance is what I like most about XFS. This would be a great candidate for my /video partition because of the amount of data that would be written and read during digital video editing. There are a few things that I don't like about XFS. The first thing being that it's fairly new and has no native Redhat support (yet). Another thing I don't like about XFS is that you can't make XFS partitions smaller (you can make them bigger though). My last issue with XFS was when I read, "XFS is a huge amount of kernel code..." in the XFS FAQ on the SGI web site. So for those reasons I will hold off on using XFS as a filesystem. XFS will however be in the back of my mind when I start needing a little improvement in performance for certain tasks.

Deciding which partitions get either ext2 or ext3 shouldn't be too difficult and the journaling option chosen on ext3 partitions will be dependent upon the level of integrity needed, desired performance, and the size of the partition.

Obviously swap partitions will have the native Linux swap filesystem.

The boot partition will be ext2 because of the fact that I want to force integrity checks on this partition if it's not cleanly unmounted. That way if there is a problem, I'm notified about it and I can easily wipe the partition and restore it from a backup. This is a very small partition as well (100 MB) so those integrity checks won't take too long.

Root will be ext3 and have an ordered journaling mode. This is because of the need for integrity on this file system and because of its size (~63 GB).

The /home partition will be ext3 data=ordered due to its size and the relatively low need for absolute integrity. The /home/download partition will be ext3 data=writeback because of its low need for integrity (only downloaded files will reside here on a temporary basis).

The /mp3 partition will need a high degree of integrity due to the fact that I'd hate to lose all those MP3s. However, due to its size (50 GB) ext2 fsck integrity checks would just take way too long. The /mp3 partition will use ext3 data=journal because of its integrity needs and size.

The /video partition is where XFS would be make a nice fit. But due to a few of the issues mentioned earlier XFS won't be used until some things get ironed out between the filesystem and the kernel. The /video partition won't be used too often but when it is used it will be used quite heavily and performance is an issue. This partition will also be 50 GB so an fsck on it would take too long. The integrity of the data on this partition isn't too much of an issue considering that there is always a backup of some form, somewhere (either on CD or video tape). Taking all these things into consideration, /video will use ext3 data=writeback because of the need for high performance and low need for data integrity.

The /burner partition would be another partition where XFS could be beneficial but I'll opt for ext3 data=writeback for the exact same reasons as the /video partition.

The /burner/osd partition has a low need for overall integrity considering that its just a storage space for frequently used and needed program installation files so it will be using ext3 data=writeback.

The /storage partition will be a place where archived data and multiple user, high need files will be kept. The need for integrity on this partition is incredibly high and backups will occur when things are added or removed. It's a 5 GB partition so the wait for an fsck could take a little time but will be well worth it. Therefore /storage will utilize the ext2 filesystem.

The last partition (/var/log/SonicWALL) will be used for firewall log files and configuration backups. The need for integrity is low and the size is moderate. Considering those two things ext3 data=ordered will be used here.

## 200 GB Partitioning and Filesystem Scheme

```
/boot           100 MB    ext2
swap            1 GB      Linux swap filesystem
/               ~ 63 GB   ext3 data=ordered
/home           30 GB     ext3 data=ordered
/home/download  5 GB      ext3 data=writeback
/mp3            50 GB     ext3 data=journal
/video          50 GB     ext3 data=writeback`
```

## 20 GB Partitioning and Filesystem Scheme

```
swap                1 GB  Linux swap filesystem
/burner             5 GB  ext3 data=writeback
/burner/osd         1 GB  ext3 data=writeback
/storage            5 GB  ext2
/var/log/SonicWALL  3 GB  ext3 data=ordered
5 GB of Free Space`
```

### Resources

[Filesystems HOWTO](http://www.tldp.org/HOWTO/html_single/Filesystems-HOWTO/), 
[Design and Implementation of the Second Extended Filesystem](http://e2fsprogs.sourceforge.net/ext2intro.html),  [Linux ext3 FAQ](http://batleth.sapienti-sat.org/projects/FAQs/ext3-faq.html), [NAMESYS](https://en.wikipedia.org/wiki/Namesys) (ReiserFS), [Linux XFS FAQ](http://xfs.org/index.php/XFS_FAQ)
