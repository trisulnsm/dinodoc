---
title: What is a prefix?
description: A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. Prefixes are fundamental to routing, subnetting, traffic aggregation, and scalable internet routing.
sidebar_label: Prefix
sidebar_position: 170
slug: /glossary/prefix
keywords:
  - prefix
  - IP prefix
  - network prefix
  - CIDR
  - subnet
  - routing prefix
  - longest prefix match
  - route summarization
  - route aggregation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a prefix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. Prefixes are fundamental to routing, subnetting, traffic aggregation, and scalable internet routing."
      }
    },
    {
      "@type": "Question",
      "name": "How is a prefix written?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prefix is written using CIDR notation such as 10.0.0.0/8 or 192.168.1.0/24. The number after the slash indicates how many bits belong to the network portion of the address."
      }
    },
    {
      "@type": "Question",
      "name": "Why are prefixes important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefixes are important because routers and networks group and summarize large ranges of IP addresses efficiently instead of treating every host individually. Prefixes make scalable routing and subnetting possible."
      }
    },
    {
      "@type": "Question",
      "name": "How are prefixes used in routing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Routers use prefixes to determine where traffic should be forwarded. When multiple routes match a destination address, routers typically choose the most specific matching prefix using longest-prefix matching."
      }
    }
  ]
};

# What is a prefix?

A **prefix** is a contiguous block of IP addresses identified by a network address and prefix length, such as `192.0.2.0/24`.

Prefixes allow networks to group IP addresses into manageable address blocks instead of treating every IP address individually. They are fundamental to IP routing, subnetting, BGP advertisements, traffic aggregation, and scalable internet routing.

Prefixes are widely used in enterprise, ISP, telecom, cloud, and internet-routing environments.

---

## How a prefix works
Prefixes are written using **CIDR (Classless Inter-Domain Routing)** notation.

The address portion identifies the network block, while the suffix length specifies how many bits belong to the network portion of the address.

For example:

- `10.0.0.0/8` represents a large private IPv4 address block
- `192.168.1.0/24` represents a smaller subnet
- `203.0.113.5/32` represents a single IPv4 host route

Prefixes may exist in both IPv4 and IPv6 environments.

Routers use prefix-based routing tables to determine where traffic should be forwarded.

When multiple routes match a destination address, routers typically prefer the most specific matching prefix available. This behavior is known as **longest-prefix matching**.

Larger prefixes can also be divided into smaller subnets to improve segmentation, routing control, security boundaries, and address management.

For example, an ISP may advertise a summarized customer address block as a single prefix instead of announcing thousands of individual host routes separately.

Prefixes make internet routing scalable because routers can summarize and aggregate large address ranges efficiently instead of maintaining routes for every individual IP address on the internet.

---

## Prefixes in network operations
Prefixes are widely used for IP routing, subnetting, BGP advertisements, traffic engineering, traffic aggregation, access-control policies, network segmentation, ISP routing, and traffic analysis.

Operators commonly investigate routing reachability, prefix advertisements, route leaks, route hijacks, traffic distribution by subnet, congestion affecting specific prefixes, customer traffic behavior, and geographic traffic allocation.

Because routing and policy decisions are usually applied to groups of addresses rather than individual hosts, prefixes are central to how modern IP networks scale and operate.

Prefix visibility is especially important in ISP, cloud, and internet-edge environments where routing behavior and traffic distribution can change rapidly across large address ranges.

---

## Prefix examples
| Prefix | Meaning |
|---|---|
| /8 | Very large IPv4 address block |
| /16 | Medium-sized subnet or allocation |
| /24 | Common IPv4 subnet size |
| /32 | Single IPv4 host route |
| /48 | Common IPv6 site allocation |
| /128 | Single IPv6 host address |

The meaning and usage of prefixes depend on routing policy, address planning, provider requirements, and infrastructure design.

---

## Benefits and challenges of prefixes
Prefixes simplify routing, subnetting, traffic aggregation, filtering, and policy management across large networks.

Route aggregation and summarization help reduce routing-table complexity by allowing routers to advertise larger address blocks instead of many smaller individual routes.

However, poor subnet design, overlapping address ranges, route leaks, prefix-filtering mistakes, and inconsistent summarization can create routing instability or operational problems.

Organizations commonly combine prefix visibility with BGP analysis, flow telemetry, ASN visibility, and historical traffic analysis to understand routing behavior and traffic distribution across network segments.

Correlating these telemetry sources helps operators investigate how routing changes and traffic patterns affect network performance and reachability.

---

## In Trisul
Trisul supports prefix-oriented traffic analysis through flow telemetry analysis, ASN visibility, historical traffic visibility, and routing-related traffic investigations.

Using NetFlow, IPFIX, ASN analytics, and historical traffic-analysis workflows, operators can group traffic by subnet or prefix, investigate traffic associated with customer or provider address blocks, analyze routing-related traffic behavior, correlate traffic patterns with ASN visibility, and perform historical traffic investigations across enterprise, ISP, telecom, cloud, and internet-edge environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- What is CIDR?
- [What is a subnet mask?](/glossary/subnet-mask)
- What is BGP?
- What is an ASN?
- What is route aggregation?

---

## Frequently asked questions
### What is a prefix?

A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. Prefixes are fundamental to routing, subnetting, traffic aggregation, and scalable internet routing.

### How is a prefix written?

A prefix is written using CIDR notation such as 10.0.0.0/8 or 192.168.1.0/24. The number after the slash indicates how many bits belong to the network portion of the address.

### Why are prefixes important?

Prefixes are important because routers and networks group and summarize large ranges of IP addresses efficiently instead of treating every host individually. Prefixes make scalable routing and subnetting possible.

### How are prefixes used in routing?

Routers use prefixes to determine where traffic should be forwarded. When multiple routes match a destination address, routers typically choose the most specific matching prefix using longest-prefix matching.

### What is longest-prefix matching?

Longest-prefix matching is a routing behavior where routers prefer the most specific matching route available for a destination address.

### Why is route aggregation important?

Route aggregation reduces routing-table complexity by summarizing multiple smaller address blocks into larger prefixes, improving routing scalability and efficiency.