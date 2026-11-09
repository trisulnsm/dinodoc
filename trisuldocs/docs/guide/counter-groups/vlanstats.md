# VLANStats

Counts bytes per 802.1Q VLAN, keyed by the VLAN ID in 4-digit hex.

| Property | Value |
|---|---|
| GUID | `{0EC72E9E-3AD2-43FD-8173-74693EEA08D0}` |
| Layer | L2 Link |
| Input | Packets, Flows |
| Key type | VLAN ID (4 hex digits) |
| Implementation | Native C++ — CPICGVLAN (group), CPIMacStats (packet metering) (trisul_probe/src/sysplugs/counters); CPISFlowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every Ethernet II frame updates one key with its wire length. A frame with EtherType `8100` goes to its VLAN ID. Any other frame goes to `UNTG`.
- Only the outer 802.1Q tag is counted. A double-tagged `8100` frame counts under its outer VLAN ID. QinQ frames with an outer EtherType of `88A8` or `9100` count as `UNTG`.
- The key is the full 12-bit VLAN ID (0–4095).
- **sFlow** (policy `MeterVLAN`, default on): each sample adds its bytes to the input VLAN (meters 0 and 1) and to the output VLAN (meters 0 and 2). The full 12-bit ID is used.
- NetFlow/IPFIX does not update this group.

## Keys

One key is the VLAN ID as 4 uppercase hex digits. No labels are preloaded.

| Key | Meaning |
|---|---|
| `0064` | VLAN 100 |
| `000A` | VLAN 10 |
| `01F4` | VLAN 500 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. In packet mode meter 0 equals total frame bytes. In sFlow mode each sample updates two keys, so meter 0 is 2× sampled bytes. |
| `UNTG` | Frames without an 802.1Q tag (packet mode). |
| `0000` | sFlow samples with no VLAN on that side. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total bytes/sec | VT_RATE_COUNTER | Bps | 20 | 0 | Bytes on this VLAN. |
| 1 | Recv-Into-VLAN | VT_RATE_COUNTER | Bps | 20 | 0 | sFlow only. Bytes where this is the input VLAN. |
| 2 | Xmit-To-VLAN | VT_RATE_COUNTER | Bps | 20 | 0 | sFlow only. Bytes where this is the output VLAN. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Mac](/docs/guide/counter-groups/mac)
- [LinkLayerStats](/docs/guide/counter-groups/link-layer-stats)
