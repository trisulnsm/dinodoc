---
title: What are OPER, REF, and ARCHIVE?
description: OPER, REF, and ARCHIVE are Trisul data lifecycle categories that organize monitoring information according to its operational value, access requirements, and retention needs over time.
sidebar_label: OPER, REF, and ARCHIVE
sidebar_position: 148
slug: /glossary/oper-ref-archive
keywords:
  - OPER
  - REF
  - ARCHIVE
  - data lifecycle
  - data retention
  - historical analytics
  - monitoring retention
  - Trisul storage
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are OPER, REF, and ARCHIVE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OPER, REF, and ARCHIVE are Trisul data lifecycle categories that organize monitoring information according to its operational value, historical relevance, and long-term retention requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What is OPER data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OPER contains actively used operational data that supports monitoring, dashboards, investigations, alerts, and day-to-day network visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is REF data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "REF contains historical reference data used for trend analysis, baselining, capacity planning, and long-term comparisons."
      }
    },
    {
      "@type": "Question",
      "name": "What is ARCHIVE data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ARCHIVE contains long-term retained data preserved for audits, compliance, investigations, forensics, and historical record keeping."
      }
    },
    {
      "@type": "Question",
      "name": "Why are multiple retention categories needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different stages of monitoring data have different access patterns and business value. Tiered retention improves performance, storage efficiency, and long-term data preservation."
      }
    }
  ]
};

# What are OPER, REF, and ARCHIVE?

**OPER, REF, and ARCHIVE** are data lifecycle categories used by Trisul to manage monitoring information as it ages.

Not all monitoring data has the same value throughout its lifetime.

Recent data is frequently accessed for investigations, dashboards, troubleshooting, and operational monitoring. Older data is more often used for trend analysis, baselining, compliance requirements, and historical investigations.

Rather than treating all data identically, Trisul organizes information according to where it sits in its lifecycle.

A useful way to think about the model is:

```text
Recent Data
     ↓
   OPER
     ↓
    REF
     ↓
  ARCHIVE
```

Each category represents a different stage in the lifecycle of monitoring data.

---

## Why data lifecycles matter
Monitoring platforms generate enormous amounts of telemetry, flow records, analytics, and historical measurements.

The challenge is not simply storing this information.

The challenge is balancing:

- Accessibility
- Performance
- Storage efficiency
- Retention requirements

Recent data must be immediately accessible because operators rely on it for monitoring and investigations.

Historical data remains valuable but is typically accessed less frequently.

Long-term retained data may be required years later for audits, compliance requests, forensic investigations, or historical analysis.

OPER, REF, and ARCHIVE exist to manage these changing requirements efficiently.

---

## How OPER, REF, and ARCHIVE work
As monitoring data ages, its primary purpose changes.

Recent information is primarily operational.

Historical information becomes analytical.

Older information becomes archival.

Rather than maintaining identical storage and access characteristics throughout the data lifecycle, Trisul organizes information according to how it is expected to be used.

This helps maintain efficient access to operational data while preserving long-term visibility into historical activity.

---

## OPER
**OPER (Operational Data)** contains the information operators need immediately.

This is the active monitoring layer used for:

- Dashboards
- Alerts
- Traffic investigations
- Operational analytics
- Troubleshooting
- Real-time visibility

OPER typically contains the most recent and most detailed information because it supports day-to-day operational workflows.

When administrators investigate current conditions, they are usually working with OPER data.

A useful way to think about OPER is:

> OPER answers questions about what is happening now.

---

## REF
**REF (Reference Data)** contains historical information that provides context for current observations.

As data becomes less operationally active, its value often shifts from investigation to comparison.

REF supports activities such as:

- Historical trending
- Baselining
- Capacity planning
- Long-term reporting
- Seasonal analysis
- Behavioral comparisons

REF helps answer questions such as:

- Has traffic increased compared to last quarter?
- Is current behavior normal?
- How do today's patterns compare with historical activity?

A useful way to think about REF is:

> REF explains how current activity compares to the past.

---

## ARCHIVE
**ARCHIVE** contains information retained primarily for preservation rather than day-to-day analysis.

Although accessed less frequently, archived data may remain important for:

- Compliance requirements
- Regulatory retention
- Audits
- Historical investigations
- Forensic analysis
- Long-term record keeping

The operational value of this data may have declined, but its historical value remains important.

A useful way to think about ARCHIVE is:

> ARCHIVE preserves information that may still matter long after its operational value has passed.

---

## OPER vs REF vs ARCHIVE
| Category | OPER | REF | ARCHIVE |
|----------|----------|----------|----------|
| Primary purpose | Operational visibility | Historical context | Long-term preservation |
| Typical data age | Most recent | Historical | Oldest retained |
| Access frequency | High | Moderate | Low |
| Main users | Operations teams | Analysts and planners | Auditors, investigators, compliance teams |
| Typical activities | Monitoring and troubleshooting | Trending and baselining | Audits and historical investigations |
| Primary value | Immediate actionability | Comparison and context | Retention and evidence |

The categories are not separate monitoring systems.

They represent different stages in the lifecycle of the same monitoring data.

---

## Accessibility vs retention
One of the most important challenges in monitoring architecture is balancing accessibility with retention.

Recent operational data should be:

- Fast
- Detailed
- Easily searchable

Long-term historical data should be:

- Preserved
- Efficiently stored
- Available when needed

Attempting to treat all data identically often increases storage costs and reduces operational efficiency.

Tiered lifecycle management allows organizations to maintain both high-performance visibility and long-term historical retention.

---

## Why tiered retention is important
Tiered retention provides several operational benefits:

- Faster access to operational data
- Better storage efficiency
- Improved scalability
- Long-term historical visibility
- Support for compliance requirements
- Reduced resource consumption

As monitoring environments grow, separating active operational data from long-term retained data becomes increasingly important.

This allows organizations to preserve historical information without negatively affecting day-to-day monitoring performance.

---

## In Trisul
OPER, REF, and ARCHIVE are part of Trisul's data lifecycle and retention architecture.

Rather than viewing all monitoring information as a single dataset, Trisul organizes data according to its operational relevance and expected usage patterns.

Recent operational data remains readily available for monitoring and investigations. Historical reference data provides context for trend analysis and baselining. Long-term archived data preserves visibility for compliance, audits, and forensic investigations.

This lifecycle-oriented approach helps Trisul balance performance, storage efficiency, and long-term analytical value across large monitoring deployments.

---

## Related terms
- Data retention
- Historical analysis
- Baseline monitoring
- Capacity planning
- Flow analytics
- Counter group
- [Traffic investigation](/glossary/traffic-investigation)
- Network telemetry

---

## Frequently asked questions
### What are OPER, REF, and ARCHIVE?

OPER, REF, and ARCHIVE are Trisul data lifecycle categories that organize monitoring information according to its operational value, historical relevance, and long-term retention requirements.

### What is OPER data?

OPER contains actively used operational data that supports monitoring, dashboards, investigations, alerts, and day-to-day network visibility.

### What is REF data?

REF contains historical reference data used for trend analysis, baselining, capacity planning, and long-term comparisons.

### What is ARCHIVE data?

ARCHIVE contains long-term retained data preserved for audits, compliance, investigations, forensics, and historical record keeping.

### Why are multiple retention categories needed?

Different stages of monitoring data have different access patterns and business value. Tiered retention improves performance, storage efficiency, and long-term data preservation.

### Are OPER, REF, and ARCHIVE separate databases?

No. They are lifecycle categories used to organize monitoring information according to how that information is expected to be used over time.

### Why does monitoring data move through different lifecycle stages?

Because the value and access requirements of monitoring data change as it ages. Recent data supports operational visibility, historical data provides analytical context, and older data supports retention and compliance requirements.