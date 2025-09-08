---
layout: default.njk
title: Alternatives to SQLRSync
---

Of these alternatives, SQLRsync is possibly the easiest to set up and start backing up data regularly (less than 30 seconds and reasonable defaults to protect your data and prevent unexpected bills).

SQLRsync doesn't require any application level changes and can be layered on after you set up a service.

### ... vs. sqlite3_rsync

Website: [https://sqlite.org/rsync.html](https://sqlite.org/rsync.html)

Set up: Download and install [sqlite_tools](https://sqlite.org/download.html), manually set up a secure unattended SSH key to a remote server, manually set up version control, manually set up retention policies.

Similarly:

- Both use the same algorithm to copy a running SQLite database and don't need to shutdown your app to get started
- Both create a replica at a moment in time, which is preferred for regular backups
- Both only copy changed SQLite Page Data, which is extremely efficient for PUSHing or PULLing changes
- Both are ideal for backup or distribution to read-only consumers of the database
- While both support multiple writers on the same database that is being replicated, neither are intended for different servers replicating and merging data together

However:

- sqlite3_rsync can only copy to the same machine OR a remote server that you can SCP to (using SSH), which requires setup and security configuration
  - sqlrsync CLI can copy to the same machine OR to a SQLRsync Server
- sqlite3_rsync is more difficult to setup unattended remote backups (as you will need to set up an SSH key to the remote)
  - sqlrsync CLI automatically configures itself for secure unattended remote backup
- Does not provide version control - each use of sqlite3_rsync will overwrite existing files
  - Each PUSH with sqlrsync creates a new Version that can be rolled back to
- All of sqlite3_rsync is in the Public Domain, while only a portion of SQLRSync CLI is in the Public Domain (at this time)
- sqlite3_rsync doesn't provide functionality for shared public pages, distribution to other read-replicas via public or private links, nor subscribing to real-time changes
- sqlite3_rsync does not provide any built-in functionality to alert you when backups aren't happening (Dead Man Notifications)

### ... vs. litestream

Website: [Litestream.io](https://litestream.io/)

> Litestream is a streaming replication tool for SQLite databases. It runs as a separate background process and continuously copies write-ahead log pages from disk to one or more replicas.

Best for: Continuous live-streaming to S3-Compatible storage

Better at: Windows support, live-streaming all changes to storage

Set up: [Download](https://litestream.io/install) and install Litestream, create an S3 bucket, secure and set retention policies,

Similarly:

- Both allow restoring a SQLite Database to a historic moment in tim
- Requires setting up, securing, and paying for an S3 storage bucket
- Streams all changes to the database to S3 and will use more storage space than SQLRsync
- Uses
- Uses an XYZ license

However:

- SQLRsync CLI uses cron or can manually be run, whereas usually Litestream runs as a system service and transmits data about every second
- Litestream is not designed for distribution of your database to other users, nor keeping other read-replicas in sync

### ... vs. litefs

Website: [github.com/superfly/litefs](https://github.com/superfly/litefs)

> LiteFS is a FUSE-based file system for replicating SQLite databases across a cluster of machines. It works as a passthrough file system that intercepts writes to SQLite databases in order to detect transaction boundaries and record changes on a per-transaction level in LTX files.

However:

- Cannot be setup while the database is in use
- Has a performance impact on writing the database
- Requires a cluster of servers and a Consul service to coordinate voting on the database leader
