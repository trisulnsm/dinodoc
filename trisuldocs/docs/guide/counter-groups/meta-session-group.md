# Meta Session Group

Counts internal statistics of each session (flow) group: flow cache size, new, expired, terminated and flushed flows. Keyed by the session group GUID.

| Property | Value |
|---|---|
| GUID | `{594606BD-EEB2-4E0B-BAC4-84B7057088C8}` |
| Layer | System |
| Input | Internal |
| Key type | Session group GUID |
| Implementation | Native C++ — CPICGFlowMons (trisul_probe/src/sysplugs/monitors/PICGFlowMons.cpp) defines the group; values come from CXSessionGroup::GenMonitorTMS (stengine/XSessionGroup.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- At the end of each flush, every session group writes one row about its flow tracker to its own key.
- The counters cover the interval since the last flush and reset after each row.
- Master Size and MRU Size are taken at the start of the flush, before expired flows are removed.
- Each stats engine writes its own row for the same key. The counter meters add up across engines.

## Keys

One key is the GUID of the session group being monitored.

| Key | Meaning |
|---|---|
| `{99A78737-4B41-4387-8F31-8077DB917336}` | TCP/IP Sessions. Covers all IP flows: TCP, UDP, ICMP, GRE, ESP and others. |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval, across all session groups. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Master Size | VT_GAUGE | i | 0 | 0 | Flows in the flow cache at flush time. |
| 1 | MRU Size | VT_GAUGE | i | 0 | 0 | Flows in the most-recently-used index. Equal to Master Size in normal operation. |
| 2 | New | VT_COUNTER | i | 0 | 0 | Flows created in the interval. |
| 3 | Closed | VT_COUNTER | i | 0 | 0 | Not populated by the current code. |
| 4 | Expired | VT_COUNTER | i | 0 | 0 | Flows removed because they timed out. |
| 5 | Terminated | VT_COUNTER | i | 0 | 0 | Flows marked ended by the protocol, for example TCP FIN or RST. |
| 6 | Flushed | VT_COUNTER | i | 0 | 0 | Flows written to the hub. Includes the FlushedActive count. |
| 7 | FlushedActive | VT_COUNTER | i | 0 | 0 | Long-running flows written to the hub while still active. |
| 8 | Key Hits | VT_COUNTER | i | 0 | 0 | Updates that found an existing flow. |
| 9 | Heap mem | VT_GAUGE | i | 0 | 0 | Not populated by the current code. |
| 10 | Tail Prunes | VT_COUNTER | i | 0 | 0 | Not populated by the current code. |
| 11 | Hi Water Rej | VT_COUNTER | i | 0 | 0 | New flows refused because the group was at its hi-water mark in fixed hi-water mode. |
| 12 | After Term | VT_COUNTER | i | 0 | 0 | Not populated by the current code. |
| 13 | Flush USecs | VT_COUNTER | i | 0 | 0 | Time taken by the last flush of this session group, in microseconds. |
| 14 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 15 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Meta Counter Group](/docs/guide/counter-groups/meta-counter-group)
- [Aggregates](/docs/guide/counter-groups/aggregates) (Active Sessions meter)
