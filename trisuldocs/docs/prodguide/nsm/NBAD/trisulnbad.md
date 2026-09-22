---
sidebar_position: 17
---


import Primer from '@site/docs/guide/ug/_primer.mdx';

<Primer />

# Network Behavior Anomaly Detection (NBAD)

NBAD is a suite of application-layer and behavioral dashboards built into Trisul Network Analytics. It goes beyond raw traffic volume by providing deep visibility into how your network is being used like surfacing encrypted tunnels, peer-to-peer abuse, TCP health, HTTP activity, and protocol breakdowns in a single unified menu. The solution combines flow analytics, Layer 7 visibility, behavioral monitoring, traffic investigation, and alerting capabilities through a collection of Trisul Apps and dashboards.

## NBAD Menu Overview

The NBAD menu is accessible from the left navigation sidebar. It groups the following dashboards:

| Dashboard | What it shows |
|---|---|
| [Layer 7 Metrics](/docs/prodguide/nsm/NBAD/layer7metrics) | Application-layer breakdown: top apps, SNIs, TLS Root CAs, DNS traffic |
| [HTTP Traffic](/docs/prodguide/nsm/NBAD/httptraffic) | HTTP method, status code, content type, host, and URL-level visibility |
| [IPv4 / IPv6 Dashboard](/docs/prodguide/nsm/NBAD/ipv4ipv6) | Side-by-side breakdown of IPv4 vs IPv6 host and application activity |
| [Tunnels](/docs/prodguide/nsm/NBAD/tunnels) | Detection of encapsulated and tunneled protocols |
| [DDoS Metrics](/docs/guide/ug/alerts/ddos) | DDoS attack detection and analysis |  
| [P2P Analytics](/docs/prodguide/nsm/NBAD/p2p) | Peer-to-peer traffic: BitTorrent, Tor, Gnutella, eMule, and more |
| [TCP Analyzer](/docs/prodguide/nsm/NBAD/tcpanalyzer) | TCP health metrics: latency, retransmissions, timeouts, poor-quality flows |
| [Flow Map](/docs/prodguide/nsm/NBAD/flowmap) | Live geographic map of network session flows |
| [MITRE ATT&CK](/docs/guide/ug/alerts/mitre) | Network activity mapped to MITRE ATT&CK techniques |