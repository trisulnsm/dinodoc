---
title: What is NAT?
description: NAT, or Network Address Translation, rewrites IP addresses and ports as traffic passes through a router or gateway. It is widely used to share public IPv4 addresses across private networks and large subscriber environments.
sidebar_label: NAT
sidebar_position: 126
slug: /glossary/nat
keywords:
  - NAT
  - network address translation
  - CGNAT
  - port address translation
  - private IP
  - public IP
  - subscriber attribution
  - NAT logging
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT, or Network Address Translation, rewrites IP addresses and ports as traffic passes through a router or gateway. It is widely used to share public IPv4 addresses across private networks and large subscriber environments."
      }
    },
    {
      "@type": "Question",
      "name": "How does NAT work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT replaces private source addresses with public addresses as traffic exits the network and maintains translation state so return traffic can be mapped back to the correct internal host or subscriber."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT is used to conserve public IPv4 address space and allow large numbers of internal hosts or subscribers to share limited public IP addresses."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT visibility important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT visibility is important because many users can share the same public IP address simultaneously, making translation logs and telemetry correlation critical for subscriber attribution and traffic investigations."
      }
    }
  ]
};

# What is NAT?

**NAT (Network Address Translation)** rewrites IP addresses and ports as traffic passes through a router, firewall, or gateway. It is widely used to allow multiple internal hosts or subscribers to share limited public IPv4 addresses while keeping private internal addressing isolated from external networks.

NAT became widely adopted because IPv4 address space is limited and modern enterprise, broadband, and ISP environments often need thousands of systems or subscribers to access the internet using relatively small pools of public addresses.

Today, NAT is common in enterprise networks, broadband infrastructure, cloud environments, mobile networks, and large-scale ISP deployments using Carrier-Grade NAT (CGNAT).

---

## How NAT works
NAT replaces private source addresses with public addresses as traffic exits the network and maintains translation state so return traffic can be mapped back to the correct internal host or subscriber.

Port Address Translation (PAT) allows many internal sessions to share a single public IP address by assigning unique source-port mappings to each connection.

As a result, many users may appear externally as the same public IP address even though the traffic originates from different internal hosts behind the NAT gateway.

This makes translation logs and telemetry correlation operationally critical for identifying the true source of traffic during investigations or subscriber-analysis workflows.

---

## Why NAT matters in network operations
NAT is operationally important because it introduces attribution and visibility challenges into traffic-analysis workflows.

In NAT and CGNAT environments, many users can share the same public IP address simultaneously. Without accurate translation visibility, operational teams cannot reliably determine which internal host or subscriber generated externally observed traffic.

This becomes especially important during traffic investigations, abuse analysis, lawful traceability workflows, incident response, and subscriber attribution where translated traffic must be mapped back to the originating internal source accurately.

Operational teams therefore depend heavily on NAT logs, flow telemetry, subscriber metadata, timestamps, and port mappings to preserve traceability across translated traffic environments.

In ISP and broadband environments, this challenge becomes significantly larger because CGNAT systems may translate traffic for very large subscriber populations simultaneously.

---

## NAT types
| Type | Operational role |
|---|---|
| Static NAT | Permanent one-to-one mapping between private and public addresses |
| Dynamic NAT | Temporary mapping using a public address pool |
| PAT (Port Address Translation) | Multiple hosts share one public IP using unique port mappings |
| CGNAT | Large-scale ISP NAT where many subscribers share limited public IPv4 space |

Different NAT models introduce different operational requirements around logging, attribution, scalability, and telemetry visibility.

---

## What makes NAT visibility operationally important
Effective NAT visibility depends on accurate translation logging, telemetry correlation, historical retention, and subscriber-aware traffic analysis.

Without reliable correlation between NAT events and flow telemetry, public IP addresses alone may not identify the true originating subscriber or internal host behind translated traffic.

As NAT environments scale, especially in CGNAT deployments, analytics systems must correlate flow telemetry, subscriber metadata, translation events, timestamps, and port mappings accurately in order to preserve traceability and investigative visibility.

This makes NAT-aware analytics workflows especially important in ISP, telecom, broadband, and large enterprise environments where subscriber attribution and traffic traceability are operationally critical.

---

## In Trisul
Trisul supports NAT-aware traffic analysis through flow telemetry correlation, subscriber-aware analytics, historical traffic visibility, and NAT-related operational investigation workflows.

Using NetFlow, IPFIX, sFlow, J-Flow, subscriber metadata, and historical traffic analytics, Trisul helps operators correlate translated traffic with originating hosts or subscribers across NAT and CGNAT environments.

These workflows help operations teams investigate traffic activity, perform subscriber attribution, analyze translated traffic behavior, and improve operational visibility in large-scale broadband and ISP environments where many users share limited public IPv4 space.

This becomes especially valuable during lawful traceability workflows, abuse investigations, subscriber analysis, and operational troubleshooting involving translated traffic environments.

Additional flow-analysis workflows are documented in the Trisul documentation:

[Trisul Documentation](https://docs.trisul.org/docs/ug/flow/)

---

## Related terms
- [CGNAT](/glossary/cgnat)
- [Subscriber mapping](/glossary/subscriber-mapping)
- Flow attribution
- Port Address Translation
- Flow monitoring
- Historical traffic analysis

---

## Frequently asked questions
### What is NAT?

NAT, or Network Address Translation, rewrites IP addresses and ports as traffic passes through a router or gateway. It is widely used to share public IPv4 addresses across private networks and large subscriber environments.

### How does NAT work?

NAT replaces private source addresses with public addresses as traffic exits the network and maintains translation state so return traffic can be mapped back to the correct internal host or subscriber.

### Why is NAT used?

NAT is used to conserve public IPv4 address space and allow large numbers of internal hosts or subscribers to share limited public IP addresses.

### Why is NAT visibility important?

NAT visibility is important because many users can share the same public IP address simultaneously, making translation logs and telemetry correlation critical for subscriber attribution and traffic investigations.