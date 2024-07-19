# Managing Subscribers
Resource Groups are used to assign devices and other objects to users. To create a resource group,
Login as User name: admin Password:
You have now landed on the admin window.
Go to Context:MRTG>Admin Tasks>User resources
Screenshot
From the User resource group window Click New Resource Group and enter the name of the user and a short description. Then click Create.
You have now successfully created a new resource group and the newly added resource group will be reflected in the List of resource group window. 
How to create a subscriber user?
To create a subscriber user,
Go to Web Admin>Manage>Users
Screenshot
You will see the New User window with the following fields.
Fields	Description
User Name	Enter the username for the subscriber
Authentication	Select Local authentication
Password	Enter the password for the subscriber
Full Name	Enter the full name of the subscriber
Role	Select user role as Subscriber
Allow Multiple Login	Check this if you want to allow multiple concurrent login sessions for this user
Default Dashboard	
Default Home Page URL	Enter the URL: /mrtg/index
Allowed Contexts	Select the contexts from the list of contexts for the subscriber

Click Create User. The user has been successfully added and the same will be reflected under the list of all users.
How to assign resource groups to user?
 To assign resource groups to the users,
Login as User name: admin Password:
Go to Context:MRTG>Admin Tasks>User resources
Screenshot
You can see the newly added resource groups under the list of resource groups window.
Click on the dropdown option button on the right against the resource group you would like to assign to. Click Add/Edit Resources.
The Resource group keys window appears with the following fields.
Fields	Description
Description of these group of items	Enter a short description on what this collection represents 
Counter Group	Select SNMP-Interface from the list of counter groups
Keys	Click on the Plus icon to add the keys and click Select after adding the desirable keys to that particular resource group

Note: If you cannot find SNMP-Interface from the list of counter groups. Install SNMP-Poller from Trisul Apps before this step and try again.
To install SNMP-Poller app. Go to Web Admin>Manage>Apps
You can see the list of apps available on Trisul. You can use the right side search bar to find the SNMP-Poller app and click install.
Once you have filled all the fields, Click Add. You have now successfully assigned the keys to the resource group. You can see the keys assigned to the resource groups on the bottom of the same window.
Bandwidth Monitoring:
You can see the bandwidth consumption in visual graphics and download them as report from logging in as user.
Login as Username: mrtg1 Password: mrtg123
You have now landed on the subscriber user window.
Screenshot
Once you have logged in, on the left you can see the resource groups and the keys assigned to that particular user. On the right side of the window, you can see the time frame and bandwidth consumption chart. The blue lines on the graph represents download data and green represents upload data. By default the time frame is set to last 15 mins so the chart on the screen is the bandwidth consumption for the last 15 mins. 
You can select the desired time frame to view the bandwidth consumption for that particular time window.
For a longer time window, Click and drag on the spikes to zoom in and find further detailed time of the zoomed in section.
On the top right corner of the chart you can find a number of valuable icons. From the right, PDF, Live SNMP, Menu, and Home icons.
PDF :
Click on the PDF icon to download the selected data in PDF format.
Live SNMP:
Click on the Live SNMP icon to view the Live bandwidth consumption which is updated every 10 seconds.
Menu:
Click on the Menu icon to download the data in other desirable formats including SVG, PNG, and CSV.
Home: 
Click on the Home icon to reset from the zoom selection if you have panned in for detailed view.
You can fetch the data for any key on the resource group using the above steps!
