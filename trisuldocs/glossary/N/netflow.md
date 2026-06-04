---
title: What is NetFlow?
description: NetFlow is a flow-export technology originally developed by Cisco that summarizes IP traffic into flow records and exports telemetry for bandwidth monitoring, traffic analysis, network visibility, and traffic analytics.
sidebar_label: NetFlow
sidebar_position: 129
slug: /glossary/netflow
keywords:
  - NetFlow
  - NetFlow v5
  - NetFlow v9
  - flow protocol
  - traffic monitoring
  - flow export
  - NetFlow collector
  - network traffic flow
  - bandwidth monitoring
  - traffic visibility
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow is a flow-export technology originally developed by Cisco that summarizes IP traffic into flow records and exports telemetry for bandwidth monitoring, traffic analysis, network visibility, and traffic analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What versions of NetFlow exist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow v5 is a fixed-format export version with predefined fields. NetFlow v9 introduced template-based export formats supporting extensible flow records and vendor-specific fields. IPFIX is the IETF-standardized flow-export protocol derived from the NetFlow v9 model."
      }
    },
    {
      "@type": "Question",
      "name": "How does NetFlow work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow exporters observe packets traversing network devices and summarize them into flow records based on shared attributes such as source and destination addresses, ports, protocols, and interfaces. Exporters periodically send flow telemetry to collectors for aggregation and analysis."
      }
    },
    {
      "@type": "Question",
      "name": "What data does NetFlow export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow commonly exports source and destination IP addresses, ports, protocols, packet and byte counters, timestamps, interface information, TCP flags, and routing-related metadata associated with observed traffic flows."
      }
    }
  ]
};

# What is NetFlow?

**NetFlow** is a flow-export technology originally developed by Cisco that summarizes IP traffic into structured flow records and exports telemetry for bandwidth monitoring, traffic analysis, network visibility, and traffic analytics.

Instead of capturing and storing every packet payload, NetFlow summarizes network traffic flows using metadata associated with communication activity. This allows operators to analyze large-scale traffic behavior efficiently while reducing the storage and processing overhead associated with continuous packet capture.

NetFlow is widely used in enterprise, ISP, telecom, cloud, SD-WAN, and managed-service environments for bandwidth monitoring, traffic investigations, capacity planning, anomaly detection, and historical traffic analysis.

---

## How NetFlow works
NetFlow-enabled devices observe packets traversing interfaces and group related packets into flows.

Flows are commonly identified using a combination of attributes often referred to as the **5-tuple**, including:

- Source IP address
- Destination IP address
- Source port
- Destination port
- Protocol

Depending on the exporter platform and NetFlow version, additional attributes such as interfaces, TCP flags, Type of Service (ToS), autonomous system information, or routing metadata may also be included in exported flow records.

In a typical deployment:

- Routers, switches, firewalls, or probes act as **NetFlow exporters**
- A **NetFlow collector** receives and analyzes exported flow telemetry

When traffic traverses the network, exporters create flow entries describing communication behavior between endpoints. These records are periodically exported to collectors for aggregation, indexing, reporting, and traffic analysis.

Export timing is influenced by active and inactive flow timers configured on the exporter. Long-running flows may be exported periodically using active timers, while inactive timers help remove idle flow entries.

NetFlow export commonly uses UDP transport because it minimizes exporter overhead and supports scalable telemetry export. However, because UDP does not guarantee delivery, export packet loss may occasionally occur in high-volume or congested environments.

A typical NetFlow workflow includes:

1. Traffic traverses a flow-enabled device
2. The exporter groups packets into flow entries
3. Flow records are periodically exported
4. The NetFlow collector aggregates and indexes telemetry
5. Dashboards, reports, alerts, and investigations analyze traffic behavior

---

## NetFlow for traffic visibility and network analysis
NetFlow provides scalable visibility into communication behavior without requiring continuous full packet capture.

Because NetFlow summarizes communication metadata rather than packet payloads, operators can efficiently analyze:

- Which hosts communicated
- Which protocols and applications generated traffic
- Traffic volume and duration
- Interface utilization patterns
- Historical traffic trends

This makes NetFlow operationally valuable for bandwidth monitoring, WAN visibility, backbone analysis, traffic engineering, subscriber visibility, capacity planning, and security investigations.

For example, if a WAN link experiences unexpected congestion, NetFlow telemetry can help identify which applications, hosts, or conversations generated the traffic spike.

Historical flow visibility also helps operators identify recurring congestion conditions, unexpected communication behavior, long-term usage trends, and changes in application activity that may not be obvious through real-time monitoring alone.

In many environments, NetFlow becomes a foundational telemetry source supporting both network performance analysis and security-oriented traffic investigations.

---

## NetFlow versions
| Version | Format | Operational characteristics |
|---|---|---|
| NetFlow v5 | Fixed-format export | Widely supported legacy format with predefined fields |
| NetFlow v9 | Template-based export | Extensible format supporting custom and vendor-specific fields |
| IPFIX | IETF-standardized template-based export | Standardized extensible flow-export protocol derived from the NetFlow v9 model |

Template-based exports such as NetFlow v9 and IPFIX provide greater flexibility because exporters can define custom field structures and additional telemetry attributes.

NetFlow v9 significantly influenced the development of IPFIX, which later became the standardized IETF flow-export protocol defined in RFC 7011 and related specifications.

---

## NetFlow challenges and best practices
Effective NetFlow deployments depend on reliable exporter configuration, accurate timestamps, scalable collectors, and efficient historical retention.

Common operational challenges include handling high telemetry volume, minimizing export packet loss, normalizing multi-vendor telemetry formats, and maintaining long-term flow retention across distributed environments.

Flow sampling can also affect analysis precision. While sampled telemetry improves scalability in high-speed environments, it may reduce visibility into small flows, short-lived sessions, or detailed forensic investigations.

Organizations commonly improve traffic visibility by correlating NetFlow telemetry with SNMP monitoring, DNS visibility, firewall logs, packet analysis, subscriber mappings, and historical traffic investigations.

Combining multiple telemetry sources helps operators move beyond basic utilization monitoring toward deeper traffic-behavior analysis and infrastructure visibility.

---

## In Trisul
Trisul supports NetFlow-based traffic analysis workflows through native collection and analysis of:

- NetFlow v5
- NetFlow v9
- IPFIX
- sFlow
- J-Flow

Using flow telemetry analysis, historical traffic visibility, real-time analytics, and traffic-investigation workflows, operators can monitor bandwidth utilization, analyze top hosts and applications, investigate subscriber and WAN traffic behavior, and perform historical traffic analysis across large-scale environments.

Trisul workflows commonly combine flow telemetry with protocol analysis, behavioral analysis, historical traffic investigations, and subscriber-aware visibility to provide broader operational context across enterprise, ISP, telecom, and carrier environments.

Additional flow-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What is IPFIX?](/glossary/ipfix)
- What is sFlow?
- What is flow monitoring?
- [What is J-Flow?](/glossary/jflow)
- [What is a NetFlow Analyzer?](/glossary/netflow-analyzer)
- [What is a flow collector?](/glossary/flow-collector)

---

## Frequently asked questions
### What is NetFlow?

NetFlow is a flow-export technology originally developed by Cisco that summarizes IP traffic into flow records and exports telemetry for bandwidth monitoring, traffic analysis, network visibility, and traffic analytics.

### How does NetFlow work?

NetFlow exporters observe packets traversing network devices and summarize them into flow records based on shared traffic attributes such as IP addresses, ports, protocols, and interfaces. Exporters periodically send this telemetry to NetFlow collectors for aggregation and analysis.

### What is a NetFlow collector?

A NetFlow collector is a platform that receives, stores, indexes, and analyzes exported flow telemetry from routers, switches, firewalls, and other NetFlow-enabled devices.

### What versions of NetFlow exist?

NetFlow v5 is a fixed-format export version with predefined fields. NetFlow v9 introduced template-based export formats supporting extensible flow records and vendor-specific fields. IPFIX is the IETF-standardized flow-export protocol derived from the NetFlow v9 architecture.

### What data does NetFlow export?

NetFlow commonly exports source and destination IP addresses, ports, protocols, packet and byte counters, timestamps, interface information, TCP flags, and routing-related metadata associated with observed traffic flows.

### What is the difference between NetFlow and packet capture?

Packet capture stores full packet payloads and protocol contents, while NetFlow summarizes communication behavior using flow metadata. NetFlow is generally more scalable for long-term traffic visibility and large distributed environments.