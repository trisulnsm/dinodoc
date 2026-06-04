---
title: What is an indicator of compromise?
description: An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior.
sidebar_label: Indicator of compromise
sidebar_position: 87
slug: /glossary/indicator-of-compromise
keywords:
  - indicator of compromise
  - IoC
  - compromise indicator
  - threat intelligence
  - breach indicator
  - security signal
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an indicator of compromise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior."
      }
    },
    {
      "@type": "Question",
      "name": "What are examples of IoCs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Examples of IoCs include malicious IP addresses, suspicious domains, file hashes, unusual DNS activity, and abnormal outbound connections."
      }
    },
    {
      "@type": "Question",
      "name": "Why are IoCs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IoCs are important because they help analysts recognize known bad activity quickly. They are often used to search for evidence of compromise across logs and traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How are IoCs used in detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IoCs are used to match observed traffic or host behavior against known malicious artifacts. When a match is found, it can trigger investigation or response."
      }
    }
  ]
};

# What is an indicator of compromise?

An **indicator of compromise (IoC)** is a **sign that a system or network may have been breached or is under attack**. It is an observable artifact or pattern that suggests malicious activity, ranging from static signatures (like IP addresses or hashes) to suspicious behavior in network traffic or logs. IoCs are widely used in **threat detection, incident response, and threat‑hunting** to quickly identify and investigate potential compromises across an environment.

---

## How IoCs work
Security teams treat IoCs as **searchable markers** for malicious activity. When a known‑bad IP, domain, URL, or file hash appears in telemetry such as flows, DNS logs, proxy records, or endpoint alerts, it can trigger further investigation or automated response. Behavioral IoCs—such as **repeated connections to rare domains, unusual outbound volumes, or anomalous timing patterns**—are especially valuable because they can surface new campaigns even if the exact IP or domain has not been seen before in threat‑feed databases.

---

## IoCs in network operations
In **SOC and NOC environments**, IoCs speed up the shift from suspicion to evidence. Analysts search across **flow telemetry, DNS, firewall logs, proxy logs, and endpoint telemetry** for matches against known IoCs, then pivot to drill‑down views such as traffic‑paths, hosts, and sessions. During **incident response and threat‑hunting**, IoCs help operators **scope the impact of an attack, trace lateral movement, and sweep the environment** for related activity. Because IoCs are often machine‑readable, they integrate well with SIEMs, SOAR platforms, and flow‑based analyzers to automate detection and enrichment.

---

## Common IoC types
| Type | Example |
|------|---------|
| IP address | A known command‑and‑control server IP |
| Domain | A suspicious or newly seen phishing domain |
| Hash | A malware file hash (SHA‑256, MD5, etc.) |
| URL | A malicious web path or redirector |
| Behavior | Repeated rare‑domain lookups or beacon‑like outbound traffic |

Depending on the environment, IoCs can also include **DNS patterns, process names, registry keys, or network signatures** that correlate with known threat actors or campaigns.

---

## What makes IoCs useful
IoCs are most effective when they are **current, relevant, and contextual**. Old or stale indicators that no longer match live infrastructure may generate noise and false positives, while fresh, targeted IoCs directly improve detection quality. IoCs become even more powerful when combined with **traffic patterns, host context, and historical baselines**, so that a single match becomes part of a broader story of compromise rather than an isolated alert. Organizations that **normalize, enrich, and correlate IoCs with network telemetry** can dramatically reduce mean‑time‑to‑detect and mean‑time‑to‑investigate.

---

## How Trisul handles IoCs
Trisul helps analysts **search traffic and DNS patterns for signs of compromise** and connect suspicious indicators to real‑world network activity. Through **flow‑based telemetry (NetFlow, IPFIX, sFlow, J‑Flow)**, DNS analysis, and traffic‑pattern views, Trisul can:

- Match flows and DNS records against **IoC feeds or custom‑defined lists** (IPs, domains, URLs).  
- Highlight **hosts and services communicating with malicious destinations**.  
- Pivot from IoC matches into **detailed traffic and session views** for deeper investigation.  

This supports **threat detection, incident response, and historical hunts** where IoCs are used to rapidly sweep large volumes of historical traffic for evidence of compromise.

---

## Related terms
- [Indicator of compromise](/glossary/indicator-of-compromise)
- [Threat detection](/glossary/threat-detection)
- [Threat intelligence](/glossary/threat-intelligence)
- [DNS tunneling](/glossary/dns-tunneling)
- [Passive DNS](/glossary/passive-dns)
- [Incident response](/glossary/incident-response)

---

## Frequently asked questions
### What is an indicator of compromise?

An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior.

### What are examples of IoCs?

Examples of IoCs include malicious IP addresses, suspicious domains, file hashes, unusual DNS activity, and abnormal outbound connections.

### Why are IoCs important?

IoCs are important because they help analysts recognize known bad activity quickly. They are often used to search for evidence of compromise across logs and traffic.

### How are IoCs used in detection?

IoCs are used to match observed traffic or host behavior against known malicious artifacts. When a match is found, it can trigger investigation or response.