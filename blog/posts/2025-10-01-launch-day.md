---
layout: post.njk
title: "Launch Day!"
description: Welcome to SQLRsync - on a mission to help you sync and backup your SQLite databases.
date: 2025-10-02
badge: announcements
authors:
  - name: Matt
    description: Developer of SQLRsync
    url: https://sqlrsync.com/help/about
---

## The Idea

While keeping myself occupied during a career pause, I kept bumping into cumbersome or complicated ways to backup SQLite databases. It's a very specific thing to fixate on (hey OCD!), but I regularly think in the lens of SQLite after a career that used it regularly. For my personal homelab and Pocketbase projects, the options to backup and replicate SQLite left me dreaming for what I had before.

So I've set out to make my own version to enable websocket replication of SQLite databases using a cloud backend to remove the burden of setting up and configuring a storage bucket. Using the [underlying storage blocks of a SQLite database](https://www.sqlite.org/fileformat.html) (called the pages), we can selectively just transfer small bits of data to keep a backup or read-replica in sync.

## Who this is for?

My audience I keep most in mind is homelabs and small teams of developers looking for a fast and scalable way to backup or distribute their data. For that reason, I intend to maintain a free-for-life tier that allows all the features that cohort would need. For now it's just 100mb because I can't personally afford to give away more for free until revenue exists.

- [How to backup SQLite without taking write-locking or shutting down your app](/help/use-cases/backup)

- [Use websocket replication to keep SQLite databases in-sync](/help/use-cases/distribute)

- [Use SQLRsync to avoid committing SQLite databases to your git repos](/help/use-cases/sqlite-in-git)

## What can it do?

As of writing (October 2025), SQLRsync can:

### Backup:

- [Backup SQLite databases](/help/use-cases/backup) while they're being written to
- Automatically assigns a version number you can roll-back to
- Roll-backs use the same efficient delta-transfer method as normal syncs - so it's fast!
- Databases are capped at 100mb per database at the time of replication, unlimited versions

### Distribute:

- [Distribute SQLite databases](/help/use-cases/distribute) to near unlimited clients using Cloudflare CDN

### Web Site:

- Create private, public, or unlisted databases with shareable pages ([example](https://sqlrsync.com/usgs.gov/earthquakes.db))
- Public/unlisted databases can be downloaded without authentication
- Only the CDN and the SQLRsync server see you accessing our site or syncing your data. No 3rd parties.
- Tight security and ownership model where you retain full ownership of your data and I keep it safe.

## What's next?

- Store and sync databases as large as 2tb (great for large/huge Data Analytics or Training Sets SQLite databases)
- Automatic PUSHing up of changes after they occur
- Managed retention policies to trim old versions
- Alarms and notifications for key events (or gaps)
- Team and Organization accounts
- Most things are coded with the intention of offering a non-USA-cloud option for storage and sync (eg: self-hosted, EU, etc)

More to come. [Give it a try](/help/use-cases/backup). [Let me know](/help/contact) what you want to see.
