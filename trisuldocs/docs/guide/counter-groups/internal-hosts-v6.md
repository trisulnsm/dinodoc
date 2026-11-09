# Internal Hosts v6

The subset of [HostsIPv6](/docs/guide/counter-groups/hostsIPv6) keys that are inside your Home Networks, keyed by IPv6 address.

:::note
This group is not created by the probe source code and is not in the default configuration database of a new context. It exists only when a stat based rule for it has been added to the context's `TRISUL_COUNTER_GROUP_STATVALS` table. If you do not see it under Counter Groups, your context does not have it. The page describes how it behaves when it is present.
:::

<!-- TODO(verify): which installer, migration or release adds Internal Hosts v6 ({0BDE3B47-...}); it was found only in one dev context's TRISULCONFIG.SQDB -->

| Property | Value |
|---|---|
| GUID | `{0BDE3B47-B465-43DD-9275-45829D9A9748}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | IPv6 address |
| Implementation | Derived — stat based (statval) group of HostsIPv6: meter 6 (Homenet) > 0. Engine: trisul_probe/pcappipe/StatIdValProc.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No (only present if configured) |

## What it measures

- A [stat based counter group](/docs/guide/ag/context/statbased_countergroups) with the rule: parent HostsIPv6, StatID `6`, operator `>`, value `0`.
- For each packet or flow record, every HostsIPv6 update that carries meter 6 (Homenet) above 0 is copied here under the same key. HostsIPv6 sets meter 6 only when the address is inside an IPv6 [Home Network](/docs/guide/ag/context/home_networks).
- The meter list is inherited from HostsIPv6. Only traffic (0–3, 6) and Flow Records (16) arrive with meter 6. The probe writes Active conns and alert counts directly only to the IPv4 Internal and External Hosts groups, so those meters stay empty here.

## Keys

Same keys as HostsIPv6: 32 uppercase hex characters, the 16 address bytes in network order with no separators. The UI shows the compressed form.

| Key | Meaning |
|---|---|
| `20010DB8000100000000000000000010` | 2001:db8:1::10 |
| `FD000000000000000000000000000005` | fd00::5 (unique local) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Traffic between two home addresses updates two keys, so it is counted twice. |

## Meter list

Inherited from HostsIPv6.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the home address is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the home address is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the home address is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets where the home address is source or destination. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | Not populated by the current code. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total. This is the selection meter. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Always empty here. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | Not populated by the current code. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | Copied from HostsIPv6: +1 per IPv6 flow record with this home address at either end. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [External Hosts v6](/docs/guide/counter-groups/external-hosts-v6)
- [Internal Hosts](/docs/guide/counter-groups/internal-hosts): the IPv4 equivalent
