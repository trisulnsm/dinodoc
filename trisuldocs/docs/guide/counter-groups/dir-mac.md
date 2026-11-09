# Dir Mac

Counts bytes per directed MAC pair (source MAC to destination MAC).

| Property | Value |
|---|---|
| GUID | `{79F60A94-44BD-4C55-891A-77823D59161B}` |
| Layer | L2 Link |
| Input | Packets, Flows |
| Key type | MAC pair string |
| Implementation | Native C++ — CPICGDirMac (group), CPIMacStats (packet metering) (trisul_probe/src/sysplugs/counters); CPISFlowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every Ethernet II frame adds its wire length to the key `<source MAC> -><destination MAC>`. Policy `MeterMACPairs` in `MacCounterPolicy.xml` (default true) turns this off.
- **sFlow:** each sample updates the same key format when `MeterMAC` is on.
- NetFlow/IPFIX does not update this group.
- The key is directional. Traffic from A to B and from B to A goes to two different keys.

## Keys

One key is 37 characters: the source MAC, the literal ` ->`, and the destination MAC, with no space after `->`. There is no label.

| Key | Meaning |
|---|---|
| `00:1B:21:3A:4F:10 ->00:00:0C:07:AC:01` | Host to its HSRP gateway |
| `00:00:0C:07:AC:01 ->00:1B:21:3A:4F:10` | Return traffic from the gateway (separate key) |
| `00:1B:21:3A:4F:10 ->FF:FF:FF:FF:FF:FF` | Broadcasts sent by the host |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each frame updates one key, so meter 0 equals total frame bytes. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes in frames from the first MAC to the second MAC of the key. |
| 1 | A->Z | VT_RATE_COUNTER | Bps | 0 | 0 | Not populated by the current code. |
| 2 | Z->A | VT_RATE_COUNTER | Bps | 0 | 0 | Not populated by the current code. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Mac](/docs/guide/counter-groups/mac)
