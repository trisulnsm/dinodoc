---
title: What is CGNAT?
description: CGNAT (Carrier-Grade NAT) is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers. It helps ISPs conserve IPv4 address space while continuing to provide Internet connectivity at scale.
sidebar_label: CGNAT
sidebar_position: 24
slug: /glossary/cgnat
keywords:
  - CGNAT
  - carrier grade NAT
  - large scale NAT
  - ISP NAT
  - shared public IP
  - IPv4 exhaustion
  - subscriber attribution
  - NAT translation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT (Carrier-Grade NAT) is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers."
      }
    },
    {
      "@type": "Question",
      "name": "How does CGNAT work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT translates private subscriber addresses into shared public IPv4 addresses using port-based translation. Multiple subscribers can share the same public IP address while remaining distinguishable through port mappings."
      }
    },
    {
      "@type": "Question",
      "name": "Why does CGNAT make analytics more complex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT makes analytics more complex because many subscribers share the same public IPv4 address. Subscriber attribution requires NAT translation logs and timestamp correlation."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CGNAT logs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT logs are important because they allow operators to associate public IP addresses and ports with specific subscribers for troubleshooting, abuse handling, compliance, and security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CGNAT environments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports operational visibility in CGNAT environments through flow analytics, subscriber-oriented traffic analysis, historical investigation workflows, and traffic correlation capabilities."
      }
    }
  ]
};

# What is CGNAT?

**CGNAT (Carrier-Grade NAT)** is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers. It helps ISPs conserve limited IPv4 address space while continuing to provide Internet connectivity for large subscriber bases.

---

## How CGNAT works
CGNAT translates private subscriber addresses (for example, RFC 1918) into shared public IPv4 addresses using port-based translation (PAT). Multiple subscribers can share the same public IP address, with each session separated by its unique port mapping.

Typical stages:

1. **Subscriber traffic generation** – Devices use private IP addresses.  
2. **Address translation** – CGNAT devices translate private addresses to shared public IPv4 addresses.  
3. **Port allocation** – A public source port is assigned for each session.  
4. **Session tracking** – A state table maintains the mapping for the duration of the session.  
5. **Log generation** – NAT‑translation metadata may be recorded for traceability and compliance.  
6. **Session expiration** – Port mappings are released when the session ends.

CGNAT commonly relies on Port Address Translation, large‑scale state tables, and NAT logging systems to manage and audit the translations.

---

## Why CGNAT is widely used
CGNAT became common because globally routable IPv4 addresses are limited. Benefits include:

- Delayed IPv4 exhaustion and reduced public IPv4 consumption.  
- Support for large subscriber populations on a smaller public IP pool.  
- Continued IPv4 access for subscribers while IPv6 adoption grows.  

CGNAT is often used as a transitional strategy during the IPv4‑to‑IPv6 migration.

---

## CGNAT in network operations
CGNAT introduces operational complexity because a single public IPv4 address no longer maps to one subscriber. Common considerations include:

- **Subscriber traceability** – Linking public IP/port activity to a specific subscriber.  
- **Security investigations** – Identifying sources of abuse or attacks.  
- **Law‑enforcement workflows** – Providing time‑based NAT‑mapping data when requested.  
- **Compliance and auditing** – Maintaining logs that meet regulatory requirements.  
- **Troubleshooting** – Diagnosing issues in sessions that share public addresses.  

Reliable correlation among NAT logs, timestamps, and port mappings relies on strict time synchronization and well‑defined retention policies.

---

## CGNAT vs standard NAT
| Aspect                 | Standard NAT                               | CGNAT                                     |
|------------------------|--------------------------------------------|-------------------------------------------|
| Deployment scope       | Home or small enterprise edge              | ISP or carrier scale                      |
| Public IP sharing      | A few addresses per gateway                | Many subscribers per public IP            |
| Subscriber scale       | Small user groups                          | Large subscriber populations              |
| Logging complexity     | Low, often minimal                         | High, structured and regulated            |
| Operational requirements| Basic translation                         | Large‑scale traceability and compliance   |

CGNAT operates at a much larger scale and requires more sophisticated logging and visibility than edge‑level NAT.

---

## Why CGNAT logging matters
Because many subscribers share public IPv4 addresses, operators must log the NAT mappings to maintain traceability. Typical log fields include:

- Subscriber private IP address  
- Translated public IPv4 address  
- Source and translated ports  
- Protocol (TCP/UDP/ICMP)  
- Session timestamps  

These logs help operators:

- Investigate abuse reports and security incidents.  
- Troubleshoot connectivity problems.  
- Support compliance and lawful‑intercept workflows.  
- Attribute traffic to specific subscribers with time‑based precision.  

Retention periods and logging policies are usually driven by local regulations and operator requirements.

---

## In Trisul
Trisul is primarily a network‑traffic analytics platform and does not replace CGNAT gateways or NAT logging appliances.  
However, it can enhance visibility in CGNAT environments through:

- **Flow‑based traffic analytics** (NetFlow, IPFIX, sFlow) to understand behavior on shared addresses.  
- **Subscriber‑oriented analytics** when AAA or other systems provide user‑level identifiers.  
- **Historical traffic investigation** and **traffic‑correlation workflows** across interfaces and time periods.  
- **Aggregate Flows** and **Explore Flows** for usage summarization and drill‑down analysis.  

These capabilities help operators analyze traffic patterns, detect anomalies, and improve operational visibility even when subscribers share public IP addresses.

---

## Related terms
- [CGNAT](/glossary/cgnat)
- Carrier‑Grade NAT  
- [NAT](/glossary/nat)
- [IPDR](/glossary/ipdr)
- IPv4 exhaustion  
- [Subscriber mapping](/glossary/subscriber-mapping)
- [CGNAT logging](/glossary/cgnat-logging)
- Flow monitoring  
- Lawful intercept  

---

## Frequently asked questions
### What is CGNAT?

CGNAT (Carrier‑Grade NAT) is a large‑scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers.

### How does CGNAT work?

CGNAT translates private subscriber addresses into shared public IPv4 addresses using port‑based translation. Multiple subscribers can share the same public IP address while remaining distinguishable through their port mappings.

### Why does CGNAT make analytics more complex?

CGNAT makes analytics more complex because many subscribers share the same public IPv4 address. Subscriber attribution requires NAT translation logs and precise timestamp correlation.

### Why are CGNAT logs important?

CGNAT logs are important because they allow operators to associate public IP addresses and ports with specific subscribers for troubleshooting, abuse handling, compliance, and security investigations.

### How does Trisul relate to CGNAT environments?

Trisul supports operational visibility in CGNAT environments through flow analytics, subscriber‑oriented traffic analysis, historical investigation workflows, and traffic correlation capabilities.