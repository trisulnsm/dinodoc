---
sidebar_position: 01
---

# Flow concepts


 *Flow Analysis* is a network monitoring technique that examines the flow of traffic between devices, networks, or applications. It involves collecting and analyzing metadata about network flows, such as:

1. Source and destination IP addresses
2. Ports and protocols
3. Packet sizes and counts
4. Timestamps and durations
5. Byte and bit counts


## Packet Capture vs NetFlow

The primary differences between them are :

| Packet capture mode   | Netflow mode    |
| ---------------------- | ------------ |
| reconstructs TCP sessions from network traffic | uses uni-directional netflow records to construct a single bi-directional one |
| creates and stores a single bi-directional flow record | de-duplicates by pinning a flow to the first router reporting it |
| flows are subordinates to traffic metering because we meter each packet directly  | traffic metering is subordinate to flows because we extract metering information from flows |
| reassembles TCP flows and extracts resource identifiers and additional traffic metering | not available  |
