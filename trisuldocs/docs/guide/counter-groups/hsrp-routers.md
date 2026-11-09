# HSRP Routers

Lists the routers that send HSRP Hello messages, keyed by the router's IP address.

| Property | Value |
|---|---|
| GUID | `{47FB78D7-76F6-4AF0-D45A-7D9BA6E83762}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | IPv4 address (dotted decimal) |
| Implementation | Lua — hsrp-routers.lua, fed by hsrp-counter.lua (apps/analyzers/hsrp) |
| Trisul App | hsrp (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- For every HSRP Hello (UDP 1985, op code 0), `hsrp-counter.lua` sets the meter to 1 for the IP source address of the packet.
- The meter is a gauge, so a router that sent at least one Hello in the interval shows 1. A router that stops sending has no value for that interval.
- Use it to see which routers take part in HSRP. Use [HSRP Hits](/docs/guide/counter-groups/hsrp-groups) for the Active/Standby state.

## Keys

The router's IPv4 address in dotted decimal. This is not the Trisul hex host form, so these keys do not match keys in [Hosts](/docs/guide/counter-groups/hosts).

| Key | Meaning |
|---|---|
| `10.1.1.2` | Router with interface address 10.1.1.2 |
| `10.1.1.3` | Second router in the same HSRP group |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Receives the same gauge updates, so it is 1 whenever any router sent a Hello. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_GAUGE | hits | 10 | 0 | Set to 1 on each Hello from this router. Meter name in code is `Status`. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HSRP Hits](/docs/guide/counter-groups/hsrp-groups)
