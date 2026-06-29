# Counter Group Monitor

BACKEND SCRIPT

Monitor counter group activity.

Get called when metrics related to a counter group are computed and stored.

## Structure

[Counter Group Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/cg_monitor.lua)

## Table `cg_monitor`

The table consists the following

| field | type | description |
| ----- | ---- | ----------- |
| counter_guid | String, function returning string, or array of strings/functions | Counter group to attach to. A single value attaches one isolated Lua instance (unchanged). An array creates one isolated instance per GUID. |
| counter_name_match | String or array of strings | Case-insensitive substring match on counter group title. One isolated Lua instance per matched group. |
| counter_name_regex | String (RE2) | RE2 pattern matched against counter group title. One isolated instance per matched group. Can be combined with the fields above (union, deduplicated). |
| [onbeginflush](/docs/lua/cg_monitor#function-onbeginflush) | [engine](/docs/lua/obj_engine) , timestamp | Before starting to flush all metrics to db |
| [onflushfilter](#function-onflushfilter) | [engine](/docs/lua/obj_engine), timestamp, key, arrayofmetrics | Before each key is flushed. Return true to save, false to skip. Optional second return value can override meters. |
| [onflush](/docs/lua/cg_monitor#function-onflush) | [engine](/docs/lua/obj_engine), timestamp, key, arrayofmetrics | Called for each key as they are being flushed |
| [onendflush](/docs/lua/cg_monitor#function-onendflush) | [engine](/docs/lua/obj_engine) | After all keys have been flushed for this interval |
| [onbegintopperflush](/docs/lua/cg_monitor#function-onbegintopperflush) | [engine](/docs/lua/obj_engine), timestamp, meter | Before flushing toppers for this meter. Return true to enable `ontopperflush` callbacks for this meter. |
| [ontopperflushfilter](#function-ontopperflushfilter) | [engine](/docs/lua/obj_engine), key, metric | Before each topper item is flushed. Return true to save, false to skip. |
| [ontopperflush](/docs/lua/cg_monitor#function-ontopperflush) | [engine](/docs/lua/obj_engine) , key, metric | Called for each topper item |
| [onendtopperflush](/docs/lua/cg_monitor#function-onendtopperflush) | [engine](/docs/lua/obj_engine) , meter | After topper flush |
| [onupdate](/docs/lua/cg_monitor#function-onupdate) | [engine](/docs/lua/obj_engine), timestamp, key, arrayofmetrics | As each update happens (1sec resolution) |
| [onnewkey](/docs/lua/cg_monitor#function-onnewkey) | [engine](/docs/lua/obj_engine), timestamp, key | A new key was discovered within the stream window. |
| [onmetronome](/docs/lua/cg_monitor#function-onmetronome) | [engine](/docs/lua/obj_engine) , timestamp, tick_count, tick_interval | called every second ( Tick Interval) |

## Multi-group attachment

One script file can install the same logic onto multiple counter groups. Trisul creates a **separate isolated Lua context** for each matched group — each runs its own `onload()` and owns its own `T.*` state.

Before `onload()` on each instance, Trisul sets:

| field | description |
| ----- | ----------- |
| `T.monitor_group_name` | Title of the counter group this instance is bound to |
| `T.monitor_group_guid` | Registry-format GUID string for that group |

See also [Object Global table T](/docs/lua/obj_globalt).

If no counter groups match the attachment spec, the script is not loaded.

:::caution Always nil-check these fields
`T.monitor_group_name` and `T.monitor_group_guid` are only populated for a **backend** monitor instance that is actually bound to a counter group. The same script's `onload()` / `onunload()` can also run in contexts that have **no** counter-group awareness — for example the capability probing phase, or when the file is loaded by the **frontend (pim) engine**. In those cases both fields are `nil`.

Always guard against `nil` before using them, otherwise you will get a `attempt to concatenate field 'monitor_group_guid' (a nil value)` error:

```lua
onload = function()
  if T.monitor_group_guid then
    T.log("cg_monitor bound to " .. T.monitor_group_name .. " guid=" .. T.monitor_group_guid)
  end
end,
```
:::

### Example: attach to two explicit counter groups

```lua
cg_monitor = {
  counter_guid = {
    "{120A3124-E2BB-47BD-6C64-71BBB861C428}",  -- Flow-ASN
    "{2314BB8E-2BCC-4B86-8AA2-677E5554C0FE}",  -- FlowGens
  },
  onload = function()
    if T.monitor_group_name then
      T.log("cg_monitor bound to " .. T.monitor_group_name)
    end
  end,
  onflush = function(engine, ts, key, metrics)
    -- called only for keys in this instance's counter group
  end,
}
```

### Example: all groups whose name contains "hosts"

```lua
cg_monitor = {
  counter_name_match = "hosts",
  onbeginflush = function(engine, ts)
    T.keys_this_interval = {}
  end,
  onflush = function(engine, ts, key, metrics)
    if key ~= "SYS:GROUP_TOTALS" then
      T.keys_this_interval[key] = true
    end
  end,
}
```

### Example: RE2 match on group title

```lua
cg_monitor = {
  counter_name_regex = "(?i).*(host|subnet).*",
  onflush = function(engine, ts, key, metrics)
    -- your logic
  end,
}
```

## Functions Reference

## Function `onbeginflush`

### Purpose

Before a counter group is flushed to the Trisul database on the Hub node. Trisul is a streaming analytics system. By default every 60 seconds the analytics are snapshotted and sent to the database node (hub). The *onbeginflush* function is therefore called every 60 seconds.

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


| parameter | description | usage notes | 
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| timestamp | Timestamp                                | Timestamps seconds `tv_sec`                                                               |

### Return value

Ignored

### Example

## Function `onflushfilter`

### Purpose

Control whether a counter item is flushed to the Hub database, and optionally rewrite meter values before flush.

### When called

Just before each counter key is flushed to the database for the current interval. If the filter passes, Trisul sends the item to the Hub and then calls `onflush`.

### Parameters

| parameter | description | usage notes |
| --------- | ----------- | ----------- |
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or alerts into the Trisul framework |
| timestamp | Timestamp | Timestamp in seconds (`tv_sec`) for this flush interval |
| key | string | the key identifying the counter item |
| arrayofmetrics | array of numbers | array of metrics. array item 1 refers to meter 0 and so forth |

### Return value

Return a boolean as the first value:

| return value | description |
| ------------ | ----------- |
| true | flush this counter item to the Hub |
| false | do not flush this counter item |

You may optionally return a second value: an array table of meter overrides. Index 1 corresponds to meter 0, index 2 to meter 1, and so on.

| meter value in table | effect |
| -------------------- | ------ |
| `>= 0` | replace the meter value with this number before flush |
| `-1` | leave that meter unchanged |

Example:

```lua
-- pass the item, but override meters 4, 5, and 6
return true, { -1, -1, -1, -1, recvutil, xmitutil, recv_xmit_ratio }
```

If you do not define `onflushfilter`, the item is flushed with the original meter values.

#### Voting considerations

If multiple scripts are attached to the same counter group, each script's `onflushfilter` vote is combined with logical OR:

1. **All scripts must return false** for the item to be skipped.
2. If any script returns true, or does not implement `onflushfilter`, the item is flushed.

### Example

### Purpose

Custom processing before each counter item is flushed. Perhaps write to your own tools or logfiles.

### When called

Just before each counter item is flushed to the database. The maximum delay between getting a `onnewcounter item` and a corresponding `onflush(..)` for that counter item is 60 seconds.

### Parameters

| parameter | description | usage notes | 
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| engine         | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| timestamp      | Timestamp                                | Timestamps seconds `tv_sec`                                                               |
| key            | string                                   | the key identifying the counter item                                                      |
| arrayofmetrics | array of numbers                         | array of metrics. array item 0 refers to meter 0 and so forth                             |

### Return value

Ignored

### Example

## Function `onflush`

### 

Purpose

Custom processing before each counter item is flushed. Perhaps write to your own tools or logfiles.

### When called

Just before each counter item is flushed to the database. The maximum delay between getting a `onnewcounter item` and a corresponding `onflush(..)` for that counter item is 60 seconds.

### Parameters

| parameter | description | usage notes | 
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| engine         | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| timestamp      | Timestamp                                | Timestamps seconds `tv_sec`                                                               |
| key            | string                                   | the key identifying the counter item                                                      |
| arrayofmetrics | array of numbers                         | array of metrics. array item 0 refers to meter 0 and so forth                             |

### Return value

Ignored

### Example

## Function `onendflush`

### Purpose

The flush operation has ended. You can do some cleanup operations here.

### When called

When all the counter items in this timeslice have been flushed to the database.

### Parameters

| parameter | description | usage notes | 
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| timestamp | Timestamp                                | Timestamps seconds `tv_sec`                                                               |

### Return value

Ignored

### Example

## Function `onbegintopperflush`

### Purpose

Topper snapshotting is a key streaming analytics step in Trisul. Just as raw metrics are tracked using the *onbeginflush*, *onflush*, and *onendflush* functions documented above, topper snapshot flushes can be handled by you using the *onbegintopperflush*, *ontopperflush*, *onendtopperflush* functions.

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

| parameter | description | usage notes | 
| --------- | -----------| -----------|
| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework|
| timestamp | Timestamp                                | Timestamps seconds `tv_sec`|
| meter     | number                                   | The meter number representing the topper tracker set. For example : when “Top Hosts By Connections” are flushed – the meter will be 6 where 6 represents the metric “Connections” |

### Return value

Return a boolean:

| return value | description |
| ------------ | ----------- |
| true | enable the `ontopperflush` callback phase for this meter in this interval |
| false | do not invoke `ontopperflush` for this meter in this interval |

If you define this function, a boolean return value is required. If the return value is not a boolean, Trisul logs an error and treats it as true.

If you do not define `onbegintopperflush`, Trisul defaults to true.

This return value does **not** skip topper items from being sent to the Hub. Use `ontopperflushfilter` to control which topper items are stored.

#### Voting considerations

If multiple scripts are attached to the same counter group, votes are combined with logical OR:

1. If **any** script returns true, the `ontopperflush` callback phase runs for all attached scripts.
2. If **all** scripts return false, `ontopperflush` is not called for that meter in that interval.

### Example

## Function `ontopperflushfilter`

### Purpose

Control whether an individual topper item is flushed to the Hub database.

### When called

Just before each topper item for a meter is flushed to the database.

### Parameters

| parameter | description | usage notes |
| --------- | ----------- | ----------- |
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or alerts into the Trisul framework |
| key | string | the topper item key |
| metric | number | the metric value for this topper item and meter |

### Return value

Return a boolean:

| return value | description |
| ------------ | ----------- |
| true | flush this topper item to the Hub |
| false | do not flush this topper item |

If you define this function, a boolean return value is required. If the return value is not a boolean, Trisul logs an error and treats it as true.

If no `ontopperflushfilter` functions are defined on any attached script, all topper items are flushed.

#### Voting considerations

If multiple scripts are attached to the same counter group, votes are combined with logical OR:

1. **All scripts must return false** for the topper item to be skipped.
2. If any script returns true, or does not implement `ontopperflushfilter`, the topper item is flushed.

### Example

## Function `ontopperflush`

### Purpose

Each topper item as it is flushed. You can leverage Trisul’s highly tuned streaming computation of toppers.

### When called

When each topper item is flushed.

### Parameters

| parameter | description | usage notes | 
| --------- | -----------| -----------|
| engine | An [engine](/docs/lua/obj_engine)  object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| key    | string                                    | The topper item                                                                           |
| metric | number                                    | The metric for the key and the meter. Remember the meter is sent in onbegintopperflush    |

### Return value

Ignored

### Example

## Function `onendtopperflush`

### Purpose

The flush operation has ended. You can do some cleanup operations here.

### When called

When all the topper items for a particular metric have been flushed

### Parameters

| parameter | description | usage notes | 
| --------- | -----------| -----------|
| engine | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, counter items, or counter items into the Trisul framework |
| meter  | number                                   | The meter number                                                                          |

### Return value

Ignored

### Example

## Function `onupdate`

:::info[**High frequency function**  ]
For busy networks this can result in thousands of updates every second. Keep your LUA function `onupdate(..)` efficient and avoid I/O or blocking.

:::

### Purpose

A real time update to a metric item.

### When called

A streaming update to a counter item. This will update a metric value in real time in 1 second resolution. Therefore for busy networks you can expect many keys to be updated every second in the common case.

### Parameters

| parameter | description | usage notes | 
| --------- | -----------| -----------|
| engine         | An [engine](/docs/lua/obj_engine) object | engine use ths to add your results back into the Trisul framework |
| timestamp      | Timestamp                                | Timestamps seconds `tv_sec`                                       |
| key            | string                                   | the key identifying the counter item                              |
| arrayofmetrics | array of numbers                         | array of metrics. array item 0 refers to meter 0 and so forth     |

### Return value

Ignored

### Example

## Function `onnewkey`

### Purpose

A new key was discovered. Handle when you see keys you havent seen before (in the recent past)

### When called

When “new” keys are seen by Trisul in this counter group. Trisul uses a Bloom Filter per counter group to track newly seen keys, the filter itself is reset when it becomes saturated. Use this method to track newly seen keys, but keep in mind they are not “absolutely” new as seen by Trisul since it first started.

### Parameters

| parameter | description | usage notes | 
| --------- | ---------| -------------|
| engine    | An [engine](/docs/lua/obj_engine) object | engine use ths to add your results back into the Trisul framework |
| timestamp | Timestamp                                | Timestamps seconds `tv_sec`                                       |
| key       | string                                   | the key identifying the counter item                              |

### Return value

Ignored

### Example

## Function `onmetronome`

### Purpose

Plug into a metronome.

### When called

If you define a onmetronome(..) function you will be plugged into the Trisul metronome heartbeat mechanism. This method will be called every metronome tick(roughly every second). The context in which this method is called is threadsafe and you can add metrics to the Engine from here.

### Parameters

| parameter | description | usage notes | 
| --------- | ---------| -------------|
| engine        | An [engine](/docs/lua/obj_engine)  object | use this object to add metrics, resources, or alerts into the Trisul framework |
| timestamp     | Number                                    | Current timestamp (tv_sec epoch seconds)                                       |
| tick_count    | Number                                    | An incremeting tick counter                                                    |
| tick_interval | Number                                    | The tick interval, in seconds.                                                 |

### Return value

Ignored

### Example
