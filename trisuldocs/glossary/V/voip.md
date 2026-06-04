---
title: What is VoIP?
description: VoIP, or Voice over Internet Protocol, is the delivery of voice communications over IP networks instead of traditional circuit-switched telephone networks. Because voice traffic is highly sensitive to latency, jitter, and packet loss, VoIP quality depends heavily on network performance.
sidebar_label: VoIP
sidebar_position: 241
slug: /glossary/voip
keywords:
  - VoIP
  - voice over IP
  - internet calling
  - call quality
  - jitter
  - packet loss
  - SIP
  - RTP
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is VoIP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP, or Voice over Internet Protocol, is the delivery of voice communications over IP networks instead of traditional circuit-switched telephone networks. VoIP quality depends heavily on latency, jitter, packet loss, and network stability."
      }
    },
    {
      "@type": "Question",
      "name": "What affects VoIP quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP quality is affected by latency, jitter, packet loss, congestion, routing issues, QoS effectiveness, and overall network stability."
      }
    },
    {
      "@type": "Question",
      "name": "Why is VoIP sensitive to network issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP is a real-time application that cannot tolerate significant delays, packet loss, or excessive variation in packet arrival times. Even small network problems can affect call quality."
      }
    }
  ]
};

# What is VoIP?

**VoIP (Voice over Internet Protocol)** is the delivery of voice communications over IP networks instead of traditional circuit-switched telephone networks.

Rather than using dedicated telephone circuits, VoIP converts voice into IP packets and transports them across enterprise networks, broadband connections, mobile networks, and the Internet.

VoIP is one of the most common examples of real-time network traffic. Unlike web browsing or file transfers, voice traffic is highly sensitive to latency, jitter, packet loss, and network instability. As a result, call quality problems can occur even when bandwidth utilization appears normal.

## How VoIP works
VoIP systems convert audio into digital packets and transmit them across an IP network.

A typical VoIP session uses signaling protocols such as SIP to establish and manage calls, while media protocols such as RTP carry the voice traffic between endpoints.

Because voice communication occurs in real time, packets must arrive consistently and with minimal delay variation. Excessive latency, packet loss, or jitter can quickly degrade call quality and affect the user experience.

## VoIP in network operations
VoIP is closely tied to network performance because users immediately notice service degradation.

Common symptoms include:

- Choppy or distorted audio
- Delayed conversations
- Audio dropouts
- One-way audio
- Failed call setup

Unlike many applications, VoIP problems often appear before bandwidth becomes fully utilized. A network may appear healthy from a utilization perspective while still delivering poor voice quality due to latency, jitter, routing instability, or QoS issues.

For this reason, VoIP troubleshooting focuses on performance metrics rather than bandwidth consumption alone.

## What makes VoIP monitoring effective?
Effective VoIP monitoring requires visibility into both signaling activity and the network conditions that affect voice traffic.

Latency, jitter, packet loss, QoS effectiveness, and call setup performance all contribute to the user experience. Monitoring these factors helps operators identify the conditions responsible for degraded call quality and understand whether issues originate from the network, the application, or the underlying infrastructure.

Historical visibility is particularly valuable because intermittent voice-quality problems can be difficult to investigate after a call has ended.

## In Trisul
VoIP monitoring is highly relevant to Trisul Network Analytics because voice traffic is sensitive to network performance and service quality.

Trisul helps operators analyze VoIP-related traffic, investigate latency, jitter, packet loss, and traffic behavior, and correlate network conditions with call-quality issues. Using packet analytics, flow telemetry, and historical traffic visibility, operators can move from user-reported symptoms to the underlying conditions responsible for degraded voice performance.

These workflows are commonly used for VoIP troubleshooting, QoS validation, performance monitoring, and operational investigations.

For flow monitoring and traffic analytics guidance, see the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- Real-time traffic
- Jitter
- [Packet loss](/glossary/packet-loss)
- [Quality of Service (QoS)](/glossary/qos)
- [Network performance monitoring](/glossary/network-performance-monitoring)

---

## Frequently asked questions
### What is VoIP?

VoIP, or Voice over Internet Protocol, is the delivery of voice communications over IP networks instead of traditional circuit-switched telephone networks. VoIP quality depends heavily on latency, jitter, packet loss, and network stability.

### What affects VoIP quality?

VoIP quality is affected by latency, jitter, packet loss, congestion, routing issues, QoS effectiveness, and overall network stability.

### Why is VoIP sensitive to network issues?

VoIP is a real-time application that cannot tolerate significant delays, packet loss, or excessive variation in packet arrival times. Even small network problems can affect call quality.