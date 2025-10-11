---
layout: post.njk
title: "Known Bugs and Limitations"
description: A living document capturing the known issues for the site.
date: 2025-10-08
badge: announcements
authors:
  - name: Matt
    description: Developer of SQLRsync
    url: https://sqlrsync.com/about
---

Last updated 2025-10-09 5pm PT.

## Sorted list of known bugs and limitations

No known issues.

## Current experiments

- v0.0.6 [Automatic push feature](https://sqlrsync.com/blog/posts/2025-10-07-dev-notes) is experimental and may have bugs or rough edges. Please report any issues you encounter.
  - Client reports Read Timeouts if no PUSHes for some time, but successfully reconnects an keeps and eye on your database.


## Resolved Issued


Fixed 2025-10-09:

- Users are signed out when they visit the home page
- Some animations on the front page are broken due to new Content Security Policy
