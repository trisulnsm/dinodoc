# Object Global table T

The global table named `T` can be accessed from anywhere. It defines some constants and utility functions.

## Global Table `T` index

| Name| Info |
| --- | ----- |
| T.contextid | A number that identifies the threading execution context of this lua script. You can have more than one instance of your script loaded see [Threading](/docs/lua/basics#threading) |
| T.execution_contextid | Same as `T.contextid`  |
| T.probeid | A string that identifies the probe within the domain running this script, such as `probe0`|
| T.probeversion | The version of the *Trisul Probe* running this script, such as `7.0.2779` |
| T.context_name | The database context name. |
| T.args | The `-args` command line option from [trisul](/docs/programs/trisulprogram)|
| T.enginetype | A string `backend` or `frontend` – scripts may want to use this |
| T.backend_engineid | The backend flusher connection, usually 0 or 1 | 
| [T.host](/docs/lua/obj_globalt#table-thost)  | Host methods that can be called from LUA |
| [T.K](/docs/lua/obj_globalt#table-tk)        | Constants |
| [T.util](/docs/lua/obj_globalt#table-tutil) | Utility methods |
| [T.async](/docs/lua/obj_tasync)  | Methods to call async LUA functions out of fast packet path |
| [T.re2](/docs/lua/obj_globalt#function-tre2)  | A fast and powerful regex engine (Google RE2) |
| [T.ac](/docs/lua/obj_globalt#function-tac)   | A minimal but fast Aho-Corasick multi pattern matcher |
| [T.log](/docs/lua/obj_globalt#function-tlog) | Function to log a message that goes into the main Trisul logging framework.|
| T.countergroups  | A table of ( countergroup name, guid ) currently loaded. Only for backend scripts. For frontend scripts this field has a nil    |
| T.resourcegroups | Backend scripts only : A table of ( resourcegroup name, guid ) currently loaded. |
| T.ftsgroups  | Backend scripts only : A table of ( FTS (Full Text Search) name, guid ) currently loaded.|
| T.sessiongroups | Backend scripts only : A table of ( session group name, guid ) currently loaded.|
| [T.env](/docs/lua/obj_globalt#table-tenv)    | Environment and Trisul Config file |

## Table `T.host`

Interact with the Trisul environment.

Use the object calling notation `T.host:function(..)` to invoke these methods.

| Name  | In | Out | Description|
| ----- | ---- | ---- | ---- |
| get_homenets   | none | Table, Array of [ `string` IP, `string` Netmask ] | Get home networks defined by Trisul.|
| is_homenet     | `number` 32bit IPv4 or `string` IPv4 in dotted decimal    | `bool`                                            | Is the 32-bit IPv4 address within the home network?<br/><br/> LUACopy`T.host:is_homenet(“192.168.2.1”)` |
| is_homenet_key | `string` IPv4 in trisul key format     | `bool`       | Is the Trisul key format IP address in the home network.    |
| get_configpath | none    | `string` directory  | Configuration directory |
| get_datapath   | none    | `string` directory   | Data directory  |
| createkey      | `guid` counter group id, `string` – key, `string` – label |                                                   | Create a userlabel for a given key. Use this to pre-load human labels for keys                          |
| prepare_config | `guid` – plugin id, `string` template file                | plugin config                                     | Prepare a configuration file for your plugin                                                            |
| broadcast      | `guid` – message id, `guid` class id, `string` message    | none  | Broadcast a state update to other plugins      |

## Table `T.K`

Pre-defined constants to use with other Lua functions.

| Name | Type | Numeric values |
| -------- | ------- | ----- |
| loglevel | Log levels  | EMERG, FATAL, ALERT, CRIT, ERROR, WARN, NOTICE, INFO, DEBUG <br/>Usage : `print(T.K.loglevel.ERROR) => 4` |
| vartypes | Meter types | COUNTER, RATE_COUNTER, GAUGE, RUNNING_COUNTER |

### Constants `T.K.vartype`

Constants : Types of counters.

This table defines counter types supported by Trisul. You typically use this table when creating custom [countergroups](/docs/lua/counter_group)


| Meter Type | Description |
|---|---|
| COUNTER            | Increment a counter that resets to zero at start of every time bucket|
| RATE_COUNTER       | Equal to COUNTER / Bucket Size in seconds|
| GAUGE              | Instantaneous values|
| RUNNING_COUNTER    | Increment or decrement a counter, does not reset every time bucket|
| AVERAGE            | Average of all samples in the window.|
| DELTA_RATE_COUNTER | Delta counter per second. Use this for SNMP like samples that represent a running counter but when you need to do a *c2 – c1* to get the total volume. The RATE part indicates that the final value will be (c2-c1)/bucketsize |
| MAXIMUM            | Maximum of all samples in the window |
| MINIMUM            | Minimum of all samples in the window |


## Table T.util

Useful utility functions written in C, exported to LUA via T.util table. We find them most handy for network related scripting.

```lua
-- called using T.util. (dot format)

local hexstr= T.util.bin2hex( binstr)
```

| Name  | In | Out | Description   |
| ----- | ---- | ---- | ---- |
| ntop  | `number` 32-bit IPv4  | `string` IP in dotted decimal format | Convert a 32 bit number to IPv4 address string |
| pton  | `string` ip in dotted decimal  | `number` 32 bit IP address | Convert an IPv4 address string to a number  |
| bor   | `number` p ,`number` q   | `number` p OR q  | bitwise OR of two numbers |
| band  | `number` p,`number` q  | `number` p AND q   | bitwise AND of two numbers |
| testbit32 | `number` p, `number` (bit position)                             | `bool`                               | Test bit position of a 32 bit number. LSB=0, MSB=31<br/>T.util.testbit32(num,8)@ returns true if bit 8 = 1                                                                          |
| bitval32  | `number` p, `number` (start bit), `number` width                | `number`                             | Get value of continous bits.<br/>`T.util.bitval32(num,20,4)` returns the numeric value of bits 20,19,18,17. Bit numbering start from 0 (C-style)                                    |
| split     | `string` the string to split, `string` the delimiter            | array of `string` tokens             | Split a string into tokens `local tok_array = T.util.split(args,',')`                                                                                                               |
| splitm    | `string` the string to split, `string` the delimiter            | multiple `string` returns            | Split a string into tokens and returns multiple values. Example `local flowid,path = T.util.splitm(args,',')`                                                                       |
| hash      | `string` to hash , *optional* `number` number of bits wide hash | `number` the hash code               | Compute a hash of the input string – Uses Murmur2 hash, output is n-bits wide.<br/>`local h =T.util.hash("Mystring",16)` The second argument nbits is optional with a default of 32 |
| bin2hex   | `string` can include binary                                     | `string` the hex                     | Convert the binary to hex                                                                                                                                                           |
| hex2bin   | `string` a hex                                                  | `string` binary                      | Convert the hex to binary string                                                                                                                                                    |

:::note

 The bit utilities have been provided because we are using LuaJIT which does not support Lua5.2’s bit32 library.

:::

## Function `T.re2`

The LUA regex functionality is quite limited. [Google RE2](https://code.google.com/p/re2/) is a fast, threadsafe, and powerful Regex engine. You may want to use this Regex engine over Lua’s default *find and match* methods in the following cases.

1. T.re2 also allows you to employ very common string matching idioms like `(octet-stream|application-x|application-pdf)` which arent available in Lua’s find method.
2. T.re2 allows you to precompile the regexes once and run them later

| Name  | In  | Out | Description  |
| ----- | --- | -- | ----- |
| T.re2 | string, table (optional) | A [re2 object](/docs/lua/obj_re2) | Precompile the regex string and return an re2 object. The optional second argument is a table containing boolean RE2::Options. |

#### RE2 Options

The following RE2 options are supported, the default values are in parantheses

```lua
//   utf8             (true)  text and pattern are UTF-8; otherwise Latin-1
//   posix_syntax     (false) restrict regexps to POSIX egrep syntax
//   longest_match    (false) search for longest match, not first match
//   log_errors       (true)  log syntax and execution errors to ERROR
//   literal          (false) interpret string as literal, not regexp
//   never_nl         (false) never match \n, even if it is in regexp
//   never_capture    (false) parse all parens as non-capturing
//   case_sensitive   (true)  match is case-sensitive (regexp can override
//                              with (?i) unless in posix_syntax mode)
```

#### Simple use

A sample illustrating a typical use.

```lua
-- precompile in onload
  onload = function() 

    my_regex = T.re2("User-Agent\\s*:\\s*(.*)\r\n")

  end

  onflowattribute = function(...)
    --
    -- my_regex is a precompiled re2 object, just compare
    -- or extract from a target string
    ---
    if my_regex:partial_match( a_string ) then 
      ..
    end
```

#### With RE2 options

We create a RE2 object with a regex and the “case_sensitive” and another option

```lua
-- precompile in onload
  onload = function() 

    my_regex = T.re2("User-Agent\\s*:\\s*(.*)\r\n",  ( case_sensitive = true, posix_syntax = true))

  end## [Function `T.ac`](/docs/lua/obj_globalt#function-_t.ac)
```

A fast and minimal Aho-Corasick multi pattern matcher.

| T.ac | table (An array of patterns) | An [AC object](/docs/lua/obj_ac) | Load all the patterns into an AC matcher and return an [AC matcher object](/docs/lua/obj_ac) |
| ---- | ---------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |

A sample illustrating a typical use.

```lua
onload = function() 
    -- add patterns in array and create a new AC matcher 
    ac_headers   = T.ac(( "Host:",
                        "User-Agent:",
                        "Referer",
                        "Server:",
                        "Content-Type:",
                        "Content-Length:") )


   -- later on you can use the match methods
   ac_headers:match_all(...)
```

## Function `T.ac`

A fast and minimal Aho-Corasick multi pattern matcher.

| T.ac | table (An array of patterns) | An [AC object](/docs/lua/obj_ac) | Load all the patterns into an AC matcher and return an [AC matcher object](/docs/lua/obj_ac) |
| ---- | ---------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |

A sample illustrating a typical use.

A sample illustrating a typical use.

```lua
onload = function() 
    -- add patterns in array and create a new AC matcher 
    ac_headers   = T.ac({ "Host:",
                        "User-Agent:",
                        "Referer",
                        "Server:",
                        "Content-Type:",
                        "Content-Length:"} )


   -- later on you can use the match methods
   ac_headers:match_all(...)## Function `T.log`
```

Adds a log message to the main Trisul log file. Trisul automatically adds the lua script filename to the log message so you know where the message is actually coming from. Also see [Printing and Logging from LUA script](/docs/lua/basics#print-and-logging)

| Name   | In   | Out  | Description  |
| ---- | ---- | ---- | --------------- |
| T.log        | [T.K.loglevel](/docs/lua/obj_globalt#table-tk) – optional loglevel<br/>`string` – log message | none | Log a message to the Trisul log file, usually located for the default setup in `/usr/local/var/log/trisul-probe/domain0/probe0/context0` . The default loglevel is `T.K.loglevel.DEBUG` |
| T.logerror   | `string` – msg  | none | Useful shortcut to log a message with loglevel of ERROR. `T.logerror(msg)` is the same as `T.log(T.K.loglevel.ERROR,msg)` |
| T.logwarning | `string` – msg | none | Log a message with WARN category|
| T.logdebug   | `string` – msg | none | Log a message with DEBUG category|
| T.loginfo    | `string` – msg | none | Log a message with INFO category|

#### Usage

The following snippets demonstrates the usage of T.log

```lua
T.log( T.K.loglevel.INFO,  "Your log message from lua ")
T.log( "This message has uses the default DEBUG log level  ")

T.log(T.K.loglevel.ERROR, "This is an error from my LUA script")
T.logerror( "This is an error message from my LUA script, same as above T.log() call")
```

## Function `T.log`

Adds a log message to the main Trisul log file. Trisul automatically adds the lua script filename to the log message so you know where the message is actually coming from. Also see [Printing and Logging from LUA script](//docs/lua/basics#print-and-logging)

| Name         | In                           | Out  | Description        |
| ------------ | ---------------------------- | ---- | ------------------ |
| T.log        | [T.K.loglevel](/docs/lua/obj_globalt#table-tk) – optional loglevel<br/>`string` – log message | none | Log a message to the Trisul log file, usually located for the default setup in `/usr/local/var/log/trisul-probe/domain0/probe0/context0` . The default loglevel is `T.K.loglevel.DEBUG` |
| T.logerror   | `string` – msg        | none | Useful shortcut to log a message with loglevel of ERROR. `T.logerror(msg)` is the same as `T.log(T.K.loglevel.ERROR,msg)`               |
| T.logwarning | `string` – msg        | none | Log a message with WARN category    |
| T.logdebug   | `string` – msg        | none | Log a message with DEBUG category    |
| T.loginfo    | `string` – msg        | none | Log a message with INFO category|

#### Usage

The following snippets demonstrates the usage of T.log

```lua
T.log( T.K.loglevel.INFO,  "Your log message from lua ")
T.log( "This message has uses the default DEBUG log level  ")

T.log(T.K.loglevel.ERROR, "This is an error from my LUA script")
T.logerror( "This is an error message from my LUA script, same as above T.log() call")
```

## Table `T.alertgroups`

:::success[Applicability]
This section applies equally to `T.countergroups`, `T.resourcegroups`, `T.sessionggroups`, `T.ftsgroups` as well.
:::

The purpose for this table is to provide a searchable `name` to `guid` mapping table of all the alertgroups currently loaded in Trisul. The backend [alert_monitor](/docs/lua/alert_monitor) scripts require you to specify a GUID that identifies the entity you are attaching the script to. If you do not know the GUID of the alert group but you know the name, you can use this table. See below.

#### Example alert_monitor code

If you know the GUID of the alert group named `Malware Domain` as `(FAC478BC-8891-0009-5F31-80774B010086)` you can attach an alert monitor as shown below

 LUACopy`TrisulPlugin = (   alert_monitor  = (     alert_guid = '(FAC478BC-8891-0009-5F31-80774B010086)',`

```lua
TrisulPlugin = ( 

alert_monitor  = (

  alert_guid = '(FAC478BC-8891-0009-5F31-80774B010086)',
```

Say you only know the name `Malware Domain` , this is where you use the `T.alertgroups` table to find the GUID

```lua
TrisulPlugin = ( 

alert_monitor  = (

  alert_guid = function()
    for name ,guid in pairs(T.alertgroups) do
        if name:match("Malware Domain") then return guid; end
    end
  end,
```

---

## Table `T.env`

Trisul environment. Allows you to read probe configuration for the context in which the LUA script is loaded.

| Name | In | Out | Description   |
| --- | --- | --- | --------- |
| configfile        |  | `string` – path of config file        | Full path of the trisulProbeConfig.xml file used by the running Trisul instance|
| get_config        | `string` – ‘xml path’. See description column | `string` – value of config parameter  | Read a configuration parameter from the [Trisul Probe configuration file](/docs/ref/trisulconfig). The XML Path supported is a very simple format “Node>Node>..Node”. So to read the config parameter *User* under *App* parent node the path is `App>User` |
| domain_configfile |  | `string` – path of domain config file | Full path of the domain.xml configuration file used by the running instance. This config file is mainly used when your scripts want to connect and communicate to domain elements, such as TRP queries. |
| get_domain_config | `string` – ‘xml path’. | `string` – config value  | Similar to `get_config` above but for the domain config file. Typical example `T.env.get_domain_config("Domain >LocalReq")` to find a local endpoint to connect to TRP  |

#### Usage

The most common use case of `T.env` is to find out where the following directories :

- the “run state” directory — where per-run files, unix sockets are stored
- the “config” directory — where persistent config is stored

#### Use 1 From a debug session

```lua
print("the path is "..T.env.configfile)

print("the username of Trisul process in config file (App>User) is "..T.env.get_config("App>User"))
```

#### Use 2 Opening a socket in runstate directory

```lua
local rundir  = T.env.get_config("App>RunStateDirectory")

local socket_file = rundir.."/myinput.socket"
```
