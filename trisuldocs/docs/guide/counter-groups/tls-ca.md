# TLS CAs

Traffic by Cert Authorities

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{15856A98-7F87-46D7-84D2-18DD549F8A6F}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | ---------- | ------- |-------------|
| 0   | Inter CA        | 50        | 20           | VT_COUNTER | hits    | This meter reports the number of TLS handshakes observed where this intermediate certificate authority appeared in the certificate chain within the collection interval. |
| 1   | Root CA         | 50        | 20           | VT_COUNTER | hits    | This meter reports the number of TLS handshakes observed where this root certificate authority appeared in the certificate chain within the collection interval. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20 | 20    | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |