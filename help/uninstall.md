---
title: Uninstall
layout: default.njk
---

### Uninstall SQLRsync CLI

There are two system-level files you may remove when uninstalling SQLRsync:

1. The binary located at `/usr/local/bin/sqlrsync`
2. The configuration directory located at `~/.config/sqlrsync` (optional, if you want to remove your saved configurations and keys)

## Removing the binary

To uninstall the SQLRsync CLI, remove the binary from your system:

```sh
sudo rm /usr/local/bin/sqlrsync
```

This will delete the SQLRsync executable from your system.

If you installed SQLRsync in a different location, adjust the path accordingly.

## Removing the configuration directory

To remove your saved configurations and keys, delete the configuration directory:

```sh
rm -r ~/.config/sqlrsync
```

This step is optional and should be done only if you want to completely remove all system-level SQLRsync data from your system.

For more details or troubleshooting, see the [GitHub repository](https://github.com/sqlrsync/client)
