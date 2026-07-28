# Investigate Threshold Crossing Events

## Investigation Overview

Sudden increases in bandwidth utilisation, connection rates, flow counts, or other network metrics are often the earliest indicators that something within the network has changed. These changes may be caused by legitimate operational activities such as backups, software deployments, or increased business demand, but they can also indicate application issues, misconfigurations, resource exhaustion, or emerging security events.

The objective of this investigation is not simply to understand why a threshold was exceeded, but to determine what changed in the network. Starting from the triggered alert, the investigation progressively narrows the scope to identify the systems responsible, understand the traffic that caused the increase, evaluate its operational impact, and determine whether corrective action is required.

Using Trisul, this entire workflow can be completed from the triggered alert without switching between multiple monitoring tools.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate an alert indicating excessive bandwidth utilisation.
- Determine why a monitored metric exceeded its configured threshold.
- Identify the hosts or applications responsible for the increase.
- Validate whether the threshold crossing represents expected operational activity.
- Prioritise operational response before users are affected.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Determine which metric exceeded its threshold.
- Understand the severity of the threshold crossing.
- Identify the systems and applications responsible.
- Determine whether the observed activity is expected.
- Assess the operational impact.
- Decide whether further investigation or corrective action is required.

---

## Investigation Workflow

### Step 1: Review the Threshold Crossing Alert

Every threshold investigation begins by understanding exactly what triggered the alert. Before investigating hosts or applications, establish which metric exceeded its configured threshold, when the event occurred, and which part of the network was affected.

Open [**Threshold Crossing Alerts**](/docs/ug/alerts/tca) and select the triggered alert.

Use the alert details to answer questions such as:

- Which metric exceeded its configured threshold?
- Which interface, host, application, or monitored object generated the alert?
- When did the threshold crossing occur?
- Is the alert still active or has the metric already returned to normal?

#### Evidence to Collect

- Metric that triggered the alert.
- Affected network object.
- Configured threshold value.
- Observed value.
- Time the threshold crossing occurred.

#### Continue the Investigation

Once the alert has been understood, determine how significant the increase was before identifying the traffic responsible.

---

### Step 2: Measure the Magnitude of the Increase

Knowing that a threshold has been crossed is only part of the investigation. The next objective is understanding how far the observed metric exceeded its configured threshold and whether it represents a brief operational spike or sustained abnormal behaviour.

Review the [**historical trend**](/docs/ug/alerts/tca#traffic-chart) for the affected metric.

Use the historical data to answer questions such as:

- How much did the observed value exceed the configured threshold?
- Was the increase gradual or sudden?
- How long did the threshold remain exceeded?
- Has similar behaviour occurred previously?

#### Evidence to Collect

- Peak observed value.
- Duration of the threshold crossing.
- Historical trend.
- Frequency of similar events.
- Whether the metric returned to normal.

#### Continue the Investigation

Once the severity of the threshold crossing has been established, identify the traffic responsible for generating the increase.

---

### Step 3: Identify the Source of the Increase

A threshold crossing is only the symptom of changing network behaviour. The next objective is identifying which systems, conversations, or applications generated the activity responsible for the alert.

Depending on the object that generated the threshold crossing, continue the investigation using [**Routers & Interfaces**](/docs/ug/netflow/routers_and_interfaces), [**Hosts**](/docs/ug/netflow/drilldown#hosts), or [**Explore Flows**](/docs/ug/tools/explore_flows).

Use these investigation views to answer questions such as:

- Which hosts generated the increase?
- Which conversations contributed most to the traffic?
- Which applications were responsible?
- Did communication patterns change during the alert?

#### Evidence to Collect

- Top bandwidth consumers.
- High-volume conversations.
- Applications generating the traffic.
- Significant changes in communication patterns.
- Network objects contributing most to the threshold crossing.

#### Continue the Investigation

Once the source of the increase has been identified, determine whether the observed activity represents expected operational behaviour.

---

### Step 4: Validate the Operational Context

A threshold crossing does not always indicate a network problem. Many alerts are triggered by legitimate operational activities such as scheduled backups, software deployments, maintenance windows, or increased business demand.

Continue reviewing the affected hosts, interfaces, and applications to determine whether the observed activity can be explained by normal network operations.

Use the investigation findings to answer questions such as:

- Was a backup or replication job running?
- Were software updates or deployments in progress?
- Was maintenance scheduled during the same period?
- Does the observed activity align with normal business operations?

#### Evidence to Collect

- Scheduled maintenance activities.
- Backup or replication traffic.
- Software deployment activity.
- Business events explaining the increase.
- Evidence supporting expected or unexpected behaviour.

#### Continue the Investigation

If the activity cannot be fully explained, determine whether the threshold crossing had a measurable impact on network performance.

---

### Step 5: Assess the Operational Impact

After establishing the operational context, determine whether the threshold crossing affected network performance or business services. Not every threshold crossing requires immediate intervention, and understanding the operational impact helps prioritise the appropriate response.

Continue investigating the affected network objects to determine whether the increase resulted in congestion, degraded application performance, or service disruption.

Use the investigation to answer questions such as:

- Did users report performance issues?
- Was interface congestion observed?
- Did latency or packet loss increase?
- Were business applications affected?
- Did services recover after the threshold crossing ended?

#### Evidence to Collect

- Interface congestion.
- Performance degradation.
- User-reported issues.
- Service interruptions.
- Sustained resource utilisation.

#### Continue the Investigation

Once the operational impact has been assessed, determine the most appropriate response based on the evidence collected.

---

### Step 6: Determine the Appropriate Response

By this stage, the investigation should have established what triggered the alert, how significant the increase was, which systems generated the traffic, and whether the activity was expected.

Review the investigation findings as a whole to determine the most appropriate operational response.

Use the investigation findings to answer questions such as:

- Can the threshold crossing be fully explained?
- Does the investigation need to continue?
- Should the configured threshold be adjusted?
- Is capacity planning required?
- Should the event be escalated for further investigation?

#### Evidence to Collect

- Confirmed cause of the threshold crossing.
- Systems responsible for the increase.
- Operational justification for the observed activity.
- Recommended follow-up actions.
- Capacity planning or escalation requirements.

#### Investigation Outcome

At this stage, you should understand why the threshold was crossed, identify the systems responsible, determine whether the activity was expected, assess its operational impact, and decide whether additional investigation or corrective action is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The triggered threshold has been identified.
- The severity of the threshold crossing has been evaluated.
- The systems and applications responsible have been identified.
- The operational context has been validated.
- The impact on network performance has been assessed.
- Appropriate operational or engineering actions have been determined.

---

## Best Practices

- Treat threshold alerts as the starting point of an investigation rather than the conclusion.
- Investigate sustained threshold crossings before isolated spikes.
- Always validate operational context before escalating an alert.
- Correlate threshold crossings with the hosts, applications, and conversations responsible for the increase.
- Review configured thresholds periodically as network usage evolves.
- Use recurring threshold crossings as an input for long-term capacity planning.

---

## Related Investigations

- [**Investigate High Traffic on a Network Interface**](/playbook/Network%20Investigation%20Playbook/inv2-routersintfs)
- [**Investigate the Network Activity of an IP Address**](/playbook/Network%20Investigation%20Playbook/inv1-exploreflows)
- [**Investigate Historical Network Activity**](/playbook/Network%20Investigation%20Playbook/inv3-retro)