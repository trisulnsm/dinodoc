---
title: What is endpoint detection and response?
description: Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations.
sidebar_label: Endpoint detection and response
sidebar_position: 52
slug: /glossary/endpoint-detection-and-response
keywords:
  - EDR
  - endpoint detection
  - endpoint response
  - host security
  - threat detection
  - incident response
  - endpoint telemetry
  - endpoint monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is endpoint detection and response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations."
      }
    },
    {
      "@type": "Question",
      "name": "What does EDR monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR platforms commonly monitor process activity, file changes, registry activity, user behavior, endpoint network connections, command execution, authentication activity, and security events on managed endpoints."
      }
    },
    {
      "@type": "Question",
      "name": "How is EDR different from network security monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR focuses on activity occurring directly on endpoints, while network security monitoring analyzes traffic and communications moving across the network. The two approaches are complementary and are often correlated during investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Why is EDR important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR is important because many attacks generate observable endpoint behavior such as malware execution, credential abuse, persistence mechanisms, suspicious processes, or unauthorized activity that may not be fully visible through network monitoring alone."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul complement EDR workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul complements EDR workflows through network traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help correlate endpoint events with network communications and external connections."
      }
    }
  ]
};

# What is endpoint detection and response?

**Endpoint detection and response (EDR)** is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident‑response actions on devices such as laptops, servers, virtual machines, and workstations. EDR deploys lightweight agents on endpoints to collect rich host‑level telemetry, then uses behavioral analytics and rules to surface anomalies, investigate confirmed incidents, and perform actions such as isolation, remediation, or containment.

---

## How EDR works
EDR systems typically install agents on endpoints that gather a wide range of host‑level events, including process executions, file and registry changes, user and logon activity, network connections, command‑line history, and security alerts. This telemetry is streamed to a central console where analytics engines apply detection models, correlate events, and generate alerts. Security analysts use EDR dashboards to drill into timelines, hunt for indicators of compromise, and execute responses such as quarantining files, killing processes, or isolating the host from the network.

---

## EDR in security operations
EDR is a core part of modern SOC and incident‑response workflows. It helps detect malware, credential‑abuse patterns, ransomware behavior, and persistence techniques that may run entirely on the endpoint. Threat‑hunting teams use EDR to search for subtle indicators across thousands of hosts, while incident‑response teams rely on its detailed endpoint timelines to reconstruct attack sequences. EDR is especially powerful for uncovering stealthy attacks that leave little or no obvious footprint in network traffic alone.

---

## EDR vs network security monitoring
EDR and network security monitoring are complementary. **EDR** focuses on what happens on the host: processes, files, logons, and execution. **Network security monitoring** focuses on traffic, sessions, and communication patterns across the network. When an EDR alert flags malware execution on a laptop, network‑monitoring tools can show whether that host communicates with suspicious external IPs or exhibits lateral‑movement behavior. Combining both views gives analysts a more complete picture of attack scope and intent.

---

## EDR and lateral movement
After an initial compromise, attackers often move laterally between systems using methods such as remote execution, pass‑the‑hash, or abuse of administrative tools. EDR can detect unusual remote‑process starts, privilege‑escalation attempts, and suspicious logon sequences on endpoints. Network analytics then shows the associated traffic—SMB, RDP, or WinRM flows—allowing operations to trace attackers’ paths across the environment. Correlating EDR‑detected activity with network telemetry strengthens detection and investigation of distributed attacks.

---

## Operational considerations
EDR introduces several operational trade‑offs. Deploying and maintaining agents across all endpoints requires consistent coverage, update management, and performance tuning to avoid user impact. Alert‑fatigue and false positives can overwhelm analysts if detection rules are not tuned, and long‑term telemetry retention can be expensive at scale. Effective EDR operations usually depend on integration with SIEM, SOAR, and network‑monitoring tools, as well as clear playbooks for triage and response.

---

## How Trisul complements EDR workflows
Trisul complements EDR by providing network‑level visibility that helps contextualize endpoint events. Using **NetFlow, IPFIX, sFlow**, and packet‑based telemetry, Trisul surfaces traffic patterns associated with EDR‑flagged hosts, such as suspicious external connections, beaconing, or internal lateral movement. Features like **Explore Flows**, historical traffic trending, and anomaly detection let analysts correlate EDR‑detected executables or logons with network sessions, validate exfiltration hypotheses, and reconstruct attack timelines across the network. Trisul does not act as an EDR agent but enhances EDR‑driven investigations with traffic‑analytics depth.

---

## Related terms
- [Endpoint detection and response (EDR)](/glossary/endpoint-detection-and-response)
- [Network security monitoring](/glossary/network-security-monitoring)
- [Threat detection](/glossary/threat-detection)
- [Incident response](/glossary/incident-response)
- Host monitoring  
- [Lateral movement](/glossary/lateral-movement)
- [XDR](/glossary/xdr)
- Flow monitoring  

---

## Frequently asked questions
### What is endpoint detection and response?

Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident‑response actions on devices such as laptops, servers, and workstations.

### What does EDR monitor?

EDR platforms commonly monitor process activity, file changes, registry activity, user behavior, endpoint network connections, command execution, authentication activity, and security events on managed endpoints.

### How is EDR different from network security monitoring?

EDR focuses on activity occurring directly on endpoints, while network security monitoring analyzes traffic and communications moving across the network. The two approaches are complementary and are often correlated during investigations.

### Why is EDR important?

EDR is important because many attacks generate observable endpoint behavior such as malware execution, credential abuse, persistence mechanisms, suspicious processes, or unauthorized activity that may not be fully visible through network monitoring alone.

### How does Trisul complement EDR workflows?

Trisul complements EDR workflows through network traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help correlate endpoint events with network communications and external connections.