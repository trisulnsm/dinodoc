# Developer environment

Explains how to use a “development mode” and use the LUA debugger.

## Development testbench

While starting to write your LUA scripts it is better to first target a single threaded and single backend engine. This allows you to get the LUA script functionality right. It is also much easier to debug a single threaded Trisul engine calling your LUA scripts.

## Testbench run options

The following testbench commands are available.

`trisulctl_probe testbench guid`

Generates a new GUID when you want to create new counter groups, alerts etc

`trisulctl_probe testbench run <pcap-file>`

Runs a PCAP against your LUA scripts in a single threaded environment with output to the screen

`trisulctl_probe testbench run <pcap-file> luatestdir=<lua-directory>`

Runs a PCAP file against your lua scripts in the *luatestdir* directory. Adds this directory to the probe search path. Use this in development mode to avoid copying your lua files to the standard search paths.

`trisulctl_probe testbench run <pcap-file> frontend-only`

Only runs the frontend *fast* engine. Use this to test frontend scripts. This is much faster.

`trisulctl_probe testbench runluainput <lua-input-filter> <data-file>`

Use this to test LUA [input filter scripts](/docs/lua/inputfilter). Run the input filter LUA passing the `data-file` as the argument to it. This argument is passed as `T.args` to your input filter script.

### The special ‘debug0’ context

This is a special context that sets up a nice development environment for you.

1. single threaded
2. the debug0 context does not actually save the data at the hub, this frees you from cleanups and resets
3. use the testbench tools which automatically work with the debug0 context
4. use the built in LUA debugger and interact with the terminal

### Creating the debug0 context

Typically this is created automatically when you run the `testbench` tools

```lua
trisulctl_probe
> testbench run /home/bigcaps/upload_misc.tcpd
```

### Specify a development directory for LUA scripts

Using `tp testbench run <pcap-file> luatestdir=<directory>` you have test all the LUA scripts in the development directory without copying them to the standard places where Trisul searches for LUA scripts.

```lua
# trisulctl_probe
# testbench run /home/mike/pcaps/largeisp.pcap luatestdir=/home/mike/development/trisul_lua/BGPanalysis
```

### TRISUL_LUA_PATHS environment variable

You can also set the `TRISUL_LUA_PATHS` environment variable before starting Trisul to add your own paths to the standard LUA search paths.

```lua
# export TRISUL_LUA_PATHS=/home/mike/development/trisul_lua/BGPanalysis
# trisulctl_probe testbench run /home/mike/pcaps/largeisp.pcap
```

** Using the Lua Debugger **

The Trisul framework includes a powerful debugger you can use immediately.

The debugger is installed in `/usr/local/lib/trisul-probe/plugins/lua/helpers` and is available to all scripts without any special download or installation.

:::info[**Threading Note**]

Use the debugger using the testbench tools. It could get messy when you turn it on a regular context as multiple threads can enter the debugger at the same time and you cant tell them apart.

:::

To use the debugger

```lua
local dbg = require("debugger")

..

-- then at some point
dbg()
```

that will drop you into the debugger. You can single step, examine variables, Trisul objects, set breakpoints, etc.

For more check out the documentation for [`debugger.lua`](https://github.com/slembcke/debugger.lua)
