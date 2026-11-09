# Meta Counter Group

Counts internal statistics of every other counter group (keys in memory, new keys, flush time), keyed by that group's GUID.

| Property | Value |
|---|---|
| GUID | `{4D88CC23-2883-4DEA-A313-A23B60FE8BDA}` |
| Layer | System |
| Input | Internal |
| Key type | Counter group GUID |
| Implementation | Native C++ — CPICGCounterMons (trisul_probe/src/sysplugs/monitors/PICGCounterMons.cpp) defines the group; values come from CXCounterGroup::GenMonitorTMS (stengine/XCounterGroup.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- At the end of each flush, every counter group writes one row about itself to its own key in this group.
- A group that has never been updated since the probe started writes nothing.
- This group and Meta Session Group do not report on themselves.
- Each stats engine writes its own row for the same key. The counter meters add up across engines.
- For Internal Hosts (`{889900CC-0063-11A5-8380-FEBDBABBDBEA}`), meters 0 and 1 count only hosts with Transmit bytes in the current or previous bucket. This keeps scanned but unused internal IPs out of the count.

## Keys

One key is the GUID of the counter group being monitored. The label is the group name.

| Key | Meaning |
|---|---|
| `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` | Hosts |
| `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}` | Apps |
| `{4B09BD22-3B99-40FC-8215-94A430EA0A35}` | Mac |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval: the total across all monitored groups, for example all keys in memory across the probe. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Master Size | VT_COUNTER | keys | 0 | 0 | Keys held in memory for the group. |
| 1 | MRU Size | VT_COUNTER | keys | 0 | 0 | Keys in the most-recently-used index. Equal to Master Size in normal operation. |
| 2 | Pending KU Size | VT_COUNTER | keys | 0 | 0 | Key label updates waiting to be sent to the hub. |
| 3 | Flush US | VT_GAUGE | usec | 0 | 0 | Time taken by the last flush of this group. |
| 4 | Flush Keys | VT_COUNTER | keys | 0 | 0 | Keys written in the last flush. |
| 5 | New Keys | VT_COUNTER | hits | 0 | 0 | Keys created in the interval. |
| 6 | Key Hits | VT_COUNTER | hits | 0 | 0 | Updates that found an existing key. |
| 7 | Unique Keys | VT_COUNTER | keys | 0 | 0 | Distinct keys updated in the interval (HyperLogLog estimate). |
| 8 | Heap mem | VT_GAUGE | B | 0 | 0 | Not populated by the current code (always 0). |
| 9 | Tail Prunes | VT_COUNTER | hits | 0 | 0 | Least-recently-used keys dropped in the interval. Keys are dropped when the group goes over its high-water key count and is trimmed back to the low-water count. |
| 10 | Hi Water Rej | VT_COUNTER | hits | 0 | 0 | New keys refused in the interval. Only crosskey groups refuse keys; their updates still go to `SYS:GROUP_TOTALS`. Always 0 for other groups. |
| 11 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 12 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Meta Session Group](/docs/guide/counter-groups/meta-session-group)
- [Perf-Stats](/docs/guide/counter-groups/perf-stats)
- [Tune Counter Groups](/docs/guide/ag/context/countergroup_tuning)
