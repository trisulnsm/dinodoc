---
title: What is queueing in networking?
description: Queueing is the temporary holding of packets when a device or link cannot forward them immediately. Queueing is a normal part of packet forwarding, but excessive queue buildup can increase latency, jitter, congestion, and packet loss.
sidebar_label: Queueing
sidebar_position: 175
slug: /glossary/queueing
keywords:
  - queueing
  - packet queue
  - buffering
  - congestion
  - latency
  - jitter
  - queue management
  - traffic shaping
  - bufferbloat
  - QoS
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is queueing in networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing is the temporary holding of packets when a device or link cannot forward them immediately. Queueing is a normal part of packet forwarding, but excessive queue buildup can increase latency, jitter, congestion, and packet loss."
      }
    },
    {
      "@type": "Question",
      "name": "Why does queueing happen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing happens when packets arrive faster than they can be transmitted or processed. Network devices temporarily store packets in memory buffers until forwarding capacity becomes available."
      }
    },
    {
      "@type": "Question",
      "name": "When does queueing become a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing becomes problematic when packets spend too much time waiting for transmission or when queues overflow and packets are dropped. Excessive queue buildup commonly increases latency, jitter, and congestion."
      }
    },
    {
      "@type": "Question",
      "name": "How is queueing related to congestion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing is closely related to congestion because queues grow when traffic demand exceeds forwarding capacity. Sustained congestion can increase delay, create queue buildup, and eventually cause packet loss."
      }
    }
  ]
};

# What is queueing in networking?

**Queueing** is the temporary holding of packets when a device or link cannot forward them immediately. Queueing is a normal part of packet forwarding, but excessive queue buildup can increase latency, jitter, congestion, and packet loss.

Queueing occurs in routers, switches, firewalls, wireless infrastructure, load balancers, and other forwarding devices whenever incoming traffic exceeds immediate forwarding or processing capacity.

Some queueing is expected and necessary because traffic often arrives in bursts rather than at perfectly consistent rates.

---

## How queueing works
When traffic arrives faster than an interface or device can transmit it, packets are temporarily stored in memory buffers until forwarding capacity becomes available.

Queue-management and scheduling policies determine how packets are prioritized, delayed, forwarded, shaped, or dropped during congestion.

Common queue-management mechanisms include FIFO (First In, First Out), priority queueing, weighted queueing, traffic shaping, traffic policing, and active queue management.

As queues grow larger, packets spend more time waiting for transmission, increasing latency and potentially affecting realtime applications such as VoIP, video conferencing, gaming, and interactive services.

Short-term queueing can absorb temporary traffic bursts, but sustained queue buildup increases delay and may eventually cause packet drops when buffers become full.

For example, during heavy WAN utilization, large queues may cause voice or video traffic to experience noticeable delay and jitter even before packets begin dropping.

Excessively large buffers can also create high latency during congestion, a condition commonly known as **bufferbloat**.

---

## Queueing in network operations
Queueing is commonly analyzed in enterprise, ISP, telecom, cloud, SD-WAN, and internet-edge environments because queue behavior directly affects application responsiveness and traffic delivery quality.

Operators commonly investigate queue buildup, queue drops, increased latency, high jitter, interface saturation, traffic bursts, retransmissions, QoS-policy behavior, and congestion-related performance degradation.

Queue visibility is important because user-visible application slowdown may occur before packet loss becomes severe.

Because queue-related problems may affect only specific applications, interfaces, or traffic classes, historical visibility is especially useful for investigating intermittent latency spikes, realtime-traffic degradation, or recurring congestion events.

---

## Queueing vs related terms
| Term | Meaning |
|---|---|
| Queueing | Temporary holding of packets awaiting transmission |
| Buffering | Memory resources used to store queued packets |
| Congestion | Traffic demand exceeds forwarding capacity |
| Packet loss | Packets dropped due to congestion or buffer exhaustion |
| Traffic shaping | Controlling transmission rates to smooth traffic behavior |

These concepts are closely related but describe different aspects of forwarding and congestion behavior.

---

## Benefits and challenges of queueing
Controlled queueing helps networks absorb temporary traffic bursts, smooth forwarding behavior, support QoS traffic prioritization, and improve handling of short-term congestion.

However, excessive queue buildup can increase latency, jitter, retransmissions, packet loss, and congestion-related instability.

Organizations commonly combine flow telemetry, interface monitoring, packet analysis, QoS visibility, latency analysis, jitter monitoring, and historical traffic analysis to investigate queue buildup and congestion-related delays.

Correlating these telemetry sources helps operators determine whether delays are caused by transient traffic bursts, sustained congestion, queue-management behavior, application traffic patterns, or infrastructure limitations.

---

## In Trisul
Trisul supports queueing-related analysis through flow telemetry analysis, interface-utilization visibility, packet analysis, latency analysis, and historical traffic investigations.

Using NetFlow, IPFIX, packet-analysis workflows, interface telemetry, and historical traffic analysis, operators can investigate congestion and queue-related traffic behavior, analyze latency, jitter, retransmissions, and packet-loss patterns, correlate traffic activity with interfaces and applications, troubleshoot QoS-related performance problems, and perform historical investigations associated with degraded communication behavior across enterprise, ISP, WAN, SD-WAN, telecom, and cloud environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/docs/ug/flow/

---

## Related terms
- [What is congestion?](/glossary/congestion)
- [What is packet loss?](/glossary/packet-loss)
- [What is QoS?](/glossary/qos)
- [What is latency?](/glossary/latency)
- What is traffic shaping?

---

## Frequently asked questions
### What is queueing in networking?

Queueing is the temporary holding of packets when a device or link cannot forward them immediately. Queueing is a normal part of packet forwarding, but excessive queue buildup can increase latency, jitter, congestion, and packet loss.

### Why does queueing happen?

Queueing happens when packets arrive faster than they can be transmitted or processed. Network devices temporarily store packets in memory buffers until forwarding capacity becomes available.

### When does queueing become a problem?

Queueing becomes problematic when packets spend too much time waiting for transmission or when queues overflow and packets are dropped. Excessive queue buildup commonly increases latency, jitter, and congestion.

### How is queueing related to congestion?

Queueing is closely related to congestion because queues grow when traffic demand exceeds forwarding capacity. Sustained congestion can increase delay, create queue buildup, and eventually cause packet loss.

### What is bufferbloat?

Bufferbloat is a condition where excessively large buffers create high latency and delay during congestion because packets spend too much time waiting in queues.

### Why does queueing affect realtime applications?

Realtime applications such as VoIP and video conferencing are sensitive to delay and jitter. Excessive queueing increases packet waiting time, which can degrade communication quality even before packets are dropped.