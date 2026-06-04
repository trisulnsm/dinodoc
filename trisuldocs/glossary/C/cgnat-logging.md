---
title: What is CGNAT logging?
description: CGNAT logging records the mapping between subscriber private IP addresses and translated public IPv4 addresses and ports assigned by Carrier-Grade NAT systems. These logs help ISPs support subscriber traceability, troubleshooting, compliance, and security investigations.
sidebar_label: CGNAT logging
sidebar_position: 25
slug: /glossary/cgnat-logging
keywords:
  - cgnat logging
  - carrier-grade nat logging
  - lsn logging
  - large-scale nat logging
  - nat session logging
  - ipdr
  - port mapping logging
  - subscriber traceability
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What fields are commonly required in CGNAT logs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common fields include private subscriber IP address, translated public IP address, source and translated ports, protocol, timestamps, destination information, and session metadata required for subscriber traceability."
      }
    },
    {
      "@type": "Question",
      "name": "How long are CGNAT logs retained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention periods vary by jurisdiction, regulatory requirements, and operator policy. ISPs commonly retain CGNAT logs for extended periods to support compliance, auditing, and law-enforcement investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CGNAT logs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT logs are important because multiple subscribers may share a single public IPv4 address. Logging enables operators to trace traffic activity back to a specific subscriber and time period."
      }
    },
    {
      "@type": "Question",
      "name": "What is Port Block Allocation in CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Port Block Allocation assigns groups of ports to subscribers instead of logging every individual port mapping. This reduces logging volume while maintaining subscriber traceability."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CGNAT logging workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul can assist operational workflows involving CGNAT environments through flow visibility, subscriber-oriented analytics, historical traffic investigation, and traffic correlation capabilities."
      }
    }
  ]
};

# What is CGNAT logging?

**CGNAT logging** records the mapping between subscriber private IP addresses and translated public IPv4 addresses and ports assigned by a Carrier‑Grade NAT (CGNAT) system. Because multiple subscribers may share a single public IPv4 address, operators need these logs to identify which subscriber was associated with a public IP address and port at a specific time.

CGNAT logging is commonly used for:
- Subscriber traceability  
- Regulatory compliance  
- Security investigations  
- Abuse handling  
- Troubleshooting  
- Operational auditing  

Trisul can support operational workflows involving CGNAT environments through flow visibility and subscriber‑oriented analytics.

---

## How it works
CGNAT systems translate private subscriber addresses into shared public IPv4 addresses using port‑based mappings. During this process, logging systems record metadata such as:

- Private subscriber IP address  
- Public translated IP address  
- Port mappings (source and translated ports)  
- Protocol type (for example, TCP, UDP)  
- Session timestamps  
- Destination IP address  

Typical workflow:

1. **Subscriber connection** – Subscriber traffic reaches the CGNAT platform.  
2. **Address translation** – Private addresses are translated to shared public IPv4 addresses.  
3. **Port assignment** – Public ports are allocated for subscriber sessions.  
4. **Log generation** – Translation and session metadata are recorded.  
5. **Central collection** – Logs are exported to centralized storage or analytics systems.  
6. **Operational analysis** – Operators investigate subscriber activity or security events.  

CGNAT logs are commonly exported via syslog, IPFIX, or vendor‑specific telemetry formats.

---

## CGNAT logging in network operations
CGNAT logging is critical in ISP and service‑provider environments because a single public IPv4 address can be shared across many subscribers. Without logging, operators cannot reliably link external traffic back to individual subscribers.  

Common use cases include:

- **Subscriber traceability** – Mapping public IP/port activity to a specific subscriber.  
- **Security investigations** – Investigating malware, abuse, or targeted attacks.  
- **Law‑enforcement support** – Responding to requests with time‑stamped, session‑level mapping.  
- **Abuse‑complaint handling** – Identifying which subscribers generated reported traffic.  
- **Connectivity troubleshooting** – Diagnosing why certain sessions fail or behave unexpectedly.  
- **Compliance reporting** – Meeting local data‑retention and traceability mandates.  

Accurate CGNAT logging and sufficient retention are essential for all of these use cases.

---

## Common CGNAT log fields
| Field                | Description |
|----------------------|------------|
| Private IP address   | Subscriber‑side address before NAT |
| Public IP address    | Translated shared IPv4 address |
| Private port         | Subscriber source port |
| Public port          | Translated public port |
| Protocol             | TCP, UDP, ICMP, or other |
| Timestamp            | Start and/or end time of the mapping or session |
| Destination IP       | External communication target |
| Session metadata     | Additional NAT, pool, or subscriber tags |

The exact fields depend on the vendor, logging format, and regulatory requirements.

---

## CGNAT logging vs IPDR
| Dimension          | CGNAT logging                                    | IPDR |
|--------------------|--------------------------------------------------|------|
| Primary purpose    | NAT translation traceability                     | Subscriber‑and usage reporting |
| Main focus         | IP and port mappings                             | Session and usage records |
| Typical use        | Subscriber identification for shared addresses   | Compliance, billing‑adjacent analytics |
| Common transport   | Syslog, IPFIX                                    | IPFIX and structured records |
| Operational scope  | Address translation tracking                     | Broader subscriber activity and usage reporting |

While related, CGNAT logs and IPDR records serve different but complementary roles in ISP operations.

---

## What is Port Block Allocation (PBA)?
**Port Block Allocation (PBA)** assigns a block of consecutive ports to a subscriber instead of dynamically logging every individual port‑mapping event.  

Benefits include:

- Reduced logging volume and storage footprint  
- Improved scalability for large‑scale CGNAT deployments  
- Simplified subscriber‑level traceability (whole ports ranges per subscriber)  

PBA helps operators maintain traceability while limiting the operational overhead of massive per‑port logging.

---

## Why CGNAT logging matters
CGNAT logging is operationally and legally important because IPv4 address sharing breaks the usual 1:1 mapping between subscriber and public IP. Accurate logging enables operators to:

- Identify which subscriber generated traffic at a given time.  
- Support abuse and security investigations.  
- Comply with data‑retention and law‑enforcement requirements.  
- Troubleshoot sessions involving shared public addresses.  

Retention periods and storage strategies must be planned according to jurisdiction‑specific rules and internal policies.

---

## In Trisul
Trisul is primarily a network‑traffic analytics platform and does not replace CGNAT logging systems. However, it can support CGNAT‑related workflows by:

- Providing **flow‑based traffic visibility** (NetFlow, IPFIX, sFlow) over shared‑address environments.  
- Enabling **subscriber‑oriented analytics** when subscriber IDs or tags are available from AAA or other systems.  
- Supporting **historical traffic investigation** and **correlation** of events across time and interfaces.  
- Helping operators understand behavior patterns on shared public IP addresses even when they do not have direct access to the CGNAT logs themselves.  

These capabilities help ISPs and service providers investigate traffic, detect anomalies, and analyze usage within CGNAT‑enabled networks.

---

## Related terms
- [CGNAT logging](/glossary/cgnat-logging)
- Carrier‑Grade NAT  
- Port Block Allocation  
- [NAT](/glossary/nat)
- [IPDR](/glossary/ipdr)
- [DoT compliance](/glossary/dot-compliance)
- [Subscriber analytics](/glossary/subscriber-analytics)
- Flow monitoring  

---

## Frequently asked questions
### What fields are commonly required in CGNAT logs?

Common fields include private subscriber IP address, translated public IP address, source and translated ports, protocol, timestamps, destination information, and session metadata required for subscriber traceability.

### How long are CGNAT logs retained?

Retention periods vary by jurisdiction, regulatory requirements, and operator policy. ISPs commonly retain CGNAT logs for extended periods to support compliance, auditing, and law‑enforcement investigations.

### Why are CGNAT logs important?

CGNAT logs are important because multiple subscribers may share a single public IPv4 address. Logging enables operators to trace traffic activity back to a specific subscriber and time period.

### What is Port Block Allocation in CGNAT?

Port Block Allocation assigns groups of ports to subscribers instead of logging every individual port mapping. This reduces logging volume while maintaining subscriber traceability.

### How does Trisul relate to CGNAT logging workflows?

Trisul can assist operational workflows involving CGNAT environments through flow visibility, subscriber‑oriented analytics, historical traffic investigation, and traffic correlation capabilities.