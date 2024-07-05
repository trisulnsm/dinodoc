# Tasks

### How can I view real time traffic ?

<span class="command hint">Select Dashboards -\> Real Time Network
Traffic</span>

### How can I view the top hosts by usage ?

<span class="command hint">Select Dashboards -\> Hosts</span>

### How can I view the top hosts by usage to within 3 seconds ?

For real time traffic stats you need to use the Stabber feature.

<span class="command hint">Select Dashboards -\> Real Time Network
Traffic</span>

1. Click on the tag next to any host
2. Select *Real time stab: Toppers*

### How can I view the top MAC by TRANSMIT to within 3 seconds ?

You need to use the *Real Time Stab Toppers* tool.

<span class="command hint">Select Tools. Then click on Real Time Stab
Toppers</span>

1. Select the Counter Group, in this case **MAC**
2. Select the meter, in this case **TRANSMIT**
3. Press Live Update

### Investigate past activity

<span class="command hint">Select *Retro* from menu</span>

Now you can apply various [Retro Analysis
Tools](/docs/ug/cg/retrotools.html) to investigate

### I want to see details of a particular IP, but it isnt showing up anywhere for me to click ?

1. [Use the search box](http:/docs/ug/ui/search.html#the_search_box)
2. Click on “View Details” to go to the key dashboard
3. Use any of the tools on the key dashboard

### Find out which flows caused a traffic pattern

<span class="command hint">Select *Retro* from the menu</span>

- Select the time interval of interest
- Find [Flow Tracker](/docs/ug/cg/retrotools.html#track_flows) tool in
  retro dashboard
- Select **Traffic** and click **Analyze**

### View flow activity of a particular host or port in real time

***Method 1***  
If you can see the IP in live dashboards

1. Click on the small tag next to the IP and select “Investigate”
2. Click Real Time stab:Flow Activity

<!-- -->

***Method 2***  

1. Follow instructions in [Using
   Search](/docs/ug/ui/search.html#the_search_box)
2. And click **Flows** in Real Time stabbers in [Key
   Details](/docs/ug/ui/dashboards.html#key_details) modules

See [Real Time Stabber](/docs/ug/cg/stabber.html#flow_stabber)

### Store only 1MB worth of packets of each flow

<span class="command hint">Open [Trisul
Configuration](/docs/ref/trisulconfig.html#redis) file as root</span>

- Edit `<Rule mode="FLOWCAP1M"></Rule>`
- Read [Tuning packet storage](/docs/ug/caps/packetstorage.html) for
  more examples

### How can I draw long term bandwidth usage charts ?

<span class="command hint">Select Tools -\> Long Term Traffic</span>

***Example***  
Draw long term bandwidth usage chart for port-80(http)

- Select Tools-\>Long Term Traffic  

- Select Apps from Counter Group and Total from meters  

- Eneter port-80 in item box  

- Click Analyze

### How can I chart a specific metric such as connections for host 10.10.1.1 ?

Select Tools -\> Long Term Traffic

- Select Hosts from Counter Group and TCP SYN Sent from meters  

- Eneter 10.10.1.1 in item box  

- Click Analyze

### I want to group IPs together for reporting for example by department ?

 Select Customize -\> Counters -\> Keysets -\>Add new Keyset Counter Group

Click [Keyset Counter Group](/docs/ug/cg/custom.html#keyset_counter_groups) for more.
