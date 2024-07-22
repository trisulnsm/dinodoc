# Flow Tracker

**BACKEND SCRIPT**

Flow tracking is a streaming algorithm that captures real time snapshots of **interesting** flows. You need to decide what flows are interesting – they could be elephant flows transferring large volume of data, or long lived flows, or video flows between 10AM and 5PM, etc.

You can create flow trackers using the Trisul Web Interface – see [Flow Tracker](/docs/ug/flow/tracker) When you create Flow Trackers from the UI you are however only allowed to use fixed criteria like IP Addresses, Ports, Volume, or Duration. The LUA flow tracker described here gives you the ultimate control over the process. For example you can create a tracker that says : “Track all flows from 10.240.0.0/16 subnet but exclude ports < 1024 and 12001,12002,10004 and IP 45.19.22.123”. This kind of complex rule building allows you to be endlessly creative and sharply focused. The LUA based flow tracker also allows you to be stateful – you can be guided by an Intel feed, or DNS.

## Structure

[Flow Tracker skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/flow_tracker.lua)

## Table `flowtracker`

The table consists the following

| field                                                                               | type                                                                                                                     | description                                                                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| control                                                                             | Table                                                                                                                    | Details about the flow tracker. See below                                                         |
| [onbeginflush](/docs/lua/flow_tracker#functiononbeginflush) | function [engine](/docs/lua/obj_engine)                                                           | Before starting a snapshot interval                                                               |
| [getmetric](/docs/lua/flow_tracker#functiongetmetric)       | function [engine](/docs/lua/obj_engine), [flow](/docs/lua/sg_monitor#flow) | Compute and return a metric for this flow, return 0 or nil to discard this from the flow tracker. |
| [onendflush](/docs/lua/flow_tracker#functiononendflush)     | function [engine](/docs/lua/obj_engine)                                                           | After all snapshots have been flushed                                                             |
| [onmetronome](/docs/lua/flow_tracker#functiononmetronome)   | function(engine, timestamp, tick_count, tick_interval)                                                                   | called every second if present                                                                    |

### Table `control`

The control table within the flowtracker table specifies details about the new flow tracker. This information will automatically be discovered and loaded into Trisul. Once inside Trisul the user can modify parameters like BucketSize and TopCount. Therefore these should be seen as default values.

| field       | type   | description                                                                                            |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------ |
| control     | Table  | Details about the flow tracker. See below                                                              |
| name        | string | name of the flow tracker                                                                               |
| description | string | *optional* description                                                                                 |
| bucketsize  | number | snapshot interval in seconds. top-K flows with highest metrics in this time bucket are saved snapshots |
| count       | number | number of flows to save in each tracker snapshot                                                       |

## Functions Reference

## Function `getmetric`

Return a metric for the supplied flow.

### Purpose

Trisul is a streaming analytics platform – hence it continuously applies streaming algorithms on data streams. One of the algorithms is Flow Tracker , which is a Top-K analysis of selected flows. The getmetric function you supply in LUA serves the following function :

1. it is called for **every flow**
2. it is called after flow termination or periodically for long running flows
3. return 0 : If you are not interested this flow – maybe because it is in a wrong subnet or using some other rule
4. return x : If you are interested in this flow you need to supply a metric that will be used for the Top-K algorithm

### When called

Called before each flow is flushed. The flow is completed or a snapshot of a long running flow.

### Parameters

| engine | A [Backend Engine](/docs/lua/obj_engine) object | use this object to add metrics, alerts, or alerts into the Trisul framework |
| ------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| flow   | A [flow](/docs/lua/sg_monitor#flow)           | a flow object                                                               |

### Return value

Ignored

### Example

## Function `onbeginflush`

### Purpose

Called before a snapshot flush starts.

### When called

Before a flush starts. Use ths if you need to perform some per-snapshot computation.

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, alerts, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                                 |

### Return value

Ignored

### Example

## Function `onendflush`

### Purpose

Wrap up a sequence of flush operations. You can do some cleanup operations here.

### When called

When a snapshot flush is complete. use this to perform some per-snapshot computation.

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, alerts, or alerts into the Trisul framework |
| --------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| timestamp | Timestamp                                                        | Timestamps seconds `tv_sec`                                                 |

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

| engine        | An [Engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| ------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp     | Number                                                           | Current timestamp (tv_sec epoch seconds)                                       |
| tick_count    | Number                                                           | An incremeting tick counter                                                    |
| tick_interval | Number                                                           | The tick interval, in seconds.                                                 |

### Return value

Ignored

### Example
