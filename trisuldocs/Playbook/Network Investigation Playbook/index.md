# Network Investigation Playbook

*A practical guide to investigating common network performance, operational, and security issues using Trisul.*

---

## Introduction

Effective network operations depend not only on collecting data but on knowing how to investigate it. Whether responding to a user complaint, troubleshooting application performance, validating abnormal traffic, or identifying the cause of an alert, network engineers rely on a systematic investigation process to move from observation to resolution.

This playbook presents a collection of practical investigations that address common operational scenarios encountered in enterprise networks. Rather than focusing on individual product features, each investigation begins with a real-world operational question and outlines a structured methodology for answering it.

Only after establishing the investigation process does the guide demonstrate how Trisul can simplify and accelerate the workflow using its analytics capabilities.

Each investigation is self-contained and may be used independently based on the operational issue being investigated.

---

## Who Should Use This Playbook

This playbook is intended for:

- Network Engineers
- Network Administrators
- Network Operations Center (NOC) Teams
- Security Operations Center (SOC) Teams
- Network Architects
- IT Operations Teams

Whether you are troubleshooting an active issue, performing post-incident analysis, or proactively monitoring critical infrastructure, the investigations in this guide provide a repeatable approach to understanding network behavior.

---

## How to Use This Playbook

Each investigation follows the same structure:

- **Investigation Overview** explains the operational problem being addressed.
- **When to Use This Investigation** helps determine whether the investigation is appropriate for the situation.
- **Investigation Objectives** define the expected outcomes.
- **Investigation Steps** present a vendor-neutral methodology that can be applied using any suitable network analysis tools.
- **Supporting the Investigation** demonstrates how Trisul streamlines the investigation through its analytics capabilities.
- **Investigation Findings** describe common observations and their possible interpretations.
- **Best Practices** provide operational guidance based on practical experience.
- **Related Investigations** recommend the next investigation when additional analysis is required.

Although each investigation can be followed independently, many real-world incidents naturally lead from one investigation to another. The related investigation references provide suggested paths for deeper analysis.

---

## Investigations

| Investigation | Primary Focus | Trisul Capability |
|----------------|---------------|-------------------|
| **Investigation 1**<br />Investigate the Network Activity of an IP Address | Analyze communication patterns, applications, and traffic associated with a specific host. | Explore Flows |
| **Investigation 2**<br />Investigate High Traffic on a Network Interface | Determine the cause of excessive interface utilization and identify the systems and applications responsible. | Routers & Interfaces |
| **Investigation 3**<br />Investigate Historical Network Activity | Reconstruct past network activity to understand incidents discovered after they occurred. | Retro |
| **Investigation 4**<br />Investigate Threshold Crossing Events | Determine why monitored metrics exceeded configured operational thresholds. | Threshold Crossing Alerts |
| **Investigation 5**<br />Investigate Network Behavior Anomalies | Identify and validate deviations from normal network behavior using learned baselines. | Threshold Band Alerts |
| **Investigation 6**<br />Monitor Critical Network Assets | Continuously monitor important network infrastructure and investigate significant operational changes. | Custom Key Monitor |
| **Investigation 7**<br />Correlate Network Activity Across Multiple Dimensions | Analyze relationships between multiple network attributes to answer complex operational questions. | Cross Key CounterGroups |

---

## Investigation Workflow

While each investigation can be performed independently, many operational scenarios naturally progress from one investigation to another.

For example:

1. A user reports slow network performance, leading to **Investigation 1** to examine the affected host.
2. Analysis reveals excessive bandwidth consumption, prompting **Investigation 2** to determine whether interface congestion is occurring.
3. If the issue happened overnight, **Investigation 3** can reconstruct the historical activity.
4. If an alert was generated during the event, **Investigation 4** helps understand why operational thresholds were exceeded.
5. If traffic appears unusual without exceeding configured thresholds, **Investigation 5** helps determine whether the behavior deviates from the established baseline.
6. Critical infrastructure involved in the incident can then be continuously observed using **Investigation 6**.
7. Finally, **Investigation 7** can correlate multiple dimensions of network data to identify broader operational patterns and relationships.

---

## About Trisul

Trisul is a high-performance network analytics platform designed to provide comprehensive visibility into network traffic, infrastructure, applications, and operational behavior. By combining real-time analytics, historical data retention, behavioral analysis, and flexible investigation workflows, Trisul enables engineers to move quickly from detection to root cause analysis.

Throughout this playbook, Trisul is presented as a platform that supports and accelerates established investigation methodologies, allowing network teams to perform the same structured investigations more efficiently from a unified analytical interface.