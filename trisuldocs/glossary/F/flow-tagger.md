---
title: What is flow tagger?
description: A flow tagger is a rule-based enrichment mechanism that assigns contextual labels to network flows based on matching conditions such as addresses, ports, protocols, applications, or metadata-derived attributes.
sidebar_label: Flow tagger
sidebar_position: 65
slug: /glossary/flow-tagger
keywords:
  - flow tagger
  - flow tagging
  - network flow labeling
  - flow enrichment
  - flow classification
  - telemetry enrichment
  - traffic tagging
  - trisul flow tagger
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What can you use flow tagging for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tagging is commonly used to enrich flow telemetry with operationally meaningful labels such as countries, ASNs, internal services, application groups, customer identifiers, threat-intelligence matches, or policy-related classifications. Tagged flows become easier to search, aggregate, correlate, and analyze during operational or security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Can a single flow carry multiple tags?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A single flow may match multiple tagging rules simultaneously and therefore carry multiple contextual labels. Multi-tag visibility improves search flexibility and supports overlapping operational or security classifications."
      }
    },
    {
      "@type": "Question",
      "name": "What is automatic flow tagging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automatic flow tagging dynamically derives tag values from matched metadata rather than assigning only predefined static labels. Depending on the platform implementation, tags may be generated from attributes such as country codes, ASNs, applications, or other contextual telemetry fields."
      }
    },
    {
      "@type": "Question",
      "name": "How are flow tags different from firewall classification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall classification typically operates within the forwarding path using inline policy logic, while flow tagging enriches telemetry after observation for analytics, search, reporting, and historical investigations. Flow tags are generally intended for visibility and analysis workflows rather than direct packet-forwarding decisions."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-tagging workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-tagging workflows through Flow Taggers, Trisul Filter Format rule matching, automatic tagging capabilities, Explore Flows integration, Aggregate Flows workflows, and contextual traffic-enrichment features for operational and security analysis."
      }
    }
  ]
};

# What is flow tagger?

A **flow tagger** is a rule‑based enrichment mechanism that assigns contextual labels to network flows based on matching conditions such as **addresses, ports, protocols, applications, or metadata‑derived attributes**. It turns raw flow telemetry into semantically annotated records by attaching searchable, business‑ or security‑relevant tags—such as “customer‑ERP”, “high‑risk‑country”, or “malicious‑IP”—to conversations rather than just exporting raw 5‑tuple metadata. This makes tagged flows much easier to **search, aggregate, correlate, and analyze** during troubleshooting, security investigations, and long‑term trending.

---

## How flow tagging works
Flow tagging evaluates flow metadata against **predefined rules** and attaches labels to matching records as they are ingested or during retro‑analysis. A typical workflow is: **telemetry observation → rule evaluation → context enrichment → storage → operational querying**. Conditions can include source/destination IPs or subnets, ports, protocols, ASNs, country codes, application identifiers, threat‑intelligence feeds, or custom filter logic. A single flow can accumulate **multiple tags** if it matches several rules, enabling flexible, multi‑dimensional classification such as combining “service‑group”, “customer‑ID”, and “threat‑severity” in one record.

---

## Flow tagging in network operations
In **SOC** environments, flow tagging is used to **enrich threat‑intel matches**, **surface suspicious traffic**, and **flag high‑risk communications** for faster incident‑response and threat‑hunting. In **NOC** workflows, it supports **service classification**, **customer segmentation**, **geographic traffic analysis**, and **application‑visibility reporting**, helping operators quickly filter traffic by “internal‑service”, “WAN‑traffic”, or “subscriber‑group” without manual correlation. In **ISP and carrier** settings, tagging helps **categorize subscriber traffic**, **track usage patterns**, and **enforce policy‑oriented analytics** consistent with business and regulatory requirements.

---

## Automatic flow tagging
Some platforms, including Trisul, support **automatic flow tagging**, where labels are derived from telemetry attributes rather than only static, hand‑defined rules. Instead of manually assigning each tag, the system can dynamically tag flows by **country**, **ASN**, **application fingerprint**, or **behavioral indicators**, enriching historical data as context becomes available. This is especially useful for **retro‑analysis**, where newly‑added threat‑intel or service‑definitions can be applied to years of stored flows, making it easier to discover previously‑unseen patterns or policy‑violations.

---

## Flow tagger vs flow tracker
A **flow tagger** focuses on **labeling and organizing** telemetry for **search and analysis**, whereas a **flow tracker** focuses on **detecting real‑time or near‑real‑time conditions**, such as **elephant flows**, **anomalies**, or **threshold‑based events**, often producing alerts or triggers. Taggers make traffic easier to query later; trackers make the system react when traffic crosses operational or security thresholds. The two are complementary: tags give structure to historical data, and trackers surface exceptional behavior that can then be explored using those same tags.

---

## Operational considerations
Flow‑tagging workflows must balance **rule complexity**, **cardinality**, and **search performance**. Poorly designed rules can create **high‑cardinality labels**, **inconsistent tagging**, or **noisy metadata**, which degrade query efficiency and analyst experience. Best practices include **organized tag namespaces**, **standardized naming**, **metadata normalization**, and **periodic rule reviews**. Organizations also need to validate that tagging rules remain aligned with business‑unit changes, network re‑designs, and evolving threat‑intel sources, so that the tag‑driven view of traffic stays accurate and trustworthy.

---

## How Trisul handles flow tagger
Trisul provides **Flow Taggers** and **Trisul Filter Format**‑based rules to enrich flow telemetry at ingestion and during retro‑analysis. It supports **static tags**, **automatic tagging**, **tagger groups**, and **multi‑tag flows**, integrating tags into **Explore Flows**, **Aggregate Flows**, and **host‑, application‑, and customer‑oriented views**. This enables operators to classify traffic by **service‑type**, **customer‑segment**, **threat‑status**, or **geography**, then filter and pivot on those tags during investigations or reporting. Trisul is optimized for **scalable traffic analytics and visibility**, so tagging is applied as metadata enrichment rather than inline packet‑forwarding control, keeping it tightly aligned with NOC, SOC, and ISP use cases.

---

## Related terms
- [Flow tagger](/glossary/flow-tagger)
- [Flow](/glossary/flow)
- [Flow tracker](/glossary/flow-tracker)
- Flow timeout  
- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [Full packet capture](/glossary/full-packet-capture)
- [Network security monitoring](/glossary/network-security-monitoring)
- Traffic analysis  

---

## Frequently asked questions
### What can you use flow tagging for?

Flow tagging is commonly used to enrich flow telemetry with operationally meaningful labels such as countries, ASNs, internal services, application groups, customer identifiers, threat‑intelligence matches, or policy‑related classifications. Tagged flows become easier to search, aggregate, correlate, and analyze during operational or security investigations.

### Can a single flow carry multiple tags?

Yes. A single flow may match multiple tagging rules simultaneously and therefore carry multiple contextual labels. Multi‑tag visibility improves search flexibility and supports overlapping operational or security classifications.

### What is automatic flow tagging?

Automatic flow tagging dynamically derives tag values from matched metadata rather than assigning only predefined static labels. Depending on the platform implementation, tags may be generated from attributes such as country codes, ASNs, applications, or other contextual telemetry fields.

### How are flow tags different from firewall classification?

Firewall classification typically operates within the forwarding path using inline policy logic, while flow tagging enriches telemetry after observation for analytics, search, reporting, and historical investigations. Flow tags are generally intended for visibility and analysis workflows rather than direct packet‑forwarding decisions.

### How does Trisul support flow‑tagging workflows?

Trisul supports flow‑tagging workflows through Flow Taggers, Trisul Filter Format rule matching, automatic tagging capabilities, Explore Flows integration, Aggregate Flows workflows, and contextual traffic‑enrichment features for operational and security analysis.