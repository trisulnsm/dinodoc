---
sidebar_position: 6
---

# NetFlow Configuration Wizard

*NetFlow Configuration Wizard* pulls together various configuration options
into one place.

1. Used to configure most common settings for NetFlow
2. Use SNMP to resolve router names, interface names, and speeds
3. Enable Interface Tracking
4. Email Alerts
5. Create Trackers
6. Create utilization alerts

## Using the Wizard

To use the *NetFlow Wizard*, Login as `admin` and,

:::info navigation
:point_right: Go to Context: Default &rarr; profile0 &rarr; NetFlow Wizard
:::

![](images/netflow-wizard.png)
*Figure: Showing NetFlow Wizard for the Default Context*  

> You will see a Check mark against each option that is configured
correctly

Notice that the *NetFlow Configuration Wizard* has 6 Tabs.

1. **Basics**:  Essential setup for NetFlow
2. **Routers**: Helps discover router names using SNMP
   (Optional)
3. **Interfaces**: Enable or Disable “Interface Tracking” analytics
4. **Email Alerting**: Alerts via Email
5. **Trackers**: Enable this to provide drilldowns from router
   interfaces to metrics
6. **Utilization Alert**: Generate alerts when any interface
   utilization crosses specific level of thresholds

## Basic Configuration

Here you can configure the most common items related to NetFlow.

The current setting is shown just below the form items.

| Configurations required             | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| Network Interface to listen on      | If you are receiving NetFlow on an interface other than `eth` - click on *Set Adapter* and enter the new interface name.                                                                   |
| Specify IP ranges in Home Network for calculating External and Internal traffic | Enter IP ranges other than the default Private IP space that constitute your home network. This is used for calculating various metrics.                                                 |
| Select NetFlow/SFlow ports          | Enter the UDP ports that are mapped to NetFlow. If you want to enter a new port click on *Set NetFlow Ports* then enter a Port Number and select “NetFlow” from the drop down list.         |
| Select counter groups typically used in NetFlow environments    |   - In NetFlow mode many packet based counter groups such as HTTP Hosts, DNS Counters, SSL/TLS certificate metrics are not available.   - Select *Choose Counters* then scroll to the bottom for *Advanced Options* then select - *Typical enterprise NetFlow counter configuration*                                 |
| Switch Trisul Probes to NetFlow_TAP | The Probe nodes have to be in `NetFlow_TAP` mode. Click the button and ensure that the *Packets or NetFlow* parameter is changed to `NetFlow_TAP` from `TAP`                            |
| Edges                               | Enables the database containing the streaming graph of relationship between different entities                                                                                       |
| Ring                                | Enable to capture raw packets                                            |

## Routers

After Trisul has collected NetFlow for a while, it automatically
builds a map of Routers and their attached Interfaces. This page allows
you to perform the following tasks on the discovered routers.

> **NOTE**: Skip this step if you have just started collecting NetFlow. You
> can come back here after Trisul has been running for a few hours in
> NetFlow mode.

Select routers and then :

| Configurations Required | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| SNMP Settings           | Read community string for discovery                              |
| Resolve Router and Interface Names    | Using SNMP resolve all sysName and interface name  |
| SNMP Port Map           | Map netstream ifindex with snmp ifindex                          |

## Interfaces

This tab allows you to enable the “Interface Tracking” features for
discovered interfaces.

> **NOTE**  
> This step needs to have discovered NetFlow entities. Skip this step if
> you have just started collecting NetFlow a few minutes ago. You can come back here after Trisul has been running for a 15-20 minutes.

Select interfaces by clicking on the checkboxes and then :

| Configurations Required                   | Description                                                           |
| ----------------------------------------- | --------------------------------------------------------------------- |
| Enable Interface Tracking for **Top 100** | Enables the Interface Tracking feature for the busiest 100 interfaces |
| Enable Interface Tracking                 | Enables Interface Tracking on the selected intefaces                  |
| Disable Interface Tracking                | Disables the feature                                                  |
| Create TCA                                | Create TCA for selected interfaces                                    |
| Delete TCA                                | Delete TCA for selected interfaces                                    |
| Attributes | Clear attributes resets the configuration fields |

## Configure Email Alerts

This page allows you to configure real time E-Mail alerts for various
conditions.

| Configurations Required | Description                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------- |
| Email Account settings  | Outgoing SMTP email account                                                        |
| Configure Email Alerts Recipients              | Email IDs of those who want to receive the alerts           |
| Start/Stop   | Must be started and running                                                                   |
| Alerts go to syslog        | Select which alert types go to SYSLOG. Trisul sends out Emails only for those alerts that are sent to SYSLOG. To send an alert type to SYSLOG, click on the button and select any SYSLOG alert level in the next screen.                                                                                      |
| Syslog readable         | Checks if syslog files on the hub node are readable                                |

Once you go through the items in this wizard you will have a robust
NetFlow based monitoring system.

## Trackers

Trackers are *Streaming algorithms* that convert flow or packet metrics
into sub metrics for hosts per interface, apps per interface, NBAR-APPID
per interface and so on. Internally the trackers use the “Cross Key”
counter groups for this purpose.

![](images/netflow_wizard_trackers.png)

### For Enterprises

Enable these to provide drilldowns from router interfaces to these
metrics.These appear as Tabs in the [Router and Interface
Drilldown](/docs/ug/netflow/drilldown#information-shown) pages.

| Configurations required          | Description                                                             |
| -------------------------------- | ----------------------------------------------------------------------- |
| Track ASN Per Interface          | Outgoing SMTP email account                                             |
| Track Protocol Per Interface     | For each interface track IP protocol usage for TCP, UDP, etc.           |
| Track AppID / NBAR per interface | For each interface track which NBAR/AppID applications are using it. Automatically tags flow with NBAR/AppID |
| Track Interfaces Per Interface   | For each interface track other interfaces. This will enable the *Interface Matrix* in Interfaces Drilldown.  |
| Track Hosts per interface        | Host traffic per interface                                              |
| Track Apps per interface         | Application traffic per interface                                       |
| Track User-ID per Interface | For each interface track User-ID from devices like Palo Alto firewalls |
| Track App- ID per Interface | For each interface track App-ID from devices like Palo Alto firewalls |

### For ISP (Internet Service Provider)

| Configurations Required             | Description                                                      |
| ----------------------------------- | ---------------------------------------------------------------- |
| Track ASN for Subnets               | Allows ISP to define IP subnets and assign them to customers, then track AS wise usage of those subnets. |
| Track ASN for Locations             | Allows ISP to define Locations as a group of routers then track AS wise traffic for the entire location  |
| Mixed Bandwidth                     | Allows ISP to define peering vs internet traffic                 |
| Track Mixed Bandwidth Per Interface | For each interface track mixed bandwidth(peerig vs internet)     |
| Track Mixed Bandwidth for Subnets   | For each interface track mixed bandwidth(peerig vs internet)     |

## Interface Utilization Alert

This alert system monitors interface utilization and triggers notifications when predefined thresholds are crossed.

### Configuration of Thresholds

The following thresholds are used to determine the alert level:

![](images/interfaceutilization_alert.png)  
*Figure: Showing Setting of Interface Utilization Alerts* 

| Configurations requried | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| High                    | If interfaces crossed 90% it will give high level alerts   |
| Medium                  | If interfaces crossed 80% it will give medium level alerts |
| Low                     | If interfaces crossed 70% it will give low level alerts    |

### Alert Triggering
When an interface's utilization crosses the defined threshold, an alert will be triggered and sent to the designated recipients.

For example: Suppose an interface's utilization is steadily increasing due to growing network traffic. When the utilization crosses the 80% threshold, a medium-level alert is triggered, notifying the network administrator to investigate and take corrective action. If the utilization continues to rise and crosses the 90% threshold, a high-level alert is triggered, indicating a critical situation that requires immediate attention.