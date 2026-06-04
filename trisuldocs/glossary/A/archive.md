---
title: What is an archive in network analytics?
description: An archive in network analytics is retained historical data stored for later search, reporting, compliance, or forensic review.
sidebar_label: Archive
sidebar_position: 9
slug: /glossary/archive
keywords:
  - archive
  - archived data
  - historical storage
  - retained logs
  - retained flows
  - long-term data
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an archive in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An archive in network analytics is retained historical data stored for later search, reporting, compliance, or forensic review."
      }
    },
    {
      "@type": "Question",
      "name": "Why is an archive useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An archive is useful because it preserves history that may be needed long after the original event has passed."
      }
    },
    {
      "@type": "Question",
      "name": "What can be archived?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An archive can include logs, flow records, packets, reports, and summary metrics."
      }
    },
    {
      "@type": "Question",
      "name": "How is an archive used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An archive is used for investigation, reporting, trend analysis, and compliance review."
      }
    }
  ]
};

# What is an archive in network analytics?

An archive in network analytics is retained historical data stored for later search, reporting, compliance, or forensic review. It extends visibility beyond the live‑data window by keeping older data accessible in a structured, queryable form.

---

## How an archive works
Operational data is moved from active, high‑speed storage into longer‑term storage while remaining searchable or retrievable. This allows teams to preserve history without keeping everything in expensive real‑time storage.

The archive may include raw data such as logs and packets, or summarized records such as flow aggregates and reports. The exact format and granularity depend on cost, retention goals, and the need for detailed versus high‑level queries.

---

## Archive use in operations
Archives are valuable when teams need to investigate something that happened days, weeks, or months earlier, or when compliance mandates historical reporting. They also support trend analysis and long‑term capacity planning.

Without an archive, visibility effectively ends when live retention expires. That can make late investigations difficult or impossible and may leave gaps in reporting and compliance.

---

## Common archived data
| Data type   | Use |
|-------------|-----|
| Logs        | Event history for troubleshooting and auditing |
| Flow records| Traffic history for usage, trends, and capacity analysis |
| Packets     | Detailed evidence for deep forensic analysis |
| Summaries   | Long‑term trends and usage reports |

---

## What makes an archive useful
An archive is useful because it extends the useful life of operational data, allowing teams to revisit the past instead of relying only on live views.  
It is most effective when the archived data is indexed, structured, and easy to search, so investigations and reports can be run quickly without full‑packet replay.

---

## In Trisul
Trisul can support archival use cases by retaining traffic history and making past activity available for later analysis.  
Through its flow‑based storage and query capabilities, Trisul allows operators to search and analyze historical traffic patterns, flows, and top‑talkers over extended periods, which supports investigations, compliance reporting, and long‑term trend analysis.

---

## Related terms
- [Archive](/glossary/archive)
- [Storage](/glossary/storage)
- [Batch processing](/glossary/batch-processing)
- [Summary statistics](/glossary/summary-statistics)
- [Forensic analysis](/glossary/forensic-analysis)
- Compliance reporting

---

## Frequently asked questions
### What is an archive in network analytics?

An archive in network analytics is retained historical data stored for later search, reporting, compliance, or forensic review. It extends visibility beyond the live‑data window into the past.

### Why is an archive useful?

An archive is useful because it preserves history that may be needed long after the original event has passed. It supports investigations, reporting, and compliance even when live data is no longer available.

### What can be archived?

An archive can include logs, flow records, packets, reports, and summary metrics. These types of data together provide both high‑level trends and detailed evidence for analysis.

### How is an archive used?

An archive is used for investigation, reporting, trend analysis, and compliance review. Teams query archived data when they need to look back at historical behavior, support an audit, or explain long‑term changes in usage or performance.