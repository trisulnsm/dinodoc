# Counter Group Topper API

Retrieve the top-K keys (toppers) for a Trisul counter group, ranked by a selected meter. This API is the REST/JSON equivalent of the TRP `COUNTER_GROUP_TOPPER_REQUEST` command and is commonly used to build top-N dashboards (for example, top hosts by bytes, top ASNs by connections).

---

## Endpoint


| Property           | Value                         |
| ------------------ | ----------------------------- |
| **URL**            | `/api/topper/topper_request`  |
| **Methods**        | `GET`, `POST`                 |
| **Content-Type**   | `application/json` (response) |
| **Authentication** | API token required            |


---

## Authentication

All requests must include a valid API token and username. The token is the user's `auto_login_token` configured in Webtrisul.

To generate an API token, follow the provided link: [Generate API token](https://docs.trisul.org/docs/ag/webadmin/manageusers/#generate-api-token)


| Parameter   | Required | Description                        |
| ----------- | -------- | ---------------------------------- |
| `api_token` | Yes      | User's API authentication token    |
| `username`  | Yes      | Username of the authenticated user |


---

## Request Parameters

### Required


| Parameter       | Type   | Description                                                               |
| --------------- | ------ | ------------------------------------------------------------------------- |
| `context`       | string | Webtrisul context name (e.g. `default`, `netflow`)                        |
| `counter_group` | string | GUID of the counter group (e.g. `{C0B04CA7-95FA-44EF-8475-3835F3314761}`) |


### Optional — Query Options


| Parameter            | Type            | Default | Description                                                                                                                                                  |
| -------------------- | --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `meter`              | integer         | `0`     | Meter index to rank keys by. Meter `0` is typically the primary metric (e.g. bytes). Use the Counter Group Info API to discover available meters for a group |
| `maxitems`           | integer         | `100`   | Maximum number of top keys to return                                                                                                                         |
| `resolve_keys`       | boolean         | `true`  | When `true`, populate human-readable `label` and `readable` fields for each key                                                                              |
| `get_key_attributes` | boolean         | `false` | When `true`, include key attribute name-value pairs in the response                                                                                          |
| `get_percentiles`    | string or array | —       | Comma-separated percentile ranks to compute (e.g. `95` or `50,95,99`). Values are returned in each key's `percentiles` array                                 |
| `key_filter`         | string          | —       | Include only keys matching this pattern (SYS:GROUP format)                                                                                                   |
| `inverse_key_filter` | string          | —       | Exclude keys matching this pattern                                                                                                                           |
| `flags`              | integer         | —       | Additional TRP request flags                                                                                                                                 |
| `probe_id`           | string          | —       | Restrict query to a specific probe                                                                                                                           |
| `destination_node`   | string          | —       | Route the request to a specific Trisul node                                                                                                                  |
| `timeout`            | integer         | `-1`    | TRP query timeout in seconds (`-1` = use system default)                                                                                                     |


### Optional — Time Window

If no time parameters are supplied, the API uses the latest available time window (current day from midnight until now).


| Parameter        | Type    | Description                                                               |
| ---------------- | ------- | ------------------------------------------------------------------------- |
| `recentsecs`     | integer | Query the most recent N seconds of available data                         |
| `window_seconds` | integer | Same as `recentsecs` — query the latest N seconds                         |
| `window_fromts`  | integer | Start timestamp (Unix epoch seconds)                                      |
| `window_tots`    | integer | End timestamp (Unix epoch seconds). Use with `window_fromts`              |
| `from_date`      | string  | Start date/time in human-readable format (e.g. `Jul 15 2026 10:00:00 AM`) |
| `to_date`        | string  | End date/time in human-readable format                                    |
| `from_time`      | string  | Alias for `from_date`                                                     |
| `to_time`        | string  | Alias for `to_date`                                                       |
| `valid_input`    | integer | Internal time-selector validation flag                                    |


**Time window formats (in priority order):**

1. `window_fromts` + `window_seconds` — fixed start with a duration
2. `window_fromts` + `window_tots` — explicit start and end timestamps
3. `from_date` + `to_date` (or `from_time` + `to_time`) — human-readable date range
4. `recentsecs` or `window_seconds` alone — latest N seconds
5. No time params — current day from midnight to now

---

## Sample Request

### cURL — Top 10 hosts by bytes (latest window)

```bash
curl -G "http://<webtrisul-host>/api/topper/topper_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "meter=0" \
  --data-urlencode "maxitems=10"
```

### cURL — Top hosts in a specific time range

```bash
curl -G "http://<webtrisul-host>/api/topper/topper_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "meter=0" \
  --data-urlencode "maxitems=5" \
  --data-urlencode "from_date=Jul 15 2026 10:00:00 AM" \
  --data-urlencode "to_date=Jul 15 2026 11:00:00 AM"
```

### cURL — Top keys with 95th percentile

```bash
curl -G "http://<webtrisul-host>/api/topper/topper_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "meter=0" \
  --data-urlencode "maxitems=10" \
  --data-urlencode "get_percentiles=95"
```

---

## Success Response

**HTTP Status:** `200 OK`

```json
{
  "counter_group": "{C0B04CA7-95FA-44EF-8475-3835F3314761}",
  "meter": 0,
  "sysgrouptotal": 4829103847,
  "keys": [
    {
      "key": "C0.A8.01.0A",
      "readable": "192.168.1.10",
      "label": "web-server-01",
      "metric": 1523847291
    },
    {
      "key": "C0.A8.01.14",
      "readable": "192.168.1.20",
      "label": "db-server-01",
      "metric": 987654321
    },
    {
      "key": "0A.00.00.01",
      "readable": "10.0.0.1",
      "label": "gateway",
      "metric": 456789012
    }
  ]
}
```

### Response Fields


| Field           | Type    | Description                                                                   |
| --------------- | ------- | ----------------------------------------------------------------------------- |
| `counter_group` | string  | GUID of the queried counter group                                             |
| `meter`         | integer | Meter index used for ranking                                                  |
| `sysgrouptotal` | integer | Aggregated metric value for all keys **not** included in the top-K ("Others") |
| `keys`          | array   | Ranked list of top keys                                                       |


#### Key Object Fields


| Field         | Type    | Description                                                                                         |
| ------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `key`         | string  | Trisul internal key format (e.g. `C0.A8.01.0A` for `192.168.1.10`)                                  |
| `readable`    | string  | Human-readable representation of the key                                                            |
| `label`       | string  | User-assigned or resolved label (hostname, ASN name, etc.)                                          |
| `metric`      | integer | Metric value for the requested meter. Automatically scaled if the counter group uses sampling       |
| `description` | string  | Optional key description                                                                            |
| `attributes`  | array   | Key attributes (present when `get_key_attributes=true`). Each item has `attr_name` and `attr_value` |
| `percentiles` | array   | Percentile values (present when `get_percentiles` is set). Each item has `rank` and `value`         |


> **Note:** If the counter group has a sampling rate greater than 1, metric values in `keys` and `sysgrouptotal` are automatically multiplied by the sampling factor to reflect estimated totals.

---

## Error Responses


| HTTP Status                 | Condition                  | Example Response                                                                             |
| --------------------------- | -------------------------- | -------------------------------------------------------------------------------------------- |
| `400 Bad Request`           | Missing required parameter | `{"status":"ERROR","message":"counter_group is required"}`                                   |
| `400 Bad Request`           | Missing context            | `{"status":"ERROR","message":"context is required"}`                                         |
| `401 Unauthorized`          | Invalid API token          | `{"status":"ERROR","message":"Invalid API token"}`                                           |
| `403 Forbidden`             | User lacks context access  | `{"status":"ERROR","message":"User your_username is not allowed to access context netflow"}` |
| `422 Unprocessable Entity`  | Invalid context name       | `{"status":"ERROR","message":"Invalid context name - netflow"}`                              |
| `500 Internal Server Error` | Backend TRP failure        | `{"status":"ERROR","message":"<error details>"}`                                             |


---

## Usage Notes

1. **Discover counter groups and meters first** — Use the Counter Group Info API to obtain counter group GUIDs and available meter indices before calling this endpoint.
2. **Discover available time ranges** — Use the Time Slices API to determine what historical data is available before specifying a time window.
3. **Meter selection** — Meter `0` is the default and typically represents the primary volume metric. Other meters may represent connections, packets, rates, etc., depending on the counter group configuration.
4. **Key filters** — Use `key_filter` and `inverse_key_filter` to narrow results to specific key patterns (useful for subnet or prefix filtering).

---
