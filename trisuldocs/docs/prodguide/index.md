# Trisul Product Guides

Trisul Network Analytics runs in four product modes. Each mode has its own guide.

Not sure which mode you need? See [Product Modes](/docs/guide/starthere/what_is_trisul/productmodes).

All four modes share the same Trisul backend. Each mode sets up its own menus, dashboards, counter groups and query tools.

---

## Available Product Guides

The following dedicated product guides are available:

### 1. [NetFlow Analyzer Guide](/docs/prodguide/nf/)

![NetFlow Analyzer](/img/appnetflow.png)

**Trisul NetFlow Analyzer** monitors network traffic from the flow records that routers and switches export. Use it for traffic monitoring and capacity planning across enterprise networks, datacenters and campuses.

- **Protocols Supported:** NetFlow v5/v9, IPFIX, sFlow, and NetStream.
- **Key Capabilities:**
  - **Interface & Router Tracking:** Real-time throughput, bandwidth utilization, and interface metrics.
  - **Traffic Breakdown:** Visibility into hosts, internal/external conversations, TCP/UDP applications, and QoS tags.
  - **Retro & Historical Analytics:** Fast retrospective analysis of historical raw flows without aggregation loss.
  - **Automated Alerting:** Threshold-crossing alerts, bandwidth anomaly detection, and security notifications.

:point_right: **[Explore the NetFlow Analyzer Guide &rarr;](/docs/prodguide/nf/)**

---

### 2. [IPDR DoT Compliance Guide](/docs/prodguide/ipdr/) {#2-ipdr-compliance-guide}

![IPDR Compliance](/img/appipdr.png)

The **Trisul IPDR DoT Compliance Solution** is built for Internet Service Providers (ISPs) and telecom operators to meet regulatory compliance requirements for lawful interception and subscriber data logging. <!-- TODO(verify): 'lawful interception' and 'international regulatory audit requirements' claims pending product team (F-06-20) -->

- **Regulatory Compliance:** Aligned with Department of Telecommunications (DoT) and international regulatory audit requirements.
- **Key Capabilities:**
  - **Subscriber Logging:** Captures and stores comprehensive IP Data Records (NAT translations, public-to-private IP mappings).
  - **AAA & RADIUS Integration:** Correlation of subscriber identities with network session telemetry.
  - **Audit & Query Portal:** Fast search interface to retrieve subscriber records by timestamp, IP address, or port.
  - **Long-Term Retention:** High-compression database storage designed for multi-year record retention and automated export.

:point_right: **[Explore the IPDR DoT Compliance Guide &rarr;](/docs/prodguide/ipdr/)**

---

### 3. [ISP Analytics Guide](/docs/prodguide/isp/)

![ISP Analytics](/img/appisp.png)

**Trisul ISP Analytics** combines flow records with BGP routing data to show transit, peering and content delivery traffic across ISP backbones.

- **Protocols Supported:** Flow protocols (NetFlow/IPFIX/sFlow) correlated with BGP routing feeds.
- **Key Capabilities:**
  - **BGP & Route Visibility:** Prefix-level traffic analysis, AS path analytics, and route observability.
  - **Peering Optimization:** Visibility into peering candidates, transit vs. peering ratios, and transit cost reduction opportunities.
  - **OTT & CDN Profiling:** Detailed volume and performance metrics for content delivery networks and streaming services.
  - **Geographic Traffic Analysis:** Global origin and destination traffic mapping across countries and autonomous systems.

:point_right: **[Explore the ISP Analytics Guide &rarr;](/docs/prodguide/isp/)**

---

### 4. [Trisul NSM Guide](/docs/prodguide/nsm/) {#4-network-security-monitoring-nsm-guide}

![Network Security Monitoring](/img/appnsm.png)

**Trisul NSM** analyzes raw packets from a SPAN or TAP port, together with IDS alerts from Snort or Suricata. It adds behavioral anomaly detection (NBAD), security alerting and forensic resources for investigating threats across the network.

- **Capabilities Supported:** Flow telemetry, full packet capture (PCAP), IDS alert correlation (Suricata/Snort), and protocol extraction.
- **Key Capabilities:**
  - **Network Behavioral Analysis (NBAD):** Layer 7 metrics, protocol anomaly detection, encapsulated tunnels, P2P analytics, and TCP performance analysis.
  - **Threat & Alert Correlation:** MITRE ATT&CK technique mapping, alert timelines, volumetric DDoS detection, and consolidated alert triage.
  - **Forensic Resources:** Indexed metadata and scoped full-text search across DNS queries, URLs, HTTP headers, and SSL/TLS certificates.
  - **Retrospective & Real-Time Analytics:** Continuous flow telemetry and historical investigation without aggregation loss.

:point_right: **[Explore the NSM Guide &rarr;](/docs/prodguide/nsm/)**

