## Backup with SQLRsync

### Terms Used

- `LOCAL`: the computer that holds a SQLite database that you want to backup
- `/path/to/app/your-db.sqlite`: The location of your SQLite database

### Quickest Setup

1. [Install SQLRsync](/help/install)
1. You need an SQLRsync.com Account:
   1. [Register](/help/register)
   2. Verify your email address
   3. Follow the Setup Namespace flow
1. Go to the directory your-db.sqlite is located:
   > cd /path/to/app
1. Execute the command: `sqlrsync your-db.sqlite`

   - This will create a new private Replica at sqlrsync.com/(your namespace)/your-db.sqlite

1. Follow the instructions to get an Account Admin Key and enter it when prompted

You're set! Adjascent to `your-db.sqlite`, a new `your-db.sqlite-sqlrsync` file exists that can be used or shared with other people to PULL any version of the Replica. Learn more about the [-sqlrsync](/help/-sqlrsync) file.

#### Now that you have a Backup

- If you're using Version Control (like `git`), you can add the database file to `.gitignore` and add the -sqlrsync file.

  > echo your-db.sqlite >> .gitignore

  > git add your-db.sqlite-sqlrsync -m "Using SQLRsync for sqlite3 version control"

- To PULL the latest copy, run the -sqlrsync file:
  > ./your-db.sqlite-sqlrsync

### Going Further

- You can choose the namespace and replica name from the command line:
  > sqlrsync your-db.sqlite mynamespace/someothername.db
