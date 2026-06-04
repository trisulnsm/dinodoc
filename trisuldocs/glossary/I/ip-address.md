---
title: What is an IP address?
description: An IP address is a unique numerical label assigned to a device or network interface on an IP network. It identifies the source and destination of traffic and is fundamental to routing, forwarding, and network analytics.
sidebar_label: IP address
sidebar_position: 95
slug: /glossary/ip-address
keywords:
  - IP address
  - IPv4
  - IPv6
  - network addressing
  - host identity
  - traffic analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an IP address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IP address is a unique numerical label assigned to a device or network interface on an IP network. It identifies the source and destination of traffic and is fundamental to routing, forwarding, and network analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IPv4 and IPv6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPv4 uses 32-bit addresses written in dotted decimal notation such as 192.168.1.1. IPv6 uses 128-bit addresses written in hexadecimal notation such as 2001:db8::1. IPv6 was introduced to address IPv4 address exhaustion and support larger-scale networks."
      }
    },
    {
      "@type": "Question",
      "name": "Why are IP addresses important in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP addresses are core identifiers in network analytics. Flow records, packets, alerts, and traffic-analysis workflows commonly rely on source and destination IP addresses for visibility, attribution, filtering, and investigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between public and private IP addresses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Public IP addresses are globally routable on the internet, while private IP addresses are used inside internal networks and are not directly reachable from the internet. NAT is commonly used to translate between private and public addressing."
      }
    }
  ]
};

# What is an IP address?

An **IP address** is a unique numerical label assigned to a device or network interface on an IP network. It identifies the source and destination of traffic and serves as the foundation for IP routing, forwarding, communication, and network analytics.

Every packet transmitted across an IP network contains at least a source IP address and a destination IP address. Routers, firewalls, monitoring systems, and analytics platforms use these addresses to determine where traffic originated, where it is going, and how it should be processed or forwarded across the network.

IP addresses are fundamental to traffic visibility, flow analysis, security monitoring, troubleshooting, and network analytics because they act as primary identifiers for hosts and communication endpoints.

---

## How IP addresses work
IP networks use logical addressing to identify systems and route traffic between networks.

Each packet contains:

- A source IP address identifying the sender
- A destination IP address identifying the intended receiver

Network devices use routing tables and forwarding logic to move packets hop-by-hop toward their destination.

The two primary IP versions in use today are:

| Version | Description |
|---|---|
| IPv4 | Uses 32-bit addresses written in dotted-decimal notation such as `192.168.1.1` |
| IPv6 | Uses 128-bit addresses written in hexadecimal notation such as `2001:db8::1` |

IPv6 was introduced to address IPv4 address exhaustion and support larger-scale and more flexible network architectures.

IP addressing also supports subnetting, route aggregation, segmentation, and policy-based traffic control across enterprise, service-provider, and cloud environments.

Because IP addresses may change dynamically or be shared across systems through NAT, VPNs, DHCP, or cloud scaling workflows, modern analytics platforms often correlate IP data with additional telemetry and identity context to improve attribution accuracy.

---

## IP addresses in network operations
In **network operations**, IP addresses are central to traffic analysis, routing validation, capacity planning, troubleshooting, and infrastructure visibility. Teams commonly analyze traffic by source IP, destination IP, subnet, ASN, or host group to understand communication behavior and identify heavily utilized systems or abnormal traffic patterns.

In **security operations**, IP addresses are heavily used in threat investigations, access analysis, firewall policy enforcement, intrusion detection, and incident-response workflows. Analysts frequently correlate IP addresses with DNS activity, authentication events, threat-intelligence feeds, geographic attribution, and historical traffic records to identify suspicious communication patterns or unauthorized access attempts.

In hybrid-cloud, SD-WAN, ISP, and distributed enterprise environments, IP visibility becomes especially important because traffic may traverse multiple transport paths, NAT boundaries, cloud gateways, VPN tunnels, and segmented network domains.

Analysis workflows often enrich raw IP addresses with metadata such as hostnames, subscriber identities, VLAN information, application context, geographic attribution, or organizational ownership to improve investigation quality and infrastructure readability.

---

## Common IP address types
| Type | Description |
|------|-------------|
| Public IPv4 | Globally routable address reachable over the internet |
| Private IPv4 | Internal RFC 1918 address space not directly routable on the public internet |
| IPv6 | 128-bit address supporting large-scale modern IP networking |
| Loopback | Local address used by a device to reference itself, such as `127.0.0.1` or `::1` |

Understanding address types is important for routing, security policy enforcement, NAT behavior, traffic attribution, and visibility workflows.

---

## What makes IP-address analysis effective
Effective IP-based analysis depends on accurate telemetry, reliable attribution, historical retention, and strong metadata enrichment.

Common challenges include:

- NAT obscuring endpoint visibility
- Dynamic addressing environments
- Shared public IP usage
- IPv4-to-IPv6 coexistence
- Distributed cloud and edge infrastructure
- Incomplete hostname or subscriber attribution

Organizations commonly improve IP visibility by maintaining IP-to-host mappings, correlating IP addresses with DNS and authentication telemetry, enriching traffic records with organizational metadata, and retaining historical traffic records for investigation workflows.

These approaches help teams transform raw address data into meaningful investigative and analytical context.

---

## In Trisul
Trisul uses IP addresses as core identifiers for hosts, flows, traffic analysis, and investigation workflows.

Using NetFlow, IPFIX, sFlow, J-Flow, and packet-analysis workflows, operators can correlate IP activity with DNS, ASN, and historical flow behavior to identify communication patterns, subscriber activity, abnormal traffic relationships, or suspicious endpoint behavior across distributed environments.

Traffic-analysis workflows help teams investigate communication patterns, analyze subnet and host activity, enrich IP visibility with metadata and organizational mappings, and retain historical flow visibility for troubleshooting and investigation purposes.

Trisul workflows commonly combine:

- Flow telemetry
- Historical traffic analysis
- DNS and ASN correlation
- Host and subnet analysis
- Explore Flows investigations

These capabilities are particularly useful for network monitoring, security investigations, subscriber visibility, WAN analysis, traffic engineering, and infrastructure troubleshooting across enterprise and service-provider environments.

Additional IP and flow-analysis workflows are documented in the Trisul documentation:

[Trisul Documentation](https://docs.trisul.org/)

---

## Related terms
- IPv6
- [NAT](/glossary/nat)
- Flow attribution
- Subnetting
- Network telemetry
- DNS telemetry
- [Subscriber mapping](/glossary/subscriber-mapping)

---

## Frequently asked questions
### What is an IP address?

An IP address is a unique numerical label assigned to a device or network interface on an IP network. It identifies the source and destination of traffic and is fundamental to routing, forwarding, and network analytics.

### What is the difference between IPv4 and IPv6?

IPv4 uses 32-bit addresses written in dotted decimal notation such as `192.168.1.1`. IPv6 uses 128-bit addresses written in hexadecimal notation such as `2001:db8::1`. IPv6 was introduced to address IPv4 address exhaustion and support larger-scale networks.

### Why are IP addresses important in network analytics?

IP addresses are core identifiers in network analytics. Flow records, packets, alerts, and traffic-analysis workflows commonly rely on source and destination IP addresses for visibility, attribution, filtering, and investigation.

### What is the difference between public and private IP addresses?

Public IP addresses are globally routable on the internet, while private IP addresses are used inside internal networks and are not directly reachable from the internet. NAT is commonly used to translate between private and public addressing.