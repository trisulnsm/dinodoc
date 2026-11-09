# Apps

Counts traffic and connections per application, keyed by server port (`p-0050` style) or by a fixed protocol name.

| Property | Value |
|---|---|
| GUID | `{C51B48D4-7876-479E-B0D9-BD9EFF03CE2E}` |
| Layer | L4 Transport |
| Input | Packets, Flows |
| Key type | Port key `p-XXXX`, or protocol name |
| Implementation | Native C++ — CPICGApp (group), CPITCPStats, CPIUDPStats, CPIIPStats, CPIIP6Stats (packet metering) (trisul_probe/src/sysplugs/counters); stengine/XSessionGroup.cpp (connection meters); CPINetflowMeter, CPISFlowMeter (sysplugs/flowhandlers) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **TCP/UDP packets:** each packet updates one port key: the lower of the two ports. The higher port is used instead when the flow is marked higher-port-server, or when it matches an `AppPolicyItem` (`ServerPorts` + `Subnets`) in `AppCounterPolicy.xml`. `Subnets` are IPv4 only. For IPv6 packets, only items whose subnet is `0.0.0.0/0` (any address) apply.
- **Other IP packets:** ICMP goes to `icmp`, ICMPv6 to `icmpv6`, and IPsec (ESP and AH) to `ipsec0`.
- Each update also adds the bytes to one of meters 2, 3, 5 or 6, based on [Home Networks](/docs/guide/ag/context/home_networks). IPv4 packets are checked against the IPv4 home networks and IPv6 packets against the IPv6 home networks.
- **Connections:** the session tracker adds 1 to Connections and Active Conns for each new flow, and subtracts 1 from Active Conns when the flow expires. The key is the lower port of the flow.
- **NetFlow/IPFIX and sFlow** (policy `MeterApplications`): the same port keys from record fields. GRE goes to `gre`, ESP to `ipsec-esp`. With `MeterBothPorts` on, two port keys can be updated when both ports are 1024 or higher. With `MeterAppConnections` on, each record with SYN and ACK set adds 1 to Connections.
- Meters 8 and 9 are filled only in a filtered group made by an [interface tracker](/docs/guide/ug/netflow/interface_tracker) from this group.

## Keys

A port key is `p-` plus the port number in 4 uppercase hex digits. Labels (service names) are preloaded from `port-keys.txt`.

| Key | Meaning |
|---|---|
| `p-0050` | Port 80, label `http` |
| `p-01BB` | Port 443, label `https` |
| `p-0035` | Port 53, label `domain` (DNS) |
| `p-0D3D` | Port 3389, label `ms-wbt-server` (RDP) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update in the interval. One key per packet, so meter 0 is about all TCP+UDP+ICMP+IPsec bytes. In flow mode with `MeterBothPorts` on, some records count twice. |
| `icmp` | IPv4 ICMP. Label `ICMP`. |
| `icmpv6` | ICMPv6. |
| `ipsec0` | IPsec ESP and AH (packet mode). Label `IPSEC`. |
| `gre`, `ipsec-esp` | GRE and ESP (NetFlow/sFlow mode only). |
| `icmp00`, `gre000`, `esp000`, `ah0000`, `igmp00` | Connection meters (4, 7) for non-TCP/UDP flows. They have no byte meters. |
| `SpanTree` | Packet mode: frames sent to destination MAC `01:80:C2:00:00:xx`. This covers STP BPDUs and the other IEEE link-local protocols, such as LLDP, LACP and 802.1X. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes of packets or flow records for this app. |
| 1 | Security Alerts | VT_COUNTER | Alerts | 10 | 0 | Not populated by the current code. |
| 2 | Into Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes from outside to inside the home network. |
| 3 | Outof Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes from inside to outside the home network. |
| 4 | Connections | VT_COUNTER | Conns | 50 | 0 | +1 per new flow. NetFlow/sFlow: +1 per record with SYN+ACK. |
| 5 | Internal Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes with both ends in the home network. |
| 6 | Transit Homenet | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes with neither end in the home network. |
| 7 | Active Conns | VT_RUNNING_COUNTER | Conns | 50 | 0 | +1 when a flow is created, −1 when it expires. |
| 8 | Into Interface | VT_RATE_COUNTER | Bps | 50 | 0 | Interface-tracker filtered groups only. Bytes into the tracked interface. |
| 9 | Outof Interface | VT_RATE_COUNTER | Bps | 50 | 0 | Interface-tracker filtered groups only. Bytes out of the tracked interface. |
| 10 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 11 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats)
- [Flow-APPID-NBAR](/docs/guide/counter-groups/flow-appid-nbar)
- [App-ID](/docs/guide/counter-groups/app-id)
