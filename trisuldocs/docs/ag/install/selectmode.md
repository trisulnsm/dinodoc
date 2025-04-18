# Selecting the Product Mode

:::note after install
After installing on the server you need to select the product mode as the first step.
:::
Trisul Network Analytics is a general platform which can be reconfigured to very specific use cases.  

This *product*-izing process consists of customizing counters, flows, menus, dashboards and so on. For ease of use you can simply select the configuration set up front after installation.

![product](images/platform-products.png)


:::tip Productize it
The default mode of Trisul is Packet Capture based Network Security Monitoring. We recommend you switch to the appropriate mode such as NetFlow Analyzer or IPDR or ISP using this step even though you can accomplish the same by manual configuration.
:::

## Four Product Modes


|Packet Mode|NetFlow|Compliance|ISP|
|---|---|---|---|
|![Packet Mode](images/nsm_prod.png)|![NetFlow Mode](images/netflow_prod.png)|![IPDR Compliance](images/ipdr_prod.png) |![ISP](images/isp_prod.png)|
|**Packet** <br/>Packet Capture based Network Security Monitoring (the default)|**NetFlow Analyzer**<br/>Turn into a NetFlow Monitor|**IPDR Compliance**<br/>A ISP/Telco flow and NAT logging solution for regulatory compliance|**ISP Analytics**<br/> For ISPs looking for peering analytics, BGP Route Analytics, Prefixes and so on|


## First Login

After following the steps in [installation](doinstall). You should be able to login to the UI by opening 


:::info navigation

:point_right:  Open your browser and go to `http://ipaddress:3000`  default username = `admin` and pwd = `admin` 
:::


## Screen 1: Configure Product Mode

The first screen you encounter will present the following options

Select the Mode.

![select product mode](images/selectmode.png)

Then you have three options  


* **No Thanks! I will configure manually** &rarr; Advanced users can manually configure Trisul for their use case.
* **I will do this later on next login** &rarr;  Show this screen later the next time I login. I am just looking around now. 
* **Next** &rarr; I have selected the product mode , lets move to the next step.



## Screen 2: Select Interface

Upon selecting "Next" in screen 1 

![select interface](images/selectinterface.png)

The dialog shows a list of interfaces found on the Trisul Probe node along with their IP Addresses. Select one or more of the interfaces on which you will be receiving Packets (via SPAN port) or NetFlow 


Press the **Configure** button to finish.

## Screen 3: View Status

The hub and probe nodes are restarted with the selected mode.


![status message](images/mode_status.png)


:::success Complete
Now you can start sending traffic, either NetFlow or packets to Trisul.
Logout and login as user to start viewing reports
:::


:memo: Refer to Trisul User Guide [Introduction](/docs/ug/ui/) for user login. 

## Re-Enabling Product Mode Selector

Incase you have opted to configure product mode manually or have selected NetFlow Analyzer Mode and would like to switch to  IPDR Compliance Mode you'll have to re-enable product selection mode. For that

:::info navigation
:point_right: Go to Web Admin &rarr; Manage &rarr; App Settings &rarr; UI
:::

![](images/reenable_productmode.png)  
*Figure: Showing Re-enabling Product Mode Selector*

- Check the "Show mode selection" checkbox and
- Click the "Save" button

Once you have completed these steps, you can select the desired mode from the Product Selection Mode.










