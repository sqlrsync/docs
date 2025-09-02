## Distribute

First, follow the tutorial to [send a database](/use-cases/backup) to SQLRsync Server.

In the examples below, we'll use a database called `my-data.sqlite3` which has a SQLRsync Replica at `sqlrsync.com/demo/my-data.sqlite3`

After PUSHing `my-data.sqlite3` to SQLRsync Server, a `my-data.sqlite3-sqlrsync` file will be updated next to my-data.sqlite3 on your local machine.

### Optional: Create a Public Replica Page

Edit your Replica Config on SQLRsync.com to set the Replica as Public. You can now share `https://sqlrsync.com/demo/my-data.sqlite3` with others and they will have the ability to download a copy via the browser or sqlrsync CLI.

### Optional: Share via Version Control

You can commit `my-data.sqlite3-sqlrsync` file to Version Control (such as git) and anyone with access to that file can run it to PULL the most recent version of `demo/mydata.sqlite3` to their local machine, as long as the key in the file is valid.

To run the -sqlrsync file:

> ./my-data.sqlite3-sqlrsync

To subscribe to changes as they are pushed to SQLRsync Server, add the `--subscribe` flag:

> ./my-data.sqlite3-sqlrsync --subscribe

### Optional: Share the CLI Command

You can find a Replica Pull Key within the `-sqlrsync` file or in your Replica Config page on SQLRsync.com. For example, let's say the key is "abcd1234abcd1234". Other users with the sqlrsync command installed can then run:

> sqlrsync demo/my-data.sqlite3 --key=abcd1234abcd1234

... to pull the latest version

or

> sqlrsync demo/my-data.sqlite3 --key=abcd1234abcd1234 --subscribe

... to pull and subscribe to changes as they are pushed to SQLRsync Server
