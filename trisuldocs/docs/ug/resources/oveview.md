---
sidebar_position: 1
---

# Overview
<span class="badge badge--primary">PCAP Mode Only</span>  

Resources are objects linked to intrusion or forensic indicators. They
are transferred over the network. Trisul pulls them out, stores, and
indexes them separately.


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

### Resources - Normal Index

1. Domains - pulled out by observing DNS protocol messages
2. URLS - GET and POST URLs
3. SSL Certificates - Hashes and Subjects

### Searching
#### Search by Endpoints

You can search by

1. IP
2. Exclude these IPS
3. Pair of IPs
4. Port
5. Timeframe
6. Regex Pattern
7. Invert Regex Pattren

#### Search by Regex

You can search by

1. A single regex pattern on one line
2. A list of substrings each on a separate line 1

The main use of this tool in the context of SSL Certs is to allow you to
search for hundreds of matching hashes at once.

#### Multiple Substring Matches

> Use the *Search by regex* tab to compare your traffic against an intel
> feed of bad cert SHA-1 hashes.

Enter a list of patterns one per line.