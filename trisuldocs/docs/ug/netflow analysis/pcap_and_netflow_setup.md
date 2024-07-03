---
title: Using Packets and Netflow Together
sidebar_position: 6
---
# Using Packets and Netflow together

Trisul can also consume a mix of Netflow and raw packets on the same or
on different interfaces. The way this feature works is :

1. Packets on Netflow ports will be expanded and interpreted as
   Netflow/JFlow/IPFix/etc
2. Other packets will be treated as usual

If you want to only consume Netflow then refer to the [Netflow Setup
Howto](/docs/ug/netflow/netflow_setup.html)

## How to use this mode

To use this mixed mode - we use a different technique than that
described in the [Netflow only
setup](/docs/ug/netflow/netflow_setup.html)

We now enable netflow on a per-adapter mode.

For instance if you have the following scenario

1. Netflow traffic on `eth1`
2. PCAP traffic on `eth0`

and you wish to pull them into a single instance of Trisul you would do
the following.

1. Go to Profile0 \> Capture Adapters>Create Adapter
2. Create an adapter for eth0
3. Create an adapter for eth1
   1. For eth1 - **check** the *Force Netflow Mode* checkbox
   2. For eth0 - ensure the *Force Netflow Mode* checkbox is
      **unchecked**
4. Enable both eth0 and eth1 adapters
5. Restart Trisul

> While using this mode, make sure the [TrisulMode in trisulConfig.xml](/docs/ref/trisulconfig.html#app) is set to TAP (the default) and not NETFLOW_TAP

### Netflow and PCAP on the same interface

If you have Netflow and PCAP on the same interface (say eth0). You would
create two eth0 interfaces and check the “Force Netflow Mode” on only
one of them.
