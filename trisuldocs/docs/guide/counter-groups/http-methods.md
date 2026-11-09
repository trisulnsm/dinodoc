# HTTP Methods

Counts HTTP requests, keyed by the request method (verb).

| Property | Value |
|---|---|
| GUID | `{2A6957EB-4992-46CD-8E49-BE32318669D3}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | HTTP method string |
| Implementation | Native C++ — CPICGHTTPMethods (trisul_probe/src/sysplugs/httpmeters/PICGHTTPMethods.cpp) defines the group; CFilterTCPReass::ProcessHTTPHeader (trisul_probe/src/pcappipe/FilterTCPReass.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly reads the client-to-server stream of each HTTP flow. The client side is the host that sent the SYN.
- Each request line found adds 1 to the method key. Pipelined and keep-alive requests are counted one by one.
- Trisul detects a request only when it starts with one of `GET /`, `POST `, `PUT `, `DELETE `, `TRACE `, `OPTIONS ` or `HEAD `. Other methods such as `PATCH` or `CONNECT` are not counted here.
- Only plain-text HTTP is metered. HTTPS requests are encrypted and do not reach this group.
- Requires TCP reassembly (on by default). Reassembly is off in `NETFLOW_TAP` mode.

## Keys

The key is the text of the request line before the first space, exactly as sent.

| Key | Meaning |
|---|---|
| `GET` | GET requests |
| `POST` | POST requests |
| `HEAD` | HEAD requests |
| `OPTIONS` | OPTIONS requests, for example CORS preflight |

No labels are preloaded. The label is the same as the key.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the total number of HTTP requests seen. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_COUNTER | hits | 20 | 10 | +1 for each HTTP request line with this method. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HTTP Status Codes](/docs/guide/counter-groups/http-status-codes)
- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
