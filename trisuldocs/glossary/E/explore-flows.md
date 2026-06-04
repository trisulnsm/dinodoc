---
title: What is Explore Flows?
description: Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event.
sidebar_label: Explore Flows
sidebar_position: 55
slug: /glossary/explore-flows
keywords:
  - Explore Flows
  - flow exploration
  - flow drill down
  - traffic investigation
  - pivot flows
  - network analysis
  - flow investigation
  - traffic drilldown
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Explore Flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Explore Flows useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore Flows is useful because it helps analysts move quickly from summarized traffic views into detailed flow investigations without manually constructing complex queries. It improves troubleshooting, operational analysis, and security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "What can analysts investigate using Explore Flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Analysts may investigate hosts, peers, conversations, protocols, traffic timing, flow volume, interfaces, applications, and suspicious communication patterns using Explore Flows workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How does Explore Flows differ from dashboards or summary views?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dashboards and summary views provide aggregated operational visibility, while Explore Flows workflows provide access to underlying flow records and detailed traffic investigation capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use Explore Flows workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses Explore Flows workflows to help analysts pivot from summarized operational views into detailed flow analytics, traffic investigations, historical traffic analysis, and communication analysis workflows."
      }
    }
  ]
};

# What is Explore Flows?

**Explore Flows** is an investigative workflow that lets analysts browse, filter, and inspect related network flow records starting from a selected host, conversation, interface, application, or traffic event. It turns high‑level summaries (such as alerts, traffic spikes, or top‑talker lists) into interactive, query‑free investigations by automatically scoping flows around the chosen object, so analysts can rapidly drill into details without writing complex search expressions.

---

## How Explore Flows works
Explore Flows typically starts from a dashboard or summary view where an analyst clicks a host, interface, protocol, or event. The system then retrieves all matching flows within a time window and surrounding context, presenting them in a browsable, filterable table. Analysts can pivot by source/destination, port, protocol, application, or time, then zoom into specific flows or packets for deeper inspection. This workflow collapses the gap between spotting something unusual and understanding exactly what happened on the wire, significantly speeding up both NOC and SOC workflows.

---

## Explore Flows in network operations
Operations teams use Explore Flows to troubleshoot latency, connectivity, or capacity issues by inspecting flows associated with a given host, interface, or application. Security and incident‑response teams use it to validate suspicious alerts, trace attacker‑related traffic, or reconstruct past incidents by examining historical flows. In large‑scale environments, Explore Flows reduces manual query‑building and lets analysts move from “something looks odd” to “here’s the exact flow and session behavior” in just a few clicks.

---

## Common Explore Flows investigation actions
With Explore Flows, analysts can:
- **Inspect peers** to see which endpoints a host talks to.
- **Review traffic timing** for bursts, spikes, or periodic patterns.
- **Analyze traffic volume** across hosts, ports, or protocols.
- **Filter by protocol or port** to narrow to specific services.
- **Investigate historical flows** to reconstruct past events.
- **Pivot to packet visibility** for deeper protocol‑level analysis.

Different platforms expose these actions via visual filters, time‑range sliders, and context‑aware pivots, tuned to the underlying telemetry source (NetFlow, IPFIX, sFlow, etc.).

---

## Explore Flows vs dashboards
Dashboards and summary views give high‑level metrics—top talkers, utilization, alerts—while Explore Flows provides the “behind‑the‑metrics” flow‑level detail. Dashboards answer “what is happening?”, Explore Flows answers “how is it happening, and with whom?” In practice, operators use dashboards as launchpads, clicking on an item to drop into an Explore Flows session where they can tailor the investigation interactively rather than by composing ad‑hoc queries.

---

## Operational considerations
Explore Flows works best when backed by efficient indexing, low‑latency queries, and long‑term flow retention. Large‑scale telemetry, high‑cardinality hosts or ports, and deep retention windows can stress query performance if not tuned, so operators often need to balance investigation depth with database‑sharding and caching strategies. The usability of the Explore Flows interface—how easy it is to filter, pivot, and visualize results—largely determines how often analysts choose it over manual query tools.

---

## How Trisul handles Explore Flows
Trisul integrates **Explore Flows** as a core investigative workflow on top of its flow‑based telemetry (NetFlow, IPFIX, sFlow, and related formats). Analysts can select a host, interface, alert, or application from dashboards and pivot into an Explore Flows view that exposes matching flows with filters, timelines, and drill‑down options. Trisul couples this with historical traffic trending, anomaly detection, and packet‑visibility pathways so that operators can move seamlessly from summary metrics through flows to packets. Trisul emphasizes interactive, analyst‑driven investigation rather than static reporting, making Explore Flows central to incident‑investigation, security‑monitoring, and performance‑troubleshooting use cases.

---

## Related terms
- [Explore Flows](/glossary/explore-flows)
- [Flow tracker](/glossary/flow-tracker)
- [Traffic investigation](/glossary/traffic-investigation)
- Host monitoring  
- [Drilldown analysis](/glossary/drilldown-analysis)
- Flow monitoring  
- [Flow analysis](/glossary/flow-analysis)
- [Top talkers](/glossary/top-talkers)

---

## Frequently asked questions
### What is Explore Flows?

Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event.

### Why is Explore Flows useful?

Explore Flows is useful because it helps analysts move quickly from summarized traffic views into detailed flow investigations without manually constructing complex queries. It improves troubleshooting, operational analysis, and security investigations.

### What can analysts investigate using Explore Flows?

Analysts may investigate hosts, peers, conversations, protocols, traffic timing, flow volume, interfaces, applications, and suspicious communication patterns using Explore Flows workflows.

### How does Explore Flows differ from dashboards or summary views?

Dashboards and summary views provide aggregated operational visibility, while Explore Flows workflows provide access to underlying flow records and detailed traffic investigation capabilities.

### How does Trisul use Explore Flows workflows?

Trisul uses Explore Flows workflows to help analysts pivot from summarized operational views into detailed flow analytics, traffic investigations, historical traffic analysis, and communication analysis workflows.