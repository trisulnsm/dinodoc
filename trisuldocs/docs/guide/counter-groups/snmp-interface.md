# SNMP-Interface

Counts per-interface traffic on routers and switches from SNMP interface octet counters. The keys are the same router + ifIndex keys that FlowIntfs uses.

| Property | Value |
|---|---|
| GUID | `{9781DB2C-F78A-4F7F-A7E8-2B1A9A7BE71A}` |
| Layer | External Data |
| Input | SNMP |
| Key type | Agent IPv4 address + ifIndex |
| Implementation | Lua — snmp_walkpoll_key.lua, async_tasks.lua, snmp-interface-util.lua (apps/analyzers/snmppoll) |
| Trisul App | snmppoll (install from Trisul Apps; the "Meta App for SNMP" installs it) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. The group exists only after you install the app. |

## What it measures

- Every `ResolutionSeconds` (default 60), the app runs `snmpbulkwalk` against each configured agent. It walks `ifHCInOctets` (`.1.3.6.1.2.1.31.1.1.1.6`) into *Recv BW* and `ifHCOutOctets` (`.1.3.6.1.2.1.31.1.1.1.10`) into *Transmit BW*. The net-snmp tools must be installed on the probe.
- Both meters are delta rate counters. You get the rate between two successive polls, in bytes/s. Zero readings are skipped.
- The app polls only SNMP v2c and v3 agents. It reads the agents and credentials from the `snmp.ip`, `snmp.version`, `snmp.community` and v3 `snmp.*` key attributes in the FlowGens key database (`c-2314BB8E-...SQT`). You set these under **Netflow → Routers and Interfaces → SNMP Settings** (see [How to Configure SNMP](/docs/guide/howto/configuresnmp)).
- Every 60th poll, the app also walks `ifAlias` (`.1.3.6.1.2.1.31.1.1.1.18`) and writes each non-empty value as the key label.
- At flush, snmp-interface-util.lua sets the utilization meters from the `snmp.ifspeed` key attribute (bits/s) stored on the **FlowIntfs** keys (`c-C0B04CA7-...SQT`). Without that attribute, meters 3 and 4 stay empty.
- If a walk returns nothing, the app raises a "SNMP Poll Failed" user alert for that agent.

### Relationship to FlowIntfs

SNMP-Interface and [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs) are separate counter groups with different GUIDs, but they use the same key format. So one router port has the same key in both, and you can compare SNMP counters with NetFlow volume. The group's `ResolverCounterGUID` is set to FlowIntfs, so the UI can show the interface names that FlowIntfs already has. The app also reuses FlowIntfs key attributes for interface speed, and FlowGens key attributes for SNMP credentials, instead of keeping its own copies.

## Keys

The key is `<agent IP as dotted hex>_<ifIndex as 8 hex digits>`. The ifIndex is the last OID component of the walked value.

| Key | Meaning |
|---|---|
| `C0.A8.01.01_00000003` | Agent 192.168.1.1, ifIndex 3 (readable `192.168.1.1_3`) |
| `CB.00.71.01_0000022C` | Agent 203.0.113.1, ifIndex 556 |
| `0A.00.00.FE_00000001` | Agent 10.0.0.254, ifIndex 1 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each interface contributes its own octets once. Traffic that crosses two polled ports (in on one, out on another) appears on both. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total BW | VT_DELTA_RATE_COUNTER | Bps | 100 | 0 | Not populated by the current code. |
| 1 | Recv BW | VT_DELTA_RATE_COUNTER | Bps | 100 | 0 | Rate of `ifHCInOctets` between polls. |
| 2 | Transmit BW | VT_DELTA_RATE_COUNTER | Bps | 100 | 0 | Rate of `ifHCOutOctets` between polls. |
| 3 | Recv Util | VT_GAUGE | Pct | 100 | 0 | Recv BW × 8 × 100 / `snmp.ifspeed`. Set only when the FlowIntfs key has an ifSpeed. |
| 4 | Transmit Util | VT_GAUGE | Pct | 100 | 0 | Transmit BW × 8 × 100 / `snmp.ifspeed`. Set only when the FlowIntfs key has an ifSpeed. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 6 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs), [FlowGens](/docs/guide/counter-groups/flowgens)
- [Using SNMP](/docs/guide/ug/netflow/snmp)
