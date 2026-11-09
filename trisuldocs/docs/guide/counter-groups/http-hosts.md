# HTTP Hosts

Counts bytes of HTTP flows, keyed by the value of the HTTP `Host` request header.

| Property | Value |
|---|---|
| GUID | `{D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | HTTP Host header string |
| Implementation | Native C++ — CPICGHTTPHosts (trisul_probe/src/sysplugs/httpmeters/PICGHTTPHosts.cpp), fed by CFilterTCPReass (trisul_probe/src/pcappipe/FilterTCPReass.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly finds HTTP headers in a flow and passes each `Host:` header to this group.
- From that point on, every packet of the flow, in both directions, adds its wire length to the Host key. Packets of the flow seen before the header is parsed are not counted.
- If one keep-alive flow carries several different Host headers, each Host key collects the remaining bytes of the flow. The same bytes can then appear under more than one key.
- Only plain-text HTTP is metered. HTTPS traffic does not reach this group; see [TLS Orgs](/docs/guide/counter-groups/tls-orgs).
- Requires TCP reassembly (`Reassembly > TCPReassembly > Enabled`, on by default). Reassembly is off in `NETFLOW_TAP` mode, so this group stays empty with NetFlow input.

## Keys

The key is the header value sent by the client, after `Host:` and one optional space. Trisul lowercases it and removes one trailing `.`, so `www.Example.com.` and `www.example.com` are the same key. A `:port` is kept, so `example.com:8080` is a separate key from `example.com`. Keys are truncated to 62 characters.

| Key | Meaning |
|---|---|
| `www.example.com` | Requests sent with `Host: www.example.com` |
| `192.168.1.10:8080` | Client used an IP address and port in the Host header |
| `youtube.com` | Shortened key when `DomainDepth` is `2` (from `lax25.sjv.y1.youtube.com`) |

The label is the same as the key.

### DomainDepth policy

The `DomainDepth` setting in `HTTPHostPolicy.xml` controls how much of the host name forms the key. The probe copies this template to `PI-D2AAD7C6-E129-4366-A2AD-A8CB9AA4C2F4.xml` in its plugin configuration directory.

| DomainDepth | Key for `lax25.sjv.y1.youtube.com` |
|---|---|
| `0` (default) | `lax25.sjv.y1.youtube.com` |
| `1` | `com` |
| `2` | `youtube.com` |
| `3` | `y1.youtube.com` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. Because one flow can feed more than one Host key, Total here can exceed actual HTTP traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 50 | 20 | Wire bytes of every flow packet seen after this Host header, both directions. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HTTP Content Types](/docs/guide/counter-groups/http-content-types)
- [HTTP Methods](/docs/guide/counter-groups/http-methods)
- [HTTP Status Codes](/docs/guide/counter-groups/http-status-codes)
