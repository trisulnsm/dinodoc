---
title: What is a flow leg?
description: A flow leg is an individual flow-telemetry record representing a network conversation as observed and exported from a specific device, interface, or observation point within the traffic path.
sidebar_label: Flow legs
sidebar_position: 64
slug: /glossary/flow-legs
keywords:
  - flow legs
  - flow duplication
  - netflow legs
  - flow deduplication
  - multi-device flow export
  - flow leg correlation
  - duplicate flow records
  - telemetry correlation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do flow legs cause over-counting in traffic reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When multiple exporters observe and export telemetry for the same communication path, collectors may receive multiple flow legs representing the same traffic. Without correlation or deduplication workflows, traffic volume may be counted multiple times, especially in large multi-hop environments."
      }
    },
    {
      "@type": "Question",
      "name": "Why do some platforms preserve flow legs separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preserving individual flow legs maintains per-device, per-interface, and path-level context that may be useful for troubleshooting, topology analysis, congestion investigations, and security workflows. Merging records may simplify reporting but can reduce operational visibility into how traffic moved through the network."
      }
    },
    {
      "@type": "Question",
      "name": "What is NAT leg correlation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT leg correlation is the process of associating flow records observed before and after network address translation. Because translated traffic changes addresses or ports, exact tuple matching may not work, so correlation workflows may use timestamps, ports, interface context, or heuristic matching to associate related telemetry."
      }
    },
    {
      "@type": "Question",
      "name": "How are flow legs different from flow stitching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow legs represent multiple observations of the same communication across different exporters or interfaces, while flow stitching combines separate directional flow records into a bidirectional conversation view. The two workflows solve different telemetry-correlation problems."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-leg workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-leg workflows through Flow Legs Correlation, MergeMultipleSources options, NAT-aware correlation workflows, historical traffic analysis, and operational traffic-visibility capabilities for multi-exporter environments."
      }
    }
  ]
};

# What is a flow leg?

**A flow leg** is an individual flow‑telemetry record representing a network conversation as observed and exported from a specific device, interface, or observation point within the traffic path. When a single communication session crosses multiple monitored links or devices, each exporter can generate its own flow record for that same conversation; these per‑device records are called **flow legs**. They preserve the local view from each vantage point—such as which interface saw the traffic, what timestamps the exporter used, and whether it was sampled—making them essential for topology‑aware analysis but also a potential source of over‑counting if not handled correctly.

---

## How flow legs arise
Flow legs appear naturally in multi‑hop, multi‑vantage‑point environments. For example, an end‑to‑end conversation may be visible at an **edge router**, a **core router**, a **peering router**, and a **monitoring probe**, each exporting its own telemetry record. Even though the underlying communication is one session, the collector sees separate records because each exporter applies its own flow‑timeout logic, interface metadata, and counters. The differences between legs—such as interface IDs, timestamps, byte counts, or DSCP—reflect how that device observed the traffic, not different flows.

---

## Flow legs in network operations
In **NOC** environments, flow legs help operators understand **which interfaces carried traffic**, **how traffic moved through the topology**, and **where congestion or asymmetry occurred**. Security teams use them in **SOC** workflows to trace **lateral‑movement paths**, see how traffic appeared at different hops, and correlate pre‑ and post‑NAT views of the same session. In **ISP and multi‑site** environments, preserving legs gives visibility into per‑device and per‑link behavior, which is useful for **troubleshooting**, **capacity planning**, and **topology‑aware investigations**.

---

## Flow legs and over‑counting
Because multiple exporters can capture the same communication, flow legs can cause **traffic over‑counting** if the collector treats each leg as an independent flow. Without correlation or deduplication, **bandwidth totals, utilization graphs, and capacity‑planning dashboards** may be inflated, especially in large‑scale, multi‑hop architectures. To mitigate this, platforms often provide **correlation, deduplication, or “merge‑multiple‑sources”** workflows that normalize traffic while optionally preserving original legs for detailed analysis. Operators must balance clean reporting with the need to retain path‑level context.

---

## Flow legs vs flow stitching
**Flow legs** describe the same conversation seen at **different exporters or interfaces** (multi‑device or multi‑hop visibility). **Flow stitching** combines **forward and reverse‑direction unidirectional records** into a bidirectional conversation, regardless of exporter. In other words, legs solve the “same flow at multiple points,” and stitching solves the “same flow in two directions.” Both are complementary: a platform might stitch directions on a given router, then correlate that stitched flow with legs from other routers to get a full path‑aware view.

---

## NAT and flow‑leg correlation
In **NAT environments**, exact 5‑tuple matching between legs breaks down because source addresses or ports change across translation points. **NAT‑leg correlation** uses techniques such as **timestamp proximity**, **port‑pair heuristics**, **interface context**, and **session‑duration alignment** to match pre‑ and post‑NAT records. This preserves visibility into how traffic moved from an internal host to an external destination and back, even when the IP addresses differ. Strong NAT‑aware correlation improves attribution, incident‑reconstruction, and traffic‑path analysis in CGNAT or corporate‑edge deployments.

---

## Operational considerations
Working with flow legs introduces challenges such as **timing skew**, **sampling differences**, **multi‑path routing**, and **high‑cardinality telemetry**. Perfect correlation is often impossible because exporters see traffic slightly differently, sampling can alter counters, and timestamp drift can misalign records. Organizations therefore choose strategies such as **keeping raw legs**, **creating correlated views**, or **using hybrid modes**, depending on whether they prioritize **clean reporting** or **forensic‑grade path visibility**. Exporter placement, clock‑synchronization discipline, and clear retention policies all shape how effectively legs can be used.

---

## How Trisul handles flow legs
Trisul supports **flow‑leg workflows** through **Flow Legs Correlation**, **MergeMultipleSources** configuration, and **NAT‑aware correlation** for multi‑exporter environments. It ingests **NetFlow, IPFIX, sFlow**, and **packet‑derived flows**, then lets operators pivot between **per‑device legs** and **correlated or aggregated views** using **Explore Flows**, **Interface Tracking**, and **Flow Taggers**. This is useful for both **bandwidth‑reporting accuracy** and **topology‑aware investigations**, especially in ISPs, large enterprises, and cloud‑focused networks. Trisul exposes original telemetry legs where desired while still providing normalized summaries for dashboards, allowing operators to choose the right level of visibility per use case.

---

## Related terms
- Flow leg  
- [Flow](/glossary/flow)
- Flow stitching  
- Flow monitoring  
- [NetFlow](/glossary/netflow)
- Flow sampling  
- Flow timeout  
- [Flow deduplication](/glossary/flow-deduplication)
- [NAT](/glossary/nat)

---

## Frequently asked questions
### How do flow legs cause over‑counting in traffic reports?

When multiple exporters observe and export telemetry for the same communication path, collectors may receive multiple flow legs representing the same traffic. Without correlation or deduplication workflows, traffic volume may be counted multiple times, especially in large multi‑hop environments.

### Why do some platforms preserve flow legs separately?

Preserving individual flow legs maintains per‑device, per‑interface, and path‑level context that may be useful for troubleshooting, topology analysis, congestion investigations, and security workflows. Merging records may simplify reporting but can reduce operational visibility into how traffic moved through the network.

### What is NAT leg correlation?

NAT leg correlation is the process of associating flow records observed before and after network address translation. Because translated traffic changes addresses or ports, exact tuple matching may not work, so correlation workflows may use timestamps, ports, interface context, or heuristic matching to associate related telemetry.

### How are flow legs different from flow stitching?

Flow legs represent multiple observations of the same communication across different exporters or interfaces, while flow stitching combines separate directional flow records into a bidirectional conversation view. The two workflows solve different telemetry‑correlation problems.

### How does Trisul support flow‑leg workflows?

Trisul supports flow‑leg workflows through Flow Legs Correlation, MergeMultipleSources options, NAT‑aware correlation workflows, historical traffic analysis, and operational traffic‑visibility capabilities for multi‑exporter environments.