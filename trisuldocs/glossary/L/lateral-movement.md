---
title: What is lateral movement?
description: Lateral movement is the stage of an attack where an intruder moves from one compromised system to other systems inside a network in order to expand access, escalate privileges, or reach high-value targets.
sidebar_label: Lateral movement
sidebar_position: 107
slug: /glossary/lateral-movement
keywords:
  - lateral movement
  - post-compromise
  - attacker movement
  - east-west traffic
  - internal attack
  - threat hunting
  - security analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is lateral movement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is the stage of an attack where an intruder moves from one compromised system to other systems inside a network in order to expand access, escalate privileges, or reach high-value targets."
      }
    },
    {
      "@type": "Question",
      "name": "Why does lateral movement matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement matters because it indicates that an attacker has progressed beyond the initial compromise and may be attempting to access sensitive systems, spread malware, steal data, or escalate privileges."
      }
    },
    {
      "@type": "Question",
      "name": "How is lateral movement detected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is detected by identifying unusual internal traffic patterns, suspicious authentication activity, unexpected service usage, abnormal east-west communication, and behavioral deviations across hosts or network segments."
      }
    },
    {
      "@type": "Question",
      "name": "What helps lateral movement analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow telemetry, authentication logs, host monitoring, DNS visibility, segmentation data, and historical traffic analysis help analysts identify attacker movement across internal systems and network segments."
      }
    }
  ]
};

# What is lateral movement?

**Lateral movement** is the stage of an attack where an intruder moves from one compromised system to other systems inside a network in order to expand access, escalate privileges, or reach high-value targets such as databases, domain controllers, backup infrastructure, or administrative systems.

Lateral movement is considered a hallmark of post-compromise activity because it indicates that an attacker has already established an internal foothold and is attempting to broaden control across the environment.

Unlike initial intrusion activity, lateral movement commonly occurs as **east-west traffic** inside internal networks, making it more difficult to detect when security visibility is focused primarily on perimeter traffic or internet-facing threats.

Lateral movement is especially dangerous because the attacker no longer depends entirely on external attack paths. Once internal trust relationships, privileged credentials, or administrative systems are compromised, attackers can often move through the environment using the same communication paths and administrative mechanisms trusted operators use legitimately every day.

---

## How lateral movement works
After compromising an initial host, attackers commonly attempt to pivot across the environment using trusted internal communication paths, stolen credentials, administrative protocols, or remote-access mechanisms.

Many lateral-movement techniques intentionally blend into legitimate administrative activity by using protocols and tools already common in enterprise environments such as SMB, RDP, PowerShell, SSH, WMI, WinRM, LDAP, or scheduled-task automation workflows.

Rather than immediately attacking every reachable system, attackers frequently expand access gradually by identifying trust relationships, privileged systems, authentication paths, and reachable internal services that allow deeper movement through the environment.

A typical lateral movement progression may include:
1. Initial compromise of a host or endpoint
2. Credential theft or privilege acquisition
3. Internal reconnaissance and host discovery
4. Pivoting between systems using trusted protocols
5. Expansion toward high-value systems or persistence mechanisms

Lateral movement often appears operationally as unusual internal traffic behavior, unexpected authentication activity, abnormal east-west communication patterns, or administrative access originating from systems that do not normally interact.

---

## Lateral movement in network operations
In security operations, lateral movement is treated as a high-priority indicator because it frequently precedes ransomware deployment, data exfiltration, privilege escalation, persistence establishment, or broader infrastructure compromise.

Many organizations historically focused security visibility heavily on perimeter threats and north-south traffic entering or leaving the environment. As a result, internal east-west communication paths often received significantly less monitoring even though attackers increasingly rely on trusted internal movement after the initial compromise succeeds.

This creates operational blind spots where malicious activity may blend into large volumes of legitimate internal traffic and administrative behavior.

Security teams commonly investigate:
- New east-west communication paths
- Unusual SMB, RDP, LDAP, SSH, WMI, or WinRM traffic
- Internal scanning or reconnaissance activity
- Unexpected access to administrative systems
- Authentication anomalies or repeated login attempts
- Cross-segment traffic movement
- Abnormal communication timing or frequency

Historical traffic visibility is especially important because investigators often need to reconstruct attacker movement across multiple hosts, accounts, services, and time periods in order to understand how the compromise evolved through the environment.

In enterprise, ISP, SD-WAN, cloud, and hybrid-network environments, segmentation visibility and internal traffic analysis become operationally important because attackers frequently attempt to move through trusted infrastructure paths that bypass traditional perimeter controls.

---

## Common indicators of lateral movement
| Indicator | Operational meaning |
|---|---|
| New internal connections | Hosts communicating in previously unseen ways |
| Suspicious authentication activity | Repeated or unusual login behavior across systems |
| Unexpected administrative protocols | SMB, RDP, WMI, SSH, or LDAP usage from unusual hosts |
| Internal scanning behavior | Host discovery or reconnaissance inside the network |
| Cross-segment communication | Traffic moving unexpectedly between trust zones or VLANs |

These indicators become significantly more useful when correlated with authentication telemetry, flow analysis, endpoint visibility, DNS activity, segmentation awareness, and historical communication baselines.

---

## What makes lateral movement detection effective
Effective lateral movement detection depends on internal traffic visibility, segmentation awareness, historical telemetry retention, authentication visibility, and behavioral baselines across the environment.

Detecting lateral movement is operationally difficult because many attacker behaviors resemble legitimate administrative activity. Shared administrative tools, internal automation systems, remote-management workflows, and trusted service accounts may already generate traffic patterns similar to post-compromise behavior.

Large enterprise environments also generate enormous volumes of east-west traffic, making it difficult to distinguish malicious movement from normal operational communication without historical baselines and behavioral context.

Organizations commonly improve lateral-movement visibility by correlating:
- Flow telemetry
- Authentication logs
- DNS visibility
- Endpoint telemetry
- Segmentation policies
- Historical traffic analysis
- Internal communication baselines

These workflows help analysts distinguish legitimate administrative behavior from suspicious internal movement patterns and identify how attacker activity evolves over time.

---

## In Trisul
Trisul supports lateral-movement investigation workflows through flow telemetry analysis, historical traffic visibility, packet-analysis workflows, and internal traffic investigations.

Using NetFlow, IPFIX, sFlow, J-Flow, packet analysis, and traffic-investigation workflows, operators can investigate unusual east-west communication behavior, internal flow activity, administrative-protocol usage, and traffic movement across hosts, segments, and distributed environments.

Rather than viewing suspicious traffic in isolation, Trisul workflows allow analysts to correlate internal communication behavior with DNS activity, traffic flows, host relationships, segmentation boundaries, and historical traffic conditions in order to reconstruct how attacker movement evolved across the environment.

These workflows are particularly useful for:
- Threat hunting
- Incident response
- Post-compromise investigations
- East-west traffic analysis
- Segmentation investigations
- Historical attacker-movement reconstruction

Historical traffic visibility is especially valuable during lateral-movement investigations because analysts often need to determine when movement began, which systems were affected first, how access expanded across trust boundaries, and whether persistence or privilege escalation activity occurred afterward.

Additional flow-analysis and traffic-investigation workflows are documented in the Trisul documentation:

[Trisul Flow Documentation](https://docs.trisul.org/docs/ug/flow/)

---

## Related terms
- East-west traffic
- Threat hunting
- [Network segmentation](/glossary/network-segmentation)
- [Security zone](/glossary/security-zone)
- EDR
- [Host monitor](/glossary/host-monitor)

---

## Frequently asked questions
### What is lateral movement?

Lateral movement is the stage of an attack where an intruder moves from one compromised system to other systems inside a network in order to expand access, escalate privileges, or reach high-value targets.

### Why does lateral movement matter?

Lateral movement matters because it indicates that an attacker has progressed beyond the initial compromise and may be attempting to access sensitive systems, spread malware, steal data, or escalate privileges.

### How is lateral movement detected?

Lateral movement is detected by identifying unusual internal traffic patterns, suspicious authentication activity, unexpected service usage, abnormal east-west communication, and behavioral deviations across hosts or network segments.

### What helps lateral movement analysis?

Flow telemetry, authentication logs, host monitoring, DNS visibility, segmentation data, and historical traffic analysis help analysts identify attacker movement across internal systems and network segments.