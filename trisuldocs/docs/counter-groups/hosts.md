# Hosts

Stats for each IP Host

## Key Format 

IPv4 hosts are keyed in the dotted hex format "C0.A8.01.04"  to represent "192.168.1.4"

## Counter group

| GUID                                     | TYPE   | Bucke Size (secs) | Topper Bucket(Secs): |
| ---------------------------------------- | ------ | ----------------- | -------------------- |
| `{4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` | Native | 60                | 300                  |


## Meter list


:::tip Resolution 
These meters are update every BucketSize milliseconds. By default 60,000 or 1 minute. 
:::


| ID  | DESCRIPTION      | TOP COUNT | BOTTOM COUNT | TYPE               | UNITS   |
| --- | ---------------- | --------- | ------------ | ------------------ | ------- |
| 0   | Total            | 50        | 0            | VT_RATE_COUNTER    | Bps     |
| 1   | Received         | 10        | 0            | VT_RATE_COUNTER    | Bps     |
| 2   | Transmit         | 10        | 0            | VT_RATE_COUNTER    | Bps     |
| 3   | Total Packets    | 0         | 0            | VT_RATE_COUNTER    | pps     |
| 4   | Active conns     | 50        | 0            | VT_RUNNING_COUNTER | conns   |
| 5   | Attacker alerts  | 20        | 0            | VT_COUNTER         | alerts  |
| 6   | Homenet          | 20        | 0            | VT_RATE_COUNTER    | Bps     |
| 7   | External         | 20        | 0            | VT_RATE_COUNTER    | Bps     |
| 8   | TCP SYN sent     | 10        | 0            | VT_COUNTER         | packets |
| 9   | TCP SYN recv     | 10        | 0            | VT_COUNTER         | packets |
| 10  | TCP SYNACK sent  | 10        | 0            | VT_COUNTER         | packets |
| 11  | Blacklist alerts | 20        | 0            | VT_COUNTER         | alerts  |
| 12  | Victim alerts    | 20        | 0            | VT_COUNTER         | alerts  |
| 13  | New conns        | 20        | 0            | VT_COUNTER         | conns   |
| 14  | Into Interface   | 20        | 0            | VT_RATE_COUNTER    | Bps     |
| 15  | Outof Interface  | 20        | 0            | VT_RATE_COUNTER    | Bps     |
| 16  | Flow Records     | 100       | 0            | VT_COUNTER         | Frecs   |


### Total     

Total bandwidth seen by the host in both transmit and receive direction.

### Received         

Receive bandwidth of the host, where the the IP Address of the host is in the "Destination IP" of the packet

### Transmit         

Transmit  bandwidth of the host, where the the IP Address of the host is in the "Source IP" of the packet

### Total Packets    

Number of packets seen for this host as either the source IP or destination IP.

### Active conns     

Number of concurrently active IP Flows involving this host at the end of the streaming window. Toppers for this metric generally feature hosts with long running flows such as video, audio, conferencing, file transfers and so. 

### Attacker alerts  

Number of IDS, BadFellas alerts where this host was the source IP of the packet that triggered the alert.

### Homenet          

Traffic bandwidth where the other IP Address is within the organizations Home Network. 

### External         

Traffic bandwidth where the other IP Address is outside the Home Network.

### TCP SYN sent 

How many TCP SYN packets were sent with this IP Address as source IP. The client of a TCP service if you will.

### TCP SYN recv     

How many TCP SYN packets were sent with this IP Address as destination IP.The server of a TCP service if you will.


### TCP SYNACK sent  

SYN+ACK is the response to a SYN as part of the TCP Session Creation handshake.  How many SYN+ACK packets were sent from this IP Adddress as source. This represents server connection setup. 


### Blacklist alerts 

How many alerts were generated involving this IP as a source or destination.  THis comes from BadFellas Threat Intelligence plugin , trisul-badfellas. 

### Victim alerts    

How many alerts were generated with this IP Address as a destination address. 

### New conns        

How many new connections were made involving this IP Address. Generally toppers for this metric feature short high frequency connections such as DNS servers and clients, or other such traffic.

### Into Interface   

:point_right: This metric only appears in a Filtered Counter Group where the parent counter group is Hosts and Filter is a NetFlow interface  

When used with NetFlow Interface Tracker, this metric is bandwidth involving this IP Address as source or destination that is ingressing the interface specified in the Interface Tracker.

### Outof Interface  

:point_right: This metric appears only in a Filtered Counter Group when combined with a NetFlow Interface as a "Filter" and parent counter group as "Hosts" 

When used with NetFlow Interface Tracker, this metric is bandwidth involving this IP Address as source or destination that is egressing the interface specified in the interface tracker. 

### Flow Records 

Number of NetFlow records with this IP Address involved as source or destination.

### Cardinality counters

See [cardinality counters](/docs/ag/context/cardinality_countergroups)