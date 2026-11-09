# IP2Loc Country

Counts flow traffic by country, keyed by the two-letter country code that the IP2Location LITE database gives for the external IP of each flow.

| Property | Value |
|---|---|
| GUID | `{F962527D-985D-42FD-91D5-DA39F4D2A222}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | ISO 3166 two-letter country code |
| Implementation | Lua — cg_ip2loc_cc.lua (group), ip2location.lua (metering) (apps/analyzers/ip2location) |
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

One key is a country code from the `CTRY` table of the database. The compiler builds it from `IP2LOCATION-LITE-DB1.CSV` and `IP2LOCATION-LITE-DB3.CSV`. The label is the country name with all whitespace removed by the compiler. The label is set once per key with `update_key_info`.

| Key | Meaning |
|---|---|
| `US` | United States. Label `UnitedStatesofAmerica` |
| `IN` | India. Label `India` |
| `DE` | Germany. Label `Germany` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. It equals the traffic of all flows that matched a database range. |
| `-` | IP2Location uses `-` for ranges with no country, such as private and reserved address space. <!-- TODO(verify): LITE DB1/DB3 rows for reserved ranges use "-" --> |

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

- [IP2Loc ASN](/docs/guide/counter-groups/ip2loc-asn)
- [IP2Loc State](/docs/guide/counter-groups/ip2loc-state)
- [IP2Loc City](/docs/guide/counter-groups/ip2loc-city)
- [IP2Loc Proxy](/docs/guide/counter-groups/ip2loc-proxy)
- [Country](/docs/guide/counter-groups/country) (built-in Geo group)
