# Investigate Historical Network Activity

## Investigation Overview

Not all network incidents are detected as they occur. Performance issues, security events, application outages, and unexpected traffic patterns are often discovered hours, days, or even weeks after the event.

When an incident is identified retrospectively, understanding what happened requires reconstructing network activity from the relevant time period. Engineers must determine how the network behaved, which systems were involved, how traffic changed over time, and whether any unusual communication patterns were present.

This investigation provides a structured approach to reconstructing historical network activity and identifying the sequence of events that contributed to an incident.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate an incident discovered after it occurred.
- Analyze historical network performance issues.
- Review traffic during an application outage.
- Determine what happened during a reported security event.
- Compare network behavior across different time periods.
- Reconstruct network activity for operational analysis.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Reconstruct network activity for a specific period.
- Identify the systems involved in the incident.
- Understand changes in traffic patterns.
- Identify unusual bandwidth consumption.
- Establish a timeline of network events.
- Determine whether additional investigation is required.

---

## Investigation Steps

### Step 1: Define the Investigation Time Window

Begin by identifying the period during which the incident occurred.

Where possible, determine:

- When the issue was first reported.
- When the issue is believed to have started.
- When the issue ended.
- Whether there were any maintenance activities or configuration changes during the same period.

Clearly defining the investigation window reduces unnecessary analysis and helps focus on the relevant network activity.

---

### Step 2: Establish a Baseline

Before examining the incident itself, understand what normal network behavior looked like during comparable periods.

Consider:

- Typical bandwidth utilization.
- Normal application usage.
- Common communication patterns.
- Expected traffic volume.

Establishing a baseline helps distinguish operational changes from genuine anomalies.

---

### Step 3: Analyze Network Activity During the Incident

Review network activity throughout the investigation period.

Focus on identifying:

- Significant increases or decreases in traffic.
- Changes in communication patterns.
- Unexpected applications or protocols.
- Unusual traffic concentrations.
- Large data transfers.

Rather than looking for a single event, understand how network behavior evolved throughout the incident.

---

### Step 4: Identify Systems Involved

Determine which hosts, servers, or network devices contributed to the observed activity.

Identify:

- The highest traffic contributors.
- Frequently communicating systems.
- New or unexpected communication pairs.
- Systems that behaved differently from their normal operating patterns.

Understanding which systems participated in the event helps narrow the investigation.

---

### Step 5: Correlate Events and Observations

Review the findings as a complete sequence rather than isolated observations.

Consider questions such as:

- Did increased bandwidth coincide with application issues?
- Did communication patterns change before the incident became visible?
- Were multiple systems affected simultaneously?
- Did traffic return to normal after the incident?

Correlating observations often reveals relationships that individual metrics cannot explain.

---

### Step 6: Document the Timeline

Summarize the investigation by documenting the sequence of significant events.

Include:

- Time of observed changes.
- Systems involved.
- Changes in traffic behavior.
- Significant observations.
- Likely contributing factors.

A documented timeline supports future investigations, operational reviews, and post-incident analysis.

---

## Applying this Investigation Using a Network Analytics Platform

Reconstructing historical network activity often requires collecting information from multiple monitoring systems, archived logs, flow records, and operational data sources. Correlating these datasets manually can be difficult, particularly when investigating incidents that occurred days or weeks earlier.

Network analytics platforms such as **Trisul** simplify historical investigations by preserving flow records and allowing engineers to revisit network activity from any point within the available retention period.

For this investigation, [**Trisul Retro**](/docs/ug/cg/retro) enables engineers to:

- Navigate to any historical time period.
- Reconstruct network activity as it occurred.
- Review historical bandwidth utilization.
- Identify the top hosts and applications during the incident.
- Compare network behavior across different time periods.
- Drill down into historical flow records for detailed analysis.

Instead of relying on fragmented logs or incomplete historical data, engineers can investigate past events using the same level of detail available during live monitoring.

---

## Investigation Findings

The following observations may help guide the next stage of the investigation.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| Traffic increased significantly during the investigation window | Review the systems and applications responsible for the increase. |
| A small number of hosts generated most of the traffic | Continue investigating those hosts individually. |
| New communication patterns appeared only during the incident | Validate whether the activity was expected. |
| Application usage changed significantly | Determine whether deployments or operational changes occurred. |
| Traffic returned to normal after the incident | The event may have been temporary or operational in nature. |
| Historical behavior closely matches previous periods | The observed activity may represent expected network behavior rather than an incident. |

---

## Best Practices

- Clearly define the investigation period before reviewing historical data.
- Compare the incident against normal operating periods whenever possible.
- Analyze trends rather than isolated metrics.
- Correlate observations across hosts, applications, and bandwidth usage.
- Document findings chronologically to support post-incident reviews.

---

## Related Investigations

- If the investigation identifies a host that requires deeper analysis, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md).
- If historical analysis reveals sustained interface congestion, continue with [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md).
- If recurring traffic spikes are identified, continue with [**Investigate Threshold Crossing Events**](./inv4-tca.md).