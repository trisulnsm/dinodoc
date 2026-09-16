# HTTP Hosts

Traffic by HTTP Host Headers

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total Traffic          | 50        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for HTTP traffic associated with this Host header value. |
| 1   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |