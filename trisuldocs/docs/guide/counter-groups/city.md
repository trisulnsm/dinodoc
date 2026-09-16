# City

External Traffic by CITY

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{6D201FA3-6F8B-4F83-73F7-CB0B8A66EA2E}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION              | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | -------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload Bytes                 | 20        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic leaving the home network that is destined for hosts geolocated in this city. |
| 1   | Download Bytes               | 20        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic entering the home network that originates from hosts geolocated in this city. |
| 2   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |