# QOS-Traffic

Measures Cisco CBQOS pre-policy, post-policy, drop and queue counters polled over SNMP, keyed by QoS class ID and summed across interfaces.

| Property | Value |
|---|---|
| GUID | `{1AB9F248-1E49-4245-571A-55BCDA658843}` |
| Layer | External Data |
| Input | SNMP |
| Key type | CBQOS class ID (decimal) |
| Implementation | Lua — cg_qos_traffic.lua (group), snmp_qos_walkpoll_key.lua + async_tasks.lua (polling) (apps/analyzers/snmpqospoll) |
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
- For each meter, values from every interface and policy that resolve to the same class ID are added together into one key. The key holds no router IP, so the same class ID on two routers lands in one key.
- Class-map counters (OIDs `.166.1.15.1.1.x`) map to a class ID through `.166.1.5.1.1.2`. Queue counters (OIDs `.166.1.18.1.1.x`) map through `.166.1.5.1.1.4` and then `.166.1.5.1.1.2`. Rows that do not resolve to a class ID are dropped.

## Keys

One key is the CBQOS class ID. The group names [QoS-Class](/docs/guide/counter-groups/qos-class) as its resolver, so the UI shows the class-map name.

| Key | Meaning |
|---|---|
| `1593` | Class ID 1593, shown with its class-map name, e.g. `VOICE` |
| `288431494` | Class ID 288431494, e.g. `class-default` |

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

- [QoS-Class](/docs/guide/counter-groups/qos-class)
- [FlowIntf_bx_QOS](/docs/guide/counter-groups/flowintf-bx-qos)
- [SNMP-Interface](/docs/guide/counter-groups/snmp-interface)
