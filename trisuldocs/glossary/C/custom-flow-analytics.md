---
title: What is custom flow analytics?
description: Custom flow analytics extends standard flow monitoring by applying user-defined classification, enrichment, tagging, and detection logic to flow data for organization-specific operational, security, and business analytics workflows.
sidebar_label: Custom flow analytics
sidebar_position: 36
slug: /glossary/custom-flow-analytics
keywords:
  - custom flow analytics
  - flow analytics
  - custom network analytics
  - flow tagger
  - lua flow analytics
  - user defined flow analytics
  - flow based detection
  - traffic enrichment
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is custom flow analytics needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom flow analytics adds organization-specific operational and security context to standard flow monitoring by allowing custom classification, tagging, enrichment, and detection workflows tailored to local requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What can custom flow analytics classify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom flow analytics can classify traffic by customer, subnet, business unit, application, geographic region, ASN, security category, service type, operational role, or organization-specific traffic patterns."
      }
    },
    {
      "@type": "Question",
      "name": "How does Lua extend flow analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lua scripting enables custom flow processing, enrichment, tagging, counters, alerts, and organization-specific analytical workflows within Trisul traffic analytics environments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow tagging and flow filtering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tagging enriches traffic records with additional labels or metadata while retaining the original records. Flow filtering selectively limits or isolates traffic records for analysis or processing workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support custom flow analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports custom flow analytics through Flow Taggers, Lua scripting, custom counter groups, traffic enrichment workflows, and flow-based operational analytics."
      }
    }
  ]
};

# What is custom flow analytics?

**Custom flow analytics** extends standard flow monitoring by applying user‑defined classification, enrichment, tagging, and detection logic to flow data for organization‑specific operational, security, and business workflows. Instead of only generic metrics like top talkers and protocol breakdowns, it aligns traffic analysis with local business units, policies, customers, and security rules.

---

## How custom flow analytics works
Custom flow analytics processes standard flows and then applies organization‑specific rules to classify, enrich, and detect traffic. Typical steps include flow ingestion, classification (for example by customer or service), adding tags or metadata, and then running custom detections or counters. This enriched data flows into dashboards, alerts, and reports so operators can see traffic in terms of their own structure instead of pure IP‑ or protocol‑level views.

---

## Custom flow analytics in network operations
In enterprise, ISP, and SOC environments, custom flow analytics lets teams define traffic categories that match their own structure, such as customers, departments, countries, or critical services. It supports customer‑based reporting, security policies, compliance‑related labeling, and threat‑investigation workflows that reference internal classifications. By tailoring analytics to local requirements, it makes flow data more actionable and improves operational alignment.

---

## Flow tagging vs flow filtering
| Dimension        | Flow tagging                         | Flow filtering                              |
|------------------|--------------------------------------|---------------------------------------------|
| Purpose          | Add metadata or labels               | Restrict or isolate traffic                 |
| Record retention | Original flows remain unchanged      | Analysis scope is narrowed                  |
| Operational focus| Enrichment and categorization        | Selection and subset processing             |
| Typical use      | Business or security labeling        | Scoped analysis or retention tiers          |

Tagging enhances context; filtering narrows the dataset.

---

## Custom analytics vs built‑in analytics
| Dimension              | Built‑in analytics                                   | Custom flow analytics                                   |
|------------------------|------------------------------------------------------|---------------------------------------------------------|
| Classification           | Standard dimensions (hosts, protocols, interfaces)   | Custom logic (customer, service, policy)               |
| Detection                | Generic patterns                                     | Organization‑specific detections and rules             |
| Reporting                | Predefined views                                     | Business‑specific dashboards and reports               |
| Extensibility            | Fixed platform features                              | Lua, tags, and custom groups                           |
| Operational context      | Generic network visibility                           | Tailored to local business and security models         |

Custom analytics adapts standard flows to real‑world operations.

---

## What is flow enrichment?
Flow enrichment attaches contextual metadata to flow records such as customer labels, business‑unit mappings, threat‑intelligence tags, geographic information, or compliance scopes. These tags improve searchability, reporting, and investigation by letting analysts filter and summarize traffic based on organizational rather than purely technical criteria. Enriched flows are especially useful for security, billing‑adjacent use cases, and hierarchical reporting.

---

## In Trisul
Trisul supports custom flow analytics through **Flow Taggers**, **Lua scripting**, **custom counter groups**, and **traffic‑enrichment workflows**. Flows ingested via NetFlow, IPFIX, or sFlow can be tagged, classified, and processed with user‑defined logic that then feeds into Top‑K analytics, trending dashboards, alerts, and investigation views. This lets operators align analytics to customers, services, security policies, and reporting needs within a single deployment.

---

## Related terms
- [Custom flow analytics](/glossary/custom-flow-analytics)
- [Flow tagger](/glossary/flow-tagger)
- Flow monitoring  
- [Flow analysis](/glossary/flow-analysis)
- [Top‑K analytics](/glossary/top-k-analytics)
- Flow data  
- [Counter groups](/glossary/counter-groups)
- Traffic enrichment  

---

## Frequently asked questions
### Why is custom flow analytics needed?

Custom flow analytics adds organization‑specific operational and security context to standard flow monitoring by allowing custom classification, tagging, enrichment, and detection workflows tailored to local requirements.

### What can custom flow analytics classify?

Custom flow analytics can classify traffic by customer, subnet, business unit, application, geographic region, ASN, security category, service type, operational role, or organization‑specific traffic patterns.

### How does Lua extend flow analytics?

Lua scripting enables custom flow processing, enrichment, tagging, counters, alerts, and organization‑specific analytical workflows within Trisul traffic analytics environments.

### What is the difference between flow tagging and flow filtering?

Flow tagging enriches traffic records with additional labels or metadata while retaining the original records. Flow filtering selectively limits or isolates traffic records for analysis or processing workflows.

### How does Trisul support custom flow analytics?

Trisul supports custom flow analytics through Flow Taggers, Lua scripting, custom counter groups, traffic enrichment workflows, and flow‑based operational analytics.