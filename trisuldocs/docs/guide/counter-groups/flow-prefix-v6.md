# Flow-Prefix-v6

Traffic by IPv6 Prefixes from the router RIB

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{467AE21F-F2B7-4509-EA69-514CF2352D36}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for traffic to and from this IPv6 prefix, as learned from the router's routing information base. |
| 1   | Recv from Upstream AS          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this IPv6 prefix received via an upstream (transit provider) AS. |
| 2   | Transmit to Upstream AS        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this IPv6 prefix transmitted via an upstream (transit provider) AS. |
| 3   | Prefixes Flows                 | 50        | 0            | VT_COUNTER      | Flws    | This meter reports the number of flow records observed for this IPv6 prefix within the collection interval. |
| 4   | Recv from Downstream AS        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this IPv6 prefix received via a downstream (customer) AS. |
| 5   | Transmit to Downstream AS      | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this IPv6 prefix transmitted via a downstream (customer) AS. |
| 6   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 7   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 6. It is inactive and not instrumented for this group. |