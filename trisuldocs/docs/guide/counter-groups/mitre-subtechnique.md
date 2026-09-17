# MITRE Subtechnique

Counts of Subtechnique used

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{A2B72E5D-9E80-4796-23A9-618ABCEE1D57}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total Alerts            | 10        | 0            | VT_COUNTER | alerts  | This meter reports the number of alerts associated with this MITRE ATT&CK subtechnique within the collection interval. |
| 1   | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |