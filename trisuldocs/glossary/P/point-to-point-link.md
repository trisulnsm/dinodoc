---
title: What is a point-to-point link?
description: A point-to-point link is a dedicated communication path between exactly two network devices or locations, commonly used for WAN connectivity, inter-site communication, backbone transport, and router-to-router traffic.
sidebar_label: Point to point link
sidebar_position: 167
slug: /glossary/point-to-point-link
keywords:
  - point to point link
  - P2P link
  - dedicated circuit
  - WAN link
  - leased line
  - router to router link
  - site to site connectivity
  - direct link
  - MPLS circuit
  - backbone link
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a point-to-point link?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A point-to-point link is a dedicated communication path between exactly two network devices or locations. It carries traffic only between those endpoints without shared access by other devices."
      }
    },
    {
      "@type": "Question",
      "name": "Where are point-to-point links used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links are commonly used for WAN circuits, leased lines, MPLS connectivity, microwave backhaul, router-to-router communication, branch-office connectivity, and inter-datacenter traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Why are point-to-point links important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links provide predictable communication between two endpoints, simplify traffic attribution, support stable routing behavior, and improve visibility into latency, utilization, and communication issues."
      }
    },
    {
      "@type": "Question",
      "name": "How are point-to-point links monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links are monitored using interface telemetry, flow analysis, packet analysis, routing visibility, latency measurements, and utilization tracking to evaluate link health and communication behavior."
      }
    }
  ]
};

# What is a point-to-point link?

A **point-to-point link** is a dedicated communication path between exactly two network devices or locations. It carries traffic only between those endpoints without shared access by other devices.

Unlike shared-access networks where multiple devices compete for bandwidth, point-to-point links dedicate the communication path to two endpoints only.

Point-to-point links are commonly used for WAN connectivity, router-to-router communication, branch-office connectivity, inter-datacenter traffic, wireless backhaul infrastructure, MPLS networks, and direct site-to-site communication.

Because the communication path is dedicated to two known endpoints, traffic behavior, routing, latency, and utilization are usually easier to analyze and troubleshoot than in shared-access environments.

---

## How a point-to-point link works
A point-to-point link establishes direct connectivity between two systems or network locations.

Traffic entering one side of the link is forwarded directly to the opposite endpoint without unrelated devices sharing the same communication path.

Point-to-point links may use leased lines, MPLS circuits, fiber interconnects, microwave backhaul links, Ethernet services, or encrypted site-to-site tunnels depending on bandwidth, distance, and deployment requirements.

These links commonly form the foundation of WAN and provider infrastructure by connecting branch offices, data centers, ISP backbone paths, cloud interconnects, and aggregation sites.

For example, a branch office may connect to a headquarters network using a dedicated WAN circuit where all communication between the two sites traverses the point-to-point link.

Depending on the deployment model, point-to-point links may be physical, wireless, virtual, or carrier-provided.

---

## Point-to-point links in network operations
Point-to-point links are commonly used for WAN transport, backbone connectivity, cloud interconnects, branch communication, traffic engineering, routing exchange, and inter-site application traffic.

Because traffic traverses a dedicated communication path, network teams can usually correlate utilization, latency, packet loss, retransmissions, and routing behavior more accurately than in shared-access environments.

Operators commonly investigate:

- Link saturation
- Packet loss and retransmissions
- Latency spikes
- Interface errors
- Routing instability
- Carrier or transport problems
- Uneven traffic distribution

Point-to-point visibility is important because issues affecting these links may directly impact dependent sites, applications, cloud services, or internet connectivity.

Historical visibility is especially useful for investigating intermittent congestion, unstable transport behavior, or recurring communication problems across WAN and backbone links.

---

## Point-to-point vs shared links
| Link type | Description |
|---|---|
| Point-to-point | Dedicated communication path between two endpoints |
| Shared link | Multiple devices or subscribers share available bandwidth |
| Point-to-point visibility | Easier traffic attribution and utilization analysis |
| Shared-network visibility | More complex contention and traffic analysis |

Communication quality still depends on bandwidth availability, routing design, transport stability, and infrastructure quality regardless of the link model.

---

## Benefits and challenges of point-to-point links
Point-to-point links are widely used because they provide predictable communication paths, simplified traffic attribution, stable routing behavior, and easier inter-site troubleshooting.

However, these links may still experience congestion, latency, packet loss, carrier instability, wireless interference, or single-link dependency risks depending on the infrastructure design.

Organizations commonly combine flow telemetry, interface monitoring, routing visibility, packet analysis, and historical traffic analysis to investigate communication behavior and troubleshoot performance problems across dedicated links.

Correlating these telemetry sources helps operators understand both infrastructure conditions and application behavior across WAN and backbone environments.

---

## In Trisul
Trisul supports point-to-point link monitoring through flow telemetry analysis, interface visibility, packet analysis, routing-related visibility, and historical traffic investigations.

Using NetFlow, IPFIX, interface telemetry, packet-analysis workflows, and historical traffic analysis, operators can analyze utilization across dedicated links, investigate packet loss and latency behavior, correlate traffic activity with hosts and applications, troubleshoot WAN communication problems, and perform historical investigations across enterprise, ISP, telecom, backbone, and branch-connectivity environments.

Additional flow-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- What is a WAN link?
- What is MPLS?
- What is a dedicated circuit?
- [What is interface monitoring?](/glossary/interface-monitoring)
- What is link utilization?

---

## Frequently asked questions
### What is a point-to-point link?

A point-to-point link is a dedicated communication path between exactly two network devices or locations. It carries traffic only between those endpoints without shared access by other devices.

### Where are point-to-point links used?

Point-to-point links are commonly used for WAN circuits, leased lines, MPLS connectivity, microwave backhaul, router-to-router communication, branch-office connectivity, and inter-datacenter traffic.

### Why are point-to-point links important?

Point-to-point links provide predictable communication between two endpoints, simplify traffic attribution, support stable routing behavior, and improve visibility into latency, utilization, and communication issues.

### How are point-to-point links monitored?

Point-to-point links are monitored using interface telemetry, flow analysis, packet analysis, routing visibility, latency measurements, and utilization tracking to evaluate link health and communication behavior.

### What is the difference between a point-to-point link and a shared network?

A point-to-point link is dedicated to communication between two endpoints, while shared networks distribute bandwidth among multiple devices or subscribers sharing the same infrastructure.

### Why are point-to-point links commonly used in WAN environments?

Point-to-point links provide stable inter-site communication, predictable routing behavior, and easier traffic analysis, making them useful for branch connectivity, backbone transport, cloud interconnects, and router-to-router communication.