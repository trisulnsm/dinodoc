# App-ID

Traffic by App-ID as exported by Palo Alto etc

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{9021F5D3-FEFB-401B-99EC-EF2ACD088578}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total       | 50        | 0            | VT_RATE_COUNTER | Bps     | Combined (inbound + outbound) bandwidth rate for traffic classified under this App-ID. |
| 1   | Download    | 50        | 0            | VT_RATE_COUNTER | Bps     | Inbound bandwidth rate — traffic classified under this App-ID entering the home network (e.g., a home-network host downloading from an external server). |
| 2   | Upload      | 50        | 0            | VT_RATE_COUNTER | Bps     | Outbound bandwidth rate — traffic classified under this App-ID leaving the home network (e.g., a home-network host sending data to an external server). |
| 3   | Transit     | 50        | 0            | VT_RATE_COUNTER | Bps     | Bandwidth rate for traffic classified under this App-ID that passes through the monitored network without originating or terminating on a home-network host. |
| 4   | Internal    | 50        | 0            | VT_RATE_COUNTER | Bps     | Bandwidth rate for traffic classified under this App-ID where both endpoints are inside the home network. |
| 5   | Flows                        | 50        | 0            | VT_COUNTER      | flws    | Total number of flow records observed for this App-ID within the interval. |
| 6   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | Reserved `VT_GAUGE` slot for a unique-value (cardinality) metric. Not currently mapped to any field for this counter group — placeholder, no data populated. |
| 7   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | Second reserved `VT_GAUGE` cardinality slot, identical in status to meter 6 — inactive, not instrumented for this group. |