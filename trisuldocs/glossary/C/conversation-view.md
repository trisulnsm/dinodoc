---
title: What is conversation view?
description: Conversation view is a flow-analysis representation that combines traffic from both directions of a network exchange into a single conversational record for easier analysis and investigation.
sidebar_label: Conversation view
sidebar_position: 31
slug: /glossary/conversation-view
keywords:
  - conversation view
  - flow conversation
  - bidirectional flow
  - flow stitching
  - netflow conversation analysis
  - flow pair
  - biflow
  - conversational analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does conversation view show?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view presents traffic exchanged between two endpoints as a single conversational record containing directional traffic metrics such as bytes, packets, duration, ports, and protocol information."
      }
    },
    {
      "@type": "Question",
      "name": "How does conversation view relate to flow stitching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation-oriented analysis commonly relies on flow correlation or flow stitching techniques that associate related directional traffic records into a unified conversational representation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between conversation view and flow legs view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view emphasizes readability by combining related traffic directions, while flow legs view preserves individual directional or exporter-specific flow records for detailed path and topology analysis."
      }
    },
    {
      "@type": "Question",
      "name": "When is conversation view not enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view may not preserve detailed exporter, interface, or path-level visibility required for topology analysis, path tracing, or multi-hop traffic investigation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use conversation view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports conversation-oriented traffic analysis workflows through flow correlation, bidirectional traffic visibility, and investigation workflows available in Explore Flows and related analytics views."
      }
    }
  ]
};

# What is conversation view?

**Conversation view** is a flow‑analysis representation that combines traffic from both directions of a network exchange between two endpoints into a single conversational record. Instead of showing separate “outbound” and “inbound” flows, it merges them so that analysts see the full dialogue between source and destination together. This simplifies traffic investigation, especially when analyzing large volumes of directionally‑split flow records.

---

## How conversation view works
Conversation view correlates related directional records that describe opposite sides of the same communication. It typically uses the source/destination IP addresses, ports, protocol, and timing to match pairs of flows and then aggregates bytes, packets, and duration into a single entry. The result is a unified view per communication pair, often labeled by the endpoints, ports, and protocol rather than by individual flow exports.

---

## Conversation view in network operations
In operations, conversation view makes it easier to see how two endpoints communicate and how much traffic flows each way. It is useful for troubleshooting performance issues, inspecting request‑response patterns, and investigating security events where traffic ratio between hosts matters. Instead of manually pairing flows, analysts can directly see which conversations are largest, longest, or most suspicious.

---

## Conversation view vs flow legs view
| Dimension            | Conversation view                                    | Flow legs view                                         |
|----------------------|------------------------------------------------------|--------------------------------------------------------|
| Representation       | Combined bidirectional conversation                    | Separate directional or exporter records               |
| Readability          | Easier to read conversations                           | More detailed but harder to summarize                  |
| Directional visibility| Aggregated ingress and egress numbers                 | Clear per‑leg, per‑interface visibility                |
| Operational focus    | Endpoint‑level analysis and traffic patterns           | Topology, path, and multi‑hop analysis                 |
| Typical use          | Security and traffic‑level investigation               | Interface and path‑level troubleshooting               |

Conversation view improves readability; legs view preserves low‑level exporter and path detail.

---

## Why conversation view is useful
Conversation view helps analysts quickly understand communication behavior between hosts without manually correlating flows. It shortens investigations, improves readability of traffic relationships, and makes it easier to spot anomalies in traffic ratios or unusually large conversations. However, it may hide some lower‑level details like which interface or exporter generated each leg, so detailed topology analysis still benefits from legs‑view data.

---

## Conversation view and flow correlation
Conversation‑oriented analysis typically relies on flow correlation or flow‑stitching logic. The system matches flow pairs using IP addresses, ports, protocol, and timestamps, optionally deduplicating overlapping records and then merging them into a single conversation. The exact behavior depends on the exporter and on the analytics platform’s stitching logic.

---

## In Trisul
Trisul supports conversation‑oriented traffic analysis through flow correlation and bidirectional visibility. In **Explore Flows** and related views, you can see traffic between two endpoints as a single conversation, while still retaining the ability to drop into legs‑level views when needed. Top‑K and **Aggregate Flows** can summarize the largest conversations by byte or packet count, helping you quickly identify dominant traffic pairs.

---

## Related terms
- [Conversation view](/glossary/conversation-view)
- Flow stitching  
- [Flow legs](/glossary/flow-legs)
- [Flow deduplication](/glossary/flow-deduplication)
- Flow monitoring  
- [Flow](/glossary/flow)
- [Bidirectional flow](/glossary/bidirectional-flow)
- [Explore Flows](/glossary/explore-flows)

---

## Frequently asked questions
### What does conversation view show?

Conversation view presents traffic exchanged between two endpoints as a single conversational record containing directional traffic metrics such as bytes, packets, duration, ports, and protocol information.

### How does conversation view relate to flow stitching?

Conversation‑oriented analysis commonly relies on flow correlation or flow‑stitching techniques that associate related directional traffic records into a unified conversational representation.

### What is the difference between conversation view and flow legs view?

Conversation view emphasizes readability by combining related traffic directions, while flow legs view preserves individual directional or exporter‑specific flow records for detailed path and topology analysis.

### When is conversation view not enough?

Conversation view may not preserve detailed exporter, interface, or path‑level visibility required for topology analysis, path tracing, or multi‑hop traffic investigation.

### How does Trisul use conversation view?

Trisul supports conversation‑oriented traffic analysis workflows through flow correlation, bidirectional traffic visibility, and investigation workflows available in **Explore Flows** and related analytics views.