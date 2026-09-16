# Base Domains

Traffic by Base Domains without CDN

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{74FE9532-EDEB-421E-BD92-B5C62E7F2346}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                         | 100       | 0            | VT_RATE_COUNTER | Bps     | This meter reports the total bandwidth rate for traffic associated with this base domain. Traffic served through a CDN is excluded from this counter group, matching the page's scope of base domains without CDN. |
| 1   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 2   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 1. It is inactive and not instrumented for this group. |