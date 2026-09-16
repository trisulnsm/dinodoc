# FlowIntfs

Flow interface traffic

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{C0B04CA7-95FA-44EF-8475-3835F3314761}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                  | 1000      | 0            | VT_RATE_COUNTER | Bps     | This meter reports the combined bandwidth rate, received plus transmitted, for this interface. |
| 1   | Recv                   | 1000      | 0            | VT_RATE_COUNTER | Bps     | This meter reports the inbound bandwidth rate received on this interface. |
| 2   | Xmit                   | 1000      | 0            | VT_RATE_COUNTER | Bps     | This meter reports the outbound bandwidth rate transmitted on this interface. |
| 3   | Flows                  | 100       | 0            | VT_COUNTER      | Flw     | This meter reports the number of flow records observed on this interface within the collection interval. |
| 4   | Recv-Util              | 100       | 0            | VT_GAUGE        | Pct     | This meter reports the receive utilization of this interface as a percentage of its configured capacity. |
| 5   | Xmit-Util              | 100       | 0            | VT_GAUGE        | Pct     | This meter reports the transmit utilization of this interface as a percentage of its configured capacity. |
| 6   | Recv-Xmit-Ratio        | 1000      | 0            | VT_GAUGE        | Pct     | This meter reports the ratio of received to transmitted traffic on this interface, expressed as a percentage. |
| 7   | Unused Cardinality counter | 20   | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 8   | Unused Cardinality counter | 20   | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 7. It is inactive and not instrumented for this group. |