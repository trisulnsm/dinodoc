# Email Hosts

Hosts that send or receive traffic on common mail ports (SMTP, POP and IMAP), keyed by IPv4 address.

| Property | Value |
|---|---|
| GUID | `{22D4082E-B8BA-40D0-A287-1F524DF8DA7B}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | IPv4 address |
| Implementation | Derived — filter of Hosts by Apps keys `p-0019`, `p-006D`, `p-006E`, `p-008F`, `p-00DC`, `p-03E1`, `p-03E3`. Engine: trisul_probe/pcappipe/CmdDynagen.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No (Inactive) |

## What it measures

- This is a [filtered counter group](/docs/guide/ag/context/filtered_countergroups). The rule is stored in the `TRISUL_COUNTER_GROUP_FILTERS` table: parent **Hosts**, filter group **Apps**, FilterKeyList `p-0019,p-006D,p-006E,p-008F,p-00DC,p-03E1,p-03E3`: ports 25 (SMTP), 109 (POP2), 110 (POP3), 143 (IMAP), 220 (IMAP3), 993 (IMAPS) and 995 (POP3S).
- For each packet, flow record or flow-tracker update, the probe looks at the [Apps](/docs/guide/counter-groups/apps) keys in it. If one of them is in the list, every Hosts update in the same packet or record is copied here. Both endpoints are copied, so clients and servers both appear.
- The Apps key is the port the probe picked for that traffic, normally the lower of the two TCP or UDP ports.
- The group has no meter list of its own. It uses the [Hosts](/docs/guide/counter-groups/hosts) meter list, with the same IDs, names and topper counts.
- The group is Inactive in a new context. To use it, enable it under **Context: default → profile0 → Counter Groups** (see [Counter Group Settings](/docs/guide/ag/context/countergroup_settings)) and restart Trisul.
- Mail submission ports 465 and 587 are not in the list, so that traffic is not counted unless you add those keys.

## Keys

Same keys as Hosts: one IPv4 address in dotted uppercase hex.

| Key | Meaning |
|---|---|
| `C0.A8.01.19` | 192.168.1.25, an internal mail server |
| `C0.A8.01.0C` | 192.168.1.12, a mail client |
| `28.63.1A.65` | 40.99.26.101, an external mail service |

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
- [Web Hosts](/docs/guide/counter-groups/web-hosts), [SSH Hosts](/docs/guide/counter-groups/ssh-hosts), [Unusual Traffic Hosts](/docs/guide/counter-groups/unusual-traffic-hosts)
