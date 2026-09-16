# Flow-Link-ASN

Netflow Link ASN

# Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{1D86CAB7-B4C4-433E-BCB9-C779A4244D70}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION              | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | -------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Recv from AS on Link         | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic received from this autonomous system on this specific network link. |
| 1   | Transmit to AS on Link       | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate for traffic transmitted to this autonomous system on this specific network link. |
| 2   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter   | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |