# Message Monitor

<span class='badge badge--info'>FRONT-END SCRIPT</span>


Listen to stream events and attach your own counters based on it.

> #### Example
> Listen to NetFlow records and add your own counters based on a lookup table.
> Print NetFlow records from a PCAP file


## Structure

Message Monitor skeleton script

### Table `messagemonitor`

You need to supply code for one or more of the following functions.

| name | type| desc|
| ---- | ----| ---|
| [onnewflowrecord](#onnewflowrecord) | function(engine,flow, bytes_az, bytes_za, packets_az, packets_za) | called when a new NetFlow record is seen |


## LUA functions reference

Your script needs to supply one or more of these functions listed below.

### Function `onnewflowrecord`

Called for every NetFlow record.

#### When called

When a new NetFlow record is processed.  

#### Parameters

|  parameter | type | desc |
|---|---|---|
| engine    | An [Engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [FlowID](/docs/lua/obj_flowid) object  | use this to determine IPs Ports Routers and Interfaces involved in the flow|
| bytes_az   | number  | bytes from A->Z direction where the A and Z endpoints are as seen in the [flow](/docs/lua/obj_flowid)  parameter|
| bytes_za   | number  | bytes from Z->A direction |
| packets_za   | number  | packets from A->Z direction |
| packets_az   | number  | packets from Z->A direction |


#### Return value

None

#### Example

The following example prints a NetFlow record

:::info 
See [FlowID](/docs/lua/obj_flowid) object reference to figure out how to access the fields.
:::


```lua

onnewflowrecord = function(engine, flowid, bytes_az, bytes_za, packets_az, packets_za)


    local ipa = flowid:ipa_readable()
    local ipz = flowid:ipz_readable()

    print(" source ip="..flowid:ipa_readable().. 
            " dest ip=" ..flowid:ipz_readable() .. 
            " source port=" ..flowid:porta_readable() .. 
            " dest port=" ..flowid:portz_readable() .. 
            " az=" .. bytes_az.. 
            " za="..bytes_za)


end

```


