# Flow-ASN

Netflow ASN

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{120A3124-E2BB-47BD-6C64-71BBB861C428}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate across all traffic exchanged with this autonomous system, in both directions. |
| 1   | Recv from Upstream AS          | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic received from this autonomous system when it is acting as an upstream (transit provider) AS. |
| 2   | Transmit to Upstream AS        | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic transmitted to this autonomous system when it is acting as an upstream (transit provider) AS. |
| 3   | Recv from Downstream AS        | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic received from this autonomous system when it is acting as a downstream (customer) AS. |
| 4   | Transmit to Downstream AS      | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic transmitted to this autonomous system when it is acting as a downstream (customer) AS. |
| 5   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 6   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 5. It is inactive and not instrumented for this group. |