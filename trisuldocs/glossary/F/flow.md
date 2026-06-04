---
title: What is a flow?
description: A network flow is a sequence of packets sharing common traffic attributes such as source and destination addresses, ports, and protocol, treated as a logical unit of communication for monitoring and analysis.
sidebar_label: Flow
sidebar_position: 58
slug: /glossary/flow
keywords:
  - network flow
  - flow monitoring
  - 5-tuple
  - traffic flow
  - flow record
  - flow analysis
  - packet flow
  - network telemetry
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a flow and a packet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A packet is a single unit of network data, while a flow is a logical grouping of packets that share common communication attributes such as addresses, ports, and protocol. Flow analysis summarizes communication behavior rather than storing every packet individually."
      }
    },
    {
      "@type": "Question",
      "name": "How is a flow different from a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow is often treated as directional telemetry describing packets moving in one direction between endpoints, while a session generally refers to the full bidirectional communication exchange. Some analytics platforms correlate directional flows into conversation-oriented views."
      }
    },
    {
      "@type": "Question",
      "name": "When does a flow end?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow expiration depends on exporter behavior, protocol handling, and timeout configuration. TCP flows may end after FIN or RST activity, while inactive or long-running flows are commonly expired using inactive and active timeout policies."
      }
    },
    {
      "@type": "Question",
      "name": "What information does a flow record contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow record commonly contains addresses, ports, protocol identifiers, byte and packet counters, timestamps, and exporter metadata. Extended telemetry formats such as IPFIX may also include VLAN information, BGP attributes, application identifiers, or interface metadata."
      }
    },
    {
      "@type": "Question",
      "name": "Can flow data help analyze encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Although flow telemetry does not expose encrypted payload content, it can still reveal behavioral indicators such as communication timing, transfer volume, protocol usage, destination patterns, and long-duration sessions that may support operational or security analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow sampling affect visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling reduces telemetry volume by observing only a subset of traffic. This improves scalability but may reduce visibility into low-volume, short-duration, or infrequent communications. The operational impact depends on sampling ratios, exporter behavior, and monitoring requirements."
      }
    }
  ]
};

# What is a flow?

A **network flow** is a logical grouping of packets that share common traffic attributes such as **source IP**, **destination IP**, **source port**, **destination port**, and **protocol**. These five fields are known as the **5‑tuple**, and they form the core key that defines a flow. Instead of tracking each packet individually, telemetry systems group matching packets into a single flow record and summarize communication behavior using metadata such as byte counts, packet counts, and timestamps. This lightweight, metadata‑driven model is widely used for **traffic analysis, capacity planning, security investigations, and historical visibility** across enterprise, datacenter, ISP, and cloud environments.

---

## How a flow works
As packets pass through a monitored device, the exporter or probe inspects packet headers and groups matching traffic into a flow based on the 5‑tuple. The exporter maintains a **flow cache**, accumulating counters and timers for each active session, and then exports the record when the flow ends—either due to protocol‑specific events (like TCP FIN/RST) or **active/inactive timeout policies**. A typical flow record includes **addresses, ports, protocol, byte and packet counts, start/end timestamps, direction, interface, and exporter metadata**; extended formats such as **IPFIX** can add **VLAN IDs, MPLS labels, BGP attributes, application identifiers**, and other contextual fields. The record is metadata‑oriented and does not contain packet payloads, making it compact and scalable.

---

## Flows in network operations
In **NOC** environments, flows underpin **bandwidth trending**, **capacity planning**, **interface‑utilization analysis**, and **application‑visibility**, enabling operators to spot top talkers, saturated links, unexpected traffic spikes, and routing asymmetry. In **SOC** workflows, flows provide **threat‑hunting**, **historical‑incident**, and **lateral‑movement** visibility by revealing which hosts talk to whom, how often, and with how much data, even when traffic is encrypted. In **ISP and carrier** settings, flows drive **ASN‑level analysis**, **subscriber‑visibility**, **peering‑visibility**, and **traffic‑engineering** by aggregating telemetry across thousands of exporters and treating each communication as a discrete, measurable unit.

---

## Flow vs full packet capture
A **flow** is a **summary of communication behavior** built from packet metadata; it does not preserve payloads and is highly scalable over long retention windows. **Full packet capture** preserves **individual packets and, where possible, their payloads**, enabling deep protocol and forensic analysis but at much higher storage and processing cost. In practice, organizations combine both: **topology‑wide flow visibility** for broad trending and detection, and **selective packet capture** at key chokepoints for payload‑level validation, with workflows that pivot from flow records into related packet captures when needed.

---

## Flow directionality and sessions
Most exporters treat flows as **directional**: **client‑to‑server** and **server‑to‑client** traffic appear as separate records even though they belong to the same logical session. A **session or conversation** is the bidirectional exchange that analytics platforms can reconstruct by **correlating, stitching, or merging** directional flows. Some platforms provide **biflow or conversation‑oriented views** for easier troubleshooting and incident‑reconstruction, while still storing the underlying directional records for detailed analysis. Whether flows are directional or stitched depends on the exporter, telemetry protocol, and correlation logic in the collector.

---

## Flow sampling and visibility
To reduce **exporter load, export bandwidth, and storage**, many environments use **flow sampling**, where only a subset of traffic is observed and exported. Sampling improves scalability and is often sufficient for **trending** and **high‑level capacity planning**, but it can underrepresent **low‑volume, short‑lived, or sparse communications**, which are important for security and anomaly detection. Operators balance **sampling ratios**, **exporter behavior**, and **monitoring goals**, sometimes keeping **unsampled visibility at critical crossroads** while sampling broadly in the core to maintain both coverage and fidelity.

---

## Operational considerations
Flow‑based visibility depends heavily on **exporter placement**, **telemetry completeness**, **retention depth**, and **collector scalability**. Coverage gaps, exporter overload, **asymmetric routing**, and **sampling inconsistencies** can all distort **trending**, **anomaly detection**, and **incident investigation**. Organizations validate telemetry quality by comparing **flow‑based metrics** with **interface counters**, **baseline traffic**, and **packet‑level checks**, and they explicitly design **exporter policies, timeout settings, and retention architecture** so that flows provide a trustworthy, consistent view of network behavior over time.

---

## How Trisul handles flows
Trisul supports **scalable flow analysis** by ingesting **NetFlow, IPFIX, sFlow**, and **packet‑derived flows**, then exposing them through **historical traffic analysis**, **Explore Flows**, **Flow Taggers**, **Flow Trackers**, and **Top‑K analytics**. It can generate flows directly from packet observations when native exporters are sparse or oversampled, and it correlates multi‑source telemetry for **multi‑device, multi‑hop** environments. This makes Trisul well‑suited for **NOC**, **SOC**, and **ISP‑scale** deployments where operators need to pivot quickly from high‑level dashboards to detailed flow‑level investigations without switching tools. The platform is optimized for **metadata‑driven visibility** rather than payload‑centric forensics, aligning it closely with operational and security‑focused flow use cases.

---

## Related terms
- Network flow  
- Flow monitoring  
- 5‑tuple  
- Traffic flow  
- Flow record  
- [Flow analysis](/glossary/flow-analysis)
- [Flow tagger](/glossary/flow-tagger)
- [Flow tracker](/glossary/flow-tracker)
- Flow sampling  
- [Network security monitoring](/glossary/network-security-monitoring)

---

## Frequently asked questions
### What is the difference between a flow and a packet?

A packet is a single unit of network data, while a flow is a logical grouping of packets that share common communication attributes such as addresses, ports, and protocol. Flow analysis summarizes communication behavior rather than storing every packet individually.

### How is a flow different from a session?

A flow is often treated as directional telemetry describing packets moving in one direction between endpoints, while a session generally refers to the full bidirectional communication exchange. Some analytics platforms correlate directional flows into conversation‑oriented views.

### When does a flow end?

Flow expiration depends on exporter behavior, protocol handling, and timeout configuration. TCP flows may end after FIN or RST activity, while inactive or long‑running flows are commonly expired using inactive and active timeout policies.

### What information does a flow record contain?

A flow record commonly contains addresses, ports, protocol identifiers, byte and packet counters, timestamps, and exporter metadata. Extended telemetry formats such as IPFIX may also include VLAN information, BGP attributes, application identifiers, or interface metadata.

### Can flow data help analyze encrypted traffic?

Yes. Although flow telemetry does not expose encrypted payload content, it can still reveal behavioral indicators such as communication timing, transfer volume, protocol usage, destination patterns, and long‑duration sessions that may support operational or security analysis.

### How does flow sampling affect visibility?

Sampling reduces telemetry volume by observing only a subset of traffic. This improves scalability but may reduce visibility into low‑volume, short‑duration, or infrequent communications. The operational impact depends on sampling ratios, exporter behavior, and monitoring requirements.