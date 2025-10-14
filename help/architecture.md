---
title: System Architecture
layout: default.njk
---

### Cloudflare Server Side

- Edge Workers for the website and general APIs.

- D1 Databases for account metadata, version metadata, and access credentials.

- R2 block-storage for page-level storage.

- Hibernation API Durable Objects handle websocket subscriptions.

### Bunny.net Server Side

Bunny, an EU-based CDN, is able to be custom deployed with a subset of features.  [Contact us](/support) if you'd like to discuss EU-sovereign hosting.

- Static website hosting

- Account metadata and access keys are stored on a Magic Container

- Edge Scripting for some API

- Private, isolated Magic Containers for each customer's database data
