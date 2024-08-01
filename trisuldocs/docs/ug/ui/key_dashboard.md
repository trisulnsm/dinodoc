---
sidebar_position: 9
---

# Key dashboard

The Key Dashboard is like a hub that allows you to dive deeper into a specific Key's data and explore related analysis paths. It's a powerful tool for investigating and understanding network traffic in Trisul. Clicking on any key in a dashboard will take you to the Key Dashboard of that particular key.

A quick recap of the hierarchy and terminology first:

- CounterGroup is a collection of related counters that measure specific aspects of network traffic like hosts. 

- A Key is a unique identifier that defines a specific counter within a CounterGroup. For example, google.com.

- A Meter is a single counter that measures a specific aspect of network traffic, such as upload bytes, packets, or number of connections.

For more read [Traffic Metering Concepts](/docs/ug/cg/intro)

### How to access the key dashboard

There are two ways to get to the key dashboard

#### 1. By clicking

Click on any Key on any dashboard in any page to open the Key Dashboard for that Key

Some examples :

|                               |                                                             |
| ----------------------------- | ----------------------------------------------------------- |
| ![](images/keydashboard1.png) | All ASNumbers are linked to their respective key dashboards |
| ![](images/keydashboard2.png) | All hosts are linked to their respective key dashboards     |

Note that you can also click on PIE and BUBBLE chart items.

#### 2. By searching

Type in a search item and click on search results

The search method is very useful if you want to see details of something
that is not visible on any of the screens shown by Trisul. For example :
You want to search for a host `mail.trisul.org` but it isnt showing up
on any lists for you to click on.

### Using the key dashboard

The default key dashboard has the following modules. Here is a brief
description of each of these modules. They are mostly self explanatory.

![](images/keydashboard3.png)

| Module                                                  | Usage                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------- |
| 1) Traffic History                                      | Most recent 1hr traffic history                                 |
| 2) [Key Details](/docs/ug/ui/key_dashboard#key-details) | Various drilldown options pertaining to this key                |
| 3) A la carte statistics                                | Flexible charting tool (quick and easy)                         |
| 4)Flow Activity                                         | Displays recent top flows                                       |
| 5)Daily Report                                          | Click on a calendar day to get a PDF report with detailed usage |
| TCA Details                                             | Shows recent threshold crossing alerts, if any                  |

## Traffic History

With Traffic History module you can view the amount of data total, transmitted or received over a specific period for that particular Key. The most recent one hour traffic history can be drilled down in more detail over different time points.

![](images/traffichistory.png)

## Key Details

Lets pay special attention to the **Key Details** module. This is the
jumping point where you have access to various drilldown tools related
to the key.

This module is split into two panels.

1. Info on the left -\> Contains details about the key
2. Tools on the right -\> Drilldown tools for further investigation about
   key

![](images/keydetails.png)

The information on the left includes,

1) Represents: Represensts the IP address

2) Counter Group: Information on which counter group of the key

3) User Label: This is the tag name assigned to the particular key

4) Key Format: This is the hexadecimal of the key
   
   Tools on the right side are already existing menus from home page available here handily for investigation of the key. 
   
   ### Set Label/ Edit
   
   ![](images/setlabeloredit.png)
   
   1) Click on **Assign User Label/Edit attributes** if you want to change the label name, description, or edit attributes  and click update.
   
   2) Click **Clear attributes** to clear the attributes of the key.
   
   3) Click **Set Valid Start Time** to set start time for the key.
   
   4) Clicking on **Resolve**, resolves the name of the IP if any.
   
   

### Name Resolution

Assigning a user friendly name such as a hostname to an IP is a common
operation.

***Resolve***  
Resolve the name for this key. Works for all IP addresses and AS Numbers

***Edit***  
Edit the User label for this key manually

See the [resolve name](/docs/ug/cg/resolve) section for more
details.

### Drilldown options

> The contents shown here depend on the type of key being displayed

The most common ones are described below.

|                       |                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Detailed Activity     | What is this station doing ?<br/>Open up the Investigate IP tool for this key for the last 1 hour.                                                                                                                                                                                                                                                     |
| View Conversations    | Who is this station talking to ? <br/> Open up a Flow Based Investigation for this IP/Port/or Netflow Router Interface for the past one hour.                                                                                                                                                                                                          |
| Retro analyze         | Go back in time<br/>Open up a historical reto analysis for this key. The retro forms are all pre-filled with details about this key.                                                                                                                                                                                                                   |
| Long Term Charts      | View historical usage.<br/>Open up the Long term analysis tool                                                                                                                                                                                                                                                                                         |
| Others In Subnet      | #In /24 → Find active 24 subnet keys in past traffic<br/>#In /22 → Find active 22 subnet keys in past traffic<br/>#In /16 → Find active 16 subnet keys in past traffic                                                                                                                                                                                 |
| Create TCA            | Create a threshold crossing alerts for this key.<br/>See this for more                                                                                                                                                                                                                                                                                 |
| Create Threshold Band | Create and view training data                                                                                                                                                                                                                                                                                                                          |
| Security Alerts       | Recent IDS alert activity                                                                                                                                                                                                                                                                                                                              |
| Resources             | Recent resources requested<br/>Recent URL and DNS resources requested by this key                                                                                                                                                                                                                                                                      |
| Real Time Stabbers    | Open real time monitoring stabbers (5 sec)<br/>You can now watch specific network activity with a 5 second delay. The three options available are<br/># Traffic → Real time traffic chart for this key<br/># Toppers → View top keys in the same counter group as this one<br/># Flows → View live flows related to this key (only for Hosts and Apps) |
| Download PCAP         | Download a PCAP file related to this item                                                                                                                                                                                                                                                                                                              |
