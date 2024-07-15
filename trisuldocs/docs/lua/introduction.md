# Back end scripts

Back end scripts work on a stream of metrics.

## Applications

Since the Backend scripts have a more relaxed time budget than the Frontend scripts, they can be incredibly powerful for data enrichment or to guide real time detection.

1. Security – check Filehashes, hosts, IPs against blacklists
2. Perform action on metric stream.
3. Export alerts or flows to elastic search
4. Custom thresholding code and generate statistics based alerting
5. Export flows to elastic search or other platforms

## Time Budget

Since Trisul Network Analytics is a streaming analyzer. You get a single pass over the streaming data. All your scripts must complete within a total time budget of 1 minute.

## List of backend script types

The following script types are available – within each script type you listen to one streaming ‘topic’ or subset. If you want to monitor metrics for the *Hosts counter group* you would choose the *cg_monitor* script type and within that script listen to the *Hosts* stream.

| Name                                                                          | Called when                  | Notes                                                                           |
| ----------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| [engine_monitor](/docs/lua/engine_monitor )                  | Periodically                 | on a 1 minute timer you can support SNMP and other data input tools into Trisul |
| [cg_monitor](/docs/lua/cg_monitor) | Counter group metrics events | Use for traffic, top-N, cardinality analytics                                   |
| [sg_monitor](/docs/lua/sg_monitor)                 | Flow metrics                 | On new flow, when flow is flushed,                                              |
| [alert_monitor](/docs/lua/alert_monitor)                    | Alert stream                 | Process alerts in Lua                                                           |
| [resource_monitor](/docs/lua/resource_monitor)              | Resource stream              | HTTP requests, DNS events, TLS, File hashes stream                              |
| [fts_monitor](/docs/lua/fts_monitor)                        | Full Text Search docs        | Documents HTTP headers, full TLS Certs                                          |
| [flow_tracker](/docs/lua/flow_tracker)                      | Flow tracker                 | Create your own custom flow tracker – top-K flow snapshots                      |
