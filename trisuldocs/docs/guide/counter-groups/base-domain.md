# Base Domains

Counts external IPv4 host traffic, keyed by the DNS name the client looked up to reach that host.

| Property | Value |
|---|---|
| GUID | `{74FE9532-EDEB-421E-BD92-B5C62E7F2346}` |
| Layer | Derived |
| Input | Packets |
| Key type | DNS question name or rule name |
| Implementation | Lua — base-domain.lua (trisul_probe/src/sysplugs/dnswatcher/base-domain.lua) defines the group; CXSTDomains (trisul_probe/src/stengine/XSTDomains.cpp) updates it from the Hosts group and DNS answers seen by CPIDNSWatch (trisul_probe/src/sysplugs/dnswatcher/PIDNSWatch.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes |

## What it measures

- The DNS plugin reads each DNS response with `A` records. It stores a map from each answer IPv4 address to the **question name**, the name the client asked for. Any CNAME chain in between is ignored, so a CDN address is mapped to the name the user requested, not to the CDN's own name. This is what "without CDN" in the group description means.
- At each flush of the [Hosts](/docs/guide/counter-groups/hosts) group, Trisul looks up every IPv4 host that is outside the Home Networks and has non-zero Total traffic. It looks for the exact address first, then for any stored address in the same /28.
- The host's Total bytes for the interval (Hosts meter 0 rate × 60) are added to the matching key. If no address matches, the bytes go to the `internet` key.
- Home network hosts and IPv6 hosts are not counted.
- These updates are timestamped 10 s after the Hosts flush, so they can land in the following interval.
- Requires `TrackBaseDomains` set to `true` in the DNS plugin policy (`DNSExtractorPolicy.xml`, the default) and DNS traffic visible to the probe. With NetFlow-only input there are no DNS answers, so all traffic goes to `internet`.

## Keys

The key is the DNS question name as it appears in the DNS response, or the name of a matching grouping rule.

| Key | Meaning |
|---|---|
| `www.netflix.com` | External hosts that clients reached after resolving `www.netflix.com` |
| `api.example.org` | External hosts resolved from `api.example.org` |
| `GOOGLE` | Rule name from `BaseDomainRules.xml`. Groups every DNS name its regex matches, for example `www.google.com` and `fonts.gstatic.com`. |
| `internet` | External hosts with no DNS answer on record |

### Grouping rules

`BaseDomainRules.xml` is installed as `PI-081336B3-5AF1-4D4F-B850-BA3CAEEB8A2C.xml` in the plugin configuration directory. It ships with 107 rules. The probe log reports the count at startup: `XSTDomains : Loaded rules count = 107`.

- **Rules** each have a rule name `<k>` and a regex `<x>`, for example `<Rule><k>YOUTUBE</k><x>(youtube|ytimg|googlevideo)</x></Rule>`. Rules are tried in file order. The first regex that matches anywhere in the DNS name replaces the key with the rule name. Matching is case-sensitive. The result is cached for each stored address.
- **StaticIPRules** each map a fixed IPv4 address `<k>` to a DNS name `<x>`, for example `<k>31.13.93.3</k><x>facebook</x>`. That address is then treated as if a DNS answer had been seen for it, so its name also goes through the rules (`facebook` becomes `FACEBOOK`).
- Every `<Rule>` needs both `<k>` and `<x>`. The two lists are read separately and paired by position, so a missing element shifts every rule after it.

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update to this group in the interval. Each external host updates one key, so this is close to total external IPv4 host traffic (upload plus download). |
| `internet` | Traffic of external hosts with no stored DNS answer for the address or its /28. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Total | VT_RATE_COUNTER | Bps | 100 | 0 | Total bytes of external IPv4 hosts mapped to this name, taken from the Hosts group. |
| 1 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 2 | uniqs | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Hosts](/docs/guide/counter-groups/hosts)
- [External Hosts](/docs/guide/counter-groups/external-hosts)
- [HTTP Hosts](/docs/guide/counter-groups/http-hosts)
