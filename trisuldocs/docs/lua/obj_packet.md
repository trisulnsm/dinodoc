# Object Packet

Represents a packet. A packet in Trisul consists of [layers](/docs/lua/obj_layer). If your LUA script is processing packets the layering is already done for you.

```lua
Packet
      Layer0 : Ethernet Frame (id={974FB098-DE46-45DB-94DA-8D64A3BBCDE5})
      Layer1 : IP Frame id=..
      Layer2 : UDP Frame
```

You can either work on the packet directly using the `rawbytes` buffer or locate any layer you want and then work on that. This saves you an enormous amount of work because the layers are quite complicated due to various encapsulation, labels, and other link layer quirks.

## Methods

| Name                                                                                                   | In                       | Out                                                              | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| timestamp                                                                                              |                          | number, number                                                   | two numbers representing tv_secs and tv_usecs (or nsecs)                                               |
| rawbytes                                                                                               |                          | a [Buffer](/docs/lua/obj_buffer) object | the full packet                                                                                        |
| wire_length                                                                                            |                          | number                                                           | packet length                                                                                          |
| capture_length                                                                                         |                          | number                                                           | number of bytes captured. Could be less than wire_length due to a<br/>snaplen setting                  |
| num_layers                                                                                             |                          | number                                                           | number of layers                                                                                       |
| get_layer                                                                                              | number                   | a [Layer](/docs/lua/obj_layer) object   | get a layer by index<br/>Note: Index starts from 0..num_layers-1 ; unlike LUA                          |
| find_layer                                                                                             | guid                     | a [Layer](/docs/lua/obj_layer) object   | get layer identified by the GUID                                                                       |
| set_timestamp                                                                                          | number, number           |                                                                  | set timestamp of the packet as seconds, (option) microseconds                                          |
| [set_packetstore_policy](/docs/lua/obj_packet#functionset_packetstore_policy) | number                   |                                                                  | set indication of if and how this packet will be stored                                                |
| flowid                                                                                                 |                          | [FlowID](/docs/lua/obj_flowid) object   | get the IPv4 or IPv6 based flow ID of this packet. For non-IP packets this returns a flowid of all 0s. |
| originid                                                                                               |                          | number                                                           | indicates origination of this packet, such as an interface or stream                                   |
| [set_packet](/docs/lua/obj_packet#functionset_packet)                         | tv_sec,tv_usec,dlt,bytes |                                                                  | set the byte content of the packet -ie overwrites the actual packet                                    |

## Function `set_packetstore_policy`

Indicate to the Trisul framework how you want this packet to be stored

### Purpose

Indicate to Trisul whether you want to store this particular packet or not. This gives you very fine grained packet level control over the PCAP storage. Note that this is only a hint and if there are other LUA scripts which want to store the packet – this hint could be ignored.

### Parameters

| Name | Type | Info |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| policy_flags | number | 0 = Dont store this packet  <br/>1 = Store this full packet including payload  <br/>2 = Store this packet headers only |


### Return value

### Example

---

## Function `set_packet`

Sets the packet data.

### Purpose

Essentially creates a new packet with a timestamp, DLT (Data Link Type), and bytes buffer.

This method is mainly used in [InputFilter](/docs/lua/inputfilter) scripts which creates new packets from arbitary sources.

### Parameters

| timestamp secs  | number | tv_sec value from Unix Epoch Time                                                                                                                                                                                                                                                                                                               |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp usecs | number | tv_usec value from Unix Epoch Time                                                                                                                                                                                                                                                                                                              |
| dlt             | number | data link type number. This is reused from LIBPCAP values. This number basically tells Trisul what protocol is first in the layer of the packet. The most common DLT numbers are<br/>1 – Ethernet (EN10MB)<br/>101 – Raw<br/>228 – IPv4. See [tcpdump data link types](http://www.tcpdump.org/linktypes.html) for a list of numbers you can use |
| bytes           | string | the actual packet bytes                                                                                                                                                                                                                                                                                                                         |

### Return value
