---
title: What is RTP?
description: RTP, or Real-time Transport Protocol, is an application-layer protocol used to transport realtime audio, video, and interactive media streams across IP networks.
sidebar_label: RTP
sidebar_position: 186
slug: /glossary/rtp
keywords:
  - RTP
  - Real-time Transport Protocol
  - voice transport
  - video transport
  - realtime media
  - media streaming
  - VoIP
  - RTCP
  - jitter
  - realtime audio
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is RTP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP, or Real-time Transport Protocol, is an application-layer protocol used to transport realtime audio, video, and interactive media streams across IP networks."
      }
    },
    {
      "@type": "Question",
      "name": "What is RTP used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is used for voice, video, conferencing, streaming, and other time-sensitive media applications where low latency and continuous playback are important."
      }
    },
    {
      "@type": "Question",
      "name": "Why is RTP important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is important because it provides sequence numbering and timing information required for realtime media delivery across IP networks, helping receivers reconstruct audio and video streams correctly despite network variability."
      }
    },
    {
      "@type": "Question",
      "name": "How is RTP monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is monitored by analyzing packet timing, jitter, packet loss, latency, sequence behavior, and RTCP statistics to evaluate voice and video quality."
      }
    }
  ]
};

# What is RTP?

**RTP (Real-time Transport Protocol)** is an application-layer protocol used to transport realtime audio, video, and interactive media streams across IP networks.

RTP is widely used in VoIP, video conferencing, unified communications, media streaming, telepresence, and realtime collaboration environments where low latency and continuous media delivery are important.

RTP is defined in RFC 3550 and is commonly used together with signaling and session-control protocols such as SIP, H.323, WebRTC-related frameworks, and RTCP (RTP Control Protocol).

---

## How RTP works
RTP transports realtime media streams using packet-based delivery across IP networks.

Unlike TCP-based communication, RTP generally prioritizes timely delivery over retransmission because delayed media packets may no longer be useful for realtime playback.

RTP commonly operates over UDP and includes metadata fields such as sequence numbers, timestamps, payload-type identifiers, and synchronization information.

RTP packets carry encoded media streams together with sequence and timing information that helps receivers reconstruct audio or video playback in the correct order and timing.

RTP timestamps help synchronize audio and video playback timing across realtime media sessions.

Because realtime media is sensitive to delay, RTP generally favors continuous playback over retransmission of delayed packets.

RTP is designed to maintain smooth realtime playback even when some packets are delayed or lost during transmission.

Many realtime applications also use jitter buffers to smooth variations in packet arrival timing before media playback.

For example, during a VoIP call, RTP packets continuously carry encoded voice data between participants while RTCP provides feedback about call quality, packet delivery behavior, jitter, and packet loss.

RTP is commonly paired with RTCP, which provides feedback about media quality, latency, packet loss, jitter, and session statistics.

---

## RTP in network operations
RTP is commonly used for VoIP communications, video conferencing, unified communications, telepresence, interactive collaboration platforms, and IP-based media streaming.

Operators commonly investigate jitter, packet loss, latency spikes, one-way audio problems, delayed speech, audio clipping, video freezing, RTP stream instability, and QoS-related congestion problems affecting media quality.

Because realtime media traffic is highly sensitive to latency variation and packet timing, even moderate congestion or unstable network conditions can noticeably degrade voice and video quality.

Realtime media problems may appear as robotic voice distortion, delayed audio, choppy playback, frozen video, synchronization problems, or interrupted communication sessions.

Historical visibility is especially useful for investigating intermittent media-quality degradation, recurring VoIP instability, congestion-related RTP problems, or infrastructure issues affecting realtime communication behavior.

---

## Common RTP signals
| Signal | Meaning |
|---|---|
| Sequence number | Identifies packet ordering and missing packets |
| Timestamp | Synchronizes realtime media playback timing |
| Jitter | Variation in packet arrival timing |
| Packet loss | Missing media packets affecting playback quality |
| Payload type | Identifies codec or media format information |
| RTCP statistics | Feedback about media quality and session behavior |

Media quality depends on latency, congestion, packet delivery consistency, jitter-buffer behavior, codec performance, and QoS handling.

---

## Benefits and challenges of RTP
RTP supports low-latency media delivery, realtime communication, interactive collaboration, and efficient voice and video transport across IP networks.

However, RTP traffic is highly sensitive to jitter, packet loss, congestion, unstable routing behavior, poor QoS handling, NAT traversal problems, and timing inconsistencies.

Organizations commonly combine packet analysis, flow telemetry, QoS visibility, RTCP statistics, latency analysis, jitter analysis, and historical traffic visibility to investigate degraded media quality.

Correlating these telemetry sources helps operators determine whether degraded voice or video quality originates from congestion, routing instability, packet loss, jitter, infrastructure limitations, or application-related issues.

---

## In Trisul
Trisul supports RTP-related traffic analysis through flow telemetry analysis, packet analysis, realtime traffic visibility, historical traffic investigations, and VoIP-related troubleshooting workflows.

Using packet analysis, NetFlow, IPFIX, QoS-related telemetry, and historical traffic analysis, operators can identify RTP media streams, investigate jitter, latency, packet loss, retransmissions, and RTP-stream instability, correlate media behavior with hosts, interfaces, and applications, troubleshoot degraded VoIP or video quality, and perform historical investigations associated with realtime communication problems across enterprise, ISP, telecom, unified-communications, and collaboration environments.

Additional traffic-analysis and packet-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What is VoIP?](/glossary/voip)
- What is RTCP?
- What is jitter?
- [What is QoS?](/glossary/qos)
- What is realtime traffic?

---

## Frequently asked questions
### What is RTP?

RTP, or Real-time Transport Protocol, is an application-layer protocol used to transport realtime audio, video, and interactive media streams across IP networks.

### What is RTP used for?

RTP is used for voice, video, conferencing, streaming, and other time-sensitive media applications where low latency and continuous playback are important.

### Why is RTP important?

RTP is important because it provides sequence numbering and timing information required for realtime media delivery across IP networks, helping receivers reconstruct audio and video streams correctly despite network variability.

### How is RTP monitored?

RTP is monitored by analyzing packet timing, jitter, packet loss, latency, sequence behavior, and RTCP statistics to evaluate voice and video quality.

### Why does RTP usually use UDP instead of TCP?

RTP usually uses UDP because realtime media prioritizes timely delivery over retransmission. Delayed packets are often less useful than continuous playback in voice and video communication.

### What is a jitter buffer?

A jitter buffer temporarily stores RTP packets to smooth variations in packet arrival timing before media playback, helping reduce audio distortion and playback instability caused by jitter.