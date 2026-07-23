# Correlate Network Activity Across Multiple Dimensions

## Investigation Overview

Many network investigations cannot be answered by examining a single metric, device, or application in isolation. Operational questions often require correlating multiple dimensions of network data to understand how different parts of the network interact.

For example, identifying the applications consuming bandwidth on a specific interface, determining which users are accessing a particular service from a given location, or understanding traffic distribution across multiple business units all require analyzing relationships between different network attributes.

This investigation provides a structured approach to correlating multiple dimensions of network activity to gain deeper operational insight.

---

## When to Use This Investigation

Use this investigation when you need to:

- Correlate multiple network attributes during an investigation.
- Analyze relationships between users, applications, interfaces, or locations.
- Understand how traffic is distributed across different parts of the network.
- Perform operational or capacity analysis involving multiple data dimensions.
- Answer complex network questions that cannot be resolved using a single metric.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the network attributes relevant to the investigation.
- Correlate multiple dimensions of network activity.
- Discover relationships between network entities.
- Identify patterns that are not visible through isolated analysis.
- Produce actionable operational insights.

---

## Investigation Steps

### Step 1: Define the Investigation Question

Begin by clearly identifying the question that needs to be answered.

Examples include:

- Which applications consume the most bandwidth on a particular interface?
- Which departments generate the highest internet usage?
- Which customers contribute the most traffic on a specific link?
- Which sites access a critical business application?

Clearly defining the question determines which network dimensions should be correlated.

---

### Step 2: Identify the Relevant Network Dimensions

Determine the attributes required to answer the investigation.

Examples include:

- Source and destination hosts.
- Applications.
- Interfaces.
- Routers.
- VLANs.
- Customers.
- Sites.
- Autonomous Systems (ASNs).
- Geographic locations.

Selecting the appropriate dimensions ensures the investigation remains focused on the operational objective.

---

### Step 3: Correlate the Data

Analyze how the selected dimensions relate to one another.

Look for:

- Traffic distribution.
- Shared communication patterns.
- Concentrations of activity.
- Unexpected relationships.
- Dominant contributors.

The objective is to understand how different aspects of the network interact rather than examining each independently.

---

### Step 4: Identify Operational Patterns

Review the correlated data to identify meaningful operational insights.

Consider:

- Whether traffic distribution aligns with expected usage.
- Whether particular applications dominate specific network segments.
- Whether certain users or locations contribute disproportionately to network utilization.
- Whether communication patterns reflect normal business operations.

Correlation often reveals relationships that are difficult to identify through isolated metrics.

---

### Step 5: Validate the Findings

Evaluate whether the observed relationships can be explained by known operational activities.

Consider:

- Business processes.
- Network architecture.
- Application design.
- Scheduled operations.
- Infrastructure changes.

Context helps distinguish meaningful findings from expected operational behavior.

---

### Step 6: Document the Operational Insight

Summarize the findings by documenting:

- The original investigation question.
- The correlated dimensions analyzed.
- Significant relationships identified.
- Operational conclusions.
- Recommended follow-up actions, if required.

Documenting these insights supports future planning, optimization, and troubleshooting activities.

---

## Applying this Investigation Using a Network Analytics Platform

Answering complex operational questions often requires engineers to manually correlate information from multiple monitoring systems, reports, and dashboards. This process can be time-consuming and may overlook relationships that are only visible when different dimensions of network data are analyzed together.

Network analytics platforms such as **Trisul** simplify this process by allowing multiple network dimensions to be correlated within a single analytical view, enabling engineers to explore relationships and answer complex operational questions more efficiently.

For this investigation, [**Trisul Cross Key CounterGroups**](/docs/ag/context/crosskey_countergroups/) enables engineers to:

- Correlate multiple network attributes in a single view.
- Analyze traffic across combinations of hosts, applications, interfaces, locations, customers, VLANs, and other network dimensions.
- Identify relationships that are not visible through single-dimensional analysis.
- Pivot between different perspectives during an investigation.
- Generate deeper operational insights without manually combining multiple reports.

Instead of investigating isolated metrics, engineers can understand how different components of the network interact as a whole.

---

## Investigation Findings

The following observations may help determine the next stage of the investigation.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| A small number of applications dominate traffic across multiple sites | Review application optimization or bandwidth allocation. |
| Specific users generate disproportionate traffic on selected interfaces | Continue investigating user or host activity. |
| Certain business units consistently consume more network resources | Consider capacity planning or policy adjustments. |
| Unexpected relationships appear between network entities | Validate whether the communication is authorized. |
| Traffic distribution aligns with expected operational patterns | No immediate action may be required. |
| Correlated analysis reveals recurring operational trends | Use the findings to support long-term planning and optimization. |

---

## Best Practices

- Begin with a clearly defined operational question before correlating data.
- Select only the dimensions necessary to answer the investigation.
- Interpret correlated data within the context of network architecture and business operations.
- Use correlation to complement, not replace, individual host or interface investigations.
- Document recurring patterns to improve future operational analysis.

---

## Related Investigations

- If the correlated analysis identifies a specific host requiring deeper investigation, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- If the findings indicate interface congestion, continue with [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- If understanding how the observed relationships evolved over time is important, continue with [**Investigate Historical Network Activity**](./inv3-retro.md)
- If correlated analysis reveals deviations from normal operating behavior, continue with [**Investigate Network Behavior Anomalies**](./inv5-tba.md)