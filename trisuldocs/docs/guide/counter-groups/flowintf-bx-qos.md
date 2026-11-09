# FlowIntf_bx_QOS

Measures Cisco CBQOS pre-policy, post-policy, drop and queue counters polled over SNMP, keyed by router interface and QoS class ID.

| Property | Value |
|---|---|
| GUID | `{D3F7A892-4E1B-4C6D-8A5F-2E1C9B7D4A63}` |
| Layer | External Data |
| Input | SNMP |
| Key type | Crosskey: router interface \\ class ID |
| Implementation | Lua — cg_flowintf_bx_qos.lua (group), snmp_qos_walkpoll_key.lua + async_tasks.lua (polling) (apps/analyzers/snmpqospoll) |
| Trisul App | snmpqospoll (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `snmp_qos_walkpoll_key.lua` reads SNMP agents from the SNMP agent database (`snmp.*` key attributes). It polls only agents with `snmp.qosenabled` set to `true` or `1`, SNMP v2c (with a community) or v3, that hash to this probe engine.
- Every `ResolutionSeconds` (default 60) an async task runs `snmpbulkwalk` (`snmpwalk` for v1) against the Cisco CBQOS MIB. You need the net-snmp tools on the probe.
- Class names and index maps (OIDs `.166.1.7.1.1.1`, `.166.1.5.1.1.2`, `.166.1.5.1.1.4`, `.166.1.1.1.1.4`) are walked on the first poll and then every `MapRefreshPolls` polls (default 30).
- Counter values are raw cumulative SNMP counters. The `VT_DELTA_RATE_COUNTER` meters turn them into a rate: (this value − previous value) ÷ bucket seconds. Zero values are not sent.
- If the class-name walk returns nothing, the app raises a "SNMP QoS Poll Failed" alert instead of updating counters.
- You can override `ResolutionSeconds`, `MapRefreshPolls`, `DebugMode` and `IsIPEnabled` in `config/trisulnsm_snmpqospoll.lua` under the probe context directory.
- The poller writes the crosskey directly with `update_counter`. Values from several policies on the same interface and class are added together.
- The app also ships `FlowIntf_bx_QOS.json`, a crosskey definition with the same GUID. It names [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs) as parent and [QoS-Class](/docs/guide/counter-groups/qos-class) as crosskey, so each half of the key resolves to an interface name and a class name.
- The interface is the ifIndex from `.166.1.1.1.1.4` (cbQosIfIndex). If that map has no entry, the CBQOS policy index is used in its place.

## Keys

One key is `<router IP key>_<ifIndex as 8 hex digits>\<class ID>`. The part before the backslash has the same format as a FlowIntfs key.

| Key | Meaning |
|---|---|
| `C0.A8.01.01_0000000A\1593` | Router 192.168.1.1, ifIndex 10, class ID 1593 |
| `0A.00.00.FE_00000003\288431494` | Router 10.0.0.254, ifIndex 3, class ID 288431494 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Gets every update made to any key. For `VT_DELTA_RATE_COUNTER` and `VT_GAUGE` meters the totals item keeps the last raw value written, not a sum, so it is not meaningful here. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Pre Policy | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Short name `bytes`. Fed from OID `1.3.6.1.4.1.9.9.166.1.15.1.1.10`. <!-- TODO(verify): in CISCO-CLASS-BASED-QOS-MIB .15.1.1.10 is cbQosCMPostPolicyByte64 and .6 is cbQosCMPrePolicyByte64; the code appears to swap meters 0 and 1 --> |
| 1 | Post Policy | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Short name `bytes`. Fed from OID `1.3.6.1.4.1.9.9.166.1.15.1.1.6`. |
| 2 | Drops | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Short name `bytes`. Fed from OID `1.3.6.1.4.1.9.9.166.1.15.1.1.16` (class-map drop bytes). |
| 3 | Queue Buffer | VT_GAUGE | packets | 1000 | 0 | Short name `pkts`. Last value of OID `1.3.6.1.4.1.9.9.166.1.18.1.1.1` in the bucket. <!-- TODO(verify): .18.1.1.1 is cbQosQueueingCurrentQDepthOverflow in the MIB --> |
| 4 | Queue Drops | VT_DELTA_RATE_COUNTER | packets | 1000 | 0 | Short name `pkts`. Fed from OID `1.3.6.1.4.1.9.9.166.1.18.1.1.8`. <!-- TODO(verify): .18.1.1.8 is cbQosQueueingDiscardByte in the MIB, not packets --> |
| 5 | Queue Drop Bytes | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Short name `bytes`. Fed from OID `1.3.6.1.4.1.9.9.166.1.18.1.1.4`. <!-- TODO(verify): .18.1.1.4 is cbQosQueueingMaxQDepthOverflow in the MIB --> |
| 6 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [QOS-Traffic](/docs/guide/counter-groups/qos-traffic)
- [QoS-Class](/docs/guide/counter-groups/qos-class)
- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs)
