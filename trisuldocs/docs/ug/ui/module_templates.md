# Module Templates

You can create your own module by creating an instance of a module
template.

This is a list of all module templates supported by Trisul.

| ID  | Type of data        | Link                                                                                                                   |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1   | Topper              | [Current toppers in a list](module_templates.html#current_toppers_in_a_list)                                           |
| 2   | Topper              | [Current toppers in a chart](module_templates.html#current_toppers_in_a_chart)                                         |
| 3   | Topper              | [Retro toppers in a list](module_templates.html#retro_toppers_in_a_list)                                               |
| 4   | Topper              | [Retro toppers in a chart](module_templates.html#retro_toppers_in_a_chart)                                             |
| 5   | Topper              | [Recent toppers in a list](module_templates.html#recent_toppers_in_a_list)                                             |
| 6   | Topper              | [Current toppers history](module_templates.html#current_toppers_history)                                               |
| 7   | Topper              | [Retro toppers history](module_templates.html#retro_toppers_history)                                                   |
| 8   | Topper              | [Browse toppers](module_templates.html#browse_toppers)                                                                 |
| 9   | Specific item       | [Recent key history chart](module_templates.html#recent_key_history_chart)                                             |
| 10  | Specific item       | [Show key details](module_templates.html#show_key_details)                                                             |
| 11  | Specific item       | [Retro analysis time selector](module_templates.html#retro_analysis_time_selector)                                     |
| 12  | Specific item       | [Key history flexible charting tool](module_templates.html#key_history_flexible_charting_tool)                         |
| 13  | Specific item       | [Key calendar](module_templates.html#key_calendar)                                                                     |
| 14  | IDS Alerts          | [Recent IDS alerts - raw](module_templates.html#recent_ids_alerts_-raw)                                                |
| 15  | IDS Alerts          | [Recent IDS alerts - aggregated](module_templates.html#recent_ids_alerts_-aggregated)                                  |
| 16  | Miscellaneous       | [Network stats](module_templates.html#network_stats)                                                                   |
| 17  | Miscellaneous       | [System stats](module_templates.html#system_stats)                                                                     |
| 18  | Miscellaneous       | [Network, system, database stats](module_templates.html#network,system,database_stats)                                 |
| 19  | Flows               | [Session Trackers in custom time interval](module_templates.html#session_trackers_in_custom_time_interval)             |
| 20  | Flows               | [Recent top sessions (defunct)](module_templates.html#recent_top_sessions_(defunct))                                   |
| 21  | Flows               | [Top sessions for a key](module_templates.html#top_sessions_for_a_key)                                                 |
| 22  | TCA Alerts          | [Recently fired threshold crossing alerts](module_templates.html#recently_fired_threshold_crossing_alerts)             |
| 23  | Retro analysis      | [Standard retro analysis paths](module_templates.html#standard_retro_analysis_paths)                                   |
| 24  | Retro analysis      | [Retro analysis of an IP](module_templates.html#retro_analysis_of_an_ip)                                               |
| 25  | Retro analysis      | [PDF report for an IP in selected time interval](module_templates.html#pdf_report_for_an_ip_in_selected_time_interval) |
| 26  | Retro analysis      | [Counter group retro analysis](module_templates.html#counter_group_retro_analysis)                                     |
| 27  | Retro analysis      | [Explore retro(defunct)](module_templates.html#explore_retro(defunct))                                                 |
| 28  | Retro analysis      | [Netflow retro (defunct)](module_templates.html#netflow_retro_(defunct))                                               |
| 29  | IDS Alerts          | [Alerts for a specific key](module_templates.html#alerts_for_a_specific_key)                                           |
| 30  | Retro analysis      | [Investigate application users](module_templates.html#investigate_application_users)                                   |
| 31  | Retro analysis      | [Most active sessions](module_templates.html#most_active_sessions)                                                     |
| 32  | Retro analysis      | [Security](module_templates.html#security)                                                                             |
| 33  | Scatter Retro       | [Scatter](module_templates.html#scatter)                                                                               |
| 34  | Flexible Chart      | [Chart anything](module_templates.html#chart_anything)                                                                 |
| 35  | Custom HTML         | [Any Custom HTML text](module_templates.html#any_custom_html_text)                                                     |
| 36  | Pull packets retro  | [Pull out raw packets in a timeframe and filter](module_templates.html#pull_out_raw_packets_in_a_timeframe_and_filter) |
| 37  | Flow Tracker Alerts | [Recently fired flow tracker alerts](module_templates.html#recently_fired_flow_tracker_alerts)                         |
| 38  | Blacklist alerts    | [Recent alerts from badfellas plugin](module_templates.html#recent_alerts_from_badfellas_plugin)                       |
| 39  | Flow tracker        | [List of flow trackers](module_templates.html#investigate_flow_tracker)                                                |
| 40  | App In/Out Trend    | [Top applications into and out of your network](module_templates.html#app_in/out_trend)                                |
| 41  | Retro analysis      | [Network FAQ](module_templates.html#my_favorites)                                                                      |
| 42  | Topper Trends       | [IDS Alerts by sigid](module_templates.html#topper_trends)                                                             |
| 43  | Retro analysis      | [Traffic trends of a particular item](module_templates.html#analyze_with_key)                                          |
| 44  | Retro analysis      | [Drill down into a counter group](module_templates.html#cross_drill)                                                   |
| 45  | TCA details         | [TCA Alerts for a item](module_templates.html#show_tca_details)                                                        |
| 46  | Retro usage         | [counter group to view top users by various meters](module_templates.html#explore_retro_usage)                         |

## Module Parameters

Every module has a set of parameters that controls what is displayed and
how it is displayed.

### Common parameters

| Parameter name | Type         | Default value | Description                          |
| -------------- | ------------ | ------------- | ------------------------------------ |
| name           | string       | \-            | Module name                          |
| topcount       | integer      | 10            | Show these many items in the list    |
| cgguid         | counter guid | \-            | Show toppers from this counter group |
| statid         | integer      | 0             | Meter ID within the counter group    |
| recent_secs    | integer      | 900           | shows the data for past x seconds    |

### Charting related

| Parameter name | Type    | Default value | Description                                                  |
| -------------- | ------- | ------------- | ------------------------------------------------------------ |
| width          | integer | 400           | Chart width                                                  |
| height         | integer | 250           | chart height                                                 |
| surface        | string  | \-            | Chart type                                                   |
| bucket_size    | integer | 30            | Traffic data is bucketized (averaged) over this many seconds |
| title          | string  | \-            | Module title                                                 |

### Flow related

|            |         |     |     |
| ---------- | ------- | --- | --- |
| tracker_id | integer | \-  |     |

### Ajax

| Parameter name | Type    | Default value | Description                             |
| -------------- | ------- | ------------- | --------------------------------------- |
| ajaxfreq       | integer | 30 seconds    | Auto update this module every x seconds |
| ajaxurl        | string  | \-            | The url want to auto update             |

### Toppers related

| Parameter name | Type    | Default value | Description                                                      |
| -------------- | ------- | ------------- | ---------------------------------------------------------------- |
| cullcount      | integer | 0             | Shows toppers eliminating the top x items in a list              |
| units          | string  |               | Displays the volume of data by metric standards(eg Kbps or Gbps) |

### Miscellaneous

| Parameter name  | Type    | Default value   | Description                        |
| --------------- | ------- | --------------- | ---------------------------------- |
| transformer     | string  | OctetToBits.new |                                    |
| resolve_key     | integer | 1               |                                    |
| fix_scale       | integer | 0               |                                    |
| show_dpi_marker | integer |                 |                                    |
| key             | string  |                 |                                    |
| month_count     | integer | 3               | Display the calendar with x months |
| window_seconds  | integer |                 |                                    |

## Current toppers in a list

Display the current toppers in a counter group in a list.

### Parameters

| Parameter name | Type         | Default value | Description                             |
| -------------- | ------------ | ------------- | --------------------------------------- |
| name           | string       | \-            | Module name                             |
| topcount       | integer      | 10            | Show these many items in the list       |
| cgguid         | counter guid | \-            | Show toppers from this counter group    |
| statid         | integer      | 0             | Meter ID within the counter group       |
| ajaxfreq       | integer      | 30 seconds    | Auto update this module every x seconds |

## Current toppers in a chart

Draw the chart for current toppers in a counter group

### Parameters

| Parameter name | Type         | Default value | Description                          |
| -------------- | ------------ | ------------- | ------------------------------------ |
| name           | string       | \-            | Module name                          |
| topcount       | integer      | 10            | Show these many items in the list    |
| cgguid         | counter guid | \-            | Show toppers from this counter group |
| statid         | integer      | 0             | Meter ID within the counter group    |
| width          | integer      | 440           | Chart width                          |
| Height         | integer      | 250           | Chart height                         |
| surface        | string       | PIE           | Chart type                           |

## Retro toppers in a list

List the toppers for the selected time interval

### Parameters

| Parameter name | Type             | Default value | Description                          |
| -------------- | ---------------- | ------------- | ------------------------------------ |
| cgguid         | Countegroup guid | \-            | Show toppers from this counter group |
| topcount       | integer          | 10            | Show these many items in the list    |
| units          | string           | \-            |                                      |
| statid         | integer          | 0             | Meter ID within the counter group    |

## Retro toppers in a chart

Draws the chart for the selected time interval

### Parameters

| Parameter name | Type         | Default value | Description                          |
| -------------- | ------------ | ------------- | ------------------------------------ |
| topcount       | integer      | 10            | Show these many items in the list    |
| cgguid         | counter guid |               | Show toppers from this counter group |
| statid         | integer      | 0             | Meter ID within the counter group    |
| width          | integer      | 440           | Chart width                          |
| Height         | integer      | 250           | Chart height                         |
| surface        | string       | PIE           | Chart type                           |
| units          | String       | \-            |                                      |

## Recent toppers in a list

Recent list of toppers in 15 minutes

### Parameters

| Parameter name | Type    | Default value | Description                                           |
| -------------- | ------- | ------------- | ----------------------------------------------------- |
| topcount       | integer | 10            | Show these many items in the list                     |
| recentsecs     | integer | 900           | shows the recent data for the specified no.of seconds |
| units          | string  | B             |                                                       |
| statid         | integer | 0             | Meter ID within the counter group                     |

## Current toppers history

Draw charts for toppers in 15 minutes

### Parameters

| Parameter name | Type    | Default value   | Description                                    |
| -------------- | ------- | --------------- | ---------------------------------------------- |
| topcount       | integer | 10              | Show these many items in the list              |
| cullcount      | integer | 0               |                                                |
| statid         | integer | 0               | Meter ID within the counter group              |
| width          | integer | 400             | Chart width                                    |
| height         | integer | 250             | Chart height                                   |
| bucketsize     | integer | 30              |                                                |
| surface        | string  | STACKEDAREA     | Chart type                                     |
| transformer    | string  | OctetToBits.new |                                                |
| recentsecs     | integer | 900             | Shows the data for the specified no.of seconds |
| title          | string  | Topper History  | Title of the module                            |

## Retro toppers history

Chart the toppers for the selected interval

### Parameters

| Parameter name | Type    | Default value   | Description                                    |
| -------------- | ------- | --------------- | ---------------------------------------------- |
| topcount       | integer | 10              | Show these many items in the list              |
| cullcount      | integer | 0               |                                                |
| statid         | integer | 0               | Meter ID within the counter group              |
| width          | integer | 400             | Chart width                                    |
| height         | integer | 250             | Chart height                                   |
| bucketsize     | integer | 30              |                                                |
| surface        | string  | STACKEDAREA     | Chart type                                     |
| transformer    | string  | OctetToBits.new |                                                |
| recentsecs     | integer | 900             | Shows the data for the specified no.of seconds |
| name           | string  | \-              | Name of the module                             |

## Browse Toppers

Display the browse toppers in a counter group in a list.

### Parameters

| Parameter name | Type         | Default value | Description                          |
| -------------- | ------------ | ------------- | ------------------------------------ |
| name           | string       | \-            | Module name                          |
| topcount       | integer      | 10            | Show these many items in the list    |
| cgguid         | counter guid | \-            | Show toppers from this counter group |
| statid         | integer      | 0             | Meter ID within the counter group    |

## Recent key history chart

Draws the chart for recent data

### Parameters

| Parameter name | Type    | Default value | Description                             |
| -------------- | ------- | ------------- | --------------------------------------- |
| key            | string  | \-            |                                         |
| guid           | GUID    | \-            | Show toppers from this counter group    |
| width          | integer | 350           | Chart width                             |
| height         | integer | 150           | chart height                            |
| bucketsize     | integer | 30            |                                         |
| ajaxfreq       | integer | 30            | Auto update this module every x seconds |
| title          | string  |               | Module title                            |
| statids        | string  | 0,1,2         | Meter IDs within countergroup           |
| recentsecs     | integer | 21600 seconds | Draws the chart for recent x seconds    |
| surface        | string  | SQUARELINE    | Chart type                              |

## Show key details

Shows the key ans label for the particular item

### Parameters

| Parameter name               | Type    | Default value | Description                      |
| ---------------------------- | ------- | ------------- | -------------------------------- |
| investigation_window_seconds | integer | 900           | Activity of the key in x seconds |

## Retro analysis time selector

Time selector

### Parameters

|                 |         |            |                                                |
| --------------- | ------- | ---------- | ---------------------------------------------- |
| statids         | string  | 0          | Meter IDs within the counter group             |
| width           | integer | 500        | Time selector width                            |
| bucketsize      | integer | 30         |                                                |
| height          | integer | 150        | Time selector height                           |
| surface         | string  | SQUARELINE | Type                                           |
| key             | string  | TOTALBW    |                                                |
| cgguid          | string  |            | Shows the time selector for this counter group |
| name            | string  | \-         | Module name                                    |
| window_seconds  | integer | 86400      | display the time selector for x seconds        |
| fix_scale       | integer | 0          |                                                |
| show_dpi_marker | integer | 1          |                                                |

## Key history flexible charting tool

Draw the chart for particular item with selected Meters

### Parameters

| Parameter name | Type    | Default value | Description              |
| -------------- | ------- | ------------- | ------------------------ |
| window_secs    | integer | 900           | Draw chart for x seconds |

## Key calendar

Display the calander

### Parameters

| Parameter name | Type    | Default value | Description                        |
| -------------- | ------- | ------------- | ---------------------------------- |
| mount_count    | integer | 3             | Display the calendar with x months |

## Recent IDS alerts -raw

Display all the IDS alerts

### Parameters

| Parameter name | Type    | Default value | Description                        |
| -------------- | ------- | ------------- | ---------------------------------- |
| topcount       | integer | 10            | Shows these many items in the list |
| resolve_key    | integer | 1             |                                    |

## Recent IDS alerts -aggregated

Display all the unique IDS that triggered alerts\|

### Parameters

| Parameter name | Type    | Default value | Description                        |
| -------------- | ------- | ------------- | ---------------------------------- |
| topcount       | integer | 10            | shows these many items in the list |
| recent_secs    | integer | 216000        | Display alerts for x seconds       |

## Network stats

Display the information about networks

### Parameters

| Parameter name | Type    | Default value | Description                 |
| -------------- | ------- | ------------- | --------------------------- |
| ajaxfreq       | integer | 30            | Auto update every x seconds |

## System stats

Display the information about system

### Parameters

| Parameter name | Type    | Default value | Description                 |
| -------------- | ------- | ------------- | --------------------------- |
| ajaxfreq       | integer | 30            | Auto update every x seconds |

## Network,system,dataabase stats

Bandwidth, CPU, Memory of Trisul Server

### Parameters

| Parameter name | Type    | Default value | Description                 |
| -------------- | ------- | ------------- | --------------------------- |
| ajaxfreq       | integer | 30            | Auto update every x seconds |

## Session Trackers in custom time interval

Display the session activity(traffic,etc..)

### Parameters

| Parameter name | Type    | Default value | Description                        |
| -------------- | ------- | ------------- | ---------------------------------- |
| tracker_id     | integer | 1             | Session tracker ID                 |
| window_seconds | integer | 3600          |                                    |
| topcount       | integer | 5             | shows these many items in the list |
| recentsecs     | integer | 900           |                                    |
| resolve_key    | integer | 1             |                                    |

## Top sessions for a key

Recent flow activity

### Parameters

| Parameter name  | Type    | Default value | Description                        |
| --------------- | ------- | ------------- | ---------------------------------- |
| topcount        | integer | 10            | shows these many items in the list |
| windows_seconds | integer | 300           |                                    |
| resolve_key     | integer | 1             |                                    |

## Recently fired threshold crossing alerts

Shows the recently fired threshold crossing alerts(this module works if
and only if TCA alerts are set for an entity)

### Parameters

| ParameterName | Type    | DefaultValue | Description                                     |
| ------------- | ------- | ------------ | ----------------------------------------------- |
| ajaxfreq      | integer | 30           | Auto updates the module every x-seconds         |
| maxcount      | integer | 10           | No. of TCA’s to be shown(sorted by high to low) |

## Standard retro analysis paths

Conventional method for viewing the history .The user can view the
history of an app/host in a selected time window

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Retro analysis of an IP

Used to view history of a particular host(Internal/External)

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## PDF report for an IP in selected time interval

Generates PDF reports for a host for a selected time interval

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Counter group retro analysis

Used to view the history of an entire counter group for the selected
time window

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Explore Retro(defunct)

Used to explore the history for particular app/host in a selected time
interval

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Netflow Retro(defunct)

Dedicated history analysis for NETFLOW based counter groups(this module
works if and only if TRISUL runs in NETFLOW mode)

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Alerts for a specific key

Shows IDS based alerts for a specific key , for a specified time period

### Parameters

| ParameterName  | Type    | DefaultValue | Description                                                           |
| -------------- | ------- | ------------ | --------------------------------------------------------------------- |
| window_seconds | integer | 86400        | Shows all alerts fired in the given time period(specified in seconds) |

## Investigate application users

Gives an in depth view of all the users of a particular app(eg.HTTP/SSH)
for a time interval

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Most active sessions

Gives an in sight of the top sessions in a selected time window(sorted
by volume)

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Security

In depth security analysis,view all the alert based counter groups
(IDS,TCA,Malware,Flow Tracker) all together

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Scatter

Plots a chart for the different alert counter groups for a time interval
, shows alerts for a default 6hrs interval

### Parameters

| ParameterName | Type    | DefaultValue                     | Description                                                  |
| ------------- | ------- | -------------------------------- | ------------------------------------------------------------ |
| guid          | string  | Alert Signatures                 | Security countergroup,which shows all types of alerts        |
| statid        | integer | Meter ID within the countergroup | 0                                                            |
| width         | integer | 400                              | Holds the chart width                                        |
| height        | integer | 600                              | Holds the chart height                                       |
| cullcount     | integer | 10                               |                                                              |
| bucketsize    | integer | 30                               | This parameter is necessary if the chart type is STACKEDAREA |
| surface       | string  | BUBBLE                           | Deals with the charting type                                 |
| recentsecs    | integer | 86400                            | Time window                                                  |
| title         | string  | Alert Distribution               | Deals with the title of the module                           |

## Chart Anything

Also known as *Flexi Chart*

Chart any combination of items you want on any chart surface.

### Parameters

| ParameterName | Type        | DefaultValue | Description                                        |
| ------------- | ----------- | ------------ | -------------------------------------------------- |
| width         | integer     | 350          | Chart width in pixels (leave blank for autosize)   |
| bucketsize    | integer     | 30           |                                                    |
| height        | integer     | 150          | Chart height in pixels                             |
| surface       | string      | ‘AREA’       | Chart type                                         |
| title         | string      | ‘My Chart’   | Module title                                       |
| models        | JSON string |              | A JSON string representing an array of chart items |

## Investigate Flow Tracker

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## App In/Out Trend

### Parameters

| ParameterName | Type    | DefaultValue | Description                                                                        |
| ------------- | ------- | ------------ | ---------------------------------------------------------------------------------- |
| Topcount      | Integer | 10           | Draws chart for this many items                                                    |
| Cullcount     | Integer | 0            | hows toppers eliminating the top x items in a chart                                |
| Width         | Integer | 200          | Width of the chart                                                                 |
| Height        | Integer | 250          | Height of the chart                                                                |
| Bucketsize    | Integer | 30           |                                                                                    |
| Surface       | String  | STACKEDAREA  | Chart surface type.See [charts](/docs/ug/ui/elements.html#charts) section for more |
| Recentsecs    | Time    | 6 Hour       | Draws chart for recent 6 hours                                                     |

## My Favorites

See [favorites](/docs/ug/cg/retrofaq.html) section for more

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Topper Trends

| ParameterName | Type    | DefaultValue | Description                                                                        |
| ------------- | ------- | ------------ | ---------------------------------------------------------------------------------- |
| Topcount      | Integer | 10           | Draws chart for this many items                                                    |
| Cullcount     | Integer | 0            | hows toppers eliminating the top x items in a chart                                |
| Width         | Integer | 200          | Width of the chart                                                                 |
| Height        | Integer | 250          | Height of the chart                                                                |
| Bucketsize    | Integer | 30           | IDS                                                                                |
| Surface       | String  | STACKEDAREA  | Chart surface type.See [charts](/docs/ug/ui/elements.html#charts) section for more |
| Recentsecs    | Time    | 6 Hour       | Draws chart for recent 6 hours                                                     |
| Cgguid        | string  | \-           | Counter Group ID                                                                   |
| Statid        | Integer | 0            |                                                                                    |

## Analyze with key

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Cross drill

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

## Show TCA details

### Parameters

| ParameterName | Type    | DefaultValue | Description                        |
| ------------- | ------- | ------------ | ---------------------------------- |
| Topcount      | Integer | 10           | Shows these many items in the list |

## Explore Retro usage

### Parameters

| ParameterName | Type | DefaultValue | Description |
| ------------- | ---- | ------------ | ----------- |
| \-            | \-   | \-           | \-          |

#### The Models parameter

The *models* parameters is a JSON string representing an array of

Each item in the array consists of :

| Counter Group ID             | A GUID representing a counter group - [see here for a list](/docs/ref/guid.html) |
| ---------------------------- | -------------------------------------------------------------------------------- |
| Key                          | A key within the counter group (eg a Host, Application, Subnet) etc              |
| Meter ID                     | A meter ID - eg Bytes In/ Connections etc                                        |
| Label as it appears on chart | Label for this item                                                              |

For example if you want to plot Inbound Vs Outbound traffic relative to
your home network.

```
    "[[\"{393B5EBC-AB41-4387-8F31-8077DB917336}\",\"DIR_INTOHOME\",0,\"Inbound\"],
      [\"{393B5EBC-AB41-4387-8F31-8077DB917336}\",\"DIR_OUTOFHOME\",0,\"Outbound\"]]"
```
