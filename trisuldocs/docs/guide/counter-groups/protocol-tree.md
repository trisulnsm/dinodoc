# Protocol Tree

Counts bytes and packets for each protocol path, from EtherType through IP protocol to well-known port or ICMP type, keyed by that path.

| Property | Value |
|---|---|
| GUID | `{2CF4DCFF-77E5-45E9-AA03-8D827CE0813C}` |
| Layer | L3 Network |
| Input | Packets |
| Key type | Protocol path (`ethertype/proto/port`, decimal) |
| Implementation | Lua — cg_protocol_tree.lua, fed by ptree_ethernet.lua (apps/analyzers/protocol-tree) |
| Trisul App | protocol-tree (install from Trisul Apps) |
| Bucket / Topper | 1 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `ptree_ethernet.lua` runs on every Ethernet frame and builds one key. Each frame updates only that one key, so the group total equals the Ethernet traffic.
- Only the full path is counted. A parent such as `2048/6` (ip/tcp) gets no traffic of its own when its frames have a port. Sum the child keys, or use a prefix search, to get the parent value.
- The bucket size is 1 second, not 60 s.
- Path rules:
  - Non-IP frames: the EtherType only, for example `2054` (ARP). VLAN-tagged frames stop at `33024` (0x8100) and are not decoded further.
  - IPv4 (`2048`) and IPv6 (`34525`): then the IP protocol number.
  - TCP (6) and UDP (17): then the lower of the two ports if it is below 1024, else `65535` (shown as "others").
  - IPv4 ICMP (1): then the ICMP type. ICMPv6 is protocol 58 and has no third element.
  - IPv4 fragments: the script means to put `frag` in place of the port, but its check reads the low byte of the fragment offset instead of the flags. Most fragments are not keyed `frag`, and non-first fragments can get a "port" read from payload bytes.
  - IPv6 extension headers are not followed. The next-header value is used as the protocol.

## Keys

Decimal numbers joined with `/`. The script's `keyinfo` table maps about 3,000 paths to readable labels such as `ip/tcp/https`. Paths without an entry, such as bare EtherTypes, show the raw key.

| Key | Meaning |
|---|---|
| `2048/6/443` | ip/tcp/https |
| `2048/17/53` | ip/udp/domain |
| `34525/6/65535` | ip6/tcp/others (both ports 1024 or above) |
| `2048/1/3` | ip/icmp/dest-unreachable |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Each frame updates one key, so the total is the Ethernet traffic. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | bytes | VT_COUNTER | Bytes | 50 | 20 | Frame bytes for this protocol path. |
| 1 | pkts | VT_COUNTER | Pkts | 50 | 20 | Frames for this protocol path. |
| 2 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 3 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |

## Related

- [Apps](/docs/guide/counter-groups/apps)
- [Network Layer Stats](/docs/guide/counter-groups/networklayerstats)
- [Link Layer Stats](/docs/guide/counter-groups/link-layer-stats)
