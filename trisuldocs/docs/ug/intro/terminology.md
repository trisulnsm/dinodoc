# Terminology

This section explains key terms used across this and other Trisul guides. These definitions will help you better understand how Trisul analyzes, monitors, and presents network data.

## List of Terms

### Alerts

An Alert is a notification that something on the network requires attention. Trisul automatically generates different types of alerts, including:

1. Threshold Crossing – Triggered when traffic goes above or below a configured limit.

2. Badfellas – Alerts when known malicious indicators (like blacklisted IPs) are detected.

3. Flowtracker – Alerts based on specific types of flow behavior, such as long-lived or high-volume connections.

4. IDS – Suricata alerts integrated with Trisul’s analytics.

5. Anomaly – Triggered using Trisul's machine learning-based Threshold Band feature.

> You can also create custom alert types using the LUA API.

See also [Alerts](/docs/ug/alerts)

### Counter Groups

A Counter Group is a category of network entities (like hosts or interfaces) for which Trisul tracks various metrics. Each entity in a group is identified by a unique Key.

Example:
The "Host" Counter Group tracks data per IP address — such as total bandwidth, number of connections, etc.

See also: [Custom Counter Groups](/docs/ug/cg/custom)

### Flows

A Flow represents a network session — essentially a conversation between two IPs. Trisul builds flows either from raw packets or NetFlow data.

Each flow includes:

- The 5-tuple: source IP, destination IP, source port, destination port, protocol.

- Extra details: MPLS labels, VRFs, interfaces, flow tags, and more.

See also [Monitoring flows](/docs/ug/flow)

### Packets

A packet is a single unit of data transmitted over a network. Trisul stores raw packets to enable full-fidelity Network Security Monitoring (NSM). These packets are encrypted and can be retained long-term with storage optimization features.

See also: [Packet storage basics](/docs/ug/caps/fullcontent) , [Controlling what is stored](/docs/ug/caps/packetstorage)

### Resources

Trisul currently logs HTTP URLs and DNS domains, making it easier to trace what websites or services are being accessed — useful for both troubleshooting and incident response.

See also: [Resources](/docs/ug/resources/url)

### Retro

*Retro* stands for Retrospective Analysis — Trisul's way of letting you look back in time and analyze historical network traffic.

You can:

- Investigate past security or performance incidents.
- Discover long-term patterns or trends.

### Interface Trackers

These monitor network interfaces in real-time, collecting metrics like packets, bytes, and flows.

You can track:

- Individual interfaces
- VLANs
- Subnets

### Real Time Stabbers

*Real-Time Stabbers* are live traffic analysis tools, offering instant insights into specific network activity. The inspiration comes from the thermometer you **stab** into a piece of cake in the oven to check its temperature.

Use Stabbers to:

- Spot anomalies on the fly
- Investigate protocols or specific applications
- Quickly respond to performance issues or attacks

### Latency

*Latency* measures the delay between sending and receiving data over the network.

Use Trisul to:

- Monitor real-time latency
- Identify bottlenecks
- Optimize performance

### Tagger

Tagger is a flexible feature that lets you assign labels to traffic. This helps you categorize and filter traffic by user, department, app, or location.

You can:

- Create dashboards based on tags
- Trigger alerts for specific tags
- Use tags in reports

### Edges

*Edges* represent the connections between devices or interfaces in the network topology. Trisul uses Edges to map out how traffic flows through your network.

They help you:

- Visualize your network
- Find single points of failure
- Understand dependencies

### Geo

*Geo* provides geolocation information (Country, region,city) for IP addresses, helping identify traffic sources.

Use it to:

- Track traffic sources
- Detect unusual geographic activity
- Improve content delivery strategies



### Badfellas

*Badfellas* is a threat intelligence feature that identifies known malicious IP addresses and domains.

Badfellas:

- Identifies traffic from malicious IPs/domains
- Triggers alerts in real-time
- Helps you block threats proactively

### Cron Tasks

Cron Tasks are scheduled jobs that automate recurring activities like report generation, data export, or backups.

They help you:

- Save time
- Run tasks at off-peak hours
- Ensure consistency

### Name Resolution

*Name Resolution* translates IP addresses to domain names for easier identification.

Use it to:

- Simplify network analysis by providing human-readable domain names.
- Make it easier to understand traffic patterns and spot unusual behavior.

### IPDR

A standardized format (used in DoT compliance) for logging detailed metadata about network activity.

With IPDR, you can:

- Collect and store structured network data
- Support audits and compliance
- Analyze long-term trends or forensic data