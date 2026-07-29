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

# Investigation Workflow

## Step 1: Identify the Behavioral Anomaly

Network anomaly investigations begin by identifying the change in network behavior that triggered the investigation. Rather than immediately focusing on individual hosts, the objective is to understand what changed, when it occurred, and whether the observed behavior requires further investigation.

Open [**Behavioral Analytics**](/docs/ug/nbad/trisulnbad), [**Threshold Band Alerts**](/docs/ug/alerts/tband), [**DDoS Metrics**](/docs/ug/alerts/ddos), or the dashboard that generated the alert.

Review the available dashboards and alerts to determine:

- Which metric deviated from its normal behavior.
- When the anomaly began.
- Whether the anomaly is still active.
- Which protocols, applications, or interfaces are affected.
- Whether the anomaly generated a behavioral or threshold alert.

The objective at this stage is to understand the nature of the anomaly before investigating the systems responsible.

### Evidence to Preserve

- Triggering metric.
- Alert information.
- Timeline of the anomaly.
- Behavioral observations.
- Initial findings.

### Continue the Investigation

Once the anomaly has been identified, determine what type of abnormal network behavior is being observed.

---

## Step 2: Characterize the Network Behavior

Understanding the characteristics of the anomaly helps determine whether it represents expected operational activity or behavior requiring further investigation.

Use [**Behavioral Analytics**](/docs/ug/nbad/trisulnbad), [**DDoS Metrics**](/docs/ug/alerts/ddos), [**TCP Analyzer**](/docs/ug/nbad/tcpanalyzer), [**Layer 7 Metrics**](/docs/ug/nbad/layer7metrics), or other behavioral dashboards as appropriate.

Review the available metrics to determine:

- Whether the anomaly is driven by bandwidth utilization or connection rates.
- Which protocols contribute to the abnormal behavior.
- Whether TCP SYN, UDP, ICMP, DNS, or application traffic is responsible.
- Whether the behavior resembles flooding, scanning, protocol misuse, or application abuse.
- Whether the observed activity aligns with scheduled operational events.

At this stage, focus on understanding the behavior itself rather than identifying the systems involved.

### Evidence to Preserve

- Traffic characteristics.
- Protocol distribution.
- Connection rates.
- Behavioral metrics.
- Application metrics.

### Continue the Investigation

Once the behavior has been characterized, determine which systems are responsible for generating the abnormal traffic.

---

## Step 3: Identify the Responsible Systems

After understanding the nature of the anomaly, identify the hosts, interfaces, and network conversations responsible for the observed behavior.

In [**Trisul Retro**](/docs/ug/cg/retro), navigate to:

**Retro Counters → Retro Usage → Hosts → Transmit**

Review the hosts contributing to the abnormal traffic during the investigation period.

From the selected host, click the **Actions** menu and choose [**Host Conversations**](/docs/ug/tools/explore_flows#top-conversations).

Review the conversations to determine:

- Which hosts generated the abnormal traffic.
- Which systems received the traffic.
- Whether the communication is internal or external.
- Which interfaces or network segments are affected.
- Whether multiple hosts exhibit similar behavior.

If additional detail is required, open [**Flow Details**](/docs/ug/tools/explore_flows#top-matching-flows) for the selected communication.

The **Flow Details** view provides timestamps, protocols, applications, ports, session duration, and traffic volumes associated with the communication.

### Evidence to Preserve

- Source hosts.
- Destination hosts.
- Interfaces.
- Communication timeline.
- Flow records.

### Continue the Investigation

Once the responsible systems have been identified, determine whether the observed behavior represents an expected operational event or an abnormal condition.

---

### Step 4: Validate the Behaviour

Network anomalies should be validated using multiple sources of evidence before determining whether they represent operational events or security incidents.

Continue the investigation using [**DNS Analysis**](/docs/ug/resources/dns), [**Packet Analysis**](/docs/ug/resources/dns#option-button), and [**Historical Investigation (Retro)**](/docs/ug/cg/retro).

Use this investigation to answer questions such as:

- Has similar behaviour occurred previously?
- Does packet analysis explain the observed traffic?
- Do DNS queries support the communication pattern?
- Is the behaviour associated with scheduled maintenance, software updates, or backup operations?
- Are additional hosts exhibiting the same anomaly?

Historical comparison helps determine whether the anomaly represents a newly observed event or an expected operational pattern.

#### Evidence to Preserve

- Historical traffic.
- DNS activity.
- Packet captures.
- Previous occurrences.
- Supporting evidence.

#### Continue the Investigation

Once the behaviour has been validated, assess its operational or security impact.

---

### Step 5: Assess the Operational or Security Impact

After validating the anomaly, determine whether the observed behaviour requires operational remediation or security response.

Review the investigation findings to determine:

- Whether the behaviour is expected or anomalous.
- Whether the anomaly affects a single system or multiple hosts.
- Whether the activity impacts critical applications or services.
- Whether the behaviour indicates configuration issues, infrastructure problems, scanning activity, or malicious traffic.
- Whether immediate remediation or incident response is required.

Understanding the impact allows engineering and security teams to prioritise the appropriate response.

#### Evidence to Preserve

- Affected systems.
- Operational impact.
- Security impact.
- Scope of the activity.
- Recommended remediation.

#### Continue the Investigation

Once the impact has been assessed, summarize the investigation findings and determine the appropriate response.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have identified the behavioural anomaly, characterized the abnormal network behaviour, determined the responsible systems, validated the findings using multiple evidence sources, and assessed the operational or security impact.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- What caused the network anomaly?
- Which systems are affected?
- Does the evidence indicate an operational issue or a security incident?
- Is immediate remediation required?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Affected hosts.
- Supporting evidence.
- Historical findings.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand what caused the network anomaly, identify the affected systems, determine whether the activity represents an expected operational event or a security incident, assess the scope of the impact, and establish the appropriate operational or incident response actions.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The behavioural anomaly has been identified and characterized.
- The responsible systems have been identified.
- Supporting evidence has been correlated.
- Historical activity has been reviewed.
- The operational or security impact has been assessed.
- The scope of the activity has been established.
- Appropriate operational or incident response actions have been identified.

---

## Best Practices

- Begin anomaly investigations by understanding what changed before identifying the affected systems.
- Correlate behavioural analytics with flow records, DNS activity, and packet evidence before reaching conclusions.
- Compare current behaviour against historical network activity to distinguish operational events from security incidents.
- Investigate connection behaviour alongside bandwidth utilisation and protocol distribution.
- Preserve investigation evidence before remediation begins.
- Document investigation findings to support future operational analysis and incident response.

---

## Related Investigations

- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)