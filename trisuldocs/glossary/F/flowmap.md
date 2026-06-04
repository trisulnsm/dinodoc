---
title: What is FlowMap?
description: FlowMap in Trisul Network Analytics is a visual traffic analysis interface that displays communication patterns, traffic relationships, and flow behavior between hosts and network entities to accelerate operational investigations and traffic analysis workflows.
sidebar_label: FlowMap
sidebar_position: 67
slug: /glossary/flowmap
keywords:
  - flowmap
  - trisul flowmap
  - traffic visualization
  - network flow visualization
  - flow analytics
  - east-west traffic visualization
  - communication mapping
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is FlowMap in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FlowMap is a visual traffic analysis interface in Trisul that displays communication patterns and traffic relationships between hosts and network entities using flow-based analytics."
      }
    },
    {
      "@type": "Question",
      "name": "Why is FlowMap useful in network operations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FlowMap helps operators identify traffic concentration, abnormal communication paths, unusual east-west traffic behavior, and suspicious host relationships without manually analyzing large volumes of raw flow records."
      }
    },
    {
      "@type": "Question",
      "name": "Does FlowMap use flow data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FlowMap visualizes communication relationships using network flow data and traffic metadata collected by Trisul."
      }
    },
    {
      "@type": "Question",
      "name": "Can FlowMap help during investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FlowMap helps operators identify abnormal communication behavior, unexpected traffic paths, segmentation anomalies, and suspicious host interactions during troubleshooting and security investigations."
      }
    }
  ]
};

# What is FlowMap?

FlowMap in Trisul Network Analytics is a visual traffic analysis interface that displays communication patterns, traffic relationships, and flow behavior between hosts and network entities using flow-based analytics and traffic metadata.

Modern infrastructure environments generate extremely large volumes of flow telemetry and communication data. In large environments, manually analyzing raw flow records can become operationally slow because communication relationships are distributed across enormous amounts of telemetry.

FlowMap helps reduce this operational complexity by transforming flow data into visual communication maps where traffic relationships, heavily communicating systems, traffic concentration points, and unusual communication behavior become easier to identify operationally.

Instead of analyzing isolated flow entries individually, operators can explore how systems communicate collectively across the environment, making abnormal traffic relationships, east-west communication paths, segmentation anomalies, and suspicious connectivity patterns more visible during investigations.

---

## How FlowMap works
FlowMap uses network flow telemetry to generate visual communication relationships between hosts, services, applications, and network entities.

Systems appear as connected nodes, while communication paths and traffic flows are represented visually between those nodes. The visualization updates dynamically as traffic behavior changes, allowing operators to observe active communication patterns, bandwidth concentration, and traffic movement directly from the interface.

Rather than reading individual flow records sequentially, operators can visually explore:
- Which systems communicate most heavily
- Which hosts suddenly become major traffic hubs
- Which communication paths appear abnormal
- How east-west traffic moves across segments
- Whether traffic relationships change unexpectedly over time

This visual relationship analysis helps investigators recognize traffic patterns significantly faster than manually correlating large volumes of raw telemetry records during operational troubleshooting or security investigations.

---

## FlowMap in network operations
FlowMap is operationally valuable because many infrastructure and security problems are relationship-oriented rather than isolated to individual flow records.

During outages, malware investigations, east-west traffic analysis, or performance investigations, operators often need to determine:
- Which systems communicate abnormally
- Which hosts suddenly generate concentrated traffic
- Which communication paths bypass expected segmentation boundaries
- Whether internal traffic behavior changed unexpectedly
- How traffic relationships evolved during an incident

Visual traffic analysis helps investigators identify these patterns much faster than manually querying raw flow telemetry repeatedly across large environments.

This becomes especially important in enterprise, ISP, SD-WAN, cloud, and hybrid-network environments where infrastructure generates enormous volumes of communication telemetry continuously throughout the day.

FlowMap is also useful during threat hunting and lateral-movement investigations because suspicious communication clusters, unexpected internal relationships, or abnormal east-west connectivity may become visually apparent even when individual flow records appear operationally normal in isolation.

---

## FlowMap vs flow records
| Category | FlowMap | Flow records |
|---|---|---|
| Primary purpose | Visualize communication relationships | Store traffic metadata |
| Presentation | Graphical communication map | Structured telemetry entries |
| Operational focus | Rapid visual investigation | Detailed traffic analysis |
| Best fit | Relationship analysis and anomaly visibility | Querying, reporting, and forensic analysis |
| Core value | Accelerates pattern recognition and investigation | Preserves granular traffic telemetry |

FlowMap provides visual context for communication behavior. Flow records provide the underlying telemetry used to build, investigate, and validate those traffic relationships.

---

## What makes FlowMap effective in practice
Effective visual traffic analysis depends heavily on filtering, aggregation, telemetry coverage, and contextual prioritization.

Without filtering controls, very large environments can produce dense communication maps that become difficult to interpret operationally during active investigations. Excessive node density, incomplete telemetry, or heavily sampled traffic can reduce visualization clarity and hide smaller but operationally important communication patterns.

FlowMap becomes significantly more useful when operators can isolate specific hosts, segments, protocols, traffic classes, or time ranges associated with the investigation.

Historical visibility is also important because investigators often need to compare communication relationships over time in order to identify newly emerging traffic paths, abnormal host behavior, or changing east-west communication patterns.

---

## How Trisul handles FlowMap
Trisul uses flow analytics and traffic metadata to generate FlowMap visualizations for operational analysis, troubleshooting, and investigative workflows.

Using NetFlow, IPFIX, sFlow, J-Flow, and related telemetry sources, FlowMap helps operators visualize communication behavior, bandwidth concentration, host relationships, and traffic movement across monitored environments.

Rather than relying entirely on raw flow queries, Trisul allows operators to pivot between visual relationship analysis and detailed traffic investigation workflows to understand how communication behavior changes across the environment.

These workflows are particularly useful for:
- East-west traffic analysis
- Threat hunting
- Segmentation investigations
- Operational troubleshooting
- Bandwidth analysis
- Lateral movement investigations
- Historical communication analysis

FlowMap integrates closely with Trisul flow analysis, historical traffic visibility, traffic investigation workflows, and operational dashboards to support both high-level visual analysis and deeper forensic investigation workflows.

Additional workflow details are documented in the Trisul documentation:

[Trisul Documentation](https://docs.trisul.org/)

---

## Related terms
- Flow monitoring
- NetFlow
- IPFIX
- [Dashboards and modules](/glossary/dashboards-and-modules)
- Network telemetry
- Retro analysis

---

## Frequently asked questions
### What is FlowMap in Trisul?

FlowMap is a visual traffic analysis interface in Trisul that displays communication patterns and traffic relationships between hosts and network entities using flow-based analytics.

### Why is FlowMap useful in network operations?

FlowMap helps operators identify traffic concentration, abnormal communication paths, unusual east-west traffic behavior, and suspicious host relationships without manually analyzing large volumes of raw flow records.

### Does FlowMap use flow data?

Yes. FlowMap visualizes communication relationships using network flow data and traffic metadata collected by Trisul.

### Can FlowMap help during investigations?

Yes. FlowMap helps operators identify abnormal communication behavior, unexpected traffic paths, segmentation anomalies, and suspicious host interactions during troubleshooting and security investigations.