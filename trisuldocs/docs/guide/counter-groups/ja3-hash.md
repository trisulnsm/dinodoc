# JA3 FINGERPRINT

Counts TLS handshakes by JA3 fingerprint, keyed by the MD5 hash of the ClientHello (JA3) or ServerHello (JA3S) fields.

| Property | Value |
|---|---|
| GUID | `{E8D5E68F-B320-49F3-C83D-66751C3B485F}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | MD5 hex string (32 uppercase chars) |
| Implementation | Lua — jahash.lua (apps/analyzers/tls-print) |
| Trisul App | tls-print (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- You must set `//Reassembly/TCPReassembly/Applications/EnableSSLRecordExtraction` to `true` in the probe config. Otherwise the script does not load.
- The script reads `TLS:RECORD` attributes from TCP reassembly. It parses only handshake records (type 22). It skips a record when the handshake length does not match the record length.
- ClientHello (handshake type 1) builds the JA3 string `version,ciphers,extensions,curves,point-formats`. Values are decimal and joined with `-`.
- ServerHello (handshake type 2) builds the JA3S string `version,cipher,extensions` into the **same** group. Client and server hashes share this group. Meters 1 and 2 tell them apart.
- GREASE values are removed from ciphers, extensions and curves. Extension 21 (padding) is left out. A hello with no extensions is not counted.
- Each hello adds 1 to Hits and 1 to Client Hits or Server Hits. The flow is tagged with the first 6 characters of the hash.
- Edges: hash ↔ SNI hostname (or `No-SNI-Ext` as a flow edge) and flow → hash.
- Set `LogHashes=true` in `config/trisulnsm_tls-fingerprint.lua` to print each flow and fingerprint to the log.

## Keys

One key is the MD5 of the JA3 or JA3S string, as 32 **uppercase** hex characters (`T.util.bin2hex`).

The script looks up each hash in `tls-fingerprints.json`. It searches `//App/DataDirectory/plugins/` first, then the app directory. The file stores hashes in lowercase. The script converts them to uppercase when it loads, so they match the keys. A hit sets that entry's `desc` as the label and the JA3 string as the key description, and adds a hash → client name edge. The stock file has 680 entries covering 608 distinct hashes. Where a hash is listed more than once, the last entry wins. Ten entries are JA3S server prints, with labels that begin `JA3S:`. All other entries are client prints.

| Key | Meaning |
|---|---|
| `93948924E733E9DF15A3BB44404CD909` | JA3 of Adium 1.5.10. Label `Adium 1.5.10 (a)` from the stock file, which lists it as `93948924e733e9df15a3bb44404cd909`. |
| `<32 uppercase hex chars>` | Any other client (JA3) or server (JA3S) print |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Hits in the totals is the number of ClientHello plus ServerHello records fingerprinted. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_COUNTER | hits | 20 | 40 | Short name `Hits`. 1 per ClientHello or ServerHello fingerprinted. |
| 1 | clt-hits | VT_COUNTER | hits | 20 | 40 | Short name `Client Hits`. 1 per ClientHello (JA3). |
| 2 | svr-hits | VT_COUNTER | hits | 20 | 40 | Short name `Server Hits`. 1 per ServerHello (JA3S). |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [JA4 FINGERPRINT](/docs/guide/counter-groups/ja4-hash)
- [JA4S FINGERPRINT](/docs/guide/counter-groups/ja4s-hash)
- [SNI](/docs/guide/counter-groups/sni)
