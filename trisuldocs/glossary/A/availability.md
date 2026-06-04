---
title: What is availability?
description: Availability is the measure of whether a service, system, or network is accessible and functioning when needed.
sidebar_label: Availability
sidebar_position: 13
slug: /glossary/availability
keywords:
  - availability
  - service availability
  - uptime
  - access
  - reliability
  - system health
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is availability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Availability is the measure of whether a service, system, or network is accessible and functioning when needed."
      }
    },
    {
      "@type": "Question",
      "name": "Why is availability important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Availability is important because users can only use services that are reachable and working."
      }
    },
    {
      "@type": "Question",
      "name": "How is availability measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Availability is measured by uptime, response success, and service reachability over time."
      }
    },
    {
      "@type": "Question",
      "name": "What affects availability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Availability can be affected by outages, congestion, failures, maintenance, and access policy."
      }
    }
  ]
};

# What is availability?

Availability is the measure of whether a service, system, or network is accessible and functioning when needed. It answers the simple question: “Can users reach and use this right now?”

---

## How availability works
A system is available when users can reach it and complete the expected action, such as loading a web page, connecting to an API, or logging in. If the service is down, unreachable, or not responding to valid requests, availability drops.

Availability is often tracked as uptime over a period of time (for example, 99.9% over a month) and can also be expressed as a request success rate or reachability percentage over a measurement interval.

---

## Availability in operations
Availability is a basic service goal for nearly every networked system. Operations teams monitor it closely because outages have an immediate impact on users and business processes.

It also forms the basis for reporting and service‑level objectives (SLOs) or service‑level agreements (SLAs). Many dashboards and operational reports are built around availability metrics and targets.

---

## Common availability signals
| Signal       | Meaning |
|--------------|---------|
| Uptime       | Time the service was operational and reachable |
| Reachability | Whether the service can be contacted from relevant locations |
| Success rate | How often requests or probes succeed versus failing |
| Downtime     | Time the service is reported as unavailable or unreachable |

---

## What makes availability useful
Availability is useful because it is easy to understand and directly tied to user access. If a service is unavailable, performance and security largely stop mattering from the user’s perspective.

It becomes more useful when combined with latency, error‑rate, and traffic‑volume data, since those metrics help explain why availability changed and how the degradation felt to users.

---

## In Trisul
Trisul can help relate availability events to traffic and network conditions so teams can understand why access or service reachability changed.  
By correlating flow‑based traffic patterns, protocol behavior, and interface metrics with external availability‑check results, Trisul supports faster root‑cause analysis when services appear to drop or become unreachable.

---

## Related terms
- [Availability](/glossary/availability)
- [Uptime monitoring](/glossary/uptime-monitoring)
- [Active monitoring](/glossary/active-monitoring)
- [Network access](/glossary/network-access)
- [Network performance](/glossary/network-performance)
- [Quality of experience](/glossary/quality-of-experience)
- Service‑level agreement

---

## Frequently asked questions
### What is availability?

Availability is the measure of whether a service, system, or network is accessible and functioning when needed. It indicates whether users can reach and use the service at a given time.

### Why is availability important?

Availability is important because users can only use services that are reachable and working. Poor availability directly impacts user experience, business operations, and revenue.

### How is availability measured?

Availability is measured by uptime, response success, and service reachability over time. Common expressions include uptime percentages and success‑rate metrics over specific intervals.

### What affects availability?

Availability can be affected by outages, congestion, hardware or software failures, maintenance windows, and access‑control policies that block legitimate traffic.