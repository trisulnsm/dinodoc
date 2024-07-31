---
sidebar_position: 8
---

# Module Templates

Module templates in Trisul are the basic components of a module. These templates are pre-designed, reusable patterns or structures that define the functionality of a module.

Module templates typically include parameters for key elements, such as,

- Variables: parameters for data that will be used in the module. For example Name, Counter Groups, Meters, Keys.

- Functions: reusable blocks of code that perform specific tasks. For example Aggregation, Max, Min, Avg.

- Conditionals: logical statements that control the flow of the module. For example Key Filter, Inverse Key filter.

You can create your own module by creating an instance of a module
template. Select one module template from the list and fill out the required parameters to create a module.

This is a list of all module templates supported by Trisul.

![](images/moduletypes.png)

|     | Link                 |
| --- | -------------------- |
| 1   | Key Traffic          |
| 2   | Toppers Traffic      |
| 3   | Toppers Trend        |
| 4   | Current Toppers      |
| 5   | Retro Toppers        |
| 6   | Single Value         |
| 7   | Real Time Traffic    |
| 8   | Real Time Single     |
| 9   | Real Time Toppers    |
| 10  | Favorite Key Traffic |
| 11  | Traffic Chart        |
| 12  | Alert List           |
| 13  | Alert Count          |
| 14  | Existing Modules     |
| 15  | Custome URL Page     |

## Module Parameters

Every module has a set of parameters that controls what is displayed and
how it is displayed.

## Key Traffic

A "Key Traffic" module in Trisul is designed to monitor and analyze network traffic based on specific keys or identifiers. Here's a breakdown of what this module template would do:

- Identify and extract specific keys or identifiers from network traffic (for example, IP addresses, ports, protocols, etc.)

- Count and measure the traffic associated with each key.

- Provide visualization and reporting on the top keys, traffic volumes, and trends.

### Parameters

| Parameter name | Default value | Description                                                                                                          |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Name           | \-            | Enter a name for the module                                                                                          |
| Description    | -             | Provide a short description of the module                                                                            |
| Surface        | MRTG          | Diplays the selected chart surface                                                                                   |
| Show Table     | -             | Displays the meta data of the chart like Max,Min Average and Percentile for each items in table format               |
| Expression     | -             | Customize module using [arithmetic expression](/docs/ug/ui/modules#creating-modules-with-arithmetic-expressions)     |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                                                      |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                                                                              |
| Key            | -             | Provide the unique identifier that categorizes data in a network or a system according to the selected counter group |
| Label          | -             | Enter a descriptive tag name assigned to a data point, group or category                                             |

## Toppers Traffic

Toppers Traffic module is a customizable template that displays top traffic statistics, such as top hosts, top flows, and top applications, and more in a graphical visualization.

### Parameters

| Parameter name | Default value | Description                                                                                            |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| Name           | \-            | Enter a name for the module                                                                            |
| Description    | -             | Provide a short description of the module                                                              |
| Surface        | MRTG          | Diplays the selected chart surface                                                                     |
| Show Table     | -             | Displays the meta data of the chart like Max,Min Average and Percentile for each items in table format |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                                        |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                                                                |
| Top Count      | 10            | Enter the number of traffic data items to be displayed                                                 |

## Toppers Trend

A pre-configured template for visualizing network traffic changes over time like to identify unusual patterns or spikes in traffic etc.

### Parameters

| Parameter name | Default value | Description                                                                                            |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| Name           | \-            | Enter a name for the module                                                                            |
| Description    | -             | Provide a short description of the module                                                              |
| Surface        | MRTG          | Diplays the selected chart surface                                                                     |
| Show Table     | -             | Displays the meta data of the chart like Max,Min Average and Percentile for each items in table format |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                                        |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                                                                |
| Top Count      | 10            | Enter the number of traffic data items to be displayed                                                 |

## Current Toppers

Current toppers module displays top traffic statistics in the latest five minutes in the table format, including top hosts, top flows, and top applications, and more.

### Parameters

| Parameter name     | Default value | Description                                                              |
| ------------------ | ------------- | ------------------------------------------------------------------------ |
| Name               | \-            | Enter a name for the module                                              |
| Description        | -             | Provide a short description of the module                                |
| Top Count          | 10            | Enter the number of traffic data items to be displayed                   |
| Counter Group      | ASNumber      | Shows the list of Counter groups to select from                          |
| Meter              | Upload Bytes  | Shows the list of Meters to select from                                  |
| Key Filter         | -             | specify which keys should be included in the analysis of current toppers |
| Inverse Key Filter | -             | specify which keys should be excluded in the analysis of current toppers |

## Retro Toppers

A module that displays historical top traffic statistics, showing past top hosts, top flows, and top applications in the table format.

### Parameters

| Parameter name     | Default value | Description                                                              |
| ------------------ | ------------- | ------------------------------------------------------------------------ |
| Name               | \-            | Enter a name for the module                                              |
| Description        | -             | Provide a short description of the module                                |
| Counter Group      | ASNumber      | Shows the list of Counter groups to select from                          |
| Top Count          | 10            | Enter the number of traffic data items to be displayed                   |
| Meter              | Upload Bytes  | Shows the list of Meters to select from                                  |
| Key Filter         | -             | specify which keys should be included in the analysis of current toppers |
| Inverse Key Filter | -             | specify which keys should be excluded in the analysis of current toppers |

## Single value

This Single value module displays a single, key performance indicator (KPI) or metric in a single value. For example "Current Network Traffic: 1.2 GB/s", "Network Uptime: 99.9%", etc.

### Parameters

| Parameter name | Default value | Description                                                                                                                                                                                              |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name           | \-            | Enter a name for the module                                                                                                                                                                              |
| Description    | -             | Provide a short description of the module                                                                                                                                                                |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                                                                                                                                          |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                                                                                                                                                                  |
| Key            | TOTALBW       | Provide the unique identifier that categorizes data in a network or a system according to the selected counter group                                                                                     |
| Label          | Total Volume  | Enter a descriptive tag name assigned to a data point, group or category                                                                                                                                 |
| BG Color       | Blue          | Select a desirable BG Color                                                                                                                                                                              |
| Aggregation    | Total         | Aggregates multiple data points into single value like Total: Adds up all data points (e.g., total bandwidth usage), Average: Calculates the mean of all data points (e.g., average response time), etc. |
| Show Trends    | -             | When this check box is checked it shows the trends in a chart.                                                                                                                                           |
| Chart Color    | Blue          | Select a desirable chart color                                                                                                                                                                           |

## Real Time Traffic

Real Time Traffic module displays the real-time network traffic information providing a live view of bandwidth usage, applications generating most traffic, real-time alert signatures  etc. The data is refreshed every five minutes.

### Parameters

| Parameter name       | Default value | Description                                                                                                          |
| -------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Counter Group        | ASNumber      | Shows the list of Counter groups to select from                                                                      |
| Meters               | Upload Bytes  | Shows the list of Meters to select from                                                                              |
| Keys                 | TOTALBW       | Provide the unique identifier that categorizes data in a network or a system according to the selected counter group |
| One module per key   | Enabled       | Each key metric is displayed in its own separate module.                                                             |
| One module per meter | -             | When enabled, Each meter is displayed in its own separate module.                                                    |
| Surface              | LINE          | Diplays the selected chart surface                                                                                   |

## Real Time Single

Real Time Single module is the same as Single value module except the data displayed is in real time. Real time data is refreshed every five minutes.

### Parameters

| Parameter name | Default value | Description                                                                                                          |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Name           | \-            | Enter a name for the module                                                                                          |
| Description    | -             | Provide a short description of the module                                                                            |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                                                      |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                                                                              |
| Key            | TOTALBW       | Provide the unique identifier that categorizes data in a network or a system according to the selected counter group |
| Label          | Total Volume  | Enter a descriptive tag name assigned to a data point, group or category                                             |
| BG Color       | Blue          | Select a desirable BG Color                                                                                          |
| Show Gauge     | -             |                                                                                                                      |
| Chart Color    | Blue          | Select a desirable chart color                                                                                       |

## Real Time Toppers

Real Time Toopers module is the same  as the Toppers traffic module except the Toppers traffic is displayed in real time. The real time data are refreshed every five minutes.

### Parameters

| Parameter name | Default value | Description                                            |
| -------------- | ------------- | ------------------------------------------------------ |
| Name           | \-            | Enter a name for the module                            |
| Description    | -             | Provide a short description of the module              |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from        |
| Meter          | Upload Bytes  | Shows the list of Meters to select from                |
| Top Count      | 10            | Enter the number of traffic data items to be displayed |

## Favorite Key Traffic

The Favorite Key Traffic Module is the same as Key Traffic module except this can be customized where you can select and display the traffic data for your most important keys or frequently accessed traffic metrics in a single, convenient dashboard. 

### Parameters

| Parameter name       | Default value | Description                                                                                                          |
| -------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Counter Group        | ASNumber      | Shows the list of Counter groups to select from                                                                      |
| Meters               | Upload Bytes  | Shows the list of Meters to select from                                                                              |
| Keys                 | TOTALBW       | Provide the unique identifier that categorizes data in a network or a system according to the selected counter group |
| One module per key   | Enabled       | Each key metric is displayed in its own separate module.                                                             |
| One module per meter | -             | When enabled, Each meter is displayed in its own separate module.                                                    |
| Surface              | LINE          | Diplays the selected chart surface                                                                                   |

## Traffic Chart

Traffic chart module is the same as Key traffic module except this module can be customized where you can select and display the traffic data for the selected keys ploted per meter in one module or in separate modules.

The following example shows 

1) Separate modules for each key Total and Home net

2) The keys- Total and Into Home Net into a single module for http and https

![](images/trafficchart1_modtemp.png)

![](images/trafficchart2_modtemp.png)

### Parameters

| Parameter name | Default value | Description                                                                                |
| -------------- | ------------- | ------------------------------------------------------------------------------------------ |
| Counter Group  | ASNumber      | Shows the list of Counter groups to select from                                            |
| Meters         | Upload Bytes  | Shows the list of Meters to select from                                                    |
| Multiple Keys  | -             | Check this box if you would like to have all selected keys plotted per meter in one module |
| Select Keys    | -             | From the list of keys select any number of keys to display                                 |
| Filter         | -             | Enter a string of key name to search and filter                                            |

## Alert List

Alert List module displays a list of active alerts or notifications, providing a centralized view of network issues or events that require attention.

![](images/alertlist_modtemp.png)

### Parameters

| Parameter name   | Default value | Description                                                                                                  |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| Name             | \-            | Enter a name for the module                                                                                  |
| Description      | -             | Provide a short description of the module                                                                    |
| Top Count        | 10            | Enter the number of traffic data items to be displayed                                                       |
| Signature ID     | -             | Provide a Signature ID like DSHIELD                                                                          |
| Filter           | -             | Filter by signatre ID or IP addresses                                                                        |
| Show Description | Checked       | Displays a description of each alert providing a context about the issue                                     |
| Show Endpoints   | Checked       | Displays detailed information about the endpoints (devices, systems, or applications) related to each alert. |
| Alert Group      | External IDS  | Select from the list of alert groups that you would like to display                                          |

## Alert Count

The Alert Count Module displays the total number of active alerts, providing a quick overview of the current alert volume.

![](images/alertcount_modtemp.png)

### Parameters

| Parameter name   | Default value | Description                                                              |
| ---------------- | ------------- | ------------------------------------------------------------------------ |
| Name             | \-            | Enter a name for the module                                              |
| Description      | -             | Provide a short description of the module                                |
| Signature ID     | -             | Provide a Signature ID like DSHIELD                                      |
| Filter           | -             | Filter by signatre ID or IP addresses                                    |
| BG Color         | Blue          | Select a desirable BG Color                                              |
| Show Description | Checked       | Displays a description of each alert providing a context about the issue |
| Alert Group      | External IDS  | Select from the list of alert groups that you would like to display      |

## Existing Modules

The existing modules module provides a centralized view of all existing modules in the system, allowing you to easily select and add them to the dashboard. Select the modules you would like to add and click Select. 

![](images/existingmodules_modtemp.png)

## Custom URL Page

The Custom URL Page Module allows you to create a custom page with a unique URL, displaying specific data, metrics, or information into your module.

In the following example, the URL of the map has been given as input and that page has been added as a module.

![](images/urlpage_modtemp.png)

### Parameters

| Parameter name | Default value | Description                                                    |
| -------------- | ------------- | -------------------------------------------------------------- |
| Name           | \-            | Enter a name for the module                                    |
| Description    | -             | Provide a short description of the module                      |
| URL            | -             | Enter the page URL you would like to display inside the module |
| JSON           | -             | Enter additional arguments if necessary in JSON format         |
