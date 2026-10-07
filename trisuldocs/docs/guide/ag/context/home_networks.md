

# Home Networks

Several features of Trisul depend on being able to tell which IPs belong
to your home network and which are to be treated as external. The rough
idea is that hosts in your home network are thought to be under your
administrative domain. For these features to work accurately you need to
tell Trisul which IPs constitute your “Home Network”

:::note **Default private IP ranges**  
Trisul by default considers the RFC1918 private IP ranges *10.0.0.0/8,
192.168.0.0/16, 172.16.0.0/12* to be home networks. For most users who
deployed NAT this should be sufficient. There is nothing more to do
here.

:::

See [Home Network Concepts](/docs/guide/learntrisul/homenetwork_concepts)

## Add a New Home Network

Your home network settings affect several reports and views, so keep them accurate. To add a subnet to your home network or edit an existing entry, follow these steps.

:::info navigation
:point_right: Log in as `admin` and go to Context: default &rarr; Profile0 &rarr; Home Networks
:::

You are shown the following screen

![](images/homenetworks.png)  
*Figure: Showing a list of configured Home Network subnets*

- Click on **Add** button on the upper right hand side.   

- Enter an IP and a subnet mask (eg, 59.92.0.0 and 255.255.0.0) that
  represents your home network.  

- Click **Create** button to add a new home network.

Restart the probe context for the change to take effect, for example `trisulctl_probe restart context default@probe0`.

## Adding Home Networks in Bulk

When you click on “Add” in the Home Networks screen you can see the Add
form below

![](images/create_homenetwork_form.png)  
*Figure: The add subnetworks screen*

Here you can:
### Add one by one 
Add one by one a single network number in "Network Number" and subnet mask in "Network Mask"

### Add in bulk  
Paste a series of **comma separated** or **one-per-line** networks in CIDR format in "Network Number". When using the CIDR format you can leave the "Network Mask" field blank.

## Action Button 

1. Click on the action button against any network number and delete any single home network by clicking the “Delete” option.
2. Click on the action button and click "Edit" to modify the network number and network mask. And click "Update".

## Delete Non Private Networks
You can click the “Delete non private networks” button on the top right to delete all the elements in bulk except the three built-in private ranges. Use this option if you want to add the home networks in bulk later.

## Viewing Traffic Direction

The Home Network is a crucial part of Trisul reports. Apart from the
“Internal Hosts”, “External Hosts” classification - you can see the
following data.

### Metrics in the Aggregates Counter Group.

:::info navigation
:point_right: Login as `user` and Go to Tools &rarr; Long Term Traffic
:::

1. Counter group = Aggregates
2. Meter = Total
3. Keys to the Item = DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, DIR_WITHINHOME

The following chart gives you the traffic details in each direction.

![](images/longterm_traffic.png)  
*Figure: Directional chart determined by the Home Network settings*

### Flows

Trisul has the ability to use Flow Taggers to tag each flow with a direction hint based on the endpoint Home Addresses.

1. Enable the [TagFlowsWithDirection](pathname:///docs/guide/ref/netflow-config#TagFlowsWithDirection) setting: open the NetFlow configuration file `/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-7CA09636-02D4-45E7-AA00-BE0D49B94E26.xml`, set `TagFlowsWithDirection` to `true`, and restart the probe context. This works in all product modes.
2. You can then go to Tools &rarr; Explore Flows to search for flows with
   the appropriate tag.
3. Each flow carries one of these tags: `[dir]internet` (one end inside the home network, the other outside), `[dir]internal` (both ends inside) or `[dir]transit` (both ends outside). For example, to see all transit flows, enter `tag=[dir]transit` in the tool's search query.

![](images/explore_flows.png)  
*Figure: Search for directional flows using a custom flow tagger*

Also see user guide sections: [Flow Taggers](/docs/guide/ug/flow/tagger), [Explore Flows](/docs/guide/ug/tools/explore_flows)
