# Investigate Encrypted Traffic 

## Investigation Overview 

Encrypted communication is now the default for most network applications. While encryption protects data in transit, it also limits the visibility available through traditional packet inspection, making it more difficult to determine whether encrypted sessions represent legitimate business activity or malicious behavior. Fortunately, encrypted communications still expose valuable metadata that can reveal how systems communicate without decrypting the payload. TLS versions, Server Name Indication (SNI), certificates, JA3 fingerprints, flow characteristics, and communication patterns provide analysts with the evidence needed to identify suspicious encrypted sessions. Using Trisul Network Security Monitoring, analysts can investigate encrypted communications through TLS metadata, flow analytics, packet evidence, and historical analysis to determine whether the observed activity is expected or requires further investigation.

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

By completing this investigation, you should be able to: - Identify the systems generating encrypted traffic. 
- Determine the external services involved. 
- Analyze TLS metadata without decrypting traffic. 
- Identify suspicious certificates or JA3 fingerprints. 
- Assess whether encrypted communications align with expected network behavior. 
- Determine whether additional investigation is required.

## Investigation Workflow

### Step 1: Identify Suspicious Encrypted Sessions

Encrypted traffic investigations begin by identifying TLS sessions that deviate from expected network behaviour. Rather than focusing on the hosts generating the traffic, the investigation starts by examining the metadata exposed during the TLS handshake.

Open [**TLS Metadata**](/docs/ug/cg/ssl/).

Review the available TLS sessions to identify communications that warrant further investigation.

Look for sessions that:

- Use previously unseen or unusual JA3 or JA3S fingerprints.
- Present unexpected Server Name Indication (SNI) values.
- Use self-signed, expired, or otherwise suspicious certificates.
- Negotiate deprecated TLS versions or unusual cipher suites.
- Appear inconsistent with the expected applications within your environment.

These indicators help determine whether an encrypted session should be investigated further without decrypting the payload.

#### Evidence to Preserve

- JA3 fingerprints.
- JA3S fingerprints.
- TLS version.
- Server Name Indication (SNI).
- Certificate metadata.

#### Continue the Investigation

Once a suspicious encrypted session has been identified, determine which internal systems are responsible for generating the communication.

---

### Step 2: Identify the Communicating Hosts

After identifying a suspicious TLS session, determine which hosts established the encrypted communication and where the traffic is being directed.

From [**TLS Metadata**](/docs/ug/cg/ssl/), drill down into the associated communication to identify the internal source hosts.

Review the communication details to determine:

- Which hosts generated the encrypted session.
- Which external systems received the communication.
- Whether the same JA3 fingerprint is observed across multiple hosts and whether that distribution is expected.
- Whether the destination is expected within the environment.
- Whether similar encrypted sessions are occurring across multiple systems.

This helps determine whether the activity is isolated to a single host or represents a wider pattern across the network.

#### Evidence to Preserve

- Source hosts.
- Destination IP addresses.
- Domain names.
- Communication timeline.
- Number of affected hosts.

#### Continue the Investigation

Once the communicating hosts have been identified, examine the encrypted communication in greater detail.

---

### Step 3: Analyze the Encrypted Communication

After identifying the communicating hosts, review the network conversations and flow details to understand how the encrypted session behaves.

From the selected host, click the **Actions** menu and choose [**Host Conversations**](/docs/ug/tools/explore_flows#top-conversations).

Review the conversations to determine:

- Which destinations are contacted.
- Whether communication is persistent or intermittent.
- Whether multiple encrypted sessions are established with the same destination.
- Whether communication patterns appear consistent with the host's expected role.

If additional detail is required, open [**Flow Details**](/docs/ug/tools/explore_flows#top-matching-flows) for the selected communication.

The **Flow Details** view provides detailed information including timestamps, protocols, applications, ports, session duration, connection frequency, and the amount of data transferred.

Use this investigation to answer questions such as:

- Which application generated the encrypted session?
- Does the communication match the expected application behaviour?
- Does the volume or duration of the session appear unusual?
- Are additional encrypted sessions associated with the same destination?

#### Evidence to Preserve

- Flow timeline.
- Session duration.
- Applications.
- Protocols.
- Data transferred.

#### Continue the Investigation

After reviewing the encrypted communication, validate the findings using additional network evidence.

---

### Step 4: Correlate Additional Network Evidence

TLS metadata provides valuable visibility into encrypted communications, but it should be correlated with additional evidence before determining whether the activity represents legitimate business traffic or a potential security threat.

Continue the investigation using [**DNS Analysis**](/docs/ug/resources/dns), [**Packet Analysis**](/docs/ug/resources/dns#option-button), and **Historical Investigation (Retro)**. Packet captures can validate TLS negotiation, certificates, and protocol behaviour even when the payload remains encrypted.

Use this investigation to answer questions such as:

- Do DNS queries support the observed encrypted communication?
- Has the JA3 fingerprint been observed previously?
- Have additional hosts established similar encrypted sessions?
- Does packet analysis validate the protocol behaviour?
- Does the historical activity indicate an established communication pattern or a newly observed session?

#### Evidence to Preserve

- DNS activity.
- Packet captures.
- Historical communications.
- Additional affected hosts.
- Threat intelligence findings.

#### Continue the Investigation

Once the encrypted communication has been validated, determine the scope of the activity across the environment.

---

### Step 5: Assess the Scope of the Observed Activity

After validating the encrypted communication, determine whether the observed activity is limited to a single system or affects multiple hosts across the network.

Review the investigation findings to identify:

- Whether multiple hosts share the same JA3 fingerprint.
- Whether the same server certificate is used across different systems.
- Whether multiple destinations are associated with the activity.
- Whether the communication remains active.
- Which systems require further investigation or response.

Understanding the scope of the activity helps determine whether the encrypted communication represents an isolated event, a widespread application deployment, or a potential security incident.

#### Evidence to Preserve

- Affected hosts.
- Shared JA3 fingerprints.
- Certificates.
- Destination infrastructure.
- Scope of the activity.

#### Continue the Investigation

Once the scope has been established, summarize the investigation findings and determine the appropriate response.

---

### Step 6: Summarize the Investigation with Trisul AI

Once the investigation is complete, open **Trisul AI** to review the investigation findings.

Trisul AI can generate a concise summary of the investigation, highlight the key observations, explain how the collected evidence supports the findings, and assist with documenting the investigation for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The suspicious encrypted session has been validated.
- The communicating hosts have been identified.
- TLS metadata and network communication have been analysed.
- Supporting evidence has been correlated.
- The encrypted communication has been determined to represent expected application behaviour or requires further investigation.
- The scope of the activity has been established.
- Appropriate operational or incident response actions have been identified.

---

## Best Practices

- Begin encrypted traffic investigations by examining TLS metadata rather than packet payloads.
- Correlate JA3 fingerprints, certificates, DNS activity, and flow records before reaching a conclusion.
- Compare encrypted communications against historical network activity to identify new or unusual sessions.
- Validate certificates and destinations using organizational context and threat intelligence.
- Preserve flow records and packet captures before remediation begins.
- Treat unusual TLS metadata as an investigation lead rather than definitive evidence of malicious activity.
- Document investigation findings to support future threat hunting and incident response activities.

---

## Related Investigations

- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)
- [**Hunt Threats Across Historical Network Activity**](/playbook/securityplaybook/inv7-historical)