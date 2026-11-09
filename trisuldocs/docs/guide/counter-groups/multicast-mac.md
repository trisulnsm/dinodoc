# Exchange MAC

Counts IPv4 UDP traffic keyed by source IP, destination IP and destination MAC address.

| Property | Value |
|---|---|
| GUID | `{095E0C56-D17F-4634-A0B8-E000B4E85140}` |
| Layer | L2 Link |
| Input | Packets |
| Key type | IPv4\IPv4\MAC (dotted decimal, colon MAC) |
| Implementation | Lua — newcg-crosskey-mac.lua, fed by udp-counter.lua (apps/analyzers/IGMP_multicast) |
| Trisul App | IGMP_multicast (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. `newcg-crosskey-mac.lua` is not listed in the app's `pkg.yaml`, so the group is not created unless you add the file. |

## What it measures

- `udp-counter.lua` adds the bytes of **every** IPv4 UDP packet to meter 0, not only multicast packets. The Lua plugin name is "Multicast MAC".
- The MAC is the destination MAC of the Ethernet header. For multicast this is the `01:00:5E:xx:xx:xx` group MAC. For unicast it is the next-hop MAC.
- IGMP membership is not needed for this group.

## Keys

Source IP, destination IP and destination MAC, joined with one backslash. IPs are dotted decimal, the MAC is uppercase with colons.

| Key | Meaning |
|---|---|
| `172.19.1.2\239.50.50.50\01:00:5E:32:32:32` | Multicast stream from 172.19.1.2 to group 239.50.50.50. |
| `192.168.1.20\8.8.8.8\00:1B:21:3A:4F:5C` | Unicast UDP (for example DNS) sent through the router with that MAC. |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval, that is all IPv4 UDP bytes. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Multicast | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes of each IPv4 UDP packet, multicast or not. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Exchange XFlow](/docs/guide/counter-groups/exchange-xflow)
- [MAC](/docs/guide/counter-groups/mac)
