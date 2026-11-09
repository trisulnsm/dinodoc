# TLS Orgs

Counts TLS handshakes and bytes, keyed by the Organization (`O=`) field of the server certificate.

| Property | Value |
|---|---|
| GUID | `{432D7552-0363-4640-9CC5-23E4CA8410EA}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Certificate organization name |
| Implementation | Native C++ — CPICGTLSOrg (trisul_probe/src/sysplugs/httpmeters/PICGTLSOrg.cpp), fed by CFilterTCPReass::Stmproc_TLS (trisul_probe/src/pcappipe/FilterTCPReass.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly decodes the server certificate (the first certificate in the chain) from the TLS Certificate message. If the subject has an `O=` value, Trisul adds 1 to the Hits meter of that organization.
- From that point on, every packet of the flow, in both directions, adds its wire length to the Total Traffic meter of that key.
- Resumed sessions carry no certificate. Trisul caches the organization by TLS session ID and reuses it when a later handshake resumes that session.
- Not counted:
  - certificates with no `O=` field, which includes most domain-validated certificates such as Let's Encrypt
  - TLS 1.3 sessions, because the certificate is encrypted
  - QUIC
- Requires TCP reassembly (on by default). Reassembly is off in `NETFLOW_TAP` mode.

## Keys

The key is the subject `O=` value after a small clean-up. Trisul trims spaces and removes a trailing `Inc`, `Inc.`, `INC` or `INC.` (with any comma before it) only when it is a separate word, so `Incapsula` keeps its name. It then removes the first remaining comma and any trailing `.`, `,` or space, and cuts the result to 50 characters. A certificate with no `O=`, or one where nothing is left after clean-up, is not counted.

| Key | Meaning |
|---|---|
| `Google LLC` | Certificate with `O=Google LLC` |
| `Microsoft Corporation` | Certificate with `O=Microsoft Corporation` |
| `Cloudflare` | From `O=Cloudflare, Inc.` |
| `DigiCert` | From `O=DigiCert Inc` |

The label is the same as the key.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. Covers only TLS flows whose certificate had an organization. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 50 | 20 | Wire bytes of every flow packet seen after the certificate, both directions. |
| 1 | Hits | VT_COUNTER | hits | 50 | 20 | +1 for each handshake whose server certificate (or resumed session) names this organization. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TLS CAs](/docs/guide/counter-groups/tls-ca)
- [TLS Ciphers](/docs/guide/counter-groups/tls-ciphers)
