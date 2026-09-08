---
sidebar_position: 6
---

# Sessions

The **Sessions** dashboard helps you find the network connections that are using significant amounts of data or staying connected for a long time.

When you look at a traffic chart, you can see that the network is busy, but a traffic chart does not usually tell you **which computers or services are responsible for that activity**. The Sessions dashboard helps you find those individual connections so you can investigate them further.

For example, if the network suddenly starts using much more bandwidth than usual, you can use the Sessions dashboard to find the connections that are transferring the most data and see which systems are communicating.


> **Note:** The information displayed in the dashboard depends on the selected **Time window** and **Topper count**.

## Find the connections transferring the most data

**Top IP Flows** shows the connections that transferred the largest amount of data during the selected period.

This is useful when you want to find out **what is responsible for a large amount of network activity**.

Instead of seeing only that the network transferred a large amount of data, this view lets you identify the individual connections that contributed most to that total. You can then examine those connections to understand what systems were communicating and investigate them further.

## Find the largest data transfers leaving your network

**Top IP Flows Out of Your Network** shows the connections that transferred the largest amount of data from your internal network to destinations outside it.

This is useful when you want to find out **which internal systems are sending large amounts of data outside the network**.

For example, if an internal computer is unexpectedly sending a large amount of data to an external destination, this view can help you identify that communication and investigate why the transfer is taking place.

## Find connections that have been active for a long time

**Top Long Lived Flows** shows the connections that have remained active for the longest time.

A connection can remain open for a long time even when it is not transferring a large amount of data. This means a long-running connection may not appear near the top of the largest-data-transfer lists.

This view is useful when you want to find **connections that have stayed active for an unusually long time** and determine whether they are expected.

## Find the largest data transfers into your network

**Top Flows Into Your Network** shows the connections that transferred the largest amount of data from outside the network into your internal network.

This is useful when you want to find out **which external communications are bringing large amounts of data into your network**.

You can use this view when investigating an unexpected increase in incoming data or when you need to identify the external systems responsible for large transfers.

## Find TCP connections transferring the most application data

The two **TCP Payload** views provide a more specific way to look at data transferred through TCP connections.

A TCP connection carries different types of information as part of the communication. **TCP Payload** refers to the actual data being carried by the connection, rather than the additional information used to deliver that data across the network.

These views are useful when you want to focus on **the amount of actual data being transferred by TCP connections**.

### TCP Flows Uploading Data by TCP Payload

**Top TCP Flows Uploading Data based on TCP Payloads** shows TCP connections that transferred the largest amount of actual data from your internal network to outside destinations.

Use this view when you need to identify **which TCP connections are responsible for the largest outbound data transfers**.

### TCP Flows Downloading Data by TCP Payload

**Top TCP Flows Downloading Data based on TCP Payloads** shows TCP connections that transferred the largest amount of actual data from outside destinations into your internal network.

Use this view when you need to identify **which TCP connections are responsible for the largest inbound data transfers**.

## How to use the Sessions dashboard

The different views help you look at network activity from different angles:

- **Something is using a lot of bandwidth:** Start with **Top IP Flows** to find the connections transferring the most data.
- **A large amount of data is leaving the network:** Check **Top IP Flows Out of Your Network**.
- **A connection seems to have stayed active for a long time:** Check **Top Long Lived Flows**.
- **A large amount of data is coming into the network:** Check **Top Flows Into Your Network**.
- **You want to focus specifically on actual data transferred through TCP:** Use the **TCP Payload** views.

The goal is not simply to find a connection that appears at the top of a list. The information gives you a starting point for understanding **which systems are communicating, how much data they are transferring, and whether the activity is expected**.

## Investigate Further

Use the **Sessions** dashboard when you need to move from seeing **“the network is busy”** to finding **“which connections are responsible.”**

Once you identify a connection that needs attention, investigate its details to understand the communication more closely.

For information about investigating network activity further, see the [Network Investigation Playbook](/playbook/Network%20Investigation%20Playbook/).