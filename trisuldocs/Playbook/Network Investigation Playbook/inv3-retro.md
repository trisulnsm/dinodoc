# Investigate Historical Network Activity

## Investigation Overview

Not every network issue is discovered while it is happening. Performance degradation, security incidents, application outages, and unusual traffic patterns are often identified hours, days, or even weeks after the event has occurred.

When investigating an incident retrospectively, the challenge is to reconstruct how the network behaved during the affected period. Rather than relying on fragmented logs or isolated observations, engineers need to understand how traffic evolved over time, which systems participated in the event, how applications behaved, and whether the observed activity differed from normal operations.

Using Trisul Retro, engineers can revisit any point within the available retention period and investigate historical network activity using the same level of visibility available during live monitoring.

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
- Identify the systems involved in the incident.
- Understand changes in traffic patterns.
- Identify unusual bandwidth consumption.
- Establish a timeline of network events.
- Determine whether additional investigation is required.

---

## Investigation Workflow

### Step 1: Select the Investigation Time Window

Every historical investigation begins by defining the time period you want to analyse. A clearly defined investigation window reduces unnecessary analysis and allows you to focus only on the network activity surrounding the incident.

Open [**Trisul Retro**](/docs/ug/cg/retro#selecting-a-time-window) and navigate to the time period when the incident occurred.

This allows you to reconstruct the network exactly as it appeared during that period.

This view helps answer questions such as:

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

Once the investigation window has been established, compare the incident period with normal network behaviour.

---

### Step 2: Compare Against Normal Behaviour

Historical analysis is most effective when current observations are compared with a known baseline. Understanding what "normal" looks like helps distinguish operational changes from genuine anomalies.

Within [**Trisul Retro**](/docs/ug/cg/retro#running-an-analysis-tool), compare the selected period with previous time windows representing normal network activity.

This comparison helps answer questions such as:

- Was bandwidth utilisation unusually high?
- Were the same applications active during normal operation?
- Were communication patterns significantly different?
- Has similar activity occurred previously?

#### Evidence to Collect

- Typical bandwidth utilisation.
- Normal application usage.
- Common communication patterns.
- Historical traffic trends.
- Significant deviations from baseline.

#### Next Step

After establishing the baseline, examine how network activity changed during the incident.

---

### Step 3: Analyze Network Activity

With the investigation window established, review how network activity evolved throughout the incident.

Use the historical dashboards in [**Trisul Retro**](/docs/ug/cg/retro#running-an-analysis-tool) to identify changes in bandwidth utilisation, application activity, and communication behaviour.

This view helps answer questions such as:

- When did traffic begin changing?
- Were there sudden spikes or gradual increases?
- Which applications generated the traffic?
- Were unusual protocols observed?
- Did large data transfers occur?

#### Evidence to Collect

- Traffic spikes.
- Significant bandwidth changes.
- Application usage during the incident.
- Large data transfers.
- Unusual communication activity.

#### Next Step

Once the overall behaviour is understood, identify the systems responsible for the observed activity.

---

### Step 4: Identify the Systems Involved

After understanding how network behaviour changed, determine which hosts contributed to the observed activity.

Review the historical [**Top Hosts**, **Top Conversations**, and **Top Applications**](/docs/ug/cg/retrotools#investigate-ip-activity) within the selected investigation period.

This helps answer questions such as:

- Which hosts generated the most traffic?
- Which systems communicated most frequently?
- Did any new communication pairs appear?
- Which systems behaved differently from their normal operating patterns?


#### Evidence to Collect

- High bandwidth hosts.
- Frequently communicating systems.
- Unexpected communication pairs.
- Hosts exhibiting unusual behaviour.

#### Next Step

Once the participating systems have been identified, correlate the findings to understand how the incident developed.

---

### Step 5: Correlate the Investigation Findings

Network incidents are rarely explained by a single observation. Reviewing the findings together often reveals relationships that are not immediately obvious when examining bandwidth, hosts, or applications individually.

Correlate the historical observations collected throughout the investigation.

This helps answer questions such as:

- Did increased bandwidth coincide with application issues?
- Did communication patterns change before users reported the problem?
- Were multiple systems affected simultaneously?
- Did traffic return to normal after the incident?

#### Evidence to Collect

- Relationships between events.
- Changes occurring before the incident.
- Simultaneous changes across multiple systems.
- Recovery patterns after the incident.

#### Next Step

Summarise the findings into a chronological timeline to support future troubleshooting or post-incident reviews.

---

### Step 6: Build the Investigation Timeline

The final step is documenting the sequence of events that occurred during the investigation period.

Summarise the significant observations collected throughout the workflow to create a clear timeline of the incident.

This timeline helps answer questions such as:

- What happened first?
- Which systems were involved?
- How did network behaviour change?
- What evidence supports the conclusions?
- What follow-up actions are recommended?

#### Evidence to Collect

- Timeline of significant events.
- Systems involved.
- Changes in traffic behaviour.
- Contributing factors.
- Final investigation conclusions.

#### Investigation Outcome

At this stage, you should have reconstructed the sequence of network events, identified the systems involved, explained the observed behaviour, and determined whether additional operational or security investigation is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The investigation window has been clearly defined.
- Historical activity has been compared with normal network behaviour.
- Changes in traffic patterns have been identified.
- The systems responsible for the observed activity have been determined.
- Significant observations have been correlated.
- A complete timeline of the incident has been established.
- Appropriate operational or engineering actions have been determined.

---

## Best Practices

- Clearly define the investigation period before reviewing historical data.
- Always compare incident activity with a known baseline.
- Analyse trends rather than isolated metrics.
- Correlate observations across hosts, applications, and bandwidth utilisation.
- Document findings chronologically to simplify future investigations.
- Preserve historical evidence before making configuration or infrastructure changes.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](/playbook/Network%20Investigation%20Playbook/inv1-exploreflows) – Continue investigating hosts identified during the historical analysis.
- [**Investigate High Traffic on a Network Interface**](/playbook/Network%20Investigation%20Playbook/inv2-routersintfs) – Investigate interfaces that experienced sustained congestion during the incident.
- [**Investigate Threshold Crossing Alerts**](/playbook/Network%20Investigation%20Playbook/inv4-tca) – Determine whether recurring traffic spikes correspond to threshold violations.