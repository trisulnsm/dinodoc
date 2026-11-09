# BGP-Origin AS

NetFlow traffic keyed by the origin AS (the last AS in the BGP AS path) of the remote prefix.

| Property | Value |
|---|---|
| GUID | `{3950AB76-3C3A-40EE-5C94-80A87EE28D53}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | AS number (decimal string) |
| Implementation | Lua — geo-originas.lua (trisul_geo/src/geometer) defines the group; Native C++ — CPICGASPath (trisul_geo/src/geometer/PICGASPath.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. Set `MeterASPATH` to TRUE in Geo.xml and provide a BGP RIB. |

## What it measures

The four BGP groups ([BGP-ASPATH](/docs/guide/counter-groups/bgp-aspathbgp), [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as), [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as), [BGP-Prefix External](/docs/guide/counter-groups/bgp-prefix-external)) are updated together by CPICGASPath for each NetFlow/IPFIX record:

- **Prerequisites.** Set `MeterASPATH` to TRUE in Geo.xml (default FALSE). Trisul needs a BGP RIB per router: `<router-ip>_routes.db.sqlite3` in `BGPRibsPath` (Geo.xml ships `/usr/local/var/ramdisk`). See [Configuring BGP](/docs/prodguide/isp/bgp).
- **RIB selection.** The plugin picks the RIB whose file name matches the NetFlow exporter (router) address in the flow. If there is none and `EnableDownstreamRIBPush` is TRUE, it uses the downstream RIB `0.0.0.0_routes.db.sqlite3` downloaded by the Geo feed. Otherwise the flow is skipped.
- **Lookup.** Both IPv4 endpoints are looked up (longest prefix match). There is no Home Network check: an endpoint is counted only if its address is in the RIB. Endpoints not in the RIB, such as your own addresses when the RIB holds only upstream routes, add nothing. There is no "unknown" key.
- **Direction.** Upload = bytes sent toward the matched prefix. Download = bytes received from it. A flow whose two endpoints both match updates two keys in each group.
- Packets are not counted. IPv6 is not supported.

## Keys

One key is the last ASN in the AS_PATH of the matched RIB entry, as a decimal string. Key labels come from the [ASNumber](/docs/guide/counter-groups/asnumber) group: the Lua definition sets `resolver_guid` to the ASNumber GUID `{03E016FC-46AA-4340-90FC-0E278B93C677}`.

| Key | Meaning |
|---|---|
| `15169` | GOOGLE |
| `13335` | CLOUDFLARENET |
| `33915` | Origin of `32.1.28.0/24` in path `293 6939 6830 33915` |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A flow with both endpoints in the RIB updates two origin keys. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload to AS | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes sent toward prefixes originated by this AS. |
| 1 | Download from AS | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes received from prefixes originated by this AS. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
