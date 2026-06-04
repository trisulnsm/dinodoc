---
title: What is High Security Mode?
description: High Security Mode is a Trisul security feature designed to strengthen administrative security controls and reduce the risk of unauthorized access to the platform.
sidebar_label: High Security Mode
sidebar_position: 74
slug: /glossary/high-security-mode
keywords:
  - High Security Mode
  - Trisul security
  - security hardening
  - access control
  - administrative security
  - authentication security
  - privileged access
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is High Security Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High Security Mode is a Trisul security feature designed to strengthen administrative security controls and reduce the risk of unauthorized access to the platform."
      }
    },
    {
      "@type": "Question",
      "name": "Why do organizations enable High Security Mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organizations enable High Security Mode to strengthen protection of monitoring infrastructure and align platform access with internal security requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Does High Security Mode affect usability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Additional security controls may increase administrative effort, depending on deployment requirements and security policies."
      }
    },
    {
      "@type": "Question",
      "name": "Is High Security Mode a replacement for MFA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. MFA and High Security Mode address different aspects of security. MFA strengthens identity verification, while High Security Mode focuses on broader administrative security controls."
      }
    },
    {
      "@type": "Question",
      "name": "When should High Security Mode be used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High Security Mode is most appropriate in environments that require stronger administrative security controls or operate under strict security policies."
      }
    }
  ]
};

# What is High Security Mode?

High Security Mode is a Trisul security feature designed to strengthen administrative security controls and reduce the risk of unauthorized access to the platform.

It is intended for deployments that require stricter security requirements for administration and access management.

---

## How High Security Mode works
High Security Mode applies additional security restrictions beyond the default platform configuration.

The specific controls depend on the feature implementation and deployment requirements. The goal is to strengthen protection of administrative functions and reduce exposure to unauthorized activity.

High Security Mode is designed to prioritize security over convenience when managing the platform.

---

## High Security Mode in network operations
Network analytics platforms often provide access to sensitive operational, security, and investigative data. Administrative accounts may also have the ability to change platform configuration, retention settings, user permissions, and monitoring behavior.

Organizations operating critical infrastructure, regulated environments, or security-sensitive deployments often require stronger controls around administrative access.

High Security Mode helps support those requirements by strengthening administrative security within the monitoring platform.

---

## High Security Mode vs standard configuration
| Category | High Security Mode | Standard Configuration |
|----------|-------------------|------------------------|
| Administrative security | Increased | Default |
| Access restrictions | More restrictive | Standard |
| Security controls | Additional hardening | Default controls |
| Operational flexibility | Reduced | Greater |
| Primary focus | Security | Administrative convenience |

The choice between modes depends on organizational security requirements, compliance obligations, and operational policies.

---

## What makes High Security Mode work in practice
Strong administrative security depends on more than platform settings alone.

Organizations should also implement:

- Strong authentication
- Role-based access controls
- Periodic access reviews
- Security monitoring
- Administrative account governance

These practices help ensure that security controls remain effective as environments evolve.

---

## In Trisul
Trisul includes a High Security Mode feature for deployments that require stronger administrative security controls.

High Security Mode can be used alongside other security capabilities such as authentication mechanisms, role-based access controls, LDAP integration, and MFA to help secure access to the platform.

---

## Related terms
- [Multi-Factor Authentication (MFA)](/glossary/multi-factor-authentication)
- [LDAP](/glossary/ldap)
- [AAA](/glossary/aaa)
- Role-Based Access Control (RBAC)
- Identity and Access Management (IAM)
- Authentication
- Authorization
- Privileged Access Management (PAM)

---

## Frequently asked questions
### What is High Security Mode?

High Security Mode is a Trisul security feature designed to strengthen administrative security controls and reduce the risk of unauthorized access to the platform.

### Why do organizations enable High Security Mode?

Organizations enable High Security Mode to strengthen protection of monitoring infrastructure and align platform access with internal security requirements.

### Does High Security Mode affect usability?

Additional security controls may increase administrative effort, depending on deployment requirements and security policies.

### Is High Security Mode a replacement for MFA?

No. MFA and High Security Mode address different aspects of security. MFA strengthens identity verification, while High Security Mode focuses on broader administrative security controls.

### When should High Security Mode be used?

High Security Mode is most appropriate in environments that require stronger administrative security controls or operate under strict security policies.