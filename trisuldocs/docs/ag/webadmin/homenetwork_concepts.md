---
sidebar_position: 7
---

# Home Network Concepts

## Terminology

Here is a quick description of terminology related to the concept of
home networks.

**Outgoing Traffic** 

Source IP is in your home network, but Dest IP is not

**Incoming Traffic**  

Source IP is not in your home network, but Dest IP is

**Internal Traffic**  

Both Source IP and Dest IP are in your home network

**Transit Traffic**  

Both Source IP and Dest IP are not in your home network.

> Note For ISPs, the AS numbers constituting the Home Network are all the AS whose routes are announced by the home AS. See [Home Networks for ISP](#home-networks-in-isp-solution) section

## Home Networks in ISP Solution

The following rule is used when deploying Trisul in ISP configuration.
First the Home AS Number is configured into the NetFlow and Geo
configuration files. This represents the AS Number of the network where
Trisul is deployed.

The following definition:

> **Definition:** All the autonomous systems (AS) whose prefixes are
> advertised by the network being monitored by Trisul are considered
> Home Networks.

### Collecting Home Network information Through External Route Receivers

Trisul Network Analytics automatically collects route information from
public and private BGP peering in places like Amsterdam, Singapore, and
Chicago. From these places Trisul uses our powerful BGP analytics tool
[jacktheribber](https://github.com/trisulnsm/jacktheribber) to compute a list of AS advertised as downstream a Trisul customer. This information is automatically fed into the processing.

![](images/bgphn1.png)  
*Figure: Computing home network AS using BGP*

Lets walk through the above example.

1. Our AS number is 100
2. AS 100 peers with downstream 200,300,400
3. AS 200 further peers with 210 and 220
4. However AS 200 does not advertise 220 route to AS100 , perhaps it
   advertises to some other peer.
5. Trisul observes global BGP tables from locations such as Singapore
   and Chicago. From the global AS Path information we calculate the
   Home AS networks as all those advertised by AS100 - which is to say
   AS100 is present in the AS PATH attribute.
6. We then compute the final Home Networks as {100,200,210,300,400}

This final set is used by Trisul in the NetFlow configuration file in the [HomeASNumbers](pathname:///docs/ref/netflow-config#HomeASNumbers) parameter using a periodic update mechanism.

Some points to be noted.

1. When Trisul collects NetFlow based information from BGP router,
   it has Source-AS and Destination-AS information in it.
2. If Source and Destination AS are external that is reported as
   *Transit*. In the above example even though AS220 is downstream it
   is not advertised. Hence the traffic seen will be outgoing traffic
   from AS220 as per the policies of its peer AS200.

#### Default Route and AS-0 Handling

1. If default routes are used in BGP routes, it may result in AS-0 in
   Trisul. For traffic direction purposes the following formula is used
   when we see a AS-0 (default route) in the NetFlow data.
   1. If source-AS is 0 and dest-AS is homenetwork, source-AS is
      assumed to be external. hence direction is marked as incoming.
   2. If source-AS is homenetwork and dest-AS is 0, direction is
      marked as outgoing.
   3. This may or may not suit your specific network routing. Keep
      that in mind while interpreting the “transit” and “internal”
      directions.

### Collecting Home Network Information Through BGP

In ISP setting, Trisul includes a built in BGP route receiver. This is
added as a I-BGP peer to the customer router or a BGP Route Reflector.
For more see “Configuring BGP”. This information is combined with
downstream peering information to obtain a list of Home AS.