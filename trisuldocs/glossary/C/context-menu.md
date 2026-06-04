---
title: What is a context menu in network analytics?
description: A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric. In Trisul, context menus support rapid drill-down and traffic investigation workflows.
sidebar_label: Context menu
sidebar_position: 30
slug: /glossary/context-menu
keywords:
  - context menu
  - Trisul context menu
  - drill-down
  - investigation menu
  - traffic investigation
  - pivot actions
  - flow investigation
  - analyst workflow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a context menu in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric."
      }
    },
    {
      "@type": "Question",
      "name": "What actions are available in the context menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context menu actions may include viewing flows, retrieving packets, pivoting to related traffic, viewing host activity, filtering traffic, and launching investigation workflows scoped to the selected item."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the context menu important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context menus improve investigation speed by allowing analysts to quickly pivot between related traffic views and operational data without manually constructing filters or queries."
      }
    },
    {
      "@type": "Question",
      "name": "Where does the context menu appear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, context menus appear throughout dashboards and analytical views wherever traffic entities, flows, alerts, hosts, or metrics can be selected for investigation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use context menus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses context menus to support drill-down investigation workflows, traffic pivots, flow analysis, packet retrieval workflows, and rapid navigation between related analytical views."
      }
    }
  ]
};

# What is a context menu in network analytics?

A **context menu** in network analytics is an interactive menu that appears when you select a traffic item, flow, host, alert, or metric. It offers relevant investigation and navigation actions tied to that item, such as viewing flows, filtering traffic, or pivoting to related entities. In Trisul, context menus accelerate drill‑down and traffic‑investigation workflows.

---

## How the context menu works
You trigger a context menu by right‑clicking or selecting an object such as an IP address, host, application, flow, alert, interface, or metric. The menu shows actions scoped to that object, so you can immediately launch traffic views, host details, or historical analysis without manually building filters. The selection’s context (for example, host, ASN, or time window) is automatically carried into the new view.

---

## Context menus in network operations
Context menus improve analyst efficiency by reducing manual filter‑building and enabling fast pivoting. They are commonly used for traffic investigation, security analysis on suspicious IPs, performance troubleshooting on high‑volume links or apps, packet retrieval, and correlated alerts or host‑scope analysis. In SOC and NOC workflows, they let analysts move quickly from high‑level metrics to detailed flows or packets.

---

## Common context menu actions
| Action                  | Purpose |
|-------------------------|---------|
| View flows              | Show flows related to the selected entity |
| Retrieve packets        | Access packet or PCAP data for the traffic |
| Host details            | View host‑level activity and traffic |
| Pivot to applications   | Analyze traffic by app or service |
| Historical analysis     | Review past activity and trends |
| Filter traffic          | Restrict views to traffic matching the context |
| Alert investigation     | Jump to alerts tied to the selected item |

Exact actions depend on the platform and the type of object selected.

---

## Why context menus are useful
Context menus speed up investigations and navigation across views. They reduce manual query construction, support scoped drilling, and make it easier to correlate traffic, hosts, alerts, and metrics. Well‑designed context menus help analysts move quickly from summaries to detail without losing context.

---

## Context menu and drill-down workflows
Context menus are closely tied to drill‑down and pivot workflows. Drill‑down moves from summary dashboards to flow‑level or packet‑level analysis. Pivoting lets you switch between related entities (for example, host → flows → alerts) while preserving filters. Context menus make these workflows one‑click instead of multi‑step.

---

## In Trisul
Trisul adds context menus throughout dashboards and analytical views so you can drill into flows, hosts, alerts, or interfaces with a single click. Actions include flow‑oriented investigation, **Explore Flows**, packet‑retrieval workflows, and pivoting between traffic, host, and application contexts. This helps analysts investigate behavior and correlate events without manually specifying filters or time ranges.

---

## Related terms
- [Context menu](/glossary/context-menu)
- [Traffic investigation](/glossary/traffic-investigation)
- [Flow analysis](/glossary/flow-analysis)
- [Packet capture](/glossary/packet-capture)
- [Host monitor](/glossary/host-monitor)
- Drill‑down  
- [Explore Flows](/glossary/explore-flows)
- [Top‑K analytics](/glossary/top-k-analytics)

---

## Frequently asked questions
### What is a context menu in network analytics?

A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric.

### What actions are available in the context menu?

Context menu actions may include viewing flows, retrieving packets, pivoting to related traffic, viewing host activity, filtering traffic, and launching investigation workflows scoped to the selected item.

### Why is the context menu important?

Context menus improve investigation speed by allowing analysts to quickly pivot between related traffic views and operational data without manually constructing filters or queries.

### Where does the context menu appear?

In Trisul, context menus appear throughout dashboards and analytical views wherever traffic entities, flows, alerts, hosts, or metrics can be selected for investigation.

### How does Trisul use context menus?

Trisul uses context menus to support drill‑down investigation workflows, traffic pivots, flow analysis, packet retrieval workflows, and rapid navigation between related analytical views.