---
title: What is Badfellas in Trisul?
description: Badfellas is a Trisul internal feature that manages Host Monitor allow-lists and deny-lists for long-tail hosts, automatically updating which hosts are monitored as top talkers or excluded from monitoring.
sidebar_label: Badfellas
sidebar_position: 14
slug: /glossary/badfellas
keywords:
  - badfellas
  - trisul badfellas
  - host monitor allow-list
  - host monitor deny-list
  - long tail hosts
  - top talkers monitoring
  - host exclusions
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Badfellas do in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badfellas manages Host Monitor allow-lists and deny-lists for long-tail hosts monitoring in Trisul 3.6 and later. It automatically updates the lists of hosts that are monitored as top talkers and hosts that are excluded from monitoring. The list updates once per day by default, but can be configured to update once per week."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it called Badfellas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The name is Trisul's internal colloquialism for hosts that are problematic or suspicious. 'Badfellas' refers to hosts that appear in the long tail of traffic but are not top talkers—hosts that may be worth monitoring even if they don't show up in the standard top-N rankings."
      }
    },
    {
      "@type": "Question",
      "name": "How often does Badfellas update the lists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badfellas updates the allow-list and deny-list automatically once per day by default. The update frequency can be changed to once per week by following instructions in the Trisul documentation for configuring Badfellas refresh intervals."
      }
    },
    {
      "@type": "Question",
      "name": "What is long-tail hosts monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Long-tail hosts monitoring tracks hosts that are not top talkers but may still be worth monitoring for security or operational reasons. These hosts are in the 'long tail' of traffic volume—small individual amounts but potentially significant when aggregated or when patterns change."
      }
    }
  ]
};

# What is Badfellas in Trisul?

Badfellas is a Trisul internal feature that manages Host Monitor allow‑lists and deny‑lists for long‑tail hosts. It automatically updates which hosts are monitored as top talkers and which hosts are excluded from monitoring. The feature was introduced in Trisul 3.6 as part of the Long‑Tail Hosts monitoring capability.

---

## How it works
Badfellas updates the allow‑list and deny‑list automatically based on traffic patterns and host behavior. The Host Monitor uses these lists to decide which hosts to track as top talkers and which hosts to exclude from detailed monitoring. The lists are refreshed once per day by default, but this interval can be configured to once per week through the Trisul configuration system.

---

## In network operations
- **NOC:** Configure the Badfellas refresh frequency based on how often host rankings and traffic patterns change in the network.  
- **SOC:** Use Badfellas allow‑lists to ensure suspicious or high‑risk hosts remain in monitoring even if they drop out of standard top‑N rankings.  
- **ISP:** Use Badfellas deny‑lists to exclude known‑benign hosts (for example, upstream caches or content‑delivery nodes) from monitoring to reduce data volume and noise.

---

## Long-tail hosts vs top talkers
| Dimension        | Top talkers                                 | Long‑tail hosts                                              |
|------------------|---------------------------------------------|--------------------------------------------------------------|
| Traffic volume   | High; frequently appear in volume rankings  | Low per‑host; many small contributors                        |
| Monitoring focus | Always tracked by default                   | Tracked or prioritized via allow‑lists and custom rules      |
| Risk profile     | Obvious bandwidth consumers                 | May hide suspicious or changing patterns below the surface   |

---

## In Trisul
Badfellas is built into Trisul 3.6 and later as part of the Long‑Tail Hosts monitoring feature. It manages Host Monitor allow‑lists and deny‑lists with automatic daily updates by default, and operators can adjust the refresh interval to weekly if needed. This integration helps operators balance visibility and resource usage when monitoring large numbers of hosts across the network.

---

## Related terms
- [Badfellas](/glossary/badfellas)
- Long‑tail hosts monitoring
- [Host Monitor](/glossary/host-monitor)
- [Top‑K analytics](/glossary/top-k-analytics)
- Flow monitoring
- Host exclusions

---

## Frequently asked questions
### What does Badfellas do in Trisul?

Badfellas manages Host Monitor allow‑lists and deny‑lists for long‑tail hosts monitoring in Trisul 3.6 and later. It automatically updates the lists of hosts that are monitored as top talkers and hosts that are excluded from monitoring. The list updates once per day by default, but can be configured to update once per week.

### Why is it called Badfellas?

The name is Trisul’s internal colloquialism for hosts that are problematic or suspicious. “Badfellas” refers to hosts that appear in the long tail of traffic but are not top talkers—hosts that may be worth monitoring even if they do not show up in the standard top‑N rankings.

### How often does Badfellas update the lists?

Badfellas updates the allow‑list and deny‑list automatically once per day by default. The update frequency can be changed to once per week by following instructions in the Trisul documentation for configuring Badfellas refresh intervals.

### What is long-tail hosts monitoring?

Long‑tail hosts monitoring tracks hosts that are not top talkers but may still be worth monitoring for security or operational reasons. These hosts are in the “long tail” of traffic volume—each contributes a small amount individually, but their behavior can become significant when aggregated or when traffic patterns change.