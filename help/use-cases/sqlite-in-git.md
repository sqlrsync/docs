---
layout: default.njk
title: Efficiently Backup SQLite with SQLRsync
---

#### The problem

There's a lot of reasons you might want to distribute a SQLite database via a git repository. Because Git isn't designed for SQLite files, this means that any change to a single cell or row of the file will cause the entire file to be re-added to Git. This uses your Git storage, slows down Git operations, and doesn't give visibility into what changed in the file.

#### One of many solutions

For databases up to 100mb, SQLRsync is a [free-for-life tool](/pricing) to manage your database distribution to your teammates.

1. [Install SQLRsync](/download)
1. You need an SQLRsync.com Account:
   1. [Register](/signup)
   2. Verify your email address
   3. Follow the [Setup Namespace](/namespaces/create) flow
   4. Use the `Get Admin Key` button [to copy your Account Admin Key](/namespaces) to your clipboard
1. Go to the directory your-db.sqlite is located:
   ```sh
   cd /path/to/app
   ```
1. Run the sqlrsync command to create a backup:
   ```sh
   sqlrsync your-db.sqlite
   ```

   - This will create a new private Replica at sqlrsync.com/myhomelabbackup/homelab1/path/to/app/your-db.sqlite because by default it will use your namespace followed by the hostname of the computer you're on, followed by the full path to the database file.

1. When prompted, paste in the Account Admin Key you copied earlier (or return to your browser to get it again).

Finally, add the -sqlrsync file to your git repo and add the original sqlite file to .gitignore:

```sh
echo your-db.sqlite >> .gitignore
git add your-db.sqlite-sqlrsync -m "Using SQLRsync for sqlite3 version control"
```

You're set! Adjascent to `your-db.sqlite`, a new `your-db.sqlite-sqlrsync` file exists that can be used or shared with other people to PULL any version of the Replica. Learn more about the [-sqlrsync](/help/dash-sqlrsync) file.

#### Now that you have it committed...

- To PULL the latest copy, run the -sqlrsync file:
  ```sh
  ./your-db.sqlite-sqlrsync
  ```

### Going Further

- You can edit the -sqlrsync file and append a `@<version>` to the end of the URL to pin PULLs to specific version. For example, to pull version 5:
  ```sh
  #!/bin/sh
  sqlrsync sqlrsync.com/mynamespace/your-db.sqlite@5 "$0"
  ```
