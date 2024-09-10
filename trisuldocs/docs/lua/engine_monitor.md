# Engine Monitor

**BACKEND SCRIPT**

Monitor the backend engine events. A common use of Engine Monitor scripts is to run periodic tasks. Other typical uses of engine_monitor include

periodic tasks like polling

`onbeginflush` and `onendflush` are called every 60 seconds. Add your code here

timer

`onmetronone` is called roughly every second.

## Structure

[Engine Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/engine_monitor.lua)

## Table `engine_monitor`

The Lua table `engine_monitor = {..}` can contain one or more of the following handler functions.

| field                                                                           | type                                                                                                     | when called                                                                                   |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [onbeginflush](/docs/lua/engine_monitor#function-onbeginflush) | Function( [engine](/docs/lua/obj_engine) , timestamp)                            | streaming window snapshot about to start. By default called every minute on top of the minute |
| [onendflush](/docs/lua/engine_monitor#function-onendflush)     | Function( [engine](/docs/lua/obj_engine), timestamp)                             | when a streaming window was snapshotted and closed.                                           |
| [onmetronome](/docs/lua/engine_monitor#function-onmetronome)   | Function( [engine](/docs/lua/obj_engine), timestamp, tick_count, tick_interval) | Called every second                                                                           |

### Threading note

The backend engine is multi-threaded, the number of threads matches the *StatsEngine>Flushers* in [trisulHubConfig.xml](/docs/ref/trisulhubconfig). You can use `engine.instanceid() == "0"` to run your script on one instance only.

## Functions Reference

## Function `onbeginflush`

Backend engine about to **start** summarizing a streaming analytics window. The results will be snapshotted to Trisul Hub database between this and `onendflush`

### Purpose

Allows you to add code that runs at the beginning of every summarization window (1 minute). Note that each backend engine will call this method once from different instances. If you only want to run your code on instance 0 you can do something like

```lua
onbeginflush  = function(engine, timestamp ) {
    if engine:instanceid() == 0 then
      -- your code here , only runs on instance 0
    end
 }### When called
```

This is called every 60 seconds by default. This is the size of the streaming analytics snapshot window. See “Tuning>StreamingWindowMSecs in trisulProbeConfig.xml”:/docs/ref/trisulconfig.html#tuning

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework. Remember that this is a backend engine. |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| timestamp | Timestamp seconds                                                | the current time in Unix epoch time “tv_sec” seconds.                                                                   |

### Return value

Ignored

### Example

---

## Function `onendflush`

Backend engine has finished a snapshot window.

### Purpose

Pair this function with `onbeginflush` – you can use it to release any resources, or summarize and add metrics of your own.

### When called

When a snapshot window is complete.

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework. Remember that this is a backend engine. |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| timestamp | Timestamp seconds                                                | the current time in Unix epoch time “tv_sec” seconds.                                                                   |

### Return value

Ignored

### Example

---

## Function `onmetronome`

### Purpose

Plug into a 1-second metronome.

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
