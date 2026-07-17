# Counter Group Info API

Retrieve metadata about enabled counter groups in a Trisul context, including group names, GUIDs, bucket sizes, and optionally detailed meter definitions. This API is the REST/JSON equivalent of the TRP `COUNTER_GROUP_INFO_REQUEST` command.

Use this API as a discovery step before calling the Topper API or other counter-group-based endpoints.

---

## Endpoint


| Property           | Value                                                |
| ------------------ | ---------------------------------------------------- |
| **URL**            | `/api/counter_group_info/counter_group_info_request` |
| **Methods**        | `GET`, `POST`                                        |
| **Content-Type**   | `application/json` (response)                        |
| **Authentication** | API token required                                   |


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


| Parameter | Type   | Description                                        |
| --------- | ------ | -------------------------------------------------- |
| `context` | string | Webtrisul context name (e.g. `default`, `netflow`) |


### Optional


| Parameter          | Type    | Default | Description                                                                                                           |
| ------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `counter_group`    | string  | —       | GUID of a specific counter group. When omitted, returns information for **all** enabled counter groups in the context |
| `get_meter_info`   | boolean | `false` | When `true`, includes detailed meter definitions (id, type, name, description, units) for each counter group          |
| `probe_id`         | string  | —       | Restrict query to a specific probe                                                                                    |
| `destination_node` | string  | —       | Route the request to a specific Trisul node                                                                           |
| `timeout`          | integer | `-1`    | TRP query timeout in seconds (`-1` = use system default)                                                              |


---

## Sample Requests

### cURL — List all counter groups

```bash
curl -G "http://<webtrisul-host>/api/counter_group_info/counter_group_info_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow"
```

### cURL — Get a specific counter group with meter details

```bash
curl -G "http://<webtrisul-host>/api/counter_group_info/counter_group_info_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "get_meter_info=true"
```

---

## Success Response

**HTTP Status:** `200 OK`

### All counter groups (without meter info)

```json
{
  "group_details": [
    {
      "guid": "{C0B04CA7-95FA-44EF-8475-3835F3314761}",
      "name": "Hosts",
      "bucket_size": 60,
      "topper_bucket_size": 300,
      "time_interval": {
        "from": 1721001600,
        "to": 1721088000
      },
      "crosskey": {
        "parentguid": "{A1B2C3D4-E5F6-7890-ABCD-EF1234567890}",
        "crosskeyguid_1": "{B2C3D4E5-F6A7-8901-BCDE-F12345678901}",
        "crosskeyguid_2": "{C3D4E5F6-A7B8-9012-CDEF-123456789012}"
      }
    },
    {
      "guid": "{D4E5F6A7-B8C9-0123-DEF0-234567890123}",
      "name": "Internal Hosts",
      "bucket_size": 60,
      "topper_bucket_size": 300,
      "time_interval": {
        "from": 1721001600,
        "to": 1721088000
      }
    },
    {
      "guid": "{E5F6A7B8-C9D0-1234-EF01-345678901234}",
      "name": "Protocol Tree",
      "bucket_size": 60,
      "topper_bucket_size": 300,
      "time_interval": {
        "from": 1721001600,
        "to": 1721088000
      }
    }
  ]
}
```

### Single counter group with meter info (`get_meter_info=true`)

```json
{
  "group_details": [
    {
      "guid": "{C0B04CA7-95FA-44EF-8475-3835F3314761}",
      "name": "Hosts",
      "bucket_size": 60,
      "topper_bucket_size": 300,
      "time_interval": {
        "from": 1721001600,
        "to": 1721088000
      },
      "meters": [
        {
          "id": 0,
          "type": 2,
          "topcount": 100,
          "name": "TotalBytes",
          "description": "Total bytes (A>Z + Z>A)",
          "units": "bytes"
        },
        {
          "id": 1,
          "type": 2,
          "topcount": 100,
          "name": "TotalPackets",
          "description": "Total packets",
          "units": "packets"
        },
        {
          "id": 6,
          "type": 3,
          "topcount": 100,
          "name": "TotalConnections",
          "description": "Total connections",
          "units": "connections"
        }
      ]
    }
  ]
}
```

---

## Response Fields

### Root Object


| Field           | Type  | Description                            |
| --------------- | ----- | -------------------------------------- |
| `group_details` | array | List of counter group metadata objects |


### Counter Group Object (`group_details[]`)


| Field                | Type    | Description                                                                                  |
| -------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `guid`               | string  | Unique identifier for the counter group. Use this value as `counter_group` in the Topper API |
| `name`               | string  | Human-readable counter group name (e.g. `Hosts`, `Internal Hosts`, `Protocol Tree`)          |
| `bucket_size`        | integer | Time bucket size in seconds for all meters in this group                                     |
| `topper_bucket_size` | integer | Streaming analytics window size in seconds used for top-N calculations                       |
| `time_interval`      | object  | Total time range available in the database for this counter group                            |
| `time_interval.from` | integer | Start timestamp (Unix epoch seconds)                                                         |
| `time_interval.to`   | integer | End timestamp (Unix epoch seconds)                                                           |
| `meters`             | array   | Meter definitions (only present when `get_meter_info=true`)                                  |
| `crosskey`           | object  | Cross-key relationship metadata (only present for cross-key counter groups)                  |


### Meter Object (`meters[]`)


| Field         | Type    | Description                                                      |
| ------------- | ------- | ---------------------------------------------------------------- |
| `id`          | integer | Meter index. Use this as the `meter` parameter in the Topper API |
| `type`        | integer | Meter type enum (see table below)                                |
| `topcount`    | integer | Default top-N count for this meter                               |
| `name`        | string  | Short meter name (e.g. `TotalBytes`, `TotalConnections`)         |
| `description` | string  | Human-readable meter description                                 |
| `units`       | string  | Unit of measurement (e.g. `bytes`, `packets`, `connections`)     |


### Meter Type Values


| Value | Type                                | Description                              |
| ----- | ----------------------------------- | ---------------------------------------- |
| `0`   | VT_INVALID                          | Invalid meter                            |
| `1`   | VT_RATE_COUNTER_WITH_SLIDING_WINDOW | Rate counter with sliding window (top-N) |
| `2`   | VT_COUNTER                          | Basic counter                            |
| `3`   | VT_COUNTER_WITH_SLIDING_WINDOW      | Counter with sliding window (top-N)      |
| `4`   | VT_RATE_COUNTER                     | Rate counter (value per second)          |
| `5`   | VT_GAUGE                            | Basic gauge                              |
| `6`   | VT_GAUGE_MIN_MAX_AVG                | Gauge with min/avg/max columns           |
| `7`   | VT_AUTO                             | Automatic (min/max/avg/stddev)           |
| `8`   | VT_RUNNING_COUNTER                  | Running counter, no delta calculation    |
| `9`   | VT_AVERAGE                          | Average of samples                       |
| `10`  | VT_DELTA_RATE_COUNTER               | Delta rate counter (SNMP-style)          |
| `11`  | VT_MAX                              | Maximum of samples                       |
| `12`  | VT_MIN                              | Minimum of samples                       |


### Crosskey Object (`crosskey`)


| Field            | Type   | Description                                    |
| ---------------- | ------ | ---------------------------------------------- |
| `parentguid`     | string | Parent counter group GUID                      |
| `crosskeyguid_1` | string | First cross-key counter group GUID             |
| `crosskeyguid_2` | string | Second cross-key counter group GUID (optional) |


---

## Error Responses


| HTTP Status                 | Condition                 | Example Response                                                                             |
| --------------------------- | ------------------------- | -------------------------------------------------------------------------------------------- |
| `400 Bad Request`           | Missing context           | `{"status":"ERROR","message":"context is required"}`                                         |
| `401 Unauthorized`          | Invalid API token         | `{"status":"ERROR","message":"Invalid API token"}`                                           |
| `403 Forbidden`             | User lacks context access | `{"status":"ERROR","message":"User your_username is not allowed to access context netflow"}` |
| `422 Unprocessable Entity`  | Invalid context name      | `{"status":"ERROR","message":"Invalid context name - netflow"}`                              |
| `500 Internal Server Error` | Backend TRP failure       | `{"status":"ERROR","message":"<error details>"}`                                             |


---

## Typical Workflow

```
1. Call Counter Group Info API
   → Obtain counter group GUIDs and meter indices

2. Call Time Slices API (optional)
   → Determine available historical data ranges
y 
3. Call Counter Group Topper API
   → Query top-K keys using the GUID and meter from step 1
```

### Example: Find top hosts by connections

```bash
# Step 1: Discover the "Hosts" counter group and its meters
curl -G ".../api/counter_group_info/counter_group_info_request" \
  --data-urlencode "context=netflow" \
  --data-urlencode "get_meter_info=true" \
  ...

# Response shows: Hosts GUID = {C0B04CA7-...}, meter id 6 = TotalConnections

# Step 2: Query top 10 hosts by connections
curl -G ".../api/topper/topper_request" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "meter=6" \
  --data-urlencode "maxitems=10" \
  ...
```

---

## Usage Notes

1. **Discovery endpoint** — This API does not return actual metric data. It returns structural metadata about counter groups. Use the Topper API for actual top-N data.
2. **Filter by GUID** — Pass `counter_group` to retrieve metadata for a single group instead of the full list.
3. **Meter info overhead** — Setting `get_meter_info=true` returns more data per group. Request it only when you need meter definitions.
4. **Cross-key groups** — Counter groups with a `crosskey` object are cross-key groups used for multi-dimensional drill-down analytics. The `crosskeyguid_1` and `crosskeyguid_2` values reference related counter groups.

---