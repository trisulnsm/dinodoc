# Organization

Per remote office org

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{3A597F63-29C0-44AF-A7EF-641897D68693}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE                 | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | -------------------- | ------- |-------------|
| 0   | Total                  | 100       | 0            | VT_RATE_COUNTER      | Bps     | This meter reports the combined bandwidth rate for traffic to and from this remote office organization. |
| 1   | Into Org               | 100       | 0            | VT_RATE_COUNTER      | Bps     | This meter reports the inbound bandwidth rate for traffic entering this remote office organization. |
| 2   | Out of Org             | 100       | 0            | VT_RATE_COUNTER      | Bps     | This meter reports the outbound bandwidth rate for traffic leaving this remote office organization. |
| 3   | Alerts                 | 100       | 0            | VT_COUNTER           | Alerts  | This meter reports the number of alerts associated with this remote office organization within the collection interval. |
| 4   | Unused Cardinality counter | 20    | 20           | VT_GAUGE             | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 5   | Unused Cardinality counter | 20    | 20           | VT_GAUGE             | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 4. It is inactive and not instrumented for this group. |