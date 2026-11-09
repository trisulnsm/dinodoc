# Multicast Hosts

Counts traffic for each IPv4 multicast group address that at least one host has joined with an IGMP report, keyed by the multicast IP.

| Property | Value |
|---|---|
| GUID | `{2792D434-496E-40C9-5E2D-73B60623A631}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | IPv4 multicast address |
| Implementation | Lua — newcg-ip-multicast.lua, fed by cg_monitor_hosts.lua and igmp-counter.lua (apps/analyzers/IGMP_multicast) |
| Trisul App | IGMP_multicast (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `igmp-counter.lua` watches IP protocol 2 (IGMP). For each IGMPv2 Membership Report (type `0x16`) it records that the report's source IP is a member of the reported group. IGMPv1 and IGMPv3 reports are not parsed. Leave messages do not remove a member; the mapping lasts until the probe restarts.
- `cg_monitor_hosts.lua` watches the [Hosts](/docs/guide/counter-groups/hosts) group. When a Hosts key is flushed and that key is a multicast group with known members, it copies the Hosts meters 0, 1 and 2 into this group. Each value is the Hosts per-second rate × 60, which turns it back into bytes for the 60 s interval.
- A multicast address with no IGMPv2 report seen is never added, even if traffic is sent to it.
- No packet is counted directly by this group. The numbers are a copy of the Hosts numbers for the group address.

## Keys

One key is one IPv4 multicast group address, in Trisul hex form. The UI shows it in dotted decimal.

| Key | Meaning |
|---|---|
| `EF.32.32.32` | 239.50.50.50 |
| `E0.00.00.FB` | 224.0.0.251 (mDNS) |
| `EF.FF.FF.FA` | 239.255.255.250 (SSDP) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval, that is the total traffic to all tracked multicast groups. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 1000 | 0 | Hosts meter 0 (Total) of the group address. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 1000 | 0 | Hosts meter 1 (Received) of the group address, that is traffic sent to the group. |
| 2 | MemberHBT | VT_COUNTER | beats | 1000 | 0 | Filled with Hosts meter 2 (Transmit) of the group address × 60. A multicast address does not normally send, so this is usually 0. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Multicast Members](/docs/guide/counter-groups/multicast-members): the same traffic charged to each unicast member.
- [IP X Multicast](/docs/guide/counter-groups/ip-x-multicast): member × group crosskey.
- [Exchange XFlow](/docs/guide/counter-groups/exchange-xflow): per-flow view of multicast traffic.
- The app also installs a filter group **Multicast** (`{CD2F4C1D-688F-4B7C-AF50-A92B2280BF16}`, Hosts keys `E0.00.00.00` to `EF.FF.FF.FF`) and a crosskey **Host_X_Multicast** (`{84EC1A12-E77D-4299-87B1-50FC6FDB3F2B}`, Hosts × Multicast).
