# TCP Analyzer Apps

Measures TCP connection setup latency, retransmissions, timeouts and one-way flows for each server port.

| Property | Value |
|---|---|
| GUID | `{24DBD78F-CBB6-4383-7A78-B2C734FC480F}` |
| Layer | L4 Transport |
| Input | Packets |
| Key type | Port (`p-XXXX`) |
| Implementation | Lua — appcg.lua (apps/analyzers/tcp-analyzer) |
| Trisul App | tcp-analyzer (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- The script runs on each TCP flow flush and updates one key per flow: the server port.
- The server end comes from the SYN / SYN-ACK direction. If neither end was identified as the server, the lower port number is used.
- **Latency**: the flow's setup RTT (microseconds) is reported once, on the first flush after the handshake. Flows with RTT 0 are skipped.
- **Retransmissions, timeouts, unidirectional, rate**: counted once, when the flow ends (FIN/RST or timeout).
- **Timeouts** count only flows that saw a SYN-ACK.
- **Retrans rate** and **Poor Quality Flows** need at least 50 packets in the flow. Poor quality here means a retransmission rate above **10 %** (the per-host group uses 5 %).
- A timeout or a rate above 10 % also tags the flow `BADQUALITY`.
- Needs packet capture. NetFlow records do not carry setup RTT or retransmissions.

## Keys

The same port key form as the [Apps](/docs/guide/counter-groups/apps) group: `p-` and the port number as 4 uppercase hex digits. The UI shows the port number.

| Key | Meaning |
|---|---|
| `p-01BB` | Port 443 (https) |
| `p-0016` | Port 22 (ssh) |
| `p-0CEA` | Port 3306 (mysql) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. One key per flow, so counts equal the TCP totals. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Avg Latency | VT_AVERAGE | us | 20 | 20 | Average TCP setup RTT of flows to this server port. |
| 1 | Retrans | VT_COUNTER | pkts | 20 | 20 | Retransmitted packets of finished flows on this port. |
| 2 | Retrans Rate | VT_AVERAGE | percent | 20 | 20 | Average of 100 × retransmissions / packets over finished flows of 50+ packets. |
| 3 | Poor Quality Flows | VT_COUNTER | flws | 20 | 20 | Finished flows of 50+ packets with retransmission rate above 10 %. |
| 4 | Timeouts | VT_COUNTER | flws | 20 | 20 | Established flows (SYN-ACK seen) that ended by timeout. |
| 5 | Unidirectional | VT_COUNTER | flws | 20 | 20 | Finished flows with bytes in only one direction. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TCP Analyzer](/docs/guide/counter-groups/tcp-analyzer)
- [Apps](/docs/guide/counter-groups/apps)
