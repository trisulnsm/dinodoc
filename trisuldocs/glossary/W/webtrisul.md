---
title: What is WebTrisul?
description: WebTrisul is the browser-based operational workspace of Trisul Network Analytics, providing access to monitoring, investigations, analytics, reporting, and day-to-day operational workflows.
sidebar_label: WebTrisul
sidebar_position: 246
slug: /glossary/webtrisul
keywords:
  - WebTrisul
  - Trisul web interface
  - Trisul dashboard
  - network monitoring UI
  - Trisul analytics
  - web console
  - monitoring dashboard
  - Trisul user interface
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is WebTrisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WebTrisul is the browser-based operational workspace of Trisul that allows users to access monitoring data, analytics, dashboards, investigations, reports, and other network visibility functions."
      }
    },
    {
      "@type": "Question",
      "name": "What can users do in WebTrisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users can monitor network activity, investigate traffic, analyze historical behavior, review alerts, generate reports, and access Trisul analytics workflows through a browser."
      }
    },
    {
      "@type": "Question",
      "name": "Does WebTrisul collect network traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Traffic collection, packet processing, flow analysis, and analytics generation are performed by Trisul backend components. WebTrisul presents and organizes the resulting information."
      }
    },
    {
      "@type": "Question",
      "name": "Can multiple users access WebTrisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multiple users can access WebTrisul simultaneously, subject to authentication, authorization, and role-based access controls."
      }
    },
    {
      "@type": "Question",
      "name": "Why is WebTrisul important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WebTrisul provides the interface through which operators and analysts interact with Trisul analytics. Without it, monitoring data would be significantly more difficult to explore, investigate, and interpret."
      }
    }
  ]
};

# What is WebTrisul?

**WebTrisul** is the browser-based operational workspace of Trisul Network Analytics.

It provides access to dashboards, reports, investigations, alerts, historical analysis, and analytics workflows through a web browser.

While Trisul collects, processes, and stores network telemetry behind the scenes, WebTrisul is where users interact with that information.

A useful way to think about WebTrisul is:

> **Trisul generates visibility.**
>
> **WebTrisul makes that visibility usable.**

For most users, WebTrisul is the primary environment in which monitoring, investigations, reporting, and analysis take place.

---

## Why WebTrisul matters
Monitoring platforms generate enormous amounts of information.

Packet metadata, flow records, analytics, counters, alerts, and historical measurements all provide value, but only if users can effectively access and interpret them.

Raw analytics alone are rarely useful.

Operators need a way to:

- Monitor current conditions
- Investigate problems
- Explore historical behavior
- Identify trends
- Generate reports
- Understand network activity

WebTrisul exists to provide that operational experience.

It transforms collected analytics into information that can be explored, interpreted, and acted upon.

---

## How WebTrisul works
WebTrisul acts as the presentation layer of the Trisul platform.

Backend components perform activities such as:

- Traffic collection
- Packet processing
- Flow analysis
- Analytics generation
- Data storage

WebTrisul retrieves and presents that information through dashboards, reports, visualizations, investigative tools, and analytical workflows.

This separation allows data processing and user interaction to operate as distinct functions while working together as a unified monitoring platform.

---

## WebTrisul as an operational workspace
For most organizations, WebTrisul is where day-to-day monitoring work happens.

Users move between different operational workflows such as:

### Monitoring

Viewing dashboards, traffic summaries, utilization trends, and current network activity.

### Investigation

Exploring traffic patterns, communication behavior, flow records, hosts, applications, protocols, and anomalies.

### Analysis

Comparing historical activity, reviewing trends, evaluating baselines, and understanding long-term behavior.

### Reporting

Generating reports, reviewing operational metrics, and communicating findings to stakeholders.

Because these workflows are integrated into a single interface, WebTrisul serves as the central workspace for network visibility operations.

---

## WebTrisul in network operations
Different teams often interact with WebTrisul in different ways.

Network operations teams use it to monitor performance, investigate incidents, and understand traffic behavior.

Security analysts use it to investigate anomalies, review communication patterns, and analyze suspicious activity.

Capacity planners use it to review long-term trends and evaluate infrastructure growth.

Although their objectives differ, all of these activities rely on the same operational workspace.

This allows multiple teams to work from a common source of visibility.

---

## WebTrisul vs Trisul Backend
| Category | WebTrisul | Trisul Backend |
|----------|----------|----------|
| Primary role | User interaction and investigation | Data collection and processing |
| Purpose | Visibility and operational workflows | Analytics generation and storage |
| User access | Direct | Typically indirect |
| Interface type | Browser-based | Services and processing components |
| Focus | Monitoring, analysis, and reporting | Collection, analytics, and retention |
| Best fit | Human interaction with analytics | Data processing infrastructure |

The backend creates visibility.

WebTrisul allows users to explore and understand that visibility.

Both are essential parts of the platform.

---

## What makes an effective monitoring interface?
A monitoring interface should help users move quickly from high-level observations to detailed investigations.

For example, users may begin with a dashboard showing unusual activity and then drill into:

- Hosts
- Applications
- Protocols
- Flow records
- Historical behavior

An effective interface reduces the effort required to move between these levels of analysis.

It should also support role-based access controls, historical visibility, reporting workflows, and efficient navigation between different analytical perspectives.

The goal is not simply to display information, but to help users turn information into understanding.

---

## In Trisul
WebTrisul is the primary operational interface of Trisul Network Analytics.

It provides access to dashboards, reports, alerts, investigations, historical analysis, flow analytics, Counter Groups, Trisul applications, and other platform capabilities through a unified browser-based experience.

By bringing together multiple analytical workflows in a single interface, WebTrisul helps operators, analysts, and administrators transform collected network data into actionable operational insight.

Rather than performing analytics itself, WebTrisul serves as the environment where those analytics are explored, interpreted, and used for decision-making.

---

## Related terms
- Dashboard
- Flow analytics
- [Traffic investigation](/glossary/traffic-investigation)
- Trisul AI
- [AAA](/glossary/aaa)
- [LDAP](/glossary/ldap)
- [Multi-factor authentication](/glossary/multi-factor-authentication)
- [High security mode](/glossary/high-security-mode)

---

## Frequently asked questions
### What is WebTrisul?

WebTrisul is the browser-based operational workspace of Trisul that allows users to access monitoring data, analytics, dashboards, investigations, reports, and other network visibility functions.

### What can users do in WebTrisul?

Users can monitor network activity, investigate traffic, analyze historical behavior, review alerts, generate reports, and access Trisul analytics workflows through a browser.

### Does WebTrisul collect network traffic?

No. Traffic collection, packet processing, flow analysis, and analytics generation are performed by Trisul backend components. WebTrisul presents and organizes the resulting information.

### Can multiple users access WebTrisul?

Yes. Multiple users can access WebTrisul simultaneously, subject to authentication, authorization, and role-based access controls.

### Why is WebTrisul important?

WebTrisul provides the interface through which operators and analysts interact with Trisul analytics. Without it, monitoring data would be significantly more difficult to explore, investigate, and interpret.

### Is WebTrisul the same as Trisul?

No. WebTrisul is the user interface component of Trisul. The underlying platform includes the collection, processing, analytics, and storage systems that generate the information displayed within WebTrisul.