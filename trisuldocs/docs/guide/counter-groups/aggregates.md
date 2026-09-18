# Aggregates

Aggregate statistics such as total bandwidth seen across the network.


## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{393B5EBC-AB41-4387-8F31-8077DB917336}` | Native | 60                | 300                  |



## Key Format 

The important keys in the network representing various types of aggregate metrics are 

| Key string | Description | 
| -- | ---- |
|TOTALBW | Total bandwidth |
|DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, DIR_WITHINHOME | Traffic relative to the home network as defined in [Home Networks](/docs/guide/ag/context/home_networks) These represent traffic entering the home network , exiting the home network, totally outside the home network and within the home network. |


## Meters List

1 minute resolution.

| ID  | METERS                     | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   | DESCRIPTIONS |
| --- | -------------------------- | --------- | ------------ | --------------- | ------- | -------------|
| 0   | Total                      | 0         | 0            | VT_RATE_COUNTER | Bps     | Total bandwidth observed by Trisul. In Bytes/sec you can multiply by 8 to get bits/sec. |
| 1   | Packets                    | 0         | 0            | VT_RATE_COUNTER | pps     | Total packets observed by Trisul. In packets/sec. |
| 2   | Active Sessions            | 0         | 0            | VT_COUNTER      | sess    | Active sessions. Also can use [Meta Session Group > Master Size ](/docs/guide/counter-groups/meta-session-group#meter-list) |
| 3   | Layer 2 Broadcast          | 0         | 0            | VT_RATE_COUNTER | Bps     | The L2 Broadcast bandwidth.  When the destination MAC is the broadcast MAC address  `FF:FF:FF:FF:FF:FF` |
| 4   | Layer 2 Multicast          | 0         | 0            | VT_RATE_COUNTER | Bps     | The L2 multicast bandwidth. When the destination MAC is the multicast MAC address prefix `01:00:5E:xx:xx:xx` |
| 5   | Layer 2 Unicast            | 0         | 0            | VT_RATE_COUNTER | Bps     | The L2 Unicast.  |
| 6   | Layer 3 Broadcast          | 0         | 0            | VT_RATE_COUNTER | Bps     | IP Broadcast bandwidth send to the local broadcast address `255.255.255.255` |
| 7   | Layer 3 Multicast          | 0         | 0            | VT_RATE_COUNTER | Bps     | IP Multicast traffic sent to `224.0.0.0/4`  |
| 8   | Layer 3 Unicast            | 0         | 0            | VT_RATE_COUNTER | Bps     | IP Unicast traffic. |
| 9   | Fragments                  | 0         | 0            | VT_RATE_COUNTER | pps     | IP Fragments seen  |
| 10  | Gauge Value                | 0         | 0            | VT_GAUGE        | Val     | The current value of a gauge metric. It represents the value observed at that point in time and can increase or decrease as the underlying measurement changes. |
| 11  | Unused Cardinality counter | 20        | 20           | VT_GAUGE        | Uniques | See [cardinality counters](/docs/guide/ag/context/cardinality_countergroups) |
| 12  | Unused Cardinality counter | 20        | 20           | VT_GAUGE        | Uniques | See [cardinality counters](/docs/guide/ag/context/cardinality_countergroups) |


:::info   Using the meters.

For the key you selected one or more of the following metrics will be available. For example if you query for key `TOTALBW`  the metric Total will represent the total bandwidth of the network as seen by Trisul. If you query for `DIR_INTO_HOME` the metric _TOtal_ will represen the total bandwidth downloaded into your network.
:::