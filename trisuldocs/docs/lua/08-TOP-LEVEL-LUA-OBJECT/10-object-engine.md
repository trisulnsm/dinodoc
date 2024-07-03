# Object Engine

The Trisul metrics engine.

You call methods on this object to add metrics, objects, flows, or other types of information. This is the most important object you will be working with.

## Functions

A summary of the functions available in this object.

- F – functions that can be called from [Frontend](https://trisul.org/docs/lua/basics.html#frontend_and_backend_scripts "aka Fastpath") scripts
- B – functions that can be called from [Backend](https://trisul.org/docs/lua/basics.html#frontend_and_backend_scripts "aka Slowpath") scripts

If you call functions that are not available you will get the following error

```lua
ERR_NOTAVAIL: add_flow_counter() is not available for backend scripts
```

| Name                  | Availability | Description                                                                         |
| --------------------- | ------------ | ----------------------------------------------------------------------------------- |
| update_counter        | F B          | Updates a meter for a key with a particular value                                   |
| update_counter_bytes  | F            | Updates a meter for a key but with a value of wire_length in the packet             |
| update_counter_raw    | F B          | Update counter raw is a variant of update_counter.                                  |
| update_key_info       | F B          | Set a user friendly label or a description for a key                                |
| add_alert             | F B          | Add an alert                                                                        |
| add_alert_full        | F B          | Same as add alert with with a priority and classification. Used for IDS alert types |
| add_alert_tca         | F B          | For alerts based on metric values and threshold crossing events`                    |
| add_resource          | F B          | Add a new resource with metadata and contents to Trisul                             |
| timestamp             | F B          | The latest timestamp seen by the engine                                             |
| add_flow_counter      | F            | Add a flow counter                                                                  |
| reset_flow_counter    | F            | Removes all flow counters, then does an add_flow_counter                            |
| tag_flow              | F B          | Tag a flow with a label. Y                                                          |
| instanceid            | F B          | Engine Instance identifier                                                          |
| probeid               | F B          | Trisul probe id of the engine                                                       |
| update_flow           | F            | Update a flow based metric                                                          |
| new_flow_record       | F            | Inform framework about a new flow record                                            |
| set_flow_duration     | F            | Set the duration of the flow in seconds                                             |
| disable_reassembly    | F            | Stop TCP reassembly of this flow                                                    |
| post_message_frontend | F B          | Post a message to other LUA plugins attached to the packet (frontend) pipeline      |
| post_message_backend  | F B          | Post a message to other LUA plugins in the metrics (backend) pipeline               |
| add_edge              | F B          | Add a single edge to the Trisul Streaming Graph Analytics pipeline                  |
| add_flow_edges        | F B          | Automatically add edges from a network flow to a given vertex.                      |
| set_key_attribute     | F B          | Set an arbitrary \{attribute-name,value}\ pair for any key                            |
| add_flow_attribute    | F B          | Add an \{attribute-name,value\} pair for any flow for other Lua script to pick up.    |
