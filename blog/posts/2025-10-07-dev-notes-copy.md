---
layout: post.njk
title: "Automatic push experiment and security improvements"
description: Push changes to subscribers on database change and security improvements for SQLRsync.com.
date: 2025-10-07
draft: true
image: /images/faq-banner.png
badge: FAQ
authors:
  - name: Matt
    description: Developer of SQLRsync
    url: https://sqlrsync.com/about
---

message: 'No query results for model [AccountPath].',
statusCode: 500
}
(log) useBackend: HTTP error response: [object Response]
(log) useBackend: Fetch error: { message: 'Server Error', statusCode: 500 }
(log) Path not found pt2: earthquakes {
message: '404 Not Found',
statusCode: 404,
statusMessage: '404 Not Found'
}
(log) Checking paths for namespace: usgs.gov
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/paths : {}
(log) Error in /api/accounts/[namespace]/paths GET: TypeError: Cannot read properties of undefined (reading 'env')
(log) useBackend: HTTP error response: [object Response]
(log) useBackend: Fetch error: {
message: "Cannot read properties of undefined (reading 'env')",
statusCode: 500
}
(log) Path not found pt2: earthquakes {
message: '404 Not Found',
statusCode: 404,
statusMessage: '404 Not Found'
}
GET https://sqlrsync.com/usgs.gov/earthquakes - Ok @ 10/8/2025, 12:46:03 AM
(log) Checking paths for namespace: usgs.gov
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/paths : {}
(log) Path not found pt1: earthquakes
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/earthquakes/getPublicInfo : {}
(log) Error in /api/accounts/[namespace]/[...]: No query results for model [AccountPath].
(error) [request error] [unhandled] [GET] https://sqlrsync.com/api/accounts/usgs.gov/earthquakes/getPublicInfo
{
message: 'No query results for model [AccountPath].',
statusCode: 500
}
(log) useBackend: HTTP error response: [object Response]
(log) useBackend: Fetch error: { message: 'Server Error', statusCode: 500 }
(log) Path not found pt2: earthquakes {
message: '404 Not Found',
statusCode: 404,
statusMessage: '404 Not Found'
}
(log) Checking paths for namespace: usgs.gov
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/paths : {}
(log) Error in /api/accounts/[namespace]/paths GET: TypeError: Cannot read properties of undefined (reading 'env')
(log) useBackend: HTTP error response: [object Response]
(log) useBackend: Fetch error: {
message: "Cannot read properties of undefined (reading 'env')",
statusCode: 500
}
(log) Path not found pt2: earthquakes {
message: '404 Not Found',
statusCode: 404,
statusMessage: '404 Not Found'
}
GET https://sqlrsync.com/usgs.gov/earthquakes.db - Ok @ 10/8/2025, 12:46:31 AM
(log) Checking paths for namespace: usgs.gov
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/paths : {}
(log) User has specific account access via account access key: admin
(log) User has permission to account: admin
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/earthquakes.db/getVersionLogs?num=5 : {}
(warn) Warning: A promise was resolved or rejected from a different request context than the one it was created in. However, the creating request has already been completed or canceled. Continuations for that request are unlikely to run safely and have been canceled. If this behavior breaks your worker, consider setting the `no_handle_cross_request_promise_resolution` compatibility flag for your worker.
at Object.resolve (<anonymous>)
at \_Resource.resolve (index.js:67076:30)
at Wh.Pool.release (index.js:67132:89)
at i3.releaseConnection (index.js:71432:26)
at Runner.ensureConnection (index.js:67463:29)
at async Runner.run (index.js:67378:23)
at async Proxy.get (index.js:49632:14)
at async Proxy.getModels (index.js:51604:184)
at async Proxy.first (index.js:51525:17)
at async Proxy.firstOrFail (index.js:51529:19)
(warn) Warning: A promise was resolved or rejected from a different request context than the one it was created in. However, the creating request has already been completed or canceled. Continuations for that request are unlikely to run safely and have been canceled. If this behavior breaks your worker, consider setting the `no_handle_cross_request_promise_resolution` compatibility flag for your worker.
at Object.resolve (<anonymous>)
at \_Resource.resolve (index.js:67076:30)
at Wh.Pool.release (index.js:67132:89)
at i3.releaseConnection (index.js:71432:26)
at Runner.ensureConnection (index.js:67463:29)
at async Runner.run (index.js:67378:23)
at async Proxy.get (index.js:49632:14)
at async Proxy.getModels (index.js:51604:184)
at async Proxy.first (index.js:51525:17)
at async Proxy.firstOrFail (index.js:51529:19)
(log) User has admin access via account access key
(log) Calling out to fetch.
(log) Response received from DO-replica for versionLogs: 200
(log) useBackend: Sending GET request to /api/accounts/usgs.gov/earthquakes.db/summary?version=14 : {}
(error) { success: false, message: '[nuxt] instance unavailable' }d
