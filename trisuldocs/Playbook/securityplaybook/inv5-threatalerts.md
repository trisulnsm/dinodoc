# Investigate Network Traffic Anomalies

## Investigation Overview

Unexpected changes in network behavior often provide the earliest indication of operational issues or security incidents. Sudden traffic spikes, excessive connection rates, protocol misuse, scanning activity, or abnormal communication patterns may indicate reconnaissance, denial-of-service attacks, malware activity, misconfigurations, or legitimate operational events.

Not every anomaly represents malicious activity. Scheduled maintenance, software updates, backup operations, or legitimate increases in user activity can produce similar patterns. The objective of this investigation is to determine what changed, identify the systems responsible, and establish whether the observed behavior requires operational attention or incident response.

Using Trisul Network Security Monitoring, analysts can investigate behavioral anomalies through Behavioral Analytics, DDoS Metrics, flow analytics, packet evidence, historical analysis, and AI-assisted investigation within a single investigative workflow.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate sudden increases in network traffic.
- Analyze behavioral alerts indicating abnormal network activity.
- Validate excessive connection rates or protocol anomalies.
- Investigate scanning or reconnaissance activity.
- Determine whether unusual network behavior represents a security incident.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the systems responsible for the abnormal activity.
- Determine the protocols and services involved.
- Assess whether the behavior is expected or anomalous.
- Identify the operational or security impact.
- Determine whether the anomaly requires incident response or operational remediation.

---

# Investigation Workflow

## Step 1: Review Behavioral Anomalies

Every anomaly investigation begins by understanding what changed. Before investigating individual hosts, identify the behavioral deviation that triggered the investigation.

Open **Behavioral Analytics**.

Use this investigation to answer questions such as:

- Which metric deviated from its normal behavior?
- When did the anomaly begin?
- Is the anomaly still active?
- Which behavioral dashboards show the largest deviation?
- Does the anomaly correspond to an alert?

### Evidence to Preserve

- Triggering metric.
- Alert information.
- Timeline of the anomaly.
- Behavioral observations.
- Initial findings.

### Continue the Investigation

Once the behavioral anomaly has been identified, determine whether it indicates abnormal connection or attack patterns.

---

## Step 2: Review DDoS Metrics

Behavioral anomalies often originate from abnormal connection behavior rather than bandwidth alone. Reviewing DDoS metrics helps determine whether the anomaly represents flooding, scanning, protocol abuse, or excessive connection activity.

Open **DDoS Metrics**.

Use this investigation to answer questions such as:

- Are TCP SYN floods observed?
- Are UDP or ICMP floods present?
- Is there evidence of connection flooding?
- Are protocol-specific metrics abnormal?
- Does the behavior resemble denial-of-service or reconnaissance activity?

### Evidence to Preserve

- DDoS metrics.
- Protocol statistics.
- Connection rates.
- Packet rates.
- Traffic characteristics.

### Continue the Investigation

Once the nature of the anomaly has been understood, identify the systems responsible for generating the traffic.

---

## Step 3: Identify the Affected Systems

Determine which hosts, interfaces, or network segments are responsible for the abnormal behavior.

Open **Flow Analysis**.

Use this investigation to answer questions such as:

- Which hosts generated the abnormal traffic?
- Which systems received the traffic?
- Which interfaces are affected?
- Is the activity isolated or widespread?
- Are critical systems involved?

### Evidence to Preserve

- Source hosts.
- Destination hosts.
- Interfaces.
- Network segments.
- Communication timeline.

### Continue the Investigation

After identifying the affected systems, analyze the traffic responsible for the anomaly.

---

## Step 4: Analyze Network Flows

Flow analysis provides the context needed to understand how the abnormal traffic is being generated and whether the observed behavior aligns with legitimate network activity.

Open **Flow Analysis** for the affected hosts.

Use this investigation to answer questions such as:

- Which applications generated the traffic?
- Which protocols are responsible?
- How much traffic was exchanged?
- How long did the sessions last?
- Does the communication resemble scanning, flooding, or other abnormal behavior?

### Evidence to Preserve

- Flow records.
- Applications involved.
- Protocol distribution.
- Traffic volume.
- Session characteristics.

### Continue the Investigation

Where packet capture is available, validate the observed behavior using packet-level evidence.

---

## Step 5: Validate with Packet Evidence

Packet analysis provides detailed evidence that explains the behavior observed through dashboards and flow analytics.

Open **Packet Analysis**.

Use this investigation to answer questions such as:

- Does packet analysis explain the behavioral anomaly?
- Which protocols are responsible?
- Is malformed or suspicious traffic present?
- Are scanning or exploitation attempts visible?
- Does the packet evidence support the flow analysis?

### Evidence to Preserve

- Packet captures.
- Protocol behavior.
- Packet timestamps.
- Indicators of compromise.
- Supporting evidence.

### Continue the Investigation

Once the anomaly has been validated, compare the activity against historical network behavior.

---

## Step 6: Review Historical Activity

Historical comparison helps determine whether the observed anomaly represents a new event or an established operational pattern.

Open **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Has similar behavior occurred previously?
- When was it first observed?
- Is the current activity significantly different from historical traffic?
- Does the behavior correspond to scheduled operational events?
- Have additional hosts exhibited similar anomalies?

### Evidence to Preserve

- Historical traffic patterns.
- Previous occurrences.
- Timeline.
- Additional affected systems.
- Behavioral trends.

### Continue the Investigation

Once the historical context has been established, summarize the investigation findings and determine the appropriate response.

---

## Step 7: Summarize the Investigation

By this stage, the investigation should have identified the behavioral anomaly, determined the affected systems, analyzed the traffic characteristics, validated packet evidence, and compared the activity against historical behavior.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- What changed in the network behavior?
- Which metrics deviated most significantly?
- Which hosts contributed to the anomaly?
- Does the evidence indicate malicious activity?
- Should the incident be escalated or investigated further?

### Evidence to Preserve

- Investigation summary.
- Affected hosts.
- Flow and packet evidence.
- Historical comparison.
- Recommended response actions.

### Investigation Outcome

At this stage, you should understand the cause of the behavioral anomaly, identify the affected systems, determine whether the activity represents an operational event or a potential security incident, and establish the appropriate response.

---

# Investigation Completion

This investigation can generally be considered complete when:

- The behavioral anomaly has been identified.
- The affected systems have been determined.
- DDoS and behavioral metrics have been analyzed.
- Network flows have been reviewed.
- Packet evidence has been validated where available.
- Historical activity has been compared.
- The operational or security impact has been assessed.
- Appropriate response actions have been identified.

---

# Best Practices

- Compare behavioral anomalies against historical baselines before drawing conclusions.
- Investigate connection behavior alongside bandwidth utilization.
- Correlate behavioral analytics with flow records and packet evidence.
- Validate operational changes with infrastructure teams where appropriate.
- Preserve investigation evidence before mitigation begins.
- Document investigation findings to support future incident response activities.

---

# Related Investigations

- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)