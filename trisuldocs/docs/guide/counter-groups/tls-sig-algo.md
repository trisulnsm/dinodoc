# TLS Sig Algo

Counts TLS certificates by signature algorithm, keyed by the algorithm name in the certificate text.

| Property | Value |
|---|---|
| GUID | `{C90640F6-ACD1-4BE5-92FF-A417DC6A987A}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Algorithm name string |
| Implementation | Lua — counter_sig_algos.lua (group), tlscertalgos.lua (metering) (apps/analyzers/tls-metrics-pack) |
| Trisul App | tls-metrics-pack (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `tlscertalgos.lua` is an `fts_monitor` script on the **SSL Certs** full-text stream. Each document is the text dump of a certificate chain.
- The script splits the chain at each `-----END CERTIFICATE-----`. Each certificate in the chain adds 1 to its key, so one TLS session with a 3-certificate chain adds 3.
- The SSL Certs stream comes from TLS certificate extraction in the probe. If no certificates are extracted, this group stays empty.
- For each certificate the script also adds an edge from the algorithm key to the certificate CN in [TLS Orgs](/docs/guide/counter-groups/tls-orgs).

## Keys

One key is the first value after `Signature Algorithm:` in each certificate. No labels are set.

| Key | Meaning |
|---|---|
| `sha256WithRSAEncryption` | RSA signature with SHA-256 |
| `ecdsa-with-SHA384` | ECDSA signature with SHA-384 |
| `sha1WithRSAEncryption` | RSA signature with SHA-1 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval: the number of certificates seen, counting every certificate in each chain. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | certs | VT_COUNTER | Certs | 10 | 0 | Short name `Certs`. 1 per certificate in a chain. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TLS Public Key Algo](/docs/guide/counter-groups/tls-pk-algo)
- [TLS Versions](/docs/guide/counter-groups/tls-versions)
- [TLS CAs](/docs/guide/counter-groups/tls-ca)
