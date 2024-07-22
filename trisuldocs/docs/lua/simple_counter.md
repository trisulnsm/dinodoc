# Simple Counter

:::note

Front end script 

:::

Lua function called for each packet. You can use contents of the packet to create your own metering logic.

## Structure

**[simple counter skeleton script ]([trisul-scripts/lua/skeletons/simple_counter.lua at master · trisulnsm/trisul-scripts · GitHub](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/simple_counter.lua))**

The simplecounter table attaches the onpacket(..) function to a particular protocol layer.

| protocol_guid | string                                                                                                                       | Which protocol do you want to attach this group to?  <br/>Trisul will invoke this counter group only for packets where that protocol is present and with a pointer to the payload at that protocol  <br/>A list of [common protocol GUIDs are here](/docs/ref/guid#protocols) |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| onpacket      | function ( [engine](/docs/lua/obj_engine) , [layer](/docs/lua/obj_layer) ) | `onpacket(..)` is the main function where your LUA code goes. It is called for each packet with a layer object corresponding to the protocol_guid above                                                                                                                        |
| flow_counter  | bool                                                                                                                         | **Optional** When set to `true`, this counter turns into a NETFLOW_TAP mode counter. Use this if you want to use this script with NETFLOW_TAP mode processing. Default is `false`                                                                                              |

A typical simplecounter table looks like the following

## Function `onpacket`

The onpacket function is where your LUA code goes. You can inspect the packet bytes, then apply your own logic and interact with the Trisul engine.

| engine | An [Engine](/docs/lua/obj_engine) object that allows you to interact with Trisul          |
| ------ | ---------------------------------------------------------------------------------------------------------------- |
| layer  | A [Layer](/docs/lua/obj_layer) object pointing to the `protocol_guid` you have specified |

### The `layer` parameter

This code dumps the IP header and the size of the IP layer. Once again the GUID “(0A2C724B-5B9F-4ba6-9C97-B05080558574)” represents the [IPv4 protocol](/docs/ref/guid#protocols )

```lua
simplecounter = (

  protocol_guid = "(0A2C724B-5B9F-4ba6-9C97-B05080558574)",

  onpacket = function(engine,layer)

      print("onpacket now.. layer length = "..layer:layer_bytes())
      print("Hexdump\n")

      local bytes = layer:rawbytes()
      print(bytes:hexdump())

  end,
),
```

The above snippet works as follows

- print the IP layer length via `layer:layer_bytes()` See [Layer](/docs/lua/simple_counter#the-layer-parameter)
- dump the 20 byte IP header using `layer:rawbytes():hexdump()`

```lua
onpacket now.. layer length = 20
Hexdump

00000000   45 00 00 28 a3 c8 40 00 35 06 15 4a d1 d8 f9 3a    E..(..@.5..J...:
00000010   c0 a8 01 02 00 00 00 00 00 00 00 00 00 00 00 00    ................

..
```

### The `engine` parameter

Typically the end result of your LUA processing will result in a call to one of the [Engine](/docs/lua/obj_engine) methods.
