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
- Determine when the observed activity first occurred.
- Assess the duration and scope of the activity.
- Correlate historical evidence with current investigations.
- Determine whether additional incident response activities are required.

---

## Investigation Workflow

### Step 1: Define the Hunt

Historical threat hunting begins with a hypothesis rather than an alert. Before searching historical network activity, clearly define the objective of the hunt, the indicators being investigated, and the timeframe to be examined.

Open [**Historical Investigation (Retro)**](/docs/ug/cg/retro).

Use this investigation to answer questions such as:

- Which indicator of compromise (IOC) is being investigated?
- Is the hunt based on new threat intelligence, a recently disclosed vulnerability, or an ongoing investigation?
- What time period should be searched?
- Which hosts, network segments, or applications are within scope?
- What evidence would validate the hunting hypothesis?

A clearly defined hunting objective helps focus the investigation and reduces unnecessary analysis across historical telemetry.

#### Evidence to Preserve

- Hunt objective.
- Indicators of compromise.
- Investigation timeframe.
- Search scope.
- Initial hypothesis.

#### Continue the Investigation

Once the hunt has been defined, search historical network activity for evidence supporting the hypothesis.

---

### Step 2: Search Historical Network Activity

Search historical network telemetry to determine whether the selected indicators previously appeared within the monitored environment.

Continue using [**Historical Investigation (Retro)**](/docs/ug/cg/retro#selecting-a-time-window).

Review the historical data to determine:

- Whether the indicator has been observed previously.
- Which systems communicated with the identified infrastructure.
- When the communication was first and last observed.
- How frequently the communication occurred.
- Which applications, protocols, or services were involved.

This step determines whether historical evidence exists to support the hunting hypothesis.

#### Evidence to Preserve

- Historical flow records.
- Matching indicators.
- Communication timeline.
- Applications involved.
- Protocols used.

#### Continue the Investigation

Once historical matches have been identified, validate the communications using additional sources of evidence.

---

### Step 3: Validate the Historical Activity

Historical matches should be validated using multiple sources of evidence before concluding that malicious activity occurred.

Continue the investigation using [**DNS Analysis**](/docs/ug/resources/dns/), [**TLS Metadata**](/docs/ug/cg/ssl),and [**Security Alerts**](/docs/ug/alerts/mw) and  [**Packet Analysis**](/docs/ug/cg/retrotools#pull-packets) where packet capture is available.

Use this investigation to answer questions such as:

- Does packet evidence validate the communication?
- Were suspicious DNS queries associated with the activity?
- Does TLS metadata support the investigation?
- Were previous alerts associated with the same communication?

Correlating multiple evidence sources helps distinguish genuine malicious activity from benign historical communications.

#### Evidence to Preserve

- Packet captures.
- DNS activity.
- TLS metadata.
- Threat intelligence findings.
- Related alerts.

#### Continue the Investigation

Once the activity has been validated, determine the scope of the historical network activity .

---

### Step 4: Assess the Scope of the Activity

After validating the historical communications, determine how widely the identified activity affected the environment.

Review the investigation findings to determine:

- Which internal hosts communicated with the identified infrastructure.
- Whether multiple systems were affected.
- Which business services or applications were involved.
- Whether the activity spread over time.
- Whether additional indicators are associated with the same infrastructure.

Understanding the scope helps determine whether the activity represents an isolated communication or a broader compromise.

#### Evidence to Preserve

- Affected hosts.
- Destination infrastructure.
- Applications involved.
- Scope of the activity.
- Related indicators.

#### Continue the Investigation

Once the scope has been established, reconstruct the sequence of historical events.

---

### Step 5: Reconstruct the Timeline

Historical investigations provide valuable context by reconstructing how suspicious activity evolved over time.

Continue using [**Historical Investigation (Retro)**](/docs/ug/cg/retro).

Use this investigation to answer questions such as:

- When was the activity first observed?
- When did it last occur?
- Did communication frequency change over time?
- Were additional systems affected later?
- Does the timeline indicate persistence or attacker progression?

Reconstructing the timeline helps determine the duration of the activity and supports subsequent incident response or forensic investigations.

#### Evidence to Preserve

- First observed timestamp.
- Last observed timestamp.
- Timeline of activity.
- Communication frequency.
- Additional affected systems.

#### Continue the Investigation

Once the historical timeline has been established, summarize the investigation findings and determine the appropriate response.

---

### Step 6: Summarize the Investigation with Trisul AI

Once the investigation is complete, open **Trisul AI** to review the investigation findings.

Trisul AI can generate a concise summary of the investigation, highlight the key observations, explain how the collected evidence supports the findings, and assist with documenting the investigation for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The hunting hypothesis has been evaluated.
- Historical network activities have been identified and validated.
- Supporting evidence has been correlated.
- The scope of the activity has been established.
- The historical timeline has been reconstructed.
- Appropriate operational or incident response actions have been identified.

---

## Best Practices

- Begin every hunt with a clearly defined hypothesis or indicator.
- Validate historical findings using multiple sources of evidence before drawing conclusions.
- Correlate historical communications with DNS activity, TLS metadata, threat intelligence, packet evidence, and previous alerts.
- Reconstruct the attack timeline before determining the scope of the activity.
- Preserve historical evidence to support future forensic investigations.
- Document investigation findings to improve future threat hunting activities.

---

## Related Investigations

- [**Investigate Threat Intelligence Alerts**](/docs/playbook/securityplaybook/inv5-ti)
- [**Investigate Encrypted Traffic**](/docs/playbook/securityplaybook/inv6-encrypted)
- [**Investigate Command and Control (C2) Communications**](/docs/playbook/securityplaybook/inv4-c2)
- [**Investigate Potential Data Exfiltration**](/docs/playbook/securityplaybook/inv8-exfil)