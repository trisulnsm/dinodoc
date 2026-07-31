# Monitor Critical Network Assets

## Investigation Overview

Some network assets are more critical than others. Core routers, firewalls, WAN gateways, business-critical servers, and key applications support essential network operations, making changes in their behavior more significant than similar changes elsewhere in the network.

Rather than attempting to monitor every device equally, network teams focus on assets whose performance, availability, and communication behavior have the greatest operational impact. A Critical Asset Investigation begins by identifying a critical asset requiring attention and progressively determines what changed, which entities contributed to the observed change, whether the change affected operations, whether it represents expected behavior, and whether additional investigation is required.

Using Trisul, engineers can continuously monitor critical assets and quickly investigate operational changes without manually reviewing multiple dashboards.

---

## When to Use This Investigation

Use this investigation when you need to:

- Continuously monitor business-critical network devices.
- Track the operational status of important servers or applications.
- Detect unexpected changes affecting critical infrastructure.
- Prioritize monitoring of high-value network assets.
- Investigate changes affecting critical assets.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the critical asset requiring attention.
- Determine what changed on the critical asset.
- Identify the entities responsible for the observed change.
- Assess the operational impact of the change.
- Determine whether the observed behavior is expected.
- Determine whether additional investigation is required.

---

# Investigation Workflow

## Step 1: Review the Critical Asset

Every investigation begins by identifying the critical asset requiring attention. Before investigating traffic, applications, or communication patterns, establish which critical asset has changed, understand its operational role, and determine whether additional critical assets are exhibiting similar behavior.

Open [**Custom Key Monitor**](/docs/ug/cg/ckey) to review your monitored critical assets.

Use this dashboard to answer questions such as:

- Which critical asset requires investigation?
- What type of network object is being monitored?
- Is the observed change ongoing or has it already returned to normal?
- Are multiple critical assets exhibiting similar behavior?

#### Evidence to Collect

- Critical asset requiring investigation.
- Type of monitored network object.
- Current operational status.
- Time the change was observed.
- Other critical assets showing similar behavior.

#### Next Step

Once the affected critical asset has been identified, determine what operational characteristic has changed.

---

## Step 2: Determine What Changed

Understanding that a critical asset has changed is only the beginning of the investigation. The next objective is identifying which operational characteristic differs from normal behavior before attempting to explain why the change occurred.

Review the monitored metrics for the selected critical asset.

Use this view to answer questions such as:

- Has traffic increased or decreased?
- Has application usage changed?
- Have communication patterns changed?
- Have new communication partners appeared?
- Is the observed behavior sustained or temporary?

#### Evidence to Collect

- Changes in traffic volume.
- Changes in application usage.
- New communication partners.
- Variations in communication behavior.
- Sustained or temporary operational changes.

#### Next Step

Once the nature of the operational change has been established, identify the entities responsible for generating the observed change.

---

## Step 3: Investigate the Observed Change

After identifying what changed on the critical asset, continue the investigation in [**Explore Flows**](/docs/ug/tools/explore_flows) using the monitored asset and investigation period.

This allows you to investigate the detailed network activity associated with the critical asset while remaining focused on the observed operational change. Rather than assuming the cause, investigate the communication activity to identify the network entities contributing to the observed behavior.

This step helps answer questions such as:

- Which network entities contributed to the observed change?
- Which hosts, conversations, or communication partners interacted with the critical asset?
- Which communication patterns changed during the investigation period?
- Which observations appear most significant?
- Which entities require deeper investigation?

#### Evidence to Collect

- Network entities contributing to the observed change.
- Significant communication patterns.
- High-volume conversations.
- New or unexpected communication partners.
- Network objects requiring further investigation.

#### Continue the Investigation

Once the contributing network entities have been identified, determine which applications explain the observed behavior.

---

## Step 4: Analyze Application Activity

Remain within [**Explore Flows**](/docs/ug/tools/explore_flows) and review the [**Top Applications**](/docs/ug/tools/explore_flows#top-applications) for the investigation period.

Application visibility helps determine whether the observed change resulted from expected operational activity, software deployments, backup or replication jobs, changing business demand, infrastructure changes, or unexpected application behavior.

![](./images/appusage-ef.png)

*Figure: Application Analysis*

This step helps answer questions such as:

- Which applications contributed to the observed change?
- Did application behavior change during the investigation period?
- Were the observed applications expected?
- Do the applications explain the operational change?
- Are unexpected services or protocols present?

#### Evidence to Collect

- Applications contributing to the observed change.
- Significant application activity.
- Expected operational traffic.
- Unexpected applications or protocols.
- Applications requiring further investigation.

#### Continue the Investigation

After identifying the applications involved, review the aggregate traffic profile to validate the investigation findings.

---

## Optional Validation: Review Aggregate Traffic

Most Critical Asset investigations can be completed using Explore Flows. Where additional validation is required, [**Aggregate Flows**](/docs/ug/tools/aggregate_flows) provides a summarized view of the investigated traffic.

Rather than introducing new evidence, Aggregate Flows groups the flow records by dimensions such as IP address, interface, application, port, router, and other network attributes. This helps confirm whether the observed operational change is concentrated within the monitored asset or influenced by multiple network entities.

This step helps answer questions such as:

- Do the aggregate statistics support the investigation findings?
- Which network entities dominate the observed traffic?
- Is the operational change concentrated within specific hosts, applications, or communication partners?
- Does the aggregate traffic profile reinforce the investigation findings?

#### Evidence to Collect

- Aggregate traffic distribution.
- Dominant network entities.
- Traffic concentrations.
- Aggregate evidence supporting the investigation.

#### Continue the Investigation

If packet capture is available, continue with Packet Analysis to validate the observed network behavior.

## Step 5: Validate with Packet Analysis

Where packet capture is available, continue directly from **Explore Flows** by downloading the PCAP for the selected flow records.

Packet-level analysis helps validate the conclusions drawn from the flow investigation and provides protocol-level evidence explaining the observed operational change.

This step helps answer questions such as:

- Does packet-level analysis support the investigation findings?
- Are protocol anomalies visible?
- Does the packet data explain the observed behavior?
- Is additional evidence required before completing the investigation?

#### Evidence to Collect

- Packet-level evidence supporting the investigation.
- Protocol anomalies.
- Communication failures or retransmissions.
- Evidence validating the observed change.

#### Continue the Investigation

Once the network activity has been validated, determine whether the observed change had any measurable operational impact.

---

## Step 6: Assess the Operational Impact

After understanding the network activity responsible for the observed change, determine whether it had any measurable impact on network operations or business services.

Some changes affecting critical assets represent routine operational events, while others indicate degraded performance, application failures, service disruption, resource exhaustion, or emerging security concerns.

This step helps answer questions such as:

- Were business services affected?
- Did users experience degraded performance?
- Was application availability impacted?
- Did the issue remain isolated to the monitored asset?
- Did the impact extend to other systems or services?

#### Evidence to Collect

- Service degradation.
- User-reported issues.
- Application availability.
- Network performance changes.
- Scope of the operational impact.

#### Continue the Investigation

Once the operational impact has been assessed, determine whether the observed behavior represents expected operational activity.

---

## Step 7: Determine Whether the Change Was Expected

Not every operational change affecting a critical asset indicates a problem. Many changes are the result of legitimate operational activities such as scheduled maintenance, infrastructure upgrades, software deployments, backup or replication jobs, or changing business demand.

Review the investigation findings alongside known operational activities to determine whether the observed behavior represents an expected operational change or an unexpected event requiring additional investigation.

This step helps answer questions such as:

- Can the observed change be explained by planned operational activity?
- Were maintenance activities or software deployments in progress?
- Were backup or replication jobs running?
- Have infrastructure or configuration changes recently occurred?
- Does the observed behavior align with normal business operations?
- Does the change remain unexplained?

#### Evidence to Collect

- Scheduled maintenance activities.
- Software deployment events.
- Infrastructure or configuration changes.
- Backup or replication activity.
- Business events explaining the change.
- Evidence supporting expected or unexpected behavior.

#### Continue the Investigation

Once it has been determined whether the behavior is expected, identify the most appropriate follow-up investigation or operational action.

---

## Step 8: Determine the Appropriate Follow-up Investigation

Review the investigation findings as a whole to determine whether the observed change has been fully explained or whether additional investigation is required.

The objective of this step is to decide whether continued monitoring, operational action, or a specialized investigation is necessary.

This step helps answer questions such as:

- Can the observed change be fully explained?
- Is continued monitoring required?
- Is no further action required?
- Should the investigation continue with a Host Investigation?
- Is an Interface Investigation required?
- Would Historical Investigation provide additional context?
- Would a Behavioral Investigation help determine whether this change forms part of a broader pattern?
- Is Packet Analysis required?
- Does the issue require operational or security escalation?

#### Evidence to Collect

- Confirmed explanation for the operational change.
- Responsible network entities.
- Evidence supporting expected or unexpected behavior.
- Recommended follow-up investigation.
- Monitoring or escalation recommendations.

--

### Summarize the Investigation with Trisul AI

By this stage, the investigation should have established what changed on the critical asset and collected the evidence required to explain the observed behavior.

Open **Trisul AI** and review the investigation findings.

Use Trisul AI to generate a concise summary of the investigation, highlight the key observations, and assist with documenting the findings for operational review, incident reporting, or future reference.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The critical asset has been identified.
- The operational change has been characterized.
- The entities responsible for the observed change have been identified.
- The operational impact has been assessed.
- The observed behavior has been determined to be expected or unexpected.
- The appropriate follow-up investigation has been identified.

---

## Best Practices

- Monitor assets based on business criticality rather than quantity.
- Investigate the observed change before investigating individual systems in detail.
- Keep the critical asset at the center of the investigation throughout the workflow.
- Use hosts, applications, and communication analysis only as evidence explaining the observed change.
- Determine whether the observed change is expected before escalating the investigation.
- Periodically review monitored critical assets as the network evolves.
- Continue with specialised investigations when deeper analysis of a specific host, interface, application, or communication pattern becomes necessary.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- [**Investigate Historical Network Activity**](./inv3-retro.md)
- [**Investigate Threshold Crossing Alerts**](./inv4-tca.md) – Check whether the critical asset's change corresponds to a triggered threshold alert.
- [**Investigate Network Behavior Anomalies**](./inv5-tba.md)
- [**Correlate Network Activity Across Multiple Dimensions**](./inv7-crosskey.md) – Analyse the critical asset alongside application, interface, or site dimensions for a fuller picture.
