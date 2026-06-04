---
title: What is a firewall?
description: A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies.
sidebar_label: Firewall
sidebar_position: 56
slug: /glossary/firewall
keywords:
  - firewall
  - network firewall
  - security policy
  - packet filtering
  - traffic control
  - network security
  - zone protection
  - stateful firewall
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a firewall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies."
      }
    },
    {
      "@type": "Question",
      "name": "How does a firewall work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall evaluates traffic against configured security rules or policies. Depending on firewall type and deployment model, it may inspect packet headers, connection state, protocols, applications, or traffic behavior before allowing or blocking communications."
      }
    },
    {
      "@type": "Question",
      "name": "What types of firewalls are there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common firewall types include packet-filtering firewalls, stateful firewalls, proxy firewalls, web application firewalls, and next-generation firewalls. Different firewall types provide different levels of visibility, inspection, and policy enforcement."
      }
    },
    {
      "@type": "Question",
      "name": "Why is firewall monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall monitoring helps organizations analyze blocked traffic, policy violations, suspicious connection attempts, traffic anomalies, and operational changes. Monitoring firewall activity improves troubleshooting, security investigations, and policy validation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support firewall-related investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports firewall-related investigations through traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help operators analyze communication behavior and correlate firewall-related traffic patterns."
      }
    }
  ]
};

# What is a firewall?

**A firewall** is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies. It acts as a gatekeeper at network boundaries (such as between the internet and an internal network, or between datacenter segments), deciding which traffic is allowed or denied according to rule sets. Firewalls can be hardware appliances, virtualized software, or cloud‑native services that combine packet filtering, stateful inspection, and often rich application‑aware and logging capabilities.

---

## How a firewall works
A firewall evaluates traffic against a configured rule base as packets or sessions cross a security boundary. It inspects header information (IP addresses, ports, protocols), and in many cases also tracks connection state, application behavior, and user‑level context before accepting, dropping, logging, or redirecting traffic. In stateful firewalls, the device keeps track of open sessions (such as TCP handshakes) to allow related return traffic without re‑evaluating the full policy. Modern firewalls may also inspect payloads or TLS metadata and tie rules to application identity, user roles, or threat intelligence, offering more granular control than simple static filters.

---

## Firewall types
Different firewall types provide varying levels of visibility and policy richness:

| Type                    | Operational focus |
|-------------------------|--------------------------------------------------------|
| Packet‑filtering        | Basic header‑based allow/deny rules                  |
| Stateful inspection     | Session‑aware filtering using connection state       |
| Proxy firewall          | Terminates and intermediates sessions (application‑level) |
| Web application firewall (WAF) | Protects HTTP/S apps from web‑layer threats        |
| Next‑generation firewall (NGFW) | Application‑aware, integrated IPS, and threat features |

Packet‑filtering and stateful devices form the traditional network‑firewall baseline, while NGFWs and WAFs add deeper inspection and integration with security operations.

---

## Firewalls in network operations
Firewalls are central to network‑security, segmentation, and access‑control workflows. They enforce zoning (for example, separating internet‑facing, internal‑user, and server segments), restrict unauthorized traffic, and provide detailed logs for analysis. Operations teams use firewalls to block known‑bad hosts, limit lateral‑movement exposure, and manage application‑level policies. In incident response, firewall logs and telemetry often show attempted but blocked connections, helping analysts gauge attack scope and validate reachability assumptions.

---

## Firewall monitoring and visibility
Effective firewall operations depend on logging and telemetry: traffic‑flow logs, session records, rule‑hit counters, and alerts. Teams monitor these to detect policy violations, review blocked traffic, and investigate suspicious connection attempts. Without analysis, logs can quickly become an undigested stream; that is why operators often combine firewall exports with flow‑based analytics and dashboards to highlight anomalies, policy‑changes, or traffic‑growth patterns related to specific rules or zones. This correlation turns firewall events into actionable insights.

---

## Firewalls and encrypted traffic
Encrypted traffic changes what a firewall can see. Some firewalls examine TLS‑handshake metadata (cipher suites, SNI, certificate details) and traffic‑behavior patterns even when payloads are encrypted. For full inspection of HTTPS or other TLS‑wrapped traffic, organizations may deploy TLS interception (SSL‑decryption) at the firewall, but this introduces certificate management, performance, and privacy‑compliance trade‑offs. The exact visibility depends on whether the firewall sits in a position where it can intercept and decrypt traffic, and on organizational policy regarding decryption.

---

## Operational considerations
Firewall deployments face rule‑complexity, policy‑sprawl, and performance‑scaling challenges. Large rule sets can become hard to audit and may slow troubleshooting; overly broad rules reduce security; overly restrictive rules break legitimate traffic. To manage this, teams need disciplined change‑control, regular rule reviews, and continuous monitoring to track what flows are actually traversing the firewall. Integration with traffic‑analytics and SIEM‑style platforms helps operators see traffic‑trends that correlate with rule‑changes, policy‑violations, or spike in blocked attempts.

---

## How Trisul supports firewall‑related investigations
Trisul complements firewall operations through traffic‑analytics and visibility rather than acting as a firewall itself. It can ingest **NetFlow, IPFIX, and sFlow** telemetry from firewalls and associated routers, switches, and gateways, exposing traffic patterns that firewall log entries represent. Operators then use **Explore Flows**, historical trending, and anomaly detection to investigate which hosts, ports, or applications are generating blocked or heavily filtered flows, how those flows change over time, and whether they correlate with security events elsewhere in the environment. In this way, Trisul helps turn firewall‑level decisions into a broader, context‑rich view of communication behavior and threat posture.

---

## Related terms
- [Firewall](/glossary/firewall)
- [Packet filtering](/glossary/packet-filtering)
- [ACL](/glossary/access-control-list)
- [Network segmentation](/glossary/network-segmentation)
- [Policy enforcement](/glossary/policy-enforcement)
- [Security zone](/glossary/security-zone)
- [NGFW](/glossary/ngfw)
- Traffic analysis  

---

## Frequently asked questions
### What is a firewall?

A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies.

### How does a firewall work?

A firewall evaluates traffic against configured security rules or policies. Depending on firewall type and deployment model, it may inspect packet headers, connection state, protocols, applications, or traffic behavior before allowing or blocking communications.

### What types of firewalls are there?

Common firewall types include packet‑filtering firewalls, stateful firewalls, proxy firewalls, web application firewalls, and next‑generation firewalls. Different firewall types provide different levels of visibility, inspection, and policy enforcement.

### Why is firewall monitoring important?

Firewall monitoring helps organizations analyze blocked traffic, policy violations, suspicious connection attempts, traffic anomalies, and operational changes. Monitoring firewall activity improves troubleshooting, security investigations, and policy validation.

### How does Trisul support firewall‑related investigations?

Trisul supports firewall‑related investigations through traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help operators analyze communication behavior and correlate firewall‑related traffic patterns.