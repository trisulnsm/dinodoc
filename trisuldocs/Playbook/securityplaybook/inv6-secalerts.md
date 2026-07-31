# Investigate Security Detection Alerts

## Investigation Overview

Security alerts are often the first indication of suspicious activity within an organization's network. They may originate from intrusion detection systems (IDS), behavioral analytics, threat intelligence feeds, anomaly detection engines, or other security controls. While alerts highlight potentially significant events, they rarely provide sufficient context to determine whether malicious activity has actually occurred.

An alert should be treated as the starting point of an investigation rather than a confirmed incident. The objective is to validate the alert, understand the surrounding network activity, correlate supporting evidence, and determine the appropriate response.

Using Trisul Network Security Monitoring, analysts can investigate security alerts by correlating and analyzing network telemetry, packet evidence, behavioral analytics, and historical activity before mapping the findings to the MITRE ATT&CK framework.

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

Security alert investigations begin by understanding why the alert was generated. An alert represents a potential security event, but it does not by itself confirm malicious activity. Before investigating network communications, review the alert to understand what triggered it, which systems are involved, and the severity of the event.

Open [**Security Alerts**](/docs/ug/alerts/mw).

Review the alert details to determine:

- What generated the alert.
- When the alert occurred.
- Which detection rule or signature triggered the alert.
- Which hosts, users, or services are involved.
- The severity and priority assigned to the alert.

The objective at this stage is to understand the context of the alert before validating whether the observed activity actually occurred.

#### Evidence to Preserve

- Alert details.
- Detection source.
- Alert severity.
- Alert timestamp.
- Affected hosts.

#### Continue the Investigation

Once the alert has been reviewed, validate whether the network activity supports the alert.

---

### Step 2: Validate the Alert

Before treating the alert as a security incident, verify that the underlying network activity matches the conditions that triggered the detection. Validation helps distinguish genuine threats from false positives or expected operational behavior.

Review the communication associated with the alert using [**Host Conversations**](/docs/ug/tools/explore_flows#top-conversations), [**Flow Details**](/docs/ug/tools/explore_flows#top-matching-flows), and [**Packet Analysis**](/docs/ug/tools/explore_flows#flow-options) where available.

Use this investigation to answer questions such as:

- Did the reported communication actually occur?
- Do the timestamps align with the alert?
- Are the reported protocols and ports accurate?
- Does the observed network activity support the alert?
- Does the observed network activity support the alert, or does it indicate a likely false positive?

This step establishes whether the alert represents genuine suspicious activity before expanding the investigation.

#### Evidence to Preserve

- Flow records.
- Packet evidence.
- Communication timeline.
- Protocols observed.
- Validation findings.

#### Continue the Investigation

Once the alert has been validated, investigate the associated network activity in greater detail.

---

### Step 3: Investigate the Associated Activity

After validating that the alert reflects genuine network activity, expand the investigation to examine the surrounding communications and determine whether the alert represents an isolated event or part of a broader sequence of activity.

Continue the investigation using [**Host Conversations and Flow Details**](/docs/ug/tools/explore_flows#top-matching-flows) for the affected hosts.

Review the network activity to determine:

- Which hosts communicated.
- Which applications generated the traffic.
- Which protocols and services were involved.
- Which external destinations were contacted.
- Whether the communication pattern appears unusual.

Understanding the surrounding activity helps establish whether the alert represents isolated communication or part of a broader sequence of events.

#### Evidence to Preserve

- Source and destination hosts.
- Applications involved.
- Protocols used.
- Communication timeline.
- External destinations.

#### Continue the Investigation

After understanding the associated activity, correlate additional evidence to strengthen the investigation.

---

### Step 4: Correlate Supporting Evidence

A single alert rarely provides sufficient evidence to determine the nature or scope of an incident. Correlating additional network telemetry helps confirm findings and provides greater confidence in the investigation.

Continue the investigation using [**DNS Analysis**](/docs/ug/resources/dns/), [**TLS Metadata**](/docs/ug/cg/ssl/), and [**Behavioral Analytics**](/docs/ug/nbad/trisulnbad).

Use this investigation to answer questions such as:

- Do DNS queries support the observed communication?
- Does TLS metadata reveal unusual encrypted sessions?
- Are behavioral anomalies associated with the affected hosts?
- Are multiple alerts related to the same activity?

Correlating multiple evidence sources helps distinguish isolated alerts from coordinated or ongoing activity.

#### Evidence to Preserve

- DNS activity.
- TLS metadata.
- Threat intelligence findings.
- Behavioral observations.
- Related alerts.

#### Continue the Investigation

Once the supporting evidence has been correlated, assess the scope of the activity and determine where it fits within the attack lifecycle.

---

### Step 5: Assess the Scope and Attack Context

After correlating the available evidence, determine whether the alert represents an isolated event or part of a broader attack. Mapping the activity to the MITRE ATT&CK framework provides additional context regarding attacker objectives and progression.

Open [**MITRE ATT&CK Mapping**](/docs/ug/alerts/mitre).

Review the investigation findings to determine:

- Which MITRE ATT&CK tactic and technique best describe the activity.
- Whether the alert represents reconnaissance, execution, persistence, lateral movement, command and control, or exfiltration.
- Whether additional hosts are involved.
- Whether multiple alerts indicate different stages of the same attack.
- Whether the activity suggests a wider compromise.

Understanding both the scope and attack context helps prioritize response efforts and determine whether incident response procedures should be initiated.

#### Evidence to Preserve

- MITRE ATT&CK tactics.
- Techniques identified.
- Scope of the activity.
- Related alerts.
- Indicators of compromise.

#### Continue the Investigation

Once the attack context has been established, determine whether similar activity has occurred previously.

---

### Step 6: Review Historical Activity

Historical analysis determines whether the observed activity represents a one-time event or part of an ongoing pattern.

Open [**Historical Investigation (Retro)**](/docs/ug/cg/retro).

Use this investigation to answer questions such as:

- Has similar activity occurred previously?
- When was the behavior first observed?
- Have additional hosts generated similar alerts?
- Has the activity increased over time?
- Does the historical evidence indicate persistence?

Historical analysis helps determine whether the investigation represents an isolated event, recurring activity, or an established compromise.

#### Evidence to Preserve

- Historical alerts.
- Previous communications.
- Timeline.
- Additional affected hosts.
- Historical trends.

#### Continue the Investigation

Once the historical context has been established, summarize the investigation findings and determine the appropriate response.

---

### Step 7: Summarize the Investigation with Trisul AI

Once the investigation is complete, open **Trisul AI** to review the investigation findings.

Trisul AI can generate a concise summary of the investigation, highlight the key observations, explain how the collected evidence supports the findings, and assist with documenting the investigation for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The security alert has been reviewed and validated.
- The associated network activity has been investigated.
- Supporting evidence has been correlated.
- The scope of the activity has been established.
- The attack context has been assessed using MITRE ATT&CK.
- Historical activity has been reviewed.
- Appropriate operational or incident response actions have been identified.

---

## Best Practices

- Treat every alert as the starting point of an investigation rather than a confirmed incident.
- Validate alerts against observed network activity before initiating incident response.
- Correlate alerts with flow records, packet evidence, DNS activity, TLS metadata, and behavioral analytics.
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