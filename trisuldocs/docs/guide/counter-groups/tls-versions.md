# TLS Versions

Counts TLS flows and their traffic by negotiated TLS version, keyed by the decimal version number from the ServerHello.

| Property | Value |
|---|---|
| GUID | `{44DBB4E0-B79F-4FB5-A437-3CFEDFB7B65E}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | TLS version as decimal number |
| Implementation | Lua — tlsversions.lua (apps/analyzers/tls-metrics-pack) |
| Trisul App | tls-metrics-pack (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- The script handles only flows with port 443 on either side. It reads `TLS:RECORD` attributes from TCP reassembly, so SSL record extraction must be on (`//Reassembly/TCPReassembly/Applications/EnableSSLRecordExtraction`).
- It parses the ServerHello (handshake type 2). The version is the value of the supported_versions extension (43) when present, else the ServerHello version field.
- On a match it adds 1 to Flows. It attaches a flow counter, so every later packet of the flow, in both directions, adds its wire length to meter 0. It also adds a flow → version edge. Then it turns off reassembly for the flow.
- Each flow updates one key, so there is no double counting.

## Keys

One key is the 16-bit TLS version written as a decimal string. The group's `keyinfo` table gives these labels:

| Key | Meaning |
|---|---|
| `768` | SSL 3.0 |
| `769` | TLS 1.0 |
| `770` | TLS 1.1 |
| `771` | TLS 1.2 |
| `772` | TLS 1.3 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval: all port-443 TLS flows that sent a ServerHello. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | bytes | VT_RATE_COUNTER | Bps | 10 | 0 | Short name `Packets`. Wire bytes of the flow's packets, both directions, from the ServerHello onward. |
| 1 | flows | VT_COUNTER | Flws | 10 | 0 | Short name `Flows`. 1 per flow whose ServerHello was parsed. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [TLS Public Key Algo](/docs/guide/counter-groups/tls-pk-algo)
- [TLS Sig Algo](/docs/guide/counter-groups/tls-sig-algo)
- [TLS Ciphers](/docs/guide/counter-groups/tls-ciphers)
