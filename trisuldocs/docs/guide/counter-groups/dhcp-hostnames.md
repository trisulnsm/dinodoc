# DHCP Hostnames

Copies the traffic of each Internal Hosts key into a group meant to be keyed by DHCP hostname. With the current code the keys stay as IP addresses.

| Property | Value |
|---|---|
| GUID | `{A8D34B1F-E0E5-458D-012A-0A31B0746D41}` |
| Layer | Derived |
| Input | Internal |
| Key type | IPv4 address (hostname intended) |
| Implementation | Lua — newcg-hostname.lua, fed by cg_monitor_hosts.lua (apps/analyzers/fortigate-connector) |
| Trisul App | fortigate-connector (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `cg_monitor_hosts.lua` watches [Internal Hosts](/docs/guide/counter-groups/internal-hosts). On each flush of an Internal Hosts key it adds meters 0, 1 and 2 (rate × 60, in bytes) to this group.
- The script would replace the IP key with a hostname from a DHCP lease, and drop the lease after its expiry time, when it receives a lease message (`{DE53D193-9A98-4443-2289-84E537A5820A}`). No script in the app sends that message, so every key is the Internal Hosts IP key.
- The group's resolver is [Hosts](/docs/guide/counter-groups/hosts), so the UI shows the label that Hosts has for the IP. `forti-dhcp.lua` sets those Hosts labels from the syslog `user`, `srcname`, `hostname` and `url` fields.
- The ad-connector app ships the same `cg_monitor_hosts.lua` and also writes to this group when installed, so with both apps installed every Internal Hosts value is added twice.

## Keys

One key is one internal IPv4 host, in Trisul hex form.

| Key | Meaning |
|---|---|
| `C0.A8.01.0A` | 192.168.1.10, shown with its Hosts label (for example `LAPTOP-JSMITH`) |
| `0A.00.05.21` | 10.0.5.33 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval, equal to the Internal Hosts total (twice that with ad-connector also installed). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Internal Hosts meter 0 (Total) for this host. |
| 1 | Recv | VT_RATE_COUNTER | Bps | 100 | 0 | Internal Hosts meter 1 (Received) for this host. |
| 2 | Xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Internal Hosts meter 2 (Transmit) for this host. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Internal Hosts](/docs/guide/counter-groups/internal-hosts)
- [User-ID](/docs/guide/counter-groups/user-id)
- [External Syslog IP](/docs/guide/counter-groups/external-syslog-ip)
