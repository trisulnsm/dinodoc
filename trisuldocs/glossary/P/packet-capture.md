---
title: What is packet capture?
description: Packet capture (PCAP) records network packets for troubleshooting, protocol inspection, traffic analysis, security investigations, and historical forensic analysis using packet-level visibility.
sidebar_label: Packet capture
sidebar_position: 155
slug: /glossary/packet-capture
keywords:
  - packet capture
  - PCAP
  - network packet capture
  - packet forensics
  - raw packet capture
  - network forensics
  - packet visibility
  - protocol inspection
  - packet analysis
  - PCAP analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture (PCAP) records network packets for troubleshooting, protocol inspection, traffic analysis, security investigations, and historical forensic analysis using packet-level visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How does packet capture work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture collects traffic from TAPs, SPAN ports, or capture interfaces and stores packets in formats such as PCAP or PCAPNG for later analysis. Captured traffic may include headers, metadata, and depending on visibility, packet payloads."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between packet capture and flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring summarizes communication behavior using metadata such as addresses, ports, and traffic volume, while packet capture preserves packet-level communication details for deeper troubleshooting and protocol analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Does packet capture work on encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture records encrypted traffic exactly as it appears on the network. Even when payloads are encrypted, operators can still analyze metadata, TLS handshakes, timing behavior, retransmissions, certificates, and communication patterns."
      }
    }
  ]
};

# What is packet capture?

**Packet capture (PCAP)** records network packets for troubleshooting, protocol inspection, traffic analysis, security investigations, and historical forensic analysis using packet-level visibility.

Packet capture preserves traffic exactly as it traverses the network, allowing operators to inspect protocol behavior, retransmissions, communication patterns, packet timing, and application interactions in detail.

Because packet capture records actual network communication instead of summarized telemetry alone, it can reveal issues that may not be visible through flow records or infrastructure metrics.

Packet capture is widely used in enterprise, ISP, telecom, cloud, security-monitoring, and troubleshooting environments where detailed traffic visibility is required.

---

## How packet capture works
Packet capture collects traffic from monitored interfaces or network links using TAPs, SPAN or mirror ports, virtual traffic mirroring, or embedded capture interfaces.

Captured packets are commonly stored in formats such as PCAP or PCAPNG for later analysis, troubleshooting, protocol inspection, or forensic investigations.

Depending on deployment requirements, capture systems may support filtering, timestamping, selective retention, distributed storage, or high-speed packet recording workflows.

Packet capture is especially valuable because it preserves historical communication activity that can later be reviewed during troubleshooting or security investigations.

For example, a flow record may show that traffic reached a server, while packet capture can reveal retransmissions, TLS negotiation failures, DNS delays, malformed packets, or application errors affecting the session.

Even when payloads are encrypted, packet captures can still reveal timing behavior, TLS handshakes, certificates, retransmissions, communication patterns, and protocol activity.

---

## Packet capture in network operations
Packet capture is commonly used for troubleshooting, protocol debugging, security investigations, incident response, DNS analysis, VoIP troubleshooting, and forensic investigations.

Because packet-level visibility shows how communication actually occurred across the network, packet capture is often used when summarized telemetry does not provide enough detail to explain failures or abnormal behavior.

Operators commonly investigate:

- Retransmissions and packet loss
- TLS handshake failures
- DNS resolution problems
- High latency and unstable sessions
- Protocol violations and malformed packets
- Application communication failures
- Suspicious or unexpected traffic behavior

Historical packet visibility is especially useful for investigating intermittent failures and communication issues that may not appear during real-time analysis alone.

---

## Packet capture vs flow monitoring
| Dimension | Packet capture | Flow monitoring |
|---|---|---|
| Data collected | Packet-level traffic and protocol details | Aggregated flow metadata and traffic summaries |
| Visibility depth | Detailed protocol and communication visibility | Traffic patterns, utilization, and communication summaries |
| Storage requirements | High storage and retention requirements | Lower storage footprint |
| Common use cases | Troubleshooting, forensics, protocol analysis | Monitoring, trending, anomaly analysis |
| Historical analysis | High-detail replay and investigation visibility | Long-term traffic and usage visibility |

Packet capture and flow monitoring are commonly used together because they provide different levels of traffic visibility.

---

## Challenges in packet capture
Effective packet capture depends on reliable traffic visibility, accurate timestamps, scalable storage, and efficient investigation workflows.

Common challenges include encrypted traffic, high-volume packet storage, packet loss during capture, long-term retention requirements, distributed monitoring environments, and high-speed traffic visibility.

Organizations commonly improve packet visibility by combining packet capture with flow telemetry, DNS visibility, infrastructure metrics, historical traffic analysis, and security logs.

Correlating packet-level visibility with broader telemetry helps operators investigate both detailed protocol behavior and larger traffic patterns across the network.

---

## In Trisul
Trisul supports packet-capture workflows through packet analysis, protocol visibility, flow telemetry correlation, and historical traffic investigations.

Using packet capture together with NetFlow, IPFIX, sFlow, DNS visibility, and historical traffic analysis workflows, operators can investigate packet-level communication behavior, analyze retransmissions and anomalies, correlate packets with flows and applications, and perform historical traffic investigations across enterprise, ISP, telecom, WAN, and distributed environments.

Additional packet-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/caps/

---

## Related terms
- [What is packet analysis?](/glossary/packet-analysis)
- [What is full packet capture?](/glossary/full-packet-capture)
- What is flow monitoring?
- [What is a network TAP?](/glossary/network-tap)
- [What is network forensics?](/glossary/network-forensics)

---

## Frequently asked questions
### What is packet capture?

Packet capture (PCAP) records network packets for troubleshooting, protocol inspection, traffic analysis, security investigations, and historical forensic analysis using packet-level visibility.

### How does packet capture work?

Packet capture collects traffic from TAPs, SPAN ports, or capture interfaces and stores packets in formats such as PCAP or PCAPNG for later analysis. Captured traffic may include headers, metadata, and depending on visibility, packet payloads.

### What is the difference between packet capture and flow monitoring?

Flow monitoring summarizes communication behavior using metadata such as addresses, ports, and traffic volume, while packet capture preserves packet-level communication details for deeper troubleshooting and protocol analysis.

### Does packet capture work on encrypted traffic?

Packet capture records encrypted traffic exactly as it appears on the network. Even when payloads are encrypted, operators can still analyze metadata, TLS handshakes, timing behavior, retransmissions, certificates, and communication patterns.

### Why is packet capture useful for troubleshooting?

Packet capture helps operators inspect how communication actually occurred across the network, making it useful for investigating retransmissions, DNS failures, latency issues, protocol errors, and application communication problems.

### Why is packet capture important for forensic investigations?

Packet capture preserves historical communication activity, allowing operators and security teams to review traffic behavior and investigate incidents after they occur.