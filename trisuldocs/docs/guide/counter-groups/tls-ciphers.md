# TLS Ciphers

Counts TLS handshakes and bytes, keyed by the cipher suite the server picks in its ServerHello.

| Property | Value |
|---|---|
| GUID | `{5B64A573-623F-4F5B-8865-78C62BF466A7}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Cipher suite ID, 4 uppercase hex digits |
| Implementation | Native C++ — CPICGTLSCipherSuite (trisul_probe/src/sysplugs/httpmeters/PICGTLSCipherSuite.cpp), fed by CFilterTCPReass::Stmproc_TLS (trisul_probe/src/pcappipe/FilterTCPReass.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly parses the TLS handshake. Each ServerHello adds 1 to the Hits meter of the cipher suite it selects.
- From that point on, every packet of the flow, in both directions, adds its wire length to the Total Traffic meter of that key.
- The cipher suite is sent in clear text in TLS 1.0 to 1.3, so TLS 1.3 sessions are counted too.
- Only TCP is handled. QUIC (TLS over UDP) is not counted.
- Requires TCP reassembly (on by default). Reassembly is off in `NETFLOW_TAP` mode.

## Keys

The key is the 2-byte IANA cipher suite value written as 4 uppercase hex digits. The internal tracker string for this attribute is `TLS:CIPHER`.

| Key | Meaning |
|---|---|
| `C02F` | ECDHE_RSA_W_AES_128_GCM_SHA256 |
| `C030` | ECDHE_RSA_W_AES_256_GCM_SHA384 |
| `CCA8` | TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 |
| `1301` | TLS_AES_128_GCM_SHA256 (TLS 1.3). No label is preloaded, so the UI shows `1301`. |

Labels for about 330 IANA cipher suites, from `0000` to `CCAE`, are preloaded when the group is created. Most use `_W_` as short for `_WITH_`. The TLS 1.3 suites `1301` to `1305` have no preloaded label.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. Each TLS flow feeds one cipher key, so Total Traffic here is close to the TLS traffic seen after the ServerHello. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 20 | 20 | Wire bytes of every flow packet seen after the ServerHello, both directions. |
| 1 | Hits | VT_COUNTER | hits | 20 | 20 | +1 for each ServerHello that selects this cipher suite. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TLS Orgs](/docs/guide/counter-groups/tls-orgs)
- [TLS CAs](/docs/guide/counter-groups/tls-ca)
