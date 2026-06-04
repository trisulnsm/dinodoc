---
title: What is AAA?
description: AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems.
sidebar_label: AAA
sidebar_position: 1
slug: /glossary/aaa
keywords:
  - AAA
  - authentication authorization accounting
  - access control
  - identity management
  - accounting logs
  - user access
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AAA stands for authentication, authorization, and accounting. It is a framework for controlling who can access network resources, what they can do, and recording what they did."
      }
    },
    {
      "@type": "Question",
      "name": "What does authentication mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Authentication means verifying who a user or device is, usually by checking a username and password or another credential."
      }
    },
    {
      "@type": "Question",
      "name": "What does authorization mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Authorization means deciding what an authenticated user or device is allowed to do on the network."
      }
    },
    {
      "@type": "Question",
      "name": "What does accounting mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Accounting means recording what the user did, when they did it, and how much data or service they used."
      }
    }
  ]
};

# What is AAA?

AAA stands for authentication, authorization, and accounting. It is a simple three‑step framework that:

1. **Verifies identity** (who you are),  
2. **Controls what you can do** (access and permissions), and  
3. **Keeps a log of what you actually did** (for auditing, billing, or investigation).  

This makes it easier to manage secure and traceable access to networks and systems.

---

## How AAA works
Authentication checks **who you are**, usually by verifying a username and password or another credential.  
Authorization then decides **what you are allowed to do** (for example, read files, change settings, or access certain services).  

Accounting records **what you actually did**, such as when you logged in, how long you stayed connected, and how much data you used.  
Together, these three steps give a clear, controlled, and auditable way to manage access.

---

## AAA in network operations
AAA is commonly used in VPNs, Wi‑Fi logins, administrative access, and enterprise networks that use protocols such as RADIUS or TACACS+.  
It helps ensure that only approved users can get in and makes it easy to trace actions back to specific users when something goes wrong.

---

## AAA components
| Component       | Meaning |
|-----------------|---------|
| Authentication  | Verifying who a user or device is. |
| Authorization   | Deciding what an authenticated user or device is allowed to do. |
| Accounting      | Recording what the user did, when, and how much they used. |

---

## What makes AAA useful
AAA is useful because it cleanly separates identity, permission, and logging into three clear steps.  
This makes it easier to enforce security policies, perform audits, and generate usage or billing reports for users.

It is one of the most common frameworks for managing secure and accountable access in networks.

---

## In Trisul
Trisul Network Analytics does not run AAA servers but can use AAA‑related user information to enrich network activity.  
For example, when AAA systems (such as RADIUS) send logs over syslog or AAA‑dump files, Trisul can ingest those logs and attach user IDs and session metadata to network flows.  

This lets network operators see which user was behind a specific IP address or flow, including in NAT and CGNAT environments, and use that user context for troubleshooting, compliance queries, and user‑centric analytics.

---

## Related terms
- [Authentication logging](/glossary/authentication-logging) 
- [Network access](/glossary/network-access)
- [User analytics](/glossary/user-analytics)
- [Security auditing](/glossary/security-auditing)
- [Syslog](/glossary/syslog)

---

## Frequently asked questions
### What is AAA?

AAA stands for authentication, authorization, and accounting. It is a simple three‑step framework that verifies who you are, controls what you can do, and records what you actually did on a network.

### What does authentication mean in AAA?

Authentication means verifying who a user or device is, usually by checking a username and password or another credential.

### What does authorization mean in AAA?

Authorization means deciding what an authenticated user or device is allowed to do on the network.

### What does accounting mean in AAA?

Accounting means recording what the user did, when they did it, and how much data or service they used.