---
title: What is a Crosskey Tree?
description: A Crosskey Tree is a Trisul analytics feature that allows analysts to navigate relationships between different traffic dimensions and pivot across related network entities during investigations.
sidebar_label: Crosskey Tree
sidebar_position: 35
slug: /glossary/crosskey-tree
keywords:
  - Crosskey Tree
  - traffic correlation
  - multidimensional analytics
  - traffic relationships
  - network investigation
  - Trisul analytics
  - key relationships
  - traffic exploration
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Crosskey Tree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Crosskey Tree is a hierarchical analytics view that shows relationships between different traffic dimensions, allowing analysts to navigate from one monitored entity to related entities and metrics."
      }
    },
    {
      "@type": "Question",
      "name": "Why is a Crosskey Tree useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crosskey Trees simplify investigations by allowing analysts to pivot between related traffic dimensions without manually correlating multiple reports, dashboards, or analytics views."
      }
    },
    {
      "@type": "Question",
      "name": "What types of entities can appear in a Crosskey Tree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the analytics context, Crosskey Trees may include hosts, applications, protocols, interfaces, autonomous systems, VLANs, subscribers, destinations, and other monitored keys."
      }
    },
    {
      "@type": "Question",
      "name": "How does a Crosskey Tree assist investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crosskey Trees help analysts follow relationships between traffic entities, making it easier to understand communication patterns, dependencies, service usage, and traffic composition."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Crosskey Tree the same as a graph visualization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A Crosskey Tree presents relationships in a hierarchical drill-down structure, while graph visualizations focus on displaying interconnected entities as network-style relationship maps."
      }
    }
  ]
};

# What is a Crosskey Tree?

A **Crosskey Tree** is a Trisul analytics feature that displays relationships between different traffic dimensions in a hierarchical structure, allowing analysts to pivot from one monitored entity to related entities during investigations.

Unlike traditional reports that typically focus on a single dimension of data, Crosskey Trees are designed for exploration. They help analysts move between related traffic entities without manually correlating information across multiple analytical views.

A useful way to think about a Crosskey Tree is:

> A report answers a question.
>
> A Crosskey Tree helps you follow the next question.

This makes Crosskey Trees particularly valuable during investigations where understanding relationships is often more important than viewing isolated metrics.

---

## Why Crosskey Trees exist
Network investigations rarely remain confined to a single dimension of data.

An analyst may begin by examining a host and then need to understand:

- Which applications the host is using
- Which destinations it communicates with
- Which interfaces carry the traffic
- Which protocols are involved
- Which autonomous systems are associated with the communication

Each question introduces a new analytical dimension.

Without relationship-based navigation, analysts often need to move repeatedly between reports, dashboards, and investigative views while manually correlating information.

Crosskey Trees exist to simplify this process by connecting related dimensions and allowing analysts to follow investigative paths naturally.

---

## How a Crosskey Tree works
A Crosskey Tree organizes related traffic dimensions into a navigable hierarchy.

For example, an investigation may follow a path such as:

```text
Host
 └── Application
      └── Destination
           └── ASN
```

Or:

```text
Application
 └── Hosts
      └── Interfaces
           └── Flows
```

Each step reveals additional context while preserving the relationships between entities.

Instead of opening separate reports and manually connecting the results, analysts can move directly between related dimensions within the same workflow.

The specific entities available depend on the analytics context and available traffic metadata.

---

## Crosskey Trees in network operations
Modern networks generate telemetry across many dimensions including hosts, applications, protocols, interfaces, subscribers, autonomous systems, VLANs, and destinations.

Understanding individual metrics is important, but investigations often require understanding how those dimensions relate to one another.

For example:

- Which applications generated a traffic spike?
- Which hosts are responsible?
- Which destinations are involved?
- Which network paths carried the traffic?

Crosskey Trees allow analysts to answer these questions by moving through related entities while maintaining investigative context.

This makes them particularly valuable for troubleshooting, traffic analysis, security investigations, and root-cause analysis.

---

## Crosskey Tree vs standard reports
| Category | Crosskey Tree | Standard Reports |
|----------|--------------|------------------|
| Primary purpose | Relationship exploration | Metric presentation |
| Navigation style | Interactive drill-down | Static summaries |
| Data perspective | Multidimensional | Typically single-dimensional |
| Investigation workflow | Exploratory analysis | Report-based review |
| User interaction | Interactive navigation | Viewing and review |
| Best fit | Traffic investigation and correlation | Historical reporting and trend analysis |

Reports answer questions such as:

- Which hosts generated the most traffic?
- Which applications consumed the most bandwidth?

Crosskey Trees answer questions such as:

- Which applications are those hosts using?
- Which destinations are involved?
- How are these entities related?

Reports provide summaries.

Crosskey Trees provide investigative context.

Both are complementary analytical tools.

---

## What makes Crosskey Trees effective
The value of a Crosskey Tree depends on how easily analysts can move from one question to the next during an investigation.

Effective Crosskey Trees present meaningful relationships between traffic dimensions while preserving context throughout the investigative workflow.

Analysts should be able to pivot naturally between related entities without repeatedly switching views or manually correlating information.

As traffic volumes and analytical dimensions increase, this ability becomes increasingly important for maintaining investigation efficiency.

---

## In Trisul
Crosskey Trees are a core investigative feature within Trisul's analytics framework.

They allow analysts to pivot between related traffic keys and explore relationships across multiple dimensions without manually correlating separate reports, dashboards, and analytical views.

By connecting hosts, applications, protocols, interfaces, destinations, ASNs, and other monitored entities, Crosskey Trees help transform isolated observations into a broader understanding of network behavior.

This investigative-navigation approach complements Trisul's reports, dashboards, Top-K analytics, flow analysis, and anomaly-detection capabilities.

---

## Related terms
- [Traffic investigation](/glossary/traffic-investigation)
- Flow analytics
- [Top-K analytics](/glossary/top-k-analytics)
- Counter group
- Network telemetry
- Graph analytics
- Dashboard
- Historical analysis

---

## Frequently asked questions
### What is a Crosskey Tree?

A Crosskey Tree is a hierarchical analytics view that shows relationships between different traffic dimensions, allowing analysts to navigate from one monitored entity to related entities and metrics.

### Why is a Crosskey Tree useful?

Crosskey Trees simplify investigations by allowing analysts to pivot between related traffic dimensions without manually correlating multiple reports, dashboards, or analytics views.

### What types of entities can appear in a Crosskey Tree?

Depending on the analytics context, Crosskey Trees may include hosts, applications, protocols, interfaces, autonomous systems, VLANs, subscribers, destinations, and other monitored keys.

### How does a Crosskey Tree assist investigations?

Crosskey Trees help analysts follow relationships between traffic entities, making it easier to understand communication patterns, dependencies, service usage, and traffic composition.

### Is a Crosskey Tree the same as a graph visualization?

No. A Crosskey Tree presents relationships in a hierarchical drill-down structure, while graph visualizations focus on displaying interconnected entities as network-style relationship maps.

### Why use a Crosskey Tree instead of multiple reports?

Reports provide individual perspectives on traffic data. Crosskey Trees connect those perspectives, allowing analysts to move between related dimensions without losing investigative context.