# Internal Hosts

The subset of [Hosts](/docs/guide/counter-groups/hosts) keys that are inside your Home Networks, keyed by IPv4 address.

| Property | Value |
|---|---|
| GUID | `{889900CC-0063-11A5-8380-FEBDBABBDBEA}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | IPv4 address |
| Implementation | Derived — stat based (statval) group of Hosts: meter 6 (Homenet) > 0. Engine: trisul_probe/pcappipe/StatIdValProc.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- This is a [stat based counter group](/docs/guide/ag/context/statbased_countergroups). The rule is stored in the `TRISUL_COUNTER_GROUP_STATVALS` table: parent Hosts, StatID `6`, operator `>`, value `0`.
- For each packet or flow record, the probe checks every Hosts update. If an update carries meter 6 (Homenet) with a value above 0, the whole update is copied here under the same key. Hosts sets meter 6 only when the key itself is inside a [Home Network](/docs/guide/ag/context/home_networks), so this group holds home hosts only.
- The group has no meter list of its own. It uses the Hosts meter list, with the same IDs, names and topper counts.
- Only meters that arrive in the same update as meter 6 are copied: traffic (0–3, 6), TCP SYN counts in packet mode (8–10) and Flow Records (16). The probe writes Active conns (4), Attacker alerts (5) and Victim alerts (12) to this group directly, choosing Internal or External Hosts by the IP's home network status.
- If you define no Home Networks, this group stays empty.

## Keys

Same keys as Hosts: one IPv4 address in dotted uppercase hex.

| Key | Meaning |
|---|---|
| `C0.A8.01.02` | 192.168.1.2 |
| `0A.01.14.05` | 10.1.20.5 |
| `AC.10.00.0A` | 172.16.0.10 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A packet between two home hosts updates two keys here, so internal traffic is counted twice. |

## Meter list

Inherited from Hosts.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the home host is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the home host is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the home host is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets where the home host is source or destination. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | Written directly by the flow tracker: +1 on flow create, −1 on expiry, for each home endpoint. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | Written directly at alert flush: +1 for each alert with flow information whose source IP is this host. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total. This is the selection meter. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Always empty here: a home host never gets meter 7. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | Copied from Hosts. Packet input only. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | Copied from Hosts. Packet input only. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | Copied from Hosts. |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Copied only if the Badfellas update arrives together with the traffic update. <!-- TODO(verify): whether Badfellas meter 11 updates share the packet/flow scroll with meter 6 --> |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | Written directly at alert flush: +1 for each alert with flow information whose destination IP is this host. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | Not populated by the current code. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | Copied from Hosts: +1 per flow record with this home host at either end. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [External Hosts](/docs/guide/counter-groups/external-hosts): the complement, Hosts meter 7 > 0
- [Internal Hosts v6](/docs/guide/counter-groups/internal-hosts-v6)
