# HSRP Hits

Records the HSRP state (Active or Standby) last announced for each virtual IP and router MAC pair.

| Property | Value |
|---|---|
| GUID | `{0A79F27A-4741-40E8-DAF1-32F8ADB2653E}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Virtual IPv4 \| MAC address |
| Implementation | Lua — hsrp-counter.lua, with protocol handler hsrp.lua (apps/analyzers/hsrp) |
| Trisul App | hsrp (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `hsrp.lua` adds an HSRP protocol on UDP port 1985. `hsrp-counter.lua` reads each HSRP packet with the HSRPv1 layout.
- Only Hello messages (op code 0) are counted. For each Hello, the key gets the value 1 if the state field is Active (16) and 2 for any other state (normally Standby).
- The meter is a gauge: the stored value is the last Hello seen in the 30 s interval.
- HSRPv2 (TLV format) is not decoded correctly by this layout.
- Each Hello also updates [HSRP Routers](/docs/guide/counter-groups/hsrp-routers).

## Keys

`<virtual IP>|<source MAC>`. The virtual IP is the HSRP virtual address from the Hello, in dotted decimal. The MAC is the Ethernet source MAC of the Hello, uppercase with colons.

| Key | Meaning |
|---|---|
| `10.1.1.1\|00:00:0C:07:AC:01` | Hellos for virtual IP 10.1.1.1 sent from MAC 00:00:0C:07:AC:01 (HSRP group 1 virtual MAC). |
| `10.1.1.1\|00:1A:2B:3C:4D:5E` | Hellos for the same virtual IP from a second router. |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Receives the same gauge updates as the keys, so it holds the last state value seen from any router. It is not a sum. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_GAUGE | hits | 10 | 0 | HSRP state from the last Hello: 1 = Active, 2 = Standby or other. Meter name in code is `Status`. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HSRP Routers](/docs/guide/counter-groups/hsrp-routers)
