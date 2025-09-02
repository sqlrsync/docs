## Glossary

### General Terms

- SQLRSync Server
  - Usually the sqlrsync.com website
- SQLRSync CLI
  - A "command line interface" tool that you download and install on your local machine to safely and securely transfer a database to SQLRsync Server
- Replica
  - A database copied to SQLRsync Server for backup or distribution
  - Replicas can use the file extensions `.db`, `.sqlite`, or `.sqlite3`
- Version
  - A copy of replica created each time your database is PUSHed to the SQLRSync Server
- Push
  - Copy a local database to SQLRsync Server using the SQLRsync CLI (where it is stored as the latest version of a Replica)
- Pull
  - Retrieve a version of a Replica from the SQLRsync Server and make it available on
- Keys
  - A private or sharable, randomly generated string that may allow PUSHing or PULLing to an Account or Replica. Keys are created using the pattern `/([a-zA-Z0-9]{20-25})/`
- Customer-Supplied Encryption Key (CSEK)
  - Different from the keys above which manage access to PUSH or PULL replicas, a CSEK is used by the SQLRsync CLI to encrypt data symmetrically before it is PUSHed to SQLRsync Server, and to decrypt the data when PULLed. A CSEK is never transmitted to SQLRsync Server.
- Egress
  - Egress is the amount of database data PULLed or otherwise downloaded.  Because egress is free on our primary CDN, Cloudflare, we do not charge for egress data.
- Ingress
  - Ingress is the amount of database data PUSHed to a SQLRsync Server.  Accounts have an ingress soft limit equal to the amount of storage their plan has.

### SQLRsync.com

- Account
  - Accounts can store an unlimited number of replicas accessed via one Namespace.
  - Because of the 1:1 mapping between Account and Namespace, they can be referred to interchangeably
- Namespace

  - A public or private folder on the SQLRsync Server that contains all of your replicas. Some example public Namespaces:

    - [sqlrsync.com/portland](https://sqlrsync.com/portland)
    - [sqlrsync.com/podcastsdb](https://sqlrsync.com/podcastsdb)

  - Private Namespaces are not available to unauthorized users, for example:
    - [sqlrsync.com/pnwmatt](https://sqlrsync.com/pnwmatt)

- Replica

  - A public or private copy of your database stored on the SQLRsync.com server within a Namespace. Some example public Replicas:
    - [sqlrsync.com/portland/housing.sqlite](https://sqlrsync.com/portland/housing.sqlite) (Both a public Namespace and public Replica)
    - [sqlrsync.com/pnwmatt/demo.db](https://sqlrsync.com/pnwmatt/demo.db]) (a private Namespace and public Replica)
  - Replicas can also be stored and accessed in subfolders

    - [sqlrsync.com/pnwmatt/backups/nuc3/books/readinglist.db](https://sqlrsync.com/pnwmatt/backups/nuc3/books/readinglist.db)

  - Private Replicas are not available to unauthorized users, for example:
    - [sqlrsync.com/pnwmatt/backups/nuc3/wikijs/data.db](https://sqlrsync.com/pnwmatt/backups/nuc3/wikijs/data.db)

- Keys
  - Account Admin Key
    - Private key that allow both PUSHing and PULLing a replica from that account
    - Account Admin Keys can be used for 4 hours and should not be stored anywhere. You can always [get new Account Admin Keys](/help/account-admin-keys) from your [SQLRsync Server Account](/namespaces) page.
    - PULLing with an Account Admin Key will create and store a Replica Pull Key adjascent to the local database in a [-sqlrsync](/help/-sqlrsync) file.
      - You can [disable this feature](/help/cli#requestKeys)
    - PUSHing with an Account Admin Key will create and store a Replica Pull Key in the `-sqlrsync` file, and create and store a Replica Push Key in `~/.config/sqlrsync/private-settings.toml`.
      - You can [disable this feature](/help/cli#requestKeys)
  - Account Pull Key
    - A sharable, storable, revokable key that allows PULLing any replica from a specific account
    - You can create and manage Account Pull Keys from the [Account/Config](/help/account-config#keys) page of the SQLRsync Server
  - Replica Push Key
    - A sharable, storable, revokable key that allows PUSHing to one specific Replica
    - When you use an Account Admin Key to create a new Replica, a Replica push Key is automatically created and stored at `~/.config/sqlrsync/private-settings.toml`, allowing continued PUSHing to that Replica without an Account Admin Key.
      - You can [disable this feature](/help/cli#requestKeys)
    - You can create and manage Replica Keys from the [Replica/Config](/help/replica-config#keys) page of the SQLRsync Server
  - Replica Pull Key
    - A sharable, storable, revokable key that allows PULLing one specific Replica
    - Public Replicas do not require Replica Pull Keys, however using one will allow PULLing to continue in the event the Replica is set to Private

### sqlrsync CLI

- REMOTE
  - A Replica stored on a SQLRsync Server
  - REMOTE databases always start with a Namespace
  - REMOTE databases never start with a `.` or `/`, and ALWAYS contain at least one `/`
- LOCAL
  - A SQLite database on the computer you have installed SQLRsync on.
  - LOCAL databases are always referred to by a "relative or absolute" folder location, which means they:
    - Start with `./`, `../`, or `/`
      - Examples: ./data/database.sqlite, /var/data/application/database.sqlite
    - OR do not contain a `/`
      - Example: database.sqlite, database.db, database.sqlite3
