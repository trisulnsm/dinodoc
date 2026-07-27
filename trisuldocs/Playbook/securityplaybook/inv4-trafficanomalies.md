# Investigate Network Traffic Anomalies

## Investigation Overview

Unexpected changes in network behaviour often provide the earliest indication of operational issues or security incidents. Sudden traffic spikes, excessive connection rates, protocol misuse, scanning activity, or abnormal communication patterns may all indicate that network behaviour has deviated from its normal baseline.

Not every anomaly represents malicious activity. Scheduled maintenance, software updates, backup operations, or legitimate increases in user activity can produce similar patterns. The objective of this investigation is to determine what changed, identify the systems responsible, and establish whether the observed behaviour requires operational attention or incident response.

Using Trisul Network Security Monitoring, analysts can investigate behavioural anomalies through real-time dashboards, DDoS metrics, flow analytics, packet evidence, historical comparisons, and AI-assisted investigation.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate unusual traffic spikes.
- Analyze behavioral alerts.
- Validate excessive connection rates or protocol anomalies.
- Investigate scanning or reconnaissance activity.
- Determine whether abnormal network behavior represents a security incident.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the systems responsible for the abnormal activity.
- Determine the protocols and services involved.
- Assess whether the behavior is expected or anomalous.
- Identify the operational or security impact.
- Determine whether the anomaly requires incident response or operational remediation.

---

## Investigation Workflow

### Step 1: Review Behavioral Anomalies

Every anomaly investigation begins by understanding what changed. Before investigating individual hosts, identify the behavioural deviation that triggered the investigation.

Open **Behavioral Analytics Dashboard**.

Use this investigation to answer questions such as:

- Which metric deviated from normal behaviour?
- When did the anomaly begin?
- Is the anomaly still active?
- Which dashboards show the largest deviation?
- Does the behaviour correspond to a generated alert?

#### Evidence to Preserve

- Triggering metric.
- Alert information.
- Timeline.
- Affected dashboards.
- Initial observations.

#### Continue the Investigation

Once the anomaly has been identified, determine which systems are responsible.

---

### Step 2: Identify the Affected Systems

Determine which hosts, interfaces, or network segments are responsible for the observed behaviour.

Open **Flow Analysis**.

Use this investigation to answer questions such as:

- Which hosts generated the abnormal traffic?
- Which systems received the traffic?
- Which interfaces are affected?
- Is the activity isolated or widespread?
- Are critical systems involved?

#### Evidence to Preserve

- Source hosts.
- Destination hosts.
- Interfaces.
- Network segments.
- Communication timeline.

#### Continue the Investigation

After identifying the affected systems, determine the characteristics of the abnormal traffic.

---

### Step 3: Analyze Traffic Characteristics

Understanding how the traffic behaves helps determine whether the anomaly represents legitimate operational activity or suspicious behaviour.

Open **DDoS Metrics** and **Flow Analysis**.

Use this investigation to answer questions such as:

- Which protocols are involved?
- Is the anomaly driven by bandwidth or connection rates?
- Are TCP SYN, UDP, or ICMP floods observed?
- Which applications generated the traffic?
- Does the behaviour resemble scanning or denial-of-service activity?

#### Evidence to Preserve

- Traffic volume.
- Connection rates.
- Protocol distribution.
- Application usage.
- DDoS metrics.

#### Continue the Investigation

Compare the observed behaviour against historical network activity.

---

### Step 4: Review Historical Activity

Historical comparison helps determine whether the anomaly represents a new event or an expected operational pattern.

Open **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Has similar behaviour occurred previously?
- When was it first observed?
- Is the current traffic volume unusual?
- Does the activity correspond to scheduled operational events?
- Have similar anomalies occurred on other systems?

#### Evidence to Preserve

- Historical traffic.
- Previous occurrences.
- Timeline.
- Additional affected systems.
- Behavioural trends.

#### Continue the Investigation

Validate the findings using packet-level evidence where available.

---

### Step 5: Validate with Packet Evidence

Packet analysis provides detailed evidence to explain the network behaviour identified through dashboards and flow analysis.

Open **Packet Analysis**.

Use this investigation to answer questions such as:

- Does packet analysis explain the anomaly?
- Which protocols are responsible?
- Is malformed or suspicious traffic present?
- Are scanning or exploitation attempts visible?
- Does the packet evidence support the behavioural analysis?

#### Evidence to Preserve

- Packet captures.
- Protocol behaviour.
- Packet timestamps.
- Indicators of compromise.
- Supporting evidence.

#### Continue the Investigation

Once the evidence has been collected, assess the operational or security impact.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have identified the behavioural anomaly, determined the affected systems, analysed the traffic characteristics, validated the packet evidence, and compared the activity against historical behaviour.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- What caused the behavioural anomaly?
- Which systems are affected?
- Does the evidence indicate malicious activity?
- Is immediate remediation required?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Hosts involved.
- Supporting evidence.
- Historical comparison.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand the cause of the behavioural anomaly, identify the affected systems, determine whether the activity represents an operational event or security incident, and establish the appropriate response.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The behavioural anomaly has been identified.
- The affected systems have been determined.
- Traffic characteristics have been analysed.
- Historical activity has been reviewed.
- Packet evidence has been validated where available.
- The operational or security impact has been assessed.
- Appropriate response actions have been identified.

---

## Best Practices

- Compare behavioural anomalies against historical baselines before drawing conclusions.
- Investigate connection behaviour alongside bandwidth utilisation.
- Correlate behavioural analytics with flow records and packet evidence.
- Validate operational changes with infrastructure teams where appropriate.
- Preserve investigation evidence before mitigation begins.
- Document investigation findings to support future incident response.

---

## Related Investigations

- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)