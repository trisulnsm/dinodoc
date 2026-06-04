---
title: What is multitenancy in network analytics?
description: Multitenancy allows a single analytics platform to support multiple isolated tenants while sharing the same underlying infrastructure.
sidebar_label: Multitenancy
sidebar_position: 125
slug: /glossary/multitenancy
keywords:
  - multitenancy
  - multi tenant analytics
  - tenant isolation
  - shared analytics platform
  - MSP monitoring
  - centralized monitoring
  - operational isolation
  - network analytics tenants
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is multitenancy in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy allows a single analytics platform to support multiple isolated tenants while sharing the same underlying infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How does multitenancy work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy works by separating telemetry, dashboards, reports, alerts, and access permissions into isolated tenant-specific operational contexts."
      }
    },
    {
      "@type": "Question",
      "name": "Who uses multitenancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy is commonly used by MSPs, ISPs, telecom operators, cloud providers, and enterprises managing multiple operational domains."
      }
    },
    {
      "@type": "Question",
      "name": "Why is multitenancy important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy is important because it centralizes analytics infrastructure while preserving tenant isolation, customer-specific visibility, and operational separation."
      }
    }
  ]
};

# What is multitenancy in network analytics?

**Multitenancy** allows a single analytics platform to support multiple isolated tenants while sharing the same underlying infrastructure.

In network analytics, multitenancy is used heavily by MSPs, ISPs, telecom operators, cloud providers, and enterprises that manage multiple customers, business units, or operational domains from centralized monitoring environments.

The core operational requirement is tenant isolation. Each tenant must only access its own telemetry, dashboards, alerts, reports, investigations, and operational visibility even though the analytics infrastructure itself is shared.

This allows organizations to centralize monitoring and analytics workflows without exposing one tenant’s operational data or telemetry to another.

---

## How multitenancy works
Multitenancy separates telemetry, reporting, dashboards, alerts, permissions, and operational workflows into tenant-specific contexts inside a shared analytics platform.

Telemetry collected from flow exports, packet analysis systems, infrastructure monitoring tools, or operational analytics workflows is associated with the correct tenant before users access reports, dashboards, investigations, or historical visibility.

This allows centralized monitoring teams to manage many operational domains simultaneously while preserving customer-specific visibility boundaries and operational separation.

Operationally effective multitenancy depends heavily on accurate telemetry association, tenant-aware visibility, role-based access control, reporting segregation, and centralized governance across shared infrastructure.

---

## Why multitenancy matters in network operations
Multitenancy is operationally important because modern monitoring environments often manage many isolated customer or business-unit networks simultaneously from centralized analytics infrastructure.

Without tenant-aware visibility, operational overlap can expose telemetry, reporting data, alerts, investigations, or infrastructure visibility between unrelated operational domains.

Multitenant analytics platforms therefore help organizations consolidate monitoring infrastructure while preserving customer isolation, operational separation, historical visibility, SLA reporting, and tenant-specific analytics workflows.

This becomes especially important in MSP, ISP, telecom, cloud, and distributed enterprise environments where centralized operations teams monitor large numbers of independent environments in parallel.

Tenant-aware historical visibility is also critical for traffic investigations, SLA validation, subscriber analysis, long-term reporting, and operational review across distributed multitenant environments.

---

## Single-tenant vs multitenant environments
| Model | Operational characteristics |
|---|---|
| Single-tenant | Dedicated analytics deployment for one organization |
| Multitenant | Shared analytics infrastructure supporting multiple isolated tenants |
| Visibility model | Tenant-specific telemetry and operational separation |
| Administrative model | Centralized administration with tenant-aware access control |

Multitenancy reduces infrastructure duplication while introducing operational requirements involving telemetry isolation, reporting segregation, governance, and tenant-aware visibility control.

---

## In Trisul
Trisul supports multitenant operational workflows through contexts, tenant-aware visibility, flow telemetry analysis, historical traffic analytics, and role-based operational access control.

Using contexts, NetFlow, IPFIX, sFlow, J-Flow, packet analysis, and historical traffic visibility workflows, Trisul helps operators isolate customer telemetry, maintain tenant-specific operational visibility, analyze traffic behavior across multiple operational domains, and manage centralized analytics environments without requiring separate monitoring infrastructure for every tenant.

This becomes especially valuable in MSP, ISP, telecom, and distributed enterprise environments where centralized monitoring platforms must scale visibility across many isolated operational domains simultaneously.

Additional operational workflows are documented in the Trisul documentation:

[Trisul Documentation](https://docs.trisul.org/)

---

## Related terms
- [Distributed domain](/glossary/distributed-domain)
- [Context](/glossary/context)
- Role-based access control
- [MSP](/glossary/msp)
- Flow monitoring
- Historical traffic analysis

---

## Frequently asked questions
### What is multitenancy in network analytics?

Multitenancy allows a single analytics platform to support multiple isolated tenants while sharing the same underlying infrastructure.

### How does multitenancy work?

Multitenancy works by separating telemetry, dashboards, reports, alerts, and access permissions into isolated tenant-specific operational contexts.

### Who uses multitenancy?

Multitenancy is commonly used by MSPs, ISPs, telecom operators, cloud providers, and enterprises managing multiple operational domains.

### Why is multitenancy important?

Multitenancy is important because it centralizes analytics infrastructure while preserving tenant isolation, customer-specific visibility, and operational separation.