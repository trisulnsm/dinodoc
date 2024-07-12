---
sidebar_position: 6
---

# Malware and Blacklist alerts

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

## What can you do with these alerts ?

You can get useful reports like

1. Top 100 hosts with malware in my enterprise
2. Infection trends over time
3. Breakup of malware types (ZeUS, Gumblar, GhostNet, etc)
4. Retrieve suspected malware flows
5. Pull suspected malware packets into Wireshark or Unsniff
6. Script using TRP

## Viewing blacklist alerts

:::note navigation

Select Alerts → Blacklist

:::

## Evasions

Trisul is resistant to :

- TCP frag attacks – it reassembles TCP before constructing the URL requested & HTTP Host
- Both DNS requests and replies are checked for any malicious domains
- Minor permutations in domains and URLs are automatically handled.
