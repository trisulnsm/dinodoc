---
title: What is latency?
description: Latency is the communication delay between sending data and receiving a response across a network. It is one of the most important measurements for network, application, and user-experience performance.
sidebar_label: Latency
sidebar_position: 105
slug: /glossary/latency
keywords:
  - latency
  - delay
  - round trip time
  - RTT
  - network delay
  - response time
  - performance
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is latency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency is the communication delay between sending data and receiving a response across a network. It is one of the most important measurements for network, application, and user-experience performance."
      }
    },
    {
      "@type": "Question",
      "name": "Why does latency matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency matters because excessive delay makes applications feel slow or unresponsive and can negatively affect voice, video, gaming, cloud applications, and interactive services."
      }
    },
    {
      "@type": "Question",
      "name": "What causes latency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency can be caused by propagation delay, congestion, queueing, packet-processing overhead, routing-path changes, bandwidth saturation, or internet and cloud transit behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How is latency used in analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency is used to measure responsiveness, detect congestion, evaluate network performance, troubleshoot application slowness, and analyze delays affecting voice, video, and interactive traffic."
      }
    }
  ]
};

# What is latency?

**Latency** is the communication delay between sending data and receiving a response across a network. It represents how long packets, requests, or application transactions take to travel between systems and is typically measured in milliseconds (ms).

Latency is one of the most important measurements for network, application, and user-experience performance because it directly affects responsiveness, interactivity, and service quality.

Unlike complete outages, latency problems are often operationally difficult because applications and services may continue functioning while users experience delayed responses, intermittent slowness, lag, buffering, unstable calls, or inconsistent application behavior. Infrastructure may appear technically “up” even while service quality steadily deteriorates.

This makes latency operationally important for identifying gradual degradation before performance problems become severe enough to trigger widespread outages, customer-impact events, or escalation incidents.

Latency is commonly analyzed together with throughput, packet loss, jitter, retransmissions, and congestion metrics to provide broader operational context.

---

## How latency works
Latency is influenced by multiple factors affecting packet delivery across a communication path.

As traffic traverses routers, switches, WAN links, cloud infrastructure, firewalls, internet transit paths, and other network systems, each stage introduces measurable delay. Even relatively small delays accumulated across congested links, overloaded devices, long-distance routes, or inspection systems can significantly affect application responsiveness and user experience.

Common latency components include:

| Component | Description |
|---|---|
| Propagation delay | Time required for signals to travel across physical distance |
| Queueing delay | Time packets spend waiting in buffers during congestion |
| Processing delay | Time required for routers, firewalls, switches, or applications to process traffic |
| Serialization delay | Time required to place packets onto a transmission medium |

Monitoring systems commonly calculate latency using:
- Round-trip time (RTT)
- One-way delay measurements
- Packet analysis
- Synthetic probes
- Transaction monitoring
- Flow-analysis workflows

Latency visibility may be gathered actively through synthetic testing workflows or passively through packet analysis, traffic telemetry, and application-observation systems.

Even when bandwidth appears sufficient, high latency can still significantly degrade responsiveness and real-time communication quality.

---

## Latency in network operations
Latency is operationally important because many infrastructure problems first appear as degradation rather than complete failure.

In enterprise, ISP, SD-WAN, cloud, and hybrid-network environments, rising latency may indicate:
- Congestion conditions
- Routing instability
- WAN degradation
- Device overload
- Internet-transit issues
- Cloud-provider path problems
- Packet inspection or firewall-processing delays

Because these conditions often develop gradually, latency visibility helps operators identify deteriorating infrastructure behavior before widespread service disruption occurs.

Latency analysis is especially important for:
- VoIP and video conferencing
- SaaS and cloud applications
- Financial systems
- Gaming platforms
- Remote-access services
- Interactive and real-time workloads

Even moderate delay increases can noticeably affect usability long before systems become unavailable.

Latency monitoring also helps teams distinguish between:
- Network-level delay
- Application slowness
- Congestion-related instability
- Routing inefficiencies
- Infrastructure bottlenecks
- External provider or cloud-transit conditions

This investigative visibility is important because users often report latency problems as generalized “slowness” even when the underlying cause originates from specific infrastructure conditions elsewhere in the communication path.

---

## Common latency views
| View | Description |
|---|---|
| Round-trip time (RTT) | Total time required for a request and response exchange |
| One-way delay | Time required for packets to travel in a single direction |
| Application latency | Delay experienced directly by users or applications |
| Network latency | Delay introduced by the network path and infrastructure |

Different monitoring workflows may derive latency measurements from packet analysis, synthetic probes, ICMP measurements, flow telemetry, or application-level observations.

---

## What makes latency operationally useful
Latency is operationally useful because it provides measurable insight into responsiveness, communication quality, and infrastructure behavior across applications and services.

Latency becomes significantly more meaningful when correlated with:
- Packet loss
- Jitter
- Throughput and utilization
- Routing behavior
- Retransmissions
- Congestion indicators
- Application response metrics

Correlating these conditions helps operators determine whether performance degradation is caused by congestion, path instability, overloaded infrastructure, application behavior, wireless instability, or external connectivity conditions.

Historical latency visibility is especially important because many performance problems evolve gradually over time rather than appearing as isolated failure events.

Long-term latency trends can reveal recurring congestion patterns, unstable WAN behavior, deteriorating cloud connectivity, or infrastructure conditions that would otherwise remain difficult to identify through short-term monitoring alone.

---

## In Trisul
Trisul supports latency-oriented traffic investigations and performance-analysis workflows through flow telemetry analysis, packet-analysis workflows, historical traffic visibility, and operational traffic investigations.

Using NetFlow, IPFIX, sFlow, packet analysis, and traffic-analysis workflows, operators can investigate how congestion, retransmissions, routing behavior, traffic shifts, WAN instability, or infrastructure conditions contribute to latency-related performance degradation.

Rather than viewing latency in isolation, Trisul workflows allow teams to correlate delay-related behavior with traffic flows, communication activity, interface utilization, routing changes, and historical traffic conditions to understand why responsiveness deteriorated and which infrastructure behaviors contributed to the problem.

These workflows are particularly useful for:
- WAN monitoring
- Cloud-connectivity analysis
- ISP operations
- Application troubleshooting
- SD-WAN investigations
- Performance investigations across distributed environments

Trisul workflows commonly integrate:
- Flow analysis
- Historical traffic analysis
- Packet analysis
- Retro Analysis
- Traffic Investigation workflows
- Operational dashboards and entity-centric investigations

Additional traffic-analysis workflows are documented in the Trisul documentation:

[Trisul Documentation](https://docs.trisul.org/)

---

## Related terms
- Latency Monitoring
- Jitter Monitoring
- Bandwidth Monitoring
- Dropped Packets
- Packet Capture
- Application Visibility

---

## Frequently asked questions
### What is latency?

Latency is the communication delay between sending data and receiving a response across a network. It is one of the most important measurements for network, application, and user-experience performance.

### Why does latency matter?

Latency matters because excessive delay makes applications feel slow or unresponsive and can negatively affect voice, video, gaming, cloud applications, and interactive services.

### What causes latency?

Latency can be caused by propagation delay, congestion, queueing, packet-processing overhead, routing-path changes, bandwidth saturation, or internet and cloud transit behavior.

### How is latency used in analysis?

Latency is used to measure responsiveness, detect congestion, evaluate network performance, troubleshoot application slowness, and analyze delays affecting voice, video, and interactive traffic.