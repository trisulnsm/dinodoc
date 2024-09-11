# Trisul with Netflow

This section explains how you can setup Trisul in Netflow mode. In this mode, Trisul uses Netflow and other flow telemetry to drive its analytics engine instead of raw packets. This section describes how to configure Netflow mode, to analyze from a *Device perspective*, and how to use advanced features such as “Interface Tracking”.

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Key Features of Trisul Netflow

Trisul supports Netflow v1, v5, and Netflow v9, Flexible Netflow, and all versions ofSFLOW, and IPFIX. All routers and interfaces are auto discovered.

| Bandwidth and Traffic Monitoring | Flow Analytics for incident response | Security and Anomaly Detection  |
| ----------------------------- | --------------------------------------- | ------------------------------ |
| <ul><li>Monitor bandwidth usage</li></ul>,  <ul><li>Device and interface drilldown Over 200 Metrics</li></ul>, <ul><li>TopN, BottomN NO ROLL UPS</li></ul>, <ul><li>Full resolution metrics</li></ul>, <ul><li>LIVE Real Time views</li></ul>, <ul><li>Powerful alerting</li></ul>, <ul><li>Long term interface drilldowns</li></ul> | <ul><li>Store ALL flows</li></ul>, <ul><li>No rollups or loss of info</li></ul>, <ul><li>Drilldown flows from interfaces</li></ul>, <ul><li>Powerful Flow Query</li></ul>, <ul><li>Graph Analytics for Flows</li></ul>, <ul><li>Enrich withFlow Taggers</li></ul>, <ul><li>Long timeframe Top-K flows</li></ul>, <ul><li>Detect Exfil and Long Sessions</li></ul> | <ul><li>Threat monitoring</li></ul>, <ul><li>Threshold Band</li></ul>, <ul><li>Detect anomalies in metrics</li></ul>, <ul><li>Identify compromised hosts</li></ul>, <ul><li>Query IP spaces</li></ul>, <ul><li>Over 20 Retro Analysis tools</li></ul>, <ul><li>Complement Packet based Trisul</li></ul>, <ul><li>TRAI ISP Compliance</li></ul> |

## Introduction to Netflow for Trisul

Netflow is a very handy mechanism to acquire network data from a very large number of network elements in a cost effective manner. For maximum visiblity, we recommend you enable Netflow all over your network and send the logs to a Trisul context.

The following diagram shows an example deployment.

![](images/netflow.png)

*Figure: Configuration of routers/switches to send Netflow (JFLOW,IPFIX,SFlow,etc) to Trisul-Probe*

## Advantages of Netflow vs Packet Capture

Trisul’s default input mode is raw packet capture. But Trisul also has**comprehensive support**for Netflow v5/v9/JFlow/IPFIX/and SFlow metering.

| Advantages of netflow input    | Disadvantages                                                     |
| ------------------------------ | ----------------------------------------------------------------- |
| Easier distributed deployment  | No packet based traffic metering like DNS, HTTP, SSL analysis,etc |
| Less expensive hardware        | Limited security visibility                                       |
| Scales far better than packets | Cannot access packets for forensics or malware analysis           |

> Tip: You can use Packet based Trisul to do fullNSM(Network Security Monitoring) at perimeter and Netflow to gain visibilty into lateral traffic inside your network.

## Global vs Device View

This may be confusing for those coming to Trisul from traditional netflow solutions. Most of the Trisul dashboards are**Global views**that represent the sum total of all the interfaces in your network. If you see metrics for*8.8.8.8*it represents theTOTALtraffic to*8.8.8.8*from all the routers in your network.

There is also comprehensive support for a**Device View**. You access that through the[Routers and Interfaces](/docs/ug/netflow/routers_and_interfaces)tool. The*Device View*allows you to select a router then an interface on that router and then see the breakup of traffic within that.

If you log on for the first time into a Netflow instance you may get a dashboard like below. The image below shows where to find the Router and Interfaces for getting to the Device Specific view.

![](images/Current_host.png)

*Figure: Global vs Device View*

## Links

The following docs contain further instructions to setup Netflow

1. [Setup Netflow](/docs/ug/netflow/netflow_setup)— How to switch Trisul into a Netflow mode
2. [Netflow Configuration Wizard](/docs/ug/netflow/netflow_wizard)— Using the Netflow Config Wizard to customize, useSNMPto resolve,setup Email alerts, etc
3. [Routers and Interfaces](/docs/ug/netflow/routers_and_interfaces)— The Device Drilldown tool that allows you to select a router, view interfaces, drilldown into an interface
4. [Using Interface Tracking](/docs/ug/netflow/interface_tracker)— Enabling*Interface Tracking*a feature that allows long term accurate analysis of Hosts, Apps, Protocols into and out of an interface
5. [Interface Drilldown](/docs/ug/netflow/drilldown)— Using the Interface Drilldown Screen
6. [Netflow Sources Dashboard](/docs/ug/netflow/sources)— The netflow sources dashboard
7. [UsingSNMP](/docs/ug/netflow/snmp)— UsingSNMPto complement Netflow device views
