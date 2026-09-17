# VLANStats

Per VLAN Activity Monitor

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{0EC72E9E-3AD2-43FD-8173-74693EEA08D0}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------ | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total bytes/sec        | 20        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate, in bytes per second, for traffic on this VLAN in both directions. |
| 1   | Recv-Into-VLAN         | 20        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic entering this VLAN. |
| 2   | Xmit-To-VLAN           | 20        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic leaving this VLAN. |
| 3   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 4   | Unused Cardinality counter | 20    | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 3. It is inactive and not instrumented for this group. |