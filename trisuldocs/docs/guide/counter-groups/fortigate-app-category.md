# App Category

Intended to count flow traffic per Fortinet application category (the `appcat` field of FortiGate traffic logs).

| Property | Value |
|---|---|
| GUID | `{2DE5A613-BC31-4C73-1EAA-B527FDD40E7D}` |
| Layer | External Data |
| Input | Syslog |
| Key type | Application category name |
| Implementation | Lua — newcg-appcat.lua, fed by forti-dhcp.lua and mmon.lua (apps/analyzers/fortigate-connector) |
| Trisul App | fortigate-connector (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. `newcg-appcat.lua` is not listed in the app's `pkg.yaml`, so the group is not created unless you add the file. |

## What it measures

The design is:

1. `forti-dhcp.lua` reads FortiGate syslog (Trisul SYSLOG protocol, also in NetFlow tap mode). For a log with `appcat=` and `dstip=`, it posts a `CAT|<dstip>|<appcat>` message.
2. `mmon.lua` keeps a table of destination IP → category. For each new flow record it looks up the flow's Z-end IP and, on a match, adds the flow bytes to that category.

`mmon.lua` stores categories only for messages that start with `APPCAT`, but `forti-dhcp.lua` sends `CAT`. The lookup never matches, so this group is not populated by the current code.

## Keys

The category text as FortiGate logs it, for example:

| Key | Meaning |
|---|---|
| `Video/Audio` | Flows to IPs FortiGate classified as Video/Audio |
| `Social.Media` | Flows to IPs classified as Social.Media |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Flow bytes A→Z plus Z→A. Not populated by the current code. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 100 | 0 | Flow bytes Z→A. Not populated by the current code. |
| 2 | Xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Flow bytes A→Z. Not populated by the current code. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [App-ID](/docs/guide/counter-groups/app-id): the same app fills App-ID from the `app` / `service` fields.
- [User-ID](/docs/guide/counter-groups/user-id): the same app fills User-ID from the `user` field.
- The app also installs the crosskey **InternalHostXApplicationCategory** (`{7E6B36E7-B1EC-45A9-BC6F-EDD3C8FB17B7}`, Internal Hosts × App Category) and a flow tagger `AUTO:appcat`.
