# Investigate High Traffic on a Network Interface

## Investigation Overview

High interface utilization is often the first indication of network congestion, but high bandwidth alone rarely explains the root cause. A busy interface may simply reflect expected operational activity such as backups, software deployments, cloud synchronization, or database replication. In other cases, it may indicate application issues, bandwidth abuse, configuration changes, or emerging network problems.

This investigation follows the same workflow experienced network engineers use when troubleshooting interface congestion. Starting from the affected interface, the investigation progressively narrows the scope to identify the hosts consuming bandwidth, the applications responsible, and the communication patterns generating the traffic until the underlying cause becomes clear.

Using Trisul, this entire workflow can be completed without switching between multiple monitoring tools.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate unusually high utilization on a router or switch interface.
- Identify the hosts consuming interface bandwidth.
- Determine which applications are responsible for increased utilization.
- Validate whether the observed traffic is expected.
- Determine whether operational action or capacity planning is required.

---

## Investigation Objectives

By completing this investigation, you should be able to determine:

- Which interface is experiencing increased utilization.
- Which hosts contribute most of the traffic.
- Which applications generate the observed bandwidth.
- Whether the utilization represents expected operational activity.
- Whether further investigation or corrective action is required.

---

# Investigation Workflow

## Step 1: Review Interface Utilization

Every investigation begins by identifying the interface experiencing increased utilization and understanding the scope of the issue. Before investigating hosts or applications, determine whether the congestion is isolated to a single interface or affects a wider portion of the network.

Open [**Routers & Interfaces**](/docs/ug/netflow/routers_and_interfaces) to review interface utilization across monitored devices.

Use this dashboard to answer questions such as:

- Which interface is experiencing high utilization?
- Is the increase inbound, outbound, or both?
- Is the utilization sustained or only a temporary spike?
- Are multiple interfaces showing similar behaviour?

### Evidence to Collect

- Interfaces consistently operating near capacity.
- Sustained utilization rather than short-lived spikes.
- Interfaces showing unusual traffic compared to historical behaviour.
- Multiple interfaces becoming congested simultaneously.

### Continue the Investigation

Once the affected interface has been identified, determine which systems are responsible for generating the observed traffic.

---

## Step 2: Review Top Bandwidth Consumers

After identifying the affected interface, determine which hosts contribute most of the observed utilization.

Within the selected interface, review the [**Top Hosts**](/docs/ug/netflow/drilldown#hosts) and [**Top Conversations**](/docs/ug/netflow/drilldown#top-conversations-or-talkers) panels. Trisul automatically ranks the largest bandwidth consumers, allowing you to quickly identify the systems responsible for interface congestion.

This step helps answer questions such as:

- Which hosts generate most of the bandwidth?
- Is one system responsible for the majority of the utilization?
- Is the traffic primarily internal or external?
- Which conversations contribute most to the traffic?

### Evidence to Collect

- One or two hosts dominating interface utilization.
- Large conversations explaining most of the bandwidth.
- Unexpected systems generating significant traffic.
- New communication partners not previously observed.

### Continue the Investigation

If one or more hosts contribute significantly to the observed utilization, investigate the applications responsible for generating the traffic.

---

## Step 3: Analyze Application Usage

Once the primary bandwidth consumers have been identified, determine why they are generating traffic. Understanding the applications responsible provides the operational context needed to distinguish expected activity from abnormal behaviour.

Open the [**Applications**](/docs/ug/netflow/drilldown#apps) view for the selected interface or host.

This view helps answer questions such as:

- Which applications generate most of the traffic?
- Does the application usage match the role of the host?
- Are scheduled activities such as backups or software deployments responsible?
- Are unexpected protocols consuming bandwidth?

### Evidence to Collect

- Expected business applications.
- Backup or replication traffic.
- Software deployment activity.
- Unexpected or unauthorized applications.
- Protocols consuming unusually high bandwidth.

### Continue the Investigation

If application analysis does not fully explain the utilization, investigate the communication behaviour of the responsible hosts.

---

## Step 4: Investigate Communication Patterns

When a host requires further investigation, continue the analysis using [**Explore Flows**](/docs/ug/tools/explore_flows). This allows you to move beyond bandwidth statistics and understand who the host communicates with, what services it accesses, and whether those communication patterns are expected.

Use [**Explore Flows**](/docs/ug/tools/explore_flows) to review:

- Communication peers.
- Active conversations.
- Client and server relationships.
- Individual flow records.
- Traffic direction.

This step helps answer questions such as:

- Which systems communicate with the selected host?
- Which conversations generate most of the traffic?
- Are communication patterns consistent with the host's role?
- Are unexpected internal or external destinations involved?

### Evidence to Collect

- Large individual conversations.
- Unexpected communication partners.
- External destinations.
- Client-server relationships.
- Communication patterns inconsistent with the system's intended role.

### Continue the Investigation

Flow analysis is usually sufficient to identify the source of interface utilization. Where additional validation is required, continue with packet analysis.

---

## Step 5: Validate with Packet Analysis

Packet-level analysis provides the final layer of validation for investigations that require deeper protocol visibility. This step is particularly useful when troubleshooting application behaviour or confirming findings identified during flow analysis.

Where packet capture is available, pivot directly from the selected flow to [**Packet Analysis**](/docs/ug/tools/explore_flows#flow-options) by downloading the PCAP from the flows drilldown.

Use packet analysis to answer questions such as:

- Does packet-level analysis support the investigation findings?
- Are applications behaving as expected?
- Are protocol anomalies present?
- Is there evidence of retransmissions or communication failures?

### Evidence to Collect

- Successful protocol exchanges.
- Retransmissions or packet loss.
- Protocol anomalies.
- Packet-level evidence supporting the identified root cause.

### Investigation Outcome

At this stage, you should have sufficient evidence to determine the cause of the increased interface utilization and decide whether operational action, capacity planning, or further investigation is required.

---

# Investigation Completion

This investigation can generally be considered complete when:

- The affected interface has been identified.
- The primary bandwidth consumers have been identified.
- The applications responsible for the traffic have been determined.
- Communication patterns have been validated.
- Packet-level evidence has been reviewed where necessary.
- The underlying cause of the increased utilization has been established.
- Appropriate operational or engineering actions have been determined.

---

# Best Practices

- Begin every investigation from the affected interface before analysing individual hosts.
- Progressively narrow the investigation from interfaces to hosts, applications, communication patterns, and packet analysis.
- Always correlate bandwidth utilization with application activity before drawing conclusions.
- Compare current utilization with historical trends whenever possible.
- Use packet analysis only when flow-level information is insufficient.
- Document the evidence collected at each stage of the investigation.

---

# Related Investigations

- [**Investigate the Network Activity of an IP Address**](/docs/ug/playbooks/investigations/inv1-exploreflows.md)
- [**Investigate Historical Network Activity**](/docs/ug/playbooks/investigations/inv3-historical-network-activity.md)
- [**Investigate Threshold Crossing Alerts**](/docs/ug/playbooks/investigations/inv4-threshold-crossing-alerts.md)