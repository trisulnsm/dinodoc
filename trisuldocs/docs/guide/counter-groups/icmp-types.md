# ICMP Types

Traffic by ICMP Type

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{FA6466E2-EA6A-4E75-8F39-ADE7708C6F46}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Bytes           | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic carrying this ICMP type. |
| 1   | Packets         | 50        | 0            | VT_RATE_COUNTER | Pps     | This meter reports the packet rate for traffic carrying this ICMP type. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |