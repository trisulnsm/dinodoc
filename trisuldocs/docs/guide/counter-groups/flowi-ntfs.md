# FlowIntfs

Counts traffic per router interface from NetFlow, IPFIX and sFlow records, keyed by exporter IP plus SNMP ifIndex.

| Property | Value |
|---|---|
| GUID | `{C0B04CA7-95FA-44EF-8475-3835F3314761}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | Exporter IPv4 address + ifIndex |
| Implementation | Native C++ — CPICGNetflowIntf (trisul_probe/sysplugs/flowhandlers/PICGNetflowIntf.cpp); updated by CPINetflowMeter and CPISFlowMeter; meters 4–6 by Lua flow-interface-util.lua (same directory) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each flow record updates **two** keys: the input interface (`INPUT_SNMP`, field 10) gets Recv, and the output interface (`OUTPUT_SNMP`, field 14) gets Xmit. Both keys get Total and Flows. NetFlow v5 uses the input/output ifIndex in the record. sFlow uses `inputPort`/`outputPort` and the sFlow agent address.
- Recv is traffic that enters the router on that interface. Xmit is traffic that leaves the router on that interface.
- Byte counts are sampling-adjusted. Records removed by the interface, host or ASN filters are not counted.
- `MeterNetflowInterfaces` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns this group on or off. IPDR mode turns it off.
- At each flush, flow-interface-util.lua computes the utilization meters. It reads the interface speed from the `snmp.ifspeed` key attribute, or from `snmp.ifspeed_rx` and `snmp.ifspeed_tx`, in bits/s, on this group's keys. The SNMP integration stores these attributes (see [Using SNMP](/docs/guide/ug/netflow/snmp)). Without a speed, meters 4 and 5 stay empty.

## Keys

The key is `<exporter IP as dotted hex>_<ifIndex as 8 hex digits>`, all uppercase, 20 characters. The UI shows the readable form `router_ifIndex`, and you can type that form in search.

| Key | Meaning |
|---|---|
| `C0.A8.01.01_00000003` | Router 192.168.1.1, ifIndex 3 (readable `192.168.1.1_3`) |
| `CB.00.71.01_0000022C` | Router 203.0.113.1, ifIndex 556 |
| `0A.00.00.FE_0000F4DC` | Router 10.0.0.254, ifIndex 62684 |

The label is the interface name. It comes from IPFIX `IF_NAME`/`IF_DESC` (fields 82/83) in options records, from SNMP name resolution, or from a label you assign.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each flow updates an input key and an output key, so Total here is about 2× the flow traffic. |
| `<router>_00000000` | ifIndex 0. The exporter did not send `INPUT_SNMP`/`OUTPUT_SNMP`, or sent 0 (for example, locally originated or dropped traffic). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 1000 | 0 | Bytes of every flow where this interface is the input or the output interface. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 1000 | 0 | Bytes of flows whose input interface is this ifIndex. |
| 2 | Xmit | VT_RATE_COUNTER | Bps | 1000 | 0 | Bytes of flows whose output interface is this ifIndex. |
| 3 | Flows | VT_COUNTER | Flw | 1000 | 0 | Flow records that touched this interface (input or output). |
| 4 | Recv-Util | VT_GAUGE | Pct | 1000 | 0 | Recv × 8 × 100 / receive ifSpeed. Set at flush only when an ifSpeed attribute exists. |
| 5 | Xmit-Util | VT_GAUGE | Pct | 1000 | 0 | Xmit × 8 × 100 / transmit ifSpeed. Set at flush only when an ifSpeed attribute exists. |
| 6 | Recv-Xmit-Ratio | VT_GAUGE | Pct | 1000 | 0 | Recv × 100 / (Recv + Xmit). 100 means receive-only, 0 means transmit-only. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 8 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [FlowGens](/docs/guide/counter-groups/flowgens): totals per exporter.
- [SNMP-Interface](/docs/guide/counter-groups/snmp-interface): the same interface keys, measured by SNMP polling.
- [Flow-Link-ASN](/docs/guide/counter-groups/flow-link-asn): AS numbers per interface.
- [Interface Tracking](/docs/guide/ug/netflow/interface_tracker) creates filtered Hosts, Apps and NetworkLayerStats groups for one FlowIntfs key.
- You can create [crosskey groups](/docs/guide/ag/context/crosskey_countergroups) with FlowIntfs, such as Flow-ASN × Interface, Country × Interface, or FlowIntfs × Hosts, Apps, Flow-ASN or NetworkLayerStats. The interface drilldown shows these as tabs.
