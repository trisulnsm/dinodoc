---
title: What is Top-K?
description: Top-K is the process of identifying the K highest-ranking items in a dataset based on a selected metric. In network analytics, it is commonly used to find top talkers, applications, destinations, and other high-volume traffic entities.
sidebar_label: Top-K
sidebar_position: 218
slug: /glossary/top-k
keywords:
  - Top-K
  - top K
  - ranking
  - top talkers
  - analytics ranking
  - flow analytics
  - heavy hitters
---

export const jsonLd = {
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "What is Top-K?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Top-K is the process of identifying the K highest-ranking items in a dataset based on a selected metric. In network analytics, it is commonly used to find top talkers, applications, destinations, and other high-volume traffic entities."
}
},
{
"@type": "Question",
"name": "How does Top-K work?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Top-K works by ranking entities according to a metric such as bytes, packets, flows, or events and returning only the highest-ranked K results. This helps focus analysis on the most significant items."
}
},
{
"@type": "Question",
"name": "Why is Top-K important?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Top-K is important because it reduces large datasets into a manageable set of the most significant results. It helps analysts quickly identify dominant traffic patterns and resource consumers."
}
},
{
"@type": "Question",
"name": "What is Top-K used for in network analytics?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Top-K is used to identify top talkers, busiest applications, highest-volume destinations, heavy hitters, and other entities that contribute most to network activity."
}
}
]
};

# What is Top-K?

**Top-K** is the process of identifying the **K highest-ranking items** in a dataset based on a selected metric. In network analytics, Top-K is commonly used to identify the hosts, applications, destinations, conversations, or subscribers responsible for the largest share of network activity.

Large networks can generate millions of flows, sessions, and events every hour. Examining every record individually is often impractical. Top-K simplifies analysis by highlighting the small number of entities that contribute most to traffic, allowing analysts to focus on the activity with the greatest impact.

Because network traffic often follows an uneven distribution, a relatively small number of hosts, applications, or conversations frequently account for most traffic volume. Top-K analysis helps surface these dominant entities quickly and provides a practical starting point for investigation and troubleshooting.

---

## How Top-K works
Top-K analysis ranks entities using a selected metric and returns only the highest-ranked results.

The ranking metric depends on the question being asked. A network engineer investigating bandwidth consumption may rank hosts by bytes transferred, while a security analyst investigating scanning activity may rank systems by packet count or connection volume.

For example, a Top-10 report might identify the ten hosts consuming the most bandwidth, the ten busiest applications, the most active destination networks, or the largest source-destination conversations.

By reducing thousands or millions of records into a concise ranked list, Top-K transforms raw telemetry into information that can be reviewed and acted upon quickly.

---

## Why Top-K is important
Top-K is one of the most widely used analytical techniques because it helps reduce complexity.

Instead of examining an entire dataset, analysts can immediately focus on the entities contributing most to overall activity. This makes it easier to identify bandwidth consumers, unusual traffic concentration, overloaded systems, misconfigured applications, or abnormal usage patterns.

Top-K also helps prioritize investigations. When troubleshooting performance issues or investigating suspicious behavior, analysts often begin with the systems generating the largest amount of traffic or activity. Top-K provides a natural starting point for that investigation.

While Top-K highlights dominant behavior, it does not provide a complete picture. Smaller low-volume activity may still be operationally or security significant. For this reason, Top-K analysis is often complemented by long-tail analysis.

---

## Top-K in network analysis
Top-K analysis appears throughout network monitoring, traffic analytics, capacity planning, and security investigations.

It is commonly used to identify dominant traffic consumers, detect abnormal traffic growth, investigate large external transfers, monitor subscriber usage, and understand how bandwidth is distributed across hosts, applications, and services.

Because it summarizes the most significant traffic activity, Top-K is equally useful for real-time monitoring and historical investigations.

---

## Common Top-K examples
| Example           | What it reveals                                        |
| ----------------- | ------------------------------------------------------ |
| Top talkers       | Hosts consuming the most bandwidth                     |
| Top applications  | Applications generating the largest volume of traffic  |
| Top destinations  | Most heavily contacted external systems                |
| Top conversations | Highest-volume source-destination pairs                |
| Top protocols     | Protocols responsible for the largest share of traffic |

The value of a Top-K report depends on both the selected metric and the entities being ranked.

---

## Choosing the right ranking metric
The usefulness of Top-K depends heavily on the ranking metric.

Ranking by **bytes** highlights bandwidth consumers. Ranking by **flows** emphasizes connection-heavy systems. Ranking by **packets** may reveal scanning activity, control-plane traffic, or communication patterns that are not visible through bandwidth measurements alone. Ranking by **events** can help uncover operational or security anomalies.

Different metrics often reveal different aspects of network behavior, which is why Top-K analysis is frequently viewed from multiple perspectives.

---

## In Trisul
Top-K analysis is a core concept throughout Trisul Network Analytics.

Trisul uses Top-K views to surface dominant traffic entities across hosts, applications, destinations, conversations, protocols, Autonomous Systems (ASNs), subscribers, and other traffic dimensions. These ranked views help analysts move quickly from large-scale telemetry datasets to focused investigations.

By continuously summarizing the most significant traffic activity, Top-K analysis supports troubleshooting, capacity planning, traffic engineering, security investigations, and day-to-day network visibility.

---

## Related terms
* [What are top talkers?](/glossary/top-talkers)
* [What are heavy hitters?](/glossary/heavy-hitters)
* [What is long-tail analytics?](/glossary/long-tail-analytics)
* [What is traffic analysis?](/glossary/network-traffic-analysis)
* [What are summary statistics?](/glossary/summary-statistics)

---

## Frequently asked questions
### What is Top-K?

Top-K is the process of identifying the K highest-ranking items in a dataset based on a selected metric. In network analytics, it is commonly used to find top talkers, applications, destinations, and other high-volume traffic entities.

### How does Top-K work?

Top-K works by ranking entities according to a metric such as bytes, packets, flows, or events and returning only the highest-ranked K results. This helps focus analysis on the most significant items.

### Why is Top-K important?

Top-K is important because it reduces large datasets into a manageable set of the most significant results. It helps analysts quickly identify dominant traffic patterns and resource consumers.

### What is Top-K used for in network analytics?

Top-K is used to identify top talkers, busiest applications, highest-volume destinations, heavy hitters, and other entities that contribute most to network activity.

### Why does the ranking metric matter?

Different ranking metrics reveal different aspects of network behavior. Bytes highlight bandwidth consumption, packets may expose scanning activity, flows emphasize connection patterns, and events can reveal operational or security anomalies.

### What are the limitations of Top-K?

Top-K highlights dominant activity but may hide smaller low-volume behavior that is still analytically or security significant. This is why Top-K analysis is often used alongside long-tail analysis.

```
```
