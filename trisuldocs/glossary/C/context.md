---
title: What is a Trisul context?
description: A Trisul context is an isolated analytics domain within a Trisul deployment, with its own database, configuration, and processing state while sharing common administration and web management infrastructure.
sidebar_label: Context
sidebar_position: 29
slug: /glossary/context
keywords:
  - context
  - trisul context
  - isolated instance
  - distributed domain
  - separate database
  - multitenant analytics
  - webadmin context
  - analytics domain
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Trisul context isolate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Trisul context maintains separate analytics data, configuration, operational state, and processing workflows while sharing common administration and web-management infrastructure with other contexts."
      }
    },
    {
      "@type": "Question",
      "name": "Why use multiple contexts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple contexts help isolate analytics by tenant, environment, region, customer, or operational domain without requiring separate Trisul deployments."
      }
    },
    {
      "@type": "Question",
      "name": "How do you create a context in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contexts are created and managed from the hub node using Trisul administrative tooling such as trisulctl_hub."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a context and a node?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A node is a physical or virtual system running Trisul services, while a context is an isolated analytics domain operating within a Trisul deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How are contexts used in multi-tenant deployments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contexts can isolate analytics data and operational workflows across customers, business units, environments, or operational teams within the same Trisul deployment."
      }
    }
  ]
};

# What is a Trisul context?

A **Trisul context** is an isolated analytics domain inside a Trisul deployment. Each context has its own database, configuration, and processing state, but shares the same administration and web management infrastructure as other contexts. This lets one Trisul deployment host multiple separate operational environments without full‑deployment duplication.

Contexts are commonly used to separate customers, business units, regions, security domains, or operational environments, while still enabling centralized management and administration.

---

## How a Trisul context works
Each context behaves like an independent analytics environment. It holds its own traffic and analytics data, uses its own configuration, and tracks its own retention and operational history. Contexts are created and managed from the Trisul hub using administrative tools such as `trisulctl_hub`. Telemetry and traffic are routed to the appropriate context, and analysts work within that context without seeing data from others.

---

## Contexts in network operations
Contexts are useful when you need to keep analytics and traffic data separated, such as MSPs managing multiple customers, ISPs segmenting service groups, or large enterprises isolating departments or security zones. Contexts help avoid data overlap while keeping deployment and administration simpler and more centralized.

---

## Context vs node
| Dimension       | Context                                      | Node                                       |
|-----------------|----------------------------------------------|--------------------------------------------|
| Purpose         | Isolated analytics domain                    | System running Trisul services             |
| Operational scope | Separate analytics and processing state     | Hosts services and may run multiple contexts |
| Data handling   | Isolated analytics data and history          | Infrastructure layer, no data isolation    |
| Configuration   | Context‑specific config and settings         | Platform‑level config and service settings |

A single Trisul deployment can host multiple contexts across one or more nodes.

---

## Why contexts are useful
Contexts provide operational isolation and multi‑tenant flexibility. They let different teams or tenants work independently with their own data and workflows, while still sharing administration, reporting, and monitoring at the platform level. This is especially useful for MSPs, ISPs, and large enterprises that need to segment analytics without running separate Trisul installations.

---

## In Trisul
Trisul supports multi‑context deployments for analytics isolation and multi‑tenant operations. Each context has its own analytics domain, traffic processing, and configuration, but all are managed through the same hub and web administration interface. You create and manage contexts using `trisulctl_hub` and related tooling, and route traffic to the appropriate context based on organization, customer, or region.

---

## Related terms
- [Context](/glossary/context)
- [Node](/glossary/node)
- [Distributed domain](/glossary/distributed-domain)
- [Multitenancy](/glossary/multitenancy)
- [Webadmin](/glossary/webadmin)
- [Context menu](/glossary/context-menu)
- Hub node  

---

## Frequently asked questions
### What does a Trisul context isolate?

A Trisul context maintains separate analytics data, configuration, operational state, and processing workflows while sharing common administration and web‑management infrastructure with other contexts.

### Why use multiple contexts?

Multiple contexts help isolate analytics by tenant, environment, region, customer, or operational domain without requiring separate Trisul deployments.

### How do you create a context in Trisul?

Contexts are created and managed from the hub node using Trisul administrative tooling such as `trisulctl_hub`.

### What is the difference between a context and a node?

A node is a physical or virtual system running Trisul services, while a context is an isolated analytics domain operating within a Trisul deployment.

### How are contexts used in multi-tenant deployments?

Contexts can isolate analytics data and operational workflows across customers, business units, environments, or operational teams within the same Trisul deployment.