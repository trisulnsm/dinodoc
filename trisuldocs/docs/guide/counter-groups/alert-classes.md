# Alert Classes

IDS Alert Classfication

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{20BC4345-37F0-44D0-ABFF-3BED97363CB1}` | Native | 300               | 300                  |

## Meter List

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | -------------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total Alerts               | 20        | 0            | VT_COUNTER | Count   | Total number of IDS alerts generated for this alert class per 5-minute (300s) interval |
| 1   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | Reserved cardinality gauge. Tracks unique source values (e.g., distinct source hosts/IPs) triggering alerts in this class; not currently populated |
| 2   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | Reserved cardinality gauge. Tracks unique destination values (e.g., distinct destination hosts/IPs) triggering alerts in this class; not currently populated |
