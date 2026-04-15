---
sidebar_position: 1
title: IPDR Query API
description: API reference for querying and managing IPDR (IP Detail Record) queries including creating, listing, checking status, fetching results, and cancelling queries.
---

# IPDR Query API

## Overview

The IPDR Query API allows you to create, manage, and retrieve results of IPDR (IP Detail Record) queries. IPDR records contain flow-level information such as source/destination IPs, ports, timestamps, NAT translations, and subscriber information. This API is used for compliance and network forensics workflows.

**Base URL:** `http://<your-server>:3000/api/ipdr_query`

**Supported Methods:** `GET`, `POST`, `PUT`

**Authentication:** All requests require a valid `api_token` and `username`.

---

## Common Request Fields

All endpoints require the following common authentication and context fields:

| Field Name      | Type     | Required | Default | Description                                                              | Example          |
|-----------------|----------|----------|---------|--------------------------------------------------------------------------|------------------|
| `api_token`     | `string` | ✅ Yes   | —       | API authentication token for the user                                    | `"lg25Tly1g8QwB8mcDzqO"` |
| `username`      | `string` | ✅ Yes   | —       | Username of the authenticated user                                       | `"user"`         |
| `contextname`   | `string` | ❌ No    | `"default"` | Name of the Trisul context. If omitted, defaults to `"default"` (context0). Use `"context0"` as an alias for `"default"`. | `"ipdr"`         |

---

## Common Error Responses

These error responses can be returned by any endpoint.

### Invalid API Token

**HTTP Status: `401 Unauthorized`**

```json
{
  "status": "ERROR",
  "message": "Invalid API token"
}
```

### Context Not Found

**HTTP Status: `404 Not Found`**

```json
{
  "status": "ERROR",
  "message": "Context ipdr not found"
}
```

### Context Access Denied

**HTTP Status: `403 Forbidden`**

```json
{
  "status": "ERROR",
  "message": "You are not allowed to access the context ipdr"
}
```

### Internal Server Error

**HTTP Status: `500 Internal Server Error`**

Returned when an unexpected error occurs on the server.

```json
{
  "status": "ERROR",
  "message": "Internal server error"
}
```

---

## 1. List Queries

**`GET /api/ipdr_query/list`**

Retrieves a list of IPDR queries submitted by the authenticated user, ordered by most recent first.

### What is it used for?

Use this endpoint to view your past IPDR queries and their current statuses. This is useful for monitoring query progress, finding completed queries to fetch results from, or reviewing your query history.

### Request Fields

| Field Name    | Type      | Required | Default | Description                                            | Example          |
|---------------|-----------|----------|---------|--------------------------------------------------------|------------------|
| `api_token`   | `string`  | ✅ Yes   | —       | API authentication token                               | `"lg25Tly1g8QwB8mcDzqO"` |
| `username`    | `string`  | ✅ Yes   | —       | Username of the authenticated user                     | `"user"`         |
| `contextname` | `string`  | ❌ No    | `"default"` | Name of the Trisul context. Defaults to `"default"` (context0) if omitted. | `"ipdr"`         |
| `count`       | `integer` | ❌ No    | `10`    | Maximum number of queries to return                    | `5`              |

### Sample Request

```bash
curl -X GET 'http://127.0.0.1:3000/api/ipdr_query/list' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "count": 5
  }'
```

### Success Response

```json
{
  "status": "SUCCESS",
  "ipdr_controls": [
    {
      "id": 1,
      "QueryIP": "192.168.1.100",
      "QueryWindowStart": "10-04-2026 00:00:00",
      "QueryWindowEnd": "10-04-2026 23:59:59",
      "CurrentStatus": "COMPLETED",
      "StatusMessage": "Query completed successfully"
    },
    {
      "id": 2,
      "QueryIP": "10.0.0.5",
      "QueryWindowStart": "09-04-2026 12:00:00",
      "QueryWindowEnd": "09-04-2026 18:00:00",
      "CurrentStatus": "INPROGRESS",
      "StatusMessage": "Processing records..."
    }
  ]
}
```

### Response Fields

| Field Name                        | Type     | Description                                                  |
|-----------------------------------|----------|--------------------------------------------------------------|
| `status`                          | `string` | `"SUCCESS"` on success                                       |
| `ipdr_controls`                   | `array`  | Array of query objects                                       |
| `ipdr_controls[].id`             | `integer`| Unique query ID (used as `query_id` in other endpoints)      |
| `ipdr_controls[].QueryIP`        | `string` | The IP address that was queried                              |
| `ipdr_controls[].QueryWindowStart`| `string`| Start of the query time window (`DD-MM-YYYY HH:MM:SS`)      |
| `ipdr_controls[].QueryWindowEnd` | `string` | End of the query time window (`DD-MM-YYYY HH:MM:SS`)        |
| `ipdr_controls[].CurrentStatus`  | `string` | Current status: `NEW`, `INPROGRESS`, `COMPLETED`, `CANCELED` |
| `ipdr_controls[].StatusMessage`  | `string` | Human-readable status message                                |

---

## 2. Create New Query

**`POST /api/ipdr_query/new`**

Submits a new IPDR query for a specific IP address within a given time window. The query is processed asynchronously.

### What is it used for?

Use this endpoint to initiate a new IPDR lookup. You provide the target IP address and a time window, and the system will search through IPDR records in the background. After submission, use the [Status](#3-query-status) endpoint to monitor progress and the [Result](#4-query-result) endpoint to retrieve the data once complete.

### Request Fields

| Field Name    | Type     | Required | Default | Description                                                  | Example                   |
|---------------|----------|----------|---------|--------------------------------------------------------------|---------------------------|
| `api_token`   | `string` | ✅ Yes   | —       | API authentication token                                     | `"lg25Tly1g8QwB8mcDzqO"`  |
| `username`    | `string` | ✅ Yes   | —       | Username of the authenticated user                           | `"user"`                  |
| `contextname` | `string` | ❌ No    | `"default"` | Name of the Trisul context. Defaults to `"default"` (context0) if omitted. | `"ipdr"`                  |
| `ip`          | `string` | ✅ Yes   | —       | Target IP address to query (IPv4 or IPv6)                    | `"192.168.1.100"`         |
| `from_time`   | `string` | ✅ Yes   | —       | Start of the query time window (`DD-MM-YYYY HH:MM:SS`)      | `"01-04-2026 00:00:00"`   |
| `to_time`     | `string` | ✅ Yes   | —       | End of the query time window (`DD-MM-YYYY HH:MM:SS`)        | `"10-04-2026 23:59:59"`   |

### Sample Request

```bash
curl -X POST 'http://127.0.0.1:3000/api/ipdr_query/new' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "ip": "192.168.1.100",
    "from_time": "01-04-2026 00:00:00",
    "to_time": "10-04-2026 23:59:59"
  }'
```

### Success Response

```json
{
  "status": "SUCCESS",
  "message": "Query submitted successfully",
  "query_id": 3
}
```

### Response Fields

| Field Name | Type      | Description                                        |
|------------|-----------|----------------------------------------------------|
| `status`   | `string`  | `"SUCCESS"` on successful submission                |
| `message`  | `string`  | Confirmation message                                |
| `query_id` | `integer` | Unique ID assigned to this query (use for status/result/cancel) |

### Error Responses

#### Missing IP Address

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "IP address is required"
}
```

#### Invalid IP Address

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Invalid IP address"
}
```

#### Missing From Time

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "From time is required"
}
```

#### Invalid From Time Format

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Invalid from time. Please use the format DD-MM-YYYY HH:MM:SS"
}
```

#### Missing To Time

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "To time is required"
}
```

#### Invalid To Time Format

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Invalid to time. Please use the format DD-MM-YYYY HH:MM:SS"
}
```

---

## 3. Query Status

**`GET /api/ipdr_query/status`**

Checks the current status of a previously submitted IPDR query.

### What is it used for?

Use this endpoint to poll the progress of an IPDR query. After submitting a query via the [New](#2-create-new-query) endpoint, call this endpoint periodically to check whether the query has completed, is still in progress, or has encountered an error.

### Request Fields

| Field Name    | Type      | Required | Default | Description                                | Example          |
|---------------|-----------|----------|---------|--------------------------------------------|------------------|
| `api_token`   | `string`  | ✅ Yes   | —       | API authentication token                   | `"lg25Tly1g8QwB8mcDzqO"` |
| `username`    | `string`  | ✅ Yes   | —       | Username of the authenticated user         | `"user"`         |
| `contextname` | `string`  | ❌ No    | `"default"` | Name of the Trisul context. Defaults to `"default"` (context0) if omitted. | `"ipdr"`         |
| `query_id`    | `integer` | ✅ Yes   | —       | The query ID returned by the `new` endpoint| `1`              |

### Sample Request

```bash
curl -X GET 'http://127.0.0.1:3000/api/ipdr_query/status' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "query_id": 1
  }'
```

### Success Response

```json
{
  "status": "SUCCESS",
  "QueryStatusMessage": "Query completed successfully",
  "CurrentStatus": "COMPLETED",
  "ip": "192.168.1.100",
  "from_time": "01-04-2026 00:00:00",
  "to_time": "10-04-2026 23:59:59"
}
```

### Response Fields

| Field Name           | Type     | Description                                                  |
|----------------------|----------|--------------------------------------------------------------|
| `status`             | `string` | `"SUCCESS"` on success                                       |
| `QueryStatusMessage` | `string` | Detailed status message from the query engine                |
| `CurrentStatus`      | `string` | Current status: `NEW`, `INPROGRESS`, `COMPLETED`, `CANCELED` |
| `ip`                 | `string` | The IP address being queried                                 |
| `from_time`          | `string` | Start of the query time window (`DD-MM-YYYY HH:MM:SS`)      |
| `to_time`            | `string` | End of the query time window (`DD-MM-YYYY HH:MM:SS`)        |

### Error Responses

#### Missing Query ID

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Query ID is required"
}
```

#### Query ID Not Found

**HTTP Status: `404 Not Found`**

```json
{
  "status": "ERROR",
  "message": "Query ID not found"
}
```

#### Unauthorized Access

**HTTP Status: `403 Forbidden`**

```json
{
  "status": "ERROR",
  "message": "You are not authorized to access this query"
}
```

---

## 4. Query Result

**`GET /api/ipdr_query/result`**

Retrieves the results of a completed IPDR query. Results are returned as an array of flow records. You can optionally filter the columns returned using the `headers` parameter.

### What is it used for?

Use this endpoint to fetch the actual IPDR data once a query has reached `COMPLETED` status. The response contains flow-level records with fields like source/destination IP, ports, timestamps, NAT information, and subscriber identifiers. You can specify which columns to include in the response using the `headers` parameter.

### Request Fields

| Field Name    | Type       | Required | Default       | Description                                                                                                     | Example                                      |
|---------------|------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `api_token`   | `string`   | ✅ Yes   | —             | API authentication token                                                                                        | `"lg25Tly1g8QwB8mcDzqO"`                     |
| `username`    | `string`   | ✅ Yes   | —             | Username of the authenticated user                                                                              | `"user"`                                     |
| `contextname` | `string`   | ❌ No    | `"default"`    | Name of the Trisul context. Defaults to `"default"` (context0) if omitted.                                      | `"ipdr"`                                     |
| `query_id`    | `integer`  | ✅ Yes   | —             | The query ID returned by the `new` endpoint                                                                     | `1`                                          |
| `headers`     | `string[]` | ❌ No    | All 13 columns| Array of column names to include in the result. If omitted, all columns are returned. See **Available Headers**. | `["SrcIP", "DestIP", "StartTime", "Duration"]`|

### Available Headers

The following column names can be used in the `headers` array:

| Header Name    | Description                                    |
|----------------|------------------------------------------------|
| `Protocol`     | Network protocol (e.g., TCP, UDP)              |
| `SrcIP`        | Source IP address                               |
| `SrcPort`      | Source port number                              |
| `DestIP`       | Destination IP address                          |
| `DestPort`     | Destination port number                         |
| `StartTime`    | Flow start timestamp                            |
| `EndTime`      | Flow end timestamp                              |
| `Duration`     | Duration of the flow                            |
| `UserID`       | User identifier                                 |
| `SubscriberID` | Subscriber/customer identifier                  |
| `NatIP`        | NAT-translated IP address                       |
| `NatPort`      | NAT-translated port number                      |
| `DeviceIP`     | IP address of the reporting device (e.g., CGNAT)|

### Sample Request

```bash
curl -X GET 'http://127.0.0.1:3000/api/ipdr_query/result' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "query_id": 1,
    "headers": ["SrcIP", "DestIP", "StartTime", "Duration"]
  }'
```

### Success Response

```json
{
  "status": "SUCCESS",
  "CurrentStatus": "COMPLETED",
  "QueryStatusMessage": "Query completed successfully",
  "ip": "192.168.1.100",
  "from_time": "01-04-2026 00:00:00",
  "to_time": "10-04-2026 23:59:59",
  "rows": [
    {
      "SrcIP": "192.168.1.100",
      "DestIP": "203.0.113.50",
      "StartTime": "2026-04-01 10:30:15",
      "Duration": "120"
    },
    {
      "SrcIP": "192.168.1.100",
      "DestIP": "198.51.100.25",
      "StartTime": "2026-04-01 11:45:30",
      "Duration": "45"
    }
  ]
}
```

### Success Response (All Headers)

When no `headers` parameter is specified, all 13 columns are returned:

```json
{
  "status": "SUCCESS",
  "CurrentStatus": "COMPLETED",
  "QueryStatusMessage": "Query completed successfully",
  "ip": "192.168.1.100",
  "from_time": "01-04-2026 00:00:00",
  "to_time": "10-04-2026 23:59:59",
  "rows": [
    {
      "Protocol": "TCP",
      "SrcIP": "192.168.1.100",
      "SrcPort": "54321",
      "DestIP": "203.0.113.50",
      "DestPort": "443",
      "StartTime": "2026-04-01 10:30:15",
      "EndTime": "2026-04-01 10:32:15",
      "Duration": "120",
      "UserID": "user123",
      "SubscriberID": "SUB-001",
      "NatIP": "100.64.0.1",
      "NatPort": "10234",
      "DeviceIP": "10.0.0.1"
    }
  ]
}
```

### Response Fields

| Field Name           | Type     | Description                                                  |
|----------------------|----------|--------------------------------------------------------------|
| `status`             | `string` | `"SUCCESS"` on success                                       |
| `CurrentStatus`      | `string` | Query status (`COMPLETED` or `CANCELED`)                     |
| `QueryStatusMessage` | `string` | Detailed status message from the query engine                |
| `ip`                 | `string` | The IP address that was queried                              |
| `from_time`          | `string` | Start of the query time window (`DD-MM-YYYY HH:MM:SS`)      |
| `to_time`            | `string` | End of the query time window (`DD-MM-YYYY HH:MM:SS`)        |
| `rows`               | `array`  | Array of result objects, each containing the requested header fields |

### Error Responses

#### Query Not Completed

**HTTP Status: `409 Conflict`**

Returned when the query is still in `NEW` or `INPROGRESS` state.

```json
{
  "status": "ERROR",
  "message": "Query is not completed",
  "CurrentStatus": "INPROGRESS",
  "QueryStatusMessage": "Processing records...",
  "ip": "192.168.1.100",
  "from_time": "01-04-2026 00:00:00",
  "to_time": "10-04-2026 23:59:59"
}
```

#### Result File Not Found

**HTTP Status: `404 Not Found`**

Returned when the query completed but the output CSV file is missing.

```json
{
  "status": "ERROR",
  "message": "Result not found"
}
```

#### Invalid Headers Format

**HTTP Status: `400 Bad Request`**

Returned when `headers` is not an array.

```json
{
  "status": "ERROR",
  "message": "Headers should be an array"
}
```

#### Invalid Header Names

**HTTP Status: `400 Bad Request`**

Returned when one or more header names are not recognized.

```json
{
  "status": "ERROR",
  "message": "Invalid headers: InvalidColumn, AnotherBadColumn"
}
```

#### Missing Query ID

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Query ID is required"
}
```

#### Query ID Not Found

**HTTP Status: `404 Not Found`**

```json
{
  "status": "ERROR",
  "message": "Query ID not found"
}
```

#### Unauthorized Access

**HTTP Status: `403 Forbidden`**

```json
{
  "status": "ERROR",
  "message": "You are not authorized to access this query"
}
```

---

## 5. Cancel Query

**`PUT /api/ipdr_query/cancel`**

Cancels an IPDR query that is currently in `NEW` or `INPROGRESS` state.

### What is it used for?

Use this endpoint to cancel a running or pending IPDR query. This is useful when you no longer need the results or when a query was submitted by mistake. Only queries in `NEW` or `INPROGRESS` state can be cancelled. Queries that have already completed or been previously cancelled cannot be cancelled again.

### Request Fields

| Field Name    | Type      | Required | Default | Description                                | Example          |
|---------------|-----------|----------|---------|--------------------------------------------|------------------|
| `api_token`   | `string`  | ✅ Yes   | —       | API authentication token                   | `"lg25Tly1g8QwB8mcDzqO"` |
| `username`    | `string`  | ✅ Yes   | —       | Username of the authenticated user         | `"user"`         |
| `contextname` | `string`  | ❌ No    | `"default"` | Name of the Trisul context. Defaults to `"default"` (context0) if omitted. | `"ipdr"`         |
| `query_id`    | `integer` | ✅ Yes   | —       | The query ID returned by the `new` endpoint| `1`              |

### Sample Request

```bash
curl -X PUT 'http://127.0.0.1:3000/api/ipdr_query/cancel' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "query_id": 2
  }'
```

### Success Response

```json
{
  "status": "SUCCESS",
  "message": "Query cancelled successfully",
  "ip": "10.0.0.5",
  "from_time": "09-04-2026 12:00:00",
  "to_time": "09-04-2026 18:00:00"
}
```

### Response Fields

| Field Name | Type     | Description                                             |
|------------|----------|---------------------------------------------------------|
| `status`   | `string` | `"SUCCESS"` on successful cancellation                  |
| `message`  | `string` | Confirmation message                                    |
| `ip`       | `string` | The IP address of the cancelled query                   |
| `from_time`| `string` | Start of the query time window (`DD-MM-YYYY HH:MM:SS`) |
| `to_time`  | `string` | End of the query time window (`DD-MM-YYYY HH:MM:SS`)   |

### Error Responses

#### Query Not in Cancellable State

**HTTP Status: `409 Conflict`**

Returned when the query has already completed or been cancelled.

```json
{
  "status": "ERROR",
  "message": "Query is not in NEW or INPROGRESS state",
  "ip": "192.168.1.100",
  "CurrentStatus": "COMPLETED",
  "QueryStatusMessage": "Query completed successfully",
  "from_time": "01-04-2026 00:00:00",
  "to_time": "10-04-2026 23:59:59"
}
```

#### Missing Query ID

**HTTP Status: `400 Bad Request`**

```json
{
  "status": "ERROR",
  "message": "Query ID is required"
}
```

#### Query ID Not Found

**HTTP Status: `404 Not Found`**

```json
{
  "status": "ERROR",
  "message": "Query ID not found"
}
```

#### Unauthorized Access

**HTTP Status: `403 Forbidden`**

```json
{
  "status": "ERROR",
  "message": "You are not authorized to access this query"
}
```

---

## Typical Workflow

The following sequence diagram shows a typical IPDR query lifecycle:

```
1. POST /api/ipdr_query/new          → Submit a new query, receive query_id
2. GET  /api/ipdr_query/status        → Poll until CurrentStatus is "COMPLETED"
3. GET  /api/ipdr_query/result        → Fetch the results
```

**Example workflow:**

```bash
# Step 1: Submit a new query
curl -X POST 'http://127.0.0.1:3000/api/ipdr_query/new' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "ip": "192.168.1.100",
    "from_time": "01-04-2026 00:00:00",
    "to_time": "10-04-2026 23:59:59"
  }'
# Response: { "status": "SUCCESS", "query_id": 3 }

# Step 2: Check status (repeat until COMPLETED)
curl -X GET 'http://127.0.0.1:3000/api/ipdr_query/status' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "query_id": 3
  }'
# Response: { "status": "SUCCESS", "CurrentStatus": "COMPLETED", ... }

# Step 3: Fetch results with selected columns
curl -X GET 'http://127.0.0.1:3000/api/ipdr_query/result' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "lg25Tly1g8QwB8mcDzqO",
    "contextname": "ipdr",
    "username": "user",
    "query_id": 3,
    "headers": ["Protocol", "SrcIP", "DestIP", "SrcPort", "DestPort", "StartTime"]
  }'
```

---

## Query Status Values

| Status       | Description                                   |
|--------------|-----------------------------------------------|
| `NEW`        | Query has been submitted but not yet started   |
| `INPROGRESS` | Query is currently being processed             |
| `COMPLETED`  | Query has finished and results are available   |
| `CANCELED`   | Query was cancelled by the user                |

---

## HTTP Status Codes Reference

The API uses standard HTTP status codes alongside the JSON `status` field:

| HTTP Status Code         | When Used                                                                 |
|--------------------------|--------------------------------------------------------------------------|
| `200 OK`                 | Request succeeded (all success responses)                                |
| `400 Bad Request`        | Missing or invalid parameters (IP, time, query_id, headers)              |
| `401 Unauthorized`       | Invalid or missing API token                                             |
| `403 Forbidden`          | User not authorized to access the context or query                       |
| `404 Not Found`          | Context, query ID, or result file not found                              |
| `409 Conflict`           | Query is not in the expected state (e.g., not completed, not cancellable) |
| `500 Internal Server Error` | Unexpected server-side error                                          |
