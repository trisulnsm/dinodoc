---
title: What is an internet exchange?
description: An internet exchange, or IX, is a place where networks connect and exchange traffic directly instead of sending it through a third party.
sidebar_label: Internet exchange
sidebar_position: 93
slug: /glossary/internet-exchange
keywords:
  - internet exchange
  - IXP
  - peering
  - traffic exchange
  - network interconnection
  - exchange point
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an internet exchange?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An internet exchange, or IX, is a place where networks connect and exchange traffic directly instead of sending it through a third party."
      }
    },
    {
      "@type": "Question",
      "name": "Why are internet exchanges used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Internet exchanges are used to reduce transit costs, improve performance, and keep traffic local when possible."
      }
    },
    {
      "@type": "Question",
      "name": "What is peering at an internet exchange?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peering at an internet exchange is the direct exchange of traffic between networks through the exchange fabric."
      }
    },
    {
      "@type": "Question",
      "name": "How are internet exchanges monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Internet exchanges are monitored by tracking traffic volume, link load, peering behavior, and congestion."
      }
    }
  ]
};

# What is an internet exchange?

An **internet exchange** (or **IX**, also called an **internet exchange point** or **IXP**) is a **physical or virtual location where networks connect and exchange traffic directly**, rather than sending it through a third‑party transit provider. At an IX, networks peer with each other over a shared **exchange fabric**, enabling traffic between them to bypass commercial transit links. This improves efficiency, reduces latency, and lowers transit costs, especially for high‑volume services such as cloud providers, CDNs, and large ISPs.

---

## How internet exchanges work
Networks connect to the IX by **provisioning ports on the exchange fabric** and then **establishing peering sessions** (often via BGP) with other participants. When traffic between two networks flows through the IX, it is **routed directly** across the fabric, not via an intermediary upstream provider. This direct path:

- **Reduces latency**, because the distance between networks is shorter.  
- **Improves performance**, especially for content‑heavy traffic such as video.  
- **Lowers costs**, because traffic that would otherwise be metered as transit is instead exchanged locally.  

IXPs often provide **management interfaces, route servers, and traffic statistics** to help operators manage and monitor their peering relationships.

---

## Internet exchanges in network operations
Internet exchanges are especially important for **ISPs, cloud providers, CDNs, and large enterprises** that carry large volumes of traffic and want to optimize routing. Operators watch **traffic volume, link utilization, peering counts, and congestion** on their IX‑connected links, because problems at the exchange can affect many downstream users. For example, **congested IX ports or failures in the exchange fabric** can increase latency, cause packet loss, or trigger traffic‑routing shifts to more expensive transit paths. Accurate monitoring of IX traffic also supports **capacity planning, peering strategy, and SLA‑based reporting**.

---

## Common exchange concepts
| Concept | Meaning |
|--------|---------|
| Peering | Direct exchange of traffic between networks at the IX |
| Transit | Traffic that is carried over a third‑party provider’s network |
| Exchange fabric | Shared Ethernet or switched fabric that interconnects IX participants |
| Local delivery | Traffic that stays close to source and destination via direct peering |

Understanding how these concepts interact helps operators design and troubleshoot networks that leverage IX‑based peering.

---

## What makes internet exchanges useful
Internet exchanges are useful because they **optimize routing, reduce latency, and lower transit costs**. By keeping traffic **local** between participating networks, IXs:

- Improve **end‑user experience** for content‑heavy and real‑time services.  
- Give networks **more control** over where their traffic goes and how it is billed.  
- Reduce **dependence on upstream providers** for heavily used destinations.  

Because IX‑connected links often carry very high volumes, they are **critical points for monitoring and capacity planning**, where even small changes in peering behavior or congestion can have broad impact.

---

## How Trisul handles internet exchanges
Trisul can observe **traffic patterns and load at internet exchange points** by analyzing **flow‑based telemetry (NetFlow, IPFIX, sFlow, J‑Flow)** and key performance indicators. Operators can:

- Track **traffic volume and peering‑partner behavior** across IX‑connected interfaces.  
- Detect **congestion, traffic spikes, or routing shifts** that may indicate fabric or policy issues.  
- Correlate IX‑fabric traffic with **interface utilization and packet‑loss metrics** for capacity‑aware analysis.  

This is especially useful for **ISPs, carriers, and large enterprises** that rely on IX‑based peering, where understanding peering and congestion behavior at the exchange is essential for performance and cost‑control.

---

## Related terms
- [Internet exchange](/glossary/internet-exchange)
- [Cloud monitoring](/glossary/cloud-monitoring)
- [Network performance](/glossary/network-performance)
- [Traffic pattern analysis](/glossary/traffic-pattern-analysis)
- [Link load](/glossary/link-load)
- [Congestion detection](/glossary/congestion-detection)

---

## Frequently asked questions
### What is an internet exchange?

An internet exchange, or IX, is a place where networks connect and exchange traffic directly instead of sending it through a third party.

### Why are internet exchanges used?

Internet exchanges are used to reduce transit costs, improve performance, and keep traffic local when possible.

### What is peering at an internet exchange?

Peering at an internet exchange is the direct exchange of traffic between networks through the exchange fabric.

### How are internet exchanges monitored?

Internet exchanges are monitored by tracking traffic volume, link load, peering behavior, and congestion.