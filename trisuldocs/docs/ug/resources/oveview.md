---
sidebar_position: 1
---

# Overview

Resources are objects linked to intrusion or forensic indicators. They
are transferred over the network. Trisul pulls them out, stores, and
indexes them separately.
s
## Normal vs Full Text Search (FTS)

In theory, all resources can be reconstructed from PCAPs at the time
they are needed - but it can be a slow process. Trisul will pull out
resources that are cheap to pull out at run time and are most often
needed.

Resources are split into two categories based on how they are indexed.

Normal  
As a single string with support for regex and bulk searching. Can search
by IP, ports, or by regexes on the resource string.

Full Text Search  
As a document with each token in a reverse index. Advanced faceted
searching allows you to group and drilldown on selected attributes.

### Resources - normal index

1. Domains - pulled out by observing DNS protocol messages
2. URLS - GET and POST URLs
3. SSL Certificates - Hashes and Subjects

### Resources - full text search

1. HTTP headers - not just the URLs as in the normal index, but entire
   HTTP request and response headers
2. SSL Certificates - the entire certificate chain in text form
