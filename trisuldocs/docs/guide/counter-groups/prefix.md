# Prefix

External Traffic by Prefix

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{2838D2E8-EABC-4050-90C4-8AE2589AAB25}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload Bytes           | 20        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate, in bytes per second, for traffic leaving the home network that is destined for hosts in this prefix. |
| 1   | Download Bytes         | 20        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate, in bytes per second, for traffic entering the home network that originates from hosts in this prefix. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |