# Remote Office

Per remote office branch monitor

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{664D68BF-5544-43CE-A895-50F2E179EA5A}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION   | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total               | 100       | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for traffic to and from this remote office branch. |
| 1   | Into Branch         | 100       | 0            | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic entering this remote office branch. |
| 2   | Out of Branch       | 100       | 0            | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic leaving this remote office branch. |
| 3   | Alerts              | 100       | 0            | VT_COUNTER      | Alerts  | This meter reports the number of alerts associated with this remote office branch within the collection interval. |
| 4   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 5   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 4. It is inactive and not instrumented for this group. |