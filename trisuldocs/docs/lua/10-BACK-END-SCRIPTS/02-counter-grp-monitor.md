# Counter Group Monitor

BACKEND SCRIPT

Monitor counter group activity.

Get called when metrics related to a counter group are computed and stored.

## Structure

[Counter Group Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/cg_monitor.lua)

## Table `cg_monitor`

The table consists the following

| counter_guid                                                                                  | String or function returning string                                                         | Counter Group to attach to for monitoring          |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [onbeginflush](https://trisul.org/docs/lua/cg_monitor.html#function_onbeginflush)             | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp                            | Before starting to flush all metrics to db         |
| [onflush](https://trisul.org/docs/lua/cg_monitor.html#function_onflush)                       | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp, key, arrayofmetrics       | Called for each key as they are being flushed      |
| [onendflush](https://trisul.org/docs/lua/cg_monitor.html#function_onendflush)                 | [engine](https://trisul.org/docs/lua/obj_engine.html)                                       | After all keys have been flushed for this interval |
| [onbegintopperflush](https://trisul.org/docs/lua/cg_monitor.html#function_onbegintopperflush) | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp, meter                     | Before flushing toppers for this meter             |
| [ontopperflush](https://trisul.org/docs/lua/cg_monitor.html#function_ontopperflush)           | [engine](https://trisul.org/docs/lua/obj_engine.html), key, metric                          | Called for each topper item                        |
| [onendtopperflush](https://trisul.org/docs/lua/cg_monitor.html#function_onendtopperflush)     | [engine](https://trisul.org/docs/lua/obj_engine.html), meter                                | After topper flush                                 |
| [onupdate](https://trisul.org/docs/lua/cg_monitor.html#function_onupdate)                     | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp, key, arrayofmetrics       | As each update happens (1sec resolution)           |
| [onnewkey](https://trisul.org/docs/lua/cg_monitor.html#function_onnewkey)                     | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp, key                       | A new key was discovered within the stream window. |
| [onmetronome](https://trisul.org/docs/lua/cg_monitor.html#function_onmetronome)               | [engine](https://trisul.org/docs/lua/obj_engine.html), timestamp, tick_count, tick_interval | called every second ( Tick Interval)               |

## Functions Reference

## Function `onbeginflush`

### Purpose

Before a counter group is flushed to the Trisul database on the Hub node. Trisul is a streaming analytics system. By default every 60 seconds the analytics are snapshotted and sent to the database node (hub). The *onbeginflush* function is therefore called every 60 seconds.

### When called

When an flush operation is about to start. The sequence goes

```lua
-- operation is invoked every 60 seconds by default 
--
onbeginflush(..) 
onflush(..)
onflush(..)
onflush(..)
..
..
onendflush(..)
```

### Parameters

| engine    | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| --------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| timestamp | Timestamp                                                       | Timestamps seconds `tv_sec`                                                               |

### Return value

Ignored

### Example

### Purpose

Custom processing before each counter item is flushed. Perhaps write to your own tools or logfiles.

### When called

Just before each counter item is flushed to the database. The maximum delay between getting a `onnewcounter item` and a corresponding `onflush(..)` for that counter item is 60 seconds.

### Parameters

| engine         | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| timestamp      | Timestamp                                                       | Timestamps seconds `tv_sec`                                                               |
| key            | string                                                          | the key identifying the counter item                                                      |
| arrayofmetrics | array of numbers                                                | array of metrics. array item 0 refers to meter 0 and so forth                             |

### Return value

Ignored

### Example

## Function `onflush`

### 

Purpose

Custom processing before each counter item is flushed. Perhaps write to your own tools or logfiles.

### When called

Just before each counter item is flushed to the database. The maximum delay between getting a `onnewcounter item` and a corresponding `onflush(..)` for that counter item is 60 seconds.

### Parameters

| engine         | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| timestamp      | Timestamp                                                       | Timestamps seconds `tv_sec`                                                               |
| key            | string                                                          | the key identifying the counter item                                                      |
| arrayofmetrics | array of numbers                                                | array of metrics. array item 0 refers to meter 0 and so forth                             |

### Return value

Ignored

### Example

## [Function `onendflush`](https://trisul.org/docs/lua/cg_monitor.html#function_onendflush)

### Purpose

The flush operation has ended. You can do some cleanup operations here.

### When called

When all the counter items in this timeslice have been flushed to the database.

### Parameters

| engine    | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| --------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| timestamp | Timestamp                                                       | Timestamps seconds `tv_sec`                                                               |

### Return value

Ignored

### Example

## Function `onbegintopperflush`

### Purpose

Topper snapshotting is a key streaming analytics step in Trisul. Just as raw metrics are tracked using the *onbeginflush*, *onflush*, and *onendflush* functions documented above, topper snapshot flushes can be handled by you using the *onbegintopperflush*, *ontopperflush*, *onendtopperflush* functions.

### When called

By default every 60 seconds. The call flow goes

```lua
-- flushing Topper for metric 0 
onbegintopperflush(engine,148858585,0) -- flushing topper meter 0 
ontopperflush(..)
ontopperflush(..)
ontopperflush(..)
..
onendtopperflush(,0)

-- flushing Topper for metric 1 
onbegintopperflush(engine,148858585,1) -- flushing topper meter 1
ontopperflush(..)
ontopperflush(..)
ontopperflush(..)
..
onendtopperflush(..)
```

### Parameters

| engine    | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework                                                                                         |
| --------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp | Timestamp                                                       | Timestamps seconds `tv_sec`                                                                                                                                                       |
| meter     | number                                                          | The meter number representing the topper tracker set. For example : when “Top Hosts By Connections” are flushed – the meter will be 6 where 6 represents the metric “Connections” |

### Return value

Ignored

### Example

## Function `ontopperflush`

### Purpose

Each topper item as it is flushed. You can leverage Trisul’s highly tuned streaming computation of toppers.

### When called

When each topper item is flushed.

### Parameters

| engine | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| ------ | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| key    | string                                                          | The topper item                                                                           |
| metric | number                                                          | The metric for the key and the meter. Remember the meter is sent in onbegintopperflush    |

### Return value

Ignored

### Example

## Function `onendtopperflush`

### Purpose

The flush operation has ended. You can do some cleanup operations here.

### When called

When all the topper items for a particular metric have been flushed

### Parameters

| engine | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| ------ | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| meter  | number                                                          | The meter number                                                                          |

### Return value

Ignored

### Example

## Function `onupdate`

:::info[**High frequency function**  ]
For busy networks this can result in thousands of updates every second. Keep your LUA function `onupdate(..)` efficient and avoid I/O or blocking.

:::

### Purpose

A real time update to a metric item.

### When called

A streaming update to a counter item. This will update a metric value in real time in 1 second resolution. Therefore for busy networks you can expect many keys to be updated every second in the common case.

### Parameters

| engine         | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | engine use ths to add your results back into the Trisul framework |
| -------------- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| timestamp      | Timestamp                                                       | Timestamps seconds `tv_sec`                                       |
| key            | string                                                          | the key identifying the counter item                              |
| arrayofmetrics | array of numbers                                                | array of metrics. array item 0 refers to meter 0 and so forth     |

### Return value

Ignored

### Example

## Function `onnewkey`

### Purpose

A new key was discovered. Handle when you see keys you havent seen before (in the recent past)

### When called

When “new” keys are seen by Trisul in this counter group. Trisul uses a Bloom Filter per counter group to track newly seen keys, the filter itself is reset when it becomes saturated. Use this method to track newly seen keys, but keep in mind they are not “absolutely” new as seen by Trisul since it first started.

### Parameters

| engine    | An [engine](https://trisul.org/docs/lua/obj_engine.html) object | engine use ths to add your results back into the Trisul framework |
| --------- | --------------------------------------------------------------- | ----------------------------------------------------------------- |
| timestamp | Timestamp                                                       | Timestamps seconds `tv_sec`                                       |
| key       | string                                                          | the key identifying the counter item                              |

### Return value

Ignored

### Example

## Function `onmetronome`

### Purpose

Plug into a metronome.

### When called

If you define a onmetronome(..) function you will be plugged into the Trisul metronome heartbeat mechanism. This method will be called every metronome tick(roughly every second). The context in which this method is called is threadsafe and you can add metrics to the Engine from here.

### Parameters

| engine        | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp     | Number                                                          | Current timestamp (tv_sec epoch seconds)                                       |
| tick_count    | Number                                                          | An incremeting tick counter                                                    |
| tick_interval | Number                                                          | The tick interval, in seconds.                                                 |

### Return value

Ignored

### Example
