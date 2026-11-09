# City

Traffic between your home network and the outside world, keyed by the city of the external IP address.

| Property | Value |
|---|---|
| GUID | `{6D201FA3-6F8B-4F83-73F7-CB0B8A66EA2E}` |
| Layer | L3 Network |
| Input | Packets, Flows |
| Key type | GeoNames city ID (decimal) |
| Implementation | Native C++ — CPICGCity (trisul_geo/src/geometer/PICGCity.cpp) |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. Set `MeterCity` to TRUE in Geo.xml (off by default because of memory use). |

## What it measures

The Geo plugin looks up IPv4 addresses in the MaxMind `GeoLite2-City-Blocks-IPv4.csv` and `GeoLite2-City-Locations-en.csv` files. The City CSV is not installed with the plugin. Enable the GeoLite2-City-CSV source in Geo.xml with your MaxMind license key.

- **Packets.** Home → external: the destination's city gets **Upload**. External → home: the source's city gets **Download**. External → external (transit): the destination's city gets Upload and the source's city gets Download, the same as [Country](/docs/guide/counter-groups/country). Home → home packets are not counted.
- **Packets are sampled.** The plugin counts 1 packet in every `SampleRate` (Geo.xml ships 32) and multiplies its bytes by `SampleRate`.
- **NetFlow/IPFIX records.** Only flows with exactly one endpoint in the [Home Network](/docs/guide/learntrisul/homenetwork_concepts) are counted. The external endpoint's city gets Upload (bytes sent from home) and Download (bytes received). Transit and home → home flows are not counted. IPv6 flow records are skipped.

## Keys

One key is the GeoNames ID of the location (`geoname_id`). The key label is `<country>/<subdivision>/<city>` built from the locations file.

| Key | Meaning |
|---|---|
| `5375480` | US/CA/Mountain View |
| `1275339` | IN/MH/Mumbai |
| `2643743` | GB/ENG/London |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Transit packets update two city keys. |
| `XX` | IP address not found in the City database. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes sent toward this city. |
| 1 | Download Bytes | VT_RATE_COUNTER | Bps | 20 | 20 | Bytes received from this city. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Country](/docs/guide/counter-groups/country)
- [Geo plugin configuration](/docs/guide/ref/plugin-config/geoasn)
