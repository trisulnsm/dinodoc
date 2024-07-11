---
sidebar_position: 10
sidebar_label: Resource Cap
---

# Resource Cap

Resource cap is used to calculate additional bandwidth usage.

## Create Resource cap

You can set a resource cap value

1. Goto [key dashboard](/docs/ug/ui/dashboards.html#key_dashboard)
2. Click the Create cap in the key dashboard module
3. You will be redirected to Resorce cap creation page

| Field Name          | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| key                 | Hex format of key(readonly)                                                            |
| Resolved key        | User readable format of key(readonly)                                                  |
| Resource cap string | This must be a valid JSON. Ex resource cap for 10Mb the valid JSON is `{[bw](1000000}` |
| Description         | Description of the resource cap                                                        |

## Edit Resource cap

1. Goto [key dashboard](/docs/ug/ui/dashboards.html#key_dashboard)
2. Click the Edit cap in the key dashboard module
3. You will be redirected to Resorce cap edit page

| Field Name          | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| key                 | Hex format of key(readonly)                                                          |
| Resolved key        | User readable format of key(readonly)                                                |
| Resource cap string | This must be a valid JSON.Ex resource cap for 10Mb the valid JSON is `{[bw](1000000}` |
| Description         | Description of the resource cap                                                      |

## Resource cap report

Generates a resource cap report for a specific IP Address.

Steps to generate resource cap reports  

1. In the Endpoints & Application section, locate the ‘IP Usage’
   option  

2. Enter the IP address or host name in this box. Note that this box
   autocompletes hostnames.  

3. Click on any of the time ranges adjacent to the text box

## Business Hours report

You can get a daily report based on business hours.

### Set Business Hours time

:::note navigation

To set select Customize-\>App Settings

:::

change the business hour time

### Schedule Report with business hours time

To [schedule](/docs/ug/reports/schedreports.html) a new report

:::note navigation

Select Reports -\> Schedule

:::

1. List of scheduled reports will appear  

2. Click **Schedule a new report**

Fill all values  
Enable **Business Hours only** to get daily reports for business hours

## Create Filtered Counter Group

You have to configure [filter counter
groups](/docs/ug/cg/custom.html#filtered_counter_groups) to get usage
port details for particular IP

:::note navigation

To configure Customize -\> Counters -\> Filtered Counters

:::

1. List of Filtered Counters will appear
2. Click **New Filtered Counter Group**
3. You will be redirected to a page with following fields

| Field Name         | Description                                            |
| ------------------ | ------------------------------------------------------ |
| Counter Croup Name | Name of the counter group.The name starts with Apps_ip |
| Description        | Description of the counter group                       |
| Parent Group       | Parent Group must be an APPS                           |
| Filter Group       | Parent Group must be a Host                            |
| key List           | Give the IP which you want to get port usage details   |

Click **Create** button to add new Filtered Counter Group
