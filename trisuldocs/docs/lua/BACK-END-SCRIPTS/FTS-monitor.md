# FTS Monitor

**BACKEND SCRIPT**

FTS stands for Full Text Search documents. These are extracted by Trisul and *fts_monitor* scripts can look at them and perform custom processing.

Currently there are only two FTS doc types built in to Trisul

1. HTTP Headers – same format as on the wire
2. SSL Certificates fully decoded as text – same structure as OpenSSL text dump of certificates

### Common FTS Groups GUIDs

For quick reference these are the common [FTS GUIDs](https://trisul.org/docs/lua/basics.html#on_guids) For a full list Login as Admin > profil0 > All FTS Groups

| \{9FEB8ADE-ADBB-49AD-BC68-C6A02F389C71\} | SSL Certificate FTS           |
| ---------------------------------------- | ----------------------------- |
| \{28217924-E7A5-4523-993C-44B52758D5A8\} | HTTP Header FTS               |
| \{09B305DF-078C-4B9E-8E2F-EA64B7326880\} | Full text dump of DNS records |

## Structure

[FTS Monitor skeleton script](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/fts_monitor.lua)

## Table `fts_monitor`

The Lua table `fts_monitor = {..}` can contain one or more of the following handler functions.

| field        | type                                                                                                                   | when called                                                                                                                   |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| fts_guid     | String                                                                                                                 | Type of fts. Example `{5AEE3F0B-9304-44BE-BBD0-0467052CF468}` for SSL Certs.See [Well known guids](/docs/ref/guid#fts-groups) |
| onnewfts     | Function( [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ), [fts](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts )) | A new fts was seen. Sent within 1 sec of seeing the fts                                                                       |
| onbeginflush | Function( [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine))                                                      | Before starting to flush all metrics to db                                                                                    |
| flushfilter  | Function( [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ), [fts](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts )) | Return true if you want to save in DB, false to skip this                                                                     |
| onflush      | Function( [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ), [fts](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts )) | Called for each fts as they are being flushed                                                                                 |
| onendflush   | [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine )                                                                | After all fts have been flushed for this interval                                                                             |

## Objects Reference

## FTS

The object has the following fields

| field     | return type                                                   | description                                                                                                                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp | number,number                                                 | The time when the item was seen. Seconds in `tv_sec` format, and Microseconds `tv_usec`.<br/><br/> LUACopy`local secs=alert:timestamp()          - if you only want seconds local secs,usecs=alert:timestamp()    - if you want seconds, usecs local printable = os.date(‘%c’, secs) — if you want printable` |
| key       | string                                                        | The unique string identifying the document                                                                                                                                                                                                                                                                    |
| flow      | A [flow object](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-flowid) | the IP flow from which this document was extracted                                                                                                                                                                                                                                                            |
| text      | string                                                        | The text of the document.                                                                                                                                                                                                                                                                                     |

### Example use of object

- Logging HTTP header fields.
- OCSP verification of certificate chains
- Logging certificate chains

## Functions Reference

## Function `onnewfts`

### Purpose

Trisul created a new FTS document.

### When called

When a new FTS document is created by Trisul.

### Parameters

| engine | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, FTSs, or alerts into the Trisul framework |
| ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| FTS    | A [FTS object](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts )       | the FTS                                                                   |

### Return value

Ignored

### Example

---

## Function `onbeginflush`

When a stream window closes and *before* all the FTS documents in this window are about to be flushed to the Hub node.

### Purpose

Signal begin of data flushing window.

### When called

Before FTS documents are flushed to the hub node.

### Parameters

| engine    | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, FTSs, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                               |

### Return value

Ignored

### Example

---

## Function `onflush`

### Purpose

FTS doc flush event.

### When called

Before each FTS doc is flushed to the hub node.

### Parameters

| engine | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine )object | use this object to add metrics, FTSs, or alerts into the Trisul framework |
| ------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| FTS    | An [FTS object](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts)      | the FTS document                                                          |

### Return value

Ignored

### Example

---

## Function `flushfilter`

### Purpose

To control whether you want to flush a particular FTS document or not.

### When called

Before each FTS document is flushed.  
If you return `false` from this method, the “onflush”#function_onflush will never be called.

### Parameters

| engine | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, FTSs, or alerts into the Trisul framework |
| ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| FTS    | A [FTS object](/docs/lua/BACK-END-SCRIPTS/FTS-monitor#fts)        | the FTS document                                                          |

### Return value

true

flush this FTS to the backend database node

false

dont flush this FTS, drop it

If you return false in all cases, then no FTS documents will be saved to the backend.

### Example

---

## Function `onendflush`

### Purpose

Handle cleanup and summarization after all documents have been flushed in the streaming analysis window (default 1 minute)

### When called

After all FTS documents have been flushed. the scenario is

```lua
onbeginflush()
onflush( doc-1 )
onflush( doc-2 )
...
onflush( doc-n )
onendflush()
```

### Parameters

| engine    | An [engine](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-engine ) object | use this object to add metrics, FTSs, or alerts into the Trisul framework |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| timestamp | Timestamp                                                         | Timestamps seconds `tv_sec`                                               |

### Return value

Ignored

### Example
