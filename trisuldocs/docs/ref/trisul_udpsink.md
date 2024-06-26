# trisul\_udpsink : A UDP sink to prevent ICMP unreachable

Trisul uses high speed packet filter mechainsms in Netflow mode as well.
This means that Trisul does not actually open a UDP port 2055 (netflow)
to process netflow but directly taps into the packet filter mechanisms.

The downside of this is since there is no port open but the packets are
directed at those ports, you may see `ICMP Dest Unreachable` messages.

The *trisul\_udpsink* program simply opens these ports and reads the
messages into a sink. This stops the ICMP messages.

Type `man trisul_udpsink`

## Running the service

The preferred method is to edit the trisul-udpsink systemd service.

If you are using the default NETFLOW port 2055

```
    systemctl start trisul-udpsink
```

If you want to change the port number from 2055 to your custom port.
Type.

```bash
systemctl edit trisul-udpsink --full
```

Change the port number from 2055 to your preferred.

If you need more than one port number , just clone the systemd file to
create new services with different port numbers.

## Running the program directly

You can run the program manually like so

```
trisul_udpsink 2055 
```

There are other options for sending it into the background as a daemon.
Type `man..`
