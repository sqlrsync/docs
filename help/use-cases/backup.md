---
layout: default.njk
title: Efficiently Backup SQLite with SQLRsync
---

### Terms Used

- `/path/to/app/your-db.sqlite`: The location of your SQLite database on the server homelab1

### Quickest Setup

1. [Install SQLRsync](/download)
1. You need an SQLRsync.com Account:
   1. [Register](/signup)
   2. Verify your email address
   3. Follow the [Setup Namespace](/namespaces/create) flow (for example: myhomelabbackup)
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

And that's it!  Upon success, it'll look like this:
```
matt@homelab1 ~ % cd /path/to/app
matt@homelab1 app % sqlrsync your-db.sqlite
No Key provided. Creating a new Replica? Get a key at https://sqlrsync.com/namespaces
   Enter an Account Admin Key to create a new Replica: aaBBccDDeeFFggHHiiJJkkMM-abcd123
PUSHing up to wss://sqlrsync.com/ ...
Server created new draft v1
Creating a new database...
  50%   Sent page 1/2 (1 pages received)
 100%   Sent page 2/2 (2 pages received)
✨ Initial revision 1 created with 2 pages stored.
🔒 This replica is private - only authorized SQLRsync users can access and download
   from https://sqlrsync.com/myhomelabbackup/homelab1/path/to/app/your-db.sqlite.
🔑 A new PUSH access key was stored at ~/.config/sqlrsync/ for 
   revokable permission to push updates in the future.  Just
   use `sqlrsync /Users/matt/your-db.sqlite` to push again.
🔑 A new PULL access key was created: your-db.sqlite-sqlrsync
   Share this file to allow others to download or subscribe
   to this database.
```

You're set! Adjascent to `your-db.sqlite`, a new `your-db.sqlite-sqlrsync` file exists that can be used or shared with other people to PULL any version of the Replica. Learn more about the [-sqlrsync](/help/dash-sqlrsync) file.

#### Now that you have a Backup

- If you're using Version Control (like `git`), you can add the database file to `.gitignore` and add the -sqlrsync file.

  ```sh
  echo your-db.sqlite >> .gitignore

  git add your-db.sqlite-sqlrsync -m "Using SQLRsync for sqlite3 version control"
  ```

- To PULL the latest copy, run the -sqlrsync file:
  ```sh
  ./your-db.sqlite-sqlrsync
  ```

### Going Further

- You can choose the namespace and replica name from the command line:

  ```sh
  sqlrsync your-db.sqlite mynamespace/someothername.db
  ```

- Or you can rename a replica on the website on the Replica Config page for that database.