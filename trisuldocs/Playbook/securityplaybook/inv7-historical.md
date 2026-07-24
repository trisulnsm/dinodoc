# Conduct Historical Threat Hunting

## Investigation Overview

Not all security threats are detected in real time. Attackers may remain undetected for days, weeks, or even months before indicators of compromise (IOCs), new threat intelligence, or forensic investigations reveal their presence. Historical threat hunting enables analysts to revisit previously captured network activity to identify malicious communications that were not detected during initial monitoring.

Unlike alert-driven investigations, threat hunting is a proactive process. Analysts formulate hypotheses, search historical network telemetry, validate indicators, and correlate evidence to determine whether malicious activity occurred within the environment.

This investigation provides a structured methodology for conducting historical threat hunts using network traffic, flow records, packet captures, threat intelligence, and behavioral evidence.

---

## Symptoms

This investigation may be appropriate if you observe one or more of the following:

- A new indicator of compromise (IOC) is received.
- A recently disclosed vulnerability affects your environment.
- A compromised host has been identified.
- Threat intelligence identifies newly discovered attacker infrastructure.
- Security teams are conducting routine threat hunting exercises.
- An earlier investigation requires additional historical context.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Search historical network activity for indicators of compromise.
- Identify systems communicating with malicious infrastructure.
- Determine when suspicious activity first occurred.
- Assess the duration and scope of the activity.
- Correlate historical evidence with current investigations.
- Determine whether additional incident response activities are required.

---

## Investigation Methodology

### Step 1: Define the Hunt

Begin by establishing the objective of the investigation.

Determine:

- Which indicator or hypothesis is being investigated.
- The time period to examine.
- The affected systems or network segments.
- The expected outcome of the hunt.

A clearly defined objective ensures the investigation remains focused.

---

### Step 2: Search Historical Network Activity

Search historical network telemetry for the selected indicators.

Review:

- IP addresses.
- Domain names.
- URLs.
- JA3 fingerprints.
- TLS metadata.
- Flow records.
- Packet captures.

The objective is to determine whether the indicators have previously appeared within the environment.

---

### Step 3: Identify Affected Systems

Determine which hosts communicated with the identified indicators.

Review:

- Internal systems.
- External destinations.
- Users.
- Applications.
- Communication timelines.

This establishes the scope of the investigation.

---

### Step 4: Correlate Historical Evidence

Review additional evidence associated with the identified communications.

Where available, examine:

- Flow records.
- Packet captures.
- DNS activity.
- TLS metadata.
- Threat intelligence.
- Previous alerts.
- Related investigations.

Correlating multiple sources of evidence provides greater confidence in the investigation findings.

---

### Step 5: Reconstruct the Timeline

Determine how the activity evolved over time.

Review:

- First observed communication.
- Last observed communication.
- Frequency of activity.
- Changes in communication behavior.
- Additional affected hosts.

Reconstructing the timeline helps determine the progression of the activity.

---

### Step 6: Determine the Scope and Impact

Based on the collected evidence, determine:

- Whether malicious activity occurred.
- Whether the threat remains active.
- Which systems were affected.
- Whether additional containment or forensic analysis is required.

Document the investigation findings and preserve evidence for future incident response activities.

---

## Applying this Investigation Using a Network Security Monitoring Platform

Historical threat hunting often requires analysts to search packet captures, flow records, DNS activity, TLS metadata, threat intelligence, and previous alerts across multiple security tools. Reconstructing attack timelines manually can be time-consuming, particularly when investigations span weeks or months of network activity.

Network Security Monitoring (NSM) platforms simplify historical investigations by consolidating historical network telemetry, packet evidence, behavioral analytics, and threat intelligence into a unified investigative workflow.

For this investigation, **Trisul Network Security Monitoring** enables analysts to:

### Search Historical Traffic

Search historical packet captures, network flows, and communication metadata using indicators such as:

- IP addresses
- Domains
- Applications
- JA3 fingerprints
- TLS metadata

> **Screenshot Placeholder:** Historical Search

---

### Investigate Historical Flows

Review historical network flows to identify:

- Communication timelines
- Session history
- Traffic volumes
- Related hosts

> **Screenshot Placeholder:** Retro Dashboard

---

### Examine Historical Packet Evidence

Retrieve packet captures associated with historical communications to validate network activity and reconstruct attacker behavior.

> **Screenshot Placeholder:** Packet Investigation

---

### Correlate Historical Intelligence

Compare historical traffic with threat intelligence, behavioral detections, previous alerts, and related investigations to determine whether malicious activity was previously overlooked.

> **Screenshot Placeholder:** Correlated Investigation

---

### Accelerate Threat Hunting with AI

AI-assisted investigation can summarize historical communications, identify recurring patterns, and assist analysts in prioritizing evidence requiring deeper investigation.

> **Screenshot Placeholder:** AI Investigation

---

By combining historical packet capture, flow analytics, communication metadata, threat intelligence, and AI-assisted investigation within a single platform, Trisul enables analysts to conduct efficient historical threat hunting without manually correlating evidence across multiple security tools.

---

## Investigation Findings

The following observations may help determine the next stage of the investigation.

| Observation | Possible Interpretation |
|-------------|-------------------------|
| Historical communications match known indicators of compromise | Investigate the affected systems and initiate incident response if necessary. |
| Activity predates the initial alert | Expand the investigation timeline to understand the full scope of the compromise. |
| Multiple hosts communicated with the same infrastructure | Investigate for widespread compromise. |
| Historical packet evidence validates suspicious communications | High-confidence indication requiring further investigation. |
| No historical evidence found | Continue monitoring and validate the indicators against current network activity. |
| Similar historical behavior observed across multiple time periods | Investigate persistence or recurring attacker activity. |

---

## Best Practices

- Begin every hunt with a clearly defined hypothesis or indicator.
- Search both flow records and packet captures whenever available.
- Correlate historical communications with threat intelligence and previous investigations.
- Reconstruct timelines before determining incident scope.
- Preserve historical evidence to support future forensic and incident response activities.

---

## Related Investigations

- If historical communications involve known malicious infrastructure, continue with **Investigate Threat Intelligence Alerts**.
- If recurring encrypted sessions are identified, continue with **Investigate Encrypted Traffic**.
- If historical communications indicate periodic beaconing, continue with **Investigate Command and Control (C2) Communications**.
- If historical traffic reveals suspicious outbound transfers, continue with **Investigate Potential Data Exfiltration**.