---
title: What is a distributed domain?
description: A distributed domain is a logical grouping of Trisul nodes that operate together as a unified analytics deployment, enabling centralized visibility, management, and querying across multiple distributed traffic-collection points.
sidebar_label: Distributed domain
sidebar_position: 43
slug: /glossary/distributed-domain
keywords:
  - distributed domain
  - Trisul domain
  - distributed analytics
  - multi-node deployment
  - network analytics domain
  - probe hub domain
  - distributed monitoring
  - centralized analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a distributed domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain is a logical grouping of Trisul nodes that operate together as a unified analytics deployment, enabling centralized visibility, management, and querying across multiple distributed traffic-collection points."
      }
    },
    {
      "@type": "Question",
      "name": "How does a distributed domain work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain typically consists of hub and probe nodes. Probe nodes collect and process traffic locally while the hub coordinates centralized visibility, management, and analytics workflows across the deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Why use a distributed domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Distributed domains are useful in environments with multiple locations, datacenters, network segments, or monitoring points because they provide centralized operational visibility across geographically distributed infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How does distributed domain relate to multitenancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain focuses on distributed analytics infrastructure and centralized management across nodes, while multitenancy focuses on isolating operational environments, customers, or analytics contexts within the deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support distributed domains?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports distributed analytics deployments using hub-and-probe architectures that provide centralized operational visibility, distributed traffic collection, and unified investigation workflows."
      }
    }
  ]
};

# What is a distributed domain?

A **distributed domain** is a logical grouping of Trisul nodes that work together as a single analytics deployment. It lets operators collect traffic at multiple locations while still viewing, querying, and managing data from a central point. Distributed domains are common in multi‑site enterprises, ISPs, datacenters, and managed‑service environments where traffic spans many physical or logical segments.

---

## How a distributed domain works
A distributed domain typically uses a **hub‑and‑probe** model. One or more **hub nodes** coordinate visibility, queries, and dashboards, while **probe nodes** collect and process traffic locally at each site or segment. Probes gather flows or telemetry, apply analytics, and stream results back to the hub. The hub then aggregates data so analysts can investigate traffic across sites using a single interface.

---

## Distributed domains in network operations
Distributed domains are useful when monitoring must span datacenters, regional offices, branch sites, or ISP POPs. They let operators correlate traffic across locations, run consistent policies and dashboards, and avoid building isolated per‑site monitoring stacks. Common use cases include multi‑datacenter visibility, branch‑office monitoring, ISP‑wide traffic analysis, and hybrid cloud‑on‑premises traffic investigation.

---

## Single‑node vs distributed deployments
| Type                       | Description |
|----------------------------|-------------|
| Single‑node deployment     | One system handles both collection and analytics |
| Distributed domain         | Multiple probes collect locally; hub provides unified view |
| Multi‑domain deployment    | Separate, independent analytics environments |

Distributed domains suit environments where traffic sources are physically or logically spread out, but analysts need a single pane of glass.

---

## Distributed domains and operational reliability
Distributed deployments depend on stable connectivity and time synchronization between nodes. Operators must plan for network reachability, telemetry transport, clock accuracy, and consistent configuration across hubs and probes. Reliable time sync is especially important so that events across sites can be correlated correctly in dashboards and queries.

---

## Distributed domains vs multitenancy
| Dimension           | Distributed domain                              | Multitenancy                                  |
|---------------------|-------------------------------------------------|-----------------------------------------------|
| Primary goal        | Geographically distributed monitoring           | Analytical and operational isolation          |
| Operational focus   | Multi‑node coordination                         | Tenant or customer separation                 |
| Infrastructure model| Distributed collection points                   | Shared infrastructure with separate contexts  |
| Typical use         | Scale and location                              | Customers, business units, or security zones  |

Many large deployments use both: a distributed domain for scale and locations, and multitenant contexts for isolation.

---

## In Trisul
Trisul implements distributed domains through its hub‑and‑probe architecture. Probes collect and process flow or telemetry at local sites, and hubs aggregate that data into centralized dashboards, queries, and investigation workflows. This lets operators monitor branch offices, datacenters, and ISP points from one console, while still distributing traffic‑processing where it is most efficient. Trisul supports cross‑site trending, top‑K views, and drill‑downs that span multiple nodes.

---

## Related terms
- [Distributed domain](/glossary/distributed-domain)
- [Node](/glossary/node)
- Probe  
- Hub  
- [Multitenancy](/glossary/multitenancy)
- Centralized monitoring  
- [Context](/glossary/context)
- Distributed analytics  

---

## Frequently asked questions
### What is a distributed domain?

A distributed domain is a logical grouping of Trisul nodes that operate together as a unified analytics deployment, enabling centralized visibility, management, and querying across multiple distributed traffic‑collection points.

### How does a distributed domain work?

A distributed domain typically consists of hub and probe nodes. Probe nodes collect and process traffic locally while the hub coordinates centralized visibility, management, and analytics workflows across the deployment.

### Why use a distributed domain?

Distributed domains are useful in environments with multiple locations, datacenters, network segments, or monitoring points because they provide centralized operational visibility across geographically distributed infrastructure.

### How does distributed domain relate to multitenancy?

A distributed domain focuses on distributed analytics infrastructure and centralized management across nodes, while multitenancy focuses on isolating operational environments, customers, or analytics contexts within the deployment.

### How does Trisul support distributed domains?

Trisul supports distributed analytics deployments using hub‑and‑probe architectures that provide centralized operational visibility, distributed traffic collection, and unified investigation workflows.