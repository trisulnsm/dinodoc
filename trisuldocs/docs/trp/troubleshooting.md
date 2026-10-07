# Troubleshooting Trisul Remote Protocol

## Access control {#how-to-disable-the-access-control-list-acl-}

The TRP server does not use an Access Control List. By default it listens on a local `ipc://` socket, which only processes on the Hub can reach. If you switch to a `tcp://` socket, restrict access with a firewall. See [Connecting over TCP](/docs/trp/trpgemsteps).

## Getting Protocol Buffers error

A PCAP returned inside a TRP response is limited to 1 MB. For a bigger PCAP, ask the probe to save the file instead of returning it in the response, or log on to the probe and retrieve the PCAP there.
