---
sidebar_position: 08
---

# Common Tasks

## Query flows

If you know the IP address

1. Click on Tools -> Explore flows
2. Just type in your query “ip=192.168.2.81” in the box

For more details read the section on [Explore Flows](/docs/ug/tools/explore_flows)

## Total flow and traffic based summary for an IP

If you can see the IP in any dashboard

1. Click on the small tag next to the IP and select “Investigate”

If you know the IP address

1. Click on Tools -> Investigate IP
2. Select a time frame
3. Enter the IP you want to search for

## Find out which flows caused a traffic spike

1. Go to **Retro -> Retro Tools**
2. Select the spike
3. Select **Flow Trackers** from the toolbox
4. Select **Traffic**

## View flow activity of a host or port in real time

1. Type the host or the port in the search box
2. Click on the search results to go to the Key Dashboard
3. On the top right, select “Flow Stabber”

## Jump from alerts to flows that caused them

1. From any table that shows invididual alerts click on the “Flows”
   icon

This will show the flow that caused the alert as well as nearby flows.
For example, if a web download of a PDF caused an alert, this will
retrieve all relevant flows.
