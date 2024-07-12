---
sidebar_position: 5
---

# All Reports

### Endpoints & Application

Report for a particular IP , App, or Router Interface

## Endpoint Report

Generates a summary report for a specific IP Address.

1. Enter the IP address or host name in this box. Note that this box autocompletes hostnames.
2. Click on any of the time ranges adjacent to the text box

#### How to schedule ?

You need to specify a particular host as a subject for this report.

1. From the *Report Type* select “[Endpoint Activity] IP”
2. In the *Report Parameters* field,
   - enter the host details in this format : `{"IP" : "ip-address or hostname" }` Examples : `{"IP":"192.168.1.66"}` or `{"IP":"mserver.mydomain.com"}` You must include the quotes and brackets

---

## Application Report

Generates a summary report for a specific application (eg.HTTP, DNS, SMTP, etc)

1. Enter an application name (such as http) or a port number (such as Port-80)
2. Click on any of the time ranges adjacent to the text box

#### How to schedule ?

Needs a port or application name to run.

1. From the *Report Type* select “[Application Activity] Application”
2. In the *Report Parameters* field,
   - enter the port details in this format : `{"port1" : "port or app" }` Examples : `{"port1":"Port-80"}` or `{"port1":"http"}`

---

## Router Interface Report

Netflow only

Report for traffic bandwidth and users for a particular router interface

1. Enter a router interface name or ID. Interface names are in the format IP_ifIndex.
2. Click on any of the time ranges adjacent to the text box

#### How to schedule ?

You need to specify a router interface number.

1. From the *Report Type* select “[Interface Activity] interface”
2. In the *Report Parameters* field,
   - enter the interface details in this format : `{"interface" : "ip-address_if-index" }` Examples : `{"interface":"192.168.0.1_22"}` Where 192.168.1.22 is the router IP and 22 is the ifIndex of the interface.

---

## IP Utilization report

View bandwidth utilization of an IP.

1. In the Endpoints & Application section , locate the ‘IP usage’ option.
2. Enter the IP address or host name in this box. Note that this box autocompletes hostnames.
3. Click on any of the time ranges adjacent to the text box

This report has two modes depending on whether or not you have configured per-app and per-protocol metering the IP.

| Simple   | Report shows total / transmit / receive bandwidth. a red line correspoding to the bandwidth cap set for that IP count of how many bytes were transmitted over the bandwidth cap |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Advanced | Report shows everything in Simple breakup of traffic by port breakup of traffic by protocol ( UDP, TCP, ICMP, etc)                                                              |

#### Configuring the advanced mode

You get the maximum out of this report when you set the bandwidth cap and enable per-port and per-protocol metering.

##### Setting the bandwidth cap for the IP

- Click on the IP, or search for it
- Click on “Create Cap” on the key dashboard
- Enter the bandwidth property in this format `{"bw": 9999}`

##### Enable per-port metering for this IP

- Create a [filtered counter group](/docs/ug/cg/custom#filtered_counter_groups)
- Parent = Apps, Filter = Hosts and enter the IP
- Name the new counter group `APPS_IPAddress`. Example : `APPS_192.168.1.22`

##### Enable per-protocol metering for this IP

- Create a [filtered counter group](/docs/ug/cg/custom#filtered_counter_groups)
- Parent = *Network Layer Stats*, Filter = *Hosts* and enter the IP
- Name the new counter group `PROTO_IPAddress`. Example : `PROTO_192.168.1.22`

#### How to schedule ?

You need to specify a particular host as a subject for this report.

1. From the *Report Type* select “[Endpoint Activity] IP”
2. In the *Report Parameters* field,
   - enter the host details in this format : `{"IP" : "ip-address or hostname" }` Examples : `{"IP":"192.168.1.66"}` or `{"IP":"mserver.mydomain.com"}` You must include the quotes and brackets

### Executive Reports

One click reports that are designed to give a high level overviews.

## Subscriber Activity

An overview of all your **internal hosts**. The term subscribers refers to entities within your domain. The report contains bandwidth usage details, TCP connections, hosts that generated most alerts, etc.

---

## Routers and Interfaces

Neflow only

An infrastructure report containing traffic details per router and 
about top router interfaces. This report is only available when Trisul 
is running in Netflow mode.

---

## Malware, botnet, virus infections

Requires the Badfellas plugin

A summary of all your internal hosts that might be compromised. The 
determination of compromise is based on blacklisting implemented by the [Badfellas plugin](/docs/ug/install/badfellas)

---

## Multicast vs Interactive

If you are running a satellite network such as in a broadcasting or 
trading application, this report gives you a breakup of multicast vs 
interactive traffic.

---

## Intrusion alerts

A comprehensive report of IDS alert activity over a period of time. Data and charts include :

1. Types of alerts over time
2. counts by priority,
3. top alerts types of each priority,
4. top internal hosts which are alerting, top external hosts,
5. latest 100 alerts of each priority.

#### Alert Anomaly

A rudimentary 1-page anomaly report is also included :

1. For each priority
   - only list alerts which werent seen in the previous time interval

---

## Deep drilldown of Internal Hosts

A comprehensive drilldown of internal host activity. The data presented in the report include :

1. Most active internal hosts
2. For each of the top internal hosts
   1. Which external hosts are they talking to
   2. Which applications are they using
   3. Which flow tags are active

---

## Deep drilldown of External Hosts

A comprehensive drilldown of external host activity. The data presented in the report include :

1. Most active external hosts (those on the internet or outside your home network)
2. For each of the top external hosts
   1. Which internal hosts are they talking to
   2. Which applications are they using
   3. Which flow tags are active

---

## Deep drilldown of Applications

A comprehensive drilldown of application activity. The data presented in the report include :

1. Most active applications
2. For each of the top applications
   1. Which external hosts are involved
   2. Which internal hosts are involved
   3. Which flow tags are active

## Common counter groups

Frequently used counter group reports. To view reports for counter groups not in this list, go to **Top Traffic Reports** and then select the counter group. This report shows the top users for each meter.

- Apps
- Internal Hosts
- External Hosts
- ASNumber
- Country

### All available reports

This allows you to generate reports for any of the data types in 
Trisul using a two step process. First select the type of report, then 
the entity.

## Top Traffic Report

Top users by counter group.

Steps to generate Top Traffic Reports

1. In the All available reports section , find the option ‘Top Traffic Report’
2. Click on a desired time range, which leads to a list of counter groups
3. Click on the desired counter group

Some of the interesting reports in this section are.

| Base Domains | Report on top web traffic. Google, Facebook, Twitter, YouTube, etc |
| ------------ | ------------------------------------------------------------------ |
| Countries    | How much traffic uploaded and downloaded per country               |
| ASN          | Traffic by autonomous system number (service provider)             |

---

## Top Sessions Report

Allows you to generate reports for flow trackers. Such as top flows by volume, time, uploading, etc.

Steps to generate the Top Sessions Report

1. In the All available reports section, find the option ‘Top Sessions Report’
2. Click on a desired time range , which shows you a list of flow trackers
3. Click on a flow tracker (such as top flows by volume) to view

---

## Security Report

Overview of all security issues in your network. This report combines data from IDS alerts, malware alerts, flow tracker alerts, and threshold crossing alerts.

Steps to generate a Security Report

1. In the All available reports section , find the option ‘Security Report’
2. Click on a desired time range to generate the report

---

## Custom Key Report

This is used to generate report for the [custom key monitors](/docs/ug/cg/ckey)

Steps to generate a Custom Key Report

1. In the All available reports section , find the option ’Custom Key Report ’
2. Click on a desired time interval, which leads to a list of custom key monitors
3. Click on a custom key monitor to generate the report
