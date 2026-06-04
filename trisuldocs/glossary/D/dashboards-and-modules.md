---
title: What are dashboards and modules?
description: Dashboards and modules in Trisul Network Analytics provide organized operational workspaces and reusable analytical components for monitoring, traffic analysis, and investigative workflows.
sidebar_label: Dashboards and modules
sidebar_position: 37
slug: /glossary/dashboards-and-modules
keywords:
  - dashboards and modules
  - trisul dashboards
  - trisul modules
  - network analysis dashboard
  - module templates
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are dashboards in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dashboards in Trisul are organized monitoring workspaces that display analytical modules for traffic analysis, operational visibility, and investigative workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What are modules in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modules are reusable analytical components that display traffic charts, metrics, tables, alerts, KPIs, and investigation views inside dashboards."
      }
    },
    {
      "@type": "Question",
      "name": "Can dashboards be customized in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Operators can create dashboards, rearrange layouts, add or remove modules, customize visualizations, clone modules, and export dashboards for reuse."
      }
    },
    {
      "@type": "Question",
      "name": "Why are dashboards and modules important in network operations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dashboards and modules help operators organize telemetry, investigate traffic behavior, visualize operational conditions, and access analytical workflows without manually navigating disconnected telemetry views."
      }
    }
  ]
};

# What are dashboards and modules?

Dashboards and modules in Trisul Network Analytics provide organized operational workspaces and reusable analytical components for monitoring, traffic analysis, and investigative workflows.

Modern network environments continuously generate large volumes of telemetry, alerts, counters, flow records, traffic metrics, and operational events. Without structured operational views, operators can quickly become overwhelmed by raw telemetry volume during troubleshooting, outages, or security investigations.

Dashboards help reduce this operational complexity by organizing related telemetry and analytical views into focused monitoring workspaces that allow teams to identify abnormal traffic behavior, infrastructure instability, congestion conditions, or suspicious activity more quickly.

Modules provide the individual analytical and visualization components displayed within these dashboards. Together, dashboards and modules help operators move from high-level operational visibility into detailed investigation workflows without manually correlating unrelated telemetry across multiple interfaces.

---

## How dashboards and modules work
A dashboard in Trisul consists of multiple modules arranged across configurable layout positions within the web interface. Each module displays a specific analytical or operational view such as traffic charts, top hosts, bandwidth metrics, flow activity, alerts, historical trends, or KPI summaries.

Operators can combine multiple modules into dashboards tailored to specific operational workflows such as WAN monitoring, security investigations, ISP visibility, traffic analysis, or infrastructure troubleshooting.

Modules can also be reused across multiple dashboards and customized independently. This improves operational consistency because teams can standardize analytical views and investigative workflows without rebuilding the same monitoring components repeatedly across different dashboards.

Trisul additionally supports module templates, dashboard customization, layout rearrangement, cloning workflows, and export functionality to simplify dashboard management across operational environments.

---

## Dashboards and modules in network operations
Dashboards are important in NOC and SOC environments because operators often need to determine within seconds whether abnormal conditions are isolated, widespread, transient, or actively escalating.

During outages or traffic anomalies, teams may need to correlate alerts, traffic behavior, flow activity, historical trends, and infrastructure conditions quickly without navigating multiple disconnected interfaces. Dashboards reduce this operational friction by organizing related telemetry into focused investigative workspaces.

Modules support these workflows by exposing analytical views tied to specific operational tasks. Traffic-analysis modules, alert panels, historical charts, KPI widgets, and flow-analysis views allow operators to pivot naturally between monitoring and investigation workflows during active troubleshooting or incident analysis.

This organizational structure becomes increasingly important in large environments where operational visibility depends not only on collecting telemetry, but also on presenting that telemetry in ways that help humans interpret infrastructure behavior efficiently under pressure.

---

## Dashboards vs modules
| Category | Dashboards | Modules |
|---|---|---|
| Primary purpose | Organize operational monitoring workspaces | Display specific analytical or visualization views |
| Scope | Full monitoring and investigation layout | Individual analytical component |
| Operational role | Provide situational visibility and workflow organization | Present metrics, charts, alerts, or investigative views |
| Reusability | Contains multiple modules | Can be reused across multiple dashboards |
| Best fit | NOC, SOC, and operational visibility workflows | Specific monitoring and analytical functions |

Dashboards provide the operational workspace operators use during monitoring and investigations. Modules provide the individual analytical components displayed within those workflows.

---

## What makes dashboards and modules effective in practice
Effective dashboards prioritize operational clarity, investigative continuity, and fast navigation during incidents.

Overloaded dashboards containing excessive modules, alerts, or visual elements can increase investigation time and make it more difficult to identify the conditions that actually require escalation during outages or security events.

The most effective dashboards emphasize focused operational visibility rather than attempting to display every available metric simultaneously.

Reusable modules improve operational consistency because teams can standardize analytical workflows and visibility layouts across different dashboards without repeatedly recreating the same monitoring components.

Operational effectiveness therefore depends not only on collecting telemetry, but also on organizing analytical workflows in ways that reduce cognitive overload and help operators investigate infrastructure conditions efficiently under operational pressure.

---

## How Trisul handles dashboards and modules
Trisul includes customizable dashboards and reusable analytical modules designed for operational monitoring and traffic-analysis workflows.

Dashboards can contain multiple modules arranged across configurable layouts, while modules support different visualization types such as charts, tables, KPIs, traffic feeds, flow-analysis views, alert panels, and historical analytical views.

Operators can create dashboards, rearrange layouts, customize modules, clone analytical components, export dashboards, and build workflows tailored to traffic analysis, troubleshooting, security investigations, ISP monitoring, or operational reporting requirements.

Different Trisul deployment modes also expose different dashboards, analytical views, counters, and monitoring workflows depending on whether the environment prioritizes packet analysis, flow visibility, ISP analytics, or compliance-oriented operations.

Additional workflow details are documented in the Trisul documentation:

- [Dashboard and Module Documentation](https://docs.trisul.org/docs/ug/ui/dashmod_intro/)
- [Dashboard Creation Documentation](https://docs.trisul.org/docs/ug/ui/create_dashboards/)

---

## Related terms
- [Mode selection](/glossary/mode-selection)
- [FlowMap](/glossary/flowmap)
- Flow monitoring
- [Key Dashboard](/glossary/key-dashboard)
- Network telemetry
- Retro analysis

---

## Frequently asked questions
### What are dashboards in Trisul?

Dashboards in Trisul are organized monitoring workspaces that display analytical modules for traffic analysis, operational visibility, and investigative workflows.

### What are modules in Trisul?

Modules are reusable analytical components that display traffic charts, metrics, tables, alerts, KPIs, and investigation views inside dashboards.

### Can dashboards be customized in Trisul?

Yes. Operators can create dashboards, rearrange layouts, add or remove modules, customize visualizations, clone modules, and export dashboards for reuse.

### Why are dashboards and modules important in network operations?

Dashboards and modules help operators organize telemetry, investigate traffic behavior, visualize operational conditions, and access analytical workflows without manually navigating disconnected telemetry views.