# Prefix

Traffic between your home network and the outside world, keyed by the IPv4 network prefix (CIDR block) of the external address.

| Property | Value |
|---|---|
| GUID | `{2838D2E8-EABC-4050-90C4-8AE2589AAB25}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | IPv4 CIDR prefix (dotted decimal) |
| Implementation | Native C++ — CPICGPrefix (trisul_geo/src/geometer/PICGPrefix.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. Geo.xml ships `MeterPrefix` = FALSE. |

## What it measures

The prefix database is a copy of the MaxMind ASN blocks file, saved as `GeoLite2-Prefix-Blocks-IPv4.csv` when the Geo feed updates. The key is the most specific block that contains the address. These are GeoLite2 blocks, not routes from your routers. For prefixes from a BGP RIB, see [BGP-Prefix External](/docs/guide/counter-groups/bgp-prefix-external).

- **Packets.** Home → external: the destination's prefix gets **Upload**. External → home: the source's prefix gets **Download**. External → external (transit): the destination's prefix gets Upload and the source's prefix gets Download, the same as [Country](/docs/guide/counter-groups/country). Home → home packets are not counted.
- **Packets are sampled.** The plugin counts 1 packet in every `SampleRate` (Geo.xml ships 32) and multiplies its bytes by `SampleRate`.
- **NetFlow/IPFIX records.** Only flows with exactly one endpoint in the [Home Network](/docs/guide/learntrisul/homenetwork_concepts) are counted. The external endpoint's prefix gets Upload (bytes sent from home) and Download (bytes received). IPv6 flow records are skipped.

## Keys

One key is a CIDR string in dotted decimal notation. The key label is the same string.

| Key | Meaning |
|---|---|
| `8.8.8.0/24` | GeoLite2 block containing 8.8.8.8 |
| `1.1.1.0/24` | GeoLite2 block containing 1.1.1.1 |
| `31.207.0.0/24` | GeoLite2 block containing 31.207.0.10 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Transit packets update two prefix keys. |
| `XX` | IP address not covered by any block in the database. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes sent toward this prefix. |
| 1 | Download Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes received from this prefix. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [ASNumber](/docs/guide/counter-groups/asnumber)
- [Flow-Prefix](/docs/guide/counter-groups/flow-prefix)
- [Geo plugin configuration](/docs/guide/ref/plugin-config/geoasn)
