# Flow Gens

Flow generator traffic

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION               | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | --------------------------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total                          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the total bandwidth rate represented in all flow, template, and log records received from this flow generator, across every protocol and record type. |
| 1   | Flow Volume                    | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate of network traffic volume represented specifically within flow data records received from this flow generator. |
| 2   | Flow Records                   | 50        | 0            | VT_RATE_COUNTER | Rps     | This meter reports the rate of flow records received from this flow generator, in records per second. |
| 3   | Post Filter Bandwidth          | 50        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the bandwidth rate remaining after Trisul applies its configured filtering rules to traffic reported by this flow generator. |
| 4   | Post Filter Flow Records       | 50        | 0            | VT_RATE_COUNTER | Rps     | This meter reports the rate of flow records remaining after Trisul applies its configured filtering rules to traffic reported by this flow generator, in records per second. |
| 5   | IPv4 Flows                     | 50        | 0            | VT_COUNTER      | Flows   | This meter reports the number of IPv4 flow records received from this flow generator within the collection interval. |
| 6   | IPv6 Flows                     | 50        | 0            | VT_COUNTER      | Flows   | This meter reports the number of IPv6 flow records received from this flow generator within the collection interval. |
| 7   | Template                       | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of template records received from this flow generator within the collection interval. Template records define the field layout used by subsequent data records in NetFlow v9 and IPFIX. |
| 8   | SFlow                          | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of sFlow records received from this flow generator within the collection interval. |
| 9   | v5 Flows                       | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of NetFlow v5 records received from this flow generator within the collection interval. |
| 10  | v9 Flows                       | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of NetFlow v9 records received from this flow generator within the collection interval. |
| 11  | IPFIX Flows                    | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of IPFIX records received from this flow generator within the collection interval. |
| 12  | Data                           | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of data records received from this flow generator within the collection interval, as distinct from template and options template records. |
| 13  | NAT Translations                | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of NAT translation event records received from this flow generator within the collection interval. |
| 14  | Template Options                | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of options template records received from this flow generator within the collection interval. Options template records describe metadata such as sampling parameters, separately from regular data templates. |
| 15  | SYSLOG                          | 50        | 0            | VT_COUNTER      | Recs    | This meter reports the number of syslog messages received from this flow generator within the collection interval. |
| 16  | Unused Cardinality counter      | 20        | 20           | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 17  | Unused Cardinality counter      | 20        | 20           | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 16. It is inactive and not instrumented for this group. |