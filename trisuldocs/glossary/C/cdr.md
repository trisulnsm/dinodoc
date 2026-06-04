---
title: What is a CDR?
description: A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information. CDRs are widely used in telecom systems for billing, reporting, auditing, and operational analytics.
sidebar_label: CDR
sidebar_position: 23
slug: /glossary/cdr
keywords:
  - CDR
  - call detail record
  - telecom record
  - session log
  - billing record
  - usage record
  - telecom analytics
  - subscriber usage
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information."
      }
    },
    {
      "@type": "Question",
      "name": "What does a CDR contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR typically contains caller and callee identifiers, timestamps, duration, routing information, service type, and usage details. The exact fields depend on the telecom platform and communication service."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CDRs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are important because they provide structured communication records used for billing, auditing, troubleshooting, subscriber analytics, operational reporting, and compliance workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How are CDRs used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are used to analyze subscriber behavior, communication patterns, service utilization, routing activity, and usage trends across telecom and service-provider environments."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CDR-style analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul can analyze session-oriented and flow-oriented communication metadata for traffic visibility, usage analysis, subscriber-oriented workflows, and operational analytics."
      }
    }
  ]
};

# What is a CDR?

A **CDR (Call Detail Record)** is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information. CDRs are widely used in telecom networks, VoIP systems, mobile carriers, and subscriber‑oriented services for billing, usage tracking, and operational analytics.

---

## How a CDR works
A CDR is generated each time a communication event or session starts and completes. The system records key attributes such as who is involved, when the session occurred, how long it lasted, and how much service was consumed. After the session ends, the final record is stored and made available for billing, reporting, or analytics.

Typical stages:
1. **Session initiation** – A communication event begins.  
2. **Metadata collection** – Session attributes are recorded in real time.  
3. **Session completion** – Duration and usage metrics are finalized.  
4. **Record generation** – A structured CDR is created.  
5. **Storage and processing** – Records feed into billing, reporting, or analytics systems.  

CDRs contain metadata, not content; they describe the session rather than the conversation itself.

---

## CDRs in network operations
In telecom and service‑provider environments, CDRs provide structured visibility into communication activity. Common use cases include:

- **Subscriber billing** and usage accounting  
- **Operational reporting** and service dashboards  
- **Fraud investigation** and anomaly detection  
- **Subscriber behavior analysis** and churn‑risk modeling  
- **Regulatory and compliance reporting**  
- **Troubleshooting** service‑quality issues  

CDRs also help operators understand traffic demand, peak‑usage patterns, and the behavior of different user segments.

---

## Common CDR fields
| Field              | Meaning |
|--------------------|---------|
| Source             | Session initiator or calling party |
| Destination        | Receiving party or destination |
| Start time         | When the session began |
| Duration           | Length of the communication |
| Usage              | Amount of service consumed (for example, minutes or data volume) |
| Service type       | Voice, messaging, data, or multimedia |
| Routing information| Path or gateway metadata |
| Session status     | Successful, failed, dropped, or abandoned |

The exact fields depend on the vendor, protocol, and service type (for example, voice, SMS, or data).

---

## Why CDRs are useful
CDRs provide structured, machine‑readable communication metadata that is easy to aggregate and analyze at scale. Benefits include:

- Standardized reporting and billing workflows  
- Historical visibility into subscriber usage  
- Clear audit trails for compliance  
- Straightforward analytics on communication patterns  

Their consistent format makes large‑scale processing practical and enables automation across billing, operations, and analytics systems.

---

## CDRs vs flow records
| Dimension           | CDR                                        | Flow record                                      |
|---------------------|--------------------------------------------|--------------------------------------------------|
| Primary focus       | Communication sessions                     | Network traffic flows                            |
| Typical environment | Telecom and subscriber systems             | IP network monitoring                            |
| Common use          | Billing, subscriber analytics               | Traffic visibility and flow analysis              |
| Data scope          | Session‑level metadata                     | Packet‑ and flow‑level metadata                   |
| Operational focus   | Usage accounting and services              | Network behavior and utilization                  |

While both describe communication activity, CDRs are generally subscriber‑ or session‑oriented, whereas flow records focus on network‑level visibility and performance.

---

## In Trisul
Trisul is primarily a network‑traffic analytics platform and does not generate CDRs like a telecom‑billing system.  
However, it can support CDR‑style analytics by analyzing session‑oriented and flow‑oriented communication metadata for traffic visibility, usage analysis, and subscriber‑oriented workflows.  
Capabilities such as **flow‑based telemetry**, **subscriber‑oriented traffic tagging**, **historical trending**, **Aggregate Flows**, and **Explore Flows** help operators investigate communication behavior, usage patterns, and service‑level activity in ISP and service‑provider environments.

---

## Related terms
- [CDR](/glossary/cdr)
- Call Detail Record
- [IPDR](/glossary/ipdr)
- OSS/BSS
- [Subscriber billing](/glossary/subscriber-billing)
- Session logs
- Telecom reporting
- Flow monitoring
- [Subscriber analytics](/glossary/subscriber-analytics)

---

## Frequently asked questions
### What is a CDR?

A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information.

### What does a CDR contain?

A CDR typically contains caller and callee identifiers, timestamps, duration, routing information, service type, and usage details. The exact fields depend on the telecom platform and communication service.

### Why are CDRs important?

CDRs are important because they provide structured communication records used for billing, auditing, troubleshooting, subscriber analytics, operational reporting, and compliance workflows.

### How are CDRs used in analytics?

CDRs are used to analyze subscriber behavior, communication patterns, service utilization, routing activity, and usage trends across telecom and service‑provider environments.

### How does Trisul relate to CDR-style analytics?

Trisul can analyze session‑oriented and flow‑oriented communication metadata for traffic visibility, usage analysis, subscriber‑oriented workflows, and operational analytics.