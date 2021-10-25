+++
author = "Chris Short"
categories = ["Linux", "Open Source", "2005"]
date = 2005-01-05T01:53:00Z
description = ""
draft = false
ShowTOC = false
slug = "linux-directory-structure"
tags = ["linux", "open source"]
title = "Linux Directory Structure"
aliases = [
    "/archives/2005/01/linux-directory-structure.php",
    "/linux-directory-structure.php",
    "www.chrisshort.net/archives/2005/01/linux-directory-structure.php"
]

+++

![Tux Directory Tree](https://cache.chrisshort.net/file/cache-chrisshort-net/tux-tree.gif#center) For more information about the Linux directory structure see the [Filesystem Hierarchy Standard (FHS)](http://www.pathname.com/fhs/) which is part of the [Linux Standard Base (LSB)](http://www.linuxbase.org/) which is a workgroup of the [Free Standards Group](http://www.freestandards.org/).

{{< eo_signup >}}

`/` **The root directory** (not to be concerned with the root account) is similar to a drive letter in Windows (C:\, D:\, etc.) except that in the Linux directory structure there is only one root directory and everything falls under it (including other filesystems and partitions). The root directory is the directory that contains all other directories. When a directory structure is displayed as a tree, the root directory is at the top. Typically no files or programs are stored directly under root.

`/bin` This directory holds binary executable files that are essential for correct operation of the system (exactly which binaries are in this directory is often dependent upon the distribution). These binaries are usually available for use by all users. **/usr/bin** can also be used for this purpose as well.

`/boot` This directory includes essential system boot files including the kernel image (vmlinuz).

`/dev` This directory contains the devices available to Linux. Remember that Linux treats devices like files and you can read and write to them as if they were. Everything from floppy drives to printers to your mouse is contained in this directory. Included in this directory is the notorious /dev/null which is most useful for deleting outputs of various functions and programs.

{{< carbon >}}

`/etc` Linux uses this directory to store system configuration files. Most files in this directory are text and can be edited with your favorite text editor (my favorite is ~~JED~~ [vim](http://www.vim.org/)). This is one of Linux's greatest advantages because there is never a hidden check box and just about all your configurations are in one place. **/etc/inittab** is a text file that details what processes are started at system boot up and during regular operation. **/etc/fstab** identifies file systems and their mount points (like floppy, CD-ROM, and hard disk drives). **/etc/passwd** is where users are defined.

`/home` This is where every user on a Linux system will have a personal directory. If your username is "chris" then your home directory will be "/home/chris". A quick way to return to your home directory is by entering the "cd" command. Your current working directory will be changed to your home directory. Usually, the permissions on user directories are set so that only root and the user the directory belongs to can access or store information inside of it. When partioning a Linux file system this directory will typically need the most space.

`/lib` Shared libraries and kernel modules are stored in this directory. The libraries can be dynamically linked which makes them very similar to DLL files in the Windows environment.

`/lost+found` This is the directory where Linux keeps files that are restored after a crash or when a partition hasn't been unmounted properly before a shutdown.

`/mnt` Used for mounting temporary filesystems. Filesystems can be mounted anywhere but the /mnt directory provides a convenient place in the Linux directory structure to mount temporary file systems.

`/opt` Often used for storage of large applications packages

`/proc` This is a special, "virtual" directory where system processes are stored. This directory doesn't physically exist but you can often view (or read) the entries in this directory.

`/root` The home directory for the superuser (root). Not to be confused with the root (/) directory of the Linux file system.

`/sbin` Utilities used for system administration (halt, ifconfig, fdisk, etc.) are stored in this directory. /usr/sbin, and /usr/local/sbin are other directories that are used for this purpose as well. **/sbin/init.d** are scripts used by /sbin/init to start the system.

`/tmp` Used for storing temporary files. Similar to C:\Windows\Temp.

`/usr` Typically a shareable, read-only directory. Contains user applications and supporting files for those applications. **/usr/X11R6** is used by the X Window System. **/usr/bin** contains user accessible commands. **/usr/doc** holds documentation for /usr applications. **/usr/include** this directory contains header files for the C compiler. **/usr/include/g++** contains header files for the C++ compiler. **/usr/lib** libraries, binaries, and object files that aren't usually executed directly by users. **/usr/local** used for installing software locally that needs to be safe from being overwritten when system software updates occur. **/usr/man** is where the manual pages are kept. **/usr/share** is for read-only independent data files. **/usr/src** is used for storing source code of applications installed and kernel sources and headers.

`/var` This directory contains variable data files such as logs (**/var/log**), mail (**/var/mail**), and spools (**/var/spool**) among other things.
