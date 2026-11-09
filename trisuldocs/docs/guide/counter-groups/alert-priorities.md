# Alert Priorities

Counts IDS alerts, keyed by alert priority.

| Property | Value |
|---|---|
| GUID | `{9EFAFDD0-6CBB-4C04-8B13-2C8E0A9D3F85}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | `sn-` + priority number |
| Implementation | Native C++ — CPICGAlertPrio (trisul_probe/src/sysplugs/alertmeters/PICGAlertPrio.cpp) defines the group and labels; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 300 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert that enters the IDS alert pipeline adds 1 to its priority key. The pipeline takes alerts from two sources:
  - Snort or Suricata alerts read from the IDS Unix socket. See [Setup IDS alerts](/docs/guide/howto/setup_ids_alerts).
  - Alerts returned by Lua [input filter](/docs/lua/inputfilter) scripts through `step_alert`. The **Suricata via EVE UnixSocket** app passes the EVE `severity` as the priority.
- A Lua alert that does not set `Priority` is counted as priority 1.
- Alerts that Lua scripts or plugins raise inside the packet pipeline are not counted here.
- The bucket size is 5 minutes, not 1 minute.

## Keys

The key is `sn-` followed by the priority number. Lower numbers are more severe.

| Key | Meaning |
|---|---|
| `sn-1` | Priority 1. Label `1 (High)` |
| `sn-2` | Priority 2. Label `2 (Medium)` |
| `sn-3` | Priority 3. Label `3 (Low)` |
| `sn-4` | Priority 4. No preloaded label |

Labels are preloaded for `sn-1` to `sn-3` only.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the total number of IDS alerts. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | Count | 20 | 0 | +1 for each alert with this priority. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Alert Signatures](/docs/guide/counter-groups/alert-signatures)
- [Alert Classes](/docs/guide/counter-groups/alert-classes)
