# MITRE Tactic

Counts of Tactic used

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{70703134-26E7-4A41-7A29-46DFC85C3778}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total Alerts            | 10        | 0            | VT_COUNTER | alerts  | This meter reports the number of alerts associated with this MITRE ATT&CK tactic within the collection interval. |
| 1   | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |