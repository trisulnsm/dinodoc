# Resource Monitor

BACKEND SCRIPT

You can attach LUA scripts to any type of resource and get called when they stream in. Each of these resource groups are uniquely identified by a GUID. For a list of [Resource Group GUIDs](/docs/ref/guid#resource-groups)

### Common Resource Groups GUIDs

For quick reference these are the common Resource Group [GUIDs.](/docs/ref/guid#resource-groups) For a full list Login as Admin > profil0 > All Resource Groups

| \{D1E27FF0-6D66-4E57-BB91-99F76BB2143E\} | DNS Resources    |
| ---------------------------------------- | ---------------- |
| \{4EF9DEB9-4332-4867-A667-6A30C5900E9E\} | URL Resources    |
| \{5AEE3F0B-9304-44BE-BBD0-0467052CF468\} | SSL Certificates |
| \{9781DB2C-F78A-4F7F-A7E8-2B1A9A7BE71A\} | File Hashes      |

## Structure

[Resource Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/resource_monitor.lua)

## Table `resource_monitor`

The Lua table `resource_monitor = /{../}` can contain one or more of the following handler functions.

| field                                                                                   | type                                                                                                                                          | description                                                                                                                                |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| resource_guid                                                                           | String                                                                                                                                        | Type of resource. Example `/{5AEE3F0B-9304-44BE-BBD0-0467052CF468/}` for SSL Certs.See [Well known guids](/docs/ref/guid#resource-groups) |
| [onnewresource](/docs/lua/resource_monitor#functiononnewresource)     | function([engine](/docs/lua/obj_engine), [resource](/docs/lua/BACK-END-SCRIPTS/resource-monitor#objects-reference )) | A new resource was seen. Sent within 1 sec of seeing the [resource](/docs/lua/resource_monitor#objects-reference)        |
| [onbeginflush](/docs/lua/resource_monitor#functiononbeginflush) | function([engine](/docs/lua/obj_engine))                                                                             | Before starting to flush all metrics to db                                                                                                 |
| [flushfilter](/docs/lua/resource_monitor#functionflushfilter)   | function([engine](/docs/lua/obj_engine), [resource](/docs/lua/resource_monitor#objects-reference)) | Return true if you want to save in DB, false to skip this                                                                                  |
| [onflush](/docs/lua/resource_monitor#functiononflush)           | function([engine](/docs/lua/obj_engine), [resource](/docs/lua/resource_monitor#objects-reference)) | Called for each resource as they are being flushed                                                                                         |
| [onendflush](/docs/lua/resource_monitor#functiononendflush)     | function([engine](/docs/lua/obj_engine), [resource](/docs/lua/resource_monitor#objects-reference)) | After all resource have been flushed for this interval                                                                                     |

## Objects Reference

## Resource

| method           | return type                                                    | description                                                                                                                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp        | number,number                                                  | The time when the item was seen. Seconds in `tv_sec` format, and Microseconds `tv_usec`.<br/><br/> LUACopy`local secs=alert:timestamp()          - if you only want seconds local secs,usecs=alert:timestamp()    - if you want seconds, usecs local printable = os.date(‘%c’, secs) — if you want printable` |
| flow             | A [flow object](/docs/lua/obj_flowid) | The IP flow that generated the resource                                                                                                                                                                                                                                                                       |
| source_ip        | string                                                         | Source IP Address                                                                                                                                                                                                                                                                                             |
| source_port      | string                                                         | Source Port                                                                                                                                                                                                                                                                                                   |
| destination_ip   | string                                                         | Destination IP Address                                                                                                                                                                                                                                                                                        |
| destination_port | string                                                         | Destination Port                                                                                                                                                                                                                                                                                              |
| uri              | string                                                         | the resource key. the contents depend on the type of resource                                                                                                                                                                                                                                                 |
| label            | string                                                         | Extra information attached to the URI                                                                                                                                                                                                                                                                         |
| set_uri          |                                                                | Change the URI                                                                                                                                                                                                                                                                                                |
| set_label        |                                                                | Change the label                                                                                                                                                                                                                                                                                              |

### Example use of object

---

## Functions Reference

## Function `onnewresource`

### Purpose

Whenever a new resource of this type if discovered.

### When called

Immediately after the resource is discovered.

### Parameters

| engine   | An [engine](/docs/lua/obj_engine) object                   | use this object to add metrics, resources, or alerts into the Trisul framework |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| resource | A [resource](/docs/lua/resource_monitor#objects-reference) object | the resource                                                                   |

### Return value

Ignored

### Example

---

## Function `onbeginflush`

### Purpose

A streaming snapshot interval is about to start. This will be followed by a series of *flushfilter* / *onflush* calls and then *endflush*.

### When called

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                                    |

### Return value

Ignored

### Example

---

## Function `onflush`

### Purpose

A resource is about to be flushed to the Trisul-Hub database.

### When called

Before each flow is flushed to the backend Trisul-Hub database.

### Parameters

| engine   | An [engine](/docs/lua/obj_engine)  object                   | use this object to add metrics, resources, or alerts into the Trisul framework |
| -------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| resource | A [resource](/docs/lua/resource_monitor#objects-reference)  object | the resource                                                                   |

### Return value

Ignored

### Example

---

## Function `flushfilter`

### Purpose

Controls whether a resource is stored in the hub database.

### When called

Called before flushing a resource to the Hub database, you get chance to veto the flush.

### Parameters

| engine   | An [engine](/docs/lua/obj_engine) object                   | use this object to add metrics, resources, or alerts into the Trisul framework |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| resource | A [resource](/docs/lua/resource_monitor#objects-reference) object | the resource                                                                   |

### Return value

true

flush this resource to the backend database node

false

dont flush this resource

#### Voting considerations

If you have multiple scripts *S1, S2, .. SN* each voting differently on `flushfilter()`, the following rule is enforced.

1. **ALL scripts have to vote NO** to flush by returning false.
2. Even if one script *Sx* returns YES or does not implement `flushfilter()`, the artifact is flushed.

### Example

---

## Function `onendflush`

### Purpose

### When called

### Parameters

| engine    | An [engine](/docs/lua/obj_engine) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | Timestamp      s                                                   | Timestamps seconds `tv_sec`                                                    |

### Return value

Ignored

### Example
