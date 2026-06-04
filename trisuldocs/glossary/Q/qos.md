---
title: What is QoS?
description: QoS, or Quality of Service, is a set of network techniques used to classify, prioritize, and manage traffic during congestion. QoS helps protect latency-sensitive and business-critical applications such as voice, video, and interactive services.
sidebar_label: QoS
sidebar_position: 172
slug: /glossary/qos
keywords:
  - QoS
  - quality of service
  - traffic prioritization
  - congestion management
  - latency control
  - network performance
  - traffic classes
  - traffic shaping
  - DSCP
  - queueing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is QoS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QoS, or Quality of Service, is a set of network techniques used to classify, prioritize, and manage traffic during congestion. QoS helps protect latency-sensitive and business-critical applications such as voice, video, and interactive services."
      }
    },
    {
      "@type": "Question",
      "name": "How does QoS work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QoS classifies traffic into categories and applies policies such as queueing, shaping, policing, scheduling, and packet marking to control how traffic is forwarded during congestion."
      }
    },
    {
      "@type": "Question",
      "name": "Why is QoS important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QoS is important because applications have different sensitivity to latency, jitter, packet loss, and congestion. Realtime traffic such as voice and video often requires more stable delivery behavior than bulk-transfer traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Can QoS increase bandwidth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. QoS does not increase total bandwidth capacity. Instead, it controls how available bandwidth and forwarding behavior are allocated when multiple traffic types compete for network resources."
      }
    }
  ]
};

# What is QoS?

**QoS (Quality of Service)** is a set of network techniques used to classify, prioritize, and manage traffic during congestion. QoS helps protect latency-sensitive and business-critical applications such as voice, video, and interactive services.

QoS does not increase total bandwidth capacity. Instead, it controls how available bandwidth, queue space, and forwarding behavior are allocated when multiple traffic types compete for network resources.

QoS is widely used in enterprise, ISP, telecom, cloud, SD-WAN, and service-provider environments where stable application behavior and predictable traffic delivery are important.

---

## How QoS works
QoS identifies different types of traffic and applies forwarding policies that influence how packets are queued, delayed, prioritized, shaped, or rate-limited during congestion.

Latency-sensitive traffic such as VoIP, video conferencing, interactive applications, and realtime services is commonly prioritized to reduce delay, jitter, and packet loss during periods of heavy utilization.

Lower-priority traffic such as backups, software updates, or bulk file transfers may experience shaping, delay, or reduced forwarding preference during congestion events.

QoS policies usually become most important when links are congested and multiple traffic types compete for limited bandwidth.

For example, during heavy WAN utilization, a QoS policy may prioritize voice traffic over large file transfers so phone calls remain stable even while backups or downloads slow down.

QoS can improve traffic handling during congestion, but it cannot fully compensate for severely overloaded or undersized network links.

Depending on the environment, QoS policies may operate across LAN, WAN, MPLS, wireless, internet-edge, cloud, or SD-WAN infrastructure.

---

## QoS in network operations
QoS is commonly used to protect voice traffic, video conferencing, interactive applications, cloud services, WAN communication, SaaS connectivity, and other latency-sensitive or business-critical traffic from congestion-related degradation.

Operators commonly investigate congested interfaces, queue drops, latency spikes, high jitter, packet loss, DSCP-marking inconsistencies, uneven bandwidth allocation, and incorrect traffic classification.

Because poorly designed QoS policies can affect application responsiveness even when bandwidth utilization appears acceptable, visibility into queueing behavior and traffic prioritization is important for troubleshooting and performance analysis.

Historical visibility is especially useful for investigating intermittent congestion, unstable application behavior, recurring latency spikes, or periods where traffic-prioritization policies may not behave as intended.

---

## Common QoS techniques
| Technique | Purpose |
|---|---|
| Classification | Identify traffic types or applications |
| Marking | Assign forwarding priority or service classes |
| Shaping | Smooth bursty traffic patterns |
| Policing | Enforce bandwidth limits |
| Queueing | Control forwarding order during congestion |
| Scheduling | Allocate forwarding opportunities across queues |

The effectiveness of QoS depends on traffic behavior, application requirements, policy design, and available infrastructure capacity.

---

## Benefits and challenges of QoS
QoS helps networks protect realtime traffic, reduce congestion-related degradation, improve traffic predictability, and prioritize important applications during heavy utilization.

However, inaccurate traffic classification, aggressive policing, inconsistent DSCP handling, queue congestion, multi-vendor policy differences, and limited encrypted-traffic visibility can reduce QoS effectiveness.

Organizations commonly combine flow telemetry, interface monitoring, packet analysis, latency analysis, jitter monitoring, historical traffic visibility, and queue statistics to investigate congestion and validate QoS behavior.

Correlating these telemetry sources helps operators determine whether queueing behavior, congestion, application traffic patterns, or policy configuration is affecting application performance.

---

## In Trisul
Trisul supports QoS-related visibility through flow telemetry analysis, interface monitoring, latency analysis, packet analysis, and historical traffic investigations.

Using NetFlow, IPFIX, packet-analysis workflows, interface telemetry, and historical traffic analysis, operators can analyze congestion trends affecting applications, investigate latency, jitter, packet loss, and retransmissions, correlate traffic behavior with applications and interfaces, troubleshoot traffic-prioritization problems, and perform historical investigations associated with service degradation across enterprise, ISP, WAN, SD-WAN, telecom, and cloud environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What is traffic prioritization?](/glossary/traffic-prioritization)
- [What is congestion?](/glossary/congestion)
- [What is latency?](/glossary/latency)
- What is jitter?
- [What is packet loss?](/glossary/packet-loss)

---

## Frequently asked questions
### What is QoS?

QoS, or Quality of Service, is a set of network techniques used to classify, prioritize, and manage traffic during congestion. QoS helps protect latency-sensitive and business-critical applications such as voice, video, and interactive services.

### How does QoS work?

QoS classifies traffic into categories and applies policies such as queueing, shaping, policing, scheduling, and packet marking to control how traffic is forwarded during congestion.

### Why is QoS important?

QoS is important because applications have different sensitivity to latency, jitter, packet loss, and congestion. Realtime traffic such as voice and video often requires more stable delivery behavior than bulk-transfer traffic.

### Can QoS increase bandwidth?

No. QoS does not increase total bandwidth capacity. Instead, it controls how available bandwidth and forwarding behavior are allocated when multiple traffic types compete for network resources.

### Why is QoS important during congestion?

QoS becomes especially important during congestion because it determines how competing traffic types are prioritized when available bandwidth and queue space become limited.

### Can QoS fix slow internet connections?

QoS can improve how traffic is handled during congestion, but it cannot fully compensate for severely overloaded, unstable, or undersized network links.