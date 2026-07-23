# Investigate Network Behavior Anomalies

## Investigation Overview

Traditional threshold-based monitoring is effective at detecting when a metric exceeds a predefined limit. However, not all abnormal network behavior results in a threshold crossing.

For example, traffic may remain well below configured utilization limits while exhibiting patterns that differ significantly from normal operational behavior. Such deviations may indicate application changes, infrastructure issues, misconfigurations, or emerging security concerns.

Behavior-based monitoring establishes a baseline of normal network activity and identifies deviations that warrant investigation.

This investigation provides a structured approach to validating whether unusual network behavior represents a genuine operational anomaly or an expected variation in network activity.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate an anomaly detected through behavioral monitoring.
- Determine whether traffic deviates from normal network patterns.
- Validate unexpected changes in bandwidth utilization or traffic behavior.
- Investigate unexplained increases or decreases in network activity.
- Distinguish genuine anomalies from normal operational fluctuations.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the metric that deviated from its normal behavior.
- Understand how current activity differs from historical patterns.
- Determine which systems or applications contributed to the deviation.
- Assess whether the anomaly is expected or requires further investigation.
- Decide on the appropriate operational response.

---

## Investigation Steps

### Step 1: Identify the Anomalous Behavior

Begin by determining which network metric has deviated from its expected behavior.

Consider:

- Which metric exhibits unusual activity.
- When the deviation began.
- Whether the anomaly is ongoing or has already subsided.
- Whether one or multiple metrics are affected.

The objective is to clearly identify what has changed before investigating why it changed.

---

### Step 2: Compare Against Normal Network Behavior

Establish how the current activity differs from historical operating patterns.

Review:

- Typical traffic levels.
- Expected daily or weekly usage patterns.
- Normal application distribution.
- Historical communication behavior.

Understanding what is considered "normal" is essential before classifying activity as anomalous.

---

### Step 3: Identify the Source of the Deviation

Determine which systems, interfaces, or applications contributed to the observed anomaly.

Review:

- High-volume hosts.
- Changes in application usage.
- New communication patterns.
- Significant shifts in traffic distribution.

The objective is to identify what changed within the network rather than focusing solely on the metric that triggered the investigation.

---

### Step 4: Evaluate Operational Context

Not every anomaly represents a network issue.

Determine whether the observed behavior can be explained by planned operational activities.

Examples include:

- Application deployments.
- Infrastructure upgrades.
- Maintenance windows.
- Seasonal business activity.
- Scheduled data transfers.

Understanding operational context helps eliminate expected changes before investigating further.

---

### Step 5: Assess the Impact

Determine whether the anomaly has affected network operations or business services.

Consider:

- Application performance.
- User experience.
- Network stability.
- Service availability.
- Impacted business systems.

An anomaly that produces no operational impact may simply require observation rather than immediate intervention.

---

### Step 6: Determine the Appropriate Response

Based on the investigation, determine the next course of action.

Possible outcomes include:

- The behavior represents a normal operational variation.
- Continue monitoring until the behavior returns to baseline.
- Investigate the systems responsible for the deviation.
- Perform historical analysis to determine whether similar anomalies occurred previously.
- Escalate the investigation if the behavior cannot be explained.

---

## Applying this Investigation Using a Network Analytics Platform

Identifying anomalies manually requires engineers to understand historical network behavior and continuously compare current activity against expected operational patterns. As enterprise networks evolve, maintaining this context manually becomes increasingly difficult.

Network analytics platforms such as **Trisul** simplify anomaly investigations by automatically learning normal network behavior and highlighting deviations that fall outside the expected operating range.

For this investigation, [**Trisul Threshold Band Alerts**](/docs/ug/alerts/tband) enables engineers to:

- Learn normal network behavior using historical traffic patterns.
- Detect deviations from the established baseline.
- Identify the metric responsible for the anomaly.
- Review when the deviation occurred.
- Correlate the anomaly with the hosts, interfaces, or applications contributing to the change.
- Continue the investigation using detailed traffic analysis when required.

---

## Investigation Findings

The following observations may help determine the appropriate response.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| Traffic deviates from the learned baseline but matches a planned maintenance activity | Expected operational change. |
| New application traffic appears outside normal operating hours | Validate whether the activity is authorized. |
| A specific host contributes disproportionately to the anomaly | Continue investigating that host. |
| Multiple anomalies occur simultaneously across different metrics | Investigate for broader infrastructure or application issues. |
| The anomaly persists beyond normal operating patterns | Further investigation is recommended. |
| Similar deviations have occurred previously under the same operational conditions | The behavior may represent an established usage pattern rather than an incident. |

---

## Best Practices

- Treat anomaly detection as the beginning of an investigation, not evidence of a problem.
- Always validate anomalous behavior against known operational activities.
- Consider both historical behavior and business context before escalating.
- Investigate the underlying traffic contributing to the anomaly rather than focusing solely on the alert.
- Periodically review learned baselines as network usage evolves.

---

# Related Investigations

- If the anomaly is associated with a specific host, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md).
- If the anomaly corresponds to increased interface utilization, continue with [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md).
- If understanding the origin of the anomaly requires reviewing earlier network activity, continue with [**Investigate Historical Network Activity**](./inv3-retro.md).
- If the anomaly also resulted in predefined operational limits being exceeded, continue with [**Investigate Threshold Crossing Events**](./inv4-tca.md).