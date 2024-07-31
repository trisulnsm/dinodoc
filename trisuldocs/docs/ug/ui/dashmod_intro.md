---
sidebar_position: 1
---

# Introduction to Dashboards and Modules

A *dashboard* is a web page that contains *modules* at various
positions.

Key rules about modules and dashboards:

1. A dashboard may contain several modules.  

2. A module may appear in any number of dashboards.  

3. A module may even appear multiple times in the same dashboard.  

4. A change in a module property will propagate to all the dashboards
   which use the module.  

5. If there are no modules in a particular position that position is not
   rendered at all as trisul modules auto adjust for width.

## An example - Current Hosts

The first screen you will see when you login is the Current Hosts
overview dashboard

![thumbnail_zoom](images/host_dashboard.png "thumbnail_zoom")  
*Figure: Host Dashboard*

You can see that this dashboard is nothing but four modules laid out in
two columns. Trisul has well defined column positions into which you can
place modules. See [Module Positions](/docs/ug/ui/dashmod_intro#how-to-add-modules-to-the-dashboard)

Lets take a closer look at the dashboard shown above.

| Top 2 position column 1                   | Top 2 position column 2                        |
| ----------------------------------------- | ---------------------------------------------- |
| Module : In vs out traffic (past 6 hours) | Module : Active TCP connections (past 6 hours) |
| Module : Top Internal Hosts (current)     | Module : Top External Hosts (current)          |

## View a Dashboard/All Dashboards

There are more than one way to navigate to view all dashboards

**Method 1:**

:::note path

From the Menu, Go to Dashboards-> Show all

:::

![](images/viewalldashboards.png)

This shows the list of available dashboards.

**Method 2:**

:::note path

From the Menu, Go to Customize-> Show all-> Dashboards

:::

![](images/viewalldashboards1.png)

This also shows the list of available dashboards.

To **open a particular dashboard**, from the list of dashboards, click on the dashboard you would like to view.

## View a Module/All Modules

To view all modules,

:::note path

From the Menu, Go to Customize-> Show all-> Modules

:::

![](images/viewallmodules.png)

This will show a list of all available modules.

To **view one particular module** from the list, check on the name of the dashboard that contains the module and navigate to that dashboard.

## Toolbars

### Dashboard Toolbars

You can control dashboard layout and contents by using the toolbars.

Dashboard toolbars can be accessed from the right side corner of each
dashboard window. 

![](images/toolbars/dashboard_icons.png)  
*Dashboard level toolbar*

#### Operations

The following operations can be performed using the toolbars:

| Operation                | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| Customize                | Edit dashboard parameters like name, description,modules etc.. |
| Toggle labels            | Toogle reaable vs lable only on table list                     |
| Set as default dashboard | Set as home page                                               |
| Expand all modules       | Click on the dashboard to enable all modules                   |
| Collapse all modules     | Click on the dashboard to disable all modules                  |
| Download as PDF          | Export data in PDF file                                        |

### Module Toolbars

Module toolbar is the three dots on the top right corner of the [module](/docs/ug/ui/dashmod_intro#view-a-moduleall-modules). By clicking on the module toolbar you get a list of actions that can be done on the modules.

![](images/toolbars/module_icons.png)  
*Module toolbar*

#### Operations

The following operations can be performed using the toolbars:

| Operation             | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Customize             | Edit module parameters like name, description, etc.. |
| Historical Chart      | View long term historical view of this chart         |
| Remove from Dashboard | Remove module from this dashboard                    |
| Disable               | Disable / Enable this module                         |
