title: Install
template: split-iframe
---
## Install

Note: Windows is not currently supported due to lack of experience in setting up the Windows Build process.  Visit github.com/sqlrsync/client if you're able to help 
Copy and paste this snippet to download the latest release of the SQLRsync CLI:

```sh
# determine arch of linux-amd64, mac-arm64, or mac-amd64
arch=

wget https://sqlrsync.com/assets/latest/$ARCH /tmp/sqlrsync.tar.gz &&
tar -xzvf /tmp/sqlrsync.tar.gz /usr/bin/sqlrsync &&

```