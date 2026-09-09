
# REST API

The Trisul REST API provides a simple HTTP/JSON interface for accessing network analytics data, metadata, and historical statistics from Trisul. These endpoints expose the same backend functionality available through the Trisul Remote Protocol (TRP), making it easy to integrate Trisul with dashboards, automation workflows, reporting tools, and third-party applications.

The APIs support authenticated access to network statistics, counter groups, historical time windows, and top-N analytics without requiring direct interaction with the Trisul backend.

## REST API Overview

The REST API documentation currently includes the following endpoints:

| API | What it provides |
|------|------------------|
| **Counter Group Info API** | Discovers available counter groups, GUIDs, bucket sizes, and meter definitions required for querying analytics data. This is typically the first API called in any workflow. |
| **Time Slices API** | Returns available historical data windows, individual storage slices, and storage pool information. Use this endpoint to determine what historical data is available before making analytics queries. |
| **Counter Group Topper API** | Retrieves the top-K keys for a selected counter group and meter, enabling Top-N reports such as top hosts, applications, protocols, ASNs, interfaces, and other network entities. |

## Typical API Workflow

Most applications using the Trisul REST API follow this sequence:

1. **Counter Group Info API**
   - Discover available counter groups.
   - Obtain the required Counter Group GUID.
   - Retrieve available meter IDs (Bytes, Packets, Connections, etc.).

2. **Time Slices API**
   - Determine the available historical time range.
   - Verify that the requested data window exists.
   - Optionally retrieve storage and disk usage information.

3. **Counter Group Topper API**
   - Query Top-N analytics using the selected Counter Group GUID and Meter ID.
   - Specify the desired historical time window.
   - Retrieve ranked statistics for hosts, applications, protocols, ASNs, interfaces, and other monitored entities.

Following this workflow ensures that applications query valid data ranges while using the correct counter groups and metrics for analytics.
