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

### Step 1: Identify Hosts Generating Encrypted Traffic

Every encrypted traffic investigation begins by identifying the systems responsible for establishing encrypted communications. Before examining TLS metadata, determine which hosts are communicating externally and whether the observed activity is consistent with their expected role.

In **Trisul Retro**, navigate to:

**Retro Counters → Retro Usage → Hosts → Transmit**

The **Transmit** view ranks hosts by the volume of outbound traffic during the selected investigation period. Review the outbound hosts and identify systems that warrant further investigation.

![](./images/outboundtoppers.png)

*Figure: Outbound Toppers*

Look for hosts that:

- Generate significant encrypted outbound traffic.
- Communicate with unfamiliar external destinations.
- Appear unexpectedly among the top transmitting hosts.
- Exhibit communication patterns inconsistent with their normal role.

These hosts can then be examined in greater detail by reviewing their conversations, flow records, and TLS metadata.

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

After identifying a host generating encrypted traffic, examine the external systems it is communicating with. Understanding the destination infrastructure helps determine whether the encrypted communication is associated with legitimate business services or requires further investigation.

From the **Transmit** view, click the **Actions** menu for the selected host and choose **Host Conversations**.

The **Host Conversations** view displays all inbound and outbound communications for the selected host during the investigation period, allowing analysts to identify every external system involved in the encrypted communication.

Review the conversations to determine:

- Which external IP addresses are being contacted.
- Whether multiple encrypted sessions are established with the same destination.
- Which destinations are expected within the organization's environment.
- Whether the communication pattern appears unusual.

If available, review additional context such as:

- Associated domain names.
- Autonomous System Number (ASN).
- Country or geographical location.
- Threat intelligence reputation.

This analysis provides valuable context before examining the encrypted session itself.

#### Evidence to Preserve

- Destination IP addresses.
- Domain names.
- ASN information.
- Geographic location.
- Threat intelligence findings.

#### Continue the Investigation

Once the destination has been validated, examine the encrypted session in greater detail by reviewing the network flow and TLS metadata.

---

### Step 3: Analyze the Encrypted Session

Flow records and TLS metadata provide valuable insight into encrypted communications without requiring payload decryption. Together, they help analysts determine whether the encrypted session is consistent with legitimate application behaviour or warrants additional investigation.

From the **Host Conversations** view, click the **Actions** menu for the selected conversation and choose **Flow Details**.

The **Flow Details** view provides detailed information about the communication, including timestamps, session duration, protocols, applications, ports, and the volume of data exchanged.

Review the flow details to determine:

- Which application initiated the encrypted session.
- The ports and protocols involved.
- Session duration and data transferred.
- Whether the communication pattern appears consistent throughout the investigation period.

If the communication uses TLS, open **TLS Metadata** for the selected communication.

Review the available metadata to determine:

- Which TLS version is being used.
- What Server Name Indication (SNI) is presented.
- Which JA3 and JA3S fingerprints are observed.
- Whether the certificate appears legitimate.
- Whether the encrypted session matches known application behaviour.

![](./images/flowdetails.png)

*Figure: Flow Details*

#### Evidence to Preserve

- Flow timeline.
- Session duration.
- Data transferred.
- TLS version.
- JA3 and JA3S fingerprints.
- Certificate metadata.

#### Continue the Investigation

After reviewing the encrypted session, validate the findings using additional network evidence.

---

### Step 4: Correlate Supporting Evidence

TLS metadata alone rarely provides sufficient evidence to determine whether encrypted traffic is malicious. Correlating DNS activity, packet captures, historical communications, and threat intelligence provides greater confidence than relying on a single indicator.

Continue the investigation using **DNS Analysis**, **Packet Analysis**, and **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Do DNS queries support the observed encrypted communication?
- Does packet analysis validate the protocol behaviour?
- Has the destination been contacted previously?
- Have additional hosts communicated with the same destination?
- Does the historical activity align with normal network behaviour?

#### Evidence to Preserve

- DNS activity.
- Packet captures.
- Historical communications.
- Threat intelligence findings.
- Additional affected hosts.

#### Continue the Investigation

Once the encrypted communication has been validated, determine whether the observed behaviour represents legitimate business activity or a potential security threat.

---

### Step 5: Summarize the Investigation

By this stage, the investigation should have identified the communicating host, validated the external destination, analysed the network flow, reviewed the TLS metadata, and correlated supporting network evidence.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- Does the encrypted communication appear legitimate?
- Which hosts are involved?
- Does the encrypted session require further investigation?
- Are additional systems affected?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Affected hosts.
- TLS metadata.
- Flow and packet evidence.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand whether the encrypted communication represents legitimate application traffic or a potential security threat, identify the affected systems, assess the scope of the activity, and determine whether additional investigation or incident response is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The communicating host has been identified.
- The external destination has been validated.
- The network flow and TLS metadata have been analyzed.
- Supporting evidence has been correlated.
- The legitimacy of the encrypted communication has been determined.
- The scope of the activity has been established.
- Appropriate incident response or engineering actions have been identified.

---

## Best Practices

- Investigate encrypted communications using metadata rather than relying solely on payload inspection.
- Correlate TLS metadata with flow records, DNS activity, and packet evidence before reaching a conclusion.
- Compare encrypted communications against historical network behavior to identify new or unusual activity.
- Validate external destinations using threat intelligence and organizational context.
- Preserve flow records and packet captures before remediation begins.
- Treat unusual JA3 fingerprints and certificates as investigation leads rather than definitive indicators of malicious activity.
- Document the investigation findings to support future incident response and threat hunting activities.

---

## Related Investigations

- [**Investigate Command and Control (C2) Communications**](/playbook/securityplaybook/inv2-commandcontrol)
- [**Investigate Potential Data Exfiltration**](/playbook/securityplaybook/inv1-exfiltration)
- [**Investigate Threat Intelligence Alerts**](/playbook/securityplaybook/inv6-secalerts)
- [**Hunt Threats Across Historical Network Activity**](/playbook/securityplaybook/inv7-historical)