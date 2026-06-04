---
title: What is inter-VLAN routing?
description: Inter-VLAN routing is the process of forwarding traffic between different VLANs so devices in separate Layer 2 segments can communicate.
sidebar_label: Inter VLAN routing
sidebar_position: 88
slug: /glossary/inter-vlan-routing
keywords:
  - inter VLAN routing
  - VLAN routing
  - Layer 3 routing
  - segmented networks
  - routed VLANs
  - network segmentation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is inter-VLAN routing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inter-VLAN routing is the process of forwarding traffic between different VLANs so devices in separate Layer 2 segments can communicate."
      }
    },
    {
      "@type": "Question",
      "name": "Why is inter-VLAN routing needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inter-VLAN routing is needed because devices in different VLANs cannot communicate directly at Layer 2."
      }
    },
    {
      "@type": "Question",
      "name": "How does inter-VLAN routing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inter-VLAN routing works by using a Layer 3 device or router to move traffic between VLANs."
      }
    },
    {
      "@type": "Question",
      "name": "How is inter-VLAN routing monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inter-VLAN routing is monitored by tracking routed traffic, utilization, and policy behavior between VLANs."
      }
    }
  ]
};

# What is inter-VLAN routing?

**Inter‑VLAN routing** is the process of **forwarding traffic between different VLANs** so that devices in separate **Layer 2 segments** can communicate. VLANs are normally isolated at Layer 2; without inter‑VLAN routing, hosts in one VLAN cannot reach hosts in another VLAN, even if they are on the same physical switch or network. By adding a **Layer 3 device (router or Layer 3 switch)**, the network can maintain **segmentation and security** while still allowing **controlled, policy‑driven communication** across VLANs, which is common in enterprise, campus, and data‑center designs.

---

## How inter‑VLAN routing works
In a typical design, each VLAN is associated with a **Layer 3 interface (SVI)** on a router or Layer 3 switch, and that interface acts as the **default gateway** for devices in the VLAN. When a host in one VLAN wants to talk to a host in another VLAN:

1. It sends traffic to its **default gateway** (the Layer 3 interface for its VLAN).  
2. The router/Layer 3 switch **routes** the packet to the destination VLAN’s interface.  
3. The destination VLAN delivers it to the target host at Layer 2.  

This keeps **Layer 2 broadcast domains separate** while enabling **Layer 3 communication** across segments, and allows administrators to apply **ACLs, firewall rules, or QoS policies** between VLANs.

---

## Inter‑VLAN routing in network operations
In **NOC and security operations**, inter‑VLAN routing is central to **segmented, policy‑driven designs**. Teams use VLANs to isolate departments, roles, or services (e.g., user, voice, server, management) but still let them communicate only where required. Operational visibility of inter‑VLAN traffic helps operators:

- Confirm **traffic actually follows the intended routed paths**.  
- Detect **unexpected cross‑segment communication** that may indicate misconfiguration or lateral movement.  
- Measure **utilization and policy behavior** between VLANs to support capacity and policy tuning.  

Inter‑VLAN routed paths are especially important at **access‑distribution** and **distribution‑core** boundaries, where most inter‑segment traffic is handled.

---

## Common inter‑VLAN concepts
| Concept | Meaning |
|--------|---------|
| VLAN | A Layer 2 broadcast segment that isolates traffic |
| Routing | Layer 3 forwarding between different subnets/VLANs |
| Gateway | The Layer 3 interface (SVI) that exits a VLAN |
| Policy | ACLs, firewall rules, or routing restrictions for inter‑VLAN traffic |

Understanding how these pieces interact is key to designing and troubleshooting inter‑VLAN routed environments.

---

## What makes inter‑VLAN routing useful
Inter‑VLAN routing is useful because it **balances network segmentation with controlled connectivity**, enabling:

- **Security and isolation** between departments, services, or device types.  
- **Policy‑driven communication** rather than flat, unrestricted access.  
- **Traffic‑based controls** such as ACLs, QoS, and logging on routed paths.  

This design prevents unnecessary broadcast traffic between segments and reduces the impact of local faults or attacks to individual VLANs, while still allowing engineered cross‑segment flows for applications and management.

---

## How Trisul handles inter‑VLAN routing
Trisul observes **routed traffic between VLANs** by analyzing **flow‑based telemetry (NetFlow, IPFIX, sFlow, J‑Flow)** and tracking **traffic direction, VLAN interfaces, and gateways**. Operators can:

- Visualize **which VLANs are communicating and how much traffic they exchange**.  
- Identify **unusual cross‑segment patterns** that may signal misconfiguration, lateral movement, or policy violations.  
- Correlate inter‑VLAN traffic with **utilization, errors, or policy‑enforcement telemetry** on the routers or Layer 3 switches handling the routing.  

This is particularly useful for **segmented enterprise and campus networks** where maintaining clear visibility between VLANs is critical for both performance and security.

---

## Related terms
- [Inter‑VLAN routing](/glossary/inter-vlan-routing)
- [VLAN](/glossary/vlan)
- [VRF](/glossary/vrf)
- [Network access](/glossary/network-access)
- [Traffic direction](/glossary/traffic-direction)
- [Flow attribution](/glossary/flow-attribution)

---

## Frequently asked questions
### What is inter‑VLAN routing?

Inter‑VLAN routing is the process of forwarding traffic between different VLANs so devices in separate Layer 2 segments can communicate.

### Why is inter‑VLAN routing needed?

Inter‑VLAN routing is needed because devices in different VLANs cannot communicate directly at Layer 2.

### How does inter‑VLAN routing work?

Inter‑VLAN routing works by using a Layer 3 device or router to move traffic between VLANs.

### How is inter‑VLAN routing monitored?

Inter‑VLAN routing is monitored by tracking routed traffic, utilization, and policy behavior between VLANs.