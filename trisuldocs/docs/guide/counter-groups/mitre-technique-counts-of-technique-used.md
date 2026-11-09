# MITRE Technique

Counts alerts, keyed by the MITRE ATT&CK technique ID attached to the alert.

| Property | Value |
|---|---|
| GUID | `{DC0296AA-61F2-413D-C8F3-97538F9C5418}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | MITRE ATT&CK technique ID |
| Implementation | Lua — mitre-technique.lua (trisul_probe/src/sysplugs/alertmeters/mitre-technique.lua) defines the group and labels; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert in the IDS alert pipeline that carries a MITRE technique ID adds 1 to that technique key. Alerts without one are skipped.
- Only Lua [input filter](/docs/lua/inputfilter) alerts can carry a MITRE ID. The script sets `MitreTechniqueID` in the table it returns from `step_alert`. Snort and Suricata alerts read from the IDS Unix socket have no MITRE fields.
- In practice this group is fed by the **Suricata via EVE UnixSocket** app. It copies `mitre_technique_id` from the rule's `metadata`. See [MITRE ATT&CK Framework Integration](/docs/guide/ug/alerts/mitre).
- Alerts that Lua scripts raise inside the packet pipeline are not counted here.

## Keys

The key is the technique ID exactly as supplied, at most 15 characters. A sub-technique ID such as `T1059.001` belongs in [MITRE Subtechnique](/docs/guide/counter-groups/mitre-subtechnique); this group stores whatever the alert puts in `MitreTechniqueID`.

| Key | Meaning |
|---|---|
| `T1059` | Command and Scripting Interpreter |
| `T1071` | Application Layer Protocol |
| `T1046` | Network Service Discovery |

Labels and descriptions are preloaded for 216 Enterprise techniques. Any other ID shows the ID as the label.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the number of alerts that had a technique ID. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | alerts | 10 | 0 | +1 for each alert tagged with this technique ID. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [MITRE Tactic](/docs/guide/counter-groups/mitre-tactic)
- [MITRE Subtechnique](/docs/guide/counter-groups/mitre-subtechnique)
- [Alert Signatures](/docs/guide/counter-groups/alert-signatures)
