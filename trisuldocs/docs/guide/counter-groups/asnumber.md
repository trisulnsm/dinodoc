# ASNumber

Traffic to and from external networks, keyed by the Autonomous System Number (ASN) that owns the external IP address.

| Property | Value |
|---|---|
| GUID | `{03E016FC-46AA-4340-90FC-0E278B93C677}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | AS number (decimal string) |
| Implementation | Native C++ — CPICGASNumber (trisul_geo/src/geometer/PICGASNumber.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes (requires the Geo plugin; `MeterASN` = TRUE in Geo.xml) |

## What it measures

The Geo plugin looks up IPv4 addresses in the MaxMind `GeoLite2-ASN-Blocks-IPv4.csv` database.

- **Packets.** Home → external: the destination's ASN gets **Upload**. External → home: the source's ASN gets **Download**. External → external (transit): the destination's ASN gets Upload and the source's ASN gets Download, the same as [Country](/docs/guide/counter-groups/country). Home → home packets are not counted.
- **Packets are sampled.** The plugin counts 1 packet in every `SampleRate` (Geo.xml ships 32; code default 16) and multiplies its bytes by `SampleRate`.
- **NetFlow/IPFIX records, no `HomeASNumbers` set.** Every endpoint that is outside the [Home Network](/docs/guide/learntrisul/homenetwork_concepts) is counted. Upload = bytes sent toward that endpoint, Download = bytes received from it. A transit flow updates two ASNs. A home → home flow updates none. IPv6 flow records are skipped.
- **NetFlow/IPFIX records, `HomeASNumbers` set in Geo.xml.** The plugin ignores Home Networks and looks up both endpoints. It skips an endpoint whose ASN is one of your home ASNs. Set `DirectionalMode` to FALSE to count both endpoints always.
- Each update adds edges between the ASN and the external host, or the flow.

## Keys

One key is the AS number as a decimal string, with no `AS` prefix. The key label comes from `ASKEYS.SQT`, a key database shipped with the Geo plugin (label = AS handle, description = organization).

| Key | Meaning |
|---|---|
| `15169` | GOOGLE (Google LLC) |
| `13335` | CLOUDFLARENET (Cloudflare, Inc.) |
| `3` | MIT-GATEWAYS (Massachusetts Institute of Technology) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Transit packets and flows update two ASN keys, so Total can exceed the traffic on the link. |
| `XX` | IP address not found in the ASN database (for example private or unannounced space). |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes sent toward this ASN. |
| 1 | Download Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes received from this ASN. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as) and [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as) use this group's key labels.
- [Prefix](/docs/guide/counter-groups/prefix)
- [Geo plugin configuration](/docs/guide/ref/plugin-config/geoasn)
