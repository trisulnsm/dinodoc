# Alert Priorities

IDS Alert Priorities

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{9EFAFDD0-6CBB-4C04-8B13-2C8E0A9D3F85}` | Native | 300               | 300                  |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | -------------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total Alerts               | 20        | 0            | VT_COUNTER | Count   | Total number of IDS alerts recorded at this priority level within each 300-second (5-minute) collection interval. `VT_COUNTER` type — a running count for the bucket, not a cumulative all-time total. |
| 1   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | Reserved `VT_GAUGE` slot for a unique-value (cardinality) metric. Not currently mapped to any field for this counter group, so no data populates this meter — appears to be a placeholder carried over from the counter-group template rather than something specific to alert priority. |
| 2   | Unused Cardinality counter | 20        | 20           | VT_GAUGE   | Uniques | Second reserved `VT_GAUGE` cardinality slot, identical in status to meter 1 — inactive, not instrumented for this group. |
