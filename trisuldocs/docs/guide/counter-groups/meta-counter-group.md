# Meta Counter Group

Second order stats for counters

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{4D88CC23-2883-4DEA-A313-A23B60FE8BDA}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Master Size            | 0         | 0            | VT_COUNTER | keys    | This meter reports the total size of the master key cache for this counter group, representing the total number of active keys at the end of the streaming window. |
| 1   | MRU Size               | 0         | 0            | VT_COUNTER | keys    | This meter reports the size of the most recently used cache for this counter group. |
| 2   | Pending KU Size        | 0         | 0            | VT_COUNTER | keys    | This meter reports the number of key updates currently pending and not yet flushed for this counter group. |
| 3   | Flush US               | 0         | 0            | VT_GAUGE   | usec    | This meter reports the number of microseconds taken to flush data to the database for this counter group. |
| 4   | Flush Keys             | 0         | 0            | VT_COUNTER | keys    | This meter reports the number of keys written out during flush operations for this counter group. |
| 5   | New Keys               | 0         | 0            | VT_COUNTER | hits    | This meter reports the number of new keys created for this counter group within the collection interval. |
| 6   | Key Hits               | 0         | 0            | VT_COUNTER | hits    | This is an internal metric and can be ignored. |
| 7   | Unique Keys            | 0         | 0            | VT_COUNTER | keys    | This meter reports the number of distinct keys currently tracked for this counter group. |
| 8   | Heap mem               | 0         | 0            | VT_COUNTER | B       | This is an internal metric and can be ignored. |
| 9   | Tail Prunes            | 0         | 0            | VT_COUNTER | hits    | This is an internal metric and can be ignored. |
| 10  | Hi Water Rej           | 0         | 0            | VT_COUNTER | hits    | This meter reports rejections that occur when this counter group is operating in fixed hi water mode, where only a fixed number of unique keys are accepted in any one minute window. This behavior can be adjusted using the corresponding hi water and memcap policy settings. |
| 11  | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 12  | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 11. It is inactive and not instrumented for this group. |