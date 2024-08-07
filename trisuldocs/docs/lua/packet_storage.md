# PCAP storage

<span class='badge badge--info'>FRONT-END SCRIPT</span>

Control packet storage policy on a per flow basis

Trisul has a sophisticated packet storage engine which allows you to control what packets get stored. For most cases you can use the built in packet storage policy configuration outlined in [Controlling Packet Storage](/docs/ug/caps/packetstorage)

If you want even more fine grained control of the PCAP storage policy on a per flow level, you can write a LUA script as described in this section.

## Structure

Packet Storage skeleton script

### Table `packet_storage`

You need to supply code for one or more of the following functions.

| name | type| desc|
| ---- | ----| ---|
| [filter](/docs/lua/packet_storage#table-packet_storage)             | function(engine,timestamp,flowkey)  | called when a new flow starts. Examine the flow tuples and decide the packet (pcap) storage policy |
| [filter_payload](/docs/lua/packet_storage#function-filter_payload) | function(engine, time, flow, dir, seekpos, buff) | called when first chunk of TCP data has been reassembled. Use this if you want to examine the headers and decide packet storage policy |


## LUA objects reference

The following objects are specific to this feature.


## LUA functions reference

Your script needs to supply one or more of these functions listed below.

### Function `filter`

Allows you to determine packet storage policy on a per-flow basis. This allows a fine-grained control that may not be possible using the built in method outlined in [Controlling Packet Storage](/docs/lua/packet_storage)

#### When called

When a new flow is established, but no packets have been stored for that flow yet.

#### Parameters

| engine    | An [Engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                            | Timestamp seconds when the first packet in the flow was seen                   |
| flowkey   | A [FlowID](/docs/lua/obj_flowid) object  | use this to determine IPs and Ports involved in the flow                       |

#### Return value

Your script must examine the flow tuples and return one of the following values that determine how packets will be stored for that flow.

| number | name        | desc                                        |
| ------ | ----------- | ------------------------------------------- |
| -1     | No opinion  | Use the default policy                      |
| 0      | Ignore      | Do not store this packet                    |
| 1      | Full packet | all packets in this flow must be stored     |
| 2      | Headers     | only store upto the TCP or UDP header level |
| 3      | 1MB         | only store the first 1MB of this flow       |
| 4      | 100KB       | only store the first 100KB of this flow     |
| 5      | 10KB        | only store the first 10KB of this flow      |
| 6      | 10M         | only store the first 10MB of this flow      |

other values returned will be ignored and treated as “-1”.

#### Example

The following example specifically excludes packets from `192.168.2.8` from being stored

```lua
filter = function(engine, timestamp, flow )

    if flow:ipa_readable() == "192.168.2.8" or 
       flow:ipz_readable() == "192.168.2.8" then
      return 0
    else
      return -1
    end

  end
```

---

### Function `filter_payload`

Presents the first chunk of payload transmitted in each direction of the flow. Use this function if you need to see the actual bytes inside the flow to decide if you want to save the packets or not.

#### When called

When the first chunk of TCP reassembled data is available on the flow. This method is called only once for the first chunk.

#### Parameters

| engine    | An [Engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework          |
| --------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| timestamp | number                                                            | Timestamp seconds when the first packet in the flow was seen                            |
| flowkey   | A [FlowID](/docs/lua/obj_flowid) object  | use this to determine IPs and Ports involved in the flow                                |
| direction | number                                                            | 0 = OUT payload in client>server direction (same as the original SYN) 1 = server>client |
| seekpos   | number                                                            | Seek position byte position from the beginning of the stream                            |
| buffer    | A [Buffer](/docs/lua/obj_buffer) object  | represents the reassembled bytes                                                        |

#### Return value

Your script must examine the flow tuples and return one of the following values that determine how packets will be stored for that flow.

| number | name        | desc                                        |
| ------ | ----------- | ------------------------------------------- |
| -1     | No opinion  | Use the default policy                      |
| 0      | Ignore      | Do not store this packet                    |
| 1      | Full packet | all packets in this flow must be stored     |
| 2      | Headers     | only store upto the TCP or UDP header level |
| 3      | 1MB         | only store the first 1MB of this flow       |
| 4      | 100KB       | only store the first 100KB of this flow     |
| 5      | 10KB        | only store the first 10KB of this flow      |
| 6      | 10M         | only store the first 10MB of this flow      |

other values returned will be ignored and treated as “-1”.

#### Example

The following example

- **blocks** TLS packets that run over port443
- TLS identified not by port but by TLS Version number 16 03 03
- **allows** other packets to be stored

```lua
filter_payload  = function(engine, time, flow, dir, seekpos, buff )
     local hs_type           = buff:hval_8(0)
     local tls_version_major   = buff:hval_8(1)
     local tls_version_minor   = buff:hval_8(2)
     if hs_type == 16 and tls_version_major ==3 and tls_version_minor < 4
         -
         - first TLS packets are handshake,version
         - return 0 to IGNORE TLS packets
         return 0
     else
         -
         - return -1 , no opinion. use the default policy
         -
         return -1
     end
end,
```

### Co-operation

Rules when you have multiple scripts

- if two LUA scripts return conflicting values. then the more liberal type of storage policy is used. If `a.lua` returns `0 - dont store packet` for a flow F, and `b.lua` returns `1 - store full packet` than the latter is chosen.
