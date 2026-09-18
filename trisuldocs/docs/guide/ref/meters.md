---
id: meters
title: Trisul Traffic Meters (Counter Group Index)
sidebar_label: Trisul Traffic Meters
---

Every counter group Trisul ships with out of the box is documented on its own page. Each page includes its GUID, bucket sizes, special keys, and the full meter table with descriptions. 

Use **Customize → Counters → View Meters** in the product to see live values for any of these.


## All counter groups (64)

| Group | What it measures |
|---|---|
| [Aggregates](/docs/guide/counter-groups/aggregates) | This group reports aggregate totals such as overall bandwidth and packet rate seen across the whole network. |
| [Alert Classes](/docs/guide/counter-groups/alert-classes) | This group classifies IDS alerts into broad alert classes and counts alerts per class per five-minute interval. |
| [Alert Priorities](/docs/guide/counter-groups/alert-priorities) | This group classifies IDS alerts by priority level and counts alerts recorded at each priority per interval. |
| [Alert Signatures](/docs/guide/counter-groups/alert-signatures) | This group tracks IDS alerts by individual signature and counts alerts per specific signature per interval. |
| [App-ID](/docs/guide/counter-groups/app-id) | This group measures traffic classified by App-ID as exported by devices such as Palo Alto firewalls. |
| [Apps](/docs/guide/counter-groups/apps) | This group measures application-wise traffic bandwidth along with the security alerts associated with each application. |
| [ASNumber](/docs/guide/counter-groups/asnumber) | This group measures external inbound and outbound bandwidth broken down by Autonomous System Number. |
| [Base Domains](/docs/guide/counter-groups/base-domain) | This group measures traffic by base domain and explicitly excludes traffic served through a CDN. |
| [BGP-ASPATH](/docs/guide/counter-groups/bgp-aspathbgp) | This group measures inbound and outbound bandwidth for traffic routed along specific BGP AS paths. |
| [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as) | This group measures traffic bandwidth destined for or originating from a given BGP origin autonomous system. |
| [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as) | This group measures traffic bandwidth exchanged with a specific BGP peer autonomous system. |
| [BGP-Prefix External](/docs/guide/counter-groups/bgp-prefix-external) | This group measures inbound and outbound bandwidth for traffic to and from external BGP prefixes. |
| [Blacklist](/docs/guide/counter-groups/blacklist) | This group tracks matches and connections involving domains, URLs, or IPs on a blacklist. |
| [City](/docs/guide/counter-groups/city) | This group measures external inbound and outbound traffic broken down by originating or destination city. |
| [Country](/docs/guide/counter-groups/country) | This group measures external inbound and outbound traffic broken down by country. |
| [Dir Mac](/docs/guide/counter-groups/dir-mac) | This group measures directional traffic exchanged between a specific pair of MAC addresses. |
| [Email Hosts](/docs/guide/counter-groups/email-hosts) | This group measures per-host network metrics and bandwidth for hosts exchanging email traffic (SMTP, IMAP, POP3). |
| [External Hosts](/docs/guide/counter-groups/external-hosts) | This group measures per-IP-host network statistics for IPv4 hosts outside the home network. |
| [External Hosts v6](/docs/guide/counter-groups/external-hosts-v6) | This group measures per-IP-host network statistics for IPv6 hosts outside the home network. |
| [Flow-APPID-NBAR](/docs/guide/counter-groups/flow-appid-nbar) | This group measures bandwidth and alerts for applications identified through NetFlow NBAR classification. |
| [Flow-ASN](/docs/guide/counter-groups/flow-asn) | This group measures NetFlow-derived bandwidth exchanged with a given autonomous system, including its upstream or downstream role. |
| [Flow-BGP-NextHop](/docs/guide/counter-groups/flow-bgp-nexthop) | This group measures traffic bandwidth routed via a given BGP next-hop address, as reported by NetFlow. |
| [Flow-IP-NextHop](/docs/guide/counter-groups/flow-ip-nextHop) | This group measures traffic bandwidth routed via a given IP next-hop address, as reported by NetFlow. |
| [Flow-Link-ASN](/docs/guide/counter-groups/flow-link-asn) | This group measures NetFlow bandwidth to and from an autonomous system on a specific network link. |
| [Flow-Prefix-v6](/docs/guide/counter-groups/flow-prefix-v6) | This group measures traffic bandwidth by IPv6 prefix as learned from the router's RIB. |
| [Flow-Prefix](/docs/guide/counter-groups/flow-prefix) | This group measures traffic bandwidth by IP prefix as learned from the router's RIB through NetFlow. |
| [Flow-TOS](/docs/guide/counter-groups/flow-tos) | This group measures traffic bandwidth carrying a given Type of Service value in the IP header. |
| [Flow-VRF](/docs/guide/counter-groups/flow-vrf) | This group measures traffic bandwidth classified under a given VRF (Virtual Routing and Forwarding) instance. |
| [Flow Gens](/docs/guide/counter-groups/flowgens) | This group measures the total bandwidth of flow, template, and log records received from a given flow generator. |
| [FlowIntfs](/docs/guide/counter-groups/flowi-ntfs) | This group measures combined received and transmitted bandwidth and flow metrics per network interface, based on NetFlow. |
| [Hosts](/docs/guide/counter-groups/hosts) | This group measures per-IP-host network statistics, including bandwidth, connections, and security alerts. |
| [HostsIPv6](/docs/guide/counter-groups/hostsIPv6) | This group measures per-IPv6-host network statistics, analogous to the IPv4 Hosts group. |
| [HTTP Content Types](/docs/guide/counter-groups/http-content-types) | This group measures HTTP traffic bandwidth broken down by content type. |
| [HTTP Hosts](/docs/guide/counter-groups/http-hosts) | This group measures HTTP traffic bandwidth broken down by HTTP Host header value. |
| [HTTP Methods](/docs/guide/counter-groups/http-methods) | This group counts HTTP requests observed for each HTTP method, such as GET or POST. |
| [HTTP Status Codes](/docs/guide/counter-groups/http-status-codes) | This group counts HTTP responses observed for each HTTP status code. |
| [ICMP Types](/docs/guide/counter-groups/icmp-types) | This group measures traffic bandwidth broken down by ICMP message type. |
| [Internal Hosts](/docs/guide/counter-groups/internal-hosts) | This group measures per-IP-host network statistics for IPv4 hosts within the configured home network. |
| [Internal Hosts v6](/docs/guide/counter-groups/internal-hosts-v6) | This group measures per-IP-host network statistics for IPv6 hosts within the configured home network. |
| [LinkLayerStats](/docs/guide/counter-groups/link-layer-stats) | This group breaks down link-layer Ethernet frame bandwidth by EtherType protocol, including IPv4, IPv6, ARP, VLAN, and MPLS. |
| [Long Fat Tail Hosts](/docs/guide/counter-groups/long-fat-tail-hosts) | This group measures bandwidth for hosts characterized as long fat tail web traffic generators. |
| [Long Thin Tail Hosts](/docs/guide/counter-groups/long-thin-tail-hosts) | This group measures traffic bandwidth for hosts falling outside the top one million global popularity lists. |
| [Mac](/docs/guide/counter-groups/mac) | This group measures traffic bandwidth per Ethernet MAC address. |
| [Meta Counter Group](/docs/guide/counter-groups/meta-counter-group) | This group reports internal statistics about the counter engine itself, such as cache sizes and database flush times. |
| [Meta Session Group](/docs/guide/counter-groups/meta-session-group) | This group reports flow-session activity metrics, such as flow cache size and the number of new flows established. |
| [MITRE Subtechnique](/docs/guide/counter-groups/mitre-subtechnique) | This group counts security detections mapped to specific MITRE ATT&CK subtechniques. |
| [MITRE Tactic](/docs/guide/counter-groups/mitre-tactic) | This group counts security detections mapped to specific MITRE ATT&CK tactics. |
| [MITRE Technique](/docs/guide/counter-groups/mitre-technique-counts-of-technique-used) | This group counts security detections mapped to specific MITRE ATT&CK techniques. |
| [MPLSStats](/docs/guide/counter-groups/mpls-stats) | This group monitors traffic bandwidth associated with individual MPLS labels. |
| [NetworkLayerStats](/docs/guide/counter-groups/networklayerstats) | This group breaks down network-layer activity by IP protocol field, reporting bandwidth and active flows per protocol. |
| [Organization](/docs/guide/counter-groups/organization) | This group measures traffic bandwidth and alerts per remote-office organizational unit. |
| [Perf-Stats](/docs/guide/counter-groups/perf-stats) | This group monitors internal Trisul probe and hub performance, resource usage, and processing health. |
| [Prefix](/docs/guide/counter-groups/prefix) | This group measures external inbound and outbound traffic broken down by IP prefix. |
| [Remote Office](/docs/guide/counter-groups/remote-office) | This group measures bandwidth and alerts per remote office branch. |
| [SNMP-Interface](/docs/guide/counter-groups/snmp-interface) | This group measures interface bandwidth and utilization derived from SNMP polling of network interfaces. |
| [SSH Hosts](/docs/guide/counter-groups/ssh-hosts) | This group measures per-host network metrics and bandwidth for hosts communicating via SSH. |
| [TLS CAs](/docs/guide/counter-groups/tls-ca) | This group tracks TLS handshakes by the certificate authority appearing in the certificate chain. |
| [TLS Ciphers](/docs/guide/counter-groups/tls-ciphers) | This group measures traffic bandwidth by negotiated SSL/TLS cipher. |
| [TLS Orgs](/docs/guide/counter-groups/tls-orgs) | This group measures traffic bandwidth by the certificate organization identity in TLS connections. |
| [Unleash Apps](/docs/guide/counter-groups/unleash-apps) | This group demonstrates rule-based counter grouping to track and measure custom enterprise application traffic. |
| [Unusual Traffic Hosts](/docs/guide/counter-groups/unusual-traffic-hosts) | This group tracks hosts exhibiting abnormal or anomalous communication patterns and bandwidth usage. |
| [User ID](/docs/guide/counter-groups/user-id) | This group measures traffic bandwidth and flow counts attributed to a specific User-ID, as exported by devices such as Palo Alto. |
| [VLANStats](/docs/guide/counter-groups/vlanstats) | This group monitors traffic activity segmented by VLAN, reporting per-VLAN bandwidth in both directions. |
| [Web Hosts](/docs/guide/counter-groups/web-hosts) | This group measures per-host network metrics for hosts communicating over HTTP and HTTPS protocols. |
