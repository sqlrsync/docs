---
title: Data Protection
layout: default.njk
---

There's a lot to be said here and I will update this more later.

Make sure to read [System Architecture](/help/architecture) for more information.

### Current Data Protection Posture

All data is encrypted in transit and at rest. There are no public "data buckets" that could expose your data.

2FA and strong, unique passwords for all accounts accessing the CDN housing your data.

We use a CDN Workers' SQLite for "hot" datastorage (like Cloudflare Durable Object) and a CDN storage bucket in the same CDN with public internet access fully disabled for cold storage.

We use proper SQLite statement binding to block SQL attacks.

User accounts on SQLRsync are protected by passkey by default, and by default can also be accessed by using a unique 6 digit pin emailed to your address on file.

All user data is compartmentalized to stay just on the CDN you use to interact with SQLRsync. If you use Cloudflare, your data stays on Cloudflare. If you use Bunny.net, your data stays on Bunny.net. If your data is hosted by Bunny.net (based in the EU), you can opt-in to using Bunny.net's US based datacenters for your replicated content (by default: we won't).

You may make and use your own Customer-Supplied Encryption (CSE) keys to encrypt your database data before it is uploaded to the CDN. This ensures that neither SQLRsync nor the storage CDNs can decrypt your data.
