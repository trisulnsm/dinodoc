# Exchange XFlow

Counts IPv4 TCP traffic per client/server/port, and multicast UDP traffic per member/sender/port/group.

| Property | Value |
|---|---|
| GUID | `{942AB99F-7A65-4B2E-6F6C-A3050F0F7B35}` |
| Layer | L4 Transport |
| Input | Packets |
| Key type | IPv4\IPv4\port[\multicast IPv4] (dotted decimal) |
| Implementation | Lua — newcg-crosskey.lua, fed by tcp-counter.lua and udp-counter.lua (apps/analyzers/IGMP_multicast) |
| Trisul App | IGMP_multicast (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- **TCP** (`tcp-counter.lua`, every IPv4 TCP packet). The lower port is taken as the server port. The key is `<client IP>\<server IP>\<server port>`. A packet from the client (source port higher) adds its bytes to meter 0. A packet from the server adds to meter 1. When both ports are equal, the packet counts as server-to-client.
- **Multicast UDP** (`udp-counter.lua`, every IPv4 UDP packet). If the destination IP is a group with members learned from IGMPv2 Membership Reports, the packet's bytes are added to meter 2 once for each member. The key is `<member IP>\<sender IP>\<destination port>\<group IP>`. UDP to a group with no known member is not counted.
- Packet bytes are the full packet length.

## Keys

IPs are in dotted decimal, joined with one backslash. TCP keys have three parts, multicast keys four.

| Key | Meaning |
|---|---|
| `10.22.100.10\172.19.1.2\18001\239.50.50.50` | 172.19.1.2 sends to group 239.50.50.50 port 18001, received by member 10.22.100.10 (meter 2). |
| `192.168.1.20\10.10.5.5\443` | TCP client 192.168.1.20 to server 10.10.5.5 port 443 (meters 0 and 1). |
| `10.0.0.7\10.0.0.9\5001` | TCP client 10.0.0.7 to server 10.0.0.9 port 5001. |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A multicast packet is added once per member, so meter 2 total exceeds the real multicast traffic when a group has several members. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | TCP Recv | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes of TCP packets sent by the client (higher port) to the server. |
| 1 | TCP Xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes of TCP packets sent by the server (lower port) to the client. |
| 2 | Multicast | VT_RATE_COUNTER | Bps | 100 | 0 | Bytes of UDP packets to a known multicast group, once per member. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Multicast Hosts](/docs/guide/counter-groups/mcast-hosts)
- [Multicast Members](/docs/guide/counter-groups/multicast-members)
- [Exchange MAC](/docs/guide/counter-groups/multicast-mac)
