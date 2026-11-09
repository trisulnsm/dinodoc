# SNI

Counts TLS traffic and flows by the Server Name Indication hostname in the ClientHello, keyed by that hostname.

| Property | Value |
|---|---|
| GUID | `{38497403-23FB-4206-65C2-0AD5C419DD53}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | SNI hostname string |
| Implementation | Lua — sni.lua (group, reassembly), sni-tls.lua (ClientHello parser) (apps/analyzers/sni-tls) |
| Trisul App | sni-tls (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- The script handles only TCP flows whose flow key contains port 443 (`p-01BB`). It reads reassembled payload in direction 1 (client to server) and parses the first TLS record.
- From a ClientHello with a server_name extension (type 0), each hostname adds 1 to Flows. It also attaches a flow counter, so every later packet of the flow, in both directions, adds its wire length to meter 0.
- After the ClientHello the parser stops reading the flow. A ClientHello with no extensions is not counted.
- The script also adds a flow → SNI edge and sets the flow attribute `SNI`, which other scripts can read.
- Each flow updates one key, so there is no double counting.

## Keys

One key is the hostname from the SNI extension, as sent by the client. Names of 60 characters or more are cut to the first 60 characters, with a NUL byte added. No labels are set.

| Key | Meaning |
|---|---|
| `www.google.com` | Flows that asked for www.google.com |
| `api.github.com` | Flows that asked for api.github.com |
| `outlook.office365.com` | Flows that asked for outlook.office365.com |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval: all port-443 flows with an SNI hostname. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 50 | 0 | Short name `bytes`. Wire bytes of the flow's packets, both directions, from the ClientHello onward. |
| 1 | Flows | VT_COUNTER | Flows | 50 | 0 | Short name `flows`. 1 per ClientHello hostname. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [JA3 FINGERPRINT](/docs/guide/counter-groups/ja3-hash)
- [TLS Versions](/docs/guide/counter-groups/tls-versions)
