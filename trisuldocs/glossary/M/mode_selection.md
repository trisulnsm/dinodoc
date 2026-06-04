---
title: What is mode selection?
description: Mode selection in Trisul Network Analytics is the process of choosing the operational analytics mode that best aligns with deployment scale, telemetry requirements, retention strategy, and investigative workflows.
sidebar_label: Mode selection
sidebar_position: 118
slug: /glossary/mode-selection
keywords:
  - mode selection
  - trisul mode selection
  - product mode selector
  - trisul product mode
  - trisul deployment mode
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is mode selection important in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mode selection determines how Trisul prioritizes telemetry collection, analytics workflows, dashboards, retention behavior, and operational visibility. Selecting the correct mode helps align the deployment with scalability, investigation depth, and monitoring objectives."
      }
    },
    {
      "@type": "Question",
      "name": "What modes are available in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul provides Packet Mode, NetFlow Mode, ISP Analytics, and IPDR Compliance modes. Each mode is optimized for different operational requirements such as packet analysis, scalable flow visibility, carrier analytics, or compliance-focused deployments."
      }
    },
    {
      "@type": "Question",
      "name": "Can the selected mode be changed later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Operators can re-enable the Product Mode Selector through the Web Admin interface and modify the deployment mode if operational requirements change later."
      }
    },
    {
      "@type": "Question",
      "name": "Does mode selection affect operational visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Different modes prioritize different visibility models, telemetry workflows, retention strategies, and analytics behavior depending on whether the environment focuses on packet analysis, flow monitoring, ISP analytics, or compliance operations."
      }
    }
  ]
};

# What is mode selection?

Mode selection in Trisul Network Analytics is the process of choosing the operational analytics mode that best aligns with deployment scale, telemetry requirements, retention strategy, and investigative workflows.

The selected mode determines how Trisul prioritizes traffic visibility, telemetry processing, dashboards, counters, retention behavior, and operational analysis workflows throughout the deployment.

This decision is operationally important because different environments require fundamentally different visibility models. Packet-analysis deployments prioritize deep forensic visibility and traffic reconstruction, while flow-oriented environments prioritize scalable traffic analytics and long-term retention efficiency across large infrastructure environments.

Selecting the wrong mode can create operational blind spots, unnecessary processing overhead, inefficient storage utilization, or investigative limitations that only become obvious later during troubleshooting, threat hunting, or compliance investigations.

---

## How mode selection works
Trisul includes a Product Mode Selector that allows operators to configure the platform for different monitoring and analytics objectives.

The available modes are:
- Packet Mode
- NetFlow Mode
- ISP Analytics
- IPDR Compliance

Each mode enables different telemetry workflows optimized for specific operational goals.

Packet-focused deployments prioritize deep traffic inspection, protocol analysis, and forensic reconstruction workflows where detailed visibility into packet behavior is operationally important.

Flow-focused deployments prioritize scalable visibility across large environments by analyzing summarized traffic telemetry rather than retaining full packet payloads. This approach significantly reduces storage and processing overhead while preserving long-term communication visibility.

ISP Analytics mode emphasizes carrier-scale workflows such as ASN visibility, peering analysis, routing-aware traffic investigation, and large-scale infrastructure monitoring.

IPDR Compliance mode focuses on regulatory retention, subscriber attribution, and compliance-oriented operational workflows where record preservation and retention integrity become critical.

Rather than functioning as a simple UI preference, mode selection changes the telemetry philosophy of the deployment by determining how traffic visibility, retention strategy, analytics depth, and operational workflows are prioritized across the environment.

---

## Mode selection in network operations
Different operational environments face very different visibility and scaling requirements.

Enterprise troubleshooting and threat-hunting environments may require deep packet visibility to reconstruct application behavior, investigate suspicious communication patterns, or perform forensic analysis after a security incident.

Large ISP and carrier environments, however, often prioritize scalable telemetry retention and routing-aware visibility across massive traffic volumes where full packet retention would become operationally impractical.

Compliance-focused deployments may prioritize subscriber attribution, long-term record retention, and auditability over deep packet inspection or protocol reconstruction.

These differences significantly affect infrastructure requirements, storage behavior, telemetry processing, and operational workflows. Packet-centric deployments typically require substantially more storage and processing capacity because they preserve deeper traffic detail, while flow-centric deployments trade packet-level reconstruction for scalable long-term visibility across distributed environments.

Mode selection therefore helps organizations align telemetry collection and operational analysis with the actual visibility problems they are trying to solve.

---

## Mode selection vs deployment configuration
| Category | Mode selection | Deployment configuration |
|---|---|---|
| Primary purpose | Select operational analytics model | Configure platform behavior |
| Operational focus | Visibility depth, telemetry strategy, analytics workflows | System tuning and policy management |
| Infrastructure impact | Affects retention, processing, and telemetry workflows | Affects runtime behavior and optimization |
| Visibility model | Packet analysis, flow visibility, ISP analytics, or compliance workflows | Adjusts how the selected model operates |
| Best fit | Aligning deployments with operational objectives | Managing operational behavior after deployment |

Mode selection determines the architectural direction of the deployment. Configuration settings determine how the selected operational model behaves within the environment.

---

## What makes mode selection effective in practice
Effective mode selection depends on understanding how operational priorities evolve over time.

Organizations often begin with flow-oriented monitoring because it scales efficiently across large environments and supports long-term traffic visibility with lower storage requirements. As environments mature, teams may later introduce packet-analysis workflows when troubleshooting, incident response, malware analysis, or forensic investigations require deeper traffic visibility.

Similarly, ISP-scale deployments may prioritize routing visibility and ASN analytics, while compliance-focused environments optimize around subscriber attribution, retention policies, and record preservation requirements.

Selecting the appropriate mode early helps organizations avoid costly telemetry redesign, inefficient storage allocation, or operational limitations that may otherwise emerge later when traffic volumes, investigation depth, or compliance requirements increase.

Mode selection therefore works best when deployment objectives, visibility requirements, retention strategy, and long-term operational workflows are evaluated together rather than independently.

---

## How Trisul handles mode selection
Trisul uses mode selection to align telemetry collection, analysis workflows, retention behavior, dashboards, and operational visibility with the intended deployment objective.

This allows packet-analysis environments, flow-monitoring deployments, ISP-scale analytics systems, and compliance-oriented installations to optimize the platform differently based on infrastructure scale, telemetry depth, retention requirements, and operational workflows.

Instead of forcing every environment into a single analytics model, Trisul allows deployments to specialize around the visibility model most relevant to the organization’s operational priorities.

Operators can later re-enable the Product Mode Selector through the Web Admin interface if monitoring requirements evolve or deployment objectives change over time.

Additional configuration details are documented in the Trisul documentation:

[Trisul Web Admin Documentation](https://docs.trisul.org/docs/ag/webadmin/web_options/)

---

## Related terms
- NetFlow
- [Full packet capture](/glossary/full-packet-capture)
- [IPDR](/glossary/ipdr)
- ISP analytics
- Flow monitoring
- Network telemetry

---

## Frequently asked questions
### Why is mode selection important in Trisul?

Mode selection determines how Trisul prioritizes telemetry collection, analytics workflows, dashboards, retention behavior, and operational visibility. Selecting the correct mode helps align the deployment with scalability, investigation depth, and monitoring objectives.

### What modes are available in Trisul?

Trisul provides Packet Mode, NetFlow Mode, ISP Analytics, and IPDR Compliance modes. Each mode is optimized for different operational requirements such as packet analysis, scalable flow visibility, carrier analytics, or compliance-focused deployments.

### Can the selected mode be changed later?

Yes. Operators can re-enable the Product Mode Selector through the Web Admin interface and modify the deployment mode if operational requirements change later.

### Does mode selection affect operational visibility?

Yes. Different modes prioritize different visibility models, telemetry workflows, retention strategies, and analytics behavior depending on whether the environment focuses on packet analysis, flow monitoring, ISP analytics, or compliance operations.