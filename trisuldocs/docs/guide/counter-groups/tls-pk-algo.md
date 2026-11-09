# TLS Public Key Algo

Counts TLS certificates by public key algorithm, and by curve name for EC keys, keyed by the algorithm name in the certificate text.

| Property | Value |
|---|---|
| GUID | `{88F603AE-4519-4E3D-E1C8-D1882E398724}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Algorithm name string |
| Implementation | Lua — counter_pk_algos.lua (group), tlscertalgos.lua (metering) (apps/analyzers/tls-metrics-pack) |
| Trisul App | tls-metrics-pack (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `tlscertalgos.lua` is an `fts_monitor` script on the **SSL Certs** full-text stream. Each document is the text dump of a certificate chain.
- The script splits the chain at each `-----END CERTIFICATE-----`. Each certificate in the chain adds 1 to its key, so one TLS session with a 3-certificate chain adds 3.
- The SSL Certs stream comes from TLS certificate extraction in the probe. If no certificates are extracted, this group stays empty.
- For each certificate the script also adds an edge from the algorithm key to the certificate CN in [TLS Orgs](/docs/guide/counter-groups/tls-orgs).

## Keys

One key is the value after `Public Key Algorithm:`. For `id-ecPublicKey` the key is `curve:` plus the value after `ASN1 OID:`. If there is no named curve, the key is `explicit-ec-curve`. No labels are set.

| Key | Meaning |
|---|---|
| `rsaEncryption` | RSA public key |
| `curve:prime256v1` | EC key on the P-256 curve |
| `curve:secp384r1` | EC key on the P-384 curve |
| `explicit-ec-curve` | EC key with explicit curve parameters |

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

- [TLS Sig Algo](/docs/guide/counter-groups/tls-sig-algo)
- [TLS Versions](/docs/guide/counter-groups/tls-versions)
- [TLS CAs](/docs/guide/counter-groups/tls-ca)
