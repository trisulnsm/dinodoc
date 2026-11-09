# IP-MAC-PAIR

Counts IPv4 traffic per IP address and MAC address pair, so you can see which MAC carries which IP.

| Property | Value |
|---|---|
| GUID | `{4D6F1A1C-B8B5-4635-AFF8-20BE2A306020}` |
| Layer | L2 Link |
| Input | Packets |
| Key type | IPv4_MAC (dotted decimal, colon MAC) |
| Implementation | Lua — ip-mac.lua (apps/analyzers/ip-mac-mapper) |
| Trisul App | ip-mac-mapper (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- Every IPv4 packet updates two keys: source IP with source MAC (meter 0), and destination IP with destination MAC (meter 1). The packet's full length is added.
- Each packet updates two keys, so each packet is counted twice in the group total.
- Hosts behind a router all pair with the router's MAC. The group is most useful on a switched segment.
- Sampling: with `SamplingRate` = N in `ip_mac.conf`, only every Nth IPv4 packet is counted. The default is 1 (every packet).
- IPv6 packets are not counted.

## Keys

`<IPv4 address>_<MAC address>`. The IP is dotted decimal. The MAC is uppercase with colons.

| Key | Meaning |
|---|---|
| `192.168.1.10_00:1B:21:3A:4F:5C` | 192.168.1.10 seen with MAC 00:1B:21:3A:4F:5C |
| `8.8.8.8_00:00:0C:07:AC:01` | An external IP seen behind the gateway MAC |
| `192.168.1.255_FF:FF:FF:FF:FF:FF` | Subnet broadcast |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each packet updates two keys, so meters 0 and 1 of the total each equal the counted IPv4 traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | SourceBW | VT_RATE_COUNTER | Bps | 20 | 0 | Bytes of packets where this IP is the source and this MAC is the source MAC. |
| 1 | DestBW | VT_RATE_COUNTER | Bps | 20 | 0 | Bytes of packets where this IP is the destination and this MAC is the destination MAC. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [MAC](/docs/guide/counter-groups/mac)
- [Hosts](/docs/guide/counter-groups/hosts)
