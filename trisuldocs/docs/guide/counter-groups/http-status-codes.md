# HTTP Status Codes

Counts HTTP responses, keyed by the three-digit status code.

| Property | Value |
|---|---|
| GUID | `{25E80A84-C175-4C01-977C-1411F5D10B56}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | HTTP status code string |
| Implementation | Native C++ — CPICGHTTPStatusCodes (trisul_probe/src/sysplugs/httpmeters/PICGHTTPStatusCodes.cpp) defines the group and labels; CFilterTCPReass::ProcessHTTPHeader (trisul_probe/src/pcappipe/FilterTCPReass.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly reads the server-to-client stream of each HTTP flow.
- Each response status line that starts with `HTTP/` adds 1 to the status code key.
- The status line must have a reason phrase after the code, for example `HTTP/1.1 200 OK`. A line such as `HTTP/1.1 200` with nothing after the code is not counted.
- Only plain-text HTTP is metered. HTTPS responses do not reach this group.
- Requires TCP reassembly (on by default). Reassembly is off in `NETFLOW_TAP` mode.

## Keys

The key is the text between the first and second space of the status line. Trisul does not check it against a list, so non-standard codes appear as sent.

| Key | Meaning |
|---|---|
| `200` | OK |
| `304` | Not Modified |
| `404` | Not Found |
| `503` | Service Unavailable |

Labels for the standard codes `100` to `511` are preloaded when the group is created, for example `206` → `Partial Content`. Codes outside that list show the code as the label.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval, that is, the total number of HTTP responses counted. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_COUNTER | hits | 10 | 10 | +1 for each HTTP response with this status code. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HTTP Methods](/docs/guide/counter-groups/http-methods)
- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
