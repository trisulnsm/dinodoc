# File Extraction

:::note

FRONTEND SCRIPT 

:::

Trisul has the ability to extract content from network traffic. Typical content include files transferred using HTTP and other protocols like FTP, SMTP, and others. Trisul allows you to control the entire file extraction process using LUA scripts.

## Structure

**[File extraction skeleton script ](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/filex_monitor.lua)**

## Table `filex_monitor`

You need to supply code for one or more of the following functions.

| [filter_flow](https://trisul.org/docs/lua/fileextract.html#function_filter_flow)         | function( engine, timestamp, flowkey)                                                           | Called on new flow, return true to process, false to skip              |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [filter](https://trisul.org/docs/lua/fileextract.html#function_filter)                   | Function( engine, timestamp, flowkey, header )                                                  | Call on req/resp header. Return True to extract, False to skip         |
| [onpayload_raw](https://trisul.org/docs/lua/fileextract.html#function_onpayload_raw)     | function(engine, timestamp, flowkey, direction, seekpos, buffer)                                | Called for every chunk of newly reassembled raw bytes                  |
| [onpayload_http](https://trisul.org/docs/lua/fileextract.html#function_onpayload_http)   | function(engine, timestamp, flowkey, path, req_header, resp_header, direction, seekpos, buffer) | Called for each piece of the reassembled file is built                 |
| [onfile_http](https://trisul.org/docs/lua/fileextract.html#function_onfile_http)         | function ( engine, timestamp, flowkey, path, req_header, resp_header, length, is_partial )      | File is available in ramfs, use the headers to decide how to handle it |
| [onterminateflow](https://trisul.org/docs/lua/fileextract.html#function_onterminateflow) | function(engine, timestamp, flowkey)                                                            | Called when a flow is terminated                                       |

## LUA functions reference

The file extraction architecture in Trisul is the following :

- You can write lua functions which will be called during various stages of file extraction
- If a function is not defined, there is no impact
- You can use the `onpayload_` functions to support streaming bytes
- At the end the file is written in a `/tmpfs` a memory file system.
- You can ignore the file or copy it over using our Async interface to a disk based file system.

The following section describes each of the functions.

## Function filter_flow

### Purpose

Enable or disable file extraction on a per-flow basis

### When called

When a new flow is first seen but no reassembly has started yet

### Parameters

| engine    | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                          | Timestamp seconds when the first packet in the flow was seen                   |
| flow      | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object  | use this to determine IPs and Ports involved in the flow                       |

### Return value

Return `true` if you want files to be extracted for this flow  
Return `false` if you are not interested in this flow.

```lua
filter_flow = function(engine, timestamp, flow )

    if flow:ipa_readable() == "192.168.1.8" then
      return true
    else
      return false
    end

  end
```

## [Function filter](https://trisul.org/docs/lua/fileextract.html#function_filter)

### Purpose

Control if you want to reassemble certain types of content or not. You are given access to HTTP request and response headers and then you decide by looking at the header fields if you want the content.

### When called

When each heade, request or response is available.

### Parameters

`filter = function( engine, timestamp, flowkey, header)`

| engine    | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object        | use this object to add metrics, resources, or alerts into the Trisul framework                      |
| --------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| timestamp | number                                                                 | Timestamp seconds when the first packet in the flow was seen                                        |
| flowkey   | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object         | use this to determine IPs and Ports involved in the flow                                            |
| header    | A [HTTPHeader](https://trisul.org/docs/lua/obj_httpheader.html) object | use this object to query HTTP header fields like Content-Type to decide if you want the file or not |

#### Usage

## Function onpayload_raw

### Purpose

If you want streaming access to raw reassembled TCP payload.

### When called

Called when a new chunk of reassembled data is available on a TCP connection.  
The difference between this function and `onpayload_http` is that `onpayload_raw` works at the TCP stream level. So you will get HTTP headers as well as raw HTTP layer data. The raw HTTP data can be chunked and compressed.

### Parameters

| engine    | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, resources, or alerts into the Trisul framework          |
| --------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| timestamp | number                                                          | Timestamp seconds when the first packet in the flow was seen                            |
| flowkey   | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object  | use this to determine IPs and Ports involved in the flow                                |
| direction | number                                                          | 0 = OUT payload in client>server direction (same as the original SYN) 1 = server>client |
| seekpos   | number                                                          | Seek position byte position from the beginning of the stream                            |
| buffer    | A Buffer object                                                 | represents the reassembled bytes                                                        |

### Return value

Ignored

### Usage

```lua
onpayload_raw = function(..)

end,
```

## Function onpayload_http

### Purpose

Provide streaming access to reassembled and reconstructed HTTP content.

### When called

When each chunk of HTTP content is available. You will just be able to concatenate (cat) the streaming payloads to the target file and build the full content. If you are interested in complete files, write the `onfile_http` function. This method is called with a zero length buffer to indicate end of the content.

The sequence of a typical large file is

```lua
onpayload_http(.. 0,   buffer(length=100) )
onpayload_http(.. 100, buffer(length=100) )
onpayload_http(.. 200, buffer(length=100) )
onpayload_http(.. 300, buffer(length=100) )
onpayload_http(.. 400, buffer(length=0) ) -- end of stream 
..
```

### Parameters

| engine          | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object        | use this object to add metrics, resources, or alerts into the Trisul framework                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp       | number                                                                 | Timestamp seconds when the first packet in the flow was seen                                                                                                                                                              |
| flowkey         | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object         | use this to determine IPs and Ports involved in the flow                                                                                                                                                                  |
| path            | uniquely identifies a stream                                           | You can use this path and concatenate payloads. `path` includes the ‘ramfs’ directory along with a synthesized file name for the content, you can use a regex to split the filename from the directory. see example below |
| request_header  | A [HTTPHeader](https://trisul.org/docs/lua/obj_httpheader.html) object | the request HTTP Header                                                                                                                                                                                                   |
| response_header | A [HTTPHeader](https://trisul.org/docs/lua/obj_httpheader.html)        | the response HTTP header                                                                                                                                                                                                  |
| direction       | number                                                                 | 0 = OUT payload in client>server direction (same as the original SYN) 1 = server>client                                                                                                                                   |
| seekpos         | number                                                                 | Seek position byte position from the beginning of the stream                                                                                                                                                              |
| buffer          | A [Buffer](https://trisul.org/docs/lua/obj_buffer.html) object         | represents the reassembled bytes. A zero length buffer indicates end of stream                                                                                                                                            |

### Return value

Ignored

### Usage

The following snippet receives payloads and concatenates in an file.

```lua
-- save all content to /tmp/kk 
  --
  onpayload_http = function ( engine, timestamp, flowkey, path, 
                              req_header, resp_header, dir, seekpos , buffer )



    local fn = path:match("^.+/(.+)$")
    T.async:copybuffer( buffer, "/tmp/kk/"..fn)

  end,
```

Pay attention to a couple of things we are doing here.

1. **regex path** : The path names contain the full path of the `/ramfs` directory. So we use a regex to pick out the filename path. We then use that filename on a normal disk filesystem – in this example /tmp/kk
2. **async copy** : We are using `T.async:copybuffer(..)` We could have just copied it directly from here. But because these LUA methods are called in the “fast path” of packets, we typically do the IO in the background. See `T.async` for methods.

## Function onfile_http

### Purpose

A fully reconstructed file is available in the `ramfs` directory. You write LUA code to do what you want with it. Usually you would copy it out of ramfs onto a real disk for further processing.

### When called

When a file is available on the ramfs file system.

### Parameters

`onfile_http = function( engine, timestamp, flowkey, path, request_header, resp_header, length, is_chunk )`

| engine          | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object        | use this object to add metrics, resources, or alerts into the Trisul framework                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timestamp       | number                                                                 | Timestamp seconds. Seconds since Jan 1 1970                                                                                                                                                                                                                                                                                                                                                                     |
| flowkey         | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object         | use this to determine IPs and Ports involved in the flow                                                                                                                                                                                                                                                                                                                                                        |
| path            | String                                                                 | Path on ramfs where the file is available. The path is constructed from the requested URI, hostname, and a unique ID. You can copy this off /ramfs to any filename you want just like a regular linux file. If the path is a partial file (see “Chunk” below) the path of the form `{dirname}/{filename}.[offset].part`. You have to use a regex to extract the filename. See the example in the usage section. |
| request_header  | A [HTTPHeader](https://trisul.org/docs/lua/obj_httpheader.html) object | the request HTTP Header                                                                                                                                                                                                                                                                                                                                                                                         |
| response_header | A [HTTPHeader](https://trisul.org/docs/lua/obj_httpheader.html) object | the response HTTP header                                                                                                                                                                                                                                                                                                                                                                                        |
| length          | Number                                                                 | Size of the file                                                                                                                                                                                                                                                                                                                                                                                                |
| is_chunk        | Boolean                                                                | Whether the file is a ‘chunk’. See *Usage*                                                                                                                                                                                                                                                                                                                                                                      |

### Return value

Ignored

### Usage

The following code is a simple copy of the file on `/ramfs` and pulls it out to `/home/kevin/contents`

```lua
-- save all content to /home/kevin/contents
    --
  onfile_http  = function ( engine, timestamp, flowkey, path, 
                              req_header, resp_header, length , partial_flag )


   -- the following regex pulls out the filename part from the path
   -- 
   local fn = path:match("^.+/(.+)$")

   -- you can use linux copy right here, but T.async moves the I/O to 
   -- another thread and does not hold up the fast path packet pipeline 
   T.async:copy( path, "/home/kevin/contents"..fn)

  end,
```

#### Handling very large files

The most typical uses of file extraction are to catch malware, exploit kits, compromised PDF, and binaries and the like. These files are typically small less than 10MB or so. If you wish to extract really large files, then this section is for you.

Since Trisul dumps all the content in a `ramfs` partition which is backed by physical memory, there are limits on how much you can store there. Very large files or long running files (like streaming video) can fill up the partition and cause the file extraction to stop. By default Trisul chunks files into 5MB chunks and hands them to your LUA. You can then discard, do some scanning, or append to the target file on a disk partition.

The following example handles both simple files and chunks.

```lua
-- save all content to /tmp/kk
  --
  onfile_http  = function ( engine, timestamp, flowkey, path, 
                             req_header, resp_header, length , partial_flag )

      if partial_flag then
         --  just a chunk , concatenate with prev
         -- notice the regex pulling out the dir/filename.9292.part
         --
         local fn = path:match("^.+/(.+)%.%d+.part$")
         T.async:cat( path, "/tmp/kk/"..fn)

      else
         -- full file
         --
         local fn = path:match("^.+/(.+)$")
         T.async:copy( path, "/tmp/kk/"..fn)

      end
  end,
```

## Function onterminateflow

### Purpose

Called when a flow is terminated.

### When called

When a TCP flow is terminated. You can use this to clean up any state you maintain for HTTP objects that were transferred on this flow.

### Parameters

| engine    | An [Engine](https://trisul.org/docs/lua/obj_engine.html) object | use this object to add metrics, resources, or alerts into the Trisul framework |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| timestamp | number                                                          | Timestamp seconds. seconds since epoch Jan 1 1970                              |
| flowkey   | A [FlowID](https://trisul.org/docs/lua/obj_flowid.html) object  | use this to determine IPs and Ports involved in the flow                       |

### Return value

Ignored

### Example
