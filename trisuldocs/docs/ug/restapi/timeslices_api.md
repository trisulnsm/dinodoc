# Time Slices API

Retrieve backend time-slice metadata for a Trisul context, including available data windows, individual slice details, and storage pool information. This API is the REST/JSON equivalent of the TRP `TIMESLICES_REQUEST` command.

Use this API to discover what historical data is available before querying topper or time-series endpoints, and to monitor storage health.

---

## Endpoint


| Property           | Value                                  |
| ------------------ | -------------------------------------- |
| **URL**            | `/api/time_slices/time_slices_request` |
| **Methods**        | `GET`, `POST`                          |
| **Content-Type**   | `application/json` (response)          |
| **Authentication** | API token required                     |


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


| Parameter | Type   | Description                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------- |
| `context` | string | Webtrisul context name (e.g. `default`, `netflow`) |


### Optional


| Parameter          | Type    | Default | Description                                                                                                                                       |
| ------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get_disk_usage`   | boolean | `false` | When `true`, include per-slice disk size information                                                                                              |
| `get_all_engines`  | boolean | `false` | When `false` (default), returns one slice per time interval (instance-0). When `true`, returns every individual slice across all engine instances |
| `get_total_window` | boolean | `false` | When `true`, include the overall time window spanning all data in the Trisul database                                                             |
| `get_from_dr`      | boolean | `false` | When `true`, query the disaster-recovery (DR) Trisul node instead of the primary context endpoint                                                 |
| `probe_id`         | string  | —       | Restrict query to a specific probe                                                                                                                |
| `destination_node` | string  | —       | Route the request to a specific Trisul node                                                                                                       |
| `timeout`          | integer | `60`    | TRP query timeout in seconds                                                                                                                      |


---

## Sample Requests

### cURL — Basic time slice listing

```bash
curl -G "http://<webtrisul-host>/api/time_slices/time_slices_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow"
```

### cURL — With total window and disk usage

```bash
curl -G "http://<webtrisul-host>/api/time_slices/time_slices_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "get_total_window=true" \
  --data-urlencode "get_disk_usage=true"
```

### cURL — Query from disaster-recovery node

```bash
curl -G "http://<webtrisul-host>/api/time_slices/time_slices_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "get_from_dr=true" \
  --data-urlencode "get_total_window=true"
```

### cURL — All engine instances

```bash
curl -G "http://<webtrisul-host>/api/time_slices/time_slices_request" \
  --data-urlencode "api_token=YOUR_API_TOKEN" \
  --data-urlencode "username=your_username" \
  --data-urlencode "context=netflow" \
  --data-urlencode "get_all_engines=true"
```

---

## Success Response

**HTTP Status:** `200 OK`

```json
{
  "context_name": "netflow",
  "ha_slave_mode": false,
  "total_window": {
    "from": 1720915200,
    "to": 1721088000
  },
  "slices": [
    {
      "time_interval": {
        "from": 1721001600,
        "to": 1721005200
      },
      "name": "slice-20260715-1000",
      "status": "available",
      "disk_size": 1073741824,
      "path": "/data/trisul/netflow/slice-20260715-1000",
      "available": true,
      "tags": ["primary"],
      "id": 42
    },
    {
      "time_interval": {
        "from": 1721005200,
        "to": 1721008800
      },
      "name": "slice-20260715-1100",
      "status": "available",
      "disk_size": 2147483648,
      "path": "/data/trisul/netflow/slice-20260715-1100",
      "available": true,
      "tags": ["primary"],
      "id": 43
    },
    {
      "time_interval": {
        "from": 1721008800,
        "to": 1721012400
      },
      "name": "slice-20260715-1200",
      "status": "processing",
      "disk_size": 536870912,
      "path": "/data/trisul/netflow/slice-20260715-1200",
      "available": false,
      "tags": ["primary"],
      "id": 44
    }
  ],
  "pools": [
    {
      "status": "online",
      "total_size": 1099511627776,
      "avail_size": 549755813888,
      "file_system": "ext4",
      "mounted": "/data/trisul",
      "offline_archive": false,
      "offline_archive_mounted": false,
      "additional_info": "Primary storage pool"
    }
  ]
}
```

> **Note:** `total_window`, `disk_size`, and `pools` are only populated when the corresponding request flags are set. A minimal request (no optional flags) returns `slices` with `time_interval`, `name`, `status`, and `available` fields.

---

## Response Fields

### Root Object


| Field           | Type    | Description                                                                                       |
| --------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `context_name`  | string  | Name of the queried context                                                                       |
| `ha_slave_mode` | boolean | Whether the context is running in HA slave (standby) mode                                         |
| `total_window`  | object  | Overall data time range (present when `get_total_window=true`, or always returned by the backend) |
| `slices`        | array   | List of time slice objects                                                                        |
| `pools`         | array   | Storage pool status objects                                                                       |


### Time Interval Object


| Field  | Type    | Description                          |
| ------ | ------- | ------------------------------------ |
| `from` | integer | Start timestamp (Unix epoch seconds) |
| `to`   | integer | End timestamp (Unix epoch seconds)   |


### Slice Object (`slices[]`)


| Field           | Type             | Description                                                                 |
| --------------- | ---------------- | --------------------------------------------------------------------------- |
| `time_interval` | object           | Start and end timestamps for this slice                                     |
| `name`          | string           | Slice identifier/name                                                       |
| `status`        | string           | Slice status (e.g. `available`, `processing`, `archived`)                   |
| `disk_size`     | integer          | Disk space used by this slice in bytes (present when `get_disk_usage=true`) |
| `path`          | string           | Filesystem path of the slice data                                           |
| `available`     | boolean          | Whether the slice is available for querying                                 |
| `tags`          | array of strings | Tags associated with the slice (e.g. `primary`, `archive`)                  |
| `id`            | integer          | Numeric slice identifier                                                    |


### Pool Object (`pools[]`)


| Field                     | Type    | Description                                       |
| ------------------------- | ------- | ------------------------------------------------- |
| `status`                  | string  | Pool status (e.g. `online`, `offline`)            |
| `total_size`              | integer | Total pool capacity in bytes                      |
| `avail_size`              | integer | Available free space in bytes                     |
| `file_system`             | string  | Filesystem type (e.g. `ext4`, `xfs`)              |
| `mounted`                 | string  | Mount point path                                  |
| `offline_archive`         | boolean | Whether this pool is an offline archive           |
| `offline_archive_mounted` | boolean | Whether the offline archive is currently mounted  |
| `additional_info`         | string  | Additional descriptive information about the pool |


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

## Usage Notes

1. **Data availability check** — Before querying historical data via the Topper API, call this endpoint to confirm slices exist and are `available` for the desired time range.
2. **Total window** — Set `get_total_window=true` to get the full span of data stored in the Trisul database. Use `total_window.from` and `total_window.to` as bounds when constructing time parameters for other APIs.
3. **Slice granularity** — By default (`get_all_engines=false`), one slice is returned per time interval (instance-0). Set `get_all_engines=true` only when you need per-engine slice details.
4. **Disk monitoring** — Set `get_disk_usage=true` to include per-slice disk consumption. Combine with `pools` data to monitor storage capacity.
5. **Disaster recovery** — Set `get_from_dr=true` to query time-slice information from the DR Trisul node. Useful for verifying DR data availability and failover readiness.
6. **HA awareness** — Check `ha_slave_mode` to determine if the context is in standby mode, which may affect write operations and real-time data freshness.

### Using time slice data with the Topper API

Once you know the available time range from this API, pass it to the Topper API:

```bash
# Step 1: Get available time window
curl -G ".../api/time_slices/time_slices_request" \
  --data-urlencode "context=netflow" \
  --data-urlencode "get_total_window=true" \
  ...

# Response: total_window.from = 1720915200, total_window.to = 1721088000

# Step 2: Query toppers for a sub-range within the available window
curl -G ".../api/topper/topper_request" \
  --data-urlencode "context=netflow" \
  --data-urlencode "counter_group={C0B04CA7-95FA-44EF-8475-3835F3314761}" \
  --data-urlencode "window_fromts=1721001600" \
  --data-urlencode "window_tots=1721005200" \
  ...
```

---