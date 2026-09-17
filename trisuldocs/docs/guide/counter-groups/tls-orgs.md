# TLS Orgs

Traffic by SSL/TLS Orgs

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{432D7552-0363-4640-9CC5-23E4CA8410EA}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total Traffic          | 50        | 20           | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate, in bytes per second, for TLS traffic associated with this certificate organization. |
| 1   | Hits                   | 50        | 20           | VT_COUNTER      | hits    | This meter reports the number of TLS handshakes observed carrying this certificate organization within the collection interval. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |