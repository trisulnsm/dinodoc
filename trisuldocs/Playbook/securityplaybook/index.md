# Network Threat Investigation Playbook

*A practical guide to investigating common network security incidents using Trisul Network Security Monitoring.*

---

## Introduction

Modern security investigations require more than responding to alerts. Security analysts must determine whether suspicious activity represents a genuine threat, understand how an attack unfolded, identify the affected systems, and assess the overall impact on the organization.

This playbook presents a collection of practical threat investigations that address common security scenarios encountered in enterprise networks. Rather than focusing on individual security features or detection technologies, each investigation begins with a real-world security question and outlines a structured methodology for answering it.

Only after establishing the investigation process does the guide demonstrate how Trisul Network Security Monitoring can simplify and accelerate the investigation using network telemetry, packet capture, flow analytics, behavioral analysis, threat intelligence, and AI-assisted investigations.

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
- **Symptoms** describe common indicators, alerts, or observations that may warrant an investigation.
- **Investigation Objectives** define the expected outcomes.
- **Investigation Methodology** presents a vendor-neutral investigation process that can be followed using any suitable network security monitoring tools.
- **Applying this Investigation Using a Network Security Monitoring Platform** demonstrates how Trisul simplifies and accelerates the investigation through its integrated security analytics capabilities.
- **Investigation Findings** describe common observations and their possible interpretations.
- **Best Practices** provide practical guidance for improving investigation quality and consistency.
- **Related Investigations** recommend the next investigation when additional analysis is required.

Although each investigation can be performed independently, many real-world incidents naturally evolve from one investigation to another. The related investigation references provide suggested paths for expanding the investigation as additional evidence becomes available.

---

## Investigations

| Investigation | Primary Focus | Trisul Capability |
|----------------|---------------|-------------------|
| **Investigation 1**<br />Investigate Potential Data Exfiltration | Determine whether sensitive information has been transferred outside the network and assess the scope of potential data loss. | Packets, Flows, Retro, AI Investigation |
| **Investigation 2**<br />Investigate Command and Control (C2) Communications | Identify compromised hosts communicating with external attacker infrastructure using DNS, TLS, and flow analysis. | JA3, TLS Metadata, DNS Analytics |
| **Investigation 3**<br />Investigate Encrypted Traffic | Analyze encrypted communications using TLS metadata, JA3 fingerprints, certificates, and SNI without decrypting traffic. | JA3, TLS Metrics, SNI Analysis |
| **Investigation 4**<br />Investigate Network Traffic Anomalies | Determine whether abnormal traffic patterns represent operational changes, scanning activity, DDoS attacks, or other security threats. | NBAD, DDoS Metrics, Behavioral Analytics |
| **Investigation 5**<br />Investigate Threat Intelligence Alerts | Validate communications involving known malicious infrastructure and determine whether alerts represent genuine security incidents. | Blacklist Alerts |
| **Investigation 6**<br />Investigate Security Alerts | Validate security alerts, correlate supporting evidence, and understand attacker behavior using contextual analysis. | MITRE ATT&CK Mapping |
| **Investigation 7**<br />Conduct Historical Threat Hunting | Proactively search historical network activity to identify threats that may have bypassed real-time detection. | Retro, Historical Packets & Flows, AI Investigation |

---

## Investigation Workflow

While each investigation can be performed independently, many security incidents naturally progress from one investigation to another.

For example:

1. A threat intelligence alert identifies communication with a known malicious IP address, initiating **Investigation 5** to validate the alert and identify the affected systems.
2. Analysis reveals periodic outbound communications, leading to **Investigation 2** to determine whether command and control activity is present.
3. Since the communications occur over HTTPS, **Investigation 3** is used to examine TLS metadata, JA3 fingerprints, and encrypted session characteristics.
4. Behavioral analysis identifies additional anomalous traffic patterns, prompting **Investigation 4** to determine whether the activity represents broader malicious behavior.
5. Evidence suggests sensitive data may have been transferred, leading to **Investigation 1** to assess the scope of potential data exfiltration.
6. Multiple detections are then correlated using **Investigation 6**, helping analysts understand the attack lifecycle through contextual analysis and MITRE ATT&CK mapping.
7. Finally, **Investigation 7** reconstructs historical network activity to determine when the attack began, identify additional affected systems, and uncover any previously undetected malicious activity.

---

## About Trisul Network Security Monitoring

Trisul Network Security Monitoring (NSM) is a comprehensive network detection and investigation platform that combines packet capture, flow analytics, behavioral analysis, threat intelligence, MITRE ATT&CK mapping, and AI-assisted investigations within a unified analytical interface.

By providing both real-time visibility and historical network evidence, Trisul enables security teams to investigate incidents from multiple perspectives, validate detections using supporting network telemetry, and reconstruct attacker activity with confidence.

Throughout this playbook, Trisul is presented as a platform that supports established threat investigation methodologies, enabling analysts to perform structured security investigations more efficiently while reducing the need to manually correlate evidence across multiple security tools.