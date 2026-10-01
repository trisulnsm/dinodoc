# The Trisul LUA API

The Trisul Lua API lets you build your own tools on top of the Trisul platform. Trisul embeds the LuaJIT interpreter.

## Start here

- [Scripting basics](/docs/lua/basics): the stream architecture, script types, and where scripts go.
- [Tutorial 1: Getting started](/docs/lua/tutorial1): run a hello-world script.
- [Tutorial 2: A simple counter](/docs/lua/tutorial2): meter packet lengths in a new counter group.
- [Script selector cheat sheet](/docs/lua/selector): pick the script type for your task.
- [Developer environment](/docs/lua/debugger): the testbench and the Lua debugger.
- [FAQ](/docs/lua/faq)

## Back end scripts

Back end scripts work on the stream of metrics that Trisul produces. They have a more relaxed time budget than [front end scripts](/docs/lua/intro_frontend_scripts), so you can use them for data enrichment or to guide real-time detection.

### Applications

1. Check file hashes, hosts and IPs against blacklists.
2. Act on the metric stream.
3. Export alerts or flows to Elasticsearch or other platforms.
4. Write custom thresholding code and generate statistics-based alerts.

### Time budget

Trisul is a streaming analyzer, so you get a single pass over the data. All your back end scripts must complete within a total time budget of 1 minute.

### List of back end script types {#list-of-backend-script-types}

Each script type listens to one streaming topic. For example, to monitor metrics for the *Hosts* counter group, use the `cg_monitor` script type and listen to the *Hosts* stream.

| Name | Called when | Notes |
|---|---|---|
| [engine_monitor](/docs/lua/engine_monitor) | Periodically | On a 1-minute timer. Use it to feed SNMP and other data inputs into Trisul. |
| [cg_monitor](/docs/lua/cg_monitor) | Counter group metrics events | Use for traffic, top-N and cardinality analytics. |
| [sg_monitor](/docs/lua/sg_monitor) | Flow metrics | On a new flow, and when a flow is flushed. |
| [alert_monitor](/docs/lua/alert_monitor) | Alert stream | Process alerts in Lua. |
| [resource_monitor](/docs/lua/resource_monitor) | Resource stream | HTTP requests, DNS events, TLS and file hashes. |
| [fts_monitor](/docs/lua/fts_monitor) | Full Text Search documents | HTTP headers and full TLS certificates. |
| [flow_tracker](/docs/lua/flow_tracker) | Flow tracker | Create your own custom flow tracker (top-K flow snapshots). |

## Latest-News  :newspaper: 

| Date |News  |
|---|---|
| 8-Jun-2026  | **New** — [attach a Lua script to multiple counters](/docs/lua/cg_monitor#multi-group-attachment). One script file can bind to many counter groups (or alert groups) via `counter_guid` arrays, `counter_name_match`, or `counter_name_regex` on [`cg_monitor`](/docs/lua/cg_monitor) / [`alert_monitor`](/docs/lua/alert_monitor). |
| 27-Jul-2024  | New LUA type [`message_monitor` ](/docs/lua/message_monitor) to listen to NetFlow records among other things|
| 6-Sep-2023  | Added `flow_counter` for [simple_counter](/docs/lua/simple_counter) to allow calling in NETFLOW_TAP mode|
| 20-Nov-2022 | New attribute `resolver_guid` for new Counter Groups|
| 25-Jun-2020 | New methods `T.contextname`, `T.env.domain_configfile` added to `T` to retrieve context_name and query Trisul domain configuration parameters.|
| 2-Feb-2020  | New [development tools](/docs/lua/debugger) Use the testbench options `luatestdir` and `TRISUL_LUA_PATHS` env variable. Avoid copying under-development LUA scripts to standard Trisul probe search paths.|
| 29-Dec-2019 | New [flowkey() method](/docs/lua/obj_layer) added to object Layer|
| 10-Oct-2019 | New MAXIMUM and MINIMUM counter types added. See [T.K.vartype](/docs/lua/obj_globalt#constants-tkvartype)|
| 23_Jun_2018 | New async execution model. Script can request more async workers by the [TrisulPlugin.request_async_workers](/docs/lua/basics#structure-of-a-lua--script) parameter. New Protocol Handler script feature allows you to attach to any host protocol and port without using the Access Points user interface |
