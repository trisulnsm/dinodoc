---
title: What is IP address translation?
description: IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address-sharing purposes.
sidebar_label: IP address translation
sidebar_position: 96
slug: /glossary/ip-address-translation
keywords:
  - IP address translation
  - NAT
  - address translation
  - source translation
  - destination translation
  - network rewriting
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is IP address translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address-sharing purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Why is IP address translation used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation is used to conserve address space, hide internal networks, support private-to-public connectivity, and map traffic between different network domains."
      }
    },
    {
      "@type": "Question",
      "name": "What is the effect of IP address translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation changes the visible network identity of traffic, which affects logging, attribution, troubleshooting, security analysis, and flow visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How is IP address translation related to flow analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation can complicate flow analysis because the observed source or destination address may differ from the original endpoint. Accurate analysis often requires correlation with NAT logs or translation-aware telemetry."
      }
    }
  ]
};

# What is IP address translation?

**IP address translation** is the process of changing the source or destination IP address in a packet, typically at a router, firewall, NAT gateway, or edge device, to support routing, address conservation, security, or network segmentation requirements.

IP address translation is most commonly associated with **Network Address Translation (NAT)**, where private internal addresses are mapped to public addresses for internet connectivity. Translation may also be used to remap destination addresses, separate overlapping address spaces, or control how systems are exposed across network boundaries.

Because translated traffic may appear under different IP identities at different observation points, IP address translation has significant operational impact on traffic visibility, logging, attribution, troubleshooting, and security analysis.

---

## How IP address translation works
A gateway, firewall, or NAT device intercepts traffic and rewrites portions of the packet header before forwarding the traffic toward its destination.

For outbound traffic, the original source address is often replaced with a translated public or externally routable address. For inbound traffic, the translated destination address may be mapped back to the correct internal system.

Translation workflows commonly include:

1. **Traffic interception** – A NAT gateway or translation device processes incoming or outgoing packets
2. **Address rewriting** – Source or destination IP addresses are modified according to translation policies
3. **Session tracking** – Translation state is maintained so return traffic can be mapped correctly
4. **Traffic forwarding** – Translated packets are forwarded toward the next network segment or destination
5. **Telemetry and logging** – Translation-aware logs or telemetry may record original and translated identities

Translation can occur at multiple points across distributed networks, especially in cloud, carrier-grade NAT, VPN, SD-WAN, and hybrid-network environments.

---

## IP address translation in network operations
IP address translation is widely used in enterprise, service-provider, cloud, and edge-network architectures.

Operationally, translation helps organizations:

- Conserve public IPv4 address space
- Hide internal addressing structures
- Support private-network internet access
- Publish internal services through controlled public endpoints
- Connect overlapping or segmented network environments

At the same time, translation introduces visibility and attribution challenges because traffic observed in logs, flow telemetry, DNS records, or firewall events may contain translated addresses instead of the original internal identities.

During troubleshooting and incident-response workflows, operators often need to correlate translated addresses with original endpoints to determine which systems initiated or received communication. This becomes particularly important in environments using carrier-grade NAT, shared public IPs, cloud gateways, or large-scale VPN aggregation.

---

## Common translation effects
| Effect | Operational meaning |
|--------|----------------------|
| Source translation | Outbound traffic appears to originate from a translated address |
| Destination translation | Inbound traffic is redirected to a different internal host |
| Hidden internal addressing | Private infrastructure is masked from external visibility |
| Shared public IPs | Multiple internal hosts appear externally under a single public address |
| Attribution complexity | Logs and flows may not directly reveal the original endpoint |

Accurate investigation and flow analysis often depend on retaining NAT state information, translation logs, or telemetry that includes both original and translated address context.

---

## What makes IP address translation analysis effective
Effective analysis of translated traffic depends on reliable telemetry, synchronized timestamps, NAT-state visibility, and strong correlation workflows between translated and original identities.

Operational challenges commonly include:

- Shared public IP attribution ambiguity
- Missing NAT logs or state information
- Asymmetric routing
- Short-lived translation sessions
- Distributed cloud or edge translation layers
- Incomplete visibility across hybrid environments

Organizations commonly improve operational visibility by retaining NAT logs, correlating flow telemetry with firewall events, centralizing translation-aware analytics, and preserving historical traffic records for investigation workflows.

Combining flow telemetry with translation context significantly improves troubleshooting, threat investigations, traffic attribution, and operational analysis in NAT-heavy environments.

---

## In Trisul
Trisul supports translation-aware traffic analysis through flow telemetry analysis, historical traffic visibility, and investigation workflows that help operators analyze traffic across NAT and translated environments.

Using NetFlow, IPFIX, sFlow, and J-Flow telemetry, operators can:

- Investigate traffic associated with translated public addresses
- Correlate traffic flows with internal communication behavior
- Analyze traffic patterns behind shared public IPs
- Support incident investigations and attribution workflows in NAT-heavy environments
- Retain historical flow visibility for translated traffic analysis

These capabilities are particularly useful for service providers, enterprise internet edges, WAN environments, cloud gateways, and large-scale NAT deployments where maintaining traffic visibility across translated environments is operationally important.

---

## Related terms
- [Flow attribution](/glossary/flow-attribution)
- [IP address translation](/glossary/ip-address-translation)
- [NAT](/glossary/nat)
- [Port translation](/glossary/port-translation)
- [Inbound traffic](/glossary/inbound-traffic)
- [Outbound traffic](/glossary/outbound-traffic)
- [Firewall logging](/glossary/firewall-logging)

---

## Frequently asked questions
### What is IP address translation?

IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address-sharing purposes.

### Why is IP address translation used?

IP address translation is used to conserve address space, hide internal networks, support private-to-public connectivity, and map traffic between different network domains.

### What is the effect of IP address translation?

IP address translation changes the visible network identity of traffic, which affects logging, attribution, troubleshooting, security analysis, and flow visibility.

### How is IP address translation related to flow analysis?

IP address translation can complicate flow analysis because the observed source or destination address may differ from the original endpoint. Accurate analysis often requires correlation with NAT logs or translation-aware telemetry.