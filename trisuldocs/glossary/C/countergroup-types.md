---
title: What are the types of Counter Groups?
description: Counter Groups can be organized into different types based on the analytical questions they are designed to answer, including Native, Crosskey, Keyset, Filter-Based, Stat-Based, and Rule-Based Counter Groups.
sidebar_label: Types of Counter Groups
sidebar_position: 233
slug: /glossary/types-of-counter-groups
keywords:
  - counter groups
  - native counter group
  - crosskey counter group
  - keyset counter group
  - filter counter group
  - stat based counter group
  - rule based counter group
  - Trisul analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the different types of Counter Groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary Counter Group types include Native, Crosskey, Keyset, Filter-Based, Stat-Based, and Rule-Based Counter Groups. Each type is designed to answer a different analytical question."
      }
    },
    {
      "@type": "Question",
      "name": "When should Crosskey Counter Groups be used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crosskey Counter Groups are useful when analysts need to understand relationships between multiple traffic dimensions such as hosts, applications, protocols, interfaces, or autonomous systems."
      }
    },
    {
      "@type": "Question",
      "name": "What is the purpose of Keyset Counter Groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keyset Counter Groups organize related entities into logical collections, making it easier to analyze groups of hosts, applications, subscribers, or services together."
      }
    },
    {
      "@type": "Question",
      "name": "How are Rule-Based Counter Groups different from Filter-Based Counter Groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filter-Based Counter Groups focus on selecting traffic that matches specific conditions, while Rule-Based Counter Groups classify and organize traffic according to defined rules and business logic."
      }
    },
    {
      "@type": "Question",
      "name": "Which Counter Group type is best?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No single Counter Group type is universally best. The appropriate choice depends on the analytical objective and the operational question being answered."
      }
    }
  ]
};

# What are the types of Counter Groups?

Counter Groups can be organized into different types based on how they collect, organize, correlate, filter, and analyze data.

All Counter Groups share a common goal:

> Transform monitoring data into useful operational insight.

The difference lies in the questions they help answer.

A useful way to think about Counter Group types is:

| Question | Counter Group Type |
|-----------|-------------------|
| How much activity occurred? | Native |
| How are entities related? | Crosskey |
| How can related entities be monitored together? | Keyset |
| How can specific traffic be isolated? | Filter-Based |
| What patterns exist in the data? | Stat-Based |
| How should traffic be classified? | Rule-Based |

Different analytical questions require different analytical structures. This is why multiple Counter Group types exist.

---

## Why different Counter Group types exist
As monitoring requirements mature, operational questions become more sophisticated.

Organizations often begin with simple questions such as:

- How much traffic is being generated?
- Which hosts are most active?
- Which applications consume the most bandwidth?

Over time, investigations become more complex:

- Which applications are those hosts using?
- Which subscribers belong to this group?
- Which traffic matches a particular condition?
- Which patterns indicate unusual behavior?
- How should activity be classified according to internal policies?

No single analytical structure is ideal for answering all of these questions.

Different Counter Group types exist because different forms of analysis require different ways of organizing and interpreting data.

---

## How Counter Group types work
All Counter Groups are built on the same foundational concepts:

- Keys
- Meters
- Measurements
- Analytics

The difference lies in how these elements are organized and processed.

Some Counter Groups focus on direct measurement, while others focus on relationships, grouping, filtering, statistical analysis, or classification.

Rather than replacing one another, the different types often work together to provide multiple perspectives on the same dataset.

---

## The major Counter Group types
### Native Counter Groups

Native Counter Groups provide direct measurements of observed traffic and telemetry.

They form the foundation of analytics and are commonly used for monitoring:

- Hosts
- Applications
- Protocols
- Interfaces
- Autonomous Systems

Native Counter Groups answer questions such as:

> How much activity occurred?

They provide the baseline visibility upon which more advanced analytics are built.

---

### Crosskey Counter Groups

Crosskey Counter Groups focus on relationships between dimensions.

Rather than analyzing hosts, applications, or interfaces independently, Crosskey analytics help reveal how those entities relate to one another.

For example:

```text
Host
 └── Application
      └── Destination
           └── ASN
```

Crosskey Counter Groups answer questions such as:

> How are these entities related?

They are particularly valuable during investigations.

---

### Keyset Counter Groups

Keyset Counter Groups organize entities into logical collections.

Instead of analyzing individual hosts or applications separately, analysts can work with groups that represent:

- Business units
- Subscriber groups
- Services
- Customer segments
- Infrastructure categories

Keyset Counter Groups answer questions such as:

> How is this collection behaving?

This simplifies analysis at scale.

---

### Filter-Based Counter Groups

Filter-Based Counter Groups focus on specific subsets of traffic.

Traffic is selected according to predefined criteria such as:

- Addresses
- Applications
- Protocols
- Interfaces
- Traffic characteristics

Filter-Based Counter Groups answer questions such as:

> What can we learn from this specific subset of activity?

Their primary purpose is reducing noise and increasing focus.

---

### Stat-Based Counter Groups

Stat-Based Counter Groups derive insight from calculated statistics.

These may include:

- Averages
- Percentiles
- Trends
- Distributions
- Statistical summaries

Rather than simply measuring activity, they help analysts understand patterns hidden within the data.

Stat-Based Counter Groups answer questions such as:

> What patterns exist in the data?

---

### Rule-Based Counter Groups

Rule-Based Counter Groups classify traffic according to predefined rules.

Rules may reflect:

- Business logic
- Security policies
- Operational requirements
- Organizational classifications

Rule-Based Counter Groups answer questions such as:

> How should this activity be categorized?

They are useful when analytics must align with organizational objectives rather than raw network attributes.

---

## Native vs Derived Counter Groups
| Category | Native Counter Groups | Derived Counter Groups |
|----------|----------------------|------------------------|
| Data source | Directly observed traffic and telemetry | Generated through correlation, filtering, statistics, or rules |
| Complexity | Lower | Higher |
| Analytical focus | Measurement and visibility | Interpretation and analysis |
| Typical examples | Hosts, protocols, interfaces, applications | Crosskey, Keyset, Filter-Based, Stat-Based, Rule-Based |
| Processing method | Direct metric collection | Derived analytics and transformation |
| Best fit | Core monitoring visibility | Advanced analytics and investigations |

Native Counter Groups provide foundational visibility.

Derived Counter Groups build on that visibility by adding context, correlation, classification, and analytical depth.

Most mature monitoring environments use both.

---

## Choosing the right Counter Group type
The best Counter Group type depends entirely on the operational objective.

| Goal | Recommended Type |
|--------|------------------|
| Measure traffic and utilization | Native |
| Investigate relationships | Crosskey |
| Monitor logical collections | Keyset |
| Focus on specific traffic | Filter-Based |
| Analyze distributions and trends | Stat-Based |
| Apply custom classifications | Rule-Based |

There is no universally superior type.

The most effective analytical design combines multiple Counter Group types to provide complementary perspectives on the same environment.

---

## In Trisul
Counter Group types form the foundation of Trisul's analytics architecture.

Each type is designed to answer a different class of operational question. Native Counter Groups provide direct visibility into monitored activity, while Crosskey, Keyset, Filter-Based, Stat-Based, and Rule-Based Counter Groups extend that visibility through correlation, grouping, filtering, statistical analysis, and classification.

This flexible architecture allows administrators to move from simple measurements to advanced investigations without changing the underlying monitoring framework.

As monitoring requirements evolve, different Counter Group types can be combined to create increasingly sophisticated analytical workflows.

---

## Related terms
- Counter group
- [Meters in counter groups](/glossary/meters-in-counter-groups)
- [Crosskey tree](/glossary/crosskey-tree)
- [Cardinality counter](/glossary/cardinality-counter)
- [Bucketizer](/glossary/bucketizer)
- [Counter group tuning](/glossary/counter-group-tuning)
- Flow analytics
- [Top-K analytics](/glossary/top-k-analytics)

---

## Frequently asked questions
### What are the different types of Counter Groups?

The primary Counter Group types include Native, Crosskey, Keyset, Filter-Based, Stat-Based, and Rule-Based Counter Groups. Each type is designed to answer a different analytical question.

### When should Crosskey Counter Groups be used?

Crosskey Counter Groups are useful when analysts need to understand relationships between multiple traffic dimensions such as hosts, applications, protocols, interfaces, or autonomous systems.

### What is the purpose of Keyset Counter Groups?

Keyset Counter Groups organize related entities into logical collections, making it easier to analyze groups of hosts, applications, subscribers, or services together.

### How are Rule-Based Counter Groups different from Filter-Based Counter Groups?

Filter-Based Counter Groups focus on selecting traffic that matches specific conditions, while Rule-Based Counter Groups classify and organize traffic according to defined rules and business logic.

### Which Counter Group type is best?

No single Counter Group type is universally best. The appropriate choice depends on the analytical objective and the operational question being answered.

### Why do multiple Counter Group types exist?

Different monitoring objectives require different analytical structures. Each Counter Group type is optimized for a particular way of organizing, interpreting, or investigating data.