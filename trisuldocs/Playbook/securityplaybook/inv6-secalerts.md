# Investigate Security Alerts

## Investigation Overview

Security alerts are often the first indication of suspicious activity within an organization's network. They may originate from intrusion detection systems (IDS), behavioral analytics, threat intelligence feeds, anomaly detection engines, or other security controls. While alerts highlight potentially significant events, they rarely provide sufficient context to determine whether malicious activity has actually occurred.

An alert should be treated as the starting point of an investigation rather than a confirmed incident. The objective is to validate the alert, understand the surrounding network activity, correlate supporting evidence, and determine the appropriate response.

Using Trisul Network Security Monitoring, analysts can investigate security alerts by correlating network telemetry, packet evidence, behavioral analytics, historical activity, MITRE ATT&CK mapping, and AI-assisted investigation within a single workflow.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate IDS or IPS alerts.
- Validate behavioral or anomaly detection alerts.
- Investigate threat intelligence notifications.
- Correlate multiple alerts involving the same host.
- Determine whether a security alert represents a genuine incident.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Validate the security alert.
- Identify the affected systems and users.
- Understand the sequence of events leading to the alert.
- Determine whether the alert represents malicious or legitimate activity.
- Assess the potential impact on the environment.
- Establish appropriate response actions.

---

## Investigation Workflow

### Step 1: Review the Security Alert

Every alert investigation begins by understanding why the alert was generated. Before examining network activity, review the alert details to establish the affected systems, detection logic, and severity.

Open **Security Alerts**.

Use this investigation to answer questions such as:

- What generated the alert?
- When did the alert occur?
- Which detection rule triggered the alert?
- Which hosts are involved?
- What is the severity of the alert?

#### Evidence to Preserve

- Alert details.
- Detection source.
- Alert severity.
- Alert timestamp.
- Affected hosts.

#### Continue the Investigation

Once the alert has been understood, determine the network activity associated with the event.

---

### Step 2: Analyze Network Activity

Understanding the communications associated with the alert helps determine whether the observed behavior aligns with normal operations or indicates suspicious activity.

Open **Flow Analysis** for the affected hosts.

Use this investigation to answer questions such as:

- Which hosts communicated?
- Which applications generated the traffic?
- Which protocols were used?
- What was the communication timeline?
- Which external destinations were contacted?

#### Evidence to Preserve

- Flow records.
- Source and destination hosts.
- Applications involved.
- Protocols used.
- Communication timeline.

#### Continue the Investigation

Once the network activity has been established, validate the alert using packet-level evidence.

---

### Step 3: Validate with Packet Evidence

Packet analysis provides the detailed evidence needed to confirm whether the alert accurately represents the observed network activity.

Open **Packet Analysis**.

Use this investigation to answer questions such as:

- Does packet analysis validate the alert?
- Is suspicious protocol behavior visible?
- Are indicators of exploitation present?
- Does the packet evidence support the flow analysis?
- Is additional investigation required?

#### Evidence to Preserve

- Packet captures.
- Protocol exchanges.
- Packet timestamps.
- Indicators of compromise.
- Supporting evidence.

#### Continue the Investigation

After validating the communication, correlate the findings using additional network evidence.

---

### Step 4: Correlate Supporting Evidence

A single alert rarely provides enough information to determine the scope of an incident. Correlating multiple sources of evidence improves confidence in the investigation.

Continue the investigation using **DNS Analysis**, **TLS Metadata**, **Threat Intelligence**, and **Behavioral Analytics**.

Use this investigation to answer questions such as:

- Do DNS queries support the observed communication?
- Does TLS metadata reveal unusual encrypted sessions?
- Does threat intelligence identify the destination as malicious?
- Are behavioral anomalies associated with the affected hosts?
- Are additional alerts related to the same activity?

#### Evidence to Preserve

- DNS activity.
- TLS metadata.
- Threat intelligence findings.
- Behavioral observations.
- Related alerts.

#### Continue the Investigation

Once the supporting evidence has been correlated, determine how the alert fits within the overall attack sequence.

---

### Step 5: Understand the Attack Context

Individual alerts often represent only one stage of an attack. Mapping the investigation to the MITRE ATT&CK framework helps place the alert within the broader attack lifecycle.

Open **MITRE ATT&CK Mapping**.

Use this investigation to answer questions such as:

- Which MITRE ATT&CK tactic does the alert represent?
- Which techniques are involved?
- Does the activity indicate reconnaissance, execution, persistence, or exfiltration?
- Are multiple attack stages visible?
- Does the investigation indicate a broader compromise?

#### Evidence to Preserve

- MITRE ATT&CK tactics.
- Techniques identified.
- Attack progression.
- Related activity.
- Compromise indicators.

#### Continue the Investigation

Once the attack context has been established, review historical activity before determining the appropriate response.

---

### Step 6: Review Historical Activity

Historical analysis determines whether the alert represents an isolated event or part of an ongoing pattern of activity.

Open **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Has similar activity occurred previously?
- When was the behavior first observed?
- Have additional hosts generated similar alerts?
- Has the activity increased over time?
- Does the historical evidence indicate persistence?

#### Evidence to Preserve

- Historical alerts.
- Previous communications.
- Timeline.
- Additional affected hosts.
- Historical trends.

#### Continue the Investigation

Once the historical context has been established, summarize the investigation findings and determine the appropriate response.

---

### Step 7: Summarize the Investigation

By this stage, the investigation should have validated the alert, analyzed the associated network activity, reviewed packet evidence, correlated supporting telemetry, understood the attack context, and compared the activity against historical observations.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- Does the evidence validate the alert?
- Is this a true positive or false positive?
- Which systems are affected?
- Does the activity require immediate containment?
- Should the incident be escalated?

#### Evidence to Preserve

- Investigation summary.
- Affected systems.
- Supporting evidence.
- Historical findings.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand whether the alert represents a genuine security incident, identify the affected systems, establish the scope of the activity, and determine the appropriate operational or incident response actions.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The security alert has been validated.
- The associated network activity has been analyzed.
- Packet evidence has been reviewed where available.
- Supporting evidence has been correlated.
- The attack context has been established using MITRE ATT&CK.
- Historical activity has been reviewed.
- Appropriate response actions have been identified.

---

## Best Practices

- Treat every alert as the starting point of an investigation rather than a confirmed incident.
- Correlate alerts with flow records, packet evidence, and behavioral analytics.
- Use MITRE ATT&CK mapping to understand attacker objectives and attack progression.
- Compare current observations against historical activity before determining severity.
- Preserve investigation evidence before containment or remediation begins.
- Document findings to support incident response and post-incident analysis.

---

## Related Investigations

- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv5-threatalerts)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Hunt Threats Across Historical Network Activity**](/playbook/securityplaybook/inv7-threathunting)