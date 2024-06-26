# Optimize for a ISP deployment

Netflow data especially at a service provider can be voluminous. Trisul
by default tracks the usage of each IP (internal or external in 30
second resolution). This could result in an exponential growth of the
hosts traffic tracking storage.

We recommend the following policy.

- Track all IPs in the service provider domain (the service provider
  customers)  
- Track only the top 1000 or so external IPs (out in the internet)  
- Optionally increase the bucket size to a 5 minute resolution.

## Specify ISP Home Network

Login as Admin -\> Select Context and profile -\> Home Networks

Step 1: Click on **Add a network**  
Step 2: Enter the IP and Subnet mask of the home network  
Step 3: Repeat for all the IP ranges belonging to the ISP

## Modify host tracking policy

Next cap the default “Hosts” counter group to only store traffic
statistics for the top 1000 items.

Login as Admin -\> Select Context and profile -\> Counter Groups

Step 1: You are shown with a counter group list  
Step 2: Click on Counter Group Name in Counter group list and check the
**TopperTrafficOnly** and Save  
Step 3: In counter group list click on Hosts “Toppers” link  
Step 4: Change the topper count from 50 to 1000 for the `Total meter` (item
0)  
Step 5: Save

## Enable the Internal and External counter groups

These are built in counter groups that divide the IP’s into two separate
groups

- Internal Hosts  
  setup to track stats for all IPs in the home network
- External Hosts  
  setup to track stats for only the top 1000 IPs on the internet
  (external)

You can customize these two groups further if you wish (for example to
increase the top 1000 hosts in the external group to the top 5000)

-  Enable the first two groups “Internal Hosts” and “External Hosts”

Restart trisul for changes to take effect.
