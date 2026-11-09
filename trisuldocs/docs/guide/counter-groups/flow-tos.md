# Flow-TOS

Counts NetFlow/IPFIX traffic per DSCP code point, taken from the IP TOS byte in each flow record.

| Property | Value |
|---|---|
| GUID | `{965DDD07-F715-48D5-636B-A15106C9B502}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | DSCP value (2 hex digits) |
| Implementation | Lua — nf-tos.lua (trisul_probe/sysplugs/flowhandlers); updated by CPINetflowMeter (PINetflowMeter.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each NetFlow v1/v5/v9 or IPFIX record adds its bytes and one flow to the key for its DSCP.
- The DSCP comes from the first of these fields that the record carries. Ingress values take priority over post-policy values:

  | Priority | Source | Field | How DSCP is taken |
  |---|---|---|---|
  | 1 | v5 `tos`, or v9/IPFIX `ipClassOfService` | 5 | TOS byte >> 2 (the two ECN bits are dropped) |
  | 2 | IPFIX `ipDiffServCodePoint` | 195 | Used as is (already 6-bit DSCP) |
  | 3 | IPFIX `postIpDiffServCodePoint` | 98 | Used as is. This is the DSCP after any re-marking on the router. |

- If the record has none of these fields, traffic lands on `00` (CS0, best effort). sFlow does not update this group.
- `MeterTosAsDSCP` (default TRUE) in the [NetFlow config](/docs/guide/ref/netflow-config) turns the group on or off. FALSE stops the probe updating this group. It does not switch to keying by the raw TOS byte. IPDR mode turns it off.

## Keys

The key is the 6-bit DSCP value as two uppercase hex digits. nf-tos.lua supplies labels for common code points. Other values have no label.

| Key | Meaning |
|---|---|
| `00` | DSCP 0, label `CS0` (best effort) |
| `2E` | DSCP 46, label `CS5/EF` (expedited forwarding, voice) |
| `22` | DSCP 34, label `CS4/AF41-43` |
| `30` | DSCP 48, label `CS6` (network control) |

Labels defined in nf-tos.lua:

| Keys | Label |
|---|---|
| `00` | CS0 |
| `01` | LE |
| `08` `0A` `0C` `0E` | CS1/AF11-13 |
| `10` `12` `14` `16` | CS2/AF21-23 |
| `18` `1A` `1C` `1E` | CS3/AF31-33 |
| `20` `22` `24` `26` | CS4/AF41-43 |
| `28` `2E` | CS5/EF |
| `30` | CS6 |
| `38` | CS7 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per record, so this equals total NetFlow/IPFIX traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Sampling-adjusted bytes of records with this DSCP. |
| 1 | Flows | VT_COUNTER | Flws | 10 | 0 | Number of flow records with this DSCP. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Flow-VRF](/docs/guide/counter-groups/flow-vrf), [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs)
