# Long Fat Tail Hosts

HTTP traffic to web domains that are in the popularity ranking list but ranked below the top `FatTailRank` (default 10,000), keyed by the matched domain.

| Property | Value |
|---|---|
| GUID | `{27870892-5B20-4555-8BA2-2742F3DD0F04}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Domain name |
| Implementation | Native C++ — CPICGLongFatTail defines the group; CPICGLongThinTail updates it (trisul_badfellas/src/badfellas/PICGLongThinTail.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, but empty until you enable a ranking source (see below). |

## What it measures

The Badfellas plugin reads the HTTP `Host` header of each flow. It looks up the domain suffixes in the ranking database `BadFellasLongTail.tch`, shortest suffix first (`example.com`, then `www.example.com`). The first suffix found decides the outcome:

- Rank greater than `FatTailRank` (Badfellas.xml, default 10000): the flow is counted here under that suffix.
- Rank within the top `FatTailRank`: the flow is not counted anywhere.
- No suffix found: the flow goes to [Long Thin Tail Hosts](/docs/guide/counter-groups/long-thin-tail-hosts).

The ranking database comes from the `longtail-alexa-1m.csv.zip` or `badfellas-local-longtail.csv` (`rank,domain`) sources in Badfellas.xml. Both are disabled by default. Only plaintext HTTP has a `Host` header, so TLS traffic is not counted. Host names without a dot are skipped.

## Keys

One key is the domain suffix that matched the ranking list, not the full host name. Keys have no separate label.

| Key | Meaning |
|---|---|
| `example.com` | Matched for host `www.example.com` |
| `smallshop.co.in` | Matched for host `cdn.smallshop.co.in` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 50 | 0 | Flow bytes in both directions, counted after the `Host` header is seen. |
| 1 | Hits | VT_COUNTER | Hits | 50 | 40 | +1 for each flow matched to this domain. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Long Thin Tail Hosts](/docs/guide/counter-groups/long-thin-tail-hosts)
- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
- [Badfellas plugin configuration](/docs/guide/ref/plugin-config/badfellas)
