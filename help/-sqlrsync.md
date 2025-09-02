## The -sqlrsync file

Adjascent to a SQLite database that has been PUSHed or PULLed with SQLRsync Server is an executable datafile that contains a Replica Pull Key to allow a read-replica to continue to receive updates.

For example, in a directory that has `zipcodes.db`, any of the following commands will (create or) update the -sqlrsync file after the command succeeds:

```sh
sqlrsync zipcodes.db
sqlrsync zipcodes.db mynamespace/zipcodes.db
sqlrsync zipcodes.db mynamespace/zipcodes.db --key=abcd1234abcd1234
sqlrsync mynamespace/zipcodes.db --key=abcd1234abcd1234
```

You can disable -sqlrsync files by using the command line flag --noRequestReadToken