# BGP-Origin AS

Origin AS

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{3950AB76-3C3A-40EE-5C94-80A87EE28D53}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload to AS                  | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic leaving the home network that is destined for this origin autonomous system. |
| 1   | Download from AS              | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic entering the home network that originates from this origin autonomous system. |
| 2   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |