# Prune-PCAP

Counts flows whose packets were not stored to PCAP because the server matched a skip pattern, keyed by the matched pattern.

| Property | Value |
|---|---|
| GUID | `{1E92FD61-5129-499D-0A12-883E9FC1C00C}` |
| Layer | System |
| Input | Packets |
| Key type | Matched domain keyword |
| Implementation | Lua — new_counters.lua, fed by skip_youtube.lua (apps/analyzers/prune-encrypted-pcap) |
| Trisul App | prune-encrypted-pcap (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- When a new flow starts, `skip_youtube.lua` looks up the flow's Z-end IP in the passive DNS LevelDB to get a domain name.
- If the name matches the skip regex, the flow's packets are not stored and the key for the matched keyword gets +1.
- The default regex is `(youtube|googlevideo|twitter|ytimg|twimg|netflix|nflxvideo|nflximg|nflxext|acorn.tv|tubitv|atv-ext.amazon.com|atv-ps.amazon.com|hulu)`. You can override it with `DNS_Regex_To_Skip` in `trisulnsm_skip_youtube.lua` in the context config directory.
- Requires the passive-dns app. Without its LevelDB nothing is skipped or counted.

## Keys

The text captured by the regex, that is the keyword that matched.

| Key | Meaning |
|---|---|
| `googlevideo` | Flows to YouTube video servers (`*.googlevideo.com`) |
| `nflxvideo` | Flows to Netflix video servers |
| `twimg` | Flows to Twitter image servers |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval, the total flows excluded from PCAP. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | flows | VT_COUNTER | Flws | 20 | 20 | +1 for each new flow excluded from PCAP storage by this keyword. |
| 1 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
