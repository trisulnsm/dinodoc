# HTTP Content Types

Traffic by HTTP Content Types

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{C0C9757F-2005-4CC5-BB96-D72F607E6188}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total Traffic          | 30        | 30           | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for HTTP traffic classified under this content type. |
| 1   | Hits                   | 30        | 30           | VT_COUNTER      | hits    | This meter reports the number of HTTP hits observed for this content type within the collection interval. |
| 2   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |