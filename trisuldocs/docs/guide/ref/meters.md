# Trisul Traffic Meters

This page describes all the meters available out of the box in Trisul.
Installing additional plugins will usually give you even more meters -
which will be described in detail by the documentation accompanying each
plugin.

It provides the Detailed metrics of each counter group like Total, In,
Out, BucketSize, TopperBucketsize, GUID, etc

Goto Customize -\> Counters -\> View Meters

<div class='well'>

#### 5 new counter groups in the latest release

HTTP Methods, HTTP Status, Long Fat Tail, Long Thin Tail, and ICMP
Types. Over 20 new data points about your network traffic \!

</div>

Use the table of contents on left to jump to a particular counter group

### Special keys

- SYS:GROUP\_TOTALS  
  Each counter group has a special key named SYS:GROUP\_TOTALS. This
  meter represents the cumulative total of all keys in a given time
  interval. You can type use this instead of a key if you want the
  totals.

## Aggregates

Aggregate statistics  
CGUID:`{393B5EBC-AB41-4387-8F31-8077DB917336}`

| ID  | Description       | Top Count | Type              | Units |
| --- | ----------------- | --------- | ----------------- | ----- |
| 0   | Total             | 0         | VT\_RATE\_COUNTER | Bps   |
| 1   | Packets           | 0         | VT\_RATE\_COUNTER | pps   |
| 2   | Active Sessions   | 0         | VT\_GAUGE         | sess  |
| 3   | Layer 2 Broadcast | 0         | VT\_RATE\_COUNTER | Bps   |
| 4   | Layer 2 Multicast | 0         | VT\_RATE\_COUNTER | Bps   |
| 5   | Layer 2 Unicast   | 0         | VT\_RATE\_COUNTER | Bps   |
| 6   | Layer 2 Broadcast | 0         | VT\_RATE\_COUNTER | Bps   |
| 7   | Layer 2 Multicast | 0         | VT\_RATE\_COUNTER | Bps   |
| 8   | Layer 2 Unicast   | 0         | VT\_RATE\_COUNTER | Bps   |

### Special Keys

The following keys are available in this group

| Key           | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| TOTALBW       | Total traffic seen                                                           |
| DIR\_INCOMING | Incoming traffic - based on defined *home network*                           |
| DIR\_OUTGOING | Outgoing traffic - based on defined *home network*                           |
| DIR\_INTERNAL | Internal traffic - when both source and destination IPs in in *home network* |
| DIR\_TRANSIT  | Transit traffic - when neither source nor destination is in *home network*   |

## Hosts

Stats for each IP Host  
CUID:`{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}`

| ID  | Description      | Top Count | Type              | Units   |
| --- | ---------------- | --------- | ----------------- | ------- |
| 0   | Total            | 50        | VT\_RATE\_COUNTER | Bps     |
| 1   | Received         | 10        | VT\_RATE\_COUNTER | Bps     |
| 2   | Transmit         | 10        | VT\_RATE\_COUNTER | Bps     |
| 3   | Total            | 0         | VT\_RATE\_COUNTER | pps     |
| 4   | Active TCP Conns | 50        | VT\_COUNTER       | conns   |
| 5   | Attacker alerts  | 10        | VT\_GAUGE         | alerts  |
| 6   | Homenet          | 20        | VT\_RATE\_COUNTER | Bps     |
| 7   | External         | 20        | VT\_RATE\_COUNTER | Bps     |
| 8   | TCP SYN sent     | 10        | VT\_GAUGE         | packets |
| 9   | TCP SYN recv     | 10        | VT\_GAUGE         | packets |
| 10  | TCP SYNACK sent  | 10        | VT\_GAUGE         | packets |
| 11  | TCP RSTFIN sent  | 0         | VT\_GAUGE         | packets |
| 12  | Victim alerts    | 10        | VT\_GAUGE         | alerts  |
| 13  | Flows            | 10        | VT\_COUNTER       | flows   |

The following groups are derived from Hosts.

1. Internal Hosts
2. External Hosts
3. Web Hosts
4. Email Hosts
5. SSH Hosts 
6. Unusual Traffic Hosts

## Apps

Application wise traffic  
CGUID:`{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}`

| ID  | Description     | Top Count | Type              | Units  |
| --- | --------------- | --------- | ----------------- | ------ |
| 0   | Total           | 50        | VT\_RATE\_COUNTER | Bps    |
| 1   | Security Alerts | 10        | VT\_COUNTER       | Alerts |
| 2   | Into Homenet    | 50        | VT\_RATE\_COUNTER | Bps    |
| 3   | Outof Homenet   | 50        | VT\_RATE\_COUNTER | Bps    |
| 4   | Connections     | 50        | VT\_GAUGE         | Conns  |

## Subnets

Stats for configured IP Subnets  
CGUID:`{429B65AD-CDA4-452E-A852-24D8A3D0FBB3}`

| ID  | Description       | Top Count | Type              | Units |
| --- | ----------------- | --------- | ----------------- | ----- |
| 0   | Total bits/sec    | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | Received bits/sec | 0         | VT\_RATE\_COUNTER | Bps   |
| 2   | Transmit bits/sec | 0         | VT\_RATE\_COUNTER | Bps   |
| 3   | Total pkts/sec    | 0         | VT\_RATE\_COUNTER | pps   |

## Dir Mac

Traffic between two MACs  
CGUID:`{79F60A94-44BD-4C55-891A-77823D59161B}`

| ID  | Description | Top Count | Type              | Units |
| --- | ----------- | --------- | ----------------- | ----- |
| 0   | Total       | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | A-\>Z       | 0         | VT\_RATE\_COUNTER | Bps   |
| 2   | Z-\>A       | 0         | VT\_RATE\_COUNTER | Bps   |

## Mac

Traffic per Ethernet MAC  
CGUID:`{4B09BD22-3B99-40FC-8215-94A430EA0A35}`

| ID  | Description | Top Count | Type              | Units |
| --- | ----------- | --------- | ----------------- | ----- |
| 0   | Transmit    | 20        | VT\_RATE\_COUNTER | Bps   |
| 1   | Receive     | 20        | VT\_RATE\_COUNTER | Bps   |

## Interfaces

Per interface statistics  
CGUID:`{8AC478BC-8891-0009-5F31-80774B010086}`

| ID  | Description | Top Count | Type              | Units |
| --- | ----------- | --------- | ----------------- | ----- |
| 0   | Total       | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | Packets     | 0         | VT\_RATE\_COUNTER | pps   |

## LinkLayerStats

Breakdown of activity at link layer  
CGUID:`{9F5AD3A9-C74D-46D8-A8A8-DCDD773730BA}`

| ID  | Description     | Top Count | Type              | Units |
| --- | --------------- | --------- | ----------------- | ----- |
| 0   | Total bytes/sec | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | Total pkts/sec  | 0         | VT\_RATE\_COUNTER | pps   |

## NetworkLayerStats

Breakdown of activity at network layer  
CGUID:`{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}`

| ID  | Description     | Type              | Units |
| --- | --------------- | ----------------- | ----- |
| 0   | Total bytes/sec | VT\_RATE\_COUNTER | Bps   |
| 1   | Total pkts/sec  | VT\_RATE\_COUNTER | pps   |
| 2   | Active Flows    | VT\_GAUGE         | flows |
| 3   | Total Flows     | VT\_COUNTER       | flows |

## VSAT

Traffic per VSAT  
CGUID:`{A8776788-B8E3-4108-AD24-0E3927D9364B}`

| ID  | Description | Top Count | Type              | Units |
| --- | ----------- | --------- | ----------------- | ----- |
| 0   | Total       | 20        | VT\_RATE\_COUNTER | Bps   |
| 1   | Out-Route   | 20        | VT\_RATE\_COUNTER | Bps   |
| 2   | In-Route    | 20        | VT\_RATE\_COUNTER | Bps   |
| 3   | UDP down    | 15        | VT\_RATE\_COUNTER | Bps   |
| 4   | UDP up      | 15        | VT\_RATE\_COUNTER | Bps   |
| 5   | TCP down    | 15        | VT\_RATE\_COUNTER | Bps   |
| 6   | TCP up      | 15        | VT\_RATE\_COUNTER | Bps   |
| 7   | Mcast down  | 15        | VT\_RATE\_COUNTER | Bps   |
| 8   | Mcast up    | 15        | VT\_RATE\_COUNTER | Bps   |
| 9   | Others down | 15        | VT\_RATE\_COUNTER | Bps   |
| 10  | Others up   | 15        | VT\_RATE\_COUNTER | Bps   |

## VLANStats

Per VLAN Activity Monitor  
CGUID:`{0EC72E9E-3AD2-43FD-8173-74693EEA08D0}`

| ID  | Description     | Top Count | Type              | Units |
| --- | --------------- | --------- | ----------------- | ----- |
| 0   | Total bytes/sec | 20        | VT\_RATE\_COUNTER | Bps   |

## HostsIPv6

Stats for each IPv6 Host  
CGUID:`{6CD742B1-C1CA-4708-BE78-0FCA2EB01A86}`

| ID  | Description      | Top Count | Type              | Units   |
| --- | ---------------- | --------- | ----------------- | ------- |
| 0   | Total            | 50        | VT\_RATE\_COUNTER | Bps     |
| 1   | Received         | 10        | VT\_RATE\_COUNTER | Bps     |
| 2   | Transmit         | 10        | VT\_RATE\_COUNTER | Bps     |
| 3   | Total            | 0         | VT\_RATE\_COUNTER | pps     |
| 4   | Active TCP Conns | 50        | VT\_COUNTER       | conns   |
| 5   | Attacker alerts  | 10        | VT\_GAUGE         | alerts  |
| 6   | Homenet          | 20        | VT\_RATE\_COUNTER | Bps     |
| 7   | External         | 20        | VT\_RATE\_COUNTER | Bps     |
| 8   | TCP SYN sent     | 10        | VT\_GAUGE         | packets |
| 9   | TCP SYN recv     | 10        | VT\_GAUGE         | packets |
| 10  | TCP SYNACK sent  | 10        | VT\_GAUGE         | packets |
| 11  | TCP RSTFIN sent  | 0         | VT\_GAUGE         | packets |
| 12  | Victim alerts    | 10        | VT\_GAUGE         | alerts  |

## Meta Counter Group

Second order stats for counters  
CGUID:`{4D88CC23-2883-4DEA-A313-A23B60FE8BDA}`

| ID  | Description     | Top Count | Type      | Units |
| --- | --------------- | --------- | --------- | ----- |
| 0   | Master Size     | 0         | VT\_GAUGE | i     |
| 1   | MRU Size        | 0         | VT\_GAUGE | i     |
| 2   | Pending KU Size | 0         | VT\_GAUGE | i     |
| 3   | Flush US        | 0         | VT\_GAUGE | i     |
| 4   | Flush Keys      | 0         | VT\_GAUGE | i     |
| 5   | New Keys        | 0         | VT\_GAUGE | i     |
| 6   | Key Hits        | 0         | VT\_GAUGE | i     |
| 7   | Unflushed Keys  | 0         | VT\_GAUGE | i     |
| 8   | Heap mem        | 0         | VT\_GAUGE | i     |
| 9   | Tail Prunes     | 0         | VT\_GAUGE | i     |
| 10  | Hi Water Rej    | 0         | VT\_GAUGE | i     |

## Meta Session Group

Second order stats for flow activity  
Used to monitor flow setup, teardown, expiry activity in detail.  
CGUID:`{594606BD-EEB2-4E0B-BAC4-84B7057088C8}`

| ID  | Description   | Top Count | Type      | Units |
| --- | ------------- | --------- | --------- | ----- |
| 0   | Master Size   | 0         | VT\_GAUGE | i     |
| 1   | MRU Size      | 0         | VT\_GAUGE | i     |
| 2   | New           | 0         | VT\_GAUGE | i     |
| 3   | Closed        | 0         | VT\_GAUGE | i     |
| 4   | Expired       | 0         | VT\_GAUGE | i     |
| 5   | Terminated    | 0         | VT\_GAUGE | i     |
| 6   | Flushed       | 0         | VT\_GAUGE | i     |
| 7   | FlushedActive | 0         | VT\_GAUGE | i     |
| 8   | Key Hits      | 0         | VT\_GAUGE | i     |
| 9   | Heap mem      | 0         | VT\_GAUGE | i     |
| 10  | Tail Prunes   | 0         | VT\_GAUGE | i     |
| 11  | Hi Water Rej  | 0         | VT\_GAUGE | i     |
| 12  | After Term    | 0         | VT\_GAUGE | i     |
| 13  | Flush USecs   | 0         | VT\_GAUGE | i     |

### Special Keys

The following keys are available

| Key                                      | Description              |
| ---------------------------------------- | ------------------------ |
| `{99A78737-4B41-4387-8F31-8077DB917336}` | Meters for TCP/UDP flows |

## Alert Signatures

Individual Alert Signatures  
CGUID:`{A0FA9464-B496-4A20-A9AB-4D2D09AFF902}`

| ID  | Description  | Top Count | Type      | Units |
| --- | ------------ | --------- | --------- | ----- |
| 0   | Total Alerts | 20        | VT\_GAUGE | Count |

## Alert Classes

IDS Alert Classfication  
CGUID:`{20BC4345-37F0-44D0-ABFF-3BED97363CB1}`

| ID  | Description  | Top Count | Type      | Units |
| --- | ------------ | --------- | --------- | ----- |
| 0   | Total Alerts | 20        | VT\_GAUGE | Count |

## FlowGens

Flow generator traffic  
CGUID:`{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}`

| ID  | Description          | Top Count | Type              | Units |
| --- | -------------------- | --------- | ----------------- | ----- |
| 0   | Total Bytes/sec      | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | Total Flow Bytes/sec | 10        | VT\_RATE\_COUNTER | Bps   |
| 2   | Flow Records/sec     | 0         | VT\_RATE\_COUNTER | Rps   |

## FlowIntfs Active

Flow interface traffic  
CGUID`{C0B04CA7-95FA-44EF-8475-3835F3314761}`

| ID  | Description    | Top Count | Type              | Units |
| --- | -------------- | --------- | ----------------- | ----- |
| 0   | Bytes/sec Recv | 10        | VT\_RATE\_COUNTER | Bps   |
| 1   | Bytes/sec Xmit | 10        | VT\_RATE\_COUNTER | Bps   |

## HTTP Hosts

Traffic by HTTP Host Headers  
CGUID:`{D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4}`

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 50        | VT\_RATE\_COUNTER | Bps   |

## HTTP Content Types

Traffic by HTTP Content Types  
CGUID:`{C0C9757F-2005-4CC5-BB96-D72F607E6188}`

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 20        | VT\_RATE\_COUNTER | Bps   |

## TLS CA (Certificate Authority)

Traffic by certificate authority. Trisul looks at the cert chain  
and meters root and intermediate CAs separately.

| ID  | Description  | Top Count | Type        | Units |
| --- | ------------ | --------- | ----------- | ----- |
| 0   | Intermediate | 20        | VT\_COUNTER | hits  |
| 1   | Root         | 20        | VT\_COUNTER | hits  |

This tells you how many SSL/TLS flows were seen for each CA.

## TLS Ciphers

Traffic by TLS Cipher Suite.

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 20        | VT\_RATE\_COUNTER | bps   |
| 1   | Hits          | 20        | VT\_COUNTER       | hits  |

## TLS Organization

Traffic by TLS Organization, extracted by normalizing the Subject name.

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 20        | VT\_RATE\_COUNTER | bps   |
| 1   | Hits          | 20        | VT\_COUNTER       | hits  |

## HTTP Methods

Meters HTTP methods (GET/POST/HEAD/OPTIONS etc).

| ID  | Description | Top Count | Type        | Units |
| --- | ----------- | --------- | ----------- | ----- |
| 0   | Total       | 20        | VT\_COUNTER | hits  |

## HTTP Status Codes

Meters HTTP Status codes found in responses (OK/Not Found/Not Modified
etc)

| ID  | Description   | Top Count | Type        | Units |
| --- | ------------- | --------- | ----------- | ----- |
| 0   | Total Traffic | 20        | VT\_COUNTER | hits  |

## ICMP Types

ICMP Type + Code metering.

| ID  | Description | Top Count | Type              | Units |
| --- | ----------- | --------- | ----------------- | ----- |
| 0   | Bytes       | 20        | VT\_RATE\_COUNTER | bps   |
| 1   | Packets     | 20        | VT\_RATE\_COUNTER | pps   |

## Long Fat Tail Hosts

**Needs Badfellas**

Meters hosts that are not in the top 10% of global popularity lists.

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 20        | VT\_RATE\_COUNTER | bps   |

## Long Thin Tail Hosts

**Needs Badfellas**

Meters hosts that are not in the global popularity lists.

| ID  | Description   | Top Count | Type              | Units |
| --- | ------------- | --------- | ----------------- | ----- |
| 0   | Total Traffic | 20        | VT\_RATE\_COUNTER | bps   |


---
id: meters
title: Trisul Traffic Meters — Counter Group Index
sidebar_label: Trisul Traffic Meters
---

Every counter group Trisul ships with out of the box is documented on its own page — GUID, bucket sizes, special keys, and the full meter table (ID, description, top count, type, units). Use **Customize → Counters → View Meters** in the product to see live values for any of these.

:::tip Looking for a specific meter?
Use your browser's find-in-page (Ctrl/Cmd+F) on this index, or jump straight to the [Counter Groups Reference](/docs/guide/counter-groups/) sidebar.
:::

## All counter groups (54)

| Group | Group | Group |
|---|---|---|
| [Aggregates](/docs/guide/counter-groups/aggregates) | [Alert Classes](/docs/guide/counter-groups/alert-classes) | [Alert Priorities](/docs/guide/counter-groups/alert-priorities) |
| [Alert Signatures](/docs/guide/counter-groups/alert-signatures) | [App-ID](/docs/guide/counter-groups/app-id) | [Applicationgroup](/docs/guide/counter-groups/applicationgroup) |
| [Apps](/docs/guide/counter-groups/apps) | [ASNumber](/docs/guide/counter-groups/asnumber) | [Base Domains](/docs/guide/counter-groups/base-domain) |
| [BGP-ASPATH](/docs/guide/counter-groups/bgp-aspathbgp) | [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as) | [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as) |
| [BGP-Prefix External](/docs/guide/counter-groups/bgp-prefix-external) | [BGP-Prefix Home](/docs/guide/counter-groups/bgp-prefix-home) | [Blacklist](/docs/guide/counter-groups/blacklist) |
| [City](/docs/guide/counter-groups/city) | [Country](/docs/guide/counter-groups/country) | [Dir Mac](/docs/guide/counter-groups/dir-mac) |
| [Flow-APPID-NBAR](/docs/guide/counter-groups/flow-appid-nbar) | [Flow-ASN](/docs/guide/counter-groups/flow-asn) | [Flow-BGP-NextHop](/docs/guide/counter-groups/flow-bgp-nexthop) |
| [Flow-IP-NextHop](/docs/guide/counter-groups/flow-ip-nextHop) | [Flow-Link-ASN](/docs/guide/counter-groups/flow-link-asn) | [Flow-Prefix-Home](/docs/guide/counter-groups/flow-prefix-home) |
| [Flow-Prefix-v6](/docs/guide/counter-groups/flow-prefix-v6) | [Flow-Prefix](/docs/guide/counter-groups/flow-prefix) | [Flow-TOS](/docs/guide/counter-groups/flow-tos) |
| [Flow-VRF](/docs/guide/counter-groups/flow-vrf) | [Flow Gens](/docs/guide/counter-groups/flowgens) | [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs) |
| [Hosts](/docs/guide/counter-groups/hosts) | [HostsIPv6](/docs/guide/counter-groups/hostsIPv6) | [HTTP Content Types](/docs/guide/counter-groups/http-content-types) |
| [HTTP Hosts](/docs/guide/counter-groups/http-hosts) | [HTTP Methods](/docs/guide/counter-groups/http-methods) | [HTTP Status Codes](/docs/guide/counter-groups/http-status-codes) |
| [HTTP URL Category](/docs/guide/counter-groups/http-url-category) | [ICMP Types](/docs/guide/counter-groups/icmp-types) | [LinkLayerStats](/docs/guide/counter-groups/link-layer-stats) |
| [Long Fat Tail Hosts](/docs/guide/counter-groups/long-fat-tail-hosts) | [Mac](/docs/guide/counter-groups/mac) | [Meta Counter Group](/docs/guide/counter-groups/meta-counter-group) |
| [Meta Session Group](/docs/guide/counter-groups/meta-session-group) | [MPLSStats](/docs/guide/counter-groups/mpls-stats) | [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats) |
| [Organization](/docs/guide/counter-groups/organization) | [Prefix](/docs/guide/counter-groups/prefix) | [Remote Office](/docs/guide/counter-groups/remote-office) |
| [SNMP-Interface](/docs/guide/counter-groups/snmp-interface) | [TLS CAs](/docs/guide/counter-groups/tls-ca) | [TLS Ciphers](/docs/guide/counter-groups/tls-ciphers) |
| [TLS Orgs](/docs/guide/counter-groups/tls-orgs) | [User ID](/docs/guide/counter-groups/user-id) | [VLANStats](/docs/guide/counter-groups/vlanstats) |

<!--
TODO(Santhana) before publishing:
1. This file REPLACES the ~28-group prose+table content currently at
   /docs/guide/ref/meters. That content is stale — it duplicates a subset
   of the 54 canonical counter-groups/ pages and is missing 26 of them
   (confirmed: e.g. "Long Fat Tail Hosts" appears at the END of the old
   page's range but groups like TLS Ciphers, VLANStats, SNMP-Interface
   etc. need to be checked against the old page before you delete it —
   don't delete the old page until you've confirmed nothing on it is
   MORE detailed or MORE current than the matching counter-groups/ page,
   since it was clearly hand-maintained at some point and may contain
   corrections that never made it into counter-groups/.
2. Add a redirect from /docs/guide/ref/meters (old content) to this page
   if the URL/slug stays the same, so bookmarks and search results don't
   break.
3. Once this index exists, this is the natural place to eventually add
   real search/filter (a client-side filter box over this table) rather
   than relying on browser find-in-page — flagging as a fast-follow, not
   blocking this fix.
-->