# Flow-APPID-NBAR

Traffic NBAR App ID

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{322AFE57-BA50-47B1-BE5C-EBC05BCC186B}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate for traffic identified as this NBAR application. |
| 1   | Alerts                         | 10        | 0            | VT_COUNTER      | Alts    | This meter reports the number of security alerts associated with this NBAR application within the collection interval. |
| 2   | Into Home                      | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate for traffic identified as this NBAR application that is entering the home network. |
| 3   | Outof Home                     | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate for traffic identified as this NBAR application that is leaving the home network. |
| 4   | Connections                    | 10        | 0            | VT_COUNTER      | Conns   | This meter reports the number of new connections established for this NBAR application within the collection interval. |
| 5   | Internal                       | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic identified as this NBAR application where both endpoints are inside the home network. |
| 6   | Transit                        | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic identified as this NBAR application that passes through the home network without originating or terminating on a home network host. |
| 7   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 8   | Unused Cardinality counter     | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 7. It is inactive and not instrumented for this group. |