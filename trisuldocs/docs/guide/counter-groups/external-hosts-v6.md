# External Hosts v6

The subset of [HostsIPv6](/docs/guide/counter-groups/hostsIPv6) keys that are outside your Home Networks, keyed by IPv6 address.

:::note
This group is not created by the probe source code and is not in the default configuration database of a new context. It exists only when a stat based rule for it has been added to the context's `TRISUL_COUNTER_GROUP_STATVALS` table. If you do not see it under Counter Groups, your context does not have it. The page describes how it behaves when it is present.
:::

<!-- TODO(verify): which installer, migration or release adds External Hosts v6 ({9DC000A5-...}); it was found only in one dev context's TRISULCONFIG.SQDB -->

| Property | Value |
|---|---|
| GUID | `{9DC000A5-E122-4BDC-BC56-D3594A00BB53}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | IPv6 address |
| Implementation | Derived — stat based (statval) group of HostsIPv6: meter 7 (External) > 0. Engine: trisul_probe/pcappipe/StatIdValProc.cpp |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No (only present if configured) |

## What it measures

- A [stat based counter group](/docs/guide/ag/context/statbased_countergroups) with the rule: parent HostsIPv6, StatID `7`, operator `>`, value `0`.
- For each packet or flow record, every HostsIPv6 update that carries meter 7 (External) above 0 is copied here under the same key. HostsIPv6 sets meter 7 only when the address is outside every IPv6 [Home Network](/docs/guide/ag/context/home_networks).
- The meter list is inherited from HostsIPv6. Only traffic (0–3, 7) and Flow Records (16) arrive with meter 7. The probe writes Active conns and alert counts directly only to the IPv4 Internal and External Hosts groups, so those meters stay empty here.

## Keys

Same keys as HostsIPv6: 32 uppercase hex characters, the 16 address bytes in network order with no separators. The UI shows the compressed form.

| Key | Meaning |
|---|---|
| `2A001450400900000000000000002004` | 2a00:1450:4009::2004 |
| `24068E0000000000000000000000001A` | 2406:8e00::1a |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Transit traffic between two external addresses updates two keys, so it is counted twice. |

## Meter list

Inherited from HostsIPv6.

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 50 | 0 | Bytes where the external address is source or destination. |
| 1 | Received | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the external address is the destination. |
| 2 | Transmit | VT_RATE_COUNTER | Bps | 10 | 0 | Bytes where the external address is the source. |
| 3 | Total Packets | VT_RATE_COUNTER | pps | 10 | 0 | Packets where the external address is source or destination. |
| 4 | Active conns | VT_RUNNING_COUNTER | conns | 50 | 0 | Not populated by the current code. |
| 5 | Attacker alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 6 | Homenet | VT_RATE_COUNTER | Bps | 20 | 0 | Always empty here. |
| 7 | External | VT_RATE_COUNTER | Bps | 20 | 0 | Same bytes as Total. This is the selection meter. |
| 8 | TCP SYN sent | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 9 | TCP SYN recv | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 10 | TCP SYNACK sent | VT_COUNTER | packets | 10 | 0 | Not populated by the current code. |
| 11 | Blacklist alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 12 | Victim alerts | VT_COUNTER | alerts | 20 | 0 | Not populated by the current code. |
| 13 | New conns | VT_COUNTER | conns | 20 | 0 | Not populated by the current code. |
| 14 | Into Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 15 | Outof Interface | VT_RATE_COUNTER | Bps | 20 | 0 | Not populated by the current code. |
| 16 | Flow Records | VT_COUNTER | Bps | 20 | 0 | Copied from HostsIPv6: +1 per IPv6 flow record with this external address at either end. |
| 17 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 18 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Internal Hosts v6](/docs/guide/counter-groups/internal-hosts-v6)
- [External Hosts](/docs/guide/counter-groups/external-hosts): the IPv4 equivalent
