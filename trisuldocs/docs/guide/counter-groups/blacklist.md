# Blacklist

Counts of threat-intelligence matches (IPs, domains, URLs, TLS certificate hashes), keyed by the intel source or category of the matched indicator.

| Property | Value |
|---|---|
| GUID | `{6255BD85-2DCB-49E7-AF1F-1267AAF4DCA1}` |
| Layer | Alerts |
| Input | Packets, Flows |
| Key type | Intel source / category string |
| Implementation | Native C++ — CPICGBadFellas (trisul_badfellas/src/badfellas/PICGBadFellas.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes (requires the Badfellas plugin and its feed database `AllBadFellas.tch`) |

## What it measures

The [Badfellas plugin](/docs/guide/ref/plugin-config/badfellas) looks up indicators in its feed database. Each match raises a Blacklist alert and adds 1 to this group under the indicator's category. The checks below are switched by Badfellas.xml policy flags (all TRUE by default):

- **New flows and NetFlow records** (`CheckTCPFlows`): source and destination IP. A flow where both IPs match counts twice.
- **HTTP Host header** (`CheckHTTPHost`): the full host name, then the name with its first label removed (`www2.example.com` → `example.com`).
- **Resources** (`CheckURLs`, `CheckDNS`): HTTP URIs as `host/path`, the SHA1 fingerprints in TLS certificate chains, and other resources such as DNS records, looked up as-is.
- **ICMP** (`CheckICMP`): source and destination IP of ICMP type 8 (echo request, ping) packets. These matches update only meter 0.

Every match also updates the **Blacklist alerts** meter (ID 11) of the [Hosts](/docs/guide/counter-groups/hosts) group.

## Keys

One key is the first field stored with the indicator in the feed database. Built-in feeds use a fixed category. Some feeds append detail, so they produce many keys. For local TSV feeds, the key is your `INTELSOURCE` column. See [Add custom intel feeds](/docs/guide/howto/custom_feed_badfellas).

| Key | Meaning |
|---|---|
| `DSHIELD` | IP from the DShield block list |
| `TOR-NODE` | IP is a Tor node |
| `FEODO-TRACKER-IP` | Feodo Tracker botnet C&C IP |
| `SSL_SHA1_BLACKLIST` | TLS certificate SHA1 from abuse.ch SSLBL |

Other built-in categories: `PHISH-TANK`, `MALWARE-DOMAIN`, `ZeUS-C&C`, `ALIENVAULT`, `URLHAUS:`, `MDL:<category>`, `MALWARE:<description>`, and `DNSBH:<domain>` (one key per blackholed domain).

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval (total matches across all categories). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Hits | VT_COUNTER | Hits | 50 | 0 | +1 for each indicator match in this category. |
| 1 | Blacklist connections | VT_COUNTER | Conns | 0 | 0 | +1 for each match from a flow, HTTP host or resource. ICMP matches do not add here. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Hosts](/docs/guide/counter-groups/hosts)
- [Badfellas plugin configuration](/docs/guide/ref/plugin-config/badfellas)
