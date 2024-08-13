---
sidebar_position: 4
---

# UI Elements

This section contains a quick overview of the user interface elements
used by Trisul.

## Analysis Forms

These forms have a striped background throughout the app.

- You can collapse the form for analysis results.
- You can expand the form to tweak your analysis.

In the sample form below, you can notice the *Hide* button on the top
right corner.

![](images/dashboards/hidesearchform.png)

*Figure: Analysis Form Showing Hide Button*



## Toolbars

The toolbar area is the big title area at the top.There are two options
available currently.

- PDF -\> Click to convert the current page into PDF report.

- Retro FAQ -\>Name the analysis and add it to the
  [Q&A](/docs/ug/cg/retrofaq)

Sample form shows the analysis

![](images/dashboards/pdfretrofaq.png)

*Figure: Showing Analysis Options*

## Packets and Flows Drilldown Buttons

In the sample form below,common cues to indicate that you can view
related flows or download a PCAP is mentioned.

![](images/dashboards/packetsnflowsdrilldown.png)

*Figure: Showing Packets and Flows Drilldown Buttons*

### Using Search

You can use the *Search* tool to find items of interest.

> You can :

- Search by an IP address, Port number, etc.
- Search by user labels like host names, alert signature names, etc.
- Directly type in a trisul key like p-0050

> If you wish to search for resources like HTTP URLs and DNS
> names, you will be redirected to their search forms which are more
> flexible. See [URL Resources](/docs/ug/resources/url) and [DNS Resources](/docs/ug/resources/dns)

## The Search Box

The search box is located below the side menu bar as shown here.

Enter some search text here and press *Enter*

![](images/dashboards/searchbar.png)

*Figure: Search Box*

## Search Results

The *search results* page contains all items that might match your
query.

1. Searching for amazon.com will return x.y.amazon.com.
2. Searches are case insensitive

Click on the View button to explore further

![](images/dashboards/searchresult.png) 

*Figure: Search Result Page*

## AutoComplete

All relevant form fields in Trisul are autocomplete capable. This
functionality is triggered when you enter three or more characters.

![](images/dashboards/autocomplete.png)

*Figure: Showing AutoComplete Option of Long Term Analysis Form*

## Charts and Chart Interactions

Trisul supports a number of intuitive chart surfaces that render the statistical data in a rich interactive way. And you can drilldown on the chart using module icons and legend table. Many modules allow you to select a chart surface and enables you to view the data at that particular point of time.

### Module Icons

![](images/moduleicons.png)

*Figure: Module Icons*

- **PDF**- Click on the PDF icon on the top righ corner of the module to download the chart data in PDF.

- **Key Dashboard**- Click on the Key Dashboard icon to view and edit the Key details of this module

- **Live SNMP**- To view the Live data i.e., until the latest one minute click Live SNMP icon and it gets refreshed every 10 seconds. This icon is not available on all modules rather on relevant ones.

- **Menu**- Click on the three lines icon and select from the list of download options SVG, PNG and CSV to donwload in that particular format

- **Home**- Click on the home icon to reset zoom.

### Legend Table

Click on a chart item in the **legend** area to `show/hide` the item

For example in the following chart both Inbound and Outbound items in the legend are enabled.

| ![](images/legendtable.png) |
| --------------------------- |

*Figure: Showing Legend Table in a Module*

You can click on any of the items like Inbound or inbound in the legend area to **hide or unhide** that data from the chart like in these examples.

| ![](images/legend2.png) | ![](images/legend3.png) |
| ----------------------- | ----------------------- |

*Figure: Showing Hide/Unhide data from Chart using Legend Table Meters*

Click on the `Expand Legend` spot to get a detailed legend  
Auto refresh the charts via Ajax calls

### Tooltip

Hover your mouse over an item such as a PIE slice or line graph and get a tooltip with values at different intervals.

![](images/netflowvolume.png)

*Figure: Showing Tooltip in a Graph Module*

### Key Dashboard

You can click on any key items on the chart and it will take you to the [Key dashboard](/docs/ug/ui/key_dashboard) of that Key.

![](images/keydashboard1.png)

*Figure: Key Dashboard*

### Retro Charts

Click on any of the module toolbar and click View historical to view the retro chart of that particular module

![](images/retrochart2.png)

*Figure: View Historical Option from Module Toolbar*

Select a time frame and view the retro chart for that particular past time period.
  ![](images/retrochart.png)

*Figure: Retro Chart with Time Frame*

The retro charts are even more interactive :  

- Click and select an area  

- Zoom into a selection  

- Pan left and right  

- Use the selected time interval to perform drill down retro analysis

### Trisul Chart Surfaces

These are some of the intuitive chart surfaces in Trisul. 

|                                    |     |                               |
| ---------------------------------- | --- | ----------------------------- |
| PIE                                |     | MRTG                          |
| ![](images/charts/pie.png)         |     | ![](images/charts/mrtg.png)   |
| STACKEDAREA                        |     | LINE                          |
| ![](images/charts/stackedarea.png) |     | ![](images/charts/line.png)   |
| SQUARELINE                         |     | BUBBLE                        |
| ![](images/charts/squareline.png)  |     | ![](images/charts/bubble.png) |
| BAR                                |     | AREA                          |
| ![](images/charts/bar.png)         |     | ![](images/charts/area.png)   |
|                                    |     |                               |

## Download PCAP button

On tables featuring a “Download PCAP” button, clicking on the button
will result in Trisul computing a “Packet Scan plan” and then
downloading all of the requested entities into a single merged PCAP
file.
