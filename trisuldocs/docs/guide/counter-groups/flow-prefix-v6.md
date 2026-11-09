# Flow-Prefix-v6

Counts IPv6 traffic per routed prefix. The prefix is built from the flow address and the IPv6 prefix-length fields that the router puts in each NetFlow v9/IPFIX record.

| Property | Value |
|---|---|
| GUID | `{467AE21F-F2B7-4509-EA69-514CF2352D36}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv6 prefix (CIDR string) |
| Implementation | Lua — nf-prefix-v6.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each IPv6 v9/IPFIX record updates two keys: the source prefix (`IPV6_SRC_ADDR` + `IPV6_SRC_MASK`, fields 27/29) and the destination prefix (`IPV6_DST_ADDR` + `IPV6_DST_MASK`, fields 28/30). IPv4 records go to [Flow-Prefix](/docs/guide/counter-groups/flow-prefix).
- If the template has no IPv6 mask fields, the mask is 0 and all traffic lands on `::/0`. sFlow does not update this group.
- Meters and direction work as in [Flow-Prefix](/docs/guide/counter-groups/flow-prefix). With [`HomeASNumbers`](pathname:///docs/guide/ref/netflow-config#HomeASNumbers) set, the record's AS decides whether a prefix is home or external. If the AS is 0, the IPv6 address is checked against your IPv6 Home Networks. Without `HomeASNumbers`, the IPv6 Home Networks decide.
- `MeterMasks` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns it on or off. IPDR mode turns it off.

## Keys

The key is the network address in compressed IPv6 text form (lowercase, as printed by `inet_ntop`), followed by `/<mask length>`.

| Key | Meaning |
|---|---|
| `2001:db8::/32` | Prefix 2001:db8::/32 |
| `2001:db8:1200::/40` | Prefix 2001:db8:1200::/40 |
| `::/0` | Record without IPv6 mask fields |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each record updates a source prefix and a destination prefix, so Total and Flows here are about 2× the IPv6 flow traffic. |
| `::/0` | The template had no `IPV6_SRC_MASK`/`IPV6_DST_MASK`, or the router had no route (mask 0). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes of records where this prefix is the source or the destination. |
| 1 | Recv from Upstream AS | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where this prefix is the source and is not home. |
| 2 | Transmit to Upstream AS | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where this prefix is the destination and is not home. |
| 3 | Prefixes Flows | VT_COUNTER | Flws | 50 | 0 | Records where this prefix is the source or the destination (+1 per side). |
| 4 | Recv from Downstream AS | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where this prefix is the source and is home. |
| 5 | Transmit to Downstream AS | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where this prefix is the destination and is home. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-Prefix](/docs/guide/counter-groups/flow-prefix), [Flow-ASN](/docs/guide/counter-groups/flow-asn)
