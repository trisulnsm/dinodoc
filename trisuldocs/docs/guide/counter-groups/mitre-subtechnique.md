# MITRE Subtechnique

Counts alerts, keyed by the MITRE ATT&CK sub-technique ID attached to the alert.

| Property | Value |
|---|---|
| GUID | `{A2B72E5D-9E80-4796-23A9-618ABCEE1D57}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | MITRE ATT&CK sub-technique ID |
| Implementation | Lua — mitre-subtechnique.lua (trisul_probe/src/sysplugs/alertmeters/mitre-subtechnique.lua) defines the group and labels; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert in the IDS alert pipeline that carries a MITRE sub-technique ID adds 1 to that key. Alerts without one are skipped. The sub-technique is optional in MITRE rules, so this group usually has fewer hits than MITRE Technique.
- Only Lua [input filter](/docs/lua/inputfilter) alerts can carry a MITRE ID. The script sets `MitreSubTechniqueID` in the table it returns from `step_alert`. Snort and Suricata alerts read from the IDS Unix socket have no MITRE fields.
- In practice this group is fed by the **Suricata via EVE UnixSocket** app. It copies `mitre_subtechnique_id` from the rule's `metadata`. See [MITRE ATT&CK Framework Integration](/docs/guide/ug/alerts/mitre).
- Alerts that Lua scripts raise inside the packet pipeline are not counted here.

## Keys

The key is the sub-technique ID exactly as supplied, in the form `Txxxx.yyy`, at most 15 characters.

| Key | Meaning |
|---|---|
| `T1059.001` | PowerShell |
| `T1071.001` | Web Protocols |
| `T1053.005` | Scheduled Task |

Labels are preloaded for 475 Enterprise sub-techniques. Any other ID shows the ID as the label.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the number of alerts that had a sub-technique ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | alerts | 10 | 0 | +1 for each alert tagged with this sub-technique ID. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [MITRE Tactic](/docs/guide/counter-groups/mitre-tactic)
- [MITRE Technique](/docs/guide/counter-groups/mitre-technique-counts-of-technique-used)
