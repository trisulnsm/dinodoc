---
title: What is a SYN flood?
description: A SYN flood is a denial-of-service attack that overwhelms a target by sending large volumes of TCP SYN packets without completing the TCP handshake, exhausting connection-tracking and system resources.
sidebar_label: SYN flood
sidebar_position: 206
slug: /glossary/syn-flood
keywords:
  - SYN flood
  - DoS
  - TCP attack
  - handshake abuse
  - denial of service
  - network attack
  - DDoS
  - TCP SYN attack
  - state exhaustion
  - SYN cookies
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a SYN flood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SYN flood is a denial-of-service attack that overwhelms a target by sending large volumes of TCP SYN packets without completing the TCP handshake, exhausting connection-tracking and system resources."
      }
    },
    {
      "@type": "Question",
      "name": "How does a SYN flood work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SYN flood sends large numbers of TCP SYN packets but does not complete the TCP three-way handshake. The target allocates resources for half-open connections until connection tables or system resources become overloaded."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs of a SYN flood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common indicators include unusually high SYN packet rates, large numbers of half-open TCP sessions, reduced ACK completion rates, degraded service availability, and resource exhaustion on firewalls, load balancers, or servers."
      }
    },
    {
      "@type": "Question",
      "name": "Why is SYN flood detection important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SYN flood detection is important because early visibility helps operators protect critical services before connection exhaustion causes outages or severe performance degradation."
      }
    }
  ]
};

# What is a SYN flood?

A **SYN flood** is a denial-of-service (DoS) attack that overwhelms a target by sending large volumes of TCP SYN packets without completing the TCP handshake, exhausting connection-tracking and system resources.

SYN floods target the TCP connection-establishment process and commonly affect servers, firewalls, load balancers, proxies, and other stateful network devices.

SYN flood attacks are widely associated with DoS and DDoS activity against internet-facing infrastructure and services.

SYN floods are considered **state-exhaustion attacks** because they consume connection-tracking resources faster than systems can release them.

---

## How a SYN flood works
TCP communication normally begins with a three-way handshake:

1. SYN
2. SYN-ACK
3. ACK

In a SYN flood attack:

1. The attacker sends large numbers of SYN packets
2. The target responds with SYN-ACK packets
3. The attacker does not complete the final ACK step

The target system maintains these incomplete sessions as **half-open connections**, temporarily reserving memory, state-table entries, and processing resources for each pending connection.

If enough half-open sessions accumulate, connection tables may fill, firewalls may become overloaded, servers may stop accepting legitimate connections, application responsiveness may degrade, and services may become unavailable.

Attack traffic may use spoofed source IP addresses, distributed attack infrastructure, botnets, or reflection techniques combined with larger volumetric attacks.

Many systems use SYN cookies, connection-rate protections, backlog tuning, or DDoS mitigation controls to reduce the impact of SYN flood attacks.

---

## SYN flood in network operations
SYN floods commonly affect public-facing applications, web services, DNS infrastructure, firewalls, load balancers, reverse proxies, ISP edge infrastructure, and cloud-hosted services.

Teams commonly investigate sudden spikes in SYN traffic, large numbers of half-open TCP sessions, reduced handshake-completion ratios, increased firewall state-table usage, CPU or memory pressure, connection timeouts, and abnormal traffic distribution patterns.

Because SYN floods target connection-state resources instead of relying only on high bandwidth consumption, even relatively modest attack volumes can affect service availability if stateful devices become overloaded.

Historical visibility is especially useful for investigating recurring attack behavior, identifying abnormal TCP connection patterns, validating mitigation effectiveness, and correlating attack activity with infrastructure conditions.

---

## Common SYN flood indicators
| Indicator | Meaning |
|---|---|
| High SYN rate | Rapid increase in TCP connection requests |
| Many half-open sessions | TCP handshakes are not completing |
| Low ACK completion rate | Few sessions complete successfully |
| State-table pressure | Firewalls or load balancers are exhausting connection resources |
| Service degradation | Legitimate users cannot establish connections |
| Abnormal source distribution | Large numbers of distributed or spoofed sources |

Actual attack characteristics vary depending on attack scale, mitigation controls, infrastructure capacity, and traffic behavior.

---

## Benefits and challenges of SYN flood detection
SYN flood detection improves attack visibility, response speed, mitigation timing, and service protection during connection-exhaustion attacks.

However, distinguishing malicious SYN activity from legitimate traffic surges, temporary flash crowds, distributed traffic spikes, or short-lived connection bursts can be difficult during large-scale events.

Organizations commonly combine flow telemetry, packet analysis, firewall telemetry, historical traffic analysis, connection-state monitoring, and alert correlation to identify SYN-flood behavior and validate attack conditions.

Correlating these telemetry sources helps teams determine whether abnormal TCP behavior represents legitimate traffic growth, scanning activity, infrastructure instability, or active denial-of-service attacks.

---

## In Trisul
Trisul supports SYN-flood visibility and TCP-behavior analysis through flow telemetry analysis, packet-analysis workflows, historical traffic visibility, and traffic investigations.

Using NetFlow, IPFIX, packet-analysis workflows, and traffic-analysis capabilities, operators can analyze abnormal TCP SYN behavior, investigate incomplete connection patterns and half-open sessions, correlate attack activity with hosts, interfaces, and infrastructure conditions, support DDoS visibility and traffic-investigation workflows, and perform historical investigations associated with SYN-based denial-of-service activity across enterprise, ISP, telecom, cloud, and security-monitoring environments.

Additional traffic-analysis and DDoS-investigation workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- [What is DDoS detection?](/glossary/ddos-detection)
- [What is TCP retransmission?](/glossary/tcp-retransmission)
- [What is packet loss?](/glossary/packet-loss)
- [What is a firewall?](/glossary/firewall)
- [What is network security monitoring?](/glossary/network-security-monitoring)

---

## Frequently asked questions
### What is a SYN flood?

A SYN flood is a denial-of-service attack that overwhelms a target by sending large volumes of TCP SYN packets without completing the TCP handshake, exhausting connection-tracking and system resources.

### How does a SYN flood work?

A SYN flood sends large numbers of TCP SYN packets but does not complete the TCP three-way handshake. The target allocates resources for half-open connections until connection tables or system resources become overloaded.

### What are signs of a SYN flood?

Common indicators include unusually high SYN packet rates, large numbers of half-open TCP sessions, reduced ACK completion rates, degraded service availability, and resource exhaustion on firewalls, load balancers, or servers.

### Why is SYN flood detection important?

SYN flood detection is important because early visibility helps operators protect critical services before connection exhaustion causes outages or severe performance degradation.

### Why are SYN floods considered state-exhaustion attacks?

SYN floods consume connection-tracking resources such as memory and state-table entries by creating large numbers of incomplete TCP handshakes.

### What are SYN cookies?

SYN cookies are a TCP protection mechanism that helps systems handle SYN floods by delaying resource allocation until the TCP handshake is properly completed.