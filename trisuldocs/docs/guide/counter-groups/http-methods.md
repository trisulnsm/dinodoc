# HTTP Methods

HTTP Methods

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{2A6957EB-4992-46CD-8E49-BE32318669D3}` | Native | 60                 | 300                    |

### Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total           | 20        | 10           | VT_COUNTER | hits    | This meter reports the number of HTTP requests observed using this HTTP method within the collection interval. |
| 1   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |