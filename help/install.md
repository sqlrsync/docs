---
title: Install
layout: default.njk
---

**Note:** Windows is not currently supported due to lack of experience in setting up the Windows build process. If you can help, please visit [github.com/sqlrsync/client](https://github.com/sqlrsync/client).

### Download and Install SQLRsync CLI

** Note:** These files are not publicly available yet. Beta users should download the binaries from [/downloads](https://sqlrsync.com/downloads) after logging in.

```sh
# linux-amd64, darwin-arm64, and darwin-x86_64 are supported
OS=$(uname -s | tr '[:upper:]' '[:lower:]'); CPU=$(uname -m); ARCH=${OS}-${CPU}

# NOT YET SUPPORTED, see notes above
wget --spider --quiet https://sqlrsync.com/dl/latest/$ARCH || {echo "ERROR: There doesn't appear to be a release for $ARCH"; exit 1;} && \
wget https://sqlrsync.com/dl/latest/$ARCH -O /tmp/sqlrsync.tar.gz || { echo "ERROR: Couldn't write to /tmp/"; exit 1; } && \
sudo tar -xzvf /tmp/sqlrsync.tar.gz -C /usr/local/bin sqlrsync || { echo "ERROR: Couldn't extract to /usr/local/bin"; exit 1; } && \
# apple users: xattr -rd com.apple.quarantine /usr/local/bin/sqlrsync
sqlrsync --version && \
echo "Success!"
```

#### Verify Installation

```sh
sqlrsync --version
```

If you see the version output, installation was successful.

For more details or troubleshooting, see the [GitHub repository](https://github.com/sqlrsync/client)
