# Investigate Potential Data Exfiltration

## Investigation Overview

Sensitive information rarely leaves an organization's network without generating observable network activity. Large outbound transfers, repeated communication with unfamiliar external systems, unexpected uploads outside normal business hours, or unusual application behavior may all indicate an attempt to move data beyond organizational control.

Not every outbound transfer represents malicious activity. Backups, cloud synchronization, software updates, and legitimate business processes frequently generate similar traffic patterns. The objective of this investigation is to determine whether the observed communication represents normal business activity or potential data exfiltration, identify the systems involved, and establish the scope of the incident.

Using Trisul Network Security Monitoring, analysts can progressively narrow the investigation from the initial indicator to the underlying communication without switching between multiple security tools.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate unusually large outbound data transfers.
- Validate communication with unfamiliar external destinations.
- Determine whether outbound traffic represents legitimate business activity.
- Investigate alerts indicating potential data exfiltration.
- Assess the scope of a suspected data theft incident.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the host responsible for the outbound communication.
- Determine the destination of the transferred data.
- Understand the applications and protocols involved.
- Assess the volume and duration of the transfer.
- Determine whether the activity is legitimate or suspicious.
- Establish the scope of the potential compromise.

---

## Investigation Workflow

### Step 1: Review Outbound Traffic

Every data exfiltration investigation begins by identifying the systems generating unusual outbound network activity. Before analysing individual communications, determine which hosts are transmitting significant volumes of data outside the organization.

Open **Top Outbound Traffic** to review outbound communications across the monitored network.

Use this investigation to answer questions such as:

- Which internal hosts generated the largest outbound transfers?
- Which systems exhibit unusual outbound activity?
- Did the communication occur during normal business hours?
- Are multiple hosts exhibiting similar behavior?
- Does the activity correspond to an alert or reported incident?

#### Evidence to Preserve

- Source host.
- Outbound traffic volume.
- Time of the communication.
- Duration of the activity.
- Additional hosts exhibiting similar behavior.

#### Continue the Investigation

Once the source host has been identified, determine where the data was transferred.

---

### Step 2: Investigate External Destinations

Understanding where the data was sent is essential to determining whether the communication represents legitimate business activity or a potential security incident.

Open **Destination Intelligence** for the selected host.

Use this investigation to answer questions such as:

- Which external IP addresses received the communication?
- Which domains are associated with the destination?
- Which Autonomous Systems (ASNs) own the infrastructure?
- Which countries host the destination?
- Does threat intelligence identify the destination as suspicious?

#### Evidence to Preserve

- Destination IP addresses.
- Domains.
- ASN information.
- Geographic locations.
- Threat intelligence context.

#### Continue the Investigation

Once the destination has been validated, determine what communication occurred between the source and destination.

---

### Step 3: Analyze Network Flows

After identifying the communicating systems, examine the network flows to understand how the transfer occurred. Flow analysis provides the context needed to determine whether the observed communication is consistent with the expected role of the host.

Open **Flow Analysis** for the selected communication.

Use this investigation to answer questions such as:

- Which applications generated the communication?
- Which protocols were used?
- How much data was transferred?
- How long did the communication last?
- Were repeated sessions established?

#### Evidence to Preserve

- Flow records.
- Applications involved.
- Protocols used.
- Total bytes transferred.
- Session duration and frequency.

#### Continue the Investigation

If the communication requires further validation, inspect the packet evidence supporting the network flows.

---

### Step 4: Validate with Packet Evidence

Flow records describe the communication, but packet analysis provides the detailed evidence required to validate what occurred during the transfer.

Where packet capture is available, pivot directly from the selected flow to **Packet Analysis**.

Use this investigation to answer questions such as:

- Does the packet capture support the flow analysis?
- Is application behavior consistent with the reported protocol?
- Is sensitive information visible within the communication?
- Are protocol anomalies present?
- Does the packet evidence indicate unauthorized activity?

#### Evidence to Preserve

- Packet captures.
- Protocol exchanges.
- File transfer evidence.
- Packet timestamps.
- Indicators supporting or disproving exfiltration.

#### Continue the Investigation

After validating the communication, determine whether similar activity has occurred previously.

---

### Step 5: Review Historical Activity

Determining whether the observed communication is new or part of an established pattern provides valuable context for the investigation.

Open **Historical Investigation (Retro)** for the affected host and destination.

Use this investigation to answer questions such as:

- Has this host communicated with the destination previously?
- Is the observed transfer consistent with historical behavior?
- When did the communication first appear?
- Has the volume increased over time?
- Are additional hosts communicating with the same destination?

#### Evidence to Preserve

- Historical communication patterns.
- Previous occurrences.
- Changes in transfer volume.
- Additional affected hosts.
- Timeline of the activity.

#### Continue the Investigation

Once the historical context has been established, review the investigation findings to determine the scope of the incident.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have established the source of the communication, the external destination, the applications involved, supporting packet evidence, and the historical context surrounding the activity.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- What evidence suggests potential data exfiltration?
- Which observations require immediate attention?
- Which systems are involved?
- Is additional investigation recommended?
- Should the incident be escalated?

#### Evidence to Preserve

- Investigation summary.
- Hosts involved.
- Destination infrastructure.
- Flow and packet evidence.
- Recommended follow-up actions.

#### Investigation Outcome

At this stage, you should understand whether the observed outbound communication represents legitimate business activity or potential data exfiltration, identify the systems involved, establish the scope of the incident, and determine whether incident response or further investigation is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The source host has been identified.
- The external destination has been validated.
- The communication has been analyzed using flow records.
- Packet evidence has been reviewed where available.
- Historical activity has been compared.
- The scope of the potential incident has been established.
- Appropriate incident response or engineering actions have been determined.

---

## Best Practices

- Investigate unusual outbound communications before assuming malicious activity.
- Validate destination reputation together with business context.
- Correlate flow records with packet evidence whenever available.
- Compare current observations with historical communication patterns.
- Preserve investigation evidence before containment or remediation begins.
- Document all findings to support incident response and post-incident analysis.

---

## Related Investigations

- **Investigate Command and Control (C2) Communications**
- **Investigate Encrypted Traffic**
- **Investigate Threat Intelligence Alerts**
- **Hunt Threats Across Historical Network Activity**