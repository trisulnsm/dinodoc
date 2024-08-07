# Front end scripts

Front end scripts are inline in the fast path.

:::info

Because frontend scripts are in the fast path. You need to use `T.async` methods to perform I/O in a separate *slow path* provided by the Trisul framework.

:::

## List of frontend script types

You can hook your lua scripts into the following points in the frontend.

| Name                                                        | Called when                            | Notes                                                          |
| ----------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| [countergroup](/docs/lua/counter_group)  | During initialization                  | Create a new counter group                                     |
| [simplecounter](/docs/lua/simple_counter) | Each packet                            | Inspect packet contents and update meter/alerts                |
| [flowmonitor](/docs/lua/simple_counter)   | When interesting data is seen per flow | Inspect HTTP headers, TLS certs, then attach counters to flows |
| [fileextract](/docs/lua/fileextract)     | Events in HTTP layer                   | Flexible platform to extract files transferred via HTTP        |
| [reassembly](/docs/lua/reassembly)    | TCP reassembly                         | Control and process output from Trisul’s TCP reassembly engine |
