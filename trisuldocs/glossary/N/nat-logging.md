---
title: What is NAT logging?
description: NAT logging records Network Address Translation events including IP address mappings, port translations, protocols, and timestamps to support troubleshooting, subscriber attribution, security investigations, and compliance workflows.
sidebar_label: NAT logging
sidebar_position: 127
slug: /glossary/nat-logging
keywords:
  - NAT logging
  - network address translation logging
  - CGNAT logging
  - carrier-grade NAT logging
  - NAT event logging
  - NAT session logging
  - NAT events
  - IP translation logging
  - port translation logging
  - NAT tracking
  - security auditing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NAT logging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging records Network Address Translation events that occur on routers, firewalls, carrier-grade NAT systems, and NAT gateways. It tracks IP address mappings, port translations, protocols, and timestamps to support troubleshooting, subscriber attribution, security investigations, and compliance workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT logging important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging is important because address translation obscures the original internal source of traffic. NAT logs preserve translation mappings so operators and investigators can correlate translated traffic with the originating internal host or subscriber."
      }
    },
    {
      "@type": "Question",
      "name": "What data does NAT logging capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging commonly captures original and translated IP addresses, source and destination ports, protocol information, timestamps, session identifiers, and translation lifecycle events associated with NAT activity."
      }
    },
    {
      "@type": "Question",
      "name": "How does NAT logging support security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging supports security investigations by helping analysts correlate translated traffic with internal hosts, subscribers, sessions, and historical activity associated with suspicious or unauthorized communication."
      }
    }
  ]
};

# What is NAT logging?

**NAT logging** records **Network Address Translation (NAT) events** including IP address mappings, port translations, protocols, timestamps, and session activity. It preserves the relationship between original internal addresses and translated external addresses so operators can trace traffic back to the originating host, subscriber, or session.

NAT logging is operationally important in enterprise, ISP, telecom, broadband, carrier-grade NAT (CGNAT), and cloud environments where many users or systems may share limited public IPv4 address space.

Because NAT rewrites addressing information during packet forwarding, logging and retention workflows are often necessary for troubleshooting, subscriber attribution, security investigations, auditability, and regulatory compliance.

In large-scale CGNAT deployments, NAT logging is especially important because multiple subscribers may share the same public IP address simultaneously. Accurate logging allows operators and investigators to determine which internal host or subscriber generated specific traffic at a particular time.

---

## How NAT logging works
NAT logging occurs on routers, firewalls, CGNAT systems, broadband gateways, and other devices performing address translation.

When a translation occurs, the device creates a NAT state entry that associates:

- Original internal IP address and port
- Translated external IP address and port
- Destination IP address and destination port
- Protocol details
- Session timing information

Depending on the platform and deployment model, NAT events may be exported through:

- Syslog
- IPFIX
- NetFlow extensions
- IPDR records
- Session records
- Vendor-specific telemetry and logging workflows

A typical NAT logging workflow includes:

1. Traffic is translated to a different address or port
2. A NAT state entry is created
3. Translation details are logged or exported
4. Records are retained for analysis, auditing, or compliance
5. Analysts correlate translated traffic with internal hosts or subscribers

NAT logging implementations vary depending on platform and architecture. Some systems export detailed NAT session events, while others log only translation creation and deletion events or rely on flow telemetry extensions such as IPFIX NAT event fields.

In high-scale CGNAT environments, NAT logging volume can become operationally significant because each translation event may generate multiple records.

Some service-provider environments use deterministic NAT techniques to reduce logging overhead and simplify subscriber attribution workflows by allocating predictable port ranges to subscribers.

---

## NAT logging in network operations
In network and security operations, NAT logging is commonly used for:

- Subscriber attribution
- Incident investigations
- Abuse and complaint handling
- Security analysis
- CGNAT troubleshooting
- Regulatory and compliance requirements
- Session reconstruction
- Historical traffic investigations

A common use case involves correlating suspicious or unauthorized traffic observed from a shared public IP address with the subscriber or internal host that generated the activity.

Operational teams commonly correlate NAT logs with:

- NetFlow and IPFIX telemetry
- Firewall logs
- Subscriber mappings
- AAA records
- DNS activity
- Historical traffic analysis

Accurate timestamp synchronization is operationally critical because even small timing inconsistencies can complicate subscriber attribution and traffic reconstruction workflows.

RFC 6302 specifically recommends logging source ports and accurate timestamps because IP addresses alone are often insufficient in NAT and CGNAT environments.

---

## Common NAT logging fields
| Field | Description |
|---|---|
| Original source IP | Internal address before translation |
| Translated source IP | External address after translation |
| Source port mapping | Original and translated source-port relationship |
| Destination IP and port | Remote endpoint information |
| Protocol | TCP, UDP, ICMP, or other protocol details |
| Timestamp | Translation creation, update, or expiration time |
| NAT event type | Session creation, deletion, or update event |
| Session identifier | Identifier associated with the translation session |

Exact fields vary depending on NAT implementation, logging method, and telemetry format.

---

## NAT logging challenges and best practices
Effective NAT logging depends on reliable timestamp synchronization, scalable retention workflows, accurate subscriber attribution, and correlation with broader telemetry sources.

Common operational challenges include:

- High logging volume in CGNAT environments
- Large-scale subscriber attribution workflows
- Incomplete retention policies
- Time synchronization inconsistencies
- Distributed NAT infrastructure
- Correlation complexity across multiple systems

Organizations commonly improve visibility by correlating NAT logs with flow telemetry, subscriber systems, DNS visibility, firewall telemetry, and historical traffic analysis platforms.

Long-term retention and efficient indexing are especially important because investigations may require reconstruction of historical communication activity across large operational datasets.

RFC 6888 and related CGNAT operational guidance also emphasize the importance of logging accuracy and correlation workflows in large-scale address-sharing environments.

---

## In Trisul
Trisul supports NAT-related investigation and traffic-analysis workflows through flow telemetry analysis, historical traffic visibility, subscriber-aware investigations, and correlation of translated traffic activity.

Using NetFlow, IPFIX, subscriber mappings, historical traffic analysis, and flow-investigation workflows, operators can:

- Correlate translated traffic with internal hosts or subscriber activity
- Investigate communication behavior associated with NAT and CGNAT environments
- Support CGNAT troubleshooting and historical traffic investigations
- Analyze traffic patterns associated with translated sessions
- Support subscriber-attribution and reporting workflows

These capabilities are particularly useful for ISPs, telecom operators, broadband providers, and enterprise environments where NAT visibility and subscriber attribution are operationally important.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is CGNAT?](/glossary/cgnat)
- [What is security auditing?](/glossary/security-auditing)
- [What is firewall logging?](/glossary/firewall-logging)
- [What is incident investigation?](/glossary/incident-investigation)
- [What is Syslog?](/glossary/syslog)

---

## Frequently asked questions
### What is NAT logging?

NAT logging records Network Address Translation events that occur on routers, firewalls, carrier-grade NAT systems, and NAT gateways. It tracks IP address mappings, port translations, protocols, timestamps, and session activity to support troubleshooting, subscriber attribution, security investigations, and compliance workflows.

### Why is NAT logging important?

NAT logging is important because address translation obscures the original internal source of traffic. NAT logs preserve translation mappings so operators and investigators can correlate translated traffic with the originating internal host or subscriber, especially in CGNAT environments where multiple users share the same public IP address.

### What data does NAT logging capture?

NAT logging commonly captures original and translated IP addresses, source and destination ports, protocol information, timestamps, session identifiers, and NAT translation lifecycle events associated with network activity.

### How does NAT logging support security?

NAT logging supports security investigations by helping analysts correlate translated traffic with internal hosts, subscribers, sessions, and historical activity associated with suspicious or unauthorized communication.

### Why are timestamps and source ports important in NAT logging?

In NAT and CGNAT environments, many users may share the same public IP address. Accurate timestamps and source-port information help investigators identify which subscriber or internal host generated a specific connection at a particular time.