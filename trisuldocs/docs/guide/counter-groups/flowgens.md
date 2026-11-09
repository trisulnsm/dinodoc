# FlowGens

Counts the NetFlow, IPFIX and sFlow traffic reported by each flow exporter (router, switch or firewall), keyed by the exporter's IPv4 address.

| Property | Value |
|---|---|
| GUID | `{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv4 address of the flow exporter |
| Implementation | Native C++ — CPICGNetflowGen (trisul_probe/sysplugs/flowhandlers/PICGNetflowGen.cpp); updated by CPINetflowMeter and CPISFlowMeter |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **NetFlow v1/v5/v9 and IPFIX:** the key is the source IP of the UDP export packet. The probe updates the key once per export packet, after it has processed every record in that packet.
- **sFlow:** the key is the agent address inside the sFlow datagram, not the UDP source. The probe updates the key once per flow sample.
- Byte counts are multiplied by the sampling rate. The rate comes from the record, from the `SamplingRates` section of the NetFlow config, or from the sFlow `meanSkipCount`.
- Total, Flow Records and the IPv4/IPv6 meters count only records that pass the corruption check and every configured filter (interface, host, ASN, application). The version and record-type meters (7–14) count every record the probe parses.
- `MeterNetflowSources` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns this group on or off. In IPDR mode (`AppMode=ipdr`) the group is always on.

## Keys

One key per flow exporter.

| Key | Meaning |
|---|---|
| `C0.A8.01.01` | Exporter 192.168.1.1 |
| `CB.00.71.01` | Exporter 203.0.113.1 |
| `0A.00.00.FE` | Exporter 10.0.0.254 |

The UI shows the dotted IPv4 address, or a name if you assign one. To name routers from SNMP, use **SNMP resolve router and interface name** (see [Using SNMP](/docs/guide/ug/netflow/snmp)).

The probe sets these key attributes on each exporter key:

| Attribute | Meaning |
|---|---|
| `netflow.feed_type` | Comma-separated feed types seen: `NFv1`, `NFv5`, `NFv9`, `IPFIX`, `SFLOW`. |
| `netflow.sampling_rate` | Sampling rate learned from template field 34 or 50 (`SAMPLING_INTERVAL`, `FLOW_SAMPLER_RANDOM_INTERVAL`). |

The SNMP credentials you enter under **Netflow → Routers and Interfaces → SNMP Settings** are also stored as `snmp.*` attributes on these keys. The SNMP Poller app reads them from here.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each record updates exactly one exporter key, so Total here equals the flow traffic from all exporters. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Sum of sampling-adjusted byte counts in the records that passed all filters. For sFlow: frame length × skip count. |
| 1 | Flow Volume | VT_RATE_COUNTER | Bps | 50 | 0 | Size of the export payload itself: NetFlow/IPFIX payload length per packet, or sFlow sample data length. This is the bandwidth of the flow export, not of user traffic. |
| 2 | Flow Records | VT_RATE_COUNTER | Rps | 50 | 0 | Flow records (sFlow: flow samples) that passed all filters. |
| 3 | Post Filter Network BW | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes in records that passed all filters. Updated only when `FilterFlowASNInclude` or `FilterFlowASNExclude` is set. |
| 4 | Post Filter Flow Records | VT_RATE_COUNTER | Rps | 50 | 0 | Records that passed all filters. Updated only when an ASN include or exclude filter is set. |
| 5 | IPv4 Flows | VT_COUNTER | Flows | 50 | 0 | IPv4 flow records that passed all filters (NetFlow/IPFIX only). |
| 6 | IPv6 Flows | VT_COUNTER | Flows | 50 | 0 | IPv6 flow records that passed all filters (NetFlow/IPFIX only). |
| 7 | Template | VT_COUNTER | Recs | 50 | 0 | v9/IPFIX template records received. |
| 8 | SFlow | VT_COUNTER | Recs | 50 | 0 | sFlow flow samples received. |
| 9 | v5 Flows | VT_COUNTER | Recs | 50 | 0 | NetFlow v5 records received. |
| 10 | v9 Flows | VT_COUNTER | Recs | 50 | 0 | NetFlow v9 data records received. |
| 11 | IPFIX Flows | VT_COUNTER | Recs | 50 | 0 | IPFIX data records received. |
| 12 | Data | VT_COUNTER | Recs | 50 | 0 | v9 plus IPFIX data records received. |
| 13 | NAT Translations | VT_COUNTER | Recs | 50 | 0 | NAT event records received. |
| 14 | Template Options | VT_COUNTER | Recs | 50 | 0 | v9/IPFIX options template records received. |
| 15 | SYSLOG | VT_COUNTER | Recs | 50 | 0 | Not populated by the current code. |
| 16 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs): the same exporters broken down by interface.
- You can create [crosskey groups](/docs/guide/ag/context/crosskey_countergroups) that use FlowGens as the second group, such as Flow-ASN × Router, Flow-Prefix × Router or Country × Router.
- [NetFlow configuration file](/docs/guide/ref/netflow-config)
