# Counter Group

Creates a new counter group and associated meters.

## Table `countergroup`

The table countergroup has three sections

1. [control](/docs/lua/counter_group#table-control) — the GUID (unique ID of new counter group), name, and description
2. [meters](/docs/lua/counter_group#table-meters) — the meters and their variable types
3. [keyinfo](/docs/lua/counter_group#table-keyinfo) — fixed key mappings

## Structure

**[New Counter Group skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/new_counter_group.lua)**

Table `countergroup`

| name                                                                        | description                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| table [control](/docs/lua/counter_group#table-control) | Specifies the name and other attributes of the new counter group |
| table [meters](/docs/lua/counter_group#table-meters)   | The meters you want the new counter group to have                |
| table [keyinfo](/docs/lua/counter_group#table-keyinfo) | Static key mappings                                              |

### Table `control`

The control table assigns a unique GUID to the counter group and attaches it to a particular layer in the network protocol stack.

| guid                   | string | A unique guid that identifies the group. See section on GUIDs                                                                                                                                                                                                                                                                             |
| ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | string | Name of the counter group. Keep it short < 15 chars                                                                                                                                                                                                                                                                                       |
| description            | string | A slightly longer description , it will appear in the Admin user interface                                                                                                                                                                                                                                                                |
| bucketsize             | number | Resolution of the counter group for all meters in seconds. If you are not sure, just use the value `60` for the default bucket size of 60 seconds                                                                                                                                                                                         |
| resolver_guid Optional | string | GUID of a another counter group which will be used to resolve the keys of this new counter group into labels and readable names. For example if you are creating a new counter group that uses IP addresses you can set `resolver_guid` to that of `Hosts {4CD742B1-C1CA-4708-BE78-0FCA2EB01A86}` See [Well known GUIDS](/docs/ref/guid) |

### Table `meters`

Every counter group can house upto 16 different meters. This section defines each of them.

The meters section is an “array of arrays”, The typical format is the following

```lua
meters = {
    {  0, T.K.vartype.RATE_COUNTER, 10, 0, "Bytes",   "bytes" ,   "B" },
    {  1, T.K.vartype.COUNTER,      10, 0, "Packets", "packets",  "Pkts" },
    ..
},
```

Each meter line defines the following

| 0   | Meter ID      | must start from 0                                                                                                                               |
| --- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Vartype       | type of meter, see the global named [T.k.vartype](/docs/lua/obj_globalt#constantstkvartype)                             |
| 2   | Top-N size    | how many toppers do you want to track for the this metric. Can be changed from the GUI                                                          |
| 3   | Bottom-N size | how many bottom-K do you want to track for this metric. Can be changed from the GUI                                                             |
| 4   | Name          | Meter name (keep it short < 10 chars)                                                                                                           |
| 5   | Description   | what does it track. Make sure you fill this out, it is shown in the GUI prominently                                                             |
| 6   | Units         | Suffix for units, must be compatible with K, M, G for Kilo, Mega, Giga etc. Example `Bps` for Bytes/sec `bps` for bits/sec, `msgs` for messages |

### Table `keyinfo`

This is an optional section if you have a Key → Label mapping.

Each entity being monitored in a counter group is identified by a *key* string. You are responsible for creating these key strings. The *keyinfo* table maps these keystrings into user friendly display labels. The web UI shows these labels instead of the raw keys.

```lua
keyinfo = {
    {"14/00","change_cipher_spec"},
    {"15/00","alert"},
    {"16/00","hello_request"},
  ..
  }
```
