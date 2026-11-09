# Country

Traffic between your home network and the outside world, keyed by the country of the external IP address.

| Property | Value |
|---|---|
| GUID | `{00990011-44BD-4C55-891A-77823D59161B}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | Country ISO code (2 letters) |
| Implementation | Native C++ — CPICGGeoCountry (trisul_geo/src/geometer/PICGGeoCountry.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | Yes (requires the Geo plugin; `MeterCountry` = TRUE in Geo.xml) |

## What it measures

The Geo plugin looks up the IPv4 address in the MaxMind GeoLite2 Country database (`GeoLite2-Country-Blocks-IPv4.csv` with `GeoLite2-Country-Locations-en.csv`). Which address is looked up depends on the [Home Network](/docs/guide/learntrisul/homenetwork_concepts):

- **Packets.** Home → external: the destination's country gets **Upload**. External → home: the source's country gets **Download**. External → external (transit): the destination's country gets Upload and the source's country gets Download. Home → home packets are not counted.
- **Packets are sampled.** The plugin counts 1 packet in every `SampleRate` (Geo.xml ships 32; code default 16) and multiplies its bytes by `SampleRate`. Values are estimates.
- **NetFlow/IPFIX records.** One endpoint home: the other endpoint's country gets Upload (bytes sent from home) and Download (bytes received). Any other flow, including home → home and transit, updates the countries of both endpoints. Flow records are not sampled.
- IPv6 is not counted. IPv6 flow records are skipped.
- Each update also adds edges between the country and the external host, or between the country and the flow (`AddFlowEdges`, default true).

## Keys

One key is a 2-letter code from the GeoLite2 locations file. The plugin uses `country_iso_code`. If a location row has no country, it uses the 2-letter continent code. The key label is the country or continent name from the same file.

| Key | Meaning |
|---|---|
| `US` | United States |
| `IN` | India |
| `DE` | Germany |
| `EU` | Europe (continent code; the block has no country) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Transit packets and flows update two country keys, so Total can exceed the traffic on the link. |
| `XY` | IP address not found in the GeoLite2 database, for example RFC 1918 private addresses in flow records. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload Bytes | VT_RATE_COUNTER | Bps | 30 | 20 | Bytes sent toward this country (from the home side, or to the destination for transit). |
| 1 | Download Bytes | VT_RATE_COUNTER | Bps | 30 | 20 | Bytes received from this country. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [ASNumber](/docs/guide/counter-groups/asnumber)
- [City](/docs/guide/counter-groups/city)
- [Geo plugin configuration](/docs/guide/ref/plugin-config/geoasn)
