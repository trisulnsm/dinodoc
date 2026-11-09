# OTT XKey

Defined by the OTT app as a place for OTT app crosskeys. The current code does not write to it.

| Property | Value |
|---|---|
| GUID | `{113091EA-CF82-46E0-DE38-9A8C42DD0279}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | None written |
| Implementation | Lua — ott_xkey.lua (apps/analyzers/ott) |
| Trisul App | ott (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- No script in the app calls `update_counter` with this GUID. The group exists but stays empty.
- Per-interface OTT traffic goes to the crosskey group **FlowIntf-BX-OTT** `{32A268B9-27BD-4661-9C9D-0A0D633C041D}` instead. The app creates it from `crosskey_counter_group1776691388438.json`, with [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs) as parent and [OTT Apps](/docs/guide/counter-groups/ott-apps) as crosskey.
- `flowapps.lua` fills FlowIntf-BX-OTT at flow flush. It looks up the Z IP in Passive DNS and matches the name against `appmap.lua`. For each match it updates the keys `<router>_<ifindex in>\<APP>` and `<router>_<ifindex out>\<APP>`, meter 0 with A→Z bytes and meter 1 with Z→A bytes.

## Keys

None. The current code writes no keys.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Present for every group. Stays empty here. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | bytes recv | VT_RATE_COUNTER | Bps | 100 | 0 | Short name `Bytes Receive`. Not populated by the current code. |
| 1 | bytes xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Short name `Bytes Transmit`. Not populated by the current code. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [OTT Apps](/docs/guide/counter-groups/ott-apps)
- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs)
