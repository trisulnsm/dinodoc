# Alert Monitor

BACKEND SCRIPT

You can attach your LUA script to listen to various events in the alert stream.

### Common Alert Groups GUIDs

For quick reference here are the common Alert Group [GUIDs](/docs/ref/guid ) For a full list Login as Admin > profil0 > Alert Groups

| \{9AFD8C08-07EB-47E0-BF05-28B4A7AE8DC9\} | IDS Alerts from Snort/Suricata via Unix Socket              |
| ---------------------------------------- | ----------------------------------------------------------- |
| \{5E97C3A3-41DB-4E34-92C3-87C904FAB83E\} | Blacklist alerts from Trisul Badfellas plugin               |
| \{03AC6B72-FDB7-44C0-9B8C-7A1975C1C5BA\} | Threshold Crossing Alerts                                   |
| \{18CE5961-38FF-4AEA-BAF8-2019F3A09063\} | Flow Tracker Alerts                                         |
| \{F69C2462-ECEA-45B8-B1CB-F90342D37A4F\} | System Alerts Alerts regarding Trisul’s resources and state |
| \{B5F1DECB-51D5-4395-B71B-6FA730B772D9\} | User Alerts General purpose alert group                     |

Any other type of custom alert you create using the [alert_group](/docs/lua/alert_group) lua

## Structure

[Alert Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/alert_monitor.lua)

## Table `alert_monitor`

The table consists the following

| field                                                                                | type                                                                                                                                   | description                                                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| alert_guid                                                                           | String                                                                                                                                 | Type of alert. See [alert guids](/docs/ref/guid#alert_groups ) for a list of built in GUIDs. View (Admin) Profile > Alert Groups for a full list. |
| [onnewalert](/docs/lua/alert_monitor#function_onnewalert)           | function [engine](/docs/lua/obj_engine), [alert](/docs/lua/alert_monitor#object_alert) | A new alert was seen. Sent within 1 sec of seeing the alert                                                                                       |
| [onbeginflush](/docs/lua/alert_monitor#function_onbeginflush) | function[engine](/docs/lua/obj_engine)                                                                        | Before starting to flush all metrics to db                                                                                                        |
| [flushfilter](//docs/lua/alert_monitor#function_flushfilter)        | function [engine](/docs/lua/obj_engine), [alert](/docs/lua/alert_monitor#object_alert) | Return true if you want to save in DB, false to skip this                                                                                         |
| [onflush](/docs/lua/alert_monitor#function_onflush)                 | function [engine](/docs/lua/obj_engine), [alert](/docs/lua/alert_monitor#object_alert)                                                             | Called for each alert as they are being flushed                                                                                                   |
| [onendflush](/docs/lua/alert_monitor#function_onendflush)     | function[engine](/docs/lua/obj_engine)                                                                        | After all alert have been flushed for this interval                                                                                               |
| [onmetronome](/docs/lua/alert_monitor#function_onmetronome)   | function(engine, timestamp, tick_count, tick_interval)                                                                                 | called every second ( Tick Interval)                                                                                                              |

## Objects Reference

The following objects are passed to functions in `alert_monitor`

## Object alert

| field             | return type                                                    | description                                                                                                                                                                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timestamp         | number,number                                                  | The time when the item was seen. Seconds in `tv_sec` format, and Microseconds `tv_usec`.<br/><br/>LUACopy`local secs=alert:timestamp()          - if you only want seconds local secs,usecs=alert:timestamp()    - if you want seconds, usecs local printable = os.date(‘%c’, secs) — if you want printable` |
| flow              | A [flow object](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid ) | The flow that generated the alert. Check for `nil` as this may not be available for all type of alerts.                                                                                                                                                                                                      |
| source_ip         | string                                                         | Source IP Address                                                                                                                                                                                                                                                                                            |
| source_port       | string                                                         | Source Port                                                                                                                                                                                                                                                                                                  |
| destination_ip    | string                                                         | Destination IP Address                                                                                                                                                                                                                                                                                       |
| destination_port  | string                                                         | Destination Port                                                                                                                                                                                                                                                                                             |
| sigid             | string                                                         | signature-id. Identifies the type of alert like you would see in IDS rules. You may define your own sigids too.                                                                                                                                                                                              |
| classification    | string                                                         | Classification of large numbers of signatures. Used to group signature IDs.                                                                                                                                                                                                                                  |
| priority          | number                                                         | Priority 1=High, 2=Medium, 3=Low                                                                                                                                                                                                                                                                             |
| set_priority      |                                                                | Set the priority (override it)                                                                                                                                                                                                                                                                               |
| message           | string                                                         | The alert message                                                                                                                                                                                                                                                                                            |
| set_message       |                                                                | Setting a custom alert message. Empty string erases the field                                                                                                                                                                                                                                                |
| extra_message     | string                                                         | An extra text message attached to the alert. If you are using the LUA Input Filter this might correspond to AlertDetails field                                                                                                                                                                               |
| set_extra_message |                                                                | Set a new message. Empty string erases the field                                                                                                                                                                                                                                                             |
| status            | string                                                         | Alert status. Usually `ALARM` or `CLEAR` but can include other values you set via AlertStatus in the Input Filter                                                                                                                                                                                            |
| ack_flag          | number                                                         | Acknowledge flag. 0=not ack, 1=ack                                                                                                                                                                                                                                                                           |

### Example use of object

## Functions Reference

## Function `onnewalert`

### Purpose

Handle a new alert.

### When called

Immediately upon receiving a new alert.

### Parameters

| engine | A [Backend Engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object       | use this object to add metrics, alerts, or alerts into the Trisul framework |
| ------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| alert  | A [alert](/docs/lua/BACK-END-SCRIPTS/alert-monitor#functiononnewalert ) object | the alert                                                                   |

### Return value

Ignored

### Example

## Function `onbeginflush`

### Purpose

Prepare for alert flushes to Trisul Hub Database.

### When called

When an alert flush operation is about to start. The sequence is *onbeginflush* , *onflush()*,*onflush()*.. *onendflush()*

### Parameters

| engine    | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, alerts, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                                 |

### Return value

Ignored

### Example

## Function `onflush`

### Purpose

Custom processing before each alert is flushed. Perhaps write to your own tools or logfiles.

### When called

Just before each alert is flushed to the database. The maximum delay between getting a `onnewalert` and a corresponding `onflush(..)` for that alert is 60 seconds.

### Parameters

| engine | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object               | use this object to add metrics, alerts, or alerts into the Trisul framework |
| ------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| alert  | An [alert](/docs/lua/BACK-END-SCRIPTS/alert-monitor#functiononnewalert ) object | the alert                                                                   |

### Return value

Ignored

### Example

## Function `flushfilter`

### Purpose

Allows you to control if an alert is flushed to the database or ignored.

### When called

Just before an alert is about to be flushed to the database.

### Parameters

| engine | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object               | use this object to add metrics, alerts, or alerts into the Trisul framework |
| ------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| alert  | An [alert](/docs/lua/BACK-END-SCRIPTS/alert-monitor#functiononnewalert ) object | the alert                                                                   |

### Return value

**true**

    flush this alert to the backend database node

**false**

    dont flush this alert

### Example

## Function `onendflush`

### Purpose

Wrap up a sequence of flush operations. You can do some cleanup operations here.

### When called

When all the alerts in this timeslice have been flushed to the database.

### Parameters

| engine    | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, alerts, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                                 |

### Return value

Ignored

### Example

## Function `onmetronome`

### Purpose

Plug into a metronome.

### When called

If you define a onmetronome(..) function you will be plugged into the Trisul metronome heartbeat mechanism. This method will be called every metronome tick(roughly every second). The context in which this method is called is threadsafe and you can add metrics to the Engine from here.

### Parameters

| engine        | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp     | Number                                                            | Current timestamp (tv_sec epoch seconds)                                       |
| tick_count    | Number                                                            | An incremeting tick counter                                                    |
| tick_interval | Number                                                            | The tick interval, in seconds.                                                 |

### Return value

Ignored

### Example
