# Flow-Link-ASN

Counts traffic per AS number per router interface, so you can see which ASes arrive on and leave by each link.

| Property | Value |
|---|---|
| GUID | `{1D86CAB7-B4C4-433E-BCB9-C779A4244D70}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | AS number + FlowIntfs key |
| Implementation | Lua — nf-link-asn.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. The group exists, but metering needs `MeterLinkAS=TRUE` (default FALSE). |

## What it measures

- For each NetFlow/IPFIX record, the probe updates two keys. The source AS on the input interface gets *Recv*. The destination AS on the output interface gets *Xmit*.
- AS numbers come from `SRC_AS`/`DST_AS` (fields 16/17) in v9/IPFIX, or from the v5 record. Interfaces come from `INPUT_SNMP`/`OUTPUT_SNMP` (fields 10/14). Missing fields become 0.
- Needs both `MeterLinkAS=TRUE` and `MeterNetflowInterfaces=TRUE` in the [NetFlow config](/docs/guide/ref/netflow-config). The probe does not check Home Networks or HomeASNumbers for this group. sFlow and IPDR mode do not update it.

## Keys

The key is `<AS number>\<FlowIntfs key>`: the decimal AS, a backslash, then the router hex IP and the 8-digit hex ifIndex.

| Key | Meaning |
|---|---|
| `15169\C0.A8.01.01_00000003` | AS15169 on router 192.168.1.1, ifIndex 3 |
| `13335\CB.00.71.01_0000022C` | AS13335 on router 203.0.113.1, ifIndex 556 |
| `0\C0.A8.01.01_00000005` | AS 0 (not exported) on router 192.168.1.1, ifIndex 5 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each record updates a Recv key and an Xmit key, so the totals hold the flow traffic once as Recv and once as Xmit. |
| `0\...` | The template had no AS fields, or the router exported AS 0. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Recv from AS on Link | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes of flows whose source AS is this AS and whose input interface is this link. |
| 1 | Transmit to AS on Link | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes of flows whose destination AS is this AS and whose output interface is this link. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-ASN](/docs/guide/counter-groups/flow-asn), [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs)
- A [crosskey group](/docs/guide/ag/context/crosskey_countergroups) such as Flow-ASN × Interface gives a similar view with the full set of Flow-ASN meters.
