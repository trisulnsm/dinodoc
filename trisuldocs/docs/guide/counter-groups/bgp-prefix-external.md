# BGP-Prefix External

External prefixes

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{C26520C4-DB9D-49EC-5D8B-35AD39951E36}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload - Xmit         | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the outbound (transmit) bandwidth rate for traffic leaving the home network that is destined for this external BGP prefix. |
| 1   | Download - Recv       | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the inbound (receive) bandwidth rate for traffic entering the home network that originates from this external BGP prefix. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |