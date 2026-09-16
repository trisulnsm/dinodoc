# NetworkLayerStats

Breakdown of activity at network layer

## Keys

Each entry in this counter group is keyed by the protocol field from the IP packet header, represented in hexadecimal format. This field identifies the next-level protocol used in the data portion of the IP datagram.

| KEY | PROTOCOL | DESCRIPTION                       |
| --- | -------- | ---------------------------------- |
| 06  | TCP      | Transmission Control Protocol      |
| 11  | UDP      | User Datagram Protocol             |
| 01  | ICMP     | Internet Control Message Protocol  |
| 29  | IPv6     | IPv6 encapsulation                 |
| 2F  | GRE      | Generic Routing Encapsulation      |

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | --------------------- |
| `{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}` | Native | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE                | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ------------------- | ------- |-------------|
| 0   | Total                  | 10        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the total bandwidth, in bytes per second, for this network layer protocol. |
| 1   | Packets                | 10        | 0            | VT_COUNTER          | pkts    | This meter reports the total number of packets for this network layer protocol. |
| 2   | Active Flows           | 10        | 0            | VT_RUNNING_COUNTER  | flows   | This meter reports the number of concurrently active flows for this network layer protocol. |
| 3   | Total Flows            | 10        | 0            | VT_COUNTER          | flows   | This meter reports the total number of flows seen for this protocol. |
| 4   | Into Interface         | 10        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the bandwidth for this protocol ingressing the specified interface, when used with Interface Trackers. |
| 5   | Outof Interface        | 10        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the bandwidth for this protocol egressing the specified interface, when used with Interface Trackers. |
| 6   | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a reserved gauge slot intended for a unique value cardinality metric. It is not currently mapped to any field for this counter group, so it remains an inactive placeholder with no data populated. |
| 7   | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a second reserved cardinality gauge slot with the same status as meter 6. It is inactive and not instrumented for this group. |

:::note Interface Tracking NetFlow

Meters 4 and 5 (Into Interface and Outof Interface) are created when a filtered counter group is set up with the parent counter group as Network Layer Stats and the filter as a NetFlow Router Interface. In that configuration, these meters represent the ingress and egress network layer protocol metrics for that specific interface.

:::