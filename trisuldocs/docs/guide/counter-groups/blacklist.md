# Blacklist

Domain, URL, and IP Blacklisting

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{6255BD85-2DCB-49E7-AF1F-1267AAF4DCA1}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION            | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ------------------------ | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Hits                       | 50        | 0            | VT_COUNTER | Hits    | This meter reports the number of times traffic matched an entry on the domain, URL, or IP blacklist within the collection interval. |
| 1   | Blacklist connections      | 0         | 0            | VT_COUNTER | Conns   | This meter reports the number of connections involving a blacklisted domain, URL, or IP address within the collection interval. |
| 2   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |