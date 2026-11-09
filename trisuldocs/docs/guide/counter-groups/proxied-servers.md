# Proxied Servers

Counts traffic and requests through explicit proxies, keyed by the `host:port` target of each HTTP CONNECT request.

| Property | Value |
|---|---|
| GUID | `{B7571E87-F794-4BF6-A57A-EEA8A90F0324}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | CONNECT target `host:port` string |
| Implementation | Lua — proxied-servers.lua (group), proxy-connect.lua (metering) (apps/analyzers/squid-proxy) |
| Trisul App | squid-proxy (install from Trisul Apps) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes, after the app is installed |

## What it measures

- `proxy-connect.lua` reads the first reassembled chunk (seek position 0) in direction 1, client to server, of every TCP flow. If the chunk has `CONNECT <target>`, the flow is metered. Any other chunk turns off reassembly for the flow.
- On a match it adds 1 to Hits. It attaches two flow counters, so every later packet of the flow adds its wire length to meter 0 or meter 1 (see the meter list).
- It tags the flow `[pxy]<target>` and adds edges from the target key to both flow IPs in [Hosts](/docs/guide/counter-groups/hosts).
- Only CONNECT tunnels are seen. Plain `GET http://...` proxy requests are not counted. For those, see [Proxy External](/docs/guide/counter-groups/http-connect).
- Each flow updates one key, so there is no double counting.

## Keys

One key is the text after `CONNECT `, up to the first space. If it is longer than 60 characters, only the last 60 are kept. No labels are set.

| Key | Meaning |
|---|---|
| `www.google.com:443` | Tunnels to www.google.com on port 443 |
| `login.microsoftonline.com:443` | Tunnels to login.microsoftonline.com |
| `10.1.1.20:8443` | Tunnel to an IP target |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval: all CONNECT tunnels seen. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Download bytes | VT_RATE_COUNTER | Bps | 10 | 0 | Short name `Bytes`. Despite the name, wire bytes of the tunnel flow in **both** directions (flow counter direction 0). |
| 1 | Upload bytes | VT_RATE_COUNTER | Bps | 10 | 0 | Short name `Bytes`. Wire bytes of packets from the flow's A side (numerically lower IP) to its Z side (flow counter direction 1). This is upload only when the client has the lower IP. |
| 2 | hits | VT_COUNTER | Hits | 10 | 0 | Short name `Hits`. 1 per CONNECT request. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 4 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Proxy External](/docs/guide/counter-groups/http-connect)
- [Hosts](/docs/guide/counter-groups/hosts)
