# Long Thin Tail Hosts

HTTP traffic to host names that are not in the web popularity ranking list at all, keyed by the full HTTP `Host` header.

| Property | Value |
|---|---|
| GUID | `{BF2C028A-CDDE-4074-8AF5-A007582D820E}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | HTTP host name |
| Implementation | Native C++ — CPICGLongThinTail (trisul_badfellas/src/badfellas/PICGLongThinTail.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, but needs the ranking database (see below). |

## What it measures

The Badfellas plugin reads the HTTP `Host` header of each flow. It looks up every domain suffix of the host in the ranking database `BadFellasLongTail.tch`. If no suffix is found, the flow is counted here under the full host name. A host found at any rank goes to [Long Fat Tail Hosts](/docs/guide/counter-groups/long-fat-tail-hosts) or is not counted.

- The ranking database is built from the `longtail-alexa-1m.csv.zip` or `badfellas-local-longtail.csv` sources in Badfellas.xml. Both are disabled by default. Without the database file, nothing is counted.
- Only plaintext HTTP carries a `Host` header, so TLS traffic is not counted.
- Host names without a dot, or 60 characters or longer, are skipped.
- Rarely visited hosts land here, so this group is useful for spotting odd destinations such as DGA or newly registered domains.

## Keys

One key is the `Host` header value exactly as sent by the client.

| Key | Meaning |
|---|---|
| `update.vendor-xyz.net` | Host not in the ranking list |
| `a1b2c3d4.example.top` | Possible DGA host name |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 50 | 0 | Flow bytes in both directions, counted after the `Host` header is seen. |
| 1 | Hits | VT_COUNTER | Hits | 50 | 40 | +1 for each flow with this host name. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Long Fat Tail Hosts](/docs/guide/counter-groups/long-fat-tail-hosts)
- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
