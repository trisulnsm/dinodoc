# Investigate Network Behavior Anomalies

## Investigation Overview

Network behavior rarely remains identical from one day to the next, but significant deviations from established traffic patterns often indicate that something within the network has changed. An unexpected increase in application traffic, a sudden shift in communication patterns, unusual activity during normally quiet periods, or a sustained decrease in expected traffic may all point to application changes, infrastructure issues, misconfigurations, or emerging security events.

Unlike threshold-based investigations, behavioral investigations focus on activity that appears unusual compared to the network's normal operating patterns, even when predefined utilization limits have not been exceeded. The objective is to determine what changed, identify the systems responsible for the deviation, and establish whether the observed behavior represents an expected operational variation or requires further investigation.

Using Trisul, engineers can investigate behavioral anomalies from the detected deviation and progressively narrow the scope until the underlying cause becomes clear.

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

# Investigation Workflow

## Step 1: Review the Behavioral Anomaly

Every behavioral investigation begins by understanding what has deviated from normal network activity. Before investigating hosts or applications, establish which metric exhibited unusual behavior, when the deviation began, and whether the anomaly is still occurring.

Open [**Threshold Band Alerts**](/docs/ug/alerts/tband) to review the detected anomaly.

Use this dashboard to answer questions such as:

- Which metric deviated from its learned baseline?
- Which interface, host, or monitored object is affected?
- When did the deviation begin?
- Is the anomaly still active or has activity returned to normal?

### Evidence to Collect

- Metric exhibiting anomalous behavior.
- Affected network object.
- Time the deviation was detected.
- Current status of the anomaly.
- Severity of the deviation.

### Continue the Investigation

Once the anomaly has been identified, compare the observed activity against the learned baseline to understand how network behavior has changed.

---

## Step 2: Compare Against the Learned Baseline

An anomaly only has meaning when compared to what is considered normal. The next objective is to understand how the current activity differs from historical network behavior and whether the deviation represents a significant operational change.

Review the learned baseline and historical trends for the affected metric.

Use this view to answer questions such as:

- How does current activity differ from normal behavior?
- Is the deviation an increase, decrease, or change in traffic distribution?
- Does the anomaly occur during an unusual time of day?
- Has similar behavior occurred previously?

### Evidence to Collect

- Historical baseline for the affected metric.
- Magnitude of the deviation.
- Duration of the anomalous behavior.
- Previous occurrences of similar deviations.
- Changes from expected daily or weekly patterns.

### Continue the Investigation

After understanding how the behavior differs from normal operation, identify the systems responsible for the observed deviation.

## Step 3: Identify the Source of the Deviation

Once the deviation from normal behavior has been established, determine which systems, interfaces, or applications contributed to the observed anomaly. The objective at this stage is to identify what changed within the network rather than focusing solely on the metric that triggered the investigation.

Depending on the object associated with the anomaly, continue the investigation using [**Routers & Interfaces**](/docs/ug/netflow/routers_and_interfaces), [**Hosts**](/docs/ug/netflow/drilldown#hosts), or [**Explore Flows**](/docs/ug/tools/explore_flows).

Use these investigation views to answer questions such as:

- Which hosts contributed to the observed deviation?
- Which conversations account for the behavioral change?
- Which applications generated the unusual activity?
- Did communication patterns change compared to normal operation?

### Evidence to Collect

- Hosts contributing most to the anomaly.
- High-volume conversations.
- Applications responsible for the behavioral change.
- Significant changes in communication patterns.
- Network objects contributing to the deviation.

### Continue the Investigation

Once the systems responsible have been identified, investigate how their application usage and communication behavior differs from normal operation.

---

## Step 4: Analyze Application and Communication Behavior

Identifying the systems responsible explains where the anomaly originated, but understanding what those systems are doing provides the operational context needed to determine whether the behavior is expected.

Continue investigating the affected hosts using [**Applications**](/docs/ug/netflow/drilldown#apps) and [**Explore Flows**](/docs/ug/tools/explore_flows).

Use these investigation views to answer questions such as:

- Which applications contributed to the anomaly?
- Do the observed applications match the role of the host?
- Have new communication partners appeared?
- Are communication patterns consistent with normal network behavior?
- Is the traffic internal, external, or both?

### Evidence to Collect

- Expected business applications.
- Unexpected or unauthorized applications.
- New communication partners.
- Changes in client-server relationships.
- Communication behavior inconsistent with the system's intended role.

### Continue the Investigation

After understanding the traffic responsible for the anomaly, determine whether the observed behavior can be explained by normal operational activities.

---

## Step 5: Validate the Operational Context

Not every behavioral anomaly indicates a network problem. Changes in network activity are often the result of legitimate operational events such as software deployments, maintenance windows, infrastructure upgrades, backups, or changing business demand.

Review the investigation findings alongside known operational activities to determine whether the observed behavior represents an expected variation or an unexplained deviation.

Use the investigation findings to answer questions such as:

- Was maintenance being performed?
- Were software updates or deployments in progress?
- Were backup or replication jobs running?
- Does the observed behavior align with known business activity?
- Can the anomaly be explained by planned operational changes?

### Evidence to Collect

- Scheduled maintenance activities.
- Software deployment events.
- Backup or replication traffic.
- Business activities explaining the deviation.
- Evidence supporting expected or unexpected behavior.

### Continue the Investigation

Once the operational context has been established, determine the most appropriate response based on the evidence collected.

---

## Step 6: Determine the Appropriate Response

By this stage, the investigation should have established how current behavior differs from the learned baseline, identified the systems responsible for the deviation, and determined whether the observed activity is expected.

Review the investigation findings as a whole to determine the most appropriate operational response.

Use the investigation findings to answer questions such as:

- Can the observed behavior be fully explained?
- Does the investigation need to continue?
- Should the affected systems be monitored more closely?
- Is historical analysis required to identify recurring patterns?
- Should the anomaly be escalated for further investigation?

### Evidence to Collect

- Confirmed cause of the behavioral deviation.
- Systems and applications responsible.
- Operational justification for the observed behavior.
- Recommended follow-up actions.
- Escalation or monitoring requirements.

### Investigation Outcome

At this stage, you should understand how the observed behavior differs from the learned baseline, identify the systems responsible for the deviation, determine whether the activity is expected, and decide whether additional investigation or corrective action is required.

---

# Investigation Completion

This investigation can generally be considered complete when:

- The anomalous metric has been identified.
- The observed behavior has been compared against the learned baseline.
- The systems and applications responsible have been identified.
- Application usage and communication behavior have been validated.
- The operational context has been established.
- Appropriate operational or engineering actions have been determined.

---

# Best Practices

- Treat behavioral anomalies as the beginning of an investigation rather than evidence of a problem.
- Compare anomalous behavior against the learned baseline before drawing conclusions.
- Progressively narrow the investigation from the detected anomaly to the responsible hosts, applications, and communication patterns.
- Always validate operational context before escalating an anomaly.
- Review learned baselines periodically as network usage evolves.
- Document the evidence collected throughout the investigation.

---

# Related Investigations

- [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- [**Investigate Historical Network Activity**](./inv3-retro.md)
- [**Investigate Threshold Crossing Events**](./inv4-tca.md)