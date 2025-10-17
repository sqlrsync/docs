---
layout: default.njk
title: Distribute SQLite Databases using Websockets
---
Below we use an example database which has a SQLRsync Replica at [sqlrsync.com/usgs.gov/earthquakes.db](https://sqlrsync.com/usgs.gov/earthquakes.db).  Alternatively, use your own data by following the [Backup SQLite guide](/help/use-cases/backup).

The `earthquakes.db` is updated every few minutes with new earthquakes from around the world.  This will give you some example data to try with.

### Optional: Share via Version Control

* [How to distribute SQLite databases via Git](/help/use-cases/sqlite-in-git)

### Demo: Share the CLI Command using Real Time Replication via Websockets

1. [Install SQLRsync](/download)
2. No account required because the example `sqlrsync.com/usgs.gov/earthquakes.db` is shared publicly
3. Run the sqlrsync command to PULL the latest copy of the database and `--subscribe` to real-time updates:

   ```sh
   sqlrsync usgs.gov/earthquakes.db --subscribe
   ```

### Demo: Use the shareable -sqlrsync file to subscribe via Websockets

1. [Install SQLRsync](/download)
2. Visit [sqlrsync.com/usgs.gov/earthquakes.db](https://sqlrsync.com/usgs.gov/earthquakes.db) (No account required)
   1. In the right side-panel, click `Download`
   2. Choose `Download -sqlrsync`
   3. Move the file to where you'd like the earthquakes.db to be located.
3. Run the -sqlrsync file to PULL the latest copy of the database and `--subscribe` to real-time updates:

   ```sh
   ./earthquakes.db-sqlrsync --subscribe
   ```

### Share your own databases in real time

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
1. Execute the command:
   ```sh
   sqlrsync your-db.sqlite
   ```

   - This will create a new private Replica at sqlrsync.com/`(your namespace)`/`(hostname)`/`(path)`your-db.sqlite