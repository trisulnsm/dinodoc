# Dir Mac

Traffic between two MACs

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{79F60A94-44BD-4C55-891A-77823D59161B}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for all traffic exchanged between the two MAC addresses in this conversation, in both directions. |
| 1   | A->Z                           | 0         | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic flowing from the A side MAC address to the Z side MAC address in this conversation. |
| 2   | Z->A                           | 0         | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic flowing from the Z side MAC address to the A side MAC address in this conversation. |
| 3   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 4   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 3. It is inactive and not instrumented for this group. |