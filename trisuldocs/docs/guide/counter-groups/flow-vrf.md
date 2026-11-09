# Flow-VRF

Counts NetFlow v9/IPFIX traffic per VRF, keyed by the VRF ID that the router exports in each flow record.

| Property | Value |
|---|---|
| GUID | `{7FAB8F84-C580-424B-2BA4-B2546D2DB15A}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | VRF ID string |
| Implementation | Lua — nf-vrf.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each v9/IPFIX record that carries field 234 (`ingressVRFID`) adds its bytes to the key for that VRF.
- Records without field 234 are **not** counted. There is no "no VRF" key. NetFlow v5 and sFlow do not update this group.
- To populate the group, configure the router to export the ingress VRF ID in its flow template.
- `MeterVRF` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns it on or off. IPDR mode turns it off.

## Keys

The key is `VRF:` followed by the VRF ID in decimal. The probe does not set a label. Assign names with **Set Label/Edit** (see [Name Resolution](/docs/guide/ug/cg/resolve)).

| Key | Meaning |
|---|---|
| `VRF:0` | VRF ID 0, as exported by the router |
| `VRF:1` | VRF ID 1 |
| `VRF:1610612737` | VRF ID 1610612737 (0x60000001) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals the traffic of records that carry a VRF ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Sampling-adjusted bytes of records with this VRF ID. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs), [Flow-TOS](/docs/guide/counter-groups/flow-tos)
