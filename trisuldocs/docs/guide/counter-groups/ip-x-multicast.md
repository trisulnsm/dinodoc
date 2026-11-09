# IP X Multicast

Crosskey of [Multicast Members](/docs/guide/counter-groups/multicast-members) × [Multicast Hosts](/docs/guide/counter-groups/mcast-hosts), keyed by member IP and multicast group IP.

| Property | Value |
|---|---|
| GUID | `{074E78B6-E032-4B22-B085-12A2E72E1BB7}` |
| Layer | Derived |
| Input | Packets |
| Key type | Member IPv4 + multicast IPv4 |
| Implementation | Derived — crosskey of Multicast Members × Multicast Hosts (ip_x_multicast.json), written directly by cg_monitor_hosts.lua and igmp-counter.lua (apps/analyzers/IGMP_multicast) |
| Trisul App | IGMP_multicast (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

The crosskey is defined in `ip_x_multicast.json` (parent Multicast Members, crosskey Multicast Hosts), so it has the parent's meters. The app's Lua scripts write to it directly with two different key forms:

- `igmp-counter.lua` adds 1 to meter 2 for every IGMPv2 Membership Report. The key is `<member>\<group>` in dotted decimal with one backslash. This is the membership heartbeat.
- `cg_monitor_hosts.lua` adds the group's [Hosts](/docs/guide/counter-groups/hosts) meters 0, 1 and 2 (rate × 60, in bytes) for each member when the group's Hosts key is flushed. The key is `<member>\\<group>` in Trisul hex form with **two** backslash characters.

The two key forms never match, so the heartbeat and the traffic for the same pair appear as two different keys.

## Keys

| Key | Meaning |
|---|---|
| `10.22.100.10\239.50.50.50` | Member 10.22.100.10 sent IGMPv2 reports for 239.50.50.50 (meter 2 only). |
| `0A.16.64.0A\\EF.32.32.32` | Traffic of group 239.50.50.50 charged to member 10.22.100.10 (meters 0–2). |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Group traffic is added once per member, and meter 2 mixes IGMP report counts with Hosts Transmit bytes. |

## Meter list

Meters come from the parent group, Multicast Members.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 1000 | 0 | Group Hosts Total, charged to the member (hex keys). |
| 1 | Recv | VT_RATE_COUNTER | Bps | 1000 | 0 | Group Hosts Received, charged to the member (hex keys). |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 1000 | 0 | IGMPv2 report count on dotted-decimal keys; group Hosts Transmit × 60 on hex keys. |

## Related

- [Multicast Hosts](/docs/guide/counter-groups/mcast-hosts)
- [Multicast Members](/docs/guide/counter-groups/multicast-members)
