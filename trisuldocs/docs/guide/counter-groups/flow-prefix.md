# Flow-Prefix

Counts IPv4 traffic per routed prefix. The prefix is built from the flow address and the prefix-length (mask) fields that the router copies from its RIB into each NetFlow v9/IPFIX record.

| Property | Value |
|---|---|
| GUID | `{2BE2A3B6-613D-4216-0737-3684E824EA33}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv4 prefix (CIDR string) |
| Implementation | Lua — nf-prefix.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each IPv4 v9/IPFIX record updates two keys: the source prefix (source IP + `SRC_MASK`, field 9) and the destination prefix (destination IP + `DST_MASK`, field 13). IPv6 records go to [Flow-Prefix-v6](/docs/guide/counter-groups/flow-prefix-v6).
- If the template has no mask fields, the mask is 0 and all traffic lands on `0.0.0.0/0`. NetFlow v5 and sFlow do not update this group.
- **Direction:** without `HomeASNumbers`, a prefix is home when its IP is in Home Networks. With [`HomeASNumbers`](pathname:///docs/guide/ref/netflow-config#HomeASNumbers), a prefix is home when the record's AS for that side is in the list or is a private AS (64512–65534). If that AS is 0, the probe checks `HomePrefixesFile` instead. A home source prefix gets *Recv from Downstream*; an external one gets *Recv from Upstream*. The destination side works the same way with the *Transmit* meters.
- `MeterMasks` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns it on or off. IPDR mode turns it off.

## Keys

The key is `<network address>/<mask length>`, in dotted decimal. The host bits are cleared, so every address in a prefix lands on the same key. Mask lengths above 32 are treated as 32.

| Key | Meaning |
|---|---|
| `8.8.8.0/24` | Prefix 8.8.8.0/24 |
| `10.20.0.0/16` | Home prefix 10.20.0.0/16 |
| `192.168.12.0/22` | Flows from 192.168.12.0 – 192.168.15.255 with `SRC_MASK` 22 |
| `203.0.113.64/27` | Flows from 203.0.113.64 – 203.0.113.95 with mask 27 |
| `8.8.8.8/32` | Host route |
| `0.0.0.0/0` | Record without mask fields |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each record updates a source prefix and a destination prefix, so Total and Flows here are about 2× the flow traffic. |
| `0.0.0.0/0` | The template had no `SRC_MASK`/`DST_MASK`, or the router had no route (mask 0). |

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

- [Flow-Prefix-v6](/docs/guide/counter-groups/flow-prefix-v6), [Flow-ASN](/docs/guide/counter-groups/flow-asn)
- [Prefix](/docs/guide/counter-groups/prefix): prefixes computed by Trisul from a GeoIP/ASN database instead of the router.
- You can create [crosskey groups](/docs/guide/ag/context/crosskey_countergroups) such as Flow-Prefix × Router (with FlowGens) or Flow-Prefix × Interface (with FlowIntfs).
