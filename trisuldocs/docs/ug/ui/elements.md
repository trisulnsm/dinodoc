---
sidebar_position: 4
---

# UI Elements

This section contains a quick overview of the user interface elements
used by Trisul.

## UI Layout

There are two layouts in Trisul 

- Admin Layout 
- User Layout

### User Layout

When you login as a non admin user you will see the following layout 

![User Layout](images/userlayout.png)  

Observe three sections 

- Top Panel
- Menu Panel
- Dashboard Panel 

### Top Panel details

The top panel contains the following items

![Top panel](images/topbar.png)  

1) #### Menu Toggle
   
   Click on the Menu toggle button to hide and unhide the side menu. This will provide you with extra screen space when necessary.

2) #### Trisul Logo

Clicking on the logo takes you to the home page.

3) #### Search Bar

You can use the Search bar tool to find items of your interest.

4) #### Alerts and Notifications

![](images/alertsnnotifications.png)
You can check for the alerts and notifications on External IDS, Threshold Crossing, Threshold Band Alerts, Blacklist Activity and Flow tracker here.

5) #### License Detail

You can check the validity of your License here.

6) #### Probe Switch
   
   ![](images/probeswitch.png)
   
   You can switch between probes and check on the probe health by clicking on the probe switch. By default it is set to Probe0.

7) #### Dark/Light Mode
   
      You can switch between dark and light modes to change the appearance of the screen here.

8) #### Host Name

This shows the host's name. All time zones in Trisul are displayed in the host's time zone.

9) #### Account
   
    ![](images/account.png)
    Clicking on the account button you can get the account history, change password, and signout from the current account. 

## Menus

A fully customizable multi open collapsible menu system.

#### Basic operations

![](images/menus.png)

Clicking on menu item opens a page with all options.

Expanding a menu item opens most popular items.

Trisul remembers the expanded state of the menu per user.

1) #### Shortcut Menu
   
   ![](images/shortcutbutton.png)
   
   Clicking on the shortcut menu you can quickly navigate to the home, routers and interfaces, and explore flows from any page.
2. ## Context Menu
   
      You can switch between different contexts from the context menu. 
3) ## Menu Items
   
   Click on each menu item and you can see the sub menus under each menu item expanded. Click Show all as not all sub menus would show up here.

## Dashboards

Dashboards are used to present network analysis modules by placing them
on specific locations on a web page. 

Dashboards are used to present network analysis modules by placing them
on specific locations on a web page.

![](images/livedashboard1.png)
The Dash board contains the following elements

| Elements                                                             | Function                                                                                                                                                                                                                            |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1) Dashboard Name                                                    | This is the name of the dashboard.                                                                                                                                                                                                  |
| 2)  Dashboard Description                                            | This gives you the description of the dashboard                                                                                                                                                                                     |
| 3) Data Time Period                                                  | The time shown on the top right corner of the dashboard is since the time data was available till now.                                                                                                                              |
| 4) [Dashboard Toolbar](/docs/ug/ui/dashmod_intro#dashboard-toolbars) | By clicking on the three dots at the top right corner of the dashboard you can edit the dashboard including customizing it, toggle labels, set as default dashboard, expand all modules, collapse all modules, and download as PDF. |
| 5) Modules                                                           | Modules are represented in the forms of charts and tables.                                                                                                                                                                          |

For more information see also:  

- [About the built in dashboards](dashboards).   

- [Dashboards and modules](dashmod_intro).

## Admin Layout

When you login as admin you will see the admin layout which is different from the user layout.

![](images/adminlayout.png)

The Admin panel consists of the following elements,

1) ## Admin Menu
   
   ![](images/admincontextmenu.png)
   
   1) The three dots on the top right corner of the context menu is the **shortcut menu** where you can quickly navigate to home, users, settings, and apps from any page.
   
   2) The **Context toggle** dropdown helps you switch between different contexts.
   
   3) Clicking on **Web Admin** you can manage admin settings, manage users, and manage UI settings.
   
   4) By clicking on the **Context Manager** menu, it allows you to change context names and descriptions only.
   
   5) Clicking on **Context Menu** helps you manage each context separately. By default it is set in Context:default but you can add more contexts to this menu. 

2) ## Manage Menu
   
   The manage menu is the expansion of the menu items clicked from Admin menu that shows up sub menus of that particular menu item.

3) ## Top Panel
   
   The top panel of admin layout is similar to the [top panel.](/docs/ug/ui/elements#top-panel-details) of the user layout.
   
   1) ## Start/Stop Tasks
      
      ![](images/startorstoptasks.png)
      
      1) Click on the three dots on the top right corner of the start/stop tasks and click Set as home if you would like to set this as your home page.
      
      2) On the top left you can see the name of the domain trisul is running on
      
      3) Adjacent to the domain name on the right, the current time on the web server is displayed.
      
      4) Name of the tasks say hub/probe are given in the table. By default it is hub0 and probe0 for primary.
      
      5) You can check if you are running a recent version by checking on the version name in the second column of the table
      
      6) Clicking on the profile drop down shows a list of profiles under probe0. By default it is profile0.
      
      7) The run mode drop down list shows the packet capture algorithms used by the probe. Even in Netflow mode Trisul uses packet capture.
      
      8) You can switch between netflow mode or packet capture mode by clicking on the drop down list and set it.
      
      9) Shows the interface name. eth0 is the interface name for probe0 by default.
      
      10) You can check the status of hub0 and probe0 and start/stop the tasks clicking on start/stop.
      
      11) If you click the three lines againts the hub0 it will show you the following menu
          
          ![](images/hub0.png)
          
          If you click on the three lines against the probe0 it will show the following menu
          
          ![](images/probe0.png)

## Analysis Forms

These forms have a striped background throughout the app.

- You can collapse the form for analysis results.
- You can expand the form to tweak your analysis.

In the sample form below, you can notice the *Hide* button on the top
right corner.

![](images/dashboards/hidesearchform.png)

## Toolbars

The toolbar area is the big title area at the top.There are two options
available currently.

- PDF -\> Click to convert the current page into PDF report.

- Retro FAQ -\>Name the analysis and add it to the
  [Q&A](/docs/ug/cg/retrofaq)

Sample form shows the analysis

![](images/dashboards/pdfretrofaq.png)

## Packets and Flows drilldown buttons

In the sample form below,common cues to indicate that you can view
related flows or download a PCAP is mentioned.

![](images/dashboards/packetsnflowsdrilldown.png)

## Autocomplete

All relevant form fields in Trisul are autocomplete capable. This
functionality is triggered when you enter three or more characters.

![](images/dashboards/autocomplete.png)

## Charts

Trisul supports rich interactive charts. Many modules allow you to
select a chart surface and specify other parameters such as width and
height.

### Interactions

Charts are interactive.

You can :  

- Hover your mouse over an item such as a PIE slice and get a tooltip with
  values  

- Click on a chart item and go to the `key` dashboard  

- Click on a chart item in the legend area to `show/hide` the item  

- Click on the `Expand Legend` spot to get a detailed legend  
  Auto refresh the charts via Ajax calls

The retro chart is even more interactive :  

- Click and select an area  

- Zoom into a selection  

- Pan left and right  

- Use the selected time interval to perform drill down retro analysis

### Available surfaces

The following surfaces are available

|                                    |     |                               |
| ---------------------------------- | --- | ----------------------------- |
| PIE                                |     | MRTG                          |
| ![](images/charts/pie.png)         |     |                               |
| STACKEDAREA                        |     | LINE                          |
| ![](images/charts/stackedarea.png) |     | ![](images/charts/line.png)   |
| SQUARELINE                         |     | BUBBLE                        |
| ![](images/charts/squareline.png)  |     | ![](images/charts/bubble.png) |
| BAR                                |     | AREA                          |
| ![](images/charts/bar.png)         |     | ![](images/charts/area.png)   |
| LINETABLE                          |     |                               |

### Download PCAP button

On tables featuring a “Download PCAP” button, clicking on the button
will result in Trisul computing a “Packet Scan plan” and then
downloading all of the requested entities into a single merged PCAP
file.

### Column select

On tables featuring a “Cols” link, clicking on it will let you choose
the columns you want displayed.
