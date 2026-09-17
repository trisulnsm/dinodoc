# External Hosts v6

IPv6 Hosts outside HOME NETWORK

## Counter group

| GUID                                     | TYPE       | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ---------- | ----------------- | --------------------- |
| `{9DC000A5-E122-4BDC-BC56-D3594A00BB53}` | Stat Based | 60                 | 300                    |

## Meter list

| ID  | DESCRIPTION       | TOP COUNT | BOTTOM COUNT | TYPE                | UNITS   | DESCRIPTION |
| --- | ------------------- | --------- | ------------ | ------------------- | ------- |-------------|
| 0   | Total                  | 50        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the total bandwidth seen by this host in both the transmit and receive direction, for IPv6 hosts located outside the home network. |
| 1   | Received               | 10        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the receive bandwidth of the host, counted when the host's IPv6 address appears in the destination address field of the packet. |
| 2   | Transmit               | 10        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the transmit bandwidth of the host, counted when the host's IPv6 address appears in the source address field of the packet. |
| 3   | Total Packets          | 10        | 0            | VT_RATE_COUNTER     | pps     | This meter reports the number of packets seen for this host as either the source address or the destination address. |
| 4   | Active conns           | 50        | 0            | VT_RUNNING_COUNTER  | conns   | This meter reports the number of concurrently active IP flows involving this host at the end of the streaming window. Hosts that top this metric generally have long running flows, such as video, audio, conferencing, or file transfers. |
| 5   | Attacker alerts        | 20        | 0            | VT_COUNTER          | alerts  | This meter reports the number of IDS or BadFellas alerts where this host was the source address of the packet that triggered the alert. |
| 6   | Homenet                | 20        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the traffic bandwidth for conversations between this external host and a host inside the home network. |
| 7   | External               | 20        | 0            | VT_RATE_COUNTER     | Bps     | This meter reports the traffic bandwidth for conversations between this external host and another host outside the home network. |
| 8   | TCP SYN sent           | 10        | 0            | VT_COUNTER          | packets | This meter reports how many TCP SYN packets were sent with this host's address as the source, representing this host acting as the client of a TCP service. |
| 9   | TCP SYN recv           | 10        | 0            | VT_COUNTER          | packets | This meter reports how many TCP SYN packets were received with this host's address as the destination, representing this host acting as the server of a TCP service. |
| 10  | TCP SYNACK sent        | 10        | 0            | VT_COUNTER          | packets | This meter reports how many TCP SYN plus ACK packets were sent from this host's address as the source. A SYN plus ACK packet is the response to a SYN as part of the TCP session setup handshake, so this represents this host acting as the server side of connection setup. |
| 11  | Blacklist alerts       | 20        | 0            | VT_COUNTER          | alerts  | This meter reports how many alerts were generated involving this address as either a source or a destination, sourced from the BadFellas threat intelligence plugin, trisul-badfellas. |
| 12  | Victim alerts          | 20        | 0            | VT_COUNTER          | alerts  | This meter reports how many alerts were generated with this address as the destination address. |
| 13  | New conns              | 20        | 0            | VT_COUNTER          | conns   | This meter reports how many new connections were made involving this address. Hosts that top this metric generally have short, high frequency connections, such as DNS servers and clients. |
| 14  | Into Interface         | 20        | 0            | VT_RATE_COUNTER     | Bps     | This meter appears only in a filtered counter group where the parent counter group is External Hosts v6 and the filter is a NetFlow interface. When used with the NetFlow Interface Tracker, it reports bandwidth involving this address as source or destination that is ingressing the interface specified in the interface tracker. |
| 15  | Outof Interface        | 20        | 0            | VT_RATE_COUNTER     | Bps     | This meter appears only in a filtered counter group where the parent counter group is External Hosts v6 and the filter is a NetFlow interface. When used with the NetFlow Interface Tracker, it reports bandwidth involving this address as source or destination that is egressing the interface specified in the interface tracker. |
| 16  | Flow Records           | 20        | 0            | VT_COUNTER          | Bps     | This meter reports the number of NetFlow records with this address involved as either source or destination. |
| 17  | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a cardinality counter for this counter group. See the [cardinality counter groups documentation](/docs/guide/ag/context/cardinality_countergroups) for how these are populated and used. |
| 18  | Unused Cardinality counter | 20    | 20           | VT_GAUGE            | Uniques | This is a cardinality counter for this counter group. See the [cardinality counter groups documentation](/docs/guide/ag/context/cardinality_countergroups) for how these are populated and used. |