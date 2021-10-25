+++
author = "Chris Short"
categories = ["Apple", "2016"]
date = 2016-07-10T20:51:00Z
description = ""
draft = false
ShowTOC = false
slug = "weather-in-your-ios-and-macos-calendars"
tags = ["weather", "ios", "macos", "calendar"]
title = "Weather in your iOS and macOS Calendars"
[cover]
image = "/weather-in-your-ios-and-macos-calendars/macos-calender-weather.png"

+++

One of the things I like best about Google Calendar is its extensibility. You can add calendars for virtually everything; sports, holidays, shared calendars, and **weather**. For managing personal appointments and family events I use Google Calendar as the backend but I prefer the native experience of macOS and iOS Calendar.app.

{{< eo_signup >}}

One feature Apple still has not integrated into the Calendar.app is weather forecasts. This one feature is very helpful when checking your calendar before buying tickets to a baseball game, for example. One stop shopping for schedule checking and weather forecasting is surprisingly handy.

{{< carbon >}}

Recently, I discovered [Weather Underground](https://www.wunderground.com/) provides ICS files for use in any calendar application you can think of (Google Calendar, Microsoft Outlook, and Apple's Calendar.app). These ICS URLs do not appear to be documented by Weather Underground specifically but here are some examples to get you started:

`https://ical.wunderground.com/auto/ical/NC/Rtp.ics`
`https://ical.wunderground.com/auto/ical/CA/Cupertino.ics`
`https://ical.wunderground.com/auto/ical/NY/NYC.ics`

For international locations, grab the five digit location code off the actual Weather Underground URL and use the following format:

`https://ical.wunderground.com/auto/ical/global/stations/06344`
`https://ical.wunderground.com/auto/ical/global/stations/41965`
`https://ical.wunderground.com/auto/ical/global/stations/94767`

On a macOS device, open Calendar.app. Click *File*, then click *New Calendar Subscription...*

In the dialog box, paste the URL of the proper ICS file for the weather in the location you which to add to your calendar. If the URL is right you will see a new dialog box:

![macOS Calendar Weather Underground](/weather-in-your-ios-and-macos-calendars/macos-calendar-weather-underground.jpg)

If you want to see this calendar subscription on all your devices by sure to select a Location that you have on all devices. I chose iCloud as I do not really use the iCloud Calendar for anything and it is on all my Apple devices. I recommend updating the calendar frequently to ensure you have the most up to date weather data (every hour is probably sufficient). I also recommend removing attachments and alerts.

After clicking *OK*, the weather forecast of your choosing will be in all your devices calendars. Happy planning!
