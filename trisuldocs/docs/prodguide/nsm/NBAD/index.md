---
title: Network Behavior Anomaly Detection (NBAD)
sidebar_label: Overview
sidebar_position: 0
---

# Network Behavior Anomaly Detection (NBAD)

The **NBAD** section provides behavioral anomaly monitoring, protocol metrics, flow maps and attack telemetry across your network.

:::note Before you start
NBAD dashboards are provided by Trisul Apps. Install them first. See [Enabling NBAD](/docs/prodguide/nsm/NBAD/enable-nbad).
:::

## Set up

* [**Enabling NBAD**](/docs/prodguide/nsm/NBAD/enable-nbad) — Install the Trisul Apps that provide the NBAD dashboards.
* [**NFGen Flow Conversion**](/docs/prodguide/nsm/NBAD/nfgen) — Export flow records as NetFlow or IPFIX.

## NBAD dashboards

* [**Layer 7 Metrics**](/docs/prodguide/nsm/NBAD/layer7metrics) — Application-layer breakdown of traffic, SNIs, and TLS root CAs.
* [**HTTP Traffic**](/docs/prodguide/nsm/NBAD/httptraffic) — Detailed HTTP method, status code, and URL visibility.
* [**IPv4 / IPv6 Dashboard**](/docs/prodguide/nsm/NBAD/ipv4ipv6) — Side-by-side protocol transition tracking.
* [**Tunnels**](/docs/prodguide/nsm/NBAD/tunnels) — Encapsulated and tunneled protocol detection.
* [**P2P Analytics**](/docs/prodguide/nsm/NBAD/p2p) — Peer-to-peer traffic inspection.
* [**JA3 Fingerprints**](/docs/prodguide/nsm/NBAD/ja3) — JA3 hashes of observed TLS ClientHello messages.
* [**JA4 Fingerprints**](/docs/prodguide/nsm/NBAD/ja4) — JA4 fingerprints of observed TLS ClientHello messages.
* [**TCP Analyzer**](/docs/prodguide/nsm/NBAD/tcpanalyzer) — TCP health, retransmission, and latency diagnostics.
* [**Flow Map**](/docs/prodguide/nsm/NBAD/flowmap) — Live global geographic traffic mapping.
* [**MITRE ATT&CK**](/docs/prodguide/nsm/NBAD/mitre-attck) — Adversary technique mapping and alert timeline.
* [**DDoS Monitor**](/docs/prodguide/nsm/NBAD/ddos-monitor) — Volumetric spike and flood detection.
* [**DNS Flood Activity**](/docs/prodguide/nsm/NBAD/dns-flood-activity) — DNS and TCP SYN flood pattern tracking.

## Tasks

* [**Common Tasks**](/docs/prodguide/nsm/NBAD/commontasks) — Short recipes for the NBAD dashboards.
* [**Reducing False Positive Alerts**](/docs/prodguide/nsm/NBAD/falsepos) — Suppress noisy Suricata signatures.
