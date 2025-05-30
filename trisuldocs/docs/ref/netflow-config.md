import Link from '@docusaurus/Link';

# Netflow Configuration File

## How to edit

On the Trisul-Probe type `sudo /usr/local/share/trisul-probe/cfgedit` then select “Netflow” to edit.  See [Plugin Configuration](/docs/ref/plugin_configuration)

## Location

In a file called`PI-7CA09636-02D4-45E7-AA00-BE0D49B94E26.xml`in`/usr/local/etc/trisul-probe/domainX/probeX/contextX`You can edit the config file directly by typing the full file name as shown below

```bash
# vi /usr/local/etc/trisul-probe/domain0/probe0/context0/PI-7CA09636-02D4-45E7-AA00-BE0D49B94E26.xml 
```

## Parameters

These are the parameters that control Netflow processing.

:::note Case insensitive

Boolean parameters are case-insensitive. True, true,TRUEmean the same thing

:::

| Parameters                  | Defaults | Description |
| --------------------------- | -------- | ----------- |
| AppMode                     |          | Application mode. Set this to `ipdr` to enable IPDR mode of Netflow processing. Leave it to blank for default processing  |
| MeterHosts                  | TRUE     | Whether or not traffic stats for each host is metered.             |
| MeterSubnets                | TRUE     | Whether or not traffic stats for each subnet is metered.           |
| MeterApplications           | TRUE     | Whether or not traffic stats for each application is metered. In this context application refers to the UDP/TCP port or to special network level apps like ICMP, IPSEC, etc. In case of TCP/UDP ports, the default behavior is to only meter the lower numbered port. This works in most cases, but if you want to count both ports, set the MeterBothPorts parameter.   |
| MeterNetflowSources         | TRUE     | If set, Trisul tracks traffic volume from each exporting router. The meters tracked are<br/>**Netflow export rate in bytes**<br/>**Netflow export rate in records**<br/>**Total traffic volume on router in bytes**    |
| MeterNetflowInterfaces      | TRUE     | If set, Trisul tracks traffic into and out of network interfaces.|
| MergeMultipleSources        | TRUE     | If set, duplicate flows from different routers will be merged.   |
| MatchBiDirectionalFlows     | TRUE     | Netflow records are unidirectional. If set, Trisul will merge two unidirectional flows into one bidirectional flow.<br/>If you set this option to false, Trisul will retain the uni-directional flow as-is.  |
| UseRouterTimestamps         | TRUE     | If set, Trisul will use the timestamp from the Netflow records.<br/>If not set, Trisul will use the timestamp at the server running Trisul. This is the default and recommended option unless you have routers which synchronize their timestamps automatically.  |
| MergeHTTP                   | FALSE    | For HTTP flows, ignore the Source Ephemeral Port and set it to 65535. **NOTE** When the MergeX option is used flows will not be terminate but timed out. Use the MergeX options to reduce the number of unique flows |
| MergeHTTPS                  | FALSE    | For HTTPS flows, ignore the Source Ephemeral Port and set it to 65535.|
| MergeDNS                    | FALSE    | For DNS flows, ignore the Source Ephemeral Port. Set to FALSE, every DNS transaction will be a separate flow |
| IgnoreESP                   | FALSE    | Ignore IPSEC ESP flows. These are tunneled interfaces containing no flow information within them. |
| MeterBothPorts              | FALSE    | When set to FALSE : The default behaviour of Trisul is to only meter the low numbered port. The assumption is that low numbered ports represent servers. This is usually accurate for traditional server applications that run below port 1024.<br/>When set to TRUE : Meters both ports for applications above port 1024. Ports below 1024 (such as HTTP) are still counted in the normal way.<br/>Set this to TRUE if you have P2P / VoIP Traffic you wish to track. |
| MeterHomeNetwork            | TRUE     | Classifies traffic relative to your Home Network.<br/>**INCOMING **Destination IP is in your home network but Source IP is not<br/>**OUTGOING** Source IP is in your home network but Destination IP is not<br/>**INTERNAL** Both the Source IP and Destination IP are in your home network<br/>**TRANSIT **Both the Source IP and Destination IP are not in your home network  |
| MeterBothPorts              | FALSE    | **When set to FALSE** : The default behaviour of Trisul is to only meter the low numbered port. The assumption is that low numbered ports represent servers. This is usually accurate for traditional server applications that run below port 1024.<br/>**When set to TRUE** : Meters both ports for applications above port 1024. Ports below 1024 (such as HTTP) are still counted in the normal way.<br/>Set this to TRUE if you have P2P / VoIP Traffic you wish to track. |
| MeterTCPConnections         | TRUE     | Meter connection count for the flow TCP end point IPs. This allows you to get reports for hosts with maximum connections, etc |
| MeterAppConnections         | TRUE     | Meter connection count for source and destination ports for TCP based application. |
| FilterInterfacesInclude     |          | A comma separated list of interfaces.<br/>When set, Trisul will accept and process flows that exit or enter these interfaces. This can be in routerip_ifindex format or Trisul key format<br/>**An example**<br/>If you only want to accept flows that use the WAN link (if Index = 108) on router (122.166.4.242) and GigE link (ifIndex = 120) also on router (122.166.4.242)<br/>You should specify the interfaces as 122.166.2.242_108,122.166.242.100_120   |
| FilterInterfacesExclude     |          | A comma separated list of interfaces.<br/>When set, Trisul will only process flows that DO NOT use these interfaces.<br/>The format is same as the parameter FilterInterfacesInclude<br/>**Note**: that you cannot use the FilterInterfacesInclude and Exclude parameters at the same time. This rule applies to all such parameters  |
| FilterFlowASNInclude        |          | Only process netflow records containing one of the ASN in this comma separated list  |
| FilterFlowASNExclude        |          | Only process netflow records which DO Not contain any ASN in this CSV list. USECASE Upstream ISP filtering out its downstream ISP ASNs for monitoring and logging purposes. |
| FilterHostsInclude          |          | Only process netflow records containing IP address in this CSV list (IPv4 only)   |
| FilterHostsExclude          |          | Only process netflow records not containing ANY IP in this CSV list (IPv4 only)<br/>**Feature used in ISP environments** |
| FilterAppsInclude           |          | Only process these ports. Use comma separated port numbers   |
| CheckPacketsForCorruption   | FALSE    | Turns on heuristics to check each netflow record for corruption. When set to TRUE, Trisul validates the timestamps, packets, bytes, etc. We have seen unpatched routers transmit corrupted records, which can distort the metrics and charts.  |
| LogTemplateMessages         | TRUE     | If enabled , Trisul will log template updates to the probe log files. Disable if you feel there are too many of these messages. |
| IgnoreV9EgressFromDevices   |          | Sometimes we find that customers erroneously enable both Netflow v9 INGRESS and EGRESS on all ports. This will result in double counting. The solution is to only configure INGRESS+EGRESS on a single port such as the uplink ports. Oftentimes, we are unable to get the Netflow change request done. This option allows you to adjust for this. This option contains a comma separated list of IP addresses of devices from which Trisul will ignore EGRESS netflow V9 records. The following example ignores Netflow v9 EGRESS from two devices<br/>`<IgnoreV9EgressFromDevices> 172.16.13.31,172.16.13.36`<br/>Egress flow records are those with NF9/IPFIX direction field with value=1 |
| IgnoreAllEgress             | FALSE    | Ignore all flow records generated by egress processing. Egress flow records are those Netflow v9 and IPFIX records with direction = 1 (egress)  |
| IgnoreOutCounts             |          | Set this option to true to ignore out packets and out bytes sent incorrectly by some devices. Some firewalls send the same metrics in IN and OUT counts by misinterpreting the template as post out counts. Use this if you see the same values of IN/OUT on all flows  |
| EnableShimTunnel            | FALSE    | If Enabled, Trisul will decapsulate the special SHIM tunnel used to forward Netflow packets from a remote network to the Trisul probe. Normal Netflow will also be processed correctly. For more information see on [Github netflow-shim-tunnel](https://github.com/trisulnsm/netflow-shim-tunnel)  |
|<a id="HomeASNumbers">HomeASNumbers</a>          |          | Enter a comma separated list of Home AS and Downstream AS numbers. Used in ISP deployments these are the AS numbers of the customer running Trisul. If Home AS numbers are present they are used instead of Home Network Prefixes to determine per-AS Upload (egress) and Download (ingress) traffic metrics per AS and also to split upstream vs downstream. For large and transit ISPs with changing downstream topologies see the parameter [HomeASNumbersFile](/docs/ref/netflow-config)  |
| AddEdges                    | TRUE     | Adds ASN to  PREFIX edges. If enables, it allows you to select a AS and see which PREFIXES are active in that AS. Here active means prefixes which had some traffic in the selected interval|
| MeterLinkAS                 | FALSE    | Flow-Link-ASN is a special Crosskey Counter Group which tracks network interface > AS flows. Setting this option to TRUE, enables that counter group. You can then visualize these flows using the Sankey App  |
| UsePostNATAddresses         | TRUE     | This is Neflow Template option supported on some devices such Palo Alto. Set this to TRUE to use Post-NAT IP address which represent the actual end user in our organization rather than the WAN address. |
| TemplateDumpIntervalSeconds | 600      | How frequently must the template database be dumped by the probes. These are shown on the Admin > Show Template DB page. Set this to 0 to prevent template databases being dumped |
| MeterZeroFlows              | FALSE    | Use case Large ISP compliance logging. When compliance only asks for connection logs without collecting byte and packet counts, enabel this option |
| AllowVariableLengthStrings  | FALSE    | IPFIX variable length strings in templates are used by some network vendors to export labels and tags using IPFIX template field type 65535  |
| TagFlowsWithUserID          | FALSE    | Some vendors will export flows with a User-ID string which identifies the pre-NAT user of the flow, this appends a tag each flow.  |
| MeterUserID                 | FALSE    | If User-ID string is present, meter bytes, flows, connections for it |
| MeterAppID                  | FALSE    | If App-ID string is present, meter bytes, flows, connections for it  |
| AddL2AccountingBytes        | 0        | Use this option if you want to closely match Netflow with SNMP metrics for accounting and billing purposes. Netflow being a Layer3 (IP) technology it does not account for link layer bytes and also any physical layer bytes such as Ethernet Frame Check sequence. A typical setting is to set this parameter to 18 to add 14 bytes of ethernet and 4 bytes of ethernet FCS to each packet. This option is typically only useful for customers who seek very close match with SNMP metrics for billing purposes  |
| ReloadConfigCheckSeconds    |          | Set this to 60 to automatically check for changes to this configuration file every 60 seconds. If the modified timestamp of this configuration file changes, the configuration is automatically reloaded. The default behaviour is for Trisul Probe to require a restart for a Netflow configuration file change. |
| <a name="TagFlowsWithDirection">TagFlowsWithDirection</a>     | FALSE    | Tag each flow with a direction relative to the Home Networks (see user guide [Home network section ](/docs/ag/context/home_networks)based on the AS Number information.<br/>Every flow is tagged with one of the following <br/>**[dir]internet**<br/>when one of source and dest AS is within home network and the other is external<br/>**[tag]internal**<br/>when both source and dest AS are within the home network<br/>**[tag]transit**<br/>when both source and dest AS are outside the home network<br/>**Feature used in ISP environment** |
| HomeASNumbersFile           |          | Used with ISP licensed customers. Trisul automatically creates an online feed of currently observed downstream AS numbers based on BGP routing information from outside vantage points. Set this to the value *downstream_origin_as.txt* and configure the Geo plugin for automatic updates. For simpler applications see the parameter [HomeASNumbers](/docs/ag/context/home_networks)<br/>Feature used in ISP environments  |
| Use64BitHostByteOrder       | FALSE    | Some netflow implentations incorrectly send 64 bit counters in template fields as two 32 bit fields in host byte order. If you are seeing bizzarely large numbers for bandwidth, bytes, and packets – try setting this to TRUE   |
| MeterTosAsDSCP              | TRUE     | Meter TOS byte as 6-bit DSCP + 2-bit ECN. This is then mapped to DSCP values in Trisul UI such as for example<br/>“**08” → “CS1/AF11-13”<br/>“0A” → “CS1/AF11-13”** |
| SmartNATRemoval             | TRUE     | Set this to TRUE in firewall environments. When set to TRUE Trisul analyzers Netflow records and always selects the correct IP addresses to reflect the `internal` IPs rather than the public `NAT IP` |
| Home Prefixes File          |          | A Trisul routes database or a CSV file containing all prefixes to be treated as home or downstream prefixes. Typically this file is named 0.0.0.0_routes.sql3 setup during configuraiton for ISP deployment<br/>**Feature used in ISP environments** |
| AutoloadPreviousTemplates   | FALSE    | When set to `true` Trisul will reload the most recently known netflow template database and immediately start processing instead of waiting for templates. Use this option in networks where template intervals are long |
| PrintRecords                |          | Used in DDoS report mode to print raw netflow records automatically, Do not set this option manually |
| TagFlowsWithHTTPHostname | FALSE | Some NetFlow like Cisco SD-WAN can add HTTP/S hostnames to the template. Turn this option on to tag flows with HTTP Hostnames | 
| TemplateKeyPolicyV9 |  | Policy to handle v9 Templates, use this to handle vendor variations <ul><li>source-id</li><li>source-port</li><li>source-port-if-source-id-zero</li></ul>  | 
| AddHalfNATEdge |  FALSE | Add an EDGE to map a NAT mapping. Use only if required in IPDR mode. Mostly you dont need this |
| AllowRunningCounts |  FALSE | Use with some vendors like Checkpoint, who tend to use running counters when Live Flow Timeout is enabled. When this option is set the NetFlow plugin handles running byte and packet counts in flow records. *AllowRunningCounts* must be only used with *InflightTokens*=1 (single threaded)  See InflightTokens parameter in [Probe Config file > Tuning](/docs/ref/trisulconfig#tuning) |


## Sampling rates

Flow sampling is a technique used by very busy devices to reduceCPUload. If you confiygure a sampling rate of*128*, the device will only process every 128 packets. InIPFIXtechnologies the sampling rate is typically sent in an*options template*. This section provides a manual way to configure sampling rates per router in the event you are not able to setup the options template. This is not a replacement for configuring sampling on the router or enabling the options template.

Add a separate line for each router as shown below

```html
<SamplingRates>
    <Rate router="180.179.9.2"   rate="128"  />
</SamplingRates>
```

### Default sampling rate

To create a default sampling rate for all routers which do not have an explicit sampling rate set, use the IP address 0.0.0.0. For example to configure a sampling rate of 1000 for all routers. Use 

```html
<SamplingRates>
    <Rate router="180.180.9.2"   rate="128"  />
    <Rate router="0.0.0.0"   rate="1000"  />
</SamplingRates>
```

## Advanced

### Static Templates

Typically you dont need to use this section. We have used this section in the past to address various firmware bugs in some devices which did not export Netflow templates correctly. Templates fields specified in this section will override those received on the network.
