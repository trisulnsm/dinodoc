# Unusual Traffic Hosts

Hosts with traffic outside the common web, mail, FTP and SSH ports, keyed by IPv4 address.

| Property | Value |
|---|---|
| GUID | `{AE3A1449-5663-41A5-A028-FDE61DBB7EFA}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | IPv4 address |
| Implementation | Derived — filter of Hosts by Apps keys not in `p-0050`, `p-01BB`, `p-0019`, `p-006D`, `p-006E`, `p-008F`, `p-00DC`, `p-03E1`, `p-03E3`, `p-0014`, `p-0015`, `p-0016` (inverse list). Engine: trisul_probe/pcappipe/CmdDynagen.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No (Inactive) |

## What it measures

- This is a [filtered counter group](/docs/guide/ag/context/filtered_countergroups). The rule is stored in the `TRISUL_COUNTER_GROUP_FILTERS` table: parent **Hosts**, filter group **Apps**, FilterKeyInvList `p-0050,p-01BB,p-0019,p-006D,p-006E,p-008F,p-00DC,p-03E1,p-03E3,p-0014,p-0015,p-0016`: ports 80, 443, 25, 109, 110, 143, 220, 993, 995, 20, 21 and 22.
- For each packet, flow record or flow-tracker update, the probe looks at the [Apps](/docs/guide/counter-groups/apps) keys in it. If none of them is in the list, every Hosts update in the same packet or record is copied here. Both endpoints are copied, so clients and servers both appear.
- The Apps key is the port the probe picked for that traffic, normally the lower of the two TCP or UDP ports.
- The group has no meter list of its own. It uses the [Hosts](/docs/guide/counter-groups/hosts) meter list, with the same IDs, names and topper counts.
- The group is Inactive in a new context. To use it, enable it under **Context: default → profile0 → Counter Groups** (see [Counter Group Settings](/docs/guide/ag/context/countergroup_settings)) and restart Trisul.
- An update must contain an Apps key to be tested. ICMP and IPsec packets carry the Apps keys `icmp` and `ipsec0`, so they count as unusual. Other IP protocols such as GRE create no Apps key and are not counted.
- DNS (port 53), NTP and most other services are not in the list, so expect this group to be busy.

## Keys

Same keys as Hosts: one IPv4 address in dotted uppercase hex.

| Key | Meaning |
|---|---|
| `C0.A8.01.35` | 192.168.1.53, an internal DNS server |
| `0A.00.00.0F` | 10.0.0.15, a host using RDP (port 3389) |
| `2D.4F.13.C4` | 45.79.19.196, an external host on an uncommon port |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each matching packet or flow updates two host keys, so Total here is about 2× the matching traffic. |

## Meter list

Inherited from Hosts. A meter has data here only if it was updated in the same packet, flow record or flow-tracker update as the matching Apps key.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes of matching traffic where the host is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes of matching traffic where the host is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes of matching traffic where the host is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets of matching traffic where the host is source or destination. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | Copied from the flow tracker's create (+1) and expire (−1) updates when the flow's Apps key matches. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. Alert updates do not arrive with an Apps key. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Matching bytes, when the host is inside the home network. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Matching bytes, when the host is outside the home network. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | Copied from Hosts for matching packets. Packet input only. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | Copied from Hosts for matching packets. Packet input only. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | Copied from Hosts for matching packets or flow records. |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Copied only if the Badfellas update arrives together with the matching traffic. <!-- TODO(verify): whether Badfellas meter 11 updates share the scroll with the Apps update --> |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. Alert updates do not arrive with an Apps key. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | Copied from the flow tracker: +1 per new flow on both endpoints when the flow's Apps key matches. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | Copied from Hosts: +1 per matching flow record, on both endpoints. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Hosts](/docs/guide/counter-groups/hosts): the parent group
- [Web Hosts](/docs/guide/counter-groups/web-hosts), [Email Hosts](/docs/guide/counter-groups/email-hosts), [SSH Hosts](/docs/guide/counter-groups/ssh-hosts)
