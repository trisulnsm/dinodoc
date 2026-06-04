---
title: What are report types?
description: Report types are predefined reporting formats that organize analytics and monitoring data to answer specific operational questions and support different forms of analysis.
sidebar_label: Report Types
sidebar_position: 180
slug: /glossary/report-types
keywords:
  - report types
  - network reports
  - analytics reports
  - monitoring reports
  - reporting templates
  - operational reporting
  - traffic reports
  - Trisul reports
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a report type?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A report type is a predefined reporting format that determines how analytics, metrics, and monitoring data are organized and presented to answer a specific operational question."
      }
    },
    {
      "@type": "Question",
      "name": "Why are multiple report types needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same monitoring dataset can be organized in different ways to answer different operational questions. Different report types emphasize different perspectives, levels of detail, and analytical objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Can report types use the same underlying data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multiple report types can be generated from the same monitoring dataset while presenting different summaries, aggregations, and perspectives."
      }
    },
    {
      "@type": "Question",
      "name": "How do report types support operational decision-making?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Report types transform raw monitoring data into structured information that helps operators identify trends, evaluate performance, investigate issues, and support planning decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Do report types affect data collection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Report types determine how collected data is organized and presented rather than how it is collected."
      }
    }
  ]
};

# What are report types?

**Report types** are predefined reporting formats that organize analytics, monitoring data, traffic statistics, and operational metrics to answer specific operational questions.

A report type determines how information is filtered, grouped, summarized, ranked, and presented. Rather than changing the underlying data, it changes the perspective through which that data is analyzed.

A useful way to think about report types is:

> A report type defines how data is organized to answer a particular question.

Different questions often require different report structures, even when they use the same underlying dataset.

---

## Why report types matter
Modern monitoring platforms collect large volumes of telemetry, flow records, events, and performance metrics.

The challenge is rarely a lack of data. The challenge is transforming that data into information that supports decisions.

For example, the same traffic dataset can be used to answer very different questions:

- Which applications consumed the most bandwidth?
- Which hosts generated the most traffic?
- Which interfaces experienced the highest utilization?
- How has traffic changed over time?

Each question requires the data to be organized differently.

Report types exist because the same dataset can provide multiple operational insights depending on how it is structured and presented.

---

## How report types work
A report type defines the analytical structure applied to collected data.

This may include:

- Metric selection
- Aggregation methods
- Grouping criteria
- Ranking logic
- Filtering rules
- Time ranges

For example, one report may aggregate traffic by application, while another aggregates the same traffic by host, interface, protocol, or ASN.

The underlying data remains unchanged. The report type determines how that data is transformed into useful information.

Because reports are structured analytical views rather than data sources, multiple report types can be generated from the same monitoring dataset.

---

## Report types in network operations
Different operational activities require different perspectives on network behavior.

Capacity planning may focus on long-term utilization trends. Security investigations may focus on communication patterns and unusual activity. Performance analysis may focus on application behavior and service consumption.

Report types allow operators to analyze the same environment from multiple perspectives without requiring separate monitoring systems.

Historical reporting is particularly valuable because it provides a repeatable framework for comparing time periods, identifying trends, and understanding how network behavior changes over time.

---

## Report types vs dashboards
| Category | Report Types | Dashboards |
|----------|-------------|------------|
| Primary purpose | Structured analysis and reporting | Real-time monitoring and visibility |
| Data presentation | Generated summaries | Interactive visualizations |
| Time focus | Historical and period-based analysis | Current operational state |
| Distribution | Exported, shared, or archived | Primarily interactive viewing |
| User interaction | Usually static after generation | Interactive and exploratory |
| Best fit | Trend analysis, auditing, and reporting | Real-time monitoring and investigations |

Dashboards help operators understand what is happening now.

Reports help operators understand what happened during a defined period and what those observations mean in a broader operational context.

The two approaches are complementary and are often used together.

---

## Reports as analytical views
A report is not simply a collection of raw data.

Every report makes analytical decisions regarding aggregation, grouping, filtering, ranking, and presentation. These decisions influence which patterns become visible and which operational questions can be answered.

For this reason, two reports generated from the same dataset may produce very different insights.

The value of a reporting system depends on its ability to consistently transform collected data into information that supports operational decision-making.

---

## In Trisul
Reporting in Trisul is built on top of the platform's analytics framework, counter groups, flow records, and historical monitoring data.

Report types provide different ways of presenting the analytics already collected by Trisul. The same underlying dataset can be organized to highlight traffic consumption, protocol activity, host behavior, application usage, utilization trends, or other operational perspectives.

By transforming historical analytics into structured reports, Trisul helps operators review trends, support planning activities, communicate findings, and understand long-term network behavior.

---

## Related terms
- Dashboard
- Counter group
- [Meters in counter groups](/glossary/meters-in-counter-groups)
- [Top-K analytics](/glossary/top-k-analytics)
- Flow analytics
- Network telemetry
- Capacity planning
- Historical analysis

---

## Frequently asked questions
### What is a report type?

A report type is a predefined reporting format that determines how analytics, metrics, and monitoring data are organized and presented to answer a specific operational question.

### Why are multiple report types needed?

The same monitoring dataset can be organized in different ways to answer different operational questions. Different report types emphasize different perspectives, levels of detail, and analytical objectives.

### Can report types use the same underlying data?

Yes. Multiple report types can be generated from the same monitoring dataset while presenting different summaries, aggregations, and perspectives.

### How do report types support operational decision-making?

Report types transform raw monitoring data into structured information that helps operators identify trends, evaluate performance, investigate issues, and support planning decisions.

### Do report types affect data collection?

No. Report types determine how collected data is organized and presented rather than how it is collected.

### Why can different reports produce different insights from the same data?

Because each report applies different grouping, filtering, aggregation, ranking, and presentation logic, emphasizing different aspects of the same dataset.