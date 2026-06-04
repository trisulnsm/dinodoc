---
title: What is network performance?
description: Network performance describes how effectively a network delivers traffic in terms of latency, throughput, packet loss, jitter, utilization, and reliability across applications and services.
sidebar_label: Network performance
sidebar_position: 138
slug: /glossary/network-performance
keywords:
  - network performance
  - latency
  - throughput
  - packet loss
  - jitter
  - reliability
  - network latency
  - application performance
  - congestion analysis
  - network troubleshooting
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is network performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance describes how effectively a network delivers traffic in terms of latency, throughput, packet loss, jitter, utilization, and reliability across applications and services."
      }
    },
    {
      "@type": "Question",
      "name": "What affects network performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance can be affected by bandwidth limits, congestion, queueing, packet loss, latency, jitter, routing conditions, application behavior, retransmissions, and device or interface health."
      }
    },
    {
      "@type": "Question",
      "name": "Why is network performance important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance is important because degraded performance can affect application responsiveness, service availability, voice and video quality, operational efficiency, and user experience even when infrastructure remains reachable."
      }
    },
    {
      "@type": "Question",
      "name": "How is network performance measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance is measured using metrics such as latency, jitter, throughput, utilization, retransmissions, error rates, and packet loss together with traffic-analysis and telemetry-correlation workflows."
      }
    }
  ]
};

# What is network performance?

**Network performance** describes how effectively a network delivers traffic in terms of latency, throughput, packet loss, jitter, utilization, and reliability across applications and services.

Network performance directly affects application responsiveness, voice and video quality, file transfers, cloud connectivity, and overall user experience across network infrastructure.

In enterprise, ISP, telecom, cloud, SD-WAN, and data-center environments, performance analysis helps operators identify congestion, instability, inefficient traffic behavior, routing problems, overloaded infrastructure, and application-delivery issues that may affect communication quality.

Unlike basic availability monitoring, network performance analysis focuses on how well communication occurs across the network, not simply whether systems or links remain reachable.

---

## How network performance is evaluated
Network performance is evaluated using multiple telemetry signals and behavioral metrics rather than a single measurement.

Key performance indicators commonly include latency, throughput, jitter, packet loss, utilization, retransmissions, and interface error rates. These metrics help operators understand both transport behavior and application-delivery quality across the network.

The relationship between these metrics is operationally important because performance problems are often interconnected rather than isolated.

For example, congestion may increase queueing delays and latency, packet loss may reduce throughput because TCP retransmits lost packets, and excessive jitter can severely affect VoIP or real-time video quality even when bandwidth utilization appears normal.

Similarly, a WAN link may show moderate utilization while users still experience poor application performance because latency spikes, retransmissions, routing instability, or packet loss affect application responsiveness.

Depending on the environment, performance analysis may involve flow telemetry, packet analysis, SNMP metrics, synthetic testing, DNS visibility, application telemetry, and infrastructure monitoring workflows.

Operators commonly correlate these telemetry sources to understand not only whether performance degraded, but also which traffic patterns, applications, infrastructure conditions, or routing behaviors contributed to the issue.

---

## Network performance in network operations
In operational environments, network performance analysis helps teams maintain application quality, infrastructure stability, and reliable communication across distributed systems.

Performance analysis is commonly used for WAN visibility, cloud and SD-WAN monitoring, VoIP quality analysis, congestion investigations, application troubleshooting, backbone visibility, ISP and telecom monitoring, SLA reporting, and long-term capacity planning.

Because modern applications often depend on cloud services, encrypted traffic, distributed infrastructure, and real-time communication, performance degradation may occur even when interfaces remain operational and link availability appears normal.

For example, users may experience slow SaaS applications, unstable VoIP calls, or delayed transactions because of packet loss, DNS delays, retransmissions, asymmetric routing, or intermittent latency spikes that are not immediately visible through basic interface monitoring alone.

Historical visibility is especially important because intermittent congestion, unstable routing behavior, traffic bursts, or application slowdowns may only become visible when operators correlate telemetry across different systems and time periods.

---

## Common performance metrics
| Metric | Operational meaning |
|---|---|
| Latency | Delay between transmission and delivery |
| Jitter | Variation in packet delay over time |
| Throughput | Actual volume of successfully delivered traffic |
| Packet loss | Percentage of packets not successfully delivered |
| Utilization | Portion of available link capacity currently used |
| Retransmissions | Repeated packet delivery attempts associated with transport issues |
| Error rates | Interface or transport-layer transmission errors |

These metrics are commonly analyzed together because isolated measurements may not fully explain traffic behavior or application performance.

---

## Network performance challenges and best practices
Effective performance analysis depends on broad telemetry visibility, accurate timestamps, historical retention, and meaningful correlation across traffic, infrastructure, and application telemetry.

Common challenges include distributed infrastructure visibility gaps, encrypted-traffic limitations, dynamic application behavior, high-volume telemetry environments, multi-vendor infrastructure correlation, incomplete application visibility, and long-term telemetry retention at scale.

Organizations commonly improve troubleshooting accuracy by combining flow telemetry, packet analysis, SNMP metrics, DNS visibility, application telemetry, and historical traffic analysis into unified investigation workflows.

Correlating these telemetry sources helps operators perform root-cause analysis more effectively by identifying how traffic behavior, infrastructure conditions, application activity, and routing changes are related during performance degradation events.

As environments become increasingly distributed and application-driven, performance analysis increasingly depends on telemetry correlation and historical visibility rather than isolated interface metrics alone.

---

## In Trisul
Trisul supports network-performance analysis workflows through flow telemetry analysis, packet-analysis workflows, historical traffic visibility, and traffic-investigation capabilities.

Using NetFlow, IPFIX, sFlow, packet analysis, interface telemetry, and historical analysis workflows, operators can analyze traffic behavior, investigate latency and congestion conditions, correlate traffic patterns with infrastructure activity, and perform historical performance investigations across enterprise, ISP, telecom, WAN, and cloud environments.

Trisul workflows commonly combine flow analysis, packet analysis, historical traffic visibility, protocol analysis, and telemetry correlation to provide broader insight into application behavior, traffic conditions, and infrastructure performance across distributed environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- [What is congestion detection?](/glossary/congestion-detection)
- [What is VoIP?](/glossary/voip)
- What is realtime traffic?
- [What is application monitoring?](/glossary/application-monitoring)
- [What is traffic pattern analysis?](/glossary/traffic-pattern-analysis)

---

## Frequently asked questions
### What is network performance?

Network performance describes how effectively a network delivers traffic in terms of latency, throughput, packet loss, jitter, utilization, and reliability across applications and services.

### What affects network performance?

Network performance can be affected by bandwidth limits, congestion, queueing, packet loss, latency, jitter, routing conditions, application behavior, retransmissions, and device or interface health.

### Why is network performance important?

Network performance is important because degraded performance can affect application responsiveness, service availability, voice and video quality, operational efficiency, and user experience even when infrastructure remains reachable.

### How is network performance measured?

Network performance is measured using metrics such as latency, jitter, throughput, utilization, retransmissions, error rates, and packet loss together with traffic-analysis and telemetry-correlation workflows.

### Why can applications feel slow even when bandwidth usage appears normal?

Applications may still perform poorly because latency spikes, packet loss, retransmissions, DNS delays, or routing instability can affect communication quality even when bandwidth utilization is moderate.

### How does packet loss affect performance?

Packet loss can reduce application responsiveness and throughput because transport protocols such as TCP retransmit lost packets. Excessive packet loss may also affect VoIP, video conferencing, cloud applications, and real-time communication quality.