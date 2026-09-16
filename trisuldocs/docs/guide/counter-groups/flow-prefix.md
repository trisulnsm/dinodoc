# Flow-Prefix

Traffic by Prefixes from the router RIB

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{2BE2A3B6-613D-4216-0737-3684E824EA33}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for traffic to and from this IP prefix, as learned from the router's routing information base. |
| 1   | Recv from Upstream AS          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this prefix received via an upstream (transit provider) AS. |
| 2   | Transmit to Upstream AS        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this prefix transmitted via an upstream (transit provider) AS. |
| 3   | Prefixes Flows                 | 50        | 0            | VT_COUNTER      | Flws    | This meter reports the number of flow records observed for this prefix within the collection interval. |
| 4   | Recv from Downstream AS        | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this prefix received via a downstream (customer) AS. |
| 5   | Transmit to Downstream AS      | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic to this prefix transmitted via a downstream (customer) AS. |
| 6   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 7   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 6. It is inactive and not instrumented for this group. |