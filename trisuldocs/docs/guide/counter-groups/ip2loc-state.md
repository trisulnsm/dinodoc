# IP2Loc State

Counts flow traffic by state or region within a country, keyed by country code and region name from the IP2Location LITE DB3 database.

| Property | Value |
|---|---|
| GUID | `{5C28445E-19E3-499E-E14D-E4CC7128B62B}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | `<CC>_<Region>` string |
| Implementation | Lua — cg_ip2loc_state.lua (group), ip2location.lua (metering) (apps/analyzers/ip2location) |
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

One key is `<country code>_<region name>` from the `STATE` table. The compiler builds it from `IP2LOCATION-LITE-DB3.CSV` and removes all whitespace from the region name. The key carries no separate label: the script sets an empty label, so the key itself is what you read.

| Key | Meaning |
|---|---|
| `US_California` | California, United States |
| `IN_Karnataka` | Karnataka, India |
| `GB_England` | England, United Kingdom |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. It equals the traffic of all flows that matched a database range. |
| `-_-` | Range with no country or region in IP2Location, such as private address space. <!-- TODO(verify): LITE DB3 rows for reserved ranges use "-" --> |

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
- [IP2Loc ASN](/docs/guide/counter-groups/ip2loc-asn)
- [IP2Loc City](/docs/guide/counter-groups/ip2loc-city)
- [IP2Loc Proxy](/docs/guide/counter-groups/ip2loc-proxy)
