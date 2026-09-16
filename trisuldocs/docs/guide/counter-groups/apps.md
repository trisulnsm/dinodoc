# Apps

Application wise traffic

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE                | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | ------------------- | ------- |-------------|
| 0   | Total                        | 50        | 0            | VT_RATE_COUNTER     | Bps     | Combined bandwidth rate for traffic belonging to this application, sampled every 60 seconds. |
| 1   | Security Alerts              | 10        | 0            | VT_COUNTER          | Alerts  | Number of security alerts associated with this application within the collection interval. |
| 2   | Into Homenet                  | 50        | 0            | VT_RATE_COUNTER     | Bps     | Inbound bandwidth rate for this application's traffic entering the home network. |
| 3   | Outof Homenet                 | 50        | 0            | VT_RATE_COUNTER     | Bps     | Outbound bandwidth rate for this application's traffic leaving the home network. |
| 4   | Connections                   | 50        | 0            | VT_COUNTER          | Conns   | Number of new connections established for this application within the interval. |
| 5   | Internal Homenet              | 50        | 0            | VT_RATE_COUNTER     | Bps     | Bandwidth rate for this application's traffic where both endpoints are inside the home network. |
| 6   | Transit Homenet               | 50        | 0            | VT_RATE_COUNTER     | Bps     | Bandwidth rate for this application's traffic that passes through the home network without originating or terminating on a home-network host. |
| 7   | Active Conns                  | 50        | 0            | VT_RUNNING_COUNTER  | Conns   | Current number of open (concurrent) connections for this application at sample time — a running/live count, distinct from meter 4's per-interval count of newly established connections. |
| 8   | Into Interface                | 50        | 0            | VT_RATE_COUNTER     | Bps     | Inbound bandwidth rate for this application's traffic observed on the monitored interface. |
| 9   | Outof Interface               | 50        | 0            | VT_RATE_COUNTER     | Bps     | Outbound bandwidth rate for this application's traffic observed on the monitored interface. |
| 10  | Unused Cardinality counter    | 20        | 20           | VT_GAUGE            | Uniques | Reserved `VT_GAUGE` slot for a unique-value (cardinality) metric. Not currently mapped to any field for this counter group — placeholder, no data populated. |
| 11  | Unused Cardinality counter    | 20        | 20           | VT_GAUGE            | Uniques | Second reserved `VT_GAUGE` cardinality slot, identical in status to meter 10 — inactive, not instrumented for this group. |