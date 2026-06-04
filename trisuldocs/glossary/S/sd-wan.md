---
title: What is SD-WAN?
description: SD-WAN, or Software-Defined Wide Area Network, is a WAN architecture that uses centralized software-based control and policy-driven traffic steering to manage connectivity across multiple transport links.
sidebar_label: SD-WAN
sidebar_position: 188
slug: /glossary/sd-wan
keywords:
  - SD-WAN
  - software-defined WAN
  - WAN optimization
  - traffic steering
  - wide area network
  - path selection
  - application-aware routing
  - hybrid WAN
  - SaaS optimization
  - WAN failover
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SD-WAN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SD-WAN, or Software-Defined Wide Area Network, is a WAN architecture that uses centralized software-based control and policy-driven traffic steering to manage connectivity across multiple transport links."
      }
    },
    {
      "@type": "Question",
      "name": "Why is SD-WAN used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SD-WAN is used to improve path selection, resilience, application performance, and flexibility across geographically distributed environments and multiple WAN transports."
      }
    },
    {
      "@type": "Question",
      "name": "What does SD-WAN control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SD-WAN controls traffic steering, application-aware routing, path preference, failover behavior, and policy-driven WAN connectivity decisions across multiple links."
      }
    },
    {
      "@type": "Question",
      "name": "How is SD-WAN monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SD-WAN is monitored using telemetry such as link quality metrics, latency, jitter, packet loss, path utilization, application performance, failover activity, and tunnel-health visibility."
      }
    }
  ]
};

# What is SD-WAN?

**SD-WAN (Software-Defined Wide Area Network)** is a WAN architecture that uses centralized software-based control and policy-driven traffic steering to manage connectivity across multiple transport links.

SD-WAN enables organizations to use combinations of MPLS, broadband internet, LTE/5G, fiber, and other WAN transports while applying centralized policies for routing, application prioritization, failover behavior, and path selection.

SD-WAN is widely used in enterprise, cloud-connected, distributed branch, retail, telecom, and hybrid-network environments where application performance, WAN resilience, and transport flexibility are important.

Many organizations use SD-WAN to reduce dependence on expensive MPLS-only architectures by combining broadband internet and multiple WAN transports.

---

## How SD-WAN works
SD-WAN continuously evaluates WAN-link conditions such as latency, jitter, packet loss, utilization, and path availability, then dynamically selects paths based on application requirements and policy decisions.

SD-WAN separates WAN control policies from the underlying transport infrastructure, allowing centralized management across multiple connection types.

Critical applications such as voice, video conferencing, SaaS platforms, and cloud services may be prioritized onto higher-quality paths, while less-sensitive traffic may use lower-cost internet connectivity.

If WAN quality degrades or a circuit fails, SD-WAN platforms can automatically redirect traffic across alternate paths to maintain connectivity and application availability.

Common SD-WAN capabilities include application-aware routing, dynamic path selection, centralized policy management, WAN failover, secure branch connectivity, hybrid WAN support, and overlay-tunnel management.

Depending on deployment architecture, SD-WAN traffic may traverse MPLS, broadband internet, VPN overlays, cloud gateways, LTE/5G links, or direct internet breakout paths.

SD-WAN commonly enables direct internet breakout for SaaS and cloud applications instead of forcing all traffic through centralized data centers.

For example, during WAN congestion, SD-WAN may redirect voice or SaaS traffic onto a lower-latency broadband path while routing backup traffic across lower-priority links.

---

## SD-WAN in network operations
SD-WAN is commonly used for branch-office connectivity, cloud and SaaS access, hybrid WAN deployments, application-aware routing, internet breakout architectures, WAN resilience, and distributed enterprise connectivity.

Operators commonly investigate path instability, latency spikes, packet loss, jitter, failover events, uneven traffic distribution, overlay-tunnel instability, WAN congestion, policy misconfiguration, and degraded application performance.

Because application behavior may vary significantly depending on WAN quality, routing decisions, overlay behavior, and transport conditions, visibility into path selection and traffic steering is important for troubleshooting.

Historical visibility is especially useful for investigating intermittent WAN instability, recurring failover behavior, degraded SaaS performance, congestion-related path changes, or routing-policy issues across distributed environments.

---

## Common SD-WAN signals
| Signal | Meaning |
|---|---|
| Path quality | Measured health and performance of WAN links |
| Traffic steering | Which path or overlay traffic is using |
| Failover activity | Automatic transition between WAN paths |
| Application policy | Rules controlling traffic-routing behavior |
| Jitter and latency | Live measurements of WAN latency and stability |
| Tunnel health | Status of overlay or VPN connectivity |

Behavior depends on WAN design, transport quality, application sensitivity, policy configuration, overlay architecture, and infrastructure scale.

---

## Benefits and challenges of SD-WAN
SD-WAN improves WAN resilience, transport flexibility, branch connectivity, application-aware routing, cloud access, and failover behavior across distributed environments.

However, overlay visibility limitations, policy complexity, broadband variability, tunnel instability, inconsistent QoS handling, application-identification accuracy, and multi-vendor interoperability can complicate troubleshooting and traffic analysis.

Organizations commonly combine flow telemetry, packet analysis, interface monitoring, application telemetry, path-quality analysis, alert correlation, and historical traffic analysis to investigate degraded WAN or application behavior.

Correlating these telemetry sources helps operators determine whether performance problems originate from congestion, transport instability, overlay issues, routing policies, SaaS connectivity problems, or provider-related outages.

---

## In Trisul
Trisul supports SD-WAN-related visibility through flow telemetry analysis, historical traffic visibility, WAN traffic analysis, path-quality investigations, and overlay-related traffic analysis.

Using NetFlow, IPFIX, packet-analysis workflows, interface telemetry, and historical traffic analysis, operators can analyze traffic distribution across WAN paths and interfaces, investigate latency, jitter, packet loss, congestion, and failover behavior, correlate traffic patterns with applications and transport links, troubleshoot overlay and routing instability, and perform historical investigations associated with WAN and SaaS connectivity behavior across enterprise, branch, cloud, telecom, and hybrid-network environments.

Additional flow-analysis and traffic-investigation workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- What is WAN optimization?
- [What is traffic prioritization?](/glossary/traffic-prioritization)
- [What is latency?](/glossary/latency)
- [What is QoS?](/glossary/qos)
- [What is cloud monitoring?](/glossary/cloud-monitoring)

---

## Frequently asked questions
### What is SD-WAN?

SD-WAN, or Software-Defined Wide Area Network, is a WAN architecture that uses centralized software-based control and policy-driven traffic steering to manage connectivity across multiple transport links.

### Why is SD-WAN used?

SD-WAN is used to improve path selection, resilience, application performance, and flexibility across geographically distributed environments and multiple WAN transports.

### What does SD-WAN control?

SD-WAN controls traffic steering, application-aware routing, path preference, failover behavior, and policy-driven WAN connectivity decisions across multiple links.

### How is SD-WAN monitored?

SD-WAN is monitored using telemetry such as link quality metrics, latency, jitter, packet loss, path utilization, application performance, failover activity, and tunnel-health visibility.

### Why is SD-WAN closely associated with SaaS and cloud connectivity?

SD-WAN commonly supports direct internet breakout and application-aware routing for SaaS and cloud services, helping improve performance and reduce dependence on centralized WAN architectures.

### Why is SD-WAN useful in hybrid WAN environments?

SD-WAN allows organizations to combine MPLS, broadband internet, LTE/5G, and other WAN transports while dynamically selecting the most appropriate path for applications and traffic conditions.