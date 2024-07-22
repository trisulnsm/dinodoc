# Traffic Grapher

This is similar to the MRTG software that all ISPs are familiar with.

## Create: Resource Group

Resource Groups are used to assign devices and other objects to users. To create a resource group,

*Login as admin*

You have now landed on the admin window.

![](images/mrtg_resourcegrouphome.png)
:::note navigation
Go to Context:MRTG>Admin Tasks>User resources
:::

On the *User Resource Group* module Click *New Resource Group*

![](images/mrtg_addresourcegroup.png)

On the *Ass a new resource group* enter the name of the user and a short description. Then click Create.
You have now successfully created a new resource group and the newly added resource group will be reflected in the List of resource group window. 

## How to create a subscriber user?

To create a subscriber user,

![](images/mrtg_userpanel.png)

:::note navigatiion
Go to Web Admin>Manage>Users
:::

You will see the *New User* window with the following fields.

![](images/mrtg_createnewuser.png)

| Fields                | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| User Name             | Enter the username for the subscriber                                            |
| Authentication        | Select Local authentication                                                      |
| Password              | Enter the password for the subscriber                                            |
| Full Name             | Enter the full name of the subscriber                                            |
| Role                  | Select user role as Subscriber                                                   |
| Allow Multiple Login  | Check this if you want to allow multiple concurrent login sessions for this user |
| Default Dashboard     |                                                                                  |
| Default Home Page URL | Enter the URL: /mrtg/index                                                       |
| Allowed Contexts      | Select the contexts from the list of contexts for the subscriber                 |

Click *Create User*. The user has been successfully added and the same will be reflected under the list of all users.

## How to assign resource groups to user?

 To assign resource groups to the users,

*Login as admin*

:::note navigation
Go to Context:MRTG>Admin Tasks>User resources
:::

![](images/mrtg_addoreditresourcegroup.png)

You can see the newly added resource groups under the list of resource groups window.
Click on the dropdown option button on the right against the resource group you would like to assign to. Click *Add/Edit Resources*.
The Resource group keys window appears with the following fields.

![](images/mrtg_addresourcegroupkey.png)

| Fields                              | Description                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Description of these group of items | Enter a short description on what this collection represents                                                              |
| Counter Group                       | Select SNMP-Interface from the list of counter groups                                                                     |
| Keys                                | Click on the Plus icon to add the keys and click Select after adding the desirable keys to that particular resource group |

:::note
If you cannot find SNMP-Interface from the list of counter groups. Install *SNMP-Poller* from [Trisul Apps](/docs/ug/webadmin/apps) before this step and try again.
:::

Once you have filled all the fields, Click Add. You have now successfully assigned the keys to the resource group. You can see the keys assigned to the resource groups on the bottom of the same window.

## Monitoring Bandwidth:

You can see the bandwidth consumption in visual graphics and download them as report from logging in as user.
*Login as user*
You have now landed on the subscriber user window.
![](images/mrtg_bandwidthmonitor.png)

Once you have logged in, on the left you can see the resource groups and the keys assigned to that particular user. On the right side of the window, you can see the time frame moduleand bandwidth consumption chart module. The blue lines on the graph represents download data and green represents upload data. By default the time frame is set to last 15 mins so the chart on the screen is the bandwidth consumption for the last 15 mins. 

You can select the desired time range from the *time frame* module to view the bandwidth consumption for that particular time window.

For a longer time window, Click and drag on the spikes to zoom in and find more detailed time of the zoomed in section.

On the top right corner of the chart you can find a number of valuable icons. From the right, PDF, Live SNMP, Menu, and Home icons.

#### PDF :

Click on the PDF icon to download the selected data in PDF format.

#### Live SNMP:

Click on the Live SNMP icon to view the Live bandwidth consumption which is updated every 10 seconds.

#### Menu:

Click on the Menu icon to download the data in other desirable formats including SVG, PNG, and CSV.

#### Home:

Click on the Home icon to reset from the zoom selection if you have panned in for detailed view.

Click on the *View Yearly Chart* button and the following window will open up for the selected key.

![](images/mrtg_yearlychart.png)

This will give you a granular view of daily,weekly,monthly and yearly charts which can be monitored in a more detailed time frame .

You can fetch the data for any key on the resource groups following the above steps!
