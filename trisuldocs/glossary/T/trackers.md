---
title: What are trackers?
description: Trackers are monitoring mechanisms that continuously observe specific entities, conditions, or behaviors over time and generate records, alerts, or investigative context when defined criteria are met.
sidebar_label: Trackers
sidebar_position: 220
slug: /glossary/trackers
keywords:
  - trackers
  - flow tracker
  - network tracking
  - condition monitoring
  - behavioral monitoring
  - network analytics
  - entity tracking
  - traffic tracking
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a tracker monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tracker monitors a specific entity, condition, or behavior over time. Examples include tracking hosts, applications, interfaces, protocols, flows, or custom operational conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How is a tracker different from a counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Counters measure activity levels such as bytes, packets, or flows, while trackers continuously monitor conditions and behaviors over time. Trackers focus on identifying and following activity of interest rather than simply measuring volume."
      }
    },
    {
      "@type": "Question",
      "name": "Can trackers generate alerts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Trackers commonly generate alerts when monitored conditions match predefined rules, thresholds, or behavioral criteria."
      }
    },
    {
      "@type": "Question",
      "name": "What operational problems can trackers help identify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trackers can identify unusual traffic patterns, policy violations, service degradation, communication anomalies, long-lived flows, and other conditions that require investigation."
      }
    },
    {
      "@type": "Question",
      "name": "Are trackers limited to flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Trackers can monitor many types of entities and conditions depending on the monitoring architecture and operational objectives."
      }
    }
  ]
};

# What are trackers?

**Trackers** are monitoring mechanisms that continuously observe specific entities, conditions, or behaviors over time and generate records, alerts, or investigative context when defined criteria are met.

Unlike counters that primarily measure quantities such as bytes, packets, or flows, trackers focus on identifying and following activity of operational interest.

A useful way to think about trackers is:

- Counters measure activity.
- Dashboards visualize activity.
- Reports summarize activity.
- Trackers continuously watch activity.

Their purpose is not simply to record measurements, but to maintain visibility into conditions that deserve ongoing attention.

---

## Why trackers matter
Modern networks generate enormous amounts of telemetry.

While counters and reports help quantify activity, operators often need visibility into specific behaviors that evolve over time rather than isolated measurements captured at a single moment.

For example, a traffic spike may appear in a dashboard, but operators may also want to know:

- Which flows remained active?
- Which hosts continued communicating?
- Whether the condition persisted or disappeared?
- How the behavior evolved over time?

Trackers help answer these questions by continuously following monitored activity instead of treating each observation as an independent event.

This makes trackers particularly useful for investigations, operational monitoring, and behavioral analysis.

---

## How trackers work
A tracker continuously evaluates incoming telemetry against predefined monitoring conditions.

When activity matches those conditions, the tracker records the event and continues observing related activity as new data arrives.

Unlike a simple alert that may trigger once and stop, a tracker maintains visibility into the monitored condition throughout its lifecycle.

As a result, operators can understand not only that a condition occurred, but also how it developed, persisted, changed, and eventually ended.

The specific conditions monitored depend on operational objectives and may be based on traffic characteristics, communication behavior, protocol activity, flow properties, thresholds, or custom rules.

---

## Trackers in network operations
Trackers help operations teams focus on activity that requires continued attention.

Rather than manually reviewing large volumes of telemetry, operators can define monitoring criteria and allow trackers to follow matching activity automatically.

Examples include:

- Long-lived flows
- Persistent communication patterns
- High-volume conversations
- Security-related activity
- Protocol-specific behaviors
- Recurring operational conditions

Because trackers maintain visibility over time, they often provide richer investigative context than individual alerts or isolated events.

This makes them valuable for troubleshooting, performance analysis, capacity monitoring, and security investigations.

---

## Trackers vs counters
| Category | Trackers | Counters |
|----------|----------|----------|
| Primary purpose | Monitor conditions and behaviors over time | Measure activity volume |
| Focus | State changes, persistence, and evolution | Quantitative measurements |
| Typical outputs | Alerts, tracked entities, investigation records | Bytes, packets, flows, rates |
| Operational use | Monitoring and investigation | Reporting and measurement |
| Processing model | Continuous condition evaluation | Metric accumulation |
| Best fit | Behavioral monitoring and activity tracking | Utilization and performance analysis |

Counters answer questions such as:

- How much traffic occurred?
- How many packets were observed?

Trackers answer questions such as:

- Did a condition occur?
- Which entities matched the criteria?
- How long did the condition persist?
- How did the activity evolve over time?

Both approaches provide valuable but different perspectives on network behavior.

---

## What makes trackers effective
The value of a tracker depends on its ability to identify activity that deserves continued attention without overwhelming operators with noise.

Conditions that are too broad may generate excessive tracking records, while conditions that are too restrictive may miss important events.

Effective trackers balance precision, context, and operational relevance.

Historical visibility is equally important because understanding how a condition changes over time is often more valuable than knowing that it occurred once.

For this reason, trackers are frequently used alongside counters, anomaly detection systems, threshold monitoring, and investigative workflows.

---

## In Trisul
Trackers are directly relevant to Trisul through its **Flow Tracker** functionality.

A Flow Tracker continuously monitors flows that match user-defined conditions and follows those flows as activity evolves. For example, operators can track long-duration flows, unusually large transfers, persistent communications, or other traffic patterns that require ongoing observation.

Flow Trackers complement Trisul's counters, alerts, and historical analytics by providing focused visibility into conditions of operational interest and supporting investigation workflows.

Rather than simply reporting that something happened, Flow Trackers help operators understand how the activity developed over time.

---

## Related terms
- [Flow tracker](/glossary/flow-tracker)
- Counter group
- [Meters in counter groups](/glossary/meters-in-counter-groups)
- Threshold alerting
- [Anomaly detection](/glossary/anomaly-detection)
- Flow analytics
- Network telemetry
- [Top-K analytics](/glossary/top-k-analytics)

---

## Frequently asked questions
### What does a tracker monitor?

A tracker monitors a specific entity, condition, or behavior over time. Examples include tracking hosts, applications, interfaces, protocols, flows, or custom operational conditions.

### How is a tracker different from a counter?

Counters measure activity levels such as bytes, packets, or flows, while trackers continuously monitor conditions and behaviors over time. Trackers focus on identifying and following activity of interest rather than simply measuring volume.

### Can trackers generate alerts?

Yes. Trackers commonly generate alerts when monitored conditions match predefined rules, thresholds, or behavioral criteria.

### What operational problems can trackers help identify?

Trackers can identify unusual traffic patterns, policy violations, service degradation, communication anomalies, long-lived flows, and other conditions that require investigation.

### Are trackers limited to flow monitoring?

No. Trackers can monitor many types of entities and conditions depending on the monitoring architecture and operational objectives.

### Why are trackers useful during investigations?

Trackers maintain visibility into how activity evolves over time, helping operators understand persistence, progression, and behavioral changes rather than relying solely on isolated events.