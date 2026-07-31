# Investigate Network Behavior Anomalies

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

## Investigation Workflow

### Step 1: Identify the Behavioral Anomaly

Network anomaly investigations begin by identifying the change in network behavior that triggered the investigation. Rather than immediately focusing on individual hosts, the objective is to understand what changed, when it occurred, and whether the observed behavior requires further investigation.

Open [**Behavioral Analytics**](/docs/ug/nbad/trisulnbad), [**Threshold Band Alerts**](/docs/ug/alerts/tband), [**DDoS Metrics**](/docs/ug/alerts/ddos), or the dashboard that generated the alert.

Review the available dashboards and alerts to determine:

- Which metric deviated from its normal behavior.
- When the anomaly began.
- Whether the anomaly is still active.
- Which protocols, applications, or interfaces are affected.
- Whether the anomaly generated a behavioral or threshold alert.

The objective at this stage is to understand the nature of the anomaly before investigating the systems responsible.

#### Evidence to Preserve

- Triggering metric.
- Alert information.
- Timeline of the anomaly.
- Behavioral observations.
- Initial findings.

#### Continue the Investigation

Once the anomaly has been identified, determine what type of abnormal network behavior is being observed.

---

### Step 2: Characterize the Network Behavior

Understanding the characteristics of the anomaly helps determine whether it represents expected operational activity or behavior requiring further investigation.

Use [**Behavioral Analytics**](/docs/ug/nbad/trisulnbad), [**DDoS Metrics**](/docs/ug/alerts/ddos), [**TCP Analyzer**](/docs/ug/nbad/tcpanalyzer), [**Layer 7 Metrics**](/docs/ug/nbad/layer7metrics), or other behavioral dashboards as appropriate.

Review the available metrics to determine:

- Whether the anomaly is driven by bandwidth utilization or connection rates.
- Which protocols contribute to the abnormal behavior.
- Whether TCP SYN, UDP, ICMP, DNS, or application traffic is responsible.
- Whether the behavior resembles flooding, scanning, protocol misuse, or application abuse.
- Whether the observed activity aligns with scheduled operational events.

At this stage, focus on understanding the behavior itself rather than identifying the systems involved.

#### Evidence to Preserve

- Traffic characteristics.
- Protocol distribution.
- Connection rates.
- Behavioral metrics.
- Application metrics.

#### Continue the Investigation

Once the behavior has been characterized, determine which systems are responsible for generating the abnormal traffic.

---

### Step 3: Identify the Responsible Systems

After understanding the nature of the anomaly, identify the hosts, interfaces, or network segments responsible for the observed behavior.

Using the affected metric or object identified during the previous steps, pivot to the relevant network entities in **Trisul Retro** or the associated behavioral dashboard. Review the systems contributing to the abnormal activity during the selected investigation period.

Depending on the nature of the anomaly, this may involve reviewing:

- Hosts generating or receiving abnormal traffic.
- Interfaces experiencing unusual utilization.
- Network conversations associated with the anomaly.
- Systems contributing to abnormal connection rates or protocol activity.

From the selected host or network entity, click the **Actions** menu and choose [**Host Conversations**](/docs/ug/tools/explore_flows#top-conversations) to investigate the associated communication.

Review the conversations to determine:

- Which hosts generated the abnormal traffic.
- Which systems received the traffic.
- Whether the communication is internal or external.
- Which interfaces or network segments are affected.
- Whether multiple hosts exhibit similar behavior.

If additional detail is required, open [**Flow Details**](/docs/ug/tools/explore_flows#top-matching-flows) for the selected communication.

The **Flow Details** view provides timestamps, protocols, applications, ports, session duration, and traffic volumes associated with the communication.

#### Evidence to Preserve

- Source hosts.
- Destination hosts.
- Interfaces or network segments involved.
- Communication timeline.
- Flow records.

#### Continue the Investigation

Once the responsible systems have been identified, validate whether the observed behavior represents an expected operational event or an abnormal condition.

---

### Step 4: Validate the Behavior

Behavioral anomalies should be validated using multiple sources of evidence before determining whether they represent operational events or security incidents.

Continue the investigation using [**Historical Investigation (Retro)**](/docs/ug/cg/retro), [**DNS Analysis**](/docs/ug/resources/dns), and [**Packet Analysis**](/docs/ug/resources/dns#option-button).

Use this investigation to answer questions such as:

- Has similar behavior occurred previously?
- Does packet analysis provide additional context for the observed traffic?
- Do DNS queries support the communication pattern?
- Is the behavior associated with scheduled maintenance, software updates, or backup operations?
- Are additional hosts exhibiting the same anomaly?

Historical comparison helps determine whether the anomaly represents a newly observed event or an expected operational pattern.

#### Evidence to Preserve

- Historical traffic patterns.
- DNS activity.
- Packet captures.
- Previous occurrences.
- Supporting evidence.

#### Continue the Investigation

Once the behavior has been validated, determine the operational or security impact of the anomaly.

---

### Step 5: Assess the Operational or Security Impact

After validating the anomaly, determine whether the observed behavior requires operational remediation or incident response.

Review the investigation findings to determine:

- Whether the behavior is expected or anomalous.
- Whether the anomaly affects a single system or multiple hosts.
- Whether critical applications or services are impacted.
- Whether the behavior indicates infrastructure issues, configuration changes, reconnaissance, denial-of-service activity, malware, or another security concern.
- Whether immediate operational remediation or incident response is required.

Understanding the impact enables engineering and security teams to prioritize the appropriate response.

#### Evidence to Preserve

- Affected systems.
- Operational impact.
- Security impact.
- Scope of the activity.
- Recommended response actions.

#### Continue the Investigation

Once the impact has been assessed, summarize the investigation findings and determine the appropriate response.

---

### Step 6: Summarize the Investigation with Trisul AI

Once the investigation is complete, open **Trisul AI** to review the investigation findings.

Trisul AI can generate a concise summary of the investigation, highlight the key observations, explain how the collected evidence supports the findings, and assist with documenting the investigation for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The behavioral anomaly has been identified and characterized.
- The responsible systems have been identified.
- Supporting evidence has been correlated.
- Historical activity has been reviewed.
- The operational or security impact has been assessed.
- The scope of the activity has been established.
- Appropriate operational or incident response actions have been identified.

---

## Best Practices

- Begin anomaly investigations by understanding what changed before identifying the affected systems.
- Correlate behavioral analytics with flow records, DNS activity, and packet evidence before reaching conclusions.
- Compare current behavior against historical network activity to distinguish operational events from security incidents.
- Investigate connection behavior alongside bandwidth utilization and protocol distribution.
- Preserve investigation evidence before remediation begins.
- Document investigation findings to support future operational analysis and incident response.

---

## Related Investigations

- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)