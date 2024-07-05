# Terminology

Various terminology used in this and other guides.

## List of terms

Alerts  
  
A notice that something needs attention. Out of the box Trisul can
generate the following types of alerts

1.  threshold crossing : simple traffic over/under threshold
2.  badfellas : when certain Intel events such as known malicious
    indicators are seen
3.  flowtracker : certain types of flow activity are seen, such as large
    or long lived uploads
4.  ids : alerts from Suricata integrated with other metrics in Trisul
5.  anomaly : using the machine learning Threshold Band feature

in addition, you can create your own alert types and fire them using the
LUA API.

<i class='fa fa-chain'/> Also see [Alerts](/docs/ug/alerts/index.html)

------------------------------------------------------------------------

Counter Groups  
A type of network entity for which various metrics are tracked. Each
individual instance within it is tracked by a unique Key. For example :
The “Host” counter group contains meters such as Total Traffic,
Concurrent connections, etc. Each host within the *Host* Counter group
is identified by a IP Address.

<i class='fa fa-chain'/> Also see [Custom Counter
Groups](/docs/ug/cg/custom.html)

------------------------------------------------------------------------

Flows  
An IP conversation.  
Trisul tracks flows by processing network packets or by working off
Netflow. The flows work for both IPv4 and IPv6 and contain the 5 Tuple
besides other flow attributes like MPLS Labels, VRFs, Interface Index,
flow tags, etc

<i class='fa fa-chain'/> Also see [Monitoring
flows](/docs/ug/flow/index.html)

------------------------------------------------------------------------

Packets  
To aid the practice of NSM, Trisul stores raw packets for extended
periods of time. Innovative options are available to control storage
requirements. Packets are encrypted on disk for added security.

<i class='fa fa-chain'/> Also see [Packet storage
basics](/docs/ug/caps/fullcontent.html) , [Controlling what is
stored](/docs/ug/caps/packetstorage.html)

------------------------------------------------------------------------

Resources  
HTTP URLs and DNS (currently) \| All URLS and domains are logged.
Provides a useful handle for incident response.

<i class='fa fa-chain'/> Also see
[Resources](/docs/ug/resources/url.html)
