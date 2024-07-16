# Organization

Trisul system self monitoring

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{0D39F2A7-2627-49D5-9DCF-707E6F1C0571}` | Native | 60                | 300                  |



## Meter list


| ID  | DESCRIPTION        | TOP COUNT | BOTTOM COUNT | TYPE                 | UNITS   |
| --- | ------------------ | --------- | ------------ | -------------------- | ------- |
| 0   | GlobalFlush-1 Time | 0         | 0            | VT_GAUGE             | usecs   |
| 1   | CPU Total          | 0         | 0            | VT_GAUGE             | percent |
| 2   | CPU Trisul         | 0         | 0            | VT_GAUGE             | percent |
| 3   | Mem Total          | 0         | 0            | VT_GAUGE             | bytes   |
| 4   | Mem System         | 0         | 0            | VT_GAUGE             | bytes   |
| 5   | Mem Trisul         | 0         | 0            | VT_GAUGE             | bytes   |
| 6   | Disk Total         | 0         | 0            | VT_GAUGE             | bytes   |
| 7   | Disk Used          | 0         | 0            | VT_GAUGE             | bytes   |
| 8   | GlobalFlush-0 Time | 0         | 0            | VT_GAUGE             | usecs   |
| 9   | Dropped Pkts       | 0         | 0            | VT_COUNTER           | packets |
| 10  | Processed Pkts     | 0         | 0            | VT_COUNTER           | packets |
| 11  | Dropped Percent    | 0         | 0            | VT_GAUGE             | percent |
| 12  | Reads IO           | 0         | 0            | VT_DELTA_RATE_ROUTER | ios     |
| 13  | Writes IO          | 0         | 0            | VT_DELTA_RATE_ROUTER | ios     |
| 14  | PCAP disk bw       | 0         | 0            | VT_RATE_COUNTER      | Bps     |
