# 9.4. Flow Tracker Alerts

Trisul provides a powerful way to generate an alert when certain types of flow activity occurs. Also see [Flow Trackers](https://trisul.org/docs/ug/flow/tracker.html) for instructions on using Flow Trackers which is a pre-requisite to creating Flow Tracker Alerts (this section).

The alerts

1. show up on the Web Interface alert tracker (top right)
2. can be sent in near real time (1-5 sec) via email or Text Message (SMS)

## 9.4.1 Applications

You can use flow tracking alerts to be notified when a number of things happen. Some typical examples are

1. when anyone *uploads* anything over 10MB from your network
2. when anyone establishes a long lived session more than 1 hour out of your network
3. when anyone *downloads* anything over 1G into your network

## 9.4.2 Configuring

:::note navigation

Select Alerts → Flow Tracking → Configure

:::

or you can create Flow Tracker Tracker Alerts per probe.

Login as `admin` user to create Flow Tracker Alerts.

:::note navigation

Select *Context : default* → profile0 → Flow Tracker Alerts

:::

1. Click on **Create a new Flow Tracker Alert**

| FieldName                          | Description                                                                                                                                                                |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                               | A unique name for the alert                                                                                                                                                |
| Select a Flow Tracker              | Which tracker, see section on Flow Trackers                                                                                                                                |
| Threshold Value (bytes or seconds) | For data xfer based trackers. Specify number of bytes. Eg 10MB, 6K, 2000 (default units = bytes). For Time based trackers like Long Lived flows. Specify number of seconds |
| Priority                           | Alert Priority (1=HIGH, 2=MEDIUM, 3=LOW)                                                                                                                                   |
| Alert Message                      | Message shown as part of the alert                                                                                                                                         |

## 9.4.3 Viewing generated alerts

There are couple of ways to see flow alerts that fired.

:::note navigation

Select Alerts → Flow Tracking

:::

:::note navigation

Select Dashboards → Alerts

:::

You can also find an yellow icon with numbers which indicate the number of Flow Tracker alerts generated.

You will find a screen with many trackers. Click on the number. You 
will find the detailed report of the IP that has fired the alert.

You can also download it in pdf,xlsx,csv format.

## 9.4.4 Using Search form

You can also search for flow tracker alerts at any time interval. 
Clicking on the ‘Show Search Form’ option on the top right will show you
 the custom time frame to choose alerts for specific dates

## 9.4.5 Sending alerts by email

You can set up email alert delivery for flow trackers as described in the section [Alerts via Email](https://trisul.org/docs/ug/alerts/email_settings.html)
