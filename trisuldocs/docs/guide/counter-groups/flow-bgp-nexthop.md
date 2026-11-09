# Flow-BGP-NextHop

Counts traffic per BGP next-hop router, using the BGP next-hop address in each NetFlow v9/IPFIX record.

| Property | Value |
|---|---|
| GUID | `{FC61EC07-BED0-4734-C64C-F5932FD8B943}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv4 address |
| Implementation | Lua — nf-bgp-next-hop.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each NetFlow v9 or IPFIX record adds its byte count to the key for `BGP_IPV4_NEXT_HOP` (field 18). One record updates one key.
- NetFlow v1/v5 and sFlow do not update this group.
- IPv6 BGP next hop (field 63) is not decoded. IPv6 flows, and v9/IPFIX templates without field 18, count against `00.00.00.00`.
- `MeterBGPNextHop` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns it on or off. IPDR mode turns it off.

## Keys

The key is the next-hop IPv4 address in dotted uppercase hex. The group's `ResolverCounterGUID` is [Hosts](/docs/guide/counter-groups/hosts), so the UI shows the same name (DNS or user label) that Hosts has for that IP.

| Key | Meaning |
|---|---|
| `CB.00.71.01` | Next hop 203.0.113.1 |
| `C6.33.64.07` | Next hop 198.51.100.7 |
| `00.00.00.00` | No BGP next hop in the record |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals total v9/IPFIX flow traffic. |
| `00.00.00.00` | Template lacks field 18, the flow is IPv6, or the router has no BGP route (locally connected or IGP-only destination). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Sampling-adjusted bytes of v9/IPFIX records with this BGP next hop. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-IP-NextHop](/docs/guide/counter-groups/flow-ip-nextHop): the IGP/IP next hop instead of the BGP next hop.
- [Flow-ASN](/docs/guide/counter-groups/flow-asn), [Flow-Prefix](/docs/guide/counter-groups/flow-prefix)
