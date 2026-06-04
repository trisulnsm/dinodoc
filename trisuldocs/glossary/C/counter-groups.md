---
title: What is a counter group?
description: A counter group is a logical collection of traffic counters in Trisul used to measure and analyze specific dimensions of network activity such as hosts, applications, protocols, interfaces, or traffic categories over time.
sidebar_label: Counter groups
sidebar_position: 33
slug: /glossary/counter-groups
keywords:
  - counter groups
  - trisul counter groups
  - traffic metering
  - custom counter groups
  - network traffic counters
  - flow metrics
  - top-k analytics
  - traffic analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What built-in counter groups does Trisul provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul includes built-in counter groups for analyzing hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and other traffic dimensions used in operational analytics workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What types of custom counter groups can be created?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports multiple custom counter-group approaches including filtered groups, keyset-based grouping, rule-based classification, threshold-oriented statistical grouping, and cross-dimensional analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What is cardinality counting in a counter group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cardinality counting measures the number of unique values associated with a traffic entity or metric, such as the number of distinct applications used by a host."
      }
    },
    {
      "@type": "Question",
      "name": "How do counter groups relate to Top-K analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Counter groups provide the traffic metrics and ranked entities used in Top-K analytics workflows, helping operators identify dominant traffic contributors and operational trends."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use counter groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses counter groups to organize, meter, aggregate, and analyze traffic across multiple operational dimensions for monitoring, reporting, trending, and investigation workflows."
      }
    }
  ]
};

# What is a counter group?

A **counter group** is a logical collection of traffic counters in Trisul used to measure and analyze specific dimensions of network activity such as hosts, applications, protocols, interfaces, or traffic categories over time. Each counter group tracks values like bytes, packets, flows, or sessions for many keys (for example, IP addresses, applications, or ASNs) and lets Trisul report and compare traffic by those dimensions.

---

## How counter groups work
A counter group contains a set of keys and associated counters. When traffic arrives, Trisul associates it with the appropriate key in the group and updates the counters for that key. Over time, each key accumulates traffic metrics, which can be aggregated, ranked, or filtered. Built‑in groups for hosts, applications, protocols, interfaces, countries, ASNs, and VLANs make it easy to organize traffic by those common dimensions.

---

## Counter groups in network operations
Operators use counter groups to quickly see which entities consume the most traffic, change most over time, or behave unusually. They underpin Top‑K analytics, trending dashboards, capacity‑planning reports, and security‑monitoring views. By grouping traffic logically, counter groups turn raw flows into structured operational metrics for hosts, services, interfaces, and business segments.

---

## Common counter‑group dimensions
| Dimension | Operational focus |
|-----------|-------------------|
| Hosts     | Traffic by IP address or endpoint |
| Applications | Traffic by application or service |
| Protocols | Traffic by protocol (for example, HTTP, DNS, VoIP) |
| Interfaces | Traffic per interface or link |
| Countries | Geographic traffic distribution |
| ASNs      | Traffic by autonomous system |
| VLANs     | Traffic within segmented LANs |

Each group provides a different view of the same underlying traffic data.

---

## Custom counter‑group types
Trisul supports several ways to define custom counter groups:

| Type              | Purpose | Example |
|-------------------|---------|---------|
| Filtered          | Limit traffic to a subset | Web traffic only |
| Keyset            | Group related entities | VoIP + Web + Email services |
| Rule‑based        | Classify traffic by custom rules | CCTV or backup traffic |
| Statistical       | Group by traffic thresholds | High‑volume or abnormal hosts |
| Cross‑dimensional | Combine multiple dimensions | Internal hosts by country |

Custom groups let teams adapt analytics to their own security, billing, or operations policies.

---

## What is cardinality counting?
Cardinality counting measures how many *unique* values are associated with an entity. For example, it can count how many distinct applications a host communicates with, how many unique destinations an IP talks to, or how many protocols an interface carries. Cardinality metrics help detect scanning, service discovery, and traffic diversity changes, and are often used in security and traffic‑behavior analytics.

---

## Why counter groups are useful
Counter groups turn fine‑grained flow data into high‑level, operational metrics without manual aggregation. They simplify traffic analysis, speed up Top‑K identification, enable efficient trending, and make anomaly detection and reporting much more manageable. By organizing traffic into logical buckets, they help analysts move quickly from raw data to actionable insights.

---

## In Trisul
Counter groups are a core part of Trisul’s analytics architecture. Trisul maintains built‑in groups for standard traffic dimensions and supports custom groups through configuration and Lua‑based logic. These groups feed directly into **Top‑K analytics**, **Aggregate Flows**, historical trending, and threshold‑based alerts, enabling operators to monitor, report, and investigate traffic across multiple dimensions in a single deployment.

---

## Related terms
- Counter group  
- [Top‑K analytics](/glossary/top-k-analytics)
- [Custom flow analytics](/glossary/custom-flow-analytics)
- [Flow tagger](/glossary/flow-tagger)
- Flow monitoring  
- Flow analyzer  
- Aggregate Flows  
- Cardinality counting  

---

## Frequently asked questions
### What built‑in counter groups does Trisul provide?

Trisul includes built‑in counter groups for analyzing hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and other traffic dimensions used in operational analytics workflows.

### What types of custom counter groups can be created?

Trisul supports multiple custom counter‑group approaches including filtered groups, keyset‑based grouping, rule‑based classification, threshold‑oriented statistical grouping, and cross‑dimensional analytics.

### What is cardinality counting in a counter group?

Cardinality counting measures the number of unique values associated with a traffic entity or metric, such as the number of distinct applications used by a host.

### How do counter groups relate to Top‑K analytics?

Counter groups provide the traffic metrics and ranked entities used in Top‑K analytics workflows, helping operators identify dominant traffic contributors and operational trends.

### How does Trisul use counter groups?

Trisul uses counter groups to organize, meter, aggregate, and analyze traffic across multiple operational dimensions for monitoring, reporting, trending, and investigation workflows.