# External Syslog IP

Defined to count external IP addresses learned from FortiGate syslog. No script in the app writes to it.

| Property | Value |
|---|---|
| GUID | `{459BACD7-8F16-428F-2882-9DED4801C46D}` |
| Layer | External Data |
| Input | Syslog |
| Key type | IPv4 address |
| Implementation | Lua — newcg-external.lua (apps/analyzers/fortigate-connector) |
| Trisul App | fortigate-connector (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- The group is created by `newcg-external.lua`. No Lua file in the app calls `update_counter` on it, so it stays empty.
- The app's crosskey **UserIDxHosts** (`{232B3FB7-C9E5-4E67-9C17-9B81B32333B9}`, [User-ID](/docs/guide/counter-groups/user-id) × External Syslog IP) uses it as the second key, so that crosskey also stays empty.
- For external IP traffic, use [External Hosts](/docs/guide/counter-groups/external-hosts).

## Keys

No keys are created by the current code.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Always 0 with the current code. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Not populated by the current code. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 100 | 0 | Not populated by the current code. |
| 2 | Xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Not populated by the current code. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [DHCP Hostnames](/docs/guide/counter-groups/dhcp-hostnames)
- [App Category](/docs/guide/counter-groups/fortigate-app-category)
