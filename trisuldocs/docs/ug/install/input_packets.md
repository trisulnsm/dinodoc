---
sidebar_position: 12
---

# Setup packet captures for Trisul

This section explains the various methods to acquire raw network packets from your infrastructure and into a Trisul Probe.

Sections in this document

- **Port Mirror** – recommended for most enterprises < 500 Mbps
- **Network Taps** – recommended for links > 500Mbps
- **Bridges** – for small offices and appliances only

### Virtual Machine configuration

If you are installing Trisul on a Virtual Machine, you may need to put the Virtual Switch in promiscuous mode to capture the traffic on the Physical port span. See this link for instructions for [VMWare](https://kb.vmware.com/s/article/1004099)

## Configuring port mirror / SPAN Port

The following diagram shows how you can configure a SPAN port and feed packets into Trisul. See your switch vendor’s documentation on configurating a Port SPAN session. [ [Cisco SPAN documentation](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/10570-41.html) ]

![](https://trisul.org/docs/ug/install/images/portmirror.png)

**SPAN example** ports `ge/0/0/1` and `ge/0/0/12` traffic mirrored to `ge/0/0/6` which is then connected to Trisul-Probe

## Using Network Taps

SPAN ports quickly become unweildy as network speeds increase. Network taps are available as Copper and Optical modules that are the preferred choice for high speed networks.

![](https://trisul.org/docs/ug/install/images/networktap.png)

Network Tap used with 10G optical fiber. Each direction needs a tap and sent to two ports on Trisul-Probe

## Using Trisul as a bridge

For small office networks you can even use 2 Ports of the box running Trisul and create a bridge. This places Trisul as an inline device.

![](https://trisul.org/docs/ug/install/images/bridge.png)

Bridge : Use the Trisul-Probe inline as a bridge. Useful for small deployments

### Bridging Ethrenet Connections

A bridge allows you to connect two or more network segments together allowing devices to join the network when it’s not possible to connect them directly to a router or switch

#### How to bridge

**UBUNTU**

Install the bridge-utils package.

Copy`sudo apt-get install bridge-utils`

Automatically Create the Bridge at Start-up  
Sample `/etc/network/interfaces file`

```bash
Install the bridge-utils package.
sudo apt-get install bridge-utils
Automatically Create the Bridge at Start-up
Sample /etc/network/interfaces file
 BASH#eth0
auto eth0
iface eth0 inet manual
up ifconfig eth0 up
#eth1
auto eth1
iface eth1 inet manual
up ifconfig eth1 up
#bridge br0
auto br0
iface br0 inet static
address 192.168.2.79
gateway 192.168.2.1
netmask 255.255.255.0
bridge_ports eth0 eth1
```

Restart networking

```xml
sudo /etc/init.d/networking restart
```

**CENTOS**

Install the bridge-utils package.

Copy`yum install  bridge-utils`

To create a network bridge, create a file in the `/etc/sysconfig/network-scripts/` directory called `ifcfg-br0`  
sample `/etc/sysconfig/network-scripts/ifcfg-br0`

```bash
DEVICE=br0
TYPE=Bridge
IPADDR=192.168.2.78
GATEWAY=192.168.2.1
NETMASK=255.255.255.0
ONBOOT=yes
BOOTPROTO=none
NM_CONTROLLED=no
DELAY=0
```

To complete the bridge another interface is created, or an existing interface is modified, and pointed to the bridge interface sample `/etc/sysconfig/network-scripts/ifcfg-eth0`

```bash
DEVICE=eth0
TYPE=Ethernet
HWADDR=AA:BB:CC:DD:EE:FF
BOOTPROTO=none
ONBOOT=yes
NM_CONTROLLED=no
BRIDGE=br0
```

sample `/etc/sysconfig/network-scripts/ifcfg-eth1`

```bash
DEVICE=eth1
TYPE=Ethernet
HWADDR=AA:BB:CC:DD:EE:FG
BOOTPROTO=none
ONBOOT=yes
NM_CONTROLLED=no
BRIDGE=br0
```

Restart networking

`/etc/init.d/netwok restart`
