---
title: What is Badfellas in Trisul?
description: Badfellas is the Trisul threat-intelligence plugin. It checks network traffic against indicators of compromise from threat-intelligence feeds and flags traffic that matches a known malicious IP address, domain, URL, or other indicator.
sidebar_label: Badfellas
sidebar_position: 14
slug: /glossary/badfellas
keywords:
  - badfellas
  - trisul badfellas
  - threat intelligence plugin
  - indicators of compromise
  - IOC feeds
  - custom intel feeds
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Badfellas do in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badfellas is the Trisul threat-intelligence plugin. It checks network traffic against indicators of compromise from threat-intelligence feeds and flags traffic that matches a known malicious indicator."
      }
    },
    {
      "@type": "Question",
      "name": "Which indicators does Badfellas check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indicators include IPv4 and IPv6 addresses, domain names, URLs, file hashes, and information in SSL certificates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add my own threat-intelligence feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You put your feed in a TAB-separated file on the Hub node and point the Badfellas plugin at it. Badfellas distributes the feed to the Probe nodes."
      }
    }
  ]
};

# What is Badfellas in Trisul?

**Badfellas** is the Trisul threat-intelligence plugin. It checks your network traffic against indicators of compromise (IOCs) from threat-intelligence feeds. When traffic matches a known malicious indicator, Trisul flags it.

---

## How it works

- Badfellas ships in the `trisul-badfellas` package.
- It comes with more than a dozen selected intel feeds.
- Indicators include IPv4 and IPv6 addresses, domain names, URLs, file hashes, and information in SSL certificates.
- You can add your own feeds. Put each feed in a TAB-separated file on the Hub node, and Badfellas distributes it to the Probe nodes.

---

## In Trisul

In dashboards, activity that matches a threat-intelligence indicator counts toward the **Blacklist** value. See [Blacklist](/docs/guide/learntrisul/terminology#blacklist).

<!-- TODO(verify): confirm Badfellas matches are what the Blacklist value counts (Audit 02 Q22). -->

- To configure the plugin, see the [BadFellas plugin reference](/docs/guide/ref/plugin-config/badfellas).
- To add your own feeds, see [Add custom intel feeds into Badfellas](/docs/guide/howto/custom_feed_badfellas).

---

## Related terms

- [Threat intelligence](/glossary/threat-intelligence)
- [Indicator of compromise](/glossary/indicator-of-compromise)
- [Threat detection](/glossary/threat-detection)

---

## Frequently asked questions

### What does Badfellas do in Trisul?

Badfellas is the Trisul threat-intelligence plugin. It checks network traffic against indicators of compromise from threat-intelligence feeds and flags traffic that matches a known malicious indicator.

### Which indicators does Badfellas check?

Indicators include IPv4 and IPv6 addresses, domain names, URLs, file hashes, and information in SSL certificates.

### Can I add my own threat-intelligence feeds?

Yes. You put your feed in a TAB-separated file on the Hub node and point the Badfellas plugin at it. Badfellas distributes the feed to the Probe nodes.
