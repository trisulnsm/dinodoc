# JA4S FINGERPRINT

Counts TLS ServerHello messages by JA4S fingerprint, keyed by the full JA4S string.

| Property | Value |
|---|---|
| GUID | `{D8D4E3C2-AE5F-4B90-C7F6-234567890BCD}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | JA4S string (`a_b`, 20 chars) |
| Implementation | Lua — ja4shash.lua (apps/analyzers/tls-print) |
| Trisul App | tls-print (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- You must set `//Reassembly/TCPReassembly/Applications/EnableSSLRecordExtraction` to `true` in the probe config. Otherwise the script does not load.
- The script reads `TLS:RECORD` attributes from TCP reassembly. It parses only handshake records (type 22). It skips a record when the handshake length does not match the record length.
- Only ServerHello (handshake type 2) is used. A hello with no extensions is not counted.
- Each ServerHello adds 1 to both meters and adds a flow → JA4S edge. No labels are set.
- Set `LogHashes=true` in `config/trisulnsm_tls-fingerprint.lua` to print each flow and fingerprint to the log.

## Keys

One key is `<ja4s_a>_<ja4s_b>`, as built by `build_ja4s()`:

- `ja4s_a` (7 chars): `t`, then the TLS version (from the supported_versions extension when present, else the hello version: `13`, `12`, `11`, `10`, `s3`, `s2`, else `00`). Then the extension count (2 digits, no GREASE). Then the first two characters of the chosen ALPN, or `00`.
- `ja4s_b`: first 12 uppercase hex chars of SHA-256 over `<chosen cipher as 4 hex>_<extensions>`. The code **sorts** the extensions as 4-digit hex, comma separated.

| Key | Meaning |
|---|---|
| `t120400_<12 HEX>` | TLS 1.2, 4 extensions, no ALPN |
| `t1302h2_<12 HEX>` | TLS 1.3, 2 extensions, ALPN `h2` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Hits in the totals is the number of ServerHello records fingerprinted. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_COUNTER | hits | 20 | 40 | Short name `Hits`. 1 per ServerHello. |
| 1 | svr-hits | VT_COUNTER | hits | 20 | 40 | Short name `Server Hits`. 1 per ServerHello. Always equal to meter 0. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [JA4 FINGERPRINT](/docs/guide/counter-groups/ja4-hash)
- [JA3 FINGERPRINT](/docs/guide/counter-groups/ja3-hash)
