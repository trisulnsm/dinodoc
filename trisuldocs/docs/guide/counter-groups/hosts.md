# Hosts

Traffic, connection and alert counts for every IPv4 address seen, keyed by IPv4 address.

| Property | Value |
|---|---|
| GUID | `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | IPv4 address |
| Implementation | Native C++ — CPIIPStats (trisul_probe/sysplugs/counters/PIIPStats.cpp); also updated by PITCPStats, PINetflowMeter, PISFlowMeter, the flow tracker (stengine/XSessionGroup.cpp), the alert pipeline and Trisul Badfellas |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** each IPv4 packet updates two keys: the source IP (Total, Transmit, Total Packets) and the destination IP (Total, Received, Total Packets). Bytes are the packet's total length.
- **Flows:** each NetFlow, IPFIX or sFlow record updates the source and destination IP the same way, using the record's byte and packet counts, and adds 1 to Flow Records. In NetFlow IPDR mode the Hosts group is not updated.
- **Home network:** a key's bytes go to **Homenet** if that IP is inside a configured [Home Network](/docs/guide/ag/context/home_networks), otherwise to **External**. The meter describes the host itself, not the other end. The derived groups [Internal Hosts](/docs/guide/counter-groups/internal-hosts) and [External Hosts](/docs/guide/counter-groups/external-hosts) select on these two meters.
- Every packet or flow is counted twice in the group, once for each endpoint.
- Options in `HostCounterPolicy.xml`: `SampleRate` (count 1 in N packets and scale up), `ExternalIPOnly` (skip keys inside the home network) and `ShortUpdates` (skip the per-packet extra counters, used in ISP deployments).

## Keys

One key per IPv4 address, in dotted uppercase hex. The UI shows the dotted decimal address. The label is the DNS name learned passively from DNS A record answers, or a label you set.

| Key | Meaning |
|---|---|
| `C0.A8.01.02` | 192.168.1.2 |
| `0A.00.00.FE` | 10.0.0.254 |
| `08.08.08.08` | 8.8.8.8 (label `dns.google` if seen in a DNS answer) |
| `FF.FF.FF.FF` | 255.255.255.255, limited broadcast destination |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each packet or flow updates two host keys, so Total here is about 2× the link traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the host is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the host is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the host is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets where the host is source or destination. For flows, the record's packet count. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | +1 when the flow tracker creates a flow with this host at either end, −1 when the flow expires. Shows flows open at the end of the interval. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | IDS alerts from the alert pipeline where the host is the source IP. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total, counted only when this host is inside the home network. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total, counted only when this host is outside the home network. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | TCP packets with SYN set and ACK clear, host is the source. Packet input only. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | TCP packets with SYN set and ACK clear, host is the destination. Packet input only. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | TCP SYN+ACK packets. Both the source and the destination key get +1. With NetFlow, +1 to both ends for each TCP record whose flags include SYN and ACK, only when `MeterTCPConnections` is enabled (default off). |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Blacklist hits from the Trisul Badfellas plugin, usually on both ends of the flow. |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | IDS alerts from the alert pipeline where the host is the destination IP. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | +1 for each new flow, on both endpoints. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Filled only in Interface Tracker groups (Hosts filtered by a [Flow Interface](/docs/guide/counter-groups/flowi-ntfs)). Not populated in Hosts itself. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Filled only in Interface Tracker groups, like meter 14. Not populated in Hosts itself. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | +1 for each NetFlow, IPFIX or sFlow record where the host is source or destination. It is a record count, despite the unit label. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HostsIPv6](/docs/guide/counter-groups/hostsIPv6): the same meters for IPv6 addresses
- Derived from Hosts: [Internal Hosts](/docs/guide/counter-groups/internal-hosts), [External Hosts](/docs/guide/counter-groups/external-hosts), [Web Hosts](/docs/guide/counter-groups/web-hosts), [Email Hosts](/docs/guide/counter-groups/email-hosts), [SSH Hosts](/docs/guide/counter-groups/ssh-hosts), [Unusual Traffic Hosts](/docs/guide/counter-groups/unusual-traffic-hosts)
- [Aggregates](/docs/guide/counter-groups/aggregates): the in, out, internal and transit totals updated by the same code
