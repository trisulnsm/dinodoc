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
|DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, DIR_WITHINHOME | Traffic relative to the home network as defined in [Home Networks](/docs/ag/context/home_networks) These represent traffic entering the home network , exiting the home network, totally outside the home network and within the home network. |


## Meters List

1 minute resolution.

| ID  | DESCRIPTION                | TOP COUNT | BOTTOM COUNT | TYPE            | UNITS   |
| --- | -------------------------- | --------- | ------------ | --------------- | ------- |
| 0   | Total                      | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 1   | Packets                    | 0         | 0            | VT_RATE_COUNTER | pps     |
| 2   | Active Sessions            | 0         | 0            | VT_COUNTER      | sess    |
| 3   | Layer 2 Broadcast          | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 4   | Layer 2 Multicast          | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 5   | Layer 2 Unicast            | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 6   | Layer 3 Broadcast          | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 7   | Layer 3 Multicast          | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 8   | Layer 3 Unicast            | 0         | 0            | VT_RATE_COUNTER | Bps     |
| 9   | Fragments                  | 0         | 0            | VT_RATE_COUNTER | pps     |
| 10  | Unused Cardinality counter | 20        | 20           | VT_GAUGE        | Uniques |
| 11  | Unused Cardinality counter | 20        | 20           | VT_GAUGE        | Uniques |


:::info   Using the meters.

For the key you selected one or more of the following metrics will be available. For example if you query for key `TOTALBW`  the metric Total will represent the total bandwidth of the network as seen by Trisul. If you query for `DIR_INTO_HOME` the metric _TOtal_ will represen the total bandwidth downloaded into your network.
:::


### Total

Total bandwidth observed by Trisul. In Bytes/sec you can multiply by 8 to get bits/sec. 

### Packets

Total packets observed by Trisul. In packets/sec. 

### Active Sessions

Active sessions. Also can use [Meta Session Group > Master Size ](/docs/counter-groups/meta-session-group#master-size)

### Layer 2 Broadcast

The L2 Broadcast bandwidth.  When the destination MAC is the broadcast MAC address  `FF:FF:FF:FF:FF:FF`

### Layer 2 Multicast

The L2 multicast bandwidth. When the destination MAC is the multicast MAC address prefix `01:00:5E:xx:xx:xx`

### Layer 2 Unicast

The L2 Unicast. 

### Layer 3 Broadcast

IP Broadcast bandwidth send to the local broadcast address `255.255.255.255`

### Layer 3 Multicast

IP Multicast traffic sent to `224.0.0.0/4` 

### Layer 3 Unicast

IP Unicast traffic.

### Fragments

IP Fragments seen 

### Unused Cardinality counter

See [cardinality counters](/docs/ag/context/cardinality_countergroups)