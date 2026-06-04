---
title: What is active monitoring?
description: Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.
sidebar_label: Active monitoring
sidebar_position: 3
slug: /glossary/active-monitoring
keywords:
  - active monitoring
  - synthetic monitoring
  - probes
  - health checks
  - availability monitoring
  - test traffic
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is active monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Why is active monitoring used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring is used to verify that services are reachable and performing as expected."
      }
    },
    {
      "@type": "Question",
      "name": "What does active monitoring measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring can measure latency, availability, response time, and loss."
      }
    },
    {
      "@type": "Question",
      "name": "How is active monitoring different from passive monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring sends test traffic, while passive monitoring observes real traffic already moving across the network."
      }
    }
  ]
};

# What is active monitoring?

Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior. It uses probes, pings, or scripted transactions to verify that services are reachable, available, and responding within expected time limits.

---

## How active monitoring works
An active monitor generates test traffic, such as ICMP pings or HTTP requests, and sends it toward a target service or host. The response (or lack of response) is measured and compared against defined thresholds for latency, availability, or error rate.

This gives a direct, repeatable check on availability and response quality. It is different from simply watching real traffic, because the monitor drives the traffic instead of just observing it.

---

## Active monitoring in network operations
Operations teams use active monitoring to confirm that services are reachable and responsive from the perspective of an end device or user. It helps validate the path—even when no real user traffic is present—by acting as a continuous “canary” in the network.

It is useful for catching failures quickly. A probe can detect an outage or latency spike before users start reporting problems.

---

## Common active checks
| Check              | Purpose |
|--------------------|---------|
| Ping               | Basic reachability and round‑trip time |
| Synthetic request  | Service reachability and basic response (for example, HTTP/HTTPS) |
| Test transaction   | End‑to‑end behavior, including login, API calls, or multi‑step workflows |
| Availability probe | Confirm uptime and service availability over time |

---

## What makes active monitoring useful
Active monitoring is useful because it directly tests whether a service is reachable and responsive, rather than relying only on indirect signals. That makes it very effective for alerting, availability SLAs, and outage detection.

It works best when combined with passive monitoring, since passive traffic visibility shows what real users are doing while active checks verify that the service path is healthy.

---

## In Trisul
Trisul does not generate synthetic test traffic but can complement active monitoring by showing the actual network traffic and flow behavior that occurred at the time a synthetic check reported a problem.  
By analyzing flows, protocols, and application behavior around the reported event, Trisul helps operators correlate synthetic‑probe failures with what real‑world traffic looks like, accelerating root‑cause analysis and troubleshooting.

---

## Related terms
- [Network troubleshooting](/glossary/network-troubleshooting)
- [Latency](/glossary/latency)
- [Quality of experience](/glossary/quality-of-experience)
- [Passive monitoring](/glossary/passive-network-monitoring)
- [Network performance](/glossary/network-performance)
- Synthetic transactions
- Availability checks

---

## Frequently asked questions
### What is active monitoring?

Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.

### Why is active monitoring used?

Active monitoring is used to verify that services are reachable and performing as expected.

### What does active monitoring measure?

Active monitoring can measure latency, availability, response time, and loss.

### How is active monitoring different from passive monitoring?

Active monitoring sends test traffic, while passive monitoring observes real traffic already moving across the network.