# Introduction to IPDR 

Trisul IPDR will be of interest mainly to ISPs who seek to comply with regulatory mandates pertaining to 
- Storing of IP logs
- NAT logging
- AAA logging


However, it is not exclusive for ISPs, various stakeholders also utilize Trisul IPDR including LEAs, Network Admins, Security teams etc.

The name for this feature is **Trisul IPDR** ( IP Data Record)

:::warning[Compliance note]
Every jurisdiction around the world may have their own logging mandates. This page cites the DoT India mandate as an example, however the product can be used in any jurisdiction where similar mandates are found. 
:::

## DoT (India) Compliance

As per Dept of Telecommunications, India. All Internet Service Providers
and holders of Mobile UMTS/CMTS/UL licensees are required to store the
following information on a per flow basis.

> (i) IPDR Parameters for IPv4/IPv6 to be stored in respect of Wireless/Wireline internet services.  
> (ii) Parameters to be stored in SYSLOG of Network Address Translation (NAT)

| ![](images/IPDRLetter-4.png) | ![](images/IPDRLetter-5.png) |
| ---------------------------- | ---------------------------- |
| ![](images/IPDRLetter-6.png) | ![](images/IPDRLetter-7.png) |

*See DoT Guideline no 8520-01/98-LR/Vol.(IX) Pt 1 dated 16/12/2021 Parameters for Internet Protocol Detail Record (IPDR) and SYSLOG of Network Address Translation (NAT)*

#### Parameters to be collected

- Customer information obtained during customer acquisition.
- User id
- Start time of flow
- End time of flow
- Source ip address
- NAT source IPv4 or IPv6 address (if NAT is used)
- Source port
- NAT source port (if NAT is used)
- Destination IPv4 of IPv6 address
- Destination Port

The compliance requirement calls the above information IPDR and NAT
Syslog. Ideally they should be combined into one simple comprehensive
per-flow log. This is what Trisul IPDR provides.

## Obtaining Data Telemetry

The Trisul IPDR solution can accept a variety of inputs to create and
maintain the IPDR log for compliance. The following diagram explains the
architecture.

![](images/obtainingdatatelemetry.png)
*Figure: Accepts Netflow, Sflow, IPFIX, NAT and Radius syslog*

