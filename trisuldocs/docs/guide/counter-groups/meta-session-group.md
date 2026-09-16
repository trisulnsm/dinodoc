# Meta Session Group

Contains metrics related to flow activity in the network.

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{594606BD-EEB2-4E0B-BAC4-84B7057088C8}` | Native | 60                 | 300                    |

## Key Format

TCP/IP Sessions with Key `{99A78737-4B41-4387-8F31-8077DB917336}`. This represents all IP based flows, including UDP, GRE, ICMP, and so on.

## Meter list

:::tip Resolution
These meters are updated every BucketSize milliseconds. By default, this is 60,000 milliseconds, or 1 minute.
:::

| ID  | DESCRIPTION     | TOP COUNT | BOTTOM COUNT | TYPE       | UNITS | DESCRIPTION |
| --- | ----------------- | --------- | ------------ | ---------- | ----- |-------------|
| 0   | Master Size            | 0         | 0            | VT_COUNTER | i     | This meter reports the total size of the flow cache, representing the total number of active flows at the end of the streaming window. By default the streaming window size is 1 minute. |
| 1   | MRU Size               | 0         | 0            | VT_COUNTER | i     | This meter reports the size of the most recently used cache. |
| 2   | New                    | 0         | 0            | VT_COUNTER | i     | This meter reports the number of new flows established in the window. |
| 3   | Closed                 | 0         | 0            | VT_COUNTER | i     | This meter reports the total number of expired and terminated flows in the window. |
| 4   | Expired                | 0         | 0            | VT_COUNTER | i     | This meter reports the number of flows that timed out. This behavior can be adjusted using the Time Out parameter on the Admin, Manage Session Groups page. |
| 5   | Terminated             | 0         | 0            | VT_COUNTER | i     | This meter reports the number of flows that ended through an explicit protocol level closure, such as a TCP connection closing normally, rather than timing out. |
| 6   | Flushed                | 0         | 0            | VT_COUNTER | i     | This meter reports the number of flows flushed to the hub (database). |
| 7   | FlushedActive          | 0         | 0            | VT_COUNTER | i     | This meter reports the number of active flows that were flushed to the hub. This behavior can be adjusted using the Active Tracking Age Limit on the Admin, Manage Session Groups page. |
| 8   | Key Hits               | 0         | 0            | VT_COUNTER | i     | This is an internal metric and can be ignored. |
| 9   | Heap mem               | 0         | 0            | VT_COUNTER | i     | This is an internal metric and can be ignored. |
| 10  | Tail Prunes            | 0         | 0            | VT_COUNTER | i     | This is an internal metric and can be ignored. |
| 11  | Hi Water Rej           | 0         | 0            | VT_COUNTER | i     | This meter reports rejections that occur when operating in fixed hi water mode, where only N unique flows are accepted in any one minute window. This behavior can be adjusted using TrackHiWater on the Admin, Manage Session Groups page and FlowMemcapPolicy in the trisulProbeConfig.xml file. |
| 12  | After Term             | 0         | 0            | VT_COUNTER | i     | This is an internal metric and can be ignored. |
| 13  | Flush USecs            | 0         | 0            | VT_COUNTER | i     | This meter reports the number of microseconds taken to flush data to the database. |
| 14  | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 15  | Unused Cardinality counter | 20    | 20           | VT_GAUGE   | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 14. It is inactive and not instrumented for this group. |