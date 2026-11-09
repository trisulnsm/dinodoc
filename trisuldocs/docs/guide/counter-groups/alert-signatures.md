# Alert Signatures

Counts IDS alerts, keyed by the signature (rule) ID that raised them.

| Property | Value |
|---|---|
| GUID | `{A0FA9464-B496-4A20-A9AB-4D2D09AFF902}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | Signature ID string |
| Implementation | Native C++ — CPICGAlertSigs (trisul_probe/src/sysplugs/alertmeters/PICGAlertSigs.cpp) defines the group; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 300 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert that enters the IDS alert pipeline adds 1 to its signature key. The pipeline takes alerts from two sources:
  - Snort or Suricata alerts read from the IDS Unix socket. See [Setup IDS alerts](/docs/guide/howto/setup_ids_alerts).
  - Alerts returned by Lua [input filter](/docs/lua/inputfilter) scripts through `step_alert`, for example the **Suricata via EVE UnixSocket** app.
- Alerts that Lua scripts or plugins raise inside the packet pipeline do not pass through this pipeline and are not counted here.
- The bucket size is 5 minutes, not 1 minute.

## Keys

The key depends on the alert source. It is at most 63 characters.

| Key | Meaning |
|---|---|
| `sid-2001219` | Snort or Suricata alert from the Unix socket, signature ID 2001219. The generator ID is not part of the key. |
| `2001219` | The same rule from the Suricata EVE app, which passes `signature_id` as is |
| `9000001` | A custom rule, for example a MITRE rule |

The label is the alert message, for example `ET SCAN Potential SSH Scan`. Trisul sets it from the alert message (Unix socket) or from `SigIDLabel` (Lua).

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the total number of IDS alerts. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | Count | 20 | 0 | +1 for each alert with this signature ID. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Alert Classes](/docs/guide/counter-groups/alert-classes)
- [Alert Priorities](/docs/guide/counter-groups/alert-priorities)
- [MITRE Technique](/docs/guide/counter-groups/mitre-technique-counts-of-technique-used)
