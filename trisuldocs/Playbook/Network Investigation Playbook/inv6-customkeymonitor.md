# Monitor Critical Network Assets

## Investigation Overview

Not every device on the network requires the same level of attention. Core routers, firewalls, internet gateways, critical servers, and business applications often have a direct impact on network operations and service availability.

Rather than continuously monitoring every network object, organizations typically identify critical assets whose performance and availability must be closely observed.

Monitoring these assets enables network teams to quickly identify abnormal behavior, investigate emerging issues, and respond before they affect users or business services.

This investigation provides a structured approach to monitoring critical network assets and determining when changes in their operational behavior require investigation.

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

## Investigation Steps

### Step 1: Identify the Critical Asset

Begin by identifying the asset that requires investigation.

The monitored asset may be:

- A core router.
- A firewall.
- A WAN gateway.
- A critical application server.
- A database server.
- Any infrastructure component considered operationally important.

Understanding the role of the asset provides the necessary context for the investigation.

---

### Step 2: Determine What Changed

Identify the operational characteristic that triggered the investigation.

Examples include:

- Increased traffic volume.
- Reduced traffic levels.
- Unexpected communication activity.
- Changes in application usage.
- New communication partners.
- Significant changes in operational behavior.

The objective is to understand the nature of the observed change before determining its cause.

---

### Step 3: Assess the Operational Impact

Evaluate how the observed change affects the operation of the monitored asset.

Consider:

- Whether business services are affected.
- Whether users are experiencing degraded performance.
- Whether the asset continues to perform its intended function.
- Whether the change is isolated or part of a wider operational issue.

Understanding the operational impact helps determine the urgency of the investigation.

---

### Step 4: Identify the Source of the Change

Determine which systems or applications contributed to the observed behavior.

Review:

- Communication peers.
- Traffic distribution.
- Application usage.
- Bandwidth consumption.
- Recent communication changes.

The objective is to identify the underlying cause rather than simply observing that a change occurred.

---

### Step 5: Validate Against Normal Operations

Determine whether the observed behavior aligns with expected operational activity.

Consider:

- Scheduled maintenance.
- Planned infrastructure changes.
- Application deployments.
- Business workload variations.
- Previously observed operational patterns.

Operational context helps distinguish expected changes from genuine issues.

---

### Step 6: Determine the Appropriate Response

Based on the findings, determine the next course of action.

Possible outcomes include:

- Continue monitoring because the activity is expected.
- Investigate the systems contributing to the observed behavior.
- Escalate the issue if critical services are affected.
- Review historical activity to determine when the change began.
- Update monitoring policies if operational requirements have changed.

---

## Applying this Investigation Using a Network Analytics Platform

Monitoring critical assets manually often requires engineers to repeatedly examine dashboards, traffic statistics, and operational metrics across multiple systems. As the number of critical devices grows, maintaining consistent visibility becomes increasingly difficult.

Network analytics platforms such as **Trisul** simplify this process by allowing engineers to define and continuously monitor specific network assets, providing immediate visibility whenever their operational behavior changes.

For this investigation, [**Trisul Custom Key Monitor**](/docs/ug/cg/ckey) enables engineers to:

- Define business-critical network assets for continuous monitoring.
- Monitor traffic and operational metrics for selected assets.
- Observe changes in communication patterns and network activity.
- Quickly identify deviations requiring investigation.
- Drill down into detailed traffic associated with the monitored asset.

Instead of searching across multiple dashboards, engineers can maintain continuous visibility into the infrastructure that matters most.

---

## Investigation Findings

The following observations may help determine the appropriate response.

| Observation | Possible Interpretation |
|--------------|-------------------------|
| Traffic increases significantly on a monitored asset | Validate whether the increase is expected or investigate the contributing systems. |
| Traffic decreases unexpectedly | Verify application availability or connectivity. |
| New communication partners appear | Confirm whether the communication is authorized. |
| Application usage changes significantly | Review recent deployments or configuration changes. |
| Multiple monitored assets exhibit similar behavior | Investigate for a broader infrastructure issue. |
| No operational impact is observed despite the change | Continue monitoring while documenting the behavior as a potential new baseline. |

---

## Best Practices

- Monitor assets based on business criticality rather than quantity.
- Periodically review the list of monitored assets as the network evolves.
- Always evaluate observed changes within their operational context.
- Use asset monitoring as an early warning mechanism rather than a replacement for investigation.
- Document recurring operational patterns to improve future investigations.

---

## Related Investigations

- If a monitored asset exhibits unusual communication behavior, continue with [**Investigate the Network Activity of an IP Address**](./inv1-exploreflows.md).
- If the observed change involves increased bandwidth on a network interface, continue with [**Investigate High Traffic on a Network Interface**](./inv2-routersintfs.md).
- If understanding when the change began requires reviewing earlier activity, continue with [**Investigate Historical Network Activity**](./inv3-retro.md).
- If the observed behavior deviates from normal operating patterns, continue with [**Investigate Network Behavior Anomalies**](./inv5-tba.md).