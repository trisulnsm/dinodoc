---
title: What is TCP?
description: TCP, or Transmission Control Protocol, is a connection-oriented transport protocol that provides reliable, ordered, and error-checked data delivery between hosts on IP networks.
sidebar_label: TCP
sidebar_position: 210
slug: /glossary/tcp
keywords:
  - TCP
  - Transmission Control Protocol
  - transport protocol
  - reliable delivery
  - retransmission
  - congestion control
  - TCP handshake
  - flow control
  - TCP vs UDP
  - RTT
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TCP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP, or Transmission Control Protocol, is a connection-oriented transport protocol that provides reliable, ordered, and error-checked data delivery between hosts on IP networks."
      }
    },
    {
      "@type": "Question",
      "name": "Why is TCP used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP is used because it ensures reliable and ordered data delivery, making it suitable for applications where delivery accuracy is important."
      }
    },
    {
      "@type": "Question",
      "name": "What does TCP handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP handles connection establishment, sequencing, retransmission, flow control, congestion control, and session termination."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between TCP and UDP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP prioritizes reliable and ordered delivery, while UDP prioritizes lower overhead and lower latency without guaranteed delivery."
      }
    }
  ]
};

# What is TCP?

**TCP (Transmission Control Protocol)** is a connection-oriented transport protocol that provides reliable, ordered, and error-checked data delivery between hosts on IP networks.

TCP is widely used for web browsing, file transfers, email, database communication, and enterprise applications where reliable communication is important.

Unlike UDP, TCP prioritizes reliable and ordered delivery instead of lower overhead or low-latency transmission.

TCP compensates for packet loss, reordering, and unreliable delivery behavior that can occur on IP networks.

---

## How TCP works
TCP establishes a connection between two hosts before exchanging data.

A typical TCP session includes:

1. **Connection establishment** using a three-way handshake:
   - SYN
   - SYN-ACK
   - ACK

2. **Data transfer** using ordered TCP segments

3. **Acknowledgment and retransmission** to recover lost packets

4. **Flow control** to regulate transmission speed

5. **Congestion control** to reduce network congestion

6. **Connection termination** using FIN and ACK exchanges

TCP maintains session state and ensures that data arrives in the correct order.

For example, if packets are lost or arrive out of order, TCP can retransmit and reorder them before delivering data to the application.

---

## TCP in network analysis
TCP visibility helps teams investigate retransmissions, packet loss, latency, resets, handshake failures, congestion, and slow application performance.

Because many application issues eventually appear as transport-layer problems, TCP analysis is important for troubleshooting network and application behavior.

Historical visibility is useful for identifying recurring retransmissions, unstable sessions, long-term latency trends, or congestion-related performance issues.

---

## Common TCP signals
| Signal | Meaning |
|---|---|
| Sequence numbers | Maintain packet ordering |
| Retransmissions | Recover lost packets |
| TCP handshake | Establish session state |
| Flow control | Regulate receiver-side transmission |
| Congestion control | Adjust traffic during congestion |
| TCP resets (RST) | Abruptly terminate sessions |
| Round-trip time (RTT) | Measure latency |

---

## Why TCP matters
TCP simplifies application communication by automatically handling retransmission, sequencing, flow control, congestion management, and connection state.

These mechanisms help applications exchange data reliably even when networks experience packet loss or congestion.

However, TCP reliability mechanisms can also increase overhead and introduce latency during packet loss or congestion events.

Teams commonly combine flow telemetry, packet analysis, and application telemetry to investigate TCP-related performance issues.

---

## In Trisul
Trisul supports TCP visibility through flow telemetry analysis, packet analysis, historical traffic visibility, and traffic investigations.

Using NetFlow, IPFIX, and packet-analysis workflows, operators can analyze TCP session behavior, investigate retransmissions, resets, latency issues, and handshake failures, correlate TCP activity with hosts and applications, and perform historical investigations associated with TCP-based services.

Additional TCP-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- What is UDP?
- [What is latency?](/glossary/latency)
- [What is TCP retransmission?](/glossary/tcp-retransmission)
- [What is network troubleshooting?](/glossary/network-troubleshooting)
- [What is Wireshark?](/glossary/wireshark)

---

## Frequently asked questions
### What is TCP?

TCP, or Transmission Control Protocol, is a connection-oriented transport protocol that provides reliable, ordered, and error-checked data delivery between hosts on IP networks.

### Why is TCP used?

TCP is used because it ensures reliable and ordered data delivery, making it suitable for applications where delivery accuracy is important.

### What does TCP handle?

TCP handles connection establishment, sequencing, retransmission, flow control, congestion control, and session termination.

### What is the difference between TCP and UDP?

TCP prioritizes reliable and ordered delivery, while UDP prioritizes lower overhead and lower latency without guaranteed delivery.

### Why does TCP retransmit packets?

TCP retransmits packets when acknowledgments are not received, helping recover from packet loss and maintain reliable communication.