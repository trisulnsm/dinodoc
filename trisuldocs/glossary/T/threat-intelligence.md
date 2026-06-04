---
title: What is threat intelligence?
description: Threat intelligence is information about malicious actors, attack infrastructure, indicators, tactics, and risk patterns used to help organizations detect, investigate, prioritize, and respond to security threats.
sidebar_label: Threat intelligence
sidebar_position: 213
slug: /glossary/threat-intelligence
keywords:
  - threat intelligence
  - threat data
  - indicators of compromise
  - malicious activity
  - security intelligence
  - threat feeds
  - IOC
  - TTP
  - malware infrastructure
  - alert enrichment
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threat intelligence is information about malicious actors, attack infrastructure, indicators, tactics, and risk patterns used to help organizations detect, investigate, prioritize, and respond to security threats."
      }
    },
    {
      "@type": "Question",
      "name": "Why is threat intelligence useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threat intelligence helps security teams recognize known malicious activity, enrich investigations, prioritize alerts, and improve threat detection and response."
      }
    },
    {
      "@type": "Question",
      "name": "What does threat intelligence include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threat intelligence may include indicators of compromise (IOCs), malicious IP addresses, domains, file hashes, attack infrastructure, adversary behavior, tactics, techniques, procedures (TTPs), and contextual risk information."
      }
    },
    {
      "@type": "Question",
      "name": "How is threat intelligence used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threat intelligence is used for threat detection, alert enrichment, traffic analysis, threat hunting, incident investigation, security monitoring, and incident response."
      }
    }
  ]
};

# What is threat intelligence?

**Threat intelligence** is information about malicious actors, attack infrastructure, indicators, tactics, and risk patterns used to help organizations detect, investigate, prioritize, and respond to security threats.

Threat intelligence provides context that helps teams determine whether observed activity is benign, suspicious, or associated with known malicious behavior.

It is widely used across enterprise, ISP, telecom, cloud, SOC, incident-response, and security-monitoring environments.

Threat intelligence is valuable because raw alerts and suspicious events often lack enough context to determine whether activity is genuinely malicious.

---

## How threat intelligence works
Threat intelligence is collected from security vendors, intelligence-sharing communities, research organizations, internal observations, and external threat feeds.

Common threat-intelligence sources include:

- Malicious IP addresses
- Suspicious domains
- File hashes
- Botnet infrastructure
- Command-and-control (C2) servers
- Vulnerability intelligence
- Malware indicators
- Adversary behavior patterns
- Threat feeds

Threat intelligence platforms compare observed activity against known malicious indicators, attacker behavior, infrastructure, and risk context.

Matching activity can be enriched with information about malware families, phishing campaigns, botnets, attacker techniques, or known adversary groups.

This context helps teams prioritize investigations and distinguish meaningful threats from ordinary background traffic.

Threat intelligence commonly includes multiple intelligence categories:

| Type | Purpose |
|---|---|
| IOC | Identify known malicious entities such as IPs, domains, or hashes |
| TTP | Describe attacker tactics, techniques, and procedures |
| Threat feed | Provide continuously updated intelligence data |
| Reputation data | Assign risk scores to entities such as IPs or domains |
| Infrastructure intelligence | Identify malicious servers, botnets, or attack infrastructure |
| Enrichment | Add context to alerts, telemetry, or investigations |

Threat intelligence becomes more useful when indicators are combined with traffic behavior, historical activity, user context, and infrastructure visibility.

The value of threat intelligence depends heavily on accuracy, freshness, relevance, and contextual quality.

---

## Threat intelligence in security analysis
Threat intelligence is commonly used for security monitoring, threat hunting, alert enrichment, malware investigations, IOC matching, incident response, DDoS investigations, DNS analysis, and network-security investigations.

Teams commonly investigate suspicious outbound connections, malicious domains, known bad IP addresses, beaconing behavior, botnet communication, lateral movement activity, malware-related traffic, and credential-abuse indicators.

Because many indicators are short-lived or incomplete by themselves, security teams often correlate threat intelligence with traffic analysis, DNS telemetry, endpoint activity, and historical investigations before determining whether activity is malicious.

Historical visibility is especially useful for identifying recurring attacker infrastructure, validating suspicious communication patterns, and investigating past security events associated with known indicators.

---

## Why threat intelligence matters
Threat intelligence improves threat detection, investigation speed, and alert prioritization by adding external context to suspicious activity.

It helps organizations identify known malicious infrastructure, recognize attacker behavior patterns, and respond more quickly to active threats.

However, outdated feeds, false positives, low-quality indicators, short-lived attacker infrastructure, and excessive alert volume can reduce intelligence accuracy and create investigation noise.

Organizations commonly combine threat intelligence with flow telemetry, DNS visibility, packet analysis, SIEM correlation, endpoint telemetry, and historical traffic analysis to validate suspicious activity.

Correlating these telemetry sources helps teams determine whether observed behavior represents legitimate traffic, malware communication, scanning activity, phishing infrastructure, botnet behavior, or active compromise.

---

## In Trisul
Trisul supports threat-intelligence and security-analysis workflows through flow telemetry analysis, packet analysis, DNS visibility, historical traffic visibility, and traffic investigations.

Using NetFlow, IPFIX, DNS analysis, packet-analysis workflows, and traffic-analysis capabilities, operators can investigate suspicious communication patterns, analyze traffic associated with malicious IPs, domains, or infrastructure, correlate threat activity with hosts, applications, interfaces, and network conditions, support threat-hunting and incident-investigation workflows, and perform historical investigations related to suspicious activity and security events across enterprise, ISP, telecom, cloud, and security-monitoring environments.

Additional threat-analysis and traffic-investigation workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- [What is SIEM?](/glossary/siem)
- [What is incident investigation?](/glossary/incident-investigation)
- What is IOC?
- What is threat hunting?
- What is DNS analysis?

---

## Frequently asked questions
### What is threat intelligence?

Threat intelligence is information about malicious actors, attack infrastructure, indicators, tactics, and risk patterns used to help organizations detect, investigate, prioritize, and respond to security threats.

### Why is threat intelligence useful?

Threat intelligence helps security teams recognize known malicious activity, enrich investigations, prioritize alerts, and improve threat detection and response.

### What does threat intelligence include?

Threat intelligence may include indicators of compromise (IOCs), malicious IP addresses, domains, file hashes, attack infrastructure, adversary behavior, tactics, techniques, procedures (TTPs), and contextual risk information.

### How is threat intelligence used?

Threat intelligence is used for threat detection, alert enrichment, traffic analysis, threat hunting, incident investigation, security monitoring, and incident response.

### Why is context important in threat intelligence?

Context helps teams determine whether suspicious activity is genuinely malicious, related to known attacker behavior, or simply unusual but harmless activity.

### Why are indicators alone sometimes insufficient?

Indicators such as IP addresses or domains may be short-lived, reused, or incomplete by themselves. Threat intelligence becomes more accurate when combined with traffic behavior, DNS visibility, historical analysis, and infrastructure context.