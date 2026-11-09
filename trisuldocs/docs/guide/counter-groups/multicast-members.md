# Multicast Members

Charges the traffic of each IPv4 multicast group to every unicast host that joined it, keyed by the member IP.

| Property | Value |
|---|---|
| GUID | `{51177E0A-7535-46B7-1477-9F0E0E0F9808}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | IPv4 address (member host) |
| Implementation | Lua — newcg-multicast-member.lua, fed by cg_monitor_hosts.lua and igmp-counter.lua (apps/analyzers/IGMP_multicast) |
| Trisul App | IGMP_multicast (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- Membership comes from IGMPv2 Membership Reports (type `0x16`): the report's source IP is recorded as a member of the reported group. IGMPv1, IGMPv3 and Leave messages are not handled, and members are never removed until the probe restarts.
- When the [Hosts](/docs/guide/counter-groups/hosts) key of a multicast group is flushed, `cg_monitor_hosts.lua` adds the group's Hosts meters 0, 1 and 2 (rate × 60, in bytes) to each member's key.
- Every member gets the full group traffic, whether or not it actually received it. A host in several groups gets the sum of all its groups.
- The member's own unicast traffic is not counted here.

## Keys

One key is one unicast IPv4 host that sent an IGMPv2 report, in Trisul hex form. The UI shows it in dotted decimal.

| Key | Meaning |
|---|---|
| `0A.16.64.0A` | 10.22.100.10 |
| `C0.A8.01.25` | 192.168.1.37 |
| `AC.13.01.02` | 172.19.1.2 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A group with N members is added N times, so the total is larger than the real multicast traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 1000 | 0 | Hosts meter 0 (Total) of every group this host joined. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 1000 | 0 | Hosts meter 1 (Received) of every group this host joined. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 1000 | 0 | Hosts meter 2 (Transmit) of every group this host joined. Usually 0, because group addresses do not send. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Multicast Hosts](/docs/guide/counter-groups/mcast-hosts)
- [IP X Multicast](/docs/guide/counter-groups/ip-x-multicast)
- [Exchange XFlow](/docs/guide/counter-groups/exchange-xflow)
