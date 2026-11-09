# LinkLayerStats

Counts bytes and packets per EtherType, keyed by the 4-digit hex EtherType.

| Property | Value |
|---|---|
| GUID | `{9F5AD3A9-C74D-46D8-A8A8-DCDD773730BA}` |
| Layer | L2 Link |
| Input | Packets, Flows |
| Key type | EtherType (4 hex digits) |
| Implementation | Native C++ — CPICGLinkLayer (group), CPIMacStats (packet metering) (trisul_probe/src/sysplugs/counters); CPINetflowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every Ethernet II frame updates one key with its wire length and 1 packet.
- If the frame has one 802.1Q tag (`8100`), the key is the inner EtherType. Only one tag is skipped. QinQ (`88A8`) frames are keyed `88A8`.
- **NetFlow/IPFIX** (policy `Meterv4v6`, default on): each record adds its bytes to `0800` (IPv4) or `86DD` (IPv6). Packets (meter 1) are not updated in flow mode.
- sFlow does not update this group. Linux cooked (SLL) and raw IP captures do not update it.

## Keys

One key is the EtherType as 4 uppercase hex digits. Labels for known EtherTypes are preloaded from `std-ethertypes.txt`.

| Key | Meaning |
|---|---|
| `0800` | IPv4 |
| `86DD` | IPv6 |
| `0806` | ARP |
| `8847` | MPLS unicast |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each frame updates one key, so meter 0 equals total frame bytes. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Frame bytes, or flow-record bytes in NetFlow mode. |
| 1 | Packets | VT_RATE_COUNTER | pps | 10 | 0 | Frames. Packet mode only. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats)
- [VLANStats](/docs/guide/counter-groups/vlanstats)
- [MPLSStats](/docs/guide/counter-groups/mpls-stats)
