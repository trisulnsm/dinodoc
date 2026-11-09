# HostsIPv6

Traffic and connection counts for every IPv6 address seen, keyed by IPv6 address.

| Property | Value |
|---|---|
| GUID | `{9807E97A-6CD2-442F-BB18-8C104C8EB204}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | IPv6 address |
| Implementation | Native C++ — CPIIP6Stats (trisul_probe/sysplugs/counters/PIIP6Stats.cpp); also updated by PINetflowMeter and the flow tracker (stengine/XSessionGroup.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- **Packets:** each IPv6 packet updates the source address (Total, Transmit, Total Packets) and the destination address (Total, Received, Total Packets).
- **Flows:** each IPv6 NetFlow v9 or IPFIX record updates both addresses the same way and adds 1 to Flow Records. The sFlow handler meters IPv4 hosts only. In NetFlow IPDR mode this group is not updated.
- **Home network:** a key's bytes go to **Homenet** if that address is inside a configured IPv6 [Home Network](/docs/guide/ag/context/home_networks), otherwise to **External**.
- Every packet or flow is counted twice in the group, once for each endpoint.
- The meter list is the same as [Hosts](/docs/guide/counter-groups/hosts). TCP flag counts, alert counts and interface meters are only written for IPv4, so those meters stay empty here.
- Shares the `HostCounterPolicy.xml` options of Hosts (`SampleRate`, `ExternalIPOnly`, `ShortUpdates`).

## Keys

One key per IPv6 address: the 16 address bytes in network order as 32 uppercase hex characters, with no separators and no zero compression. The UI shows the compressed RFC 5952 form. DNS names are not attached to these keys automatically.

| Key | Meaning |
|---|---|
| `20010DB8000000000000000000000001` | 2001:db8::1 |
| `FE80000000000000021122FFFE334455` | fe80::211:22ff:fe33:4455 (link local) |
| `26064700470000000000000000001111` | 2606:4700:4700::1111 |
| `FF020000000000000000000000000001` | ff02::1, all-nodes multicast destination |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each packet or flow updates two address keys, so Total here is about 2× the IPv6 link traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the address is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the address is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the address is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets where the address is source or destination. For flows, the record's packet count. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | +1 when the flow tracker creates an IPv6 flow with this address at either end, −1 when it expires. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total, counted only when this address is inside the home network. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total, counted only when this address is outside the home network. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | TCP packets with SYN set and ACK clear, address is the source. Packet input only. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | TCP packets with SYN set and ACK clear, address is the destination. Packet input only. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | TCP SYN+ACK packets. Both the source and the destination key get +1. Packet input only. |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | +1 for each new IPv6 flow, on both endpoints. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | +1 for each IPv6 NetFlow or IPFIX record where the address is source or destination. It is a record count, despite the unit label. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Hosts](/docs/guide/counter-groups/hosts): the IPv4 equivalent
- [Internal Hosts v6](/docs/guide/counter-groups/internal-hosts-v6), [External Hosts v6](/docs/guide/counter-groups/external-hosts-v6)
