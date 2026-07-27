# Monitor Critical Network Assets

## Investigation Overview

Some network assets are more critical than others. Core routers, firewalls, WAN gateways, business-critical servers, and key applications support essential network operations, making changes in their behavior more significant than similar changes elsewhere in the network.

Rather than attempting to monitor every device equally, network teams focus on assets whose performance, availability, and communication behavior have the greatest operational impact. The objective is to identify unexpected changes affecting these assets, determine what caused them, assess their operational impact, and decide whether further investigation is required.

Using Trisul, engineers can continuously monitor critical network assets and quickly investigate changes without manually reviewing multiple dashboards.

---

## When to Use This Investigation

Use this investigation when you need to:

- Continuously monitor business-critical network devices.
- Track the operational status of important servers or applications.
- Detect unexpected changes affecting critical infrastructure.
- Prioritize monitoring of high-value network assets.
- Investigate changes involving monitored network resources.

---

## Investigation Objectives

By completing this investigation, you should be able to:

- Identify the critical asset requiring attention.
- Determine what operational characteristic has changed.
- Assess the impact of the observed change.
- Identify the systems or traffic contributing to the change.
- Decide whether further investigation or corrective action is required.

---

## Investigation Workflow

### Step 1: Review the Critical Asset

Every investigation begins by identifying the monitored asset requiring attention. Before investigating traffic or applications, establish which critical network resource has changed and understand its role within the network.

Open [**Custom Key Monitor**](/docs/ug/cg/ckey) to review your monitored assets.

Use this dashboard to answer questions such as:

- Which critical asset requires investigation?
- What type of network object is being monitored?
- Is the observed change ongoing or has it already returned to normal?
- Are multiple monitored assets exhibiting similar behavior?

#### Evidence to Collect

- Monitored asset requiring investigation.
- Type of monitored network object.
- Current operational status.
- Time the change was observed.
- Other monitored assets showing similar behavior.

#### Continue the Investigation

Once the affected asset has been identified, determine what operational characteristic has changed.

---

### Step 2: Determine What Changed

Understanding that an asset has changed is only the beginning of the investigation. The next objective is identifying which operational characteristic deviated from expected behavior.

Review the monitored metrics for the selected asset.

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

#### Continue the Investigation

Once the nature of the change has been established, determine whether the observed behavior is affecting network operations or business services.

---

### Step 3: Assess the Operational Impact

Changes affecting critical assets often have wider operational consequences. Before identifying the systems responsible, determine whether the observed behavior has affected network performance, application availability, or business services.

Continue reviewing the monitored asset together with its associated traffic and operational metrics.

Use the investigation to answer questions such as:

- Are business services affected?
- Are users experiencing degraded performance?
- Is the asset operating as expected?
- Is the issue isolated or affecting multiple systems?

#### Evidence to Collect

- Service degradation.
- User-reported issues.
- Application availability.
- Network performance changes.
- Scope of the operational impact.

#### Continue the Investigation

Once the operational impact has been understood, identify the systems and applications responsible for the observed behavior.

---

### Step 4: Identify the Source of the Change

The next objective is determining which systems, applications, or communication patterns contributed to the observed change. This helps establish the underlying cause rather than simply confirming that the monitored asset has changed.

Continue the investigation using [**Applications**](/docs/ug/netflow/drilldown#apps) and [**Explore Flows**](/docs/ug/tools/explore_flows).

Use these investigation views to answer questions such as:

- Which hosts communicate with the monitored asset?
- Which applications contributed to the observed behavior?
- Have communication patterns changed?
- Are new internal or external systems involved?
- Which conversations account for most of the traffic?

#### Evidence to Collect

- High-volume conversations.
- Applications generating the traffic.
- New communication partners.
- Client-server relationships.
- Communication behavior inconsistent with the asset's normal role.

#### Continue the Investigation

After identifying the source of the change, determine whether the observed behavior aligns with normal operational activity.

---

### Step 5: Validate Against Normal Operations

Not every operational change affecting a critical asset indicates a problem. Changes may be explained by planned maintenance, infrastructure upgrades, software deployments, backups, or changing business demand.

Review the investigation findings alongside known operational activities to determine whether the observed behavior represents an expected operational change.

Use the investigation findings to answer questions such as:

- Was maintenance being performed?
- Were software updates or deployments in progress?
- Were backup or replication jobs running?
- Does the observed behavior align with normal business operations?
- Can the change be explained by planned operational activities?

#### Evidence to Collect

- Scheduled maintenance activities.
- Software deployment events.
- Backup or replication traffic.
- Business activities explaining the change.
- Evidence supporting expected or unexpected behavior.

#### Continue the Investigation

Once the operational context has been established, determine the most appropriate response based on the investigation findings.

---

### Step 6: Determine the Appropriate Response

By this stage, the investigation should have established what changed, how the monitored asset was affected, which systems contributed to the observed behavior, and whether the activity is expected.

Review the investigation findings as a whole to determine the most appropriate operational response.

Use the investigation findings to answer questions such as:

- Can the observed behavior be fully explained?
- Does the investigation need to continue?
- Should additional monitoring be introduced?
- Is historical analysis required?
- Should the issue be escalated for further investigation?

#### Evidence to Collect

- Confirmed cause of the operational change.
- Systems and applications responsible.
- Operational justification for the observed behavior.
- Recommended follow-up actions.
- Escalation or monitoring requirements.

#### Investigation Outcome

At this stage, you should understand what changed, identify the systems responsible, determine whether the observed behavior is expected, assess its operational impact, and decide whether additional investigation or corrective action is required.

---

## Investigation Completion

This investigation can generally be considered complete when:

- The monitored asset has been identified.
- The operational change has been characterized.
- The impact on network operations has been assessed.
- The systems and applications responsible have been identified.
- The operational context has been validated.
- Appropriate operational or engineering actions have been determined.

---

## Best Practices

- Monitor assets based on business criticality rather than quantity.
- Periodically review the list of monitored assets as the network evolves.
- Progressively investigate from the monitored asset to the responsible hosts, applications, and communication patterns.
- Always validate operational context before escalating an issue.
- Use critical asset monitoring as an early warning mechanism rather than a replacement for investigation.
- Document recurring operational patterns to improve future investigations.

---

## Related Investigations

- [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md)
- [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md)
- [**Investigate Historical Network Activity**](./inv3-retro.md)
- [**Investigate Network Behavior Anomalies**](./inv5-tba.md)