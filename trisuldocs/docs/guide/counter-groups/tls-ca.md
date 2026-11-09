# TLS CAs

Counts how often each certificate authority appears in server certificate chains, keyed by the CA's organization name.

| Property | Value |
|---|---|
| GUID | `{15856A98-7F87-46D7-84D2-18DD549F8A6F}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | CA organization name |
| Implementation | Native C++ — CPICGTLSCA (trisul_probe/src/sysplugs/httpmeters/PICGTLSCA.cpp), fed by CFilterTCPReass::Stmproc_TLS (trisul_probe/src/pcappipe/FilterTCPReass.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly decodes each certificate in the TLS Certificate message. The first certificate is the server certificate. Every certificate after it is a CA certificate.
- The last certificate in the chain adds 1 to **Root CA**. Each other CA certificate adds 1 to **Inter CA**.
- Servers usually do not send the actual root. In that case the last intermediate they send is counted as Root CA.
- If the chain has only the server certificate, Trisul adds 1 to Root CA under the key `Self Signed`.
- This group counts hits only. It has no byte meter.
- Not counted: TLS 1.3 sessions, because the certificate is encrypted, and resumed sessions, which carry no certificate.
- Requires TCP reassembly (on by default). Reassembly is off in `NETFLOW_TAP` mode.

## Keys

The key is the subject `O=` value of the CA certificate, or its `CN=` when it has no `O=`. CA certificates with neither are skipped. Trisul trims spaces and removes a trailing `Inc`, `Inc.`, `INC` or `INC.` (with any comma before it) only when it is a separate word, so `Incapsula` keeps its name. It then removes the first remaining comma and any trailing `.`, `,` or space, and cuts the result to 50 characters.

| Key | Meaning |
|---|---|
| `Let's Encrypt` | Let's Encrypt intermediate, for example R11 |
| `DigiCert` | From `O=DigiCert Inc` |
| `Google Trust Services` | Google Trust Services CA |
| `Self Signed` | Chain had only one certificate |

The label is the same as the key.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. A chain with two CA certificates adds one Inter CA hit and one Root CA hit. |
| `Self Signed` | Chains with no CA certificate. Counted on the Root CA meter. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Inter CA | VT_COUNTER | hits | 50 | 20 | +1 each time this CA appears in a chain at a position other than last. |
| 1 | Root CA | VT_COUNTER | hits | 50 | 20 | +1 each time this CA is the last certificate in a chain. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TLS Orgs](/docs/guide/counter-groups/tls-orgs)
- [TLS Ciphers](/docs/guide/counter-groups/tls-ciphers)
