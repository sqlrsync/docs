---
layout: default.njk
title: systemctl template unit for backing up sqlite databases
---

#### The problem

On a homelab service you have a bunch of services that use sqlite databases to store your data.  This page documents how to use Project Bluefin (Fedora Linux) and `systemctl` to create a simple, repeatable, and compartmentalized backup to SQLRsync.com.

For one-off backups, I can just run `sqlrsync /path/to/mydb.sqlite` to send up a backup.  However, I want to set up my system such that:

- I can backup many different sqlite databases without having to write a custom script for each one
- After writes happen, create a backup if one hasn't been created recently, but also don't spam making backups

#### One of many solutions

In my homelab, some of the SQLite-backed services I use include::

- [Mealie](https://mealie.io) (recipe manager)
- [dnote](https://getdnote.com) (terminal note-taking app)
- [WikiJS](https://js.wiki/) (wiki software)
- [HedgeDoc](https://hedgedoc.org) (collaborative markdown editor)
- [Gotosocial](https://gotosocial.org) (federated identity)
- [Karakeep](https://karakeep.app) (website archiving)
- [Tududi](https://tududi.com) (todo manager)

Most of these apps I don't use everyday, so I wanted a backup solution that would version the changes to my database instead of copying over a redundant copy of the whole thing each time.  I wrote sqlrsync to selectively only backup the changed bits and to automatically create a version history.  Here's how I set up my Project Bluefin (Fedora Linux) servers to backup my sqlite databases to SQLRsync.com.

##### To create a SQLRSync Account

For databases up to 100mb, SQLRsync is a [free-for-life tool](/pricing).  To install and create an account:

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
1. Execute the command: `sqlrsync your-db.sqlite`

   - This will create a new private Replica at sqlrsync.com/(your namespace)/your-db.sqlite

1. Follow the instructions to get an Account Admin Key and enter it when prompted

##### Create a systemctl template unit

In your user directory, specifically `~/.config/systemd/user/`, create a file called `sqlrsync@.service` with the following content:

```ini
[Unit]
Description=SQLRsync for %i
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
EnvironmentFile=%h/.config/systemd/user/sqlrsync@%i.env
ExecStart=/bin/bash -c 'exec /usr/local/bin/sqlrsync ${ARGS}'
Restart=on-failure
RestartSec=60s
Nice=8
TimeoutStopSec=60s

[Install]
WantedBy=default.target
```

For each service you want to backup, create a file called `sqlrsync@mealie.env` (replacing `mealie` with the name of your service) with the following content:

```sh
ARGS=/var/home/matt/mcnet/appdata/mealie/mealie.db --subscribe --waitIdle=30m --minInterval=30m --maxInterval=24h
```
(Replace the path with the path to your service)

Now load it:

```sh
systemctl --user daemon-reload
systemctl --user enable sqlrsync@mealie
systemctl --user start sqlrsync@mealie
```

Here's some other handy commands:

```sh
# To see the status:
systemctl --user status sqlrsync@mealie

# To see the logs:
journalctl --user -u sqlrsync@mealie -f
```
