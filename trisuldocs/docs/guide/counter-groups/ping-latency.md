# PING Latency

Records the ICMP ping round-trip latency of each monitored target, keyed by the target IP address as entered in Bulk Ping Groups.

| Property | Value |
|---|---|
| GUID | `{4DF11F00-B726-4260-5F83-0D9891197B45}` |
| Layer | External Data |
| Input | Internal |
| Key type | IP address string (dotted decimal, as configured) |
| Implementation | Lua — ping_counter_group.lua (group), trisul_unsock_api.lua (API socket) (apps/analyzers/pingmon); values from `trisul_bulkping` — CPingGroup (trisul_probe/src/tbbcore/PingGroup.cpp) |
| Trisul App | pingmon (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- You add targets in **Tools → Show All → Bulk Ping Groups**. You then start `trisul_bulkping` on the probe as root. It is not started from the web interface.
- `trisul_bulkping` pings each target of a group with liboping every group interval. After each cycle it sends an `update_counter` command for every target to the probe's Unix datagram socket `api.sock.<engine>` in `//App/RunStateDirectory`.
- `trisul_unsock_api.lua` reads that socket on every engine metronome tick and calls `engine:update_counter`.
- The value written is 1000 × the latency that liboping reports, which is in milliseconds. <!-- TODO(verify): meter units say "ms" but the stored value looks like microseconds --> A target that did not reply has latency −1, so −1000 is written.
- The meter is a gauge. Each bucket keeps the last value written in it.
- When a target is added, `trisul_bulkping` also sends `update_key_info`, so the key gets the target's name.
- Node down and up alerts go to a separate alert group, `{20100949-751A-43D1-685F-F860E4D4091B}`, not to this counter group.

## Keys

One key is the target IP address string from the `PING_TARGETS` table. It is not converted to the hex key format. The label is the target name from Bulk Ping Groups.

| Key | Meaning |
|---|---|
| `8.8.8.8` | Target 8.8.8.8, labeled with its configured name, e.g. `google-dns` |
| `10.10.1.1` | Target 10.10.1.1, e.g. `branch-1-router` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Gets every update made to any key. The meter is a gauge, so the totals item keeps the last value written by any target. It is not a sum and is not meaningful. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | latency | VT_GAUGE | ms | 100 | 0 | Short name `Latency`. Last value of 1000 × the liboping round-trip latency in the bucket. −1000 means no reply. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
