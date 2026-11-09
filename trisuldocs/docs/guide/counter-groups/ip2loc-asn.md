# IP2Loc ASN

Counts flow traffic by Autonomous System Number, keyed by the ASN that the IP2Location LITE ASN database gives for the external IP of each flow.

| Property | Value |
|---|---|
| GUID | `{EF44F11F-B90B-4B24-A9F5-86482C51D125}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | AS number (decimal) |
| Implementation | Lua — cg_ip2loc_asn.lua (group), ip2location.lua (metering) (apps/analyzers/ip2location) |
| Trisul App | ip2location (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `ip2location.lua` runs as an `sg_monitor` script. It meters each flow when the probe flushes it to the hub, so it works for packet capture and for NetFlow/IPFIX/sFlow.
- One IP is looked up per flow. If the Z side is in a home network, the A side is used. Otherwise the Z side is used.
- IPv4 multicast and broadcast (keys `E0.` and above) are skipped. The database holds IPv4 ranges only, so IPv6 flows do not match.
- The lookup uses the LevelDB file `trisul-ip2loc-<engine>.level` under `//App/DataDirectory/plugins`. You build it with `installfeed.sh` and your IP2Location download token. Without the database, nothing is metered.
- Each flow updates one key, so there is no double counting.
- Each key is also added as an edge vertex for the flow (`add_flow_edges`).

## Keys

One key is the AS number, without the `AS` prefix, from the `ASN` table. The compiler builds it from `IP2LOCATION-LITE-ASN.CSV`. The label is the AS name with all whitespace removed by the compiler. The label is set once per key with `update_key_info`. Ranges with no numeric ASN are not metered.

| Key | Meaning |
|---|---|
| `15169` | AS15169. Label `GoogleLLC` |
| `13335` | AS13335. Label `CloudflareInc.` |
| `5603` | AS5603 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. It equals the traffic of all flows that matched a database range. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 40 | 40 | A→Z bytes plus Z→A bytes of the flow. |
| 1 | Upload To | VT_RATE_COUNTER | Bps | 40 | 40 | Bytes from the home side to the looked-up IP. When the Z side is not home, this is A→Z bytes. |
| 2 | Download From | VT_RATE_COUNTER | Bps | 40 | 40 | Bytes from the looked-up IP to the home side. |
| 3 | Flows | VT_COUNTER | flows | 40 | 40 | 1 for each flushed flow that matched. |
| 4 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 5 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [IP2Loc Country](/docs/guide/counter-groups/ip2loc-country)
- [IP2Loc State](/docs/guide/counter-groups/ip2loc-state)
- [IP2Loc City](/docs/guide/counter-groups/ip2loc-city)
- [IP2Loc Proxy](/docs/guide/counter-groups/ip2loc-proxy)
- [ASNumber](/docs/guide/counter-groups/asnumber) (built-in Geo group)
