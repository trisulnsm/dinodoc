# NetworkLayerStats

Breakdown of activity at network layer

## Keys

Each entry in this counter group is keyed by the protocol field from the IP packet header, represented in hexadecimal format. This field identifies the next-level protocol used in the data portion of the IP datagram.

| KEY | PROTOCOL | DESCRIPTION                |
|-----|----------|----------------------------|
| 06  | TCP      | Transmission Control Protocol |
| 11  | UDP      | User Datagram Protocol        |
| 01  | ICMP     | Internet Control Message Protocol |
| 29  | IPv6     | IPv6 encapsulation              |
| 2F  | GRE      | Generic Routing Encapsulation   |

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{E89BCD56-30AD-40F5-B1C8-8B7683F440BD}` | Native | 60                | 300                  |

## Meter list



| ID  | DESCRIPTION     | TOP COUNT | BOTTOM COUNT | TYPE               | UNITS |
| --- | --------------- | --------- | ------------ | ------------------ | ----- |
| 0   | Total           | 10        | 0            | VT_RATE_COUNTER    | Bps   |
| 1   | Packets         | 10        | 0            | VT_COUNTER         | pkts  |
| 2   | Active Flows    | 10        | 0            | VT_RUNNING_COUNTER | flows |
| 3   | Total Flows     | 10        | 0            | VT_COUNTER         | flows |
| 4   | Into Interface  | 10        | 0            | VT_RATE_COUNTER    | Bps   |
| 5   | Outof Interface | 10        | 0            | VT_RATE_COUNTER    | Bps   |

### Total           

Total bandwidth (bytes/sec) for this Network Layer protocol.

### Packets         

Total number of packets for this Network Layer protocol.

### Active Flows    

Number of concurrently active flows for this Network Layer  protocol.

### Total Flows     

Total number of flows seen for this protocol.

:::note Interface Tracking NetFlow

The following two metrics are created when a Filtered Counter Group is created with Host as "Network Layer Stats" and Filter as "FlowIntf - NetFlow Router Interface" Then these represent for that particular inferface ingress and egress Network Layer protocol metrics

::: 

### Into Interface  

Bandwidth for this protocol ingressing the specified interface (when used with Interface Trackers).

### Outof Interface

Bandwidth for this protocol egressing the specified interface (when used with Interface Trackers).