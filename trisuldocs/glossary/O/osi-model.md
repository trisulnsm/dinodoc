---
title: What is the OSI model?
description: The OSI model is a seven-layer conceptual framework used to describe how network communication functions across physical connectivity, switching, routing, transport, and application interactions.
sidebar_label: OSI model
sidebar_position: 149
slug: /glossary/osi-model
keywords:
  - OSI model
  - network layers
  - encapsulation
  - decapsulation
  - layer 1
  - layer 2
  - layer 3
  - layer 4
  - layer 7
  - TCP/IP model
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the OSI model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model is a seven-layer conceptual framework used to describe how network communication functions across physical connectivity, switching, routing, transport, and application interactions."
      }
    },
    {
      "@type": "Question",
      "name": "How many layers are in the OSI model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model contains seven layers ranging from the Physical Layer (Layer 1) to the Application Layer (Layer 7)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the OSI model useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model is useful because it provides a structured framework for understanding network communication, troubleshooting problems, and discussing networking behavior consistently across technologies and vendors."
      }
    },
    {
      "@type": "Question",
      "name": "How is the OSI model used in troubleshooting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model is used in troubleshooting to isolate problems by communication layer, such as physical connectivity failures, switching issues, routing problems, transport behavior, or application communication failures."
      }
    }
  ]
};

# What is the OSI model?

The **OSI (Open Systems Interconnection) model** is a seven-layer conceptual framework used to describe how network communication functions across physical connectivity, switching, routing, transport, and application interactions.

The model was developed by the International Organization for Standardization (ISO) to provide a standardized way to describe networking functions and communication workflows across different systems and technologies.

Modern networks primarily use the TCP/IP protocol suite, but the OSI model remains widely used for education, troubleshooting, protocol analysis, and network design discussions because it provides a structured way to understand communication behavior.

---

## How the OSI model works
The OSI model separates networking functions into layers so communication tasks such as physical transmission, switching, routing, transport reliability, and application interaction can be analyzed independently.

Lower layers focus on physical connectivity and local network communication, middle layers handle routing and transport behavior, and upper layers relate to sessions, data representation, and application communication.

As data moves down the OSI layers, each layer adds its own protocol information in a process called **encapsulation**. The receiving system reverses this process, known as **decapsulation**, to interpret the communication correctly.

Although real-world networking does not always map perfectly to OSI layers, the model remains useful because it helps operators organize troubleshooting and understand how different protocols interact across the network.

For example, Ethernet commonly operates at Layer 2, IP at Layer 3, and TCP or UDP at Layer 4.

---

## OSI model in network operations
The OSI model is widely used in troubleshooting because it helps operators isolate where communication problems originate.

For example, if users cannot access an application, troubleshooting may begin by verifying physical connectivity and routing before investigating transport behavior or application-layer communication problems.

Common troubleshooting examples include:

- Physical cabling or signal failures at Layer 1
- VLAN, MAC-address, or switching problems at Layer 2
- Routing and IP reachability issues at Layer 3
- TCP or UDP communication problems at Layer 4
- Application or protocol behavior at Layers 5 through 7

The model is also useful for protocol analysis, firewall investigations, traffic analysis, security monitoring, and application troubleshooting across multi-vendor environments.

Because many networking problems involve interactions across multiple layers, the OSI framework helps teams communicate and troubleshoot more consistently.

---

## OSI layers
| Layer | Purpose |
|---|---|
| Layer 1 | Physical transmission, signaling, and media connectivity |
| Layer 2 | Switching, framing, MAC addressing, and local delivery |
| Layer 3 | Routing, logical addressing, and packet forwarding |
| Layer 4 | Transport communication, ports, reliability, and flow control |
| Layer 5 | Session establishment and communication management |
| Layer 6 | Data formatting, encoding, compression, and encryption |
| Layer 7 | Application and end-user communication behavior |

The OSI model is conceptual, and modern protocols may overlap responsibilities across multiple layers.

---

## Why the OSI model is still useful
The OSI model remains useful because it provides a consistent framework for understanding network communication and troubleshooting problems systematically.

It helps operators:
- Organize troubleshooting logically
- Isolate communication failures by layer
- Understand protocol interactions
- Discuss networking behavior consistently across vendors and technologies

The model also helps explain why issues at one layer can affect communication at other layers.

For example, packet loss at lower layers may affect TCP performance and application responsiveness at higher layers.

---

## In Trisul
Trisul supports OSI-oriented traffic analysis and troubleshooting workflows through packet analysis, flow telemetry analysis, protocol visibility, and historical traffic investigations.

Using NetFlow, IPFIX, packet analysis, protocol analysis workflows, and historical traffic visibility, operators can investigate traffic behavior across routing, transport, and application layers, correlate packet-level activity with flow telemetry, and perform historical traffic investigations across enterprise, ISP, telecom, WAN, and distributed network environments.

Additional traffic-analysis workflows are documented in the Trisul documentation:

https://docs.trisul.org/

---

## Related terms
- [What is packet loss?](/glossary/packet-loss)
- [What is network troubleshooting?](/glossary/network-troubleshooting)
- What is protocol analysis?
- [What is latency?](/glossary/latency)
- [What is network performance?](/glossary/network-performance)

---

## Frequently asked questions
### What is the OSI model?

The OSI model is a seven-layer conceptual framework used to describe how network communication functions across physical connectivity, switching, routing, transport, and application interactions.

### How many layers are in the OSI model?

The OSI model contains seven layers ranging from the Physical Layer (Layer 1) to the Application Layer (Layer 7).

### Why is the OSI model useful?

The OSI model is useful because it provides a structured framework for understanding network communication, troubleshooting problems, and discussing networking behavior consistently across technologies and vendors.

### How is the OSI model used in troubleshooting?

The OSI model is used in troubleshooting to isolate problems by communication layer, such as physical connectivity failures, switching issues, routing problems, transport behavior, or application communication failures.

### What is encapsulation in the OSI model?

Encapsulation is the process where each OSI layer adds protocol-related information to data as it moves through the communication stack before transmission across the network.

### Does the internet use the OSI model?

Modern networks primarily use the TCP/IP protocol suite. However, the OSI model is still widely used as a conceptual framework for learning networking concepts, troubleshooting communication problems, and analyzing protocol behavior.