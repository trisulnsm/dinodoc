# Top level LUA Objects

The LUA API is built around *functions* and *objects*

1. The Trisul platform will call functions you write at the appropriate times
2. It will make available to you various *objects* you can use to navigate and access information
3. Using some other objects you can inject various information and metrics into Trisul

## List of objects

The objects are

1. [`T`](https://trisul.org/docs/lua/obj_globalt.html) – a global table called `T` that contains various utilities and state information
2. [`Buffer`](https://trisul.org/docs/lua/obj_buffer.html) – wraps a byte buffer
3. [`Packet`](https://trisul.org/docs/lua/obj_packet.html) – represents a packet which in turn contains many protocol layers
4. [`Layer`](https://trisul.org/docs/lua/obj_layer.html) – a protocol layer
5. [`Engine`](https://trisul.org/docs/lua/obj_engine.html) – the Trisul platform stream engine you can add information to this
6. [`Flow`](https://trisul.org/docs/lua/obj_flowid.html) – represents a network flow
7. [`HTTPHeader`](https://trisul.org/docs/lua/obj_httpheader.html)- methods to work with HTTP Headers
8. [`AC`](https://trisul.org/docs/lua/obj_ac.html) – Utility for multi string matching. Aho-Corasick
9. [`RE2`](https://trisul.org/docs/lua/obj_re2.html) – Utility for Regex. Wraps the Google RE2 library
