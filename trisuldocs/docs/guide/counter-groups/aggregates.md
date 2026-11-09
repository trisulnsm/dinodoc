# Aggregates

Counts whole-network totals (bytes, packets, broadcast/multicast/unicast split, home-network direction) under a few fixed keys such as `TOTALBW`.

| Property | Value |
|---|---|
| GUID | `{393B5EBC-AB41-4387-8F31-8077DB917336}` |
| Layer | L2 Link |
| Input | Packets, Flows |
| Key type | Fixed name (`TOTALBW`, `DIR_*`, `ipfrag`, session group GUID) |
| Implementation | Native C++ — CPIAggStats (trisul_probe/src/sysplugs/counters/PIAggregates.cpp); also updated by CPIMacStats, CPIIPStats, CPIIP6Stats, CPILxSLLStats, pcappipe/FilterIPReass.cpp, stengine/XSessionGroup.cpp and the NetFlow/sFlow meters in sysplugs/flowhandlers |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every Ethernet frame adds its wire length and 1 packet to `TOTALBW`. Linux cooked (SLL) and raw IP captures do the same.
- **L2 split** (MAC Layer Statistics plugin, policy `MeterBroadcast`, default on): `FF:FF:FF:FF:FF:FF` is L2 broadcast. Any other destination MAC with the group bit set is L2 multicast. The group bit is the lowest bit of the first octet. This covers `01:00:5E` (IPv4), `33:33` (IPv6), `01:80:C2` (STP, LLDP, LACP) and `01:00:0C` (Cisco). Everything else is L2 unicast.
- **L3 split and direction keys** (IP Statistics plugins, skipped when `ShortUpdates` is true in `HostCounterPolicy.xml`): an IPv4 destination with first or last octet `255` is L3 broadcast. A destination of `224.0.0.0` or above is L3 multicast. IPv6 `ff00::/8` is multicast; IPv6 has no broadcast. Direction uses [Home Networks](/docs/guide/ag/context/home_networks).
- **NetFlow/IPFIX/sFlow:** `TOTALBW` gets the bytes and packets of every flow record. The `DIR_*` keys get bytes and packets per record when `MeterHosts` is on.
- In packet mode the `DIR_*` keys get bytes only (meter 0).

## Keys

Each key is a fixed string. There are no per-host or per-port keys.

| Key | Meaning |
|---|---|
| `TOTALBW` | All traffic seen by the probe |
| `DIR_INTOHOME` | Source outside, destination inside the home network |
| `DIR_OUTOFHOME` | Source inside, destination outside the home network |
| `DIR_WITHINHOME` | Source and destination both inside the home network |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to every key in this group. Meter 0 adds `TOTALBW`, the `DIR_*` keys and `ipfrag`, so it is about 2× link traffic. Use `TOTALBW` instead. |
| `DIR_TRANSIT` | Source and destination both outside the home network |
| `ipfrag` | IP fragments seen by the reassembly stage. Meter 0 = bytes, 1 = packets, 9 = fragment count. |
| `{99A78737-4B41-4387-8F31-8077DB917336}` | One key per session group GUID (this one is TCP/IP sessions). Meter 2 gets +1 for each new flow and −1 for each expired flow. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 0 | 0 | Bytes: wire length of each frame, or flow-record bytes. |
| 1 | Packets | VT_RATE_COUNTER | pps | 0 | 0 | Packets, or flow-record packets. |
| 2 | Active Sessions | VT_COUNTER | sess | 0 | 0 | On `TOTALBW`: flow-cache size, pushed by each session group at every flush. On a session group GUID key: +1 per new flow, −1 per expired flow. |
| 3 | Layer 2 Broadcast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. Bytes to `FF:FF:FF:FF:FF:FF`. |
| 4 | Layer 2 Multicast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. Bytes to a group MAC address (first octet odd), except broadcast. |
| 5 | Layer 2 Unicast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. All other frames. |
| 6 | Layer 3 Broadcast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. IPv4 destination with first or last octet 255. |
| 7 | Layer 3 Multicast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. IPv4 destination ≥ `224.0.0.0`, or IPv6 `ff00::/8`. |
| 8 | Layer 3 Unicast | VT_RATE_COUNTER | Bps | 0 | 0 | `TOTALBW` only. All other IP packets. |
| 9 | Fragments | VT_RATE_COUNTER | pps | 0 | 0 | `ipfrag` only. Number of IP fragments. |
| 10 | Gauge Value | VT_GAUGE | Val | 0 | 0 | Not populated by the current code. |
| 11 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 12 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

:::tip
Query `TOTALBW` meter 0 for total bandwidth in bytes/sec. Multiply by 8 for bits/sec. Query `DIR_INTOHOME` meter 0 for traffic downloaded into your network.
:::

## Related

- [Meta Session Group](/docs/guide/counter-groups/meta-session-group)
- [Mac](/docs/guide/counter-groups/mac)
- [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats)
