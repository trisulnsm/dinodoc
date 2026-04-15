# Object T.async

The T.async interface provides methods to help you do long running I/O tasks that do not block the fast packet pipeline path. For introduction to Async scripting operations. See [Async operations introduction](/docs/lua/async-exec)

## Purpose of T.async

To execute long running I/O tasks in a separate worker pool to prevent blocking the Trisul streaming pipelines. The default worker thread pool size is 1, it can be increased at the script level by [TrisulPlugin.request_async_workers](/docs/lua/basics#structure-of-a-lua--script) parameter

## Methods

| function | parameters| what it does|
| ---- | ------ | --- |
| [cat](/docs/lua/obj_tasync#function-tasynccat)| from_file,to_file| Append one file to another|
| [copy](/docs/lua/obj_tasync#function-tasynccopy)| from_file,to_file| Copy one file to another|
| [rm](/docs/lua/obj_tasync#function-tasyncrm) | filename : string | Delete a file|
| [copybuffer](/docs/lua/obj_tasync#function-tasynccopybuffer) | from_buffer (a [Buffer](/docs/lua/obj_buffer) object), to_file | Append buffer content bytes to the target file |
| [schedule](/docs/lua/obj_tasync#function-tasyncschedule)| a LUA schedule block | Runs the LUA functions in the block asynchronosly and re-enter the fast path at a later time when results are ready |

---

### Function `T.async.cat`

Appends file1 to file2.

#### Purpose

Append content of file1 to the end of file2. If file2 does not exist, it is created.

#### Parameters

| from_file | `filename` string | source filename. In file reassemly scripts, this typically in the ramfs. |
| --------- | ----------------- | ------------------------------------------------------------------------ |
| to_file   | `filename` string | destination file. if it doesnt exist it is created.                      |

#### Return value

None

#### Usage

```lua
..
T.async.cat("/tmpfs/k/file1.data", "/home/nsm/files/file123.dat")
..
```

---

### Function `T.async.copy`

Copies file1 to file2.

#### Purpose

Copies file1 to file2. Creates file2 if it does not exist, overwrites it if it does.

#### Parameters

| from_file | `filename` string | source filename.  |
| --------- | ----------------- | ----------------- |
| to_file   | `filename` string | destination file. |

#### Return value

None

---

### Function `T.async.rm`

Deletes the file.

#### Purpose

Deletes the file, if present.

#### Parameters

| filename | `filename` string | filename to delete from the filesytem |
| -------- | ----------------- | ------------------------------------- |

#### Return value

None

---

### Function `T.async.copybuffer`

Operations on writing [Buffer](/docs/lua/obj_buffer) contents to files.

#### Purpose

Write contents of a [buffer](/docs/lua/obj_buffer) object to disk.

#### Parameters

| Name                | Info                                                             | Description                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| buff                | A [Buffer](/docs/lua/obj_buffer) object | an object usually passed by Trisul into your LUA script                                                                                                                |
| filename            | `filename` string                                                | filename to write to. File is created if it doesnt exist                                                                                                               |
| position (optional) | `seelpos` number                                                 | **Optional** At what position do you want to write the buffer. If this parameter is not specified the default mode of `copybuffer` is to append to the end of the file |

#### Return value

None

#### Usage

```lua
..

-- appends to the end of the file T.async.copybuffer( payload_buffer, "/home/nsm/files/file123.dat")

T.async.copybuffer( payload_buffer, "/home/nsm/files/file123.dat")

-- writes at specifed position used by (reassembly scripts)
..
T.async.copybuffer( payload_buffer, "/home/nsm/files/file123.dat", seekpos )
```

---

### Function `T.async:schedule`

T.async methods *cp,cat,rm,copybuffer* described above accomplish very specific tasks. Using the `T.async:schedule` method described below you can run any arbitrary LUA code out of the main packet pipeline.

**T.async:schedule**  
Imagine your LUA script needed to look up a dictionary of Malware online, you would write the LUA code to do that and use the `schedule` method to push it out of the fast path.

#### Methods

T.async:schedule expects a table with the following fields

| data      | string                              | a string that is passed on to the onexecute function below                                                                                                                                                                                                                                                  |
| --------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onexecute | function( in_data)                  | **called on SLOWPATH** A function that accepts the `data` string specified. This function executes in a separate thread/task from the packet pipeline. You do your processing and optionally return a ‘response’ string. See rules below                                                                    |
| onresult  | function(engine, in_data, out_data) | **called on FASTPATH** if your script in `onexecute` on the separate thread returns string, Trisul will re-enter the fast path and call the `onresult` function with the result string. You can then update the `engine` parameter by adding metrics, generating alerts, or interact with Trisul in any way |

#### Usage

This small snippet shows the usage

Task: calculate sha1sum of extracted file

```lua
onfile_http  = function ( engine, timestamp, flowkey,
               path, req_header, resp_header, length )


      T.async:schedule(
          {
              -- send the file path
              -- 
              data = path,

              --
              -- [ on slow path, another thread ]
              -- calc sha1sum on the file
              -- and return the string
              -- 
              onexecute = function( indata)
                local h = io.popen("sha1sum "..path)
                local sha1  = h:read("*a")
                h:close()
                return sha1
              end,

              --
              -- [ back on fast path]
              -- 
              onresult = function(engine, req, response)
                  print("The SHA1 sum of  "..path.." IS " .. response)
              end
          }
      )

  end,
```
