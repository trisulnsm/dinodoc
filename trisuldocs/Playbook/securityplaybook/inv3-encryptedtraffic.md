# Investigate Encrypted Traffic

## Investigation Overview

Encrypted communication is now the default for most network applications. While encryption protects data in transit, it also limits the visibility available through traditional packet inspection, making it more difficult to determine whether encrypted sessions represent legitimate business activity or malicious behavior.

Fortunately, encrypted communications still expose valuable metadata that can reveal how systems communicate without decrypting the payload. TLS versions, Server Name Indication (SNI), certificates, JA3 fingerprints, flow characteristics, and communication patterns provide analysts with the evidence needed to identify suspicious encrypted sessions.

Using Trisul Network Security Monitoring, analysts can investigate encrypted communications through TLS metadata, flow analytics, packet evidence, and historical analysis to determine whether the observed activity is expected or requires further investigation.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate unknown or unexpected encrypted communications.
- Validate outbound TLS sessions to unfamiliar destinations.
- Analyze unusual JA3 or JA3S fingerprints.
- Investigate suspicious certificates or Server Name Indication (SNI) values.
- Determine whether encrypted communications represent legitimate business activity or a potential security threat.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the systems generating encrypted traffic.
- Determine the external services involved.
- Analyze TLS metadata without decrypting traffic.
- Identify suspicious certificates or JA3 fingerprints.
- Assess whether encrypted communications align with expected network behavior.
- Determine whether additional investigation is required.

---

## Investigation Workflow

### Step 1: Review Encrypted Communications

Every encrypted traffic investigation begins by identifying the systems responsible for the encrypted sessions. Before examining certificates or TLS metadata, determine which hosts are communicating externally and whether the observed activity is unusual.

Open **Network Flows** to review encrypted outbound communications.

Use this investigation to answer questions such as:

- Which internal hosts initiated the encrypted sessions?
- Which hosts communicate most frequently over TLS?
- Are multiple hosts exhibiting similar communication?
- Is the communication associated with a security alert?
- Is the activity still ongoing?

#### Evidence to Preserve

- Source host.
- Communication timeline.
- Flow records.
- Additional affected hosts.
- Alert timestamps.

#### Continue the Investigation

Once the communicating host has been identified, determine where the encrypted communication is being directed.

---

### Step 2: Investigate External Destinations

Understanding the external destination provides valuable context before analysing the encrypted session itself. Legitimate cloud services and business applications often generate encrypted traffic, while unfamiliar destinations may require further investigation.

Open **Destination Intelligence** for the selected communication.

Use this investigation to answer questions such as:

- Which IP addresses are being contacted?
- Which domains are associated with the destination?
- What Server Name Indication (SNI) is presented?
- Which country hosts the destination?
- Does threat intelligence identify the destination as suspicious?

#### Evidence to Preserve

- Destination IP addresses.
- Domain names.
- Server Name Indication (SNI).
- Geographic location.
- Threat intelligence findings.

#### Continue the Investigation

Once the destination has been validated, analyse the TLS metadata associated with the encrypted session.

---

### Step 3: Analyze TLS Metadata

Although encrypted payloads remain inaccessible, TLS metadata often provides sufficient evidence to determine whether the communication aligns with expected application behavior.

Open **TLS Metadata** for the selected communication.

Use this investigation to answer questions such as:

- Which TLS version is being used?
- Which cipher suite was negotiated?
- Who issued the certificate?
- Which JA3 and JA3S fingerprints are observed?
- Does the encrypted session match known application behavior?

#### Evidence to Preserve

- TLS version.
- Cipher suite.
- Certificate metadata.
- JA3 fingerprints.
- JA3S fingerprints.

#### Continue the Investigation

After reviewing the TLS metadata, evaluate how the encrypted communication behaves over time.

---

### Step 4: Analyze Communication Behavior

The characteristics of encrypted sessions often provide stronger indicators than individual connections. Reviewing communication frequency, duration, and historical trends helps distinguish legitimate application traffic from suspicious encrypted activity.

Open **Flow Analysis** for the selected encrypted communication.

Use this investigation to answer questions such as:

- How frequently are encrypted sessions established?
- Are communications periodic or continuous?
- How much data is transferred?
- Has the communication volume changed over time?
- Does the behavior match the expected role of the host?

#### Evidence to Preserve

- Communication frequency.
- Session duration.
- Traffic volume.
- Historical flow patterns.
- Behavioral observations.

#### Continue the Investigation

Once the communication behavior has been understood, correlate the findings using additional network evidence.

---

### Step 5: Correlate Supporting Evidence

TLS metadata alone rarely provides the complete picture. Correlating DNS activity, packet captures, historical communications, and threat intelligence helps determine whether the encrypted traffic represents legitimate application behavior or a potential security concern.

Continue the investigation using **DNS Analysis**, **Packet Analysis**, and **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Do DNS queries support the observed communication?
- Does packet analysis validate the protocol behavior?
- Has the communication occurred previously?
- Have additional hosts exhibited similar activity?
- Does threat intelligence identify the destination or certificate?

#### Evidence to Preserve

- DNS activity.
- Packet captures.
- Historical communications.
- Threat intelligence findings.
- Additional affected hosts.

#### Continue the Investigation

Once the encrypted communication has been validated, determine whether the activity requires escalation or continued monitoring.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have established the communicating host, validated the external destination, analyzed the TLS metadata, reviewed communication behavior, and correlated supporting evidence.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- Does the encrypted communication appear legitimate?
- Which observations require immediate attention?
- Are additional systems involved?
- Does the investigation require escalation?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Hosts involved.
- TLS metadata.
- Flow and packet evidence.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand whether the encrypted communication represents legitimate business activity or a potential security threat, identify the affected systems, validate the supporting evidence, and determine whether further investigation or incident response is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The communicating host has been identified.
- The external destination has been validated.
- TLS metadata has been analyzed.
- Communication behavior has been reviewed.
- Supporting evidence has been correlated.
- The legitimacy of the encrypted communication has been determined.
- Appropriate incident response or engineering actions have been identified.

---

## Best Practices

- Investigate encrypted communications using metadata rather than relying solely on payload inspection.
- Correlate JA3 fingerprints with certificates, SNI, and flow records.
- Compare encrypted communications against historical behavior.
- Validate external destinations using threat intelligence.
- Preserve packet and flow evidence before remediation begins.
- Document investigation findings to support future incident response activities.

---

## Related Investigations

- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)
- [**Hunt Threats Across Historical Network Activity**](/playbook/securityplaybook/inv7-historical)