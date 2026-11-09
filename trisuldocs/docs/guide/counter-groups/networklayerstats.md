# NetworkLayerStats

Counts traffic and flows per IP protocol, keyed by the IP protocol number in 2-digit hex.

| Property | Value |
|---|---|
| GUID | `{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | IP protocol number (2 hex digits) |
| Implementation | Native C++ — CPICGNetworkLayer (group), CPIIPStats, CPIIP6Stats (packet metering) (trisul_probe/src/sysplugs/counters); stengine/XSessionGroup.cpp (flow meters); CPINetflowMeter, CPISFlowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** every IPv4 packet (protocol field) and IPv6 packet (next-header field of the fixed header) updates one key with its bytes and 1 packet. IPv6 extension headers are not followed.
- **Flows:** the session tracker adds 1 to Total Flows and Active Flows for each new flow, and subtracts 1 from Active Flows when the flow expires.
- **NetFlow/IPFIX and sFlow:** each record adds its bytes to the key of its L4 protocol. Packets are not updated in flow mode.
- Meters 4 and 5 are filled only in a filtered counter group made by an [interface tracker](/docs/guide/ug/netflow/interface_tracker) from this group. The base group never has them.

## Keys

One key is the IP protocol number as 2 uppercase hex digits. Labels are preloaded from `std-ip-protocols.txt`.

| Key | Meaning |
|---|---|
| `06` | TCP |
| `11` | UDP |
| `01` | ICMP |
| `3A` | IPv6-ICMP |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. Each packet updates one key, so meter 0 equals total IP bytes. |
| `2F`, `32` | GRE and ESP. Common for tunnel and VPN traffic. |
| `29` | IPv6 encapsulated in IPv4 (protocol 41). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 10 | 0 | IP packet bytes, or flow-record bytes. |
| 1 | Packets | VT_COUNTER | pkts | 10 | 0 | 1 per IP packet. Packet mode only. Not scaled by `SampleRate`. |
| 2 | Active Flows | VT_RUNNING_COUNTER | flows | 10 | 0 | +1 when the session tracker creates a flow, −1 when it expires. |
| 3 | Total Flows | VT_COUNTER | flows | 10 | 0 | +1 for each new flow. |
| 4 | Into Interface | VT_RATE_COUNTER | Bps | 10 | 0 | Interface-tracker filtered groups only. Bytes into the tracked interface. |
| 5 | Outof Interface | VT_RATE_COUNTER | Bps | 10 | 0 | Interface-tracker filtered groups only. Bytes out of the tracked interface. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 7 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [LinkLayerStats](/docs/guide/counter-groups/link-layer-stats)
- [ICMP Types](/docs/guide/counter-groups/icmp-types)
- [Apps](/docs/guide/counter-groups/apps)
