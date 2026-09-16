# Flow-IP-NextHop

Netflow IP-NextHop

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{79693CA3-ED3C-43B3-E12A-A3F64B125E4F}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for traffic routed via this IP next hop address. |
| 1   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |