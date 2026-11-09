# Proxy External

Counts traffic through HTTP proxies by the real destination host, keyed by the hostname from the CONNECT target or the HTTP `Host` header.

| Property | Value |
|---|---|
| GUID | `{55F98CC1-646E-4DE6-AD79-6B896211F178}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | Shortened hostname string |
| Implementation | Lua — http_connect.lua (apps/analyzers/http-proxy) |
| Trisul App | http-proxy (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- The script reads the first reassembled chunk (seek position 0) of every TCP flow, in either direction. The chunk must match `GET|POST|HEAD|OPTIONS|CONNECT <target> HTTP/x.y`.
- For CONNECT the host is the target without the port. For the other methods the host is the value of the `Host:` header. A request with no host is skipped.
- It attaches two flow counters, so every later packet of the flow adds its wire length to meter 0 or meter 1. It tags the flow with the hostname and adds a flow → hostname edge.
- Each flow updates one key, so there is no double counting. Unlike [Proxied Servers](/docs/guide/counter-groups/proxied-servers), it also counts plain HTTP proxy requests.

## Keys

The hostname is shortened before it becomes the key:

1. If the name has more than `NumDots` dots (default 3), only the part after the 4th-last dot is kept. `a.b.skks.mail.yahoo.com` becomes `skks.mail.yahoo.com`.
2. If it is still longer than `MaxHostnameLen` (default 25), only the last `MaxHostnameLen` + 1 characters are kept.

You can override both in `config/trisulnsm_http_connect.lua` under `//App/DBRoot`. No labels are set.

| Key | Meaning |
|---|---|
| `mail.google.com` | Requests or tunnels to mail.google.com |
| `www.example.org:8080` | `Host:` header with a port. The port stays in the key. |
| `skks.mail.yahoo.com` | Request for `a.b.skks.mail.yahoo.com`, cut to the last 4 labels |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval: all proxied HTTP and CONNECT flows. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload to | VT_RATE_COUNTER | Bps | 30 | 30 | Short name `to traffic`. Wire bytes of packets from the flow's A side (numerically lower IP) to its Z side (flow counter direction 1). |
| 1 | Download from | VT_RATE_COUNTER | Bps | 30 | 30 | Short name `from traffic`. Wire bytes of packets from Z to A (flow counter direction 2). |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Proxied Servers](/docs/guide/counter-groups/proxied-servers)
- [External Hosts](/docs/guide/counter-groups/external-hosts)
