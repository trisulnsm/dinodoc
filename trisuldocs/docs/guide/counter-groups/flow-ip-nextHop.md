# Flow-IP-NextHop

Counts traffic per IP next-hop address (the adjacent router the flow is forwarded to), using the next-hop field in each NetFlow v9/IPFIX record.

| Property | Value |
|---|---|
| GUID | `{79693CA3-ED3C-43B3-E12A-A3F64B125E4F}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv4 address |
| Implementation | Lua — nf-ip-next-hop.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each NetFlow v9 or IPFIX record adds its byte count to the key for `IPV4_NEXT_HOP` (field 15). One record updates one key.
- NetFlow v1/v5 records carry a next-hop field, but the probe does not meter it here. sFlow does not update this group.
- IPv6 next hop (field 62) is not decoded. IPv6 flows, and templates without field 15, count against `00.00.00.00`.
- `MeterIPNextHop` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns it on or off. IPDR mode turns it off.

## Keys

The key is the next-hop IPv4 address in dotted uppercase hex. The UI shows the dotted-decimal address or a label you assign.

| Key | Meaning |
|---|---|
| `0A.00.00.01` | Next hop 10.0.0.1 |
| `C0.A8.0A.FE` | Next hop 192.168.10.254 |
| `00.00.00.00` | No next hop in the record |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals total v9/IPFIX flow traffic. |
| `00.00.00.00` | Template lacks field 15, the flow is IPv6, or the traffic was not forwarded (for example, dropped, or delivered to the router itself). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Sampling-adjusted bytes of v9/IPFIX records with this IP next hop. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-BGP-NextHop](/docs/guide/counter-groups/flow-bgp-nexthop)
- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs): the output interface toward the next hop.
