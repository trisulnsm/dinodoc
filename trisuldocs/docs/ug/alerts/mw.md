---
sidebar_position: 6
---

# Malware and Blacklist Alerts

**This feature requires the Trisul Badfellas plugin**  
See [Trisul Badfellas](/docs/ug/install/badfellas)

The Trisul Badfellas plugin adds comprehensive threat detection 
capabilities to Trisul based on multiple blacklists which are included 
with the plugin

Some of the alerts

1. Communication with known malicious IPs
2. Retrieving malware from malicious URLs
3. Falling victim to Phishing sites
4. Trying to query DNS for known malicious domain names

## What Can You Do With These Alerts ?

You can get useful reports like

1. Top 100 hosts with malware in my enterprise
2. Infection trends over time
3. Breakup of malware types (ZeUS, Gumblar, GhostNet, etc)
4. Retrieve suspected malware flows
5. Pull suspected malware packets into Wireshark or Unsniff
6. Script using TRP

## Viewing Blacklist Alerts

To view *Blacklist Alerts*,

:::info navigation
Go to Alerts-> Blacklist
:::

A table of alerts generated for different signature IDs are listed 

| Column           | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| Signature ID     | A unique identifier for the specific threat or attack pattern detected                        |
| Priority         | The level of severity assigned to the alert                                                   |
| Count            | The number of times the threat or attack pattern has been detected on that Signature ID       |
| Description      | A brief summary of the threat or attack pattern                                               |
| Last Seen IST    | The timestamp in IST (Indian Standard Time) when the threat or attack pattern was last detected                                                                                                           |
| Probe            | The probe that captured the traffic of the associated alert                                   |
| Drilldown Button | Click on the Drilldown button to view the edge graph of the Signature ID, and to delete that alert                                                                                                                |

By clicking on the Signature ID and the count value you will be able to view a list of recent 1000 alerts grouped by for that particular Signature ID.
By clicking on the Priority value on the column, you will be able to view a list of recent 1000 alerts grouped by for that particular                        
### Group By Options

![](image/groupbyoptions_mw.png)  
*Figure: Group By Options for the Blacklist Alerts*

By clicking on the *Group by Options* on the top of the table, you can filter and group the generated *Blacklist Alerts* by various groups including source IP, destination IP, priority, classification, description, and view all alerts.


## Evasions

Trisul is resistant to :

- TCP frag attacks – it reassembles TCP before constructing the URL requested & HTTP Host
- Both DNS requests and replies are checked for any malicious domains
- Minor permutations in domains and URLs are automatically handled.