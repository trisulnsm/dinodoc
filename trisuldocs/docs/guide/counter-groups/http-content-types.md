# HTTP Content Types

Counts HTTP bytes and messages, keyed by the media type in the `Content-Type` header.

| Property | Value |
|---|---|
| GUID | `{C0C9757F-2005-4CC5-BB96-D72F607E6188}` |
| Layer | L7 Application |
| Input | Packets |
| Key type | MIME type string |
| Implementation | Native C++ — CPICGHTTPContentTypes (trisul_probe/src/sysplugs/httpmeters/PICGHTTPContentTypes.cpp), fed by CFilterTCPReass (trisul_probe/src/pcappipe/FilterTCPReass.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- TCP reassembly passes every `Content-Type:` header it finds to this group. This covers both directions: responses, and requests that carry a body such as `POST`.
- Each header adds 1 to the Hits meter.
- From that point on, every packet of the flow, in both directions, adds its wire length to the Total Traffic meter of that key. Packets seen before the header are not counted.
- A keep-alive flow that carries several content types feeds each of those keys with the rest of the flow's bytes. The same bytes can then appear under more than one key.
- Only plain-text HTTP is metered. Requires TCP reassembly (on by default), which is off in `NETFLOW_TAP` mode.

## Keys

The key is the header value up to the first `;`. Parameters such as `charset` and `boundary` are dropped. Case is kept as sent. Keys are truncated to 62 characters.

| Key | Meaning |
|---|---|
| `text/html` | From `Content-Type: text/html; charset=UTF-8` |
| `application/json` | JSON API payloads |
| `image/jpeg` | JPEG images |
| `multipart/form-data` | Form uploads, from a request header |

The label is the same as the key.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. Because one flow can feed more than one content type key, Total Traffic here can exceed actual HTTP traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total Traffic | VT_RATE_COUNTER | Bps | 30 | 30 | Wire bytes of every flow packet seen after this Content-Type header, both directions. |
| 1 | Hits | VT_COUNTER | hits | 30 | 30 | +1 for each HTTP header with this content type. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
