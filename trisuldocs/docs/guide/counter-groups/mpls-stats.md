# MPLSStats

Counts bytes per MPLS label, keyed by the top label of the stack in 5-digit hex.

| Property | Value |
|---|---|
| GUID | `{6C312435-80C1-401F-AEDD-090FF4F46212}` |
| Layer | L2 Link |
| Input | Packets |
| Key type | MPLS label (5 hex digits) |
| Implementation | Native C++ — CPICGMPLS (trisul_probe/src/sysplugs/counters/PICGMPLS.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Every packet that the MPLS protocol handler parses adds its wire length to the key of its top (outermost) label. Inner labels are not counted.
- The handler treats the payload after the bottom-of-stack label as IPv4.
- NetFlow/IPFIX and sFlow do not update this group.

## Keys

One key is the 20-bit label value as 5 uppercase hex digits. There are no labels.

| Key | Meaning |
|---|---|
| `00010` | Label 16 |
| `003E8` | Label 1000 |
| `49310` | Label 299792 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each MPLS packet updates one key, so meter 0 equals total MPLS bytes. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total bytes/sec | VT_RATE_COUNTER | Bps | 50 | 0 | Wire bytes of packets with this top label. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [LinkLayerStats](/docs/guide/counter-groups/link-layer-stats) (key `8847`)
