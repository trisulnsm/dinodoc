# Alert Signatures

Individual Alert Signatures

## Counter groups

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{A0FA9464-B496-4A20-A9AB-4D2D09AFF902}` | Native | 300               | 300                  |

## Meter list

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Total Alerts                | 20        | 0            | VT_COUNTER | Count   | Total number of IDS alerts recorded for this individual signature within each 300-second (5-minute) collection interval. `VT_COUNTER` type — a running count for the bucket, not a cumulative all-time total. |
| 1   | Unused Cardinality counter  | 20        | 20           | VT_GAUGE   | Uniques | Reserved `VT_GAUGE` slot for a unique-value (cardinality) metric. Not currently mapped to any field for this counter group, so no data populates this meter — placeholder carried over from the counter-group template rather than something specific to this signature. |
| 2   | Unused Cardinality counter  | 20        | 20           | VT_GAUGE   | Uniques | Second reserved `VT_GAUGE` cardinality slot, identical in status to meter 1 — inactive, not instrumented for this group. |