# IP2Loc Proxy

Counts flow traffic to known proxy, VPN and anonymizer IPs, keyed by the proxy type from the IP2Proxy LITE PX2 database.

| Property | Value |
|---|---|
| GUID | `{2DCA13EB-0EB3-46F6-CAA2-9989EA904051}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | IP2Proxy proxy type code |
| Implementation | Lua — cg_ip2loc_proxy.lua (group), ip2location.lua (metering) (apps/analyzers/ip2location) |
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

One key is the proxy type from the `PROXY` table. The compiler builds it from `IP2PROXY-LITE-PX2.CSV`. Only IPs listed in that file are metered. The label is the country code of the first proxy IP seen for that type. The label is set once per key and is not updated later.

| Key | Meaning |
|---|---|
| `VPN` | Anonymizing VPN service |
| `TOR` | Tor exit node |
| `DCH` | Hosting provider or data center |
| `PUB` | Public proxy |

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
- [IP2Loc ASN](/docs/guide/counter-groups/ip2loc-asn)
- [IP2Loc State](/docs/guide/counter-groups/ip2loc-state)
- [IP2Loc City](/docs/guide/counter-groups/ip2loc-city)
