---
title: Introduction
---

:raised_hands: A vue 3 component used to format date with time ago statement. :speech_balloon:

- Localization supported
- Formats a date/timestamp to:
  - just now
  - 5m
  - 3h
  - 2 days ago
  - 2017-08-03
- Rules:
  - less than 1 minute , show `just now`
  - 1 minute ~ 1 hour , show `** minutes ago`
  - 1 hour ~ 1 day , show `** hours ago`
  - 1 day ~ 1 month( 31 days ) , show `** days ago`
  - more than 1 month( 31 days ) , show `yyyy-mm-dd hh:mm`
