# Network Threat Investigation Playbook

*A practical guide to investigating common network security incidents using Trisul NSM.*

---

## Introduction

Modern security investigations require more than responding to alerts. Security analysts must determine whether suspicious activity represents a genuine threat, understand how an attack unfolded, identify the affected systems, and assess the overall impact on the organization.

This playbook presents a collection of practical threat investigations that address common security scenarios encountered in enterprise networks. Rather than focusing on individual security features or detection technologies, each investigation begins with a real-world security question and outlines a structured methodology for answering it.

Only after establishing the investigation process does the guide show how to run the investigation in Trisul NSM, using network telemetry, packet capture, flow analytics, behavioral analysis, threat intelligence, and AI-assisted investigations.

Each investigation is self-contained and may be used independently based on the security event being investigated.

---

## Who Should Use This Playbook

This playbook is intended for:

- Security Operations Center (SOC) Analysts
- Incident Responders
- Threat Hunters
- Network Security Engineers
- Security Architects
- Network Administrators
- IT Operations Teams

Whether you are validating a security alert, investigating suspicious network activity, responding to an incident, or proactively hunting for hidden threats, the investigations in this guide provide a structured and repeatable approach to network security investigations.

---

## How to Use This Playbook

Each investigation follows the same structure:

- **Investigation Overview** explains the security scenario being investigated.
- **When to Use This Investigation** lists the situations that call for it.
- **Investigation Objectives** define the expected outcomes.
- **Investigation Workflow** gives the steps in Trisul NSM. Each step ends with **Evidence to Preserve** and **Continue the Investigation**.
- **Investigation Completion** lists the conditions for closing the investigation.
- **Best Practices** provide practical guidance for improving investigation quality and consistency.
- **Related Investigations** recommend the next investigation when additional analysis is required.

Although each investigation can be performed independently, many real-world incidents naturally evolve from one investigation to another. The related investigation references provide suggested paths for expanding the investigation as additional evidence becomes available.

---

## Investigations

| Investigation | Primary Focus | Trisul Capability |
|----------------|---------------|-------------------|
| **Investigation 1**<br />[Investigate Potential Data Exfiltration](/playbook/securityplaybook/inv1-exfiltration) | Determine whether sensitive information has been transferred outside the network and assess the scope of potential data loss. | Packets, Flows, Retro, AI Investigation |
| **Investigation 2**<br />[Investigate Command and Control (C2) Communications](/playbook/securityplaybook/inv2-commandcontrol) | Identify compromised hosts communicating with external attacker infrastructure using DNS, TLS, and flow analysis. | JA3, TLS Metadata, DNS Analytics |
| **Investigation 3**<br />[Investigate Encrypted Traffic](/playbook/securityplaybook/inv3-encryptedtraffic) | Analyze encrypted communications using TLS metadata, JA3 fingerprints, certificates, and SNI without decrypting traffic. | JA3, TLS Metrics, SNI Analysis |
| **Investigation 4**<br />[Investigate Network Traffic Anomalies](/playbook/securityplaybook/inv4-trafficanomalies) | Determine whether abnormal traffic patterns represent operational changes, scanning activity, DDoS attacks, or other security threats. | NBAD, DDoS Metrics, Behavioral Analytics |
| **Investigation 5**<br />Investigate Threat Intelligence Alerts | Validate communications involving known malicious infrastructure and determine whether alerts represent genuine security incidents. | Blacklist Alerts |
| **Investigation 6**<br />[Investigate Security Detection Alerts](/playbook/securityplaybook/inv6-secalerts) | Validate security alerts, correlate supporting evidence, and understand attacker behavior using contextual analysis. | MITRE ATT&CK Mapping |
| **Investigation 7**<br />[Hunt Threats Across Historical Network Activity](/playbook/securityplaybook/inv7-historical) | Proactively search historical network activity to identify threats that may have bypassed real-time detection. | Retro, Historical Packets & Flows, AI Investigation |

---

## Investigation Workflow

While each investigation can be performed independently, many security incidents naturally progress from one investigation to another.

For example:

1. A threat intelligence alert identifies communication with a known malicious IP address, initiating **Investigation 5** to validate the alert and identify the affected systems.
2. Analysis reveals periodic outbound communications, leading to [**Investigation 2**](/playbook/securityplaybook/inv2-commandcontrol) to determine whether command and control activity is present.
3. Since the communications occur over HTTPS, [**Investigation 3**](/playbook/securityplaybook/inv3-encryptedtraffic) is used to examine TLS metadata, JA3 fingerprints, and encrypted session characteristics.
4. Behavioral analysis identifies additional anomalous traffic patterns, prompting [**Investigation 4**](/playbook/securityplaybook/inv4-trafficanomalies) to determine whether the activity represents broader malicious behavior.
5. Evidence suggests sensitive data may have been transferred, leading to [**Investigation 1**](/playbook/securityplaybook/inv1-exfiltration) to assess the scope of potential data exfiltration.
6. Multiple detections are then correlated using [**Investigation 6**](/playbook/securityplaybook/inv6-secalerts), helping analysts understand the attack lifecycle through contextual analysis and MITRE ATT&CK mapping.
7. Finally, [**Investigation 7**](/playbook/securityplaybook/inv7-historical) reconstructs historical network activity to determine when the attack began, identify additional affected systems, and uncover any previously undetected malicious activity.

---

## About Trisul NSM {#about-trisul-network-security-monitoring}

Trisul NSM is a network detection and investigation platform that combines packet capture, flow analytics, behavioral analysis, threat intelligence, MITRE ATT&CK mapping, and AI-assisted investigations within a unified analytical interface.

By providing both real-time visibility and historical network evidence, Trisul enables security teams to investigate incidents from multiple perspectives, validate detections using supporting network telemetry, and reconstruct attacker activity.

Throughout this playbook, Trisul is presented as a platform that supports established threat investigation methodologies, enabling analysts to perform structured security investigations more efficiently while reducing the need to manually correlate evidence across multiple security tools.