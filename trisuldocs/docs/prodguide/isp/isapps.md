---
sidebar_position: 2
---

# ISP Apps and Dashboards

After you configure BGP, install the Trisul apps that provide the Trisul ISP Analytics dashboards.

## Install Trisul APPs

:::note Navigation
Log in as admin and go to **Web Admin → Manage → Apps**.
:::

Install the **Meta-ISP** app. It installs the core ISP apps and adds an **ISP** menu with ISP Overview, Router Geo Map, Peering Analytics, Peering Analytics Drilldown, Country Analytics, Country Analytics Drilldown, Prefix External Analytics and Prefix Analytics Drilldown. No ISP app is preinstalled. For how to install an app, see [Apps](/docs/guide/ag/webadmin/apps). The table describes the dashboards.

| App | What it provides |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [ISP Country Analytics](/docs/prodguide/isp/isp_analytics_dashboard#isp-country-analytics)             | Provides country mappings for routers and interfaces                                                   |
| [ISP External Prefixes Analytics](/docs/prodguide/isp/isp_analytics_dashboard#prefix-analytics)        | Provides external prefix mappings for routers and interfaces                                           |
| [ISP Overview](/docs/prodguide/isp/isp_analytics_dashboard#isp-overview)                               | Provides overall stats about the Active AS, prefixes, paths, total routers, interfaces and countries |
| [Path Analytics](/docs/prodguide/isp/isp_analytics_dashboard#path-analytics)                           | Shows the top used AS Paths for a router and interface                                                 |
| [Peering Analytics](/docs/prodguide/isp/isp_analytics_dashboard#peering-analytics)                     | Provides ASN Traffic mapping for routers and interfaces                                                |
| [Peering Analytics Drilldown](/docs/prodguide/isp/isp_analytics_dashboard#peering-analytics-drilldown) | Provides deeper analysis of AS with interfaces                                                         |
| [Prefix Analytics Drilldown](/docs/prodguide/isp/isp_analytics_dashboard#prefix-analytics-drilldown)   | Provides deep analysis of a prefix with interfaces                                                     |
| [Country Analytics Drilldown](/docs/prodguide/isp/isp_analytics_dashboard#country-analytics-drilldown) | Provides deep analysis of top countries with interface                                                 |
| [Sankey Crossdrill](/docs/prodguide/isp/isp_analytics_dashboard#sankey-crossdrill)                     | Provides sankey charts by matching a cross-key filter with any metric                                  |

Path Analytics and Sankey Crossdrill are not part of Meta-ISP; install them separately. Other optional apps: ISP OTT App Analytics (with the OTT Analytics and Passive DNS Extractor apps), ISP Location Analytics, Customer AS Analytics, IXP Analytics, the SNMP Poller apps and ISP Dashboard Pack.
