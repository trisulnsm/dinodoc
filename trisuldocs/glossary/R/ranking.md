---
title: What is ranking in network analytics?
description: Ranking in network analytics is the ordering of entities such as hosts, flows, applications, or subscribers based on metrics such as traffic volume, utilization, frequency, latency, or traffic significance.
sidebar_label: Ranking
sidebar_position: 177
slug: /glossary/ranking
keywords:
  - ranking
  - top n
  - top talkers
  - ordered results
  - analytics ranking
  - top hosts
  - top applications
  - heavy hitters
  - bandwidth consumers
  - traffic ranking
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ranking in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranking in network analytics is the ordering of entities such as hosts, flows, applications, or subscribers based on metrics such as traffic volume, utilization, frequency, latency, or traffic significance."
      }
    },
    {
      "@type": "Question",
      "name": "Why is ranking useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranking is useful because it helps operators quickly identify dominant, high-impact, or abnormal entities within large traffic datasets and network environments."
      }
    },
    {
      "@type": "Question",
      "name": "What can be ranked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hosts, flows, users, applications, subscribers, autonomous systems, interfaces, conversations, and alerts can all be ranked using traffic-related or infrastructure-related metrics."
      }
    },
    {
      "@type": "Question",
      "name": "What is Top-N analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top-N analysis displays only the highest-ranking entities, such as top hosts or top applications, to simplify visibility and troubleshooting across large telemetry datasets."
      }
    }
  ]
};

# What is ranking in network analytics?

**Ranking** in network analytics is the ordering of entities such as hosts, flows, applications, or subscribers based on metrics such as traffic volume, utilization, frequency, latency, or traffic significance.

Ranking helps operators reduce large telemetry datasets into prioritized views that highlight dominant, unusual, or high-impact entities.

Ranking is widely used in enterprise, ISP, telecom, cloud, SD-WAN, and traffic-analysis environments for troubleshooting, visibility, anomaly detection, reporting, and capacity analysis.

---

## How ranking works
Ranking systems calculate metrics for monitored entities and sort them based on traffic volume, activity level, utilization, latency, session counts, packet rates, or other analysis criteria.

Ranking helps operators quickly identify dominant, unusual, or high-impact entities without manually reviewing large telemetry datasets.

For example, a ranking dashboard may reveal that a single host or application is responsible for most WAN bandwidth consumption during a congestion event.

Many ranking systems use **Top-N analysis**, where only the highest-ranking entities are displayed to simplify visibility and troubleshooting.

Rankings may be generated in realtime or historically depending on the investigation, reporting, or monitoring workflow.

Common ranking metrics include traffic volume, session counts, packet rates, application usage, utilization, latency, retransmissions, alert frequency, and subscriber activity.

---

## Ranking in network operations
Ranking is commonly used to identify top talkers, heavy hitters, dominant applications, high-bandwidth subscribers, congested interfaces, abnormal traffic spikes, and frequently triggered alerts.

Because modern networks generate extremely large telemetry volumes, ranking helps operators focus attention on the entities contributing most significantly to traffic behavior, congestion, infrastructure load, or abnormal activity.

Operators commonly investigate:

- High-bandwidth hosts
- Dominant applications
- Unusual traffic spikes
- Excessive session activity
- Heavy-hitter flows
- Congested interfaces
- High-volume autonomous systems
- Frequently triggered alerts

Historical ranking visibility is especially useful for identifying recurring congestion contributors, long-term bandwidth consumers, changing traffic patterns, or abnormal activity trends across large environments.

---

## Common ranking targets
| Target | Example metric |
|---|---|
| Host | Total bytes or packets |
| Flow | Session duration or traffic volume |
| Application | Usage share or bandwidth consumption |
| Subscriber | Data consumption or session count |
| Interface | Utilization or packet rate |
| Alert | Frequency or severity |
| ASN | Traffic contribution or routing activity |

The usefulness of rankings depends on metric selection, telemetry quality, visibility coverage, and analysis context.

---

## Benefits and challenges of ranking
Ranking simplifies troubleshooting, reduces analysis complexity, highlights abnormal behavior, supports capacity planning, and improves visibility into traffic distribution and infrastructure usage.

However, misleading metrics, incomplete telemetry visibility, short-term traffic spikes, sampling limitations, and lack of contextual analysis can produce rankings that appear important but do not reflect sustained or meaningful behavior.

Organizations commonly combine flow telemetry, packet analysis, interface monitoring, ASN visibility, subscriber analytics, and historical traffic analysis to investigate why specific entities consistently rank highly.

Correlating these telemetry sources helps operators determine whether highly ranked entities represent normal traffic patterns, temporary bursts, congestion contributors, security-related activity, or infrastructure problems.

---

## In Trisul
Trisul supports ranking-oriented analysis through flow telemetry analysis, historical traffic visibility, Top-N analysis, ASN visibility, subscriber analytics, and traffic investigations.

Using NetFlow, IPFIX, packet-analysis workflows, ASN analytics, and historical traffic analysis, operators can rank hosts, applications, interfaces, subscribers, and autonomous systems by traffic behavior, identify heavy hitters and top talkers, investigate congestion contributors and abnormal traffic spikes, analyze traffic distribution trends, and perform historical investigations across enterprise, ISP, telecom, WAN, cloud, and multi-tenant environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What are heavy hitters?](/glossary/heavy-hitters)
- What is Top-N analysis?
- [What are summary statistics?](/glossary/summary-statistics)
- [What is traffic estimation?](/glossary/traffic-estimation)
- [What is anomaly detection?](/glossary/anomaly-detection)

---

## Frequently asked questions
### What is ranking in network analytics?

Ranking in network analytics is the ordering of entities such as hosts, flows, applications, or subscribers based on metrics such as traffic volume, utilization, frequency, latency, or traffic significance.

### Why is ranking useful?

Ranking is useful because it helps operators quickly identify dominant, high-impact, or abnormal entities within large traffic datasets and network environments.

### What can be ranked?

Hosts, flows, users, applications, subscribers, autonomous systems, interfaces, conversations, and alerts can all be ranked using traffic-related or infrastructure-related metrics.

### What is Top-N analysis?

Top-N analysis displays only the highest-ranking entities, such as top hosts or top applications, to simplify visibility and troubleshooting across large telemetry datasets.

### Why are rankings important in troubleshooting?

Rankings help operators quickly identify top talkers, heavy hitters, congestion contributors, abnormal traffic spikes, or dominant applications that may be affecting network behavior.

### What is a top talker?

A top talker is a host, application, subscriber, or other entity generating a disproportionately large amount of traffic compared to others in the environment.