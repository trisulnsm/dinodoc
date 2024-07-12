---
sidebar_position: 1
---

# Configuring BGP

This section describes how to configure BGP in Trisul ISP.

## I-BGP Route Receiver

Trisul must be configured as a I-BGP peer with your external gateway
routers or with your route reflectors. Trisul will not advertise or
withdraw any routers, it will be a passive route collector. This allows
Trisul to bulid a virtual RIB for each router. The netflow data from the
routers is combined with this RIB to provide deep analytics.

## Configuring Trisul as a BGP peer

The BGP support is present in the **trisul-geo** package. Ensure that
the package is installed for on the probe. This package installs two
systemd services

- **trisul-bgp.service** : the BGP peering service
- **trisul-bgp-ramfs-mount.service** : a service that prepares a special
  RAMFS partition to store the route database

## trisul-bgp.service

This service uses a config file
`/usr/local/etc/trisul-probe/trisul_piranha.conf` This is the only file
you have to edit to start the service.

Say your AS Number is 55555 , the same AS Number must be specified in
the configuration file `local_as`. Then add the neighbors one after the
other. An minimal example config.

```language-bash
..
local_as 55555

local_ip4 172.17.17.27  

bgp_router_id 172.17.17.27

neighbor  10.10.16.12 55555
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

Login as admin/admin , then select Contexts: default \> Admin Tasks \>
BGP Route Receiver

This should show status of each peer.

## Netflow vs BGP Peer address

After the peering is established you may need to link the **Netflow
exporter IP address** to the **BGP Peer Address**. Follow these steps.

- Login and go to *Netflow\>Routers and Intefaces* Note down the router
  IP address. This is the **Netflow exporter IP Address** say this is
  10.17.17.20

<!-- -->

- Go to the router database directory. Here you will find the **BGP Peer
  Addresses**. The directory is located in `/usr/local/var/ramdisk`. Say
  the BGP Peer address corresponding to the netflow exporter address
  10.17.17.20 is 10.10.20.37, you will find a database here.

```language-bash
root@ATJHSD33:/usr/local/var/ramdisk# ls
10.10.20.37_routes.db.sqlite3  
```

- Link the BGP peer database to the Netflow exporter database

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

## Common errors

1. Make sure TCP Port 179 is open on the trisul probe
   `firewall-cmd --zone=public --add-port=179/tcp`
2. There is a space , tab , or special character in the neighbor line
   of the config file
3. Double check the softlinks
4. Restart the probes

## How to add a new IGW

The procedure to add an IGW consists of two steps.

\# Configure NETSTREAM on the IGW to send to either of the TWO VIP
configured.  
\# Optionally configure BGP Route Receiver on the Trisul Probes and on
the IGW.

### Configure NETSTREAM and BGP on IGW

**NETSREAM on IGW**

Enable Netstream on ALL interfaces on the IGW and export to one of the
two Probe VIPs. A sample config is shown below.

```language-bash
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

```language-bash
ipv6 netstream timeout active 1
ipv6 netstream timeout inactive 15
ipv6 netstream export template timeout-rate 1
```

```language-bash
#interface GigabitEthernet1/1/1
ip netstream inbound
ip netstream sampler fix-packets 1000 inbound
ip netstream sampler fix-packets 1000 outbound
ipv6 netstream inbound
ip netstream statistics enable
ipv6 netstream statistics enable    
```

Next configure BGP on the IGW to peer with the probe VIP.

```language-bash
bgp 132215
peer 172.20.17.107 as-number 132215
```

### BGP on Trisul Probe

Next you have to configure BGP receiver on the Trisul Probe.  
Say you have added a IGW with IP Address a.b.c.d (from the ip netstream
export source)

1. Login to all probes
2. Add the new IGW as BGP Peer Open the file
   /usr/local/etc/trisul-probe/trisul_piranha.conf
3. Add the peer as shown below at end of file

```language-bash
# PUT ONE LINE PER IGW HERE 
# IF USING ROUTE REFLECTOR / ROUTE SERVER Put a single entry here.
neighbor a.b.c.d  132215
```

1. Then restart the BGP reciever

```language-bash
systemctl restart trisul-bgp
```
