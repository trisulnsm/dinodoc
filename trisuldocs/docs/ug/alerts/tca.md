---
sidebar_position: 3
---

# Threshold Crossing Alerts (TCAs)

## Overview

You can assign thresholds to any meter value. Trisul continuously 
monitors the value of the traffic meter against the configured 
thresholds and generates a “Threshold Crossing Alert” if the value 
crosses the thresholds.

**Examples**

You can monitor a single Key or a Key Range. Some examples:

1. Monitor **DNS Port-53** traffic and raise an alert if it crosses 50kbps for 3 minutes
2. Monitor **IP Address 10.28.28.223** if it crosses 10Mbps for 5 minutes raise alert then CLEAR if it dips below 5 Mbps
3. Monitor **IP Range 10.28.9.0 to 10.28.10.255** raise alert if ANY IP in that range crosses 1 Gbps for 1 minute

### High and Low Watermarks for Alerts

The two knobs you use are Watermarks and Sustained Intervals.

***Watermarks***

You assign Hi-Water and Lo-Water marks to the meter value you want
 to keep an eye on. When the meter value crosses the Hi-Water mark it 
is treated as a ***FIRED*** event and when it crosses the Lo-Water mark, it is treated as a ***CLEAR*** event.

***Sustained Intervals***

To prevent flapping of alerts due to meter value fluctuating around the watermarks, you can also specify a number called *Sustained Interval*. If you specify a *sustained interval* of 3, then the meter value has to be above or below the high and low 
watermarks respectively for 3 consecutive time bucket intervals (by 
default 60 seconds) before the corresponding **FIRE** or **CLEAR** alert is fired. The Low Watermark is optional.

The following picture illustrates this. Here we are setting up a TCA for :

- If value of meter exceeds 100Kbps for 3 consecutive intervals – we FIRE a TCA
- If value of meter drops less than 80Kbps for 2 consecutive intervals – we CLEAR a TCA

![](image/tca.png)

*Figure: Showing Illustration of Sustained Intervals*

Note that :

- The TCA does not fire in the zone between HI and LO water marks
- The TCA fires only once even when multiple consecutive values are over the HI water mark
- For a TCA to fire again, the values have to dip below the LO water mark and re-cross the HI water threshold again

## TCA Configuration

You can configure a TCA by defining the threshold values for alerts to be generated with the following details.

### Creating a new TCA Based on Counter Group

To create a new TCA, Login as *User*,

:::info navigation
Go to Alerts-> Threshold Crossing Alerts-> Configure-> New Threshold Crossing Alert
:::

TCA configuration form opens up. Fill in the threshold conditions for alerts to be generated with the help of the following fields and their description.

| FieldName                    | Optional |Description                                                         |
| ---------------------------- | -------- | -------------------------------------------------------------------|
| Name of the alert            |          | A name for this alert, this will show up on screen and reports     |
| Target counter group         |          | Select the target counter group from the dropdown                  |
| Target Key or Range          |          | The key or key range within the *target counter group* on which you want to create a TCA. You may enter a single key or a key range<br></br>- **Single key** You can enter this in either human readable format Example: Port-80, 192.168.1.33 or in Trisul key format: p-0050, C0.A8.00.01<br></br>- **Key range** Enter the first and last key in the range inclusive using a tilde *~* or *to*. Example IP range : `10.18.18.0 ~ 10.18.18.255` or port range (1 to 1024) `1 to 1024` using the *to* keyword                                                           |
| Target Metric                |          | Meter within the counter group                                     |
| Hi Water Mark                |          | High threshold mark. Example: 10Mbps, 6Kbps, 2000.<br></br> Default units = bytes/sec so if you just say 10M it would be interpreted as 10Mbps depending on the meter selected                       |
| Hi Water Sustained Intervals |          | TCA triggered if over Hi Water for this many intervals             |
| Lo Water Mark                | optional | Low threshold mark                                                 |
| Lo Water Sustained Intervals | optional | TCA cleared if below Lo Water for this many intervals              |
| TCA Message                  |          | When the TCA fires or clears, this message is emitted. You can see this message on Trisul UI modules and on email alerts                                                               |

Upon filling all the threshold values, click *Create*

## Example: DNS TCA

This example creates a TCA when DNS traffic crosses **1.2Mbps** for 2 minutes and clears when it drops below **600Kbps**

| FieldName                    | Input                                                                   |
| ---------------------------- | ----------------------------------------------------------------------- |
| Name                         | DNS over 1.2Mbps                                                        |
| Target                       | Apps                                                                    |
| TargetKey                    | *Port-53* , *53*, or *domain* or in Trisul Internal Key format *p-0035* |
| Stat ID                      | Total                                                                   |
| Hi Water Mark                | 1.2Mbps                                                                 |
| Hi Water Sustained Intervals | 2                                                                       |
| Lo Water Mark                | 600Kbps                                                                 |
| Lo Water Sustained Intervals | 1                                                                       |
| TCA Message                  | DNS traffic is double of expected at 1.2Mbps, action required team !    |

## View TCAs

There are many methods to view, search and export TCAs.

To view TCAs,

:::info navigation
Go to  Alerts-> Select Threshold Crossing Alerts
:::

1. You will now see a table listing all the alerts grouped by alert type and count
2. Clicking on the number seen under the **Count** column of an alert takes you to a more detailed view of the alerts

![](image/tca1.png)

*Figure: Showing counts of alerts generated for each TCA type*

The subsequent Threshold crossing *Alert Group* Table presents the following detailed information:

| Column            | Description                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| Count             | The number of times this threshold has been crossed                                     |
| Latest Type       | Indicates whether the threshold crossing was due to a high or low watermark event       |
| Latest Seen IST   | The timestamp (in Indian Standard Time) when the threshold was last crossed             |
| Latest Target     | The *key* that crossed the threshold                                                    |
| Name              | The name of the TCA                                                                     |
| Latest Message    | The message associated with the latest threshold crossing event                         |
| Thresholds        | The specific threshold values that triggered the alert                                  |
| Probe             | The monitoring probe that detected the threshold crossing                               |
| Option Button     | Click on the Option button and select Delete all. This deletes all the alerts fired under that TCA , but not the TCA itself                                                                             |


### Individual Alerts

With Individual Alerts you can perform the following three functions:
1) [**View individual alerts**](/docs/ug/alerts/tca#view-individual-alerts)
2) Using the [**Search Form**](/docs/ug/alerts/tca#search-form), filter indivial alerts based on certain search criteria 
3) Using [**Drilldown**](/docs/ug/alerts/tca#drilldowns) button, perform in-depth analysis of each individual alert

#### View Individual Alerts

Clicking on alert count on a TCA *Alert Group*  table will take you to the list of individual alerts fired/cleared by that particular key and metric.

![](image/tcaindividualalerts.png)  
*Figure: Showing list of fired and cleared alerts*

The details that you can analyze on the individual alerts result are as follows:
| Column            | Description                                                                           |
|-------------------|---------------------------------------------------------------------------------------|
| Type              | The type of alert triggered                                                           |
| Priority          | The severity level of the alert                                                       |
| Time IST          | The timestamp of hwne the alert was triggered in Indian STandard Time (IST)           |
| Message           | A brief description of the alert                                                      | 
| Current Value     | By how much the threshold limit has exceeded or reduced                               |
| Configuration     | The threshold limits of the target *key*                                              |
| Probe             | The monitoring probe that detected the threshold crossing                             |

- Each column in the search result table are sortable, where you can rearrange data in ascending or descending order by clicking the adjacent arrow(up/down) button, for flexible data analysis and visualization.
- Click on the [download](/docs/ug/ui/elements#download-button) button at the top of the alerts to get the alert details downloaded in the form of PDF and XLSX. 
- Clicking on the *Show all TCAs* button enables you to display the list of all Threshold Crossing Alerts configured from where yoou can again edit or delete that particular TCA.
- You can click on the *Edit this TCA* button to edit that particulat Threshold Crossing Alert (TCA) that you are into.



#### Search Form

To facilitate targeted queries, a *search form* with [*Hide/Show Search Form*](/docs/ug/ui/elements#hide-show-search-form) option is provided, that allows you to specify a temporal range and a regular expression (*regex*) pattern to filter alerts.   

![](image/searchform_tca.png)  
*Figure: TCA Search Form*

With this *search form* you can retrieve alerts with messages matching a particular pattern, such as extracting all alerts originating from a specific IP address by entering the corresponding IP address in the search field.

#### Search Form Parameters

[**Time Frame**](/docs/ug/ui/elements#time-selector) Specify a temporal range to restrict search results to alerts generated within that timeframe.  
**Search Regex** Enter a regular expression to match specific patterns in alert messages, enabling targeted filtering (example: extracting alerts from a particular IP address).

### Drilldowns

When alerts are displayed you have the option to drilldown even further.

1. press the tag button to bring up drilldown options similar to those found on other dashboards (see image)
2. press the chart button to show a traffic chart around the time the 
   alert occurred showing the Low and High water marks for reference.

![](image/tcadrill.png)

*Figure: TCA drilldown options and traffic charts showing the alert traffic*

#### Exporting to PDF, CSV, Excel

> When a table shows list of alerts

1. Locate the Download button above the table
2. Select “Download PDF”, “Download CSV” or “Download XLSX” options

This allows you to export and share displayed alerts

### Alerts Dashboard

- Add the **Threshold Crossing Alert** module to any dashboard

This module auto updates itself as new TCAs are generated. You can add this module to any dashboard position.

[How to add modules to dashboard](/docs/ug/ui/modules#how-to-create-modules)

[How to add modules to dashboard](/docs/ug/ui/dashmod_intro)


## Automatically Emailing TCAs

There are two types of email reports you can use for notifying these TCA alerts.

:::note

TCA Email Alerts intelligently pull up the following relevant pieces of 
information and include them in the email. Top Hosts, Top Apps, Top 
Flows, and Top Conversations related to the alert.

:::

#### Intelligent TCA Email Reports for Routers Interfaces

A commonly used TCA is on Netflow mode routers and interfaces. When a TCA is created on such an interface the following information is automatically included in the alert email.

1. Top applications on that interface which alerted
2. Top hosts
3. Top conversations.

This allows the receiver of the email to immediately spot the source 
of the alert without even logging on to Trisul Network Analytics.

> Enabling inteface tracking allows for richer TCA alerts. See [Netflow Interface Trackers](/docs/ug/netflow/interface_tracker)

### Real Time Email

Configure [Email Alerting](/docs/ug/alerts/email_settings) for real time alerts.

### Periodic Email Digest

You can [schedule](/docs/ug/reports/schedreports#schedule-a-new-report) a **Threshold Crossing Alert** report which will automatically email you a list of TCAs that fired on a hourly or daily basis.

1. A single consolidated email is sent out containing details of all TCAs
2. No email is sent out if there are no TCAs to report

## Bulk Configuration

We can also configure TCAs for one or more interfaces from a particular router in bulk rather the one by one.

You can throw an alert if the Interface crosses 200 Mbps.

:::note navigation

Login as Admin. Select *Context : default* → profile0 → Netflow Wizard → Interfaces

:::

You can select one or more interfaces from a router and Click on **Configure TCA** option to create an alert.

| Field Name                   | Description                                                              |
| ---------------------------- | ------------------------------------------------------------------------ |
| Interfaces                   | Key for Interface                                                        |
| Meter                        | Total,in or out                                                          |
| Hi Water Mark                | Hi Threshold Mark                                                        |
| Hi Water Sustained Intervals | TCA Fired only if metric values is over Hi Water for this many minutes   |
| Lo Water Mark                | Low Threshold Mark                                                       |
| Lo Water Sustained Mark      | TCA Cleared only if metric value is below Lo Water for this many minutes |
| TCA Message                  | A custom message that appears when these alerts fire                     |
