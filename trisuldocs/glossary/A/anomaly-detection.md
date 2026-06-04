---
title: What is anomaly detection?
description: Anomaly detection identifies data points, events, or observations that deviate significantly from normal behavior, used in network security to detect threats like DDoS attacks, port scans, and data exfiltration by comparing current traffic against established baselines.
sidebar_label: Anomaly detection
sidebar_position: 7
slug: /glossary/anomaly-detection
keywords:
  - anomaly detection
  - traffic anomaly detection
  - network anomaly detection
  - outlier detection
  - baseline deviation
  - threshold alerting
  - behavioral analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of anomalies exist in network traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point anomalies are individual data points that deviate from the norm, such as a single traffic spike. Contextual anomalies deviate in a specific context, such as high traffic during off-peak hours. Collective anomalies are groups of data points that together indicate abnormality, such as sustained high traffic from a single source indicating a DDoS attack."
      }
    },
    {
      "@type": "Question",
      "name": "What are the three main approaches to anomaly detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supervised learning uses labeled normal and abnormal data to train a classifier. Unsupervised learning identifies anomalies without labeled data by finding outliers in the dataset. Semi-supervised learning trains only on normal data and flags deviations as anomalies, which is most common in security due to the scarcity of labeled attack data."
      }
    },
    {
      "@type": "Question",
      "name": "How does anomaly detection support network security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anomaly detection supports network security by identifying DDoS attacks through traffic volume spikes, detecting port scans through unusual connection patterns, identifying data exfiltration through asymmetric traffic flows, and spotting reconnaissance activity through scans of non-standard ports. It enables early detection of threats before they cause damage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between threshold-based and baseline-based anomaly detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threshold-based detection uses fixed limits, such as alerting when interface utilization exceeds 80%. Baseline-based detection establishes normal patterns over time and alerts on deviations from that baseline. Baseline-based is more effective because it adapts to time-of-day and day-of-week patterns, reducing false positives."
      }
    }
  ]
};

# What is anomaly detection?

Anomaly detection identifies data points, events, or observations that deviate significantly from normal behavior. In network security, it detects threats such as DDoS attacks, port scans, and data exfiltration by comparing current traffic against established baselines. Static baselines are fixed, while dynamic baselines adapt to time‑of‑day and day‑of‑week patterns, which helps reduce false positives.

---

## How it works
Anomaly detection typically uses supervised learning with labeled data, unsupervised learning to find outliers, or semi‑supervised learning trained only on normal data. It first establishes what “normal” traffic looks like (for example, per‑interface or per‑application patterns), then flags deviations such as traffic spikes, unusual connection patterns, or asymmetric flows.

---

## In network operations
- **NOC:** Detect performance issues by identifying traffic spikes that deviate from baseline utilization patterns.  
- **SOC:** Detect security incidents by identifying DDoS attacks, port scans, or data exfiltration through traffic anomalies.  
- **Capacity Planning:** Identify links or zones approaching saturation by detecting sustained deviations from normal traffic patterns.

---

## Threshold-based vs baseline-based detection
| Dimension        | Threshold-based                              | Baseline-based                                                      |
|------------------|----------------------------------------------|---------------------------------------------------------------------|
| Limits           | Fixed values (for example, 80% utilization) | Derived from historical patterns over time                          |
| Adaptation       | None                                         | Accounts for time‑of‑day and day‑of‑week variations                 |
| False positives  | Higher                                       | Lower                                                               |
| Best for         | Simple, stable networks                      | Dynamic modern networks with changing traffic patterns              |

---

## In Trisul
Trisul provides anomaly detection through flow monitoring with baseline trending, Interface Tracking for per‑interface baselines, and Top‑K analytics for identifying top talkers against baseline expectations. Trigger‑based alerting can send notifications when traffic deviates from configured thresholds or learned baseline patterns, allowing operators to detect sudden changes in behavior quickly. [docs:https://docs.trisul.org/docs/ug/flow/]

---

## Related terms
- [Anomaly detection](/glossary/anomaly-detection)
- Baseline traffic analytics
- [DDoS detection](/glossary/ddos-detection)
- Flow monitoring
- Burst traffic
- Capacity planning
- Behavioral analytics

---

## Frequently asked questions
### What types of anomalies exist in network traffic?

Point anomalies are individual data points that deviate from the norm, such as a single traffic spike. Contextual anomalies deviate in a specific context, such as high traffic during off‑peak hours. Collective anomalies are groups of data points that together indicate abnormality, such as sustained high traffic from a single source indicating a DDoS attack.

### What are the three main approaches to anomaly detection?

Supervised learning uses labeled normal and abnormal data to train a classifier. Unsupervised learning identifies anomalies without labeled data by finding outliers in the dataset. Semi‑supervised learning trains only on normal data and flags deviations as anomalies, which is most common in security due to the scarcity of labeled attack data.

### How does anomaly detection support network security?

Anomaly detection supports network security by identifying DDoS attacks through traffic volume spikes, detecting port scans through unusual connection patterns, identifying data exfiltration through asymmetric traffic flows, and spotting reconnaissance activity through scans of non‑standard ports. It enables early detection of threats before they cause damage.

### What is the difference between threshold-based and baseline-based anomaly detection?

Threshold‑based detection uses fixed limits, such as alerting when interface utilization exceeds 80%. Baseline‑based detection establishes normal patterns over time and alerts on deviations from that baseline. Baseline‑based is more effective because it adapts to time‑of‑day and day‑of‑week patterns, reducing false positives.