# The Trisul LUA API

The Trisul LUA API allows you to build your own powerful tooling on top of the Trisul platform. The embedded LuaJIT interpreter offers almost close to C performance.

## Latest-News  :newspaper: 

| Date |News  |
|---|---|
| 27-Jul-2024  | New LUA type [`message_monitor` ](/docs/lua/message_monitor) to listen to NetFlow records among other things|
| 6-Sep-2023  | Added `flow_counter` for [simple_counter](/docs/lua/simple_counter) to allow calling in NETFLOW_TAP mode|
| 20-Nov-2022 | New attribute `resolver_guid` for new Counter Groups|
| 25-Jun-2020 | New methods `T.contextname`, `T.env.domain_configfile` added to `T` to retrieve context_name and query Trisul domain configuration parameters.|
| 2-Feb-2020  | New [development tools](/docs/lua/debugger) Use the testbench options `luatestdir` and `TRISUL_LUA_PATHS` env variable. Avoid copying under-development LUA scripts to standard Trisul probe search paths.|
| 29-Dec-2019 | New [flowkey() method](/docs/lua/obj_layer) added to object Layer|
| 10-Oct-2019 | New MAXIMUM and MINIMUM counter types added. See [T.K.vartype](/docs/lua/obj_globalt#constants-tkvartype)|
| 23_Jun_2018 | New async execution model. Script can request more async workers by the [TrisulPlugin.request_async_workers](/docs/lua/basics#structure-of-a-lua--script) parameter. New Protocol Handler script feature allows you to attach to any host protocol and port without using the Access Points user interface |
