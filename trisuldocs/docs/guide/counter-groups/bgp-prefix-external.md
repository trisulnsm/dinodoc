# BGP-Prefix External

NetFlow traffic keyed by the BGP prefix (RIB route) that matches the remote IP address.

| Property | Value |
|---|---|
| GUID | `{C26520C4-DB9D-49EC-5D8B-35AD39951E36}` |
| Layer | Flow Record |
| Input | Flows |
| Key type | IPv4 CIDR prefix (dotted decimal) |
| Implementation | Lua — bgp-prefix.lua (trisul_geo/src/geometer) defines the group; Native C++ — CPICGASPath (trisul_geo/src/geometer/PICGASPath.cpp) updates it |
| Bucket / Topper | 60 s / 300 s |
| Enabled by default | No. Set `MeterASPATH` to TRUE in Geo.xml and provide a BGP RIB. |

## What it measures

"External" means routes learned over BGP and stored in the router's RIB. The code does not check Home Networks. It meters any flow endpoint whose address matches a RIB prefix.

The four BGP groups ([BGP-ASPATH](/docs/guide/counter-groups/bgp-aspathbgp), [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as), [BGP-Peer AS](/docs/guide/counter-groups/bgp-peer-as), [BGP-Prefix External](/docs/guide/counter-groups/bgp-prefix-external)) are updated together by CPICGASPath for each NetFlow/IPFIX record:

- **Prerequisites.** Set `MeterASPATH` to TRUE in Geo.xml (default FALSE). Trisul needs a BGP RIB per router: `<router-ip>_routes.db.sqlite3` in `BGPRibsPath` (Geo.xml ships `/usr/local/var/ramdisk`). See [Configuring BGP](/docs/prodguide/isp/bgp).
- **RIB selection.** The plugin picks the RIB whose file name matches the NetFlow exporter (router) address in the flow. If there is none and `EnableDownstreamRIBPush` is TRUE, it uses the downstream RIB `0.0.0.0_routes.db.sqlite3` downloaded by the Geo feed. Otherwise the flow is skipped.
- **Lookup.** Both IPv4 endpoints are looked up (longest prefix match). There is no Home Network check: an endpoint is counted only if its address is in the RIB. Endpoints not in the RIB, such as your own addresses when the RIB holds only upstream routes, add nothing. There is no "unknown" key.
- **Direction.** Upload = bytes sent toward the matched prefix. Download = bytes received from it. A flow whose two endpoints both match updates two keys in each group.
- Packets are not counted. IPv6 is not supported.

Each update also adds a bidirectional edge between the prefix and its [BGP-Origin AS](/docs/guide/counter-groups/bgp-orgin-as) key (`AddFlowEdges`, default true).

## Keys

One key is the matched RIB prefix in CIDR notation, exactly as stored in the RIB. Keys have no label.

| Key | Meaning |
|---|---|
| `32.1.28.0/24` | Route with path `293 6939 6830 33915` |
| `8.8.8.0/24` | Route covering 8.8.8.8 |
| `1.11.230.0/24` | Route covering 1.11.230.5 |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. A flow with both endpoints in the RIB updates two prefix keys. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | Upload - Xmit | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes sent toward this prefix. |
| 1 | Download - Recv | VT_RATE_COUNTER | Bps | 100 | 10 | Flow bytes received from this prefix. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Prefix](/docs/guide/counter-groups/prefix) (GeoLite2 blocks, not RIB routes)
- [Flow-Prefix](/docs/guide/counter-groups/flow-prefix)
