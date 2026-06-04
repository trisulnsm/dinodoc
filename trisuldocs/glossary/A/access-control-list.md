---
title: What is an Access Control List (ACL)?
description: An Access Control List (ACL) is a set of rules on a network device that permits or denies traffic based on source IP, destination IP, protocol, and port, used for security, traffic filtering, and network management.
sidebar_label: Access Control List
sidebar_position: 2
slug: /glossary/access-control-list
keywords:
  - access control list
  - acl
  - network acl
  - packet filtering
  - access list
  - standard acl
  - extended acl
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the five types of ACLs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard ACL filters only source IP addresses. Extended ACL filters source IP, destination IP, source port, destination port, and protocol. Dynamic ACL (Lock and Key) relies on authentication and authorizes specific users. Reflexive ACL (IP session ACL) filters based on upper-layer session information. Time-based ACL applies rules during specific times of day or week."
      }
    },
    {
      "@type": "Question",
      "name": "What are the components of an ACL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key components include sequence number (identifies ACL entry), ACL name, remark (description), network protocol (IP, TCP, UDP), permit or deny statement, source or destination IP address, and optional logging to track traffic matching the rule. Each entry defines access rights for a specific condition."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between standard and extended ACL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard ACL filters only source IP addresses and is less processor intensive. Extended ACL filters source IP, destination IP, source port, destination port, and protocol, providing granular control but requiring more CPU and memory. Use Standard for simple deployments and Extended for precise packet filtering."
      }
    },
    {
      "@type": "Question",
      "name": "How does ACL relate to flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring can show traffic that matches ACL rules by analyzing flow records for source IP, destination IP, port, and protocol. ACL logging counts packets matching rules, while flow monitoring provides detailed traffic analysis by application and conversation without requiring packet capture."
      }
    }
  ]
};

# What is an Access Control List (ACL)?

An Access Control List (ACL) is a list of rules on a network device that permits or denies traffic based on conditions such as source IP, destination IP, protocol, and port. ACLs are used to enhance security, filter unwanted traffic, and manage how network traffic moves through the infrastructure. By blocking or allowing specific traffic flows, ACLs help protect critical systems and improve network performance.

---

## How it works
ACL entries are processed in sequence by their sequence number. Each entry contains a `permit` or `deny` statement and conditions that match packets (for example, source IP, destination IP, port, or protocol). When a packet matches an entry, the device applies the corresponding action. If no entry matches, the default action is usually to deny the traffic. ACLs can also log matching traffic to help track which flows are being allowed or blocked.

---

## In network operations
- **NOC:** Use ACLs to filter out unwanted traffic and protect core infrastructure from unauthorized access.  
- **Security:** Implement security policies by blocking known malicious IPs, restricting access to sensitive systems, and preventing unauthorized protocols.  
- **Traffic Management:** Use ACLs to support QoS, NAT, and traffic‑shaping rules that prioritize critical applications or services.

---

## Standard vs extended ACL
| Dimension     | Standard ACL                                    | Extended ACL                                                               |
|---------------|-------------------------------------------------|----------------------------------------------------------------------------|
| Filters       | Source IP only                                  | Source IP, destination IP, port, and protocol                            |
| Granularity   | Low; simple, broad filtering                    | High; very fine‑grained control over traffic                             |
| Resource usage| Low; less CPU and memory usage                  | Higher; more CPU and memory usage                                        |
| Best for      | Simple deployments with basic filtering needs   | Complex environments where precise packet filtering is required          |

---

## In Trisul
Trisul flow monitoring can analyze traffic that matches ACL rules by examining flow records for source IP, destination IP, port, and protocol. ACL logging on the network device can count packets that match each rule, but Trisul’s flow analytics allow you to query and inspect traffic by those same fields without requiring packet capture. This helps operators validate ACL behavior, investigate blocked or allowed flows, and understand how ACL rules affect real‑world traffic patterns. [docs:https://docs.trisul.org/docs/ug/flow/]

---

## Related terms
- Flow monitoring
- [Network firewall](/glossary/firewall)
- [Packet filtering](/glossary/packet-filtering)
- Network security policy
- [NetFlow / IPFIX](/glossary/ipfix)

---

## Frequently asked questions
### What are the five types of ACLs?

Standard ACL filters only source IP addresses. Extended ACL filters source IP, destination IP, source port, destination port, and protocol. Dynamic ACL (Lock and Key) relies on authentication and authorizes specific users. Reflexive ACL (IP session ACL) filters based on upper‑layer session information. Time‑based ACL applies rules during specific times of day or week.

### What are the components of an ACL?

Key components include sequence number (identifies ACL entry), ACL name, remark (description), network protocol (IP, TCP, UDP), permit or deny statement, source or destination IP address, and optional logging to track traffic matching the rule. Each entry defines access rights for a specific condition.

### What is the difference between standard and extended ACL?

Standard ACL filters only source IP addresses and is less processor intensive. Extended ACL filters source IP, destination IP, source port, destination port, and protocol, providing granular control but requiring more CPU and memory. Use Standard for simple deployments and Extended for precise packet filtering.

### How does ACL relate to flow monitoring?

Flow monitoring can show traffic that matches ACL rules by analyzing flow records for source IP, destination IP, port, and protocol. ACL logging counts packets matching rules, while flow monitoring provides detailed traffic analysis by application and conversation without requiring packet capture.