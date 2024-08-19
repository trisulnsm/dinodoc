---
sidebar_position: 3
---

# Terminology

Various terminology used in this and other guides.

## List of Terms

### Alerts

A notice that something needs attention. Out of the box Trisul can
generate the following types of alerts

1. threshold crossing : simple traffic over/under threshold
2. badfellas : when certain Intel events such as known malicious
   indicators are seen
3. flowtracker : certain types of flow activity are seen, such as large
   or long lived uploads
4. ids : alerts from Suricata integrated with other metrics in Trisul
5. anomaly : using the machine learning Threshold Band feature

in addition, you can create your own alert types and fire them using the
LUA API.

Also see [Alerts](/docs/ug/alerts)

### Counter Groups

A type of network entity for which various metrics are tracked. Each
individual instance within it is tracked by a unique Key. For example :
The “Host” counter group contains meters such as Total Traffic,
Concurrent connections, etc. Each host within the *Host* Counter group
is identified by a IP Address.

Also see [Custom Counter
Groups](/docs/ug/cg/custom)

### Flows

A flow represents a single connection between a source and destination IP address. Basically the IP conversation. 
Trisul tracks flows by processing network packets or by working off
Netflow. The flows work for both IPv4 and IPv6 and contain the 5 Tuple
besides other flow attributes like MPLS Labels, VRFs, Interface Index,
flow tags, etc

Also see [Monitoring
flows](/docs/ug/flow)

### Packets

A packet is a single unit of data transmitted over a network.To aid the practice of NSM, Trisul stores raw packets for extended periods of time. Innovative options are available to control storage requirements. Packets are encrypted on disk for added security.

Also see [Packet storage
basics](/docs/ug/caps/fullcontent) , [Controlling what is
stored](/docs/ug/caps/packetstorage)

### Resources

HTTP URLs and DNS (currently) \| All URLS and domains are logged.
Provides a useful handle for incident response.

Also see
[Resources](/docs/ug/resources/url)

### Retro

*Retro* is Trisul's retrospective analysis feature, allowing you to analyze historical network traffic data. With *Retro* you can,

- Investigate past security incidents, network issues, or performance problems.

- Analyze traffic patterns, identify trends, and gain insights from stored data.

### Interface Trackers

*Interface Trackers* monitor network interfaces for traffic, providing real-time data.

* Trackers collect metrics such as bytes, packets, and flows, giving you visibility into network activity.
* Configure trackers to monitor specific interfaces, VLANs, or subnets.

### Real Time Stabbers

*Real-Time Stabbers* are live traffic analysis tools, offering instant insights into specific network activity. The inspiration comes from the thermometer you **stab** into a piece of cake in the oven to check its temperature.

* Stabbers provide real-time visibility into traffic flows, protocols, and applications.
* Use Stabbers to detect anomalies, identify security threats, or troubleshoot network issues.

### Latency

*Latency* measures the delay between sending and receiving data over the network.

* Monitor latency to ensure network performance and identify potential bottlenecks.
* Analyze latency metrics to optimize network configuration and improve user experience.

### Tagger

*Tagger* is a feature that assigns labels or tags to network traffic for filtering, reporting, or alerting purposes.

* Use Tagger to categorize traffic by application, user, department, or location.
* Apply tags to create custom dashboards, reports, or alerts tailored to your needs.

### Edges

*Edges* represent the connections between devices or interfaces in the network topology.

* Edges help visualize network relationships, making it easier to understand traffic flows.
* Use Edges to identify critical network paths, dependencies, and potential single points of failure.

### Geo

*Geo* provides geolocation information for IP addresses, helping identify traffic sources.

* Geo enables you to track traffic by country, region, or city.
* Use Geo to detect potential security threats, analyze traffic patterns, or optimize content delivery.

### Badfellas

*Badfellas* is a threat intelligence feature that identifies known malicious IP addresses and domains.

* Badfellas helps detect and alert on potential security threats in real-time.
* Use Badfellas to block malicious traffic, reducing the risk of security breaches.

### Cron Tasks

*Cron Tasks* are scheduled jobs that automate tasks, such as report generation or data exports.

* Cron Tasks save time and increase efficiency by automating routine tasks.
* Use Cron Tasks to schedule recurring reports, data backups, or maintenance tasks.

### Name Resolution

*Name Resolution* translates IP addresses to domain names for easier identification.

* Name Resolution simplifies network analysis by providing human-readable domain names.
* Use Name Resolution to identify traffic sources, detect security threats, or analyze traffic patterns.

### IPDR

*IPDR* (Internet Protocol Detail Record) is a DoT mandated standard for collecting and storing network traffic data.

* IPDR provides a structured format for storing traffic metadata, enabling efficient analysis.
* Use IPDR to collect, store, and analyze network traffic data for security, performance, and compliance purposes.
