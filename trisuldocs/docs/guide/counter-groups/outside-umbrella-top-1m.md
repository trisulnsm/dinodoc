# Outside Umbrella Top-1M

Counts DNS names seen in traffic that are not in the Cisco Umbrella Top-1M list, keyed by the DNS name.

| Property | Value |
|---|---|
| GUID | `{3317EEB3-CE83-4C8F-E321-79E7194BD974}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | DNS name |
| Implementation | Lua — dns-resource.lua (apps/analyzers/umbrella-top-1m) |
| Trisul App | umbrella-top-1m (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `dns-resource.lua` watches the DNS resource group. For each DNS resource flushed, it looks up the resource URI (the DNS name) in a LevelDB copy of the Top-1M list. If the name is not there, the key gets +1.
- The lookup is an exact match on the full name. A subdomain counts as outside unless the list holds that exact name.
- Prerequisites: run `installfeed.sh` to build the LevelDB file `plugins/umbrella.level.<engine id>` in the Trisul data directory, and keep DNS resource extraction on (the default). If the file cannot be opened, nothing is counted for that flush.

## Keys

One key is one DNS name, as Trisul extracted it.

| Key | Meaning |
|---|---|
| `xk2j9qpz7m.info` | A rare, possibly DGA-generated domain |
| `updates.smallvendor.example` | A legitimate domain outside the list |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval, the total count of DNS resources outside the list. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_COUNTER | hits | 10 | 0 | +1 for each flushed DNS resource whose name is not in the Top-1M list. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Base Domains](/docs/guide/counter-groups/base-domain)
