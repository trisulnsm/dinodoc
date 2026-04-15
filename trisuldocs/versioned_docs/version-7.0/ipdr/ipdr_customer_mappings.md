# IPDR Customer IP Mapping API

The IPDR Customer IP Mapping API provides a comprehensive interface for managing IP address and subnet assignments to IPDR customers. This API enables you to associate static IP addresses or IP subnets with customer records, supporting time-based IP allocation and terminal identification for network tracking and reporting.

## Overview

This API allows you to perform complete CRUD (Create, Read, Update, Delete) operations on IPDR customer IP mapping records. Primary use cases include:

- Mapping static IP addresses or IP subnets to specific IPDR customers
- Managing time-based IP allocations with start and end times
- Tracking terminal IDs associated with customer IP assignments
- Supporting historical IP assignment records for audit and compliance
- Enabling automated IP-to-customer mapping for network management systems

## How IP Mapping Works with IPDR Customers

The IP Mapping API works in conjunction with the IPDR Customer Management API to create a complete customer-to-IP association system:

### Two-Step Process

1. **Create Customer Record**: First, create an IPDR customer using the IPDR Customer Management API
2. **Map IP Addresses**: Then, use this IP Mapping API to associate one or more IP addresses or subnets to that customer

### IP Mapping Features

- **Single IP or Subnet Support**: Map individual IP addresses (e.g., `172.27.19.224`) or entire subnets (e.g., `192.168.1.23/24`)
- **Time-Based Allocations**: Define start and end times for IP assignments using Unix timestamps
- **Multiple IPs per Customer**: A single customer can have multiple IP mappings with different time ranges
- **Terminal ID Tracking**: Optional terminal identifier for each IP assignment
- **Historical Records**: Maintain historical IP assignment data by setting end times

### IP Mapping Constraints

Understanding the IP-to-customer mapping rules is crucial for proper system configuration:

#### One-to-One Mapping Per Time Period
- **An IP address or subnet can be mapped to only one customer during a specific time duration**
- The time period is defined by the `starttime` and `endtime` fields
- This ensures there are no conflicting assignments where the same IP is assigned to multiple customers simultaneously

#### Time-Based Reassignment
- **The same IP or subnet can be mapped to different customers with non-overlapping time ranges**
- Example: IP `172.27.19.224` can be assigned to Customer A from Jan 1 to Jan 31, and then to Customer B from Feb 1 onwards
- This allows for IP address reallocation while maintaining historical accuracy

#### Multiple IPs Per Customer
- **A single customer can be mapped to multiple different IP addresses or subnets**
- These can be active simultaneously or at different time periods
- Example: Customer A can have both `192.168.1.100` and `10.0.0.50/24` assigned at the same time

#### Practical Examples

**Valid Scenarios:**
```
Customer A: 192.168.1.100 (Jan 1 - Jan 31)
Customer B: 192.168.1.100 (Feb 1 - Feb 28)  ✓ Different time periods

Customer A: 192.168.1.100 (Jan 1 - ongoing)
Customer A: 10.0.0.50 (Jan 1 - ongoing)      ✓ Same customer, different IPs
```

**Invalid Scenarios:**
```
Customer A: 192.168.1.100 (Jan 1 - Jan 31)
Customer B: 192.168.1.100 (Jan 15 - Feb 15)  ✗ Overlapping time periods
```

### Data Relationship

Each IP mapping record is linked to a customer through the `ipdr_customer_id` field, which references the customer's internal `id` from the IPDR customers table. When creating mappings via the API, you use the customer's `UserID` for convenience, and the system automatically resolves it to the correct `ipdr_customer_id`.

## Generating API Key

To access the IPDR Customer IP Mapping API, you require a unique API token. This token grants authentication and authorization for all API operations.

To generate an API token, follow the provided link: [Generate API token](https://docs.trisul.org/docs/ag/webadmin/manageusers#generate-api-token)

## Base URL

All API endpoints are accessible via:

```
http://SERVER_IP:PORT/api/ipdrcustomers_mapping
```

## Authentication

All API requests require authentication using the following parameters:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | Your API authentication token |
| username | string | Yes | Your username |
| context | string | Yes | Context name (e.g., "default", "ipdr") |

These parameters must be included in the request body for all operations.

> **Important:** User access is context-specific. Not all users have access to all contexts. A user can only access IPDR customer IP mapping data for contexts they are authorized to use. Attempting to access unauthorized contexts will result in an authentication error.

## Managing IP Mappings

### Retrieving All IP Mappings

Retrieve a complete list of all IP mappings for IPDR customers in the system.

**Request**

| Method | URL |
|--------|-----|
| GET | /api/ipdrcustomers_mapping |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| context | string | Yes | Context name |

**Example:**

```bash
curl -X GET 'http://192.168.1.77:8000/api/ipdrcustomers_mapping' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Returns array of IP mapping objects (see example below) |

**Response Example:**

```json
[
  {
    "id": 1,
    "ipdr_customer_id": 4,
    "ipsubnet": "172.27.19.224",
    "starttime": 0,
    "endtime": 1735669799,
    "terminalid": " TERM2025010001"
  },
  {
    "id": 6,
    "ipdr_customer_id": 5,
    "ipsubnet": "192.168.1.23/24",
    "starttime": 1775759400,
    "endtime": null,
    "terminalid": ""
  },
  {
    "id": 7,
    "ipdr_customer_id": 7,
    "ipsubnet": "10.62.8.160",
    "starttime": 1775759400,
    "endtime": null,
    "terminalid": "8798797"
  }
]
```

### Creating a New IP Mapping

Create a new IP mapping to associate an IP address or subnet with an IPDR customer.

**Request**

| Method | URL |
|--------|-----|
| POST | /api/ipdrcustomers_mapping |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| context | string | Yes | Context name |
| UserID | string | Yes | Customer's unique user identifier |
| ipsubnet | string | Yes | IP address or subnet (e.g., "172.27.19.224" or "192.168.1.0/24") |
| starttime | string | Yes | Start time as Unix timestamp (use "0" for beginning of time) |
| endtime | string | No | End time as Unix timestamp (omit or use empty string for ongoing assignment) |
| terminalid | string | No | Terminal identifier for this IP assignment |

> **Note:** The `starttime` and `endtime` fields use Unix timestamps (seconds since January 1, 1970). Set `starttime` to "0" for historical records or assignments starting from the beginning. Leave `endtime` empty or null for ongoing assignments without an end date.

**Example:**

```bash
curl -X POST 'http://192.168.1.77:8000/api/ipdrcustomers_mapping' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr",
    "UserID": "U1001",
    "ipsubnet": "192.168.1.25/16",
    "starttime": "1723431899",
    "endtime": "1723444899",
    "terminalid": "TERM12345"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | IP mapping created successfully (returns created mapping object) |

**Response Example:**

```json
{
  "id": 11,
  "ipdr_customer_id": 4,
  "ipsubnet": "192.168.1.25/16",
  "starttime": 1723431899,
  "endtime": 1723444899,
  "terminalid": "TERM12345"
}
```

### Updating an IP Mapping

Update an existing IP mapping for a customer. This operation updates the IP mapping associated with the specified UserID.

**Request**

| Method | URL |
|--------|-----|
| PUT | `/api/ipdrcustomers_mapping/{UserID}` |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| context | string | Yes | Context name |
| ipsubnet | string | Yes | IP address or subnet |
| starttime | string | Yes | Start time as Unix timestamp |
| endtime | string | No | End time as Unix timestamp |
| terminalid | string | No | Terminal identifier |

> **Note:** When updating an IP mapping, all fields should be provided with their new or existing values. The update operation modifies the existing mapping record associated with the customer.

**Example:**

```bash
curl -X PUT 'http://192.168.1.77:8000/api/ipdrcustomers_mapping/U1001' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr",
    "ipsubnet": "172.27.19.224",
    "starttime": "1723443837",
    "endtime": "1723444899"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | IP mapping updated successfully (returns updated mapping object) |

**Response Example:**

```json
{
  "id": 1,
  "ipdr_customer_id": 4,
  "ipsubnet": "172.27.19.224",
  "starttime": 1723443837,
  "endtime": 1723444899,
  "terminalid": " TERM2025010001"
}
```

### Deleting an IP Mapping

Delete an existing IP mapping for a customer from the system.

**Request**

| Method | URL |
|--------|-----|
| DELETE | `/api/ipdrcustomers_mapping/{UserID}` |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| context | string | Yes | Context name |

**Example:**

```bash
curl -X DELETE 'http://192.168.1.77:8000/api/ipdrcustomers_mapping/U1005' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | IP mapping deleted successfully (returns deleted mapping object) |

**Response Example:**

```json
{
  "id": 5,
  "ipdr_customer_id": 8,
  "ipsubnet": "172.27.19.200",
  "starttime": 0,
  "endtime": 1740799800,
  "terminalid": " TERM2025010005"
}
```

> **Important:** Deleting an IP mapping is permanent and cannot be undone. Ensure you have verified the UserID before performing this operation. This will remove the IP-to-customer association but will not delete the customer record itself.

## Error Handling

The API returns specific error responses for various failure scenarios. Understanding these errors helps in proper error handling and troubleshooting.

### Invalid API Token

When an invalid or expired API token is provided, the API returns an authentication error.

**Response**

| Status | Response |
|--------|----------|
| 422 | ```{"status": "ERROR", "message": "Invalid API token"}``` |

### Invalid Context Name

When a context name that does not exist is provided, the API returns a context validation error.

**Response**

| Status | Response |
|--------|----------|
| 422 | ```{"status": "Error", "message": "Invalid Context name - ipdrr"}``` |

### Unauthorized Context Access

When a user attempts to access IPDR customer IP mapping data for a context they do not have permission to access, the API returns an authorization error.

**Response**

| Status | Response |
|--------|----------|
| 200 | ```{"status": "Error", "message": "The user (user) is not allowed to access the context ipdr"}``` |

### IPDR Customer Not Found

When attempting to update or delete an IP mapping for a customer that does not exist in the system, the API returns a not found error.

**Response**

| Status | Response |
|--------|----------|
| 422 | ```{"status": "Error", "message": "IPDR Customer not found"}``` |

**Example Scenario:**

```bash
curl -X DELETE 'http://192.168.1.77:8000/api/ipdrcustomers_mapping/U10056' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr"
  }'
```

This error occurs when the specified UserID does not exist in the IPDR customers database.

### Duplicate IP Mapping

When attempting to create a mapping with the same IP address, start time, and end time combination that already exists for a customer, the API returns a duplicate error.

**Response**

| Status | Response |
|--------|----------|
| 422 | ```{"status": "Error", "message": "Duplicate Mapping for UserID : U1001"}``` |

**Example Scenario:**

```bash
curl -X POST 'http://192.168.1.77:8000/api/ipdrcustomers_mapping' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "JhgyS1Tyb01ZH1Q4FIMT",
    "username": "user",
    "context": "ipdr",
    "UserID": "U1001",
    "ipsubnet": "192.168.1.25/16",
    "starttime": "1723431899",
    "endtime": "1723444899",
    "terminalid": "TERM12345"
  }'
```

This error prevents creating overlapping or duplicate IP assignments for the same customer within the same time period. To resolve this, either modify the time range or update the existing mapping instead.

## Best Practices

### Time Range Management

- Use Unix timestamps for precise time tracking
- Set `starttime` to `0` for assignments that should start from the beginning
- Leave `endtime` as `null` or empty for ongoing assignments without a defined end date
- Avoid creating overlapping time ranges for the same IP address to prevent conflicts
- **Ensure no time overlap when assigning the same IP to different customers** - the system enforces one-to-one mapping per time period

### IP Subnet Format

- Single IP addresses: `172.27.19.224`
- IP subnets with CIDR notation: `192.168.1.0/24`
- Ensure proper CIDR notation for subnets to avoid assignment errors

### Workflow Integration

1. First, create the IPDR customer using the `/api/ipdrcustomers` endpoint
2. Then, create IP mappings using the customer's `UserID`
3. The system automatically resolves the `UserID` to the internal `ipdr_customer_id`
4. Multiple IP mappings can be created for a single customer with different time ranges
5. Plan IP reassignments carefully to avoid time overlaps when moving IPs between customers

### Terminal ID Usage

- Use terminal IDs to track specific equipment or connection points
- Terminal IDs are optional but recommended for network asset tracking
- Consistent terminal ID naming helps with reporting and troubleshooting

### Planning IP Reassignments

When reassigning an IP address from one customer to another:

1. **Option 1 - Clean Cutover:**
   - Set the `endtime` for the current customer's mapping to the cutover date
   - Create a new mapping for the new customer with `starttime` beginning after the previous `endtime`

2. **Option 2 - Historical Closure:**
   - Delete the current mapping or update it with a past `endtime`
   - Create a new mapping for the new customer starting from the desired date

3. **Verification:**
   - Always verify there are no overlapping time periods for the same IP
   - Check existing mappings before creating new ones to avoid conflicts

> **Note:** User access is context-specific. Each user is granted access to specific contexts only. This security measure ensures that users can only view and modify IP mapping data within their authorized contexts.