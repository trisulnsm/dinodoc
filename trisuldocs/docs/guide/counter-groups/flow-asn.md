# Flow-ASN

Counts traffic per autonomous system using the source and destination AS numbers that the router puts in each NetFlow/IPFIX record.

| Property | Value |
|---|---|
| GUID | `{120A3124-E2BB-47BD-6C64-71BBB861C428}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | AS number (decimal) |
| Implementation | Lua — nf-asn.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- The AS numbers come from the record itself: `SRC_AS`/`DST_AS` (fields 16/17) in v9/IPFIX, or the 16-bit `src_as`/`dst_as` fields in v5. If the template does not carry these fields, the AS is 0 and traffic lands on key `0`. The router exports origin AS or peer AS depending on its configuration.
- **Without `HomeASNumbers`** (default): the probe uses Home Networks. When the source IP is outside, the source AS gets Total and *Recv from Upstream AS*. When the destination IP is outside, the destination AS gets Total and *Transmit to Upstream AS*. ASes of home-network endpoints are not counted.
- **With [`HomeASNumbers`](pathname:///docs/guide/ref/netflow-config#HomeASNumbers)** set (ISP mode): both the source and destination AS keys are updated. An AS in the home/downstream list, or any private AS 64512–65534, gets the *Downstream* meters. Any other AS gets the *Upstream* meters. A record with AS 0 is checked against `HomePrefixesFile` instead.
- sFlow does not update this group. `MeterASN` (default TRUE) turns it on or off. IPDR mode turns it off.

## Keys

The key is the AS number as a decimal string. The group's `ResolverCounterGUID` is the [ASNumber](/docs/guide/counter-groups/asnumber) group. That means the UI reads key labels (AS names) from ASNumber's key database, which uses the same decimal keys, so you don't need to name ASNs again here.

| Key | Meaning |
|---|---|
| `15169` | AS15169, label from ASNumber (e.g. GOOGLE) |
| `13335` | AS13335 |
| `64512` | Private AS 64512, label only if you assign one |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. In HomeASNumbers mode each record updates two AS keys, so Total here is about 2× the flow traffic. |
| `0` | The record had no AS fields, or the router exported AS 0 (for example, internal prefixes or no BGP route). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes of every update to this AS (sum of meters 1–4). |
| 1 | Recv from Upstream AS | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where this AS is the source and is not home/downstream. |
| 2 | Transmit to Upstream AS | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where this AS is the destination and is not home/downstream. |
| 3 | Recv from Downstream AS | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where this AS is the source and is in `HomeASNumbers`. HomeASNumbers mode only. |
| 4 | Transmit to Downstream AS | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where this AS is the destination and is in `HomeASNumbers`. HomeASNumbers mode only. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [ASNumber](/docs/guide/counter-groups/asnumber): AS computed by Trisul from a GeoIP database instead of the router.
- [Flow-Link-ASN](/docs/guide/counter-groups/flow-link-asn): AS per router interface.
- [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as), [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as)
- You can create [crosskey groups](/docs/guide/ag/context/crosskey_countergroups) such as Flow-ASN × Router (with FlowGens) or Flow-ASN × Interface (with FlowIntfs).
