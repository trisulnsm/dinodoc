# Protocol Handler

**FRONTEND SCRIPT**

A custom protocol handler is used to construct a ‘protocol layer stack’. The script takes a packet at a given layer and is responsible for

1. consume N bytes at that layer
2. tell Trisul framework what protocol the next layer is

### An example

One use case of such a script could be to do port agnostic protocol identification. For instance you can treat packets on UDP Port 8883 as either Netflow protocol or SFlow protocol depending on the router IP address that sent the packet.

## Structure

Download a well documented skeleton script from here to copy and get started

[Protocol Handler skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/protocol_handler.lua)

### Table `protocol_handler`

| name                                                                                     | type                                                            | description                                                                                |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| table [control](/docs/lua/protocol_handler#table-control)              | table                                                           | assign a name and GUID to this protocol                                                    |
| function [parselayer](/docs/lua/protocol_handler#function-parselayer) | function( [layer](/docs/lua/obj_layer) | given a packet consume N bytes for this protocol and tell Trisul what the next protocol is |

### Table `control`

The control table assigns a unique GUID to this protocol and a name. You can then use [Access Points](/docs/ug/webadmin/access_points) to connect this protocol to a lower layer.

| name                | type             | description                                                                                                                                                                                                             |
| ------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| guid                | string           | A unique guid that identifies this new protocol. Use `trisulctl_probe testbench guid` to generate a [new GUID](/docs/ref/guid)                                                                                         |
| name                | string           | Name of the counter group. Keep it short < 15 chars                                                                                                                                                                     |
| description         | string           | optional                                                                                                                                                                                                                |
| host_protocol_guid  | string           | Which lower layer protocol do you want to attach to. To find the GUID for your host protocol such as UDP or IP see [Common protocol GUIDs](/docs/ref/guid#protocols)                                                   |
| host_protocol_ports | array of numbers | array of port numbers of the host protocol to which you want to attach. These could be TCP/UDP prots, EtherTypes, IP protocol numbers, or other [Access Points](/docs/ug/webadmin/access_points) |

### Sample control block

This is what a new DHCP protocol handler `control` section would look like.

```lua
-- new protocol for DHCP 
  control = {
    guid  = "{E1BD4415-DED3-4D81-974A-3E23C8CE6F5B}",              -- new protocol GUID we created
    name  = "DHCP",                                                -- new protocol name 
    host_protocol_guid = '{14D7AB53-CC51-47e9-8814-9C06AAE60189}', -- GUID for UDP  
    host_protocol_ports = { 67,68 }                                -- we want UDP ports 67,68
  }
  ```
## LUA functions reference

The only function in this script type is called *parselayer*

### Function parselayer

In networking a protocol breakdown of a packet results in a “protocol layer tree”. For example a DNS packet would be typically made up of

1. layer1 – Ethernet
2. layer2 – IPv4
3. layer3 – UDP
4. layer4 – DNS

Trisul constructs such a tree for each packet. The *protocol_handler* script creates a new protocol that can be attached to any layer, say UDP Port 177. Then, whenever a packet arrives at port 177 UDP, the lua script will be called. You need to supply the following as a result.

1. is this packet valid for this protocol ?
2. if so how many bytes of the packet apply to this protocol
3. what is the next protocol

### Purpose

Parse or dissect a packet data buffer at a given layer and construct the protocol tree to the next layer protocol.

### When called

When a packet arrives that is attached to this protocol. Remember you can attach a protocol to any layer using the “Access Points”

### Parameters

|Name | object | Info |
| ----- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| layer | a [Layer](/docs/lua/obj_layer) object | the layer object contains the packet bytes that are above the lower constructed layer. you can use the layer object to navigate the previously constructed layers. |


### Return value

The return values

1. return nil → if this packet is not recognized by this protocol
2. return N, protocol_guid → where n= number of bytes eaten at this layer, guid = next layer protocol (or nil)

### Example

The following example shows how you can handle the DHCP protocol example.  
DHCP runs on top of UDP and there is no next protocol, it is the last one. So you consume all the bytes and return nil.

```lua
-- return  ( nEaten, nextProtID) 
  parselayer = function(layer)
    --
    -- eat all the bytes at this layer 
    -- return nil for next protocol, this is the last one in the stack
    --
    return layer:layer_bytes(),nil
  end,
```
