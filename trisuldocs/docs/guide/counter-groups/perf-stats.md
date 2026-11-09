# Perf-Stats

Counts the probe's own health (flush time, CPU, memory, capture drops, PCAP write rate), keyed by engine or capture input.

| Property | Value |
|---|---|
| GUID | `{0D39F2A7-2627-49D5-9DCF-707E6F1C0571}` |
| Layer | System |
| Input | Internal |
| Key type | Component name (`engine-N`, `inputfilter-N`) |
| Implementation | Lua — perf-stats.lua (trisul_probe/src/sysplugs/counters) defines the group; values come from stengine/XTrafDB.cpp, the capture filters in pcappipe (FilterAFPacket, FilterNetPcap, FilterPFRing, FilterRXRing, FilterRingQueue) and stengine/HalfNAT.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Stats engines:** after each flush, every engine writes its flush time, CPU and memory to `engine-<id>`. Disk IO counters (meters 12, 13) are written by engine 0 only.
- **Capture inputs:** each capture adapter writes drops, processed packets and drop percent to `inputfilter-<n>`, and the same values to `inputfilter`. A drop rate above 1% also raises a `PKTDROP` system alert (AF_PACKET input).
- **PCAP storage:** the packet ring writer adds bytes written to `inputfilter` meter 14.
- **CGNAT mapping:** when half-NAT mapping is configured, per-NAS gauges go to meter 15 under `cgnat-match-*` keys.
- Disk Total and Disk Used are written as 0 by the probe. Disk space is reported at the hub.

## Keys

| Key | Meaning |
|---|---|
| `engine-0` | Stats engine 0 (one key per engine) |
| `inputfilter-0` | Capture adapter or instance 0 |
| `inputfilter` | All capture inputs together, plus PCAP write bandwidth |
| `cgnat-match-0-10.1.1.1-percentage` | CGNAT match percent for NAS 10.1.1.1 on engine 0 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. It adds unrelated gauges (CPU, memory, drops) from all keys and has no useful meaning here. |
| `cgnat-match-<engine>-<nas-ip>-<stat>` | `<stat>` is one of `match`, `nomatch`, `flushed`, `nat-creates`, `nat-deletes`, `percentage`, `stale-mapping`. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | GlobalFlush-1 Time | VT_GAUGE | usecs | 0 | 0 | `engine-N`: time taken by this engine's last flush. Same value as meter 8. |
| 1 | CPU Total | VT_GAUGE | percent | 0 | 0 | `engine-N`: system CPU use, where 100 means one CPU fully busy. For example, 1100 means 11 CPUs at 100%. |
| 2 | CPU Trisul | VT_GAUGE | percent | 0 | 0 | `engine-N`: CPU use of the probe process. |
| 3 | Mem Total | VT_GAUGE | bytes | 0 | 0 | `engine-N`: total system memory. |
| 4 | Mem System | VT_GAUGE | bytes | 0 | 0 | `engine-N`: memory in use on the system. |
| 5 | Mem Trisul | VT_GAUGE | bytes | 0 | 0 | `engine-N`: resident memory of the probe process. |
| 6 | Disk Total | VT_GAUGE | bytes | 0 | 0 | Written as 0 by the probe. |
| 7 | Disk Used | VT_GAUGE | bytes | 0 | 0 | Written as 0 by the probe. |
| 8 | GlobalFlush-0 Time | VT_GAUGE | usecs | 0 | 0 | `engine-N`: time taken by this engine's last flush. |
| 9 | Dropped Pkts | VT_COUNTER | packets | 0 | 0 | `inputfilter*`: packets dropped by the capture input. |
| 10 | Processed Pkts | VT_COUNTER | packets | 0 | 0 | `inputfilter*`: packets received by the capture input. |
| 11 | Dropped Percent | VT_GAUGE | percent | 0 | 0 | `inputfilter*`: drops as a percent of received packets. |
| 12 | Reads IO | VT_DELTA_RATE_COUNTER | ios | 0 | 0 | `engine-0`: disk read operations, from the system's running counter. |
| 13 | Writes IO | VT_DELTA_RATE_COUNTER | ios | 0 | 0 | `engine-0`: disk write operations, from the system's running counter. |
| 14 | PCAP disk bw | VT_RATE_COUNTER | Bps | 0 | 0 | `inputfilter`: bytes written to the PCAP packet store. |
| 15 | Gauge Value | VT_GAUGE | value | 0 | 0 | `cgnat-match-*`: CGNAT mapping statistics. |
| 16 | Counter Value | VT_COUNTER | count | 0 | 0 | Not populated by the current code. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Meta Counter Group](/docs/guide/counter-groups/meta-counter-group)
- [Meta Session Group](/docs/guide/counter-groups/meta-session-group)
