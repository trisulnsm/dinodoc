# Long Fat Tail Hosts

Traffic by Long Fat Tail Web

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{27870892-5B20-4555-8BA2-2742F3DD0F04}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION     | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total Traffic         | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate, in bytes per second, for traffic associated with this long tail web host. |
| 1   | Hits                  | 50        | 40           | VT_COUNTER      | Hits    | This meter reports the number of hits recorded for this long tail web host within the collection interval. |
| 2   | Unused Cardinality counter | 20   | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20   | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |