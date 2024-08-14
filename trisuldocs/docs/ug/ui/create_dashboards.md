---
sidebar_position: 4

---

# Dashboards

With [Dashboards](/docs/ug/ui/dashmod_intro) you can, 

- Add / remove / reposition modules.  

- Change module parameters.  

- Create your own new dashboards.  

- Share your dashboards.

## Add a Dashboard

To create a dashboard,

![](images/newdashboard.png)

*Figure: All Dashboards*

:::note path
Go to Dashboard-> Show all-> Click New

:::

*Create a new dashboard* window opens up with the following fields

![](images/createdashboard.png)

*Figure: Customize a Dashboard*

| Fields         | Description                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name           | Enter the name of the dashboard                                                                                                                                                             |
| Description    | Enter a short description of the dashboard                                                                                                                                                  |
| Modules Layout | Click on the Plus icon and select from the list of modules you would like to add to this dashboard                                                                                          |
| Layout View    | You can view the layout of the added modules as it appears on the dashboard here. You can also rearrange by clicking dragging to the desired position and adjust the width of each modules. |

Once you have filled all the fields, Click Create.

You have now succesfully created a new dashboard!

## Explore a Newly Added Dashboard

Once you have created a new dashboard, Now you are at the new dashboard panel with the added modules where you can monitor the metrics of the module. The newly created dashboard displays the graphical chart of the meters along with following elements.

![](images/modules.png)

*Figure: Dashboard Components*

1) #### Time Window
   
   You can set the time window for the selected dashboard from 5 mins to any desirable time by choosing a custom time and date.

2) #### Topper Count
   
   You can choose from 5 to 500 topper counts for the current dashboard.

3) #### Module Name and Description
   
   Displays the name of the module and a short description

4) #### Module Toolbar
   
   Displays the description of the module.

5) #### Module Icons
   
   The [module icons](/docs/ug/ui/elements#module-icons) are useful in traversing the graphical chart in detail.

6) #### Legend Table
   
   This table gives you a quick output of values including Max, Min, Avg, Latest, Total and 0th Percentile. If you have added more than one metrics the same will be reflected for each metrics differentiated by color.

## How to Add a Dashboard to the Menu

Go to *All Dashboards*

:::note path

Dashboards-> Show All

:::

Click on *Add to menu* on the dashboard you would like to add to the menu.

![](images/addtomenu.png)

*Figure: Add a Dashboard to Menu*

That's it.

You can now easily access the dashboard right from the menu!

## How to Remove a Dashboard From the Menu

Go to Customize-> UI-> Menu Manager

![](images/removefrommenu.png)

*Figure: Remove a Dashboard from the Menu*

There will be a list of all dashboards. Find the dashboard you would like to remove from the menu and Click Delete. This will only remove the dashboard from the menu and your dashboard itself will not be deleted.

## How to Edit a Dashboard

To edit a Dashboard, from the list of dashboards go to the dashboard you would like to edit. And click on the [Dashboard toolbar](/docs/ug/ui/dashmod_intro#dashboard-toolbars), the three dots on the top right corner of the dashboard and click Customize.

## How to Delete/Clone/Export a Dashboard

To delete a dashboard, 

:::note path

Go to Dashboards-> Show all-> Manage

:::

![](images/deletedashboard.png)

*Figure: Delete/Clone/Export a Dashboard*

From the list of dashboards, click on the three dots on the right side against the dashboard you would like to delete. and click **Delete**. Your Dashboard is now deleted.

From the same menu, click **Clone** in case you need to take a copy of the dashboard before deleting the dashboard.

You can also share the dashboard across different contexts by clicking **Export to App JSON** on the same menu. This will download the Dashboard in JSON format to your device.

## How to Import a Dashboard

To import a dashboard,

:::note path

Go to Dashboards-> Show all-> Import a dashboard package

:::

![](images/importdashboard.png)

*Figure: Import a Dashboard*

You can import a dashboard in tar.gz format or as a json file. Click on the adjacent tab if you would like to import a dashboard from the URL.
