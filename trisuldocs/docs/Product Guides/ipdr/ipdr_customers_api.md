# IPDR Customer Management API

The IPDR Customer Management API provides a comprehensive interface for managing customer information in your IPDR (Internet Protocol Detail Record) reports. This API enables seamless integration with CRM systems and supports customer data management for RADIUS/AAA and static IP assignments.

## Overview

This API allows you to perform complete CRUD (Create, Read, Update, Delete) operations on IPDR customer records. Primary use cases include:

- Managing customer information (usernames, addresses, email, and other details) for RADIUS/AAA customers
- Configuring and maintaining static IP user assignments
- Integrating customer data with external CRM systems
- Automating customer data management programmatically

## How IPDR Customer Data Works in Trisul

Trisul provides multiple methods to display customer details (name, address, mobile numbers) in IPDR reports:

### Method 1: AAA Logs
Customers can send customer details through AAA (Authentication, Authorization, and Accounting) logs to the Trisul server. Trisul automatically maps this data to the corresponding IP addresses in Excel reports.

### Method 2: Manual Entry or CSV Import
Customer details can be directly assigned in the Trisul UI by:
- Importing customer data from a CSV file
- Creating customer records manually in the UI

### Method 3: API-Based Management
This API enables developers to programmatically manage customer data, providing automation capabilities beyond the UI-based CSV import feature.

### Automatic Fallback Mechanism
When generating IPDR reports, Trisul follows this priority:
1. First checks for customer details in AAA logs
2. If no AAA data is available, automatically searches the IPDR customers database
3. Displays customer details in the report if found through any of the above methods

This ensures that customer information is displayed in reports regardless of the data source used.

## Generating API Key

To access the IPDR Customer Management API, you require a unique API token. This token grants authentication and authorization for all API operations.

To generate an API token, follow the provided link: [Generate API token](https://docs.trisul.org/docs/ag/webadmin/manageusers#generate-api-token)

## Base URL

All API endpoints are accessible via:

```
http://SERVER_IP:PORT/api/ipdrcustomers
```

## Authentication

All API requests require authentication using the following parameters:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | Your API authentication token |
| username | string | Yes | Your username |
| contextname | string | Yes | Context name (e.g., "default") |

These parameters must be included in the request body for all operations.

> **Important:** User access is context-specific. Not all users have access to all contexts. A user can only access IPDR customer data for contexts they are authorized to use. Attempting to access unauthorized contexts will result in an authentication error.

## Managing IPDR Customers

### Retrieving Customer List

Retrieve a complete list of all IPDR customers in the system.

**Request**

| Method | URL |
|--------|-----|
| GET | /api/ipdrcustomers |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| contextname | string | Yes | Context name |

**Example:**

```bash
curl -X GET 'http://192.168.1.77:8000/api/ipdrcustomers' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "GiXwBWWv5g2Fs6QeaTlx",
    "contextname": "default",
    "username": "user"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Returns array of customer objects (see example below) |

**Response Example:**

```json
[
  {
    "id": 5,
    "Name": "Trisul",
    "Address": "Chennai",
    "Email": "demo@gmail.com",
    "PhoneNumber": "1234567890",
    "AltPhoneNumber": "9999999999",
    "UserID": "B68t19"
  },
  {
    "id": 6,
    "Name": "Trisul Network Analytics",
    "Address": "India",
    "Email": "test@gmail.com",
    "PhoneNumber": "3333333333",
    "AltPhoneNumber": "5555555555",
    "UserID": "Xlr8d3"
  }
]
```

### Creating a New Customer

Create a new IPDR customer record with customer information.

**Request**

| Method | URL |
|--------|-----|
| POST | /api/ipdrcustomers |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| contextname | string | Yes | Context name |
| UserID | string | Yes | Unique user identifier |
| Name | string | Yes | Customer name |
| Address | string | No | Customer address |
| Email | string | No | Customer email address |
| PhoneNumber | string | No | Primary phone number |
| AltPhoneNumber | string | No | Alternate phone number |

> **Note:** Only `UserID` and `Name` are mandatory fields. All other fields (Address, Email, PhoneNumber, AltPhoneNumber) are optional and can be omitted or added later using the update operations.

**Example:**

```bash
curl -X POST 'http://192.168.1.77:8000/api/ipdrcustomers' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "GiXwBWWv5g2Fs6QeaTlx",
    "contextname": "default",
    "username": "user",
    "Name": "Trisul",
    "Address": "Chennai",
    "Email": "demo@gmail.com",
    "PhoneNumber": "1234567890",
    "AltPhoneNumber": "9999999999",
    "UserID": "B68t19"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Customer record created successfully (returns created customer object) |

**Response Example:**

```json
{
  "id": 3,
  "Name": "Trisul",
  "Address": "Chennai",
  "Email": "demo@gmail.com",
  "PhoneNumber": "1234567890",
  "AltPhoneNumber": "9999999999",
  "UserID": "B68t19"
}
```

### Updating Customer Information

Update all fields of an existing IPDR customer record. All customer fields must be provided in the request, even if they remain unchanged.

**Request**

| Method | URL |
|--------|-----|
| PUT | `/api/ipdrcustomers/{UserID}` |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| contextname | string | Yes | Context name |
| Name | string | Yes | Customer name |
| Address | string | Yes | Customer address |
| Email | string | Yes | Customer email address |
| PhoneNumber | string | Yes | Primary phone number |
| AltPhoneNumber | string | Yes | Alternate phone number |
| UserID | string | Yes | Unique user identifier |

**Example:**

```bash
curl -X PUT 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "GiXwBWWv5g2Fs6QeaTlx",
    "contextname": "default",
    "username": "user",
    "Name": "Trisul Network Analyzer",
    "Address": "India",
    "Email": "test@gmail.com",
    "PhoneNumber": "3333333333",
    "AltPhoneNumber": "5555555555",
    "UserID": "B68t19"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Customer record updated successfully (returns updated customer object) |

**Response Example:**

```json
{
  "id": 3,
  "Name": "Trisul Network Analyzer",
  "Address": "India",
  "Email": "test@gmail.com",
  "PhoneNumber": "3333333333",
  "AltPhoneNumber": "5555555555",
  "UserID": "B68t19"
}
```

### Partially Updating Customer Information

Update specific fields of an existing IPDR customer record. Only the fields you wish to modify need to be included in the request.

**Request**

| Method | URL |
|--------|-----|
| PATCH | `/api/ipdrcustomers/{UserID}` |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| contextname | string | Yes | Context name |
| (any field) | string | No | Any customer field to update |

**Example:**

```bash
curl -X PATCH 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "GiXwBWWv5g2Fs6QeaTlx",
    "contextname": "default",
    "username": "user",
    "Address": "Partially Updated"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Customer record partially updated successfully (returns updated customer object) |

**Response Example:**

```json
{
  "id": 3,
  "Name": "Trisul Network Analyzer",
  "Address": "Partially Updated",
  "Email": "test@gmail.com",
  "PhoneNumber": "3333333333",
  "AltPhoneNumber": "5555555555",
  "UserID": "B68t19"
}
```

> **Note:** The key difference between full update (PUT) and partial update (PATCH) is that PUT requires all field values to be provided, even if unchanged, while PATCH only requires the fields you wish to modify.

### Deleting a Customer

Delete an existing IPDR customer record from the system.

**Request**

| Method | URL |
|--------|-----|
| DELETE | `/api/ipdrcustomers/{UserID}` |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| api_token | string | Yes | API authentication token |
| username | string | Yes | Username |
| contextname | string | Yes | Context name |

**Example:**

```bash
curl -X DELETE 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_token": "GiXwBWWv5g2Fs6QeaTlx",
    "contextname": "default",
    "username": "user"
  }'
```

**Response**

| Status | Response |
|--------|----------|
| 200 | Customer record deleted successfully (returns deleted customer object) |

**Response Example:**

```json
{
  "id": 3,
  "Name": "Trisul Network Analyzer",
  "Address": "Partially Updated",
  "Email": "test@gmail.com",
  "PhoneNumber": "3333333333",
  "AltPhoneNumber": "5555555555",
  "UserID": "B68t19"
}
```

> **Important:** Deleting a customer record is permanent and cannot be undone. Ensure you have verified the UserID before performing this operation.

## Error Handling

The API returns specific error responses for various failure scenarios. Understanding these errors helps in proper error handling and troubleshooting.

### Invalid API Token

When an invalid or expired API token is provided, the API returns an authentication error.

**Response**

| Status | Response |
|--------|----------|
| 200 | ```{"status": "ERROR", "message": "Invalid API token"}``` |

### Invalid Context Name

When a context name that does not exist is provided, the API returns a context validation error.

**Response**

| Status | Response |
|--------|----------|
| 200 | ```{"status": "Error", "message": "Invalid Context name - ipdrr"}``` |

### Unauthorized Context Access

When a user attempts to access IPDR customer data for a context they do not have permission to access, the API returns an authorization error.

**Response**

| Status | Response |
|--------|----------|
| 200 | ```{"status": "Error", "message": "The user (user) is not allowed to access the context ipdr"}``` |

> **Note:** User access is context-specific. Each user is granted access to specific contexts only. This security measure ensures that users can only view and modify customer data within their authorized contexts.