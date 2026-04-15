# Tasks

### How can I view real time traffic ?

Select Dashboards &rarr;Real Time Traffic

### How can I view the top hosts by usage ?

Select Dashboards &rarr;Current Hosts

### How can I view the top hosts by usage to within 3 seconds ?

For real time traffic stats you need to use the Stabber feature.

Select Dashboards &rarr;Real Time Traffic

1. Click on the tag on the right side next to any host to open the [Key Dashboard](/docs/ug/ui/key_dashboard)

2. And go to Key details module&rarr;Real Time Stabbers&rarr;Toppers
   
   This will show you the real time toppers for the counter group of the key for the selected meter.

### How can I view the top MAC by TRANSMIT to within 3 seconds ?

You need to use the *Real Time Stab Toppers* tool.

Select Tools. Then click on Real Time Stab
Toppers

1. Select the Counter Group, in this case **MAC**
2. Select the meter, in this case **TRANSMIT**
3. Click Live Update

### Investigate past activity

Select *Retro* from menu

Now you can apply various [Retro Analysis Tools](/docs/ug/cg/retrotools) to investigate

### I want to see details of a particular IP, but it isnt showing up anywhere for me to click ?

1. [Use the search box](/docs/ug/ui/elements#using-search-tool)
2. Click on the *key* to go to the key dashboard
3. Use any of the tools on the key dashboard

### Find out which flows caused a traffic pattern

Select *Retro* from the menu

- Find [Flow Tracker](/docs/ug/cg/retrotools#flow-trackers) tool in retro dashboard

- Select the time interval of interest, Max flows to retrieve say n

- Select **Traffic** in *select a flow tracker* field
  
  This will show Top n sessions by traffic right below 

### View flow activity of a particular host or port in real time

***Method 1***  
If you can see the IP in live dashboards

1. Click on the small tag on the right side next to the IP
2. Click Real Time stab:Flow Activity

<!-- -->

***Method 2***  

1. Follow instructions in [Using Search](/docs/ug/ui/elements#using-search-tool)
2. And click **Flows** in Real Time stabbers in [Key
   Details](/docs/ug/ui/key_dashboard#key-details) modules

See [Real Time Stabber](/docs/ug/cg/stabber#real-time-stabber-flow-activity)

### Store only 1MB worth of packets of each flow

- Open [Trisul
  Configuration](/docs/ref/trisulconfig) file as root

- Edit `<Rule mode="FLOWCAP1M"></Rule>`

- Read [Tuning packet storage](/docs/ug/caps/packetstorage) for
  more examples

### How can I draw long term bandwidth usage charts ?

Select Tools &rarr;Long Term Traffic

***Example***  
Draw long term bandwidth usage chart for port-80(http)

- Select Tools->Long Term Traffic  

- Select Apps from Counter Group and Total from meters  

- Enter port-80 in item box  

- Click Analyze

### How can I chart a specific metric such as connections for host 10.10.1.1 ?

Select Tools &rarr;Long Term Traffic

- Select Hosts from Counter Group and TCP SYN Sent from meters  

- Enter 10.10.1.1 in item box  

- Click Analyze

### I want to group IPs together for reporting for example by department ?

Login as admin, and  Select Context:default  &rarr;Profile0&rarr;Custom Counters &rarr;Keysets &rarr;Create a new Keyset Counter Group

Click [Keyset Counter Group](/docs/ag/context/keyset_countergroups) for more.
