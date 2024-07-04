# TCP Reassembly

FRONTEND SCRIPT

Interface into the TCP Reassembly Engine using LUA. Your LUA scripts can

1. control what flows need reassembly
2. ability turn on or off mid way through the flow
3. co-operative algorithms allow multiple LUA scripts
4. handle reassembled chunks of data and do whatever you want

## Structure

**[TCP Reassembly skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/reassembly_handler.lua)**

## Table `reassembly_handler`

You need to supply code for one or more of the following functions.

| [filter](/docs/lua/FRONT-END-SCRIPTS/tcp-reassembly#function-filters )          | function( engine, timestamp, flowkey )                           | called when a new flow starts. Examine the flow tuples and determine if you are interested in reassembly.                                                |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [onpayload](/docs/lua/FRONT-END-SCRIPTS/tcp-reassembly#function-onpayload )     | function(engine, timestamp, flowkey, direction, seekpos, buffer) | Called for every chunk of newly reassembled raw bytes                                                                                                    |
| [onnewflow](/docs/lua/FRONT-END-SCRIPTS/tcp-reassembly#function-onnewflow )     | function(engine, timestamp, flowkey)                             | Called when a new flow is established                                                                                                                    |
| [onterminateflow](/docs/lua/reassembly.html#function_onterminateflow )          | function(engine, timestamp, flowkey)                             | Called when a flow is terminated                                                                                                                         |
| [onattribute](/docs/lua/FRONT-END-SCRIPTS/tcp-reassembly#function-onattribute ) | function(engine, timestamp, flowkey, attr_name, attr_value)      | Trisul’s native processors found some flow attribute. You get a chance to handle it. Examples are : HTTP Content Type, TLS Certificates, HTTP Hosts, etc |

## LUA functions reference

Your script needs to supply one or more of these functions listed below. Note that there will be other scripts too written by you or others executing in the same context. So do not assume any stateful behaviour between separate invocations of your script. It is however guaranteed that a given flow will always have all events on it called on the same context of your script.

## Function filters

### Purpose

Hint to the Trisul Engine whether to enable or disable reassembly on a per-flow basis.

### When called

When a new flow is established.

### Parameters

| engine    | An [Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                            | Timestamp seconds when the first packet in the flow was seen                   |
| flowkey   | A [FlowID](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) object  | use this to determine IPs and Ports involved in the flow                       |

### Return value

Return `true` if you want files to be extracted for this flow  
Return `false` if you are not interested in this flow.

#### Voting considerations

If you have multiple scripts *S1, S2, .. SN* each voting differently on `filter()`, the following rule is enforced.

1. **ALL scripts have to vote NO** to flush by returning false.
2. Even if one script *Sx* returns YES or does not implement `filter()`, the flow is reassembled.

### Example

The following example only reassembles TCP from IP 192.168.1.8

```lua
filter = function(engine, timestamp, flow )

    if flow:ipa_readable() == "192.168.1.8" then
      return true
    else
      return false
    end

  end
```

## Function onnewflow

### Purpose

Whan a new flow is first seen. You can do housekeeping, setup some datastructures or files here.

### When called

When a new flow is first seen. This method is not called when LUA plugins have all agreed using the `filter` function that reassembly be disabled for this flow.

### Parameters

| engine    | An [Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                            | Timestamp seconds when the first packet in the flow was seen                   |
| flowkey   | A [FlowID](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) object  | use this to determine IPs and Ports involved in the flow                       |

### Return value

Ignored

### Example

See trisul-scripts on Github

## Function onterminateflow

### Purpose

Called when a flow is terminated.

### When called

When a TCP flow is terminated either by the normal TCP procedures or by timeout.

### Parameters

| engine    | An [Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                            | Timestamp seconds. seconds since epoch Jan 1 1970                              |
| flowkey   | A [FlowID](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) object  | use this to determine IPs and Ports involved in the flow                       |

### Return value

Ignored

### Example

## Function onpayload

### Purpose

If you want streaming access to raw reassembled TCP payload.

### When called

Called when a new chunk of reassembled data is available on a TCP connection.

#### Stream read position

We allow multiple user written LUA scripts as well the Trisul’s native reassembly handlers to plug into the same reassembly engine. These are the rules that indicate when the read position is moved.

1. the stream read position (in each direction) is moved ahead
   1. Trisul native built in analysis gets first priority. For example until Trisul native function “TLS Certificate Analysis” has had a chance to read the entire TLS Certificate exchange, the read position will not be moved.
   2. If Trisul native analysis is not interested in any given stream, then after calling `onpayload` of each LUA script, the stream read position is moved.

:::info[**Co-operative scripting note**]

Due to the co-operative execution of multiple LUA scripts as well as Trisul’s built in processing. You may get multiple calls of the same payload. You can use the `seekpos` parameter to detect that. See the example at the end of how to save payloads to a file.

:::

### Parameters

| engine    | An [Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, resources, or alerts into the Trisul framework                                           |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| timestamp | number                                                            | Timestamp seconds when the first packet in the flow was seen                                                             |
| flowkey   | A [FlowID](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) object  | use this to determine IPs and Ports involved in the flow                                                                 |
| direction | number                                                            | - 0 = IN payload in server → client direction<br/>- 1 = OUT payload in client → server direction (same as the first SYN) |
| seekpos   | number                                                            | Seek position byte position from the beginning of the stream                                                             |
| buffer    | A [Buffer](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-buffer ) object  | represents the reassembled bytes                                                                                         |

### Return value

Ignored

### Usage

```lua
onpayload  = function(engine, time, flow, dir, seekpos, buff )
    ..
    buff:writetofile("myfile_in",seekpos)
  end,
```

## Function onattribute

### Purpose

When Trisul finds some flow attribute you can get informed. This way you can leverage Trisul’s native attribute extraction logic without re-inventing the wheel.

### When called

When a new attribute about a flow is discovered by Trisul.

**Leverage Trisul’s discovery**  
We encourage you to use the onattribute function if you can find your object of interest here. You can save CPU as well as work!

### Parameters

| engine          | An [Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine )object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp       | number                                                           | Timestamp seconds when the first packet in the flow was seen                   |
| flowkey         | A [FlowID](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) object | use this to determine IPs and Ports involved in the flow                       |
| attribute_type  | string                                                           | The type of attribute. See note below                                          |
| attribute_value | string                                                           | The attribute value                                                            |

#### Supported attributes

Currently these are the attribute types that Trisul can report

| TLS:Record   | A complete TLS Handshake record (all messages except Application Data)           |
| ------------ | -------------------------------------------------------------------------------- |
| TLS:O        | Organization found in the certificate                                            |
| TLS:CA:ROOT  | Root Certificate Authority                                                       |
| TLS:CA:INTER | Intermediate Certificate Authority                                               |
| TLS:CIPHER   | Cipher Suite negotiated. This is a hex string – see IANA TLS Ciphers for meaning |
| ^D           | A flow ended                                                                     |
| ""           | A flow started                                                                   |
| HTTP-Header  | The entire HTTP Header                                                           |
| Content-Type | Content Type                                                                     |
| User-Agent   | The HTTP User Agent                                                              |
| Host         | HTTP Host                                                                        |
| URI          | HTTP URI                                                                         |

### Return value

Ignored

### Usage

Typically you would update a counter, attach a flow counter, or generate some resource metadata or alerts.

```lua
onattribute  = function(engine, time, flow, attr_type, attr_value )

      if attr_type == "Content-Type" then

        -- some processing
        engine:add_flow_counter(..)

    end

  end,
```
