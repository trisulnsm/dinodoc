# Mac

Traffic per Ethernet MAC

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{4B09BD22-3B99-40FC-8215-94A430EA0A35}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Transmit        | 20        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate, in bytes per second, for traffic transmitted with this MAC address as the source. |
| 1   | Receive         | 20        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate, in bytes per second, for traffic received with this MAC address as the destination. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |