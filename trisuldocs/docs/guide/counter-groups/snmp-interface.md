# SNMP-Interface

Traffic using SNMP input

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{9781DB2C-F78A-4F7F-A7E8-2B1A9A7BE71A}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION     | TOP COUNT | BOTTOM COUNT | TYPE                  | UNITS   | DESCRIPTION |
| --- | ----------------- | --------- | ------------ | --------------------- | ------- |-------------|
| 0   | Total BW              | 100       | 0            | VT_DELTA_RATE_ROUTER  | Bps     | This meter reports the combined receive and transmit bandwidth rate, in bytes per second, for this interface, derived from successive SNMP counter polls. |
| 1   | Recv BW               | 100       | 0            | VT_DELTA_RATE_ROUTER  | Bps     | This meter reports the receive bandwidth rate, in bytes per second, for this interface, derived from successive SNMP counter polls. |
| 2   | Transmit BW           | 100       | 0            | VT_DELTA_RATE_ROUTER  | Bps     | This meter reports the transmit bandwidth rate, in bytes per second, for this interface, derived from successive SNMP counter polls. |
| 3   | Recv Util             | 100       | 0            | VT_GAUGE              | Pct     | This meter reports the receive utilization of this interface as a percentage of its configured capacity, derived from SNMP counters. |
| 4   | Transmit Util         | 100       | 0            | VT_GAUGE              | Pct     | This meter reports the transmit utilization of this interface as a percentage of its configured capacity, derived from SNMP counters. |
| 5   | Unused Cardinality counter | 20    | 20           | VT_GAUGE              | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 6   | Unused Cardinality counter | 20    | 20           | VT_GAUGE              | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 5. It is inactive and not instrumented for this group. |