---
layout: default.njk
title: FAQ
---
## Why does it keep downloading 1 page when I repeat pulling the same revision?

You're in Journal Mode Delete. If you want to transfer nothing between, switch to `PRAGMA journal_mode=wal;`, and then push up the change.
