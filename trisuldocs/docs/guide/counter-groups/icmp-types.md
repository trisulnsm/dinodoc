# ICMP Types

Counts IPv4 ICMP bytes and packets per type and code, keyed by type and code in hex.

| Property | Value |
|---|---|
| GUID | `{FA6466E2-EA6A-4E75-8F39-ADE7708C6F46}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | ICMP type + code (4 hex digits) |
| Implementation | Native C++ — CPIICMPStats (trisul_probe/src/sysplugs/counters/PIICMPStats.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Every IPv4 ICMP packet updates one key with the packet's wire length and 1 packet.
- ICMPv6 is not counted here. It is a separate protocol in the probe; see `icmpv6` in [Apps](/docs/guide/counter-groups/apps) and key `3A` in [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats).
- NetFlow/IPFIX and sFlow do not update this group.

## Keys

One key is 4 uppercase hex digits: the ICMP type (2 digits) then the code (2 digits). Labels for common type/code pairs are preloaded by the plugin (for example `0303` is "Port Unreachable"). Pairs not in that list have no label.

| Key | Meaning |
|---|---|
| `0800` | Type 8 code 0, Echo (ping request) |
| `0000` | Type 0 code 0, Echo Reply |
| `0303` | Type 3 code 3, Port Unreachable |
| `0B00` | Type 11 code 0, Time Exceeded in transit (traceroute) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each ICMP packet updates one key, so the totals equal all IPv4 ICMP traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Bytes | VT_RATE_COUNTER | Bps | 50 | 0 | Wire bytes of ICMP packets with this type/code. |
| 1 | Packets | VT_RATE_COUNTER | Pps | 50 | 0 | ICMP packets with this type/code. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats)
