# Front end scripts

Front end scripts are inline in the fast path.

:::info

Because frontend scripts are in the fast path. You need to use `T.async` methods to perform I/O in a separate *slow path* provided by the Trisul framework.

:::

## List of frontend script types

You can hook your lua scripts into the following points in the frontend.

| Name                                                                                  | Called when                            | Notes                                                          |
| ------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| [countergroup](https://trisul.org/docs/lua/frontend_scriptsHEAD.html#counter_group)   | During initialization                  | Create a new counter group                                     |
| [simplecounter](https://trisul.org/docs/lua/frontend_scriptsHEAD.html#simple_counter) | Each packet                            | Inspect packet contents and update meter/alerts                |
| [flowmonitor](https://trisul.org/docs/lua/frontend_scriptsHEAD.html#flow_monitor)     | When interesting data is seen per flow | Inspect HTTP headers, TLS certs, then attach counters to flows |
| [fileextract](https://trisul.org/docs/lua/frontend_scriptsHEAD.html#fileextract)      | Events in HTTP layer                   | Flexible platform to extract files transferred via HTTP        |
| [reassembly](https://trisul.org/docs/lua/frontend_scriptsHEAD.html#reassembly)        | TCP reassembly                         | Control and process output from Trisul’s TCP reassembly engine |
