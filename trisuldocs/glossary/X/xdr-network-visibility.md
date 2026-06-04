---
title: What is XDR network visibility?
description: XDR network visibility refers to the use of network telemetry and traffic data within Extended Detection and Response (XDR) platforms to provide communication context, improve investigations, and strengthen threat detection across multiple security domains.
sidebar_label: XDR network visibility
sidebar_position: 249
slug: /glossary/xdr-network-visibility
keywords:
  - XDR visibility
  - XDR network
  - extended detection and response
  - network visibility
  - security visibility
  - threat detection
  - security response
  - network telemetry
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is XDR network visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "XDR network visibility refers to the use of network telemetry and traffic data within Extended Detection and Response (XDR) platforms to provide communication context, improve investigations, and strengthen threat detection across multiple security domains."
      }
    },
    {
      "@type": "Question",
      "name": "Why is network visibility important in XDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network visibility provides communication context that may not be available from endpoint, cloud, or identity telemetry alone. This helps analysts connect events across different security domains."
      }
    },
    {
      "@type": "Question",
      "name": "How does XDR network visibility work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "XDR platforms correlate network telemetry with data from endpoints, cloud services, identity systems, and security tools to create a broader view of activity and support investigations."
      }
    },
    {
      "@type": "Question",
      "name": "What network data is commonly used in XDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common sources include flow records, packet metadata, DNS activity, firewall logs, IDS alerts, proxy logs, and other forms of network telemetry."
      }
    }
  ]
};

# What is XDR network visibility?

**XDR network visibility** refers to the use of network telemetry and traffic data within Extended Detection and Response (XDR) platforms to provide communication context, improve investigations, and strengthen threat detection across multiple security domains.

While endpoints, identity systems, cloud platforms, and security tools each provide their own view of activity, network visibility helps reveal how systems communicate with one another. This communication context often plays a critical role in understanding what occurred during a security event.

In many environments, network visibility acts as the connective layer that helps security teams relate activity observed across otherwise independent data sources.

---

## Why network visibility matters in XDR
Modern security investigations rarely involve a single source of evidence.

An endpoint may reveal process activity, an identity platform may record authentication events, and a cloud platform may show service access. However, these events often provide only part of the story.

Network telemetry adds another perspective by showing communication behavior between systems. It can reveal connections, data transfers, DNS activity, external communications, and other network interactions that help analysts understand how different events are related.

This context makes it easier to build investigative timelines, understand attack progression, and determine the scope of an incident.

---

## How XDR network visibility works
XDR platforms aggregate and correlate information from multiple security domains.

Network telemetry may include flow records, packet metadata, DNS activity, firewall logs, IDS or IPS alerts, proxy activity, and other forms of network-derived visibility. This information is then correlated with endpoint, identity, cloud, and security telemetry.

The goal is not simply to collect more data, but to connect observations from multiple systems into a coherent investigative view.

By correlating communication activity with other security events, analysts can better understand what happened, which systems were involved, and how activity progressed across the environment.

---

## Network visibility and investigative context
One of the primary benefits of network visibility is the context it provides during investigations.

For example, an endpoint alert may indicate suspicious activity on a host, but network telemetry can reveal where that host communicated, what services it accessed, whether data was transferred, and how activity spread across the environment.

Network telemetry can also remain available in situations where endpoint visibility is limited, unavailable, or incomplete, providing an additional source of evidence during investigations.

For this reason, many security teams view network visibility as an important complement to endpoint, cloud, and identity telemetry rather than a replacement for them.

---

## In Trisul
Trisul is a network analytics and network visibility platform rather than an XDR platform.

However, Trisul can provide network telemetry, flow analysis, packet-derived visibility, and traffic intelligence that complement broader XDR workflows. By contributing network context to security investigations, Trisul can help analysts understand communication patterns, investigate suspicious activity, and correlate network behavior with events observed in other security systems.

This is particularly useful in environments where network telemetry forms part of a larger detection, investigation, and response strategy.

---

## Related terms
- [What is XDR?](/glossary/xdr)
- [What is network security monitoring?](/glossary/network-security-monitoring)
- [What is threat detection?](/glossary/threat-detection)
- [What is incident response?](/glossary/incident-response)
- What is network telemetry?

---

## Frequently asked questions
### What is XDR network visibility?

XDR network visibility refers to the use of network telemetry and traffic data within Extended Detection and Response (XDR) platforms to provide communication context, improve investigations, and strengthen threat detection across multiple security domains.

### Why is network visibility important in XDR?

Network visibility provides communication context that may not be available from endpoint, cloud, or identity telemetry alone. This helps analysts connect events across different security domains.

### How does XDR network visibility work?

XDR platforms correlate network telemetry with data from endpoints, cloud services, identity systems, and security tools to create a broader view of activity and support investigations.

### What network data is commonly used in XDR?

Common sources include flow records, packet metadata, DNS activity, firewall logs, IDS alerts, proxy logs, and other forms of network telemetry.

### Can network visibility replace endpoint telemetry?

No. Network visibility and endpoint telemetry provide different perspectives. XDR platforms are most effective when they correlate information from multiple sources rather than relying on a single telemetry type.

### Why is network telemetry valuable during investigations?

Network telemetry provides evidence of communication activity, helping analysts understand relationships between systems, identify suspicious connections, reconstruct events, and determine the scope of an incident.