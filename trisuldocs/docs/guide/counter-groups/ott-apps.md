# OTT Apps

Estimates traffic to OTT and cloud services, keyed by app name. The app name comes from the Passive DNS name of each top external host, matched against a pattern map.

| Property | Value |
|---|---|
| GUID | `{0D5FFF94-BDA1-4BDB-A13D-A5AED7D6A96C}` |
| Layer | Derived |
| Input | Packets, Flows |
| Key type | App name string |
| Implementation | Lua — ottcg.lua (group), resolve-ext-toppers.lua (metering), appmap.lua (patterns) (apps/analyzers/ott) |
| Trisul App | ott (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `resolve-ext-toppers.lua` is a `cg_monitor` script on [External Hosts](/docs/guide/counter-groups/external-hosts). It runs at each topper flush of External Hosts meter 1 (Received) and meter 2 (Transmit), every 300 s.
- For each topper key it takes the host's topper value, multiplies it by 300, and adds the result to an app key. Received goes to meter 0 and Transmit goes to meter 1.
- Only hosts in the External Hosts topper lists are counted, so this group shows the share of top external traffic, not all traffic.
- Only IPv4 keys are handled. IPv6 toppers are skipped.
- The name comes from the Passive DNS LevelDB `config/PassiveDNSDB.level.<engine>` under `//App/DBRoot`. If the database cannot be opened, nothing is updated.
- Updates arrive once per topper flush, so most 60 s buckets are empty and every fifth one holds about 300 s of bytes.

## Keys

One key is decided as follows for each top external IP:

1. Look up the IP in Passive DNS.
2. Run the name through the Aho-Corasick matcher (`match_one`) built from the patterns in `appmap.lua`. A match gives the pattern's app name, e.g. `googlevideo` → `YOUTUBE`.
3. If no pattern matches, the key is the DNS name itself.
4. If the IP has no Passive DNS entry, the key is `INTERNET`.

No labels are set. The key is the readable name.

| Key | Meaning |
|---|---|
| `YOUTUBE` | Names matching `youtube`, `ytimg`, `googlevideo`, `ggpht`, `gvt1` |
| `AMAZON PRIME` | Names matching `primevideo`, `aiv-cdn`, `pv-cdn` and others |
| `GMAIL` | Names matching `mail.google`, `gmail` and others |
| `edge-12.example.net` | DNS name that matched no pattern |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. It covers only the top external hosts, not all traffic. |
| `INTERNET` | Top external hosts with no Passive DNS name. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | bytes recv | VT_RATE_COUNTER | Bps | 100 | 0 | Short name `Bytes Receive`. External Hosts meter 1 (Received) topper value × 300. |
| 1 | bytes xmit | VT_RATE_COUNTER | Bps | 100 | 0 | Short name `Bytes Transmit`. External Hosts meter 2 (Transmit) topper value × 300. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [OTT XKey](/docs/guide/counter-groups/ott-xkey)
- [External Hosts](/docs/guide/counter-groups/external-hosts)
- [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs)
