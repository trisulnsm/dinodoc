---
title: What is a subnet mask?
description: A subnet mask is a 32-bit value used in IPv4 networking to define the network and host portions of an IP address. It determines subnet boundaries and helps devices identify local and remote networks.
sidebar_label: Subnet mask
sidebar_position: 200
slug: /glossary/subnet-mask
keywords:
  - subnet mask
  - network mask
  - CIDR
  - IP subnet
  - network addressing
  - host addressing
  - IPv4 subnetting
  - default gateway
  - subnetting
  - routing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a subnet mask?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A subnet mask is a 32-bit value used in IPv4 networking to define the network and host portions of an IP address. It determines subnet boundaries and helps devices identify local and remote networks."
      }
    },
    {
      "@type": "Question",
      "name": "How does a subnet mask work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A subnet mask is applied to an IPv4 address using a bitwise AND operation to identify the network portion of the address. For example, 192.168.1.50 with subnet mask 255.255.255.0 belongs to the 192.168.1.0/24 subnet."
      }
    },
    {
      "@type": "Question",
      "name": "What is CIDR notation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CIDR notation expresses subnet size as a prefix length. For example, /24 corresponds to the subnet mask 255.255.255.0 and indicates that 24 bits are used for the network portion of the address."
      }
    },
    {
      "@type": "Question",
      "name": "Why do subnet masks matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subnet masks help devices determine whether traffic should remain within the local network or be forwarded through a router. They are essential for routing, subnetting, segmentation, and address planning."
      }
    }
  ]
};

# What is a subnet mask?

A **subnet mask** is a 32-bit value used in IPv4 networking to define the network and host portions of an IP address. It determines subnet boundaries and helps devices identify local and remote networks.

Subnet masks are fundamental to IPv4 routing, subnetting, traffic segmentation, and address planning across enterprise, ISP, telecom, cloud, and data-center environments.

Subnet masks are closely associated with CIDR (Classless Inter-Domain Routing) notation, which represents subnet size using prefix lengths such as `/24` or `/16`.

---

## How a subnet mask works
A subnet mask uses contiguous binary `1` bits to represent the network portion of an address and binary `0` bits to represent the host portion.

Network devices apply the subnet mask to an IPv4 address using a bitwise AND operation to determine the subnet or network address.

For example:

| IP address | Subnet mask | Network |
|---|---|---|
| 192.168.1.50 | 255.255.255.0 | 192.168.1.0/24 |

In this example:

- The first 24 bits identify the network
- The remaining bits identify individual hosts within the subnet

Any address in the range `192.168.1.1` through `192.168.1.254` belongs to the same `/24` subnet.

Devices use subnet masks to determine whether another IP address belongs to the same local network or must be reached through a router.

For example, a device with address `192.168.1.10/24` can communicate directly with `192.168.1.20`, but traffic destined for `192.168.2.20` must normally pass through a router or default gateway.

Smaller subnets can reduce unnecessary broadcast traffic and improve segmentation efficiency.

Subnet masks are an IPv4 concept. IPv6 networking primarily uses prefix-length notation instead of dotted-decimal subnet masks.

---

## Subnet masks in network operations
Subnet masks are commonly used for IP subnetting, routing decisions, VLAN segmentation, address planning, traffic grouping, internal-network classification, WAN design, and policy enforcement.

Teams commonly investigate incorrect subnet boundaries, overlapping address ranges, routing problems, gateway misconfiguration, segmentation inconsistencies, and inefficient subnet design.

Because subnet definitions directly affect routing behavior and traffic delivery, incorrect subnet masks can cause connectivity failures, unexpected routing behavior, communication problems, or inaccurate traffic classification.

Historical traffic visibility is especially useful for investigating recurring routing problems, segmentation issues, misconfigured address ranges, or unexpected communication patterns between network segments.

---

## Common subnet masks
| CIDR | Subnet mask | Typical usage |
|---|---|---|
| /8 | 255.0.0.0 | Very large networks |
| /16 | 255.255.0.0 | Medium-sized networks |
| /24 | 255.255.255.0 | Standard LAN subnet |
| /30 | 255.255.255.252 | Point-to-point links |
| /32 | 255.255.255.255 | Single-host route |

Actual subnet sizing depends on address-planning strategy, infrastructure scale, segmentation requirements, and routing architecture.

---

## Benefits and challenges of subnet masks
Subnet masks simplify routing, address planning, traffic grouping, segmentation, and network organization.

They also help reduce broadcast-domain size and improve control over how traffic moves between network segments.

However, inconsistent subnet definitions, overlapping address ranges, poor subnet-design strategy, incorrect gateway configuration, and complex large-scale subnetting can create routing and segmentation problems.

Organizations commonly combine routing visibility, flow telemetry, interface monitoring, prefix-based analytics, historical traffic analysis, and packet analysis to investigate subnet-related connectivity or routing behavior.

Correlating these telemetry sources helps teams determine whether traffic anomalies, routing problems, segmentation issues, or connectivity failures are associated with incorrect subnet definitions or infrastructure misconfiguration.

---

## In Trisul
Trisul supports subnet-based traffic visibility through flow telemetry analysis, prefix-based traffic grouping, historical traffic visibility, and traffic investigations.

Using NetFlow, IPFIX, packet-analysis workflows, and traffic-analysis capabilities, operators can group and analyze traffic by subnet or prefix, identify internal and external communication patterns, correlate traffic behavior with hosts, interfaces, and routing conditions, support subnet-based reporting and traffic investigations, and perform historical investigations associated with network segments and prefixes across enterprise, ISP, telecom, cloud, WAN, and infrastructure-monitoring environments.

Additional traffic-analysis and flow-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- [What is an IP address?](/glossary/ip-address)
- What is CIDR?
- What is routing?
- [What is network segmentation?](/glossary/network-segmentation)
- What is a default gateway?

---

## Frequently asked questions
### What is a subnet mask?

A subnet mask is a 32-bit value used in IPv4 networking to define the network and host portions of an IP address. It determines subnet boundaries and helps devices identify local and remote networks.

### How does a subnet mask work?

A subnet mask is applied to an IPv4 address using a bitwise AND operation to identify the network portion of the address. For example, 192.168.1.50 with subnet mask 255.255.255.0 belongs to the 192.168.1.0/24 subnet.

### What is CIDR notation?

CIDR notation expresses subnet size as a prefix length. For example, /24 corresponds to the subnet mask 255.255.255.0 and indicates that 24 bits are used for the network portion of the address.

### Why do subnet masks matter?

Subnet masks help devices determine whether traffic should remain within the local network or be forwarded through a router. They are essential for routing, subnetting, segmentation, and address planning.

### What happens if a subnet mask is configured incorrectly?

Incorrect subnet masks can cause routing problems, communication failures, unreachable hosts, broadcast-domain issues, or unexpected traffic behavior between network segments.

### What is the relationship between subnet masks and default gateways?

If a destination address falls outside the local subnet, traffic is normally forwarded to a default gateway or router for delivery to other networks.