# Investigate Threshold Crossing Events

## Investigation Overview

Not all network issues are discovered through user complaints or routine monitoring. In many cases, operational metrics such as bandwidth utilization, flow count, or connection rates exceed acceptable limits before users begin reporting performance issues.

Threshold-based monitoring enables network teams to detect these events early by generating alerts whenever predefined operational limits are crossed.

This investigation provides a structured approach to determining why a threshold was exceeded, identifying the traffic responsible, and deciding whether corrective action is required.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate an alert indicating excessive bandwidth utilization.
- Determine why a monitored metric exceeded its configured threshold.
- Identify the hosts or applications responsible for the increase.
- Validate whether the threshold crossing represents expected operational activity.
- Prioritize operational response before users are affected.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Determine which metric exceeded its threshold.
- Identify when the threshold crossing occurred.
- Understand the magnitude of the increase.
- Identify the systems and applications responsible.
- Determine whether the event requires further investigation or operational action.

---

## Investigation Steps

### Step 1: Identify the Threshold Crossing Event

Begin by identifying the metric that exceeded its configured threshold.

Determine:

- Which metric generated the alert.
- Which network object was affected (interface, host, application, etc.).
- When the threshold crossing occurred.
- Whether the event is still active or has already subsided.

Understanding what triggered the alert establishes the scope of the investigation.

---

### Step 2: Measure the Magnitude of the Increase

Determine how significantly the observed metric exceeded the configured threshold.

Consider:

- The configured threshold value.
- The observed value.
- Duration of the threshold crossing.
- Whether the increase occurred gradually or suddenly.

This helps distinguish short-lived operational spikes from sustained abnormal activity.

---

### Step 3: Identify the Source of the Increase

Determine which systems or applications contributed to the threshold crossing.

Review:

- Top bandwidth consumers.
- High-volume conversations.
- Applications generating the traffic.
- Changes in communication patterns.

The objective is to identify the source responsible for the increase rather than focusing solely on the alert itself.

---

### Step 4: Determine Whether the Activity Is Expected

A threshold crossing does not always indicate a network problem.

Evaluate whether the observed activity can be explained by normal business operations.

Consider:

- Scheduled backups or replication jobs.
- Software updates.
- Maintenance activities.
- Planned data migrations.
- Increased business demand.

Operational context is essential before treating the event as an incident.

---

### Step 5: Assess the Operational Impact

Determine whether the threshold crossing affected network performance or business services.

Consider:

- User-reported performance issues.
- Interface congestion.
- Increased latency.
- Packet loss.
- Service degradation.

Not every threshold crossing requires immediate intervention. The operational impact should guide the response.

---

### Step 6: Determine the Appropriate Response

Based on the findings, determine the next course of action.

Possible outcomes include:

- No action required because the activity is expected.
- Continue investigating the systems responsible for the increase.
- Adjust operational thresholds if they no longer reflect normal network behavior.
- Initiate capacity planning if thresholds are crossed regularly.
- Escalate the investigation if the activity cannot be explained.

---

## Applying this Investigation Using a Network Analytics Platform

Detecting that a threshold has been exceeded is only the beginning of the investigation. Engineers must then determine what caused the increase and whether it represents expected operational activity or an issue requiring attention.

Network analytics platforms such as **Trisul** simplify this process by generating threshold crossing alerts and providing immediate access to the traffic responsible for the event, reducing the time required to move from alert to root cause.

For this investigation, [**Trisul Threshold Crossing Alerts**](/docs/ug/alerts/tca) enables engineers to:

- Configure threshold-based monitoring for network metrics.
- Generate alerts when configured limits are exceeded.
- Review the affected metric and time of occurrence.
- Drill down into the traffic responsible for the threshold crossing.
- Continue the investigation using interface, host, or flow-level analysis.


---

## Investigation Findings

The following observations may help determine the appropriate response.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| Threshold exceeded for only a few minutes | Temporary operational spike; continue monitoring. |
| Threshold exceeded for an extended period | Sustained utilization requiring investigation or capacity planning. |
| Traffic increase caused by scheduled business activity | Expected operational behavior. |
| A small number of hosts generated most of the increase | Continue investigating those hosts. |
| Unexpected applications caused the threshold crossing | Validate whether the activity is authorized. |
| Threshold crossings occur repeatedly | Review threshold values and evaluate long-term network capacity. |

---

## Best Practices

- Configure thresholds that reflect normal operational limits for your environment.
- Investigate sustained threshold crossings before isolated spikes.
- Evaluate operational context before escalating an alert.
- Use threshold alerts as the starting point for an investigation, not the conclusion.
- Periodically review configured thresholds as network usage patterns evolve.

---

## Related Investigations

- If the threshold crossing is associated with a congested interface, continue with [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md).
- If a specific host is responsible for the increase, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md).
- If similar threshold crossings have occurred previously, continue with [**Investigate Historical Network Activity**](./inv3-retro.md).