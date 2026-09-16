# MPLSStats

Per MPLS Activity Monitor

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{6C312435-80C1-401F-AEDD-090FF4F46212}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total bytes/sec         | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate, in bytes per second, for traffic carrying this MPLS label. |
| 1   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |