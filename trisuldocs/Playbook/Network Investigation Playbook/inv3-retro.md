# Investigate Historical Network Activity

## Investigation Overview

Not every network issue is discovered while it is happening. Performance degradation, security incidents, application outages, and unusual traffic patterns are often identified hours, days, or even weeks after the event has occurred.

Historical investigations are reconstruction exercises rather than real-time troubleshooting. Engineers begin by defining the investigation window using Retro Analysis, identify the abnormal activity that distinguishes the incident from normal network behaviour, and then pivot into Explore Flows to investigate the network entities responsible for the observed changes. The collected evidence is then correlated to reconstruct the sequence of events and determine whether a specialised follow-up investigation is required.

Using Retro Analysis, engineers can revisit any point within the available retention period and investigate historical network activity using the same level of visibility available during live monitoring.

---

## When to Use This Investigation

Use this investigation when you need to:

- Investigate an incident discovered after it occurred.
- Analyze historical network performance issues.
- Review traffic during an application outage.
- Determine what happened during a reported security event.
- Compare network behaviour across different time periods.
- Reconstruct network activity for operational analysis.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Reconstruct network activity for a specific period.
- Establish a baseline for normal network behaviour.
- Identify the significant changes that occurred during the incident.
- Determine which systems contributed to those changes.
- Reconstruct the sequence of network events.
- Determine whether a specialised follow-up investigation is required.

---

## Investigation Workflow

### Step 1: Select the Investigation Time Window

Every historical investigation begins by defining the time period you want to analyse. A clearly defined investigation window reduces unnecessary analysis and allows you to focus only on the network activity surrounding the incident.

Open [**Retro Analysis**](/docs/ug/cg/retro#selecting-a-time-window) and navigate to the time period when the incident occurred.

This allows you to reconstruct the network exactly as it appeared during that period.

This step helps answer questions such as:

- When did the incident begin?
- When did normal operation resume?
- Were there maintenance activities or configuration changes during the same period?
- What time window should the investigation focus on?

#### Evidence to Collect

- Start and end time of the incident.
- Duration of the event.
- Relevant investigation window.
- Maintenance or operational events occurring during the same period.

#### Next Step

Once the investigation window has been established, compare the incident period with a representative period of normal network operation.

---

### Step 2: Identify Abnormal Network Activity

After selecting the investigation window, review the historical activity using **Retro Analysis**. Zoom into the period where the incident occurred and identify the abnormal behaviour that distinguishes the incident from normal network operation.

This step establishes the focus of the investigation before examining individual hosts, interfaces, applications, or conversations.

This step helps answer questions such as:

- When did the abnormal activity begin?
- What network behaviour changed during the selected period?
- Was the change sudden or gradual?
- Which metrics or visualisations indicate the incident?
- Which part of the investigation requires deeper analysis?

#### Evidence to Collect

- Time period containing the abnormal activity.
- Observable deviations from normal behaviour.
- Traffic spikes or drops.
- Changes requiring further investigation.

#### Continue the Investigation

Once the abnormal activity has been identified, pivot into **Explore Flows** to investigate the network entities responsible for the observed changes.

---

### Step 3: Investigate the Observed Changes

After identifying the abnormal activity, continue the investigation in **Explore Flows** using the selected historical time window. This allows you to investigate the network activity responsible for the observed changes while remaining focused on the reconstructed incident.

This step helps answer questions such as:

- Which network entities contributed to the observed changes?
- Which hosts, interfaces, conversations, or applications appear most significant?
- Which communication patterns changed during the incident?
- Which observations require deeper investigation?

#### Evidence to Collect

- Network entities contributing to the incident.
- Significant changes in communication behaviour.
- High-impact conversations.
- Network objects requiring further investigation.

#### Continue the Investigation

Once the contributing network entities have been identified, determine which applications explain the observed historical activity.

---

### Step 4: Analyze Historical Application Activity

Remain within **Explore Flows** and review the **Top Applications** for the selected historical time period.

Application visibility helps explain whether the observed changes were caused by expected operational activities, application failures, scheduled maintenance, bulk data transfers, or unexpected services.

This step helps answer questions such as:

- Which applications changed during the investigation period?
- Which applications contributed to the observed network activity?
- Did application behaviour differ from the established baseline?
- Do the observed applications explain the incident?

#### Evidence to Collect

- Applications contributing to the incident.
- Significant changes in application behaviour.
- Expected and unexpected application activity.
- Applications requiring further investigation.

#### Continue the Investigation

After identifying the applications involved, correlate the collected observations to reconstruct how the incident developed over time.

---

### Optional Validation: Review Aggregate Traffic

Most historical investigations can be completed using Explore Flows. Where additional validation is required, **Aggregate Flows** provides a summarized view of the investigated historical traffic.

Rather than introducing new evidence, Aggregate Flows groups the historical flow records by dimensions such as IP address, interface, application, port, router, and other network attributes. This helps confirm whether the observed historical activity is consistent across different analytical perspectives.

This step helps answer questions such as:

- Do the aggregate statistics support the reconstructed incident?
- Which network entities dominate the historical traffic?
- Are the observed changes concentrated within specific applications, interfaces, or hosts?
- Does the aggregate traffic profile reinforce the investigation findings?

#### Evidence to Collect

- Aggregate historical traffic distribution.
- Dominant network entities.
- Historical traffic concentrations.
- Aggregate evidence supporting the investigation.

#### Continue the Investigation

If additional protocol-level validation is required, continue with Packet Analysis using the selected historical flow records.

---

### Step 5: Validate with Packet Analysis

Where packet capture is available, continue directly from **Explore Flows** by downloading the PCAP for the selected historical flow records.

Packet-level analysis helps confirm protocol behaviour and validate conclusions drawn from the reconstructed historical activity.

This step helps answer questions such as:

- Does packet-level analysis support the reconstructed incident?
- Are protocol anomalies visible?
- Did application behaviour match the observed historical activity?
- Is additional evidence required before completing the investigation?

#### Evidence to Collect

- Packet-level evidence supporting the investigation.
- Protocol anomalies.
- Communication failures or retransmissions.
- Evidence confirming the reconstructed timeline.

#### Continue the Investigation

Correlate all collected evidence to reconstruct the incident timeline and determine whether a specialised follow-up investigation is required.

---

### Step 6: Build the Investigation Timeline and Determine Next Actions

Summarise the investigation into a chronological reconstruction describing:

- When the incident began.
- What changed.
- Which network entities were responsible.
- How the incident evolved.
- How the network recovered.
- What evidence supports the conclusions.

If the investigation identifies one or more network entities requiring deeper analysis, continue with the appropriate specialised investigation rather than repeating those investigative workflows within this document.

This step helps answer questions such as:

- What happened during the investigation period?
- Which network entities contributed to the incident?
- How did the incident evolve?
- What evidence supports the conclusions?
- Which specialised investigation should be performed next?

#### Evidence to Collect

- Chronological timeline of significant events.
- Network entities contributing to the incident.
- Supporting evidence for the reconstructed sequence.
- Correlated observations.
- Recommended follow-up investigations.

---

### Summarize the Investigation with Trisul AI

By this stage, the investigation should have reconstructed the incident timeline and collected the evidence required to explain how the incident evolved.

Open **Trisul AI** and review the investigation findings.

Use Trisul AI to generate a concise summary of the investigation, highlight the key observations, and assist with documenting the findings for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The investigation window has been clearly defined.
- A representative baseline has been established.
- Significant deviations from normal network behaviour have been identified.
- The systems responsible for the observed changes have been identified.
- The sequence of events has been reconstructed.
- A chronological timeline of the incident has been documented.
- Appropriate follow-up investigations have been identified where deeper analysis is required.

---

## Best Practices

- Clearly define the investigation period before reviewing historical data.
- Always establish a baseline before analysing the incident itself.
- Focus on identifying significant changes before attempting to determine their cause.
- Correlate traffic changes, communication patterns, application behaviour, user-reported symptoms, and recovery events to reconstruct the sequence of events.
- Use specialised Host, Interface, or Application investigations when deeper analysis of a specific entity becomes necessary.
- Preserve historical evidence to support post-incident reviews and future investigations.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](/playbook/Network%20Investigation%20Playbook/inv1-exploreflows) – Continue investigating hosts identified during the historical analysis.
- [**Investigate High Traffic on a Network Interface**](/playbook/Network%20Investigation%20Playbook/inv2-routersintfs) – Investigate interfaces that experienced sustained congestion during the incident.
- [**Investigate Threshold Crossing Alerts**](/playbook/Network%20Investigation%20Playbook/inv4-tca) – Determine whether recurring traffic spikes correspond to threshold violations.
- [**Correlate Network Activity Across Multiple Dimensions**](/playbook/Network%20Investigation%20Playbook/inv7-crosskey) – Reconstruct how multiple entities (hosts, applications, interfaces) related to one another during the incident window.