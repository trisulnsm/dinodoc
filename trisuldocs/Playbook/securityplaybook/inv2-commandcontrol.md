# Investigate Command and Control (C2) Communications

## Investigation Overview

Compromised systems rarely operate in isolation. Once malware gains a foothold, it typically establishes communication with an external Command and Control (C2) server to receive instructions, download additional payloads, maintain persistence, or coordinate further malicious activity. These communications often occur long before any visible impact is observed on the network.

Unlike large data transfers or denial-of-service attacks, C2 traffic is designed to blend into legitimate network activity. Attackers frequently use common protocols such as DNS, HTTP, HTTPS, and TLS, communicate at regular intervals, or disguise traffic as normal application behavior. The objective of this investigation is to determine whether suspicious outbound communications represent legitimate application traffic or potential command and control activity, identify the affected systems, and assess the scope of the compromise.

Using Trisul Network Security Monitoring, analysts can investigate suspicious communications from the initial indicator through network flows, DNS activity, TLS metadata, packet evidence, and historical analysis without switching between multiple security tools.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate periodic outbound communications.
- Validate repeated connections to unfamiliar external destinations.
- Analyze suspicious DNS or TLS activity.
- Investigate alerts indicating potential malware or command and control activity.
- Determine whether a host has established persistent communication with external infrastructure.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the system communicating with the external host.
- Determine the destination and communication frequency.
- Understand the protocols and encrypted sessions involved.
- Validate whether the communication exhibits beaconing behavior.
- Determine whether the observed activity represents legitimate application traffic or potential command and control communication.

---

## Investigation Workflow

### Step 1: Review Suspicious Communications

Every command and control investigation begins by identifying the host responsible for the suspicious outbound communication. Before examining destinations or protocols, establish which systems are generating recurring or unusual external connections.

Open **Network Flows** to review outbound communications.

Use this investigation to answer questions such as:

- Which internal host initiated the communication?
- Which hosts communicate repeatedly with external systems?
- Is the communication still active?
- Are multiple hosts exhibiting similar behavior?
- Does the communication correspond to a security alert?

#### Evidence to Preserve

- Source host.
- Communication timeline.
- Flow records.
- Additional affected hosts.
- Alert timestamps.

#### Continue the Investigation

Once the communicating host has been identified, determine where the communication is being directed.

---

### Step 2: Investigate External Destinations

Understanding the external infrastructure helps determine whether the communication is expected or potentially malicious.

Open **Destination Intelligence** for the selected communication.

Use this investigation to answer questions such as:

- Which IP addresses are being contacted?
- Which domains are associated with the destination?
- Which Autonomous System (ASN) owns the infrastructure?
- Which country hosts the destination?
- Does threat intelligence identify the destination as suspicious?

#### Evidence to Preserve

- Destination IP addresses.
- Domain names.
- ASN information.
- Geographic location.
- Threat intelligence findings.

#### Continue the Investigation

Once the destination has been validated, determine whether the communication exhibits beaconing or other persistent communication patterns.

---

### Step 3: Analyze Communication Patterns

Command and control communications are often characterized by regular, automated connections rather than large data transfers. Reviewing communication frequency helps distinguish automated beaconing from normal user activity.

Open **Flow Analysis** for the selected host and destination.

Use this investigation to answer questions such as:

- How frequently does the host communicate?
- Are connections established at regular intervals?
- How long do the sessions last?
- How much data is exchanged during each session?
- Does the communication persist over time?

#### Evidence to Preserve

- Communication frequency.
- Session duration.
- Data transferred.
- Connection intervals.
- Flow timeline.

#### Continue the Investigation

If the communication uses encrypted protocols, investigate the available TLS metadata.

---

### Step 4: Analyze Encrypted Sessions

Many modern command and control frameworks rely on encrypted protocols to conceal their activity. Even without decrypting traffic, TLS metadata often provides valuable indicators that support the investigation.

Open **TLS Metadata** for the selected communication.

Use this investigation to answer questions such as:

- Which TLS version is being used?
- What Server Name Indication (SNI) is presented?
- Which JA3 and JA3S fingerprints are observed?
- Does the certificate appear legitimate?
- Does the encrypted session match known application behavior?

#### Evidence to Preserve

- TLS versions.
- JA3 fingerprints.
- JA3S fingerprints.
- Server Name Indication (SNI).
- Certificate metadata.

#### Continue the Investigation

After reviewing the encrypted communication, validate the findings using additional network evidence.

---

### Step 5: Correlate Supporting Evidence

A command and control investigation becomes stronger when multiple sources of evidence support the same conclusion. Correlating DNS activity, packet captures, historical communications, and threat intelligence provides greater confidence than relying on a single indicator.

Continue the investigation using **DNS Analysis**, **Packet Analysis**, and **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Do DNS queries support the observed communication?
- Has the destination been contacted previously?
- Does packet analysis confirm the protocol behavior?
- Has the communication changed over time?
- Are additional hosts communicating with the same destination?

#### Evidence to Preserve

- DNS activity.
- Packet captures.
- Historical communications.
- Threat intelligence findings.
- Additional affected hosts.

#### Continue the Investigation

Once the communication has been validated, determine whether the observed behavior represents command and control activity and assess the scope of the compromise.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have established the communicating host, validated the external destination, analyzed communication frequency, reviewed encrypted session metadata, and correlated supporting evidence.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- Does the evidence indicate command and control activity?
- Which hosts are affected?
- Is the communication ongoing?
- Does the incident require immediate containment?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Affected hosts.
- Destination infrastructure.
- Flow and packet evidence.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand whether the observed communication represents legitimate application traffic or potential command and control activity, identify the affected systems, assess the scope of the compromise, and determine whether incident response or further investigation is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The communicating host has been identified.
- The external destination has been validated.
- Communication patterns have been analyzed.
- TLS metadata has been reviewed where applicable.
- Supporting evidence has been correlated.
- The scope of the potential compromise has been established.
- Appropriate incident response or engineering actions have been determined.

---

## Best Practices

- Investigate communication frequency in addition to traffic volume.
- Review TLS metadata even when payloads are encrypted.
- Correlate DNS activity with flow records and packet evidence.
- Compare current communications against historical behavior.
- Preserve investigation evidence before containment begins.
- Document all findings to support incident response activities.

---

## Related Investigations

- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Encrypted Traffic**](/playbook/securityplaybook/inv3-encryptedtraffic)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)
- [**Hunt Threats Across Historical Network Activity**](/playbook/securityplaybook/inv7-historical)