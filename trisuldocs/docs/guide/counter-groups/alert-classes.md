# Alert Classes

Counts IDS alerts, keyed by the alert's classification.

| Property | Value |
|---|---|
| GUID | `{20BC4345-37F0-44D0-ABFF-3BED97363CB1}` |
| Layer | Alerts |
| Input | Alerts |
| Key type | Classification string |
| Implementation | Native C++ — CPICGAlertClass (trisul_probe/src/sysplugs/alertmeters/PICGAlertClass.cpp) defines the group and labels; CFilterGAU::CreateAuxCommands (trisul_probe/src/alertpipe/FilterGAU.cpp) updates it |
| Bucket / Topper | 300 s / 300 s |
| Enabled by default | Yes |

## What it measures

- Each alert that enters the IDS alert pipeline adds 1 to its classification key. The pipeline takes alerts from two sources:
  - Snort or Suricata alerts read from the IDS Unix socket. See [Setup IDS alerts](/docs/guide/howto/setup_ids_alerts).
  - Alerts returned by Lua [input filter](/docs/lua/inputfilter) scripts through `step_alert`, for example the **Suricata via EVE UnixSocket** app.
- Alerts that Lua scripts or plugins raise inside the packet pipeline are not counted here.
- The bucket size is 5 minutes, not 1 minute.

## Keys

The key depends on the alert source. It is at most 63 characters; longer values are cut.

| Key | Meaning |
|---|---|
| `cid-21` | Unix socket alert with classification number 21 (`trojan-activity`) |
| `cid-4` | Unix socket alert with classification number 4 (`attempted-recon`) |
| `Attempted Information Leak` | Suricata EVE app: the `category` text |
| `cid-xx` | Lua alert that did not set `ClassificationKey` |

For Unix socket alerts the key is `cid-` followed by the classification number from the IDS. Labels for `cid-0` to `cid-35` are preloaded from the standard Snort classification list, for example `cid-0` → `unclassified (0)`, `cid-23` → `network-scan`, `cid-33` → `policy-violation`. If your IDS numbers its classifications differently, the preloaded labels do not match.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the total number of IDS alerts. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Alerts | VT_COUNTER | Count | 20 | 0 | +1 for each alert with this classification. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Alert Signatures](/docs/guide/counter-groups/alert-signatures)
- [Alert Priorities](/docs/guide/counter-groups/alert-priorities)
