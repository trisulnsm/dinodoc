---
title: What is drilldown analysis?
description: Drilldown analysis is the process of moving from high-level summaries to progressively more detailed views in order to investigate underlying records, traffic behavior, anomalies, or operational events.
sidebar_label: Drilldown analysis
sidebar_position: 49
slug: /glossary/drilldown-analysis
keywords:
  - drilldown analysis
  - drill down analysis
  - data drilldown
  - interactive analytics
  - hierarchical exploration
  - root cause analysis
  - dashboard drilldown
  - flow investigation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does drilldown analysis work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown analysis starts with aggregated summaries and progressively narrows the investigation into more detailed records such as interfaces, hosts, conversations, flows, sessions, or packets by applying contextual filters and hierarchical navigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between drilldown and drill-through?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown generally navigates deeper into increasingly detailed views within related datasets or hierarchical contexts, while drill-through opens related investigations, reports, or datasets that may exist outside the current analytical hierarchy."
      }
    },
    {
      "@type": "Question",
      "name": "What use cases does drilldown analysis support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown analysis supports operational troubleshooting, root-cause analysis, anomaly investigation, security investigations, capacity analysis, traffic analysis, and historical network investigation workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Why is drilldown important for flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown is important because flow-monitoring environments generate large volumes of aggregated telemetry. Drilldown workflows help operators quickly move from summary metrics to the underlying traffic records associated with operational or security events."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support drilldown workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports drilldown workflows through flow analytics, interactive traffic exploration, Explore Flows, interface-oriented investigation, and historical traffic analysis capabilities."
      }
    }
  ]
};

# What is drilldown analysis?

**Drilldown analysis** is the process of navigating from high‑level summaries to progressively more detailed views in order to investigate underlying records, traffic behavior, anomalies, or operational events. Instead of manually reconstructing queries, operators interactively “drill down” through layers of data—such as traffic summaries, top talkers, and interfaces—down to individual flows, sessions, or often packets themselves.

---

## How drilldown analysis works
Drilldown analysis starts with aggregated metrics (dashboards, top‑K lists, or alarms) and narrows the scope step by step. An operator selects a metric or object, applies contextual filters, and then iterates into finer‑grained views. In many platforms, this is supported via hierarchical navigation trees, time‑range sliders, and attribute‑based filters. The workflow can ultimately reach detailed records such as individual flows, conversations, or packet captures, depending on the available telemetry and tooling.

---

## Drilldown analysis in network operations
Network operations heavily rely on drilldown for troubleshooting and investigation. Operators use it to move from high‑level indicators—such as WAN utilization or interface congestion—down to specific hosts, talks, or protocols. Common use cases include root‑cause analysis of performance issues, traffic‑growth characterization, anomaly hunting in security operations, and historical reconstruction of incidents. By preserving context at each step, drilldown reduces investigation time compared with ad‑hoc queries.

---

## Drilldown vs drill‑through
Drilldown and drill‑through are complementary. **Drilldown** stays within a given hierarchy or dataset, moving deeper into more granular views (for example, interface → host → flow). **Drill‑through** jumps to a different context or report, such as opening a SIEM event drill‑through from a flow‑based alert. Many modern analytics platforms blend both, letting operators drill down into detail and then drill through to related alerts, logs, or captures.

---

## Drilldown analysis and flow monitoring
Flow‑monitoring environments generate vast amounts of summarized telemetry, which makes drilldown essential. Without drilldown, operators must guess which flows or time ranges matter. With it, they can click on a utilization spike, then traverse to the responsible interfaces, hosts, and flows, and finally examine packet‑level behavior. This is especially powerful in ISP, enterprise, and SOC settings where traffic patterns are high‑cardinality and multi‑tenant.

---

## Operational considerations
Good drilldown experiences depend on fast indexing, low‑latency queries, and long‑term retention. Systems must balance query performance with storage cost and manage high‑cardinality traffic (for example, many unique hosts or ports). Cross‑domain correlation (between flows, logs, and security events) further raises design complexity. When drilldown is slow or brittle, operators tend to skip deep investigation and rely on surface‑level metrics.

---

## In Trisul
Trisul supports drilldown analysis through interactive flow‑based analytics and traffic‑investigation workflows. Features such as **Explore Flows**, **Routers and Interfaces views**, and **interface‑oriented traffic exploration** let operators start from dashboards and drill into specific hosts, flows, or conversations. Historical traffic retention and **Top‑K analytics** help users move from high‑level summaries to detailed records efficiently. Trisul focuses on operational visibility and iterative investigation rather than static reporting, making it a natural fit for drilldown‑driven troubleshooting and security workflows.

---

## Related terms
- [Drilldown analysis](/glossary/drilldown-analysis)
- Flow monitoring  
- [Flow analysis](/glossary/flow-analysis)
- [Top talkers](/glossary/top-talkers)
- [Root cause analysis](/glossary/root-cause-analysis)
- Traffic analysis  
- [Interface tracking](/glossary/interface-tracking)

---

## Frequently asked questions
### How does drilldown analysis work?

Drilldown analysis starts with aggregated summaries and progressively narrows the investigation into more detailed records such as interfaces, hosts, conversations, flows, sessions, or packets by applying contextual filters and hierarchical navigation.

### What is the difference between drilldown and drill‑through?

Drilldown generally navigates deeper into increasingly detailed views within related datasets or hierarchical contexts, while drill‑through opens related investigations, reports, or datasets that may exist outside the current analytical hierarchy.

### What use cases does drilldown analysis support?

Drilldown analysis supports operational troubleshooting, root‑cause analysis, anomaly investigation, security investigations, capacity analysis, traffic analysis, and historical network investigation workflows.

### Why is drilldown important for flow monitoring?

Drilldown is important because flow‑monitoring environments generate large volumes of aggregated telemetry. Drilldown workflows help operators quickly move from summary metrics to the underlying traffic records associated with operational or security events.

### How does Trisul support drilldown workflows?

Trisul supports drilldown workflows through flow analytics, interactive traffic exploration, Explore Flows, interface‑oriented investigation, and historical traffic analysis capabilities.