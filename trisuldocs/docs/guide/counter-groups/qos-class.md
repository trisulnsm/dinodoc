# QoS-Class

Holds the Cisco CBQOS class-map names, keyed by class ID, so that QoS-Traffic and FlowIntf_bx_QOS keys show readable class names.

| Property | Value |
|---|---|
| GUID | `{116888A7-23B4-4873-5691-E6E0806CCB11}` |
| Layer | External Data |
| Input | SNMP |
| Key type | CBQOS class ID (decimal) |
| Implementation | Lua — cg_qos_class.lua (group), snmp_qos_walkpoll_key.lua + async_tasks.lua (polling) (apps/analyzers/snmpqospoll) |
| Trisul App | snmpqospoll (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- This group is a label store. The poller never calls `update_counter` on it. It only calls `update_key_info` with the class name for each class ID.
- Class names come from a walk of `1.3.6.1.4.1.9.9.166.1.7.1.1.1` (cbQosCMName). The walk runs on the first poll and then every `MapRefreshPolls` polls (default 30).
- QoS-Traffic names this group as its resolver (`resolver_guid`). FlowIntf_bx_QOS uses it as the crosskey group.
- Class IDs come from each router. If two routers use the same class ID, the last name polled wins.

## Keys

One key is the class ID, which is the index of the cbQosCMName table. The label is the class-map name.

| Key | Meaning |
|---|---|
| `1593` | Class ID 1593. Label such as `VOICE` |
| `288431494` | Class ID 288431494. Label such as `class-default` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Present for every group. Stays empty here, because no counters are updated. |

## Meter list

All meters are defined but not populated by the current code.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Pre Policy | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Not populated by the current code. |
| 1 | Post Policy | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Not populated by the current code. |
| 2 | Drops | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Not populated by the current code. |
| 3 | Queue Buffer | VT_GAUGE | packets | 1000 | 0 | Not populated by the current code. |
| 4 | Queue Drops | VT_DELTA_RATE_COUNTER | packets | 1000 | 0 | Not populated by the current code. |
| 5 | Queue Drop Bytes | VT_DELTA_RATE_COUNTER | Bps | 1000 | 0 | Not populated by the current code. |
| 6 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [QOS-Traffic](/docs/guide/counter-groups/qos-traffic)
- [FlowIntf_bx_QOS](/docs/guide/counter-groups/flowintf-bx-qos)
