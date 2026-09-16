# LinkLayerStats

Breakdown of activity at link layer

## Keys

Each entry in this counter group is keyed by the EtherType value, which identifies the protocol encapsulated in the Ethernet frame. Common EtherTypes include:

| KEY   | PROTOCOL | DESCRIPTION                   |
| ----- | -------- | ------------------------------ |
| 0800  | IPv4     | Internet Protocol v4           |
| 86DD  | IPv6     | Internet Protocol v6           |
| 0806  | ARP      | Address Resolution Protocol    |
| 8035  | RARP     | Reverse ARP                    |
| 8100  | VLAN     | Virtual LAN (802.1Q)           |
| 8847  | MPLS     | Multiprotocol Label Switching  |

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{9F5AD3A9-C74D-46D8-A8A8-DCDD773730BA}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTION |
| --- | ----------- | --------- | ------------ | --------------- | ------- |-------------|
| 0   | Total           | 10        | 0            | VT_RATE_COUNTER | Bps     | This meter reports the total bandwidth in bytes per second for frames of this EtherType. Multiply by eight to obtain bits per second. |
| 1   | Packets         | 10        | 0            | VT_RATE_COUNTER | pps     | This meter reports the packet rate in packets per second for frames of this EtherType. |
| 2   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 3   | Unused Cardinality counter | 20 | 20    | VT_GAUGE        | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 2. It is inactive and not instrumented for this group. |