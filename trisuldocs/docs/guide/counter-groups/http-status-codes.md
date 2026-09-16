# HTTP Status Codes

HTTP Status Codes

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{25E80A84-C175-4C01-977C-1411F5D10B56}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total           | 10        | 10           | VT_COUNTER | hits    | This meter reports the number of HTTP responses observed carrying this status code within the collection interval. |
| 1   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |