# Unleash Apps

Demo of Rule based counter group, count your enterprise apps

## Counter group

| GUID                                     | TYPE    | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------- | ----------------- | --------------------- |
| `{FF889910-9293-AAA5-0028-883991889884}` | Ruleset | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE                | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ------------------- | ------- |-------------|
| 0   | Total                  | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the combined bandwidth rate for traffic matching this enterprise app rule. |
| 1   | Security Alerts        | 10        | 0            | VT_COUNTER          | Alerts  | This meter reports the number of security alerts associated with this enterprise app rule within the collection interval. |
| 2   | Into Homenet           | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the inbound bandwidth rate for traffic matching this enterprise app rule that is entering the home network. |
| 3   | Outof Homenet          | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the outbound bandwidth rate for traffic matching this enterprise app rule that is leaving the home network. |
| 4   | Connections            | 50        | 0            | VT_COUNTER          | Conns   | This meter reports the number of new connections established for this enterprise app rule within the collection interval. |
| 5   | Internal Homenet       | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the bandwidth rate for traffic matching this enterprise app rule where both endpoints are inside the home network. |
| 6   | Transit Homenet        | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the bandwidth rate for traffic matching this enterprise app rule that passes through the home network without originating or terminating on a home network host. |
| 7   | Active Conns           | 50        | 0            | VT_RUNNING_COUNTER  | Conns   | This meter reports the number of concurrently open connections matching this enterprise app rule at sample time. |
| 8   | Into Interface         | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter appears only when combined with a NetFlow Interface Tracker, and reports bandwidth matching this enterprise app rule that is ingressing the specified interface. |
| 9   | Outof Interface        | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter appears only when combined with a NetFlow Interface Tracker, and reports bandwidth matching this enterprise app rule that is egressing the specified interface. |
| 10  | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 11  | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 10. It is inactive and not instrumented for this group. |