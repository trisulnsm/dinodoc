# Hunt Threats Across Historical Network Activity

## Investigation Overview

Not all security threats are detected when they first occur. New indicators of compromise (IOCs), emerging threat intelligence, forensic investigations, or recently disclosed vulnerabilities often require analysts to revisit previously captured network activity to determine whether malicious communications occurred before they were recognised.

Unlike alert-driven investigations, historical threat hunting begins with a hypothesis rather than a detection. Analysts search historical network telemetry, validate indicators against past communications, reconstruct attack timelines, and determine whether suspicious activity previously existed within the environment.

Using Trisul Network Security Monitoring, analysts can search historical flows, packet captures, communication metadata, and threat intelligence to identify previously undetected activity and understand the scope of a potential compromise.

---

## When to Use This Investigation

Use this investigation when you need to:

- Search historical network activity for indicators of compromise.
- Investigate newly disclosed vulnerabilities or threat intelligence.
- Determine whether compromised infrastructure communicated with your environment.
- Validate historical activity related to an ongoing investigation.
- Conduct proactive threat hunting across retained network telemetry.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Search historical network activity for indicators of compromise.
- Identify systems communicating with suspicious infrastructure.
- Determine when malicious activity first occurred.
- Assess the duration and scope of the activity.
- Correlate historical evidence with current investigations.
- Determine whether additional incident response activities are required.

---

## Investigation Workflow

### Step 1: Define the Hunt

Every historical investigation begins with a clear hunting objective. Before searching historical traffic, establish the indicator, hypothesis, or question that will guide the investigation.

Open **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Which indicator of compromise (IOC) is being investigated?
- What time period should be searched?
- Is the hunt based on threat intelligence, a vulnerability, or an existing investigation?
- Which hosts or network segments are within scope?
- What evidence is expected if the hypothesis is correct?

#### Evidence to Preserve

- Hunt objective.
- Indicators of compromise.
- Investigation timeframe.
- Search scope.
- Initial assumptions.

#### Continue the Investigation

Once the hunt has been defined, search historical network activity for matching communications.

---

### Step 2: Search Historical Network Activity

Historical searches determine whether the selected indicators have previously appeared within the monitored environment.

Continue using **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- Has the indicator appeared previously?
- Which hosts communicated with the identified infrastructure?
- When was the communication first observed?
- How frequently did the communication occur?
- Which applications or protocols were involved?

#### Evidence to Preserve

- Historical flow records.
- Matching indicators.
- Communication timeline.
- Applications involved.
- Protocols used.

#### Continue the Investigation

Once matching activity has been identified, determine which systems participated in the communication.

---

### Step 3: Identify the Affected Systems

Understanding which systems communicated with the identified indicators establishes the scope of the investigation.

Open **Flow Analysis** for the historical communications.

Use this investigation to answer questions such as:

- Which internal hosts communicated with the indicators?
- Which external destinations were involved?
- Were multiple hosts affected?
- Which applications generated the communication?
- Are critical systems involved?

#### Evidence to Preserve

- Source hosts.
- Destination hosts.
- Applications involved.
- Communication timeline.
- Affected assets.

#### Continue the Investigation

Once the affected systems have been identified, validate the communications using additional evidence.

---

### Step 4: Correlate Historical Evidence

Historical investigations become significantly stronger when multiple sources of evidence support the same conclusion.

Continue the investigation using **Packet Analysis**, **DNS Analysis**, **TLS Metadata**, **Threat Intelligence**, and **Security Alerts**.

Use this investigation to answer questions such as:

- Does packet evidence validate the communication?
- Were suspicious DNS queries observed?
- Does TLS metadata support the investigation?
- Does threat intelligence identify the infrastructure as malicious?
- Were previous alerts associated with the same activity?

#### Evidence to Preserve

- Packet captures.
- DNS activity.
- TLS metadata.
- Threat intelligence findings.
- Related alerts.

#### Continue the Investigation

Once the communications have been validated, reconstruct the sequence of events.

---

### Step 5: Reconstruct the Timeline

Historical investigations provide valuable context by showing how suspicious activity evolved over time.

Continue using **Historical Investigation (Retro)**.

Use this investigation to answer questions such as:

- When was the activity first observed?
- When did it last occur?
- Did the communication frequency change over time?
- Were additional systems affected later?
- Does the timeline indicate persistence or attacker progression?

#### Evidence to Preserve

- First observed timestamp.
- Last observed timestamp.
- Timeline of activity.
- Communication frequency.
- Additional affected systems.

#### Continue the Investigation

Once the timeline has been established, determine the overall scope of the historical activity.

---

### Step 6: Summarize the Investigation

By this stage, the investigation should have validated the hunting hypothesis, identified the affected systems, correlated supporting evidence, and reconstructed the historical timeline.

Open **Trisul AI** to review the investigation findings and summarize the collected evidence.

Use this investigation to answer questions such as:

- Did historical evidence validate the hunting hypothesis?
- Which systems were affected?
- When did the activity begin?
- Does the activity indicate an ongoing compromise?
- Should incident response procedures be initiated?

#### Evidence to Preserve

- Investigation summary.
- Historical timeline.
- Affected systems.
- Supporting evidence.
- Recommended response actions.

#### Investigation Outcome

At this stage, you should understand whether historical network activity supports the hunting hypothesis, identify the affected systems, establish the duration and scope of the activity, and determine whether further investigation or incident response is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The hunting objective has been validated.
- Historical communications have been identified.
- The affected systems have been determined.
- Supporting evidence has been correlated.
- The historical timeline has been reconstructed.
- The scope of the activity has been established.
- Appropriate response actions have been identified.

---

## Best Practices

- Begin every hunt with a clearly defined hypothesis or indicator.
- Search both historical flows and packet captures whenever available.
- Correlate historical communications with DNS activity, TLS metadata, threat intelligence, and previous investigations.
- Reconstruct the attack timeline before determining incident scope.
- Preserve historical evidence to support future forensic investigations.
- Document investigation findings to improve future threat hunting activities.

---

## Related Investigations

- [**Investigate Threat Intelligence Alerts**](/docs/playbook/securityplaybook/inv5-ti)
- [**Investigate Encrypted Traffic**](/docs/playbook/securityplaybook/inv6-encrypted)
- [**Investigate Command and Control (C2) Communications**](/docs/playbook/securityplaybook/inv4-c2)
- [**Investigate Potential Data Exfiltration**](/docs/playbook/securityplaybook/inv8-exfil)