+++
author = "Chris Short"
categories = ["Microsoft", "2005"]
date = 2005-01-05T04:16:00Z
description = ""
draft = false
ShowTOC = false
slug = "windows-and-big-hard-drives"
tags = ["microsoft", "windows xp"]
title = "Windows XP and Big Hard Drives"
aliases = [
    "/archives/2005/01/windows-and-big-hard-drives.php",
    "/windows-and-big-hard-drives.php",
    "/windows-xp-and-"
]
[cover]
image = "/img/posts/Windows_XP_Logo.png"

+++

After having issues with a Western Digital 200 GB hard drive and Windows XP I thought it would be beneficial to put my notes into some sort of guide for other people that might have a problem with Windows and drives that are bigger than 137 GB (128 GB binary).

{{< eo_text >}}

Windows XP Service Pack 1 eliminates the 137 GB (128 GB binary) barrier (Windows XP SP1 includes 48-bit LBA support for ATAPI disk drives). The Microsoft Knowledge Base Article: [How to Enable 48-bit Logical Block Addressing Support for ATAPI Disk Drives in Windows XP](https://support.microsoft.com/en-us/kb/303013) is something everyone should read if they are having the problem of a large hard drive not being completely recognized. This Knowledge Base Article could help you solve your problem quickly but if it doesn't then continue reading. Do bare in mind that you MUST have Windows XP SP1 to use a hard disk that has a capacity that is greater than 137 GB.

There are two key issues that must be addressed if the previously mentioned knowledge base article didn't help you, 1) your BIOS and 2) your hard disk, ATAPI, or ATA controller. Both must have support for 48-bit LBA addressing. This is critical, otherwise all is lost and you will have to resort to either getting a smaller drive or upgrading your existing hardware. Most motherboards manufacturers have released BIOS upgrades to enable 48-bit LBA address support if it wasn't already included. Most hard disk controller manufacturers have also issued updates to support 48-bit LBA addressing as well. Check your motherboard and hard disk controller manufacturer(s) web site to get the latest update(s) for your hardware.

Once that you have verified that your controller card and BIOS can support 48-bit LBA addressing and you are still not able to recognize all of your hard drive space there is one more thing to check. The Windows driver for your hard disk / ATAPI / ATA controller. Most older devices have older drivers installed by default during Windows setup (these drivers were provided by the manufacturer but chances are they are out of date). Grab the latest driver for your hard disk / ATAPI / ATA controller from the manufacturer's web site and do an "Update Driver" in the device properties in "Device Manager". Following the driver install, reboot. Once you reboot your PC you can go into the "Disk Management" console and you should see your drive in its entirety.

{{< carbon >}}

**If you are having this problem during set up** just create a partition to install Windows to and then go through the steps mentioned above after Windows is installed and you should be all set.

**The Four Keys to Getting Your Hard Drive Working**:

* Install Windows XP Service Pack 1 (or higher)
* Ensure that your BIOS can support 48-bit LBA hard disk drives
* Ensure that your hard disk / ATAPI / ATA controller can support 48-bit LBA hard disk drives
* Update your hard disk / ATAPI / ATA controller driver

**Windows 2000 users that have this problem** should read [48-Bit LBA Support for ATAPI Disk Drives in Windows 2000](https://support.microsoft.com/en-us/kb/305098) for more detailed assistance.


