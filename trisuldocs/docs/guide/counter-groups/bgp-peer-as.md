# BGP-Peer AS

Peer AS

## Counter Groups

| GUID                                     | TYPE   | Bucket Size (secs) | Topper Bucket (Secs): |
| ---------------------------------------- | ------ | ------------------ | ---------------------- |
| `{A643654F-2BA3-4832-4FF1-43EBDDE6E655}` | Native | 60                  | 300                     |

## Meter List

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Upload to AS                  | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic leaving the home network that is exchanged with this BGP peer autonomous system. |
| 1   | Download from AS              | 100       | 10           | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic entering the home network that is exchanged with this BGP peer autonomous system. |
| 2   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter    | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |