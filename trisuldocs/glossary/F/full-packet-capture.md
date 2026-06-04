---
title: What is full packet capture?
description: Full packet capture (PCAP) is the practice of recording complete network packets, including headers and payload where visible, for troubleshooting, traffic analysis, forensic investigation, and security monitoring.
sidebar_label: Full packet capture
sidebar_position: 69
slug: /glossary/full-packet-capture
keywords:
  - full packet capture
  - pcap
  - network packet capture
  - packet forensics
  - raw packet capture
  - network forensics
  - packet analysis
  - deep packet inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much storage does full packet capture require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Storage requirements depend on link speed, utilization, traffic composition, retention goals, and capture policies. High-speed links can generate very large volumes of data, so organizations commonly use filtering, tiered storage, selective retention, or rolling capture windows to manage storage consumption."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between full packet capture and NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow and IPFIX summarize communications using flow metadata such as addresses, ports, byte counts, and timestamps. Full packet capture preserves the actual packets observed on the network, enabling deeper protocol analysis and packet-level investigation. The two approaches are complementary and are often used together."
      }
    },
    {
      "@type": "Question",
      "name": "Does full packet capture work with encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture records encrypted traffic exactly as it appears on the wire. While encrypted payloads remain unreadable without decryption capabilities or session keys, analysts can still observe metadata such as addresses, protocols, TLS handshakes, certificates, timing, and traffic behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Why is packet loss a concern in PCAP deployments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dropped packets reduce investigative accuracy because the retained capture no longer reflects the complete communication sequence. High-speed environments require careful capture architecture, storage planning, and monitoring to minimize packet loss during sustained traffic loads."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support full packet capture workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports full packet capture workflows through packet recording, indexed traffic analysis, Explore Flows investigations, historical querying, PF_RING integration, and packet-to-flow correlation workflows for operational troubleshooting and incident investigation."
      }
    }
  ]
};

# What is full packet capture?

**Full packet capture (PCAP)** is the practice of recording complete network packets, including headers and payload where visible, for troubleshooting, traffic analysis, forensic investigation, and security monitoring. Unlike flow telemetry (such as NetFlow or IPFIX), which summarizes conversations into compact metadata records, **full packet capture preserves the raw packets themselves**, enabling deep inspection of protocols, payloads, and low‑level behavior. This makes PCAP especially valuable for **incident‑confirmation, protocol debugging, and forensic‑grade analysis**, but at the cost of much higher **storage and processing requirements**.

---

## How full packet capture works
PCAP systems observe traffic from **TAPs, SPAN/mirror ports, virtual taps**, or **inline capture devices**, copying the data into a recording engine that writes it to disk or fast storage. Capture is typically stored in **PCAP or PCAPNG** files, which bundle raw frames with timestamps and metadata. The workflow is: **traffic observation → capture → timestamping → indexing → historical analysis**. Indexing allows analysts to search by time, IP, port, protocol, or application, then replay specific flows or sessions directly from the recorded packets. At higher speeds, specialized capture frameworks (such as PF_RING or similar) are used to minimize packet loss and maintain wire‑rate fidelity.

---

## Full packet capture in network operations
In **SOC** environments, PCAP is central to **incident‑response, malware analysis, threat hunting, and exfiltration investigations**, because it lets analysts replay TLS handshakes, dissect protocol exchanges, and inspect application‑level payloads where they are visible. In **NOC** workflows, it supports **application‑troubleshooting, TCP‑level analysis, latency investigations, and handshake‑debugging**, since operators can inspect retransmissions, connection resets, and subtle protocol behaviors that flow‑only visibility would miss. In **compliance and audit** contexts, PCAP provides **long‑term evidence storage** for forensic‑grade reviews, though organizations must balance this with privacy, retention, and storage constraints.

---

## Full packet capture vs NetFlow
**Full packet capture** gives **packet‑level fidelity**, preserving Ethernet, IP, TCP/UDP, and application‑layer payloads so analysts can deeply inspect protocols and reconstruct sessions exactly as they appeared on the wire. **NetFlow / IPFIX** summarize communications into **metadata records** (who talked to whom, for how long, how much data) that are far more compact and easier to retain at scale. In practice, teams use **flow telemetry for broad trending and detection** and **PCAP for targeted, deep‑dive forensics**, often with workflows that pivot from a flow record into the corresponding packet capture for validation.

---

## Encrypted traffic and packet capture
PCAP records encrypted traffic **exactly as it appears on the wire**, so **application‑layer payloads remain encrypted and unreadable** without decryption (such as TLS‑interception infrastructure, session keys, or endpoint‑level decryption). Even locked away, encrypted packets still provide **addresses, ports, protocol metadata, timing, TLS certificates, and handshake patterns**, which analysts can use to detect anomalies, reconstructions, and C2‑like behavior. To gain true content‑level visibility, PCAP must be combined with **decryption workflows** that have access to the necessary keys or proxies, turning the captured stream into a form that can be replayed and inspected in clear text.

---

## Operational considerations
PCAP deployments are constrained primarily by **storage density, sustained capture performance, and packet‑loss avoidance**. High‑speed links can generate terabytes of data per day, forcing teams to adopt **tiered storage, selective retention, filtering rules, and rolling capture windows** to keep costs and retrieval times manageable. Packet loss must be minimized because **missing frames distort timelines, break protocol reconstruction, and reduce investigative confidence**; this often requires dedicated capture cards, optimized buffers, and careful placement at key chokepoints. Other factors such as **time‑synchronization, encryption, privacy, and regulatory compliance** also shape how and where PCAP is deployed.

---

## How Trisul handles full packet capture
Trisul supports **full packet capture and indexed analysis** by integrating **packet recording, storage, and search workflows** with its **historical flow‑ and packet‑level investigation** capabilities. It can record packets on‑premises or via PF_RING‑style interfaces, index them by time, IP, and application, and then let operators pivot from **Explore Flows** views into the underlying PCAP for each session. This enables **operational troubleshooting**, **incident investigations**, and **threat‑analysis** without switching tools. Trisul pairs PCAP with **flow tagging, correlation, and traffic‑analysis dashboards**, so analysts can first narrow down interesting flows and then drill into the packets that explain them—a blend of **metadata‑scale visibility** and **forensic‑grade detail**.

---

## Related terms
- [Full packet capture](/glossary/full-packet-capture)
- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [Flow tagger](/glossary/flow-tagger)
- [Retro analysis](/glossary/retro-analysis)
- [Network security monitoring](/glossary/network-security-monitoring)
- [Deep packet inspection](/glossary/dpi)
- sFlow  
- [Flow tracker](/glossary/flow-tracker)

---

## Frequently asked questions
### How much storage does full packet capture require?

Storage requirements depend on link speed, utilization, traffic composition, retention goals, and capture policies. High‑speed links can generate very large volumes of data, so organizations commonly use filtering, tiered storage, selective retention, or rolling capture windows to manage storage consumption.

### What is the difference between full packet capture and NetFlow?

NetFlow and IPFIX summarize communications using flow metadata such as addresses, ports, byte counts, and timestamps. Full packet capture preserves the actual packets observed on the network, enabling deeper protocol analysis and packet‑level investigation. The two approaches are complementary and are often used together.

### Does full packet capture work with encrypted traffic?

Packet capture records encrypted traffic exactly as it appears on the wire. While encrypted payloads remain unreadable without decryption capabilities or session keys, analysts can still observe metadata such as addresses, protocols, TLS handshakes, certificates, timing, and traffic behavior.

### Why is packet loss a concern in PCAP deployments?

Dropped packets reduce investigative accuracy because the retained capture no longer reflects the complete communication sequence. High‑speed environments require careful capture architecture, storage planning, and monitoring to minimize packet loss during sustained traffic loads.

### How does Trisul support full packet capture workflows?

Trisul supports full packet capture workflows through packet recording, indexed traffic analysis, Explore Flows investigations, historical querying, PF_RING integration, and packet‑to‑flow correlation workflows for operational troubleshooting and incident investigation.