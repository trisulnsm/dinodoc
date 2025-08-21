# LinkLayerStats

Breakdown of activity at link layer

## Keys

Each entry in this counter group is keyed by the EtherType value, which identifies the protocol encapsulated in the Ethernet frame. Common EtherTypes include:

| KEY   | PROTOCOL                | DESCRIPTION                   |
|-------|-------------------------|-------------------------------|
| 0800  | IPv4                    | Internet Protocol v4          |
| 86DD  | IPv6                    | Internet Protocol v6          |
| 0806  | ARP                     | Address Resolution Protocol   |
| 8035  | RARP                    | Reverse ARP                   |
| 8100  | VLAN                    | Virtual LAN (802.1Q)          |
| 8847  | MPLS                    | Multiprotocol Label Switching |


## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{9F5AD3A9-C74D-46D8-A8A8-DCDD773730BA}` | Native | 60                | 300                  |

## Meter list

| ID  | DESCRIPTION | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS |
| --- | ----------- | --------- | ------------ | --------------- | ----- |
| 0   | Total       | 10        | 0            | VT_RATE_COUNTER | Bps   |
| 1   | Packets     | 10        | 0            | VT_RATE_COUNTER | pps   |

## Total 

Total Bandwith in Bytes/sec. Multiply by 8 for bits/sec

## Packets

Packets per second. 

