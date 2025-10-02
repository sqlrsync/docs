---
layout: default.njk
title: sqlrsync CLI
---

A rsync-like utility built specifically to replicate SQLite databases to sqlrsync.com for features such as backup, version control, and distribution.

Using the page hashing algorithm designed by the authors of SQLite, only changed pages are communicated between ORIGIN and REPLICA, allowing for efficient synchronization.

ORIGIN and REPLICA can be LOCAL or REMOTE. Both cannot be REMOTE.

LOCAL is local machine in the current working directory (or prefixed with ./, ../, or /).  
REMOTE is a database hosted on sqlrsync.com, and must have at least one / in its path.

REPLICA becomes a copy of a snapshot of ORIGIN as it existed when the sqlrsync command started. If other processes change the content of ORIGIN while this command is running, those changes will be applied to ORIGIN, but they are not transferred to REPLICA. Thus, REPLICA ends up as a fully-consistent snapshot of ORIGIN at an instant in time.

Learn about SQLite Pages: [sqlite.org/fileformat2.html](https://sqlite.org/fileformat2.html)  
Learn about sqlite3_rsync: [sqlite.org/rsync.html](https://sqlite.org/rsync.html)

This utility, a wrapper around sqlite3_rsync, uses sqlrsync.com as the REMOTE server to allow specific benefits over simply using the utility the developers of the SQLite project provide.

If REPLICA does not already exist, it is created.

Local databases may be "live" while this utility is running. Other programs can have active connections to the local database (in either role) without any disruption. Other programs can write to/read from ORIGIN, and can read from REPLICA while this utility runs.

All of the table (and index) content will be byte-for-byte identical in the replica. However, there can be some minor changes in the database header. See Limitations at [sqlite.org/rsync.html](https://sqlite.org/rsync.html)

A REMOTE ORIGIN database may be specified with an appended @&lt;VERSION&gt;, such as:

```sh
mynamespace/mydb.sqlite             # Requests the latest uploaded version
mynamespace/mydb.sqlite@&lt;VERSION&gt;   # VERSION is a number greater than 0 and identifies the nth version uploaded
mynamespace/mydb.sqlite@latest      # Redundant to leaving the value unspecified
mynamespace/mydb.sqlite@latest-&lt;N&gt;  # N is a number greater than 0 and will cause the version N uploads prior to the latest version to be used.
```

When ORIGIN is LOCAL and REPLICA is LOCAL, a local transfer (no network) causes REPLICA to become a copy of ORIGIN.

When ORIGIN is LOCAL and REPLICA is REMOTE, a secure websocket connects to sqlrsync.com and then any pages REPLICA needs synchronized are transferred to the remote database.

When ORIGIN is LOCAL and REPLICA is unspecified, the remote REPLICA is created at sqlrsync.com using the default namespace and database name derived from ORIGIN.

When ORIGIN is REMOTE and REPLICA is LOCAL, the local REPLICA becomes a complete copy of ORIGIN.

When ORIGIN is REMOTE and REPLICA is unspecified, a local REPLICA is created at using the database name derived from ORIGIN.

## Usage modes:

```md
1. Easiest Upload: sqlrsync LOCAL
   Example: sqlrsync mydb.sqlite

2. Easiest Download: sqlrsync REMOTE --pullKey=KEY
   Example: sqlrsync mynamespace/mydb.sqlite
   Example: sqlrsync mynamespace/mydb.sqlite@latest-1
   Example: sqlrsync mynamespace/mydb.sqlite@7

1. Local rsync: sqlrsync LOCAL LOCAL
   Example: sqlrsync mydb.sqlite ./mydb2.sqlite
```

Eternal gratitude to the authors of the SQLite Project for their contributions to the world of data storage.

I, the author of sqlrsync, disclaim copyright to the source code of the sqlrsync client (for the code he authored and able to). My goal is to get to a point where server code is released to the public domain. Read more: [sqlrsync.com/license](/license)

In place of a legal notice, here is a blessing:

May you do good and not evil.  
May you find forgiveness for yourself and forgive others.  
May you share freely, never taking more than you give.
