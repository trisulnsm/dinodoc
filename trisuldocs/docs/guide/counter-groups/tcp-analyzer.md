# TCP Analyzer

Measures TCP connection setup latency, retransmissions, timeouts and one-way flows for each host, split into internal and external hosts.

| Property | Value |
|---|---|
| GUID | `{E45623ED-744C-4053-1401-84C72EE49D3B}` |
| Layer | L4 Transport |
| Input | Packets |
| Key type | IP address (IPv4 or IPv6) |
| Implementation | Lua — tcp_analyzer.lua (apps/analyzers/tcp-analyzer) |
| Trisul App | tcp-analyzer (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- The script runs on each TCP flow flush. Every update goes to **both** endpoint IPs of the flow.
- A host in the Home Network uses the Internal meters (0, 2, 4). Any other host uses the External meters (1, 3, 5). The choice is made for each endpoint separately.
- **Latency**: the flow's setup RTT (handshake time, in microseconds) is reported once, on the first flush after the handshake. Flows without a seen handshake (RTT 0) are skipped.
- **Retransmissions, timeouts, unidirectional, rate**: counted once, when the flow ends (FIN/RST or timeout). They are never counted on the periodic flushes of a running flow.
- **Timeouts** count only flows that saw a SYN-ACK. An unanswered SYN is not a timeout.
- **Retrans rate** and **Poor Quality Flows** need at least 50 packets in the flow (`MIN_PACKETS_FOR_RATE`). Poor quality means a retransmission rate above 5 %.
- A timeout or a rate above 5 % also tags the flow `BADQUALITY`.
- Needs packet capture. NetFlow records do not carry setup RTT or retransmissions.

## Keys

The two endpoint IPs of the flow, in Trisul key form: hex dotted for IPv4, 32 hex digits for IPv6. The UI shows the readable address and any Hosts label.

| Key | Meaning |
|---|---|
| `C0.A8.01.0A` | 192.168.1.10 (internal host, meters 0/2/4) |
| `08.08.08.08` | 8.8.8.8 (external host, meters 1/3/5) |
| `20010DB8000000000000000000000001` | 2001:db8::1 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each flow updates two keys, so counts are about 2× the number of flows or retransmitted packets. The average meters average over every sample from both ends. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Avg Latency Internal | VT_AVERAGE | us | 20 | 20 | Average TCP setup RTT of flows involving this internal host. |
| 1 | Avg Latency External | VT_AVERAGE | us | 20 | 20 | Average TCP setup RTT of flows involving this external host. |
| 2 | Retrans Internal | VT_COUNTER | pkts | 20 | 20 | Retransmitted packets of finished flows involving this internal host. |
| 3 | Retrans External | VT_COUNTER | pkts | 20 | 20 | Retransmitted packets of finished flows involving this external host. |
| 4 | Retrans Rate Internal | VT_AVERAGE | percent | 20 | 20 | Average of 100 × retransmissions / packets over finished flows of 50+ packets, internal host. |
| 5 | Retrans Rate External | VT_AVERAGE | percent | 20 | 20 | Same as meter 4, external host. |
| 6 | Poor Quality Flows | VT_COUNTER | flws | 20 | 20 | Finished flows of 50+ packets with retransmission rate above 5 %. |
| 7 | Timeouts | VT_COUNTER | flws | 20 | 20 | Established flows (SYN-ACK seen) that ended by timeout, not FIN/RST. |
| 8 | Unidirectional | VT_COUNTER | flws | 20 | 20 | Finished flows with bytes in only one direction. Often a tap or asymmetric routing issue. Not tagged. |
| 9 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 10 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TCP Analyzer Apps](/docs/guide/counter-groups/tcp-analyzer-apps): the same measurements per server port.
- [Hosts](/docs/guide/counter-groups/hosts)
- The app also adds the flow tracker **POOR QUALITY** (flows of 50+ packets with retransmission rate above 5 %).
