# User ID

Traffic by User-ID as exported by Palo Alto etc

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{86A8880D-F4B2-4E49-A4FA-718880CAA976}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total           | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate, in bytes per second, for traffic attributed to this User-ID. |
| 1   | Download        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic attributed to this User-ID that is entering the home network. |
| 2   | Upload          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic attributed to this User-ID that is leaving the home network. |
| 3   | Transit         | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic attributed to this User-ID that passes through the home network without originating or terminating on a home network host. |
| 4   | Internal        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic attributed to this User-ID where both endpoints are inside the home network. |
| 5   | Flows           | 50        | 0            | VT_COUNTER      | flws    | This meter reports the number of flow records observed for this User-ID within the collection interval. |
| 6   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 7   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 6. It is inactive and not instrumented for this group. |