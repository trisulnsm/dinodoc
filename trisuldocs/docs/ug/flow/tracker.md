---
sidebar_position: 02
---

# Flow Trackers

A flow tracker is used to capture and save snapshots of top flows
matching a range of criteria.

The Trisul database can potentially end up with hundreds of millions of
flows every day. Using flow trackers you can perform quick topper
analysis of the flow database over large timeframes.

A common use case of Flow Trackers is to track the so called ‘Elephant
flows’. Those are flows transferring a huge volume of data. But as you
shall see below this is not the only type of tracker. Flow trackers are
also necessary for you to use [flow tracker alerts](/docs/ug/alerts/ft).

## Built in Trackers

The following flow trackers are built in. You may create your own on top
of it.

> The default configuration of these trackers save a snapshot of 100 flows every 5 minutes.

| Flow Tracker    | Description                                                                                   |
| --------------- |---------------------------------------------------------------------------------------------  |
| Volume          | Highest volume                                                                                |
| Long Lived      | Longest duration                                                                              |
| Transferred-In  | Highest volumes transferred **into** of your home network                                     |
| Transferred-Out | Highest volumes transferred **out** your network                                              |
| Payload-In      | Highest TCP Payload transferred **into** your home network. Does not include TCP handshake packets                                                                                                           |
| Payload-Out     | Highest TCP Payload volume transferred **out of** your network. Does not include TCP handshake packets                                                                                                           |
| Keys            | Flows involving specific hosts or subnets or applications                                     |
| NOT Keys        | Flows not involving specific hosts or subnets or applications                                 |

## Custom Trackers

You can create custom flow trackers by specifying which IP ranges or
Port ranges you want to track. There are two types of customized
trackers.

1. Key based : Track top flows by filtering IP Address, Subnets, Ports,
   or Port Ranges
2. Volume based : Track flows within a range of bytes transferred. This
   option lets you track flows that transfer a range of bytes say
   between 500 and 1000 bytes. This has application in very specific
   security scenarios and you cannot combine it with port and IP based
   filters.

### Configuring Custom Trackers

To configure flow trackers.  
:::note navigation

Select Tools -> Flow Trackers ->Manage

:::

### Fill up the Fields

#### Session Group

TCP Sessions is the only option allowed by default.

#### Tracker Type

You have to select a base tracker type which you want to customize. The
following table describes the available options.

| Tracker Type            | What it means                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------|
| Based on keys           | Specify IPs or Ports in the Config String field. Only flows involving the ranges will be tracked.                                                                                                        |
| Based on Negated keys   | Same as above but flows NOT involving the ranges will be tracked                       |
| Based on total bytes    | Total bytes transferred. You can specify a volume constraint to track flows transferring a range of bytes. You cant use a port or IP range filter for this option                              |
| Based on upload         | Total bytes uploaded from host within Home Network to outside the Home Network. You can specify a port or IP range filter to narrow down which flows will be considered for this                           |
| Based on download       | Total bytes uploaded from host within Home Network to outside the Home Network. Filter allowed.                                                                                                           |
| Based on upload payload | Total TCP Payload bytes downloaded. This does not include the IP and TCP and other headers. Filter allowed.                                                                                           |
| Based on upload         | TCP Payload bytes uploaded. Filter allowed.                                            |

#### Tracker Name

A short name for the tracker.

#### Config String

A filter string that allows you to specify what subset of flows you want
to consider.

| Tracker Type            | Config String                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------|
| For type “total bytes”  | `lower,100,500` track flows between 100 and 500 bytes, prefer the lower side. `higher,500,2000` track flows between 500 and 2000 bytes, prefer the higher side                                    |
| All other tracker types | A filter string (See below)                                                            |

#### Filter String Format

Some examples

| Config String               | Filter                                      |
| --------------------------- | ------------------------------------------- |
| `192.168.1.8`               | Flows involving 192.168.1.8                 |
| `192.168.1.8,192.168.1.33`  | Flows involving 192.168.1.8 OR 192.168.1.33 |
| `192.168.1.1~192.168.1.255` | Flows in subnet 192.168.1.x                 |
| `espn.com`                  | Using hostname instead of IP                |
| `http,https`                | Port 80 and Port 443                        |
| `Port-2000`                 | Port 2000                                   |
| `Port-2000~Port-6000`       | Port 2000 to 6000                           |
| `!192.168.1.8`              | Not from 192.168.1.8                        |
| `!192.168.1.8~192.168.1.18` | Not between 192.168.1.8 and 19              |
| the ! character             | Use in front of any filter to negate        |

#### Not on Volume Based Trackers

The main application for tracking flows transferring low payload is in
specific security scenarios. In case you are interested in this type of
tracker here is some additional information.

| Flow Trackers | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **lower,x,y** | Track flows transferring lower volumes in the range x and y  |
| **upper,x,y** | Track flows transferring higher volumes in the range x and y |

Say you have configured flow trackers to track 100 flows, and there are
150 flows in the range 100 to 200 bytes. **upper,100,200** will count
the higher of the 150 flows and **lower,100,200** will count the lower
100 of the 150 flows.

## Changing Parameters

The default setting is Trisul tracks 100 flows per tracker every 300
seconds. You can change it by clicking on “Edit…” and changing the
parameters

| Parameters              | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| Commit Interval Seconds | Granularity of storage. Default 300 seconds                 |
| Count                   | How many flows should be stored every interval. Default 100 |

## Viewing

:::note navigation

Select Tools -> Flow Tracker

:::

## Alerting on Flow Tracker Activity

See [Flow Tracker Alert](/docs/ug/alerts/ft) section.
