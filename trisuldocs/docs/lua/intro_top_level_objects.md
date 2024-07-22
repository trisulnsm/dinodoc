# LUA Objects

The LUA API is built around *functions* and *objects*

1. The Trisul platform will call functions you write at the appropriate times
2. It will make available to you various *objects* you can use to navigate and access information
3. Using some other objects you can inject various information and metrics into Trisul

## List of objects

The objects are

1. [`T`](/docs/lua/obj_globalt) – a global table called `T` that contains various utilities and state information
2. [`Buffer`](/docs/lua/obj_buffer) – wraps a byte buffer
3. [`Packet`](/docs/lua/obj_packet) – represents a packet which in turn contains many protocol layers
4. [`Layer`](/docs/lua/obj_layer) – a protocol layer
5. [`Engine`](/docs/lua/obj_engine) – the Trisul platform stream engine you can add information to this
6. [`Flow`](/docs/lua/obj_flowid) – represents a network flow
7. [`HTTPHeader`](/docs/lua/obj_httpheader)- methods to work with HTTP Headers
8. [`AC`](/docs/lua/obj_ac) – Utility for multi string matching. Aho-Corasick
9. [`RE2`](/docs/lua/obj_re2) – Utility for Regex. Wraps the Google RE2 library
