# BGP-ASPATH

NetFlow traffic keyed by the BGP AS path that your router uses to reach the remote prefix.

| Property | Value |
|---|---|
| GUID | `{47F48ED1-C3E1-4CEE-E3FA-E768558BC07E}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | AS path (ASNs joined by `/`) |
| Implementation | Lua — geo-aspath.lua (trisul_geo/src/geometer) defines the group; Native C++ — CPICGASPath (trisul_geo/src/geometer/PICGASPath.cpp) updates it |
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

One key is the AS_PATH of the matched RIB entry: the ASNs in path order, first hop first, joined by `/`. AS prepends stay in the path. The path is capped at 20 ASNs and about 150–200 characters. A longer path is truncated and a warning is logged. Keys have no label.

| Key | Meaning |
|---|---|
| `293/6939/6830/33915` | Peer AS 293, origin AS 33915 |
| `9498/6939/4766/38091/38091` | Path with an origin prepend |
| `15169` | Directly connected origin (one-hop path) |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A flow with both endpoints in the RIB updates two paths. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload to ASPATH | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes sent toward prefixes reached over this path. |
| 1 | Download from ASPATH | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes received from prefixes reached over this path. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
