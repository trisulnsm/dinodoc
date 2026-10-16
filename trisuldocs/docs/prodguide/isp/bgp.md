---
sidebar_position: 1
---

# Configuring BGP

This section describes how to configure BGP in Trisul ISP.

## I-BGP Route Receiver

Configure Trisul as an I-BGP peer of your external gateway routers or your route reflectors. Trisul doesn't advertise or withdraw any routes. It is a passive route collector. This lets Trisul build a virtual RIB for each router, and Trisul combines the NetFlow data from the routers with this RIB.

## Configuring Trisul as a BGP peer

The BGP support is in the **trisul-geo** package. Install it on the Probe yourself: selecting **ISP Analytics Suite** in the product mode selector doesn't install it. The package installs two
systemd services:

- **trisul-bgp.service** : the BGP peering service
- **trisul-bgp-ramfs-mount.service** : a service that prepares a special
  RAMFS partition to store the route database

## trisul-bgp.service

This service uses a config file
`/usr/local/etc/trisul-probe/trisul_piranha.conf` This is the only file
you have to edit to start the service.

Say your AS number is 64500. Set the same AS number in `local_as` in the configuration file. Then add the neighbors one after the other. A minimal example config:

:::note
The examples on this page use AS 64500, from the documentation range (RFC 5398). Use your own AS number.
:::

```text
..
local_as 64500

local_ip4 172.17.17.27  

bgp_router_id 172.17.17.27

neighbor  10.10.16.12 64500
..
```

The parameters are :

local_as  
Your (ISPs) AS number. Important this is not an external ASN, because we
are creating an I-BGP session.

local_ip4  
IP Address of the Trisul-Probe

bgp_router_id  
You can use the same value as `local_ip4`. An IP Address of the
Trisul-Probe, this address will appear in BGP messages on the remote
peers.

neighbor  
IP Address of the BGP neighbor then a space and the AS Number

### Starting and verifying

After configuring the neighbor above, you can start the BGP services.

```language-bash
$ systemctl start trisul-bgp-ramfs-mount
$ systemctl start trisul-bgp
```

#### Verifying

Log in as admin and go to **Context: default → Admin Tasks → BGP Route Receiver**.

The page shows the status of each peer.

## NetFlow vs BGP Peer address

After the peering is established, you may need to link the **NetFlow
exporter IP address** to the **BGP Peer Address**. Follow these steps.

- Log in and go to **Netflow → Routers and Interfaces**. Note down the router
  IP address. This is the **NetFlow exporter IP address**, say 10.17.17.20.

<!-- -->

- Go to the router database directory. Here you will find the **BGP Peer
  Addresses**. The directory is located in `/usr/local/var/ramdisk`. Say
  the BGP Peer address corresponding to the netflow exporter address
  10.17.17.20 is 10.10.20.37, you will find a database here.

```language-bash
root@ATJHSD33:/usr/local/var/ramdisk# ls
10.10.20.37_routes.db.sqlite3  
```

- Link the BGP peer database to the NetFlow exporter database:

```language-bash
$ ln -sf 10.10.20.37_routes.db.sqlite3  10.17.17.20_routes.db.sqlite3
```

The softlinks should show as below

```language-bash
$ ls -l
total 3300
-rw-r--r-- 1 trisul trisul 3379200 Jan 31 16:10 10.10.20.37_routes.db.sqlite3  
lrwxrwxrwx 1 trisul trisul      32 Jan  6 16:03 10.17.17.20_routes.db.sqlite3-> 10.10.20.37_routes.db.sqlite3  
```

:::note After a reboot
`/usr/local/var/ramdisk` is a RAMFS partition, so its contents, including these links, are lost when the Probe reboots. Re-create the links after every reboot, or put the `ln -sf` commands in a script or systemd service that runs at boot. You need the links only when the BGP peer address differs from the NetFlow exporter address. In most deployments they are the same. After you create or re-create the links, restart the Probe from **Context: default → Admin Tasks → Start/Stop Tasks**.
:::

## Common errors

1. Make sure TCP port 179 is open on the Trisul Probe
   `firewall-cmd --zone=public --add-port=179/tcp`
2. Check the neighbor line in the config file for stray spaces, tabs or special characters.
3. Double check the softlinks
4. Restart the probes

## How to add a new IGW

Adding an IGW takes two steps:

1. Configure NetStream on the IGW to export to the Probe VIP. See [NetFlow to a VIP](#netflow-to-a-vip).
2. Optionally, configure the BGP route receiver on the Trisul Probes and BGP on the IGW.

### NetFlow to a VIP {#netflow-to-a-vip}

A VIP (virtual IP) is an IP address that you configure on a network interface. The IGW sends NetFlow to the VIP, and the VIP delivers it to the DC node or the DR node, whichever is available. The `nfshim` tunnel copies the NetFlow that one site receives to the other site on a different UDP port, for example from port 2055 on the DC to port 5111 on the DR. You can use any UDP ports. Add each one under **Context: default → profile0 → Access Points**.

### Configure NetStream and BGP on IGW

**NetStream on the IGW**

Enable NetStream on all interfaces on the IGW and export to the Probe VIP. Port 51111 in this sample is not a default Trisul NetFlow port (2055, 2056, 2057, 4739, 5111, 9500, 9993), so add it under **Context: default → profile0 → Access Points**. A sample config:

```text
ip netstream as-mode 32
ip netstream timeout active 1
ip netstream timeout inactive 15
ip netstream tcp-flag enable
ip netstream export version 9 origin-as bgp-nexthop
ip netstream export template timeout-rate 1
ip netstream sampler fix-packets 100 inbound
ip netstream sampler fix-packets 100 outbound
ip netstream export source 172.20.101.61
ip netstream export host 172.20.17.107 51111
```

```text
ipv6 netstream timeout active 1
ipv6 netstream timeout inactive 15
ipv6 netstream export template timeout-rate 1
```

```text
#interface GigabitEthernet1/1/1
ip netstream inbound
ip netstream sampler fix-packets 1000 inbound
ip netstream sampler fix-packets 1000 outbound
ipv6 netstream inbound
ip netstream statistics enable
ipv6 netstream statistics enable    
```

Next configure BGP on the IGW to peer with the probe VIP.

```text
bgp 64500
peer 172.20.17.107 as-number 64500
```

### BGP on Trisul Probe

Next, configure the BGP receiver on the Trisul Probe. Say you added an IGW with IP address a.b.c.d (the `ip netstream export source` address).

1. Log in to all Probes.
2. Open `/usr/local/etc/trisul-probe/trisul_piranha.conf`.
3. Add the new IGW as a BGP peer at the end of the file:

```text
# PUT ONE LINE PER IGW HERE 
# IF USING ROUTE REFLECTOR / ROUTE SERVER Put a single entry here.
neighbor a.b.c.d  64500
```

4. Restart the BGP receiver:

```language-bash
systemctl restart trisul-bgp
```

## Next steps

[Install the ISP apps and dashboards](/docs/prodguide/isp/isapps#install-trisul-apps).
