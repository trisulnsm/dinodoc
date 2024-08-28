---
sidebar_position: 8
---

# Payload Search



The *Payload Search* Tool is a feature in Trisul that enables searching of network traffic for specific patterns, leveraging full packet capture capabilities. This section provides a comprehensive guide to using the *Payload Search* Tool, including its search capabilities and functionality.

The search capabilities of the *Payload Search* tool includes searching for,

1. Text patterns UTF-8 and Unicode also supported
2. Binary
3. MD5s
4. File content

### How This Works

> Make sure you have full packet capture and flow tracking enabled in the [trisulConfig.xml](/docs/ref/trisulconfig) file

Trisul will reassemble and check all TCP streams in both directions for
a match. If HTTP compression and chunked encoding are used, they are
also factored in. Finally Trisul will show you a list of flows that
match along with a highlighted context.


## How to Use

To access *Payload Search*,

:::note navigation

Go to Tools -> Select Payload Search

:::

This opens up page with *Retro Time Selector* and a box of tabs for *Search Criteria* where you can define a time range and search for specific data.

### Retro Time Selector

The *Retro Time Selector* module provides a graphical representation of aggregate bandwidth (*TOTALBW*) utilization over user-defined time intervals. 

![](images/payloadsearch1.png)
*Figure: Retro Time Selector for Payload Search*

This feature enables users to visually inspect and select specific time ranges within the chart, with pre-configured options for hourly, daily, and weekly analyses, as well as customizable date ranges via selection from tabs.

### Search Criteria

The Payload Search Tool enables searching for specific data within network packet payloads, allowing for the identification of text strings, binary data, MD5 hashes, and file content.

![](images/payloadsearch2.png)
*Figure: Payload Search*

You can use the *payload search* form to search for a pattern or a file with the help of the following fields and their description.


| Field         | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| Search Text   | Enter a text string. Can be ASCII, Unicode, UTF-8.                              |
| Search Binary | Enter binary into the box as a series of HEX characters. Eg, 80 A0 A1 88 01 01 .. (whitespaces are ignored)                                                                          |
| Search MD5s   | Enter a list of content MD5 hashes. One MD5 per line, (whitespaces are ignored) |
| Select File   | Upload a file and search for matches                                            |

Click **Search Everything**, you will be shown a list of flows that match. You can also click on the small down arrow icon on the *Search Everything* button which allows you to search the firt 1 MB of each flow.

### Content Inspection Width Configuration

The *Content Inspection Width* parameter defines the limits for deep packet inspection (DPI) in terms of:
Deep Packet Inspection Time Limit: The maximum duration for which DPI is performed on a packet stream.
Deep Packet Inspection Size Limit: The maximum payload size (in KB,MB) that is inspected.

You can find the *Content Inspection Width* at the bottom of the *Payload Search* form with an *Edit* button as in this figure.

![](images/dpicontentwidth.png)  
*Figure: Content Inspection Width*

You can click *Edit* button at the bottom of the *Payload Search* form. This will take you  to the *Web Trisul* page for configuration.


![](images/contentinspectionwidth.png)
*Figure: Configure Content Inspection Width*

Once providing the DPI time limit and size limit, click *Save*

Configuring Content Inspection Width is beneficial when working with large PCAP files that span extended periods or contain vast amounts of data. By adjusting these limits, users can optimize DPI performance and focus on relevant packet content and reduce processing overhead.

## Search Result

Upon executing a search query, the *Payload Search* Tool displays a list of matching network flows in:  
**Highlighted Pattern Context** : Visual indicators pinpointing the matched pattern within the packet payload, facilitating contextual understanding.  
**Flow Metadata** : Relevant flow information, enabling informed decision-making regarding further investigation.  

Users can then select the **Download PCAP** option to retrieve the associated packet capture file for further detailed examination using specialized tools and offline investigation.

## API Access

Using the [Trisul Remote Protocol](/docs/trp/) you can even automate the whole process.
