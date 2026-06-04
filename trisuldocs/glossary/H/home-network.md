---
title: What is home network in Trisul?
description: In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows.
sidebar_label: Home network
sidebar_position: 76
slug: /glossary/home-network
keywords:
  - home network
  - trisul home network
  - traffic direction
  - incoming traffic
  - outgoing traffic
  - transit traffic
  - internal traffic
  - administrative domain
  - directional traffic analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is home network in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What traffic directions does Trisul classify using home networks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul classifies traffic as incoming, outgoing, internal, or transit depending on whether the source and destination IP addresses belong to configured home-network ranges. These directional classifications are used in traffic reports, flow tagging, and aggregate traffic analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How are home networks configured in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Administrators configure home networks by defining IP subnets or CIDR ranges that represent the monitored administrative domain. Accurate configuration is important because directional traffic analysis depends on correct identification of internal and external traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Why is home network configuration important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home network configuration is important because it affects traffic-direction classification, reporting accuracy, flow tagging, and operational visibility. Incorrect subnet definitions may cause internal traffic to be classified as external or transit traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use home network information in flow analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses home network definitions to enrich flows with directional context such as internal, incoming, outgoing, or transit communication. These classifications can then be used in Explore Flows, traffic reports, historical analysis, and operational investigations."
      }
    }
  ]
};

# What is home network in Trisul?

In Trisul, **home network** refers to the IP subnets and network ranges considered part of the **monitored administrative domain**. Trisul uses this definition to classify **traffic direction** as **incoming, outgoing, internal, or transit** for traffic analysis, reporting, and flow‑tagging workflows. This classification answers whether traffic stays inside the organization, goes to an external party, arrives from outside, or simply passes through the network without either endpoint being local.

---

## How home network classification works
Home‑network classification compares **source and destination IP addresses** against configured **internal‑network ranges**, typically defined by CIDR blocks. The workflow is: **subnet definition → traffic observation → address matching → direction classification → operational analysis**. Trisul classifies a flow as **internal** when both endpoints fall inside the home‑network, as **incoming** when the destination is internal, as **outgoing** when the source is internal, and as **transit** when neither endpoint is in the configured ranges. The exact result depends on **network segmentation, routing, NAT, tunneling, and exporter placement**.

---

## Home network classification in network operations
In **NOC** environments, home‑network awareness enables **directional reporting, WAN analysis, capacity planning, and internal‑traffic visibility**, helping operators understand **inbound vs outbound imbalances** and **transit‑traffic burden** on routers or firewalls. In **SOC** workflows, it supports **data‑exfiltration detection, suspicious‑outbound‑traffic analysis, and internal‑lateral‑movement investigations**, because directional labels clarify which systems are calling out and which external destinations are being contacted. In **ISP and carrier** settings, home‑network concepts may extend to **customer prefixes or AS‑owned ranges**, letting operators distinguish **customer‑local, transit, and external** traffic.

---

## Common traffic direction classifications
| Direction | Meaning |
|----------|---------|
| Internal traffic | Both endpoints belong to the home network |
| Incoming traffic | External source → internal destination |
| Outgoing traffic | Internal source → external destination |
| Transit traffic | Traffic flowing through the network, with neither endpoint in the home network |

These labels are used in **aggregate reports, dashboards, flow tagging, and historical queries**, making it easier to slice traffic by origin and destination.

---

## Home network classification vs routing awareness
**Home‑network classification** is about **administrative ownership** of address space (who “owns” the subnets) and is defined by configuration, while **routing awareness** is about **reachability and path selection** built from BGP and routing tables. The two are complementary: routing tells you how traffic is forwarded, and home‑network context tells you whether that traffic is internal, external, or transit in your operational view.

---

## What makes home network classification effective
Effective classification depends on **accurate and up‑to‑date subnet definitions, correct routing visibility, and consistent telemetry**. Problems often arise from **missing or stale subnets, overlapping address spaces, NAT, cloud‑provider overlap, or multi‑site architectures**, which can misclassify internal traffic as external or transit. Organizations improve accuracy by maintaining **centralized subnet inventories**, tying them to **routing and topology information**, and periodically validating flows at key chokepoints to ensure directions match expectations.

---

## How Trisul handles home network
Trisul uses **home‑network definitions** to enrich **flow and packet‑based telemetry with direction labels** such as **internal, incoming, outgoing, and transit**, which then feed into **Explore Flows, traffic‑reports, and Flow Taggers**. This lets operators filter by direction, focus on **outbound‑only or internal‑only** traffic, and correlate directional trends over time. For **capacity planning, security investigations, and traffic‑attribution**, Trisul’s directional context simplifies dashboards and queries, turning raw telemetry into an **operationally meaningful view** of who is talking to whom and across which network boundary.

---

## Related terms
- [Home network](/glossary/home-network)
- Flow tagging  
- [Explore Flows](/glossary/explore-flows)
- Counter group  
- [BGP peering analytics](/glossary/bgp-peering-analytics)
- RFC1918  
- [Flow attribution](/glossary/flow-attribution)
- Traffic analysis  

---

## Frequently asked questions
### What is home network in Trisul?

In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow‑tagging workflows.

### What traffic directions does Trisul classify using home networks?

Trisul classifies traffic as incoming, outgoing, internal, or transit depending on whether the source and destination IP addresses belong to configured home‑network ranges. These directional classifications are used in traffic reports, flow tagging, and aggregate traffic analysis.

### How are home networks configured in Trisul?

Administrators configure home networks by defining IP subnets or CIDR ranges that represent the monitored administrative domain. Accurate configuration is important because directional traffic analysis depends on correct identification of internal and external traffic.

### Why is home network configuration important?

Home network configuration is important because it affects traffic‑direction classification, reporting accuracy, flow tagging, and operational visibility. Incorrect subnet definitions may cause internal traffic to be classified as external or transit traffic.

### How does Trisul use home network information in flow analysis?

Trisul uses home network definitions to enrich flows with directional context such as internal, incoming, outgoing, or transit communication. These classifications can then be used in Explore Flows, traffic reports, historical analysis, and operational investigations.