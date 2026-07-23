# Investigate High Traffic on a Network Interface

## Investigation Overview

Network interfaces provide the primary indication of traffic entering and leaving a network. A sudden increase in interface utilization can lead to application latency, packet loss, congestion, or degraded user experience.

While identifying a congested interface is relatively straightforward, determining why it is congested requires a structured investigation. The increased utilization may result from legitimate business activity, scheduled data transfers, backup operations, software updates, misconfigurations, or unexpected network behavior.

This investigation provides a systematic approach to identifying the source of excessive traffic and determining whether corrective action is required.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate unusually high utilization on a router or switch interface.
- Identify the users or systems consuming bandwidth.
- Determine which applications are responsible for interface congestion.
- Investigate intermittent network slowdowns.
- Validate whether increased traffic is expected.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the affected interface.
- Measure the level of interface utilization.
- Determine the top bandwidth consumers.
- Identify the applications generating the traffic.
- Decide whether the observed utilization is expected or requires remediation.

---

## Investigation Steps

### Step 1: Confirm the Interface Experiencing High Utilization

Begin by identifying the interface that is experiencing increased traffic.

Determine:

- Which router or network device owns the interface.
- Whether the increase affects inbound traffic, outbound traffic, or both.
- Whether utilization is consistently high or occurs intermittently.
- Whether the increase coincides with reported performance issues.

Understanding the scope of the issue helps determine whether the investigation should focus on a single interface or a broader network segment.

---

### Step 2: Measure the Severity of the Utilization

Determine how heavily the interface is being utilized.

Consider:

- Current utilization.
- Peak utilization.
- Average utilization over the investigation period.
- Duration of sustained high utilization.

A brief traffic spike may not require intervention, whereas sustained high utilization may indicate capacity constraints or abnormal network activity.

---

### Step 3: Identify the Top Bandwidth Consumers

Once the affected interface has been identified, determine which hosts are contributing most to the traffic.

Review:

- Top source IP addresses.
- Top destination IP addresses.
- Highest bandwidth consumers.
- Largest conversations.

At this stage, the objective is to identify the systems responsible for the majority of the traffic before investigating individual hosts.

---

### Step 4: Understand the Nature of the Traffic

After identifying the primary consumers, determine what type of traffic is traversing the interface.

Questions to consider include:

- Which applications generate the highest volume of traffic?
- Is the traffic related to business applications?
- Does the activity correspond to scheduled operations such as backups or software updates?
- Are unexpected protocols contributing to the utilization?

Understanding the application mix provides important context before concluding that the traffic is abnormal.

---

### Step 5: Determine Whether the Utilization Is Expected

Not all high utilization represents a problem.

Evaluate whether the observed traffic aligns with normal operational behavior.

Consider:

- Whether similar utilization has occurred previously.
- Whether maintenance or scheduled transfers are taking place.
- Whether the increase is isolated or recurring.
- Whether the traffic is proportional to normal business activity.

Understanding the operational context helps distinguish legitimate utilization from issues requiring corrective action.

---

### Step 6: Determine the Appropriate Response

Based on the findings, determine the next course of action.

Possible outcomes include:

- No action required because the utilization is expected.
- Continue investigating the systems responsible for the traffic.
- Investigate a specific IP address in greater detail.
- Review historical traffic trends to identify recurring patterns.
- Consider capacity planning if sustained utilization approaches interface limits.

---

## Applying this Investigation Using a Network Analytics Platform

Investigating interface utilization typically requires correlating information from multiple monitoring systems, including SNMP data, flow records, router statistics, and application traffic. Performing this analysis manually can be time-consuming, particularly when multiple interfaces or high-volume environments are involved.

Network analytics platforms such as **Trisul** simplify this investigation by combining interface statistics with detailed flow analysis, allowing engineers to move from identifying a congested interface to understanding exactly which hosts and applications are responsible.

For this investigation, [**Trisul Routers & Interfaces**](/docs/ug/netflow/routers_and_interfaces) enables engineers to:

- Monitor interface utilization across routers and network devices.
- Identify interfaces experiencing high traffic.
- Review historical utilization trends.
- Drill down into the hosts generating the traffic.
- Identify the applications contributing to interface utilization.
- Continue the investigation using [**Explore Flows**](/docs/ug/tools/explore_flows) for detailed communication analysis.

---

## Investigation Findings

The following observations may help determine the appropriate next step.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| Utilization remains consistently close to interface capacity | Capacity planning or traffic engineering may be required. |
| A small number of hosts generate most of the traffic | Continue investigating those hosts individually. |
| Traffic is primarily generated by scheduled backup or replication jobs | Expected operational activity. |
| Unexpected applications dominate the interface | Validate whether the traffic is authorized. |
| Utilization increases only during business hours | Likely reflects normal user activity. |
| Utilization increases unexpectedly without an identifiable business reason | Continue investigating application and host behavior. |

---

## Best Practices

- Confirm sustained utilization before assuming congestion.
- Investigate the largest traffic contributors before examining smaller flows.
- Evaluate application context alongside bandwidth usage.
- Compare interface utilization with historical trends whenever possible.
- Avoid making capacity decisions based on isolated traffic spikes.

---

## Related Investigations

- If one or more hosts are identified as significant bandwidth consumers, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md).
- If interface utilization appears abnormal only during specific periods, continue with [**Investigate Historical Network Activity**](./inv3-retro.md).
- If the interface repeatedly exceeds operational limits, continue with [**Investigate Threshold Crossing Events**](./inv4-tca.md).