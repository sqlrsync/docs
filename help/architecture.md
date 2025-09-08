---
title: System Architecture
layout: default.njk
---

There's a lot to be said here and I will update this more later.

### Cloudflare Server Side

- Workers for static website hosting

- Workers with D1 Database for account metadata and access keys

- Each SQLRsync Account has its own collection of Durable Objects that house their private database data, detailed revision history, customer support conversations, and detailed logging, which is constrained to 10gb. We therefore limit individual databases to 8gb at this time.

- After 8gb of database data, additional database data is stored "cold" encrypted on Cloudflare R2

### Bunny.net Server Side

- Static website hosting

- Account metadata and access keys are stored on a Magic Container

- Edge Scripting for some API

- Private, isolated Magic Containers for each customer's database data
