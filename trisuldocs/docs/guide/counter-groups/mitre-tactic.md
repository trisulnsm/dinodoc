# MITRE Tactic

Counts alerts, keyed by the MITRE ATT&CK tactic ID attached to the alert.

| Property | Value |
|---|---|
| GUID | `{70703134-26E7-4A41-7A29-46DFC85C3778}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | MITRE ATT&CK tactic ID |
| Implementation | Lua — mitre-tactic.lua (trisul_probe/src/sysplugs/alertmeters/mitre-tactic.lua) defines the group and labels; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert in the IDS alert pipeline that carries a MITRE tactic ID adds 1 to that tactic key. Alerts without one are skipped.
- Only Lua [input filter](/docs/lua/inputfilter) alerts can carry a MITRE ID. The script sets `MitreTacticID` in the table it returns from `step_alert`. Snort and Suricata alerts read from the IDS Unix socket have no MITRE fields.
- In practice this group is fed by the **Suricata via EVE UnixSocket** app. It copies `mitre_tactic_id` from the rule's `metadata`. See [MITRE ATT&CK Framework Integration](/docs/guide/ug/alerts/mitre) for the rule format.
- Alerts that Lua scripts raise inside the packet pipeline are not counted here.

## Keys

The key is the tactic ID exactly as supplied, at most 15 characters.

| Key | Meaning |
|---|---|
| `TA0002` | Execution |
| `TA0007` | Discovery |
| `TA0011` | Command and Control |
| `TA0043` | Reconnaissance |

Labels and descriptions are preloaded for the 14 Enterprise tactics `TA0001` to `TA0011`, `TA0040`, `TA0042` and `TA0043`. Any other ID shows the ID as the label.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the number of alerts that had a tactic ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | alerts | 10 | 0 | +1 for each alert tagged with this tactic ID. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [MITRE Technique](/docs/guide/counter-groups/mitre-technique-counts-of-technique-used)
- [MITRE Subtechnique](/docs/guide/counter-groups/mitre-subtechnique)
- [Alert Signatures](/docs/guide/counter-groups/alert-signatures)
