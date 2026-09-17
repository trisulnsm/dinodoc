# Perf-Stats

Trisul system self monitoring

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{0D39F2A7-2627-49D5-9DCF-707E6F1C0571}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE                 | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | -------------------- | ------- |-------------|
| 0   | GlobalFlush-1 Time      | 0         | 0            | VT_GAUGE             | usecs   | This meter reports the time, in microseconds, taken by the second global flush worker to write buffered data to storage. |
| 1   | CPU Total               | 0         | 0            | VT_GAUGE             | percent | This meter reports the total CPU utilization of the system as a percentage. |
| 2   | CPU Trisul              | 0         | 0            | VT_GAUGE             | percent | This meter reports the CPU utilization consumed specifically by the Trisul process as a percentage. |
| 3   | Mem Total               | 0         | 0            | VT_GAUGE             | bytes   | This meter reports the total amount of memory installed on the system, in bytes. |
| 4   | Mem System              | 0         | 0            | VT_GAUGE             | bytes   | This meter reports the amount of memory used by the overall system, in bytes. |
| 5   | Mem Trisul              | 0         | 0            | VT_GAUGE             | bytes   | This meter reports the amount of memory used specifically by the Trisul process, in bytes. |
| 6   | Disk Total              | 0         | 0            | VT_GAUGE             | bytes   | This meter reports the total disk capacity available to the system, in bytes. |
| 7   | Disk Used               | 0         | 0            | VT_GAUGE             | bytes   | This meter reports the amount of disk space currently used on the system, in bytes. |
| 8   | GlobalFlush-0 Time      | 0         | 0            | VT_GAUGE             | usecs   | This meter reports the time, in microseconds, taken by the first global flush worker to write buffered data to storage. |
| 9   | Dropped Pkts            | 0         | 0            | VT_COUNTER           | packets | This meter reports the number of packets dropped by Trisul's capture engine within the collection interval. |
| 10  | Processed Pkts          | 0         | 0            | VT_COUNTER           | packets | This meter reports the number of packets successfully processed by Trisul within the collection interval. |
| 11  | Dropped Percent         | 0         | 0            | VT_GAUGE             | percent | This meter reports the percentage of packets dropped relative to the total number of packets seen. |
| 12  | Reads IO                | 0         | 0            | VT_DELTA_RATE_ROUTER | ios     | This meter reports the disk read operation rate, derived from successive polls of the system's disk I/O counters. |
| 13  | Writes IO               | 0         | 0            | VT_DELTA_RATE_ROUTER | ios     | This meter reports the disk write operation rate, derived from successive polls of the system's disk I/O counters. |
| 14  | PCAP disk bw            | 0         | 0            | VT_RATE_COUNTER      | Bps     | This meter reports the bandwidth rate, in bytes per second, at which captured packet data is being written to disk. |
| 15  | Gauge Value             | 0         | 0            | VT_GAUGE             | value   | This is a generic gauge slot available for a custom or plugin defined value, rather than a fixed, named system metric. |
| 16  | Counter Value           | 0         | 0            | VT_COUNTER           | count   | This is a generic counter slot available for a custom or plugin defined value, rather than a fixed, named system metric. |
| 17  | Unused Cardinality counter | 20    | 20           | VT_GAUGE             | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 18  | Unused Cardinality counter | 20    | 20           | VT_GAUGE             | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 17. It is inactive and not instrumented for this group. |