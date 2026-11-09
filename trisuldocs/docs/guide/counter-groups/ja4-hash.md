# JA4 FINGERPRINT

Counts TLS ClientHello messages by JA4 fingerprint, keyed by the full JA4 string.

| Property | Value |
|---|---|
| GUID | `{D7C3F2B1-9D4E-4A8F-B6E5-123456789ABD}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | JA4 string (`a_b_c`, 36 chars) |
| Implementation | Lua — ja4hash.lua (apps/analyzers/tls-print) |
| Trisul App | tls-print (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- You must set `//Reassembly/TCPReassembly/Applications/EnableSSLRecordExtraction` to `true` in the probe config. Otherwise the script does not load.
- The script reads `TLS:RECORD` attributes from TCP reassembly. It parses only handshake records (type 22). It skips a record when the handshake length does not match the record length.
- Only ClientHello (handshake type 1) is used. A hello with no extensions is not counted.
- Each ClientHello adds 1 to both meters. The script adds a flow → JA4 edge, and a JA4 → SNI hostname edge when SNI is present.
- No labels are set. There is no JA4 lookup database.
- Set `LogHashes=true` in `config/trisulnsm_tls-fingerprint.lua` to print each flow and fingerprint to the log.

## Keys

One key is `<ja4_a>_<ja4_b>_<ja4_c>`, as built by `build_ja4()`:

- `ja4_a` (10 chars): `t`, then the TLS version (`13`, `12`, `11`, `10`, `s3`, `s2`, else `00`; taken from supported_versions when present). Then `d` if SNI is present, else `i`. Then the cipher count (2 digits) and extension count (2 digits), both without GREASE and capped at 99. Then the **first two characters** of the first ALPN value, or `00` with no ALPN.
- `ja4_b`: first 12 uppercase hex chars of SHA-256 over the sorted cipher list (4-digit hex, comma separated).
- `ja4_c`: first 12 uppercase hex chars of SHA-256 over the sorted extensions without SNI (0) and ALPN (16), then `_` and the signature algorithms. Signature algorithms are also sorted.

| Key | Meaning |
|---|---|
| `t13d1516h2_<12 HEX>_<12 HEX>` | TLS 1.3, SNI present, 15 ciphers, 16 extensions, ALPN `h2` |
| `t12i0907ht_<12 HEX>_<12 HEX>` | TLS 1.2, no SNI, ALPN `http/1.1` shown as `ht` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Hits in the totals is the number of ClientHello records fingerprinted. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_COUNTER | hits | 20 | 40 | Short name `Hits`. 1 per ClientHello. |
| 1 | clt-hits | VT_COUNTER | hits | 20 | 40 | Short name `Client Hits`. 1 per ClientHello. Always equal to meter 0. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [JA4S FINGERPRINT](/docs/guide/counter-groups/ja4s-hash)
- [JA3 FINGERPRINT](/docs/guide/counter-groups/ja3-hash)
