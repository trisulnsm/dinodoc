# Session Group Monitor

<span class='badge badge--info'>BACKEND SCRIPT</span>


Monitor flow based metrics stream. When new flows are created, terminated, timeout, new activity is seen on flows, etc. You can also control which flows get flushed to the Trisul-Hub database.

## Structure

[Session Group Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/session_monitor.lua)

## Table `sg_monitor`]

The Lua table `sg_monitor = {..}` can contain one or more of the following handler functions.

| field  | type | when called |
| ---- | ----- | -------- |
| session_guid  | String (optional)| Session group id. The default is `{99A78737-4B41-4387-8F31-8077DB917336}` for IPv4/IPv6 flows |
| [onnewflow](/docs/lua/sg_monitor#function-onnewflow)       | Function( [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow))  | A new flow was seen. The [flow](/docs/lua/sg_monitor#flow) contains details of the flow |
| [onupdate](/docs/lua/sg_monitor#function-onupdate)         | Function( [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow))  | Some metrics were update in the flow object. This can be called as much as every second per flow.|
| [onterminate](/docs/lua/sg_monitor#function-onterminate)    | Function( [engine](/docs/lua/obj_engine) , [flow](/docs/lua/sg_monitor#flow)) | Flow terminated |
| [onbeginflush](/docs/lua/sg_monitor#function-onbeginflush) | Function( [engine](/docs/lua/obj_engine), ts)| Before starting to flush all metrics to db|
| [flushfilter](/docs/lua/sg_monitor#function-flushfilter)   | Function( [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow))  | Before flushing each flow. Return *true* if you want to save flow in DB, return *false* to skip this flow |
| [onflush](/docs/lua/sg_monitor#function-onflush)  | Function( [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow))  | Called for each flow as they are being flushed  |
| [onendflush](/docs/lua/sg_monitor#function-onendflush)  | Function( [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow))  | After all flows have been flushed for this interval |
| [onmetronome](/docs/lua/sg_monitor#function-onmetronome)  | Function( [engine](/docs/lua/obj_engine) , timestamp, tick_count, tick_interval)| called every second ( Tick interval)|

## Objects Reference

## Flow

Represents a flow and all its metrics. Note that you can access the `f:flow()` [object](/docs/lua/obj_flowid) which gives you access to the tuples like source_ip, destination_ip, ports, etc.

| field | return type | description |
| ----- | ----------- | ------------ |
| key  | string | A unique string identifying the flow. Same as `flow():id()` below|
| flow | [FlowID](/docs/lua/obj_flowid) | a FlowID object representing the flow tuples like source_ip, port, destination_ip, port etc|
| time_window | number,number  | start and last activity time seconds (a tv_sec Unix epoch time) of the flow. `starttm,lasttm = flow:time_window()`. |
| state  | [flow state](/docs/lua/sg_monitor#session-state) | The state of the flow, whether it is timeout, RST, FIN, or closed normally.|
| az_bytes  | number  | number of bytes in a→z direction. the A-side can be obtained from `session:flow():ipa_readable()` |
| za_bytes  | number |  bytes seen in z→a direction  |
| az_packets       | number  | number packets seen in a→z direction |
| za_packets       | number  | number packets seen in z→a direction |
| az_payload_bytes | number  | a→z payload bytes does not include the network headers, only the TCP payload|
| za_payload_bytes | number| z→a payload bytes does not include the network headers, only the TCP payload|
| tags | string | a pipe separated string of all tags attached to the flow|
| add_tag  | string | Example `flow:add_tag("suspect")` allows you to add a tag to the set of tags already there.<br/><strong>USAGE NOTE</strong><br/>When to use `add_tag` vs [`engine:tag_flow(..)`](/docs/lua/obj_engine#function-tag_flow) When writing *session_group_monitor* plugins you want to use `add_tag` because it directly modifies the flow tag. `tag_flow(..)` sends the new flowtag as a message back to the streaming analytics pipeline, the tag can be lost if the flow is terminated or flushed before the flowtag message is processed by the flusher. |
| setup_rtt   | number| For TCP flows only – Round Trip Time in **microseconds** as measured by the TCP handshake|
| retransmissions  | number| Number of retransmitted sequence numbers observed, total of both directions|

## Session state

The state field from the above object contains an **OR** of the following enums

| Name | Value | Desc |
|---|---|---|
| SESS_INIT             | 0×0001 | all connections have this bit|
| SESS_SEEN_SYN         | 0×0002 | seen a SYN (of the 3-way handshake) |
| SESS_SEEN_SYN_ACK     | 0×0004 | seen a SYN_ACK  |
| SESS_SEEN_SYN_ACK_ACK | 0×0008 | seen ACK of the SYN-ACK the handshake |
| SESS_A_END_SERVER     | 0×0010 | The A-Endpoint identified by `flow` is the destination. The Trisul formula is to place the lower numbered port endpoint as the Z-End. Using this information you can identify the client and server of the flow based on the actual SYN packet |
| SESS_Z_END_SERVER     | 0×0020 | The Z-Endpoint is the server. This is the normal situation|
| SESS_SEEN_FIN         | 0×0040 | Seen a FIN close|
| SESS_SEEN_RST         | 0×0080 | Seen a RST close|
| SESS_TIMEDOUT         | 0×0100 | Flow timed out, could indicate packet loss or other issue|
| SESS_ERROR            | 0×0200 | Some other unknown error with flow caused it to flush |
| SESS_INCOMPLETE       | 0×0400 | One of the two directions did not close properly  |
| SESS_TERMINATED       | 0×0800 | Proper termination |
| SESS_FLOWEND          | 0×09C0 | Use this to detect flows that are closed and flushed to the database. In-progress flows that flush periodically will be skipped by this mask. Alias for SESS_TERMINATED or SESS_TIMEDOUT or SESS_SEEN_FIN or SESS_SEEN_RST                     |

### Example use of object

The following example prints the IP address of endpoints and total bytes

```lua
onnewflow = function(engine, newflow)
    local flow_object = newflow:flow()

    print("ip a-end"..flow_object:ipa_readable())
    print("ip z-end"..flow_object:ipz_readable())
    print("total bytes"..newflow:az_bytes()+newflow:za_bytes())

    ..

  end,
```

## Functions Reference

## Function `onnewflow`

### Purpose

Use this to collect flow based metrics.

### When called

When a new flow is detected. A new flow is detected when a metric for a new flow key is updated and that flow key is not currently being tracked in the streaming backend.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [Flow](/docs/lua/sg_monitor#flow) object | the flow                                                                       |

### Return value

Ignored

### Example

---

## Function `onupdate`

:::info[**High frequency function**  ]
For busy networks this can result in thousands of updates every second. Keep your LUA function `onupdate(..)` efficient and avoid I/O or blocking.

:::

### Purpose

Used to track all streaming metrics assigned to a flow.

### When called

This is called when any event or metric is detected on a flow.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine)  object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [Flow](/docs/lua/sg_monitor#flow) object  | the flow                                                                       |

### Return value

Ignored

### Example

---

## Function `onterminate`

### Purpose

When a flow is terminated. The termination can be a normal TCP termination or a timeout.

### When called

When a normal TCP flow termination is detected or when the flow is timedout from the streaming data structures.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine)  object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [Flow](/docs/lua/sg_monitor#flow) object  | the flow                                                                       |

### Return value

Ignored

### Example

---

## Function `onbeginflush`

### Purpose

Use this to setup your code to handle the start of flows being flushed to the backend storage.

### When called

When accumulated streaming metrics for all flows are about to be flushed to the backend.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine    | [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| timestamp | A timestamp (tv_sec) value  | timestamp value – unix epoch  |

### Return value

Ignored

### Example

---

## Function `onflush`

### Purpose

Process each flow as they are flushed.

### When called

Just before each flow is flushed to the backend database. At this point all the metrics are attached to the flow and ready for consumption.

**Long running flows**  
Long running flows can be flushed multiple times, by default every 300 seconds/5 minutes. Use the [flow:state](/docs/lua/sg_monitor#session-state) to filter them out if you want to process only terminated flows.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [Flow](/docs/lua/sg_monitor#flow) object | the flow                                                                       |

### Return value

Ignored

### Example

---

## Function `flushfilter`

### Purpose

Control if a flow is flushed to the database backend or not.

### When called

Just before each flow is flushed to the database. You can look at the contents of the flow object and determine if you want this flow to be flushed or not.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| flow   | A [Flow](/docs/lua/sg_monitor#flow) object | the flow                                                                       |

### Return value

**true**

    flush this flow to the backend database node

**false**

    dont flush this flow

#### Voting considerations

If you have multiple scripts *S1, S2, .. SN* each voting differently on `flushfilter()`, the following rule is enforced.

1. **ALL scripts have to vote NO** to flush by returning false.
2. Even if one script *Sx* returns YES or does not implement `flushfilter()`, the artifact is flushed.

### Example

---

## Function `onendflush`

### Purpose

End of a flush cycle.

### When called

When all the flows are flushed for this cycle. You can clean up here what you initalized in `onbeginflush`

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine | An [engine](/docs/lua/obj_engine)  object | use this object to add metrics, resources, or alerts into the Trisul framework |

### Return value

Ignored

### Example

---

## Function `onmetronome`

### Purpose

Plug into a metronome.

### When called

If you define a onmetronome(..) function you will be plugged into the Trisul metronome heartbeat mechanism. This method will be called every metronome tick(roughly every second). The context in which this method is called is threadsafe and you can add metrics to the Engine from here.

### Parameters

| name | type |  desc |
| --------- | --- | ------- |
| engine        | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| timestamp     | Number                                                            | Current timestamp (tv_sec epoch seconds)                                       |
| tick_count    | Number                                                            | An incremeting tick counter                                                    |
| tick_interval | Number                                                            | The tick interval, in seconds.                                                 |

### Return value

Ignored

### Example
